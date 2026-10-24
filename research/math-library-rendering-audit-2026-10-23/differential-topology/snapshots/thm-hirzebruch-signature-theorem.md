---
id: thm-hirzebruch-signature-theorem
kind: theorem
title: "The Hirzebruch signature theorem"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 10
deps:
  - lem-signature-and-l-genus-agree-on-products-of-complex-projective-spaces
  - lem-signature-and-l-genus-agree-on-complex-projective-spaces
  - lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism
  - thm-signature-is-an-oriented-cobordism-invariant
  - lem-signature-is-additive-under-disjoint-union-and-orientation-reversal
  - def-signature-of-a-closed-oriented-four-k-manifold
  - def-total-l-class-of-a-smooth-manifold
  - def-hirzebruch-l-polynomials
  - prop-products-of-complex-projective-spaces-span-rational-oriented-bordism
  - def-unoriented-and-oriented-bordism-groups
  - thm-cartesian-product-makes-bordism-a-graded-ring
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "Signature Theorem 19.4 and its proof, original pp. 224-226: both sides are algebra homomorphisms checked on the projective-space generators"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "Theorem 19.2 and its proof, printed pp. 36-37: same reduction to $\\mathbb{CP}^{2n}$ generators"
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Theorem 11.48 and its proof, printed pp. 98-99: the check on the spanning family of projective-space products"
    - title: "Jacob Lurie, The Hirzebruch Signature Formula (Lecture 25, Harvard Math 287x notes)"
      url: "https://people.math.harvard.edu/~lurie/287xnotes/Lecture25.pdf"
      locator: "Lecture 25, PDF pp. 1-2: the signature formula and the explicit L-series"
verification:
  precheck: pass
---

## Statement

Assume AC. For every closed oriented smooth manifold $M$ of dimension $4k$,
$k\ge0$,
$$\sigma(M)=\bigl\langle L_k(TM),[M]\bigr\rangle=L[M],$$
the Hirzebruch signature theorem. With the signature extended by zero in dimensions not divisible by four, the signature and the L-genus
define the same unital $\mathbb Q$-algebra homomorphism
$\Omega_*^{SO}\otimes\mathbb Q\to\mathbb Q$. In particular the signature of a
closed oriented $4k$-manifold is a rational polynomial in its Pontryagin
numbers and depends only on the oriented bordism class.

## Facts & Assumptions

**Given:** AC; a closed oriented smooth $4k$-manifold $M$; the signature $\sigma$ and the L-genus $L$ of the pair.

[F1] The signature vanishes on oriented boundaries and is additive and orientation-reversing, hence descends to a well-defined additive map on rationalized oriented bordism classes in each degree $4k$ ([[thm-signature-is-an-oriented-cobordism-invariant]], [[lem-signature-is-additive-under-disjoint-union-and-orientation-reversal]], [[def-signature-of-a-closed-oriented-four-k-manifold]]).

[F2] The L-genus is a unital $\mathbb Q$-algebra homomorphism $\Omega_*^{SO}\otimes\mathbb Q\to\mathbb Q$, additive, multiplicative and vanishing on boundaries ([[lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism]], [[def-total-l-class-of-a-smooth-manifold]]).

[F3] For $k=0$ the basis is the positively oriented point. For every $k\ge1$ the products $\mathbb{CP}^{2k_1}\times\cdots\times\mathbb{CP}^{2k_r}$ over partitions $k_1+\cdots+k_r=k$, $k_i\ge1$, form a $\mathbb Q$-basis of $\Omega_{4k}^{SO}\otimes\mathbb Q$; equivalently $\Omega_*^{SO}\otimes\mathbb Q$ is the polynomial algebra on the classes $[\mathbb{CP}^{2k}]$, $k\ge1$ ([[prop-products-of-complex-projective-spaces-span-rational-oriented-bordism]], [[def-unoriented-and-oriented-bordism-groups]], [[thm-cartesian-product-makes-bordism-a-graded-ring]]).

[F4] On each basis product $P_J=\mathbb{CP}^{2k_1}\times\cdots\times\mathbb{CP}^{2k_r}$ of [F3], with $r\ge1$, $k_i\ge1$ and the product of the complex orientations, $\sigma$ and $L$ both take the value $1$: $\sigma(P_J)=1=L[P_J]$ ([[lem-signature-and-l-genus-agree-on-products-of-complex-projective-spaces]], [[lem-signature-and-l-genus-agree-on-complex-projective-spaces]]).

[F5] The L-genus of a closed oriented $4k$-manifold is $L[M]=\langle L_k(TM),[M]\rangle$, a rational linear combination of its Pontryagin numbers ([[def-total-l-class-of-a-smooth-manifold]], [[def-hirzebruch-l-polynomials]]).

## Proof

**Proof technique:** direct; compare the two additive functionals on the spanning family of projective-space products.

1.1 Both $\sigma$ and $L$ are well-defined $\mathbb Q$-linear functionals on $\Omega_{4k}^{SO}\otimes\mathbb Q$: for $\sigma$ this is the descent statement [F1], extended $\mathbb Q$-linearly; for $L$ it is the homomorphism property [F2]. [given, F1, F2]

1.2 For $k\ge1$, every partition $J$ of $k$ has a nonempty projective-space product, and [F4] gives $\sigma(P_J)=1=L[P_J]$. For $k=0$ the basis is the positively oriented point, and both values are $1$ by the $k=0$ case of [[lem-signature-and-l-genus-agree-on-complex-projective-spaces]]. [given, F3, F4]

2.1 Equality of functionals: by [F3] the classes $[P_J]$ form a $\mathbb Q$-basis of $\Omega_{4k}^{SO}\otimes\mathbb Q$, and by steps 1.1 and 1.2 the two $\mathbb Q$-linear functionals $\sigma$ and $L$ agree on every basis element; hence $\sigma=L$ on $\Omega_{4k}^{SO}\otimes\mathbb Q$. Since this holds for every $k$ and both functionals are declared zero in dimensions not divisible by four, they agree on all of $\Omega_*^{SO}\otimes\mathbb Q$; by [F2] and [F3] the common functional is the unital $\mathbb Q$-algebra homomorphism recorded in the statement, since it is multiplicative on the polynomial generators according to [F4] and [F2]. [step 1.1, step 1.2, F2, F3]

3.1 Restating: for the closed oriented $4k$-manifold $M$, its class in $\Omega_{4k}^{SO}\otimes\mathbb Q$ maps to $\sigma(M)$ under the signature functional and to $L[M]=\langle L_k(TM),[M]\rangle$ under the L-genus by [F5], and step 2.1 shows these values are equal; the value depends only on the oriented bordism class and is a rational polynomial in the Pontryagin numbers of $M$ by [F5]. The empty manifold and $k=0$ give the value $1$ on a positively oriented point and $0$ on the empty manifold, consistent with both sides. [step 2.1, F1, F5] ∎
