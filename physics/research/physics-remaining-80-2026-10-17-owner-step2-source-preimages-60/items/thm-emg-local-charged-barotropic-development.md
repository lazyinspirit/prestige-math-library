---
id: thm-emg-local-charged-barotropic-development
kind: theorem
title: "Local charged Einstein–Maxwell–barotropic development"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-emg-strict-charged-barotropic-system
  - lem-emg-charged-fluid-current-conservation
  - lem-emg-charged-fluid-positive-symmetric-reduction
  - lem-emg-fieldstrength-positive-symmetric-reduction
  - lem-emg-maxwell-stress-conservation
  - lem-emg-lorentz-hodge-calculus
  - lem-emg-observer-field-decomposition
  - lem-gr-reduced-einstein-principal-part
  - def-gr-harmonic-gauge-and-reduced-equations
  - lem-gr-einstein-residual-and-subsidiary-identity
  - thm-gr-local-symmetric-hyperbolic-well-posedness
  - def-gr-periodic-torus-and-sobolev-spaces
  - thm-gr-constraint-equations-in-normal-frame
  - thm-gr-local-geometric-development
  - thm-gr-density-divergence-and-finite-chain-flux
  - thm-picard-lindelof-local-existence-and-uniqueness
  - def-riemannian-divergence
  - prop-coordinate-formula-for-riemannian-divergence
  - def-countable-choice
  - def-dependent-choice
dependency_roles:
  def-emg-strict-charged-barotropic-system: mathematical-premise
  lem-emg-charged-fluid-current-conservation: mathematical-premise
  lem-emg-charged-fluid-positive-symmetric-reduction: mathematical-premise
  lem-emg-fieldstrength-positive-symmetric-reduction: mathematical-premise
  lem-emg-maxwell-stress-conservation: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  lem-gr-einstein-residual-and-subsidiary-identity: mathematical-premise
  thm-gr-local-symmetric-hyperbolic-well-posedness: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  thm-gr-local-geometric-development: mathematical-premise
  thm-gr-density-divergence-and-finite-chain-flux: mathematical-premise
  thm-picard-lindelof-local-existence-and-uniqueness: mathematical-premise
  def-riemannian-divergence: mathematical-premise
  prop-coordinate-formula-for-riemannian-divergence: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Yvonne Choquet-Bruhat, Introduction to General Relativity, Black Holes, and Cosmology (Oxford, 2015), Chapter IX: Relativistic fluids"
      url: "https://inspirehep.net/files/b6b9e25e70e9a80e6aa13c2611ae4a76"
    - title: "Daniela Pugliese and Juan A. Valiente Kroon, On the evolution equations for ideal magnetohydrodynamics in curved spacetime, arXiv:1112.1525v1 (2011)"
      url: "https://arxiv.org/pdf/1112.1525"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ and Dependent Choice. Use the model, stress tensors, constants, $(-,+,+,+)$ signature, Maxwell signs, and $K(X,Y)=g(\nabla_Xn,Y)$ convention of [[def-emg-strict-charged-barotropic-system]]. Let $\kappa>0$, $\mu_0>0$, $c>0$, $\Lambda\in\mathbb R$, let $p=p(\epsilon)$ be smooth on an open interval $J$, and assume $\epsilon+p(\epsilon)>0$ and $0<p'(\epsilon)<1$ on a compact interval $K_\epsilon\Subset J$ containing the initial density values.

