---
id: lem-chaos-index-sets-are-finite
kind: lemma
title: The stated chaos index sets are finite and contain zero
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps: [def-chaos-total-degree-and-hyperbolic-cross-index-sets]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_use: No choice axiom is used; all coordinate bounds are explicit.
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
sources:
  references:
    - title: Bruno Sudret, Polynomial Chaos Expansions and Stochastic Finite Element Methods, §3.3.2
      url: https://ethz.ch/content/dam/ethz/special-interest/baug/ibk/risk-safety-and-uncertainty-dam/publications/reports/RSUQ-2015-008.pdf
    - title: Dongbin Xiu, Fast Numerical Methods for Stochastic Computations, §3
      url: https://publications.sci.utah.edu/publications/xiu09/Xiu_CiCP2009.pdf
---

## Statement

For every admissible cutoff vector $p\in\mathbb N_0^d$, order $s\ge0$, and
threshold $N\ge1$, the sets $\Lambda^{\mathrm{TD}}_{s,p}$ and
$\Lambda^{\mathrm{HC}}_{N,p}$ of
[[def-chaos-total-degree-and-hyperbolic-cross-index-sets]] are finite and
contain $0$.

## Facts & Assumptions

**Given:** $d\ge1$, an admissible cutoff vector $p\in\mathbb N_0^d$, $s\ge0$, and $N\ge1$, with the two index-set definitions above.

[F1] [[def-chaos-total-degree-and-hyperbolic-cross-index-sets]] defines the sets by coordinate sums and products of positive integers.

## Proof

1.1 If $\alpha\in\Lambda^{\mathrm{TD}}_{s,p}$, then every coordinate satisfies $0\le\alpha_j\le p_j$ by the cutoff condition in [F1]. Hence this set is a subset of the finite box $\prod_j\{0,\ldots,p_j\}$. [given, F1, algebra]

2.1 The same cutoff condition places $\Lambda^{\mathrm{HC}}_{N,p}$ in the finite box $\prod_j\{0,\ldots,p_j\}$. Since $0\le s$ and $1\le N$, zero satisfies both defining inequalities. Thus both sets are finite and contain zero. [given, F1, step 1.1, algebra] ∎