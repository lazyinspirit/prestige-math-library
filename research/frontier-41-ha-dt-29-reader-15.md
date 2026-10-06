# Reader 15 — batch 15, frontier-41-ha-dt-29

Independent Step 5a review completed locally; one uneditable supplier false claim remains for routing. The exact manifest contains 26 items and the A/B page pair `the-smooth-h-cobordism-theorem` / `the-smooth-h-cobordism-theorem-examples`. Both page files and all assigned item files have been opened. Suppliers were opened before their assigned consumers; further prerequisites are being checked where an inference requires them. No earlier author or judge decision is treated as a verdict.

## Repair scope and issues addressed

- Repaired the h-cobordism definition's nonstandard deformation-retract wording and separate h-cobordance from triviality.
- Repaired the relative chain complex's degree-zero convention, connecting-map argument, relative-filtration justification, and row/column convention.
- Repaired the elimination lemma's framed triviality hypothesis and replace its unsupported isotopy-to-slide assertion by the two actual isotopies and disjoint reordering of Lück Lemma 1.16.
- Repaired low-index elimination's erroneous outgoing-level connectivity argument, relative smoothing, disk location and framing; explain preservation of the index range under dual elimination.
- Repaired the modification lemma's connected-middle-level hypothesis, band range, parallel-copy location, additive class argument and sign handling.
- Kept the full concentration range; explicitly verify intermediate simple connectivity and preservation of framed triviality.
- Corrected matrix basis-change bookkeeping, consecutive-pair ordering, zero-handle/matrix edge cases, inherited choice hypotheses, and the product-flow boundary extension.
- The punctured-contractible-manifold corollary and homology-cobordism counterexample use published UCT/duality results stated under full AC; their earlier AC-omega assumptions did not license those citations; both now assume full AC. Preserve their conclusions and state the required axiom.
- Check and correct the dimension-four historical citation: Milnor's four-disk discussion concerns total dimension four, not boundary dimension four.

## Source evidence obtained

- Milnor, *Lectures on the h-Cobordism Theorem*, complete PDF at <https://webhomes.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf>. Read the introduction/triad convention; §6 Theorem 6.6 and its complete annulus, clean-disk, partial-frame and tube argument (printed pp. 71–84); §7 Corollary 7.3, Theorem 7.4, Basis Theorem 7.6 and its proof, and Theorem 7.8; §8 Theorem 8.1 and beginning of its construction; §9 Proposition A; and Concluding Remarks (printed pp. 113–114). The old maths.ed.ac.uk URL failed in the web fetch; the webhomes URL worked.
- Lück, *A Basic Introduction to Surgery Theory*, <https://him-lueck.uni-bonn.de/data/ictp.pdf>, Chapter 1: definition of trivial embedding, Notation 1.15, Elimination Lemma 1.16 and complete proof (printed pp. 7–9), Lemma 1.21 (printed p. 13), and Homology Lemma 1.22 statement. The source's ambient dimension is one more than this batch's boundary dimension.
- Kasprowski–Powell–Ray, *Counterexamples in 4-manifold topology*, <https://eprints.gla.ac.uk/288630/1/288630.pdf>, Example 1.13 and complete §5.8 (printed pp. 221–222): E(1) and the Dolgachev surface E(1)_{2,3} are closed smooth simply connected, smoothly h-/s-cobordant, and not diffeomorphic. This resolves the existence assertion used in the dimension-four counterexample; the gauge-theoretic theorem itself is cited, not reproved here.

## Historical supplier concerns (independently corrected during this review)

These defects were actually observed in the earlier source versions: the triad's “two connected components” sentence; the rearrangement/self-indexing original-field invariant; claimed isotopy dependence of intersection numbers; wrong target column for a lower-handle slide; a claimed slide isotopy in the original boundary; the handle-to-CW gluing/CW-base premise; reversed connecting handles described as first rather than last; the product-with-boundary triad mismatch; “transverse” corner arcs in ambient dimension greater than two; the finite-inverse-image assertion in the arc proof; and the chain-dimensional explanation of a slide. Their producers independently corrected the relevant statements/proofs while this reader was working. The current relevant clauses were checked against those observations, and affected batch-15 citations were refreshed. These corrected historical observations are not presented as current defective bytes or as unresolved findings. This reader did not edit those suppliers or bind their earlier raw bytes to a pre snapshot. Only the remaining current finding below is hash-bound.

