---
id: texp-emg-xs-null-curvature
kind: thought-experiment
title: Nonzero null field and curvature with zero scalar invariants
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 6
deps:
  - post-emg-einstein-maxwell-equations
  - def-emg-xs-null-wave
  - pthm-emg-xs-null-wave-model
  - prop-emg-xs-null-invariants
  - def-emg-xs-si-parameters
  - def-countable-choice
dependency_roles:
  post-emg-einstein-maxwell-equations: physical-assumption
  def-emg-xs-null-wave: formulation-prerequisite
  pthm-emg-xs-null-wave-model: physical-result
  prop-emg-xs-null-invariants: mathematical-premise
  def-emg-xs-si-parameters: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: >
  Hypothetical exact null-wave solution of the selected classical SI
  Einstein–Maxwell model, specialized to one nonzero constant transverse
  profile. It illustrates a pointwise tensor distinction only and makes no
  observation, finite-energy, asymptotic-flatness, or empirical-validity
  claim.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Y. Nutku, Electrovac pp-waves, arXiv:gr-qc/0502049v2, complete 3-page paper"
      url: https://arxiv.org/pdf/gr-qc/0502049v2
      locator: "Section 1, equations (1)–(2), for the Baldwin–Jeffrey exact electrovac wave context; the selected real profile and invariant calculation are proved locally."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete 238-page arXiv lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "Chapter 3, curvature and tensor contractions, used only as convention context; the null component calculation is supplied by the exact local mathematical item."
verification:
  precheck: pass
---
## Statement

Choose a constant $\nu>0$ with units $\mathrm{m}^{-1}$ and the profiles
$a(u)=\nu$, $b(u)=0$, $h(u,x,y)=0$ in
[[def-emg-xs-null-wave]]. Then
$$P=-\nu^2(x^2+y^2),\qquad g=-2\,du\,dv+dx^2+dy^2-\nu^2(x^2+y^2)du^2,$$
$$\mathcal F=\nu\,du\wedge dx,\qquad F=\alpha^{-1}\mathcal F.$$
Use orientation $du\wedge dv\wedge dx\wedge dy$ and future unit field
$N=\partial_u+(P+1)\partial_v/2$ from the null-wave definition. This is a smooth source-free solution of the adopted SI model of
[[post-emg-einstein-maxwell-equations]] by
[[pthm-emg-xs-null-wave-model]]. Its electromagnetic field is nonzero, but
$$F_{ab}F^{ab}=0,\qquad S=0,\qquad \operatorname{Ric}_{ab}\operatorname{Ric}^{ab}=0,\qquad R_{abcd}R^{abcd}=0.$$
At the same time $R_{uxux}=\nu^2\ne0$, so the spacetime is not flat. These
zero scalar contractions therefore do not imply a vanishing electromagnetic
field or flat spacetime. This is a hypothetical model calculation, not an
observation.

## Facts & Assumptions

**Given:** A positive inverse-length constant $\nu$, the exact null-wave definitions, the selected equation-based physical postulate, and the current mathematical invariant proposition.

[F1] [[def-emg-xs-null-wave]]: the smooth null-wave metric, potential and two-form are determined by $a(u),b(u),h(u,x,y)$ and the prescribed transverse harmonicity.

[F2] [[pthm-emg-xs-null-wave-model]]: every datum of that profile class is an exact source-free solution of the selected SI model after $F=\alpha^{-1}\mathcal F$. This current physical theorem is draft with a complete authored proof and Step 1 authoring-ready record, not independent approval.

[F3] [[prop-emg-xs-null-invariants]]: for the null-wave datum, $\mathcal F^2=S=\operatorname{Ric}_{ab}\operatorname{Ric}^{ab}=R_{abcd}R^{abcd}=0$, and if $a^2+b^2>0$ then the Riemann tensor is nonzero. This mathematical proposition is draft with a complete current proof and Step 1 authoring-ready record; the result is used conditionally.

[F4] [[def-emg-xs-si-parameters]]: $\alpha>0$ is constant, so $F=\alpha^{-1}\mathcal F$ and $F_{ab}F^{ab}=\alpha^{-2}\mathcal F_{ab}\mathcal F^{ab}$.

[A1] [[def-countable-choice]]: only the inherited $\mathrm{AC}_\omega$ context is used; the constant-profile substitution and tensor scaling require no choice.

## Proof

**Given:** The hypotheses in [F1]–[F4] and [A1], with $\nu>0$.

1.1 With $a=\nu$, $b=h=0$, the potential in [F1] is $\mathcal A=-\nu x\,du$ and direct exterior differentiation gives $\mathcal F=\nu\,du\wedge dx$. This is a smooth datum on $\mathbb R^4$, with nonzero $\mathcal F$ because $\nu>0$. [given, F1, A1, algebra]

2.1 Apply [F2] to the datum in step 1.1. The geometric two-form is scaled by the positive constant $\alpha^{-1}$, so the SI field $F$ remains nonzero and the metric-field pair solves the adopted source-free equations. [given, F2, F4, step 1.1]

3.1 Since $a^2+b^2=\nu^2>0$, [F3] gives $\mathcal F_{ab}\mathcal F^{ab}=0$, vanishing scalar curvature, vanishing Ricci square and Kretschmann scalar, and a nonzero Riemann tensor with $R_{uxux}=\nu^2$. By [F4], $F_{ab}F^{ab}=\alpha^{-2}\mathcal F_{ab}\mathcal F^{ab}=0$. Thus this exact model datum has nonzero electromagnetic field and spacetime curvature although all the stated quadratic scalar contractions vanish. [given, F3, F4, step 1.1, algebra] ∎
