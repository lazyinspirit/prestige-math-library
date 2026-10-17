---
id: thm-emg-local-charged-barotropic-development
kind: theorem
title: "Local charged Einstein–Maxwell–barotropic development"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-emg-strict-charged-barotropic-system
  - lem-emg-charged-fluid-current-conservation
  - lem-emg-charged-fluid-positive-symmetric-reduction
  - lem-emg-fieldstrength-positive-symmetric-reduction
  - lem-emg-classical-maxwell-stress-identity
  - lem-emg-lorentz-hodge-calculus
  - lem-emg-observer-field-decomposition
  - lem-gr-reduced-einstein-principal-part
  - def-gr-harmonic-gauge-and-reduced-equations
  - lem-gr-einstein-residual-and-subsidiary-identity
  - thm-gr-local-symmetric-hyperbolic-well-posedness
  - def-gr-periodic-torus-and-sobolev-spaces
  - lem-gr-periodic-sobolev-embedding
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
  lem-emg-classical-maxwell-stress-identity: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  lem-emg-observer-field-decomposition: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
  def-gr-harmonic-gauge-and-reduced-equations: mathematical-premise
  lem-gr-einstein-residual-and-subsidiary-identity: mathematical-premise
  thm-gr-local-symmetric-hyperbolic-well-posedness: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
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
  precheck: pass
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$ and Dependent Choice. Use the model, stress tensors, constants, $(-,+,+,+)$ signature, Maxwell signs, and $K(X,Y)=g(\nabla_Xn,Y)$ convention of [[def-emg-strict-charged-barotropic-system]]. Let $\kappa>0$, $\mu_0>0$, $c>0$, $\Lambda\in\mathbb R$, let $p=p(\epsilon)$ be smooth on an open interval $J$, and assume $\epsilon+p(\epsilon)>0$ and $0<p'(\epsilon)<1$ on a compact interval $K_\epsilon\Subset J$ containing the initial density values.

For smooth Cauchy data on a smooth oriented three-manifold $\Sigma$ without boundary, let $h$ be a Riemannian metric and $K\in\Gamma(\operatorname{Sym}^2T^*\Sigma)$. Let $\mathfrak n$ be the future unit normal in the initial bundle $\mathcal V=\mathbb R\mathfrak n\oplus T\Sigma$ with metric $g_0(a\mathfrak n+X,b\mathfrak n+Y)=-ab+h(X,Y)$. Take $\epsilon_0,Z_0\in C^\infty(\Sigma,\mathbb R)$, $u_0\in C^\infty(\Sigma,\mathcal V)$, and $e,b\in\Gamma(T\Sigma)$; $e,b$ are the spatial electric and magnetic fields in the $e=E/c$, $b=B$ convention, with units tesla, while $\epsilon_0$ has units J m$^{-3}$, $Z_0$ coulomb, $K$ m$^{-1}$, $u_0$ dimensionless, and $j_0$ A m$^{-2}$, as in [[def-emg-strict-charged-barotropic-system]]. Require $g_0(u_0,u_0)=-1$, $u_0$ future-directed, and $\epsilon_0(\Sigma)\subset K_\epsilon$. Define the unique initial two-form $F_0\in\Gamma(\Lambda^2\mathcal V^*)$ by $e_i=F_0(\mathsf e_i,\mathfrak n)$ and $b_i=\tfrac12\varepsilon_i{}^{jk}F_0(\mathsf e_j,\mathsf e_k)$ in every oriented $h$-orthonormal frame $(\mathsf e_i)$; existence and uniqueness follow from [[lem-emg-observer-field-decomposition]]. Put $T_0=T_{m,0}+T_{\mathrm{EM},0}$ and $j_0=cN(\epsilon_0)Z_0u_0$ using the same definition. Assume the Einstein constraints

$$R(h)+(\operatorname{tr}_hK)^2-|K|_h^2=2\Lambda+2\kappa T_0(\mathfrak n,\mathfrak n),\qquad (\operatorname{div}_hK)(X)-D_X\operatorname{tr}_hK=\kappa T_0(\mathfrak n,X)$$

