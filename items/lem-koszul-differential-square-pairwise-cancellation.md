---
id: lem-koszul-differential-square-pairwise-cancellation
kind: lemma
title: "Koszul Differential Square Pairwise Cancellation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-differential-coordinate-formula, lem-exterior-multiplication-koszul-sign-rule]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/0621"
pipeline_run: frontier-31a
---

## Statement

The two terms of $d^2(e_I\otimes m)$ obtained by deleting $i_a$ and $i_b$ in opposite orders have equal coefficient and opposite sign; hence $d^2=0$.

## Facts & Assumptions

**Given:** The rings, finite sequences, modules, and local hypotheses stated in the claim. The declared prerequisites used here are [[lem-koszul-differential-coordinate-formula]], [[lem-exterior-multiplication-koszul-sign-rule]].

## Proof

**Proof technique:** direct.

1.1 Fix two deleted positions $a<b$. Deleting $a$ then $b$ has sign $(-1)^{a-1}(-1)^{b-2}$, while the reverse order has sign $(-1)^{b-1}(-1)^{a-1}$; these differ by $-1$ and have the same scalar $x_{i_a}x_{i_b}$. [given, algebra]

2.1 Every summand of $d^2$ has a unique unordered pair of deleted indices, so the pairs cancel, including in characteristic $2$ where $-1=1$ and the two equal terms add to $0$. [step 1.1, algebra] ∎

