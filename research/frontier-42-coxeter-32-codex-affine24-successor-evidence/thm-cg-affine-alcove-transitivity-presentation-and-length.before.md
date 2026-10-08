---
id: thm-cg-affine-alcove-transitivity-presentation-and-length
kind: theorem
title: "Alcove transitivity, the affine Coxeter presentation, and the length function"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 12
deps:
  - lem-cg-affine-generic-gallery-paths-and-disk-moves
  - lem-cg-affine-alcove-separation-and-facet-types
  - lem-cg-highest-root-and-fundamental-alcove
  - lem-cg-affine-reflection-identities-and-local-finiteness
  - def-cg-affine-root-hyperplane-reflection-and-alcove
  - def-hh-coxeter-matrix-word-group-and-length
  - def-generated-subgroup
  - def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice
  - def-affine-subspace-of-a-vector-space
  - lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces
  - lem-locally-convex-closures-and-finite-compact-convex-hulls
  - def-inner-product-space
  - def-inner-product-norm
  - cor-inner-product-induces-a-norm
  - def-norm-and-normed-space
  - def-topological-vector-space-for-local-convexity
  - def-product-topology
  - def-continuous-map-top
  - thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates
  - thm-classification-of-irreducible-reduced-crystallographic-root-systems
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "P. Magyar, Schubert classes of a loop group (arXiv:0705.3826)"
      url: "https://arxiv.org/pdf/0705.3826"
      locator: "§1.4–1.5 gives the type-A loop-group affine group and the extended group W⋉P∨. This is a convention comparison only; the present theorem does not use the loop-group realization or import its proof."
    - title: "J. Morgan, Lie Groups Fall 2025, Lecture XII: The Affine Weyl Group"
      url: "https://www.math.columbia.edu/~jmorgan/LieGroups2025/2025LGLecture12.pdf"
      locator: "Theorem 1.2 and Propositions 2.4, 3.1–3.2 discuss chamber transitivity and translation lattices in the compact Lie-group normalization H_{α,k} with 2πk. They are context only; the local Euclidean arguments here use H_{α,k}={x:B(x,α)=k}."
    - title: "J. B. Lewis, J. McCammond, T. K. Petersen, P. Schwer, Computing reflection length in an affine Coxeter group (Trans. AMS 371 (2019))"
      url: "https://web.math.ucsb.edu/~jon.mccammond/papers/McCammond-item-47.pdf"
      locator: "§1.3, Definitions 1.9–1.11 and Remark 1.12 give affine Euclidean, wall and alcove terminology under an already specified affine Coxeter group. This is terminology context only; no presentation or length proof is imported."
landmark: false
---

## Statement

Use the affine-wall notation and componentwise fundamental alcove $A$ from [[def-cg-affine-root-hyperplane-reflection-and-alcove]] and [[lem-cg-highest-root-and-fundamental-alcove]]. Let $J$ be the affine facet-type set from [[lem-cg-affine-alcove-separation-and-facet-types]], with one label $0_i$ for each nonempty irreducible component, and let $s_a$ be the reflection in the fundamental facet of type $a\in J$. Let $W_{\rm abs}$, its Coxeter matrix $m_{ab}=\operatorname{ord}(s_as_b)$, and $\varphi:W_{\rm abs}\to W_a$ be those of [[lem-cg-affine-generic-gallery-paths-and-disk-moves]]; its finite labels are $2,3,4,6$, and $m_{ab}=\infty$ only for the two opposite facets of a rank-one component. If $J=\varnothing$, take $W_{\rm abs}=W_a=\{1\}$.

**(1) Transitivity and generation.** The subgroup $G:=\langle s_a:a\in J\rangle\le W_a$ equals $W_a$, and $W_a$ acts transitively on the set of alcoves. Every affine wall is a facet of some alcove; if $H$ is a facet wall of $g(A)$, its reflection is $g s_a g^{-1}$ for the type $a$ of that facet.

**(2) Presentation and simple transitivity.** The homomorphism $\varphi:W_{\rm abs}\to W_a$ is an isomorphism. Thus $W_a$ is the Coxeter group with simple system $(s_a)_{a\in J}$, and it acts simply transitively on alcoves: for any two alcoves $C,C'$ there is exactly one $g\in W_a$ such that $g(C)=C'$.

