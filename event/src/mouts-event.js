export function eventEmitter(name, detail) {
  dispatchEvent(
    new CustomEvent(name, {
      detail,
    })
  );
}

export function eventListener(name, event) {
  window.addEventListener(name, event);
}
