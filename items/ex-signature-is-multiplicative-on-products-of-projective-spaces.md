---
id: ex-signature-is-multiplicative-on-products-of-projective-spaces
kind: example
title: "Multiplicativity of the signature on products of projective spaces"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 10
deps:
  - lem-signature-and-l-genus-agree-on-complex-projective-spaces
  - def-axiom-of-choice
  - def-fundamental-class-of-a-compact-oriented-manifold
  - def-middle-dimensional-intersection-form
  - def-product-orientation
  - def-signature-of-a-closed-oriented-four-k-manifold
  - lem-signature-and-l-genus-agree-on-products-of-complex-projective-spaces
  - lem-tangent-bundle-of-complex-projective-space-and-its-pontryagin-classes
  - prop-products-of-complex-projective-spaces-span-rational-oriented-bordism
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - thm-signature-is-multiplicative-under-cartesian-products
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "Exercise 11.25 and (11.50), printed pp. 95 and 98: multiplicativity of the signature and the value 1 on products of projective spaces"
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, Lemma 19.3(2), original p. 224: product multiplicativity of the signature"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, property (2), printed p. 34: the signature is multiplicative under products"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Example

Assume AC, inherited from the signature-product theorem. Give
$\mathbb{CP}^2\times\mathbb{CP}^2$ the product orientation and the product
smooth structure. Then
$$\sigma(\mathbb{CP}^2\times\mathbb{CP}^2) =\sigma(\mathbb{CP}^2)\,\sigma(\mathbb{CP}^2)=1\cdot1=1,$$
and the L-genus of the product is also $1$. Since $[\mathbb{CP}^2]$ is the
first of the polynomial generators of $\Omega_*^{SO}\otimes\mathbb Q$, this
verifies multiplicativity of the signature on the square of the degree-four
generator of the graded ring $\Omega_*^{SO}\otimes\mathbb Q$, whose square lies in degree eight.

## Facts & Assumptions

**Given:** AC; the closed oriented smooth $4$-manifold $\mathbb{CP}^2$ with the complex orientation; the product $\mathbb{CP}^2\times\mathbb{CP}^2$ with the product orientation and product smooth structure.

[F1] For closed oriented smooth manifolds $M^{4a}$ and $N^{4b}$ with the product orientation, $\sigma(M\times N)=\sigma(M)\,\sigma(N)$ ([[thm-signature-is-multiplicative-under-cartesian-products]]).

[F2] The complex projective plane satisfies $\sigma(\mathbb{CP}^2)=1$ ([[lem-signature-and-l-genus-agree-on-complex-projective-spaces]]).

[F3] For $P=\mathbb{CP}^{2k_1}\times\cdots\times\mathbb{CP}^{2k_r}$ with the product orientation, $k_i\ge1$, one has $\sigma(P)=1=L[P]$ ([[lem-signature-and-l-genus-agree-on-products-of-complex-projective-spaces]]).

[F4] The products $\mathbb{CP}^{2j_1}\times\cdots\times\mathbb{CP}^{2j_r}$ over partitions form a $\mathbb Q$-basis of $\Omega_{4k}^{SO}\otimes\mathbb Q$; equivalently $\Omega_*^{SO}\otimes\mathbb Q$ is the polynomial algebra on the classes $[\mathbb{CP}^2],[\mathbb{CP}^4],[\mathbb{CP}^6],\dots$ ([[prop-products-of-complex-projective-spaces-span-rational-oriented-bordism]]).

[F5] Products of closed oriented smooth manifolds carry the product orientation and the canonical product smooth structure, hence are again closed oriented smooth ([[def-product-orientation]], [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]).

## Verification

**Proof technique:** direct; instantiate multiplicativity on the product and compare with the L-genus value.

1.1 By [[lem-signature-and-l-genus-agree-on-complex-projective-spaces]], $\sigma(\mathbb{CP}^2)=1$. [given, F2]

1.2 By [F5], $\mathbb{CP}^2\times\mathbb{CP}^2$ is a closed oriented smooth $8$-manifold with the product orientation, so [F1] with $M=N=\mathbb{CP}^2$ gives $\sigma(\mathbb{CP}^2\times\mathbb{CP}^2)=\sigma(\mathbb{CP}^2)\,\sigma(\mathbb{CP}^2)$. [given, F1, F5]

2.1 By [F2], $\sigma(\mathbb{CP}^2)=1$, so step 1.2 gives $\sigma(\mathbb{CP}^2\times\mathbb{CP}^2)=1\cdot1=1$. [step 1.2, F2]

3.1 By [F3] with $k_1=k_2=1$, the L-genus of the product is $L[\mathbb{CP}^2\times\mathbb{CP}^2]=1$, agreeing with the signature value of step 2.1. [given, F3]

4.1 By [F4] the class $[\mathbb{CP}^2]$ is the first polynomial generator of $\Omega_*^{SO}\otimes\mathbb Q$, so $\mathbb{CP}^2\times\mathbb{CP}^2$ represents its square in degree eight; steps 2.1 and 3.1 exhibit multiplicativity there, the signature of the product being the product of the factor signatures and the L-genus agreeing. [step 2.1, step 3.1, F4] ∎
