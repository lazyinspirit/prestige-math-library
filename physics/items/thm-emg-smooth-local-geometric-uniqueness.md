---
id: thm-emg-smooth-local-geometric-uniqueness
kind: theorem
title: "Smooth local geometric existence and uniqueness for source-free Einstein–Maxwell data"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 7
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-countable-choice
  - def-dependent-choice
  - def-emg-electrovacuum-cauchy-system
  - lem-emg-fieldstrength-positive-symmetric-reduction
  - thm-emg-maxwell-gauss-propagation
  - lem-emg-coupled-reduced-einstein-evolution
  - lem-gr-reduced-einstein-principal-part
  - thm-emg-einstein-gauge-propagation
  - thm-emg-local-high-sobolev-electrovacuum
  - lem-emg-maxwell-stress-conservation
  - thm-emg-gauss-codazzi-maxwell-constraints
  - lem-emg-fixed-smooth-background-harmonic-data
  - lem-emg-smooth-geometric-causal-research-suppliers
  - thm-gr-local-geometric-development
dependency_roles:
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  lem-emg-fieldstrength-positive-symmetric-reduction: mathematical-premise
  thm-emg-maxwell-gauss-propagation: mathematical-premise
  lem-emg-coupled-reduced-einstein-evolution: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
  thm-emg-einstein-gauge-propagation: mathematical-premise
  thm-emg-local-high-sobolev-electrovacuum: mathematical-premise
  lem-emg-maxwell-stress-conservation: mathematical-premise
  thm-emg-gauss-codazzi-maxwell-constraints: mathematical-premise
  lem-emg-fixed-smooth-background-harmonic-data: mathematical-premise
  lem-emg-smooth-geometric-causal-research-suppliers: mathematical-premise
  thm-gr-local-geometric-development: mathematical-premise
sources:
  references:
    - title: "P. T. Chruściel, An introduction to the Cauchy problem for the Einstein equations, Roscoff lecture notes (2011), §1.6 and the local Cauchy-problem discussion."
      url: "https://gravity.univie.ac.at/fileadmin/user_upload/i_gravity_physics/material/teaching/WS_2012/Roscoff.pdf"
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009), §II and §II.A, printed pp. 3–8."
      url: "https://arxiv.org/pdf/0907.1151"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice and Dependent Choice. Let $\Sigma$ be a smooth oriented three-manifold without boundary, with smooth Riemannian metric $h$, smooth symmetric covariant tensor $K$, and smooth spatial vectors $e,b$. Fix $\kappa>0$, $\mu_0>0$, $\Lambda\in\mathbb R$, use signature $(-,+,+,+)$ and $K(X,Y)=g(\nabla_Xn,Y)$, and suppose the four Einstein–Maxwell constraints of [[thm-emg-gauss-codazzi-maxwell-constraints]] hold. In SI convention use length coordinate $x^0=ct$, dimensionless $g,h$, $K$ in $\mathrm m^{-1}$, and $e=E/c$, $b=B$ in tesla. Reconstruct the complete initial two-form on $\mathbb RN\oplus T\Sigma$ by
$$F(N,\mathsf e_i)=-e_i,\qquad F(\mathsf e_i,\mathsf e_j)=\epsilon_{ijk}b_k,$$
where $N$ is the future unit normal symbol and $(\mathsf e_i)$ is a positively oriented $h$-orthonormal frame. Then the data have a smooth time-oriented local source-free Einstein–Maxwell development on an open variable-width neighborhood of the entire initial surface. After restriction to a smaller collar, the interior of its intrinsic domain of dependence is a globally hyperbolic neighborhood with $\Sigma$ Cauchy. Any two developments of this same model and complete data are related near the entire initial surface by a data-fixing, time-orientation-preserving isometry carrying $F$ to $F$. There is no uniform positive time width for noncompact $\Sigma$ and no global-in-time conclusion.

## Facts & Assumptions
**Given:** Countable Choice, Dependent Choice, the smooth oriented data and constants in the Statement, and the specified tetrad, field and extrinsic-curvature conventions.

[L1] Draft model [[def-emg-electrovacuum-cauchy-system]] fixes $G+\Lambda g=\kappa T$, $T_{ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd})$, $dF=d\star_gF=0$, and the curvature and orientation/sign conventions. Its item file is listed in batch 6; its status is draft and its precheck is pending; the application remains conditional.

