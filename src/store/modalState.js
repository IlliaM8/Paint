import { makeAutoObservable } from "mobx";

class ModalState {
  modal = false;
  instrumentModal = false;
  constructor() {
    makeAutoObservable(this);
  }
  setModalClose() {
    this.modal = false;
    this.instrumentModal = false;
  }
  setModalActive() {
    this.modal = true;
  }

  setInstrumentModalActive() {
    this.instrumentModal = true;
  }
  setInstrumentModalClose() {
    this.instrumentModal = false;
  }
}
export default new ModalState();
