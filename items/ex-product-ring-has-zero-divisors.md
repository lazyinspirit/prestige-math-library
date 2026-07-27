---
id: ex-product-ring-has-zero-divisors
kind: example
title: "A product of two rings with $1 \\ne 0$ always has zero divisors: $(1,0)(0,1) = (0,0)$ in $\\mathbb{Z} \\times \\mathbb{Z}$, so a product of integral domains is never an integral domain"
status: draft
origin: session
deps: [def-product-ring, def-zero-divisor-and-integral-domain, def-ring, def-commutative-ring, lem-ring-elementary-consequences, ex-integers-as-a-commutative-ring, ex-integers-are-an-integral-domain-not-a-field, thm-int-comm-ring, def-integers, def-int-operations]
justified_by: []
aliases: []
landmark: false
short: "$R \\times S$ has zero divisors"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Product of rings (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_of_rings"
    - title: "Zero divisor (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zero_divisor"
pipeline_run: null
---

## Example

Let $R$ and $S$ be rings ([[def-ring]]) with $1_R \ne 0_R$ and $1_S \ne 0_S$,
and let $R \times S$ be the product ring ([[def-product-ring]]). Then:

1. $(1_R, 0_S)$ and $(0_R, 1_S)$ are nonzero elements of $R \times S$ whose
   product is $(0_R, 0_S)$; each is therefore a zero divisor
   ([[def-zero-divisor-and-integral-domain]]);
2. consequently $R \times S$ is never an integral domain, whatever $R$ and $S$
   are; in particular a product of two integral domains is not one;
3. the concrete instance is $\mathbb{Z} \times \mathbb{Z}$, where
   $(1,0)(0,1) = (0,0)$ while $\mathbb{Z}$ itself is an integral domain
   ([[ex-integers-are-an-integral-domain-not-a-field]]).

## Facts & Assumptions

**Given:** Rings $R$, $S$ with $1_R \ne 0_R$ and $1_S \ne 0_S$, and the product ring $R \times S$ with componentwise operations, zero $(0_R,0_S)$ and identity $(1_R,1_S)$ ([[def-product-ring]]).

[L1] $R \times S$ is a ring; its operations are componentwise, and two of its elements are equal exactly when both components agree ([[def-product-ring]], [[def-ring]]).

[L2] $x \cdot 0 = 0 = 0 \cdot x$ in any ring ([[lem-ring-elementary-consequences]]).

[L3] $a$ is a zero divisor when $a \ne 0$ and $ab = 0$ or $ba = 0$ for some $b \ne 0$; an integral domain is a commutative ring with $1 \ne 0$ and no zero divisors ([[def-zero-divisor-and-integral-domain]], [[def-commutative-ring]]).

[L4] $\mathbb{Z}$ is a commutative ring with $1 \ne 0$ and is an integral domain ([[ex-integers-as-a-commutative-ring]], [[ex-integers-are-an-integral-domain-not-a-field]], [[thm-int-comm-ring]], [[def-integers]], [[def-int-operations]]).

## Verification

**Proof technique:** direct.

1.1 $(1_R, 0_S) \ne (0_R, 0_S)$, since the first components differ, $1_R \ne 0_R$; and $(0_R, 1_S) \ne (0_R, 0_S)$, since the second components differ, $1_S \ne 0_S$. [L1, given]

1.2 $(1_R, 0_S)\cdot(0_R, 1_S) = (1_R 0_R,\; 0_S 1_S) = (0_R, 0_S)$, the components being computed by [L2]. [L1, L2]

2.1 Claim 1: by steps 1.1 and 1.2 the element $(1_R,0_S)$ is nonzero, the element $(0_R,1_S)$ is nonzero, and their product is the zero of $R \times S$; so each is a zero divisor. [step 1.1, step 1.2, L3]

3.1 Claim 2: an integral domain has no zero divisors, and $R \times S$ has one by step 2.1; so $R \times S$ is not an integral domain. Every integral domain satisfies $1 \ne 0$, so a product of two integral domains falls under the hypothesis and is never one. [step 2.1, L3]

4.1 Claim 3: $\mathbb{Z}$ is a ring with $1 \ne 0$ by [L4], so steps 2.1 and 3.1 apply with $R = S = \mathbb{Z}$, giving $(1,0)(0,1) = (0,0)$ with both factors nonzero; and $\mathbb{Z}$ is an integral domain by [L4], so $\mathbb{Z} \times \mathbb{Z}$ is a product of two integral domains that is not one. [step 2.1, step 3.1, L4] ∎

## Remarks

- **This is the cheapest source of zero divisors available.** No arithmetic
  beyond $x \cdot 0 = 0$ is used, and the two witnesses are written down rather
  than found. The other standard source is a ring of functions on a set with at
  least two points ([[def-ring-of-functions]]), and the two constructions are the
  same phenomenon: a point where one factor vanishes and the other does not.

- **The hypothesis is on both factors.** If $S$ is the one-element ring then
  $(0_R,1_S) = (0_R,0_S)$ is the zero of $R \times S$ and the argument collapses;
  indeed $R \times S$ is then essentially $R$ again, and may well be a domain.
  That is why both $1_R \ne 0_R$ and $1_S \ne 0_S$ are assumed.

- **The failure is not about commutativity.** $R$ and $S$ need not be
  commutative for claim 1; commutativity enters only in claim 2, because
  [[def-zero-divisor-and-integral-domain]] requires a domain to be commutative
  and the product of two commutative rings is commutative
  ([[def-product-ring]]).
