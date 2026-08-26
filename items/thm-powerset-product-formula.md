---
id: thm-powerset-product-formula
kind: theorem
title: "If $\\mathcal{A}$ has no size-zero objects then $\\operatorname{PSET}(\\mathcal{A})$ has generating function $\\prod_{n\\ge 1}(1+x^n)^{a_n}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-multiset-and-powerset-constructions, thm-formal-power-series-unit-criterion, def-summable-family-of-formal-series, thm-summable-families-and-rearrangement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
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

$$A(x) = \sum_{n \ge 1} a_n x^n.$$

Then $\operatorname{PSET}(\mathcal{A})$ is a combinatorial class and

$$\operatorname{OGF}(\operatorname{PSET}(\mathcal{A})) = \prod_{n \ge 1}(1+x^n)^{a_n}.$$

## Facts & Assumptions

**Given:** A combinatorial class $\mathcal{A}$ with no size-zero objects and counting sequence $(a_n)_{n \ge 1}$.

[L1] Summable formal families may be regrouped and rearranged, distribute over multiplication, and have well-defined locally finite products ([[thm-summable-families-and-rearrangement]]).

## Proof

**Proof technique:** direct.

1.1 For one fixed object $u \in \mathcal{A}$ of size $n \ge 1$, a powerset object either omits $u$ or includes it once, so the contribution of $u$ is the two-term series $1+x^n$. [construct]

2.1 A powerset object is a simultaneous yes-or-no choice for every object of $\mathcal{A}$. Since every object has positive size, only finitely many such choices can affect a fixed degree, so the per-object factors of step 1.1 form a locally finite product that can be regrouped by [L1]. This also shows that each size layer of $\operatorname{PSET}(\mathcal{A})$ is finite. [step 1.1, L1]

3.1 For each $n \ge 1$ there are exactly $a_n$ objects of size $n$, and each contributes one factor $1+x^n$. Regrouping the locally finite product of step 2.1 therefore gives $\operatorname{OGF}(\operatorname{PSET}(\mathcal{A})) = \prod_{n \ge 1}(1+x^n)^{a_n}$. [step 2.1, L1] ∎
