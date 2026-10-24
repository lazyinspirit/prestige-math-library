---
id: ex-event-root-with-derivative-separated-from-zero
kind: example
title: An event root with derivative bounded away from zero
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: interval-newton-krawczyk-and-polynomial-root-isolation-examples
dependency_level: 9
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps:
  - alg-smooth-function-root-isolation
  - thm-smooth-function-root-isolation-soundness
  - thm-scalar-interval-newton-exclusion-and-inclusion
  - lem-real-interval-arithmetic-preserves-enclosure
  - def-continuity-and-derivative-on-real-interval
verification:
  precheck: pass
---

## Example

Let an event surface be $g(t)=t^2-2$ on the time interval $[1,2]$. Its derivative is bounded below by $2$, and a strict interval Newton inclusion certifies a unique event time in the box $[1,2]$.

## Facts & Assumptions

**Given:** $g(t)=t^2-2$ on $[1,2]$ and interval Newton evaluation with exact dyadic endpoints.

[F1] The smooth isolator calls the scalar interval Newton procedure on each box and retains unresolved boxes when a certificate fails or a budget is exhausted ([[alg-smooth-function-root-isolation]]).

[F2] A strict scalar interval Newton inclusion proves existence and uniqueness in the box ([[thm-scalar-interval-newton-exclusion-and-inclusion]]).

[F3] Finite real interval operations enclose exact values ([[lem-real-interval-arithmetic-preserves-enclosure]]).

[F4] A real derivative is the limit of its difference quotients ([[def-continuity-and-derivative-on-real-interval]]).

## Verification

1.1 Natural interval evaluation gives $E_g([1,2])=[1,4]-2=[-1,2]$, which contains zero. For $t\in[1,2]$, the difference quotient gives $g'(t)=2t\in[2,4]$, so the derivative enclosure excludes zero with margin $2$. At the midpoint $m=3/2$, $g(m)=1/4$. [given, F3, F4, algebra]

2.1 The interval quotient is $[1/4]/[2,4]=[1/16,1/8]$, hence the Newton image is $N=3/2-[1/16,1/8]=[11/8,23/16]\subset(1,2)$. [step 1.1, F3, algebra]

3.1 With minimum width $1/2$ and box budget $1$, the smooth isolator makes one scalar call on $[1,2]$. The strict inclusion certifies exactly one root in this box by [F2], so the call returns "unique-root" and the isolator returns it as a certified event-time box. No conclusion is drawn about roots outside $[1,2]$. [step 2.1, F1, F2] ∎
