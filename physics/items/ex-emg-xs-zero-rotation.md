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
  - def-emg-xs-rn-data
  - def-gr-schwarzschild-exterior-model
dependency_roles:
  thm-emg-xs-kn-verification: mathematical-premise
  def-emg-xs-rn-data: mathematical-premise
  def-gr-schwarzschild-exterior-model: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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
At zero rotation the RN coordinate formulas agree for every admitted
$r\ne0$; identification with the RN datum defined here uses only the common
positive-radius pole-free domains.

## Facts & Assumptions

**Given:** The electric KN and RN data and their verified field equations,
with $M,a,q$ real length parameters.

[F1] [[thm-emg-xs-kn-verification]]: the KN metric and potential satisfy the
source-free geometric equations on their common domain.

[F2] [[def-emg-xs-rn-data]]: the electric RN specialization has
$f=1-2M/r+q^2/r^2$ and potential $-q\,dx^0/r$ when $q_e=q$ and $q_m=0$.

[F3] [[def-gr-schwarzschild-exterior-model]]: with Schwarzschild radius
$s=2G_Nm_*/c^2$, the exterior metric function is $1-s/r$ on $r>s$.

## Verification

1.1 Set $a=0$ and retain the electric parameter $q$. Then
$\Sigma=r^2$, $\Delta=r^2-2Mr+q^2$, and the KN line element reduces term by
term to
$$-\left(1-\frac{2M}{r}+\frac{q^2}{r^2}\right)(dx^0)^2+ \left(1-\frac{2M}{r}+\frac{q^2}{r^2}\right)^{-1}dr^2+r^2d\Omega^2.$$
Its potential becomes $-q\,dx^0/r$. For every open
$J\subset(0,\infty)$ on which $f=\Delta/r^2\ne0$, the resulting metric,
potential and field on the common pole-free chart are the restrictions of
the electric RN datum with $q_e=q,q_m=0$ in [F2]. When $r<0$ is admitted by
the KN definition, the same coordinate expressions hold, but that chart is
outside the positive-radius RN datum in [F2]. No global-domain equality or
uniqueness theorem is used. [F1, F2, algebra]

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