for every $X\in T\Sigma$, where $D$ is the Levi-Civita connection of $h$, and the sourced Maxwell constraints

$$\operatorname{div}_h e=-\mu_0g(j_0,\mathfrak n),\qquad \operatorname{div}_h b=0.$$

Then:

**(a) Torus Sobolev branch.** If $\Sigma=\mathbb T^3_{2\pi}$ ([[def-gr-periodic-torus-and-sobolev-spaces]]), $s\ge5$ is an integer, $h\in H^{s+1}$, and $K,e,b,\epsilon_0,u_0,Z_0\in H^s$ (with the same strict compact admissibility), there is $T>0$ and a solution of the full Einstein–Maxwell–fluid equations on $(-T,T)\times\mathbb T^3$ in harmonic gauge. In periodic charts, $g\in L^\infty H^{s+1}\cap C^0H^s$, $\partial_tg\in L^\infty H^s\cap C^0H^{s-1}$, and $F,\epsilon,u,Z\in L^\infty H^s\cap C^0H^{s-1}$. In this branch the earlier smooth-data requirements are replaced by the stated Sobolev orders. The fields satisfy the explicit classical branch of [[def-emg-strict-charged-barotropic-system]], with $g\in C^3$ and $F,\epsilon,u,Z\in C^2$ as proved below; smoothness is not inferred for nonsmooth initial data. Uniqueness holds for the corresponding reduced system on common intervals with common compact admissible bounds.

**(b) Smooth geometric branch.** For the smooth data on arbitrary $\Sigma$ above, there is a smooth time-oriented local development on an open variable-width neighborhood of $\{0\}\times\Sigma$, solving the full coupled equations and inducing exactly $(h,K,F_0,\epsilon_0,u_0,Z_0)$. It is unique near the initial surface up to a data-fixing time-orientation-preserving isometry matching $F,\epsilon,u,Z$. No uniform time width for noncompact $\Sigma$, global existence, shock continuation, vacuum/free-boundary solution, or empirical validity is asserted.

## Facts & Assumptions

**Given:** The data and constraints in the Statement, $\mathrm{AC}_\omega$, Dependent Choice, and the inspected current CP02 and CP01 draft interfaces below.

[A1] [[def-countable-choice]]: Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$.

[A2] [[def-dependent-choice]]: Assume Dependent Choice.

[F1] [[def-emg-strict-charged-barotropic-system]]: $T_{m,ab}=(\epsilon+p)u_a u_b+pg_{ab}$, $T_{\mathrm{EM},ab}=\mu_0^{-1}(F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd})$, $j=cNZu$, $\nabla^aT_{m,ab}=F_{bc}j^c$, $u(Z)=0$, $dF=0$, and $d\star_gF=\mu_0\iota_j\operatorname{vol}_g$ (equivalently $\nabla_aF^{ab}=-\mu_0j^b$); the stress, current and force sources are algebraic in the state variables.

[F2] [[lem-gr-reduced-einstein-principal-part]]: In harmonic gauge the first-order metric jet $(g,p=\bar\nabla_0g,q_i=\bar\nabla_i g)$ has symmetric principal matrices and positive time matrix $\operatorname{diag}(I,-g^{00}I,(g^{ij}))$ when $g^{00}<0$ and $(g^{ij})>0$; substituting a smooth algebraic stress tensor leaves this block unchanged, and the equations for $p,q_i$ propagate their defining derivative relations.

[F3] [[lem-emg-charged-fluid-positive-symmetric-reduction]]: The strict $(r,u,Z)$ fluid block has symmetric principal matrices and positive time matrix for every future-positive timelike time covector; its Lorentz force and all couplings through the algebraic stress/current are lower order.

