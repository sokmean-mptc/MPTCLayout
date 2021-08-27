import videojs from 'video.js'
import playlist from 'videojs-playlist'
import 'videojs-playlist-ui'
import 'videojs-youtube'

const video_playlist = document.getElementById('video-playlist')
if ( video_playlist ) {
    const data_slick = video_playlist.dataset.slick
    const data_playlist = JSON.parse(video_playlist.dataset.playlist)
    let player = videojs('video-playlist')
    
    // const key = 'AIzaSyBbTDKtoivLuALOMTXcUViLnQZxNCuHdeA'
    // const playlist_id = 'PL4CqdQEZBAjWshJ21rV177FxYC4itqYER'
    // const playlist_id = 'PLNF8K9Ddz0kKfujG6blfAxngYh_C66C_q'
    // let url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&key='+key+'&playlistId='+playlist_id
    // const xhttp_request = new XMLHttpRequest()
    // xhttp_request.open('GET', url)
    // xhttp_request.send()
    // xhttp_request.onreadystatechange = (e) => {
    //     if (xhttp_request.readyState==4) {
    //         const items = JSON.parse(xhttp_request.responseText).items
    //         let data = []
    //         for (const key in items) {
    //             if (Object.hasOwnProperty.call(items, key)) {
    //                 const element = items[key];
    //                 data.push({
    //                     name: element.snippet.title,
    //                     description: element.snippet.description,
    //                     sources: [
    //                         {
    //                             src: 'https://www.youtube.com/watch?v='+element.snippet.resourceId.videoId,
    //                             type: 'video/youtube'
    //                         }
    //                     ],
    //                     thumbnail: element.snippet.thumbnails.standard.url,
    //                     poster: element.snippet.thumbnails.standard.url
    //                 })
    //             }
    //         }
    //     }
    // }
    player.playlist(data_playlist)
    player.playlistUi({
        className: 'yt-item-list'
    })

    const row = document.querySelector('.vjs-playlist-item-list')
    row.dataset.slick = data_slick
    row.removeChild(row.lastElementChild)
    row.classList.add('row')
    row.classList.add('gx-2')
    row.classList.add('gx-md-3')
    
    const vjs_playlist_item = document.querySelectorAll('.vjs-playlist-item')
    vjs_playlist_item.forEach(item => {
        item.classList.add('px-1')
        item.classList.add('px-md-2')
        let item_inner = item.childNodes[0]
        item_inner.childNodes[0].classList.add('d-none')
        item_inner.childNodes[1].classList.add('d-none')
        item_inner.childNodes[2].classList.add('d-none')

        let title = item_inner.childNodes[2].childNodes[1].textContent
        let url_image = item_inner.childNodes[0].src
        let ratio = document.createElement('div')
        ratio.className = 'ratio ratio-16x9 mb-0 mb-1 mb-sm-1 mb-lg-2'
        let bg_img = document.createElement('div')
        bg_img.style.backgroundImage = 'url('+url_image+')'
        ratio.appendChild(bg_img)

        let figcaption = document.createElement('figcaption')
        figcaption.className = 'figcaption'
        let h5 = document.createElement('h5')
        h5.className = 'title mb-0 mb-1 mb-sm-1 mb-lg-2'
        h5.textContent = title
        figcaption.appendChild(h5)

        item_inner.appendChild(ratio)
        item_inner.appendChild(figcaption)
    })
    $('.vjs-playlist-item-list').slick()
}
