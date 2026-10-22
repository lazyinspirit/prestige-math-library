---
id: thm-picard-lindelof-local-existence-and-uniqueness
kind: theorem
title: "Picard-Lindelöf local existence and uniqueness for first-order systems"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-first-order-ode-initial-value-problem-and-solution, def-locally-lipschitz-in-the-state-variable, prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation, lem-vector-valued-continuous-curve-space-is-complete, lem-picard-operator-preserves-a-closed-curve-ball, lem-picard-operator-is-a-short-time-contraction, thm-banach-fixed-point, cor-connected-subsets-of-the-line]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Local existence and uniqueness"
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-21
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

Let $D\subseteq\mathbb R\times\mathbb R^n$ be open, let $F:D\to\mathbb R^n$ be continuous and locally Lipschitz in the state variable, and let $(t_0,x_0)\in D$. Then a unique local solution of the IVP exists on some interval around the initial time. More quantitatively, if $h,r>0$ make

$$[t_0-h,t_0+h]\times\overline B(x_0,r)\subseteq D,$$

if $\|F\|_2\le M$ and $F$ has state-Lipschitz constant $L$ on this cylinder, and if $hM\le r$ and $Lh<1$, then there is exactly one solution on $[t_0-h,t_0+h]$ through $(t_0,x_0)$ whose graph lies in the cylinder. Any two solutions through the same initial data agree on every common subinterval containing $t_0$.

In particular, a unique local solution exists on an interval around the initial time.

## Facts & Assumptions

**Given:** The IVP in the Statement and a compact cylinder about $(t_0,x_0)$ on which $F$ is bounded by $M$ and state-Lipschitz with constant $L$.

[L1] A contraction of a nonempty complete metric space has exactly one fixed point ([[thm-banach-fixed-point]]).

[L2] A curve solves the IVP if and only if it satisfies the associated Volterra integral equation ([[prop-first-order-ivp-is-equivalent-to-a-volterra-integral-equation]]).

[L3] Continuous $\mathbb R^n$-valued curves on a nonempty compact interval are complete in the supremum metric ([[lem-vector-valued-continuous-curve-space-is-complete]]).

[L4] Under $hM\le r$, the Picard operator preserves the closed curve ball ([[lem-picard-operator-preserves-a-closed-curve-ball]]).

[L5] Under $Lh<1$, the Picard operator is a contraction ([[lem-picard-operator-is-a-short-time-contraction]]).

[L6] Every interval in the real line is connected ([[cor-connected-subsets-of-the-line]]).

## Proof

**Proof technique:** direct.

1.1 Choose $r>0$ and then $h>0$ so the cylinder lies in $D$, $hM\le r$, and $Lh<1$; the closed curve ball is nonempty and complete by [L3], is invariant by [L4], and its Picard operator is a contraction by [L5], so [L1] gives exactly one fixed point. [given, L1, L3, L4, L5]

2.1 By [L2] the fixed point is a solution. Any other solution cannot leave the state ball before time $h$, by the same first-exit estimate as [L4], so it is the same fixed point there. For two solutions on a larger common interval, their agreement set is nonempty and closed, and local repetition of this argument makes it open; the common interval is connected by [L6], so they agree throughout it. [step 1.1, L2, L4, L6] ∎
