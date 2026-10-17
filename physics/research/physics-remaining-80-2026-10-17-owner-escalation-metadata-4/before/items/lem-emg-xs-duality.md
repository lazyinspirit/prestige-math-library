---
id: lem-emg-xs-duality
kind: lemma
title: Classical electrovac dual rotation
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 4
deps:
  - def-emg-xs-geometric-electrovac
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
  def-emg-xs-geometric-electrovac: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-emg-maxwell-observer-stress: mathematical-premise
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


## Statement

Let $(M,g,N,o,\mathcal F)$ be a smooth geometric electrovac datum with zero
cosmological constant, and let $\beta\in\mathbb R$ be constant. Define
$$\mathcal F_\beta:=\cos\beta\,\mathcal F+\sin\beta\,\star_g\mathcal F.$$
Then $d\mathcal F_\beta=d(\star_g\mathcal F_\beta)=0$ and
$Q_{ab}(\mathcal F_\beta)=Q_{ab}(\mathcal F)$, so the same metric satisfies
$\operatorname{Ric}_{ab}=2Q_{ab}(\mathcal F_\beta)$. This is a classical
two-form identity; it asserts no charge quantization or empirical existence
of magnetic monopoles.

## Facts & Assumptions

**Given:** The source-free geometric electrovac datum of
[[def-emg-xs-geometric-electrovac]], Lorentzian Hodge star of
[[lem-emg-lorentz-hodge-calculus]], and a constant real $\beta$.

[F1] [[def-emg-xs-geometric-electrovac]]: $d\mathcal F=0$,
$d(\star_g\mathcal F)=0$, and $\operatorname{Ric}=2Q(\mathcal F)$.

[F2] [[lem-emg-lorentz-hodge-calculus]]: on two-forms,
$\star_g^2=-\operatorname{id}$ and
$(\star_gF)_{ab}=\tfrac12(\mathrm{vol}_g)_{abcd}F^{cd}$ in a positive
oriented chart.

[A1] $\beta$ is constant on $M$, and the background geometry carries only the
countable-choice assumptions of its mathematical suppliers; this finite
pointwise calculation uses no additional choice.

## Proof


1.1 Since $\beta$ is constant, $d\mathcal F_\beta=\cos\beta\,d\mathcal F+ \sin\beta\,d(\star_g\mathcal F)=0$ by [F1]. [given, A1, F1, algebra]

1.2 By [F2], $\star_g\mathcal F_\beta=\cos\beta\,\star_g\mathcal F +\sin\beta\,\star_g^2\mathcal F=\cos\beta\,\star_g\mathcal F -\sin\beta\,\mathcal F$. Applying $d$ and using [F1] proves $d(\star_g\mathcal F_\beta)=0$. [F1, F2, algebra]

1.3 In a positive oriented orthonormal frame let $E_i=-\mathcal F_{0i}$ and $B_i=\tfrac12\epsilon_{ijk}\mathcal F_{jk}$. The component formula [F2] gives $E(\star\mathcal F)=-B$ and $B(\star\mathcal F)=E$, hence $E_\beta=E\cos\beta-B\sin\beta$ and $B_\beta=B\cos\beta+E\sin\beta$. Direct expansion gives $E_\beta^2+B_\beta^2=E^2+B^2$, $E_\beta\times B_\beta=E\times B$, and $E_{\beta i}E_{\beta j}+B_{\beta i}B_{\beta j} =E_iE_j+B_iB_j$: the mixed symmetric terms cancel and $B\times E=-E\times B$. [F2, algebra]

2.1 The observer-frame components of the quadratic tensor $Q_{ab}=\mathcal F_{ac}\mathcal F_b{}^c-\tfrac14g_{ab}\mathcal F^2$ are $Q_{00}=\tfrac12(E^2+B^2)$, $Q_{0i}=-(E\times B)_i$, and $Q_{ij}=-E_iE_j-B_iB_j+\tfrac12\delta_{ij}(E^2+B^2)$, by direct raising with $\eta=\operatorname{diag}(-1,1,1,1)$. Each is unchanged by step 1.3, so tensoriality gives $Q(\mathcal F_\beta)=Q(\mathcal F)$ globally. The observer-stress dependency remains a draft interface; this proof uses only the displayed geometric quadratic tensor and does not assert an SI normalization. [F1, step 1.3, algebra]

3.1 By steps 1.1-1.2 the rotated field is closed with closed dual, and by step 2.1 its quadratic tensor is unchanged. Substitution in [F1] therefore gives the same Ricci equation for $\mathcal F_\beta$, proving the Statement. [F1, step 1.1, step 1.2, step 2.1] ∎

## Remarks

The argument uses the real classical two-form and Lorentzian Hodge operator.
No $U(1)$ bundle, quantum state, magnetic source, or flux integrality is used.

