---
id: thm-exponential-ivp-uniqueness
kind: theorem
title: "The exponential is the unique solution of $y'=y$ with $y(0)=1$"
status: published
origin: session
deps: [def-real-exponential-function-and-e, thm-derivative-of-exponential, cor-exponential-reciprocal-and-positivity, thm-algebra-of-derivatives, thm-chain-rule, cor-differentiable-implies-continuous, cor-zero-derivative-implies-constant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 full lecture notes"
      url: "https://live.ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/mit18_100b_s25_lec_full.pdf"
    - title: "J. Lebl, Basic Analysis, Logarithm and Exponential"
      url: "https://www.jirka.org/ra/html/sec_logandexp.html"
pipeline_run: null
---

## Statement

If $y:\mathbb R\to\mathbb R$ is differentiable, $y'=y$, and $y(0)=1$, then $y=\exp$.

## Facts & Assumptions

**Given:** A differentiable solution $y$ of the initial-value problem.

[L1] $\exp'=\exp$, $\exp(-x)=1/\exp(x)$, and the series definition gives $\exp(0)=1$ ([[thm-derivative-of-exponential]], [[cor-exponential-reciprocal-and-positivity]], [[def-real-exponential-function-and-e]]).

[L2] Products and composites satisfy [[thm-algebra-of-derivatives]] and [[thm-chain-rule]].

[L3] Differentiability implies continuity, and a continuous function with zero derivative on an interval is constant ([[cor-differentiable-implies-continuous]], [[cor-zero-derivative-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 Define $h(x)=y(x)\exp(-x)$. By [L1] and [L2], $h'(x)=y'(x)\exp(-x)-y(x)\exp(-x)=0$.  [given, L1, L2]

2.1 The differentiable function $h$ is continuous, so [L3] makes it constant; $h(0)=y(0)\exp(0)=1$.  [step 1.1, L1, L3]

3.1 Thus $y(x)\exp(-x)=1$, and multiplying by $\exp(x)$ gives $y(x)=\exp(x)$.  [step 2.1, L1, algebra] ∎
