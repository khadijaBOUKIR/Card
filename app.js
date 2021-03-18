function card(opImgMedia, opAvatar, opNameInfo, opStatus, opTitleCard, opDescCard){

    let imgMedia = document.querySelector('.img-media');
    let avatar = document.querySelector('.avatar');
    let nameInfo = document.querySelector('.name-info');
    let status = document.querySelector('.status');
    let titleCard = document.querySelector('.title-card');
    let descCard = document.querySelector('.desc-card');

    if(opImgMedia !== ""){
        imgMedia.setAttribute('src', opImgMedia)
    }

    if(opAvatar !== ""){
        avatar.setAttribute('src', opAvatar)
    }
   
    if(opNameInfo !== ""){
        nameInfo.innerHTML(opNameInfo)
    }

    if(opStatus !== ""){
        status.innerHTML(opStatus)
    }

    if(opTitleCard !== ""){
        titleCard.innerHTML(optitleCard)
    }

    if(opDescCard !== ""){
        descCard.innerHTML(opDescCard)
    }

}

module.exports.card = card;