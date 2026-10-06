---
id: thm-geometric-intersection-equals-the-poincare-dual-cup-pairing
kind: theorem
title: "The geometric intersection number is the Poincare-dual cup pairing"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-geometric-intersection-pairing-on-a-closed-oriented-manifold, lem-geometric-intersection-descends-through-oriented-cobordism-of-cycles, lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold, lem-normal-bundle-of-the-zero-locus-of-a-transverse-section, lem-pullback-of-the-thom-class-along-a-transverse-section, prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual, def-cap-duality-map-for-an-oriented-manifold, thm-poincare-duality-for-oriented-topological-manifolds, def-cap-product-with-cohomology-first, thm-cap-product-boundary-identity, prop-cap-product-naturality-and-projection-formula, def-relative-cap-product, def-kronecker-evaluation-pairing, cor-poincare-duality-gives-a-nonsingular-cup-pairing, thm-singular-cohomology-is-graded-commutative, thm-excision-for-singular-cohomology, thm-long-exact-sequence-of-a-pair-in-singular-cohomology, lem-cap-product-duality-is-an-isomorphism-on-euclidean-balls, def-local-oriented-intersection-sign, def-oriented-intersection-number, def-thom-class-by-fiberwise-normalization, thm-naturality-and-uniqueness-of-thom-classes, def-tubular-neighbourhood-of-an-embedded-submanifold, def-fundamental-class-of-a-compact-oriented-manifold, def-axiom-of-choice, cor-homotopic-maps-induce-the-same-map-on-singular-homology, def-transverse-embedded-submanifolds, lem-compact-transverse-complementary-intersections-are-finite, lem-choice-free-smooth-inverse-function-theorem-in-euclidean-space, thm-transversality-homotopy-theorem]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Princeton University Press, 1974; complete PDF)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Sec. 9 Oriented Bundles and the Euler Class (printed pp. 95-104); Sec. 10 The Thom Isomorphism Theorem (pp. 105-114); Sec. 11 Computations in a Smooth Manifold (pp. 115-137, the dual-class intersection calculus); Sec. 12 Obstructions (pp. 139-146)."
dependency_level: 3
---

## Statement

Assume AC. Let $M$ be a closed oriented smooth $n$-manifold and let $A^a,B^b\subseteq M$ be closed oriented embedded submanifolds with $a+b=n$. Write $[A]=(i_A)_*[A]_A$, $[B]=(i_B)_*[B]_B$, and $\mathrm{PD}[A]=D_M^{-1}([A])$, $\mathrm{PD}[B]=D_M^{-1}([B])$. In the cohomology-first, front-evaluation cap and cup conventions,
$$I(A,B)=\langle\mathrm{PD}[A]\smile\mathrm{PD}[B],[M]\rangle.$$
For nontransverse submanifolds $I(A,B)$ is computed by a transverse map homotopic to $i_A$; no embedded representative for that map is required. Over $\mathbb F_2$ the same formula holds without orientability. Consequently this geometric number depends only on the represented homology classes, with the factor order of [[def-local-oriented-intersection-sign]].

## Facts & Assumptions

**Given:** AC and $M,A,B$ with their orientations and complementary dimensions as in the statement.

[F1] Under Countable Choice a smooth map is homotopic to a transverse map; the resulting intersection number is well defined and homotopy invariant ([[thm-transversality-homotopy-theorem]], [[def-geometric-intersection-pairing-on-a-closed-oriented-manifold]]).

[F2] Cap is natural and satisfies $(x\smile y)\cap c=y\cap(x\cap c)$. Evaluation of a top-degree cup is therefore evaluation of its second factor on the cap by the first ([[prop-cap-product-naturality-and-projection-formula]], [[def-kronecker-evaluation-pairing]]).

[F3] For the tangent-first normal Thom extension $\alpha_B\in H^a(M,M\setminus B;R)$, its absolute image satisfies $\mathrm{PD}[B]=(-1)^{ab}\bar\alpha_B$ ([[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]]).

[F4] Excision localizes a class supported on finitely many points to disjoint disk pairs; fundamental classes restrict to their prescribed local orientation generators. A normalized Thom class restricts to the normal fibre generator ([[thm-excision-for-singular-cohomology]], [[def-fundamental-class-of-a-compact-oriented-manifold]], [[def-thom-class-by-fiberwise-normalization]]).

[F5] The local intersection sign compares $df(TA)$ followed by $TB$ with $TM$. Complementary transverse preimages are finite for a compact source and closed target ([[def-local-oriented-intersection-sign]], [[lem-compact-transverse-complementary-intersections-are-finite]]).

## Proof

**Proof technique:** use a transverse map on the original source, restrict the normal Thom class of $B$, and compare its local determinant with the ordered intersection sign.

1.1 By [F1] choose a smooth $f:A\to M$, homotopic to $i_A$, transverse to $B$. Then $I(A,B)=I(f,B)$ and $P=f^{-1}(B)$ is finite by [F5]. Homotopy invariance of homology gives $f_*[A]_A=[A]$. By [F2] and $\mathrm{PD}[A]\cap[M]=[A]$, $$\langle\mathrm{PD}[A]\smile\mathrm{PD}[B],[M]\rangle=\langle f^*\mathrm{PD}[B],[A]_A\rangle.$$ This uses the map $f$ on the fixed oriented source $A$, and does not replace $A$ by its image. [F1, F2, F5, given, choose]

2.1 Pull back $\alpha_B$ along the map of pairs $(A,A\setminus P)\to(M,M\setminus B)$ to get $\beta$. At $p\in P$, the quotient derivative $q_p:T_pA\to\nu_{B,f(p)}$ is an isomorphism. A normalized tubular chart for $B$ and a local trivialization of its normal bundle give a normal-component map with derivative $q_p$. The inverse function theorem makes it a local diffeomorphism. In the induced normal coordinates the fibre Thom generator pulls back to $\sigma_p$ times the source orientation generator, where $\sigma_p$ is the orientation-ray sign of $q_p$: using the local diffeomorphism as a source chart proves this directly. Excision [F4] and the finite direct sum of the point-supported relative complexes then give $$\langle\bar\beta,[A]_A\rangle=\sum_{p\in P}\sigma_p.$$ In dimension zero the same statement is multiplication of the supplied point and normal orientation units, without an inverse-function argument. [F3, F4, F5, step 1.1, algebra]

3.1 Let $u$ be a positive tangent determinant of $B$ and $v$ a positive normal determinant. By tangent-first normal orientation, $(u,v)$ is positive in $M$. If $d$ is a positive determinant of $T_pA$, then $(u,df_p(d))$ has sign $\sigma_p$ because quotienting its second block gives $q_p(d)$. Swapping the blocks of dimensions $b,a$ shows that $(df_p(d),u)$ has sign $(-1)^{ab}\sigma_p$. Thus [F5] gives $\varepsilon_p=(-1)^{ab}\sigma_p$, including the point-ray case. By [F3], $f^*\mathrm{PD}[B]=(-1)^{ab}\bar\beta$. Combining with steps 1.1–2.1 yields the displayed formula. Empty $P$ gives zero on both sides. Over $\mathbb F_2$ the same finite local evaluation applies with every orientation sign equal to one. AC is inherited through transverse representatives, Thom existence and duality. [F2, F3, F4, F5, step 1.1, step 2.1, algebra] ∎

