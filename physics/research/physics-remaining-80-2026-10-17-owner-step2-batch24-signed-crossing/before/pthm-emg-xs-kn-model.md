---
id: pthm-emg-xs-kn-model
kind: physics-theorem
title: Verified rotating electric KN physical model
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: physics
library: physics
dependency_level: 7
deps:
  - post-emg-einstein-maxwell-equations
  - def-emg-xs-kn-data
  - def-emg-xs-kn-full-sphere-exterior
  - thm-emg-xs-kn-verification
  - lem-emg-maxwell-current-forms
  - lem-emg-lorentz-hodge-calculus
  - def-emg-xs-si-parameters
  - def-countable-choice
dependency_roles:
  post-emg-einstein-maxwell-equations: physical-assumption
  def-emg-xs-kn-data: mathematical-premise
  def-emg-xs-kn-full-sphere-exterior: mathematical-premise
  thm-emg-xs-kn-verification: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  def-emg-xs-si-parameters: formulation-prerequisite
  def-countable-choice: mathematical-premise
physical_scope: >
  Conditional solution of the smooth equation-based Einstein–Maxwell model
  with zero cosmological constant, no material stress or current, and a purely
  electric KN parameter on the stated pole-free Boyer–Lindquist domains and
  full-sphere exterior. It makes no horizon-extension, maximality, uniqueness,
  formation, observational, or empirical-validity claim.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, complete 238-page arXiv version"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
      locator: "Chapter 7, equations (7.114)-(7.116) and the charged-parameter substitution, printed pp. 208-209 (PDF pp. 214-215): rotating metric and charge dependence."
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2, complete 30-page full text"
      url: "https://arxiv.org/pdf/1410.6626"
      locator: "Sections 2.1-2.2, equations (2.15)-(2.21) and the Newman-Penrose verification discussion, printed pp. 6-11 (PDF pp. 7-12): KN metric, potential, and electrovac equations."
---

## Statement

Let $m_*>0$ be an SI mass parameter, $J\in\mathbb R$ an SI angular-momentum parameter, and $Q_e\in\mathbb R$ an SI electric-charge parameter. Use [[def-emg-xs-si-parameters]] to set

$$M=\frac{G_Nm_*}{c^2},\qquad a=\frac{J}{m_*c},\qquad q=\sqrt{\frac{G_N}{4\pi\varepsilon_0c^4}}\,Q_e,\qquad \alpha=\sqrt{\frac{4\pi G_N}{\mu_0c^4}}.$$

Set the magnetic flux parameter to zero. Let $\Sigma=r^2+a^2\cos^2\theta$ and $\Delta=r^2-2Mr+a^2+q^2$. Use the exact metric and potential of [[def-emg-xs-kn-data]] on any open pole-free Boyer–Lindquist domain with $\Sigma>0$, $\Delta\ne0$, and $0<\theta<\pi$. Also use its smooth full-sphere exterior extension of [[def-emg-xs-kn-full-sphere-exterior]] on $\mathcal X=\mathbb R_{x^0}\times(R_0,\infty)\times S^2$ for any $R_0>4|M|$, with geometric field $\mathcal F=d\mathcal A$ and $F=\mathcal F/\alpha$. Define

$$T^{\mathrm{EM}}_{ab}:=\frac1{\mu_0}\left(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd}\right),\qquad \kappa_E:=\frac{8\pi G_N}{c^4}.$$

In the equation-based physical model of [[post-emg-einstein-maxwell-equations]], specialize to $\Lambda=0$, $j=0$, and $T^m=0$. Conditional on the exact current draft statements and hypotheses of [[thm-emg-xs-kn-verification]] and [[lem-emg-maxwell-current-forms]], these data satisfy

$$dF=0,\qquad \nabla^g_aF^{ab}=0,\qquad G_{ab}=\kappa_E T^{\mathrm{EM}}_{ab}.$$

The claim is a conditional solution on the stated domains. It does not extend the field equations across $\Delta=0$ or assert that the selected model describes any observed object.

## Facts & Assumptions

**Given:** $G_N,c,\mu_0>0$, $m_*>0$, SI parameters $J,Q_e$, zero magnetic flux, the stated coordinate domains, and the zero-source equation-based specialization.

[F1] [[def-emg-xs-si-parameters]]: $M=G_Nm_*/c^2$, $a=J/(m_*c)$, $q_e=\sqrt{G_N/(4\pi\varepsilon_0c^4)}\,Q_e$, $\mathcal F=\alpha F$, and $\alpha=\sqrt{4\pi G_N/(\mu_0c^4)}>0$.

[F2] [[def-emg-xs-kn-data]]: on a pole-free chart, $\Sigma=r^2+a^2\cos^2\theta$, $\Delta=r^2-2Mr+a^2+q^2$, $g=-\frac{\Delta}{\Sigma}(dx^0-a\sin^2\theta\,d\phi)^2+\frac{\Sigma}{\Delta}dr^2+\Sigma d\theta^2+\frac{\sin^2\theta}{\Sigma}((r^2+a^2)d\phi-a\,dx^0)^2$, and $\mathcal A=-qr\Sigma^{-1}(dx^0-a\sin^2\theta\,d\phi)$ with $\mathcal F=d\mathcal A$.

[F3] [[def-emg-xs-kn-full-sphere-exterior]]: for $R_0>4|M|$, the full-sphere exterior has a smooth global metric and potential agreeing with [F2] away from the axes, with $r>R_0$, $\Sigma>0$, and $\Delta>0$.

