import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import { Link } from "gatsby";
import UserLinks from "../UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const url = config.siteRss;
    const { userLinks } = this.props;
    const { copyright, fixedFooter } = config;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={fixedFooter ? "footer footer-fixed" : "footer"}>
            <div className="copyright">© Evolution Lawyers Limited 2018. All rights reserved.</div>
            <div className="links">
                <a href="/static/pdfs/Terms-of-Engagement-effective-4-July-2018.pdf" target="_blank" rel="noopener">Terms of Engagement</a>
                <a href="/static/pdfs/Privacy-Policy-Evolution-Lawyers-as-at-9-July-2018.pdf" target="_blank" rel="noopener">Privacy Policy</a>
                 <a href="/static/pdfs/AMLCFT-Statement-For-Website-21-August-2018.pdf" target="_blank" rel="noopener">AMLCFT Statement</a>
                 <a href="/static/pdfs/Email-Disclaimer-27-November-2018.pdf" target="_blank" rel="noopener">Email Disclaimer</a>
            </div>
      </footer>
    );
  }
}

export default Footer;
