# Step 3b report — periods, Jacobians, and Abel–Jacobi theory

Run: `frontier-43-complex-representation-15`  
Role: `alpha-high`  
Owned pair: `periods-jacobians-and-abel-jacobi-theory` and its examples page.

## Owned original items and current dependency order

1. `lem-cellular-homology-of-the-one-polygon-surface-model` (level 0, A)
2. `lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism` (level 0, A)
3. `def-intersection-form-on-the-homology-of-a-closed-oriented-surface` (level 1, A)
4. `thm-symplectic-homology-basis-compact-riemann-surface` (level 2, A)
5. `ex-symplectic-homology-basis-of-a-genus-two-surface` (recomputed level 2, B; after the A-page level-2 theorem by page order)
6. `lem-dbar-solvability-criterion-for-a-smooth-zero-one-form` (level 10, A)
7. `def-picard-group-of-divisor-classes-and-pic-zero` (recomputed level 11, A)
8. `lem-holomorphic-differentials-form-a-g-dimensional-space` (level 14, A)
9. `lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere` (level 14, A)
10. `def-period-pairing-and-period-lattice` (level 15, A)
11. `lem-holomorphic-differentials-separate-generic-points` (level 15, A)
12. `lem-period-pairing-is-well-defined-and-computed-by-integration` (level 16, A)
13. `lem-cut-surface-and-boundary-jumps-of-primitives` (level 17, A)
14. `thm-symplectic-period-formula-for-wedge-integrals` (level 18, A)
15. `thm-riemann-bilinear-relations` (level 19, A)
16. `def-jacobian-of-a-compact-riemann-surface` (level 20, A)
17. `def-abel-jacobi-map` (level 21, A)
18. `lem-abel-jacobi-map-is-well-defined-and-base-point-independent` (level 22, A)
19. `lem-principal-divisors-have-vanishing-abel-jacobi-class` (level 23, A)
20. `lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity` (level 23, A)
21. `thm-jacobi-inversion` (level 23, A)
22. `ex-base-point-cancellation-for-degree-zero-divisors` (level 23, B)
23. `thm-abels-theorem-for-divisors` (level 24, A)
24. `cor-picard-zero-is-the-jacobian` (level 25, A)
25. `thm-abel-jacobi-embedding-positive-genus` (level 25, A)
26. `ex-period-matrix-and-jacobian-of-the-pentagon-curve` (level 26, B)
27. `ex-periods-of-a-complex-torus` (level 26, B)
28. `ex-abel-image-in-its-jacobian` (level 27, B)
29. `ex-principal-divisor-tests-via-the-abel-jacobi-map` (level 27, B)

**Authorized prerequisite inserted into the current order:** `lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface` is a new A-page addition at level 10, after the level-10 dbar item by page/item tie-break and before the Picard consumer. The Picard item moved from scaffold level 14 to computed level 11. The next original assigned item after Picard is `lem-holomorphic-differentials-form-a-g-dimensional-space` at level 14.

**Additional prerequisite added during the level-15 audit:** `def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface` is a new A-page definition at computed level 0, inserted immediately before its consumer `def-period-pairing-and-period-lattice`. It was absent from both immutable pre-author inventories. No earlier assigned item uses it; it gives a chart-independent integral for the continuous side loops. Under the addition rule, the engine certifies it after successful dispatch; it has no self-review receipt.

## Open obligations at entry

- Recompute the live run state and inspect Step 3a observations, owner direction, named repair reports, current manifests/coverage/contracts, and relevant source passages before authoring.
- Audit every scaffold for its exact claim, assumptions, source support, dependency list, and proof route; repair local gaps within this pair only.
- Inspect the direct in-run prerequisite pair `divisors-riemann-roch-and-duality`; flag any unfinished exact supplier and consuming proof step, author consumers provisionally, and keep their decisions escalated until actual supplier use is reconciled.
- Verify all dependency levels, cross-batch inputs, page order, manifests, coverage, and item-specific proof contracts after edits while preserving sibling rows.
- Run required explicit-path precheck/rendering, content policy, strict contracts, dependency-level checks, `validate-plan`, and one batched final proof-layout command for all changed item paths.
- Record current per-item decisions only after complete authoring and checks; leave genuine unresolved supplier/source/scope issues escalated for the owner.

## Checkpoints

### 1. `lem-cellular-homology-of-the-one-polygon-surface-model`

- **Claim and convention:** Under AC, a compact connected oriented surface of genus $g$ is identified with its standard one-polygon model. For $g\geq1$, the commutator polygon has one vertex, $2g$ loop edges, and one face; both cellular differentials vanish, so the side loops form a basis of $H_1\cong\mathbb Z^{2g}$. For $g=0$, the sphere digon has two vertices and one edge; $\partial_1(e)=v_1-v_0$ and $\partial_2=0$, hence $H_1=0$. The cell-count Euler characteristic is $2-2g$. Subdividing one loop edge inserts a vertex and one extra edge; the old side class is the sum of the two replacement edges.
- **Choice:** AC is used only to invoke the polygonal normal form and classification that identify $X$ with the standard model. All finite endpoint, incidence, chain, and subdivision computations are choice-free.
- **Exact suppliers:** `def-axiom-of-choice`; `thm-polygonal-normal-form-for-compact-connected-surfaces`; `thm-classification-of-compact-connected-surfaces`; `def-polygonal-schema-and-edge-pairing`; `def-oriented-cellular-chain-group`; `def-cellular-boundary-from-three-consecutive-skeleta`; `def-incidence-number-of-two-cw-cells`; `thm-cellular-boundary-is-the-incidence-degree-matrix`; `lem-the-cellular-boundary-squares-to-zero`; `def-cellular-homology`; `thm-cellular-homology-computes-singular-homology`; `def-euler-characteristic-of-a-finite-cw-complex`. All are published; no in-run supplier is open. The unused scaffold edges to `def-singular-chain-complex-and-singular-homology` and `thm-euler-poincare-formula-for-finite-cw-complexes` were removed because the local argument does not invoke them.
- **Source passages:** Hatcher, *Algebraic Topology*, §2.2, cellular boundary formula and Example 2.36, printed pp. 140–141; full PDF fetched (8,121,741 bytes, SHA-256 `bebb3032bf9021b956da3bd070eb6c67dc662cf849be9cdf6679f677560e5618`), with the complete relevant passages read. Gallier–Xu, *A Guide to the Classification Theorem for Compact Surfaces*, Chapter 6 §6.1, Definition 6.2 and Figure 6.4(a), printed pp. 80–82; full PDF fetched (3,653,732 bytes, SHA-256 `9ed2237db5452d291704ade393e6e1d8456741c739f2bd6afc662f1efae4fca1`), with the relevant passage read.
- **Published-source concern:** Gallier–Xu says the $aa^{-1}$ sphere digon has “a single inner vertex, $(a)$” (printed p. 82). Under the explicit side-pairing convention in `def-polygonal-schema-and-edge-pairing`, the two corners remain distinct; `ex-sphere-polygonal-schema` computes $(V,E,F)=(2,1,1)$. If the source phrase means one CW vertex and one loop edge, the word $aa^{-1}$ has $\partial_1=\partial_2=0$ and would give $H_1\cong\mathbb Z$, contradicting the sphere. Confidence is high in the local endpoint calculation and medium that the external phrase is an error rather than a convention mismatch. The new proof does not use Gallier–Xu's vertex count; it counts the endpoints directly. Existing cited items to reconcile are `thm-polygonal-normal-form-for-compact-connected-surfaces`, `thm-classification-of-compact-connected-surfaces`, and `ex-sphere-polygonal-schema`. Leave any shared-ledger disposition to the serial reconciler; a source-convention review or narrower citation is the repair strategy.
- **Current decision:** Recorded `repaired`, confidence 1, with all 12 direct dependency IDs examined after the item-local checks passed.
- **Checks actually run:** Explicit-path precheck passes (after adopting its proposed canonical step numbering); explicit-path rendercheck passes with zero warnings; strict proof contract passes for this item (1/1); content policy passes for a temporary one-item manifest (1 item, 0 errors/warnings); `depcheck` passes for this item (0 errors/warnings); batch-11 `manifest-deps` passes (29 items, 0 missing deps); batch-11 coverage passes with 59 harvested results and 0 errors/warnings. The first-item dependency level is 0. `item-dependency-levels` found 24 stale stored levels later in batch 11; I recomputed them from the current run manifests and corrected the 24 manifest labels. The resulting owned-pair levels match the dispatch list, with 0 owned-pair label errors.
- **Run-wide dependency hold:** The required run-wide dependency-level check still reports seven stale labels on the sibling `kazhdans-property-t-and-spectral-gap` pair: `thm-compact-groups-have-property-t` (stored 3, computed 2), `def-relative-property-t-for-a-pair` (1, 2), `lem-sl2-r-semidirect-r2-has-relative-property-t` (2, 3), `lem-normal-relative-property-t-controls-distance-to-invariant-vectors` (2, 3), `thm-sl-n-r-has-property-t-for-n-at-least-three` (3, 4), `ex-a-kazhdan-pair-for-a-compact-group` (4, 3), and `ex-property-t-for-a-finite-group` (5, 4). These are outside my ownership. The run-level check must be rerun after that pair's labels are reconciled.
- **Pre-splice plan check:** `validate-plan` for the two selected pages passes page-level order and prerequisites, with 14 `redundant-prereq` warnings on the A page: `cw-complexes-and-cellular-homology` is implied through five other requirements; `cup-cap-cross-products-and-cohomology-rings` through four; `orientations-poincare-lefschetz-and-alexander-duality` through three; `hilbert-space-geometry-and-riesz-representation` through `divisors-riemann-roch-and-duality`; and `classification-of-compact-connected-surfaces` through `divisors-riemann-roch-and-duality`. The canonical plan still has empty item lists for both selected pages, so this pass checks page metadata only. Carry the 14 warnings to Step 4 and rerun against spliced/current manifest items; no item dependency is treated as resolved by this pre-splice pass.
- **Next action at this checkpoint:** The other level-0 item is now complete. Proceed next to `def-intersection-form-on-the-homology-of-a-closed-oriented-surface` (level 1).

### 2. `lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism`

- **Claim and convention:** A nonconstant holomorphic map $f:X\to Y$ between compact connected Riemann surfaces is proper; if its degree is $1$, it is bijective and its set-theoretic inverse is holomorphic. The statement explicitly defines the isomorphism as a holomorphic two-sided inverse.
- **Choice:** The proof is choice-free. The proper-map supplier itself records its choice-free proof; the local properness argument uses only continuity, compactness, Hausdorffness, and compact-subset closedness. The unsupported scaffold dependency on `def-axiom-of-choice` was removed.
- **Exact suppliers:** `thm-proper-holomorphic-map-riemann-surfaces-has-degree`; `thm-local-normal-form-holomorphic-map-riemann-surfaces`; `def-ramification-index-and-branch-value`; `def-biholomorphic-map`; `def-holomorphic-and-meromorphic-map-of-riemann-surfaces`; `def-riemann-surface-and-holomorphic-atlas`; `thm-compact-subset-of-a-hausdorff-space-is-closed`. All are published; no in-run supplier is open. The scaffold's `cor-injective-holomorphic-derivative-nonzero` and `lem-nonzero-derivative-gives-local-biholomorphism` were not needed: the local power-map theorem already states that index $1$ is exactly local biholomorphy. The compact-subset closedness supplier was added to justify properness rather than silently assuming it.
- **Source passages:** McMullen, *Riemann Surfaces*, Chapter 15, proof of Theorem 15.7, printed p. 130: it uses a degree-one map to the sphere to conclude genus zero. Looijenga, *Riemann Surfaces*, Chapter 7 §2, proof of Corollary 7.7, printed p. 61: it says degree one suffices for the Abel map to be an isomorphism. Both passages were re-opened from the current author-hosted PDFs and read in full. They invoke the criterion in applications rather than prove the generic criterion; the current item supplies the complete proof from the proper degree and local normal-form suppliers, so this is not an open proof obligation.
- **Checks actually run:** Explicit-path precheck and rendering pass; strict proof contract passes for this item and for both completed items (2/2); content policy passes for both items using a temporary selected manifest (2 items, 0 errors/warnings); focused `depcheck` passes for both items (0 errors/warnings); batch-11 `manifest-deps` passes (29 items, 0 errors); coverage passes with 61 harvested results and 0 errors/warnings. Dependency level is 0, matching the recomputed manifest label.
- **Current decision:** Recorded `repaired`, confidence 1, with all seven direct dependency IDs examined after the item-local checks passed.
- **Next action at this checkpoint:** The level-1 definition is now complete. Proceed to `thm-symplectic-homology-basis-compact-riemann-surface` (level 2).

### 3. `def-intersection-form-on-the-homology-of-a-closed-oriented-surface`

- **Definition and conventions:** For a nonempty compact connected integral-oriented surface with finite free $H_1$, set $D_X(a)=a\cap[X]$ and define $\langle\gamma,\delta\rangle_X=\langle D_X^{-1}\gamma\smile D_X^{-1}\delta,[X]\rangle$. The cup product and outer pairing use the cohomology-first cup/cap and Kronecker conventions. Graded commutativity gives skew-symmetry; integer-valuedness gives a zero diagonal. The adjunction identity is the exact one in `cor-poincare-duality-gives-a-nonsingular-cup-pairing`, step 1.1. Reversing orientation negates the form because the fundamental class changes sign while the two inverse-duality factors contribute cancelling signs. No unimodularity is claimed here.
- **Geometry and scope:** The geometric intersection clause is restricted to smooth closed oriented transverse curves (in particular on compact Riemann surfaces), matching `thm-geometric-intersection-equals-the-poincare-dual-cup-pairing`'s smooth-manifold hypothesis. The analogous mod-two geometric formula is recorded only in the theorem's mod-two setting, which does not require orientability. The genus-zero case is explicit: $H_1=0$ and the form is the unique zero pairing; rank one cannot occur because closed connected orientable surfaces have rank $2g$.
- **Choice:** AC is stated for the topological classification and global Poincaré-duality/geometric-intersection interfaces. Once $D_X$ and $[X]$ are supplied, the cup formula, adjunction, and orientation-sign calculation are choice-free. The direct `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology` scaffold edge was removed: this definition does not invoke the UCT independently of its cited duality/cup-pairing suppliers.
- **Exact suppliers:** `def-axiom-of-choice`; `lem-cellular-homology-of-the-one-polygon-surface-model`; `thm-classification-of-compact-connected-surfaces`; `thm-topological-classification-compact-riemann-surfaces`; `def-topological-manifold-without-boundary`; `def-r-orientation-of-a-topological-manifold`; `thm-poincare-duality-for-oriented-topological-manifolds`; `cor-poincare-duality-gives-a-nonsingular-cup-pairing`; `def-cap-duality-map-for-an-oriented-manifold`; `def-cap-product-with-cohomology-first`; `def-fundamental-class-of-a-compact-oriented-manifold`; `def-singular-cohomology-ring`; `def-singular-cup-product-on-cochains`; `def-kronecker-evaluation-pairing`; `lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives`; `thm-singular-cohomology-is-graded-commutative`; `def-geometric-intersection-pairing-on-a-closed-oriented-manifold`; `thm-geometric-intersection-equals-the-poincare-dual-cup-pairing`. All resolve to published items; no missing prerequisite is identified.
- **Source passages:** Hatcher, *Algebraic Topology*, §3.3, Theorem 3.30 and Example 3.31, printed pp. 241–242; the current author-hosted chapter PDF was fetched (1,292,366 bytes, SHA-256 `3fe35aae9c2bddc3720a86460e0d6bb6fd7dae3489f145f5475c3b4e71f6b793`) and those passages were read. Looijenga, *Riemann Surfaces*, Chapter 3 §3, Proposition 3.19 and Corollary 3.20, printed pp. 33–34; the live source passage on the alternating de Rham pairing and dual curve basis was read. Looijenga's treatment is over real de Rham cohomology; the integral form and its cap-cup order are supplied by the local integral items.
- **Checks actually run:** Definition precheck returns `not-applicable` (zero proof steps); explicit-path rendering passes with zero warnings; strict definition contract passes; content policy passes for the three completed items (0 errors/warnings); focused `depcheck` passes for all three (0 errors/warnings); batch-11 `manifest-deps` passes (29 items, 0 errors); batch-11 coverage passes with 64 harvested results and 0 errors/warnings. Dependency level 1 matches the recomputed graph. The run-wide dependency-level hold remains the same seven sibling items listed under checkpoint 1.
- **Current decision:** Recorded `repaired`, confidence 1, with all 18 direct dependency IDs examined after the item-local checks passed.
- **Next action:** Audit and author `thm-symplectic-homology-basis-compact-riemann-surface` at recomputed level 2.

### 4. `thm-symplectic-homology-basis-compact-riemann-surface`

