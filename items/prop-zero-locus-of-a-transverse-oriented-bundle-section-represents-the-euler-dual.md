---
id: prop-zero-locus-of-a-transverse-oriented-bundle-section-represents-the-euler-dual
kind: proposition
title: "The zero locus of a transverse section represents the Euler dual"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold, lem-normal-bundle-of-the-zero-locus-of-a-transverse-section, lem-pullback-of-the-thom-class-along-a-transverse-section, def-euler-class-by-zero-section-pullback-of-the-thom-class, thm-poincare-duality-for-oriented-topological-manifolds, def-cap-duality-map-for-an-oriented-manifold, def-fundamental-class-of-a-compact-oriented-manifold, def-relative-cap-product, prop-cap-product-naturality-and-projection-formula, def-normal-and-conormal-bundles-of-an-embedded-submanifold, def-axiom-of-choice, def-cap-product-with-cohomology-first, def-kronecker-evaluation-pairing, lem-second-countable-smooth-manifolds-have-cw-homotopy-type]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Eleny-Nicoleta Ionel (notes by Andrew Lin), Stanford Math 215B Differential Topology, Winter 2023 (complete 63-page lecture notes)"
      url: https://web.stanford.edu/~lindrew/math215B.pdf
      locator: "Lectures 14-16, printed pp. 43-52: Thom class and Thom isomorphism, the intersection product dual to the cup product, Theorems 138-139 (PD[S] is the normal Thom class), Corollaries 143/146 and Theorem 144 (the Euler class is dual to the zero locus; self-intersection of S is the Euler class of the normal bundle)."
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy (author draft bookR4)"
      url: https://math.stanford.edu/~ralph/bookR4.pdf
      locator: "Chapter 8 (Tubular Neighborhoods, more on Transversality, and Intersection Theory) and Chapter 9 (Poincare Duality, Intersection theory, and Linking numbers) Sections 9.1-9.3, printed pp. 249-263, PDF pp. 260-274: Definition 9.3 and Theorems 9.4-9.5 (the intersection product is Poincare dual to the cup product and is represented by transverse intersections), Theorems 9.2 and Corollary 9.3 (the Thom class of a normal bundle is dual to the submanifold), Theorem 9.9, Corollaries 9.10-9.11 and Theorem 9.12 (self-intersection, nowhere-zero sections, Euler characteristic), and the representability remark after Theorem 9.5. The design register cites the earlier bookR3 numbering Sections 8.3-9.3, pp. 244-260; the recovered current draft bookR4 renumbers these sections, so the named results above are the binding locator."
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Princeton University Press, 1974; complete PDF)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "Sec. 9 Oriented Bundles and the Euler Class (printed pp. 95-104); Sec. 10 The Thom Isomorphism Theorem (pp. 105-114); Sec. 11 Computations in a Smooth Manifold (pp. 115-137, the dual-class intersection calculus); Sec. 12 Obstructions (pp. 139-146)."
dependency_level: 2
---

## Statement

Assume AC. Let $E\to M$ be a smooth $R$-oriented rank-$r$ real vector bundle over a closed $R$-oriented smooth $n$-manifold, with $R=\mathbb Z$ or $\mathbb F_2$. Let $s$ be a smooth section transverse to the zero section. Its zero locus $Z$ is a closed embedded submanifold of dimension $n-r$ when nonempty, and $\nu_Z\cong E|_Z$. Orient its normal bundle by this isomorphism and orient $Z$ in tangent-first order. Then
$$e(E)\cap[M]=(-1)^{r(n-r)}(i_Z)_*[Z]\in H_{n-r}(M;R).$$
In particular $(i_Z)_*[Z]\ne0$ is equivalent to $e(E)\ne0$, and either implies $Z\ne\varnothing$. When $r=n$, the Euler number $\langle e(E),[M]\rangle$ is the signed zero count; a nonzero count forces a zero. On a disconnected base the total count may cancel even when the zero-cycle class is nonzero. For $r\ne n$, no evaluation of $e(E)$ on the $n$-dimensional fundamental class is asserted. Over $\mathbb F_2$ orientations are canonical and the sign disappears. The zero section defines the Euler class by absolute pullback, and, when $M\ne\varnothing$, is transverse to itself exactly in rank zero; for $M=\varnothing$ transversality is vacuous.

## Facts & Assumptions

**Given:** AC and $M,E,s,Z$ with the orientations of the statement.

[F1] The vertical differential induces $\nu_Z\cong E|_Z$, and this isomorphism defines the tangent-first induced orientation ([[lem-normal-bundle-of-the-zero-locus-of-a-transverse-section]]).

[F2] The absolute image $\bar\alpha$ of the tangent-first normal Thom class satisfies $\bar\alpha\cap[M]=(-1)^{rz}(i_Z)_*[Z]$ ([[lem-normal-thom-class-realizes-the-poincare-dual-of-a-submanifold]]).

[F3] The relative pullback of the Thom class through the punctured-bundle pair is the normal Thom class, and its absolute image is $e(E)$ ([[lem-pullback-of-the-thom-class-along-a-transverse-section]]).

[F4] Cap duality is an isomorphism; degree-top cap followed by zero-chain augmentation is Kronecker evaluation ([[thm-poincare-duality-for-oriented-topological-manifolds]], [[def-cap-product-with-cohomology-first]], [[def-kronecker-evaluation-pairing]]).

[F5] Smooth manifolds are admissible bases and their bundles are numerable under AC. The Euler class of a rank-zero bundle is its supplied orientation unit ([[lem-second-countable-smooth-manifolds-have-cw-homotopy-type]], [[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

## Proof

**Proof technique:** identify the relative Thom pullback and then forget supports before applying normal Thom duality.

1.1 By [F1], $Z$ has codimension $r$ and normal bundle $E|_Z$ with the prescribed orientation. By [F5] every bundle and base used here meets the Thom hypotheses. Let $\alpha\in H^r(M,M\setminus Z;R)$ be its normal Thom extension and $\bar\alpha$ its absolute image. By [F3], $\bar\alpha=e(E)$. [F1, F3, F5, given]

2.1 Apply [F2] with $z=n-r$ to obtain $e(E)\cap[M]=(-1)^{r(n-r)}(i_Z)_*[Z]$. If $Z$ is empty its relative group is zero and [F3] gives $e(E)=0$, including $r>n$, when transversality forces the zero locus to be empty. Cap duality [F4] gives the stated equivalence of nonzero classes. [F2, F3, F4, step 1.1, algebra]

3.1 If $r=n$, each zero is nondegenerate, and its point orientation is the sign of $D^vs:T_xM\to E_x$ in the supplied orientations. The cap formula of [F4] followed by augmentation therefore gives $\langle e(E),[M]\rangle=\sum_{x\in Z}\operatorname{sgn}(D^vs_x)$. If $r=0$, $Z=M$ has dimension $n$; its induced orientation is the ambient orientation multiplied by the supplied rank-zero orientation unit $o$ (over $\mathbb Z$, $o^{-1}=o$). Thus $[Z]=o[M]$ and the formula reads $e(0_M,o)\cap[M]=o[M]$, as [F5] requires. For the zero section the vertical derivative is zero at every base point, so it is surjective exactly when $r=0$ if the base is nonempty; there are no points to check when the base is empty. Empty manifolds and the canonical mod-two orientations satisfy the same formulas. AC is inherited from the stated suppliers. [F1, F4, F5, step 2.1, algebra] ∎

