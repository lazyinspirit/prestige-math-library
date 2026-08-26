---
id: thm-multiset-product-formula
kind: theorem
title: "If $\\mathcal{A}$ has no size-zero objects then $\\operatorname{MSET}(\\mathcal{A})$ has generating function $\\prod_{n\\ge 1}(1-x^n)^{-a_n}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-multiset-and-powerset-constructions, thm-formal-power-series-unit-criterion, def-summable-family-of-formal-series, thm-summable-families-and-rearrangement]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics"
      url: "https://ac.cs.princeton.edu/home/AC.pdf"
    - title: "Stephen Melczer, An Invitation to Enumeration, Chapter 5: Combinatorial Constructions"
      url: "https://enumeration.ca/toolbox/combinatorial-constructions/"
pipeline_run: null
---

## Statement

Let $\mathcal{A}$ be a combinatorial class with no size-zero objects, and write

$$A(x) = \sum_{n \ge 1} a_n x^n$$

for its ordinary generating function. Then $\operatorname{MSET}(\mathcal{A})$ is
a combinatorial class and

$$\operatorname{OGF}(\operatorname{MSET}(\mathcal{A})) = \prod_{n \ge 1}(1-x^n)^{-a_n}.$$

## Facts & Assumptions

**Given:** A combinatorial class $\mathcal{A}$ with no size-zero objects and counting sequence $(a_n)_{n \ge 1}$.

[L1] A formal power series is a unit exactly when its constant coefficient is a unit ([[thm-formal-power-series-unit-criterion]]).

[L2] Summable formal families may be regrouped and rearranged, distribute over multiplication, and have well-defined locally finite products ([[thm-summable-families-and-rearrangement]]).

## Proof

**Proof technique:** direct.

1.1 For one fixed object $u \in \mathcal{A}$ of size $n \ge 1$, the possible multiplicities $0,1,2,\dots$ contribute the formal series $1+x^n+x^{2n}+\cdots$, which is $(1-x^n)^{-1}$ because its product with $1-x^n$ is $1$ coefficientwise. The factor exists by [L1], since $1-x^n$ has constant coefficient $1$. [L1, algebra]

2.1 A multiset of $\mathcal{A}$ is exactly a choice of one multiplicity for each object of $\mathcal{A}$. Because every object has positive size, only finitely many objects can contribute to any fixed degree $<N$, so the product of the per-object series of step 1.1 is locally finite and may be regrouped by [L2]. This also shows that each size layer of $\operatorname{MSET}(\mathcal{A})$ is finite. [step 1.1, L2]

3.1 Regroup the factors of step 2.1 by object size. For each $n \ge 1$ there are exactly $a_n$ objects of size $n$, and each contributes one factor $(1-x^n)^{-1}$, so the total contribution of size $n$ objects is $(1-x^n)^{-a_n}$. Multiplying over all sizes gives the displayed product formula. [step 2.1, L2] ∎
