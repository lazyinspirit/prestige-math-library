---
id: ex-differentiable-function-with-discontinuous-derivative
kind: example
title: "A differentiable function whose derivative is discontinuous"
status: published
origin: session
deps: [ex-piecewise-polynomial-periodic-oscillator, thm-algebra-of-derivatives, thm-chain-rule, lem-derivative-of-a-power, thm-darboux-theorem-for-derivatives, def-derivative]
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
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
pipeline_run: null
---

## Example

Let $\psi$ be the bounded continuous periodic oscillator of [[ex-piecewise-polynomial-periodic-oscillator]], and define $F(0)=0$, $F(x)=x^2\psi(1/x)$ for $x\ne0$. Then $F$ is differentiable everywhere, but $F'$ is discontinuous at $0$.

## Facts & Assumptions

**Given:** $F$ as displayed.

[L1] Derivative algebra, the chain rule, and power derivatives are [[thm-algebra-of-derivatives]], [[thm-chain-rule]], and [[lem-derivative-of-a-power]].

[L2] Every derivative has the Darboux property ([[thm-darboux-theorem-for-derivatives]]).

## Verification

**Proof technique:** direct.

1.1 Since $\psi$ is bounded, $F(x)/x=x\psi(1/x)\to0$, so $F'(0)=0$ by [[def-derivative]].  [given]

1.2 For $x\ne0$, $F'(x)=2x\psi(1/x)-\psi'(1/x)$. The periodic piecewise-polynomial derivative $\psi'$ takes two separated values along sequences tending to infinity, so $F'(x)$ has no limit at $0$.  [L1, given]

2.1 Thus $F$ is differentiable and $F'$ is discontinuous at $0$; [L2] also confirms that its oscillation is not a jump.  [step 1.1, step 1.2, L2] ∎
