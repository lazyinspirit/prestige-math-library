# Step 3a reader report — batch 92

Run: `inverse-problems-knot-theory-all-109-2026-10-19`  
Role: reader  
Batch: `92`

## Opened inventory

Page A opened: `grid-homology-and-combinatorial-knot-floer-theory` (`library/knot-theory/grid-homology-and-combinatorial-knot-floer-theory.md`). Its 24 assigned items were opened: `def-admissible-pointed-heegaard-floer-data`, `def-grid-diagram-for-an-oriented-knot`, `def-hat-heegaard-floer-complex-of-a-closed-three-manifold`, `lem-grid-alexander-grading-integral`, `lem-grid-diagram-is-admissible`, `lem-standard-unknot-hat-diagram-rank-one`, `thm-grid-moves-generate-oriented-knot-isotopy`, `lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing`, `def-knot-floer-filtration-and-tau`, `lem-os-disk-and-polygon-analytic-foundations`, `alg-grid-knot-floer-complex`, `lem-knot-floer-duality-and-filtration-swap`, `lem-tau-preserved-by-filtered-chain-homotopy-equivalence`, `lem-grid-rectangle-boundary-square-zero-and-filtration`, `thm-grid-knot-floer-complex-procedure-properties`, `thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant`, `thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization`, `lem-grid-rectangle-differential-squares-to-zero`, `lem-grid-2x2-unknot-tilde-rank-two`, `lem-grid-3x3-unknot-tilde-rank-four`, `lem-grid-marking-variables-chain-homotopic`, `thm-grid-commutation-stabilization-invariance-proof`, `thm-grid-homology-independent-of-grid-and-equals-knot-floer`, and `lem-tau-is-independent-of-heegaard-grid`.

Page B opened: `grid-homology-and-combinatorial-knot-floer-theory-examples` (`library/knot-theory/grid-homology-and-combinatorial-knot-floer-theory-examples.md`). Its two assigned items were opened: `ex-knot-kt-39-worked-cases` and `cex-knot-kt-39-boundary-case`.

Additional dependency context opened for the reviewed grid, definition, and normalization claims included `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-given-spin-and-spinc-structures-and-associated-spinor-bundles`, `lem-complete-heegaard-data-have-a-zero-chern-spin-c-sector`, `def-countable-choice`, `thm-well-ordering-principle`, `def-oriented-seifert-surface`, `def-oriented-reidemeister-moves`, `thm-oriented-reidemeister-equivalence-theorem`, `lem-bridge-diagram-grid-rectification`, `lem-grid-bridge-like-refinement`, `lem-planar-isotopy-preserves-grid-move-class`, `lem-grid-local-reidemeister-realizations`, `lem-grid-regular-jog-refinements`, `lem-grid-reidemeister-moves-with-arbitrary-exterior`, `thm-realized-grid-whitney-classes-have-the-full-relative-grading-formula`, `lem-realized-flat-grid-index-one-positive-domains-are-empty-rectangles`, `thm-integrable-flat-grid-rectangle-counts-equal-the-full-filtered-grid-differential`, `lem-pointed-basepoint-cone-and-variable-collapse`, and `thm-balanced-knot-marked-pair-stabilization-is-the-full-minus-variable-cone`.

## Review and edits

- In `thm-grid-moves-generate-oriented-knot-isotopy`, I corrected Fact F4 to say the relative Reidemeister supplier assumes bridge representatives are supplied. The original Step 2.1 treated this conditional supplier as proving those representatives exist. I added Fact F5 and made Step 2.1 use it. The evidence is Ozsváth, Stipsicz, and Szabó, *Grid Homology for Knots and Links*, Appendix B.4: Definition B.4.4 states that arbitrary diagrams admit arbitrarily small (C^2) perturbations to bridge diagrams, and the proof of Proposition B.4.3 begins by isotoping a diagram to bridge position. The source is used only for this existence step; the local arbitrary-exterior move argument remains the in-run supplier. [Primary source](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf).

- I updated the batch 92 proof contract for `thm-grid-moves-generate-oriented-knot-isotopy` to record F5 and the corrected Step 2.1 dependency. The item statement and dependency list are unchanged. No `verification.judge` record was present on the changed item.

- I checked the top-row normalization in `lem-grid-alexander-grading-integral` against the coordinate convention and the proof of Proposition 4.3.1 in §4.3 of the same grid-homology book. The original cases are correct: the northwest vertex wraps to the bottom edge, while the top-row marking remains in the top row. I left the item and its proof contract unchanged. [§4.3 source](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf).

- The other grid calculations reviewed here are consistent with the opened source passages: the grid grading and rectangle-change identities (Propositions 4.3.1 and 4.3.3), the two-decomposition and thin-annulus cancellation (Lemma 4.6.7), the variable homotopy (Lemma 4.6.9), the stable (V)-factor (Proposition 4.6.15), and the multipointed grid-to-knot-Floer statement (Manolescu–Ozsváth–Sarkar, Proposition 2.3 and Theorem 3.3). [Grid Homology for Knots and Links](https://web.math.princeton.edu/~petero/GridHomologyBook.pdf), [A combinatorial description of knot Floer homology](https://arxiv.org/pdf/math/0607691).

## Diagram review

The three assigned TikZ figures were checked. The (3\times3) definition figure and the (2\times2) and (3\times3) example figures have the stated marking locations and row/column occupancy. They are marking-array illustrations and do not depict link arcs or crossings; no incorrect arrow or crossing is encoded. No diagram edit was needed.

## Defects not repaired

No confirmed uneditable defect was identified in the dependency passages reviewed. No proposed withdrawal is recorded. I did not change either page or any B-page prose.

## Page verdicts

- **A page — `grid-homology-and-combinatorial-knot-floer-theory`: pass on presentation and inventory.** It is draft YAML-only with `page_layout: compact-v1`, an empty body, and the manifest's 24 item IDs and prerequisite pages.
- **B page — `grid-homology-and-combinatorial-knot-floer-theory-examples`: pass on presentation and inventory.** It is draft YAML-only with `page_layout: compact-v1`, an empty body, and the manifest's two example IDs and A-page prerequisite.

## Validation

For `thm-grid-moves-generate-oriented-knot-isotopy`, reflow completed with no changes, precheck passed, and the final `node tools/proof-layout.mjs` run reported 1 item, 4 steps, and 0 defects.

## Coverage limitation and blocker

All assigned pages and items were opened. I checked the local grid-move chain and the primary grid sources at the locations listed above, but I did not recursively audit every analytic supplier beneath `lem-os-disk-and-polygon-analytic-foundations`, `thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant`, `thm-pointed-heegaard-floer-invariance-under-moves-and-stabilization`, or the grid-to-analytic comparison. Those transitive analytic closures are not certified by this review; no specific defect is asserted for the unread suppliers.

At the final run-status check (2026-10-21 09:46 UTC), the run remained active, had no displayed blocker, and batch 92 was still listed among the missing Step 3a reader handoffs. No batch-92-specific blocker was found.
