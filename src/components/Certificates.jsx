export default function Certificates() {
  const certificates = [
    '/cet1.png',
    '/cet2.png',
    '/cet3.png',
    '/cet4.png',
    '/cet5.png',
    '/cet6.png',
    '/cet7.png',
    '/cet8.png',
    '/cet9.png',
    '/cet10.png',
    '/cet11.png',
    '/cet12.png',
    '/cet13.png',
    '/cet14.jpg'
  ]

  return (
    <section id="certificates" className="section certificates-section">
      <div className="container">
        <h2 className="section-title">CERTIFICATES</h2>
        <div className="certificates-scroll-container">
          <div className="certificates-scroll">
            {certificates.concat(certificates).map((cert, index) => (
              <img key={index} src={cert} alt={`Certificate ${index + 1}`} className="certificate-image" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
