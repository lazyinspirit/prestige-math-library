# Batch 64 authoring notes

## Scope and planning reconciliation

- Run: `machine-learning-all-101-2026-10-19`; batch 64; scheduling input recorded in the dispatch: `2775ee7b7522a8bc07497ecc17f4260d336375989323c6e6a673e070ba573ea4`.
- `research/machine-learning-all-101-2026-10-19-owner-authoring-direction.md` is absent. The task, ML-57 section in `research/plan-machine-learning-track.md`, and plan-spec pair entry agree on the A/B identities, three required pages, claim scope, and proof route. No plan/spec prose conflict.
- The design proposes four item IDs while naming two distinct examples. I placed the affine coupling and singular-support example as separate B-page examples; this preserves both planned example obligations and keeps the B page at two items.
- The plan requires the matrix-differentiation page and names `thm-determinant-differential-and-jacobis-formula`, but none of the listed claims differentiates a determinant with respect to a parameter. The density and composition proofs use the chain rule and determinant multiplicativity. The matrix page remains in the page-level `requires`; Jacobi's formula is not a logical item dependency for the claims authored here. The exact public interface contains no parameter-gradient claim.
- The plan lists Papamakarios limitations at PDF pp. 52–54. The fetched arXiv v1 paper is 60 PDF pages; those pages do not contain the cited manifold limitation. The directly relevant material is §5.4–5.5, PDF pp. 34–36, which discusses manifold extensions and their topology restrictions. The singular line-support obstruction is proved locally from the change-of-variables density formula and the published null-set suppliers. No source retrieval failed.
- The dispatch scheduling hash `2775ee7b...573ea4` differs from `input_sha256` in the current batch-dependency artifact (`9deb0750...e655`). This is recorded as `scheduling_hash_conflict: true` in `batch-64.dependency-inputs.json`. The current artifact still gives batch 64 level 0 with no in-run batch suppliers. Owner reconciliation is required for the hash mismatch; no shared plan or engine file was changed.
- Read-only autopilot status at authoring showed Step 1 scaffold at 5/101 with no workers in flight and an owner repair blocker in `research/machine-learning-all-101-2026-10-19-step1-blockers.json`. That blocker is outside batch 64.

## Inventory, dependencies, and levels

The batch manifest was populated before item carriers. Batch 64 has no in-run pair suppliers. In-run item levels are:

| Item | Page | Direct in-run suppliers | Level |
|---|---|---|---:|
| `def-normalizing-flow` | A | none | 0 |
| `thm-change-of-variables-density-for-diffeomorphic-flow` | A | `def-normalizing-flow` | 1 |
| `thm-triangular-flow-universal-density-representation` | A | definition and density theorem | 2 |
| `ex-affine-coupling-triangular-jacobian` | B | definition and density theorem | 2 |
| `ex-singular-data-support-limitation` | B | definition and density theorem | 2 |

All direct external item dependencies were checked against current published bodies. The A/B page `requires` remain `fubini-and-change-of-variables`, `matrix-differentiation-and-first-order-spectral-perturbation`, and `product-measures-and-the-fubini-tonelli-theorems`. Additional published suppliers used by the local proofs are recorded in the manifest and `batch-64.dependency-inputs.json`.

- `thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions` applies to C¹ diffeomorphisms of open equal-dimensional domains and nonnegative Lebesgue-measurable integrands. Its proof and exact statement explicitly assume Countable Choice; the density theorem and all dependent items carry `def-countable-choice`. No full Axiom of Choice is used.
- `thm-determinant-multiplicative` supplies determinant composition, and `thm-determinant-of-a-triangular-matrix` supplies the lower-triangular diagonal product. `thm-chain-rule-for-total-derivatives` supplies derivative composition. `thm-euclidean-inverse-function-theorem` converts the triangular map's everywhere-invertible derivative into local C¹ inverses; recursive quantile inversion proves global bijectivity.
- The singular-support example uses `thm-lebesgue-measure-of-a-box-of-every-kind`, `prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null`, and `cor-integral-over-a-null-set-vanishes`. Its target is the pushforward of uniform measure on `[0,1]` to `[0,1]×{0}`.
- Same-run cross-batch dependencies are empty.

