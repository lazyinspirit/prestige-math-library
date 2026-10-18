---
id: lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor
kind: lemma
title: "Spin structures exist exactly when w2 vanishes and then form an H1 torsor"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: spin-geometry-dirac-and-index-theory
dependency_level: 10
deps:
  - def-spin-lift-of-oriented-orthonormal-frame-bundle
  - cor-euclidean-spin-is-universal-cover
  - def-stiefel-whitney-classes-from-the-projective-bundle-relation
  - thm-naturality-of-stiefel-whitney-classes
  - thm-whitney-sum-formula-for-stiefel-whitney-classes
  - thm-mod-two-euler-class-is-the-top-stiefel-whitney-class
  - def-euler-class-by-zero-section-pullback-of-the-thom-class
  - thm-naturality-orientation-sign-and-whitney-product-for-euler-classes
  - def-chern-classes-from-the-projective-bundle-relation
  - thm-first-chern-class-classifies-complex-line-bundles
  - thm-oriented-real-vector-bundles-are-classified-by-bso
  - prop-orientation-is-equivalent-to-an-so-n-reduction
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-absolute-hurewicz-theorem
  - thm-universal-coefficient-theorem-for-cohomology-over-a-pid
  - thm-existence-of-geodesically-convex-neighborhoods
  - lem-good-cover-nerve-computes-singular-cohomology
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - def-axiom-of-choice
  - thm-topological-manifolds-are-metrizable-and-paracompact
  - def-compactly-generated-conventions-for-based-homotopy
  - def-oriented-grassmannian-and-tautological-oriented-bundle
  - lem-oriented-grassmannian-has-two-lifted-schubert-cells
  - def-stiefel-space-grassmannian-and-tautological-bundle
  - thm-stable-stiefel-space-is-contractible
  - prop-compact-spaces-are-paracompact
  - thm-subordinate-partitions-of-unity-exist
  - thm-numerable-fiber-bundles-are-hurewicz-fibrations
  - thm-fundamental-group-of-the-circle
  - lem-cohomology-ring-of-infinite-complex-projective-space
  - thm-mod-two-reduction-of-chern-classes
  - thm-real-pin-spin-topological-double-covers
  - def-real-clifford-group-and-normalized-pin-spin
  - def-oriented-real-vector-bundle-and-oriented-frame-bundle
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
axiom_strength: "ZF + full AC"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Richard B. Melrose, Analysis, Loops and Spin (2024 lecture notes)"
      url: https://math.mit.edu/~rbm/Loops2024/AnLoSp.pdf
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer Index Theorem, revision 15 November 2013"
      url: https://www3.nd.edu/~lnicolae/ind-thm.pdf
    - title: "Konstantin Wernli, Lecture Notes on Spin Geometry (2019)"
      url: https://arxiv.org/pdf/1911.09766
---

## Statement

Assume the full Axiom of Choice. Let $E\to M$ be an oriented Euclidean smooth real vector bundle of rank $n\ge1$ over a Hausdorff second-countable smooth manifold. Then $E$ admits a Spin lift of [[def-spin-lift-of-oriented-orthonormal-frame-bundle]] if and only if $w_2(E)=0\in H^2(M;\mathbb F_2)$. When nonempty, isomorphism classes of lifts form a torsor under $H^1(M;\mathbb F_2)$: twisting a lift by a principal $\{\pm1\}$-bundle gives a free and transitive action. No distinguished lift is asserted. Rank zero is excluded.

## Facts & Assumptions

**Given:** Full AC; an oriented Euclidean rank-$n$ bundle $E$ with $n\ge1$; and the associated oriented orthonormal frame bundle.

[F1] $\operatorname{Spin}_{\rm full}(n)\to SO(n)$ is a central two-sheeted cover with kernel $\{1,-1\}$ ([[thm-real-pin-spin-topological-double-covers]], [[def-real-clifford-group-and-normalized-pin-spin]]).

[F2] For $n\ge3$, this Euclidean Spin group is connected and simply connected and its map to $SO(n)$ is the universal cover ([[cor-euclidean-spin-is-universal-cover]]). Its proof uses AC through the Hurewicz-fibration interface recorded in that item.

[F3] The Stiefel–Whitney classes are natural, satisfy the Whitney product formula, and vanish above rank ([[thm-naturality-of-stiefel-whitney-classes]], [[thm-whitney-sum-formula-for-stiefel-whitney-classes]], [[def-stiefel-whitney-classes-from-the-projective-bundle-relation]]).

