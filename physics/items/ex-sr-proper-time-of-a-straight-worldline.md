---
id: ex-sr-proper-time-of-a-straight-worldline
kind: example
title: "Worked example: proper time and four-velocity of a straight worldline at beta = 3/5"
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

Worked computation. In an inertial chart with $\eta_0 =
\operatorname{diag}(-1,1,1,1)$ let $c>0$ and, for $t\in\mathbb R$, consider the coordinate worldline
$x(t) = \bigl(ct, (3c/5)t, 0, 0\bigr)$, parametrized by coordinate time, which
describes a clock moving along the first spatial axis with speed $3c/5$. Then
$x'(t) = (c,3c/5,0,0)$ and $\eta(x',x') = -c^{2}+(9/25)c^{2} = -(16/25)c^{2}$,
so $\sqrt{-\eta(x',x')} = 4c/5$ and
$\tau(t)-\tau(t_0) = (4/5)(t-t_0)$: the moving clock runs slow by the factor
$4/5 = 1/\gamma$ with $\gamma = 5/4$. The four-velocity is
$U = x'/\tau' = (5/4)\bigl(c,3c/5,0,0\bigr) = (5c/4,3c/4,0,0)$, which satisfies
$\eta(U,U) = -25c^{2}/16+9c^{2}/16 = -c^{2}$, and the four-acceleration vanishes
because $U$ is constant: $A = 0$. The dimensionless four-velocity is
$u = U/c = (5/4,3/4,0,0)$; the split of clause (d) with $n = e_0$ gives
$\gamma = 5/4$ and relative velocity $w = (0,3c/5,0,0)\in e_0^{\perp}$, whose spatial coordinates are exactly the
coordinate velocity.

## Facts & Assumptions

**Given:** An inertial chart with $\eta_0 = \operatorname{diag}(-1,1,1,1)$ a real $c>0$, and the worldline $x:\mathbb R\to A$ with coordinates $x(t) = (ct,(3c/5)t,0,0)$.

[L1] Inertial charts ([[def-inertial-frame-and-inertial-chart]]): in an inertial chart the matrix of $\eta$ is $\operatorname{diag}(-1,1,1,1)$ and the chart's observer is $e_0$.

[L2] Curves ([[def-sr-regular-causal-curve-and-worldline]]): the difference quotients of $x$ are identically $(c,3c/5,0,0)$, so $x'(t) = (c,3c/5,0,0)$; the sign of $\eta(x',x')$ decides the causal character ([[def-causal-classification-of-lorentz-vectors]]).

[L3] Proper time ([[def-sr-proper-time]]): for a constant tangent $x'$ the increment is $c^{-1}(t-t_0)\sqrt{-\eta(x',x')}$.

[L4] Four-velocity and four-acceleration ([[def-sr-four-velocity-and-four-acceleration]]): $U = x'/\tau'$, and $A = U'/\tau'$ when $x$ is $C^{2}$; a constant $U$ has zero derivative.

[L5] Decomposition ([[thm-sr-proper-time-and-observer-decomposition]]): clauses (a), (c), (d): $\eta(U,U) = -c^{2}$; for the observer $e_0$, $\gamma = -\eta(e_0,u)$ and the relative velocity is $w = c\,h(u)/\gamma = (0,w_{\mathrm{sp}})$ when $u = \gamma_w(c,w)/c$.

[L6] Bilinearity ([[def-lorentz-form-and-inertia]]): in the chart, $\eta(v,v) = -(v^{0})^{2}+(v^{1})^{2}+(v^{2})^{2}+(v^{3})^{2}$.

## Verification

**Proof technique:** direct.

1.1 The difference quotients of $x$ are identically $(c,3c/5,0,0)$, so $x'(t) = (c,3c/5,0,0)$; by [L6], $\eta(x',x') = -c^{2}+9c^{2}/25 = -(16/25)c^{2} < 0$, so $x$ is a $C^{1}$ future timelike worldline by [L2]. [given, L1, L2, L6]

2.1 By [L3] the proper-time increment is $\tau(t)-\tau(t_0) = c^{-1}(t-t_0)\cdot(4c/5) = (4/5)(t-t_0)$, so the moving clock's proper time runs at the rate $4/5 = 1/\gamma$ with $\gamma = 5/4$. [step 1.1, L3]

3.1 The four-velocity is $U = x'/\tau' = (5/4)(c,3c/5,0,0) = (5c/4,3c/4,0,0)$; it is constant, so $A = U'/\tau' = 0$ by [L4]; and $\eta(U,U) = -25c^{2}/16+9c^{2}/16 = -c^{2}$ by [L6], in agreement with clause (a) of [L5]. [step 1.1, step 2.1, L4, L5, L6]

4.1 The dimensionless four-velocity is $u = U/c = (5/4,3/4,0,0)$ with $\eta(u,u) = -1$; the split of clause (d) of [L5] with $n = e_0$ gives $\gamma = -\eta(e_0,u) = 5/4$, $h(u) = u-u^{0}e_0 = (0,3/4,0,0)$ and relative velocity $w = c\,h(u)/\gamma = (0,3c/5,0,0)$, whose spatial coordinates are exactly the coordinate velocity of the worldline; the Lorentz-factor identity $|w|^{2} = c^{2}(1-\gamma^{-2}) = c^{2}(1-16/25) = 9c^{2}/25$ holds. [step 3.1, L5] ∎

## Remarks

- **All numbers are exact rationals.** The computation uses only the diagonal form of $\eta$ and the rational values $3/5$, $4/5$, $5/4$; no numerical approximation and no measurement is involved.

- **The factor $1/\gamma$ is a model statement.** That the moving ideal clock runs slow by $4/5$ is a statement about the model's proper time, not a reported measurement of any physical clock.
