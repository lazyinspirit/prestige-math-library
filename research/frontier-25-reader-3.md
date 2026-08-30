# Frontier 25 — independent reader 3 report

Date: Sunday, August 30, 2026  
Run: `frontier-25`  
Batch: `3`  
Role: `reader`

## Scope opened

- Control and dispatch artifacts: `AGENTS.md`, `CLAUDE.md`, `README.md`, `.autopilot/state.json`, `.autopilot/status.md`, `research/frontier-25-dispatch/reader-reader-3.prompt.md`, `research/frontier-25-alpha-groups.json`, `research/frontier-25-batch-3.pages.json`, `research/frontier-25-batch-3.coverage.json`, `research/frontier-25-batch-3.notes.md`, and `research/frontier-25-batch-3.proof-contracts.json`.
- Assigned page files: `library/measure-theory/the-radon-nikodym-theorem-and-lebesgue-decomposition.md` and `library/measure-theory/the-radon-nikodym-theorem-and-lebesgue-decomposition-examples.md`.
- Companion prerequisite page context: `library/measure-theory/signed-and-complex-measures-hahn-and-jordan.md` and `library/measure-theory/signed-and-complex-measures-hahn-and-jordan-examples.md`.
- Assigned item scope: opened all `35` batch-owned item files.

```text
def-measure-concentrated-on-a-measurable-set
def-absolutely-continuous-with-respect-to-a-positive-measure
thm-absolutely-continuous-and-singular-with-respect-to-the-same-positive-measure-implies-zero
thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data
thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures
thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures
def-the-absolutely-continuous-and-singular-parts-of-a-sigma-finite-signed-measure
thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
cor-finite-complex-measures-admit-integrable-radon-nikodym-densities
def-radon-nikodym-derivative
thm-integration-against-a-radon-nikodym-derivative
thm-additivity-of-radon-nikodym-derivatives
thm-chain-rule-for-radon-nikodym-derivatives
cor-reciprocal-rule-for-equivalent-sigma-finite-measures
thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value
prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite
thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures
thm-polar-decomposition-for-signed-and-complex-measures
thm-finite-borel-measures-on-r-have-a-unique-absolutely-continuous-discrete-and-singular-continuous-decomposition
rem-von-neumanns-hilbert-space-proof-of-radon-nikodym
ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda
ex-the-lebesgue-decomposition-of-half-lebesgue-plus-half-cantor-measure
ex-delta-zero-plus-lebesgue-on-zero-one-splits-into-discrete-and-absolutely-continuous-parts
ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one
ex-a-piecewise-quadratic-distribution-function-recovers-its-density
cex-counting-measure-on-zero-one-shows-the-dominating-measure-needs-sigma-finiteness
cex-x-inverse-dlambda-on-zero-one-shows-finiteness-is-needed-in-the-epsilon-delta-criterion
cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set
cex-lebesgue-plus-counting-measure-has-no-lebesgue-decomposition-relative-to-lebesgue-measure
cex-an-absolutely-continuous-finite-measure-can-have-an-unbounded-radon-nikodym-derivative
fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure
fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function
fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure
fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness
fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives
```

- Direct published dependency items opened for verification: `40`.

```text
cor-cantor-set-is-an-uncountable-lebesgue-null-set
cor-integral-over-a-null-set-vanishes
cor-lebesgue-measure-is-the-lebesgue-stieltjes-measure-of-the-identity
def-cantor-measure
def-complex-measure
def-counting-measure
def-dirac-measure
def-integrable-real-and-complex-functions-and-their-integrals
def-integral-over-a-measurable-set
def-integration-against-a-signed-or-complex-measure
def-measure
def-measure-null-set-and-almost-everywhere
def-measure-with-density
def-mutually-singular-measures
def-restriction-of-a-measure
def-signed-measure
def-simple-integral-against-a-signed-or-complex-measure
def-total-variation-of-a-signed-or-complex-measure
prop-cantor-measure-is-a-singular-atomless-probability-measure
prop-counting-measure-is-a-measure
prop-dirac-measure-is-a-probability-measure
prop-jordan-parts-and-total-variation-formulas-for-signed-measures
prop-real-and-imaginary-parts-of-a-complex-measure-are-finite-signed-measures
prop-restriction-is-a-measure
prop-the-nonnegative-integral-agrees-with-the-simple-integral
thm-a-real-l-one-density-defines-a-finite-signed-measure-with-its-canonical-hahn-and-jordan-data
thm-absolute-continuity-of-the-integral
thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation
thm-continuity-from-below-for-measures
thm-existence-of-the-lebesgue-stieltjes-measure
thm-finite-borel-measure-on-r-is-atomic-plus-atomless
thm-hahn-decomposition-for-signed-measures
thm-integration-against-a-density
thm-jordan-decomposition-for-signed-measures
thm-linearity-of-the-lebesgue-integral-on-l-one
thm-monotone-convergence-for-the-integral
thm-nonnegative-integral-zero-iff-zero-almost-everywhere
thm-the-lebesgue-integral-respects-almost-everywhere-equality
thm-total-variation-is-a-measure
thm-total-variation-of-a-complex-measure-is-finite
thm-uniqueness-of-the-lebesgue-stieltjes-measure-on-r
```

