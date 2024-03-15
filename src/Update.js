
// Messages which can be used to update the model
const MSGS = {
    UPDATE_MODEL: "UPDATE_MODEL",
    UPDATE_RANDOM_NUMBER: "UPDATE_RANDOM_NUMBER",
    // ... ℹ️ additional messages
  };

// Update function which takes a message and a model and returns a new/updated model
function update(msg, model) {
    switch (msg) {
      case MSGS.UPDATE_MODEL:
        return { ...model, currentTime: new Date().toLocaleTimeString() };
  
      case MSGS.UPDATE_RANDOM_NUMBER:
        return { ...model, randomNumber: Math.random() };
      default:
        return model;
    }AC
  }

  module.export = {update, MSGS};