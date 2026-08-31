# frontier-27 reader-3 report

Date: Monday, August 31, 2026.
Batch: `3`
Run: `frontier-27`

## Opened scope

- Control and instructions: `AGENTS.md`, `CLAUDE.md`, `README.md`, and `research/frontier-27-reader.task.md`.
- Live run state: `.autopilot/frontier-27/state.json` and `.autopilot/frontier-27/status.md`.
- Batch artifacts: `research/frontier-27-batch-3.pages.json`, `research/frontier-27-batch-3.coverage.json`, `research/frontier-27-batch-3.notes.md`, `research/frontier-27-batch-3.proof-contracts.json`, and `research/frontier-27-covers.json`.
- Assigned pages:
  - `library/measure-theory/density-separability-and-convolution-in-lp.md`
  - `library/measure-theory/density-separability-and-convolution-in-lp-examples.md`
- Required page dependency opened:
  - `library/measure-theory/the-lp-spaces-holder-minkowski-and-riesz-fischer-examples.md`
- Assigned items: all `41` item/example files named in `research/frontier-27-batch-3.pages.json`.
- Direct dependency items opened for verification:
  - `def-support-and-compactly-supported-riemann-integral-in-rn`
  - `lem-distance-to-set-is-lipschitz`
  - `thm-heine-borel-rn`
  - `thm-extreme-value-metric`
  - `prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets`
  - `thm-lebesgue-outer-regularity-for-arbitrary-subsets`
  - `thm-lebesgue-measure-of-a-box-of-every-kind`
  - `thm-rational-points-and-boxes-in-rn`
  - `thm-generalized-holder-inequality-for-products`
  - `thm-lebesgue-outer-measure-and-measurability-are-translation-invariant`
  - `thm-linear-change-of-variables-for-lebesgue-measure`
  - `thm-minkowski-inequality-for-integrals`
  - `lem-euclidean-bump-for-a-compact-set-inside-an-open-set`

## Edits kept

- `items/lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff.md`
  - Repaired a false support argument. The old distance-ratio formula had support `\overline O`, not support inside `O`. The kept proof now uses a distance-to-`O^c` collar cutoff and handles the empty-`K` branch explicitly.
- `items/lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess.md`
  - Replaced the false bounded-open sandwich claim for arbitrary finite-measure sets with the correct compact-core / bounded-open-neighbourhood statement, and repaired the proof accordingly.
- `items/thm-c-c-rn-is-dense-in-l-p-of-rn.md`
  - Repaired the approximation step so the continuous cutoff only needs a compact core `K_j \subseteq E_j` plus a bounded open neighbourhood `O_j`, with both discarded-mass terms controlled.
- `items/thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn.md`
  - Repaired the converse closure argument. The old proof treated essential-supremum convergence as actual uniform convergence; the kept proof now passes through a uniform Cauchy limit in `C_0` and then identifies the `L^\infty` class almost everywhere.
- `items/thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn.md`
  - Replaced the unjustified symmetric-difference estimate by an explicit slab-volume bound using rational endpoint perturbations of a box.
- `items/thm-young-convolution-inequality.md`
  - Added the explicit `r=p` / `r=q` endpoint interpretation before invoking the three-factor Holder estimate.
- `items/fs-l-one-convolution-is-defined-at-every-point.md`
  - Replaced the handwave at the singular point by an explicit punctured-interval substitution proving divergence at `x=0`.
- Choice-hypothesis repairs:
  - Added explicit `Assume the Axiom of Countable Choice.` statements to the in-flight Euclidean measure/density items whose proofs currently consume published choice-dependent Lebesgue-measure results:
    `lem-finite-measure-sets-are-approximable-by-finite-unions-of-boxes`,
    `thm-box-step-functions-are-dense-in-l-p-of-rn`,
    `lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess`,
    `thm-c-c-rn-is-dense-in-l-p-of-rn`,
    `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn`,
    `lem-compactly-supported-continuous-functions-are-translation-continuous-in-l-p`,
    `thm-translation-is-continuous-in-l-p-for-one-le-p-less-infinity`,
    `cor-convolution-of-conjugate-l-p-and-l-q-functions-is-continuous-and-vanishes-at-infinity`,
    `prop-mollifier-families-are-l-one-approximate-identities`,
    `thm-l-one-approximate-identities-converge-in-l-p`,
    `thm-c-c-infinity-rn-is-dense-in-l-p-of-rn`,
    and the dependent example `ex-rational-box-step-functions-give-a-countable-dense-family-in-l-two-of-unit-interval`.
- `research/frontier-27-batch-3.proof-contracts.json`
  - Regenerated the full batch-3 contract after the repairs and statement-hypothesis updates so citations, derivations, and boundary rows match the current bytes.

