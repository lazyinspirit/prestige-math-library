---
id: lem-emg-xs-kn-rational-calculus
kind: lemma
title: Exact rational Kerr-Newman component derivation
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-emg-xs-kn-data
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-curvature-tensoriality-and-coordinate-formula
  - thm-gr-curvature-algebraic-symmetries
  - def-gr-metric-volume-form-and-current-flux
  - thm-gr-density-divergence-and-finite-chain-flux
  - lem-emg-lorentz-hodge-calculus
  - alg-emg-rational-electrovac-verification
  - lem-emg-rational-electrovac-verification-correctness
  - lem-emg-rational-electrovac-verification-termination-resources
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  def-emg-xs-kn-data: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-curvature-algebraic-symmetries: mathematical-premise
  def-gr-metric-volume-form-and-current-flux: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  alg-emg-rational-electrovac-verification: mathematical-premise
  lem-emg-rational-electrovac-verification-correctness: mathematical-premise
  lem-emg-rational-electrovac-verification-termination-resources: mathematical-premise
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
      locator: "Sections 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): KN metric, Maxwell field and direct field-equation verification"
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.114)-(7.116) and charge substitution, printed pp. 208-209 (PDF pp. 214-215): Kerr metric and charged rotating form"
physical_scope: null
---


## Statement

Let $M,a,q\in\mathbb R$ and use the electric Kerr-Newman datum on a
Boyer-Lindquist chart with $\Sigma>0$, $\Delta\ne0$, $0<\theta<\pi$. Set
$y=\cos\theta$, $b=1-y^2$, $R=r^2+a^2$, and use the rational procedure of
[[alg-emg-rational-electrovac-verification]] with volume polynomial $w=\Sigma$.
Its exact component table is: the metric and inverse entries and determinant
in Facts [F1]-[F2]; the field components
$$\mathcal F_{10}=\frac{q(r^2-a^2y^2)}{\Sigma^2},\quad \mathcal F_{20}=\frac{2qra^2y}{\Sigma^2},\quad \mathcal F_{13}=-\frac{abq(r^2-a^2y^2)}{\Sigma^2},\quad \mathcal F_{23}=-\frac{2qraR\,y}{\Sigma^2};$$
the compact Ricci table in [F3]; and the exact contractions
$$\mathcal F_{ij}\mathcal F^{ij} =-\frac{2q^2(r^4-6a^2r^2y^2+a^4y^4)}{\Sigma^4},\qquad \operatorname{Ric}_{ij}\operatorname{Ric}^{ij}=\frac{4q^4}{\Sigma^4}, \qquad g^{ij}\operatorname{Ric}_{ij}=0.$$
The exact rational calculation returns zero numerator flags for all four
Maxwell-density residuals and all sixteen Einstein residuals.

## Facts & Assumptions

**Given:** The exact electric KN metric and potential on $\Sigma>0$, $\Delta\ne0$,
and $b=1-y^2>0$.

[F1] [[def-emg-xs-kn-data]]: in $(x^0,r,\theta,\phi)$,
$g=-\Delta\Sigma^{-1}(dx^0-a\sin^2\theta\,d\phi)^2
+\Sigma\Delta^{-1}dr^2+\Sigma d\theta^2
+\sin^2\theta\,\Sigma^{-1}(R\,d\phi-a\,dx^0)^2$ and
$\mathcal A=-qr\Sigma^{-1}(dx^0-a\sin^2\theta\,d\phi)$.

[F2] [[alg-emg-rational-electrovac-verification]]: for a symmetric rational
metric, rational potential and admitted volume polynomial $w$, the finite
procedure returns exact inverse, Maxwell-density, Christoffel, Ricci,
Einstein and scalar tables with numerator-zero flags.

[F3] [[lem-emg-rational-electrovac-verification-correctness]] and
[[lem-emg-rational-electrovac-verification-termination-resources]]: the finite
sparse-polynomial schedule has the stated exact algebraic meaning and
terminates; zero flags are exact after all admissible chart divisors are kept.

[F4] [[def-gr-curvature-tensor-and-derived-tensors]] and
[[thm-gr-curvature-tensoriality-and-coordinate-formula]]: use the sign
$R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$ and the stated
Christoffel and Ricci coordinate formulas.

[F5] [[def-gr-metric-volume-form-and-current-flux]] and
[[thm-gr-density-divergence-and-finite-chain-flux]]: in a chart with metric
volume density $w$, $\nabla_iJ^i=w^{-1}\partial_i(wJ^i)$.

[A1] The coordinate region has $\Sigma>0$, $\Delta\ne0$, $b>0$; the algorithm
uses the rational-function field before specializing the parameters.

## Proof


1.1 The coordinate change $y=\cos\theta$ is a diffeomorphism on $0<\theta<\pi$ because $dy/d\theta=-\sin\theta\ne0$. Expanding the metric from [F1] gives the five nonzero entries $$g_{00}=-(\Delta-a^2b)/\Sigma,\quad g_{03}=-ab(R-\Delta)/\Sigma,\quad g_{33}=b(R^2-a^2\Delta b)/\Sigma,\quad g_{11}=\Sigma/\Delta,\quad g_{22}=\Sigma/b.$$ Their $0,3$ block determinant is $-\Delta b$ and the full determinant is $-\Sigma^2$. Multiplying the stated inverse entries in [[def-emg-xs-kn-data]] by these blocks gives $gg^{-1}=I_4$; the $1,1$ and $2,2$ entries are reciprocal diagonal factors. Since $\Sigma>0$, the volume polynomial is $w=\Sigma$. [F1, A1, algebra]

1.2 The potential components from [F1] are $\mathcal A_0=-qr/\Sigma$, $\mathcal A_3=qra b/\Sigma$, and $\mathcal A_1=\mathcal A_2=0$. Applying $\mathcal F_{ij}=\delta_i\mathcal A_j-\delta_j\mathcal A_i$ with $\delta_1=\partial_r$, $\delta_2=\partial_y$ gives the four independent field entries in the Statement; antisymmetry gives the remaining entries. [F1, F2, A1, algebra]

2.1 Substitution of the inverse and metric derivatives into the Christoffel schedule of [F2], followed by the GR coordinate Ricci formula [F4], gives the five nonzero Ricci entries $$\operatorname{Ric}_{00}=\omega(\Delta+a^2b)/\Sigma,\quad \operatorname{Ric}_{03}=-\omega ab(\Delta+R)/\Sigma,\quad \operatorname{Ric}_{33}=\omega(a^2\Delta b^2+bR^2)/\Sigma,\quad \operatorname{Ric}_{11}=-\omega\Sigma/\Delta,\quad \operatorname{Ric}_{22}=\omega\Sigma/b,$$ with $\omega=q^2/\Sigma^2$; the remaining entries vanish. The exact execution record enumerates all sixteen Ricci outputs. [F2, F3, F4, step 1.1, step 1.2, algebra]

3.1 The same finite table computes the full contractions in the Statement. The exact execution record returns four zero Maxwell-density numerators and sixteen zero Einstein-residual numerators. By [F3] these are identities in the fraction field; because $\Sigma,\Delta,b$ are nonzero under [A1], they hold as smooth coordinate identities on every admitted real chart component. [F2, F3, F5, A1, step 1.1, step 1.2, step 2.1, algebra] ∎

## Remarks

The finite exact run is supplementary algebra evidence, not an independent
audit of a computer algebra library and not a physical applicability claim.
The run and its result are recorded in
research/physics-remaining-80-2026-10-17-batch-21.finite-check.json.

