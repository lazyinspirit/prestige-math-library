---
id: thm-multiset-exponential-formula
kind: theorem
title: "Over a commutative $\\mathbb{Q}$-algebra, $\\operatorname{MSET}(\\mathcal{A})$ has generating function $\\exp(\\sum_{k\\ge 1}A(x^k)/k)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-multiset-product-formula, def-formal-exponential-logarithm-and-powers, thm-formal-exponential-logarithm-identities]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

Let $\mathcal{A}$ be a combinatorial class with no size-zero objects, and let

$$A(x) = \sum_{n \ge 1} a_n x^n$$

be its ordinary generating function. Over a commutative $\mathbb{Q}$-algebra,

$$\operatorname{OGF}(\operatorname{MSET}(\mathcal{A})) = \exp\Bigl(\sum_{k \ge 1}\frac{A(x^k)}{k}\Bigr).$$

## Facts & Assumptions

**Given:** The hypotheses and notation of the statement above.

[L1] If $\mathcal{A}$ has no size-zero objects then $\operatorname{OGF}(\operatorname{MSET}(\mathcal{A})) = \prod_{n \ge 1}(1-x^n)^{-a_n}$ ([[thm-multiset-product-formula]]).

[L2] Formal $\exp$ and $\log$ are inverse homomorphisms, and $\log((1+u)(1+v)) = \log(1+u) + \log(1+v)$ ([[thm-formal-exponential-logarithm-identities]]).

[L3] The formal logarithm is $\log(1+u) = \sum_{j \ge 1}(-1)^{j-1}u^j/j$ ([[def-formal-exponential-logarithm-and-powers]]).

## Proof

**Proof technique:** direct.

1.1 Let $M(x)$ denote the multiset generating function. By [L1], $M(x) = \prod_{n \ge 1}(1-x^n)^{-a_n}$, so applying $\log$ and using [L2] gives $\log M(x) = \sum_{n \ge 1} -a_n \log(1-x^n)$. [L1, L2]

2.1 By [L3], $-\log(1-x^n) = \sum_{k \ge 1}x^{nk}/k$, so $\log M(x) = \sum_{n \ge 1}\sum_{k \ge 1} a_n x^{nk}/k = \sum_{k \ge 1}(1/k)\sum_{n \ge 1} a_n(x^k)^n = \sum_{k \ge 1} A(x^k)/k$. For each fixed degree, only finitely many pairs $(n,k)$ contribute, so the rearrangement is coefficientwise finite. [step 1.1, L3, algebra]

3.1 Exponentiating the identity of step 2.1 and using that $\exp$ and $\log$ are inverse maps by [L2] gives $M(x) = \exp(\sum_{k \ge 1} A(x^k)/k)$. [step 2.1, L2] ∎
