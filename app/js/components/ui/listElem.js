import React from 'react'

const ListElem = (data) => {

    const mapUrl = 'https://www.google.com/maps/embed/v1/search?key=AIzaSyC0VzU88sXQ2iNhEMDbciaBwZ8iBZ4dpCM&q=' + data.elemData.properties.place.split('of')[1]
    // todo should be added to store to handle this
    // todo this logic added only because i wanted to show some UI skills (css, animations, transitions)
    const expandClick = (event) => {
        if(event){
            var _mapWrap = event.target.parentNode.parentNode.parentNode.children[0].children[1]
            if(event.target.parentNode.parentNode.parentNode.className.search('expanded') !== -1){
                event.target.parentNode.parentNode.parentNode.className = event.target.parentNode.parentNode.parentNode.className.split(' expanded')[0]
                _mapWrap.innerHTML = ''
            }
            else{
                event.target.parentNode.parentNode.parentNode.className += ' expanded'
                _mapWrap.innerHTML = '<iframe width="100%" height="95%" src="' + mapUrl + '"></iframe>'
            }
        }
    }

    const returnDate = (date) => {
        return new Date(date).toLocaleString()
    }

    return (
        <div className="list-elem">
            <div className="list-elem-inner">
                <div className="list-elem-main">
                    <h2>{data.elemData.properties.title}</h2>
                    <p> <span>Place:</span> {data.elemData.properties.place}</p>
                    <p> <span>Time:</span>  {returnDate(data.elemData.properties.time)}</p>
                    <p> <span>Magnitude:</span>  {data.elemData.properties.mag}</p>
                    <p><a href={data.elemData.properties.url} target="_new">Go to earthquake page > </a></p>
                </div>
                <div className="list-elem-map">
                </div>
                <div>
                    <button onClick={ expandClick } className="expand-btn">  </button>
                </div>
            </div>
        </div>
    )
}

export default ListElem
