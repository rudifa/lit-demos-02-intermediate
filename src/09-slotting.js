// https://github.com/open-wc/lit-demos/blob/master/02-intermediate/09-slotting.js

import { LitElement, html } from 'lit-element';

class Slotting extends LitElement {
  render() {
    return html`
      <card-element>
        <h3 slot="title">Hello universe</h3>
        <p slot="details">This is some text</p>
        <p>any other content</p>
      </card-element>
    `; 
  }
}

customElements.define('slotting-demo', Slotting);

class CardElement extends LitElement {
  render() {		
    return html`
      <div class="card-wrapper">
        <slot name="title"></slot>
        <slot name="details"></slot>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('card-element', CardElement);
