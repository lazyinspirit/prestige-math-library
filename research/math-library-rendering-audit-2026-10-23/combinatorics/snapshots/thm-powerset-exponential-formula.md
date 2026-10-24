---
id: thm-powerset-exponential-formula
kind: theorem
title: "Over a commutative $\\mathbb{Q}$-algebra, $\\operatorname{PSET}(\\mathcal{A})$ has generating function $\\exp(\\sum_{k\\ge 1}(-1)^{k-1}A(x^k)/k)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-powerset-product-formula, def-formal-exponential-logarithm-and-powers, thm-formal-exponential-logarithm-identities]
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

Over a commutative $\mathbb{Q}$-algebra,

$$\operatorname{OGF}(\operatorname{PSET}(\mathcal{A})) = \exp\Bigl(\sum_{k \ge 1}\frac{(-1)^{k-1}A(x^k)}{k}\Bigr).$$

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[L1] If $\mathcal{A}$ has no size-zero objects then $\operatorname{OGF}(\operatorname{PSET}(\mathcal{A})) = \prod_{n \ge 1}(1+x^n)^{a_n}$ ([[thm-powerset-product-formula]]).

[L2] Formal $\exp$ and $\log$ are inverse homomorphisms, and $\log((1+u)(1+v)) = \log(1+u) + \log(1+v)$ ([[thm-formal-exponential-logarithm-identities]]).

[L3] The formal logarithm is $\log(1+u) = \sum_{j \ge 1}(-1)^{j-1}u^j/j$ ([[def-formal-exponential-logarithm-and-powers]]).

## Proof

**Proof technique:** direct.

1.1 Let $P(x)$ denote the powerset generating function. By [L1], $P(x) = \prod_{n \ge 1}(1+x^n)^{a_n}$, so applying $\log$ and using [L2] gives $\log P(x) = \sum_{n \ge 1} a_n \log(1+x^n)$. [L1, L2]

2.1 By [L3], $\log(1+x^n) = \sum_{k \ge 1}(-1)^{k-1}x^{nk}/k$, so $\log P(x) = \sum_{n \ge 1}\sum_{k \ge 1} (-1)^{k-1}a_n x^{nk}/k = \sum_{k \ge 1}((-1)^{k-1}/k)\sum_{n \ge 1} a_n(x^k)^n = \sum_{k \ge 1} (-1)^{k-1}A(x^k)/k$. Again the rearrangement is coefficientwise finite in every degree. [step 1.1, L3, algebra]

3.1 Exponentiating step 2.1 and using the inverse relation of [L2] gives the stated formula for $P(x)$. [step 2.1, L2] ∎