For smooth Cauchy data on a smooth oriented three-manifold $\Sigma$ without boundary, let $h$ be a Riemannian metric and $K\in\Gamma(\operatorname{Sym}^2T^*\Sigma)$. Let $\mathfrak n$ be the future unit normal in the initial bundle $\mathcal V=\mathbb R\mathfrak n\oplus T\Sigma$ with metric $g_0(a\mathfrak n+X,b\mathfrak n+Y)=-ab+h(X,Y)$. Take $\epsilon_0,Z_0\in C^\infty(\Sigma,\mathbb R)$, $u_0\in C^\infty(\Sigma,\mathcal V)$, and $e,b\in\Gamma(T\Sigma)$; $e,b$ are the spatial electric and magnetic fields in the $e=E/c$, $b=B$ convention, with units tesla, while $\epsilon_0$ has units J m$^{-3}$, $Z_0$ coulomb, $K$ m$^{-1}$, $u_0$ dimensionless, and $j_0$ A m$^{-2}$, as in [[def-emg-strict-charged-barotropic-system]]. Require $g_0(u_0,u_0)=-1$, $u_0$ future-directed, and $\epsilon_0(\Sigma)\subset K_\epsilon$. Define the unique initial two-form $F_0\in\Gamma(\Lambda^2\mathcal V^*)$ by $e_i=F_0(\mathsf e_i,\mathfrak n)$ and $b_i=\tfrac12\varepsilon_i{}^{jk}F_0(\mathsf e_j,\mathsf e_k)$ in every oriented $h$-orthonormal frame $(\mathsf e_i)$; existence and uniqueness follow from [[lem-emg-observer-field-decomposition]]. Put $T_0=T_{m,0}+T_{\mathrm{EM},0}$ and $j_0=cN(\epsilon_0)Z_0u_0$ using the same definition. Assume the Einstein constraints

$$R(h)+(\operatorname{tr}_hK)^2-|K|_h^2=2\Lambda+2\kappa T_0(\mathfrak n,\mathfrak n),\qquad (\operatorname{div}_hK)(X)-D_X\operatorname{tr}_hK=\kappa T_0(\mathfrak n,X)$$

for every $X\in T\Sigma$, where $D$ is the Levi-Civita connection of $h$, and the sourced Maxwell constraints

$$\operatorname{div}_h e=-\mu_0g(j_0,\mathfrak n),\qquad \operatorname{div}_h b=0.$$

Then:

**(a) Torus Sobolev branch.** If $\Sigma=\mathbb T^3_{2\pi}$ ([[def-gr-periodic-torus-and-sobolev-spaces]]), $s\ge5$ is an integer, $h\in H^{s+1}$, and $K,e,b,\epsilon_0,u_0,Z_0\in H^s$ (with the same strict compact admissibility), there is $T>0$ and a solution of the full Einstein–Maxwell–fluid equations on $(-T,T)\times\mathbb T^3$ in harmonic gauge. In periodic charts, $g\in L^\infty H^{s+1}\cap C^0H^s$, $\partial_tg\in L^\infty H^s\cap C^0H^{s-1}$, and $F,\epsilon,u,Z\in L^\infty H^s\cap C^0H^{s-1}$. The fields satisfy the equations classically; uniqueness holds for the corresponding reduced system on common intervals with common compact admissible bounds.

**(b) Smooth geometric branch.** For the smooth data on arbitrary $\Sigma$ above, there is a smooth time-oriented local development on an open variable-width neighborhood of $\{0\}\times\Sigma$, solving the full coupled equations and inducing exactly $(h,K,F_0,\epsilon_0,u_0,Z_0)$. It is unique near the initial surface up to a data-fixing time-orientation-preserving isometry matching $F,\epsilon,u,Z$. No uniform time width for noncompact $\Sigma$, global existence, shock continuation, vacuum/free-boundary solution, or empirical validity is asserted.

## Facts & Assumptions

**Given:** The data and constraints in the Statement, $\mathrm{AC}_\omega$, Dependent Choice, and the inspected current CP02 and CP01 draft interfaces below.

[A1] [[def-countable-choice]]: Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$.

[A2] [[def-dependent-choice]]: Assume Dependent Choice.

[F1] [[def-emg-strict-charged-barotropic-system]]: $T_{m,ab}=(\epsilon+p)u_a u_b+pg_{ab}$, $T_{\mathrm{EM},ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd})$, $j=cNZu$, $\nabla^aT_{m,ab}=F_{bc}j^c$, $u(Z)=0$, $dF=0$, and $d\star_gF=\mu_0\iota_j\operatorname{vol}_g$ (equivalently $\nabla_aF^{ab}=-\mu_0j^b$); the stress, current and force sources are algebraic in the state variables.

