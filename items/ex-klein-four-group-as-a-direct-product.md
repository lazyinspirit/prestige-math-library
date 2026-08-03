---
id: ex-klein-four-group-as-a-direct-product
kind: example
title: "The Klein four-group as the direct product of two groups of order $2$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-external-direct-product-is-a-group, thm-division-algorithm-in-z, prop-integers-modulo-n-as-a-quotient-group, thm-integers-modulo-n-basic-algebra, def-addition-and-multiplication-modulo-n, lem-order-characterisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Judson, Abstract Algebra: direct products of groups"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/11%3A_Homomorphisms/11.04%3A_Direct_Products"
pipeline_run: null
---

## Example

The **Klein four-group** is

$$V_4=(\mathbb Z/2,+)\times(\mathbb Z/2,+).$$

It has the four elements $(0,0),(1,0),(0,1),(1,1)$. Every nonidentity element
has order $2$, so $V_4$ is not cyclic.

## Facts & Assumptions

**Given:** The residue-class additive group $\mathbb Z/2$.

[L1] Division with remainder is available in the integers, and congruence
classes modulo $2$ are the quotient group with its stated addition and identity
class $0$ ([[thm-division-algorithm-in-z]],
[[prop-integers-modulo-n-as-a-quotient-group]],
[[thm-integers-modulo-n-basic-algebra]],
[[def-addition-and-multiplication-modulo-n]]).

[L2] The external direct product of two groups is a group with componentwise
operation ([[thm-external-direct-product-is-a-group]]).

[L3] If an element has finite order, then the cyclic subgroup it generates has
that many elements ([[lem-order-characterisation]]).

## Verification

**Proof technique:** direct.

1.1 Dividing any integer $a$ by $2$ gives $a=2q+r$ with $0\le r<2$, so its class is either $[0]$ or $[1]$. These are distinct because $1-0$ is not a multiple of $2$, and $[1]+[1]=[0]$. Hence the four displayed pairs are exactly the elements of $V_4$. [L1, given, algebra]

2.1 For each nonzero pair $(a,b)$ in that list, $(a,b)+(a,b)=(a+a,b+b)=(0,0)$; it is not the identity, so its order is $2$. [step 1.1, L2, algebra]

3.1 If $V_4$ were cyclic, a generator could not be the identity, so step 2.1 would give it order $2$. Then [L3] says that its cyclic subgroup has two elements, contradicting step 1.1. Thus $V_4$ is not cyclic. [step 1.1, step 2.1, L3] ∎
