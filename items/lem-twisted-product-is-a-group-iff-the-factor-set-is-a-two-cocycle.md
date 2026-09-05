---
id: lem-twisted-product-is-a-group-iff-the-factor-set-is-a-two-cocycle
kind: lemma
title: "The twisted product is a group iff the factor set is a two-cocycle"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-normalized-two-cocycle-and-two-coboundary, def-twisted-product-extension-from-a-two-cocycle]
proof_strategy: iff
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Statement

For the multiplication

$$
(m,g)(n,h)=(m+g\cdot n+f(g,h),gh)
$$

on $M\times G$, the following are equivalent:

1. $M\times_f G$ is a group with identity $(0,1)$;
2. $f$ is a normalized two-cocycle.

## Facts & Assumptions

**Given:** A function $f:G\times G\to M$ and the twisted multiplication on
$M\times G$.

[F1] Normalized two-cocycles satisfy the cocycle and normalization equations
([[def-normalized-two-cocycle-and-two-coboundary]]).

[F2] The twisted product uses the displayed multiplication
([[def-twisted-product-extension-from-a-two-cocycle]]).

## Proof

**Proof technique:** iff.

1.1 Assume $f$ is a normalized two-cocycle. Using the normalization equations from [F1], one checks directly from [F2] that $(0,1)$ is a two-sided identity. The inverse of $(m,g)$ is $$\bigl(-g^{-1}\cdot m-g^{-1}\cdot f(g,g^{-1}),g^{-1}\bigr).$$ [F1, F2, given, algebra]

1.2 Still under the cocycle hypothesis, compute both products $((m,g)(n,h))(r,k)$ and $(m,g)((n,h)(r,k))$ from [F2]. Their second coordinates are both $ghk$, and equality of the first coordinates is exactly the cocycle equation from [F1]. So the law is associative. [F1, F2, algebra]

1.3 Conversely, suppose the twisted law makes $M\times G$ a group with identity $(0,1)$. Comparing $(m,g)(0,1)$ and $(0,1)(m,g)$ with $(m,g)$ forces $f(g,1)=f(1,g)=0$. Comparing $((0,g)(0,h))(0,k)$ and $(0,g)((0,h)(0,k))$ then yields the cocycle equation. Hence $f$ is a normalized two-cocycle. [F2, given, algebra]

2.1 Step 1.2 proves the forward implication, and step 1.3 proves the reverse implication. [step 1.2, step 1.3] ∎