[F2] [[lem-gr-reduced-einstein-principal-part]]: In harmonic gauge the first-order metric jet $(g,p=\bar\nabla_0g,q_i=\bar\nabla_i g)$ has symmetric principal matrices and positive time matrix $\operatorname{diag}(I,-g^{00}I,(g^{ij}))$ when $g^{00}<0$ and $(g^{ij})>0$; substituting a smooth algebraic stress tensor leaves this block unchanged, and the equations for $p,q_i$ propagate their defining derivative relations.

[F3] [[lem-emg-charged-fluid-positive-symmetric-reduction]]: The strict $(r,u,Z)$ fluid block has symmetric principal matrices and positive time matrix for every future-positive timelike time covector; its Lorentz force and all couplings through the algebraic stress/current are lower order.

[F4] [[lem-emg-charged-fluid-current-conservation]]: The matter balance and transported $Z$ imply $\nabla_a j^a=0$; conditional on the planned CP01 Maxwell-stress identity, $\nabla^a(T_m+T_{\mathrm{EM}})_{ab}=0$ before imposing the Einstein equation.

[F5] [[thm-gr-local-symmetric-hyperbolic-well-posedness]]: Under $\mathrm{AC}_\omega$, a periodic quasilinear symmetric-hyperbolic system with smooth coefficient maps on an open state set, compact initial value range in that set, uniformly positive time matrix there, and integer $s\ge5$ has a local solution in $L^\infty H^s\cap C^0H^{s-1}$ with the theorem's classical regularity and uniqueness in that class.

[F6] [[lem-gr-einstein-residual-and-subsidiary-identity]]: On a reduced Einstein solution, $E_{ab}=\tfrac12(\nabla_aH_b+\nabla_bH_a-g_{ab}\nabla_cH^c)$; if $\nabla^aT_{ab}=0$, then $\Box_gH_b+\operatorname{Ric}_{ba}H^a=0$.

[F7] [[thm-gr-constraint-equations-in-normal-frame]]: On a spacelike slice, the Einstein constraints for $G+\Lambda g=\kappa T$ are exactly $R(h)+(\operatorname{tr}K)^2-|K|^2=2\Lambda+2\kappa T(n,n)$ and $\operatorname{div}_hK-D\operatorname{tr}K=\kappa T(n,\cdot)$ under the stated $K$ sign convention.

[F8] [[thm-gr-local-geometric-development]]: For one fixed covariant matter model, complete smooth initial data, an explicitly initialized first-order reduction with symmetric matrices and positive time matrix, propagated auxiliary constraints recovering the matter equations before Einstein recovery, and stress conserved before Einstein recovery, complete constrained data have a smooth local geometric development and data-fixing isometry uniqueness, assuming $\mathrm{AC}_\omega$ and Dependent Choice.

[F9] [[thm-gr-density-divergence-and-finite-chain-flux]]: For a smooth vector field $J$ on an oriented Lorentzian manifold, $d(\iota_J\operatorname{vol}_g)=(\nabla_aJ^a)\operatorname{vol}_g$.

[F10] [[thm-picard-lindelof-local-existence-and-uniqueness]]: For a continuous vector field locally Lipschitz in its state variable on an open domain, the initial-value problem has a unique local solution through each initial point.

[F11] [[def-gr-harmonic-gauge-and-reduced-equations]]: For a fixed smooth background metric $\bar g$, the harmonic-gauge vector is $H^a=g^{bc}(\Gamma^a{}_{bc}-\bar\Gamma^a{}_{bc})$ and the reduced Einstein equation is $\operatorname{Ric}_{ab}-\nabla_{(a}H_{b)}=\kappa(T_{ab}-\tfrac12Tg_{ab})+\Lambda g_{ab}$.

[F12] [[lem-emg-observer-field-decomposition]]: In an oriented future orthonormal tetrad $(\mathfrak n,\mathsf e_i)$, a two-form is uniquely reconstructed from $e_i=F(\mathsf e_i,\mathfrak n)$ and $b_i=\tfrac12\varepsilon_i{}^{jk}F(\mathsf e_j,\mathsf e_k)$, with $F_{0i}=-e_i$ and $F_{ij}=\varepsilon_{ijk}b_k$.

