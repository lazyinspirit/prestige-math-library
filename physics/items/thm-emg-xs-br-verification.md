---
id: thm-emg-xs-br-verification
kind: theorem
title: Product electrovacuum equations from full factor Ricci
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 2
deps:
  - def-emg-xs-br-products
  - def-emg-xs-geometric-electrovac
  - lem-emg-maxwell-current-forms
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-curvature-tensoriality-and-coordinate-formula
dependency_roles:
  def-emg-xs-br-products: mathematical-premise
  def-emg-xs-geometric-electrovac: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: David Tong, General Relativity, complete author-hosted lecture notes
      url: https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf
      locator: Section 6.2.5 gives the extremal RN throat as the Robinson-Bertotti product; the full factor-curvature and Maxwell calculation is supplied here.
    - title: Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1, complete 238-page lecture notes
      url: https://arxiv.org/pdf/gr-qc/9712019v1
      locator: Chapter 3, curvature sign and contractions; the factor computations below are local.
verification:
  precheck: pass
---

## Statement

Every datum in [[def-emg-xs-br-products]] is a geometric electrovac datum of [[def-emg-xs-geometric-electrovac]]. With the oriented orthonormal coframe

$$e^0=L\sqrt f\,d\tau,\quad e^1=L f^{-1/2}dz,\quad e^2=L\,d\theta,\quad e^3=L\sin\theta\,d\phi,$$

the Ricci and quadratic Maxwell tensors are

$$\operatorname{Ric}_{AB}=L^{-2}\operatorname{diag}(1,-1,1,1)_{AB},\qquad Q_{AB}(\mathcal F_L)=\frac1{2L^2}\operatorname{diag}(1,-1,1,1)_{AB}.$$

All mixed base-sphere entries vanish. The statement is on the chosen open chart domains; it makes no maximal-extension or asymptotic-flatness claim.

## Facts & Assumptions

**Given:** $L>0$, one of the two functions $f$ and domains in [[def-emg-xs-br-products]], the product metric, orientation, and electric two-form.

[F1] [[def-emg-xs-br-products]] gives $g=L^2(-f\,d\tau^2+f^{-1}dz^2+\gamma_{S^2})$, $\mathcal F=-L\,d\tau\wedge dz$, $f>0$, and the product orientation.

[F2] [[def-emg-xs-geometric-electrovac]] fixes signature $(-,+,+,+)$, the curvature sign, $Q_{ab}(F)=F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd}$, and the required equations.

[F3] [[lem-emg-maxwell-current-forms]] gives $d(\star_gF)=-\iota_v\mathrm{vol}_g$ for $v^b=\nabla_aF^{ab}$.

[F4] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]] gives the metric-selected Christoffel formula $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$.

[F5] [[def-gr-curvature-tensor-and-derived-tensors]] defines $R^a{}_{bcd}$ by $R(\partial_c,\partial_d)\partial_b=R^a{}_{bcd}\partial_a$ and $\operatorname{Ric}_{bd}=g^{ac}R_{abcd}=R^a{}_{bad}$.

[F6] [[thm-gr-curvature-tensoriality-and-coordinate-formula]] gives $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$ in a smooth chart, with the curvature sign in [F2].

[A1] $L>0$ and $f$ is exactly $z^2$ or $1+z^2$, so $f''=2$ on the stated domain.

[A2] The displayed coframe is used only on regular polar charts with $0<\theta<\pi$ and $\phi$ restricted to a local interval; their union is dense in $S^2$.

## Proof

