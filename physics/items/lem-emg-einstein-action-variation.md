---
id: lem-emg-einstein-action-variation
kind: lemma
title: "Compact Einstein–Hilbert variation and SI coupling"
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 5
proof_strategy: direct
deps:
  - thm-smooth-partitions-of-unity-exist-on-manifolds
  - thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement
  - def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold
  - def-emg-lorentzian-forms
  - def-gr-curvature-tensor-and-derived-tensors
  - def-gr-hilbert-stress-energy-tensor
  - thm-gr-compact-metric-and-timelike-curve-variation
  - thm-gr-density-divergence-and-finite-chain-flux
  - lem-emg-maxwell-action-variation
  - lem-gr-compact-variation-coefficient-vanishing
  - thm-gr-second-bianchi-and-divergence-free-einstein
  - def-countable-choice
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  thm-smooth-partitions-of-unity-exist-on-manifolds: mathematical-premise
  thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement: mathematical-premise
  def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  def-gr-hilbert-stress-energy-tensor: mathematical-premise
  thm-gr-compact-metric-and-timelike-curve-variation: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  lem-emg-maxwell-action-variation: mathematical-premise
  lem-gr-compact-variation-coefficient-vanishing: mathematical-premise
  thm-gr-second-bianchi-and-divergence-free-einstein: mathematical-premise
  def-countable-choice: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
sources:
  references:
    - title: "David Tong, General Relativity, 2019 lecture notes, §4.1, PDF pp. 148–151 (printed pp. 141–144); §4.5.2, PDF p. 190 (printed p. 183)"
      url: "https://davidtong.org/pdfs/teaching/general-relativity/gr.pdf"
      locator: "§4.1: the Einstein–Hilbert first variation, Palatini identity and divergence term; §4.5.2: the matter Hilbert tensor and variational normalization."
    - title: "Sean M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 4, equations (4.54)–(4.70), PDF pp. 121–124 (printed pp. 114–117)"
      url: "https://arxiv.org/pdf/gr-qc/9712019v1"
      locator: "Ch. 4: the Einstein–Hilbert variation, matter-action normalization and boundary-divergence discussion."
provenance:
  statement: ai-altered
  proof: ai-altered
---

## Statement

Let $(M,g,N,o)$ be as in [[def-emg-lorentzian-forms]]. Write $R:=S=g^{ab}\operatorname{Ric}_{ab}:M\to\mathbb R$ for the smooth scalar curvature of [[def-gr-curvature-tensor-and-derived-tensors]], with $\operatorname{Ric}_{bd}=R^a{}_{bad}$ and $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12 Rg_{ab}$ in that supplier's curvature convention. For a compactly supported metric variation, write $q^{ab}=\delta g^{ab}$, $h_{ab}=\delta g_{ab}=-g_{ac}g_{bd}q^{cd}$, $w=\sqrt{|\det(g_{ab})|}$, and $V^a=g^{bd}\delta\Gamma^a{}_{db}-g^{ab}\delta\Gamma^d{}_{db}$, where $\delta\Gamma^a{}_{bc}=\frac12g^{ad}(\nabla_bh_{cd}+\nabla_ch_{bd}-\nabla_dh_{bc})$; curvature and Einstein tensors are as in [[def-gr-curvature-tensor-and-derived-tensors]]. The local density identity is

$$\delta((R-2\Lambda)w)=w(G_{ab}+\Lambda g_{ab})q^{ab}+\partial_a(wV^a).$$

Fix constants $c>0$, $G_N>0$, $\mu_0>0$, and $\Lambda\in\mathbb R$. Regard these as formal coefficients; their physical interpretation and units are not assumptions of this mathematical lemma. For smooth metric variations with compact support in the interior, at fixed bundle connection and fixed matter fields, consider the action difference

$$S_{\mathrm{tot}}=\frac{c^3}{16\pi G_N}\int_M(R-2\Lambda)\,\mathrm{vol}_g-\frac{1}{4\mu_0c}\int_MF_{ab}F^{ab}\,\mathrm{vol}_g+S_m,$$

where noncompact action values are used only through compactly supported differences, $F$ is the curvature of a fixed smooth bundle connection, and $S_m$ has Hilbert tensor $T^m$ in the convention of [[def-gr-hilbert-stress-energy-tensor]]. Let $T^{\mathrm{EM}}$ be the electromagnetic Hilbert tensor supplied by the compact Maxwell variation of [[lem-emg-maxwell-action-variation]], and set $\kappa_E:=8\pi G_N/c^4$. Then for every compactly supported inverse-metric variation $q^{ab}=\delta g^{ab}$,

