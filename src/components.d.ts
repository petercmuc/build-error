/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
}
export interface AppRootCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAppRootElement;
}
declare global {
    interface HTMLAppRootElementEventMap {
        "myTypeEvent": MyType;
    }
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAppRootElementEventMap>(type: K, listener: (this: HTMLAppRootElement, ev: AppRootCustomEvent<HTMLAppRootElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAppRootElementEventMap>(type: K, listener: (this: HTMLAppRootElement, ev: AppRootCustomEvent<HTMLAppRootElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
        "onMyTypeEvent"?: (event: AppRootCustomEvent<MyType>) => void;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}
