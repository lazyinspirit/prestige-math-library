---
id: pthm-emg-xs-br-limit
kind: physics-theorem
title: Local SI model limit from extremal RN to Bertotti–Robinson
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 8
deps:
  - pthm-emg-xs-rn-model
  - thm-emg-xs-rn-near-horizon
  - pthm-emg-xs-br-model
  - post-emg-einstein-maxwell-equations
  - def-emg-xs-si-parameters
  - def-emg-xs-br-products
  - def-countable-choice
dependency_roles:
  pthm-emg-xs-rn-model: physical-result
  thm-emg-xs-rn-near-horizon: mathematical-premise
  pthm-emg-xs-br-model: physical-result
  post-emg-einstein-maxwell-equations: physical-assumption
  def-emg-xs-si-parameters: formulation-prerequisite
  def-emg-xs-br-products: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: >
  Exact local smooth scaling limit of the selected electric extremal RN
  exterior to the Poincaré product chart of the source-free
  Einstein–Maxwell model. Convergence is only on compact subsets of R>0;
  no extension through the limiting boundary, global limit, or empirical
  claim is included.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, General Relativity, complete author-hosted lecture notes"
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: "Section 6.2.5, extremal RN throat and Robinson–Bertotti product; the local theorem proves exact pullbacks and C-infinity convergence beyond the leading near-horizon form."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete 238-page arXiv lecture notes"
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: "Chapter 7, charged RN metric and extremal parameter relation; the local scaling proof is supplied by the exact mathematical predecessor."
verification:
  precheck: pass
---
## Statement

Fix $L>0$. Select
$$m_*=\frac{c^2L}{G_N},\qquad Q_e=+\sqrt{4\pi\varepsilon_0G_N}\,m_*,\qquad \Phi_B=0.$$
The map of [[def-emg-xs-si-parameters]] gives $M=q_e=L$, $q_m=0$, so the electric
RN metric function is $f(r)=(1-L/r)^2$ on $r>L$. For every dimensionless
$\lambda>0$, on $\mathbb R_T\times(0,\infty)_R\times S^2$ define
$$\Phi_\lambda(T,R,\omega)=(x^0=T/\lambda,\ r=L+\lambda R,\ \omega).$$
Let $g_\lambda=\Phi_\lambda^*g$ and
$F_\lambda=\Phi_\lambda^*F$ for the SI extremal RN solution. Then
$$g_\lambda=-\frac{R^2}{(L+\lambda R)^2}dT^2+ \frac{(L+\lambda R)^2}{R^2}dR^2+(L+\lambda R)^2\gamma_{S^2},$$
and $F_\lambda=\alpha^{-1}\mathcal F_\lambda$ where
$$\mathcal F_\lambda=-\frac{L}{(L+\lambda R)^2}dT\wedge dR.$$
As $\lambda\downarrow0$, $(g_\lambda,F_\lambda)$ converges in
$C^\infty_{\mathrm{loc}}$ on $\mathbb R_T\times(0,\infty)_R\times S^2$ to
$$g_0=-\frac{R^2}{L^2}dT^2+\frac{L^2}{R^2}dR^2+L^2\gamma_{S^2},\qquad F_0=-\frac{1}{\alpha L}dT\wedge dR.$$
Under $T=L\tau$ and $R=Lz$, the limit is exactly the electric
Bertotti–Robinson data of [[def-emg-xs-br-products]] with $f(z)=z^2$, $z>0$.
By [[pthm-emg-xs-br-model]], it is a solution of the same adopted SI model.
The convergence and solution statements are limited to the stated open
domains and do not assert an extension at $R=0$.

## Facts & Assumptions

**Given:** $L>0$, $\lambda>0$, the extremal SI parameter values, the exact RN and product definitions, and the adopted zero-source equation model.

[F1] [[thm-emg-xs-rn-near-horizon]]: for $M=q_e=L$, $q_m=0$, the exact pullbacks and geometric fields converge smoothly on compact subsets of $R>0$ to the $f=z^2$ Bertotti–Robinson product after $T=L\tau$, $R=Lz$. This mathematical theorem is draft with a complete current proof and Step 1 authoring-ready record; it is used conditionally.

[F2] [[pthm-emg-xs-rn-model]]: the dyonic RN data with the parameter map of [[def-emg-xs-si-parameters]] solve the adopted SI equations on the open domain where $r>0$ and $f\ne0$. This physical theorem is draft with a complete current proof and Step 1 authoring-ready record; its solution claim is used conditionally.

[F3] [[pthm-emg-xs-br-model]]: the $f=z^2$ product with $L>0$ solves the same source-free SI model on $z>0$. This physical theorem is draft with a complete proof authored in this batch and is used conditionally, without independent approval.

[F4] [[def-emg-xs-si-parameters]]: $q_e=\sqrt{G_N/(4\pi\varepsilon_0c^4)}\,Q_e$, $M=G_Nm_*/c^2$, $\Phi_B=0$ gives $q_m=0$, and $\alpha$ is a positive constant.

[F5] [[post-emg-einstein-maxwell-equations]]: the same adopted postulate is used with $\Lambda=0$, $j=0$, and $T^m=0$.

[A1] [[def-countable-choice]]: the inherited geometric convention is at most $\mathrm{AC}_\omega$; the scaling map and compact convergence do not make a choice.

## Proof

**Given:** The hypotheses and exact current statements in [F1]–[F5] and [A1].

1.1 Substituting $m_*$ and $Q_e$ from the Statement into [F4] gives $M=L$, $q_e=L$, and $q_m=0$, with $L>0$. Hence $f(r)=(1-L/r)^2>0$ for $r>L$, so the physical RN solution in [F2] applies throughout the image of each $\Phi_\lambda$. [given, F2, F4, algebra]

2.1 The exact geometric pullbacks in [F1] yield the displayed $g_\lambda$ and $\mathcal F_\lambda$. Since $F_\lambda=\alpha^{-1}\mathcal F_\lambda$ with constant positive $\alpha$, the same coordinate derivatives converge on each compact subset of $R>0$ after multiplication by $\alpha^{-1}$. This is the stated $C^\infty_{\mathrm{loc}}$ convergence for the SI fields as well as the metrics. [given, F1, F4, step 1.1, algebra]

3.1 The coordinate substitution $T=L\tau$, $R=Lz$ transforms the limiting pair into $g_{L,z^2}$ and $F_L=\alpha^{-1}\mathcal F_L$ from [F3], on $z>0$. Thus the limit is itself a source-free SI model solution. The coordinate scaling uses no choice beyond [A1] and makes no claim about $R=0$. [given, F3, F5, A1, step 2.1, algebra] ∎