[F4] [[lem-emg-charged-fluid-current-conservation]]: the matter balance and transported $Z$ imply $\nabla_a j^a=0$. This current-conservation calculation uses only first derivatives and remains valid for the classical regularity established in step 2.1. Its separate smooth stress clause is not applied to the finite solution; total stress is recovered from [F1] and the classical Maxwell identity [L2] after both Maxwell equations hold.

[F5] [[thm-gr-local-symmetric-hyperbolic-well-posedness]]: Under $\mathrm{AC}_\omega$, the periodic quasilinear symmetric-hyperbolic system with smooth coefficients, compact admissible initial range, uniformly positive time matrix and integer $s\ge5$ has a local solution in $L^\infty H^s\cap C^0H^{s-1}$. Its Statement gives a $C^1$ classical solution near every initial point and uniqueness for classical solutions in the stated bounded class; compactness of $\mathbb T^3$ supplies a smaller common time cylinder from a finite subcover.

[F15] [[lem-gr-periodic-sobolev-embedding]]: Under $\mathrm{AC}_\omega$, $H^q(\mathbb T^3_{2\pi})\hookrightarrow C^m$ continuously when $q\ge m$ and $q-m>3/2$, and convergence in $H^q$ implies convergence in $C^m$.

[F6] [[lem-gr-einstein-residual-and-subsidiary-identity]]: On a reduced Einstein solution, $E_{ab}=\tfrac12(\nabla_aH_b+\nabla_bH_a-g_{ab}\nabla_cH^c)$; if $\nabla^aT_{ab}=0$, then $\Box_gH_b+\operatorname{Ric}_{ba}H^a=0$.

[F7] [[thm-gr-constraint-equations-in-normal-frame]]: Its normal-projection identities give $G(n,n)=\tfrac12(R(h)+(\operatorname{tr}_hK)^2-|K|_h^2)$ and $G(n,X)=\operatorname{div}_hK(X)-D_X\operatorname{tr}_hK$. Therefore the initial constraints in the Statement are equivalent to $E(n,n)=E(n,X)=0$ for $E=G+\Lambda g-\kappa T_0$ under the stated sign convention.

[F8] [[thm-gr-local-geometric-development]]: For one fixed covariant matter model, complete smooth initial data, an explicitly initialized first-order reduction with symmetric matrices and positive time matrix, propagated auxiliary constraints recovering the matter equations before Einstein recovery, and stress conserved before Einstein recovery, complete constrained data have a smooth local geometric development and data-fixing isometry uniqueness, assuming $\mathrm{AC}_\omega$ and Dependent Choice.

[F9] [[thm-gr-density-divergence-and-finite-chain-flux]]: For a smooth vector field $J$ on an oriented Lorentzian manifold, $d(\iota_J\operatorname{vol}_g)=(\nabla_aJ^a)\operatorname{vol}_g$.

[F10] [[thm-picard-lindelof-local-existence-and-uniqueness]]: For a continuous vector field locally Lipschitz in its state variable on an open domain, the initial-value problem has a unique local solution through each initial point.

[F11] [[def-gr-harmonic-gauge-and-reduced-equations]]: For a fixed smooth background metric $\bar g$, the harmonic-gauge vector is $H^a=g^{bc}(\Gamma^a{}_{bc}-\bar\Gamma^a{}_{bc})$ and the reduced Einstein equation is $\operatorname{Ric}_{ab}-\nabla_{(a}H_{b)}=\kappa(T_{ab}-\tfrac12Tg_{ab})+\Lambda g_{ab}$.

[F12] [[lem-emg-observer-field-decomposition]]: In an oriented future orthonormal tetrad $(\mathfrak n,\mathsf e_i)$, a two-form is uniquely reconstructed from $e_i=F(\mathsf e_i,\mathfrak n)$ and $b_i=\tfrac12\varepsilon_i{}^{jk}F(\mathsf e_j,\mathsf e_k)$, with $F_{0i}=-e_i$ and $F_{ij}=\varepsilon_{ijk}b_k$.

