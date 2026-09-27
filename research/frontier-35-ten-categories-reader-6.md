# Step 5a reader report — batch 6

Run: `frontier-35-ten-categories`  
Date: 2026-09-27  
Role: independent reader

## Verdict

Read all four assigned page carriers and all 80 assigned item files in their current form. The four page summaries are sound. I found six repairable item defects or proof gaps; all six were repaired in assigned draft items, and their proof-contract records were updated. No uneditable defect or blocker remains in the assigned scope. No page prose was edited, and no stale `verification.judge` record was present in the changed items.

## Page inventory and verdicts

1. `library/scheme-theory/diagonals-separated-morphisms-and-valuative-uniqueness.md` — A page, 29 items. The summary accurately describes the diagonal, separatedness, and valuative criteria. No page-prose defect found.
2. `library/scheme-theory/diagonals-separated-morphisms-and-valuative-uniqueness-examples.md` — B page, 8 items. The summary fits its assigned examples. No page-prose defect found.
3. `library/scheme-theory/kahler-differentials-conormal-sequences-and-infinitesimal-lifting.md` — A page, 34 items. The summary accurately describes the differential, conormal, tangent-space, and infinitesimal-lifting material. No page-prose defect found.
4. `library/scheme-theory/kahler-differentials-conormal-sequences-and-infinitesimal-lifting-examples.md` — B page, 9 items. The summary fits its assigned examples. No page-prose defect found.

## Opened item inventory

### Diagonals and valuative uniqueness A page — 29

`def-locally-closed-immersion`, `def-separated-morphism-schemes`, `lem-closed-immersion-local-on-target`, `def-separated-scheme-over-base`, `lem-diagonal-is-immersion`, `lem-affine-morphism-separated`, `cor-affine-schemes-separated`, `lem-separated-stable-under-base-change`, `lem-separated-stable-under-composition`, `lem-separated-local-on-base`, `lem-monomorphism-diagonal-isomorphism`, `lem-graph-closed-separated-target`, `thm-morphisms-agree-closed-equalizer-separated-target`, `cor-morphisms-equal-on-dense-open-reduced-source`, `lem-diagonal-quasi-compact-iff-quasi-separated`, `def-valuative-diagram-separatedness`, `lem-separated-implies-valuative-uniqueness`, `lem-quasi-compact-immersion-boundary-specialization`, `lem-local-domain-dominated-by-valuation-overring`, `lem-immersion-with-closed-image`, `thm-valuative-criterion-separatedness`, `thm-immersion-monomorphism-locally-finite-type`, `lem-separatedness-of-open-and-closed-immersions`, `thm-separatedness-gluing-overlap-criterion`, `cor-doubled-origin-not-separated`, `def-relative-projective-space-standard-charts`, `lem-projective-space-diagonal-closed`, `rem-hausdorff-analogy-limited`, `rem-valuative-criterion-quantifies-all-valuation-rings`.

### Diagonals and valuative uniqueness B page — 8

`ex-affine-line-diagonal-ideal`, `ex-projective-line-diagonal-bihomogeneous-equation`, `cex-doubled-origin-diagonal-not-closed`, `cex-doubled-origin-valuative-nonuniqueness`, `ex-graph-closed-polynomial-map-scheme`, `cex-zariski-space-nonhausdorff-yet-separated-scheme`, `ex-open-immersion-valuative-uniqueness-not-existence`, `cex-dvr-only-test-unsafe-without-hypotheses`.

### Kähler differentials A page — 34

`def-derivation-algebra`, `def-kahler-differentials-algebra`, `thm-kahler-differentials-existence-presentation`, `cor-derivations-represented-by-differentials`, `lem-differentials-polynomial-algebra-free`, `thm-conormal-exact-sequence-algebra`, `cor-jacobian-presentation-differentials`, `thm-transitivity-exact-sequence-differentials`, `lem-differentials-localization`, `lem-differentials-base-change`, `def-sheaf-relative-differentials`, `thm-sheaf-differentials-universal-property`, `lem-affine-module-sheaf-universal-property`, `lem-sheaf-differentials-affine-compatibility`, `thm-conormal-sequence-closed-immersion`, `thm-transitivity-sequence-schemes`, `lem-differentials-commute-base-change-schemes`, `def-relative-cotangent-space`, `thm-cotangent-space-maximal-ideal-quotient`, `thm-tangent-vectors-dual-numbers`, `lem-differential-of-morphism-via-cotangent-map`, `def-formally-unramified-morphism`, `def-formally-smooth-morphism`, `def-formally-etale-morphism`, `lem-differentials-diagonal-ideal-square`, `thm-formally-unramified-differentials-zero`, `def-unramified-morphism-finite-type`, `thm-unramified-diagonal-open-immersion`, `lem-field-is-noetherian`, `lem-finite-type-field-zero-differentials-finite-separable`, `lem-etale-residue-extensions-finite-separable`, `def-smooth-relative-dimension-via-differentials`, `rem-conormal-map-need-not-injective`, `rem-differentials-detect-infinitesimals-not-all-singularities-alone`.

### Kähler differentials B page — 9

`ex-differentials-polynomial-ring`, `ex-differentials-hypersurface`, `ex-differentials-dual-numbers`, `ex-differentials-separable-field-extension-zero`, `cex-differentials-purely-inseparable-field-nonzero`, `cex-conormal-left-map-not-injective`, `ex-tangent-vectors-affine-space-dual-numbers`, `ex-unramified-closed-point-immersion`, `cex-frobenius-zero-tangent-map-not-formally-etale`.