## Outcome

I read both assigned pages, all `35` assigned items, and the direct dependency items needed to verify the current proofs, examples, and false statements. I repaired four material in-flight item defects and two citation-support defects in owned A-page items, then regenerated the affected proof-contract entries. No uneditable in-scope item, page, or published-dependency defect remains on the current bytes.

## Repaired defects

### R3-1 — `thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures` — fixed — fatal

Location: proof steps `3.1` to `6.1`, plus the corresponding contract entry.

Defect: the old residual-singularity step jumped from "`\rho` is not singular" to the existence of `\varepsilon>0` and a Hahn-positive set for `\rho-\varepsilon\mu` without proving that bridge, and the sigma-finite patching step then defined global signed measures by bare limits of local signed pieces without a valid measure argument.

Repair: rewrote the proof in three clean layers.

- Finite positive case: proved the missing `\rho-\mu/m` Hahn-decomposition lemma directly.
- Sigma-finite positive case: patched finite-piece decompositions through exact overlap agreement and built the absolutely continuous part as a genuine density measure.
- General signed case: reduced to the positive case through Jordan decomposition.

I also updated the item `deps` to match the repaired proof and regenerated its contract entry.

### R3-2 — `thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality` — fixed — fatal

Location: Statement, facts block, proof steps `1.1` to `5.1`, plus the corresponding contract entry.

Defect: the old item only justified the density on exhaustion pieces, but downstream items and its own later use treated it as a global measurable-set identity. Its integrability clause also leaned on an unsupported fact line.

Repair: promoted the theorem to the global measurable-set formula `\nu(E)=\int_E f\,d\mu`, proved the singular part vanishes by the zero theorem, replaced the old uniqueness step with a direct null-set argument on the difference of two representatives, and rebuilt the finite-total-variation integrability clause from Jordan decomposition and the positive-measure part of the existence theorem. I updated the `deps` and regenerated the contract entry.

### R3-3 — `thm-integration-against-a-radon-nikodym-derivative` — fixed — fatal

Location: Statement, facts block, proof step `2.1`, plus the corresponding contract entry.

Defect: the old simple-function extension asserted `\int g\,d\nu` for an arbitrary simple measurable `g`, even though the repository’s signed/complex simple-integral definition requires finite total variation on each nonzero level set. That made the stated formula false as written on infinite-variation supports.

Repair: narrowed the extension to the canonical disjoint simple-integral setting with `|\nu|(E_j)<\infty` on every nonzero level set, stated the safe finite-sum formula explicitly, and kept the product-integral identity only under the additional condition that `gh` is Lebesgue-integrable. I updated the `deps` and regenerated the contract entry.

### R3-4 — `thm-chain-rule-for-radon-nikodym-derivatives` — fixed — fatal

Location: proof steps `1.1` to `3.1`, plus the corresponding contract entry.

Defect: the old proof illegitimately replaced `d\mu` by `(d\mu/d\lambda)\,d\lambda` for a general signed/complex density `h` without proving the intermediate change-of-density step, and the complex case never tracked the real and imaginary representatives needed for the conclusion.

Repair: rewrote the argument by cases.

- Positive case: compose nonnegative densities through `thm-integration-against-a-density`.
- Signed case: pass through Jordan decomposition and subtract the two positive formulas.
- Finite complex case: pass through the real and imaginary signed measures and reassemble the complex density.

I updated the `deps` and regenerated the contract entry, along with the dependent reciprocal-rule contract entry.

### R3-5 — citation-support repairs in downstream A-page items — fixed — nonfatal

Locations: `thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value` fact line `L3`, `thm-polar-decomposition-for-signed-and-complex-measures` fact line `L1`, and the affected contract entries.

Defect: after the reader repairs above, the current fact lines still cited `def-radon-nikodym-derivative` as if that definition itself supplied density existence and integrability. On current bytes, those obligations come from the repaired signed theorem and the complex corollary.

Repair: rewrote the fact lines so the cited support matches the current theorem chain, updated the item `deps`, and regenerated the affected contract entries.

- No changed item carried a `verification.judge` block, so no stale judge record needed removal.

## Uneditable artifact drift

- `research/frontier-25-batch-3.pages.json` is stale against the current item `deps` frontmatter for these `25` owned ids:

