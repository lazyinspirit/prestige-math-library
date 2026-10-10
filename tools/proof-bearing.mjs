// Shared structural predicate for coverage. This identifies supplied arguments;
// it does not assess their mathematical or physical validity.
export const isProofBearing = body => /^## (?:Proof|Refutation|Counterexample|Verification)\s*$/m.test(body);
