---
id: ex-emg-xs-rn-charge-sign
kind: example
title: Opposite electric charges give the same RN metric
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 7
deps:
  - def-emg-xs-rn-data
  - thm-emg-xs-rn-verification
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  thm-emg-xs-rn-verification: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
  def-emg-xs-rn-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.113), printed pp. 201-203 (PDF pp. 207-209): RN field and charge parameters"
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): KN field and exact Einstein-Maxwell verification"
physical_scope: null
---


## Example

Fix a length $\ell>0$ and a real mass parameter $M$. On any positive-radius
interval where the two functions
$f_\pm(r)=1-2M/r+\ell^2/r^2$ are nonzero, compare the pure electric RN data
with $q_e=+\ell$ and $q_e=-\ell$.

## Facts & Assumptions

**Given:** The dyonic RN formula with $q_m=0$ and the same $M,r$ domain in both cases.

[F1] [[def-emg-xs-rn-data]]: $f=1-2M/r+(q_e^2+q_m^2)/r^2$ and
$\mathcal F=-q_e r^{-2}dx^0\wedge dr+q_m\omega_{S^2}$.

[F2] [[thm-emg-xs-rn-verification]]: each such datum is a source-free
geometric electrovac solution on its stated domain.

## Verification


1.1 Since $(+\ell)^2=(-\ell)^2$, both lapse functions equal $1-2M/r+\ell^2/r^2$. Every metric coefficient is consequently identical. [F1, algebra]

2.1 The two fields are $\mathcal F_\pm=\mp\ell r^{-2}dx^0\wedge dr$, so $\mathcal F_-=-\mathcal F_+$. Their normalized oriented electric sphere flux parameters $(4\pi)^{-1}\int_{S_r}\star_g\mathcal F_\pm$ are $\pm\ell$ because $\star_g\mathcal F_\pm=\pm\ell\,\omega_{S^2}$ and $\int_{S^2}\omega_{S^2}=4\pi$. Thus the metric does not determine the sign of the electric flux parameter. [F1, F2, step 1.1, algebra] ∎