- **Claim and conventions:** For a compact connected genus-$g$ Riemann surface with its canonical orientation, choose the orientation-compatible one-polygon model and its ordered side-loop classes $e=(a_1,b_1,\ldots,a_g,b_g)$. The cellular supplier gives $H_1\cong\mathbb Z^{2g}$ with this basis. UCT evaluation is an isomorphism because $H_0\cong\mathbb Z$ has zero Ext term, so it supplies the dual cohomology basis $x_p$. The polygon cup matrix is $J=\operatorname{diag}(J_2,\ldots,J_2)$, where $J_2=\left(\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}\right)$. Cap-cup adjunction gives $D_X(x_p)=\sum_qJ_{pq}e_q$ and $D_X^{-1}(e_q)=\sum_pJ_{pq}x_p$; hence the intersection matrix is $J^{\mathsf T}JJ=J$. The cup pairing in the evaluation-dual basis also has matrix $J$. At $g=0$, the digon gives $H_1=H^1=0$; both empty pairings are unimodular by the empty-determinant convention. At $g=1$ there is one $J_2$ block. Reversing orientation changes $J$ to $-J$, and replacing each $b_i$ by $-b_i$ restores the displayed symplectic convention.
- **Orientation compatibility:** The proof now handles the case that the chosen model initially gives the inverse commutator word: finite reversal of handle order and swapping each pair of labels changes it back because $[a,b]^{-1}=[b,a]$, while retaining the quotient orientation. This makes the sign convention in the polygon cup supplier explicit.
- **Geometric clause:** The clause is conditional: whenever smooth closed oriented embedded-curve representatives of two side-loop classes are given and transverse, their signed count equals the computed form by the geometric-intersection theorem. It does not assert that a chosen topological polygon loop is already smooth. The Riemann surface atlas supplies a smooth structure because holomorphic transition maps are smooth in real coordinates; the smooth-manifold hypothesis is therefore verified.
- **Choice:** AC is assumed and declared directly. It is used through classification and polygonal normal form (step 1.1), the AC-stated integral UCT (step 1.2), and Poincaré duality (step 3.1). The geometric-intersection theorem is invoked under its stated AC hypothesis only in the already-transverse case, so no transverse-approximation selection is made here. The finite relabeling, matrix identities, and determinant calculations are choice-free.
- **Exact suppliers:** `def-axiom-of-choice`; `def-genus-and-euler-characteristic-compact-riemann-surface`; `def-intersection-form-on-the-homology-of-a-closed-oriented-surface` (completed earlier in this batch); `def-geometric-intersection-pairing-on-a-closed-oriented-manifold`; `def-kronecker-evaluation-pairing`; `lem-cellular-homology-of-the-one-polygon-surface-model` (completed earlier in this batch); `lem-integral-surface-cup-pairing-from-the-oriented-polygon`; `thm-classification-of-compact-connected-surfaces`; `thm-geometric-intersection-equals-the-poincare-dual-cup-pairing`; `thm-poincare-duality-for-oriented-topological-manifolds`; `thm-polygonal-normal-form-for-compact-connected-surfaces`; `thm-topological-classification-compact-riemann-surfaces`; `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`; `def-riemann-surface-and-holomorphic-atlas`; and `cor-holomorphic-functions-are-real-analytic-and-smooth`. The two in-run suppliers are earlier, authored, and have no open mathematical use; the other direct suppliers are published. No dependency from the in-run divisors pair is used by this theorem.
- **Source passages read in full for the cited claims:** Hatcher, *Algebraic Topology*, §3.2 Example 3.7, printed pp. 207–208, including the evaluation-dual cohomology basis and all four signed cup products; and §3.3 Theorem 3.30/Example 3.31, printed pp. 241–242, including the cap-duality map and genus-$g$ model. The current full PDF was fetched (8,121,741 bytes, SHA-256 `bebb3032bf9021b956da3bd070eb6c67dc662cf849be9cdf6679f677560e5618`). McMullen, *Riemann Surfaces*, Chapter 15 “The symplectic form on $H_1$,” printed pp. 134–135, was read through the basis convention and Theorem 15.13’s complete cut-surface wedge-period proof. Looijenga, *Riemann Surfaces*, Chapter 3 §3, Proposition 3.19 and Corollary 3.20, printed pp. 33–34, was read through the full real de Rham pairing and nondegeneracy argument. The latter two give independent convention checks; the integral proof here comes from the local cellular, UCT, cup, and cap suppliers. No source defect was found in these passages. The previously reported Gallier–Xu sphere-digon vertex concern remains in checkpoint 1.
- **Manifest, coverage, contract:** Synchronized the item’s direct dependencies and statement in the batch manifest. Removed the unused direct dependency on `cor-poincare-duality-gives-a-nonsingular-cup-pairing`: the completed intersection-form definition itself states the exact cap-cup adjunction used here. Added the actually used geometric-intersection interfaces and the smooth-transition fact. Added the Hatcher Example 3.7 and Theorem 3.30/Example 3.31 harvest mappings while preserving sibling coverage entries. Added a six-step strict contract with exact internal excerpts, source uses, and empty/zero/one/degenerate/endpoint/Choice/iff dispositions.
- **Checks actually run:** Explicit-path precheck passes; explicit-path rendercheck passes with zero errors/warnings; strict proof contract passes for this item; content policy passes for the four completed items (0 errors/warnings); focused `depcheck` passes for the four items (0 errors/warnings); focused `citecheck` passes for this theorem (0 warnings); focused `fwdcheck` and `extcheck` pass for the four items (0 errors/warnings); batch-11 `manifest-deps` passes (29 items, 0 missing); run-wide `item-dependency-levels check` passes (378 items across 30 pages, max level 27), and this theorem remains at level 2; batch-11 coverage with `--require-destination` passes (66 harvested results, 0 errors/warnings). `validate-plan` re-run for both pair pages against `research/plan-spec.json` passes page-level ordering and declared prerequisites with the same 14 `redundant-prereq` warnings from checkpoint 1. Both plan rows still have empty item lists, so this remains a pre-splice page-level result and item dependencies must be checked after Step 4.
- **Current decision:** Recorded `repaired`, confidence 1, with all 15 direct dependency IDs examined after the item-local checks passed.
- **Open obligations:** No theorem-specific mathematical or source gap remains. Keep the 14 Step-4 page-prerequisite warnings visible; the plan’s item lists remain absent. The earlier published Gallier–Xu endpoint concern is not a blocker for this theorem and remains routed to the serial reconciler.
- **Next action:** Proceed to `ex-symplectic-homology-basis-of-a-genus-two-surface` (recomputed level 2, examples page after the level-2 A-page theorem); read its exact suppliers before inspecting later items.

### 5. `ex-symplectic-homology-basis-of-a-genus-two-surface`

- **Claim and calculation:** For the oriented octagon with word $[a_1,b_1][a_2,b_2]$, the corner identifications run $v_0\sim v_3\sim v_2\sim v_1\sim v_4\sim v_7\sim v_6\sim v_5\sim v_0$, giving one cyclic vertex link; there are four paired edges and one face. Opposite-exponent pairings carry the face orientation across each edge, and the two commutator blocks give the genus-two normal form. The A-page cellular item gives the basis $[a_1],[b_1],[a_2],[b_2]$ of $H_1\cong\mathbb Z^4$. In its evaluation-dual cohomology basis the integral cup matrix is $J=\operatorname{diag}(J_2,J_2)$, with $J_2=\left(\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}\right)$. Cap-cup adjunction yields $D(x_p)=\sum_qJ_{pq}e_q$ and $D^{-1}(e_q)=\sum_pJ_{pq}x_p$, hence the intersection matrix $J^{\mathsf T}JJ=J$ and determinant $1$. The genus-zero digon has zero $H_1$ and empty matrix; the genus-one square has $H_1\cong\mathbb Z^2$ and matrix $J_2$.
- **Scaffold repair and dependency order:** The manifest had an item row but there was no corresponding item file. I authored the original scaffold ID. The scaffold directly cited `thm-symplectic-homology-basis-compact-riemann-surface`, but that theorem assumes a compact Riemann surface while the example’s octagon is only a topological surface; its complex-structure hypothesis was not supplied. The example now proves the matrix directly from the topological cellular, polygon cup, and intersection-form suppliers. It also removes direct dependencies on `ex-torus-polygonal-schema` and `ex-sphere-polygonal-schema`; steps F2–F5 compute both endpoint cases from A-page suppliers. Recomputing the dependency graph lowers this item from stored level 3 to level 2. The preceding theorem is also level 2 and remains first because A page order 1614 precedes B page order 1615. The manifest and item metadata now both say level 2.
- **Choice:** AC is declared and used through polygonal normal form/classification, the cellular/cup-duality interfaces, and the integral intersection-form interface. The octagon corner orbit, cellular basis calculation after the model is fixed, signed $J$ matrix arithmetic, and determinant computations are finite and choice-free.
- **Exact suppliers:** `def-axiom-of-choice`; `def-polygonal-schema-and-edge-pairing`; `def-intersection-form-on-the-homology-of-a-closed-oriented-surface`; `def-kronecker-evaluation-pairing`; `lem-cellular-homology-of-the-one-polygon-surface-model`; `lem-integral-surface-cup-pairing-from-the-oriented-polygon`; `thm-classification-of-compact-connected-surfaces`; and `thm-polygonal-normal-form-for-compact-connected-surfaces`. The two local in-run suppliers are fully authored and checked in checkpoints 1 and 3; the remaining suppliers are published. No unfinished supplier or cross-batch item dependency remains.
- **Sources read:** Hatcher, *Algebraic Topology*, §2.2 Example 2.36, printed p. 141, was read through the general one-vertex commutator CW chain-complex and $H_1=\mathbb Z^{2g}$ calculation. Hatcher §3.2 Example 3.7, printed pp. 207–208, was read through the evaluation-dual basis and all signed cup products. Gallier–Xu, *A Guide to the Classification Theorem for Compact Surfaces*, Chapter 1 §1.2, printed pp. 7–10, was read through the general $4g$-gon word and Figure 1.9’s explicit genus-two octagon. These external passages are independent checks; the local A-page suppliers give the exact inputs used by the proof. The scaffold’s Hatcher locator “Example 2.3” was incorrect: that example is the torus with a $Δ$-complex structure, not the genus-two octagon. The item now cites Examples 2.36/3.7 for Hatcher and Figure 1.9 for Gallier–Xu. No published-source concern was identified.
- **Manifest, coverage, contract:** Registered the newly written file under the existing B-page ID, synchronized the statement/dependencies/strategy in the manifest, removed the three invalid or unnecessary direct edges (`thm-symplectic-homology-basis-compact-riemann-surface`, `ex-torus-polygonal-schema`, and `ex-sphere-polygonal-schema`), and updated its dependency label to 2. Added coverage mappings for Hatcher Examples 2.36/3.7 and Gallier–Xu Figure 1.9. Added the six-step strict contract with exact internal excerpts and all boundary/Choice cases.
- **Checks actually run:** Explicit-path precheck passes; explicit-path rendercheck passes with zero errors/warnings; strict proof contract passes; content policy passes for the five completed items (0 errors/warnings); focused `depcheck` passes for the five items (0 errors/warnings); focused `citecheck` passes for this item (0 warnings); focused `fwdcheck` and `extcheck` pass for five items (0 errors/warnings); `manifest-deps` passes for batch 11 (29 items, 0 missing); run-wide dependency-level check passes (378 items on 30 pages, maximum level 27), including the recomputed level 2; batch-11 coverage with `--require-destination` passes (69 harvested results, 0 errors/warnings). The pair’s page-level `validate-plan` result and its 14 pre-splice redundant-prerequisite warnings remain as recorded in checkpoint 4; rerun it at final batch gates, noting that plan-spec still has no item lists.
- **Current decision:** The original scaffold row was `ready`, but the carrier file was absent. The item is now authored and checked; recorded `repaired`, confidence 1, with all eight direct dependency IDs examined.
- **Open obligations:** No example-specific mathematical or source gap remains. Finish the remaining 24 owned items, rerun all complete-batch gates, and record item decisions only after those checks. The Step-4 page warnings remain open as in checkpoint 1.
- **Next action:** This historical checkpoint is superseded by checkpoints 9–11; the trace and period-pairing items are now authored. Continue with the next original level-15 item, `lem-holomorphic-differentials-separate-generic-points`.

### 10. `def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface` — authorized prerequisite addition

- **Missing interface and definition:** While auditing the next period definition, I found that the library has complex contour integrals in the plane but no chart-independent path integral for a holomorphic differential on a Riemann surface. The scaffold's polygon side loops are topological continuous paths, and their piecewise-$C^1$ property was not supplied. This A-page prerequisite defines the integral by endpoint differences of local primitives, proves independence of charts/primitives/subdivision, and records additivity, reversal, zero on constant paths, complex linearity, and agreement with the ordinary contour integral for piecewise-$C^1$ paths. It therefore makes the topological side-loop periods meaningful without asserting that those particular loops are already smooth.
- **Exact dependencies and level:** Its 19 direct dependencies are `cor-complex-analytic-functions-have-local-primitives`, `cor-holomorphic-functions-are-real-analytic-and-smooth`, `cor-piecewise-c1-paths-have-additive-speed-integral-length`, `def-complex-contours-reversal-concatenation-and-closedness`, `def-complex-domain`, `def-complex-line-integral-over-a-rectifiable-path`, `def-meromorphic-differential-on-a-riemann-surface`, `def-piecewise-c1-path-operations-and-oriented-reparametrizations`, `def-riemann-surface-and-holomorphic-atlas`, `lem-finite-choice`, `thm-chain-rule-for-complex-derivatives`, `thm-complex-numbers-are-the-real-coordinate-plane`, `thm-continuous-image-of-a-connected-space`, `thm-existence-of-complex-line-integrals-on-rectifiable-paths`, `thm-fundamental-theorem-for-complex-line-integrals`, `thm-heine-borel-rn`, `thm-lebesgue-number-lemma`, `thm-taylor-expansion-holomorphic-function`, and `thm-zero-complex-derivative-on-a-domain-implies-constant`. All resolve to published files; the added item and batch manifest both say dependency level 0. It is inserted immediately before `def-period-pairing-and-period-lattice` in the A-page manifest.
- **Sources and Choice:** Looijenga, *Riemann Surfaces*, Ch. 7 §1, printed p. 59, and Forster, *Lectures on Riemann Surfaces*, Ch. 2 §20.4, printed p. 161, were read in full. The local-primitive proof is explicit and choice-free; finite chart and primitive selections use only finite choice.
- **Manifest, coverage, and contract:** Registered the existing-page addition, synchronized its 19 dependencies and level, added Forster/Looijenga coverage mappings, and added a strict contract with exact item-statement excerpts and all boundary/Choice cases. The immutable pre-author scaffold inventory and existing-item-file list both omit this ID, so it received no self-review or `record-item`; engine certification is due after successful dispatch.
- **Checks actually run:** Explicit-path precheck passes; explicit-path rendercheck passes; strict proof contract passes (1/1, 0 errors/warnings); focused content policy passes (1 item, 0 errors/warnings); focused `depcheck`, `citecheck`, `fwdcheck`, and `extcheck` pass (0 errors/warnings); batch-11 `manifest-deps` passes (31 items, 0 errors); coverage passes (82 harvested results, 0 errors/warnings). The run-wide dependency-level check passes (382 items, 30 pages, maximum level 27).
- **Next action:** Author the original consumer `def-period-pairing-and-period-lattice` immediately after this prerequisite.

### 11. `def-period-pairing-and-period-lattice`

- **Claim and scaffold repair:** The fixed one-polygon side-loop representatives now use the local-primitive path integral, which accepts continuous loops. The definition sets $P$ by the unique integer coordinates in the fixed symplectic basis and the fixed loop representatives, proves that coordinate formula additive and complex-linear, defines $e$ and its image subgroup, and specifies the period matrix. It does not assert discreteness or fullness of that subgroup; the later Riemann bilinear relations establish the full-lattice property. This removes the unsupported piecewise-smooth representative clause and avoids using the later well-definedness lemma as an input to this definition.
- **Choice and exact dependencies:** Full AC is assumed and used through the symplectic-basis and dimension-$g$ interfaces; all sums and coordinate calculations are finite. The five direct dependencies are `def-axiom-of-choice`, `def-meromorphic-differential-on-a-riemann-surface`, `def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface`, `lem-holomorphic-differentials-form-a-g-dimensional-space`, and `thm-symplectic-homology-basis-compact-riemann-surface`. The item and manifest both carry level 15.
- **Unfinished supplier and consuming step:** `lem-holomorphic-differentials-form-a-g-dimensional-space` remains `escalate` on its unfinished batch-10 Riemann–Roch and divisor-line-bundle suppliers; this item uses its $\dim\Omega(X)=g$ statement in Fact F2 and step 4.1 for the algebraic-dual dimension and period-matrix shape. `thm-symplectic-homology-basis-compact-riemann-surface` was recorded `repaired` after the period item’s escalation was first recorded. The period decision remains escalated on the dimension supplier; its stored reason still notes the symplectic supplier's earlier pending decision. The path-integral prerequisite is complete and locally checked but awaits engine certification as an authorized addition.
- **Sources read:** Looijenga, *Riemann Surfaces*, Ch. 7 §1, Proposition–Definition 7.1, printed p. 59, was read in full for $e:H_1\to\Omega^*$ and its period subgroup. Forster, *Lectures on Riemann Surfaces*, Ch. 2 §20.4, printed p. 161, and §21.2, printed p. 168, were read in full for 1-chains, integration of closed forms, and the period subgroup. These source passages support the construction; the open in-run dimension supplier remains an explicit obligation.
- **Manifest, coverage, and contract:** Synchronized the fixed-basis statement and five direct dependencies in the manifest, removed the direct plane-contour dependencies now supplied through the path-integral prerequisite, and preserved the later representative-independence and lattice claims for their assigned items. Added a strict contract with exact internal excerpts, boundary cases, Choice use, and both source passages. Batch-11 coverage is 82 harvested results.
- **Checks actually run:** Explicit-path precheck passes; explicit-path rendercheck passes; strict proof contract passes (1/1, 0 errors/warnings); focused content policy passes for the path-integral prerequisite and this definition (2 items, 0 errors/warnings); focused `depcheck`, `citecheck`, `fwdcheck`, and `extcheck` pass (0 errors/warnings); batch-11 `manifest-deps` passes (31 items, 0 errors); coverage passes (82 harvested results, 0 errors/warnings); run-wide dependency-level check passes (382 items, maximum level 27).
- **Current decision:** Recorded the original scaffold definition as `escalate`, confidence 1, with all five direct dependencies examined. The remaining open use is the dimension-$g$ supplier in step 4.1; no owner-held escalation was overridden.
- **Next action:** Continue with `lem-holomorphic-differentials-separate-generic-points` at level 15, after reading its exact suppliers.

### 6. lem-dbar-solvability-criterion-for-a-smooth-zero-one-form

