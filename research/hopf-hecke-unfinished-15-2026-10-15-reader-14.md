# Step 3a reader report — batch 14

Run: `hopf-hecke-unfinished-15-2026-10-15`  
Role: reader  
Date: 2026-10-15

## Opened inventory

Assigned pages:

- `cyclotomic-murphy-bases-and-cellular-module-constructions` — opened [A-page](../library/hopf-hecke-algebras/cyclotomic-murphy-bases-and-cellular-module-constructions.md).
- `cyclotomic-murphy-bases-and-cellular-module-constructions-examples` — opened [B-page](../library/hopf-hecke-algebras/cyclotomic-murphy-bases-and-cellular-module-constructions-examples.md).

Assigned items, reviewed in dependency order:

- `def-hh-cell-datum-dominance-and-cell-ideals`
- `lem-hh-cyclotomic-anti-involution-fixes-generators`
- `def-hh-cyclotomic-murphy-elements`
- `lem-hh-type-a-garnir-straightening-and-murphy-cell-law`
- `lem-hh-type-a-murphy-strong-tableau-straightening`
- `lem-hh-componentwise-initial-row-straightening`
- `lem-hh-cyclotomic-component-shift-and-dominance-ideals`
- `thm-hh-cyclotomic-murphy-basis-and-cellularity`
- `thm-hh-cell-modules-forms-and-radicals`
- `thm-hh-cellular-simple-module-classification-over-a-field`
- `ex-hh-rank-one-cyclotomic-cell-modules-and-forms`
- `ex-hh-type-a-rank-two-cell-module-specialization`

Local suppliers opened for the checked arguments included `def-algebra-over-a-commutative-ring`, `def-hh-multipartitions-standard-tableaux-and-generic-contents`, `def-hh-multiplicative-cyclotomic-hecke-algebra`, `lem-hh-free-associative-ring-and-relations-descent`, `lem-hh-finite-polynomial-and-localization-constructions`, `lem-hh-cyclotomic-commuting-jucys-murphy-generators`, `lem-hh-type-a-finite-hecke-basis-in-multiplicative-normalization`, `lem-hh-hecke-anti-involution-bar-and-normalization`, `thm-hh-generic-coxeter-hecke-standard-basis`, `thm-hh-parabolic-minimal-representatives-and-length-additivity`, `lem-hh-colored-permutation-rsk-and-tableau-square-count`, `lem-hh-finite-matrix-and-module-preliminaries`, `lem-dj-bridge-parabolic-double-coset-annihilation`, `lem-dj-bridge-sign-automorphism-and-star-dual`, `lem-bruhat-order-basic-properties-for-permutations`, `thm-hh-generic-cyclotomic-seminormal-models`, `thm-separated-hecke-residues-give-seminormal-idempotents-and-bases`, `lem-hh-cyclotomic-straightening-spanning`, `thm-hh-ariki-koike-basis-and-generic-splitness`, `def-hh-type-a-weight-lattice-laurent-ring-and-divided-differences`, `def-hh-type-a-affine-bernstein-presentation`, `lem-hh-universal-presentations-and-base-change`, `thm-dj-bridge-ordinary-specht-is-the-signed-conjugate-murphy-cell`, `thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra`, `thm-murphy-tableau-elements-form-a-cellular-basis`, and `lem-dj-bridge-murphy-cellular-basis-and-cell-form`.

I also opened `thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple` and `thm-wedderburn-artin-theorem` to check the closure of the published dependency finding described below.

Authoritative source passages reviewed:

- Andrew Mathas, *Hecke algebras and Schur algebras of the symmetric group*, Chapter 2, §§2.3–2.13, PDF pp. 14–18, and Chapter 3, Lemmas 3.12–3.18, PDF pp. 26–30. These give the abstract cellular constructions, simple-head classification, ordinary Garnir identity, straightening, and Murphy cellular basis. The local ordinary dominance proof was checked on its own, including its trace and signed double-coset argument.
- Richard Dipper, Gordon James, and Andrew Mathas, *Cyclotomic q-Schur algebras*, §3, Propositions 3.15–3.26, printed pp. 390–397. The author-hosted PostScript was downloaded from <https://pnp.mathematik.uni-stuttgart.de/iaz/iaz1/Dipper/papers/cyclo.ps> and text-converted for reading.
- Jun Hu and Andrew Mathas, *Seminormal forms and cyclotomic quiver Hecke algebras of type A*, arXiv:1304.0906v3, §3, especially Example 3.11, Lemma 3.12, and Proposition 3.17. These confirm the ordinary seminormal coefficient conventions used by the local spectral suppliers.