[F13] [[lem-emg-lorentz-hodge-calculus]]: In an oriented orthonormal coframe, $\star_ge^{01}=-e^{23}$ and $\star_ge^{23}=e^{01}$; for two-forms $({\star_gF})_{ab}=\tfrac12(\operatorname{vol}_g)_{abcd}F^{cd}$ and $d^2=0$.

[F14] [[def-riemannian-divergence]] and [[prop-coordinate-formula-for-riemannian-divergence]]: On an oriented Riemannian slice, $d(\iota_X\operatorname{vol}_h)=(\operatorname{div}_hX)\operatorname{vol}_h$.

[L1] [[lem-emg-fieldstrength-positive-symmetric-reduction]]: Current draft CP02 interface: for six electric/magnetic components on a spacelike foliation with lapse $\alpha>0$ and spatial metric $h>0$, the source-free evolution block is $P(\zeta)=\zeta(n)I_6+S(\zeta_\perp)$, where $C(\xi)v=\xi^\sharp\times v$ and $S(\xi)(u,v)=(-C(\xi)v,C(\xi)u)$; it is symmetric and has time matrix $\alpha^{-1}I_6$. Its actual carrier is now listed on the CP02 page but remains status draft with precheck pending. In CP03 the sourced current $j=cNZu$ is algebraic, so it enters as a lower-order source and leaves this principal block unchanged; this use remains conditional on the draft proof.

[L2] [[lem-emg-maxwell-stress-conservation]]: Current draft CP01 statement: under $dF=0$ and $\nabla_aF^{ab}=-\mu_0j^b$, $\nabla^aT_{\mathrm{EM},ab}=-F_{bc}j^c$, for the tensor normalization in [F1]. Its displayed proof uses the product rule, cyclic Maxwell identity, and metric compatibility; the draft carrier is not an accepted premise.

## Proof

**Proof technique:** direct symmetric-hyperbolic reduction, Maxwell subsidiary transport, and Einstein gauge recovery.

1.1 For the torus branch take the fixed flat background $\bar g=-dt^2+\delta_{ij}dx^idx^j$ on $(-\tau,\tau)\times\mathbb T^3_{2\pi}$; for the smooth branch shrink each initial chart to a relatively compact ball and use the same flat comparison metric there. At the initial slice set $g_{00}=-1$, $g_{0i}=0$, $g_{ij}=h_{ij}$, $p_{ij}=2K_{ij}$, $p_{00}=-2\operatorname{tr}_hK$, and $p_{0i}=h_{i\ell}h^{jk}\Gamma(h)^\ell{}_{jk}$. Since $\bar\Gamma=0$, [F11] gives $H^0=\tfrac12p_{00}+\operatorname{tr}_hK=0$ and $H^\ell=-h^{\ell i}p_{0i}+h^{jk}\Gamma(h)^\ell{}_{jk}=0$ by direct contraction of the Christoffel formula. Set $q_{abi}=\partial_i g_{ab}$ from this initial metric. For torus data $h\in H^{s+1}$ implies $\Gamma(h),p_{0i}\in H^s$, so the full metric jet lies in $H^s$. On a relatively compact smooth-data patch the corresponding range is compact. The standard global spatial frame on $\mathbb T^3$ and Gram–Schmidt give a global orthonormal frame for $h$; on smooth arbitrary $\Sigma$ use local frames. Reconstruct $F_0$ uniquely from $(e,b)$ by [F12]. For the torus use the global fiber coordinates $y^i=u^i$ on the future unit-velocity hyperboloid; the normalization $g(u,u)=-1$ selects the positive root $u^0=\sqrt{1+h_{ij}u^iu^j}$ on the initial orthogonal slice, so these give a smooth state chart. On smooth patches use any local hyperboloid chart. Express $\epsilon_0$ in enthalpy coordinate $r$. The CP02 Maxwell block is the current draft interface [L1]: its source-free matrices are symmetric with positive time matrix, and the algebraic current in [F1] changes only its zero-order term. The metric and fluid blocks are [F2] and [F3]. Since the stress, current and Lorentz force are algebraic, the combined principal matrices are block diagonal and symmetric. The initial time matrices are positive; compactness of the initial state range and continuity give a compact neighborhood on which their smallest eigenvalues have a common positive lower bound. The metric derivative relations propagate by the reduced equations, the velocity coordinates preserve $g(u,u)=-1$ and future orientation, and the enthalpy change is invertible by [F3]. The regularity $h\in H^{s+1}$ and $K,e,b,\epsilon_0,u_0,Z_0\in H^s$ gives the complete first-order initial state in $H^s$. [F1, F2, F3, F11, F12, L1, algebra]