- **Claim and conventions:** For compact connected $X$, define $H^{0,1}(X,\mathcal O_X)$ explicitly as the global smooth $(0,1)$-forms modulo the image of the global scalar $\bar\partial$ operator; all $(0,1)$-forms are closed since $(0,2)=0$. With $\Omega(X)=H^0(X,K)$, the three claims $\theta=\bar\partial g$, $[\theta]=0$, and $\int_X\theta\wedge\omega=0$ for every $\omega\in\Omega(X)$ are equivalent. The pairing is complex-bilinear, with the order $\theta\wedge\omega$ fixed, and its induced map to $H^0(X,K)^*$ is an isomorphism. The explicit quotient repairs the scaffold’s invalid use of def-dolbeault-cohomology-domain, which is local to plane domains; the new proof does not assert that this local definition supplies global cohomology.
- **Choice:** Full AC is stated. It is used through harmonic-star duality and through the countable-choice metric-existence interface; the quotient, type, and Stokes calculations are choice-free.
- **Exact dependencies and open supplier uses:** def-axiom-of-choice; def-bigraded-complex-differential-forms; def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface; def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface; def-meromorphic-differential-on-a-riemann-surface; thm-general-stokes-theorem; thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology. Removed scaffold edges to cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional and thm-hodge-decomposition-for-dolbeault-forms-on-a-compact-riemann-surface: the current proof uses the harmonic-star theorem as the packaged duality result and locally defines the quotient. Removed unrelated divisor-line-bundle edges def-line-bundle-associated-to-a-divisor and def-divisor-principal-and-canonical-divisor-riemann-surface.
- **Unfinished in-run suppliers:** The live run status still reports hodge-theory-on-compact-riemann-surfaces missing its Step-3b coverage/artifact. Treat these three batch-9 draft suppliers provisionally and keep the item decision escalated until each supplier and its actual use is reconciled: thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology supplies the integration-pairing isomorphism used in step 2.1; def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface supplies the compatible metrics chosen in step 2.1; and def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface supplies the global operator interface in step 1.1 and canonical-bundle/differential identification in step 1.2. The authored supplier statements were inspected provisionally; external sources corroborate the analytic result but do not close these in-run obligations.
- **Source passages read in full:** Forster, *Lectures on Riemann Surfaces*, Ch. 2 §20.7, printed pp. 163–164, through the sufficiency proof of Abel’s criterion; McMullen, *Riemann Surfaces*, Theorem 8.10 and proof, printed pp. 80–82, and Chapter 15 “From smooth to holomorphic,” printed pp. 132–133; Demailly, *Complex Analytic and Differential Geometry*, Ch. VI §7, Theorem 7.3 and proof (7.4), printed pp. 309–310. The external arguments support the quotient pairing and solvability criterion; the in-run harmonic-star theorem remains the actual proof input.
- **Checks actually run:** The explicit-path precheck first proposed canonical step numbering/spacing; I adopted it, then the same explicit-path precheck passed. Explicit-path rendering passes with zero errors/warnings. The strict contract passes (1/1, zero errors/warnings). A temporary one-item manifest passes content policy (1 item, zero errors/warnings). Focused depcheck, citecheck, fwdcheck, and extcheck pass with zero hard errors; fwdcheck marks this item inherited because a transitive supplier dependency chain reaches rem-real-exponents-deferred (details below). Batch-11 manifest-deps passes (29 items, zero missing); run-wide item dependency levels pass (378 items, 30 pages, max 27); batch-11 coverage with --require-destination passes (69 harvested results, zero errors/warnings). The selected-page validate-plan check passes page order with the same 14 redundant-prerequisite warnings and has no item lists in plan-spec.json. The stronger validate-plan --run frontier-43-complex-representation-15 check reads the current 378 manifest items and exits 1 with eight hard errors plus the same 14 warnings; the item-to-page causes are listed under the Step-4 plan mismatches below. No final batched proof-layout has been run yet; it is reserved for handoff after all owned item edits.
- **Published dependency-flow concern (not a local proof gap):** Focused fwdcheck reports this lemma as inheriting a forward marker through def-bigraded-complex-differential-forms → def-wirtinger-operators-in-several-complex-variables → rem-complex-euclidean-space-dictionary → def-p-norms-on-rn → rem-real-exponents-deferred, whose declared forward targets are def-real-power and thm-real-power-laws. This metadata path is confirmed; the proof uses only bidegree and local $\bar\partial$ facts and does not use real powers. Confidence is high that the marker is inherited from this dependency path, but the path’s mathematical necessity is unverified. Required upstream review: check whether those published edges/forward links are load-bearing; if not, remove the overdependency or reclassify its link as orientation-only. Do not edit the published items or shared ledger in this batch.
- **Step-4 plan mismatches (preserve and escalate; no plan edit made):** The current A page’s 14 redundant-prereq warnings remain as recorded in checkpoint 1. The run-wide plan check also finds these actual item dependencies outside the A page’s declared requires closure: def-intersection-form-on-the-homology-of-a-closed-oriented-surface and thm-symplectic-homology-basis-compact-riemann-surface → def-geometric-intersection-pairing-on-a-closed-oriented-manifold and thm-geometric-intersection-equals-the-poincare-dual-cup-pairing on intersection-pairings-self-intersection-and-euler-classes; thm-symplectic-period-formula-for-wedge-integrals and lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity → lem-stokes-for-piecewise-smooth-surface-regions (the cut lemma removed its unused Stokes edge) on the-gauss-bonnet-theorem-for-riemannian-surfaces; thm-riemann-bilinear-relations and def-jacobian-of-a-compact-riemann-surface → def-full-rank-lattice-covolume-and-dual-lattice on poisson-summation-sampling-and-lattice-duality; and def-jacobian-of-a-compact-riemann-surface → def-complex-lattice-and-complex-torus and thm-complex-torus-quotient-is-well-defined on elliptic-functions-and-complex-tori.
- **Step-4 examples-page mismatch:** ex-periods-of-a-complex-torus also has a prohibited B-leaf dependency on ex-complex-torus-holomorphic-atlas from riemann-surfaces-branched-maps-and-differentials-examples; replace it with exact A-page suppliers or a complete local argument. The same example depends on def-complex-lattice-and-complex-torus, thm-complex-torus-quotient-is-well-defined, def-elliptic-function-for-a-lattice, and thm-elliptic-function-divisor-laws on elliptic-functions-and-complex-tori. ex-period-matrix-and-jacobian-of-the-pentagon-curve depends on def-full-rank-lattice-covolume-and-dual-lattice on the Poisson/lattice-duality page and def-complex-lattice-and-complex-torus on the elliptic-functions page. ex-principal-divisor-tests-via-the-abel-jacobi-map depends on def-complex-lattice-and-complex-torus, def-weierstrass-elliptic-p-function, thm-weierstrass-p-normal-convergence-and-periodicity, and thm-elliptic-function-divisor-laws on the elliptic-functions page. Step 4 must either register these A-page prerequisites through the owner’s plan decision or accept a sound item-local repair that removes the unnecessary edge; do not conceal the open dependencies.
- **Current decision:** Recorded escalate with the seven direct dependency IDs examined. The exact open batch-9 consumers/steps above must be reconciled by the owner; the local quotient and Stokes calculations are complete.
- **Next action at this checkpoint:** Picard was the next original scaffold item; before authoring it, the missing arbitrary-line-bundle meromorphic-section prerequisite was added and checkpointed below. That insertion moved Picard to level 11.

### Added prerequisite: `lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface`

- **Claim and reason for addition:** This newly authored A-page lemma states that for compact connected $X$, a holomorphic line bundle $E$, and a prescribed $p\in X$, there is a meromorphic section holomorphic away from $p$ with a pole at $p$. It supplies the missing converse needed to identify every holomorphic line bundle with $\mathcal O(D)$ in the assigned Picard item. The ID was absent from the immutable pre-author scaffold inventory and the existing-item-file list, so it is an addition and receives engine scope/item certification after successful dispatch; no `record-item` self-review is recorded.
- **Proof and Choice:** Full AC is stated. It is used to obtain compatible metrics, to extend a finite independent set in $H^0(X,K\otimes E^*)$ to coordinate functionals when deducing finite dimension from the finite-dimensional Dolbeault group, and through the harmonic-star pairing. The kernel choice in step 3.1 is finite-dimensional linear algebra and needs no additional choice. Steps 1.1–5.1 form cutoff principal parts, annihilate the finite-dimensional dual obstruction, solve the resulting global $\bar\partial_E$ equation, and recover the prescribed nonzero principal part at $p$.
- **Exact direct dependencies:** `def-axiom-of-choice`; `thm-choice-implies-dependent-implies-countable-choice`; `def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface`; `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface`; `def-riemann-surface-and-holomorphic-atlas`; `lem-manifold-bump-for-a-compact-set-inside-an-open-set`; `def-bigraded-complex-differential-forms`; `thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology`; and `cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional`. The corollary is an explicit direct supplier: its finite-dimensionality claim is used in steps 1.1 and 3.1, together with the Hodge pairing isomorphism, to make the target finite-dimensional. The dependency level is 10; the manifest places it after the level-10 dbar criterion by the page/item tie-break and before the Picard consumer.
- **Unfinished suppliers and consuming steps:** The Step-3 status has no current decisions for these batch-9 items: `thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology` (steps 1.1, 3.1, 4.1: metric-dependent pairing isomorphism/injectivity); `def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface` (step 1.1: compatible metrics); `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface` (steps 1.1, 2.1, 4.1, 5.1: local frame, global operator, holomorphic kernel and meromorphic-section interface); and `cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional` (steps 1.1, 3.1: finite-dimensionality of $H^{0,1}(X,E)$). Keep the direct cross-batch rows open until each supplier's proof and actual use are reconciled. The Hodge theorem also has its own unfinished Hodge-decomposition input; the consumer no longer cites that fact directly, but it remains part of the Hodge supplier's proof obligation.
- **Source passages read:** Forster, *Lectures on Riemann Surfaces*, Ch. 3 §§29.15–29.18, printed pp. 225–226, on meromorphic sections and the divisor-line-bundle correspondence; McMullen, *Riemann Surfaces*, Ch. 14, Theorem 14.2 and Corollaries 14.3–14.4, printed pp. 119–120, on finite-dimensional line-bundle cohomology and meromorphic sections; and Ch. 15, “The Picard group,” printed pp. 128–129. McMullen's current full course PDF was opened at Ch. 14 pp. 118–120 and Ch. 15 pp. 127–129. The local proof supplies the argument instead of treating those source statements as proof.
- **Checks actually run:** Explicit-path precheck passes; explicit-path rendering passes; strict proof contract passes after correcting exact source excerpts and step-input mappings; focused content-policy passes (1 item); focused `depcheck`, `citecheck`, `fwdcheck`, and `extcheck` pass; batch-11 `manifest-deps` passes (30 items, 0 missing); batch-11 coverage with `--require-destination` passes (71 harvested results, 0 errors/warnings); run-wide item dependency levels pass (381 items, 30 pages, maximum level 27). An initial strict-contract failure exposed the finite-dimensionality source being cited only from a supplier Facts block; it is now an explicit direct dependency with an exact Statement quote, and its supplier obligation remains open.
- **Next action:** Picard is now authored and checked at recomputed level 11. Continue with the next original assigned item, `lem-holomorphic-differentials-form-a-g-dimensional-space` at level 14, after rereading its exact suppliers.

### 7. `def-picard-group-of-divisor-classes-and-pic-zero`

- **Claim and conventions:** Preserve the full scaffold claim: principal divisors form a subgroup, linear equivalence gives the quotient group $\operatorname{Pic}(X)$, degree descends because principal divisors have degree zero, and $\operatorname{Pic}^0(X)=\operatorname{Div}^0(X)/\operatorname{Prin}(X)$. The map $[D]\mapsto[\mathcal O(D)]$ is a group isomorphism to holomorphic line-bundle classes under tensor product, and the degree-zero subgroup corresponds exactly to degree-zero line bundles. The proof uses the repository's divisor-bundle convention from `def-line-bundle-associated-to-a-divisor`, where the canonical meromorphic section of $\mathcal O(D)$ has divisor $D$.
- **Scaffold repair and exact dependencies:** The original file was absent. I authored it and removed the unsupported direct edge to `thm-riemann-roch-compact-riemann-surfaces`: that theorem is restricted to $E=\mathcal O(D)$ and does not establish a meromorphic section for an arbitrary holomorphic line bundle. Added the new A-page prerequisite `lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface`. Remaining direct dependencies are `def-axiom-of-choice`, `def-divisor-principal-and-canonical-divisor-riemann-surface`, `def-line-bundle-associated-to-a-divisor`, and `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface`. The proof gives the quotient/kernel calculations, proves injectivity by comparing canonical meromorphic sections, and proves surjectivity by local coefficient ratios $f_i/h_i$; the transition identity is checked explicitly. Full AC is used through the meromorphic-section lemma; the divisor-bundle construction on compact $X$ uses a finite cover.
- **Sources read:** Forster, *Lectures on Riemann Surfaces*, Ch. 2 §21.6, printed pp. 170–171, defines $\operatorname{Pic}(X)=\operatorname{Div}(X)/\operatorname{Div}_p(X)$ and $\operatorname{Pic}^0(X)=\operatorname{Div}^0(X)/\operatorname{Div}_p(X)$; Ch. 3 §§29.16–29.18, printed pp. 225–227, proves prescribed-pole meromorphic-section existence, global meromorphic-section existence, and the divisor-sheaf correspondence. Forster's §29.18 uses its sheaf convention $\mathcal O_{-D}$ for the holomorphic section sheaf associated to a section divisor; the item does not import that sign into the repository's $\mathcal O(D)$ convention, and instead proves the local frame isomorphism using the current `def-line-bundle-associated-to-a-divisor` convention. McMullen, *Riemann Surfaces*, Ch. 14 Theorem 14.1 and Corollary 14.4, printed pp. 119–120, gives the local $\mathcal O(D)$ dictionary and line-bundle representation; Ch. 15 “The Picard group,” printed pp. 128–129, identifies degree and the divisor quotient. The current full McMullen PDF was opened through both relevant passages; the local proof independently supplies the required implications.
- **Choice:** Full AC is stated and used only through the meromorphic-section existence prerequisite in step 4.1. The quotient and degree kernel are choice-free, and the compact divisor-bundle construction uses a finite cover.
- **Unfinished direct suppliers and consuming steps:** `def-line-bundle-associated-to-a-divisor` is authored but its Step-3 decision is `escalate`; it supplies $\mathcal O(D)$, tensor compatibility and the canonical meromorphic section in steps 2.2–4.1. `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface` has no current item decision; its local frames, transition law and meromorphic-section interfaces are used in steps 3.1 and 4.1. The new prerequisite `lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface` is an addition awaiting engine certification and is used in step 4.1; its batch-9 Hodge theorem, metric, line-bundle definition and finite-dimensionality corollary remain open at the exact steps listed in the preceding checkpoint. The divisor supplier `def-divisor-principal-and-canonical-divisor-riemann-surface` has a current `repaired` decision at confidence 1 and is verified here in steps 1.1–2.1 and 4.1. The removed Riemann–Roch edge is recorded as removed in the batch-11 cross-batch input.
- **Scope and decision:** Refreshed the current pair scope receipt to `sufficient` after the addition and statement/dependency repair; A/B IDs and homes are unchanged. Recorded the original scaffold ID as `escalate` at confidence 1 with all five direct dependency IDs examined. No owner-held decision was overridden.
- **Checks actually run:** Explicit-path precheck passes; explicit-path rendering passes with zero errors/warnings; strict proof contract passes (0 errors/warnings); focused content-policy passes for the two completed local items (0 errors/warnings); focused `depcheck`, `citecheck`, `fwdcheck` and `extcheck` pass; batch-11 `manifest-deps` passes (30 items, 0 missing); batch-11 coverage passes with `--require-destination` (74 harvested results, 0 errors/warnings). Computed levels are 10 for the inserted prerequisite and 11 for Picard; all owned labels match. Run-wide `item-dependency-levels` still fails only on the out-of-pair `ex-extremal-length-of-rectangle-and-annulus` label (stored 4, computed 5).
- **Current `validate-plan` and Step-4 mismatches:** `validate-plan research/plan-spec.json --run frontier-43-complex-representation-15` exits 1 with 47 errors and 148 redundant-prerequisite warnings across the 30-page run. This pair contributes eight hard errors: seven undeclared page-prerequisite edges (the four A-page and three B-page supplier pages mapped in checkpoint 6) and the B-leaf edge `ex-periods-of-a-complex-torus` → `ex-complex-torus-holomorphic-atlas`. No plan edit was made; the owner must resolve these in Step 4. These are current manifest findings, beyond the earlier page-only pre-splice check.
- **Next action:** Continue in recomputed order with `lem-holomorphic-differentials-form-a-g-dimensional-space` (level 14, A). Read its exact direct suppliers before surveying later items.

### 8. `lem-holomorphic-differentials-form-a-g-dimensional-space`