## Validation

Every one of the 22 changed items was reflowed and prechecked. The Poincaré corollary required adoption of the checker's phase numbering, then passed; the final correction uses 1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1. The elimination item's source theorem number in prose was mistaken for a proof-step reference by the contract parser; the prose now names the Elimination Lemma while its exact numbered source locator is preserved in frontmatter.

Final local checks:

- `node tools/proof-contract.mjs research/frontier-41-ha-dt-29-batch-15.proof-contracts.json --strict`: exit 0; 26/26 items, zero errors and warnings.
- `node tools/rendercheck.mjs <22 explicit changed item paths>`: exit 0; all YAML and KaTeX spans parse. The changed A-page was also checked explicitly, exit 0.
- `node tools/proof-layout.mjs <22 explicit changed item paths>`: **one batched invocation after the last item edit and formatter**, exit 0; 22 items, 82 numbered steps, zero layout defects.

An initial render command omitted the `.md` suffix and failed to open its inputs; the corrected explicit-file command passed. No global corpus selection, mathematical judge, audit stamp or self-certification was run. Stale `verification.judge` fields are absent from changed items. These are local mechanical checks, not independent mathematical acceptance.

## Item repairs and evidence

### Repair: `def-h-cobordism`

Removed the undefined “deformation retract in the homotopy sense”; the two displayed identities only specify a homotopy inverse (compare the opened `def-retraction-and-deformation-retract`). Made h-cobordance independent of product triviality.

### Repair: `prop-relative-handle-chain-complex-of-a-cobordism`

Replaced the false consecutive-arrows argument by the exact factorization δp=0; supplied a direct finite-filtration homology proof and degree-zero convention. Specified row coordinates and the transpose in column coordinates, transversality and compatible belt-normal orientations. The coefficient argument is local to a triad (Milnor §7 Corollary 7.3), rather than applying a closed-manifold supplier beyond its domain.

### Repair: `lem-handle-elimination-by-trading-a-pair`

Corrected the tautological “trivial embedding” clause to standard framed disk triviality, stated the common unchanged region, and replaced the unsupported isotopy decomposition with the complete Lück Lemma 1.16 route (printed pp. 7–9). The original counts and full index range are retained; later embeddings are transported.

### Repair: `lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism`

Rebuilt the circle/disk proof using forward T2→W and reversed N2→T2 (reverse indices at least four), preserving the one-handle-for-three-handle count. Added relative smoothing and a bounding-disk-induced framing in the common part; removed the false π2 claim, the endpoint intersection error and an unsupported disk-avoidance claim. Evidence: Lück Lemma 1.21, p. 13, and opened duality/relative-cell suppliers.

### Repair: `lem-duality-eliminates-top-and-cotop-handles`

Replaced the invalid composition of two unrelated presentations by low elimination, reversal, low elimination with its upper bound preserved, and reversal back. Corrected the false face-exchanging-diffeomorphism wording and the inaccurate top-two-index citation.

### Repair: `lem-homology-lemma-realizes-handle-bases-by-isotopy`

Made the sphere-to-relative-core coordinate identification explicit using the local collapse argument, rather than treating an arbitrary sphere as the boundary of a listed handle. Corrected the arc supplier qualification. The q=2 complement condition and q≤n−3 range are retained.

### Repair: `lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation`

Replaced the unused/global outgoing simple-connectivity hypothesis by the needed connected middle level. Corrected the band supplier range (codimension two suffices), located each parallel sphere in the common part and its bounding disk in the outgoing handle piece, supplied the pair-of-pants class calculation and framed isotopy, and changed only the added summand’s orientation for negative coefficients. This preserves the full q≤n−2 modification range and supplies the framed version used by concentration.

### Repair: `lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices`

Verified intermediate middle-level simple connectivity and the exact framed invariant required by the repaired elimination lemma. Retained every 2≤k≤n−2 normal form; the dual index calculation continues to avoid the arbitrary-sphere endpoint.

### Repair: `def-middle-handle-intersection-matrix-of-an-h-cobordism`

Specified row-coordinate action and the transpose for column coordinates, compatible sphere orientations, isotopy-independent entries for fixed data, and the empty presentation. The row/column issue is thus resolved without changing the established M_ij indexing.

### Repair: `lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular`

Propagated the row-coordinate convention, applied the field-only determinant supplier over Q to an already established integer inverse, and supplied det(empty)=1 locally. The integer isomorphism claim remains unchanged.

