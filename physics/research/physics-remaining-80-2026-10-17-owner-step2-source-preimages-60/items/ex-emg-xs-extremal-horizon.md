---
id: ex-emg-xs-extremal-horizon
kind: example
title: Extremal RN smooth horizon with zero kappa
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 8
deps:
  - def-emg-xs-ingoing-rn
  - prop-emg-xs-rn-horizon-data
  - thm-emg-xs-rn-crossing
dependency_roles:
  def-emg-xs-ingoing-rn: mathematical-premise
  prop-emg-xs-rn-horizon-data: mathematical-premise
  thm-emg-xs-rn-crossing: mathematical-premise
proof_strategy: direct
physical_scope: null
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019"
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.110)-(7.113): RN double-root extremal case."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1 and 3.3: RN seed and extremal-horizon context; no extremal bifurcation chart is imported."
---

## Example

Let $M>0$ and $q_e,q_m\in\mathbb R$ satisfy $q_e^2+q_m^2=M^2$. Then
the selected ingoing RN model has $f(r)=(1-M/r)^2$, a double positive root
$r_H=M$, and surface gravity $\kappa_H=0$. Its ingoing metric remains
nondegenerate at $r=M$. The simple-root bifurcation chart constructed in
[[thm-emg-xs-rn-crossing]] requires $\kappa>0$ and does not apply here. No
separate extremal bifurcation chart or physical realization is asserted.

## Facts & Assumptions

**Given:** The selected ingoing RN data, $M>0$ and
$q_e^2+q_m^2=M^2$.

[F1] [[prop-emg-xs-rn-horizon-data]]: at the double positive root,
$r_H=M$ and $\kappa_H=0$ under these parameter assumptions.

[F2] [[thm-emg-xs-rn-crossing]]: the $v,r$ block is nondegenerate at every
positive root; its additional bifurcation chart is proved only for a simple
root with $\kappa>0$. Its field-equation continuation remains conditional
on the current RN verification draft.

[F3] [[def-emg-xs-ingoing-rn]]: the selected metric is
$-f\,dv^2+2\,dv\,dr+r^2\gamma$ on $r>0$.

[A1] All parameters and $r$ have length units; $\kappa$ has inverse-length
units. The mathematical example concerns the specified metric only.

## Verification

1.1 Substituting $q_e^2+q_m^2=M^2$ gives
$$f(r)=1-\frac{2M}{r}+\frac{M^2}{r^2}=(1-M/r)^2.$$
Thus $f(M)=f'(M)=0$, so the positive root is double. By [F1], its surface
gravity is $f'(M)/2=0$. [F1, A1, algebra]

2.1 The $v,r$ block in [F3] has determinant $-1$ for every $f$, and at
$r=M$ the sphere metric $M^2\gamma$ is positive definite. Hence the metric
is nondegenerate and Lorentzian at the double root. The extra chart in [F2]
assumes a simple root and $\kappa>0$, both of which fail by step 1.1; that
construction therefore supplies no extremal bifurcation chart. [F2, F3, A1, step 1.1, algebra]

3.1 Steps 1.1 and 2.1 establish the double-root, zero-surface-gravity case and
the regular ingoing metric while delimiting the simple-root construction.
No maximal extension or physical existence conclusion follows.
[F1, F2, step 1.1, step 2.1] ∎
## Remarks

This is a conditional model calculation; it does not assert that any
physical system realizes the extremal parameters.
