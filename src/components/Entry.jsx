export default function Entry(props) {
  return (
    <article className="entry__card">
      <div className="entry__main-image-container">
        <img 
          className="entry__main-image"
          src={ props.img.src } 
          alt={ props.img.alt }  
        />
      </div>

      <div className="entry__content">
        <div className="entry__content-line">
          <img className="entry__content-marker-icon" src="./images/marker.png" alt="Marker icon" />
          <span className="entry__content-marker-text">{ props.country }</span>
          <a className="entry__content-link" target="_blank" href={ props.googleMapsLink }>View on Google Maps</a>
        </div>
        <h2 className="entry__title">{ props.title }</h2>
        <p className="entry__date">{ props.dates }</p>
        <p className="entry__description">{ props.text }</p>
      </div>
    </article>
  )
}