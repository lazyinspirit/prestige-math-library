# Relative side coverage in dimension five: new assembly

Author draft; not independently reviewed. The two frozen files `finite-engulfing-construction.md` and `ordinary-boundaryless-two-end-coverage.md` are undergoing their first independent review and are not modified here. This new consumer supplies the proposed common side-slide construction, with the exact remaining relative combinatorial seam identified below.

## Input and intended output

Let Q be a smooth five-manifold with two signed tame ends, finite-presentation groupΠ, stable end groups identified withπ₁Q, and end neighborhoods whoseπ₂ maps ontoπ₂Q. Its side boundary is X₀×R with X₀ compact, with this product on a smooth collar. All boundary components have the same signed height. The negative/positive end neighborhoods may be shrunk so their side germs are t<b and t>a, respectively. Output should be compactly supported smooth f_t, with f₁(U−)∪U+=Q, whose restriction to every side component is the SAME compactly supported one-dimensional isotopy r_t ofR, independent of its X₀ point. This is exactly what extends over the existing smooth disk tube in the stable owner's pair reduction.

For that exterior, π₁Q=Z^(n−1)×F₂ andπ₂Q=0. Thus finite presentation andπ₂-surjectivity require no free-abelian substitution. The required end-group identification is the bounded-height/pro-homotopy witness in that new reduction, not a normal-bundle uniqueness assertion.

## Put the entire remaining side on the positive side

Choose an initial smooth negative1-neighborhood A₀⊂U− with compact frontier H₀, frontier/end/groupΠ-isomorphisms, and product side cut at a common height b₀<b. The clean-end arcs and2-disks are supported in the interior, retaining that product side cut. This is the relative form of the finite q5 end-cut construction, not a dimension4 Whitney argument.

Choose one increasing compactly supported isotopy r_t:R→R with r₁(b₀)=c>a and r₁(b)>c. Extend its vector field through the known side collar using a normal cutoff; call the compact ambient isotopy h₀,t. Compactness of X₀ and the R-support makes its ambient support compact. Define

V−=h₀,₁(U−), A=h₀,₁(A₀), H=h₀,₁(H₀), W=Q−intA.

Then A⊂V− and the frontier/group isomorphisms are retained. The original side boundary of W has t≥c, hence lies ENTIRELY in U+. Its corner with H also lies in V−, with an open common buffer because c<r₁(b). This is stronger than merely arranging overlap of two end neighborhoods.

Van Kampen and universal-cover homology excision give (W,V−∩W)2-connected exactly as in the new boundaryless proof. The first dual engulfing is performed in the WHOLEQ, so it does not require (W,U+)2-connected.

## Relative primary/dual organization required here

Use a collared triangulated triad (W;H,S), S its remaining original side. Since S⊂U+, choose a product collar N(S)⊂U+; near the compact corner H∩S choose it also inside V−. The needed relative decomposition has a primary part H∪Y, Y locally2-dimensional and meeting S only at H, and a dual part N(S)∪D, D locally2-dimensional away from that side collar. A compact subset disjoint from the dual part lies in a finite regular neighborhood collapsing to H plus a finite part ofY. The relevant part of D outsideU+ is compact because W is bounded on the negative end.

The local combinatorics behind this decomposition are as follows. In a barycentric subdivision classify a vertex low when its simplex lies in H, or is an interior simplex of dimension≤2; classify it high when its simplex belongs to the positive side collar or is an interior simplex of dimension≥3. Every barycentric simplex is the join of its low and high faces, whether or not their vertices alternate in the original chain. Outside H the low-only interior chains have length≤3, and outside the assigned side collar the high-only interior chains have length≤3. Hence both moving parts have dimension≤2. The high simplices incident to S are retained in its already covered collar, instead of being miscounted as a2-polyhedron. The low part meets the remaining side only in the compact corner already in V−.

A fully explicit global compatible refinement must ensure that the assigned high side stars lie in N(S), the moving dual2-polyhedron lies outside a smaller product collar, and the finite smooth engulfing can fix that smaller collar. Collar trimming preserves the pair(Q,U+) homotopy groups because U+ has its product height on that collar. These are concrete relative triangulation/collar operations; the classification alone is not a proof that arbitrary side stars have dimension two.

## Consequence once that relative decomposition is supplied

First engulf D from U+ in Q, fixing the side collar. The already covered N(S) remains covered; hence the complete dual part lies in h(U+). The compact set K=h(Q−U+)∩W avoids that dual part, including S. The finite primary portion Y₀ needed for K meets ∂W only in H⊂V−. Use boundary-fixed finite smooth engulfing in (W,V−∩W) to put Y₀ inside k(V−). Apply the finite collapse fields to a regular neighborhood of H∪Y₀ containing K, with cutoff zero on the already covered collar of its boundary. Both operations extend by the identity over A and the original side. Thus h(Q−U+)⊂k(V−).

Set f=h⁻¹ k h₀,₁. Then f(U−)∪U+=Q, and on the original side f=r₁ because h and k fix it. Concatenating the finite isotopies gives the same r_t on every side component. All this happens in the original five-dimensional ambient manifold; multiplying by auxiliary baseT² afterwards preserves the exact construction.

## Honest remaining seams

This draft closes the boundary-height organization algebraically: moving the NEGATIVE CUT by the common boundary slide places all of W's remaining side insideU+. It does not independently certify the required relative primary/dual triangulation and collar-fixed finite move. That exact finite relative combinatorial lemma must be proved/reviewed, along with the first-review findings on the frozen finite and boundaryless modules. A finite relative-template/least-code argument is additionally needed to expose onlyACω for countable use. No wholeE or marked-torus closure is claimed yet.
