---
id: cex-sr-past-directed-timelike-parametrization-is-not-a-worldline
kind: counterexample
title: "Counterexample: a past-directed parametrization of a timelike line is not a worldline"
status: published
origin: pipeline
domain: mathematics
dependency_level: 9
deps:
  - def-sr-regular-causal-curve-and-worldline
  - def-sr-proper-time
  - def-causal-classification-of-lorentz-vectors
  - def-time-orientation-and-future-causal-sets
  - def-lorentz-form-and-inertia
dependency_roles:
  def-sr-regular-causal-curve-and-worldline: mathematical-premise
  def-sr-proper-time: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
  def-time-orientation-and-future-causal-sets: mathematical-premise
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

**False claim:** if a $C^{1}$ curve parametrizes a straight timelike line, then
it is a future timelike worldline of the model and the proper-time construction
gives the clock reading of its history.

The claim is refuted by orienting the parametrization backwards: the same
geometric line with the opposite parametrization has past timelike tangents, is
not a worldline of the model, and yet the proper-time integrand takes exactly
the same values as for the future-directed parametrization. This is why the
parametrization, and not merely the image of the curve, is part of the
definition of a worldline.

## Facts & Assumptions

**Given:** A future timelike displacement $d$ and an event $p\in A$, and the two parametrizations $z(s):=p-d+sd$ and $x(s):=p-sd$, $s\in[0,1]$, of the same straight timelike segment; $z(s)=x(1-s)$.

[L1] Causal classification ([[def-causal-classification-of-lorentz-vectors]]): $v$ is timelike when $\eta(v,v) < 0$; the sign of $\eta$ does not distinguish future from past.

[L2] Time orientation ([[def-time-orientation-and-future-causal-sets]]): the timelike set is the disjoint union of the future component $C^{+}$ and the past component $C^{-}$, and a timelike vector is future or past but not both; $-v \in C^{-}$ whenever $v \in C^{+}$.

[L3] Worldlines ([[def-sr-regular-causal-curve-and-worldline]]): a future timelike worldline is a $C^{1}$ curve whose tangent at every parameter value is future timelike; the parametrization is part of the curve.

[L4] Proper time ([[def-sr-proper-time]]): the proper-time integrand is $\sqrt{-\eta(x'(s),x'(s))}$, which depends on the tangent through the quadratic form $\eta$ only.

## Counterexample

**Proof technique:** direct.

1.1 In an inertial chart with $\eta_0 = \operatorname{diag}(-1,1,1,1)$ let $d := (5,3,0,0)$: then $-\eta(d,d) = -(-25+9) = 16 > 0$, so $d$ is timelike, and choosing $d$ in the future component $C^{+}$ makes it a future timelike displacement; then $-d$ belongs to $C^{-}$ by [L2]. [L1, L2]

2.1 The curve $x(s) := p - s d$ on $[0,1]$ has difference quotients identically $-d$, so $x'(s) = -d$ is past timelike for every $s$; by [L3] the curve is not a future timelike worldline of the model, The curve $z(s):=p-d+sd=x(1-s)$ for $s\in[0,1]$ has tangent $d$, is a future timelike worldline and has exactly the same image, since $s\mapsto1-s$ is a bijection of $[0,1]$. [step 1.1, L3]

3.1 The proper-time integrand of both curves agrees pointwise: $\sqrt{-\eta(-d,-d)} = \sqrt{-\eta(d,d)} = 4$ by bilinearity of $\eta$, so the proper-time integral alone does not distinguish the future-directed from the past-directed parametrization: by [L4] the proper-time construction is attached to the parametrized history, together with its future timelike hypothesis, and not to the bare image of the curve. [step 1.1, step 2.1, L4] ∎

## Remarks

- **Orientation is data, not geometry of the image.** The same set of events carries two opposite worldline parametrizations with identical proper-time densities; only the future-directed one is a worldline of the model, and the past-directed one is its orientation reversal.