- **Claim and conventions:** Preserves the four promised claims: $\dim\Omega(X)=g$ (equivalently $\ell(K)=g$), every nonzero holomorphic differential has an effective zero divisor of degree $2g-2$, its zeros are isolated and finite, and it is closed. For any supplied nonzero meromorphic differential $\eta$, $K=(\eta)$ is a canonical divisor; all such $K$ are linearly equivalent, so $\deg K$ is independent of $\eta$. The proof uses the intrinsic Riemann–Roch formula at $D=0$ and $D=K$; the local zero and $d\omega=0$ arguments are separate and choice-free.
- **Scaffold dependency repair:** Removed direct edges to `thm-serre-duality-compact-riemann-surfaces` and `thm-finiteness-cohomology-compact-riemann-surface`: the authored proof uses the direct Riemann–Roch statement, which already gives finite dimensions and the $D=0,K$ formulas; Serre duality and finiteness remain transitive prerequisites of that unfinished Riemann–Roch proof. Removed `thm-residue-theorem-compact-riemann-surface`; no residue calculation occurs in the proof. Retained the actual divisor, canonical-bundle, genus, local-zero and $d/\bar\partial$ suppliers. The computed dependency level remains 14.
- **Source verification and locator repair:** Re-read Forster's full §16.9 Riemann–Roch proof, printed pp. 129–130; §17.10, printed p. 138, which identifies $g=\dim H^0(X,\Omega)$; and §17.12, printed pp. 139–140, which proves $\deg K=2g-2$. The scaffold had mislabeled Riemann–Roch as §17.3; the PDF shows Riemann–Roch is §16.9 and §17.3 is a residue-pairing result. The item references now use the correct locators. McMullen's *Riemann Surfaces*, Ch. 6 Corollary 6.5 and Theorem 6.9, printed pp. 56–58, provides the independent bound $\dim\Omega\le g$ and a Riemann–Hurwitz proof of canonical degree. Ch. 15 Theorem 15.1 and its proof, printed pp. 127–128, show the period image is a full lattice of rank $2g$; comparing real dimensions gives $\dim\Omega=g$ (an inference from the source's lattice statement). Looijenga, Ch. 6 §2, printed pp. 54–56, was read for the local order and canonical-divisor conventions.
- **Unfinished direct suppliers and exact uses:** `thm-riemann-roch-compact-riemann-surfaces` has a stale/escalated current Step-3 decision; this item uses its formula at $D=0$ in step 2.1, at $D=K$ in step 3.1, and its nonzero-meromorphic-differential existence claim in step 1.1. Its own Serre-duality and cohomology-finiteness inputs remain open; the consumer has no separate direct use of those statements. `def-line-bundle-associated-to-a-divisor` is escalated pending the unfinished holomorphic-line-bundle definition; it supplies $\mathcal O(K)\cong K_X$, $\mathcal O(0)$ and the canonical dual twist in steps 1.1–3.1. `def-divisor-principal-and-canonical-divisor-riemann-surface` is currently repaired and verified here in steps 1.1, 3.1 and 4.1. The cross-batch input marks the two removed direct edges as removed and the actual unfinished edges open.
- **Scope and decision:** Refreshed the pair's sufficient scope receipt after the authored statement/dependency repair; no item IDs or page homes changed. Recorded this original scaffold ID as `escalate`, confidence 1, with all 11 current direct dependency IDs examined. No owner-held decision was overridden.
- **Checks actually run:** Explicit-path precheck passes; explicit-path rendering passes; strict contracts pass for the three locally completed owned files (3/3, 0 errors/warnings); focused content-policy passes for those three items (0 errors/warnings); focused `depcheck`, `citecheck`, `fwdcheck` and `extcheck` pass; batch-11 `manifest-deps` passes (30 items, 0 missing); coverage passes with `--require-destination` (80 harvested results, 0 errors/warnings). Current computed levels are 10 for the dbar lemma, 10 for the added meromorphic-section lemma, 11 for Picard, and 14 for this item; all four manifest labels match. The run-wide level check still fails only on out-of-pair `ex-extremal-length-of-rectangle-and-annulus` (stored 4, computed 5).
- **Next action:** Continue with `lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere` (level 14, A page), reading its exact suppliers before proceeding further.

### 13. `lem-period-pairing-is-well-defined-and-computed-by-integration`

- **Scaffold repair and claim:** The scaffold used a piecewise-smooth 2-chain comparison without a supplier that turns every continuous homology representative into a smooth one, and called $\gamma=\partial\beta$ a homology class when it is a chain. The statement now defines integration on continuous singular 1-chains using the local-primitive path integral, proves it vanishes on continuous singular boundaries, and states the comparison with $P$ on homology classes. This proves the promised representative/basis independence and piecewise-smooth contour identity without a smoothing assumption. The de Rham clause is stated over real classes for $\operatorname{Re}\omega$ and $\operatorname{Im}\omega$, so the coefficient field is explicit.
- **Proof and Choice:** Cover $X$ by coordinate disks carrying local primitives of $\omega$. The finite-chain subdivision supplier subdivides each continuous singular 2-simplex into pieces inside such disks; the three endpoint increments on each small triangle cancel, and the internal faces cancel under barycentric subdivision. Therefore the local path integral is a continuous singular cocycle. Its evaluation agrees with $P$ on the fixed symplectic basis, hence on all of $H_1$. On smooth paths it agrees with usual contour integration. The real and imaginary cocycles restrict to de Rham integration, so the real comparison and Kronecker pairing give clause 4. Full AC is used through the symplectic-basis interface and implies the $\mathrm{AC}_\omega$ required for the de Rham comparison; the local subdivision uses only finite choice.
- **Exact dependencies and level:** The synchronized direct inputs are `cor-complex-analytic-functions-have-local-primitives`, `cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology`, `cor-holomorphic-functions-are-real-analytic-and-smooth`, `def-axiom-of-choice`, `def-bigraded-complex-differential-forms`, `def-countable-choice`, `def-cover-small-singular-chain-subcomplex`, `def-de-rham-cohomology`, `def-de-rham-integration-cochain-map`, `def-kronecker-evaluation-pairing`, `def-meromorphic-differential-on-a-riemann-surface`, `def-period-pairing-and-period-lattice`, `def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface`, `def-riemann-surface-and-holomorphic-atlas`, `def-singular-chain-complex-and-singular-homology`, `def-singular-cochain-complex-with-coefficients`, `def-singular-cohomology-with-coefficients`, `def-smooth-manifold`, `def-smooth-singular-chain-and-cochain-complexes`, `lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision`, `lem-finite-choice`, `lem-holomorphic-differentials-form-a-g-dimensional-space`, `lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives`, `thm-barycentric-subdivision-is-a-chain-map`, `thm-choice-implies-dependent-implies-countable-choice`, `thm-complex-numbers-are-the-real-coordinate-plane`, and `thm-symplectic-homology-basis-compact-riemann-surface`. The item and manifest both have computed dependency level 16. Removed unused direct scaffold edges to `lem-cellular-homology-of-the-one-polygon-surface-model`, plane contour-integral/reversal suppliers, `thm-de-rham-integration-is-a-cochain-map`, and smooth Stokes; the continuous-chain argument and packaged comparison supply the actual interfaces.
- **Unfinished suppliers and exact uses:** `def-period-pairing-and-period-lattice` remains escalated and supplies the fixed-basis pairing in F1 and steps 3.1 and 4.1. Its current open obligation is the dimension-$g$ supplier; the stored escalation still mentions the symplectic-basis item, which is now repaired. `lem-holomorphic-differentials-form-a-g-dimensional-space` supplies closedness in F3 and step 5.1; its current decision requires the owner after changed inputs and its Riemann–Roch/divisor-line-bundle suppliers remain open. `def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface` is a fully authored authorized addition used in F2 and steps 1.1, 3.1 and 5.1; its local gates pass and engine certification is due after dispatch, with no self-review receipt. The item decision therefore remains `escalate`, confidence 1; only the owner resolves the unfinished original suppliers.
- **Source passages and qualification:** Forster, *Lectures on Riemann Surfaces*, Ch. 2 §20.4, printed pp. 161–162, was read in full for its 1-chain and integration convention. In that section Forster defines homology of cycles by equality of closed-form integrals, so it is corroboration of the classical convention, not a proof for the library's singular homology. Looijenga, *Riemann Surfaces*, Ch. 7 §1 Proposition–Definition 7.1, printed p. 59, and §2's path-difference formula, printed p. 60, were read in full. The introduction to Looijenga also states that his $H_1$ is defined as the abelianization of $\pi_1$ for that course; the item supplies the singular-chain cocycle argument directly. No mathematical uncertainty remains in the local proof conditional on the recorded in-run supplier statements.
- **Metadata concern:** Focused `fwdcheck` reports an inherited marker, with no hard error. The known path through `lem-holomorphic-differentials-form-a-g-dimensional-space` to `def-bigraded-complex-differential-forms` → `def-wirtinger-operators-in-several-complex-variables` → `rem-complex-euclidean-space-dictionary` → `def-p-norms-on-rn` → `rem-real-exponents-deferred` carries forward references to `def-real-power` and `thm-real-power-laws`. This item makes no real-power use; leave the inherited dependency metadata for upstream reconciliation.
- **Manifest, coverage, contract, and checks:** Updated the manifest claim and exact dependencies, and registered Looijenga Ch. 7 §2 and Forster §20.4 coverage mappings without changing sibling rows. The strict contract covers every fact and proof step, the complex/real Kronecker use, both real/imaginary de Rham clauses, and empty/zero/one/degenerate/endpoints/Choice dispositions. Explicit-path precheck and rendercheck pass; strict proof contract passes (1/1, 0 errors); focused content policy passes (1 item, 0 errors); focused `depcheck`, `citecheck`, `fwdcheck`, and `extcheck` pass (no hard errors, with the inherited marker above); `manifest-deps` passes (31 items, 0 errors); run-wide dependency levels pass (382 items, 30 pages, maximum level 27); coverage passes `--require-destination` (84 harvested results); source-fetch-check passes 8/8 sources.
- **Current scope and item decisions:** Refreshed the pair's review scope receipt to `sufficient` after the statement/dependency repair. Recorded this original scaffold item as `escalate`, confidence 1, with all 27 direct dependencies examined. No owner-held decision was overridden.
- **Next action:** Continue in dispatch order with `lem-cut-surface-and-boundary-jumps-of-primitives` at level 17; read its exact suppliers and source passage before surveying later items.

### 12. `lem-holomorphic-differentials-separate-generic-points`

- **Claim and statement repair:** Evaluation at $p$ is intrinsically a map $\Omega(X)\to(K_X)_p$, not a map to $\mathbb C$ without a local frame. The statement now uses the canonical-line fiber and the direct sum of fibers at a tuple; in local nonzero frames these recover the scalar maps and the rank/isomorphism property is frame-independent. The promised claims remain: every point evaluation is nonzero, a separating $g$-tuple exists, and any independent family extends to such a tuple. The claim $\ell(K-p)=g-1$ is for any canonical divisor $K$.
- **Proof and Choice:** Riemann–Roch at $K$ gives $\deg K=2g-2$ from $\ell(K)=g$ and $\ell(0)=1$. For each point, constants are exactly $L(p)$: a nonconstant member would give a proper degree-one map to the sphere, hence a biholomorphism and genus zero, contradicting $g\ge1$. Riemann–Roch at $K-p$ then gives $\ell(K-p)=g-1$, the kernel dimension of evaluation, so evaluation has rank one. For the extension claim, if the common kernel has positive dimension, choose a nonzero form in it and then a point outside its finite zero set; adding that evaluation reduces kernel dimension by one. This finite induction also explicitly treats $k=0$. Full AC is declared through the genus, Riemann–Roch, and differential-dimension suppliers; the induction makes only finitely many selections.
- **Exact dependencies and levels:** The synchronized direct dependencies are `def-axiom-of-choice`, `def-divisor-principal-and-canonical-divisor-riemann-surface`, `def-genus-and-euler-characteristic-compact-riemann-surface`, `def-holomorphic-and-meromorphic-map-of-riemann-surfaces`, `def-line-bundle-associated-to-a-divisor`, `def-meromorphic-differential-on-a-riemann-surface`, `def-riemann-surface-and-holomorphic-atlas`, `lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism`, `lem-holomorphic-differentials-form-a-g-dimensional-space`, `thm-proper-holomorphic-map-riemann-surfaces-has-degree`, and `thm-riemann-roch-compact-riemann-surfaces`. The item and manifest both have computed level 15. The redundant direct edge to `thm-serre-duality-compact-riemann-surfaces` was removed: this consumer invokes the packaged Riemann–Roch statement, while Serre duality remains a transitive proof input of that unfinished supplier.
- **Open suppliers and exact consuming steps:** The current in-run `lem-holomorphic-differentials-form-a-g-dimensional-space` supplies $\dim\Omega(X)=g$ and finite zero sets in fact F1 and steps 1.1, 1.3, and 2.1; it remains escalated on unfinished Riemann–Roch/divisor-line-bundle inputs. The batch-10 `thm-riemann-roch-compact-riemann-surfaces` is used in steps 1.1 and 2.1 (canonical degree and the $K-p$ formula); `def-line-bundle-associated-to-a-divisor` is used in F3 and steps 1.1 and 2.1; `def-divisor-principal-and-canonical-divisor-riemann-surface` supplies F4 and step 1.2. All three batch-10 rows remain `open`; the exact step uses are updated in the cross-batch input. `lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism` is a completed, repaired same-batch supplier used in step 1.2. The item therefore remains `escalate`, confidence 1; only the owner resolves these open suppliers.
- **Source passages read:** Forster, *Lectures on Riemann Surfaces*, §16.9, printed pp. 129–130, was reread for the complete Riemann–Roch proof; §17.10, printed pp. 138–139, for $\dim\Omega(X)=g$; and Ch. 2 Lemma 21.3 and proof, printed p. 168, for the finite-dimensional separating-points argument. Forster’s Lemma 21.3 uses the dimension and the pointwise-zero intersection but does not prove the base-point calculation; the local Riemann–Roch steps above supply it. McMullen, *Riemann Surfaces*, Ch. 15 proof of Theorem 15.8, printed p. 130, was reopened in full: its derivative matrix is the evaluation matrix and it concludes the determinant is nonzero for generic tuples. The preceding Theorem 15.7 proof invokes base-point-freeness without establishing it in that passage, so this is corroboration rather than the item's proof. No mathematical uncertainty remains in the local argument conditional on its explicitly open suppliers.
- **Metadata concern:** Focused `fwdcheck` passes with the item marked `inherited`. The path is through `lem-holomorphic-differentials-form-a-g-dimensional-space` → `def-bigraded-complex-differential-forms` → `def-wirtinger-operators-in-several-complex-variables` → `rem-complex-euclidean-space-dictionary` → `def-p-norms-on-rn` → `rem-real-exponents-deferred`, which has forward references to `def-real-power` and `thm-real-power-laws`. This item’s actual proof does not use real powers; leave the inherited published metadata path for upstream reconciliation.
- **Manifest, coverage, contract, and checks:** Updated the item and batch-11 manifest statement, dependency list, strategy, and level; removed the unused direct Serre edge in the cross-batch file; preserved the existing Forster and McMullen coverage destinations. The strict contract includes every fact and step, exact supplier statement excerpts, both iff directions, and empty/zero/one/degenerate/endpoints/Choice dispositions. The Harvard PDF was fetch-stamped after full-text reading; source-fetch-check now passes 8/8 and batch-11 coverage passes `--require-destination` with 82 harvested results. Explicit-path precheck and rendercheck pass; strict proof contract passes (1/1, 0 errors); focused content policy passes (1 item, 0 errors); focused `depcheck`, `citecheck`, `fwdcheck`, and `extcheck` pass (no hard errors; `fwdcheck` reports the inherited marker above); batch-11 `manifest-deps` passes (31 items, 0 errors); run-wide `item-dependency-levels` passes (382 items, 30 pages, maximum level 27). The batched proof-layout and final `validate-plan` remain pending until handoff.
- **Current scope and item decisions:** Refreshed the pair's review scope receipt to `sufficient` after the statement repair. Recorded this original scaffold item as `escalate`, confidence 1, with all 11 direct dependencies examined and the concrete supplier uses above. No owner-held decision was overridden.
- **Next action:** Continue in dispatch order with `lem-period-pairing-is-well-defined-and-computed-by-integration` at level 16; read its exact suppliers before surveying later items.

### 9. `lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere`

- **Claim and conventions:** For compact connected $X$ and nonconstant holomorphic $F:X\to\widehat{\mathbb C}$, properness gives degree $n$ and a finite branch-value set $R$. The inverse-branch sum defines a holomorphic trace on $\widehat{\mathbb C}\setminus R$, the local power-map/root-of-unity computation extends it uniquely across $R$, and the choice-free Liouville argument proves it vanishes. The integral statement is phrased for a transfer chain summing all $n$ path lifts with multiplicity; this repairs the scaffold's false claim that the set preimage of every curve is a disjoint union of embedded curves (closed paths can have monodromy). For regular endpoints $b,a$, the transfer-chain boundary is $F^*(a)-F^*(b)$. The meromorphic function giving that divisor is defined by cases, so endpoints at infinity and $a=b$ are covered. The conclusion and main proof are choice-free; a supplementary Riemann–Roch cross-check at step 4.1 uses full AC.
- **Exact suppliers and dependency level:** The 30 direct dependencies are `cor-complex-differentiability-implies-continuity`, `def-axiom-of-choice`, `def-compact-space`, `def-genus-and-euler-characteristic-compact-riemann-surface`, `def-holomorphic-and-meromorphic-map-of-riemann-surfaces`, `def-integral-of-a-form-over-a-smooth-singular-simplex`, `def-isolated-singularity-types`, `def-line-bundle-associated-to-a-divisor`, `def-meromorphic-differential-on-a-riemann-surface`, `def-ramification-index-and-branch-value`, `def-riemann-sphere-holomorphic-charts`, `def-riemann-surface-and-holomorphic-atlas`, `def-smooth-differential-k-form`, `def-smooth-singular-chain-and-cochain-complexes`, `def-smooth-singular-simplex`, `prop-pullback-of-forms-is-smooth-functorial-and-preserves-wedges`, `rem-riemann-sphere-one-point-compactification`, `thm-closed-subspace-of-a-compact-space-is-compact`, `thm-compact-subset-is-closed-and-bounded`, `thm-compact-subset-of-a-hausdorff-space-is-closed`, `thm-compactness-under-continuous-maps`, `thm-heine-borel-rn`, `thm-identity-theorem-holomorphic-functions`, `thm-liouville-bounded-entire-function`, `thm-local-normal-form-holomorphic-map-riemann-surfaces`, `thm-path-lifting-for-covering-maps`, `thm-proper-holomorphic-map-riemann-surfaces-has-degree`, `thm-riemann-roch-compact-riemann-surfaces`, `thm-taylor-expansion-holomorphic-function`, and `thm-zero-order-factorization-holomorphic-function`. The item and batch-11 manifest both have computed dependency level 14.
- **Unfinished cross-batch suppliers and exact uses:** `thm-riemann-roch-compact-riemann-surfaces` (batch 10) is still a draft and is used only by the supplementary $D=0$ check in step 4.1, via Fact F12. `def-line-bundle-associated-to-a-divisor` (batch 10) is also a draft and supplies $\mathcal O_X(0)$ triviality and the canonical-section/differential identification in step 4.1, via Fact F13. Both rows remain `open` in the batch-11 cross-batch input; the item decision must stay escalated until their proofs and these uses are reconciled. The scaffold's direct `thm-serre-duality-compact-riemann-surfaces` edge is removed because no separate Serre-duality statement is used; its direct divisor-definition edge is removed because the item defines local order/divisor notation and proves the composition divisor directly in step 5.1. The run-wide aggregate remains for the serial reconciler.
- **Source passages and provenance:** Forster, *Lectures on Riemann Surfaces*, Ch. 2 proof of Theorem 20.7(b), printed p. 164, was read in full for the trace extension and vanishing method. McMullen, *Riemann Surfaces*, Ch. 15 “Proof in one direction” of Abel's theorem, printed p. 129, was read in full for the trace integral on the preimage chain and local root cancellation. These corroborate the method; the item supplies the local extension, overlap, uniqueness, path-lifting, endpoint, and infinity cases explicitly. No new published-content concern was found; the corrected monodromy and finite-endpoint issues were in the assigned scaffold.
- **Choice:** AC is declared as an auxiliary use at step 4.1 only, through the genus/Riemann–Roch interfaces and `def-axiom-of-choice`. The trace construction, Liouville vanishing, transfer-chain integral, and divisor-boundary proof do not use AC; the theorem's conclusion is not AC-dependent.
- **Manifest, coverage, and contract:** Synchronized the current statement and all 30 dependencies in the batch-11 manifest at level 14. Updated the batch-11 cross-batch rows to keep the two actual suppliers open and mark the unused direct Serre/divisor edges removed. Added a contract for every numbered step with generated exact statement excerpts and mappings, plus empty/zero/one/degenerate/endpoints/Choice/iff dispositions and both external source records. Batch coverage was preserved and still reports 80 harvested results.
- **Checks actually run:** Explicit-path precheck passes after applying its canonical dependency-layer renumbering; explicit-path `rendercheck` passes with zero errors/warnings; focused strict contract passes (1/1, 0 errors/warnings); focused `depcheck`, `citecheck`, `fwdcheck`, and `extcheck` pass (0 errors/warnings); focused content policy passes for this item (1 item, 0 errors/warnings); batch-11 `manifest-deps` passes (30 items, 0 missing); batch-11 coverage passes (80 harvested results, 0 errors/warnings). `item-dependency-levels` confirms this item at 14 and exits nonzero only on five out-of-pair quasiconformal items: `ex-extremal-length-of-rectangle-and-annulus` (4→5), `ex-affine-quasiconformal-ellipse-map` (9→6), `ex-radial-stretch-quasiconformal-map` (10→6), `ex-quasiconformal-composition-dilatation-bound` (11→10), and `cex-orientation-reversing-homeomorphism-is-quasiconformal` (10→3). The full batch content-policy check is not yet clean because 20 later assigned item files are not authored; it passed on the focused trace scope. The final batched proof-layout and `validate-plan` checks remain pending.
- **Current decision:** Recorded the original scaffold item as `escalate`, confidence 1, with all 30 direct dependency IDs examined. The main trace proof is complete, but step 4.1 uses the two unfinished suppliers named above.
- **Next action:** The period-pairing definition is now complete at level 15 (checkpoint 11). Continue with `lem-holomorphic-differentials-separate-generic-points` at level 15; read its exact suppliers before surveying later assigned items.

### 8. `lem-holomorphic-differentials-form-a-g-dimensional-space`

- **Claim and conventions:** Preserves the four promised claims: $\dim\Omega(X)=g$ (equivalently $\ell(K)=g$), every nonzero holomorphic differential has an effective zero divisor of degree $2g-2$, its zeros are isolated and finite, and it is closed. For any supplied nonzero meromorphic differential $\eta$, $K=(\eta)$ is a canonical divisor; all such $K$ are linearly equivalent, so $\deg K$ is independent of $\eta$. The proof uses the intrinsic Riemann–Roch formula at $D=0$ and $D=K$; the local zero and $d\omega=0$ arguments are separate and choice-free.
- **Scaffold dependency repair:** Removed direct edges to `thm-serre-duality-compact-riemann-surfaces` and `thm-finiteness-cohomology-compact-riemann-surface`: the authored proof uses the direct Riemann–Roch statement, which already gives finite dimensions and the $D=0,K$ formulas; Serre duality and finiteness remain transitive prerequisites of that unfinished Riemann–Roch proof. Removed `thm-residue-theorem-compact-riemann-surface`; no residue calculation occurs in the proof. Retained the actual divisor, canonical-bundle, genus, local-zero and $d/\bar\partial$ suppliers. The computed dependency level remains 14.
- **Source verification and locator repair:** Re-read Forster's full §16.9 Riemann–Roch proof, printed pp. 129–130; §17.10, printed p. 138, which identifies $g=\dim H^0(X,\Omega)$; and §17.12, printed pp. 139–140, which proves $\deg K=2g-2$. The scaffold had mislabeled Riemann–Roch as §17.3; the PDF shows Riemann–Roch is §16.9 and §17.3 is a residue-pairing result. The item references now use the correct locators. McMullen's *Riemann Surfaces*, Ch. 6 Corollary 6.5 and Theorem 6.9, printed pp. 56–58, provides the independent bound $\dim\Omega\le g$ and a Riemann–Hurwitz proof of canonical degree. Ch. 15 Theorem 15.1 and its proof, printed pp. 127–128, show the period image is a full lattice of rank $2g$; comparing real dimensions gives $\dim\Omega=g$ (an inference from the source's lattice statement). Looijenga, Ch. 6 §2, printed pp. 54–56, was read for the local order and canonical-divisor conventions.
- **Unfinished direct suppliers and exact uses:** `thm-riemann-roch-compact-riemann-surfaces` has a stale/escalated current Step-3 decision; this item uses its formula at $D=0$ in step 2.1, at $D=K$ in step 3.1, and its nonzero-meromorphic-differential existence claim in step 1.1. Its own Serre-duality and cohomology-finiteness inputs remain open; the consumer has no separate direct use of those statements. `def-line-bundle-associated-to-a-divisor` is escalated pending the unfinished holomorphic-line-bundle definition; it supplies $\mathcal O(K)\cong K_X$, $\mathcal O(0)$ and the canonical dual twist in steps 1.1–3.1. `def-divisor-principal-and-canonical-divisor-riemann-surface` is currently repaired and verified here in steps 1.1, 3.1 and 4.1. The cross-batch input marks the two removed direct edges as removed and the actual unfinished edges open.
- **Scope and decision:** Refreshed the pair's sufficient scope receipt after the authored statement/dependency repair; no item IDs or page homes changed. Recorded this original scaffold ID as `escalate`, confidence 1, with all 11 current direct dependency IDs examined. No owner-held decision was overridden.
- **Checks actually run:** Explicit-path precheck passes; explicit-path rendering passes; strict contracts pass for the three locally completed owned files (3/3, 0 errors/warnings); focused content-policy passes for those three items (0 errors/warnings); focused `depcheck`, `citecheck`, `fwdcheck` and `extcheck` pass; batch-11 `manifest-deps` passes (30 items, 0 missing); coverage passes with `--require-destination` (80 harvested results, 0 errors/warnings). Current computed levels are 10 for the dbar lemma, 10 for the added meromorphic-section lemma, 11 for Picard, and 14 for this item; all four manifest labels match. The run-wide level check still fails only on out-of-pair `ex-extremal-length-of-rectangle-and-annulus` (stored 4, computed 5).
- **Next action:** Continue with `lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere` (level 14, A page), reading its exact suppliers before proceeding further.


### 14. lem-cut-surface-and-boundary-jumps-of-primitives

- **Claim and conventions:** The cut complement is the open interior of the one-polygon disk. I denote the pre-identification closed disk by $\widehat F$; it is a cut-open completion, not the closure of $F$ in $X$. For any closed smooth complex $1$-form, a path integral defined by local primitive increments gives a path-independent smooth primitive on $F$ and separate continuous traces on the polygon sides. The side labels $+$ and $-$ mean, respectively, the positive-exponent and inverse-exponent occurrences in $a_i b_i a_i^{-1}b_i^{-1}$, and both side copies are parameterized in the cycle orientation. The corrected jumps are $f|_{a_i^-}-f|_{a_i^+}=P(b_i,\alpha)$ and $f|_{b_i^-}-f|_{b_i^+}=-P(a_i,\alpha)$ when $\alpha$ is holomorphic. For general closed smooth $\alpha$, the right sides are the corresponding local-primitive integrals; $P$ is not applied outside its holomorphic-differential domain.
- **Confirmed scaffold defects and witness:** The original closure-in-$X$ claim was false as phrased: $X\setminus C$ is the open polygon interior, but its closure in $X$ is $X$. The scaffold also assumed piecewise-smooth side loops and a piecewise-smooth cut region without a supplier, applied the holomorphic-only $P$ to an arbitrary closed smooth form, and used Stokes on the cut closure. The proof now works with the topological polygon and local primitives on continuous paths, so it needs no smoothing or Stokes edge. The original positive sign on the $b$ jump is false under its occurrence-order labels. Witness: on $X=\mathbb C/(\mathbb Z+i\mathbb Z)$ take $a(t)=t$, $b(t)=it$, $\alpha=dz$, and the cut square. The positive $b^+$ occurrence is the right edge, where $f=z$ has value $1+it$; the inverse $b^-$ occurrence is the left edge, where $f=it$. Thus $f|_{b^-}-f|_{b^+}=-1$, while $P(a,dz)=1$.
- **Proof and Choice:** Local exactness defines $\mathcal I_\alpha$ along continuous paths by finitely many local primitive endpoint differences. A fixed-endpoint homotopy is subdivided into a finite grid of small triangles lying in primitive neighborhoods; each boundary increment telescopes, internal edges cancel, and the fixed vertical edges contribute zero. The disk filling proves path independence in $F$ and in $\widehat F$. The two jump signs follow by following the corresponding boundary arcs and canceling the paired-side tails. Full AC is declared and used only to select the polygonal symplectic side-loop data; finite subdivision selections use finite choice.
- **Exact dependencies and level:** The 17 direct dependencies, synchronized in the item and batch-11 manifest at dependency level 17, are cor-closed-differential-forms-are-locally-exact, cor-complex-analytic-functions-have-local-primitives, def-axiom-of-choice, def-bigraded-complex-differential-forms, def-meromorphic-differential-on-a-riemann-surface, def-period-pairing-and-period-lattice, def-polygonal-schema-and-edge-pairing, def-quotient-topology, def-simply-connected, def-smooth-differential-k-form, lem-cellular-homology-of-the-one-polygon-surface-model, lem-finite-choice, lem-period-pairing-is-well-defined-and-computed-by-integration, thm-complex-numbers-are-the-real-coordinate-plane, thm-heine-borel-rn, thm-lebesgue-number-lemma, and thm-symplectic-homology-basis-compact-riemann-surface. There is no cross-batch item dependency for this lemma.
- **Unfinished suppliers and exact consuming use:** def-period-pairing-and-period-lattice supplies the $P$ interface in F6 and the holomorphic specialization in the statement and step 3.1. lem-period-pairing-is-well-defined-and-computed-by-integration supplies the equality of the fixed-basis period with the local-primitive integral, used in F6 and step 3.1. Both current receipts have changed inputs and require the owner; the period definition itself remains escalated on its dimension-$g$ supplier. I inspected their current statements and these actual uses; I do not mark the consumer complete while those supplier decisions remain open. The symplectic-basis and cellular-homology suppliers are current repaired decisions.
- **Sources read in full:** McMullen, Riemann Surfaces, Ch. 15, proof of Theorem 15.13, printed pp. 134–135, was reopened through the boundary computation. It writes $\partial F=\sum_i(a_i+b_i'-a_i'-b_i)$ and $f|_{a_i'}-f|_{a_i}=\alpha(b_i)$, $f|_{b_i'}-f|_{b_i}=\alpha(a_i)$. Under the item’s occurrence labels, its primed $b$ copy is the positive occurrence, so its formula agrees with the corrected negative $b^- - b^+$ jump. Looijenga, Riemann Surfaces, Ch. 7 §2, printed pp. 61–62, was reopened through the simply connected complement, separate side copies, and jump calculation. These sources use their own side-lift conventions; the item proves the local topological version directly and does not rely on their Stokes argument. No unresolved source uncertainty remains.
- **Metadata concern:** Focused fwdcheck passes with no hard errors and marks this item inherited. The paths include def-bigraded-complex-differential-forms → def-wirtinger-operators-in-several-complex-variables → rem-complex-euclidean-space-dictionary → def-p-norms-on-rn → rem-real-exponents-deferred (forward targets def-real-power and thm-real-power-laws), and thm-heine-borel-rn → def-metric-bounded-diameter → rem-sup-conventions (forward target def-extended-reals). The marker is confirmed; whether each published transitive forward link is load-bearing for these supplier claims remains unverified. This proof uses the complex-form, compact-square, and Lebesgue-number interfaces and makes no direct real-power or extended-real inference. Upstream review should check those dependency declarations and either remove an overdependency or classify the forward links as orientation-only. I did not edit published content or the shared ledger.
- **Manifest, coverage, and contract:** Registered the authored original scaffold file under its existing A-page ID, synchronized the statement, strategy, 17 direct dependencies, and level, and added a McMullen Theorem 15.13 coverage row for the cut geometry and jumps while preserving the wedge-formula row and all sibling rows. The strict contract covers all eight facts, every proof step’s claim and inputs, exact supplier excerpts and uses, the square-torus sign witness, and all standard boundary, Choice, and iff dispositions.
- **Checks actually run:** Explicit-path precheck passes; explicit-path rendercheck passes; strict proof contract passes (1/1, 0 errors/warnings); selected content-policy passes (1 item, 0 errors/warnings); focused depcheck, citecheck, fwdcheck, and extcheck pass with 0 hard errors (the inherited forward marker above is reported); batch-11 manifest-deps passes (31 items, 0 missing); run-wide item-dependency-levels check passes (383 items, 30 pages, maximum level 27); batch-11 coverage passes with --require-destination (85 harvested results, 0 errors/warnings); source-fetch-check passes 8/8 sources. The selected-page validate-plan check passes page order and still reports the 14 existing redundant-prerequisite warnings; its page manifests do not contain plan-spec item lists. The latest run-wide validate-plan --run exits 1 with 39 hard errors and 157 redundant-prerequisite warnings across the run. Eight hard errors concern this pair: four A-page undeclared supplier-page edges to `intersection-pairings-self-intersection-and-euler-classes`, `poisson-summation-sampling-and-lattice-duality`, `elliptic-functions-and-complex-tori`, and `the-gauss-bonnet-theorem-for-riemannian-surfaces`; three B-page undeclared supplier-page edges to `elliptic-functions-and-complex-tori`, `riemann-surfaces-branched-maps-and-differentials-examples`, and `poisson-summation-sampling-and-lattice-duality`; and the B-leaf dependency `ex-periods-of-a-complex-torus` → `ex-complex-torus-holomorphic-atlas`. The cut lemma and the wedge-period theorem no longer contribute undeclared Stokes edges; the remaining A-page Stokes edge is `lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity`. These Step-4 plan mismatches remain open for the owner; no plan edit was made.
- **Current scope and item decision:** Refreshed the pair scope receipt to sufficient after rechecking the A/B scope, design, Step 3a findings, and current manifests. Recorded this original scaffold item as escalate, confidence 1, with all 17 direct dependencies examined. The report and the receipt leave the two period suppliers open for owner resolution.
- **Next action:** Continue in exact dispatch order with thm-symplectic-period-formula-for-wedge-integrals at level 18; inspect its current exact suppliers before writing it.

### 15. `thm-symplectic-period-formula-for-wedge-integrals`

- **Claim and corrected conventions:** For every pair of closed smooth complex $1$-forms, the integral of their wedge is the alternating sum of their fixed symplectic-basis periods. I use $\Pi_\alpha$ for local-primitive path integrals of arbitrary closed smooth forms; the library's $P$ is retained only for holomorphic differentials, where the period lemma identifies $\Pi=P$. The complex de Rham space is explicitly the complexification of real de Rham cohomology, and the comparison maps $\mathcal J_X^k$ are defined in every degree. The three scaffold claims remain: the wedge-period formula, descent/nondegeneracy with the Poincaré-dual cup pairing, and isotropy of holomorphic forms.
- **Scaffold defects and proof route:** The scaffold applied holomorphic-only $P$ to arbitrary closed smooth forms, while the published de Rham definition is real-valued. It also invoked Stokes on the cut-open polygon despite the side-loop supplier guaranteeing only continuous representatives. The authored proof instead constructs a continuous local-primitive singular cocycle, identifies its side-loop evaluations with de Rham comparison coordinates, proves top-degree evaluation on $[X]$ by oriented local rectangle chains and chart integration, then uses wedge/cup compatibility and the evaluation-dual symplectic cup matrix. The flat torus $\mathbb C/(\mathbb Z+i\mathbb Z)$ with $\alpha=dx$, $\beta=dy$ gives both sides equal to $1$ for $g=1$, confirming the sign.
- **Choice:** Full AC is used to select the symplectic basis (F1), and through dependent/countable choice for the de Rham comparison and finite chart partition (F4/F7). The local path cocycle uses only finite subdivisions and finite local choices (F3). The algebraic wedge/cup and exact-form arguments make no additional choice.
- **Exact dependencies and level:** The item and batch-11 manifest have 38 identical direct dependencies and computed level 18: `cor-closed-differential-forms-are-locally-exact`, `cor-de-rham-vector-space-comparison-with-continuous-singular-cohomology`, `cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero`, `cor-poincare-duality-gives-a-nonsingular-cup-pairing`, `def-axiom-of-choice`, `def-bigraded-complex-differential-forms`, `def-countable-choice`, `def-de-rham-cohomology`, `def-de-rham-integration-cochain-map`, `def-fundamental-class-of-a-compact-oriented-manifold`, `def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold`, `def-integral-of-a-form-over-a-smooth-singular-simplex`, `def-kronecker-evaluation-pairing`, `def-meromorphic-differential-on-a-riemann-surface`, `def-period-pairing-and-period-lattice`, `def-singular-chain-complex-and-singular-homology`, `def-singular-cochain-complex-with-coefficients`, `def-singular-cohomology-with-coefficients`, `def-singular-cup-product-on-cochains`, `def-smooth-differential-k-form`, `def-smooth-singular-chain-and-cochain-complexes`, `def-smooth-singular-simplex`, `def-wedge-product-of-differential-forms`, `lem-cut-surface-and-boundary-jumps-of-primitives`, `lem-de-rham-integration-respects-wedge-and-cup-in-cohomology`, `lem-every-finite-singular-chain-becomes-cover-small-after-enough-subdivision`, `lem-finite-choice`, `lem-period-pairing-is-well-defined-and-computed-by-integration`, `lem-the-kronecker-pairing-is-independent-of-cocycle-and-cycle-representatives`, `prop-integration-of-top-forms-by-finite-parametrizations`, `thm-barycentric-subdivision-is-a-chain-map`, `thm-choice-implies-dependent-implies-countable-choice`, `thm-de-rham-integration-is-a-cochain-map`, `thm-excision-for-singular-homology`, `thm-smooth-partitions-of-unity-exist-on-manifolds`, `thm-smooth-singular-chains-compute-singular-homology`, `thm-symplectic-homology-basis-compact-riemann-surface`, and `thm-topological-universal-coefficient-short-exact-sequence-for-cohomology`. No new item or cross-batch row was added.
- **Open suppliers and exact uses:** `lem-cut-surface-and-boundary-jumps-of-primitives` supplies the local-primitive $\Pi$ interface used in the statement and steps 1.1–1.2; its current Step-3 receipt remains `escalate` pending period-supplier reconciliation. `def-period-pairing-and-period-lattice` supplies the $P$ interface in the holomorphic clause and step 3.1/F10; its receipt remains `escalate` on `lem-holomorphic-differentials-form-a-g-dimensional-space`. `lem-period-pairing-is-well-defined-and-computed-by-integration` supplies $P=\Pi$ in step 3.1/F10 and remains escalated on the period definition and dimension supplier. These exact obligations are also stated after the final proof in the item. The theorem decision must remain escalated until the owner resolves the suppliers and their actual uses are reconciled.
- **Sources read in full:** McMullen, *Riemann Surfaces*, Ch. 15, Theorem 15.13 and its proof, printed pp. 134–135, was reopened through the complete boundary calculation. Its period formula confirms the sign; its cut-region Stokes argument is not used. Looijenga, *Riemann Surfaces*, Ch. 3 §3, Proposition 3.19 and Corollary 3.20, printed pp. 34–35, was read through the dual-basis calculation and nondegeneracy argument. These are corroboration for the cohomological proof route. No unresolved source uncertainty or new published-content concern was found.
- **Manifest, coverage, contract, and checks:** Updated the theorem statement, strategy, dependencies, and level in the batch-11 manifest; updated the existing McMullen/Looijenga coverage mappings without changing sibling rows; added the theorem's contract with exact supplier excerpts, derivations for every step, external excerpts, and all standard boundary/Choice/iff dispositions. Explicit-path precheck passes; explicit-path rendercheck passes; scoped content policy passes (1 item, 0 errors/warnings); focused depcheck passes (0 errors/warnings); focused citecheck passes (1 item, 0 warnings); focused fwdcheck and extcheck pass with no hard errors, while fwdcheck reports one inherited forward marker through the cut lemma's dependencies; strict proof contracts pass (16/16, 0 errors/warnings); batch-11 manifest-deps passes (31 items, 0 missing); the run-wide dependency-level check passes (383 items, 30 pages, maximum level 27); coverage passes `--require-destination` (85 harvested results); source-fetch-check passes (8/8 sources). The selected-page validate-plan check confirms page order and reports 14 existing redundant-prerequisite warnings; its plan-spec item lists are empty. The latest run-wide validate-plan exits 1 with 39 hard errors and 157 redundant-prerequisite warnings. This pair contributes eight hard errors: four A-page undeclared suppliers (`intersection-pairings-self-intersection-and-euler-classes`, `poisson-summation-sampling-and-lattice-duality`, `elliptic-functions-and-complex-tori`, `the-gauss-bonnet-theorem-for-riemannian-surfaces`), three B-page undeclared suppliers (`elliptic-functions-and-complex-tori`, `riemann-surfaces-branched-maps-and-differentials-examples`, `poisson-summation-sampling-and-lattice-duality`), and the B-leaf edge `ex-periods-of-a-complex-torus` → `ex-complex-torus-holomorphic-atlas`. The theorem's former direct Stokes edges are removed; the remaining A-page Stokes mismatch is `lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity`. These plan discrepancies remain for Step 4; no shared plan or published content was edited. Final batched proof-layout is deferred until all owned items are complete.
- **Scope and item decision:** Refreshed the pair scope receipt to `sufficient` after rechecking the current pair and design. Recorded this original scaffold item as `escalate`, confidence 1, with all 38 current direct dependencies examined. The unresolved suppliers above remain owner-held.
- **Next action:** Continue in dependency order with `thm-riemann-bilinear-relations` at computed level 19; reread its exact suppliers and sources before authoring it.

### 16. `thm-riemann-bilinear-relations`

- **Claim and conventions:** For a compact connected genus-$g$ Riemann surface under full AC, use the selected one-polygon symplectic basis and its continuous side-loop representatives. The map from holomorphic differentials to their $a$-period coordinates is an isomorphism; the unique normalized basis defines $\Pi_{ij}=P(b_i,\omega_j)$. The first bilinear relation is the equivalence between $\Pi=\Pi^{\mathsf T}$ and vanishing of the symplectic pairing on all holomorphic pairs. The second is the equivalence between positive definiteness of $Y=\operatorname{Im}\Pi$ and strict positivity of $iS(\omega,\bar\omega)=i\int_X\omega\wedge\bar\omega$ for every nonzero holomorphic form. The period homomorphism $e(\gamma)(\omega)=P(\gamma,\omega)$ is injective, its image has coordinates $\mathbb Z^g+\Pi\mathbb Z^g$, and it is a full rank-$2g$ lattice with compact quotient.
- **Matrix convention and scaffold repair:** The scaffold's normalization argument was circular: it invoked the second relation before the normalized basis existed. The proof now first shows that zero $a$-periods force $S(\omega,\bar\omega)=0$, then applies the wedge-period formula and the positive local density $i\omega\wedge\bar\omega=2|f|^2dx\wedge dy$ to conclude $\omega=0$; dimension $g$ and finite-dimensional linear algebra give the isomorphism. With the item convention $\Pi_{ij}=P(b_i,\omega_j)$, a cycle $\sum_i(m_i a_i+n_i b_i)$ has coordinate vector $m+\Pi^{\mathsf T}n$. Symmetry gives the stated $m+\Pi n$ and keeps row/column use explicit. The $g=0$ case is handled separately with empty matrices, the zero homology and holomorphic-form spaces, and the item's explicit rank-zero lattice convention. Two unused scaffold edges to the Hodge metric/star machinery and the de Rham theorem were removed; strict positivity is proved from the oriented top-form integral interface.
- **Choice:** Full AC is explicit, inherited through selection of the symplectic basis and through the holomorphic-dimension and wedge-period suppliers. The matrix, positivity, and lattice calculations use only finite-dimensional algebra after those interfaces are supplied. No extra arbitrary selection is made.
- **Direct dependencies and level:** The item and batch-11 manifest now agree at dependency level 19 with 16 direct dependencies: `def-axiom-of-choice`, `def-bigraded-complex-differential-forms`, `def-dimension`, `def-full-rank-lattice-covolume-and-dual-lattice`, `def-linear-map`, `def-meromorphic-differential-on-a-riemann-surface`, `def-period-pairing-and-period-lattice`, `def-vector-space`, `lem-cut-surface-and-boundary-jumps-of-primitives`, `lem-holomorphic-differentials-form-a-g-dimensional-space`, `lem-period-pairing-is-well-defined-and-computed-by-integration`, `prop-positive-compactly-supported-top-forms-have-positive-integral`, `thm-complex-numbers-are-the-real-coordinate-plane`, `thm-invertible-matrix-theorem`, `thm-symplectic-homology-basis-compact-riemann-surface`, and `thm-symplectic-period-formula-for-wedge-integrals`. The two batch-9 cross-batch rows for `def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface` and `thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology` were removed from the pair input because this proof no longer uses them; sibling rows were preserved.
- **Open suppliers and exact uses:** Keep this item `escalate`, confidence 1. `lem-holomorphic-differentials-form-a-g-dimensional-space` supplies $\dim_{\mathbb C}\Omega(X)=g$ in steps 1.1 and 3.1; its current receipt remains escalated on Riemann–Roch and the divisor-line-bundle supplier. `def-period-pairing-and-period-lattice` supplies $P$ and $e$ in the statement and steps 1.1, 2.1, 4.1, and 6.1; it remains escalated on that dimension lemma. `lem-period-pairing-is-well-defined-and-computed-by-integration` identifies $P$ with local-primitive path periods in steps 2.1, 4.1, and 6.1 and remains escalated on the period definition and dimension supplier. `lem-cut-surface-and-boundary-jumps-of-primitives` supplies $\Pi$ and the conjugation rule in steps 2.1 and 5.1. `thm-symplectic-period-formula-for-wedge-integrals` supplies the wedge-period equality in steps 2.1, 4.1, and 5.1. These supplier IDs, consumer ID, steps and uses are recorded in `research/frontier-43-complex-representation-15-step3b-review-thm-riemann-bilinear-relations.json`; only the owner can resolve the open decisions.
- **Sources read in full:** McMullen, *Riemann Surfaces*, Theorem 15.13 proof, printed pp. 134–135, and Theorems 15.18–15.19 with their proofs, printed pp. 140–141; the latter use the transposed period-matrix index convention, and the resulting matrix agrees after symmetry. Looijenga, *Riemann Surfaces*, Proposition-Definition 7.1 and proof, printed pp. 59–60, through its conjugation/Hodge-splitting real-independence argument; the fetched PDF contains an unresolved internal “Theorem ??” cross-reference in that proof. The item records Looijenga's proof only as an alternative and does not use the missing reference. Forster, *Lectures on Riemann Surfaces*, Theorem 21.4 and proof (a)–(c), printed pp. 168–170, was read in full; the fetched PDF matches the existing source stamp (19,052,171 bytes, SHA-256 prefix `a7734adc75598d2b`). Its alternative route uses a local Jacobi map, Abel's theorem and residues. No source uncertainty affects the local proof.
- **Manifest, coverage, contract, and checks:** Synchronized the statement, strategy, 16 dependencies and level 19 in the batch-11 manifest; updated only this item's Looijenga/McMullen/Forster coverage mappings and added explicit McMullen Theorem 15.18/15.19 coverage rows. The McMullen Hodge-characterization row is now out of scope because this item neither asserts nor uses that criterion. Added the strict contract with 16 exact supplier excerpts, six step derivations, three external excerpts, and dispositions for empty, zero, one, degenerate, endpoints, nonempty-choice and both iff directions. Explicit-path precheck and rendercheck pass; selected content-policy passes (1 item, 0 errors/warnings); strict proof contract passes (1/1, 0 errors/warnings); focused depcheck passes; citecheck passes (1 item, 0 warnings); fwdcheck passes with one inherited marker through the cut-period suppliers; extcheck passes (1 item, 0 errors); batch-11 manifest-deps passes (31 items, 0 errors); run-wide item-dependency-level check passes (383 items, maximum 27); coverage passes with `--require-destination` (87 results, 0 errors/warnings); source-fetch-check passes (8/8). Final batched proof-layout remains deferred until all owned item edits are complete.
- **Plan validation and scope receipt:** The selected A/B page validation against `research/plan-spec.json` passes reading order and prerequisites with the 14 pre-existing redundant-prerequisite warnings; both plan-spec item lists are empty, so this remains page-only. The latest run-wide validation exits 1 with 33 errors and 157 redundant-prerequisite warnings. Eight errors concern this pair: A-page undeclared supplier pages `intersection-pairings-self-intersection-and-euler-classes`, `poisson-summation-sampling-and-lattice-duality`, `elliptic-functions-and-complex-tori`, and `the-gauss-bonnet-theorem-for-riemannian-surfaces`; B-page undeclared supplier pages `elliptic-functions-and-complex-tori`, `riemann-surfaces-branched-maps-and-differentials-examples`, and `poisson-summation-sampling-and-lattice-duality`; and the B-leaf edge `ex-periods-of-a-complex-torus` → `ex-complex-torus-holomorphic-atlas`. These are pre-splice Step-4 mismatches; no shared plan was edited. Since the statement changed, the pair's existing `sufficient` scope receipt was refreshed against the current A/B inventory and scope; it still records no scope change. The item receipt is escalated, confidence 1, with all 16 direct dependencies examined.
- **Published concerns:** No defective published library claim was found. Looijenga's broken internal cross-reference is an external-source note only; the proof uses no claim depending on it. The identified Step-4 page-plan mismatches remain owner-visible.
- **Next action:** Proceed to `def-jacobian-of-a-compact-riemann-surface` at level 20. Inspect its exact suppliers, including the newly authored but escalated bilinear-relations theorem, before writing it.

## Continuation pass (second authoring window) — checkpoints 17-26

The previous window ended after `def-jacobian-of-a-compact-riemann-surface` (level 20,
file authored, checkpoint not yet written). This window authored the remaining A-page
items in dependency order, from `def-abel-jacobi-map` (21) to
`thm-abel-jacobi-embedding-positive-genus` (25), and left the six B-page examples
(`ex-base-point-cancellation-for-degree-zero-divisors`, `ex-period-matrix-and-jacobian-of-the-pentagon-curve`,
`ex-periods-of-a-complex-torus`, `ex-abel-image-in-its-jacobian`,
`ex-principal-divisor-tests-via-the-abel-jacobi-map`) plus the two pages for a
continuing window. All authored items pass explicit-path precheck and the strict
proof contract; manifests and contracts were synchronized item by item. No item
decision receipts have been recorded in this window: the whole formal side is
escalated on the same open in-run supplier chain, and the owner resolves
escalations.

### 17. `def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface`
(checkpoint carried from the previous window; no change)

### 18. `def-abel-jacobi-map` (level 21, A) - NEW
- **Claim and conventions:** For compact connected $X$ and $p_0\in X$, the point map
  $u_{p_0}(p)=[\omega\mapsto\int_\gamma\omega]\in\Omega(X)^*/\Lambda$ is path
  independent (the loop $\gamma*\gamma'^{-1}$ contributes the period
  $e([\gamma*\gamma'^{-1}])\in\Lambda$), holomorphic in the explicit chart sense of
  the Jacobian definition, satisfies
  $u_{p_0}(q)-u_{p_0}(p)=[\omega\mapsto\int_p^q\omega]$, extends linearly to divisors,
  is base-point free and additive on $\operatorname{Div}^0(X)$, and
  $u((q)-(p))=[\omega\mapsto\int_p^q\omega]$.
- **Repairs:** the scaffold's plane-contour edges
  (`def-complex-line-integral-over-a-rectifiable-path`,
  `def-complex-contours-reversal-concatenation-and-closedness`) are replaced by the
  local-primitive path integral; the unused `thm-riemann-bilinear-relations` edge was
  removed; two holomorphy interfaces were added
  (`def-holomorphic-map-and-complex-jacobian`,
  `thm-componentwise-holomorphy-in-several-complex-variables`).
- **Sources:** Looijenga Ch. 7 §2 Lemma 7.2/Corollary 7.3 (pp. 60-61), McMullen Ch. 15
  (p. 129), Forster §21.6 (pp. 170-171).
- **Checks:** precheck pass; strict contract pass (1/1). Manifest, contract and
  coverage synchronized. Decision: not yet recorded; keep escalated on
  `def-period-pairing-and-period-lattice` and
  `lem-period-pairing-is-well-defined-and-computed-by-integration`.

### 19. `lem-abel-jacobi-map-is-well-defined-and-base-point-independent` (level 22, A) - NEW
- Four clauses proved: exact period difference for two paths; derivative of a
  holomorphic lift is the evaluation map and is nonzero iff some holomorphic
  differential is nonzero at $p$; base-point independence/additivity on
  $\operatorname{Div}^0(X)$ and three-point additivity; the local cocycle form
  $u(q)(\omega)-u(p)(\omega)=\int_\gamma\omega$ in $\mathbb C/\Lambda_\omega$.
- Scaffold's `prop-reversal-and-concatenation-of-complex-line-integrals` edge
  removed (path-integral identities used instead).
- **Checks:** precheck pass; strict contract pass. Decision: not yet recorded;
  escalated on the def-abel-jacobi-map chain.

### 20. `lem-principal-divisors-have-vanishing-abel-jacobi-class` (level 23, A) - NEW
- For nonconstant $f$, the curve $\gamma$ from $\infty$ to $0$ with interior avoiding
  the finite branch locus has an $n$-curve preimage; endpoint multiplicities give
  $\partial c=(f)$; per-sheet substitution and the vanishing trace on
  $\widehat{\mathbb C}$ give $\int_c\omega=0$; hence $u((f))=0$. Constant nonzero case
  trivial.
- The scaffold's unused period/dimension/wedge edges removed; $\theta$ (curve from
  $\infty$ to $0$) constructed explicitly so that $0$ and $\infty$ may be critical.
- **Checks:** precheck pass; strict contract pass. Decision: not yet recorded;
  escalated on `lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere`
  (escalated on batch-9/10 inputs) and on `def-abel-jacobi-map`.

### 21. `lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity` (level 23, A) - NEW
- Weak solution of a degree-zero divisor (continuous chain allowed; the statement was
  strengthened from piecewise smooth to continuous to serve Abel's theorem's cycle
  adjustment), the identity
  $\frac1{2\pi i}\int_X\frac{df}{f}\wedge\omega=\int_c\omega$ for closed smooth
  $\omega$, the $\bar\partial f/f$ form for holomorphic $\omega$, and uniqueness up to a
  smooth nowhere-vanishing factor.
- Proof mirrors Forster §§20.1-20.5: the model $\exp(\psi\operatorname{Log}\frac{z-b}{z-a})$
  with slit $\,[a,b]$, Stokes with the constant $2\pi i$ jump across the slit, gluing by
  products along a subdivision.
- **Checks:** precheck pass (after adopting the canonical layer numbering); strict
  contract pass. Decision: not yet recorded; no in-run supplier is required, the
  published residue/Stokes/cutoff interfaces are the inputs.

### 22. `thm-jacobi-inversion` (level 23, A) - NEW
- Main claim: $u$ is onto, with the explicit division-by-$N$ form
  $\xi=N\sum_j[\omega\mapsto\int_{a_j}^{x_j}\omega]$ and
  $u(N\sum_j(x_j-a_j))=[\xi]$ (Forster Thm 21.7 style); sharper claim: $X^g\to\operatorname{Jac}(X)$
  is onto via Riemann-Roch (Forster Thm 21.9), with the descent to quotients of
  permuted tuples.
- Scaffold's one-variable inverse-function edge replaced by
  `thm-holomorphic-inverse-function-theorem-several-variables`; Riemann-Roch added as
  a direct dependency for the sharper claim (the scaffold statement promised it).
- **Checks:** precheck pass; strict contract pass. Decision: not yet recorded;
  escalated on `thm-riemann-roch-compact-riemann-surfaces` and the separation lemma.

### 23. `thm-abels-theorem-for-divisors` (level 24, A) - NEW
- $D$ principal $\iff$ $u(D)=0$; kernel = principal divisors. Reverse direction: adjust
  the chain by a cycle (period functional in $\Lambda$), weak solution with vanishing
  $\bar\partial f/f$ pairing, dbar-solvability gives $g$ with $\bar\partial g=\bar\partial f/f$,
  and $F=fe^{-g}$ is meromorphic with $(F)=D$. Forward direction is checkpoint 20.
- **Checks:** precheck pass (canonical 1.1-6.1 numbering); strict contract pass.
  Decision: not yet recorded; escalated on the weak-solution lemma, the dbar
  criterion (batch-9 Hodge inputs) and checkpoint 20.

### 24. `cor-picard-zero-is-the-jacobian` (level 25, A) - NEW
- First isomorphism theorem applied to $u$ with kernel $\operatorname{Prin}(X)$ (Abel)
  and surjectivity (Jacobi inversion) gives the canonical
  $\operatorname{Pic}^0(X)\cong\operatorname{Jac}(X)$, plus the line-bundle reading.
- **Checks:** precheck pass; strict contract pass. Decision: not yet recorded;
  escalated on checkpoints 22-23 and `def-picard-group-of-divisor-classes-and-pic-zero`.

### 25. `thm-abel-jacobi-embedding-positive-genus` (level 25, A) - NEW
- Injectivity (a vanishing point difference would give a degree-one map and genus 0),
  immersivity (pointwise nonvanishing holomorphic differential), closed embedding via
  the compact-to-Hausdorff continuous-inverse theorem with an explicit local graph
  chart of the image, generation by Jacobi inversion, and the genus-one biholomorphism.
- The embedding statement is phrased through an explicit local graph chart because the
  library has no general complex-submanifold definition (Step 3a §4.3).
- **Checks:** precheck pass; strict contract pass. Decision: not yet recorded;
  escalated on checkpoints 22-23 and the separation lemma.

### 26. `def-jacobian-of-a-compact-riemann-surface` (level 20, A)
- Authored in the previous window; explicit-path precheck passes (re-verified in this
  window). No item receipt recorded yet. Its open obligations are the period and
  dimension suppliers listed in its Source notes.

### Remaining for the next window
- Author the five remaining B-page examples and the two pages
  (`library/complex-analysis/periods-jacobians-and-abel-jacobi-theory.md` and
  `...-examples.md`); the pages are the artifact the engine currently reports missing,
  together with the unauthored item files.
- Record per-item decisions for all original scaffold items in levels 20-27: the
  formal chain stays `escalate` while (a)
  `lem-holomorphic-differentials-form-a-g-dimensional-space` remains escalated on
  `thm-riemann-roch-compact-riemann-surfaces` and
  `def-line-bundle-associated-to-a-divisor`; (b)
  `lem-dbar-solvability-criterion-for-a-smooth-zero-one-form` remains escalated on the
  batch-9 Hodge suppliers; (c) `lem-trace-...` remains escalated on its batch-10
  inputs. Degrees 0-2 items already carry repaired decisions.
- Re-run the batch-11 gates after the pair is complete: manifest-deps, coverage with
  `--require-destination`, content policy, strict merged contracts, item dependency
  levels, rendercheck, and the single batched `node tools/proof-layout.mjs` over all
  changed item paths; then refresh the pair scope receipt and record item decisions
  (`escalate` where the supplier chain is still open).
- Step-4 plan mismatches recorded in checkpoints 1-16 remain unchanged (14 redundant
  A-page prerequisites; the undeclared supplier-page edges on both pages).

## Continuation pass (third authoring window) — checkpoints 27-34

This window repaired the last outstanding item defect, completed the removed
bookkeeping (coverage and cross-batch inputs), ran the full batch-11 gate
battery once over all 31 owned items, and re-read the run-wide state. No item
statement, definition or proof was newly authored in this window; the only item
edit is the repair recorded in checkpoint 27.

### 27. Repair: `ex-periods-of-a-complex-torus` (level 26, B)

- **Defect.** Focused `depcheck` reported `b-leaf-content`: the example declared
  two B-page-only items (`ex-complex-torus-holomorphic-atlas`,
  `ex-mayer-vietoris-computation-of-the-torus-first-homology`), and a B-leaf
  item may not consume B-page content.
- **Repair.** The two edges and every proof use of them were removed. The
  descending differential, the period identification and the genus-one
  biholomorphism are now argued from the published A-side interfaces
  (`def-complex-lattice-and-complex-torus`,
  `thm-complex-torus-quotient-is-well-defined`,
  `def-meromorphic-differential-on-a-riemann-surface`,
  `def-elliptic-function-for-a-lattice`,
  `def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface`,
  `lem-holomorphic-differentials-form-a-g-dimensional-space`,
  `def-genus-and-euler-characteristic-compact-riemann-surface`), from the
  same-pair period and Jacobian interfaces, and from
  `cor-picard-zero-is-the-jacobian`. Facts F1-F7, the deps list and the four
  steps were rewritten; the canonical layer numbering computed by precheck's
  `layerRepair` is now `1.1, 1.2, 2.1, 3.1` (two independent layer-1 steps,
  one layer-2 step citing both, one pinned terminal step), and the step
  references were updated so that no forward reference remains.
- **Contract.** The spec was rebuilt from the current item: citations only from
  the remaining 15 deps with the exact steps that cite each fact, four
  derivations, and boundary dispositions updated (`zero`, `one`, `degenerate`,
  `endpoints` and both iff directions now point at steps 1.1/2.1).
- **Checks.** Explicit-path precheck PASS; explicit-path rendercheck clean;
  strict contract passes for the item; focused `depcheck` passes for all 31
  items; the single batched `proof-layout` run is clean.
- **Decision.** The earlier `escalate` receipt for this item is now stale
  ("changed inputs require a current owner decision"): it was recorded before
  the dependency repair. A non-owner re-record is refused by
  `tools/step3-decisions.mjs` with "The owner must resolve this item decision"
  (verified; the receipt file is untouched). The escalation therefore stands
  for the owner, now flagged as changed inputs; the open supplier chain is the
  same dimension/Riemann-Roch chain as in checkpoint 26.

### 28. Coverage registration for the two late B-page examples

- Added the missing harvest rows without touching sibling rows: Looijenga
  Ch. 7 §2 Corollary 7.3 (divisor-level point map and base-point shift) mapped
  `included` to `ex-base-point-cancellation-for-degree-zero-divisors`, and
  McMullen Theorem 15.7 (the point map is a smooth embedding generating the
  Jacobian) mapped `included` to `ex-abel-image-in-its-jacobian`.
- `coverage-checklist --require-destination` now reports
  **90 harvested results, 0 errors/warnings**.

### 29. Batch-11 cross-batch input

- The ledger's own collector, run in a sandboxed root over a copy of the run
  manifests and inputs, showed two declared batch-11 cross-batch edges with no
  review row. Both were added as `verified` (the supplier
  `def-divisor-principal-and-canonical-divisor-riemann-surface` is a batch-10
  definition whose Step-3 decision is `repaired` at confidence 1 and closed;
  its current Definition was read):
  - `thm-abel-jacobi-embedding-positive-genus` uses (f), the degree-zero
    property and the canonical divisor in facts F4 (step 1.1) and F2
    (step 1.2);
  - `ex-principal-divisor-tests-via-the-abel-jacobi-map` uses the same clauses
    in facts F1/F4 at steps 1.1, 1.2 and 1.4.
- The sandboxed re-collection then shows **37 declared batch-11 cross-batch
  edges, 0 without a review row**.
- One orphaned row is preserved:
  `def-picard-group-of-divisor-classes-and-pic-zero ->
  lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface`
  now names a supplier that is itself an item of this pair (the new A-page
  prerequisite added in the second window), so it is no longer a cross-batch
  edge. Orphaned reviews are reconciled by Step 8's lead; the row was not
  deleted.
- **Run-wide refresh blocker (not this pair).**
  `node tools/frontier-dependency-ledger.mjs refresh --run frontier-43-complex-representation-15`
  currently aborts with
  `frontier-43-complex-representation-15-batch-14.cross-batch-dependencies.json: invalid review or consumer ownership`.
  Batch 14 is the unfinished sibling pair
  `quasisymmetry-welding-and-conformal-removability`; the unified ledger
  therefore cannot be refreshed after the two new rows until that input is
  repaired by its owner. Batch 11's own input validates.

### 30. Dependency levels and the run-wide level gate

- `item-dependency-levels check --run frontier-43-complex-representation-15`
  now passes: **384 items, 30 pages, maximum level 27, 0 errors**. All 31
  owned labels match the computed levels (the earlier fixes to
  `ex-period-matrix-and-jacobian-of-the-pentagon-curve` 26->24,
  `lem-weak-solution-...`, `def-picard-group-...` and the two additions are
  unchanged and consistent).
- The seven out-of-pair level errors seen earlier in this window (beltrami /
  quasiconformal items) were repaired by their owners before this run.

### 31. Final batch-11 gate battery (all run in this window)

- Explicit-path `precheck` over all 31 item files: **30 checked, 1
  not-applicable** (`def-intersection-form-on-the-homology-of-a-closed-oriented-surface`
  has no proof body), **0 failing**.
- Explicit-path `rendercheck` over the 31 items and the two `library/` pages:
  clean (no wikilink-in-math, delimiter, display-block, KaTeX or YAML defect).
- `node tools/proof-layout.mjs items/...` — the single batched invocation over
  all 31 changed item paths: **31 items, 164 steps, 0 defects**.
- `proof-contract.mjs --strict` on the batch-11 merged contracts:
  **0 errors, 0 warnings, 31/31 items checked**.
- `manifest-deps` on the batch-11 pages manifest: **31 items, 0 errors**.
- `content-policy` on the batch-11 manifest: **31 items, 0 errors/warnings**.
- Focused `depcheck --items-file` (31 items): page and prerequisite cycle
  checks pass; the B-leaf defect of checkpoint 27 is gone.
- Focused `fwdcheck --items-file`: passes (the `inherited` entries are
  informational markers for the open supplier chain).
- Focused `extcheck --items-file`: **31 items, 0 recorded-not-proved, 0
  resting on them**.
- `citecheck` over the 31 items: 1 heuristic warning in
  `thm-jacobi-inversion` (`[add-order]`, line 87). **Triaged as a false
  positive**: the matched phrase is "compatibly with addition and scalar
  multiplication" in [F7], i.e. vector-space additivity of the evaluation
  identification, not an order move. No dependency or citation change is
  warranted (triage case "(c)").
- `source-fetch-check` for the batch-11 coverage file: **8/8 sources
  fetch-verified, 8/8 resolved**.
- Run-wide `item-dependency-levels`: pass (see checkpoint 30).
- Run-wide `validate-plan` pair check (`--pages-file` with the two owned page
  ids): page order and declared prerequisites hold; **7 `undeclared-prereq`
  hard errors and 14 `redundant-prereq` warnings** (Step-4 plan mismatches,
  checkpoint 33).
- Run-wide `validate-plan --run frontier-43-complex-representation-15`:
  12 hard errors and 128 redundant-prerequisite warnings across the run; 7 of
  the 12 errors and 14 of the warnings are this pair's (listed in
  checkpoint 33). The other 5 errors are `bergman-and-szego-kernels` (2) and
  `direct-integral-decomposition-and-type-i-groups` (3).
- Run-wide `frontier-item-gate` battery (384 items): `depsource` passes
  (384/384 consumers covered); **this pair contributes 0 hard errors** to
  `precheck`, `prosecheck`, `rendercheck`, `depcheck`, `fwdcheck`, `extcheck`.
  Those run-wide gates currently fail only on sibling pairs:
  `precheck`/`prosecheck` crash on the unauthored
  `items/cex-irreducible-multiplicity-data-is-not-canonical-outside-type-i.md`
  (direct-integral pair); `rendercheck` reports 25 unreadable files, and
  `fwdcheck`/`extcheck`/`depcheck` report 25 `focus-item-unknown` rows, all in
  the same unauthored pair; `depcheck` also reports unresolved deps in
  `thm-plancherel-support-for-sl2-r` and
  `thm-classification-of-the-irreducible-unitary-dual-of-sl2-r`, a
  `cited-not-in-deps` row in `lem-analytic-quasiconformality-implies-modulus-distortion.md`,
  and links in `def-type-i-factor-representation-and-type-i-group.md`;
  `pathcheck` fails on the unknown focus pages of the direct-integral pair.

### 32. Decision state at handoff

- **Closed with `repaired`, confidence 1 (6):**
  `lem-cellular-homology-of-the-one-polygon-surface-model`,
  `def-intersection-form-on-the-homology-of-a-closed-oriented-surface`,
  `thm-symplectic-homology-basis-compact-riemann-surface`,
  `lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism`,
  `lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity`,
  `ex-symplectic-homology-basis-of-a-genus-two-surface`.
- **Current `escalate` receipts (13), owner-held:** the wedge-period theorem,
  the Riemann bilinear relations, the Jacobian definition, the point map, the
  base-point lemma, the vanishing-principal-divisor lemma, the cut lemma,
  Abel's theorem, Jacobi inversion, `cor-picard-zero-is-the-jacobian`, the
  embedding theorem, the pentagon period-matrix example and the base-point
  cancellation example.
- **Escalations whose input hash has since changed (10), now reported as
  "changed inputs require a current owner decision":**
  `lem-holomorphic-differentials-form-a-g-dimensional-space`,
  `def-period-pairing-and-period-lattice`,
  `lem-period-pairing-is-well-defined-and-computed-by-integration`,
  `lem-dbar-solvability-criterion-for-a-smooth-zero-one-form`,
  `lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere`,
  `lem-holomorphic-differentials-separate-generic-points`,
  `def-picard-group-of-divisor-classes-and-pic-zero`,
  `ex-periods-of-a-complex-torus`,
  `ex-principal-divisor-tests-via-the-abel-jacobi-map`,
  `ex-abel-image-in-its-jacobian`.
  `tools/step3-decisions.mjs record-item` refuses a non-owner re-record for an
  escalated item ("The owner must resolve this item decision"), so these stay
  owner-held; the changed-input flag reflects supplier items edited by other
  pairs in this still-open run.
- **Additions pending engine certification (2), no self-review by rule:**
  `def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface` and
  `lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface`
  (both absent from the immutable pre-author inventory and the
  existing-item-file list).
- **Pair scope receipt:** `sufficient`, sha `6fa0a97c...`, recorded
  2026-10-07T23:25:32Z; the run-wide `check --phase scope` reports no open
  item for this pair (the open scopes belong to sibling pairs still being
  authored). Manifest, contracts, coverage, pages and the cross-batch input
  are synchronized; sibling rows were preserved throughout.

### 33. Open obligations and Step-4 plan mismatches (left for the owner/Step 4)

- **Open supplier chain.** The escalations above rest on the unfinished
  in-run suppliers
  `thm-riemann-roch-compact-riemann-surfaces` and
  `def-line-bundle-associated-to-a-divisor` (batch 10, via
  `lem-holomorphic-differentials-form-a-g-dimensional-space` and the
  separation lemma), the batch-9 Hodge suppliers of
  `lem-dbar-solvability-criterion-for-a-smooth-zero-one-form`
  (`thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology`,
  `def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface`,
  `def-holomorphic-line-bundle-and-meromorphic-section-riemann-surface`), and
  the Riemann-Roch step of
  `lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere`
  and `thm-jacobi-inversion`. Every consumer is fully authored and its supplier
  use is recorded in the batch-11 cross-batch input with the consuming step.
- **Step-4 plan mismatches (undeclared supplier-page edges; no plan or
  published content edited).** The plan's `requires` closure for the A page
  must either gain these pages or the items must lose the listed direct
  dependencies:
  - `intersection-pairings-self-intersection-and-euler-classes` through
    `def-intersection-form-on-the-homology-of-a-closed-oriented-surface` and
    `thm-symplectic-homology-basis-compact-riemann-surface`
    (`def-geometric-intersection-pairing-on-a-closed-oriented-manifold`,
    `thm-geometric-intersection-equals-the-poincare-dual-cup-pairing`);
  - `poisson-summation-sampling-and-lattice-duality` through
    `thm-riemann-bilinear-relations` and
    `def-jacobian-of-a-compact-riemann-surface` on the A page and through
    `ex-period-matrix-and-jacobian-of-the-pentagon-curve` on the B page
    (`def-full-rank-lattice-covolume-and-dual-lattice`);
  - `elliptic-functions-and-complex-tori` through
    `def-jacobian-of-a-compact-riemann-surface` on the A page and through
    `ex-periods-of-a-complex-torus`,
    `ex-period-matrix-and-jacobian-of-the-pentagon-curve`,
    `ex-principal-divisor-tests-via-the-abel-jacobi-map` on the B page
    (`def-complex-lattice-and-complex-torus`);
  - `minkowski-theory-and-number-field-class-groups` through
    `def-jacobian-of-a-compact-riemann-surface`
    (`lem-full-lattice-fundamental-domain-and-bounded-points`);
  - `the-gauss-bonnet-theorem-for-riemannian-surfaces` through
    `lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity`
    (`lem-stokes-for-piecewise-smooth-surface-regions`).
  The earlier B-leaf defect `ex-periods-of-a-complex-torus ->
  ex-complex-torus-holomorphic-atlas` is repaired and no longer reported;
  the former B-page edge to
  `riemann-surfaces-branched-maps-and-differentials-examples` is also no
  longer reported.
- **14 `redundant-prereq` warnings (A page).** The direct requirements
  `cw-complexes-and-cellular-homology` (5x), `cup-cap-cross-products-and-cohomology-rings`
  (4x), `orientations-poincare-lefschetz-and-alexander-duality` (3x),
  `hilbert-space-geometry-and-riesz-representation` (1x) and
  `classification-of-compact-connected-surfaces` (1x) are already reached
  transitively, mostly through `divisors-riemann-roch-and-duality`. These are
  pre-splice warnings only; no plan edit was made.

### 34. Handoff summary

- All 31 assigned item files (29 original scaffolds + 2 authorized additions)
  exist and are fully authored; both `library/complex-analysis/` pages exist
  and are registered in the batch-11 manifest; the batch-11 coverage file has
  a harvest row disposition for every consulted source and every scaffolded
  destination item; the cross-batch input has a review row for every declared
  batch-11 cross-batch edge.
- The proof-contract, manifest, coverage, content, rendering and
  dependency-level gates for this pair pass. The only failing gates touching
  this pair are the pre-splice `validate-plan` page-declaration mismatches
  above and the run-wide failures caused by unfinished sibling pairs.
- Open obligations: the owner-held escalations (checkpoints 32-33), the
  engine certification of the two additions, and the batch-14 ledger-refresh
  blocker (checkpoint 29). No unresolved work is presented as complete.

## Origin-refresh window (fourth authoring interval) — checkpoints 35-43

Native refresh request `89595534-c94b-440b-a438-2473a7f6545a` was accepted
2026-10-08T00:27:59.667Z with the reason: "Periods owner mathematical repairs
are drained and reviewed; two native additions were rewritten unchanged after
the prior author interval, requiring genuine fresh input examination and origin
coverage without resetting mtimes." The refresh dispatch
`step3b-pair-periods-jacobians-and-abel-jacobi-theory-dec40bf918884879` started
2026-10-08T02:00:21.124Z (`.autopilot/frontier-43-complex-representation-15/state.json`),
after that acceptance, and the owner re-recorded the pair scope decision
`proceed` for the current scope at 2026-10-08T00:28:30.251Z. This section is the
window's genuine fresh-examination evidence.

**What this window did.** Independently re-examined, supplier before consumer,
the current content of every assigned item, with emphasis on (a) the two
origin-sensitive native additions, (b) the nine carriers corrected in the owner
round-1 repair report, and (c) their actual current proof inputs, together with
the two pages, batch-11 contracts, coverage and cross-batch input. No item,
page, manifest, contract, coverage or cross-batch file was edited: the
examination found no defect requiring a substantive correction, and no file was
touched solely to change timestamps, invent creation history or repeat settled
authoring. The only writes from this window are the six re-recorded decisions
of checkpoint 42 and this report section.

### 35. Entry accounting

- The pair is in the run's current 3b-author stage with `native refresh
  pending` for this unit; the owner repair round-1 report
  (`research/frontier-43-complex-representation-15-periods-escalation-repair-round1.md`)
  is the named evidence for the corrected carriers, and its findings were
  re-checked against the current files rather than accepted from the summary.
- The two origin-sensitive additions are
  `def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface`
  (level 0, A) and
  `lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface`
  (level 10, A). Both are absent from the immutable pre-author scaffold
  inventory and existing-item-file list, so they receive scope/item
  certification from the engine after this successful dispatch, with no
  self-review receipt; all of their item-text and dependency-file mtimes
  (2026-10-07T23:54Z at the latest, two repairs at 2026-10-08T00:00Z) precede
  this dispatch's start, so the successful native result of this window is
  their covering author window without any timestamp edit.
- Six original items carried stale `repaired` receipts whose bound hash had
  changed after the round-1 consolidation; `check --phase final` reported them
  as "current item audit required":
  `lem-cellular-homology-of-the-one-polygon-surface-model`,
  `lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism`,
  `def-intersection-form-on-the-homology-of-a-closed-oriented-surface`,
  `lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity`,
  `thm-symplectic-homology-basis-compact-riemann-surface` and
  `ex-symplectic-homology-basis-of-a-genus-two-surface`.
- The remaining 23 items carry current owner-held `escalate` receipts whose
  supplier uses are recorded; they were preserved, not overridden. The pair
  scope decision is closed (owner `proceed`, current hash), and the batch-11
  manifest, proof-contract, coverage, cross-batch and page files all exist and
  correspond to the current 31-item inventory.

### 36. Fresh examination of the two origin-sensitive additions

- **`def-path-integral-of-a-holomorphic-differential-on-a-riemann-surface`.**
  Read the complete Definition and Verification. Checked the local-primitive
  definition, the Lebesgue-number subdivision (finite choice only), the
  same-disk telescoping and overlap-transition steps
  ($\frac{d}{dz}(G_V(w(z))-G_U(z))=0$ via the differential transition law),
  the common-refinement independence argument, additivity/reversal/linearity,
  and the piecewise-$C^1$ agreement with the plane contour integral via the
  fundamental-theorem supplier. The definition makes the topological polygon
  side-loop periods meaningful without smoothness assumptions, and no
  unrestricted choice is used. Nineteen direct dependencies resolve and are
  each cited in Facts or steps.
- **`lem-holomorphic-line-bundle-has-a-nonzero-meromorphic-section-on-a-compact-riemann-surface`.**
  Read the complete proof. Checked the harmonic-star duality pairing
  $H^{0,1}(X,E)\to H^0(X,K\otimes E^*)^*$, the finite-dimensionality of both
  sides and the Hamel-basis/coordinate-functional argument giving
  $d=\dim H^0(X,F)$ finite, the construction of the $d+1$ forms
  $\theta_j=\bar\partial_E(\chi z^{-j}e)$ (smooth across $p$ because
  $\theta_j=0$ near $p$ and $(0,2)=0$), the nonzero kernel of
  $T:\mathbb C^{d+1}\to H^0(X,F)^*$, the descent to a smooth $u$ with
  $\bar\partial_Eu=\theta$, and the final meromorphic extension
  $s=\sum_jc_j\sigma_j-u$ with nonzero principal part at $p$ and holomorphy
  elsewhere. AC is declared and used exactly for the metric selection and the
  finite-dimensional dual argument; no gap was found and no correction was
  needed.

### 37. Fresh examination of the level 0-2 carriers

- `lem-cellular-homology-of-the-one-polygon-surface-model`: recomputed the
  commutator corner orbit (one vertex, $2g$ loop edges), the digon differentials
  $\partial_1e=v_1-v_0$, $\partial_2=0$, the exponent-sum vanishing of
  $\partial_2$ for each label, the chain groups and homology, the cell-count
  Euler characteristic $2-2g$, and the one-edge subdivision basis; all twelve
  suppliers are used exactly as cited.
- `lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism`:
  re-checked properness from compactness and closedness of compact subsets, the
  weighted fibre count forcing a one-point unramified fibre at $d=1$, and the
  holomorphy of the set-theoretic inverse from the local normal form $z^e$ at
  ramification index $1$; the proof is choice-free as stated.
- `def-intersection-form-on-the-homology-of-a-closed-oriented-surface`:
  definition-only content (precheck `not-applicable`); re-checked the cap
  duality $D_X(a)=a\cap[X]$, the adjunction identity
  $\langle a\smile b,[X]\rangle=\langle b,D_X(a)\rangle$ against its exact
  statement and step 1.1 in `cor-poincare-duality-gives-a-nonsingular-cup-pairing`,
  the alternating property from graded commutativity over $\mathbb Z$, the
  orientation-reversal sign computation, and the smooth/transverse restriction
  of the geometric clause.
- `lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity`:
  re-checked the corrected model factor
  ($R=(z-b)/(z-a)$, $\operatorname{Log}R$ holomorphic on the annulus, cutoff
  product smooth to $1$ at the outer rim), the compact-homotopy primitive
  argument, the punctured-region Stokes computation
  $\int\alpha\wedge dg=2\pi i(g(b)-g(a))$ with clockwise inner circles and
  $d(g\alpha)=-\alpha\wedge dg$, absolute convergence from the $O(1/|z|)$
  bound, and the finite-product endpoint-multiplicity bookkeeping including
  coincident endpoints; the three claims hold.
- `thm-symplectic-homology-basis-compact-riemann-surface`: recomputed
  $D_X(x_p)=\sum_qJ_{pq}e_q$, $D_X^{-1}(e_q)=\sum_pJ_{pq}x_p$ and
  $\langle e_p,e_q\rangle=J^{\mathsf T}JJ=J$ using $J^{\mathsf T}J=I$;
  re-checked the UCT evaluation isomorphism, the orientation-compatible
  relabeling via $[a,b]^{-1}=[b,a]$, and the empty genus-zero conventions.
- `ex-symplectic-homology-basis-of-a-genus-two-surface`: recomputed the octagon
  corner orbit $v_0\sim v_3\sim v_2\sim v_1\sim v_4\sim v_7\sim v_6\sim v_5\sim v_0$,
  the four paired edges and one face, the $\mathbb Z^4$ side-loop basis, the
  $\operatorname{diag}(J_2,J_2)$ matrix with determinant $1$, and the genus
  $0$ and genus $1$ endpoint cases from A-page suppliers only.

### 38. Fresh examination of the level 10-19 carriers

- `lem-dbar-solvability-criterion-for-a-smooth-zero-one-form`: re-read the
  quotient definition of $H^{0,1}(X,\mathcal O_X)$ and the three equivalent
  conditions, the Stokes well-definedness, and the harmonic-star duality
  isomorphism used at step 2.1; the explicit $H^{0,1}(X,\mathcal O_X)$ quotient
  correctly replaces the scaffold's plane-domain definition.
- `lem-holomorphic-differentials-form-a-g-dimensional-space`: re-read the
  Riemann-Roch computations at $D=0$ and $D=K$ giving $\dim\Omega(X)=g$ and
  $\deg K=2g-2$, the zero-count clause, and the exact supplier uses recorded in
  the cross-batch input (RR at F1/2.1/3.1, F15/F16 at 1.1); the item remains
  escalated only on those unfinished batch-10 suppliers.
- `lem-trace-of-a-holomorphic-one-form-under-a-nonconstant-map-to-the-sphere`:
  re-checked the local trace computation
  $\sum_kh(\zeta^kt^{1/e})\zeta^ke^{-1}t^{1/e-1}=\sum_qc_{qe-1}t^{q-1}$,
  the unique extension over branch values, the choice-free Liouville vanishing
  proof for sphere differentials, the transfer-chain integral with
  multiplicities, and the endpoint/divisor clause including $a=\infty$ and
  $a=b$.
- `def-period-pairing-and-period-lattice` and
  `lem-period-pairing-is-well-defined-and-computed-by-integration`: re-read the
  fixed-basis definition (with discreteness/fullness deliberately deferred to
  the bilinear relations), the continuous singular cocycle
  $\int_{\partial\beta}\omega=0$ argument by subdivided triangles, the
  evaluation identity $P(\gamma,\omega)=\int_c\omega$ on all classes, the
  symplectic-change formula, and the real de Rham comparison clause.
- `lem-holomorphic-differentials-separate-generic-points`: re-read the
  $\ell(K-p)=g-1$ computation via Riemann-Roch at $K-p$ and $\ell(p)=1$, the
  finite-induction extension clause, and the frame-independence argument.
- `lem-cut-surface-and-boundary-jumps-of-primitives` and
  `thm-symplectic-period-formula-for-wedge-integrals`: re-read the cut-open
  polygon homeomorphism, the primitive with jumps
  $f|_{A_i^-}-f|_{A_i^+}=\Pi_\alpha(b_i)$ and
  $f|_{B_i^-}-f|_{B_i^+}=-\Pi_\alpha(a_i)$, the cocycle
  $C_\alpha$, the comparison $\mathcal J_X^1[\alpha]=[C_\alpha]$, and the
  symplectic cup computation $\langle c\smile d,[X]\rangle=\sum_i(A_iB_i'-B_iA_i')$
  giving $\int_X\alpha\wedge\beta=S(\alpha,\beta)$.
- `thm-riemann-bilinear-relations`: recomputed
  $S(\omega,\eta)=c^{\mathsf T}(\Pi-\Pi^{\mathsf T})d$ for holomorphic pairs,
  the conjugate-pair computation
  $S(\omega,\bar\omega)=c^{\mathsf T}(\bar\Pi-\Pi^T)\bar c=-2i\,c^{\mathsf T}Y\bar c$
  with $Y=\operatorname{Im}\Pi$ (using $P(b,\bar\omega)=\overline{P(b,\omega)}$),
  the equivalence with positive definiteness of $Y$, and the injectivity/full
  lattice computation $m+\Pi n$ with $Yn=0\Rightarrow n=0$; the $g=0$
  conventions are treated explicitly.

### 39. Fresh examination of the level 20-27 carriers

- `def-jacobian-of-a-compact-riemann-surface`, `def-abel-jacobi-map`,
  `lem-abel-jacobi-map-is-well-defined-and-base-point-independent`: re-read
  the quotient/atlas definition and the point-map path-independence via
  $e(\delta)\in\Lambda$, the corrected local lift
  $\xi=\xi_0+(H_1(z),\ldots,H_g(z))$ and its nonzero derivative
  $1\mapsto(\omega_1(\partial_z),\ldots,\omega_g(\partial_z))$, the addition
  rule, and the explicit nonzero-degree torsion caveat
  $u_{q_0}(p)=u_{p_0}(p)-u_{p_0}(q_0)$.
- `lem-principal-divisors-have-vanishing-abel-jacobi-class`: re-read the
  interior-parameter two-direction lifts, the endpoint power-neighborhood
  counting with multiplicity, the trace-vanishing integral over compact
  subintervals, and the conclusion $u((f))=0$; no embedded-arc or global
  inverse-branch assumption remains.
- `thm-abels-theorem-for-divisors`: re-checked the chain
  $c'=c-c_\alpha$ with vanishing periods, the weak solution, the
  $\bar\partial$-correction $F=fe^{-g}$ with
  $\bar\partial F=e^{-g}(\bar\partial f-f\bar\partial g)=0$ and the meromorphic
  divisor conclusion, plus the forward direction.
- `thm-jacobi-inversion`: re-checked the genus-zero case, the local map
  $F(x)_i=\sum_jf_{ij}(x_j)$ with invertible Jacobian $(h_{ij}(a_j))$, the
  division-by-$N$ representation $\xi=N F(x)$, and the Riemann-Roch step
  $D'=D+\sum[a_j]$, $\ell(D')-\ell(K-D')=1$, $D''=(f)+D'$ of degree $g$;
  the quotient clause is now the coordinate-permutation symmetric product only.
- `cor-picard-zero-is-the-jacobian`, `thm-abel-jacobi-embedding-positive-genus`:
  re-read the first-isomorphism-theorem composition (kernel = principal
  divisors, surjectivity from inversion) and the injectivity/immersion/graph-chart/
  generation/genus-one proof, including the corrected scalar inverse-function
  step and the smaller-chart exclusion of other image branches.
- Examples `ex-base-point-cancellation-for-degree-zero-divisors`,
  `ex-periods-of-a-complex-torus`,
  `ex-period-matrix-and-jacobian-of-the-pentagon-curve`,
  `ex-principal-divisor-tests-via-the-abel-jacobi-map` and
  `ex-abel-image-in-its-jacobian`: re-checked the base-point shift using the
  nonzero point-map value, the invariant $dz$ and periods
  $P(\pi_1,dz)=\omega_1$, $P(\pi_2,dz)=\omega_2$ with
  $\operatorname{Jac}(X)=X$, the pentagon eigenvalue analysis through the
  characteristic polynomial of the cyclic $A$-module and the admissible
  nonopposite eigenpair ratio $2$ or $3$ normalised by $T^r$, the Vandermonde
  full-lattice proof, the sphere/torus/$\wp$-quotient principal-divisor tests,
  and the generation-vs-subtorus argument for the Abel image.

### 40. Round-1 corrections verified in place

All nine corrected carriers named in the round-1 report were re-read and their
corrections are present and internally consistent: the weak-solution model and
improper-integral statement; the Abel-Jacobi degree/torsion caveat; the
well-definedness lift constant; the principal-divisor endpoint-multiplicity
counting; the Jacobi-inversion genus-zero and RR steps with the
permutation-quotient clause; the embedding graph chart and the F7 degree-zero
extensibility reading; the pentagon spectral/real-span argument; the base-point
example's point-map use; and the Abel-image generation-first argument. No
regression from the round-1 text was found.

### 41. Checks actually run in this window

- Explicit-path `precheck` over all 31 assigned items: **31 files, 30 checked,
  0 failed** (the intersection-form definition is `not-applicable`).
- Explicit-path `rendercheck` over the 31 items and the two `library/` pages:
  **33 files, 0 errors/warnings**.
- Batched `node tools/proof-layout.mjs` over all 31 item paths: **31 items,
  164 steps, 0 defects**. No item file was changed in this window, so this is
  the current-state formatting evidence rather than a post-edit pass.
- `proof-contract.mjs --strict` on the batch-11 merged contracts: **0 errors,
  0 warnings, 31/31 items**.
- `manifest-deps.mjs` on the batch-11 pages manifest: **31 items, 0 errors**.
- `content-policy.mjs` on the batch-11 manifest: **31 scoped items, 0
  errors/warnings**.
- Focused `depcheck --items-file` (31 items): pass, including the selected page
  and prerequisite cycle checks. Focused `fwdcheck`: pass with the known
  `inherited` markers only. Focused `extcheck`: **31 items, 0
  recorded-not-proved, 0 resting on them**. Focused `citecheck`: one heuristic
  `[add-order]` warning in `thm-jacobi-inversion` line 87, triaged as case (c):
  the matched phrase is "compatibly with addition and scalar multiplication"
  in [F7] (vector-space additivity of the evaluation identification), not an
  order move; no dependency change is warranted.
- `coverage-checklist --require-destination`: **90 harvested results, 0
  errors/warnings**. `source-fetch-check` for the batch-11 coverage file:
  **8/8 sources fetch-verified, 8/8 resolved**.
- Run-wide `item-dependency-levels check`: **384 items, 30 pages, maximum
  level 27, 0 errors**; all 31 owned stored levels match the computed levels.
- Pre-splice `validate-plan` against `research/plan-spec.json` for the two
  pages (without `--run`): page order and declared prerequisites hold, with
  **7 `undeclared-prereq` errors and 14 `redundant-prereq` warnings** — these
  are the Step-4 plan-spec mismatches of checkpoint 43, unchanged from
  checkpoint 33. `validate-plan --run frontier-43-complex-representation-15`
  (current manifests): **passes**, acyclic page order, no item cycles, no
  unresolved ids.
- Run-wide `frontier-item-gate` battery on the current run scope:
  `precheck` **384 files, 350 checked, 0 failed**; `rendercheck` **414 files,
  0/0**; `prosecheck` **417 files, 0 errors, 18 warnings** (one warning pair is
  in this pair: `count-of-this-page` on "all of them" in
  `ex-principal-divisor-tests-via-the-abel-jacobi-map`, triaged as a heuristic
  phrase match for the degree-zero divisors under discussion); `depcheck` **0
  errors** with 2 `cited-not-in-deps` warnings on sibling pairs; `fwdcheck` **0
  errors**; `extcheck` **0**; `depsource` **384 consumers, 0 errors`. The
  run-wide hard failures recorded in checkpoint 31 have all been cleared by
  the unfinished sibling pairs' advances; the run-wide battery now reports 0
  hard errors, and its only non-pair items are those two sibling `depcheck`
  warnings and the soft prosecheck count-phrase heuristics.

### 42. Decision re-records from this window's examination

The six stale-receipt items of checkpoint 35 were re-recorded as `repaired`,
confidence 1, each binding its current hash, the exact direct dependency list
examined and a concrete reason listing the recomputed claims and the passing
item-local checks:
`lem-cellular-homology-of-the-one-polygon-surface-model`,
`lem-degree-one-holomorphic-map-of-compact-riemann-surfaces-is-an-isomorphism`,
`def-intersection-form-on-the-homology-of-a-closed-oriented-surface`,
`lem-weak-solution-of-a-degree-zero-divisor-and-logarithmic-derivative-identity`,
`thm-symplectic-homology-basis-compact-riemann-surface`,
`ex-symplectic-homology-basis-of-a-genus-two-surface`. The subsequent
`check --phase final` reports those six closed; the 23 owner-held `escalate`
receipts are preserved unchanged, and the two additions remain
"current item audit required" pending their engine certification from this
successful dispatch. No owner-held decision was overridden and no `--owner`
flag was used.

### 43. Open obligations, Step-4 plan mismatches and handoff

- **Owner-held escalations (23), unchanged:** the dbar criterion, the Picard
  definition, the dimension lemma, the trace lemma, the period-pairing
  definition and well-definedness lemma, the separation lemma, the cut lemma,
  the wedge-period theorem, the Riemann bilinear relations, the Jacobian
  definition, the Abel-Jacobi definition and well-definedness lemma, the
  principal-divisor vanishing lemma, Abel's theorem, Jacobi inversion,
  `cor-picard-zero-is-the-jacobian`, the embedding theorem and the five B-page
  examples (`ex-base-point-cancellation-for-degree-zero-divisors`,
  `ex-periods-of-a-complex-torus`,
  `ex-period-matrix-and-jacobian-of-the-pentagon-curve`,
  `ex-principal-divisor-tests-via-the-abel-jacobi-map`,
  `ex-abel-image-in-its-jacobian`). Their exact unfinished in-run suppliers and
  consuming steps are recorded in the cross-batch input and checkpoints 32-33;
  the supplier IDs are `thm-riemann-roch-compact-riemann-surfaces` (batch 10)
  and `def-line-bundle-associated-to-a-divisor` (batch 10; its own owner receipt
  is now closed) through the dimension and separation items, the batch-9
  Hodge suppliers
  `thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology`,
  `def-hermitian-metric-and-ltwo-pairing-on-a-compact-riemann-surface` and
  `cor-dolbeault-cohomology-of-a-compact-riemann-surface-is-finite-dimensional`
  (which still report `current item audit required`), and the in-run period,
  trace and weak-solution items whose own decisions are in the same escalated
  set. This window's independent reading found their current proofs complete
  and their flagged uses accurate; the owner resolves the decisions.
- **Additions pending engine certification (2):** the path-integral definition
  and the meromorphic-section lemma. This window supplies the genuine fresh
  examination and the covering author window; the engine's certifier issues
  their scope/item certification after the successful dispatch, and they take
  no self-review receipt.
- **Step-4 plan-spec mismatches (no plan or manifest edit made).** The current
  batch-11 manifest declares twelve prerequisite pages for the A page, while
  `research/plan-spec.json` still carries the pre-author seven-page list. The
  pre-splice check therefore reports, unchanged from checkpoint 33:
  `undeclared-prereq` for `intersection-pairings-self-intersection-and-euler-classes`,
  `the-gauss-bonnet-theorem-for-riemannian-surfaces`,
  `minkowski-theory-and-number-field-class-groups` and
  `elliptic-functions-and-complex-tori` (A page) and `poisson-summation-sampling-and-lattice-duality`
  (A page and B page), `elliptic-functions-and-complex-tori` (B page); plus 14
  `redundant-prereq` warnings on the A page. The current-manifest check
  (`validate-plan --run`) passes, so the remedy is the Step-4 splice of the
  five actually used prerequisite pages into the plan, or removal of the
  corresponding item dependencies. The unified ledger refresh now succeeds
  (`frontier-dependency-ledger.mjs refresh` → refreshed and deduplicated):
  15 reviewed batches, 0 unreviewed, 225 edges, and batch 11 contributes 37
  declared cross-batch edges (30 verified, 7 removed) with a review row for
  every declared edge. The batch-14 blocker (`invalid review or consumer
  ownership`, the sibling pair
  `quasisymmetry-welding-and-conformal-removability`) recorded in checkpoint 29
  was cleared by that writer during this window. Batch 11's own input carries
  50 rows (43 verified, 7 removed); the extra rows are now same-batch orphaned
  reviews (for example the new meromorphic-section addition supplying the
  Picard definition), which Step 8's serial lead reconciles.
- **Handoff.** All 31 assigned item files, both `library/complex-analysis/`
  pages, the batch-11 manifest, proof-contract, coverage and cross-batch files
  exist and correspond to the current content; the item-level decisions for
  this pair are the six closed repairs above plus the preserved owner
  escalations; the current item, page, contract, coverage, rendering, content
  and dependency-level gates for this pair pass. No unresolved work is
  presented as complete.