[F13] [[lem-emg-lorentz-hodge-calculus]]: In an oriented orthonormal coframe, $\star_ge^{01}=-e^{23}$ and $\star_ge^{23}=e^{01}$; for two-forms $({\star_gF})_{ab}=\tfrac12(\operatorname{vol}_g)_{abcd}F^{cd}$ and $d^2=0$.

[F14] [[def-riemannian-divergence]] and [[prop-coordinate-formula-for-riemannian-divergence]]: On an oriented Riemannian slice, $d(\iota_X\operatorname{vol}_h)=(\operatorname{div}_hX)\operatorname{vol}_h$.

[L1] [[lem-emg-fieldstrength-positive-symmetric-reduction]]: Current draft CP02 interface: for six electric/magnetic components on a spacelike foliation with lapse $\alpha>0$ and spatial metric $h>0$, the source-free evolution block is $P(\zeta)=\zeta(n)I_6+S(\zeta_\perp)$, where $C(\xi)v=\xi^\sharp\times v$ and $S(\xi)(u,v)=(-C(\xi)v,C(\xi)u)$; it is symmetric and has time matrix $\alpha^{-1}I_6$. Its actual carrier is now listed on the CP02 page but remains status draft with precheck pending. In CP03 the sourced current $j=cNZu$ is algebraic, so it enters as a lower-order source and leaves this principal block unchanged; this use remains conditional on the draft proof.

[L2] [[lem-emg-classical-maxwell-stress-identity]]: for a $C^1$ Lorentzian metric and $C^1$ closed two-form with continuous sourced divergence $\nabla_aF^{ab}=-\mu_0j^b$, the classical stress satisfies $\nabla^aT_{\mathrm{EM},ab}=-F_{bc}j^c$. This local proof requires no smooth-field hypothesis and includes the regularity established in step 2.1.

## Proof

**Proof technique:** direct symmetric-hyperbolic reduction, Maxwell subsidiary transport, and Einstein gauge recovery.

1.1 For the torus branch take the fixed flat background $\bar g=-dt^2+\delta_{ij}dx^idx^j$ on $(-\tau,\tau)\times\mathbb T^3_{2\pi}$; for the smooth branch shrink each initial chart to a relatively compact ball and use the same flat comparison metric there. At the initial slice set $g_{00}=-1$, $g_{0i}=0$, $g_{ij}=h_{ij}$, $p_{ij}=2K_{ij}$, $p_{00}=-2\operatorname{tr}_hK$, and $p_{0i}=h_{i\ell}h^{jk}\Gamma(h)^\ell{}_{jk}$. Since $\bar\Gamma=0$, the Christoffel formula gives $\Gamma^0{}_{00}=-p_{00}/2$ and $\Gamma^0{}_{ij}=K_{ij}$, so [F11] gives $H^0=g^{00}\Gamma^0{}_{00}+h^{ij}\Gamma^0{}_{ij}=\tfrac12p_{00}+\operatorname{tr}_hK=0$ and $H^\ell=-h^{\ell i}p_{0i}+h^{jk}\Gamma(h)^\ell{}_{jk}=0$ by direct contraction of the Christoffel formula. Set $q_{abi}=\partial_i g_{ab}$ from this initial metric. For torus data $h\in H^{s+1}$ implies $\Gamma(h),p_{0i}\in H^s$, so the full metric jet lies in $H^s$. On a relatively compact smooth-data patch the corresponding range is compact. On $\mathbb T^3$ use its fixed global coordinate frame and apply Gram–Schmidt at each current positive spatial metric state; the resulting frame depends smoothly on that metric state on the open cone of positive spatial blocks, rather than serving as a rough coefficient fixed in $x$. On arbitrary smooth $\Sigma$ use the same construction in local charts. Reconstruct $F_0$ uniquely from $(e,b)$ by [F12]. For the torus use the global fiber coordinates $y^i=u^i$ on the future unit-velocity hyperboloid; the normalization $g(u,u)=-1$ selects the positive root $u^0=\sqrt{1+h_{ij}u^iu^j}$ on the initial orthogonal slice, so these give a smooth state chart. On smooth patches use any local hyperboloid chart. Express $\epsilon_0$ in enthalpy coordinate $r$. The CP02 Maxwell block is the current draft interface [L1]: its source-free matrices are symmetric with positive time matrix, and the algebraic current in [F1] changes only its zero-order term. The metric and fluid blocks are [F2] and [F3]. Since the stress, current and Lorentz force are algebraic, the combined principal matrices are block diagonal and symmetric. The initial time matrices are positive; compactness of the initial state range and continuity give a compact neighborhood on which their smallest eigenvalues have a common positive lower bound. The metric derivative relations propagate by the reduced equations, the velocity coordinates preserve $g(u,u)=-1$ and future orientation, and the enthalpy change is invertible by [F3]. The regularity $h\in H^{s+1}$ and $K,e,b,\epsilon_0,u_0,Z_0\in H^s$ gives the complete first-order initial state in $H^s$. [F1, F2, F3, F11, F12, L1, algebra]