[F4] For a complex bundle regarded as real, $w_{2i}(E_{\mathbb R})=\rho_2c_i(E)$ and odd Stiefel–Whitney classes vanish ([[thm-mod-two-reduction-of-chern-classes]]). The tautological complex line on $\mathbb{CP}^\infty$ has first Chern class a generator of $H^2(\mathbb{CP}^\infty;\mathbb Z)$ ([[lem-cohomology-ring-of-infinite-complex-projective-space]], [[thm-first-chern-class-classifies-complex-line-bundles]]).

[F5] The oriented Grassmannian model $BSO(n)=\operatorname{Gr}_n^+(\mathbb R^\infty)$ classifies numerable oriented vector bundles ([[thm-oriented-real-vector-bundles-are-classified-by-bso]], [[def-oriented-grassmannian-and-tautological-oriented-bundle]]); with a supplied metric, orientation corresponds to the $SO(n)$ reduction ([[prop-orientation-is-equivalent-to-an-so-n-reduction]]). Given an orientation-preserving bundle isomorphism and two metrics $g_0,g_1$ on its target, write $g_1(u,v)=g_0(Au,v)$ for the positive $g_0$-self-adjoint bundle endomorphism $A$. The smooth positive square root $A^{-1/2}$ sends $g_0$-orthonormal frames to $g_1$-orthonormal frames and has positive determinant, so the isomorphism induces an isomorphism of the corresponding $SO(n)$ frame bundles. The model has the CW weak topology from its lifted Schubert cells ([[lem-oriented-grassmannian-has-two-lifted-schubert-cells]]). Its tautological oriented frame bundle is the stable Stiefel principal $SO(n)$-bundle, with contractible total space ([[def-stiefel-space-grassmannian-and-tautological-bundle]], [[thm-stable-stiefel-space-is-contractible]]). For any lifting problem over a compact disk cylinder, the pullback bundle is numerable: the compact Hausdorff cylinder is paracompact ([[prop-compact-spaces-are-paracompact]]) and its local trivializing cover has a subordinate partition of unity ([[thm-subordinate-partitions-of-unity-exist]]); hence the pullback satisfies the Hurewicz lifting theorem for numerable bundles ([[thm-numerable-fiber-bundles-are-hurewicz-fibrations]]). The homotopy long exact sequence, first Hurewicz theorem, and cohomological universal coefficient theorem over a PID are supplied by [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]], [[thm-absolute-hurewicz-theorem]], and [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]].

[F6] Every point has a strongly geodesically convex neighborhood inside any prescribed frame-trivializing open set, and nonempty finite intersections remain strongly geodesically convex ([[thm-existence-of-geodesically-convex-neighborhoods]]). The frame bundle's local trivializations form an open cover by definition ([[def-oriented-real-vector-bundle-and-oriented-frame-bundle]]).

[F7] For a cover by strongly geodesically convex open sets, the nerve realizes the homotopy type of $M$; consequently the nerve's simplicial cohomology is singular cohomology ([[lem-good-cover-nerve-computes-singular-cohomology]]).

[F8] The chosen convex cover admits a locally finite smooth partition of unity subordinate to it; because it refines the frame-trivializing cover, this partition numerates $P_{SO}(E)$ ([[thm-smooth-partitions-of-unity-exist-on-manifolds]]).

[F9] The base $M$ is paracompact by the topological-manifold theorem. It is locally compact Hausdorff by its manifold charts. If $A\subseteq M$ is not closed, choose $x\in\overline A\setminus A$ and a compact neighborhood $K$ of $x$. Every relative neighborhood of $x$ in $K$ meets $A\cap K$, so $x\in\overline{A\cap K}^{K}\setminus(A\cap K)$; hence $A$ is not $k$-closed and $M$ is compactly generated. A compact Hausdorff test image is compact and therefore closed in $M$, so $M$ is weak Hausdorff as well. Thus it is CGWH under the repository convention ([[thm-topological-manifolds-are-metrizable-and-paracompact]], [[def-compactly-generated-conventions-for-based-homotopy]]).

[A1] Full AC is used through [F2], [F4], [F5], and [F8] to obtain the lifting, classifying/CW, and characteristic-class interfaces; the finite sign-cocycle and torsor calculations below use no further choice principle ([[def-axiom-of-choice]]).

## Proof

