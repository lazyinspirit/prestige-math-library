---
id: ex-emg-xs-zero-rotation
kind: example
title: Zero-rotation and zero-charge metric substitutions
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 7
deps:
  - thm-emg-xs-kn-verification
  - thm-emg-xs-rn-verification
  - def-gr-schwarzschild-exterior-model
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  thm-emg-xs-kn-verification: mathematical-premise
  thm-emg-xs-rn-verification: mathematical-premise
  def-gr-schwarzschild-exterior-model: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): the KN metric, Maxwell field and direct Newman-Penrose verification"
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.113), printed pp. 201-203 (PDF pp. 207-209): the dyonic RN field and finite-charge context"
physical_scope: null
---


## Example

Consider the exact Kerr-Newman metric and potential on a pole-free domain with
$\Sigma>0$ and $\Delta\ne0$. Its three parameter substitutions give the
Reissner-Nordström, vacuum Kerr, and Schwarzschild metric forms as follows.

## Facts & Assumptions

**Given:** The electric KN and RN data and their verified field equations,
with $M,a,q$ real length parameters.

[F1] [[thm-emg-xs-kn-verification]]: the KN metric and potential satisfy the
source-free geometric equations on their common domain.

[F2] [[thm-emg-xs-rn-verification]]: the dyonic RN metric and field satisfy
the same equations when $Q^2=q_e^2+q_m^2$.

[F3] [[def-gr-schwarzschild-exterior-model]]: with Schwarzschild radius
$s=2G_Nm_*/c^2$, the exterior metric function is $1-s/r$ on $r>s$.

## Verification

1.1 Set $a=0$ and retain the electric parameter $q$. Then
$\Sigma=r^2$, $\Delta=r^2-2Mr+q^2$, and the KN line element reduces term by
term to
$$-\left(1-\frac{2M}{r}+\frac{q^2}{r^2}\right)(dx^0)^2+ \left(1-\frac{2M}{r}+\frac{q^2}{r^2}\right)^{-1}dr^2+r^2d\Omega^2.$$
Its potential becomes $-q\,dx^0/r$, so it is exactly the electric RN datum
with $q_e=q,q_m=0$; no uniqueness theorem is used. [F1, F2, algebra]

1.2 Set $q=0$ with $a$ arbitrary. The potential and field vanish, while
$\Delta=r^2-2Mr+a^2$ and the displayed metric is the vacuum Kerr form. Since
the KN residual identity of [F1] remains valid at $q=0$, its Ricci tensor
vanishes. This is the vacuum rotating limit, not a classification claim.
[F1, algebra]

2.1 Set both $a=0$ and $q=0$. On the component $M>0$ and $r>2M$, the metric
function is $1-2M/r$. With $s=2M$ and
$m_*=c^2M/G_N$, [F3] identifies it with the Schwarzschild exterior metric
form. The conclusion is only the coordinate substitution and local metric
identity. [F1, F3, algebra] ∎