$$\delta S_{\mathrm{tot}}=\frac{c^3}{16\pi G_N}\int_M\left(G_{ab}+\Lambda g_{ab}-\kappa_E(T^{\mathrm{EM}}_{ab}+T^m_{ab})\right)q^{ab}\,\mathrm{vol}_g.$$

Consequently, stationarity under all such metric variations is equivalent to

$$G_{ab}+\Lambda g_{ab}=\kappa_E(T^{\mathrm{EM}}_{ab}+T^m_{ab}).$$

Any tensor fields satisfying this equation necessarily have $\nabla^a(T^{\mathrm{EM}}_{ab}+T^m_{ab})=0$ because $\Lambda$ is constant. This is a compatibility condition, not a claim that the coupled field equations have a solution or that matter and Maxwell equations follow from metric stationarity.

For dimensional bookkeeping in length coordinates one may assign $[R]=[\Lambda]=\mathrm{m^{-2}}$, $[c]=\mathrm{m\,s^{-1}}$, $[G_N]=\mathrm{m^3\,kg^{-1}\,s^{-2}}$, $[\mu_0]=\mathrm{H\,m^{-1}}$, $[F_{ab}]=\mathrm{Wb\,m^{-2}}$, and $[T^m]=[T^{\mathrm{EM}}]=\mathrm{J\,m^{-3}}$. Then every action term has units $\mathrm{J\,s}$ and $\kappa_E T$ has units $\mathrm{m^{-2}}$. These are formal assignments only; the lemma assumes no measured parameter value or physical field law.

## Facts & Assumptions

**Given:** A smooth oriented time-oriented Lorentzian four-manifold with fixed signature, constants $c,G_N,\mu_0>0$, constant $\Lambda$, a fixed smooth connection sector and matter configuration, and compactly supported inverse-metric variations.

[F1] With $R=S$ as defined in the Statement, for a smooth fixed-signature Lorentzian metric family, the local Einstein–Hilbert density satisfies $\partial_s(w(s)R(s))|_{s=0}=wG_{ab}q^{ab}+\partial_a(wV^a)$, with the inverse variation and tensor $\delta\Gamma$ given in clauses (a)–(d) of [[thm-gr-compact-metric-and-timelike-curve-variation]]. Its clause (e) proves the compact action formula when the support is inside one chart. The extension to arbitrary compact support is proved below, rather than attributed to that chart-only clause. [F2] also supplies the global compact divergence and finite-chart differentiation arguments proved in the preliminary localization argument of [[lem-emg-maxwell-action-variation]].

[F2] The planned M03 Maxwell metric variation is $\delta_gS_{\mathrm{EM}}=-\frac{1}{2c}\int_MT^{\mathrm{EM}}_{ab}q^{ab}\mathrm{vol}_g$, with $T^{\mathrm{EM}}_{ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\frac14g_{ab}F_{cd}F^{cd})$, for fixed lower $F$ and compact inverse-metric variations. ([[lem-emg-maxwell-action-variation]])

[F3] The matter Hilbert tensor satisfies $\delta_gS_m=-\frac{1}{2c}\int_MT^m_{ab}q^{ab}\mathrm{vol}_g$. ([[def-gr-hilbert-stress-energy-tensor]])

[F4] If a continuous symmetric coefficient pairs to zero with every smooth compactly supported symmetric test tensor, then it vanishes pointwise. ([[lem-gr-compact-variation-coefficient-vanishing]])

[F5] The contracted Bianchi identity is $\nabla^aG_{ab}=0$, and the metric is covariantly constant: $\nabla g=0$. ([[thm-gr-second-bianchi-and-divergence-free-einstein]])

[A1] The compact variations are smooth families fixed off a common compact set $K$ for all sufficiently small parameters, within the fixed Lorentzian signature and fixed bundle sector; $\Lambda,c,G_N,\mu_0$ are held constant. For any compactly supported direction $q$, such a family is realized by $g(s)=g+sh$, $h=-gqg$, on a sufficiently small uniform parameter interval as proved in the Maxwell supplier.