[L2] Draft constraint result [[thm-emg-gauss-codazzi-maxwell-constraints]] states, with this $K$ and field convention,
$$D_ie^i=D_ib^i=0,\quad R(h)+(\operatorname{tr}_hK)^2-|K|_h^2=2\Lambda+\frac\kappa{\mu_0}(|e|_h^2+|b|_h^2),\quad D^jK_{ji}-D_i\operatorname{tr}_hK=-\frac\kappa{\mu_0}(e\times_hb)_i.$$
Its item file is present but listed in batch 6 and has verification precheck pending, so the interface remains conditional.

[L3] Draft stress identity [[lem-emg-maxwell-stress-conservation]] gives $\nabla^aT_{ab}=-F_{bc}j^c$ for smooth fields satisfying $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$. The exact source-free Hodge conversion is $$\nabla_aF^{ab}=\frac1{3!}\varepsilon^{bacd}(d\star_gF)_{acd}=\frac1{\sqrt{|\det g|}}\partial_a\bigl(\sqrt{|\det g|}F^{ab}\bigr),\qquad \varepsilon_{abcd}:=(\mathrm{vol}_g)_{abcd},$$ with indices raised by $g^{-1}$. It follows by expanding $d\star_gF=3\nabla_{[a}(\star_gF)_{cd]}$, using metric-compatibility $\nabla_a\varepsilon_{bcde}=0$, $({\star_gF})_{cd}=\tfrac12\varepsilon_{cdef}F^{ef}$ and $\varepsilon^{bacd}\varepsilon_{cdef}=-2(\delta^b_e\delta^a_f-\delta^b_f\delta^a_e)$; the coordinate divergence uses $\Gamma^a{}_{ac}=\partial_c\log\sqrt{|\det g|}$ and the vanishing contraction $\Gamma^b{}_{ac}F^{ac}$. Hence the source-free equations in [L1] meet both hypotheses with $j=0$ before the unreduced Einstein equation is used. The file exists but is listed in batch 6 and its precheck is pending; this input remains conditional.

[L4] Draft harmonic initialization [[lem-emg-fixed-smooth-background-harmonic-data]] specifies all initial metric first derivatives, including auxiliary reduction variables, so $H=0$ and the initial reduced state is compatible with the chosen smooth background. Its file exists but is listed in batch 6 and its precheck is pending; this use remains conditional.

[F1] [[lem-emg-fieldstrength-positive-symmetric-reduction]] gives the symmetric Maxwell principal block and positive time matrix; [[lem-gr-reduced-einstein-principal-part]] gives the metric wave block; [[lem-emg-coupled-reduced-einstein-evolution]] combines them, verifies smooth coefficients and no derivative coupling through the algebraic stress, and applies the conditional local solver.

[F2] [[thm-emg-local-high-sobolev-electrovacuum]] includes the local smooth existence clause on arbitrary smooth initial slices. It proves the derivative-variable compatibility, local Maxwell constraint propagation and Einstein harmonic recovery, conditional on the CP01 carriers named above.

[F3] [[thm-emg-maxwell-gauss-propagation]] proves local recovery of $dF=d\star_gF=0$ from the normal-slot equations $\iota_n dF=\iota_n d\star_gF=0$ and zero initial Gauss divergences for $C^1$ metric, field and transverse future unit normal; the smooth local developments here satisfy these hypotheses. [[thm-emg-einstein-gauge-propagation]] proves local $H=0$ and recovery of the unreduced Einstein equation from the normal constraints and conserved stress.

[F4] [[thm-gr-local-geometric-development]] applies to a fixed covariant matter model with a symmetric-hyperbolic reduction, complete smooth matter initialization, propagated auxiliary compatibility, on-shell stress conservation, and the Einstein constraints. Its actual published carrier has precheck pending; its statement and full local proof were inspected.

[F5] [[lem-emg-smooth-geometric-causal-research-suppliers]] collects the exact local causal-neighborhood, globally hyperbolic Cauchy-neighborhood, and choice interfaces used in the local-development conclusion.

## Proof

1.1 On the abstract initial bundle $\mathbb RN\oplus T\Sigma$, the displayed formulas assign the three normal-spatial components and the three spatial-spatial components of an antisymmetric two-form. These are all six independent components of a two-form in four dimensions, so they determine a unique complete initial $F$ without choosing a potential or assuming global exactness. They are smooth because $h,e,b$ are smooth and the reconstruction is tensorial under oriented orthonormal-frame changes. [given, L1, L2, algebra]

