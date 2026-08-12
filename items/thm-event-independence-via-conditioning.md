---
id: thm-event-independence-via-conditioning
kind: theorem
title: "Two positive-probability events are independent exactly when conditioning on either leaves the other's probability unchanged"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-conditional-probability, def-pairwise-and-mutual-independence-of-events]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Section 1.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 4.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
pipeline_run: null
---

## Statement

Let $A$ and $B$ satisfy $\mathbb P(A)>0$ and $\mathbb P(B)>0$. The following are equivalent:

1. $A$ and $B$ are independent;
2. $\mathbb P(A\mid B)=\mathbb P(A)$;
3. $\mathbb P(B\mid A)=\mathbb P(B)$.

## Facts & Assumptions

**Given:** Positive-probability events $A$ and $B$.

[L1] Conditional probability is $\mathbb P(A\mid B)=\mathbb P(A\cap B)/\mathbb P(B)$ for $\mathbb P(B)>0$ ([[def-conditional-probability]]).

[L2] Independence means $\mathbb P(A\cap B)=\mathbb P(A)\mathbb P(B)$ ([[def-pairwise-and-mutual-independence-of-events]]).

## Proof

**Proof technique:** direct.

1.1 If $A$ and $B$ are independent, divide the identity in [L2] by $\mathbb P(B)>0$ to obtain $\mathbb P(A\mid B)=\mathbb P(A)$. [L1, L2, algebra]

1.2 The same calculation with $A$ and $B$ interchanged gives $\mathbb P(B\mid A)=\mathbb P(B)$. [L1, L2, algebra]

1.3 Conversely, multiplying either conditional identity by its positive conditioning probability gives the product identity in [L2]. [L1, L2, algebra]

2.1 Thus each of conditions 2 and 3 is equivalent to condition 1, proving all three equivalent. [step 1.1, step 1.2, step 1.3] ∎