```text
thm-absolute-continuity-is-equivalent-for-a-signed-or-complex-measure-its-variation-and-its-jordan-data
thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures
thm-lebesgue-decomposition-is-unique-for-sigma-finite-signed-measures
thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
cor-finite-complex-measures-admit-integrable-radon-nikodym-densities
thm-integration-against-a-radon-nikodym-derivative
thm-additivity-of-radon-nikodym-derivatives
thm-chain-rule-for-radon-nikodym-derivatives
cor-reciprocal-rule-for-equivalent-sigma-finite-measures
thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value
prop-the-radon-nikodym-derivative-is-integrable-exactly-when-the-absolutely-continuous-part-is-finite
thm-epsilon-delta-characterisation-of-absolute-continuity-for-finite-signed-or-complex-measures
thm-polar-decomposition-for-signed-and-complex-measures
ex-the-density-two-x-on-zero-one-is-the-radon-nikodym-derivative-of-two-x-indicator-dlambda
ex-the-lebesgue-decomposition-of-half-lebesgue-plus-half-cantor-measure
ex-delta-zero-plus-lebesgue-on-zero-one-splits-into-discrete-and-absolutely-continuous-parts
ex-the-chain-rule-for-radon-nikodym-derivatives-on-zero-one
ex-a-piecewise-quadratic-distribution-function-recovers-its-density
cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set
cex-lebesgue-plus-counting-measure-has-no-lebesgue-decomposition-relative-to-lebesgue-measure
fs-every-measure-is-absolutely-continuous-or-singular-with-respect-to-lebesgue-measure
fs-the-radon-nikodym-derivative-is-a-uniquely-determined-function
fs-the-epsilon-delta-condition-characterises-absolute-continuity-for-every-measure
fs-the-radon-nikodym-theorem-holds-without-sigma-finiteness
fs-absolutely-continuous-measures-always-have-bounded-radon-nikodym-derivatives
```

- This is real batch-local artifact drift on current bytes, but Step 6a does not license manifest edits. I therefore left the manifest unchanged, and I did not include these rows in the structured findings JSON because the schema supplied to this dispatch has no manifest subject type.

## Checks run

- `node tools/autopilot/bin/autopilot.mts status --repo .`
  - confirmed the live run state and the current Step-6 coverage.
- `node tools/tsx-run.mjs tools/reflow.mts items/thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures.md items/thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality.md items/thm-integration-against-a-radon-nikodym-derivative.md items/thm-chain-rule-for-radon-nikodym-derivatives.md items/thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value.md items/thm-polar-decomposition-for-signed-and-complex-measures.md`
  - reflowed `4` files; `2` were already canonical.
- `node tools/tsx-run.mjs tools/precheck.mts items/thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures.md items/thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality.md items/thm-integration-against-a-radon-nikodym-derivative.md items/thm-chain-rule-for-radon-nikodym-derivatives.md items/thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value.md items/thm-polar-decomposition-for-signed-and-complex-measures.md`
  - pass: `6 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-25-batch-3.proof-contracts.json thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality thm-integration-against-a-radon-nikodym-derivative thm-chain-rule-for-radon-nikodym-derivatives thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value thm-polar-decomposition-for-signed-and-complex-measures cor-finite-complex-measures-admit-integrable-radon-nikodym-densities thm-additivity-of-radon-nikodym-derivatives cor-reciprocal-rule-for-equivalent-sigma-finite-measures`
  - regenerated the `9` affected entries.
- `node tools/proof-contract.mjs --strict research/frontier-25-batch-3.proof-contracts.json`
  - pass: `0 error(s), 0 warning(s), 30/30 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-25-batch-3.proof-contracts.json --items-dir items --fail-on-missing-quote`
  - pass: `105` citations, no missing quotes, no widening candidates.
- `node tools/finite-smoke.mjs research/frontier-25-batch-3.proof-contracts.json`
  - pass: `0 error(s), 0 check(s) over 0/30 item(s) carrying obligations`.
- `node tools/rendercheck.mjs library/measure-theory/the-radon-nikodym-theorem-and-lebesgue-decomposition.md library/measure-theory/the-radon-nikodym-theorem-and-lebesgue-decomposition-examples.md $(...)`
  - pass: `OK — 37 file(s)`.
- `node tools/content-policy.mjs research/frontier-25-batch-3.pages.json`
  - pass: `35 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/coverage-checklist.mjs research/frontier-25-batch-3.coverage.json --require-destination`
  - pass: `1 page(s), 47 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/source-fetch-check.mjs --coverage research/frontier-25-batch-3.coverage.json`
  - pass: `3/3 source(s) fetch-verified`.
- `node tools/boundary-audit.mjs research/frontier-25-batch-3.proof-contracts.json --items-dir items --fail-on-contradicted --fail-on-template`
  - still reports generic template-reuse clusters and heuristic contradicted-candidate rows. I opened the changed items and the flagged candidates; I did not confirm an additional mathematics defect or a contract row that Step 6a required me to repair.
- `git diff --check -- items/thm-lebesgue-decomposition-exists-for-sigma-finite-signed-measures.md items/thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality.md items/thm-integration-against-a-radon-nikodym-derivative.md items/thm-chain-rule-for-radon-nikodym-derivatives.md items/thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value.md items/thm-polar-decomposition-for-signed-and-complex-measures.md research/frontier-25-batch-3.proof-contracts.json`
  - clean.

## Page verdicts

- `library/measure-theory/the-radon-nikodym-theorem-and-lebesgue-decomposition.md`: pass on current mathematics after the six owned A-item repairs. I found no A-page prose defect requiring an edit.
- `library/measure-theory/the-radon-nikodym-theorem-and-lebesgue-decomposition-examples.md`: pass on current page prose and B-item mathematics. No B-page body edit was needed.

## Blockers

- None.
