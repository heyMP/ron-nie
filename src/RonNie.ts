import { css, html, LitElement, unsafeCSS } from 'lit';
import { property } from 'lit/decorators.js';

export type Emotion = 'happy' | 'unhappy' | 'frustrated' | 'confused';

export class RonNie extends LitElement {
  @property({ type: String, reflect: true }) emotion: Emotion = 'happy';

  static styles = css`
    :host {
      --_size: var(--ron-nie-size, 15rem);
      display: block;
    }

    .base {
      background-size: cover;
      height: var(--_size);
      width: var(--_size);
      border-radius: 50%;
      border: 5px solid var(--ron-nie-border-color, red);
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
    }

    :host([emotion='happy']) .base {
      background-image: url(${unsafeCSS(
        new URL('../../assets/happy.jpeg', import.meta.url)
      )});
    }

    :host([emotion='unhappy']) .base {
      background-image: url(${unsafeCSS(
        new URL('../../assets/unhappy.jpeg', import.meta.url)
      )});
    }

    :host([emotion='frustrated']) .base {
      background-image: url(${unsafeCSS(
        new URL('../../assets/frustrated.jpeg', import.meta.url)
      )});
    }

    :host([emotion='confused']) .base {
      background-image: url(${unsafeCSS(
        new URL('../../assets/confused.jpeg', import.meta.url)
      )});
    }
  `;

  render() {
    return html`<div class="base" part="base"></div>`;
  }
}
