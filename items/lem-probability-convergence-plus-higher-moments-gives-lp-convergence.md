---
id: lem-probability-convergence-plus-higher-moments-gives-lp-convergence
kind: lemma
title: Convergence in probability plus a higher-moment bound implies Lp convergence
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: []
proof_strategy: direct
axiom_use: No choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Jan Mandel, Loren Cobb, and Jonathan D. Beezley, On the Convergence of the Ensemble Kalman Filter, §4"
      url: "https://arxiv.org/pdf/0901.2951v2"
---

## Statement

Let $1\le q<s<\infty$. Suppose random vectors $Z_n,Z$ in a fixed finite-dimensional Euclidean space satisfy $Z_n\to Z$ in probability, $\mathbb E\|Z\|^s<\infty$, and $\sup_n\mathbb E\|Z_n\|^s<\infty$. Then $\mathbb E\|Z_n-Z\|^q\to0$.

## Facts & Assumptions

**Given:** The moment, dimension, and convergence hypotheses in the Statement.

[A1] Convergence in probability means $\mathbb P(\|Z_n-Z\|>\delta)\to0$ for every $\delta>0$.

[A2] $1\le q<s$ and the stated $s$th moments are uniformly bounded.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $D_n=\|Z_n-Z\|$. The triangle inequality and convexity of $t\mapsto t^s$ on $[0,\infty)$ give $D_n^s\le2^{s-1}(\|Z_n\|^s+\|Z\|^s)$, so [A2] implies $\sup_n\mathbb E D_n^s=:C<\infty$. [A1, A2, given, algebra]

2.1 For any $0<\delta<M$, split according to $D_n\le\delta$, $\delta<D_n\le M$, and $D_n>M$. On these three events, respectively, $D_n^q\le\delta^q$, $D_n^q\le M^q$, and $D_n^q\le M^{q-s}D_n^s$. Therefore $\mathbb E D_n^q\le\delta^q+M^q\mathbb P(D_n>\delta)+CM^{q-s}.$ For fixed $\delta,M$, the probability term tends to zero by [A1]; then letting $M\to\infty$ and $\delta\downarrow0$ proves $\mathbb E D_n^q\to0$. [A1, A2, step 1.1, algebra] ∎
