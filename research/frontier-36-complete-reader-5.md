# Step 5a reader report — batch 5

Run: `frontier-36-complete`  
Date: 2026-09-29

## Verdicts

- **A page — `library/scheme-theory/finite-proper-and-projective-morphisms.md`: acceptable after repairs.** Its overview and assumptions match the reviewed statements. Six defects in assigned A items were repaired; no remaining defect was found in the page or its assigned items.
- **B page — `library/scheme-theory/finite-proper-and-projective-morphisms-examples.md`: acceptable after repairs.** Its examples and counterexamples agree with the reviewed item statements. Two defects in assigned B items were repaired; no remaining defect was found in the page or its assigned items.

No blocker remains. No uneditable defect was found.

## Opened assigned inventory

The two assigned pages above were opened and read. All 58 assigned item files were opened and reviewed in their current form.

**A page (49 items):**

`def-affine-local-quasi-coherent-algebra`, `def-finite-morphism-schemes`, `def-universally-closed-morphism`, `def-proper-morphism`, `def-projective-morphism-pre-proj`, `def-algebraically-independent-finite-tuples-over-a-field`, `def-quasi-finite-morphism-schemes`, `def-fpqc-morphism-schemes`, `lem-projective-space-finite-type-over-base`, `lem-line-bundles-on-projective-three-space-restrict-by-degree`, `lem-integral-finite-type-scheme-function-field`, `lem-quasi-compact-scheme-image-specialization-closed`, `lem-closed-immersion-affine-quotient-and-base-change`, `lem-affine-morphism-structure-sheaf-pushforward-localizes`, `lem-relative-spec-glues-affine-algebras`, `lem-finite-morphism-affine`, `lem-relative-algebraic-constants-fg-field-finite`, `def-complete-variety`, `def-quasi-projective-morphism`, `def-birational-morphism-schemes`, `lem-uniqueness-of-twists-on-the-projective-line`, `lem-curve-closed-subsets-finite`, `lem-quasi-finite-morphism-fibre-characterization`, `lem-fpqc-cover-submersive`, `lem-closed-immersion-pushout-schemes`, `lem-universally-closed-valuative-existence-quasicompact`, `lem-finite-stable-base-change-composition`, `thm-finite-morphism-integral-closed`, `cor-finite-morphism-proper`, `lem-proper-stable-base-change`, `lem-proper-stable-composition`, `lem-proper-local-on-base`, `thm-proper-morphism-closed-image`, `lem-closed-immersion-proper`, `thm-valuative-criterion-properness`, `lem-proper-source-to-separated-target-proper`, `thm-projective-space-proper-over-base`, `thm-projective-morphism-proper`, `lem-proper-fibres-proper`, `thm-global-functions-proper-integral-variety`, `cor-no-nonconstant-map-proper-variety-to-affine-line`, `thm-affine-morphism-relative-spec-characterization`, `lem-birational-morphism-principal-open-isomorphism`, `lem-fpqc-descent-properness-components`, `thm-properness-descent-fpqc`, `lem-closed-gluing-of-two-projective-three-spaces-is-proper`, `cor-proper-birational-normal-curve-isomorphism-off-finite-set`, `rem-projective-versus-proper`, `rem-proper-not-topologically-compact-over-arbitrary-field`.

**B page (9 items):**

`ex-finite-power-map-affine-line`, `ex-closed-immersion-finite-proper`, `ex-projective-space-valuative-extension`, `cex-affine-line-not-proper`, `cex-open-immersion-not-proper`, `ex-proper-image-projective-variety`, `cex-proper-not-affine-positive-dimensional`, `cex-proper-not-necessarily-projective`, `ex-empty-morphism-proper-projective`.

**Additional dependencies opened for the reviewed arguments:**

`thm-integrality-and-finite-module-equivalences`; `def-valuative-diagram-separatedness`; `thm-valuative-criterion-separatedness`; `def-relative-projective-space-standard-charts`; `def-valuation-ring`; `lem-valuation-ring-is-local`; `def-specialisation-and-generic-point`; `cor-specialisation-order-is-prime-inclusion`; `def-morphism-of-schemes`; `lem-projective-space-diagonal-closed`; `lem-separated-implies-valuative-uniqueness`; `thm-separatedness-gluing-overlap-criterion`; `lem-affine-morphism-separated`; `lem-affineness-from-unit-generating-global-sections`; `cor-polynomial-ring-over-a-field-is-a-pid`; `lem-zero-in-a-localised-module`; `thm-evaluation-kernel-and-minimal-polynomial`; `lem-field-valued-points-of-schemes`; `thm-affine-scheme-ring-anti-equivalence`; `thm-affine-fibre-product-tensor-ring`; `def-base-change-morphism-schemes`; `lem-morphism-schemes-local-on-source-target`; `thm-global-sections-affine-scheme`; `thm-sections-basic-open-affine-scheme`; `lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct`; `thm-noetherian-ring-has-noetherian-spectrum`; `lem-chain-dimension-open-cover`; `def-dimension-noetherian-topological-space`; `def-integral-scheme`; `def-reduction-of-scheme`; `def-irreducible-topological-space-and-subset`; `thm-quotient-is-field-iff-ideal-maximal`; `def-generic-point-irreducible-closed-subset`; `def-interior-closure-boundary-top`; `def-reduced-affine-scheme`.

