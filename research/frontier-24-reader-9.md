# frontier-24 reader-9 report

Date: Saturday, August 29, 2026.

## Opened scope

- Control and instructions: `AGENTS.md`, `CLAUDE.md`, `README.md`, `briefs/reader.md`, `research/frontier-24-reader.task.md`, `research/frontier-24-beta-9.task.md`, and live run state via `node tools/autopilot/bin/autopilot.mts status`.
- Batch artifacts: `research/frontier-24-batch-9.pages.json`, `research/frontier-24-batch-9.coverage.json`, `research/frontier-24-batch-9.notes.md`, `research/frontier-24-batch-9.proof-contracts.json`, and `research/frontier-24-step6-hash-9-pre.json`.
- Assigned pages: `library/real-analysis/differential-geometry/smooth-partitions-of-unity-and-exhaustions.md`, `library/real-analysis/differential-geometry/smooth-partitions-of-unity-and-exhaustions-examples.md`, `library/real-analysis/differential-geometry/tangent-cotangent-and-the-differential.md`, and `library/real-analysis/differential-geometry/tangent-cotangent-and-the-differential-examples.md`.
- Assigned items: all 101 manifest item files named in `research/frontier-24-batch-9.pages.json` (`82` A-page items and `19` B-page items).
- Required page dependencies opened: `library/real-analysis/differential-geometry/smooth-manifolds-and-smooth-maps.md`, `library/real-analysis/the-exponential-function.md`, `library/linear-algebra/dual-spaces-bilinear-forms-and-inertia.md`, `library/linear-algebra/the-determinant-of-a-linear-operator.md`, `library/real-analysis/the-fundamental-theorems-of-calculus.md`, and `library/real-analysis/the-inverse-function-theorem-completed.md`.
- Direct dependency items opened for verification: `cor-zero-derivative-implies-constant`, `lem-coordinate-balls-form-a-basis-of-a-topological-manifold`, `lem-first-order-hadamard-factorization-near-a-point`, `lem-smooth-maps-paste-over-an-open-cover`, `prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets`, `prop-identity-maps-and-composites-of-smooth-maps-are-smooth`, `prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure`, `prop-topological-manifolds-are-locally-compact-and-locally-path-connected`, `thm-chain-rule`, `thm-chain-rule-for-total-derivatives`, and `thm-connected-and-locally-path-connected-implies-path-connected`.

## Edits kept

- `items/thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity.md`
  Narrowed the statement to the actual partition-dependent gluing formula, replaced the over-weak extension step with honest zero-pasting against `M \setminus \operatorname{supp}(\phi_i)`, and switched the dependencies from partition existence to the partition definition plus the smooth pasting lemma.
- `items/thm-change-of-coordinate-formula-for-tangent-bases.md`
  Removed the unnecessary chain-rule dependency and rewrote the proof so equality is checked directly on the coordinate germs.
- `items/lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation.md`
  Replaced the incorrect one-variable chain-rule appeal with the intended Hadamard-factorization argument for multivariable coordinate changes.
- `items/lem-curve-velocity-depends-only-on-the-contact-class.md`
  Replaced the same incorrect chain-rule step with a Hadamard-factorization proof on the chart representative of the test germ.
- `items/prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component.md`
  Removed the unsupported jump from path connectedness to a smooth path and repaired the proof by showing local constancy on chart balls via straight-line coordinate curves.
- `research/frontier-24-batch-9.proof-contracts.json`
  Regenerated the six affected contract entries after the item repairs.

The B-page prose was left untouched.

## Confirmed defects repaired

1. `thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity` stated a partition-independent global function even though the construction depends on the chosen partition, and its extension step did not justify a locally finite family of global summands.
2. `thm-change-of-coordinate-formula-for-tangent-bases` cited an irrelevant one-variable chain rule for a proof that only needs direct evaluation on coordinate germs.
3. `lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation` and `lem-curve-velocity-depends-only-on-the-contact-class` each used the one-variable chain rule where the argument actually needs the page's Euclidean Hadamard factorization bottleneck.
4. `prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component` claimed a smooth path from topological path connectedness alone.

No uneditable in-flight-item, page, or published-dependency defect remained on the opened current bytes after those repairs.

## Report-only drift outside edit scope