2.1 The reduced state has smooth coefficient maps on its open admissible state set, a compact initial range in that set, and a uniformly positive time matrix by step 1.1. Under A1 these are the hypotheses of [F5], which gives a local solution in the stated Sobolev class and a $C^1$ classical representative on a neighborhood of each initial point; compactness of $\mathbb T^3$ lets us shrink to one common cylinder. Since $s\ge5$, put $q=s-1\ge4$; then $q-2\ge2>3/2$, so [F15] with $m=2$ gives the state a representative continuous in time with two continuous spatial derivatives. The first-order system can be solved for $\partial_tW=\mathcal G(t,x,W,\partial_iW)$ because its time matrix is invertible; the coefficient map $\mathcal G$ is smooth on the admissible state set. The right side is continuously differentiable in the spatial variables, so $\partial_tW$ and its spatial derivatives are continuous. Differentiating this same equation in time then shows $\partial_t^2W$ is continuous as well. Thus the first-order state $W$ has the second derivatives required below. The relations $\partial_tg=p$ and $\partial_tq_i=\partial_ip$ propagate from their zero initial differences, so $q_i=\partial_i g$ and the metric regularity is $g\in L^\infty H^{s+1}\cap C^0H^s$, $\partial_tg\in L^\infty H^s\cap C^0H^{s-1}$. Since both $p$ and the $q_i$ are $C^2$ components of this first-order state and are actual metric derivatives, every third metric derivative is continuous: pure spatial derivatives come from $q_i$, and derivatives with a time slot from $p$. Thus $g\in C^3$, while $F,\epsilon,u,Z$ are $C^2$, and the original metric, Maxwell and fluid equations hold classically. [step 1.1, F5, F15, A1, algebra]

3.1 Put $U=dF$ and $V=d(\star_gF)-\mu_0\iota_j\operatorname{vol}_g$. The sourced Maxwell evolution equations imply $\iota_nU=\iota_nV=0$. By step 2.1, $g,F,j$ have enough regularity for $U,V$ to be $C^1$ and for $dU=d^2F=0$ and $dV=-\mu_0d(\iota_j\operatorname{vol}_g)$ to hold pointwise. The exact coordinate calculation underlying [F9] is $d(\iota_j\operatorname{vol}_g)=\partial_a(wj^a)\,dx^0\wedge\cdots\wedge dx^3=(\nabla_a j^a)\operatorname{vol}_g$, where $w=\sqrt{|\det g|}$; it uses only first derivatives and so applies to these $C^1$ fields. The product and chain calculations in [F4] likewise use only first derivatives, giving $\nabla_a j^a=0$. Therefore $dU=dV=0$. [step 2.1, F4, F9, algebra]

