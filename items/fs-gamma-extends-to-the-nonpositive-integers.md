---
id: fs-gamma-extends-to-the-nonpositive-integers
kind: false-statement
title: 'FALSE: Euler''s real Gamma integral converges at the nonpositive integers'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-real-gamma-euler-integral-convergence]
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
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Chandrasekharan, Lectures on the Riemann Zeta-Function, Lecture 6 §1(i)"
      url: "https://mathweb.tifr.res.in/Documents/Publications/Lectures/01.pdf"
pipeline_run: null
---

## Statement

**False claim:** the Euler integral $\int_0^\infty t^{s-1}e^{-t}\,dt$ converges when $s$ is a nonpositive integer and thereby defines a real Gamma value there.

## Facts & Assumptions

**Given:** A nonpositive integer $s$.

[F1] The Euler integral converges if and only if $s>0$ ([[thm-real-gamma-euler-integral-convergence]]).

## Refutation

**Proof technique:** direct.

1.1 Since $s\le0$, the reverse direction of [F1] says that the Euler integral diverges, already at its endpoint $0$. [F1, algebra]

2.1 The real Gamma function defined by Euler's integral therefore has no value at this $s$; a different continuation would not be convergence of this integral. [step 1.1]

3.1 As the argument applies to every nonpositive integer, the claim is false. [step 1.1, step 2.1] ∎