**Given:** The data in the Statement and full AC. Let $\mathcal T$ be the set of pairs $(U,x)$ where $U$ is a frame-trivializing open set and $x\in U$. For every such pair choose, using full AC, a strongly geodesically convex open set $U_{(U,x)}$ with $x\in U_{(U,x)}\subseteq U$, as supplied by [F6]. This family covers $M$ because every point belongs to a frame-trivializing open set and its chosen convex neighborhood. It is subordinate to the trivializing cover, and all its nonempty finite intersections are contractible by [F6]. Well-order the resulting index set using full AC and denote the ordered cover by $\{U_i\}$. Write its transition functions as $g_{ij}:U_i\cap U_j\to SO(n)$, with $g_{ij}g_{jk}g_{ki}=1$.

1.1 Each nonempty finite intersection of the good cover is contractible by [F6], so the covering in [F1] lifts each $g_{ij}$ to a continuous $\widetilde g_{ij}:U_i\cap U_j\to\operatorname{Spin}_{\rm full}(n)$. Full AC supplies this family of lifts and signs. Choose $\widetilde g_{ji}=\widetilde g_{ij}^{-1}$ and $\widetilde g_{ii}=1$. Since $\rho(\widetilde g_{ij}\widetilde g_{jk}\widetilde g_{ki})=1$, the triple product is a locally constant central sign $\epsilon_{ijk}\in\{\pm1\}$. [A1, F1, F6, construct]

2.1 Associativity and centrality give $\epsilon_{ijk}\epsilon_{ikl}=\epsilon_{jkl}\epsilon_{ijl}$ on every nonempty quadruple intersection: substitute the four chosen lifts, cancel each shared lift with its inverse, and commute only the resulting central signs. Thus $\epsilon$ is a degree-two cocycle on the cover nerve. If the lifts are changed by signs $a_{ij}=a_{ji}^{-1}$, the triple product changes by the Čech coboundary $\delta a$; hence its cohomology class $\eta(E)$ is independent of these choices. By [F7], the cover nerve computes singular cohomology of $M$, so $\eta(E)$ is a well-defined element of $H^2(M;\mathbb F_2)$, natural under pullback and refinement. [F1, F7, step 1.1, algebra]

3.1 If $\eta(E)=0$, choose signs $a_{ij}$ with $\epsilon=\delta a$ and replace $\widetilde g_{ij}$ by $a_{ij}\widetilde g_{ij}$, using additive $\mathbb F_2$ notation for the signs. The new triple products are $1$, so these transitions glue a principal Spin bundle and the maps $\rho(\widetilde g_{ij})=g_{ij}$ glue its equivariant map to $P_{SO}(E)$. Conversely, transitions of any Spin lift have triple product $1$, so relative to the chosen lifts their signs make $\epsilon$ a coboundary. Thus a lift exists exactly when $\eta(E)=0$. [F1, step 2.1, construct]

3.2 For $n\ge3$, [F5] gives a CW model $BSO(n)=\operatorname{Gr}_n^+(\mathbb R^\infty)$ and its contractible stable Stiefel total space. Its tautological frame map is locally trivial: graph charts give continuous oriented orthonormal frames by Gram–Schmidt, with transition maps in $SO(n)$. This principal bundle is a Serre fibration: for each disk lifting problem, pull back along its homotopy over $D^k\times[0,1]$; this compact Hausdorff parameter space is paracompact, so the pullback is numerable by [F5] and is a Hurewicz fibration. Its long exact sequence, contractibility of the total space, connectedness of $SO(n)$, and the universal double cover [F2] give $\pi_1(BSO(n))=0$ and $\pi_2(BSO(n))\cong\pi_1(SO(n))\cong\mathbb Z/2$. The stable Stiefel space is nonempty and contractible and maps onto $BSO(n)$, so $BSO(n)$ is path-connected. The first Hurewicz theorem and UCT [F5] therefore give $H^2(BSO(n);\mathbb F_2)\cong\operatorname{Hom}(\mathbb Z/2,\mathbb F_2)\cong\mathbb F_2$. The 1-skeleton is a graph. Its bundle is trivial over each closed edge, since the interval is paracompact and contractible and the oriented-bundle classifier in [F5] classifies it by a map $[0,1]\to BSO(n)$, necessarily homotopic to a constant map. Choose a point in each vertex fiber and, using full AC, an edge section for each edge. Because $SO(n)$ is path-connected, modify each edge section by a group path so that its endpoints are the chosen vertex points. These sections glue continuously by the weak topology on the 1-skeleton, so the universal frame bundle is trivial there. For each oriented 2-cell, trivialize the pulled-back bundle over its characteristic disk and record whether the boundary frame loop in $SO(n)$ lifts to a closed loop in Spin. This defines a cellular obstruction 2-cochain. For a 3-cell, the bundle pulled back to its characteristic disk is trivial and therefore has a Spin lift; restricting that lift to the boundary sphere makes the obstruction evaluate to zero on the cellular attaching 2-cycle. By the cellular coboundary formula, this mod-two sum of 2-cell obstruction values is the coboundary evaluated on that 3-cell, so the obstruction cochain is a cocycle. Changing the chosen lift on a 1-cell changes its boundary signs by the cellular coboundary of that 1-cochain. Changing local frame sections by $h_i:U_i\to SO(n)$ has the same effect: each $h_i$ lifts on the contractible $U_i$, and the lifted transition defects change by the coboundary of those local signs. Thus the class is independent of the trivializations. On each 2-simplex of the good-cover nerve, the boundary loop is the triple transition product from step 1.1, so its endpoint sign is exactly $\epsilon_{ijk}$. Naturality under pullback and the nerve comparison [F7] identify the pullback of this universal obstruction class with $\eta(E)$. [A1, F1, F2, F5, F7, F8, step 1.1, step 2.1, algebra]

