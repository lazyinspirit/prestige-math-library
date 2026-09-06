---
id: lem-the-cellular-boundary-squares-to-zero
kind: lemma
title: The cellular boundary squares to zero
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cellular-boundary-from-three-consecutive-skeleta, thm-long-exact-sequence-of-a-pair-in-singular-homology]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: J. Peter May, A Concise Course in Algebraic Topology, Chapter 13
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
---

## Statement

For every $n\geq1$, $d_{n-1}d_n=0$.

## Facts & Assumptions

**Given:** The three-skeleton definition of $d$ in [[def-cellular-boundary-from-three-consecutive-skeleta]].

## Proof

**Proof technique:** direct.

1.1 For $n=1$ the composite is zero because $d_0=0$ by definition. [given]

1.2 Let $n\geq2$.  Write $$d_n=j_{n-1}\partial_n, \qquad d_{n-1}=j_{n-2}\partial_{n-1},$$ where $j_{n-1}:H_{n-1}(X^{n-1})\to H_{n-1}(X^{n-1},X^{n-2})$ is the quotient map.  In the long exact sequence of the pair $(X^{n-1},X^{n-2})$, $j_{n-1}$ is immediately followed by $\partial_{n-1}$. [given]

2.1 Exactness gives $\partial_{n-1}j_{n-1}=0$, and hence $$d_{n-1}d_n =j_{n-2}(\partial_{n-1}j_{n-1})\partial_n=0.$$ Together with step 1.1 this covers every $n\geq1$. [step 1.1, step 1.2] ∎
