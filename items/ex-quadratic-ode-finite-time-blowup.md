---
id: ex-quadratic-ode-finite-time-blowup
kind: example
title: "$y'=y^2$, $y(0)=1$, has maximal solution $y(t)=(1-t)^{-1}$ on $(-\\infty,1)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-existence-and-uniqueness-of-a-maximal-ode-solution, cor-finite-maximal-time-forces-escape-from-every-compact-set, thm-algebra-of-derivatives]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
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

## Example

$y'=y^2$, $y(0)=1$, has maximal solution $y(t)=(1-t)^{-1}$ on $(-\infty,1)$. The vector field $(t,y)\mapsto y^2$ is nevertheless defined on all of $\mathbb R^2$.

## Facts & Assumptions

**Given:** The scalar equation $y'=y^2$ and initial value $y(0)=1$.

[L1] If the positive maximal endpoint is finite, the solution must eventually leave every compact set ([[cor-finite-maximal-time-forces-escape-from-every-compact-set]]).

[L2] The quotient rule gives $(1/g)'=-g'/g^2$ wherever $g$ is differentiable and nonzero ([[thm-algebra-of-derivatives]]).

[L3] Every Picard–Lindelöf IVP has a unique maximal solution, and every other solution through the same data is its restriction ([[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

## Verification

**Proof technique:** direct.

1.1 Differentiation gives $((1-t)^{-1})'=(1-t)^{-2}=y(t)^2$ and $y(0)=1$. On the connected component of a solution's nonzero set containing $0$, [L2] gives $(1/y)'=-1$, so integration forces $1/y=1-t$. If that component had a finite boundary $c$ inside the solution interval, continuity would give $y(t)\to0$ there and hence $|1/y(t)|\to+\infty$, while the identity gives $1/y(t)\to1-c\in\mathbb R$, a contradiction. Thus the component is the whole solution interval. [given, L2, algebra]

2.1 On every compact state interval $|y|,|z|\le R$, one has $|y^2-z^2|\le2R|y-z|$, so the polynomial field satisfies the local state-Lipschitz hypothesis of [L3]. The formula is defined on $(-\infty,1)$ and tends to $+\infty$ as $t\uparrow1$; no finite value permits continuation through $1$, while the formula continues indefinitely to the left. Thus it is the unique maximal solution from [L3], consistently with the compact-escape conclusion [L1]. [step 1.1, L1, L3, algebra] ∎
