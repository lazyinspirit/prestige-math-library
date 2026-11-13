---
title: Deligne asphericity used for the relative complement
status: published
research_item: thm-finite-simplicial-asphericity-artin-tits-normalisers
dependency_level: 19
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: PDF p. 27, proof of Corollary 6.14
      reading_limits: Read the frozen original PDF p. 27, Corollary 6.14 and its
        proof, and checked the extracted text, for attribution. The article is
        not used as proof of its own assertion. The local proof uses the
        independent asphericity supplier and the precisely imported
        triangulation input below.
    - title: Jacob Lurie, Whitehead Triangulations (Lecture 3)
      url: https://www.math.ias.edu/~lurie/937notes/937Lecture3.pdf
      locator: PDF p. 1, Definition 1 and Whitehead assertion (1)
      statement: "Every paracompact Hausdorff smooth manifold admits a smooth
        triangulation: a homeomorphism from a triangulated polyhedron to the
        manifold, smooth with injective differential on each simplex."
      hypotheses: A smooth manifold in the paracompact Hausdorff convention of Lecture
        2, p. 1, Definition 1; no compactness or positive-dimension hypothesis
        is imposed in assertion (1). Only boundaryless manifolds are used here.
      reading_limits: Read PDF-extracted p. 1, Definition 1 and assertions (1)-(3),
        and Lecture 2, p. 1, Definition 1
        (https://www.math.ias.edu/~lurie/937notes/937Lecture2.pdf) for the
        manifold convention. Import existence only; no reconstruction of
        Whitehead's theorem. The locally finite form used below is supplied
        separately by Fernando–Ghiloni.
    - title: Jacob Lurie, Existence of Triangulations (Lecture 4)
      url: https://www.math.ias.edu/~lurie/937notes/937Lecture4.pdf
      locator: PDF p. 1, paragraph before Definition 3; p. 2, Variant 8
      statement: The existence of Whitehead compatible triangulations extends to
        noncompact smooth manifolds; paracompactness supplies a locally finite
        cover for the triangulation construction.
      hypotheses: A paracompact Hausdorff smooth manifold; compactness is not required
        in Variant 8. The application here is a boundaryless open subset of a
        finite-dimensional Euclidean space.
      reading_limits: Read the PDF-extracted existence paragraph on p. 1 and Variant 8
        on p. 2. This supports noncompact existence and states local finiteness
        of the construction cover; it is not used as an explicit statement of
        local finiteness of the resulting simplices. No reconstruction of the
        triangulation construction is claimed.
    - title: José F. Fernando and Riccardo Ghiloni, Smooth Approximations in PL
        Geometry, American Journal of Mathematics 144 (2022), 967–1007
      url: https://josefer-ucm.github.io/articulos/ajm.pdf
      locator: §3.C, proof of Theorem 1.6, Step I, printed p. 993 (PDF p. 27), first
        two paragraphs; topology convention in §1.A, printed p. 969 (PDF p. 3)
      statement: Every nonempty open subset U of a finite-dimensional real Euclidean
        space has a homeomorphism from the realization of a locally finite
        geometric simplicial complex in some Euclidean space. The homeomorphism
        restricts to a smooth diffeomorphism onto a smooth submanifold on each
        open simplex.
      hypotheses: U is a nonempty Euclidean open set with its subspace topology.
        Compactness is not assumed. Only the homeomorphism and local finiteness
        are used here.
      reading_limits: Read the extracted paragraphs on p. 993 after reduction to an
        open subset, and the Euclidean topology convention on p. 969. Import
        this stated Cairns–Whitehead consequence only; the approximation theorem
        and cited Hudson result were not reconstructed or read.
---

PDF p. 27: ` Corollary 6.14, proof `

## Prerequisites

- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers)
- [thm-spherical-deligne-topology-artin-tits-normalisers](item-thm-spherical-deligne-topology-artin-tits-normalisers)
- [thm-deligne-simplicial-input-artin-tits-prerequisites](item-thm-deligne-simplicial-input-artin-tits-prerequisites)
- [math:def-eilenberg-maclane-space](https://alphabetamath.cc/item/def-eilenberg-maclane-space)
- [math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)
- [math:def-complexification-of-a-real-vector-space](https://alphabetamath.cc/item/def-complexification-of-a-real-vector-space)
- [math:prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure](https://alphabetamath.cc/item/prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure)
- [math:def-paracompact-space](https://alphabetamath.cc/item/def-paracompact-space)
- [math:def-cw-complex-with-closure-finiteness-and-weak-topology](https://alphabetamath.cc/item/def-cw-complex-with-closure-finiteness-and-weak-topology)
- [math:def-based-loops-and-fundamental-group](https://alphabetamath.cc/item/def-based-loops-and-fundamental-group)
- [math:thm-fundamental-group-laws](https://alphabetamath.cc/item/thm-fundamental-group-laws)
- [math:def-higher-homotopy-group-by-based-cubes](https://alphabetamath.cc/item/def-higher-homotopy-group-by-based-cubes)
- [math:def-geometric-simplex-spanned-by-affinely-independent-vertices](https://alphabetamath.cc/item/def-geometric-simplex-spanned-by-affinely-independent-vertices)
- [math:def-cell-attachment-by-a-characteristic-map](https://alphabetamath.cc/item/def-cell-attachment-by-a-characteristic-map)
- [math:def-path-connected](https://alphabetamath.cc/item/def-path-connected)
- [math:thm-path-connected-implies-connected](https://alphabetamath.cc/item/thm-path-connected-implies-connected)
- [math:lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces](https://alphabetamath.cc/item/lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces)
- [` Jacob Lurie, Whitehead Triangulations (Lecture 3) · PDF p. 1, Definition 1 and Whitehead assertion (1) `](https://www.math.ias.edu/~lurie/937notes/937Lecture3.pdf)
- [` Jacob Lurie, Existence of Triangulations (Lecture 4) · PDF p. 1, paragraph before Definition 3; p. 2, Variant 8 `](https://www.math.ias.edu/~lurie/937notes/937Lecture4.pdf)
- [` José F. Fernando and Riccardo Ghiloni, Smooth Approximations in PL Geometry, American Journal of Mathematics 144 (2022), 967–1007 · §3.C, proof of Theorem 1.6, Step I, printed p. 993 (PDF p. 27), first two paragraphs; topology convention in §1.A, printed p. 969 (PDF p. 3) `](https://josefer-ucm.github.io/articulos/ajm.pdf)


## Statement

Let $V$ be a finite-dimensional real vector space and let $\mathcal H$ be a finite collection of linear hyperplanes. Suppose every chamber, meaning every connected component of $V\setminus\bigcup_{H\in\mathcal H}H$, is an open simplicial cone: it is the image of an open positive orthant under a linear isomorphism onto $V$. Write $V_{\mathbb C}=V\otimes_{\mathbb R}\mathbb C$, with complex scalar multiplication $z\cdot(v\otimes w)=v\otimes zw$ and its finite-dimensional Euclidean topology. Then the complexified complement $M=V_{\mathbb C}\setminus\bigcup_{H\in\mathcal H}(H\otimes_{\mathbb R}\mathbb C)$ is nonempty and path-connected, admits a CW structure, and has vanishing homotopy groups in all degrees at least two. Choose a vertex $b$ of such a CW structure and put $\pi=\pi_1(M,b)$. With the identity identification of this fundamental group with $\pi$, the based space $(M,b)$ is a $K(\pi,1)$. Here a $K(\pi,1)$ means a connected based CW complex with a specified fundamental-group isomorphism to $\pi$ and vanishing higher homotopy groups; the latter vanishing is called asphericity.

In particular, let $(W,S)$ be a finite-rank Coxeter system with $W$ finite, and let $J\subseteq S$. For its relative space $\Theta_J$, relative hyperplanes $\mathcal H^J$ and relative complexified complement $\mathcal X_J^{\mathbb C}$, the space $\mathcal X_J^{\mathbb C}$ admits a CW structure and, after choosing a vertex basepoint, is a $K(\pi,1)$ for its own fundamental group with the identity identification.

## Statement references

[def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers)

[thm-spherical-deligne-topology-artin-tits-normalisers](item-thm-spherical-deligne-topology-artin-tits-normalisers)

[thm-deligne-simplicial-input-artin-tits-prerequisites](item-thm-deligne-simplicial-input-artin-tits-prerequisites)

[math:def-eilenberg-maclane-space](https://alphabetamath.cc/item/def-eilenberg-maclane-space)

[math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)

[math:def-complexification-of-a-real-vector-space](https://alphabetamath.cc/item/def-complexification-of-a-real-vector-space)

[math:prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure](https://alphabetamath.cc/item/prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure)

[math:def-paracompact-space](https://alphabetamath.cc/item/def-paracompact-space)

[math:def-cw-complex-with-closure-finiteness-and-weak-topology](https://alphabetamath.cc/item/def-cw-complex-with-closure-finiteness-and-weak-topology)

[math:def-based-loops-and-fundamental-group](https://alphabetamath.cc/item/def-based-loops-and-fundamental-group)

[math:thm-fundamental-group-laws](https://alphabetamath.cc/item/thm-fundamental-group-laws)

[math:def-higher-homotopy-group-by-based-cubes](https://alphabetamath.cc/item/def-higher-homotopy-group-by-based-cubes)

[math:def-path-connected](https://alphabetamath.cc/item/def-path-connected)

## External input

[E1] Import Whitehead's smooth triangulation theorem as stated by Lurie, Lecture 3, p. 1, assertion (1): a paracompact Hausdorff smooth manifold without boundary has a smooth triangulation. Lecture 4, p. 2, Variant 8 includes noncompact existence. Its locally finite cover is not used here to infer local finiteness of simplices.

[E2] Import the explicit Euclidean-open-set version in Fernando–Ghiloni, §3.C, Step I, printed p. 993: for a nonempty open $U\subseteq\mathbb R^m$, there are a locally finite geometric simplicial complex $K$ in some $\mathbb R^p$ and a homeomorphism $\Phi:|K|\to U$. The map is a smooth diffeomorphism onto a smooth submanifold on each open simplex, although only the homeomorphism and local finiteness are used below. The topology is the relative Euclidean topology by §1.A, p. 969. Local finiteness means that each point of $|K|$ has a neighborhood meeting only finitely many closed simplices. These are imported existence inputs; the subsequent CW verification is local. The geometric simplex, face, realization and skeleton conventions are specified in [F13], and characteristic maps have the meaning in [F14].

## Facts & Assumptions

[F1] The complement of a finite central real hyperplane arrangement with open simplicial chambers is aspherical after complexification. [thm-deligne-simplicial-input-artin-tits-prerequisites](item-thm-deligne-simplicial-input-artin-tits-prerequisites)

[F2] When $W$ is finite, $(\Theta_J,\mathcal H^J)$ is a finite central real arrangement whose chambers are open simplicial cones. [thm-spherical-deligne-topology-artin-tits-normalisers](item-thm-spherical-deligne-topology-artin-tits-normalisers)

[F3] In that finite case, $\mathcal X_J^{\mathbb C}$ is the complexified complement of $(\Theta_J,\mathcal H^J)$. [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers) [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[F4] A connected based CW complex, with a specified isomorphism of its fundamental group to $\pi$ and vanishing higher homotopy groups, is a $K(\pi,1)$. [math:def-eilenberg-maclane-space](https://alphabetamath.cc/item/def-eilenberg-maclane-space)

[F5] The triangulation theorem in [E1] applies to paracompact Hausdorff smooth manifolds, including noncompact ones. For a nonempty Euclidean open set, [E2] explicitly supplies a locally finite geometric simplicial complex and a homeomorphism of its realization onto that set. These external existence inputs do not assert asphericity.

[F6] Complexification is defined as $\mathbb C\otimes_{\mathbb R}V$, with the complex scalar acting on the $\mathbb C$ factor. The tensor-factor interchange $v\otimes z\mapsto z\otimes v$ identifies our notation with that definition. [math:def-complexification-of-a-real-vector-space](https://alphabetamath.cc/item/def-complexification-of-a-real-vector-space)

[F7] A finite-rank Coxeter system is the group and finite generating set presented by a Coxeter matrix; the subset $J$ specifies a standard parabolic subgroup. [math:def-hh-coxeter-matrix-word-group-and-length](https://alphabetamath.cc/item/def-hh-coxeter-matrix-word-group-and-length)

[F8] A positive-dimensional Euclidean open set has its standard smooth manifold structure. [math:prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure](https://alphabetamath.cc/item/prop-open-subsets-of-euclidean-space-have-the-standard-smooth-structure)

[F9] Paracompactness means that every open cover admits a locally finite open refinement covering the space. [math:def-paracompact-space](https://alphabetamath.cc/item/def-paracompact-space)

[F10] A CW structure has a skeleton filtration formed by attaching disks, closures meeting only finitely many cells, and the weak topology with respect to the closed cells. [math:def-cw-complex-with-closure-finiteness-and-weak-topology](https://alphabetamath.cc/item/def-cw-complex-with-closure-finiteness-and-weak-topology)

[F11] The fundamental group $\pi_1(X,b)$ consists of homotopy classes of loops based at $b$, with multiplication traversing the first loop and then the second. [math:def-based-loops-and-fundamental-group](https://alphabetamath.cc/item/def-based-loops-and-fundamental-group) For every pointed topological space $(X,b)$, this multiplication is well-defined and makes $\pi_1(X,b)$ a group. [math:thm-fundamental-group-laws](https://alphabetamath.cc/item/thm-fundamental-group-laws)

[F12] The higher homotopy group $\pi_k(X,b)$ is represented by continuous maps $I^k\to X$ taking the whole boundary to $b$, modulo homotopies fixed on that boundary; vanishing means that every such class is the constant class. [math:def-higher-homotopy-group-by-based-cubes](https://alphabetamath.cc/item/def-higher-homotopy-group-by-based-cubes)

[F13] For affinely independent vertices $v_0,\ldots,v_d\in\mathbb R^p$, the closed geometric $d$-simplex is $\sigma=[v_0,\ldots,v_d]=\{\sum_{i=0}^d\lambda_i v_i:\lambda_i\ge0,\ \sum_{i=0}^d\lambda_i=1\}$. Its faces are the convex hulls of subsets of these vertices, including the empty face; its open simplex $\sigma^\circ$ consists of points with all barycentric coordinates positive. Its boundary $\partial\sigma$ is the union of its proper faces. A geometric simplicial complex $K$ in $\mathbb R^p$ is a collection of such closed simplices containing their nonempty faces, with any two simplices intersecting in a common face or in the empty set. Its realization is the union $|K|=\bigcup_{\sigma\in K}\sigma$, here with the relative Euclidean topology. Its $d$-skeleton $|K|^{(d)}$ is the union of the simplices of dimension at most $d$; put $|K|^{(-1)}=\varnothing$. These geometric conventions interpret [E2], rather than presupposing a CW topology on $|K|$. The single-simplex and barycentric-coordinate definition is supplied by [math:def-geometric-simplex-spanned-by-affinely-independent-vertices](https://alphabetamath.cc/item/def-geometric-simplex-spanned-by-affinely-independent-vertices).

[F14] Write $D^d=\{x\in\mathbb R^d:\lVert x\rVert\le1\}$ and $S^{d-1}=\partial D^d$. Attaching a $d$-cell to a space $Y$ along $f:S^{d-1}\to Y$ means the quotient of $Y\sqcup D^d$ identifying each boundary point $z$ with $f(z)$; the map from $D^d$ into this quotient is its characteristic map. In dimension zero $D^0$ is a point and the attaching boundary is empty. [math:def-cell-attachment-by-a-characteristic-map](https://alphabetamath.cc/item/def-cell-attachment-by-a-characteristic-map)

[F15] A path from $x$ to $y$ in a topological space $X$ is a continuous map $[0,1]\to X$ with endpoints $x$ and $y$; $X$ is path-connected if every pair of its points is joined by such a path. Every path-connected topological space is connected. [math:def-path-connected](https://alphabetamath.cc/item/def-path-connected) [math:thm-path-connected-implies-connected](https://alphabetamath.cc/item/thm-path-connected-implies-connected)

[F16] A finite-dimensional vector space over an infinite field is not the union of any finite family of proper linear subspaces. [math:lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces](https://alphabetamath.cc/item/lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces)

## Proof

**Given:** The arrangement and hypotheses in the first paragraph of the Statement; for the particular case, also the finite-rank Coxeter system, finite group $W$ and subset $J$ in its second paragraph.

**Proof technique:** direct.

**Goal:** Supply the CW structure and based $K(\pi,1)$ data, and apply the result to the spherical relative complement.

1.1 By [F6], the maps $(x,y)\mapsto x\otimes1+y\otimes i$ and $v\otimes(a+ib)\mapsto(av,bv)$ are inverse real-linear identifications of $V\times V$ with $V_{\mathbb C}$. The formula for the inverse is balanced over $\mathbb R$, so it is well-defined on the tensor product. In a real basis they identify $V_{\mathbb C}$ with $\mathbb C^n$, where $n=\dim_{\mathbb R}V$, and identify each $H\otimes_{\mathbb R}\mathbb C$ with a proper complex linear hyperplane. Such hyperplanes are closed, so $M$ is open. It is nonempty by [F16]: $V_{\mathbb C}$ is finite-dimensional over the infinite field $\mathbb C$, and the removed hyperplanes are a finite family of proper complex linear subspaces. For two distinct points of $M$, the complex affine line through them is contained in no removed hyperplane and meets each in at most one point. A complex line minus finitely many points is path-connected: a line-segment path can be modified by finitely many small circular detours. For coincident endpoints use the constant path. Thus $M$ is path-connected in the sense of [F15]. In dimension zero the collection of proper hyperplanes is empty and $M$ is the single point. [F6, F15, F16, given]

2.1 In dimension zero the point has its one-cell CW structure. For $n>0$, [F8] gives $M$ its standard smooth real $2n$-manifold structure. Its Euclidean subspace topology is Hausdorff. We check paracompactness by an explicit refinement. In real coordinates put $U=M\subseteq\mathbb R^{2n}$ and $K_j=\{u\in U:\lVert u\rVert\le j,\ \operatorname{dist}(u,U^c)\ge1/j\}$ for $j\ge1$, using distance $+\infty$ when $U^c$ is empty, and put $K_0=K_{-1}=\varnothing$. These sets are compact, $K_j\subseteq\operatorname{int}_U K_{j+1}$, and their interiors cover $U$. For an arbitrary open cover of $U$, all rational balls whose closures lie in $\operatorname{int}_U K_{j+1}\setminus K_{j-2}$ and which lie in some cover member form a countable cover of the compact shell $K_j\setminus\operatorname{int}_U K_{j-1}$. Take the first finite list from this family covering that shell in a fixed enumeration of all finite lists of rational balls; take the empty list for an empty shell. These finite families cover $U$. They are locally finite, since $\operatorname{int}_U K_N$ meets none of the families with $j\ge N+2$. This is the refinement required by [F9], and the least-list rule makes the selections explicit. [F8, F9, step 1.1, construct]

3.1 For $n>0$, step 2.1 verifies the manifold hypotheses of [E1] recorded in [F5]. By step 1.1, $M$ is also a nonempty Euclidean open set, so the more precise [E2] in [F5] supplies a locally finite triangulation homeomorphic to $M$. Use the geometric conventions of [F13] and write its homeomorphism as $\Phi:|K|\to M$. Each closed $d$-simplex is a disk with boundary its proper faces, as follows directly in barycentric coordinates. For $d>0$, put $c=(1/(d+1),\ldots,1/(d+1))$ in the standard simplex $\Delta^d=\{\lambda\in\mathbb R^{d+1}:\lambda_i\ge0,\ \sum_i\lambda_i=1\}$ and $L=\{u\in\mathbb R^{d+1}:\sum_i u_i=0\}$. For a unit vector $u\in L$, the ray $c+tu$ first meets the boundary at $t=\rho(u)=1/((d+1)\max_i(-u_i))$. The denominator is positive, and $\rho$ is continuous and bounded above and below by positive constants on the unit sphere. Thus $q(0)=c$ and $q(ru)=c+r\rho(u)u$ give a homeomorphism from the closed unit disk of $L$ onto $\Delta^d$, taking its boundary to $\partial\Delta^d$; the inverse rescales each ray by $1/\rho(u)$ and is continuous also at $c$ by those bounds. Identify $L$ isometrically with $\mathbb R^d$ and use the affine homeomorphism $\Delta^d\to\sigma$ given by the vertices in [F13]. For $d=0$ use the map from a point to the vertex. Composing these disk maps with $\Phi$ gives maps $\chi_\sigma:D^d\to M$ whose interiors map homeomorphically onto $\Phi(\sigma^\circ)$ and whose boundaries lie in $X^{d-1}=\Phi(|K|^{(d-1)})$. The common-face condition makes these open cells disjoint and their union all of $M$; each closed cell is the union of its finitely many open faces. [F5, F13, F14, step 1.1, step 2.1, construct]

4.1 Each closed simplex is compact and closed in the Euclidean realization. If $A\subseteq|K|$ meets every closed simplex in a closed subset of that simplex, these intersections are closed in $|K|$ and form a locally finite family by [E2]. Their union $A$ is closed: near any point only finitely many intersections need be considered. The converse follows by restriction. The same reasoning applies to every skeleton with its subspace topology. In particular the vertex skeleton is discrete, since every union of singleton vertices is closed in it. For $d\ge1$, the natural surjection from $X^{d-1}\sqcup\bigsqcup_{\dim\sigma=d}D^d$ onto $X^d=\Phi(|K|^{(d)})$, using the maps $\chi_\sigma$ in step 3.1, identifies exactly the boundary attachments of [F14]. It is a quotient map: a subset of $X^d$ has closed preimage exactly when its intersection with $X^{d-1}$ and its inverse images in all the $d$-disks are closed, which is equivalent to having closed intersection with every simplex of that skeleton by the preceding closed-set criterion and the disk homeomorphisms. Hence the skeleton filtration is formed by attaching disks with those characteristic maps. The closed-cell criterion above gives the weak topology on all of $M$, and step 3.1 gives closure finiteness. Since $M$ is Hausdorff, [F10] now gives a CW structure on $M$ itself. For $n=0$ use the structure in step 2.1. [F5, F10, F13, F14, step 2.1, step 3.1, construct]

5.1 The given hyperplanes are linear, hence central, and all the finite simplicial hypotheses of [F1] are exactly those in the Statement. Consequently $M$ is aspherical; for the zero-dimensional point this is also immediate. By step 1.1 it is nonempty and path-connected, hence connected by [F15]. Choose a vertex $b$ of the CW structure from step 4.1 and set $\pi=\pi_1(M,b)$. By [F11], this loop-class multiplication is well-defined and $\pi$ is a group; its identity map preserves multiplication and is its own inverse, hence is a group isomorphism. With the groups interpreted by [F11] and [F12], these data satisfy [F4], proving the first assertion with the required based CW convention. [F1, F4, F11, F12, F15, step 1.1, step 4.1, choose]

6.1 In the spherical case, the Coxeter data have the meaning in [F7]. By [F2], $(\Theta_J,\mathcal H^J)$ meets the finite central simplicial hypotheses just used, and [F3] identifies its complexified complement with $\mathcal X_J^{\mathbb C}$. Transport the CW structure and vertex basepoint through this identification. Step 4.1 then makes the relative complement a $K(\pi,1)$ for its based fundamental group, with the identity identification. [F2, F3, F7, step 5.1] ∎

## Source notes

The article reference attributes the application in Corollary 6.14. The proof uses the independent asphericity supplier, the explicitly imported smooth triangulation theorem and the displayed local deductions. No claim of reconstructing the imported theorem, independent review, library publication or audit is made.
