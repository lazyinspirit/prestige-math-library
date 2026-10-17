---
id: thm-emg-xs-rn-verification
kind: theorem
title: Full dyonic Reissner-Nordström electrovac verification
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-emg-xs-geometric-electrovac
  - def-emg-xs-rn-data
  - lem-emg-xs-rn-tensor-identities
  - lem-emg-lorentz-hodge-calculus
  - lem-emg-maxwell-observer-stress
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  def-emg-xs-rn-data: mathematical-premise
  lem-emg-xs-rn-tensor-identities: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-emg-maxwell-observer-stress: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.112), printed pp. 201-202 (PDF pp. 207-208): the RN source-free equations and two-form"
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Section 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): RN seed and exact electrovac verification"
physical_scope: null
---


## Statement

For arbitrary $M,q_e,q_m\in\mathbb R$, put $Q^2=q_e^2+q_m^2$ and
$f(r)=1-2M/r+Q^2/r^2$. On every open $J\subset(0,\infty)$ with $f\ne0$, the
dyonic RN datum of [[def-emg-xs-rn-data]] is a geometric electrovac datum of
[[def-emg-xs-geometric-electrovac]] on
$\mathbb R_{x^0}\times J\times S^2$. In particular, its global two-form is
smooth, $d\mathcal F=d(\star_g\mathcal F)=0$, and
$\operatorname{Ric}_{ab}=2Q_{ab}(\mathcal F)$ everywhere on that domain.

## Facts & Assumptions

**Given:** The dyonic RN datum, the Lorentzian Hodge convention and its curvature identities.

[F1] [[def-emg-xs-rn-data]]: $\mathcal F=-q_e r^{-2}dx^0\wedge dr+q_m\omega_{S^2}$ and the oriented sphere area form is global.

[F2] [[lem-emg-xs-rn-tensor-identities]]: in a polar chart,
$\operatorname{Ric}_{00}=fQ^2/r^4$, $\operatorname{Ric}_{11}=-Q^2/(fr^4)$,
$\operatorname{Ric}_{22}=Q^2/r^2$, $\operatorname{Ric}_{33}=Q^2\sin^2\theta/r^2$,
with scalar curvature zero.

[F3] [[lem-emg-lorentz-hodge-calculus]]: on two-forms,
$(\star_g\mathcal F)_{ab}=\tfrac12(\mathrm{vol}_g)_{abcd}\mathcal F^{cd}$,
$\star_g^2=-1$, and $d^2=0$.

[F4] [[def-emg-xs-geometric-electrovac]]: source-free geometric electrovac requires
$d\mathcal F=0$, $d(\star_g\mathcal F)=0$, and $\operatorname{Ric}=2Q(\mathcal F)$,
with $\Lambda=0$.

[A1] The coordinate domain has $r>0$ and $f(r)\ne0$; no positive-mass, horizon,
asymptotic, global-potential or source assumption is added.

## Proof


1.1 The angular area form $\omega_{S^2}$ is closed, and $d(r^{-2})=-2r^{-3}dr$. Therefore $d\mathcal F=-q_e\,d(r^{-2})\wedge dx^0\wedge dr+q_m\,d\omega_{S^2}=0$ because the first term contains $dr\wedge dr$ and the second is a three-form on the two-dimensional sphere. [F1, A1, algebra]

1.2 With orientation $dx^0\wedge dr\wedge\omega_{S^2}$, the Hodge formula in [F3] gives $\star_g\mathcal F=q_e\omega_{S^2}+q_mr^{-2}dx^0\wedge dr$. Its exterior derivative is zero by the same repeated-$dr$ computation, so the vacuum Maxwell equation holds on the whole $f\ne0$ domain, including components with $f<0$. [F1, F3, A1, algebra]

1.3 Direct coordinate contraction of [F1] gives $\mathcal F_{ab}\mathcal F^{ab}=2(q_m^2-q_e^2)/r^4$ and the only nonzero diagonal entries of $Q$ are $Q_{00}=fQ^2/(2r^4)$, $Q_{11}=-Q^2/(2fr^4)$, $Q_{22}=Q^2/(2r^2)$, $Q_{33}=Q^2\sin^2\theta/(2r^2)$; every mixed entry is zero. [F1, algebra]

2.1 Comparing [F2] and step 1.3 gives $\operatorname{Ric}_{ab}=2Q_{ab}(\mathcal F)$ in every polar chart. Both sides are smooth tensor fields on the product, so equality on the dense polar-coordinate locus extends to the two poles by continuity. Together with steps 1.1-1.2 and the definition [F4], this proves the claimed source-free geometric electrovac statement. [F2, F4, step 1.1, step 1.2, step 1.3, algebra] ∎

## Remarks

This is a deduction about the mathematical datum. The SI interpretation of
$M,q_e,q_m$ and any claim that nature realizes this electrovac are outside this
mathematical theorem. The declared observer-stress dependency remains a draft
interface and does not supply the geometric-to-SI scale relation.