**(3) Length.** Let $\ell(g)$ be the minimum number of facet reflections from $(s_a)_{a\in J}$ whose product is $g$. For every $g\in W_a$,
$$\ell(g)=\#\operatorname{Sep}(A,g(A)),$$
where $\operatorname{Sep}$ is the separating-wall set of [[lem-cg-affine-alcove-separation-and-facet-types]]. A straight generic segment between interior points of $A$ and $g(A)$ crosses each separating wall exactly once and gives a gallery attaining the minimum. The argument includes rank-one factors and reducible systems with the product conventions of [[lem-cg-highest-root-and-fundamental-alcove]] (3).

**(4) Comparison.** The finite root-system types are the standard crystallographic types $A_n,B_n,C_n,D_n,E_6,E_7,E_8,F_4,G_2$ (with the low-rank identifications in [[thm-classification-of-irreducible-reduced-crystallographic-root-systems]]). In that root-system normalization, $W_a=Q^\vee\rtimes W$ from [[lem-cg-affine-reflection-identities-and-local-finiteness]] is the standard affine Weyl group. This does not identify it with an untwisted Kac–Moody loop realization, and it does not assert that the extended group $P^\vee\rtimes W$ is a Coxeter group with the same simple system. No axiom of choice is used.

## Facts & Assumptions

**Given:** The finite-dimensional real inner-product space $E$, reduced crystallographic root system $\Phi$, affine walls and reflections, and componentwise fundamental alcove and facet labels above.

[F1] $W_a$ is generated by all wall reflections and permutes the walls and alcoves; the arrangement is locally finite ([[def-cg-affine-root-hyperplane-reflection-and-alcove]], [[lem-cg-affine-reflection-identities-and-local-finiteness]]).

[F2] The fundamental alcove is a finite product of bounded geometric simplices, with one affine facet label $0_i$ for each nonempty irreducible component ([[lem-cg-highest-root-and-fundamental-alcove]], [[lem-cg-affine-alcove-separation-and-facet-types]]).

[F3] A facet reflection carries an alcove to its adjacent alcove, the separating sets satisfy the symmetric-difference identity, the stabilizer of $A$ is trivial, and facet types/reflections transport consistently on the orbit $W_a\cdot A$ ([[lem-cg-affine-alcove-separation-and-facet-types]]).

[F4] Any two alcoves are joined by a finite generic gallery; the Coxeter matrix on $J$ has the actual affine reflection product orders; its universal-property map $\varphi$ is defined; and $\varphi(w)(A)=A$ implies $w=1$ ([[lem-cg-affine-generic-gallery-paths-and-disk-moves]]). This in-run supplier is still escalated for its draft Coxeter-definition input and the owner-held rank-two residue input; uses here remain provisional.

[F5] A finite Coxeter matrix defines the presented group and its length as the minimum number of simple generators in a word ([[def-hh-coxeter-matrix-word-group-and-length]]). The supplier is still draft; the item decision remains escalated until its authored interface and actual use are reconciled.

[F6] A finite-dimensional real vector space is not a finite union of proper linear subspaces ([[lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces]]).

[F7] The convex hull of finitely many points in a finite-dimensional real topological vector space is compact ([[lem-locally-convex-closures-and-finite-compact-convex-hulls]]).

[F8] The inner-product length is a norm, and addition and scalar multiplication are jointly continuous for its norm topology; hence this topology is a real topological vector space topology ([[def-inner-product-space]], [[def-inner-product-norm]], [[cor-inner-product-induces-a-norm]], [[def-norm-and-normed-space]], [[def-topological-vector-space-for-local-convexity]], [[def-product-topology]], [[def-continuous-map-top]]).

[F9] An affine subspace is a translate of a linear subspace ([[def-affine-subspace-of-a-vector-space]]).

[F10] The simple roots form a real basis of $E$ ([[thm-simple-roots-form-a-basis-and-every-root-has-one-sign-of-integral-coordinates]]).

[F11] $Q^\vee$ is the coroot lattice and $W_a=Q^\vee\rtimes W$ in its Euclidean action ([[def-root-lattice-coroot-lattice-weight-lattice-and-coweight-lattice]], [[lem-cg-affine-reflection-identities-and-local-finiteness]]).

