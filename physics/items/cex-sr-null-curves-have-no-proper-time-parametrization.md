---
id: cex-sr-null-curves-have-no-proper-time-parametrization
kind: counterexample
title: "Counterexample: a future null curve has no proper-time parametrization"
status: published
origin: pipeline
domain: mathematics
dependency_level: 9
deps:
  - def-sr-regular-causal-curve-and-worldline
  - def-sr-proper-time
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - def-inertial-frame-and-inertial-chart
  - def-lorentz-form-and-inertia
dependency_roles:
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
  def-inertial-frame-and-inertial-chart: mathematical-premise
  def-lorentz-form-and-inertia: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement refuted

**False claim:** every regular $C^{1}$ curve of the model admits a proper-time
parametrization, with strictly increasing proper-time function and normalized
timelike four-velocity.

The claim is refuted by a straight future null line. It is a regular future
curve whose tangent is null at every point, so the proper-time integrand
vanishes identically, its formal length integral is constant and cannot
serve as a parameter, and no unit timelike tangent can be attached to the
curve. The existence of this curve is exactly why
[[def-sr-proper-time]] carries the future timelike hypothesis and why null
rays need their own parametrization.

## Facts & Assumptions

**Given:** A real $c>0$, an event $p\in A$, a future null vector $k$ and the straight curve $x:\mathbb R\to A$, $x(s) := p + s\,k$ in the oriented time-oriented affine Minkowski model.

[L1] Causal classification ([[def-causal-classification-of-lorentz-vectors]]): $v$ is null when $v \ne 0$ and $\eta(v,v) = 0$, timelike when $\eta(v,v) < 0$, and the zero vector has no causal character.

[L2] Time orientation ([[def-time-orientation-and-future-causal-sets]]): $v$ is future null when it is nonzero null and lies in the closure of the future timelike component.

[L3] Inertial charts ([[def-inertial-frame-and-inertial-chart]]): in an inertial chart the matrix of $\eta$ is $\operatorname{diag}(-1,1,1,1)$, so for $v = (v^{0},v^{1},v^{2},v^{3})$ one has $\eta(v,v) = -(v^{0})^{2} + (v^{1})^{2} + (v^{2})^{2} + (v^{3})^{2}$.

[L4] Curves and worldlines ([[def-sr-regular-causal-curve-and-worldline]]): a curve $x(s) = p + s k$ with constant tangent $k$ is $C^{1}$ with $x'(s) = k$; it is a future null curve when $k$ is future null, and a future timelike worldline only when $k$ is future timelike.

[L5] Proper time ([[def-sr-proper-time]]): the proper-time integrand is $\sqrt{-\eta(x'(s),x'(s))}$ and the construction is restricted to future timelike worldlines.

## Counterexample

**Proof technique:** direct.

1.1 In an inertial chart with $\eta_0 = \operatorname{diag}(-1,1,1,1)$ let $k := (1,1,0,0)$: then $\eta(k,k) = -1 + 1 = 0$ and $k \ne 0$, so $k$ is null by [L1], and its first coordinate is positive, so $k$ lies in the closure of the future timelike component and is future null by [L2]. [L1, L2, L3]

2.1 The curve $x(s) := p + s k$ has difference quotients $\bigl(x(s+h)-x(s)\bigr)/h = k$ for every $h \ne 0$, so $x'(s) = k$ for every $s$ and $x$ is a regular $C^{1}$ future null curve by [L4]. [step 1.1, L4]

3.1 Evaluating the length density appearing in [L5] gives $\sqrt{-\eta(x'(s),x'(s))} = \sqrt{-\eta(k,k)} = 0$ identically; hence the formal length integral $L(s):=c^{-1}\int_0^s\sqrt{-\eta(k,k)}\,dr=0$ is constant and cannot be inverted to give a parameter. The proper-time function of [L5] is not defined on this null curve; the failure of its formal extension refutes the proposed universal construction. [step 2.1, L5]

4.1 No normalized four-velocity can be attached to the curve either: the tangent is $k$, and every scalar multiple $\lambda k$ has squared norm $\eta(\lambda k,\lambda k)=\lambda^2\eta(k,k)=0$ by bilinearity, while a four-velocity $U$ with $\eta(U,U) = -c^{2} < 0$ would be timelike, and a vector cannot be both null and timelike by [L1]. In the chart its coordinates are $x_A(p)+(s,s,0,0)$; with coordinate time $t=(x_A^0(p)+s)/c$, the spatial coordinate velocity is $(c,0,0)$. This is a geometric speed computation, not a physical light-ray identification. [step 2.1, L1, L3] ∎

## Remarks

- **The failure is not a technicality of one formula.** The proper-time integrand is the length integrand of the metric along the curve, and along a null direction that length is zero; no rescaling of the parameter changes this, and no unit timelike tangent exists at any point of the curve.