4.1 If a lift exists, any other lifted cocycle differs from it by a sign-valued degree-one cochain $b_{ij}$. Both are cocycles, so $\delta b=0$. An isomorphism over the fixed $SO$ bundle is given locally by signs $b_i$; it changes the difference cocycle by $\delta(b_i)$. Therefore isomorphism classes of lifts are a free transitive $H^1(M;\mathbb F_2)$-set. The action is twisting by the associated principal $\{\pm1\}$-bundle; freeness follows because a twisting cocycle that is a coboundary is removed by that local sign isomorphism, and transitivity follows from the cocycle difference. [step 1.1, step 3.1, algebra]

4.2 For $n\ge3$, the clutching loop that rotates an oriented two-plane through $2\pi$ and is the identity on its orthogonal complement represents the generator of $\pi_1SO(n)$, hence corresponds under the fibration boundary isomorphism in step 3.2 to a generator of $\pi_2BSO(n)$. Its Spin lift is $t\mapsto\cos(\pi t)+e_1e_2\sin(\pi t)$, which starts at $1$ and ends at $-1$, so the universal obstruction evaluates to $1$. The associated oriented plane bundle over $S^2$ is the underlying real Hopf line, whose $c_1$ is a generator; [F4] makes its $w_2$ the nonzero reduction. Adding a trivial $(n-2)$-plane preserves $w_2$ by [F3]. Hence $w_2$ and $\eta$ are both the unique nonzero element of $H^2(BSO(n);\mathbb F_2)$ computed in step 3.2, and are equal. [A1, F2, F3, F4, step 3.2]

4.3 For $n=2$, $SO(2)\cong S^1$ and direct Clifford multiplication gives $\operatorname{Spin}(2)\cong S^1$ with $z\mapsto z^2$. Thus $BSO(2)\simeq\mathbb{CP}^\infty$, $H^2(BSO(2);\mathbb F_2)=\mathbb F_2$, and the degree-one clutching loop again fails to lift closed. Its universal oriented plane is the realification of the Hopf line; [F4] gives $w_2=\rho_2c_1$, which evaluates to $1$ on that generator. The two classes are again equal. For $n=1$, the oriented orthonormal frame bundle has structure group $SO(1)=1$ and $w_2(E)=0$ by rank; its lifts are principal $\operatorname{Spin}(1)=\{\pm1\}$ bundles, whose sign transitions modulo sign-valued vertex changes are exactly $H^1(M;\mathbb F_2)$. [F1, F3, F4]

5.1 By [F8], $P_{SO}(E)$ is numerable; [F9] verifies the paracompact Hausdorff CGWH base hypotheses of the oriented-bundle classifier in [F5], which supplies an oriented bundle isomorphism from $E$ to the pullback of the tautological bundle. The positive square-root metric correction in [F5] identifies their $SO(n)$ frame bundles, giving a classifying map $f:M\to BSO(n)$ for the actual $P_{SO}(E)$. Naturality of the local lifting obstruction and of $w_2$, together with the nerve comparison [F7], pulls the universal equality $\eta=w_2$ back to $\eta(E)=w_2(E)$. Step 3.1 proves existence iff this class vanishes, and step 4.1 proves the torsor statement. The empty-base case has one empty lift and $H^1=0$; rank zero lies outside this item's stated rank range; no claim that the repo's Spin(0) convention lacks a sign-bundle torsor is made. The only nonempty choices are the local lifts in step 1.1 and the cochain primitive in step 3.1, both covered by full AC [A1]. [A1, F3, F5, F7, F8, F9, step 1.1, step 3.1, step 4.1, step 4.2, step 4.3] ∎

