# frontier-27 reader-1 report

Session date: 2026-08-31.

## Scope opened

- Batch manifest and notes: `research/frontier-27-batch-1.pages.json`, `research/frontier-27-batch-1.proof-contracts.json`, `research/frontier-27-batch-1.notes.md`, `research/frontier-27-reader.task.md`, `research/frontier-27-beta-1.task.md`.
- Assigned pages:
  - `krull-dimension-and-height-theorems` (A): page prose at `library/commutative-algebra/krull-dimension-and-height-theorems.md`.
  - `krull-dimension-and-height-theorems-examples` (B): page prose at `library/commutative-algebra/krull-dimension-and-height-theorems-examples.md`.
- Assigned A-page items opened:
  `cor-minimal-prime-has-height-zero`, `lem-prime-chains-in-a-domain-start-at-zero`, `lem-height-in-quotient-is-relative-chain-length`, `lem-principal-ideal-theorem-reduction-to-local-domain`, `lem-principal-ideal-theorem-associated-prime-step`, `thm-krull-principal-ideal-theorem`, `cor-noetherian-local-domain-dimension-zero-iff-field`, `cor-minimal-prime-over-a-nonzerodivisor-has-height-one`, `lem-height-theorem-first-generator-reduction`, `lem-height-theorem-quotient-induction`, `thm-krull-height-theorem`, `cor-height-of-a-prime-bounded-by-minimal-number-of-generators`, `lem-height-converse-parameter-selection`, `thm-krull-height-theorem-converse`, `def-system-of-parameters-and-parameter-ideal`, `lem-parameter-ideal-equivalent-m-primary`, `lem-parameter-selection-avoids-minimal-components`, `lem-parameter-dimension-drop-is-exact`, `thm-existence-of-systems-of-parameters`, `thm-dimension-as-minimal-number-of-radical-generators`, `cor-dimension-drops-under-a-parameter`, `cor-localisation-dimension-does-not-increase`, `cor-quotient-dimension-does-not-increase`, `lem-polynomial-ring-dimension-lower-chain`, `lem-polynomial-prime-contraction-height-jump-at-most-one`, `lem-polynomial-ring-dimension-upper-bound`, `thm-dimension-of-a-polynomial-ring-over-a-noetherian-ring`, `cor-dimension-of-a-finite-polynomial-ring-over-a-field`, `lem-affine-domain-normalisation-dimension-upper-bound`, `lem-affine-domain-normalisation-dimension-lower-bound`, `thm-affine-domain-dimension-transcendence-degree`, `lem-affine-domain-chain-dimension-formula-step`, `thm-dimension-formula-for-affine-domains`, `cor-height-plus-quotient-dimension-affine-domain`, `cor-affine-domain-maximal-ideal-height-equals-dimension`, `cor-maximal-chains-in-affine-domains-have-equal-length`, `rem-catenarity-boundary`.
- Assigned B-page items opened:
  `ex-relative-height-in-a-quotient`, `ex-principal-ideal-height-zero-for-a-zerodivisor`, `ex-height-theorem-bound-sharp`, `ex-system-of-parameters-not-a-minimal-generating-set`, `ex-localisation-strictly-lowers-dimension`, `ex-polynomial-dimension-zero-ring-boundary`, `ex-affine-dimension-formula`.
- Published dependencies opened for verification:
  `def-height-of-a-prime-ideal`, `lem-height-equals-local-dimension`, `thm-prime-spectrum-of-a-quotient-bijection`, `thm-prime-spectrum-of-a-localisation-bijection`, `thm-noetherian-ring-quotients-and-localisations`, `thm-localisation-at-a-prime-is-local`, `thm-quotient-is-domain-iff-ideal-prime`, `thm-artinian-ring-characterisation-by-primes`, `thm-nakayama-lemma`, `thm-primary-submodule-characterisations`, `cor-polynomial-ring-over-a-field-is-a-pid`, `cor-noether-normalisation-module-finiteness`, `cor-integral-extension-lifts-finite-prime-chains`, `thm-transitivity-of-algebraicity`, `lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite`, `lem-finite-prime-avoidance`, `lem-minimal-prime-over-an-ideal-exists`, `thm-noetherian-ring-has-finitely-many-minimal-primes`, `thm-going-up`, `thm-going-down-over-normal-domains`, `thm-incomparability-for-integral-extensions`, `cor-transcendence-degree-tower-additivity`.
