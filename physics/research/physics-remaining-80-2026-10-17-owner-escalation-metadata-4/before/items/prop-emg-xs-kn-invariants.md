---
id: prop-emg-xs-kn-invariants
kind: proposition
title: Kerr-Newman Maxwell and Ricci invariants
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - thm-emg-xs-kn-verification
  - lem-emg-xs-kn-rational-calculus
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  thm-emg-xs-kn-verification: mathematical-premise
  lem-emg-xs-kn-rational-calculus: mathematical-premise
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
      locator: "Sections 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): KN metric and Maxwell field"
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.114)-(7.116), printed pp. 208-209 (PDF pp. 214-215): rotating metric and singularity domain"
physical_scope: null
---


## Statement

For the electric Kerr-Newman datum with real parameters $M,a,q$ on
$\Sigma>0$, $\Delta\ne0$, $0<\theta<\pi$, its scalar curvature is zero and
$$\mathcal F_{ab}\mathcal F^{ab} =-\frac{2q^2(r^4-6a^2r^2\cos^2\theta+a^4\cos^4\theta)}{\Sigma^4}, \qquad \operatorname{Ric}_{ab}\operatorname{Ric}^{ab}=\frac{4q^4}{\Sigma^4}.$$
If $q\ne0$, the Ricci-square diverges as $\Sigma\to0$; hence no $C^2$
nondegenerate metric extension can add a point approached with $\Sigma\to0$.
When $a\ne0$, the excluded set $r=0,\theta=\pi/2$ maps under the oblate
coordinate map to the ring $X^2+Y^2=a^2,\ Z=0$. If $q=0$, these charged
invariants give no obstruction; no vacuum Kerr Weyl-singularity claim is
made.

## Facts & Assumptions

**Given:** The exact KN datum with $\Sigma>0$ and $\Delta\ne0$.

[F1] [[lem-emg-xs-kn-rational-calculus]]: the exact rational calculation
returns scalar curvature zero, Ricci-square $4q^4/\Sigma^4$, and the displayed
Maxwell scalar.

[A1] A proposed extension point is approached by a sequence on which
$\Sigma\to0$; $q\ne0$ is required for the charged-invariant obstruction.

## Proof

1.1 The coordinate entries and inverse in [F1] give the exact contraction
$\mathcal F_{ab}\mathcal F^{ab}=2(B_m^2-E^2)$ with the algebraic abbreviations
$$E=\frac{q(r^2-a^2y^2)}{\Sigma^2},\qquad B_m=\frac{2qar y}{\Sigma^2},\qquad y=\cos\theta.$$
Expanding
$(r^2-a^2y^2)^2-4a^2r^2y^2
=r^4-6a^2r^2y^2+a^4y^4$
gives the field scalar in [F1]. The same exact rational output gives $S=0$
and $\operatorname{Ric}_{ab}\operatorname{Ric}^{ab}=4q^4/\Sigma^4$.
[F1, algebra]

1.2 If $q\ne0$ and $\Sigma\to0$, then $4q^4/\Sigma^4\to+\infty$. A $C^2$
nondegenerate metric extension has continuous inverse metric and continuous
curvature contractions at its added point, so this divergence is impossible.
If $q=0$, the displayed Ricci-square vanishes and this argument gives no
obstruction. [A1, F1, algebra]

2.1 For $a\ne0$, define
$$X=\sqrt{r^2+a^2}\sin\theta\cos\phi,\quad Y=\sqrt{r^2+a^2}\sin\theta\sin\phi,\quad Z=r\cos\theta.$$
At $r=0$, $\theta=\pi/2$, these satisfy $X^2+Y^2=a^2$ and $Z=0$, the ring.
This map labels the excluded locus only; it is not asserted to be an injective
coordinate chart through the disk. [A1, algebra] ∎

## Remarks

No regular charged source on the ring, maximal extension, or global
singularity theorem follows from this invariant calculation.

