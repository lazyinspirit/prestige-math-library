---
id: thm-completeness-of-continuous-functions-for-local-uniform-convergence
kind: theorem
title: "Continuous complex-valued functions on a plane domain are complete for an exhaustion metric"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-compact-exhaustion-metric-on-function-space, thm-uniform-limit-continuous-complex-functions, thm-uniform-cauchy-criterion-complex-functions, lem-canonical-compact-exhaustion-of-a-plane-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Matthias Weber, Complex Analysis, Ch. 5 §§5.1-5.2"
      url: "https://scholarworks.iu.edu/dspace/bitstreams/0a384151-7cd5-460f-a06a-b6be76707024/download"
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 2 §5.2 and Ch. 8 §3.2"
      url: "https://web.archive.org/web/20260305202510if_/https://studylib.net/doc/27609666/stein-complex-analysis"
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, Ch. 2"
      url: "https://www.axler.net/HFT.pdf"
pipeline_run: frontier-22
---

## Statement

For a plane domain $\Omega$, the space $C(\Omega,\mathbb C)$ of continuous
complex-valued functions is complete for the canonical exhaustion metric.

## Facts & Assumptions

**Given:** A plane domain $\Omega$, its canonical exhaustion $(K_n)$, and a $d_K$-Cauchy sequence $(f_m)$ in $C(\Omega,\mathbb C)$.

[L1] A sequence of complex-valued functions is uniformly Cauchy on a set if and only if it converges uniformly on that set ([[thm-uniform-cauchy-criterion-complex-functions]]).

[L2] A uniform limit of continuous complex-valued functions is continuous ([[thm-uniform-limit-continuous-complex-functions]]).

[L3] The canonical exhaustion is nested and its interiors exhaust $\Omega$ ([[lem-canonical-compact-exhaustion-of-a-plane-domain]]).

## Proof

**Proof technique:** direct.

1.1 On each $K_n$, the $d_K$-Cauchy property makes $(f_m|_{K_n})$ uniformly Cauchy; if $K_n=\varnothing$ take the zero function there, and otherwise [L1] gives a uniform limit $g_n:K_n\to\mathbb C$, which is continuous by [L2]. [L1, L2, given]

1.2 The nesting of [L3] makes these limits compatible on overlaps, so they glue to a single function $f:\Omega\to\mathbb C$. Because every point of $\Omega$ lies in the interior of some $K_n$ by [L3], the glued function is continuous there. [L3, given]

2.1 Uniform convergence $f_m|_{K_n}\to f|_{K_n}$ on each $K_n$, together with the usual finite-head and geometric-tail estimate in the defining series, gives $d_K(f_m,f)\to0$. Thus $C(\Omega,\mathbb C)$ is complete for the exhaustion metric. [given, algebra] ∎