### Repair: `lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity`

Replaced the incorrect lower-slide target-column rule by the contragredient coordinate calculation C_j←C_j−εC_j′ for e_j′←e_j′+εe_j. Corrected the ambient-dimension range and removed reliance on the defective external matrix-operation proposition. All elementary operations are still realized; the Euclidean reduction is unchanged.

### Repair: `lem-middle-handle-pairs-with-one-geometric-intersection-cancel`

Derived a bijective match from acyclicity rather than assuming each lower handle has a unique upper partner. Reordered equal-index handles explicitly to make each selected pair consecutive and explained preservation of the other belt intersections under local cancellation.

### Repair: `thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary`

Supplied the signed-collar extension, cutoff normalized flow, endpoint control and smooth inverse for a critical-point-free triad. The old proof applied a boundaryless closed-band theorem directly to a manifold with boundary.

### Repair: `thm-smooth-simply-connected-h-cobordism-theorem`

Propagated the repaired simultaneous low/high elimination proof, replacing the false composition assertion. The theorem and its dimension bounds are unchanged.

### Repair: `cor-high-dimensional-simply-connected-h-cobordant-manifolds-are-diffeomorphic`

Added the omitted countable-choice hypothesis inherited from the h-cobordism theorem and explicitly checked connectedness of W from its incoming homotopy equivalence.

### Repair: `cor-high-dimensional-smooth-poincare-for-homotopy-spheres-bounding-a-contractible-manifold`

Added full AC required by the opened UCT, duality, orientability and relative Hurewicz statements. Checked CW homotopy type and gave the mapping-cylinder/Hurewicz induction; added the actual absolute Hurewicz source for the homology-sphere equivalence. Corrected the swapped duality faces, made the van Kampen cover open, justified connectedness after puncturing, and glued the disk at the face actually fixed by the product map.

### Repair: `rem-the-h-cobordism-theorem-does-not-cover-boundary-dimension-four`

Corrected the dimension of Milnor’s four-disk discussion: Concluding Remarks use total dimension four, whereas this item concerns total dimension five. KPR Example 1.13 and §5.8 do supply the claimed failure for simply connected four-dimensional faces.

### Repair: `ex-a-product-cobordism-is-an-h-cobordism`

Added n≥1 required by this library’s h-cobordism definition, and countable choice for the cited empty-handle presentation. Moved the relative-homology inference after the verified homotopy-equivalence condition and cited its actual supplier.

### Repair: `ex-an-elementary-cancelling-handle-pair-gives-a-product-cobordism`

Added countable choice, qualified the integer matrix by orientability, recorded the general mod-two unit, and applied the connected cancellation supplier componentwise. The product claim does not require an oriented or connected incoming manifold.

### Repair: `cex-a-homology-cobordism-need-not-be-an-h-cobordism`

Stated full AC instead of AC-omega for the actual UCT, duality and cellular-approximation citations. Independently checked both exponent vectors, determinant/inverse and right-to-left permutation image; the finite six-dimensional witness itself is unchanged.

### Repair: `ex-the-handle-matrix-of-a-simple-acyclic-presentation`

Removed the unsupported inference that matrix invertibility establishes existence of a handle presentation. Made the geometric application conditional with its exact simple-connectivity, dimension/index and choice hypotheses, and cited the actual Whitney and cancellation suppliers. The four matrix operations and inverse were checked directly.

### Repair: A-page prose

Qualified the choice summary: the main theorem uses AC-omega; the Poincaré corollary uses full AC with its current algebraic-topology suppliers. B-page prose is unchanged.

### Repair: `def-middle-handle-intersection-matrix-of-an-h-cobordism`

Added the orientability derivation used to read the integer matrix: local orientation transport is path-independent on the simply connected interior, and the collars extend it to W. Evidence: the opened orientation-cover definition’s finite path and homotopy transport proof.

### Repair: `lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism`

Bound the disk-normal trivialization to the explicit radial projection transport already proved in the Stiefel supplier; supplied the local compact disk-tube construction across the source boundary, rather than applying the boundaryless global tube statement to a disk.

### Focused validation correction

The Poincaré corollary initially required precheck renumbering; its final proof follows the normative phase numbering, with references updated. Corrected the actual duality face substitution to A=S^n, B=Sigma and checked the orientability supplier’s CW-type/numerability hypotheses. No other first-pass reflow/precheck failure occurred.

