---
id: cex-factorial-power-series-has-radius-zero
kind: counterexample
title: "The series $\\sum_{n\\ge0}\\iota(n!)x^n$ converges only at $x=0$ and has radius zero"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-cauchy-hadamard-for-real-power-series, lem-factorial-beats-geometric, def-factorial-and-falling-factorial, def-canonical-natural]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Cauchy-Hadamard theorem, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Cauchy-Hadamard_theorem"
    - title: "Power series, Encyclopedia of Mathematics"
      url: "https://encyclopediaofmath.org/wiki/Power_series"
pipeline_run: null
---

## Statement

The real power series $\sum_{n\ge0}\iota(n!)x^n$ has radius $0$: it converges at its centre $x=0$ and diverges at every $x\ne0$.

## Facts & Assumptions

**Given:** Coefficients $a_n:=\iota(n!)$.

[L1] Factorials eventually exceed every fixed geometric progression ([[lem-factorial-beats-geometric]], [[def-factorial-and-falling-factorial]], [[def-canonical-natural]]).

[L2] Cauchy–Hadamard assigns radius $0$ when the coefficient-root limit superior is $+\infty$ ([[thm-cauchy-hadamard-for-real-power-series]]).

## Verification

**Proof technique:** direct.

1.1 For every real $M>0$, [L1] applied to a geometric base larger than $M$ shows that $\iota((k+1)!)^{1/(k+1)}>M$ eventually. Hence the coefficient-root limit superior is $+\infty$. [L1]

2.1 By [L2], the radius is $0$. At $x=0$ only the constant term survives, while for $x\ne0$ the terms fail to tend to zero, so the stated convergence set follows. [step 1.1, L2] ∎