2.1 The reduced state has smooth coefficient maps on its open admissible state set, a compact initial range in that set, and a uniformly positive time matrix by step 1.1. Under A1 these are the hypotheses of [F5], which gives a local solution with the stated $H^s$ bounds and reduced-system uniqueness. The equations $\partial_tg=p$ and $\partial_tq_i=\partial_ip$ give $\partial_t(q_i-\partial_i g)=0$; the difference is initially zero, so $q_i=\partial_i g$ persists. Therefore $g\in L^\infty H^{s+1}\cap C^0H^s$ and $\partial_tg\in L^\infty H^s\cap C^0H^{s-1}$. Since $s\ge5$ in three spatial dimensions, $H^{s-1}\hookrightarrow C^2$ and $H^{s-1}\hookrightarrow C^0$; all second metric derivatives and first derivatives of $F,\epsilon,u,Z$ are continuous. Thus each displayed equation holds classically. [step 1.1, F5, A1, algebra]

3.1 Put $U=dF$ and $V=d(\star_gF)-\mu_0\iota_j\operatorname{vol}_g$. The sourced Maxwell evolution equations imply $\iota_nU=\iota_nV=0$; hence these are spatial three-forms and uniquely have the form $U=q\,\iota_n\operatorname{vol}_g$, $V=r\,\iota_n\operatorname{vol}_g$. Since $d^2=0$ and [F9] applies, $dU=0$ and $dV=-\mu_0(\nabla_aj^a)\operatorname{vol}_g=0$ by current conservation [F4]. In the torus branch the fields are sufficiently differentiable by step 2.1; the coordinate identity in [F9] therefore applies pointwise at this regularity, and the smooth branch has smooth fields. Expanding $d(q\iota_n\operatorname{vol}_g)$ gives $\nabla_a(qn^a)=0$, or $n(q)+q\nabla_an^a=0$; the identical calculation gives $n(r)+r\nabla_an^a=0$. In a positively oriented normal frame, [F12] and the Hodge component formula [F13] give $F|_\Sigma=\iota_b\operatorname{vol}_h$ and $(*F)|_\Sigma=\iota_e\operatorname{vol}_h$; [F14] then gives $i^*U=(\operatorname{div}_hb)\operatorname{vol}_h$. Also $i^*(\iota_j\operatorname{vol}_g)=-g(j,n)\operatorname{vol}_h$, so [F14] gives $i^*V=(\operatorname{div}_he+\mu_0g(j,n))\operatorname{vol}_h$. The two stated Maxwell constraints make these pullbacks zero, hence $q=r=0$ initially. Since $n^0=\alpha^{-1}>0$ by the positive-lapse slicing in [L1], the normal flow is transverse to $t=0$; after shrinking, every point lies on a unique normal integral curve from the initial slice by [F10]. Along such a curve, say with parameter $\lambda$, the equations are $q'+(\nabla_an^a)q=0$ and $r'+(\nabla_an^a)r=0$. Multiplying the first by $\exp(\int\nabla_an^a\,d\lambda)$ gives a constant product, so its zero initial value implies $q=0$; the same argument gives $r=0$. Thus $U=V=0$ and both sourced Maxwell equations hold. [step 2.1, F4, F9, F10, F12, F13, F14, L1, given, algebra]

