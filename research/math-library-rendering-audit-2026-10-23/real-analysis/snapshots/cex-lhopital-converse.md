---
id: cex-lhopital-converse
kind: counterexample
title: "L'Hôpital's conclusion does not imply convergence of the derivative quotient"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [ex-piecewise-polynomial-periodic-oscillator, thm-lhopital-zero-over-zero, thm-chain-rule, thm-algebra-of-derivatives, lem-derivative-of-a-power]
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

## Statement refuted

The converse of L'Hôpital's rule: if $f(x)/g(x)$ has a limit in a zero-over-zero situation, then $f'(x)/g'(x)$ must have a limit.

## Facts & Assumptions

**Given:** A bounded differentiable periodic oscillator $\psi$ and $f(x)=x^2\psi(1/x)$, $g(x)=x$, for $x\ne0$.

[L1] The derivative rules are [[thm-chain-rule]], [[thm-algebra-of-derivatives]], and [[lem-derivative-of-a-power]].

[L2] [[thm-lhopital-zero-over-zero]] asserts only the forward implication.

## Counterexample

**Proof technique:** direct.

1.1 Both $f(x)$ and $g(x)$ tend to $0$, and $f(x)/g(x)=x\psi(1/x)\to0$ because $\psi$ is bounded.  [given]

1.2 Yet $f'(x)/g'(x)=2x\psi(1/x)-\psi'(1/x)$, which has no limit because $\psi'$ has separated recurring values.  [L1, given]

2.1 The quotient limit exists while the derivative-quotient limit does not, so the converse fails.  [step 1.1, step 1.2, L2] ∎
