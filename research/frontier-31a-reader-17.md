# Reader report — frontier-31a, batch 17

## Scope opened

- A page: `library/differential-geometry/the-exterior-derivative-and-cartan-calculus.md` and all 40 assigned A items.
- B page: `library/differential-geometry/the-exterior-derivative-and-cartan-calculus-examples.md` and all 12 assigned B items. The B-page body was read but not edited.
- Published dependency closure: 30 explicit manifest dependencies, including the form algebra, pullback, flow, tensor, time-dependent evolution, and Frobenius interfaces. The additional predecessor `thm-frobenius-local-coordinate-theorem` was opened for the repaired codimension-one conclusion.

## Repairs

1. `def-lie-derivative-of-a-tensor-field`: made the local-diffeomorphism pullback convention explicit for mixed tensors, so the definition is type-correct.
2. `lem-the-invariant-exterior-derivative-formula-is-c-infinity-multilinear`: displayed the two index ranges and their exact signs in the $fX_i$ cancellation.
3. `cor-codimension-one-frobenius-criterion`: declared and cited the established Frobenius involutive/integrable equivalence needed by its existing integrability conclusion.
4. `fs-every-closed-differential-form-is-globally-exact` and `ex-the-angular-one-form-has-no-global-potential`: replaced the unsupported forward reference with the direct unit-circle contradiction; no claim was withdrawn or deleted.
5. `ex-exterior-derivatives-of-coordinate-one-forms`: derived $d(dx^i)=0$ directly from the stated coordinate formula, rather than an undeclared square-zero fact.
6. `prop-lie-derivatives-are-natural-for-related-vector-fields`: replaced an inapplicable appeal to the invariant exterior-derivative formula with the Cartan-formula proof and declared that dependency.

The assigned manifest and proof-contract entries were updated with every material repair. No `verification.judge` record was present in a changed in-flight item, so none required removal.

## Page verdicts

- A: repaired and otherwise mathematically sufficient.
- B: the 12 items are mathematically sufficient after repair, but the immutable page summary has the nonfatal stale statement recorded below.

## Uneditable defect

- `library/differential-geometry/the-exterior-derivative-and-cartan-calculus-examples.md:9` still says that the angular-period obstruction is deliberately deferred. The repaired `ex-the-angular-one-form-has-no-global-potential` now gives the unit-circle contradiction directly. This B-page prose is outside reader edit authority; it is returned in the findings artifact as a nonfatal false claim.

## Validation

- Reflow and explicit-path precheck: pass for each of the seven changed items.
- `node tools/proof-contract.mjs research/frontier-31a-batch-17.proof-contracts.json --strict`: pass, 47/47.
- `node tools/manifest-deps.mjs research/frontier-31a-batch-17.pages.json`: pass, 52 items, 0 errors.
- `node tools/content-policy.mjs research/frontier-31a-batch-17.pages.json`: pass, 52 scoped items, 0 errors, 0 warnings.
- `node tools/fwdcheck.mjs --quiet`: pass; no cycle or undeclared forward reference.
- Focused `rendercheck` over the seven changed items and `git diff --check`: pass.

## Blockers

None; the sole outstanding matter is the B-page-prose finding above.
