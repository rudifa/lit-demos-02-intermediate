// https://github.com/open-wc/lit-demos/blob/master/02-intermediate/06-light-dom.js

import { LitElement, html } from 'lit-element';

class LightDom extends LitElement {
  static get properties() {
    return {
      text: { type: String },
    }
  }

  /**
   * If you don't want to use shadow DOM, you can overwrite the 
   * `createRenderRoot` method. By default, LitElement sets the
   * render root to the shadowDom.
   * This is usually used for small leaf-components.
   */

  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.text = "I'm rendered in the light DOM!";
  }

  render() {
    return html`
      <h5>
        ${this.text}
      </h5>
    `;
  }
}

customElements.define('light-dom', LightDom);

class ShadowDom extends LitElement {
  static get properties() {
    return {
      text: { type: String },
    }
  }

  constructor() {
    super();
    this.text = "I'm rendered in the shadow DOM!";
  }

  render() {
    return html`
      <h5>
        ${this.text}
      </h5>
    `;
  }
}

customElements.define('shadow-dom', ShadowDom);