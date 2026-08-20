---
id: thm-peano-local-existence-for-continuous-odes
kind: theorem
title: "Peano local existence for a continuous first-order system"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous, lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence, prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, thm-uniform-limit-interchanges-riemann-integration, thm-heine-cantor-metric]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Peano existence"
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Ordinary Differential Equations and Dynamical Systems, Ch. 2"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "Jiri Lebl, Basic Analysis I, Section 6.3"
      url: "https://jirilebl.github.io/ra/realanal.pdf"
pipeline_run: null
---

## Statement

Let $D\subseteq\mathbb R\times\mathbb R^n$ be open, let $F:D\to\mathbb R^n$ be continuous, and let $(t_0,x_0)\in D$. Then the IVP $x'=F(t,x)$, $x(t_0)=x_0$, has a local solution. No uniqueness is asserted.

## Facts & Assumptions

**Given:** A compact cylinder around the initial data on which Euler polygons are defined with meshes tending to zero.

[L1] Euler polygonal approximations on a compact cylinder are uniformly bounded and equicontinuous ([[lem-euler-polygonal-approximations-are-uniformly-bounded-and-equicontinuous]]).

[L2] A uniformly bounded equicontinuous sequence of $\mathbb R^n$-valued curves has a uniformly convergent subsequence ([[lem-equicontinuous-bounded-rn-valued-curves-have-a-uniformly-convergent-subsequence]]).

[L3] Uniform convergence of Riemann-integrable functions permits passage of the limit under the integral ([[thm-uniform-limit-interchanges-riemann-integration]]).

[L4] A continuous map on a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[L5] A curve solves the IVP if and only if it satisfies the associated Volterra integral equation ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

## Proof

**Proof technique:** constructive.

1.1 Construct forward Euler polygons with mesh tending to zero; [L1] applies on one compact cylinder, and [L2] gives a subsequence converging uniformly on $[t_0,t_0+h]$ to a continuous curve $x_+$. [given, L1, L2, construct]

1.2 Apply the same construction after reflecting time about $t_0$; this gives a continuous limit $x_-$ on $[t_0-h,t_0]$ with the same initial value. [given, L1, L2, construct]

2.1 By [L4], each Euler defect in the corresponding Volterra equation tends uniformly to zero; applying [L3] componentwise passes to the limit, so [L5] makes $x_+$ and $x_-$ solutions on their respective half-intervals. [step 1.1, step 1.2, L3, L4, L5]

3.1 Their piecewise union is continuous at $t_0$, and both one-sided derivatives there equal $F(t_0,x_0)$; hence the union is differentiable at $t_0$ and is a solution on the nondegenerate symmetric interval $[t_0-h,t_0+h]$. [step 2.1, discharge-construct] ∎