No repaired item carried a `verification.judge` block, so there was no stale judge stamp to delete.

## Confirmed defects repaired

1. `lem-a-compact-set-inside-a-bounded-open-set-admits-an-explicit-compactly-supported-cutoff`
   - The old proof's formula was positive on all of `O`, so its support was `\overline O`, not a compact subset of `O`.

2. `lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess`
   - The old statement claimed every finite-measure measurable set lies in a bounded open superset. That is false for unbounded finite-measure sets.

3. `thm-c-c-rn-is-dense-in-l-p-of-rn`
   - The old proof depended on the false sandwich claim and only controlled `O_j \setminus K_j`, not the discarded part `E_j \setminus K_j`.

4. `thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn`
   - The old proof conflated essential-supremum convergence with pointwise uniform convergence and therefore did not justify continuity of the limit representative.

5. `thm-rational-box-step-functions-form-a-countable-dense-subset-of-l-p-of-rn`
   - The old box-approximation step asserted `\lambda(B \triangle R) < \delta` from a one-dimensional endpoint-width estimate with no valid `n`-dimensional measure bound.

6. Choice-ledger repairs
   - Several in-flight Euclidean density/translation/mollifier items used published Lebesgue-measure results that explicitly assume Countable Choice but did not carry that hypothesis themselves.

7. `thm-young-convolution-inequality` and `fs-l-one-convolution-is-defined-at-every-point`
   - Their proof-contract zero-boundary rows were contradicted by the text state; the kept item edits now make the zero/singularity branches explicit, and the regenerated contract no longer records contradicted zero rows.

## Report-only drift outside edit scope

- `research/frontier-27-batch-3.pages.json`
  - The manifest strategy text for `lem-finite-measure-sets-admit-compact-open-sandwiches-with-small-excess` and the related `thm-c-c-rn-is-dense-in-l-p-of-rn` item still describes the pre-repair sandwich wording rather than the kept compact-core / bounded-open-neighbourhood formulation.
- `research/frontier-27-batch-3.notes.md`
  - The batch notes still narrate the repaired lemma as a literal compact-open sandwich for finite-measure sets. I left the notes unchanged because this dispatch is licensed to repair in-flight item files and assigned A-page prose, not batch-note prose.

## Page verdicts

- `density-separability-and-convolution-in-lp`
  - Sufficient on the current bytes after the repairs above. I found no remaining title, statement, proof, citation, or boundary defect in the opened dependency closure that the page currently uses.
- `density-separability-and-convolution-in-lp-examples`
  - Sufficient on the current bytes. The B-page body stayed untouched, and the examples/counterexamples remain compatible with the repaired A-page ledger.

## Uneditable defects

None confirmed in the opened dependency closure.

## Blockers

None.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts <16 changed item files>`
  - Result: all `16` changed item files were reflowed to canonical proof-line format on the final bytes.
- `node tools/tsx-run.mjs tools/precheck.mts <16 changed item files>`
  - Result: pass, `16 checked, 0 failing`.
- `node tools/tsx-run.mjs tools/precheck.mts <full batch-3 item scope>`
  - Result: pass, `41 checked, 0 failing`.
- `node tools/regen-contract-entries.mjs research/frontier-27-batch-3.proof-contracts.json <batch-3 scope>`
  - Result: regenerated all `41` contract entries against the current disk state.
- `node tools/proof-contract.mjs research/frontier-27-batch-3.proof-contracts.json --strict`
  - Result: pass, `41/41 item(s) checked`.
- `node tools/citation-fidelity.mjs research/frontier-27-batch-3.proof-contracts.json --fail-on-missing-quote`
  - Result: pass, `144 citation(s)` checked with no missing quotes and no widening candidates.
- `node tools/boundary-audit.mjs research/frontier-27-batch-3.proof-contracts.json --fail-on-contradicted`
  - Result: pass after the kept repairs; no contradicted dispositions remain. The tool still reports advisory template-reuse clusters.
- `node tools/coverage-checklist.mjs research/frontier-27-batch-3.coverage.json --require-destination`
  - Result: pass, `1 page(s), 59 harvested result(s), 0 error(s), 0 warning(s)`.
- `node tools/content-policy.mjs research/frontier-27-batch-3.pages.json`
  - Result: pass, `47 scoped item(s), 0 error(s), 0 warning(s)`.
- `node tools/rendercheck.mjs <16 changed item files> library/measure-theory/density-separability-and-convolution-in-lp.md library/measure-theory/density-separability-and-convolution-in-lp-examples.md`
  - Result: pass, `OK — 18 file(s)`.
