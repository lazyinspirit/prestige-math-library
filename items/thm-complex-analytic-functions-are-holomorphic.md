---
id: thm-complex-analytic-functions-are-holomorphic
kind: theorem
title: "Every complex analytic function is holomorphic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-analytic-function, thm-termwise-differentiation-of-complex-power-series]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1, §2.3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Every function analytic on an open set $U\subseteq\mathbb C$ is holomorphic on $U$.

## Facts & Assumptions

**Given:** A function $f$ analytic on an open set $U$.

[L1] Analyticity at $a$ supplies a convergent power series representing $f$ on a disc about $a$ ([[def-complex-analytic-function]]).

[L2] A complex power-series sum is holomorphic throughout its open disc of convergence ([[thm-termwise-differentiation-of-complex-power-series]]).

## Proof

**Proof technique:** direct.

1.1 Let $a\in U$. By [L1], $f$ agrees near $a$ with a convergent power series. [L1]

2.1 By [L2], that power-series sum is complex differentiable at $a$, hence so is $f$. [step 1.1, L2]

3.1 Since $a$ was arbitrary, $f$ is holomorphic on $U$; if $U$ is empty, this conclusion is vacuous. [step 2.1] ∎