[F12] Irreducible reduced crystallographic root systems have exactly the standard types and low-rank identifications listed in part (4) ([[thm-classification-of-irreducible-reduced-crystallographic-root-systems]]).

[F13] The subgroup generated by the fundamental facet reflections is the least subgroup containing those reflections ([[def-generated-subgroup]]).

## Proof

**Proof technique:** generic galleries, finite affine avoidance, and wall-crossing counts.

1.1 The induced inner-product norm is a norm. Addition is continuous because $\|(x+y)-(x_0+y_0)\|\le\|x-x_0\|+\|y-y_0\|$. Scalar multiplication is jointly continuous at $(\lambda_0,x_0)$: if $|\lambda-\lambda_0|<\delta\le1$ and $\|x-x_0\|<\delta$, then $\|\lambda x-\lambda_0x_0\|\le(|\lambda_0|+1)\delta+\|x_0\|\delta$, which is below any prescribed $\varepsilon>0$ for sufficiently small $\delta>0$. Thus the norm topology on $E$ is a real topological vector space topology, so [F7] applies. [F8, algebra]

1.2 Let $O$ be a nonempty open subset of a finite-dimensional real affine space and let $L_1,\ldots,L_N$ be finitely many proper affine subspaces. If $N=0$, any point of $O$ works. Otherwise let $D_j$ be the direction subspace of $L_j$; each $D_j$ is proper. By [F6] choose a direction $v$ outside their union. For $p\in O$, openness gives an interval around $0$ with $p+tv\in O$. The line $p+\mathbb Rv$ meets each $L_j$ in at most one point, so deleting the finitely many excluded parameters leaves a point in $O\setminus\bigcup_jL_j$. In dimension zero every proper affine subspace is empty. [F6, F9, choose, algebra]

1.3 Fix any alcove $C$ and follow the gallery from $A$ to $C$ supplied by [F4]. Start with $A=1(A)$. Suppose the current alcove is $g(A)$ with $g\in G$. The next shared panel is a facet $g(F_a)$ for some $a\in J$, since $A$ has exactly the listed facets and $g$ is an affine isometry. By [F3] reflection in its wall is $g s_a g^{-1}$, so the next alcove is $g s_a(A)$ and still lies in $G\cdot A$. Induction along the finite gallery gives $C\in G\cdot A$. Thus $G$ acts transitively on alcoves. [F2, F3, F4, F13, algebra]

1.4 By [F12], each irreducible component of $\Phi$ has one of the types listed in part (4), with the stated low-rank identifications. By [F11], the affine group defined here is the coroot-lattice semidirect product of that finite Weyl group, which is the standard affine Weyl group in the Euclidean root-system normalization. This comparison uses only the root-system type classification and the explicit Euclidean construction; it asserts no loop-algebra identification. [F11, F12]

2.1 If $E=0$, there are no walls. If $\dim E=1$, each wall is a point and is an endpoint facet of the two adjacent interval alcoves. Assume $\dim E\ge2$ and fix a wall $H$. Choose $p_0\in H$. Let $e_1,\ldots,e_n$ be the simple-root basis from [F10]. For any $\varepsilon>0$, the simplex with vertices $p_0-\varepsilon\sum_i e_i$ and $p_0+\varepsilon e_i$ ($1\le i\le n$) is bounded and has $p_0$ as its barycenter: the edge vectors are $\varepsilon(e_i+\sum_j e_j)$, and a linear relation among them has coefficients $c_i$ satisfying $c_i+\sum_jc_j=0$ for every $i$, hence all $c_i=0$. Its interior $O$ contains $p_0$. Its closure is the convex hull of finitely many vertices, hence compact by [F7]. By local finiteness [F1], only finitely many walls meet $\overline O$. For each other wall $H'$, $H\cap H'$ is empty or a proper affine subspace of $H$. Apply the affine avoidance argument of 1.2 inside the relative open set $H\cap O$ to choose $p\in H$ on none of these other walls. Since the finite list contains every wall meeting $\overline O$, a sufficiently small ball about $p$ contained in $O$ meets the arrangement only in $H$. Its two half-balls lie in two alcoves whose closures share a relatively open patch of $H$, so $H$ is a facet wall of either alcove. By 1.3 one such alcove is $g(A)$. Its facet is $g(F_a)$ for some $a\in J$, and [F3] gives $r_H=g s_a g^{-1}\in G$. Hence every wall reflection lies in $G$. Since $W_a$ is generated by all wall reflections by [F1] and $G\le W_a$ by [F13], we have $G=W_a$. [F1, F2, F3, F6, F7, F8, F9, F10, F13, step 1.1, step 1.2, step 1.3, choose, algebra]

