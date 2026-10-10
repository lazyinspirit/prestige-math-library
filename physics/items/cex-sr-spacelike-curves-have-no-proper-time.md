---
id: cex-sr-spacelike-curves-have-no-proper-time
kind: counterexample
title: "Counterexample: the proper-time integrand of a spacelike curve is not real"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 9
deps:
  - def-sr-regular-causal-curve-and-worldline
  - def-sr-proper-time
  - def-causal-classification-of-lorentz-vectors
  - def-inertial-frame-and-inertial-chart
  - def-lorentz-form-and-inertia
dependency_roles:
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
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

**False claim:** the formula
$\tau(b) - \tau(a) = c^{-1}\int_a^b \sqrt{-\eta(x'(s),x'(s))}\,ds$ assigns an
elapsed clock time to every regular $C^{1}$ curve of the model.

The claim is refuted by a straight spacelike line: its tangent is spacelike at
every point, so $-\eta(x',x')$ is negative and the square root is not a real
number. A spacelike interval is not elapsed clock time; the geometric spacing
along the curve is its spacelike length, a different quantity.

## Facts & Assumptions

**Given:** An event $p\in A$, a spacelike vector $d$ and the straight curve $x:\mathbb R\to A$, $x(s) := p + s\,d$ in the oriented time-oriented affine Minkowski model.

[L1] Causal classification ([[def-causal-classification-of-lorentz-vectors]]): $v$ is spacelike when $\eta(v,v) > 0$ and timelike when $\eta(v,v) < 0$.

[L2] Inertial charts ([[def-inertial-frame-and-inertial-chart]]): in an inertial chart the matrix of $\eta$ is $\operatorname{diag}(-1,1,1,1)$, so for $v = (v^{0},v^{1},v^{2},v^{3})$ one has $\eta(v,v) = -(v^{0})^{2} + (v^{1})^{2} + (v^{2})^{2} + (v^{3})^{2}$.

[L3] Curves ([[def-sr-regular-causal-curve-and-worldline]]): the curve $x(s) = p + s d$ has constant tangent $x'(s) = d$ and is a future timelike worldline only when $d$ is future timelike.

[L4] Proper time ([[def-sr-proper-time]]): the proper-time integrand is $\sqrt{-\eta(x'(s),x'(s))}$ and the construction is restricted to future timelike worldlines; for a spacelike tangent the quantity $-\eta(x',x')$ is negative.

## Counterexample

**Proof technique:** direct.

1.1 In an inertial chart with $\eta_0 = \operatorname{diag}(-1,1,1,1)$ let $d := (1,2,0,0)$: then $\eta(d,d) = -1 + 4 = 3 > 0$, so $d$ is spacelike by [L1]. [L1, L2]

2.1 The curve $x(s) := p + s d$ has constant tangent $x'(s) = d$ by [L3], so $-\eta(x'(s),x'(s)) = -3 < 0$ at every point; the integrand $\sqrt{-\eta(x',x')}$ of [L4] is the square root of a negative real number and is not defined. The proper-time construction therefore produces no real value on this curve. [step 1.1, L3, L4]

3.1 The geometric spacing along the curve is governed by the spacelike length per unit parameter, $\sqrt{\eta(d,d)} = \sqrt{3}$, not by a clock reading: this curve is not a timelike worldline, has no causal-character tangent that is timelike, and the failure is exactly the hypothesis of the timelike restriction in [L4]. [step 1.1, step 2.1, L4] ∎

## Remarks

- **Spacelike length and proper time are different constructions.** The number $\sqrt{\eta(d,d)}$ measures a spatial separation in the model; $c$ times it is not an elapsed time along the curve, and no clock is associated with a spacelike displacement by this framework.