[A2] The supporting smooth Lorentzian geometry is under the published $\mathrm{AC}_\omega$ tangent-bundle convention; no use of full AC is needed in these variational calculations. ([[def-countable-choice]])

[F6] Compactly supported top forms have the finite-chart integral of [[def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold]], independent of partition by [[thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement]]. Under $\mathrm{AC}_\omega$ a subordinate smooth partition exists by [[thm-smooth-partitions-of-unity-exist-on-manifolds]].

## Proof

**Proof technique:** add the three independent first variations, normalize the common coefficient, and use compactly supported test tensors for the pointwise Euler–Lagrange equation.

1.1 For a family in [A1], the top form $\omega_s=(R(g(s))-2\Lambda)\mathrm{vol}_{g(s)}-(R(g)-2\Lambda)\mathrm{vol}_g$ is supported in the common compact $K$. Define its relative action by [F6], even if the separate background integrals diverge. Fix a subordinate partition independently of $s$; only finitely many terms meet $K$, and each has compact support inside its chart. The uniform difference-quotient argument in the Maxwell supplier [F2] differentiates this finite sum. Clause (d) of [F1] gives its derivative density locally, and $\delta(-2\Lambda\mathrm{vol}_g)=\Lambda g_{ab}q^{ab}\mathrm{vol}_g$. The field $V$ is global because $\delta\Gamma$ is a tensor, and is supported in $K$. The compact divergence argument in [F2] now gives $\int_M\nabla_aV^a\mathrm{vol}_g=0$: apply chart FTC to each $\rho_iV$ and sum, with $\sum_i d\rho_i=0$ near $K$. Thus no single chart or enclosing finite singular chain is presumed. Multiplication by $c^3/(16\pi G_N)$ yields $\frac{c^3}{16\pi G_N}\int_M(G_{ab}+\Lambda g_{ab})q^{ab}\mathrm{vol}_g$, as claimed. [given, A1, A2, F1, F2, F6, algebra]

2.1 Add [F2] and [F3]. Since $\frac{1}{2c}=\frac{c^3}{16\pi G_N}\frac{8\pi G_N}{c^4}$, the total variation is exactly the expression in the Statement with $\kappa_E=8\pi G_N/c^4$. [F2, F3, step 1.1, algebra]

3.1 If the action is stationary for every compactly supported $q^{ab}$, step 2.1 implies that the continuous symmetric coefficient $G_{ab}+\Lambda g_{ab}-\kappa_E(T^{\mathrm{EM}}_{ab}+T^m_{ab})$ pairs to zero with every such $q$. Because $c,G_N>0$, its prefactor is nonzero; [F4] therefore gives the displayed field equation pointwise. [A1, F4, step 2.1, algebra]

4.1 Conversely, if the displayed field equation holds pointwise, the coefficient in step 2.1 is zero everywhere, so its integral vanishes for every compactly supported $q$. This proves stationarity and the equivalence. [step 2.1, step 3.1, algebra]

5.1 Take the covariant divergence of the field equation in step 3.1. By [F5], $\nabla^aG_{ab}=0$ and $\nabla^a(\Lambda g_{ab})=\Lambda\nabla^ag_{ab}=0$ because $\Lambda$ is constant. Since $\kappa_E>0$, division gives $\nabla^a(T^{\mathrm{EM}}_{ab}+T^m_{ab})=0$. No PDE existence follows from this necessary compatibility identity. [A2, F5, step 3.1, algebra] ∎

## Remarks

- The theorem proves only the metric Euler–Lagrange equation and its necessary Bianchi compatibility. The matter and Maxwell Euler–Lagrange equations are separate variations.
- The M03 Maxwell-action variation is present as a draft and is used only at its inspected statement; the conditional proof here does not treat that draft as accepted. The former research token `GR-G3` is reconciled at its actual use to the published contracted Bianchi theorem [F5]; no alias for its broader research content is asserted. The seven typed foundational replacement carriers declared in `deps` are now authored on emg-mg02: [[def-emg-finite-real-supremum-domain]], [[def-emg-real-metric-axiom-convention]], [[lem-emg-metric-axioms-imply-nonnegativity]], [[def-emg-explicit-power-regimes]], [[lem-emg-sequence-limit-criterion-with-choice]], [[def-emg-boundaryless-completeness-domain]], and [[def-emg-set-size-and-class-schema]].

