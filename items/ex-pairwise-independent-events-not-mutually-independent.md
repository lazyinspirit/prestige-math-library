---
id: ex-pairwise-independent-events-not-mutually-independent
kind: example
title: "Three pairwise-independent events that are not mutually independent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-uniform-finite-probability-space, def-pairwise-and-mutual-independence-of-events]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Section 1.1"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
pipeline_run: null
---

## Example

On the uniform space $\Omega=\{00,01,10,11\}$, let $A$ be the event that the first bit is $0$, let $B$ be the event that the second bit is $0$, and let $C$ be the event that the two bits agree. Then $A,B,C$ are pairwise independent but not mutually independent.

## Facts & Assumptions

**Given:** The uniform four-point space and events $A,B,C$ in the Example.

[L1] In a uniform finite space, probability is cardinality divided by the outcome count ([[def-uniform-finite-probability-space]]).

[L2] Pairwise independence requires each pairwise intersection to have product probability, while mutual independence also requires the triple identity ([[def-pairwise-and-mutual-independence-of-events]]).

## Verification

**Proof technique:** direct.

1.1 Each of $A,B,C$ has two outcomes and probability $1/2$. Moreover $A\cap B=A\cap C=B\cap C=\{00\}$, so every pairwise intersection has probability $1/4$. [L1]

2.1 Therefore every pair satisfies $\mathbb P(E\cap F)=1/4=(1/2)(1/2)$. [step 1.1, L2, algebra]

2.2 The triple intersection is $\{00\}$ and has probability $1/4$, whereas the product of the three probabilities is $1/8$. [step 1.1, L1, algebra]

3.1 Thus the events are pairwise independent but not mutually independent. [step 2.1, step 2.2, L2] ∎
