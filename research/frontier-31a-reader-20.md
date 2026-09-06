# Reader report — frontier-31a, batch 20

## Scope opened

- A page: `library/differential-topology/gradient-like-vector-fields-and-morse-trajectories.md`, including all 20 assigned items:
  `def-riemannian-gradient-of-a-smooth-function`,
  `lem-riemannian-gradient-vanishes-exactly-at-critical-points`,
  `def-negative-gradient-trajectory-of-a-morse-function`,
  `lem-negative-gradient-energy-identity`,
  `cor-nonconstant-negative-gradient-trajectories-strictly-decrease-the-function`,
  `def-downward-gradient-like-vector-field`,
  `prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold`,
  `lem-precompact-trajectory-tail-limit-sets-are-nonempty-compact-connected-and-flow-invariant`,
  `lem-a-limit-point-of-a-gradient-trajectory-is-critical`,
  `lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits`,
  `def-morse-trajectory-from-p-to-q`,
  `lem-morse-trajectories-have-positive-energy-drop`,
  `def-stable-and-unstable-sets-of-a-critical-point`,
  `thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point`,
  `thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces`,
  `lem-stable-and-unstable-manifolds-are-flow-invariant`,
  `cor-a-gradient-flow-has-no-nonconstant-periodic-or-recurrent-orbits`,
  `def-proper-smooth-function-and-compact-morse-slab`,
  `prop-proper-morse-slabs-give-complete-connecting-trajectories`, and
  `rem-noncompact-flow-completeness-is-an-extra-hypothesis`.
- B page: `library/differential-topology/gradient-like-vector-fields-and-morse-trajectories-examples.md`, including all five assigned items:
  `ex-negative-gradient-lines-for-a-quadratic-morse-function`,
  `ex-meridian-trajectories-for-height-on-the-sphere`,
  `ex-gradient-flow-on-the-torus-morse-function`,
  `cex-positive-gradient-reverses-stable-and-unstable-dimensions`, and
  `cex-an-incomplete-gradient-flow-on-a-noncompact-manifold`. The B-page body was read and not edited.
- Direct dependency material opened from current `items/` files: the metric, differential, vector-field, critical-point, Morse-function, integral-curve, chain-rule, maximal-curve, compactness, global-flow, local/global-flow, Hessian-index, continuity, local ODE, complete-vector-field, compact-field-completeness, and compact-Morse-critical-set interfaces named in the batch manifest. In particular, the local-flow statement was read before assessing tail-limit invariance and the continuation statement before assessing compact-slab completeness.
- Authoring source locators checked against the live notes: Nicolaescu, *An Invitation to Morse Theory*, §2.4 (printed pp. 53–61 / PDF pp. 62–70), and Cohen, *Bundles, Manifolds, and Homotopy*, §§13.1–13.2 (printed pp. 497–512 / PDF pp. 506–523), as recorded in `research/frontier-31a-batch-20.notes.md`.

## Repair

`items/ex-gradient-flow-on-the-torus-morse-function.md` overstated the
nonseparatrix maximum-to-minimum trajectories as one undifferentiated
one-parameter family.  Each angular coordinate has two open arcs from the
maximum angle to the minimum angle, giving four arc-choice components on the
torus; after quotienting by common time translation, each component is
one-parameter.  The item now says this explicitly, including the decreasing
coordinate behaviour on `(pi,2pi)`.  Its matching derivation and endpoint
boundary evidence were updated in
`research/frontier-31a-batch-20.proof-contracts.json`.  The item had no stale
`verification.judge` record to remove.

## Mathematical reading and verdicts

- A: pass. The sign convention, energy identity, compact-tail argument,
  compact-manifold endpoint result, stable/unstable dimension convention,
  local-versus-immersed-global distinction, and conditional compact-slab
  continuation statement retain their stated hypotheses and directions.
- B: repaired item; otherwise pass. The quadratic, sphere, positive-gradient,
  and incomplete noncompact-flow calculations type-check. The torus item now
  distinguishes the four trajectory components from the one-parameter
  quotient inside each component.
- Published dependencies opened for the claims used here: no confirmed
  uneditable defect found.

## Validation

- `node tools/tsx-run.mjs tools/reflow.mts items/ex-gradient-flow-on-the-torus-morse-function.md` — unchanged.
- Focused and batch-wide `precheck` — PASS, 18 proof-bearing items checked.
- `node tools/proof-contract.mjs research/frontier-31a-batch-20.proof-contracts.json --strict` — PASS, 18/18.
- Focused `citation-fidelity` — all 35 recorded quotes found; no widening candidates.
- `node tools/manifest-deps.mjs research/frontier-31a-batch-20.pages.json` — PASS, 25 items and 0 errors.
- `node tools/coverage-checklist.mjs research/frontier-31a-batch-20.coverage.json --require-destination` — PASS, 44 harvested results and 0 errors.
- `git diff --check` — PASS.

`content-policy --manifest-only` is a pre-mint scaffold gate: after Step 5 it
correctly reports all 25 now-present draft files as already existing, so it is
not a post-authoring failure or blocker.

## Uneditable findings and blockers

None. The repaired torus statement belongs to the in-flight batch and is
therefore recorded above and in the byte diff, not in the findings artifact.
