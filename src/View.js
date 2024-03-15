const hh = require ("hyperscript-helpers");
const { h, diff, patch } = require ("virtual-dom");

// allows using html tags as functions in javascript
const { div, button, p, h1 } = hh(h);

// View function which represents the UI as HTML-tag functions
function view(dispatch, model) {
    return div({ className: "flex flex-col gap-4 items-center" }, [
      h1({ className: "text-2xl" }, `My Title`),
      button({ className: btnStyle, onclick: () => dispatch(MSGS.UPDATE_MODEL) }, "Update Model"),
      p({ className: "text-2xl" }, `Time: ${model.currentTime}`),
      button({ className: btnStyle, onclick: () => dispatch(MSGS.UPDATE_RANDOM_NUMBER) }, "Update Random Number"),
      p({ className: "text-2xl" }, `Random Number: ${model.randomNumber}`),
      // ... ℹ️ additional elements
    ]);
  }

  module.export = {view};