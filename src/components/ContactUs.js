import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Contact Me For Any Work Or Suggestions
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Linked in :
                  {resumeData.linkedinId}
                </h4>
                <h4>  
                  Email : 
                  {resumeData.emailId}
                </h4>
                <h4>  
                  Github : http://github.com/omaro454
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}