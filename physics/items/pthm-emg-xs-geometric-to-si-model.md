---
id: pthm-emg-xs-geometric-to-si-model
kind: physics-theorem
title: Geometric electrovac data solve the selected SI equations
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 3
deps:
  - post-emg-einstein-maxwell-equations
  - def-emg-xs-geometric-electrovac
  - def-emg-xs-si-parameters
  - def-emg-geometry-units
  - lem-emg-maxwell-current-forms
  - def-countable-choice
dependency_roles:
  post-emg-einstein-maxwell-equations: physical-assumption
  def-emg-xs-geometric-electrovac: mathematical-premise
  def-emg-xs-si-parameters: formulation-prerequisite
  def-emg-geometry-units: formulation-prerequisite
  lem-emg-maxwell-current-forms: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: >
  Conditional conversion of a smooth zero-cosmological-constant geometric
  electrovac datum to the source-free branch of the selected SI
  equation-based Einstein–Maxwell model. It does not assert existence of
  geometric data, derive or empirically validate a postulate, add material
  sources, or claim physical realization.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete 238-page arXiv lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "Chapter 4, equations (4.24)–(4.30) and (4.54)–(4.72): Maxwell form equations and Einstein–Maxwell stress conventions; the local SI normalization is fixed by the named suppliers."
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Sections 3.2–3.4 and 4.1 for curved Maxwell equations, Einstein equations, and stress tensor conventions; no local scaling identity is imported."
verification:
  precheck: pass
---

## Statement

Let $(M,g,N,o,\mathcal F)$ be a smooth source-free geometric electrovac datum
of [[def-emg-xs-geometric-electrovac]] on a nonempty smooth four-manifold.
Thus $g$ has signature $(-,+,+,+)$, $\mathcal F$ is a smooth real two-form,
and
$$d\mathcal F=0,\qquad d(\star_g\mathcal F)=0,\qquad \operatorname{Ric}_{ab}=2Q_{ab}(\mathcal F),\qquad Q_{ab}(X):=X_{ac}X_b{}^c-\frac14g_{ab}X_{cd}X^{cd}.$$
Choose constants $G_N,c,\mu_0>0$ in the SI roles of
[[def-emg-geometry-units]], set
$$\varepsilon_0=(\mu_0c^2)^{-1},\qquad \alpha=\sqrt{\frac{4\pi G_N}{\mu_0c^4}},\qquad F:=\alpha^{-1}\mathcal F,$$
and use the same metric and orientation for $F$. In length coordinates
$x^0=ct$, $F_{ab}$ has units T, $\mathcal F_{ab}$ has units $\mathrm{m}^{-1}$,
and $\alpha$ has units $\mathrm{T}^{-1}\mathrm{m}^{-1}$ by
[[def-emg-xs-si-parameters]]. Define
$$T^{\mathrm{EM}}_{ab}:=\frac1{\mu_0}Q_{ab}(F),\qquad \kappa_E:=\frac{8\pi G_N}{c^4}.$$
In the adopted postulate [[post-emg-einstein-maxwell-equations]], specialize
to $\Lambda=0$, $j=0$, and $T^m=0$. Then
$$dF=0,\qquad \nabla^g_aF^{ab}=0,\qquad G_{ab}=\kappa_E T^{\mathrm{EM}}_{ab}.$$
This is a conditional model deduction: it neither derives the postulate nor
claims that the model describes nature.

## Facts & Assumptions

**Given:** The smooth oriented and time-oriented Lorentzian data and geometric electrovac equations above; constants $G_N,c,\mu_0>0$; the SI-to-geometric normalization from [[def-emg-xs-si-parameters]]; and the zero-source, zero-$\Lambda$ specialization of the adopted equation-based model.

[F1] [[def-emg-xs-geometric-electrovac]]: the geometric datum has smooth $\mathcal F$, signature $(-,+,+,+)$, and equations $d\mathcal F=d(\star_g\mathcal F)=0$ and $\operatorname{Ric}=2Q(\mathcal F)$, with the displayed trace-free quadratic tensor.

[F2] [[def-emg-xs-si-parameters]]: $\mathcal F=\alpha F$ and $\alpha^2=4\pi G_N/(\mu_0c^4)$; in length coordinates $\mathcal F$ has units $\mathrm{m}^{-1}$ and $F$ has units T.

[F3] [[def-emg-geometry-units]]: $\varepsilon_0=(\mu_0c^2)^{-1}$, $\kappa_E=8\pi G_N/c^4$, and the Einstein tensor has units $\mathrm{m}^{-2}$ while stress has units $\mathrm{J\,m}^{-3}$.

[F4] [[lem-emg-maxwell-current-forms]]: for $v^b=\nabla_aF^{ab}$, $d(\star_gF)=-\iota_v\mathrm{vol}_g$; contraction with the nonvanishing volume form is injective. The current mathematical carrier remains draft; its complete conditional proof and current Step 1 authoring-ready record were inspected, and this use is not independent proof approval.

[F5] [[post-emg-einstein-maxwell-equations]]: the adopted smooth-field equations are $dF=0$, $\nabla_aF^{ab}=-\mu_0j^b$, and $G_{ab}+\Lambda g_{ab}=\kappa_E(T^{\mathrm{EM}}_{ab}+T^m_{ab})$.

[A1] [[def-countable-choice]]: the inherited geometric convention carries only $\mathrm{AC}_\omega$, the assertion that each countable family of nonempty sets has a choice function; the finite pointwise rescaling and contractions below make no choice.

## Proof

**Given:** The hypotheses and definitions in [F1]–[F5], [A1], $\alpha>0$, and $F=\alpha^{-1}\mathcal F$.

1.1 Since $\alpha$ is constant, $dF=\alpha^{-1}d\mathcal F=0$ and $d(\star_gF)=\alpha^{-1}d(\star_g\mathcal F)=0$ by [F1]. Apply the sign identity [F4] to $F$: the vanishing of $d(\star_gF)$ gives $\iota_v\mathrm{vol}_g=0$, hence $v^b=\nabla_aF^{ab}=0$ at every point. [given, F1, F4, algebra]

1.2 Contracting the definition of $Q$ in [F1] gives $g^{ab}Q_{ab}(X)=X_{ac}X^{ac}-(4/4)X_{cd}X^{cd}=0$. Therefore [F1] implies the scalar curvature is zero and $G_{ab}=\operatorname{Ric}_{ab}=2Q_{ab}(\mathcal F)$. Since $Q$ is quadratic and $\mathcal F=\alpha F$, this is $G_{ab}=2\alpha^2Q_{ab}(F)$. [given, F1, F2, algebra]

2.1 Substituting $\alpha^2=4\pi G_N/(\mu_0c^4)$ from [F2] yields $G_{ab}=(8\pi G_N/c^4)Q_{ab}(F)/\mu_0=\kappa_ET^{\mathrm{EM}}_{ab}$. Together with step 1.1 and the specialization of [F5], these are exactly the adopted source-free equations. No equation is asserted at a removed point or outside the datum's domain, and the finite rescaling uses no choice beyond [A1]. [given, F2, F3, F5, A1, step 1.1, step 1.2, algebra] ∎
