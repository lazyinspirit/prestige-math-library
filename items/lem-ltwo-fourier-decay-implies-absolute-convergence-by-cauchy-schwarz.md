---
id: lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz
kind: lemma
title: "Weighted ell-2 decay implies absolute convergence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: []
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE, Section 1"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
---

## Statement

Let $s>1/2$. If a sequence $(a_k)$ satisfies $\sum_k(1+|k|)^{2s}|a_k|^2<\infty$, then $(a_k)\in\ell^1(\mathbb Z)$.

## Facts & Assumptions

**Given:** $s>1/2$ and the displayed finite weighted square sum.

## Proof

**Proof technique:** direct.

1.1 The series $\sum_k(1+|k|)^{-2s}$ converges, by comparison with the integral of $x^{-2s}$ on $[1,\infty)$. [given, algebra]

2.1 Cauchy--Schwarz yields $$\sum_k|a_k|\le\left(\sum_k(1+|k|)^{2s}|a_k|^2\right)^{1/2}\left(\sum_k(1+|k|)^{-2s}\right)^{1/2}<\infty.$$ [step 1.1, algebra] ∎
