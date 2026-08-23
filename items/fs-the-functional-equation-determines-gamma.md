---
id: fs-the-functional-equation-determines-gamma
kind: false-statement
title: 'FALSE: normalization and the functional equation determine the real Gamma function'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [ex-positive-non-log-convex-solution-of-gamma-functional-equation, thm-bohr-mollerup-characterisation-of-the-real-gamma-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 7 §4"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

**False claim:** Gamma is the only positive function $f:(0,\infty)\to(0,\infty)$ satisfying $f(1)=1$ and $f(s+1)=sf(s)$.

## Facts & Assumptions

**Given:** The periodic perturbation of Gamma from the preceding example.

[F1] The function $F(s)=\Gamma(s)e^{A\sin(2\pi s)}$ is positive, satisfies $F(1)=1$ and $F(s+1)=sF(s)$, differs from Gamma, and is not log-convex ([[ex-positive-non-log-convex-solution-of-gamma-functional-equation]]).

[F2] Gamma is the unique positive log-convex function with the normalization and recurrence ([[thm-bohr-mollerup-characterisation-of-the-real-gamma-function]]).

## Refutation

**Proof technique:** direct.

1.1 By [F1], the function $F$ is positive, normalized, recurrent, and differs from Gamma. [F1]

2.1 Fact [F2] identifies the missing hypothesis: log-convexity excludes this $F$ and restores uniqueness. [step 1.1, F2]

3.1 Therefore normalization and the functional equation alone do not determine Gamma. [step 1.1, step 2.1] ∎