- Source text opened directly for disputed proof routes: Milne `CA.pdf` in the web reader, especially the chain/dimension material around Theorems 18.5, 18.8, 21.6, and 21.7.

## Edits applied

- Repaired statement/proof byte corruption in `cor-minimal-prime-has-height-zero`.
- Narrowed `lem-height-theorem-quotient-induction` to the chosen chain that actually contains the selected `b`, and updated its contract text accordingly.
- Rewrote `lem-polynomial-ring-dimension-upper-bound` so the bound is proved by the top contraction fiber and the strict contraction chain below `\mathfrak pR[x]`; adopted the canonical precheck numbering and updated the contract.
- Reworked `thm-krull-height-theorem-converse` to use local dimension via `def-height-of-a-prime-ideal`, aligned its deps, and updated the contract and batch manifest entry.
- Replaced the false localization example `S^{-1}k[x,y]\cong k[x,x^{-1},y]` with the valid localization `k[x,y]_{(x)}`, updated deps/strategy, and updated the contract and manifest.
- Cleaned the control-character corruption in `ex-principal-ideal-height-zero-for-a-zerodivisor` and `ex-system-of-parameters-not-a-minimal-generating-set`.
- Fixed LaTeX corruption in the displayed proof lines of `thm-dimension-formula-for-affine-domains`, but its core reverse inequality remains unresolved; see blockers.

## Confirmed editable defects still open

1. `items/lem-principal-ideal-theorem-associated-prime-step.md:56`
   The proof concludes `M_n=xM_n` in the local ring `R_{\mathfrak p}` and then invokes Nakayama via `[L4]`. But line 50 states `x\notin\mathfrak p`, so `x/1` is a unit in `R_{\mathfrak p}`, not an element of the maximal ideal. The cited Nakayama form does not apply, so the stabilization step does not prove `M_n=0`. This blocks `thm-krull-principal-ideal-theorem` and the downstream height-theorem chain.

2. `items/thm-dimension-formula-for-affine-domains.md:53`
   The proof justifies the easy inequality by concatenating chains, but the converse direction is asserted only as “every maximal chain through the unique irreducible component `Spec(A)` has length at most the same sum.” No opened dependency supplies that bound, and it is not an immediate chain-counting consequence. This leaves the theorem unsupported on its current dependency closure and blocks `cor-height-plus-quotient-dimension-affine-domain`, `cor-affine-domain-maximal-ideal-height-equals-dimension`, `cor-maximal-chains-in-affine-domains-have-equal-length`, and the dependent B-page examples.

## Page verdicts

- `krull-dimension-and-height-theorems` (A): blocked. Several local repairs landed, but the principal-ideal associated-prime lemma and the affine-domain dimension formula remain unresolved.
- `krull-dimension-and-height-theorems-examples` (B): blocked by upstream A-page defects. The local localization example and two byte-corrupted examples are repaired, but examples depending on the unresolved affine-domain formula are not fully closed.

## Checks

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-height-theorem-quotient-induction.md items/lem-polynomial-ring-dimension-upper-bound.md items/thm-krull-height-theorem-converse.md items/ex-localisation-strictly-lowers-dimension.md items/thm-dimension-formula-for-affine-domains.md items/ex-principal-ideal-height-zero-for-a-zerodivisor.md items/ex-system-of-parameters-not-a-minimal-generating-set.md`
  passed; the modified Markdown was reflowed where needed.
- `node tools/tsx-run.mjs tools/precheck.mts items/cor-minimal-prime-has-height-zero.md items/lem-height-theorem-quotient-induction.md items/lem-polynomial-ring-dimension-upper-bound.md items/thm-krull-height-theorem-converse.md items/ex-localisation-strictly-lowers-dimension.md items/thm-dimension-formula-for-affine-domains.md items/ex-principal-ideal-height-zero-for-a-zerodivisor.md items/ex-system-of-parameters-not-a-minimal-generating-set.md`
  passed on 2026-08-31.
- `node tools/coverage-checklist.mjs --require-destination research/frontier-27-batch-1.coverage.json`
  passed on 2026-08-31: `1` page, `36` harvested results, `0` errors, `0` warnings.

## Blockers

- The two remaining confirmed defects are both in editable batch-1 A-page items, so no uneditable finding is emitted in the structured JSON.
