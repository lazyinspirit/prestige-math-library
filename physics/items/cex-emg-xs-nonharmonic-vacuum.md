---
id: cex-emg-xs-nonharmonic-vacuum
kind: counterexample
title: Nonharmonic conformastatic data fail the electrovac equation
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-emg-conformastatic-chart-data
  - lem-emg-conformastatic-chart-is-lorentzian
  - lem-emg-conformastatic-curvature
  - def-emg-xs-geometric-electrovac
  - lem-emg-maxwell-current-forms
dependency_roles:
  def-emg-conformastatic-chart-data: mathematical-premise
  lem-emg-conformastatic-chart-is-lorentzian: mathematical-premise
  lem-emg-conformastatic-curvature: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: Chapter 3, curvature and Einstein contractions; the chosen arbitrary-H residual is computed locally.
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Sections 3.2-3.4 for curvature and Einstein-Maxwell conventions; the nonharmonic counterexample is computed locally.
    - title: Reinhard Meinel and Moritz Hütten, On the black hole limit of electrically counterpoised dust configurations, arXiv:1105.3807v3
      url: https://arxiv.org/pdf/1105.3807
      locator: Section 2, equations (1)-(4), PDF pages 2-3, for the conformastatic ansatz context; the source does not supply this counterexample.
verification:
  precheck: pass
---

## Statement refuted

For every smooth positive $H$ on an open $D\subseteq\mathbb R^3$ and every $\sigma\in\{-1,+1\}$, the metric $g_H$ of [[def-emg-conformastatic-chart-data]] together with the potential $\mathcal A_\sigma=\sigma(H^{-1}-1)dx^0$ gives a geometric electrovac datum of [[def-emg-xs-geometric-electrovac]], without any harmonicity condition on $H$.

## Facts & Assumptions

**Given:** The arbitrary-positive-$H$ conformastatic chart, its curvature table, and the geometric electrovac equations.

[F1] [[def-emg-conformastatic-chart-data]] defines $g_{00}=-H^{-2}$, $g_{ij}=H^2\delta_{ij}$, $q_H=\sum_iH_i^2$, and $\Delta_\delta H=\sum_iH_{ii}$.

[F2] [[lem-emg-conformastatic-chart-is-lorentzian]] gives the Lorentzian future orthonormal frame $n=H\partial_{x^0}$ and $e_i=H^{-1}\partial_i$.

[F3] [[lem-emg-conformastatic-curvature]] gives $\operatorname{Ric}_{00}=q_H/H^6-\Delta_\delta H/H^5$ for every positive $C^3$ function $H$.

[F4] [[def-emg-xs-geometric-electrovac]] requires $\operatorname{Ric}=2Q(\mathcal F)$.

[F5] [[lem-emg-maxwell-current-forms]], for a smooth closed two-form $F$ and a smooth vector field $j$ satisfying $\nabla_aF^{ab}=-\mu_0j^b$ with fixed $\mu_0>0$ and $c>0$, proves $d(\star_gF)=-\iota_v\mathrm{vol}_g$ for $v^b=\nabla_aF^{ab}$, so a nonzero divergence component forces $d(\star_gF)\ne0$.

[A1] Fix a length $\ell>0$, put $\lambda=\ell^{-2}$, $D=\mathbb R^3$, $\sigma=+1$, and $H(x)=1+\lambda|x|^2$.

## Counterexample

1.1 The function in [A1] is smooth and strictly positive. Its derivatives are $H_i=2\lambda x^i$, $q_H=4\lambda^2|x|^2$, and $\Delta_\delta H=6\lambda>0$. The potential $\mathcal A_\sigma=(H^{-1}-1)dx^0$ is smooth on all of $D$, and its field is $\mathcal F=d\mathcal A_\sigma$, with $\mathcal F_{i0}=-H_i/H^2$. Since $d^2=0$, it satisfies $d\mathcal F=0$. The metric is Lorentzian by [F2]. [given, F1, F2, A1, algebra, construct]

2.1 In the orthonormal frame [F2], the field components satisfy $\mathcal F(n,e_i)=H\cdot H^{-1}\mathcal F_{0i}=H_i/H^2$, so $\mathcal F_{ab}\mathcal F^{ab}=-2q_H/H^4$ and $Q(n,n)=q_H/(2H^4)$. Also $\mathcal F^{i0}=H_i/H^2$ and $\sqrt{|\det g|}=H^2$ by [F1, F2], hence $\partial_i(\sqrt{|\det g|}\mathcal F^{i0})=\partial_iH_i=\Delta_\delta H=6\lambda$. Using $\Gamma^\alpha{}_{\alpha i}=2H_i/H$ and $\Gamma^\alpha{}_{\alpha0}=0$ from [F3], together with symmetry of $\Gamma^0{}_{ac}$ and antisymmetry of $\mathcal F^{ac}$, gives $\nabla_a\mathcal F^{a0}=\partial_i(H_i/H^2)+(2H_i/H)(H_i/H^2)=\Delta_\delta H/H^2=6\lambda/H^2\ne0$. Define the smooth vector field $v$ by $v^b:=\nabla_a\mathcal F^{ab}$. Fix auxiliary constants $\mu_0>0$ and $c>0$, using $t=x^0/c$, and define the smooth vector field $j:=-\mu_0^{-1}v$. Then $\nabla_a\mathcal F^{ab}=-\mu_0j^b$ by construction, and $d\mathcal F=0$ by step 1.1, so all hypotheses of [F5] hold on the smooth, boundaryless, oriented and time-oriented chart manifold from [F1, F2]. The auxiliary $j$ is used only to apply this conditional mathematical identity. By [F5], $d(\star_g\mathcal F)=-\iota_v\mathrm{vol}_g$. Contraction with the nowhere-zero volume form is injective, and the computed $v^0=6\lambda/H^2$ is nonzero. Hence $d(\star_g\mathcal F)\ne0$, violating the source-free Maxwell equation in [F4]. If this residual were interpreted as a matter current, that would require an additional sourced model; none is assumed here. The Ricci table [F3] gives $\operatorname{Ric}(n,n)=H^2\operatorname{Ric}_{00}=q_H/H^4-\Delta_\delta H/H^3$. Therefore $\operatorname{Ric}(n,n)-2Q(n,n)=-\Delta_\delta H/H^3=-6\lambda/H^3\ne0$. This also violates the necessary Ricci equation [F4], so these smooth conformastatic data are not geometric electrovac. This counterexample uses the arbitrary-positive-$H$ supplier directly; the harmonic-only theorem is not applied outside its hypotheses. [given, F1, F2, F3, F4, F5, A1, step 1.1, algebra] ∎
