---
id: pthm-emg-xs-mp-extremal
kind: physics-theorem
title: Single-center extremal charged model correspondence
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
deps:
  - pthm-emg-xs-mp-model
  - pthm-emg-xs-rn-model
  - post-emg-einstein-maxwell-equations
  - def-emg-xs-harmonic-mp
  - prop-emg-xs-mp-extremal-rn
  - def-emg-xs-rn-data
  - def-emg-xs-si-parameters
  - def-countable-choice
dependency_roles:
  pthm-emg-xs-mp-model: physical-result
  pthm-emg-xs-rn-model: physical-result
  post-emg-einstein-maxwell-equations: physical-assumption
  def-emg-xs-harmonic-mp: mathematical-premise
  prop-emg-xs-mp-extremal-rn: mathematical-premise
  def-emg-xs-rn-data: mathematical-premise
  def-emg-xs-si-parameters: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: >
  Equality of the single-center harmonic MP and electric extremal RN model
  data on their open exteriors under one explicit SI mass/charge
  parametrization. No horizon extension, global completeness, source at the
  omitted center, ADM or Komar identification, observed object, or empirical
  validity is asserted.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Section 6.2.5 and the following “Multi-Black-Hole Solutions” section: extremal RN harmonic coordinates; the exact radial equality is checked in the local mathematical supplier."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete 238-page arXiv lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "Chapter 7, equations (7.157)–(7.161), for dyonic RN conventions and the extremal parameter relation; source charge units are not imported."
verification:
  precheck: pass
---
## Statement

Let $m_*>0$ be a selected SI mass parameter, choose $\sigma\in\{-1,+1\}$,
and set
$$m:=\frac{G_Nm_*}{c^2},\qquad Q_e:=\sigma\sqrt{4\pi\varepsilon_0G_N}\,m_*,\qquad \Phi_B:=0.$$
Use $\alpha=\sqrt{4\pi G_N/(\mu_0c^4)}$ and the parameter map of
[[def-emg-xs-si-parameters]]. On the single-center MP exterior
$D=\mathbb R^3\setminus\{0\}$ with $H=1+m/|x|$, the change of radial
coordinate $R=|x|+m$ identifies the SI metric and field
$F=\alpha^{-1}\mathcal F_\sigma$ exactly with the electric RN data of
[[def-emg-xs-rn-data]] on $R>m$, with
$$M=m,\qquad q_e=\sigma m,\qquad q_m=0,\qquad f(R)=\left(1-\frac mR\right)^2.$$
Thus $|q_e|=M$ and the two presentations describe the same source-free
solution of the adopted zero-$\Lambda$ equation-based model on that open
exterior. The correspondence does not extend the coordinate map to $R=m$.

## Facts & Assumptions

**Given:** $m_*>0$, positive SI constants, $\sigma\in\{-1,+1\}$, zero magnetic flux, and the exact MP and RN coordinate conventions.

[F1] [[def-emg-xs-harmonic-mp]]: the single-center harmonic datum has $H=1+m/\rho$, $g=-H^{-2}(dx^0)^2+H^2(d\rho^2+\rho^2\gamma_{S^2})$, and $\mathcal F_\sigma=d(\sigma(H^{-1}-1)dx^0)$.

[F2] [[def-emg-xs-si-parameters]]: $M=G_Nm_*/c^2$, $q_e=\sqrt{G_N/(4\pi\varepsilon_0c^4)}\,Q_e$, $q_m=\alpha\Phi_B/(4\pi)$, and $\mathcal F=\alpha F$.

[F3] [[prop-emg-xs-mp-extremal-rn]]: for $H=1+m/\rho$ and $R=\rho+m$, the full MP metric and two-form equal RN data with $M=m$, $q_e=\sigma m$, $q_m=0$, and $f=(1-m/R)^2$ on $R>m$, with the positive $x^0$ time direction and the orientation-preserving radial map of the mathematical supplier. This is a draft mathematical proposition with a complete current proof and Step 1 authoring-ready record; the coordinate identity is used conditionally.

[F4] [[pthm-emg-xs-mp-model]]: the single-center specialization satisfies the selected SI source-free equations on its punctured exterior. This current physical theorem is draft with a complete authored proof and Step 1 authoring-ready record, not independent proof approval.

[F5] [[pthm-emg-xs-rn-model]]: the RN datum with these parameter values satisfies the same selected SI source-free equations wherever $r>0$ and $f\ne0$. This current physical theorem is draft with a complete authored proof and Step 1 authoring-ready record, not independent proof approval.

[F6] [[def-emg-xs-rn-data]]: the RN metric and two-form are $g=-f(dx^0)^2+f^{-1}dr^2+r^2\gamma_{S^2}$ and $\mathcal F=-q_er^{-2}dx^0\wedge dr+q_m\omega_{S^2}$.

[F7] [[post-emg-einstein-maxwell-equations]]: the equation-based model is adopted, not derived; the source-free conclusion specializes to $\Lambda=0$, $j=0$, and $T^m=0$.

[A1] [[def-countable-choice]]: the inherited geometric and flux convention is at most $\mathrm{AC}_\omega$; the radial diffeomorphism and substitutions are choice-free.

## Proof

**Given:** The hypotheses and exact current interfaces [F1]–[F7] and [A1].

1.1 Substituting $Q_e$ and $\Phi_B=0$ into [F2] gives $q_e=\sigma G_Nm_*/c^2=\sigma m$ and $q_m=0$, while $M=m>0$. Thus $|q_e|=M$ and $f(R)=(1-m/R)^2>0$ for $R>m$. [given, F2, algebra]

2.1 The radial map $R=\rho+m$ is a smooth diffeomorphism $(0,\infty)\to(m,\infty)$ with inverse $\rho=R-m$. By [F1] the single-center candidate has $H=1+m/\rho$ and the stated metric-field form. Apply [F3]: $H^{-1}=1-m/R$ and $H^2\rho^2=R^2$, so the metric and two-form agree with [F6] on the full open exterior. Multiplication of both geometric two-forms by the same constant $\alpha^{-1}$ preserves their equality for the SI fields. [given, F1, F2, F3, F6, step 1.1, construct, algebra]

3.1 By [F4] and [F5], the identical data on the two sides satisfy the same specialized physical equations from [F7]. This establishes a coordinate correspondence between exact model solutions only; no extension through the excluded surface or center follows. [given, F4, F5, F7, A1, step 2.1] ∎