For the quasi-finite fiber characterization, I also checked the relevant Stacks Project passages: Lemma 10.122.2, tag [00PK](https://stacks.math.columbia.edu/tag/00PK), on isolated points of finite-type fibers; Lemma 10.122.1, tag [00PJ](https://stacks.math.columbia.edu/tag/00PJ), on isolated points of finite-type algebras over a field; and Lemma 33.20.2, tag [06LH](https://stacks.math.columbia.edu/tag/06LH), on zero-dimensional algebraic schemes over a field.

## Repairs and evidence

| Carrier and location | Repair | Evidence and contract/validation |
|---|---|---|
| `items/thm-finite-morphism-integral-closed.md`, proof 1.1 | Replaced the direct application of the finite-module integrality lemma to a possibly noninjective chart map (A\to B) with the image subring (A'=\operatorname{im}(A\to B)\subseteq B). The finite generators still generate (B) over (A'); when (A'=0), unitality gives (B=0). Applied the lemma to (A'\subseteq B), then lifted the monic relation along (A\to A'). | The opened supplier `thm-integrality-and-finite-module-equivalences` states the inclusion hypothesis (A\subseteq B) and (A\ne0). Updated the proof contract's supplier quote and derivation. Reflow unchanged; precheck passed (1 checked, 0 failing). |
| `items/thm-valuative-criterion-properness.md`, empty case | Replaced the claim that an empty source has an “empty generic map” with the correct vacuity explanation: `Spec K` is nonempty and has no morphism to the empty scheme, so there are no valuative diagrams to fill when (X=\varnothing). | `def-valuative-diagram-separatedness` requires a generic morphism `Spec K -> X`; `Spec K` has a point. Updated the contract derivation and empty/zero boundaries. Reflow unchanged; precheck passed (1 checked, 0 failing). |
| `items/thm-projective-space-proper-over-base.md`, proof 1.2 | Chose an affine open around the image of the valuation ring's unique closed point, then used that every point of `Spec R` generalizes its closed point, continuity, and stability of open sets under generalization to factor the whole base map through that affine open. | The prior choice of an open containing only the generic-point image did not ensure it contained the whole image. Opened the valuation-ring locality, specialization-order, morphism-continuity, and projective-chart statements used in the repair. Updated facts, derivation inputs, and contract claim. Reflow unchanged; precheck passed (1 checked, 0 failing). |
| `items/thm-global-functions-proper-integral-variety.md`, title | Changed the title to state the unconditional theorem: global functions on a proper integral finite-type scheme form a finite extension of the base field. | The proof only gives equality with (k) under an additional geometric-integrality condition. Updated the contract to distinguish the unconditional result from that stronger conditional conclusion. Reflow unchanged; precheck passed (1 checked, 0 failing). |
| `items/cor-no-nonconstant-map-proper-variety-to-affine-line.md`, title | Changed the title to state the unconditional conclusion that maps from proper integral schemes to the affine line have closed-point image. | The stronger factorization through a (k)-rational point requires geometric integrality; without it the closed point may have a nontrivial finite residue extension. Updated the contract. Reflow unchanged; precheck passed (1 checked, 0 failing). |
| `items/rem-proper-not-topologically-compact-over-arbitrary-field.md`, final example | Replaced `Spec R[t]/(t^2+1)` as a purported nonproper example: it is `Spec C` over `R`, a finite proper morphism. The revised example is `A^1_C` viewed over `R`; it has no `R`-points, and universal closedness fails after base change to `C` and then to `A^1_C`, where the closed subset `V(tx-1)` in one component maps to the nonclosed subset `D(t)`. | No unital `R`-algebra map `C -> R` exists. Since `C⊗_R C ≅ C×C`, the indicated base change has two affine-line components; projection of `V(tx-1)` has image `D(t)`. Updated the contract's derivation and degenerate/reverse-boundary evidence. Contract JSON parsed; reflow unchanged; precheck reported 0 checked, 0 failing. |
| `items/cex-proper-not-affine-positive-dimensional.md`, title | Replaced the broad title with `Under AC, proper integral finite-type schemes over fields with multiple points are not affine`, matching the core theorem and its stated assumptions. | The former title omitted the field, finite-type, and multiple-point conditions and could be read without the statement's AC assumption. Updated the contract derivation to align the title with the proved claim. Reflow unchanged; precheck passed (1 checked, 0 failing). |
| `items/cex-proper-not-necessarily-projective.md`, proof 1.1 | Corrected the homogeneous dehomogenization transition: with (u_{ij}=x_j/x_i), (F_j=u_{ji}^dF_i=u_{ij}^{-d}F_i), not (u_{ij}^dF_i). | The corrected factor is a unit on the chart overlap, so the intended compatibility of the chart ideals and gluing construction follows. Updated the contract derivation to record the reciprocal chart coordinate. Reflow unchanged; precheck passed (1 checked, 0 failing). |

Proof contracts were updated for each material repair. The changed draft items had no stale `verification.judge` records, so none needed removal. No other batch, B-page prose, published content, or plan-spec file was edited.

## Uneditable defects

None found.

## Validation

Reflow reported `unchanged` for all eight changed item files. Precheck passed for the seven proof-bearing items (1 checked, 0 failing each); the remark-only item reported `0 checked, 0 failing — all clean`. The proof-contract JSON parses.

## Coverage note

All assigned pages and all 58 assigned item files were inspected. I opened the nonroutine dependencies needed to verify the mathematical inferences and directly checked routine ring and topology steps. I did not re-audit every transitive proof behind every primitive definition in the wider library. The quasi-finite classification uncertainty was resolved from the exact Stacks Project lemmas cited above; no unresolved mathematical uncertainty or uneditable finding remains.
