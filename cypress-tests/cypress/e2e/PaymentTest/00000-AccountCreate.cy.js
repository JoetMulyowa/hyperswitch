import apiKeyCreateBody from "../../fixtures/create-api-key-body.json";
import merchantCreateBody from "../../fixtures/merchant-create-body.json";
import State from "../../utils/State";

let globalState;
describe("Account Create flow test", () => {
  before("seed global state", () => {
    cy.task("getGlobalState").then((state) => {
      globalState = new State(state);
    });
  });

  after("flush global state", () => {
    cy.task("setGlobalState", globalState.data);
  });

  it("merchant-create-call-test", () => {
    cy.merchantCreateCallTest(merchantCreateBody, globalState);
  });

  it("api-key-create-call-test", () => {
    cy.apiKeyCreateTest(apiKeyCreateBody, globalState);
  });
});