4.1 Step 3.1 establishes the sourced Maxwell equations, so the actual fields meet the hypotheses of the current draft CP01 identity [L2]. The matter balance and advected-charge equation give the current lemma's unconditional conclusion $\nabla_aj^a=0$; adding its matter-stress divergence $F_{bc}j^c$ to the CP01 electromagnetic divergence $-F_{bc}j^c$ gives $\nabla^a(T_m+T_{\mathrm{EM}})_{ab}=0$. This is a conditional pre-Einstein conservation deduction, not a proof or acceptance of the draft CP01 carrier. [step 3.1, F1, F4, L2, algebra]

5.1 For the torus branch, [F6] gives $\Box_gH_b+\operatorname{Ric}_{ba}H^a=0$. Step 1.1 gives $H=0$ initially, hence all tangential derivatives of $H$ vanish. In an initial orthonormal frame $(n,\mathsf e_i)$ the residual identity [F6] then reads $E(n,n)=\tfrac12\nabla_nH_n$ and $E(n,\mathsf e_i)=\tfrac12\nabla_nH_i$; [F7] makes these zero, so $\partial_tH=0$ initially because $\partial_t=n$ there. Put $V=\partial_tH$ and $W_i=\partial_iH$. Multiplying the wave equation by $-1$, adjoining $\partial_tW_i-\partial_iV=0$, and multiplying these latter equations by $g^{ji}$ gives a first-order symmetric system with time matrix $A^0=\operatorname{diag}(-g^{00},(g^{ij}))$, cross entries $A^k_{V,W_j}=-g^{kj}$ and $A^k_{W_i,V}=-g^{ik}$, and $VV$ entry $-2g^{0k}$. The time matrix is uniformly positive on a short cylinder. Since $g\in L^\infty H^{s+1}$ and $\partial_tg\in L^\infty H^s$ with $s\ge5$, its principal coefficients are Lipschitz and its zeroth-order coefficients are bounded. In normal form $\partial_tY+B^i\partial_iY=CY$ for $Y=(V,W_i)$, $A^0B^i=A^i$ is symmetric. For smooth $Y$, multiplying by $Y^{\mathsf T}A^0$, integrating over the periodic torus and using symmetry gives $\mathcal E'(t)\le C_0\mathcal E(t)$, where $\mathcal E(t)=\int Y^{\mathsf T}A^0Y\,dx$: the flux term is $-\int Y^{\mathsf T}(\partial_iA^i)Y\,dx$, and bounded coefficient derivatives and bounded $C$ control it by $C_0\mathcal E$. For the finite-regularity solution, spatially mollify the normal-form system. The Friedrichs commutators $[B^i,J_\delta]\partial_iY$ are bounded in $L^2$ by $C\|\nabla B^i\|_{L^\infty}\|Y\|_{L^2}$ and converge to zero by their kernel formula and density of smooth functions. Thus the integrated inequality passes to the limit. The initial state $Y(0)=0$, so Gronwall forward and with time reversed gives $Y=0$; integrating $V=\partial_tH$ and using $H(0)=0$ gives $H=0$. The residual identity [F6] now gives $E_{ab}=0$, hence the reduced metric satisfies the full Einstein equation with $T_m+T_{\mathrm{EM}}$. [step 1.1, step 2.1, step 4.1, F6, F7, algebra]

6.1 For smooth data on arbitrary $\Sigma$, the model is covariant and its complete matter data are the reconstructed $(F_0,\epsilon_0,u_0,Z_0)$. The first-order metric, field-strength, and fluid variables are initialized in step 1.1; the metric derivative relations and velocity constraint propagate there, while step 3.1 propagates Maxwell residual constraints and recovers both Maxwell equations. Step 4.1 supplies total-stress conservation before Einstein recovery, and the initial Einstein constraints are exactly [F7]. Thus the complete-data, positive symmetric reduction, auxiliary propagation, and pre-recovery conservation hypotheses of [F8] have all been checked. Under A1 and A2, [F8] gives the asserted smooth local development and data-fixing isometry. Its use remains conditional on the draft CP01/CP02 interfaces [L1]–[L2], and it gives no global-existence assertion. [step 1.1, step 3.1, step 4.1, F7, F8, A1, A2, L1, L2] ∎