## Contract updates

Regenerated exact citation/derivation entries against current items for all 26 assigned contracts (23 proof-bearing entries; definitions/remark skipped), then corrected stale boundary worksheets: C0 need not be zero, framed triviality and band ranges, simultaneous dual elimination, row-coordinate convention, slide contragredience, empty determinant, the n=5 indices k=2 and k=3, inherited choice qualifications, and conditional example existence. Final Poincaré proof numbering follows the normative precheck proposal: 1.1, 1.2, 2.1, 2.2, 3.1, 4.1, 5.1.

### Repair: `prop-h-cobordisms-admit-adapted-ordered-handle-decompositions`

Updated the rearrangement citation after its producer independently corrected the supplier: the final field is for the rearranged function, and its excellence licenses self-indexing. Retain the original f,X separately to satisfy this proposition’s first clause; no overstrong original-field invariant is required.

### Repair: `thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary`

Qualified the product supplier paraphrase by its current boundaryless-base hypothesis. The assigned applications already have closed incoming faces.

### Repair: `ex-a-product-cobordism-is-an-h-cobordism`

Qualified the product supplier paraphrase by its current boundaryless-base hypothesis. The assigned applications already have closed incoming faces.

## Opened inventory

Instructions and scope: `CLAUDE.md`, `README.md`, `SCHEMA.md`, `briefs/reader.md`, the exact batch-15 page manifest and proof contracts. Current run status was recomputed from `.autopilot/frontier-41-ha-dt-29`. The pre-hash-1 artifact was inspected only as baseline metadata; it was not used as proof that earlier source bytes were observed.

### Page: `library/differential-topology/the-smooth-h-cobordism-theorem.md`

- `items/def-h-cobordism.md` — repaired; evidence above.
- `items/lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends.md` — read; no item-local repair required.
- `items/prop-h-cobordisms-admit-adapted-ordered-handle-decompositions.md` — repaired; evidence above.
- `items/prop-relative-handle-chain-complex-of-a-cobordism.md` — repaired; evidence above.
- `items/lem-handle-elimination-by-trading-a-pair.md` — repaired; evidence above.
- `items/lem-zero-and-one-handles-can-be-eliminated-in-a-simply-connected-h-cobordism.md` — repaired; evidence above.
- `items/lem-duality-eliminates-top-and-cotop-handles.md` — repaired; evidence above.
- `items/lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group.md` — read; no item-local repair required.
- `items/lem-homology-lemma-realizes-handle-bases-by-isotopy.md` — repaired; evidence above.
- `items/lem-modification-lemma-for-embedded-spheres-in-a-handle-presentation.md` — repaired; evidence above.
- `items/lem-handle-trading-concentrates-an-acyclic-simply-connected-presentation-in-two-adjacent-middle-indices.md` — repaired; evidence above.
- `items/def-middle-handle-intersection-matrix-of-an-h-cobordism.md` — repaired; evidence above.
- `items/lem-acyclicity-makes-the-simply-connected-middle-handle-matrix-unimodular.md` — repaired; evidence above.
- `items/lem-handle-slides-reduce-a-unimodular-middle-handle-matrix-to-the-identity.md` — repaired; evidence above.
- `items/lem-whitney-trick-realizes-algebraic-middle-handle-cancellation-geometrically.md` — read; no item-local repair required.
- `items/lem-middle-handle-pairs-with-one-geometric-intersection-cancel.md` — repaired; evidence above.
- `items/thm-critical-point-free-cobordism-is-a-product-relative-to-the-incoming-boundary.md` — repaired; evidence above.
- `items/thm-smooth-simply-connected-h-cobordism-theorem.md` — repaired; evidence above.
- `items/cor-high-dimensional-simply-connected-h-cobordant-manifolds-are-diffeomorphic.md` — repaired; evidence above.
- `items/cor-high-dimensional-smooth-poincare-for-homotopy-spheres-bounding-a-contractible-manifold.md` — repaired; evidence above.
- `items/rem-the-h-cobordism-theorem-does-not-cover-boundary-dimension-four.md` — repaired; evidence above.
### Page: `library/differential-topology/the-smooth-h-cobordism-theorem-examples.md`

