---
id: fs-a-differentiable-function-has-a-continuous-derivative
kind: false-statement
title: "FALSE: every differentiable function has a continuous derivative"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [ex-x-squared-sine-of-one-over-x-squared]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "John K. Hunter, An Introduction to Real Analysis, Example 8.10"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "Adam Coffman, Yifei Pan, and Yuan Zhang, Continuous Solutions of Nonlinear Cauchy–Riemann Equations and Pseudoholomorphic Curves in Normal Coordinates, Remark 3.6"
      url: "https://arxiv.org/pdf/1410.1582"
pipeline_run: null
---

## Statement

**False claim:** if $F:\mathbb R\to\mathbb R$ is differentiable, then its
derivative $F'$ is continuous on $\mathbb R$.

## Facts & Assumptions

**Given:** The universal claim in the Statement.

[L1] The function $F(0)=0$ and $F(x)=x^2\sin(1/x^2)$ for $x\ne0$ is differentiable on $\mathbb R$, with $F'(0)=0$, and $F'$ is unbounded on every neighbourhood of zero ([[ex-x-squared-sine-of-one-over-x-squared]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that every differentiable real function has a continuous derivative. [assume-contra]

1.2 The function in [L1] is differentiable on all of $\mathbb R$, but its derivative is unbounded on every neighbourhood of zero and therefore cannot be continuous at zero. [L1, algebra]

2.1 Step 1.1 makes the derivative in step 1.2 continuous, a contradiction. Therefore the claim is false. [step 1.1, step 1.2, L1, discharge-contradiction] ∎
