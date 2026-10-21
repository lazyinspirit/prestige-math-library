---
id: ex-ip-diffusion-finite-budget-misses-rare-mode
kind: example
title: No fixed sample budget uniformly protects arbitrarily rare modes
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
axiom_use: No choice axiom is used; the binomial sampling calculation is finite.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

For the two-mode posterior $\pi_w=w\delta_{-b}+(1-w)\delta_b$ with $b>0$ and $0<w<1/2$, $M\ge1$ independent exact draws miss the rare mode $-b$ with probability $(1-w)^M$. For any fixed $M$, this probability tends to one as $w\downarrow0$. If instead $w\in[w_{\min},1-w_{\min}]$ with $0<w_{\min}\le1/2$, then the probability of missing either mode is at most $2(1-w_{\min})^M$, so $M\ge\log(2/\alpha)/[-\log(1-w_{\min})]$ suffices to make it at most $\alpha\in(0,1)$.

## Example references

[[ex-ip-ideal-score-error-allows-unbounded-euler-wasserstein|A positive lower bound on posterior mode mass is one condition needed for uniform finite-budget guarantees.]]

## Facts & Assumptions

**Given:** $b>0$, a mixture weight $0<w<1/2$, $M\ge1$ independent draws from $\pi_w=w\delta_{-b}+(1-w)\delta_b$, and, for the final bound, $w\in[w_{\min},1-w_{\min}]$ with $0<w_{\min}\le1/2$.

[A1] Each draw independently equals the rare atom $-b$ with probability $w$ and the other atom with probability $1-w$.

## Verification

1.1 The event that no draw equals $-b$ is the intersection of $M$ independent events, each of probability $1-w$, hence has probability $(1-w)^M$. Its limit as $w\downarrow0$ is one for every fixed finite $M$. [given, A1, algebra]

2.1 The event that at least one of the two atoms is absent is contained in the union of the event “no $-b$ draw” and the event “no $b$ draw.” Their probabilities are $(1-w)^M$ and $w^M$, each at most $(1-w_{\min})^M$ under the displayed weight interval. The union bound gives at most $2(1-w_{\min})^M$. If $M\ge\log(2/\alpha)/[-\log(1-w_{\min})]$, then $(1-w_{\min})^M\le\alpha/2$, proving the sufficient budget. [given, A1, step 1.1, algebra] ∎
