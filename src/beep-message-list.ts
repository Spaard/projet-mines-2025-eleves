/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Task } from '@lit/task';
import './beep-message';

type Message = {
  content: string;
  date: string;
  author: string;
  likes: number;
  liked: boolean;
};

const messages: Message[] = [
  {
    content: 'Hello world!',
    date: "2024-01-29T10:04:24.707Z",
    author: 'Alice',
    likes: 0,
    liked: false,
  },
  {
    content: 'Hello',
    date: "2024-06-29T10:04:24.707Z",
    author: 'Bob',
    likes: 10,
    liked: true,
  },
  {
    content: 'Hello world!',
    date: "2024-01-29T10:04:24.707Z",
    author: 'Alice',
    likes: 0,
    liked: false,
  },
  {
    content: 'Hello world!',
    date: "2024-01-29T10:04:24.707Z",
    author: 'Alice',
    likes: 0,
    liked: false,
  },
  {
    content: 'Hello world!',
    date: "2024-01-29T10:04:24.707Z",
    author: 'Alice',
    likes: 0,
    liked: false,
  },
  {
    content: 'Hello world!',
    date: "2024-01-29T10:04:24.707Z",
    author: 'Alice',
    likes: 0,
    liked: false,
  },
  {
    content: 'Hello world!',
    date: "2024-01-29T10:04:24.707Z",
    author: 'Alice',
    likes: 0,
    liked: false,
  },
  {
    content: 'Hello world!',
    date: "2024-01-29T10:04:24.707Z",
    author: 'Alice',
    likes: 0,
    liked: false,
  },
  {
    content: 'Hello world!',
    date: "2024-01-29T10:04:24.707Z",
    author: 'Alice',
    likes: 0,
    liked: false,
  },
  {
    content: 'Hello world!',
    date: "2024-01-29T10:04:24.707Z",
    author: 'Alice',
    likes: 0,
    liked: false,
  },
  {
    content: 'Hello world!',
    date: "2024-01-29T10:04:24.707Z",
    author: 'Alice',
    likes: 0,
    liked: false,
  },
]

@customElement('beep-message-list')
export class BeepMessageList extends LitElement {
  static override styles = css``;

  _messagesTask = new Task(this, {
    args: () => ["test"],
    task: () => {
      // return fetch("/messages")
      return new Promise<Message[]>((resolve) => {
        setTimeout(() => {
          resolve(messages);
        }, 15000);
      });
    }
  });

  override render() {
    return html`${this._messagesTask.render({
      initial: () => html`<p>Waiting to start task</p>`,
      pending: () => html`<p>Running task...</p>`,
      complete: (messages) => html`${messages.map(message => html`
          <beep-message
            content=${message.content}
            date=${message.date}
            ?liked=${message.liked}
            likes=${message.likes}
            author=${message.author}></beep-message>
        `)}`,
      error: (error) => html`<p>Oops, something went wrong: ${error}</p>`,
    })}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'beep-message-list': BeepMessageList;
  }
}
