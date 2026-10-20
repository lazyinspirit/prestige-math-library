# Step 3a reader report — batch 32

Run: `machine-learning-all-101-2026-10-19`  
Role: reader  
Disposition: reviewed; no blocker.

## Opened inventory

### Assigned pages

- `library/machine-learning/relu-approximation-rates-and-depth-expressivity.md` (A)
- `library/machine-learning/relu-approximation-rates-and-depth-expressivity-examples.md` (B)

### Assigned items

All 26 manifest items were opened and reviewed after their in-scope suppliers:

`lem-sobolev-taylor-grid-approximation`, `thm-borsuk-ulam-general`, `thm-warren-polynomial-sign-pattern-bound`, `lem-hyperplane-arrangement-region-count`, `lem-bernstein-polynomial-lipschitz-error`, `def-relu-network`, `def-relu-linear-region`, `lem-univariate-relu-affine-interval-count`, `lem-relu-tent-iterate-depth`, `lem-relu-folding-block`, `lem-relu-square-approximation`, `lem-relu-bounded-product-approximation`, `thm-yarotsky-adaptive-one-dimensional-lipschitz-approximation`, `thm-sobolev-continuous-nonlinear-width-lower-bound`, `lem-relu-network-vc-dimension-bound`, `thm-yarotsky-fixed-architecture-sobolev-approximation-rate`, `lem-relu-rank-sensitive-region-recursion`, `thm-relu-linear-region-upper-bound`, `thm-relu-linear-region-lower-bounds`, `thm-yarotsky-approximation-lower-bounds`, `thm-telgarsky-depth-separation-l1`, `fs-telgarsky-unrestricted-gate-parameter-separation`, `cex-telgarsky-small-k-large-degree-gate`, `ex-relu-tent-map-depth-vs-width`, `ex-target-specific-vs-target-independent-approximation`, and `ex-linear-regions-do-not-guarantee-learning`.

### Direct item suppliers opened

The draft supplier from batch 31 was `def-feedforward-neural-network`. The 17 published suppliers were `def-axiom-of-choice`, `def-countable-choice`, `def-euclidean-spheres-and-closed-balls`, `def-monomials-multidegree-and-total-degree`, `def-sobolev-space-wkp-and-its-norm`, `def-vc-class-of-sets-and-index`, `lem-ac-supplies-countable-and-dependent-choice-for-banach-integration`, `lem-cohomology-of-a-finite-cw-complex-vanishes-above-its-dimension`, `lem-mod-two-cohomology-ring-of-infinite-real-projective-space`, `lem-mollification-commutes-with-weak-derivatives-in-the-interior`, `lem-real-projective-space-cellular-homology-and-pinch-map`, `prop-cup-product-is-natural-unital-and-associative`, `thm-euclidean-heine-borel-pseudocompactness-and-extreme-values`, `thm-fermat-for-euclidean-local-extrema`, `thm-homotopic-maps-induce-equal-maps-in-singular-cohomology`, `thm-local-smooth-approximation-in-wkp`, and `thm-w-one-infinity-functions-have-lipschitz-representatives`.

### Required prerequisite pages opened

- `library/machine-learning/feedforward-networks-and-universal-approximation.md`
- `library/algebraic-topology/chern-and-pontryagin-classes-by-splitting-and-complexification.md`
- `library/pde/sobolev-poincare-and-morrey-inequalities.md`
- `library/mathematical-statistics/symmetrization-rademacher-complexity-and-covering-entropy.md`

I also read `CLAUDE.md`, `README.md`, `SCHEMA.md`'s item/page rules, the relevant `WORKFLOW.md` sections, `briefs/reader.md`, the batch manifest, the dependency-input bundle, and the two affected proof-contract entries.

## Edits and evidence

- `lem-sobolev-taylor-grid-approximation`: defined boundary Taylor coefficients using the unique continuous extensions of the Lipschitz representatives. The proof now derives $f\in W^{n,1}(Q)$ from finite measure and the $L^\infty$ bounds on all weak derivatives through order $n$, so the cited mollification identity is licensed for the $n$th derivative used in the Taylor remainder. Replaced the undefined $u_\alpha$ notation with the extended representatives. Evidence: `def-sobolev-space-wkp-and-its-norm` supplies the weak-derivative classes, `thm-w-one-infinity-functions-have-lipschitz-representatives` supplies the Lipschitz representatives, and `lem-mollification-commutes-with-weak-derivatives-in-the-interior` applies to $W^{n,1}$ functions. The local derivation uses $Q$'s finite measure and the stated derivative bounds.
- `thm-yarotsky-fixed-architecture-sobolev-approximation-rate`: clarified that local product subnetworks vanish exactly outside a hat's support even when the polynomial branch is outside the bounded square where the product error estimate is asserted. The explicit formula in `lem-relu-bounded-product-approximation`, Proof steps 1.1–2.1, is globally defined and cancels on either coordinate axis for every real value of the other input. The affected proof-contract derivation and source locator were updated.

The Taylor-grid repair is consistent with Yarotsky, *Error bounds for approximations with deep ReLU networks*, Theorem 1 proof, §3.2 (printed pp. 10–12): [source](https://arxiv.org/pdf/1610.01145). For context on the other reviewed claims, I checked Yarotsky's Theorems 1–2 and 4–6 in that paper; Telgarsky, *Benefits of Depth in Neural Networks*, Theorem 1.1 and Definition 2.1: [source](https://proceedings.mlr.press/v49/telgarsky16.pdf); and Serra, Tjandraatmadja, and Ramalingam, *Bounding and Counting Linear Regions of Deep Neural Networks*, Theorem 1 and Theorem 7: [source](https://proceedings.mlr.press/v80/serra18b/serra18b.pdf). The assigned proofs were checked independently; these citations were not treated as verdicts.

The Taylor-grid Statement clarification has one direct item consumer, `thm-yarotsky-fixed-architecture-sobolev-approximation-rate`, and one indirect item consumer, `ex-target-specific-vs-target-independent-approximation`; both are in batch 32 and were checked. The assigned A-page inventory also lists the lemma. A current item-source search found no other item consumers.

No `verification.judge` record was present in either edited item. The existing proof contracts were updated. Reflow reported both items unchanged; precheck passed for both items; the final proof-layout command reported 2 items, 7 steps, 0 defects.

The TikZ diagram in `lem-relu-folding-block` matches the stated five points and four full folds for width 3. Its proof establishes the hinge representation independently of the diagram. No other TikZ/tikzcd diagram occurs in the assigned items.

## Defects not edited

None found in the assigned items or assigned page prose.

## Page verdicts

- A page `relu-approximation-rates-and-depth-expressivity`: pass. Its body is empty; `page_layout: compact-v1` is present; its item inventory agrees with the assigned A items.
- B page `relu-approximation-rates-and-depth-expressivity-examples`: pass. Its body is empty; `page_layout: compact-v1` is present; its four examples agree with the assigned B items.

## Blocker and coverage note

No blocker. The batch manifest reported no unresolved suppliers. All assigned items and pages, all 18 direct item suppliers, and all four required prerequisite pages were opened. I checked the invoked supplier statements and proof interfaces needed by the batch; this was not a new exhaustive audit of every transitive dependency inside the published suppliers' own proof closures.
