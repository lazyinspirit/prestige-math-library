# frontier-30 alpha-g 6b

Scope: routed group `g`, batches `14` and `18`.

I read the routed Step-6 scope files, the reader reports and findings JSON, the
refuter result artifacts, the live carriers, and the cited dependencies needed
to check the current mathematics. Both owned batch contracts were re-run
through `risk-report.mjs` without `--require-reviewed`; I then re-read every
current HIGH/CRITICAL item and wrote all required item-specific `risk_review`
records as `alpha-6b-g`.

## Batch 14

Touched carriers:

- `accepted_repair` on `ex-a-four-tooth-comb-with-a-special-vertex-triggers-property-star`: the reader's `(4,4)` comb repair stands on current bytes.
- `amended_repair` on `lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades`: the reader-restored blockade branch stands, and the carrier is now amended by the required `risk_review`.
- `amended_repair` on `lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph`: the reader's `1 < k < 2` repair stands, and I also repaired the separate live `x := y` parameter error.
- `amended_repair` on `thm-property-star-and-leaf-reducibility-imply-generalized-niceness`: the reader's small-order case split stands, and I also repaired the downstream integer-`k` / ambient-size hypothesis chain before the local blockade theorem is invoked.

Refuter findings:

- `refuter:14:1` `confirmed_fatal` on `lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes`: repaired the dense-side exponent to `12 d + 3`.
- `refuter:14:2` `confirmed_fatal` on `lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes`: repaired the facts block to use the source endpoint `ceil(x^-2)` and rescaled the pure branch back to the stated interval.
- `refuter:14:3` `confirmed_fatal` on `lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph`: repaired step `3.1` by applying the previous lemma with the original `x` parameter.
- `refuter:14:4` `confirmed_fatal` on `lem-large-induced-subgraphs-in-the-property-star-four-outcome-theorem-contain-a-pure-or-x-sparse-polynomial-blockade`: narrowed the theorem by adding the missing ambient size hypothesis `|G| >= epsilon^(-10 d^2)` and aligned the conclusion with integer `k`.
- `refuter:14:5` `confirmed_fatal` on `thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property`: repaired the false equality `m^c = 2` to the valid inequality `m^c <= 2`.
- `refuter:14:6` `confirmed_fatal` on `thm-property-star-and-leaf-reducibility-imply-generalized-niceness`: repaired the predecessor theorem to output an integer blockade parameter and recorded that hypothesis explicitly before invoking the published local-to-global blockade theorem.

Additional in-scope repair forced by the refuter chain:

- `lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem` now replaces the pure-blockade length parameter by the integer `k = floor(sqrt(ell))` and strengthens the `d` choice accordingly, so the downstream theorem receives the exact integer witness it requires.

Batch-14 high/critical `risk_review` records written:

- `lem-rodl-initialization-upgrades-generalized-niceness-to-a-restricted-set-blockade-or-polynomial-clique-or-stable-set`
- `lem-large-induced-subgraphs-without-a-polynomial-clique-or-stable-set-force-complete-or-anticomplete-blockades`
- `thm-leaf-reducible-wonderful-generalized-nice-finite-families-have-the-erdos-hajnal-property`
- `lem-property-star-and-leaf-reducibility-yield-five-comb-outcomes`
- `lem-property-star-and-leaf-reducibility-yield-a-long-x-sparse-or-complete-blockade-or-a-better-outcome`
- `lem-a-large-y-ten-thirds-restricted-induced-subgraph-forces-a-y-eleven-thirds-restricted-induced-subgraph`
- `lem-constant-scale-restricted-property-star-yields-a-restricted-subgraph-a-polynomial-clique-or-stable-set-or-two-blockade-alternatives`
- `lem-rodl-initialization-removes-the-constant-scale-restriction-in-the-property-star-four-outcome-theorem`
- `thm-property-star-and-leaf-reducibility-imply-generalized-niceness`
- `ex-a-large-epsilon-restricted-induced-subgraph-gives-a-polynomial-clique-or-stable-set`

## Batch 18

Touched carriers:

- `amended_repair` on `thm-morse-functions-are-dense-by-relative-jet-transversality`: the reader's `K_0` repair stands, and I also repaired the live shell-support/transversality defect.
- `amended_repair` on `lem-finitely-many-critical-values-can-be-separated-locally`: the reader's compact-complement argument stands, and I further strengthened the statement to the neighborhood-based `C^infty` form needed downstream.
- `amended_repair` on `lem-properness-survives-a-controlled-locally-finite-perturbation`: the reader's citation/properness repair still stands, but the live carrier is now amended because the batch-18 contract entry changed later on current disk.
- `amended_repair` on `prop-proper-morse-exhaustions-exist-on-smooth-manifolds`: the reader's base-case cleanup stands, and I also replaced the unsupported shell-support deduction with a neighborhood-first proof.
- `amended_repair` on `ex-separating-equal-critical-values-by-bump-functions`: the reader's explicit torus computation stands, and the carrier is now amended by the regenerated contract entry and required `risk_review`.

