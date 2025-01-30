/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * A header element.
 *
 */
@customElement('beep-header')
export class BeepHeader extends LitElement {
  static override styles = css`
    header {
      background-color: #c8c8c8;
      padding: 12px;
    }

    input {
      border-radius: 8px;
      width: 300px;
      height: 40px;
      margin: 20px;
    }
  `;

  override render() {
    return html`
      <header>
        <label for="userId">User</label>
        <input class="input-md" type="text" id="userId" name="userId" />
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'beep-header': BeepHeader;
  }
}