4.1 Since $U,V$ are spatial three-forms, there are unique $C^1$ scalars $q,r$ with $U=q\,\iota_n\operatorname{vol}_g$ and $V=r\,\iota_n\operatorname{vol}_g$. Applying the same coordinate current-form identity to $qn$ and $rn$ yields $n(q)+q\nabla_an^a=0$ and $n(r)+r\nabla_an^a=0$. In a positively oriented normal frame, [F12] and [F13] give $F|_\Sigma=\iota_b\operatorname{vol}_h$ and $(\star_gF)|_\Sigma=\iota_e\operatorname{vol}_h$. The Riemannian coordinate divergence formula [F14] then gives $i^*U=(\operatorname{div}_hb)\operatorname{vol}_h$. Also $i^*(\iota_j\operatorname{vol}_g)=-g(j,n)\operatorname{vol}_h$, so $i^*V=(\operatorname{div}_he+\mu_0g(j,n))\operatorname{vol}_h$. The initial Maxwell constraints make both pullbacks zero; since $i^*(\iota_n\operatorname{vol}_g)=\operatorname{vol}_h$, this gives $q=r=0$ on the initial slice. [step 3.1, F12, F13, F14, given, algebra]

5.1 Since the lapse is positive, $n^0=\alpha^{-1}>0$. The regularity established in step 2.1 makes $n$ at least $C^1$, so $n^i/n^0$ is locally Lipschitz in the spatial variables and $\nabla_an^a$ is continuous; these properties also hold for every smooth reduced solution. Parametrize each normal curve by coordinate time $t$, so $\gamma(t)=(t,x(t))$, $dx^i/dt=n^i/n^0$ and $\dot\gamma=n/n^0$. Existence and uniqueness in [F10], applied forward or backward on a sufficiently small compact coordinate cylinder, show that every point of a smaller neighborhood lies on exactly one such curve from the initial slice. Put $Q(t)=q(\gamma(t))$, $R(t)=r(\gamma(t))$ and $a(t)=((\nabla_an^a)/n^0)(\gamma(t))$. The chain rule and step 4.1 give $Q'+aQ=0$ and $R'+aR=0$. Since $a$ is continuous, $I(t)=\exp(\int_0^t a(s)\,ds)$ is positive and $C^1$, and $(IQ)'=(IR)'=0$. The initial constraints give $Q(0)=R(0)=0$, so $Q=R=0$ for both positive and negative $t$. Thus $q=r=0$, hence $U=V=0$ and both sourced Maxwell equations hold. [step 2.1, step 4.1, F10, L1, algebra]

6.1 Step 5.1 establishes the sourced Maxwell equations, so their classical regularity meets exactly the hypotheses of [L2]. The matter balance and advected-charge equation give the current lemma's unconditional conclusion $\nabla_aj^a=0$; adding its matter-stress divergence $F_{bc}j^c$ to the CP01 electromagnetic divergence $-F_{bc}j^c$ gives $\nabla^a(T_m+T_{\mathrm{EM}})_{ab}=0$. This establishes pre-Einstein conservation at the finite regularity already proved, without using the old smooth-only stress interface. [step 5.1, F1, F4, L2, algebra]

7.1 In the torus branch, the identity in [F6](a) follows pointwise from the reduced equation and trace algebra because $g$ is $C^2$ and $T_m+T_{\mathrm{EM}}$ is $C^1$. The contracted Bianchi identity used in the proof of [F6](b) extends distributionally at this regularity: on a relatively compact chart, smooth local mollifications of $g$ converge in $C^2$ and remain Lorentzian after shrinking; their Einstein tensors converge uniformly, so their smooth contracted Bianchi identities pass to distributions. The covariant-derivative commutator used in [F6](b) passes to distributions by the same local smoothing, since $H\in C^1$ and the connection is $C^1$. Thus taking the distributional divergence of [F6](a), using the zero stress divergence from step 6.1 and the commutator identity, gives $\Box_gH_b+\operatorname{Ric}_{ba}H^a=0$ distributionally. Step 1.1 gives $H=0$ on the initial slice, hence all tangential derivatives vanish. In an initial orthonormal frame $(n,\mathsf e_i)$ the trace identity then gives $E(n,n)=\tfrac12\nabla_nH_n$ and $E(n,\mathsf e_i)=\tfrac12\nabla_nH_i$; [F7] makes these zero, so $\partial_tH=0$ initially because $\partial_t=n$ there.  The universal Bianchi and trace-adjusted covector-divergence identities underlying [F6] depend only on the third metric jet, second harmonic-vector jet and first stress jet. At a fixed point these are exactly matched by smooth Taylor polynomials, with the polynomial metric Lorentzian nearby; their unrestricted coordinate identities therefore hold for the actual $C^3$ metric and classical fields too. Substitution of the actual reduced equation and conserved stress gives the same subsidiary equation, without replacing the solution by a smooth one. [step 1.1, step 6.1, F6, F7, algebra]

