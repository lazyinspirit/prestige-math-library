---
id: ex-piecewise-polynomial-periodic-oscillator
kind: example
title: "A bounded $C^1$ periodic oscillator made from a quartic Hermite spline"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [lem-integer-part, def-higher-derivatives-and-smoothness, thm-algebra-of-derivatives, lem-derivative-of-a-power, def-integer-power]
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

Define $\psi(t)=16u^2(1-u)^2$, where $u=t-\lfloor t\rfloor\in[0,1)$. Then $\psi$ is bounded, nonconstant, $1$-periodic, and $C^1$. Moreover, $\psi'$ takes the values $3$ and $-3$ in every period.

## Facts & Assumptions

**Given:** The displayed definition.

[L1] The integer-part lemma supplies the unique $u\in[0,1)$ ([[lem-integer-part]]).

[L2] Polynomial derivatives follow from [[thm-algebra-of-derivatives]], [[lem-derivative-of-a-power]], and [[def-integer-power]].

## Verification

**Proof technique:** direct.

1.1 On every interval $[k,k+1)$, $\psi$ is the same quartic in $u=t-k$, with derivative $32u(1-u)(1-2u)$. Its values and first derivatives at $u=0$ and $u=1$ are all $0$, so adjacent pieces and their derivatives agree continuously at every integer. [L1, L2, algebra]

2.1 Translation by an integer leaves the fractional part unchanged, so $\psi$ is $1$-periodic. Step 1.1 and the polynomial formula prove $C^1$-regularity, and $0\le\psi\le1$. At fractional parts $u=1/4$ and $u=3/4$, the derivative formula gives $\psi'=3$ and $\psi'=-3$, respectively. [step 1.1, L1, L2, algebra] ∎