- `research/frontier-24-batch-9.pages.json:213-220` still records the pre-repair dependency route for `thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity`.
- `research/frontier-24-batch-9.pages.json:541-547` still records the pre-repair dependency route for `thm-change-of-coordinate-formula-for-tangent-bases`.
- `research/frontier-24-batch-9.pages.json:561-567` still records the pre-repair dependency route for `lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation`.
- `research/frontier-24-batch-9.pages.json:579-585` still records the pre-repair dependency route for `lem-curve-velocity-depends-only-on-the-contact-class`.
- `research/frontier-24-batch-9.pages.json:695-703` still records the pre-repair dependency route for `prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component`.

I left those manifest rows untouched because this dispatch is licensed to repair in-flight items and assigned A-page prose, not batch-manifest metadata.

## Page verdicts

- `smooth-partitions-of-unity-and-exhaustions`
  Sufficient on the current bytes after the gluing-theorem repair. The local-data gluing statement now matches what the proof actually constructs, and the summand family is honestly controlled by the partition supports.
- `smooth-partitions-of-unity-and-exhaustions-examples`
  Sufficient on the current bytes. The companion examples and counterexamples remain compatible with the repaired A-page theorem.
- `tangent-cotangent-and-the-differential`
  Sufficient on the current bytes after the four tangent-page repairs. The contact-class and zero-differential arguments now use valid multivariable reasoning and no longer overclaim smooth-path existence.
- `tangent-cotangent-and-the-differential-examples`
  Sufficient on the current bytes. The examples and counterexamples remain compatible with the repaired A-page items.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity.md items/thm-change-of-coordinate-formula-for-tangent-bases.md items/lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation.md items/lem-curve-velocity-depends-only-on-the-contact-class.md items/prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component.md`
  Result: three files were reflowed once after the repairs; the final rerun reported all five unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity.md items/thm-change-of-coordinate-formula-for-tangent-bases.md items/lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation.md items/lem-curve-velocity-depends-only-on-the-contact-class.md items/prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component.md`
  Result: pass, `5 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-24-batch-9.proof-contracts.json thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity fs-a-partition-of-unity-can-glue-manifold-valued-maps-by-taking-weighted-sums thm-change-of-coordinate-formula-for-tangent-bases lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation lem-curve-velocity-depends-only-on-the-contact-class prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component`
  Result: regenerated `6` affected proof-contract entries.
- `node tools/tsx-run.mjs tools/precheck.mts <full batch-9 item scope>`
  Result: pass, `83 checked, 0 failing`.
- `node tools/proof-contract.mjs research/frontier-24-batch-9.proof-contracts.json --strict`
  Result: pass, `83/83 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-24-batch-9.proof-contracts.json`
  Result: pass, `150 citation(s) over 83 authored item(s)` with no quote failures and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-24-batch-9.proof-contracts.json`
  Result: pass; the 8 contradicted-disposition candidates were manually read during this dispatch and did not expose an additional defect.
- `node tools/rendercheck.mjs items/thm-smooth-functions-defined-locally-can-be-glued-by-a-partition-of-unity.md items/thm-change-of-coordinate-formula-for-tangent-bases.md items/lem-contact-equivalence-is-chart-independent-and-an-equivalence-relation.md items/lem-curve-velocity-depends-only-on-the-contact-class.md items/prop-a-smooth-function-with-zero-differential-is-constant-on-each-connected-component.md library/real-analysis/differential-geometry/smooth-partitions-of-unity-and-exhaustions.md library/real-analysis/differential-geometry/smooth-partitions-of-unity-and-exhaustions-examples.md library/real-analysis/differential-geometry/tangent-cotangent-and-the-differential.md library/real-analysis/differential-geometry/tangent-cotangent-and-the-differential-examples.md`
  Result: pass, `OK — 9 file(s)`.
- `node tools/coverage-checklist.mjs research/frontier-24-batch-9.coverage.json --require-destination`
  Result: pass, `coverage-checklist: 2 page(s), 69 harvested result(s), 0 error(s), 0 warning(s)`.
- `git diff --check`
  Result: pass.

## Blockers

- No mathematical blocker remains in the opened batch-9 scope.
- The only remaining issue is the report-only manifest drift noted above, which this dispatch did not have license to rewrite.
