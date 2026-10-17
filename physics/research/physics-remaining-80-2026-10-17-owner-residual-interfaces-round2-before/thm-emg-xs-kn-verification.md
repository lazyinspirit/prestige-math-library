---
id: thm-emg-xs-kn-verification
kind: theorem
title: Fully verified electric Kerr-Newman electrovacuum
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - lem-emg-xs-kn-rational-calculus
  - def-emg-xs-kn-data
  - def-emg-xs-kn-full-sphere-exterior
  - def-emg-xs-geometric-electrovac
  - lem-emg-maxwell-current-forms
  - lem-emg-maxwell-observer-stress
  - lem-emg-lorentz-hodge-calculus
  - thm-gr-density-divergence-and-finite-chain-flux
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  lem-emg-xs-kn-rational-calculus: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  lem-emg-maxwell-observer-stress: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
  def-emg-xs-kn-full-sphere-exterior: mathematical-premise
  def-emg-xs-kn-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): KN metric, Maxwell field and direct Newman-Penrose verification"
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.114)-(7.116) and charge substitution, printed pp. 208-209 (PDF pp. 214-215): rotating metric and charged form"
physical_scope: null
---


## Statement

For $M,a,q\in\mathbb R$, on every pole-free Boyer-Lindquist domain with
$\Sigma>0$ and $\Delta\ne0$, the metric and potential of
[[def-emg-xs-kn-data]] satisfy the equations below. In addition, for every
$R_0>4|M|$, the full-sphere exterior extension of
[[def-emg-xs-kn-full-sphere-exterior]] satisfies the same equations on
$\mathbb R_{x^0}\times(R_0,\infty)\times S^2$. On all these domains,
$$d\mathcal F=0,\qquad d(\star_g\mathcal F)=0,\qquad \operatorname{Ric}_{ij}=2\left(\mathcal F_{ik}\mathcal F_j{}^k -\frac14g_{ij}\mathcal F_{kl}\mathcal F^{kl}\right).$$
Thus it is a geometric electrovac datum on every such chart component. No
maximal extension, uniqueness, horizon classification, or physical
measurement is asserted.

## Facts & Assumptions

**Given:** The exact Boyer-Lindquist Kerr-Newman metric and potential with
$\Sigma>0$, $\Delta\ne0$, $0<\theta<\pi$.

[F1] [[def-emg-xs-kn-data]]: on a pole-free patch,
$\mathcal A=-qr\Sigma^{-1}(dx^0-a\sin^2\theta\,d\phi)$ is smooth
and $\mathcal F=d\mathcal A$.

[F5] [[def-emg-xs-kn-full-sphere-exterior]]: the smooth global exterior metric
and potential agree with those Boyer-Lindquist formulas off the poles; the
full-sphere exterior is Lorentzian and time-oriented.

[F2] [[lem-emg-xs-kn-rational-calculus]]: with $y=\cos\theta$ and
$w=\Sigma$, the inverse, determinant, four Maxwell-density residuals, Ricci
table and sixteen Einstein residuals are computed by exact rational functions.

[F3] [[lem-emg-lorentz-hodge-calculus]] and
[[thm-gr-density-divergence-and-finite-chain-flux]]: the Lorentzian Hodge map
uses the metric volume orientation, and
$\nabla_i\mathcal F^{ij}=\Sigma^{-1}\partial_i(\Sigma\mathcal F^{ij})$ in
this chart.

[L1] [[lem-emg-maxwell-current-forms]] (present batch-3 draft; proof is
AI-generated and not independently accepted): for smooth $F,j$ and $\mu_0>0$,
its proved interface is $d(\star_gF)=-\iota_v\mathrm{vol}_g$ with
$v^b=\nabla_aF^{ab}$, and hence
$\nabla_aF^{ab}=-\mu_0j^b\Longleftrightarrow
d(\star_gF)=\mu_0\iota_j\mathrm{vol}_g$. The draft assumes the sourced
equations in its main setup; its component proof derives the sign identity.

The planned stress-normalization interface is not supplied by the current
[[lem-emg-maxwell-observer-stress]] draft: its actual statement gives only the
conditional SI tensor $T^{\mathrm{EM}}_{ab}=\mu_0^{-1}Q_{ab}(F)$ from the
action-variation premise. It does not state or prove the scale relation
$\alpha^2=4\pi G_N/(\mu_0c^4)$ or
$(8\pi G_N/c^4)T^{\mathrm{EM}}=2Q(\alpha F)$. The geometric proof below
uses its directly computed $Q(\mathcal F)$ identity and makes no SI source
claim.

[F4] [[def-emg-xs-geometric-electrovac]]: a source-free geometric electrovac
datum satisfies $d\mathcal F=d(\star_g\mathcal F)=0$ and
$\operatorname{Ric}=2Q(\mathcal F)$.

[A1] Each pole-free chart has $\Sigma>0$, $\Delta\ne0$, and
$0<\theta<\pi$; the rational identities specialize only after their
recorded divisors are nonzero. For the additional full-sphere conclusion use
the exterior domain $r>R_0>4|M|$ of [F5].

## Proof


1.1 On a pole-free patch, [F1] and commutation of smooth mixed partials give $d\mathcal F=d^2\mathcal A=0$. On the full-sphere exterior, the global potential in [F5] gives the same identity everywhere. [F1, F5, algebra]

1.2 The four Maxwell-density residuals in [F2] are exactly zero on the pole-free region. By [F3] they give $\nabla_i\mathcal F^{ij}=0$ there. The sign identity in the actual batch-3 draft [L1] with $v=0$ gives $d(\star_g\mathcal F)=0$ there. In the full-sphere extension, this three-form is smooth by [F5] and vanishes on a dense set, so it vanishes at the poles by continuity. [F2, F3, F5, L1, A1, algebra]

1.3 The sixteen metric-field residuals in [F2] are exactly zero on every pole-free patch, using the metric, orientation and curvature convention in [F3]. In the full-sphere extension both sides of the geometric Einstein equation are smooth by [F5]; equality on the dense pole-free region therefore extends to the poles by continuity. This proves $\operatorname{Ric}=2Q(\mathcal F)$ for the length-normalized form. It does not infer an SI stress conversion: the actual stress draft lacks the planned $\alpha$ relation. [F2, F3, F5, algebra]

2.1 Steps 1.1, 1.2 and 1.3 give the three equations in [F4] on every pole-free chart under [A1]. For the full-sphere exterior, [F5] supplies the smooth time-oriented Lorentzian datum, and the same equations hold at the poles by the continuity arguments in steps 1.2 and 1.3. Thus both stated domains are geometric electrovac data. No horizon or maximal-extension claim is made. [F4, F5, A1, step 1.1, step 1.2, step 1.3] ∎

## Remarks

The exact rational run is recorded in
research/physics-remaining-80-2026-10-17-batch-21.finite-check.json.
It verifies this finite component table; it does not establish physical
applicability or independent proof acceptance.

