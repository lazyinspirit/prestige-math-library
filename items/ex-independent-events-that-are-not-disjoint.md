---
id: ex-independent-events-that-are-not-disjoint
kind: example
title: "Independent events need not be disjoint"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-uniform-finite-probability-space, def-pairwise-and-mutual-independence-of-events]
proof_strategy: direct
sources:
  references: []
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

On the uniform space $\Omega=\{00,01,10,11\}$, let
$$A:=\{00,01\},\qquad B:=\{00,10\}.$$
Then $A$ and $B$ are independent, but they are not disjoint because
$A\cap B=\{00\}$.

## Facts & Assumptions

**Given:** The uniform four-point space and the events $A,B$ displayed above.

[L1] In a uniform finite space, event probability is cardinality divided by the
total number of outcomes. ([[def-uniform-finite-probability-space]])

[L2] Two events are independent exactly when
$\mathbb P(A\cap B)=\mathbb P(A)\mathbb P(B)$.
([[def-pairwise-and-mutual-independence-of-events]])

## Verification

**Proof technique:** direct.

1.1 By [L1], the events $A$ and $B$ each have probability $2/4=1/2$, while $A\cap B=\{00\}$ has probability $1/4$. [L1]

2.1 Step 1.1 gives $$\mathbb P(A\cap B)=\frac14=\frac12\cdot\frac12=\mathbb P(A)\mathbb P(B),$$ so [L2] shows that $A$ and $B$ are independent. Since $00\in A\cap B$, they are not disjoint. [step 1.1, L2] ∎
