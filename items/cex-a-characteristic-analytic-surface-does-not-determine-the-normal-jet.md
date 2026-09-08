---
id: cex-a-characteristic-analytic-surface-does-not-determine-the-normal-jet
kind: counterexample
title: Characteristic analytic data may be nonunique or incompatible
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: 'Gantumur, Math 580 Lecture Notes 2: The Cauchy-Kovalevskaya Theorem'
      url: https://www.math.mcgill.ca/gantumur/math580f11/downloads/notes2.pdf
      locator: Gantumur, §5 transport discussion after Exercise 24, printed p. 14.
status: published
origin: pipeline
proof_strategy: direct
deps: ["def-characteristic-covector-hypersurface-and-noncharacteristic-data", "thm-cauchy-kovalevskaya-for-a-noncharacteristic-analytic-cauchy-problem"]
---

## Statement refuted

Analytic Cauchy data on a characteristic analytic surface need not determine a unique analytic solution or even admit a solution. For $u_x=0$ in $(x,t)$ on the surface t=0, zero trace data have infinitely many analytic solutions, while trace $u(x,0)=x$ admits no differentiable solution near zero.

## Facts & Assumptions

**Given:** The equation $u_x=0$ with initial surface $t=0$, and the candidate traces and solutions specified in the statement.

[F1] A conormal is characteristic when the principal symbol vanishes there. ([[def-characteristic-covector-hypersurface-and-noncharacteristic-data]]).

## Counterexample

1.1 The principal symbol is $p(\xi_x,\xi_t)=\xi_x$, and the nonzero conormal to t=0 is dt=(0,1). Thus p(dt)=0, so the surface is characteristic by F1. For every real c, $u_c(x,t)=ct$ is analytic, satisfies $(u_c)_x=0$, and has zero initial trace. Distinct c give distinct germs and distinct normal derivatives. [given, F1, algebra]

2.1 If a differentiable u satisfied $u_x=0$ near zero and $u(x,0)=x$, differentiating the trace along x would give $u_x(x,0)=1$, contradicting the equation value zero. Therefore these analytic trace data are incompatible. [given, algebra] ∎

## Source notes

Gantumur, §5 transport discussion after Exercise 24, printed p. 14.