8.1 Step 2.1 gives $g\in C^3$, so the coordinate components $H_b$ are $C^2$. The classical subsidiary equation from step 7.1 therefore has the coordinate form $g^{ab}\partial_a\partial_bH+C^a\partial_aH+DH=0$, with bounded continuous matrix coefficients $C^a,D$ on a smaller closed time cylinder. Put $V=\partial_tH$, $W_i=\partial_iH$ and $Y=(H,V,W_i)$. Multiply the wave equation by $-1$, append $\partial_tH=V$ and $\partial_tW_i-\partial_iV=0$, and multiply the latter three equations by $g^{ji}$. This is a closed homogeneous first-order system $A^0\partial_tY+A^k\partial_kY+LY=0$ with $A^0=\operatorname{diag}(I,-g^{00}I,(g^{ij}I))$. Its nonzero spatial blocks are $A^k_{VV}=-2g^{0k}I$, $A^k_{V,W_j}=-g^{kj}I$ and $A^k_{W_i,V}=-g^{ik}I$; thus each $A^k$ is symmetric. All undifferentiated $H$ terms, including the Ricci term and the connection terms from expanding the covector wave operator, are included in $LY$. On a short cylinder $A^0\ge aI$ for some $a>0$, the principal coefficients are $C^1$ with bounded derivatives, and $L$ is bounded. Since $Y\in C^1$, differentiate $\mathcal E(t)=\int_{\mathbb T^3}Y^{\mathsf T}A^0Y\,dx$ and integrate the spatial terms by parts using periodicity to obtain $\mathcal E'=\int Y^{\mathsf T}(\partial_tA^0+\partial_kA^k-L-L^{\mathsf T})Y\,dx$, hence $|\mathcal E'|\le C\mathcal E$. Step 7.1 gives $H(0)=V(0)=0$ and therefore $W_i(0)=0$, so $\mathcal E(0)=0$. Applying an integrating factor forward in time and then to the reversed-time inequality gives $\mathcal E=0$ on both halves of the cylinder. Positivity yields $Y=0$, in particular $H=0$. The residual identity [F6](a) now gives $E_{ab}=0$, establishing the full Einstein equation. [step 7.1, step 1.1, step 2.1, step 6.1, F6, F7, algebra]

9.1 For smooth data on arbitrary $\Sigma$, the model is covariant and its complete matter data are the reconstructed $(F_0,\epsilon_0,u_0,Z_0)$. The first-order metric, field-strength, and fluid variables are initialized in step 1.1; the metric derivative relations and velocity constraint propagate there, while step 5.1 propagates Maxwell residual constraints and recovers both Maxwell equations. Step 6.1 supplies total-stress conservation before Einstein recovery, and the initial Einstein constraints are exactly [F7]. Thus the complete-data, positive symmetric reduction, auxiliary propagation, and pre-recovery conservation hypotheses of [F8] have all been checked. Under A1 and A2, [F8] gives the asserted smooth local development and data-fixing isometry. Its use remains conditional on the draft CP01/CP02 interfaces [L1]–[L2], and it gives no global-existence assertion. [step 1.1, step 5.1, step 6.1, F7, F8, A1, A2, L1, L2] ∎
