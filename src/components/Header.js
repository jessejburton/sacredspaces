import React from "react"
import { Link } from 'gatsby';

export default (props) => (
  <React.Fragment>
    <h1>{props.title}</h1>
    <ul>
      <li><Link to="/">home</Link></li>
      <li><Link to="/about/">about</Link></li>
      <li><Link to="/contact/">contact</Link></li>
    </ul>
  </React.Fragment>
)