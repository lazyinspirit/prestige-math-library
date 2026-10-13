---
id: ex-sr-clock-at-rest-in-a-chart
kind: example
title: "Worked example: the clock at rest in an inertial chart"
status: published
origin: pipeline
domain: mathematics
dependency_level: 12
deps:
  - def-sr-regular-causal-curve-and-worldline
  - def-sr-proper-time
  - def-sr-four-velocity-and-four-acceleration
  - thm-sr-proper-time-and-observer-decomposition
  - def-inertial-frame-and-inertial-chart
  - def-lorentz-form-and-inertia
  - def-causal-classification-of-lorentz-vectors
dependency_roles:
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-sr-four-velocity-and-four-acceleration: mathematical-premise
  thm-sr-proper-time-and-observer-decomposition: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Example

Worked computation. In an inertial chart of the model with $\eta_0 =
\operatorname{diag}(-1,1,1,1)$ let $c>0$ and $(a_1,a_2,a_3)\in\mathbb R^3$. For $t\in\mathbb R$ consider the coordinate worldline
$x(t) = (ct, a_1, a_2, a_3)$ of a clock at rest at the spatial position
$(a_1,a_2,a_3)$, parametrized by the coordinate time $t$. Then
$x'(t) = (c,0,0,0)$, so $-\eta(x',x') = c^{2}$ and the proper-time function is
$\tau(t)-\tau(t_0) = t-t_0$; the four-velocity is $U = x'/\tau' = (c,0,0,0)$,
with $\eta(U,U) = -c^{2}$, and the four-acceleration vanishes, $A = 0$.
Relative to the chart's observer $e_0$ the dimensionless four-velocity is
$u = U/c = (1,0,0,0) = e_0$, so $\gamma = -\eta(e_0,u) = 1$ and the relative
velocity is $w = c\,h(u)/\gamma = 0$: the clock is at rest in the chart.

## Facts & Assumptions

**Given:** An inertial chart with $\eta_0 = \operatorname{diag}(-1,1,1,1)$, a spatial position $(a_1,a_2,a_3) \in \mathbb{R}^{3}$, a real $c>0$, and the worldline $x:\mathbb R\to A$ with coordinates $x(t) = (ct,a_1,a_2,a_3)$.

[L1] Inertial charts ([[def-inertial-frame-and-inertial-chart]]): in an inertial chart the matrix of $\eta$ is $\operatorname{diag}(-1,1,1,1)$ and the chart's observer is $e_0$.

[L2] Curves ([[def-sr-regular-causal-curve-and-worldline]]): the difference quotients of $x$ are identically $(c,0,0,0)$, so $x'(t) = (c,0,0,0)$ and $x$ is a $C^{1}$ future timelike worldline ([[def-causal-classification-of-lorentz-vectors]]).

[L3] Proper time ([[def-sr-proper-time]]): for a constant tangent $x'$ the proper-time increment is $c^{-1}(t-t_0)\sqrt{-\eta(x',x')}$.

[L4] Four-velocity and four-acceleration ([[def-sr-four-velocity-and-four-acceleration]]): $U = x'/\tau'$ and $A = U'/\tau'$ when $x$ is $C^{2}$.

[L5] Decomposition ([[thm-sr-proper-time-and-observer-decomposition]]): clause (d) with observer $n$ gives $\gamma = -\eta(n,u)$, relative velocity $w = c\,h(u)/\gamma$ and $u = \gamma(n+w/c)$; clause (c) gives $h(u) = u+\eta(n,u)n$.

[L6] Bilinearity ([[def-lorentz-form-and-inertia]]): $\eta(u,u)$ is computed from the diagonal matrix by $\eta(u,u) = -(u^{0})^{2}+(u^{1})^{2}+(u^{2})^{2}+(u^{3})^{2}$ in the chart.

## Verification

**Proof technique:** direct.

1.1 The difference quotients of $x$ are $\bigl(x(t+h)-x(t)\bigr)/h = (c,0,0,0)$ for every $h \ne 0$, so $x'(t) = (c,0,0,0)$; by [L1] and [L6], $-\eta(x',x') = c^{2} > 0$, so $x$ is a $C^{1}$ future timelike worldline by [L2]. [given, L1, L2, L6]

2.1 By [L3] the proper-time increment is $\tau(t)-\tau(t_0) = c^{-1}\cdot(t-t_0)\cdot\sqrt{c^{2}} = t-t_0$, so the clock's proper time is coordinate time up to an additive constant. [step 1.1, L3]

3.1 The four-velocity is $U = x'/\tau' = (c,0,0,0)/1 = (c,0,0,0)$ by [L4]; the constant map $U$ has zero derivative, so $A = U'/\tau' = 0$; and $\eta(U,U) = -c^{2}$ from the diagonal form [L6], in agreement with clause (a) of [L5]'s theorem. [step 1.1, step 2.1, L4, L6]

4.1 The dimensionless four-velocity is $u = U/c = (1,0,0,0) = e_0$; with $n := e_0$ this gives $\gamma = -\eta(e_0,u) = 1$ and $h(u) = u+\eta(e_0,u)e_0 = u-e_0 = 0$ by clause (c) of [L5], so the relative velocity is $w = c\,h(u)/\gamma = 0$: the clock is at rest relative to the chart's observer, and $\gamma = 1$ matches the general criterion $\gamma = 1 \iff u = n$. [step 3.1, L1, L5] ∎

## Remarks

- **The computation is the model's notion of rest.** "At rest in the chart" here means exactly that the relative velocity $w$ of clause (d) vanishes; it is a statement about the ideal observer $e_0$ of the chart and the worldline, not about any apparatus.
