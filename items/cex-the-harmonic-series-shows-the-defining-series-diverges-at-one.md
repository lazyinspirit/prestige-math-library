---
id: cex-the-harmonic-series-shows-the-defining-series-diverges-at-one
kind: counterexample
title: "The defining Dirichlet series for zeta diverges at $s=1$ because it becomes the harmonic series"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-riemann-zeta-function, thm-p-series-rational]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Elias M. Stein and Rami Shakarchi, Complex Analysis, Ch. 6 §2"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
---

## Statement refuted

The defining series of zeta still converges at $s=1$.

## Facts & Assumptions

**Given:** The defining Dirichlet series.

[L1] On $\operatorname{Re}s>1$, zeta is defined by $\sum_{n\ge1}n^{-s}$
([[def-riemann-zeta-function]]).

[L2] The series $\sum_{n\ge1}1/n$ diverges because $p=1$ is the threshold case
([[thm-p-series-rational]]).

## Counterexample

**Proof technique:** direct.

1.1 At $s=1$, the defining series in [L1] becomes $\sum_{n\ge1}1/n$. [L1, given]

2.1 By [L2], this is the harmonic series and it diverges. Therefore the defining Dirichlet series does not converge at $s=1$. [step 1.1, L2, algebra] ∎
