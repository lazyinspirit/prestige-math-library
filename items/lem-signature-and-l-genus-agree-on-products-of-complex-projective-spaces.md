---
id: lem-signature-and-l-genus-agree-on-products-of-complex-projective-spaces
kind: lemma
title: "The signature and the L-genus agree on products of complex projective spaces"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
aliases: []
dependency_level: 9
deps:
  - def-axiom-of-choice
  - def-product-orientation
  - lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism
  - lem-l-genus-of-complex-projective-space-is-one
  - lem-signature-and-l-genus-agree-on-complex-projective-spaces
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
      locator: "proof of Theorem 11.48, equations (11.50)-(11.54), printed pp. 98-99: both invariants are 1 on products of projective spaces"
    - title: "John Milnor and James Stasheff, Characteristic Classes (re-typeset scan; original pagination)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "section 19, original pp. 225-226: the check on the generators $\\mathbb{CP}^{2k}$ and their products"
    - title: "Tom Weston, An Introduction to Cobordism Theory (lecture notes, Stanford)"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "section 19, printed pp. 36-37: the check on the projective-space generators"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC, inherited from the signature-product and L-genus suppliers. Let $r\ge1$ and
$k_1,\dots,k_r\ge1$ with $k_1+\cdots+k_r=k$ and let
$P=\mathbb{CP}^{2k_1}\times\cdots\times\mathbb{CP}^{2k_r}$ carry the product
orientation. Then
$$\sigma(P)=1=L[P].$$

## Facts & Assumptions

**Given:** AC, integers $k_1,\dots,k_r\ge1$ with sum $k$, and the product $P=\mathbb{CP}^{2k_1}\times\cdots\times\mathbb{CP}^{2k_r}$ with the product orientation and product smooth structure.

[F1] The signature is multiplicative under Cartesian products: $\sigma(X\times Y)=\sigma(X)\sigma(Y)$ for closed oriented manifolds of dimensions divisible by four ([[thm-signature-is-multiplicative-under-cartesian-products]]).

[F2] The L-genus is a unital $\mathbb Q$-algebra homomorphism on rational oriented bordism, in particular multiplicative: $L[X\times Y]=L[X]L[Y]$, with the product orientation ([[lem-l-genus-is-an-oriented-rational-bordism-ring-homomorphism]]).

[F3] $\sigma(\mathbb{CP}^{2k_i})=1=L[\mathbb{CP}^{2k_i}]$ for each factor ([[lem-signature-and-l-genus-agree-on-complex-projective-spaces]], [[lem-l-genus-of-complex-projective-space-is-one]]).

[F4] The product orientation and product smooth structure are those of [[def-product-orientation]] and [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]].

## Proof

**Proof technique:** direct; iterate multiplicativity over the factors.

1.1 Signature: by [F1], applied inductively to the product and using [F4], $\sigma(P)=\prod_{i=1}^r\sigma(\mathbb{CP}^{2k_i})=\prod_{i=1}^r1=1$ by [F3]. [given, F1, F3, F4]

1.2 L-genus: by [F2], $L[P]=\prod_{i=1}^rL[\mathbb{CP}^{2k_i}]=\prod_{i=1}^r1=1$ by [F3]. [given, F2, F3, F4]

2.1 Steps 1.1 and 1.2 give $\sigma(P)=1=L[P]$, for every $r\ge1$, every partition $k_1+\cdots+k_r=k$ and every $k\ge1$; the products are closed oriented smooth of dimension $4k$ and the case of a single factor is [F3]. [step 1.1, step 1.2] ∎