[A1] [[post-emg-einstein-maxwell-equations]]: the selected equation-based physical model adopts $dF=0$, $\nabla^g_aF^{ab}=-\mu_0j^b$, and $G_{ab}+\Lambda g_{ab}=\kappa_E(T^{\mathrm{EM}}_{ab}+T^m_{ab})$. Here $\Lambda=0$, $j=0$, and $T^m=0$.

[L1] [[thm-emg-xs-kn-verification]]: for the exact pole-free KN datum and its stated full-sphere exterior, the current mathematical Statement gives $d\mathcal F=d(\star_g\mathcal F)=0$, $\operatorname{Ric}=2Q_g(\mathcal F)$, and, for $F=\mathcal F/\alpha$, $G_{ab}=\kappa_ET^{\mathrm{EM}}_{ab}$. Its current proof uses the exact present Maxwell-current and observer-stress interfaces; its Step-1 record is authoring-ready, but the mathematical theorem remains draft and has no independent proof acceptance, so the conclusion is used only conditionally.

[L2] [[lem-emg-maxwell-current-forms]]: its current Statement assumes the sourced divergence equation before stating the form-equation equivalence. Its Facts [F1]–[F3] specify the smooth oriented Lorentzian geometry, torsion-free metric connection and Hodge conventions. Its Proof 2.1 derives the pointwise identity $d(\star_gF)=-\iota_v\mathrm{vol}_g$, $v^b=\nabla^g_aF^{ab}$, using only smoothness and those geometric conventions; the equivalence clause is not used as a black-box implication here. The supplier is a draft proof without independent acceptance.

[L3] [[lem-emg-lorentz-hodge-calculus]]: in signature $(-,+,+,+)$ and the stated orientation, $(\star_gF)_{ab}=\tfrac12(\mathrm{vol}_g)_{abcd}F^{cd}$ for smooth two-forms. The metric-selected connection is torsion-free and metric-compatible under the geometric conventions of [L2], hence $\nabla\mathrm{vol}_g=0$.

[A2] [[def-countable-choice]]: the geometric flux convention inherited through [F1] uses only $\mathrm{AC}_\omega$, meaning each specified countable family of nonempty sets has a choice function. The finite field-equation and tensor-rescaling argument below uses no further choice and does not use full AC.

## Proof

1.1 By [F1], $M,a,q,\alpha$ are the exact derived length and field-normalization parameters for these SI inputs. With zero magnetic flux, $q_m=0$, so the electric KN parameter in [F2] is precisely $q=q_e$. The open-domain restrictions in the Statement are the nonsingular chart hypotheses of [F2], and $R_0>4|M|$ gives the smooth exterior domain [F3]. The inherited flux convention assumes only [A2]. [given, F1, F2, F3, A2, algebra]

2.1 Apply [L1] to the fields in [F2] and [F3]. It gives the source-free geometric equations and the normalized tensor equation $G_{ab}=\kappa_ET^{\mathrm{EM}}_{ab}$ on each stated domain, with the full-sphere equations obtained by continuity from the pole-free chart. [F2, F3, L1, step 1.1]

3.1 Put $V^b:=\nabla^g_aF^{ab}$. At any point $p$ of a stated domain, choose a positively oriented orthonormal frame with metric matrix $\eta=\operatorname{diag}(-1,1,1,1)$. Torsion-freeness gives $(d\star_gF)_{abc}=3\nabla_{[a}(\star_gF)_{bc]}$, and metric compatibility gives $\nabla\mathrm{vol}_g=0$. The component formula in [L3] has $(\star_gF)_{ij}=-\epsilon_{ijk}F_{0k}$ and $(\star_gF)_{0i}=\tfrac12\epsilon_{ijk}F_{jk}$, where $\epsilon_{ijk}$ is alternating and $\epsilon_{123}=+1$. In this frame $V^0=\sum_i\nabla_iF_{0i}$ and $V^k=-\nabla_0F_{0k}+\sum_i\nabla_iF_{ik}$. Substituting the displayed Hodge components into $3\nabla_{[a}(\star_gF)_{bc]}$ gives
$$ (d\star_gF)_{123}=-V^0,\qquad (d\star_gF)_{0ij}=\epsilon_{ijk}V^k.$$
In the same oriented frame, $(\iota_V\mathrm{vol}_g)_{123}=V^0$ and $(\iota_V\mathrm{vol}_g)_{0ij}=-\epsilon_{ijk}V^k$, so these components establish $d(\star_gF)|_p=-\iota_{V(p)}\mathrm{vol}_g|_p$. Step 2.1 gives $d(\star_gF)=0$. Since $\mathrm{vol}_g|_p$ is a nonzero four-form, $V(p)\mapsto\iota_{V(p)}\mathrm{vol}_g|_p$ is an isomorphism $T_pM\to\Lambda^3T_p^*M$, so $V(p)=0$. As $p$ was arbitrary, $\nabla^g_aF^{ab}=0$ throughout each stated domain. [L2, L3, step 2.1, algebra]

4.1 Under the zero-source specialization of [A1], the equations established in steps 2.1 and 3.1 are exactly the adopted equation-based Einstein–Maxwell system. Therefore the stated KN normalization is a conditional solution of that physical model on the stated domains. The proof makes no horizon-crossing or empirical claim. [A1, step 2.1, step 3.1] ∎