## Sources and retrieval evidence

- Papamakarios et al., *Normalizing Flows for Probabilistic Modeling and Inference*, arXiv v1: read the complete relevant arguments in §2.1 (PDF pp. 2–3) for the base density, inverse-Jacobian formula, and composition; §2.2 (PDF pp. 3–4) for the conditional-CDF map to the uniform cube; §3.1 (PDF pp. 10–16) for triangular Jacobians and affine/autoregressive transformations; and §5.4–5.5 (PDF pp. 34–36) for manifold-flow scope and topology limits. The full 60-page PDF fetched and passed inspection; unrelated sections were not represented as read.
- Sheldon, COMPSCI 688 Lecture 23, *Normalizing Flows*: read the complete 7-page annotated note (slides 1–25), including the complete one-dimensional change-of-variables argument, multivariate density formula and composition expression (PDF pp. 2–5), and the triangular Jacobian/Real-NVP construction (PDF pp. 5–6). The note's empirical demonstration and performance comments are not used as mathematical claims.
- `node tools/source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-64.source-coverage.json --stamp` passed: 4/4 source entries fetch-verified, 4 newly stamped, 0 documented drops, 0 recovery retries, exit code 0. The byte counts, hashes, and timestamps are in the source-coverage and source-evidence files.
- No retrieval failure occurred, so no `source_resolution` record is required. The plan's pp. 52–54 locator mismatch is recorded above; the replacement §5.4–5.5 reading and local proof fully cover the assigned limitation claim.

## Item progress

### `def-normalizing-flow` — authored

Defines a finite composition of global C¹ diffeomorphisms, a normalized Lebesgue base density, and its output measure by preimage. It invokes no choice axiom. Direct suppliers: `def-c-one-map-and-local-inverse` and `def-measure-with-density`. Sources: Papamakarios §2.1 and the complete Sheldon lecture note.

### `thm-change-of-variables-density-for-diffeomorphic-flow` — authored

For an equal-dimensional global C¹ diffeomorphism, the output law has density `p_U(T^{-1}x)|det D(T^{-1})(x)|`; a finite composition's forward and inverse log-Jacobian terms add. The proof applies the published nonnegative C¹ change-of-variables theorem in the inverse direction and separately proves measurability of the density version; in that measurability argument, the base-domain level sets are mapped by $T$ into the output domain. The composition statement declares all intermediate open domains, and the proof writes the inverse derivative product in its exact matrix order. Countable Choice is used exactly through the change-of-variables and measurability suppliers. The matrix-differentiation/Jacobi item is not used because no parameter derivative is claimed.

### `thm-triangular-flow-universal-density-representation` — authored

For a positive density with an everywhere-defined factorization into positive normalized conditional densities and jointly C¹ conditional CDF slices that are increasing bijections onto `(0,1)`, constructs the inverse Rosenblatt map from the uniform cube. The derivative is triangular with determinant `p(x)`; recursive inversion proves global bijectivity, and the inverse function theorem supplies a global C¹ inverse. No finite-network approximation or trainability claim is made. Countable Choice enters through the exact-density and cube-volume suppliers.

### `ex-affine-coupling-triangular-jacobian` — authored

Checks the unit-scale two-coordinate shear `(u,v) ↦ (u,u+v)`, gives its linear inverse and lower-triangular Jacobian, and applies the exact density theorem. This is the one-coordinate affine-coupling case; Countable Choice is carried from the density formula.

### `ex-singular-data-support-limitation` — authored

