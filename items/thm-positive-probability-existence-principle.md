---
id: thm-positive-probability-existence-principle
kind: theorem
title: "An event of positive probability in a finite probability space is nonempty"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-finite-probability-basic-laws]
justified_by: []
aliases: []
landmark: true
proof_strategy: contrapositive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Chapter 2"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Section 2.1"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
pipeline_run: null
---

## Statement

If an event $A$ in a finite probability space has $\mathbb P(A)>0$, then $A$ is nonempty.

## Facts & Assumptions

**Given:** An event $A$ in a finite probability space.

[L1] The empty event has probability zero ([[lem-finite-probability-basic-laws]]).

## Proof

**Proof technique:** contrapositive.

1.1 Assume $A$ is empty. [assume-hyp, contrapositive-reduce]

2.1 Then $\mathbb P(A)=0$ by [L1], so $\mathbb P(A)$ is not positive. [step 1.1, L1]

3.1 The contrapositive proves that positive probability implies nonemptiness. It asserts existence of an outcome, not a canonical choice of one. [step 2.1, discharge-contrapositive] ∎
