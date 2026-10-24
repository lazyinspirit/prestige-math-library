---
id: ex-quotient-of-f-three-by-a-line-and-canonical-projection
kind: example
title: "The quotient of $F^3$ by a coordinate line and its canonical projection"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-quotient-vector-space-operations-and-projection, lem-quotient-basis-lifts-to-an-adapted-basis]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $W=F(1,0,0)\subseteq F^3$. Every coset in $F^3/W$ has a unique representative $(0,y,z)$, the cosets
$$(0,1,0)+W,\qquad(0,0,1)+W$$
form a basis of the quotient, and the canonical projection is
$$\pi(x,y,z)=(x,y,z)+W=(0,y,z)+W.$$
Thus $\dim(F^3/W)=2$ and $\ker\pi=W$.

## Facts & Assumptions

**Given:** The coordinate line $W=F(1,0,0)$ in $F^3$.

[L1] $v+W=v'+W$ exactly when $v-v'\in W$; the quotient operations are independent of representatives and make $V/W$ a vector space; and the canonical projection $\pi:V\to V/W$ is a surjective linear map with $\ker\pi=W$ ([[prop-quotient-vector-space-operations-and-projection]]).

[L2] Representatives of a quotient basis, placed after a basis of $W$, form a basis of the original space ([[lem-quotient-basis-lifts-to-an-adapted-basis]]).

## Verification

**Proof technique:** computation.

1.1 Subtracting $(x,0,0)\in W$ shows $(x,y,z)+W=(0,y,z)+W$; if two such representatives agree, their difference $(0,y-y',z-z')$ lies in $W$, forcing $y=y'$ and $z=z'$. [L1, algebra]

1.2 The standard list $((1,0,0),(0,1,0),(0,0,1))$ is a basis of $F^3$, so [L2] makes the last two cosets a quotient basis. [L2, algebra]

2.1 The displayed formula for $\pi$, its dimension, and $\ker\pi=W$ now follow from steps 1.1-1.2 and [L1]. [step 1.1, step 1.2, L1] ∎