Refuter findings:

- `refuter:18:1` `confirmed_fatal` on `cex-noncompact-smallness-without-the-strong-topology-can-create-critical-points-at-infinity`: repaired the `n = 1` derivative computation.
- `refuter:18:2` `confirmed_fatal` on `thm-morse-functions-are-dense-by-relative-jet-transversality`: repaired the shell-support argument by working on `C_n = K_n \\ N_{n-1}` instead of on boundary points unreachable by the permitted support.
- `refuter:18:3` `confirmed_fatal` on `prop-proper-morse-exhaustions-exist-on-smooth-manifolds`: removed the unsupported claim that strong-topology smallness alone can impose compact shell support.
- `refuter:18:4` `confirmed_fatal` on `rem-noncompact-morse-genericity-is-not-an-open-dense-claim`: narrowed the title and prose so the remark now says only what the page and counterexample actually prove.
- `refuter:18:5` `confirmed_fatal` on `thm-excellent-morse-functions-are-open-dense-on-a-compact-manifold`: repaired the density proof to use the strengthened neighborhood-based separation lemma inside the same `C^infty` neighborhood.

Batch-18 high/critical `risk_review` records written:

- `lem-morse-functions-are-transverse-differentials`
- `thm-morse-functions-are-dense-by-relative-jet-transversality`
- `lem-compact-morse-critical-points-have-uniform-hessian-gaps`
- `thm-excellent-morse-functions-are-open-dense-on-a-compact-manifold`
- `prop-proper-morse-exhaustions-exist-on-smooth-manifolds`
- `ex-separating-equal-critical-values-by-bump-functions`
- `cex-morse-functions-need-not-have-distinct-critical-values`

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts ...` on all changed item files
- `node tools/tsx-run.mjs tools/precheck.mts ...` on all changed item files
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-14.proof-contracts.json ...`
- `node tools/regen-contract-entries.mjs research/frontier-30-batch-18.proof-contracts.json ...`
- `node tools/proof-contract.mjs research/frontier-30-batch-14.proof-contracts.json --strict`
- `node tools/proof-contract.mjs research/frontier-30-batch-18.proof-contracts.json --strict`
- `node tools/citation-fidelity.mjs research/frontier-30-batch-14.proof-contracts.json`
- `node tools/citation-fidelity.mjs research/frontier-30-batch-18.proof-contracts.json`
- `node tools/boundary-audit.mjs research/frontier-30-batch-14.proof-contracts.json --items-dir items --fail-on-contradicted`
- `node tools/boundary-audit.mjs research/frontier-30-batch-18.proof-contracts.json --items-dir items --fail-on-contradicted`
- `node tools/content-policy.mjs research/frontier-30-batch-14.pages.json research/frontier-30-batch-18.pages.json`
- `node tools/risk-report.mjs research/frontier-30-batch-14.proof-contracts.json --require-reviewed`
- `node tools/risk-report.mjs research/frontier-30-batch-18.proof-contracts.json --require-reviewed`
- `node tools/rendercheck.mjs ...` on the changed items plus the six routed page files
- `node tools/defect-ledger.mjs append --file research/frontier-30-alpha-g-6b-ledger-rows.json`

Result: all of the checks above passed on current disk.

I did not run `node tools/step6-scope.mjs stamp --run frontier-30 --group g`
or `check --phase adjudicate`, because this dispatch assigns `subject_sha256`
stamping to the stage rather than to the Alpha worker.

## Gate repair - `step6-routing-adjudicate`

- Reproduced the live stale-touched queue on the current tree and confirmed one batch-18 touched-decision drift: `lem-properness-survives-a-controlled-locally-finite-perturbation`.
- Re-read the current lemma against `research/frontier-30-reader-18.md` and found no new mathematical defect. I retagged the touched decision from `accepted_repair` to `amended_repair` and appended the supplemental gate row `frontier-30-S6-g-gate-18-1` via `research/frontier-30-alpha-g-6b-gate-ledger-rows.json`.
- Focused rerun: batch `18` -> `20 item(s) routed, 10 adjudication obligation(s), 0 error(s)`.
