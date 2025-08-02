// src/types/t-writer.d.ts
declare module 't-writer.js' {
  interface WriterOptions {
    loop?: boolean;
    typeColor?: string;
    cursorClassName?: string;
    typeSpeed?: number;
    deleteSpeed?: number;
  }

  export default class Writer {
    constructor(target: HTMLElement, options?: WriterOptions);

    /** Type the given text, returns the same instance for chaining */
    type(text: string): this;
    /** Pause for `ms` milliseconds */
    rest(ms: number): this;
    /** Remove `chars` characters (omit to remove all) */
    remove(chars?: number): this;
    /** Empty the target element */
    clear(): this;
    /** Start the queued actions */
    start(): this;
    /** Change the typing colour on the fly */
    changeTypeColor(color: string): this;
  }
}