- `items/ex-a-product-cobordism-is-an-h-cobordism.md` — repaired; evidence above.
- `items/ex-an-elementary-cancelling-handle-pair-gives-a-product-cobordism.md` — repaired; evidence above.
- `items/cex-a-homology-cobordism-need-not-be-an-h-cobordism.md` — repaired; evidence above.
- `items/cex-a-four-dimensional-boundary-case-is-outside-the-smooth-h-cobordism-theorem.md` — read; no item-local repair required.
- `items/ex-the-handle-matrix-of-a-simple-acyclic-presentation.md` — repaired; evidence above.

### Additional mathematical suppliers

The following files were opened for their definitions, statements, proof arguments or exact cited clauses; opening is not a whole-transitive-closure certification. Most were read in full; the integral finite-range comparison, smooth metric/partition and full-choice definitions were read through their relevant statements and supplied clauses.

- `items/cor-contractible-nonempty-spaces-have-the-homology-of-a-point.md`.
- `items/cor-every-continuous-map-between-smooth-manifolds-is-homotopic-to-a-smooth-map.md`.
- `items/cor-homotopic-maps-induce-the-same-map-on-singular-homology.md`.
- `items/cor-operator-determinant-on-the-general-linear-group.md`.
- `items/cor-regular-sublevels-are-diffeomorphic.md`.
- `items/cor-seifert-van-kampen-simply-connected-overlap.md`.
- `items/def-attaching-a-smooth-handle-with-corner-rounding.md`.
- `items/def-attaching-belt-intersection-matrix-of-adjacent-index-handles.md`.
- `items/def-axiom-of-choice.md`.
- `items/def-cellular-boundary-from-three-consecutive-skeleta.md`.
- `items/def-compact-space.md`.
- `items/def-countable-choice.md`.
- `items/def-determinant-of-a-square-matrix.md`.
- `items/def-diffeomorphism-and-local-diffeomorphism-of-manifolds.md`.
- `items/def-dual-handle-decomposition.md`.
- `items/def-geometric-cancelling-handle-pair.md`.
- `items/def-handle-decomposition-relative-to-the-incoming-boundary.md`.
- `items/def-handle-slide-of-one-k-handle-over-another.md`.
- `items/def-homotopy-equivalence.md`.
- `items/def-invertible-matrix-and-general-linear-group.md`.
- `items/def-k-handle-core-cocore-attaching-region-and-belt-sphere.md`.
- `items/def-local-oriented-intersection-sign.md`.
- `items/def-matrix-equivalence-and-smith-normal-form-over-a-pid.md`.
- `items/def-matrix-product-and-identity-matrix.md`.
- `items/def-mod-two-intersection-number.md`.
- `items/def-morse-function-adapted-to-a-cobordism.md`.
- `items/def-orientation-local-system-and-orientation-cover.md`.
- `items/def-oriented-intersection-number.md`.
- `items/def-oriented-smooth-manifold-and-oriented-chart.md`.
- `items/def-relative-singular-homology.md`.
- `items/def-retraction-and-deformation-retract.md`.
- `items/def-simply-connected.md`.
- `items/def-smooth-cobordism-triad-for-morse-theory.md`.
- `items/def-smooth-collar-of-a-manifold-boundary.md`.
- `items/def-smooth-embedding.md`.
- `items/def-smooth-manifold.md`.
- `items/def-transverse-complementary-dimensional-intersection-set.md`.
- `items/def-whitney-circle-for-a-pair-of-intersection-points.md`.
- `items/lem-a-closed-smooth-manifold-has-the-homotopy-type-of-a-finite-cw-complex.md`.
- `items/lem-a-handle-decomposition-gives-a-relative-cw-complex.md`.
- `items/lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points.md`.
- `items/lem-attaching-handles-along-isotopic-attaching-embeddings-preserves-the-diffeomorphism-type.md`.
- `items/lem-axiom-of-choice-implies-countable-choice.md`.
- `items/lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice.md`.
- `items/lem-compact-transverse-complementary-intersections-are-finite.md`.
- `items/lem-embedded-bands-joining-two-framed-spheres-exist.md`.
- `items/lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle.md`.
- `items/lem-general-position-makes-a-whitney-disk-embedded-and-interior-disjoint-in-the-stable-range.md`.
- `items/lem-geometric-cancellation-is-a-unit-entry-in-the-handle-matrix.md`.
- `items/lem-handle-attachments-are-relative-cell-attachments-up-to-homotopy.md`.
- `items/lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers.md`.
- `items/lem-handle-slides-act-by-elementary-basis-change-on-handle-chains.md`.
- `items/lem-handle-slides-preserve-the-relative-diffeomorphism-type.md`.
- `items/lem-handles-of-equal-index-can-be-attached-on-one-level.md`.
- `items/lem-high-relative-cells-do-not-change-lower-homotopy.md`.
- `items/lem-isotopy-extension-for-a-compact-source-with-boundary.md`.
- `items/lem-long-exact-sequence-of-a-triple-in-singular-homology.md`.
- `items/lem-manifold-bump-for-a-compact-set-inside-an-open-set.md`.
- `items/lem-metastable-embedding-for-maps-from-a-compact-manifold.md`.
- `items/lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time.md`.
- `items/lem-one-handle-changes-relative-homology-in-one-degree.md`.
- `items/lem-opposite-local-signs-give-the-compatible-whitney-circle-framing.md`.
- `items/lem-outgoing-boundary-of-a-handle-attachment-trades-the-disk-factors.md`.
- `items/lem-positively-oriented-bases-are-path-connected.md`.
- `items/lem-product-cobordisms-have-critical-point-free-presentations.md`.
- `items/lem-real-stiefel-spaces-with-complement-rank-at-least-two-are-simply-connected.md`.
- `items/lem-relative-homology-of-the-standard-handle-pair.md`.
- `items/lem-transverse-complementary-spheres-have-product-charts.md`.
- `items/lem-whitney-disk-framing-obstruction-can-be-corrected-under-the-standard-high-dimensional-hypotheses.md`.
- `items/prop-connected-cobordisms-admit-presentations-without-superfluous-zero-handles.md`.
- `items/prop-deformation-lemma-for-a-critical-point-free-slab.md`.
- `items/prop-dual-elimination-of-top-index-handles.md`.
- `items/prop-elementary-matrix-operations-are-realized-by-handle-slides.md`.
- `items/prop-first-stiefel-whitney-class-classifies-orientability.md`.
- `items/prop-higher-homotopy-basepoint-transport-and-moving-homotopies.md`.
- `items/prop-relative-transversality-preserves-a-map-on-a-closed-good-region.md`.
- `items/prop-singular-homology-of-a-disjoint-union-is-the-direct-sum.md`.
- `items/rem-the-smooth-whitney-trick-fails-in-dimension-four.md`.
- `items/thm-absolute-hurewicz-theorem.md`.
- `items/thm-adapted-excellent-morse-functions-exist-on-compact-cobordisms.md`.
- `items/thm-cellular-approximation-for-maps-of-cw-pairs.md`.
- `items/thm-cellular-boundary-is-the-incidence-degree-matrix.md`.
- `items/thm-cellular-homology-computes-singular-homology.md`.
- `items/thm-collar-neighborhood-theorem.md`.
- `items/thm-compactly-supported-vector-fields-are-complete.md`.
- `items/thm-creation-of-a-cancelling-handle-pair.md`.
- `items/thm-every-smooth-manifold-admits-a-riemannian-metric.md`.
- `items/thm-excision-for-singular-homology.md`.
- `items/thm-fully-relative-poincare-lefschetz-duality.md`.
- `items/thm-fundamental-theorem-on-flows.md`.
- `items/thm-handle-cancellation.md`.
- `items/thm-handle-duality-from-negating-a-morse-function.md`.
- `items/thm-high-dimensional-whitney-trick.md`.
- `items/thm-higher-dimensional-spheres-are-simply-connected.md`.
- `items/thm-homotopy-equivalences-induce-isomorphisms-on-singular-homology.md`.
- `items/thm-induced-fundamental-group-map-functoriality.md`.
- `items/thm-long-exact-sequence-of-a-pair-in-singular-homology.md`.
- `items/thm-long-exact-sequence-of-relative-homotopy-groups.md`.
- `items/thm-mayer-vietoris-sequence-in-singular-homology.md`.
- `items/thm-morse-functions-and-handle-decompositions-correspond.md`.
- `items/thm-morse-rearrangement-by-index.md`.
- `items/thm-naturality-of-the-long-exact-sequence-of-a-pair.md`.
- `items/thm-oriented-intersection-number-is-homotopy-invariant.md`.
- `items/thm-parametric-transversality.md`.
- `items/thm-regular-interval-diffeomorphism.md`.
- `items/thm-relative-cellular-homology-computes-relative-singular-homology.md`.
- `items/thm-relative-homology-of-consecutive-cw-skeleta.md`.
- `items/thm-relative-hurewicz-theorem.md`.
- `items/thm-relative-whitney-approximation-for-manifold-valued-maps.md`.
- `items/thm-seifert-van-kampen.md`.
- `items/thm-self-indexing-morse-function-existence.md`.
- `items/thm-simply-connected-cw-integral-homology-comparison-implies-finite-range-homotopy-comparison.md`.
- `items/thm-smith-normal-form-existence-over-a-pid.md`.
- `items/thm-smooth-partitions-of-unity-exist-on-manifolds.md`.
- `items/thm-the-cohomology-universal-coefficient-sequence-splits-nonnaturally.md`.
- `items/thm-transverse-preimage-theorem.md`.
- `items/thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold.md`.
- `items/thm-weak-whitney-proper-embedding-theorem.md`.
- `items/thm-whitehead-theorem.md`.
- `items/thm-whitney-move-removes-a-cancelling-pair-of-intersections.md`.
- `items/thm-whitney-trick-in-the-two-dimensional-borderline-case.md`.