Uses the image of the uniform law on `[0,1]` under `t↦(t,0)`. The target puts mass one on the closed Borel box `[0,1]×{0}`, which is two-dimensional Lebesgue null; every full-dimensional flow output has a Lebesgue density and puts mass zero there. Countable Choice is carried through the stated box, null-set, and density suppliers.

## Validation and handoff

- Authoring carriers, YAML-only A/B pages, item inventory, proof contracts, source coverage, and source evidence are present. Page bodies are empty; `page_layout: compact-v1` remains for the engine to set at its designated pass.
### Validation and readiness evidence

- `node tools/manifest-deps.mjs research/machine-learning-all-101-2026-10-19-batch-64.pages.json`: pass, 5 items, no missing dependency arrays.
- `node tools/content-policy.mjs research/machine-learning-all-101-2026-10-19-batch-64.pages.json`: pass, 5 scoped items, 0 errors or warnings.
- `node tools/depcheck.mjs --items-file /tmp/prestige-batch-64-items.json`, `node tools/fwdcheck.mjs --items-file /tmp/prestige-batch-64-items.json`, and `node tools/extcheck.mjs --items-file /tmp/prestige-batch-64-items.json`: all pass for the five assigned items.
- `node tools/tsx-run.mjs tools/precheck.mts` on the four proof-bearing items: pass, 4 checked, 0 failing. The dependency-layer order suggested by precheck was adopted and the contracts were synchronized.
- `node tools/proof-layout.mjs` on the five assigned items: pass, 5 items, 15 steps, 0 defects.
- Strict `proof-contract.mjs` on the five assigned items: pass, 5/5, 0 errors or warnings. The four proof-bearing items have exact supplier excerpts, step mappings, and anchored boundary worksheets; the definition correctly has no proof-step contract.
- `node tools/rendercheck.mjs` on the five items and both page carriers: pass, 7 files; real KaTeX and the renderer's YAML parser both succeeded. Both A/B page bodies are empty YAML-only carriers.
- `node tools/coverage-checklist.mjs research/machine-learning-all-101-2026-10-19-batch-64.coverage.json`: pass, 2 pages, 15 harvested results, 0 errors or warnings. `manifest-integrity.mjs --run machine-learning-all-101-2026-10-19`: pass, all 202 pages owed are present.
- The native `dependencyLevels` calculation on the batch-64 manifest passes locally with levels 0, 1, 2, 2, 2, matching every manifest label. The repository-wide `item-dependency-levels.mjs check` remains blocked by 18 empty inventories in other batches and one unrelated mismatch: `lem-finite-metric-plan-lifts-to-a-borel-coupling` is labelled level 0 but computes to level 1 (19 errors total).
- The repository-wide `batch-dependency-levels.mjs check` reports `Stale batch dependency levels for machine-learning-all-101-2026-10-19; recompute before authoring`. No write/recompute was made because the schedule and engine artifacts are owner-controlled. The dispatch hash `2775ee7b7522a8bc07497ecc17f4260d336375989323c6e6a673e070ba573ea4` still differs from the recorded artifact input hash `9deb0750cbd2ef918a48bd9b088ce55ee5adc9cbdbd0b870f6dba6c157e5e655`; both record batch 64 at level 0 with no prerequisite batches.
- Run-wide `proof-contract-coverage.mjs` stops at the separate empty frontier inventory `distribution-shift-and-domain-adaptation`. The scoped batch-64 strict contract check above passes.
- Earlier unscoped `fwdcheck` reported legacy undeclared forward links in unrelated items; its selected batch-64 check passes.
- `source-fetch-check.mjs --coverage research/machine-learning-all-101-2026-10-19-batch-64.source-coverage.json --stamp` passed as recorded above: 4/4 source entries verified and stamped.
- Local Step-1 readiness records are recorded for all five items after the scoped checks. They mean this pair's authoring, prerequisites, placement, and contracts are complete; they do not resolve the owner-side scheduler hash/staleness blockers or constitute independent approval.