## Repairs and evidence

1. `items/lem-diagonal-is-immersion.md`: removed the false claim that every point of `X ×_S X` lies in one of the chart opens `Q_i`. The hypotheses choose an affine cover of `X`; they do not force both projections of an arbitrary product point into the same selected chart. The proof now uses only what it needs: for any `x`, choose `U_i` containing `x`, so `Δ(x) ∈ Q_i`. I regrouped the residue-field, open-neighborhood, and local closed-immersion steps to the precheck’s canonical numbering. The diagonal identities and fibre-product point description support the image characterization.
2. `items/lem-separated-stable-under-composition.md`: removed an incorrect identification of the graph pullback square with `X ×_Y X`. The graph square pulls back to `X`; the map `u: X ×_Y X → X ×_S X` is instead the base change of `Δ_{Y/S}` along `g ×_S g`. The proof now verifies that square directly by the universal property of `X ×_Y X`. Removed the now-unused graph-lemma dependency and updated the contract.
3. `items/lem-diagonal-quasi-compact-iff-quasi-separated.md`: replaced the invalid claim that the inverse image of an affine open is closed in a finite union of chart preimages; the complement of an open subset need not be open. The replacement covers an affine target open by finitely many distinguished opens inside product charts. Their diagonal preimages are distinguished opens in quasi-compact chart intersections, hence quasi-compact by a finite affine cover. A finite union then gives the required quasi-compact inverse image. This matches the quasi-compact-morphism criterion in [Stacks Lemma 26.19.2 (Tag 01K4)](https://stacks.math.columbia.edu/tag/01K4), lines 24–33.
4. `items/cex-doubled-origin-valuative-nonuniqueness.md`: corrected the alleged lifts’ domains. The chart inclusions have domains `U` and `V`; the lifts are the morphisms `Spec R → U,V` induced by `x ↦ t` and `y ↦ t`. Their restrictions agree on the glued generic open and their closed points land at the two different origins. Corrected the related fact statement and proof contract.
5. `items/cex-dvr-only-test-unsafe-without-hypotheses.md`: replaced the false assertion that every element of the union field is a monomial by compatible normalized orders of vanishing on `k(t^(1/n))`. Proved that the valuation ring has exactly the primes `(0)` and `m_V`, that `V_g=K` for nonzero `g∈m_V`, and that the generic-map image of `t` in the DVR contradiction is nonzero. Replaced the quasi-separatedness shortcut, which checked only the two displayed charts although the cited affine-pair criterion quantifies over all affine opens, by the finite affine-cover criterion in [Stacks Lemma 26.21.6 (Tag 01KH)](https://stacks.math.columbia.edu/tag/01KH), condition (3) implies (1), lines 49–56. Removed unused local dependencies and updated the proof contract.
6. `items/ex-differentials-hypersurface.md`: made the `f=x^2` computation match the stated hypothesis `2 ≠ 0`, including when `2` is a zero divisor. In `B=k[x,y]/(x^2)`, the nonzero degree-one polynomial `2x` is not in the degree-at-least-two ideal `(x^2)`, so the displayed Jacobian relation is nonzero. Updated the contract’s degenerate-case evidence.

Updated the six corresponding entries in `research/frontier-35-ten-categories-batch-6.proof-contracts.json`. The item files contained no stale `verification.judge` fields, so none were removed.

## Source checks

- [Stacks Section 26.17 (Tag 01JO)](https://stacks.math.columbia.edu/tag/01JO), Lemmas 26.17.2–26.17.5, lines 30–56: affine fibre products, open restrictions, affine covers of products, and the residue-field-tensor description of product points.
- [Stacks Lemma 26.19.2 (Tag 01K4)](https://stacks.math.columbia.edu/tag/01K4), lines 24–33: quasi-compactness can be checked on an affine open cover of the target.
- [Stacks Lemma 26.21.6 (Tag 01KH)](https://stacks.math.columbia.edu/tag/01KH), lines 49–56: quasi-separatedness can be checked using an affine cover of the base and affine covers of its inverse images with pairwise intersections finite unions of affines.
- [Stacks Lemma 10.158.1 (Tag 090W)](https://stacks.math.columbia.edu/tag/090W), lines 22–36: for a finitely generated field extension, vanishing of Kähler differentials is equivalent to finite separability; its proof’s hypotheses and cited reductions were checked against the assigned proof.
- [Stacks Lemma 10.151.5 (Tag 00UW)](https://stacks.math.columbia.edu/tag/00UW), lines 23–29, and [Stacks Lemma 29.36.12 (Tag 02G8)](https://stacks.math.columbia.edu/tag/02G8), lines 24–30: finite separability of residue extensions for unramified ring maps and morphisms.

## Uneditable findings, page edits, and blockers

- Uneditable defects: none found.
- A-page prose edits: none.
- B-page prose edits: none.
- Other-batch or published-content edits: none.
- Blocker: none.

## Coverage limitation

I read all four assigned page carriers and all 80 assigned items. I opened the direct dependencies and authoritative passages needed to resolve the repair candidates and mathematical uncertainties recorded above. I did not independently reopen every transitive bibliography target cited across all 80 proofs, so this report is not a full transitive-source audit of the batch.