## Remaining uneditable defect and blocker

- Subject: `prop-dual-elimination-of-top-index-handles`, producer batch 1; assigned consumer `lem-duality-eliminates-top-and-cotop-handles` retains this supplier in its declared dependency closure.
- Location: `items/prop-dual-elimination-of-top-index-handles.md:55`, Proof step 1.1, the “Every handle body” sentence.
- Class/severity: false claim / fatal under the reader rule that defective claims cannot be excused as short proof omissions. The sentence is extraneous to the valid duality conclusion, but is still a false mathematical assertion in the current item.
- Evidence and required repair: Proof step 1.1 asserts that every handle body in the newly chosen presentation is the same subset of W as in any other presentation. This is false: inserting a cancelling pair (thm-creation-of-a-cancelling-handle-pair) changes the handle list and its handle-body subsets while preserving the manifold. Duality identifies bodies only between a fixed presentation and its own reversed dual, not arbitrary presentations. The supplier needs this sentence deleted or restricted to that fixed presentation/dual pair. Its corrected end-order statement is unaffected. Observed current raw SHA-256: 4a3d89ca48a8824728e9da319787a520213e30a53d5fdbe8c554a993435eda4f.
- Edit scope: outside batch 15; no change made to this carrier. No pre snapshot is claimed. Its exact currently observed bytes are bound above.

