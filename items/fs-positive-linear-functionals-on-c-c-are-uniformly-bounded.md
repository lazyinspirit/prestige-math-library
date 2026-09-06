---
id: fs-positive-linear-functionals-on-c-c-are-uniformly-bounded
kind: false-statement
title: "Every positive linear functional on C_c(X) is uniformly sup-norm bounded"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-lebesgue-measure-is-a-radon-measure-on-rn, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, def-positive-linear-functional-on-c-c]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Donald L. Cohn, Measure Theory, 2nd ed., Chapter 7"
      url: "https://math.bme.hu/~pitrik/2023_24_2/Measure_Cohn.pdf"
---

## Statement

The assertion that every positive linear functional on $C_c(X)$ is bounded for the global supremum norm is false.

## Facts & Assumptions

**Given:** $X=\mathbb R$ and $\Lambda(f)=\int_{\mathbb R}f\,d\lambda$.

## Refutation

**Proof technique:** counterexample.

1.1 The functional is linear and positive on $C_c(\mathbb R)$. For each $n$, choose a cutoff $f_n\in C_c(\mathbb R)$ with $0\le f_n\le1$ and $f_n=1$ on $[-n,n]$. [given]

2.1 Then $\|f_n\|_\infty=1$ but $\Lambda(f_n)\ge2n$. No constant $C$ can satisfy $|\Lambda(f)|\le C\|f\|_\infty$ for every $f\in C_c(\mathbb R)$. [step 1.1] ∎
