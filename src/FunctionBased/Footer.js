import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>
  
          <div>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="twitter" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="google" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="instagram" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href='' className='me-4 text-reset'>
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>
  
        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon="gem" className="me-3" />
                  India Tour
                </h6>
                <p>
                We are passionately committed to Total Quality Travel, with continual delivery of value added services. We uphold the highest ethical standards and believe in creating new benchmarks in the industry."
                </p>
              </MDBCol>
 
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Our Best Tours </h6>
                <p>
                  <a href='http://localhost:3000/Itineraries/15#!' className='text-reset'>
                    Leh-ladakh 
                  </a>
                </p>
                <p>
                  <a href='http://localhost:3000/Itineraries/14' className='text-reset'>
                    Kerala
                  </a>
                </p>
                <p>
                  <a href='http://localhost:3000/Itineraries/11' className='text-reset'>
                    Char Dham yatra
                  </a>
                </p>
                <p>
                  <a href='http://localhost:3000/Itineraries/16' className='text-reset'>
                    Himachal Pradesh
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <a href='http://localhost:3000/HomePage' className='text-reset'>
                    Home
                  </a>
                </p>
                <p>
                  <a href='http://localhost:3000/CategaryMasters' className='text-reset'>
                  All Categaries
                  </a>
                </p>
                <p>
                  <a href='http://localhost:3000/ContentSearchTrial' className='text-reset'>
                    Search
                  </a>
                </p>
                <p>
                  <a href='#!' className='text-reset'>
                    Help
                  </a>
                </p>
              </MDBCol>
  
              <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Mumbai, MH 411209, IND
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  indiatour@idt.ac.in
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> + 91 9328993040
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> + 91 9328993041
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
  
        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2023 Copyright:
          <a className='text-reset fw-bold' href='https://Indiatour.com/'>
            Indiatour.com
          </a>
        </div>
      </MDBFooter>
      );
    }