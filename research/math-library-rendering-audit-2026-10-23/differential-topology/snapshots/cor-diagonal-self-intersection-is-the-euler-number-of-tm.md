---
id: cor-diagonal-self-intersection-is-the-euler-number-of-tm
kind: corollary
title: "The diagonal self-intersection is the Euler number of the tangent bundle"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-normal-bundle-of-the-diagonal-is-canonically-tm, thm-self-intersection-is-the-euler-number-of-the-normal-bundle, def-self-intersection-number-of-an-oriented-submanifold, def-euler-class-by-zero-section-pullback-of-the-thom-class, prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure, def-product-orientation, prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold, def-axiom-of-choice, prop-the-diagonal-is-an-embedded-submanifold]
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall, 1974; complete 236-page PDF)"
      url: https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf
      locator: "Ch. 2 Sec. 4, printed pp. 79-80 (the Mobius central curve and the RP^1 in RP^2 boundary example, mod two); Ch. 3 Sec. 3, printed pp. 107-118 (orientation number, factor order, and the exercise I(Delta,Delta)=chi(M))."
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
dependency_level: 4
---

## Statement

Assume AC. Let $M$ be a closed oriented smooth $n$-manifold and give $M\times M$ the product orientation. Then the diagonal $\Delta_M\subseteq M\times M$, oriented by the transport of the orientation of $M$ along $x\mapsto(x,x)$, is a closed oriented embedded $n$-submanifold with $2\dim\Delta_M=\dim(M\times M)$ and $$\Delta_M\cdot\Delta_M=\langle e(TM),[M]\rangle\in\mathbb Z,$$ where $e(TM)$ is the Euler class of the tangent bundle and the self-intersection number is that of [[def-self-intersection-number-of-an-oriented-submanifold]]. This is the geometric form of the evaluation of the Euler class of the tangent bundle and the bridge to the Euler characteristic in the later Euler/index pair.

## Facts & Assumptions

**Given:** The closed oriented smooth $n$-manifold $M$, the product $M\times M$ with its product orientation, and the diagonal oriented by transport from $M$.

[F1] The diagonal $\Delta_M=\{(p,p):p\in M\}\subseteq M\times M$ is an embedded submanifold of dimension $\dim M$ ([[prop-the-diagonal-is-an-embedded-submanifold]]).

[F2] $M\times M$ carries the canonical product smooth structure, so it is a closed orientable $2n$-manifold with the product orientation when $M$ is oriented ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

[F3] The product orientation is defined by the ordered determinant isomorphism $\det(V\oplus W)\cong\det V\otimes\det W$, tensoring the selected rays ([[def-product-orientation]]).

[F4] The normal bundle of the diagonal is canonically $TM$, oriented so that a positive tangent basis of $\Delta_M$ followed by a positive normal basis is positive in $M\times M$, and under this convention the canonical isomorphism is orientation-preserving when $\Delta_M$ carries the orientation transported from $M$ ([[lem-normal-bundle-of-the-diagonal-is-canonically-tm]]).

[F5] The self-intersection number satisfies $A\cdot A=\langle e(\nu_A),[A]\rangle$ for a closed oriented $A$ with $2\dim A=\dim M$ ([[thm-self-intersection-is-the-euler-number-of-the-normal-bundle]]).

## Proof

**Proof technique:** apply the self-intersection/Euler-number theorem to the diagonal using the normal-bundle identification.

1.1 The diagonal is a closed embedded submanifold of dimension $n$ with $2n=\dim(M\times M)$ [F1], and the orientation transported from $M$ along $x\mapsto(x,x)$ makes it a closed oriented submanifold of the closed oriented manifold $M\times M$ [F2]; the product orientation is the ordered tensor product of the two copies of the orientation of $M$ [F3]. [F1, F2, F3, given]

2.1 By [F4] the normal bundle of the diagonal is canonically $TM$ with the induced orientation, and the identification is orientation-preserving. Applying [F5] to $\Delta_M\subseteq M\times M$ gives $\Delta_M\cdot\Delta_M=\langle e(\nu_{\Delta_M}),[\Delta_M]\rangle=\langle e(TM),[M]\rangle$ under the identification $\Delta_M\cong M$. [F4, F5, step 1.1, algebra] ∎
