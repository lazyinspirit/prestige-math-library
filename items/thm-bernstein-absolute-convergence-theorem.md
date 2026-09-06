---
id: thm-bernstein-absolute-convergence-theorem
kind: theorem
title: "Bernstein's absolute-convergence theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-wiener-algebra-of-the-circle, lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz, lem-holder-fourier-coefficients-have-weighted-ltwo-decay]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, Theorem 3.3.16"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
    - title: "Michael E. Taylor, Fourier Analysis, Distributions, and Constant-Coefficient Linear PDE, Exercise 3"
      url: "https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/fourier.pdf"
---

## Statement

If $1/2<\alpha\le1$ and $f\in C^\alpha(\mathbb T)$ with respect to circular distance, then $f\in A(\mathbb T)$.

## Facts & Assumptions

**Given:** $1/2<\alpha\le1$ and $f\in C^\alpha(\mathbb T)$.

[L1] For every $0<s<\alpha$, the Fourier coefficients of $f$ have finite weighted $\ell^2$ norm of exponent $s$ ([[lem-holder-fourier-coefficients-have-weighted-ltwo-decay]]).

[L2] Weighted $\ell^2$ control of exponent $s>1/2$ implies $\ell^1$ ([[lem-ltwo-fourier-decay-implies-absolute-convergence-by-cauchy-schwarz]]).

## Proof

**Proof technique:** direct.

1.1 Choose $s$ with $1/2<s<\alpha$. [given, choose]

2.1 By [L1] the weighted $\ell^2$ hypothesis at this $s$ holds, and [L2] makes $(\widehat f(k))$ summable. This is precisely $f\in A(\mathbb T)$. [L1, L2, step 1.1] ∎
