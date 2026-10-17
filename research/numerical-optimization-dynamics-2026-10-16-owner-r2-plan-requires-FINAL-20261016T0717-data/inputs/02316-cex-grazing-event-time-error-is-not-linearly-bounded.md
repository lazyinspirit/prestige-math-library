---
id: cex-grazing-event-time-error-is-not-linearly-bounded
kind: counterexample
title: "A grazing event has square-root rather than linear event-time sensitivity"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 10
deps:
  - def-hybrid-mode-guard-reset-system
  - lem-transverse-hybrid-event-time-error
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
---

## Statement refuted

There is a constant $C$ such that every smooth guard root, including a grazing root with zero crossing derivative, has event-time error at most $C(\eta+\varepsilon)$ whenever the dense state error is $\eta$ and the approximate guard residual is $\varepsilon$.

## Facts & Assumptions

**Given:** One scalar state with constant mode field $x'=0$, exact state $x(t)=0$, and guard $g(t,x)=(t-1)^2+x$.

[F1] [[def-hybrid-mode-guard-reset-system]]: a guard event is a zero of $g(t,x(t))$ along the active mode trajectory.

[F2] [[lem-transverse-hybrid-event-time-error]]: the linear event-time bound assumes a uniform positive lower bound on the signed guard derivative over the matched bracket.

## Counterexample

1.1 The exact trajectory is $x(t)=0$, so the exact guard is $h(t)=(t-1)^2$. It has an interior root at $\tau=1$ and $h'(1)=0$, so this is a grazing guard contact rather than a transverse event. [given, F1, algebra]

2.1 For any $\eta>0$, take the dense reconstruction $U_\eta(t)=-\eta$. Its uniform state error is $\eta$, while its guard $g(t,U_\eta(t))=(t-1)^2-\eta$ has zero residual at $\widehat\tau=1+\sqrt\eta$. Thus $\varepsilon=0$ and $|\widehat\tau-\tau|=\sqrt\eta$. [given, step 1.1, algebra]

3.1 If a fixed $C$ gave the refuted bound, it would require $\sqrt\eta\le C\eta$ for every $\eta>0$, equivalently $1/\sqrt\eta\le C$. The left side is unbounded as $\eta\downarrow0$, so no such constant exists. In this example $h'(1)=0$, so the positive derivative margin required by [F2] is absent. [F1, F2, step 1.1, step 2.1, algebra] ∎
