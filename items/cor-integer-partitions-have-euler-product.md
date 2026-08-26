---
id: cor-integer-partitions-have-euler-product
kind: corollary
title: "Integer partitions have generating function $\\prod_{n\\ge 1}(1-x^n)^{-1}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-combinatorial-class-and-ordinary-generating-function, thm-multiset-product-formula]
justified_by: []
aliases: []
landmark: false
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

Let $\mathcal{P}$ be the class of integer partitions, with size equal to the sum
of the parts. Then

$$\operatorname{OGF}(\mathcal{P}) = \prod_{n \ge 1}(1-x^n)^{-1}.$$

## Facts & Assumptions

**Given:** For each $n \ge 1$, a single abstract object $p_n$ of size $n$, and the combinatorial class $\mathcal{U} := \{p_1,p_2,\dots\}$.

[L1] If $\mathcal{A}$ has no size-zero objects then $\operatorname{OGF}(\operatorname{MSET}(\mathcal{A})) = \prod_{n \ge 1}(1-x^n)^{-a_n}$ ([[thm-multiset-product-formula]]).

## Proof

**Proof technique:** direct.

1.1 A multiset of objects from $\mathcal{U}$ records exactly an integer partition: the multiplicity of $p_n$ is the number of parts equal to $n$, and the total size is the sum of the parts. Also $\mathcal{U}$ has exactly one object of each positive size and none of size $0$. [construct]

2.1 Applying [L1] with $a_n = 1$ for every $n \ge 1$ gives $\operatorname{OGF}(\mathcal{P}) = \prod_{n \ge 1}(1-x^n)^{-1}$. [step 1.1, L1] ∎
