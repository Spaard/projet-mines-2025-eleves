/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@kor-ui/kor/components/button';
import '@kor-ui/kor/components/input';

/**
 * A footer element.
 *
 */
@customElement('beep-footer')
export class BeepFooter extends LitElement {
  static override styles = css`
    footer {
        background-color: #c8c8c8;
        padding: 12px;
    }

    input {
        border-radius: 8px;
        width: 400px;
        height: 60px;
        margin: 20px;
    }

    button {
        border: none;
        border-radius: 8px;
        background-color: #007bff;
        color: white;
        padding: 12px 24px;
        cursor: pointer;
    }
  `;

  override render() {
    return html`
      <footer>
        <form>
          <div>
            <kor-input id="message" name="message" label="Message" value="Value"></kor-input>
          </div>

          <div>
            <kor-button label="Envoyer" color="Primary"></kor-button>
          </div>
        </form>
      </footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'beep-footer': BeepFooter;
  }
}
