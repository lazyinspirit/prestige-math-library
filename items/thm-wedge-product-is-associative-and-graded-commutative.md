---
id: thm-wedge-product-is-associative-and-graded-commutative
kind: theorem
title: "The wedge product is associative and graded commutative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-wedge-product-of-alternating-covectors,
       lem-the-wedge-product-is-alternating-and-bilinear]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement

For alternating covectors $\alpha\in\operatorname{Alt}^k(V)$,
$\beta\in\operatorname{Alt}^\ell(V)$, and
$\gamma\in\operatorname{Alt}^m(V)$,

$$
(\alpha\wedge\beta)\wedge\gamma=\alpha\wedge(\beta\wedge\gamma)
$$

and

$$
\alpha\wedge\beta=(-1)^{k\ell}\beta\wedge\alpha.
$$

## Facts & Assumptions

**Given:** Alternating covectors $\alpha,\beta,\gamma$ of degrees $k,\ell,m$.

[F1] The wedge product is the normalized alternation of the tensor product, equivalently the signed shuffle sum ([[def-wedge-product-of-alternating-covectors]]).

[L1] The wedge product is alternating and bilinear ([[lem-the-wedge-product-is-alternating-and-bilinear]]).

## Proof
**Proof technique:** direct.

1.1 Using [F1] twice and bilinearity from [L1], both $(\alpha\wedge\beta)\wedge\gamma$ and $\alpha\wedge(\beta\wedge\gamma)$ are the full alternation of the multilinear tensor $\alpha\otimes\beta\otimes\gamma$ with the same normalization factor. Hence they are equal. [F1, L1, given, algebra]

1.2 In the shuffle formula of [F1], swapping the $k$ inputs destined for $\alpha$ with the $\ell$ inputs destined for $\beta$ contributes the sign of the block permutation, namely $(-1)^{k\ell}$. Therefore every term of $\alpha\wedge\beta$ matches the corresponding term of $(-1)^{k\ell}\beta\wedge\alpha$. [F1, given, algebra]

2.1 Therefore the wedge product is associative and graded commutative. [step 1.1, step 1.2] ∎