## Page verdicts

- **A, `the-smooth-h-cobordism-theorem`:** reviewed with item/prose repairs. The complete 2<=k<=n−2 handle normal-form range and boundary dimension n>=5 theorem are preserved; the punctured-contractible-manifold corollary now states full AC. One outside-supplier false assertion remains for Step 5b; no withdrawal of the theorem is proposed.
- **B, `the-smooth-h-cobordism-theorem-examples`:** page prose was read and left unchanged. Product/cancellation examples, the explicit acyclic six-manifold, the dimension-four source witness and the 2-by-2 computation were checked. Its conditional geometric matrix application is now explicit in the item. No B-page prose defect remains observed.

## Coverage and limitations

All 26 assigned items and both assigned pages were opened. The direct supplier arguments and further branch prerequisites required for the repaired inferences were checked in the bounded review described above; some further suppliers were opened on demand after an initial consumer reading and the affected inference was then revisited. This is not an exhaustive audit of every transitive item or every page in the library. No rendered evidence-bundle path was supplied; disk sources and complete relevant primary-source arguments were used. Milnor/Lück selected arguments and KPR Example 1.13/§5.8 were actually read, rather than trusting author notes. The gauge-theoretic non-diffeomorphism theorem remains a cited authoritative result, not a local gauge-theory proof. The conditional Mazur variant is not a premise of the explicit six-dimensional witness, and the thesis was not independently verified. Outside suppliers changed during review; historical observations remain in this report but no unobserved old bytes are assigned a pre hash. All changes are limited to assigned draft items, assigned A-page prose, the batch proof contracts and this task’s report/findings artifacts. No publication, judge stamp or gate transition was performed.

Final scoped graph check: every deps target in the changed-item closure exists and no deps cycle was found; all 22 edited carriers remain draft with no judge record. The remaining supplier finding’s raw hash and its exact assigned consumer’s direct dependency were checked again immediately before handoff.