3.1 The matrix and homomorphism are those established in [F4], with the universal presentation and length convention of [F5]. Surjectivity of $\varphi$ follows from $G=W_a$ in 2.1. If $w\in\ker\varphi$, then $\varphi(w)(A)=A$, so [F4] gives $w=1$; thus $\varphi$ is injective. For any alcove $C$, transitivity gives $C=g(A)$. If $h(C)=C$, then $g^{-1}hg$ stabilizes $A$, which is trivial by [F3]; hence the action is free. Transitivity and freeness give exactly one group element carrying any $C$ to any $C'$. [F3, F4, F5, step 1.3, step 2.1]

3.2 Let $g=s_{a_1}\cdots s_{a_m}$ be any expression. The prefix alcoves $C_j=s_{a_1}\cdots s_{a_j}(A)$ form a gallery. Each step crosses one facet wall $H_j$, so [F3] gives $\operatorname{Sep}(A,C_j)=\operatorname{Sep}(A,C_{j-1})\mathbin{\triangle}\{H_j\}$. Every wall in $\operatorname{Sep}(A,g(A))$ must therefore occur among $H_1,\ldots,H_m$, and $m\ge\#\operatorname{Sep}(A,g(A))$. For the reverse inequality, if $E=0$ the claim is immediate. Otherwise take $x\in A$ and $y_0\in g(A)$. Let $O$ be a simplex of the form constructed in 2.1, centered at $y_0$ and scaled small enough that its closure lies in $g(A)$; its finite vertices lie in the componentwise product alcove by convexity. The convex hull $K$ of $x$ and the vertices of $\overline O$ is compact by [F7], so by [F1] only finitely many walls meet $K$. Let $P_1,\ldots,P_N$ be the codimension-two intersections of distinct walls in this finite list. Since $x\in A$, $x\notin P_j$, and each $\operatorname{aff}(\{x\}\cup P_j)$ is proper by [F9]. Apply 1.2 to choose $y\in O$ outside their union. Then $[x,y]$ meets no codimension-two intersection, and every wall it crosses is met transversely and one at a time. For a defining affine functional $f_H$ of any wall $H$, $f_H$ has opposite signs at $x,y$ exactly when $H$ separates $A$ and $g(A)$; linearity along the segment shows that such a wall is crossed exactly once, while every other wall is not crossed. Thus the segment gives a gallery of exactly $\#\operatorname{Sep}(A,g(A))$ steps. Inducting as in 1.3 gives $h\in G$ with $h(A)=g(A)$. By 2.1, $G=W_a$, and the trivial stabilizer of $A$ in [F3] then gives $h=g$. The minimum length therefore equals the separating-wall count. [F1, F3, F5, F6, F7, F8, F9, F10, step 1.2, step 1.3, step 2.1, algebra]

4.1 The argument in 3.2 is carried out in the full product alcove $A=\prod_i A_i$, so it already applies to reducible systems. More explicitly, every wall belongs to one irreducible factor, hence the separating-wall set is the disjoint union of the factorwise sets. Reflections from different orthogonal components act on separate summands and commute, and each component subgroup acts trivially on the other summands; hence $W_a$ is their direct product and the facet-generator set is their disjoint union. Any word has at least the sum of the factorwise minimum lengths, while concatenating factorwise minimum words attains that sum. For an $A_1$ factor the alcoves are intervals, and the straight segment crosses exactly the integer-level walls between the two intervals. [F1, F2, F3, step 3.2, algebra]

5.1 If $\Phi=\varnothing$, then $E=0$, $J=\varnothing$, $W_a=\{1\}$, and all four claims reduce to the empty presentation and zero length. In rank one, the two endpoint reflections have infinite-order product by [F4], and the length count is the interval-gallery count in 4.1. In reducible systems the factor argument of 4.1 applies. The only nonunique choices in the proof were made from finite families: affine bad-set avoidance uses 1.2, and compact hulls and wall lists are finite. No axiom of choice is used. [F1, F2, F4, step 1.2, step 4.1] ∎