1.2 In each relatively compact initial coordinate ball choose product coordinates $(x^0,x^i)$ with $x^0=0$ on the slice and $\partial_0=n$ there. Choose a smooth positive spatial background $\gamma$ and put $Q^i:=h^{jk}(\Gamma(h)^i{}_{jk}-\Gamma(\gamma)^i{}_{jk})$. Relative to $\bar g=-(dx^0)^2+\gamma_{ij}(x)dx^idx^j$, prescribe $g_{ij}=h_{ij}$, $g_{00}=-1$, $g_{0i}=0$, $\partial_0g_{ij}=2K_{ij}$, $\partial_0g_{00}=-2\operatorname{tr}_hK$, and $\partial_0g_{0i}=h_{ij}Q^j$. The same Christoffel computation as the periodic construction [L4], now carried out on this local chart, gives $H^0=-\operatorname{tr}_hK+\operatorname{tr}_hK=0$ and $H^i=-Q^i+h^{jk}(\Gamma(h)^i{}_{jk}-\Gamma(\gamma)^i{}_{jk})=0$. This local jet is smooth and compatible with the first-order reduction. The metric block has time matrix $\operatorname{diag}(I,-g^{00}I,g^{ij}I)$ by [F1]'s reduced Einstein principal-part supplier, and the Maxwell block has time matrix $\alpha^{-1}I_6$ by [F1]. On the open state neighborhood where $g^{00}<0$, $(g^{ij})>0$ and $\alpha>0$, their block sum is positive definite; every spatial matrix is symmetric. Since $T(g,F)$ is algebraic in the state, it contributes only to lower-order terms and creates no off-diagonal derivative blocks. The prescribed local high-Sobolev construction [F2] applies after the compact chart localization in its proof and yields a reduced solution. Its derivative relations propagate; [F3] restores both Maxwell equations and the full Einstein equation on a smaller local domain. Every smooth physical solution in the same harmonic chart extracts to this same coefficient system because the component equations are precisely the harmonic-reduced Einstein equation and field-strength Maxwell evolution. This verifies the local symmetric-hyperbolic, recovery and compatibility hypotheses of [F4]. [given, L4, F1, F2, F3, F4, algebra]

2.1 The equations $dF=0$ and $d\star_gF=0$ are covariant: pullback commutes with exterior differentiation, and for an orientation-preserving diffeomorphism $\phi$, $\phi^*(\star_gF)=\star_{\phi^*g}(\phi^*F)$. The algebraic stress $T(g,F)$ is likewise natural under pullback. Thus the matter field, equations, stress and initial reconstruction define one fixed covariant model of the kind required by [F4]; no coordinate-dependent potential gauge is introduced. [step 1.1, L1, F4, algebra]

2.2 Step 1.2, using [F3], has already recovered $dF=d\star_gF=0$ on the local development; [L1] fixes the corresponding source-free model and stress tensor. The exact Hodge conversion in [L3] gives $\nabla_aF^{ab}=0$, so the stress identity applies with $j=0$ and yields $\nabla^aT_{ab}=0$, independently of the unreduced Einstein equation. The constraints in the Statement are exactly [L2]'s four normal-projection constraints with the same sign, orientation, $\kappa,\mu_0,\Lambda$ and $K$ conventions. This verifies the conservation and Einstein-constraint hypotheses of [F4]. [step 1.1, step 1.2, L1, L2, L3, F3, F4]

3.1 We have now checked every specific input of [F4]: a fixed covariant model by step 2.1, complete matter data and smooth initialization by step 1.1 and the local harmonic jet in step 1.2, a smooth symmetric-hyperbolic reduction and reconstruction by step 1.2, on-shell stress conservation by step 2.2, and the model's Einstein constraints by [L2]. The choice assumptions are those in the Statement. Applying [F4] gives the smooth local development, variable-width collar, intrinsic globally hyperbolic Cauchy neighborhood and data-fixing isometry matching $F$. The causal qualifications in [F5] confirm that no compactness or uniform collar width is used. [step 1.1, step 2.1, step 2.2, step 1.2, L2, L3, L4, F4, F5] ∎
