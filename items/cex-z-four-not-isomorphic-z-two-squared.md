---
id: cex-z-four-not-isomorphic-z-two-squared
kind: counterexample
title: 'The cyclic group $\mathbb Z/4$ is not isomorphic to $\mathbb Z/2\times\mathbb Z/2$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-order-of-element-in-direct-product, prop-integers-modulo-n-as-a-quotient-group, lem-group-homomorphism-basic-properties, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Judson, Abstract Algebra: direct products"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/11%3A_Homomorphisms/11.04%3A_Direct_Products"
pipeline_run: null
---

## Counterexample

The groups $\mathbb Z/4$ and $\mathbb Z/2\times\mathbb Z/2$ both have four
elements, but they are not isomorphic: the first has an element of order $4$,
whereas every nonidentity element of the second has order $2$.

## Facts & Assumptions

**Given:** The additive quotient groups $\mathbb Z/4$ and $\mathbb Z/2$.

[L1] The residue classes modulo $n$ form the quotient group of the additive
integers ([[prop-integers-modulo-n-as-a-quotient-group]]).

[L2] In a direct product, a pair with finite component orders $m,n$ has order the
unique positive natural whose canonical integer image is
$\operatorname{lcm}(\iota(m),\iota(n))$
([[thm-order-of-element-in-direct-product]]).

[L3] A group isomorphism is a bijective homomorphism, and a homomorphism
preserves powers ([[def-group-isomorphism-and-automorphism]],
[[lem-group-homomorphism-basic-properties]]).

## Refutation

**Proof technique:** direct.

1.1 The class $[1]$ in $\mathbb Z/4$ has order $4$, while the nonzero class in $\mathbb Z/2$ has order $2$. [L1, given, algebra]

2.1 By [L2], each nonidentity pair has component orders $1,2$ or $2,2$. Their least common multiple is $2$, so every nonidentity pair has order $2$. [step 1.1, L2, given]

3.1 A group isomorphism preserves the least positive exponent at which a power is the identity, by [L3]; it therefore cannot send the order-$4$ element of step 1.1 to any element of the target. [step 1.1, step 2.1, L3]

4.1 Hence $\mathbb Z/4$ and $\mathbb Z/2\times\mathbb Z/2$ are not isomorphic. [step 3.1] ∎
