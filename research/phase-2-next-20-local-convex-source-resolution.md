# Local convexity: replacement of exhausted source backing

2026-09-11 Australia/Sydney. Operator review, not independent adjudication.

The original six attempts and web-reading record are preserved in `phase-2-next-20-local-convex-prior-source.json` and the coverage history. No new fetch was attempted. The source is not asserted permanently unavailable. Its deferred Milman theorem stays deferred; every included/inline result is retained.

The operator read all thirteen current scaffold contracts and strategies, the complete published finite-product compactness proof, tube lemma, product-topology Heine–Borel corollary and Euclidean Heine–Borel proof, and the continuous-image compactness and extreme-value clauses used here. This bounded review does not certify their entire transitive closure. The scalar-field vector-space interface is supplied explicitly by the published restriction-of-scalars lemma, whose complete text was read.

## def-locally-convex-topological-vector-space

A real or complex TVS is locally convex if each zero-neighborhood contains a convex zero-neighborhood. Convex combinations use real nonnegative coefficients summing to 1. co(S) is the set of finite such combinations, with co(empty)=empty. Balanced means λC⊂C for |λ|≤1; absolutely convex means convex and balanced. A continuous seminorm has the triangle inequality and p(λx)=|λ|p(x). The continuous dual X′ consists of continuous K-linear maps X→K; separation inequalities use u=Re f, with u=f for real scalars.

Use claim 1 of lem-restriction-of-scalars explicitly to regard the scalar field K as a K-vector space before defining K-linear maps X→K. Define these notions in a TVS, extending rather than citing the norm-only definitions as general contracts. The finite-combination description of co(S) contains S, is convex by concatenating the weighted lists, and is contained in every convex superset by finite induction. Show the continuous dual is a vector space by pointwise operations and continuity of scalar addition/multiplication. A convex zero-neighborhood C has convex open interior containing 0: for two interior points and 0<t<1, use the open set (1-t)int(C)+t int(C)⊂C; thus this definition agrees with an open convex base. No HB is needed.

Declared suppliers: `def-topological-vector-space-for-local-convexity`, `lem-topological-vector-space-translation-scaling-and-absorption`, `def-algebraic-dual-and-linear-functional`, `def-sublinear-functional`, `lem-restriction-of-scalars`.

## lem-topological-vector-space-translation-scaling-and-absorption

In any real or complex TVS, translations and multiplication by a nonzero scalar are homeomorphisms. Each zero-neighborhood U absorbs each x: x∈tU for every sufficiently large positive real t. Every zero-neighborhood contains a symmetric open W with W+W contained in U. A scalar-linear functional bounded in modulus on a zero-neighborhood is continuous.

Insert constant and identity maps into the jointly continuous structure maps; the inverse translations/dilations use -a and 1/λ. Continuity of s↦sx at 0 gives |s|<δ⇒sx∈U; use s=1/t for t>1/δ. From addition at (0,0) take open U1,U2 with U1+U2⊂U and set W=U1∩U2∩(-U1)∩(-U2). If |f|≤M on a zero-neighborhood, use ε/(M+1) times that neighborhood to prove continuity at 0; translation gives it everywhere. Product universal property is used only in choice-free clauses 1–2, never arbitrary-factor surjectivity.

Declared suppliers: `def-topological-vector-space-for-local-convexity`, `thm-product-universal-property`, `lem-continuity-is-local-and-pastes`, `lem-vector-space-elementary-consequences`.

## lem-locally-convex-closures-and-finite-compact-convex-hulls

In a real or complex TVS, the closure and interior of a convex set are convex; the closure of a balanced set is balanced. For finitely many nonempty compact convex sets K1,…,Kn, co(K1∪…∪Kn) is compact. It equals {Σ t_j x_j : t_j≥0, Σt_j=1, x_j∈K_j}. If X is Hausdorff this hull is closed. In particular finite point hulls are compact. Empty K_j may be removed; the hull of an empty family is empty and compact.

For x,y in closure C, pull any neighborhood of (1-t)x+ty back through the continuous two-variable affine map; a product neighborhood contains a pair from C×C, so every such neighborhood meets C. Endpoints are immediate. For interior C use (1-t)int(C)+t int(C) for 0<t<1, which is open by translations/dilations; if nonempty, every x∈C is in closure int(C) since (1-s)x+s y∈int(C) for fixed interior y and s>0 and tends to x. For balance, a nonzero dilation commutes with closure as a homeomorphism; λ=0 is handled by 0∈closure C for nonempty balanced C. The simplex Δ={t∈R^n:t_j≥0,Σt_j=1} is closed and bounded, hence compact by the product-topology Heine–Borel corollary. The continuous map Δ×∏K_j→X, (t,x)↦Σt_j x_j, has compact image by the finite-product and general topological image results. Group any finite convex combination by its K_j labels; divide each positive total weight and use convexity within K_j. At zero weights fill the unused coordinate using only finite choice. This proves image equals hull, not merely one inclusion. Hausdorff compact-closed gives the last assertion. This never asserts that the hull of an arbitrary compact set is compact. No infinite product compactness or AC.

Declared suppliers: `def-locally-convex-topological-vector-space`, `lem-topological-vector-space-translation-scaling-and-absorption`, `thm-closure-characterisation-top`, `thm-finite-products-of-compact-spaces`, `cor-heine-borel-in-the-product-topology`, `thm-compactness-under-continuous-maps`, `thm-compact-subset-of-a-hausdorff-space-is-closed`, `lem-finite-choice`.

## cex-convex-maximum-set-need-not-be-a-face

The continuous convex function q(t)=t² on compact convex [-1,1] has maximum set {-1,1}, which is not convex and hence is not a face. Here a face means a convex subset F of K such that an interior point of a segment in K belongs to F only if both endpoints belong to F. The maximum set nevertheless has that endpoint property (it is extremal).

Continuity follows directly from |s²-t²|=|s-t||s+t|≤2|s-t| on the interval. Convexity follows from (1-r)s²+r t²-((1-r)s+rt)²=r(1-r)(s-t)²≥0 for r∈[0,1]. q≤1 with equality precisely at ±1; their midpoint 0 has q=0, proving nonconvexity and failure of being a face. If a strict convex combination lies at either endpoint of [-1,1], both endpoints of that segment equal it; hence {-1,1} has the extremal endpoint property. Define face here for this counterexample; do not import later Krein–Milman/Bauer definitions or use this B item as an A-page supplier.

Declared suppliers: `def-locally-convex-topological-vector-space`, `cor-heine-borel-in-the-product-topology`.

## Scalar-interface follow-through

The TVS definition now names the published real and complex metrics and the
metric topology, with its open-set algebra supplying the topology axioms.
The translation/scaling lemma also proves that scalar addition and multiplication
are jointly continuous, using modulus triangle and multiplication laws:
`|st-ab| ≤ (|b|+1)|s-a| + |a||t-b|` when `|t-b|<1`.
Choose each error below `min(1, ε/(2(|a|+|b|+1)))`.
Addition uses errors below `ε/2`. These are direct product-neighborhood
arguments, so no sequential continuity criterion is needed. The operator
read the complete published complex field, modulus-law, complex metric and
metric-open-set-algebra items. All new supplier homes already lie in the
existing canonical prerequisite closure; no page prerequisite was added.
Coverage alternative records include these strengthened strategies and deps.

## Gate status

These complete alternative arguments satisfy the source-drop evidence contract. The original batch remains escalated for the remaining dependency/readiness audit; this receipt clears only this source backing requirement. Step 3 must independently judge the authored arguments. No additional pair or published-item edit is made.
