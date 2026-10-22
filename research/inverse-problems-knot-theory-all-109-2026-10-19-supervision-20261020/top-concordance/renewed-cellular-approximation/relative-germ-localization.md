# Relative localization for the completed-end CE map

This is NEW authoring for the actual smooth-end application. It does not assert that a missing cellular approximation theorem has been proved. The exact relative localization below is complete; the source-proof operations still needed for its absolute approximation input are identified separately.

## Exact completed-end input and required conclusion

The completion owner supplies an actual smooth d-manifold P_infinity and a proper onto cell-like map f:P_infinity→B, d≥5, where B is an actual metrizable TOP d-manifold. The restriction on the original manifold boundary is an actual homeomorphism; this matters when d=5. On f^{-1}(A), for a specified open A containing the protected end/K germs, f is an actual homeomorphism and transfers the given smooth structure there. The needed output is ONE homeomorphism g:P_infinity→B equal to f on a smaller open germ and as close as prescribed near the compact zero cylinder. No parametrized family or CE isotopy extension is requested.

The completion owner has expressly supplied shape contractions of the fibers, not nested ball neighborhoods or a finite shrinking presentation. No shrinking theorem follows merely by renaming that CE assertion as cellularity.

## Completed exact relative localization

Suppose the nonparametric absolute approximation assertion holds for restrictions of f to open subsets of its target: for every positive continuous source error, such a restriction can be approximated by a homeomorphism onto that open subset. If boundary is present and d=5, impose the actual boundary-homeomorphism condition on each restriction. Then the required relative conclusion follows as follows.

Choose a closed buffer C⊂A containing the smaller open protected germ G, with G⊂int C. Normality gives such a buffer for any smaller germ whose closure is contained in A. Neither C nor its frontier has to be a manifold or a subcomplex. Since f is a homeomorphism over A, it is a homeomorphism on f^{-1}(C).

Put B0=B−C and P0=P_infinity−f^{-1}(C). These are OPEN submanifolds of the original manifolds; removing C does not create a new manifold boundary. The restriction f0:P0→B0 is proper and CE: compact subsets of B0 are still compact in B, and the fibers are the unchanged fibers. Its manifold-boundary restriction is the restriction of the original boundary homeomorphism, hence is again a homeomorphism. This avoids imposing any false smoothness or local flatness condition on frontier C.

Fix a compatible proper metric rho on B and a requested positive continuous target error a. Such a metric exists for this locally compact second-countable manifold. On B0 choose

    b(y)=min{1/2, a(y)/2, dist_rho(y,C)/3}.

If C is empty omit its distance term. Apply the absolute assertion to f0 with source error b∘f0 to obtain a homeomorphism g0:P0→B0. Define g=g0 on P0 and g=f on f^{-1}(C). The images partition B0 and C, so g is bijective.

For x tending to x0∈f^{-1}(C), the estimate rho(g(x),f(x))≤dist_rho(f(x),C)/3 tends to zero. Continuity of f therefore proves continuity of g at every such point. Continuity elsewhere is the continuity of g0. Also rho(g(x),f(x))≤1/2 globally. If D⊂B is compact, its closed 1-neighborhood is compact for the proper metric; g^{-1}(D) is a closed subset of its compact inverse image under f. Thus g is proper. A proper continuous bijection between these locally compact Hausdorff manifolds is a homeomorphism. It equals f on f^{-1}(C), in particular on the ACTUAL OPEN germ f^{-1}(G). Its error is below a. No limit, inverse-limit or homeomorphism-group local-contractibility argument is used in this localization.

Transport the actual smooth atlas of P_infinity by g. Its agreement with f on the open germ implies exact agreement with the existing smooth atlas there, rather than only a concordance of smooth structures. This is the precise atlas-transfer consequence; it supplies no approximation input by itself.

## Actual primary proof read and dimensional restrictions

The FULL24-page paper L.C.Siebenmann, *Approximating cellular maps by homeomorphisms*, Topology11(1972),271–294, has been read from the acquired primary scan and its sequential durable OCR. Source URL: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/siebappr.pdf . The source PDF is in the adjacent `renewed-relative-smoothing/sources/`; page text is retained in `primary-pages/p01.txt` through `p24.txt`. Initial TheoremA was also visually read from the actual scan. No bibliographic abstract or unread extraction is counted as proof reading.

TheoremA is an approximation theorem for proper CE maps of METRIC TOP manifolds, not the CW cellular approximation theorem. In dimension5 it requires f:boundary P→boundary B to be a HOMEOMORPHISM. Its weaker general assumption of a CE boundary map is insufficient in dimension5. In dimension≥6 a CE boundary restriction is permitted. Our actual completion input earns the stronger condition and restrictions retain it.

The source's nonparametric local operation is MainTheorem2.1, proved from MainLemma2.2 by a two-step inversion around the core and infinity. The local alteration is supported away from the prescribed handle boundary and agrees with the original map outside a finite normal radius. This support is what permits chartwise approximation away from C above. The MainLemma uses punctured-torus pullback, an end compactification, a torus-homeomorphism step, universal covering and compression, and relative engulfing. None is ordinary CW cellular approximation.

The primary proof does NOT make those substantial operations elementary by naming them. The following is the presently isolated geometric route, without topological surgery or assuming B already smooth:

* TOP5 engulfing/recognition and relative expansion: AppendixI printed288–289 and MainLemma construction of phi printed282.
* Invertibility of the specific compact TOP5 h-cobordisms with frontiers B^{k−1}×T^{5−k}, k=1,...,4, preserving their side products: AppendixII printed290–291. This is two overlapping closed collars, not an assumed product h-cobordism.
* Whole-compact-manifold small-homeomorphism isotopies for the wrapped B^{k−1}×T^{6−k} of dimension5, and for boundary adjustment B^{k−1}×T^{5−k} of dimension4, with the displayed product-side germ: printed290–292. A deformation theorem only near a finite2-complex in a TOP4 manifold does not automatically establish these statements.
* The zero-handle family step, unless replaced by an actual proved seeded-handle construction: printed292–293. It asserts that the punctured-torus fiber-product family, with total dimension6 and fiber dimension5, is a bundle over [0,1], using its topological submersion and proper CE control. The source imports an engulfing-based bundle theorem. A global handle decomposition of the UNSMOOTHED target B cannot be assumed to bypass this step.

These are new proof prerequisites, being coordinated with their owners. The smooth q6/q7 end-splitting supplier does not imply TOP5 engulfing or this TOP family bundle assertion. Conversely, assuming a smooth structure on the original B to obtain them would be circular in the present application. Until the actual required geometric operations are supplied, this note claims the complete relative localization and atlas-transfer reduction only, not full CE approximation or W5 smoothing.

## Retaining a homeomorphic seed after relative localization

The geometric alternative in the source's AppendixII assumes a homeomorphic open seed in every target component. Removing C does not lose that hypothesis. Arrange that C meets every connected component of B (include a small closed buffer in A in any component where necessary). Every component U of B−C meets A−C. Indeed components of this open manifold are open, and frontier_B(U)⊂C. If U missed A, any point of frontier_B(U), which lies in C⊂A, would have an open neighborhood in A meeting U, a contradiction. Thus U has empty frontier and is clopen in its component of B; since that component meets C, this too is impossible. Hence U meets A−C, an open subset where f0 is a homeomorphism. This justifies using the source's seeded geometric alternative on the open complements. It does not assert that a global relative handle decomposition of an unsmoothed TOP target has thereby been constructed.