## Edits and evidence

Edited [the ordinary type-A Garnir item](../items/lem-hh-type-a-garnir-straightening-and-murphy-cell-law.md) and its batch proof contract at `research/hopf-hecke-unfinished-15-2026-10-15-batch-14.proof-contracts.json`.

- In proof step 2.1/F1, stated the one-generator Hecke multiplication rules used in the row-module computation and Bruhat-support argument.
- In step 4.1, expanded the proof that every non-Garnir belt assignment is standard. The rows remain increasing; columns before and after the belt compare belt entries with unchanged smaller or larger entries; in the sole shared belt column, any lower subset other than the smallest `j` labels leaves a smaller label in the upper complement. The first displaced smaller label also proves strict tableau dominance.
- In step 4.1, replaced the unsupported implication from a larger `i`-prefix sum to lexicographic order with the sorted-tuple argument: sorting `λ₁,…,λᵢ₋₁,λᵢ+1` strictly dominates `(λ₁,…,λᵢ)`, and the first `i` parts of the sorted `ν` dominate that tuple.
- In step 6.1, supplied the missing link from Hecke multiplication to prefix support: terms are represented by subwords, nonreduced subwords reduce by Coxeter deletion, and the distinguished parabolic representative is a length-additive suffix. The Bruhat comparison then gives the required strict tableau-prefix bound.
- Updated the corresponding proof-contract derivations for steps 2.1, 4.1, and 6.1. The carrier had no `verification.judge` record, so there was no stale judge record to remove.

The edit preserves the statement and its scope. The initially suspected issue that other Garnir belt assignments might fail column standardness was disproved by the shared-column check above; the final carrier retains their correct standardness claim and gives its justification.

Required validation after the final edit:

- `node tools/tsx-run.mjs tools/reflow.mts items/lem-hh-type-a-garnir-straightening-and-murphy-cell-law.md` — unchanged.
- `node tools/tsx-run.mjs tools/precheck.mts items/lem-hh-type-a-garnir-straightening-and-murphy-cell-law.md` — PASS, 1 checked, 0 failing.
- `node tools/proof-layout.mjs items/lem-hh-type-a-garnir-straightening-and-murphy-cell-law.md` — 1 item, 13 steps, 0 defects.

## Uneditable finding

`thm-separated-hecke-residues-give-seminormal-idempotents-and-bases` is a published prerequisite of the assigned `lem-hh-type-a-murphy-strong-tableau-straightening`. In its proof step 6.1, it infers
`dim_K(H/J(H)) = Σ_λ f^λ²`
from the completeness of the absolute simple cell modules and the Murphy basis count, then concludes `J(H)=0` and that their direct sum is faithful. The cited `thm-nonzero-cell-heads-classify-the-simple-modules-of-a-cellular-algebra` supplies simple-module completeness and absolute simplicity, but neither it nor the other declared dependencies supplies the semisimple-quotient dimension formula. The repository has relevant results in `thm-jacobson-radical-is-nilpotent-and-the-quotient-is-semisimple` and `thm-wedderburn-artin-theorem`, but the published item does not declare or apply them. A closure can be added by applying these results and using absolute simplicity to identify the division endomorphism rings with `K`; then the split Wedderburn decomposition has matrix sizes `f^λ`. This is a proof-closure defect, not a counterexample to the theorem.

The assigned strong-straightening item uses that faithfulness in Facts F2 and proof step 1.1 to identify the algebra with a product of endomorphism rings. I could not edit the published supplier; it is the sole finding in the companion findings JSON.

## Page verdicts and blocker

- **A page — not fully verified.** The page summary accurately describes the assigned proofs, and no separate page-prose defect was found. Its all-shape prefix route depends on the published separated-residue supplier, whose faithful-action inference has the proof-closure gap above.
- **B page — calculations verified, dependency closure not fully verified.** Both examples’ algebra and form computations check out. Their cellular-basis and cell-module claims depend on the A-page theorem chain, so the same published-supplier gap remains relevant to the companion page.

There is no operational blocker. The mathematical review blocker is the unedited published-dependency proof gap above; the existing local Wedderburn and Jacobson-radical results specify a repair route for its owner.

## Coverage note

All assigned pages and items and the local suppliers needed to check their claims were opened. The Dipper–James–Mathas PostScript was read from text conversion; its glyph layout was not separately rendered. The extensive braid-sweep cases in the published cyclotomic PBW spanning supplier were reviewed in their written form but not all recomputed symbol by symbol; no additional specific failure was isolated.