1.1 On the two-dimensional base, the inverse metric components are $g^{\tau\tau}=-1/(L^2f)$ and $g^{zz}=f/L^2$. Applying the Christoffel formula [F4] gives, apart from lower-index symmetry, $\Gamma^\tau{}_{\tau z}=f'/(2f)$, $\Gamma^z{}_{\tau\tau}=ff'/2$, and $\Gamma^z{}_{zz}=-f'/(2f)$. Their traces $\Gamma^a{}_{\tau a}$ and $\Gamma^a{}_{za}$ are zero. Substitution in the coordinate curvature formula [F6] and the Ricci contraction [F5], with convention [F2], gives $\operatorname{Ric}_{\tau\tau}=\partial_z(ff'/2)-2(f'/2f)(ff'/2)=ff''/2$; similarly $\operatorname{Ric}_{zz}=\partial_z(-f'/2f)-\{(f'/2f)^2+(-f'/2f)^2\}=-f''/(2f)$, and $\operatorname{Ric}_{\tau z}=0$. Since $f''=2$, these are $f$ and $-1/f$, respectively, which equal $-L^{-2}$ times the corresponding components of the base metric. [given, F1, F2, F4, F5, F6, A1, algebra]

2.1 On a regular polar chart from [A2], the unit sphere metric $d\theta^2+\sin^2\theta\,d\phi^2$ has, by [F4], the only nonzero symbols $\Gamma^\theta{}_{\phi\phi}=-\sin\theta\cos\theta$ and $\Gamma^\phi{}_{\theta\phi}=\Gamma^\phi{}_{\phi\theta}=\cot\theta$. The coordinate curvature formula [F6] and contraction [F5] give $\operatorname{Ric}_{\theta\theta}=-\partial_\theta\cot\theta-\cot^2\theta=1$ and $\operatorname{Ric}_{\phi\phi}=\partial_\theta(-\sin\theta\cos\theta)-\cos^2\theta+2\cos^2\theta=\sin^2\theta$; the mixed component is zero. Scaling the sphere metric by the constant $L^2$ leaves its connection unchanged, so in the orthonormal coframe of the Statement its Ricci entries are $L^{-2},L^{-2}$. The product metric has no mixed Christoffel symbols because each factor coefficient depends only on its own factor coordinates; hence its mixed Ricci entries vanish. [given, A2, F1, F2, F4, F5, F6, step 1.1, algebra]

3.1 The field is constant in $(\tau,z)$ and has only $\mathcal F_{\tau z}=-L$ and $\mathcal F_{z\tau}=L$. Thus $d\mathcal F=0$. The determinant satisfies $\sqrt{|\det g|}=L^4\sin\theta$, and raising indices gives $\mathcal F^{\tau z}=L^{-3}$ and $\mathcal F^{z\tau}=-L^{-3}$. In $\nabla_a\mathcal F^{ab}=\partial_a\mathcal F^{ab}+\Gamma^a{}_{ac}\mathcal F^{cb}+\Gamma^b{}_{ac}\mathcal F^{ac}$, the last term vanishes by symmetry of the connection and antisymmetry of the field. For $b=\tau,z$, the only derivative terms are $\partial_z\mathcal F^{z\tau}$ and $\partial_\tau\mathcal F^{\tau z}$, both zero; their trace terms vanish because $\Gamma^a{}_{a\tau}=\Gamma^a{}_{az}=0$ from the base Christoffels and the product has no mixed symbols. For $b=\theta,\phi$, all $\mathcal F^{ab}$ vanish. Hence $\nabla_a\mathcal F^{ab}=0$; [F3] gives $d(\star_g\mathcal F)=0$. [given, F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 In the orthonormal coframe, $\mathcal F_L=-L^{-1}e^0\wedge e^1$, so $\mathcal F_{AB}\mathcal F^{AB}=-2/L^2$. Direct contraction in signature $(-,+,+,+)$ gives $Q_{AB}=\frac1{2L^2}\operatorname{diag}(1,-1,1,1)_{AB}$: the electric pair contributes $+1/(2L^2)$ to the time entry and $-1/(2L^2)$ to the radial entry, while the trace term contributes $+1/(2L^2)$ to each sphere entry. Steps 1.1 and 2.1 give $\operatorname{Ric}=2Q$ on the regular polar locus. The metric and two-form are smooth on the full product by [F1], so $\operatorname{Ric}(g)$ and $Q(\mathcal F_L)$ are smooth tensor fields there; by density in [A2], their equality extends by continuity to both sphere poles. The displayed coframe components are local to those polar charts. Together with the Maxwell equations in step 3.1 this proves the full definition of a geometric electrovac datum on the stated domain. [given, A2, F1, F2, step 1.1, step 2.1, step 3.1, algebra] ∎
