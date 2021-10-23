import React from 'react';
import about from '../../images/team-img-3.jpg';
import './Doctor.css'
import doc1 from '../../images/doc4.jpg'
import doc2 from '../../images/doc2.jpg'
import doc3 from '../../images/doc3.jpg'
import doc4 from '../../images/doc4.jpg'
import team1 from '../../images/team-img-1.jpg'
import team2 from '../../images/team-img-2.jpg'
import team3 from '../../images/team-img-3.jpg'

const Doctor = () => {
    return (
      <div className="container doctor">
  <div className="row my-5 justify-content-evenly ">
         <div className="col-md-3">
         <img  className="w-100" src={about} alt="" />
         </div>
         <div className="col-md-8 border">
        <p className="fs-5 fst-italic lh-lg">Hospital management system are very respectavle to us ,we always try our best . Non habent claritatem in sitamcon quat duis autem facilisis at vero eros nibh. Euismod tincidunt ut laoreet vel eum iriure qui sequitur mutatioco nsuetudi um. Lectorum mirum est notare uis autem vel eum iriure dolor in. Hendrerit in vulputate velit esse molestie consequat, vel illum. Dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto

Iusto odio dignissim qui blandit praesent luptatum zril delenit augue duis dolore te feugait nulla facilisi. lacerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eor um claritatem. Investigationes demonstraverun lectores legere me lius quod ii legunt saepius vel illum dolore eu feugiat nulla facilisis at vero. Consectetuer </p>
         </div>
          <p className="fs-5 fst-italic lh-lg">usto odio dignissim qui blandit praesent luptatum zril delenit augue duis dolore te feugait nulla facilisi. lacerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eor um claritatem. Investigationes demonstraverun lectores legere me lius quod ii legunt saepius vel illum dolore eu feugiat nulla facilisis at vero
          usto odio dignissim qui blandit praesent luptatum zril delenit augue duis dolore te feugait nulla facilisi. lacerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eor um claritatem. Investigationes demonstraverun lectores legere me lius quod ii legunt saepius vel illum dolore eu feugiat nulla facilisis at vero</p>
        </div>
        <h4 className="fs-1    fst-italic text-center text-primary">Meet our professional</h4>

      <div className="row my-5 justify-content-between">
<div className="col-md-3">
<img  className="img-fluid" src={doc1} alt="" />
<h3 clas="fst-italic">Ahamr Milon</h3>
<h2 className="fst-italic fs-5 text-primary">Cardiology</h2>
</div>
<div className="col-md-3">
<img className="img-fluid" src={doc2} alt="" />

<h3 className="fst-italic">Mark Redin</h3>
<h2 className="fst-italic fs-5 text-primary">Cardiology</h2>
</div>
<div className="col-md-3">
  <img className="img-fluid" src={doc3} alt="" />
  <h3 className="fst-italic">Maj Hand</h3>
  <h2 className="fst-italic fs-5 text-primary">Cardiology</h2>
</div>
<div className="col-md-3">
  <img className="img-fluid" src={doc4} alt="" />
  <h3 className="fst-italic">Roban </h3>
  <h2 className="fst-italic fs-5 text-primary">Cardiology</h2>

</div>
      </div>
      <div className="row my-auto">
       <div className="col-md-3">
       <img  className="img-fluid" src={doc3} alt="" />
<h3 clas="fst-italic">Ahamr Milon</h3>
<h2 className="fst-italic fs-5 text-primary">Cardiology</h2>
       </div>
       <div className="col-md-3">
       <img  className="img-fluid" src={team3} alt="" />
<h3 clas="fst-italic">Khrusu Milon</h3>
<h2 className="fst-italic fs-5 text-primary">Cardiology</h2>
       </div>
       <div className="col-md-3">
       <img  className="img-fluid" src={team2} alt="" />
<h3 clas="fst-italic">Nirob Milon</h3>
<h2 className="fst-italic fs-5 text-primary">Cardiology</h2>
       </div>
       <div className="col-md-3">
       <img  className="img-fluid" src={team1} alt="" />
<h3 clas="fst-italic">Ahamr Sawmi</h3>
<h2 className="fst-italic fs-5 text-primary">Cardiology</h2>
       </div>

      </div>
</div>
 


      
    );
};

export default Doctor;