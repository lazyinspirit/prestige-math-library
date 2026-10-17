---
id: thm-emg-local-high-sobolev-electrovacuum
kind: theorem
title: "Local high-Sobolev and smooth electrovacuum"
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 6
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emg-electrovacuum-cauchy-system
  - def-emg-periodic-high-sobolev-state
  - lem-emg-fixed-smooth-background-harmonic-data
  - lem-emg-coupled-reduced-einstein-evolution
  - thm-emg-symmetric-hyperbolic-research-supplier
  - thm-emg-maxwell-gauss-propagation
  - thm-emg-einstein-gauge-propagation
  - lem-emg-classical-maxwell-stress-identity
  - thm-gr-periodic-symmetric-hyperbolic-existence
  - thm-gr-periodic-symmetric-hyperbolic-smooth-persistence
  - thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability
  - lem-gr-smooth-composition-and-commutator-estimates
  - lem-gr-periodic-sobolev-algebra
  - lem-gr-periodic-sobolev-embedding
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  def-emg-periodic-high-sobolev-state: mathematical-premise
  lem-emg-fixed-smooth-background-harmonic-data: mathematical-premise
  lem-emg-coupled-reduced-einstein-evolution: mathematical-premise
  thm-emg-symmetric-hyperbolic-research-supplier: mathematical-premise
  thm-emg-maxwell-gauss-propagation: mathematical-premise
  thm-emg-einstein-gauge-propagation: mathematical-premise
  lem-emg-classical-maxwell-stress-identity: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-smooth-persistence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  lem-gr-periodic-sobolev-algebra: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
sources:
  references:
    - title: "P. T. Chruściel, An introduction to the Cauchy problem for the Einstein equations, Roscoff lecture notes (2011), §1.6, printed pp. 23–25."
      url: "https://gravity.univie.ac.at/fileadmin/user_upload/i_gravity_physics/material/teaching/WS_2012/Roscoff.pdf"
    - title: "M. Alcubierre, J. C. Degollado and M. Salgado, The Einstein-Maxwell system in 3+1 form and initial data for multiple charged black holes, arXiv:0907.1151v2 (2009), §II and §II.C, printed pp. 3–9."
      url: "https://arxiv.org/pdf/0907.1151"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $s\ge5$ be an integer, $\kappa>0$, $\mu_0>0$, and $\Lambda\in\mathbb R$. Fix $L_0>0$ in metres and put $\Sigma=\mathbb T^3_{2\pi L_0}$ with length coordinates $X^i$. On $\Sigma$, let $h\in H^{s+1}$ be a symmetric Riemannian metric with $h\ge c_0 I$ for some $c_0>0$, let $K\in H^s$ be a symmetric covariant two-tensor, and let $e,b\in H^s$ be spatial vector fields. Sobolev membership means that the length-frame arrays $h_{ij},K_{ij}$ and oriented orthonormal arrays $e_A,b_A$, composed with $D_{L_0}:\mathbb T^3_{2\pi}\to\Sigma$, $[\theta]\mapsto[L_0\theta]$, belong to the real componentwise Fourier spaces of [[def-emg-periodic-high-sobolev-state]]; these are not tensor pullbacks. All spatial derivatives in the geometric equations are $\partial_{X^i}=L_0^{-1}\partial_{\theta^i}$. Use the length coordinate $t=x^0=ct_{\rm SI}$, so $g,h$ are dimensionless, $K$ has units $\mathrm m^{-1}$, and $e=E/c$ and $b=B$ both have units tesla in an oriented orthonormal frame; $\kappa\mu_0^{-1}|e|^2$ has units $\mathrm m^{-2}$. Use the sign convention $K(X,Y)=g(\nabla_Xn,Y)$ for the future unit normal. Assume
$$D_ie^i=0,\qquad D_ib^i=0,\qquad R(h)+(\operatorname{tr}_hK)^2-|K|_h^2=2\Lambda+\frac{\kappa}{\mu_0}(|e|_h^2+|b|_h^2),\qquad D^jK_{ji}-D_i\operatorname{tr}_hK=-\frac{\kappa}{\mu_0}(e\times_h b)_i,$$
where $D$ is the Levi-Civita derivative of $h$. Then there are $T>0$ and a solution of the full source-free Einstein–Maxwell system on $(-T,T)\times\Sigma$ with
$$g\in L^\infty H^{s+1}\cap C^0H^s,\qquad \partial_tg\in L^\infty H^s\cap C^0H^{s-1},\qquad F\in L^\infty H^s\cap C^0H^{s-1}.$$
The initial two-form is reconstructed by $F(n,\mathsf e_i)=-e_i$ and $F(\mathsf e_i,\mathsf e_j)=\epsilon_{ijk}b_k$; no independent Maxwell normal derivative is prescribed. The metric remains Lorentzian with spacelike $t$-levels in a fixed compact admissible state neighborhood. Smooth data give a smooth solution on the same base-order interval. For a fixed harmonic background, on any common local interval with the stated compact-state and uniform $H^s$ bounds, the harmonic-reduced first-order state is unique and continuously dependent on its initial state in $C^0H^{s-1}$. In addition, on any smooth oriented three-manifold, smooth constrained data with these same equations have a smooth full development in a neighborhood of each initial point. For finite-Sobolev data these equations mean their classical pointwise form at the $C^3$ metric and $C^2$ field regularity proved below; smoothness is asserted only for smooth initial data. No endpoint regularity threshold, strong $C^0H^s$ stability, global continuation, or geodesic completeness is asserted. Here an affinely parametrized metric geodesic solves $\ddot x^a+\Gamma^a{}_{bc}\dot x^b\dot x^c=0$ on an interval; a maximal such solution admits no extension to a larger interval with the same affine parameter. Geodesic completeness means every maximal affine solution has parameter domain all of $\mathbb R$.

## Facts & Assumptions

**Given:** Countable Choice, the constrained data and constants in the Statement, and a fixed smooth comparison metric $\bar g=-dt^2+\gamma$ with Levi-Civita connection $\bar\nabla$.

[L1] Draft definition [[def-emg-electrovacuum-cauchy-system]] fixes the source-free system $G+\Lambda g=\kappa\mu_0^{-1}Q(g,F)$, $dF=d\star_gF=0$, signature $(-,+,+,+)$ and $Q_{ab}=F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd}$. Its item file is listed in batch 6; its status is draft and its precheck is pending; this use is conditional on that draft.

[L2] Draft periodic-state definition [[def-emg-periodic-high-sobolev-state]] fixes the componentwise real Fourier $H^s(\mathbb T^3_{2\pi})$ norm, the metric/first-derivative/electric/magnetic state variables, and $\mathrm{AC}_\omega$. Its item file is listed in batch 6; its status is draft and its precheck is pending; this use is conditional on that draft.

[L3] Draft harmonic initialization [[lem-emg-fixed-smooth-background-harmonic-data]] chooses the initial metric jet relative to a fixed smooth positive background, with $g_{ij}=h_{ij}$, $g_{00}=-1$, $g_{0i}=0$, $\partial_0g_{ij}=2K_{ij}$ and the stated remaining derivatives so $H=0$. Its item file is listed in batch 6; its status is draft and its precheck is pending; this use is conditional on that draft.

[F1] [[lem-emg-coupled-reduced-einstein-evolution]] verifies the combined metric-wave and field-strength principal blocks. Its actual proof applies [[thm-emg-symmetric-hyperbolic-research-supplier]], whose draft file is listed in batch 6 but has precheck pending; the reduced local existence conclusion is therefore conditional.

[L5] Draft supplier [[thm-emg-symmetric-hyperbolic-research-supplier]]: for integer $s\ge5$, smooth periodic symmetric coefficient matrices and lower-order terms on an open state set, a uniformly positive time matrix on compact admissible neighborhoods, and bounded $H^s$ initial data with values in such a neighborhood, there is a common local solution with $L^\infty H^s\cap C H^{s-1}$ bounds, $\partial_tU\in L^\infty H^{s-1}$ and compact-state control. Its draft item file is listed in batch-6 inventory, with status draft and verification precheck pending; its stated argument is conditional, not accepted.

[F2] [[thm-emg-maxwell-gauss-propagation]] recovers both full Maxwell equations from $\iota_n dF=\iota_n d\star_gF=0$ and zero initial Gauss divergences when the metric, field and transverse future unit normal are $C^1$. The smooth coordinate time levels and the metric/field regularity established in proof 4.1 supply this explicit normal regularity.

[L4] [[lem-emg-classical-maxwell-stress-identity]] proves the sourced identity $\nabla^aT_{ab}=-F_{bc}j^c$ for a $C^1$ Lorentzian metric and $C^1$ closed two-form with continuous $j$ satisfying $\nabla_aF^{ab}=-\mu_0j^b$. Thus its exact regularity hypotheses are met here. The exact source-free conversion is, with $\varepsilon_{abcd}:=(\mathrm{vol}_g)_{abcd}$ and indices raised by $g^{-1}$, $$\nabla_aF^{ab}=\frac1{3!}\varepsilon^{bacd}(d\star_gF)_{acd}=\frac1{\sqrt{|\det g|}}\partial_a\bigl(\sqrt{|\det g|}F^{ab}\bigr).$$ The first equality follows by expanding $d\star_gF=3\nabla_{[a}(\star_gF)_{cd]}$, using metric-compatibility $\nabla_a\varepsilon_{bcde}=0$, $({\star_gF})_{cd}=\tfrac12\varepsilon_{cdef}F^{ef}$ and $\varepsilon^{bacd}\varepsilon_{cdef}=-2(\delta^b_e\delta^a_f-\delta^b_f\delta^a_e)$; the second follows from $\Gamma^a{}_{ac}=\partial_c\log\sqrt{|\det g|}$ and $\Gamma^b{}_{ac}F^{ac}=0$. Hence $d\star_gF=0$ implies the divergence equation with $j=0$, and the model's $dF=0$ supplies the other hypothesis.

[F3] [[thm-emg-einstein-gauge-propagation]] propagates the harmonic condition and recovers the full Einstein equation when the initial constraints and Maxwell stress conservation hold.

[F4] [[thm-gr-periodic-symmetric-hyperbolic-existence]] supplies the bounded-set common existence time and $L^\infty H^s\cap C H^{s-1}$ state regularity under AC$_\omega$. The inspected carrier is marked published, but its verification precheck remains pending.

[F5] [[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]] gives smooth persistence on the same interval for smooth data. The inspected carrier is marked published, but its verification precheck remains pending.

[F6] [[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]] gives uniqueness and continuous dependence in $H^{s-1}$ for classical periodic solutions with the stated common compact-state and $H^s$ bounds. Its actual statement includes AC$_\omega$ and a common existence-time hypothesis; the inspected carrier is marked published, but its verification precheck remains pending.

[F7] [[lem-gr-smooth-composition-and-commutator-estimates]] gives composition and product bounds on compact state sets; [[lem-gr-periodic-sobolev-algebra]] gives the $H^q$ algebra property for $q\ge4$; [[lem-gr-periodic-sobolev-embedding]] gives $H^q\hookrightarrow C^m$ when $q-m>3/2$.

## Proof

1.1 The constraints in the Statement are the normal projections and Maxwell Gauss constraints of the model [L1] under the stated $K,e,b$ conventions. Initialization [L3] gives $H=0$ and the compatible derivative variables $p=\bar\nabla_0g$, $q_i=\bar\nabla_i g$ on the initial slice. The initial state lies in $H^s$: $h\in H^{s+1}$ gives $q_i\in H^s$, $K,e,b\in H^s$, and the harmonic normal derivatives are in $H^s$ by the smooth composition estimates [F7] on the compact range of the uniformly positive $h$. Compactness of $\mathbb T^3$ and $h\ge c_0I$ place the initial state in a compact subset of the open admissible set. [given, L1, L2, L3, F7]

1.2 (Endpoint product and composition estimates.) Put $\langle k\rangle=(1+|k|^2)^{1/2}$. For integer $m\in\{2,3\}$, the inequality $\langle k\rangle^m\le 2^{m-1}(\langle\ell\rangle^m+\langle k-\ell\rangle^m)$ and the convolution formula for Fourier coefficients give $$\|uv\|_{H^m}\le C_m\bigl(\|\langle k\rangle^m\widehat u\|_{\ell^2}\|\widehat v\|_{\ell^1}+\|\widehat u\|_{\ell^1}\|\langle k\rangle^m\widehat v\|_{\ell^2}\bigr).$$ Cauchy–Schwarz gives $\|\widehat u\|_{\ell^1}\le(\sum_k\langle k\rangle^{-2m})^{1/2}\|u\|_{H^m}$, and the weight sum is finite in dimension three for $m\ge2$; the analogous bound holds for $v$. Young's convolution inequality (or the triangle inequality in $\ell^2$ followed by summation in $\ell^1$) therefore proves the algebra estimate in both $H^2$ and $H^3$. For a smooth finite-dimensional map $G$ on a neighborhood of a compact value set, Fourier approximation and the chain rule through order three show that $G(Z)\in H^3$ when $Z\in H^3$: the terms are bounded-coefficient multiples of $D^\alpha Z$, products $DZ\,D^2Z$, or products of at most three first derivatives; $H^3\hookrightarrow C^1$ places first derivatives in $L^\infty$ and the highest derivatives in $L^2$. The same expansions show continuity under strong $H^3$ convergence, since $H^3\hookrightarrow C^1$ gives uniform convergence of the coefficients and first derivatives while higher derivatives converge in $L^2$. This also covers smooth dependence on $(t,x)$ on a compact coefficient-time slab. Together with the supplied estimates at orders $H^k$ for $k\ge4$ in [F7], these are the endpoint estimates needed below. [L2, F7, algebra]

2.1 Compose the length-frame state components with $D_{L_0}$. Replacing each $\partial_{X^i}$ by $L_0^{-1}\partial_{\theta^i}$ multiplies its symmetric spatial matrix by the fixed positive scalar $L_0^{-1}$ and preserves smoothness and the positive time matrix. By [F1], the metric and Maxwell principal blocks are symmetric with positive time matrices and have no derivative coupling. At the initial orthogonal state $g^{00}<0$, $(g^{ij})>0$ and $\alpha>0$; these strict inequalities persist on a compact admissible state neighborhood, so the complete coefficient family meets the positivity and compact-state assumptions of [L5]. Applying that draft supplier conditionally gives the reduced solution and its $L^\infty H^s\cap C H^{s-1}$ and $\partial_tU\in L^\infty H^{s-1}$ bounds. The actual inspected generic existence theorem [F4] states the same periodic coefficient interface and is marked published with precheck pending; it is independent current support, not acceptance of the CP01 draft supplier. [step 1.1, F1, L5, F4, algebra]

3.1 The first-order metric equations impose $\bar\nabla_0g=p$ and $\bar\nabla_0q_i-\bar\nabla_ip=\mathcal C_i$, where $\mathcal C_i=[\bar\nabla_0,\bar\nabla_i]g$ is the fixed background-curvature commutator. For $Z_i=q_i-\bar\nabla_i g$, subtract the commutator identity for $g$ from the equation for $q_i$. The derivative-slot connection terms cancel and give a homogeneous linear ODE along each coordinate time line for $Z_i$; its initial value is zero by [L3], so uniqueness for a linear ODE gives $Z_i=0$. Thus $q_i=\bar\nabla_i g$ throughout the interval. [step 1.1, step 2.1, L3, F1, algebra]

4.1 (Third-order spacetime regularity.) The Fourier norm identity $\|g\|_{H^{s+1}}^2\asymp\|g\|_{H^s}^2+\sum_i\|\partial_i g\|_{H^s}^2$, together with step 3.1 and the smooth background coefficients, gives $g\in L^\infty H^{s+1}$. The same identity at one lower order and the $C H^{s-1}$ continuity of the first-order state give $g\in C H^s$. The tetrad reconstruction of $F$ is a smooth algebraic function of $(g,e,b)$ on the compact admissible state set; [F7] gives $F\in L^\infty H^s\cap C H^{s-1}$. Solve the reduced system as $U_t=\mathcal R(t,x,U,\partial_iU)$ with $\mathcal R$ smooth on the compact admissible range. For every $s\ge5$, $U\in C H^{s-1}$ and $\partial_iU\in C H^{s-2}$; the composition estimates of [F7] at orders at least four and step 1.2 at orders two and three give $U_t\in C H^{s-2}$. Differentiating this identity in time, justified by Fourier approximation and the same chain/product estimates, gives $$U_{tt}=\partial_t\mathcal R(t,x,U,\partial U)+D_U\mathcal R(t,x,U,\partial U)U_t+D_{\partial U}\mathcal R(t,x,U,\partial U)\partial U_t.$$ Its coefficient maps lie in $C H^{s-2}$, while $\partial U_t\in C H^{s-3}$; the algebra estimates of [F7] for orders at least four and of step 1.2 for orders two and three imply $U_{tt}\in C H^{s-3}$. At the base order $s=5$, these spaces are $H^3$ and $H^2$, and for $s=6$ the lower product order is $H^3$, also covered by step 1.2. The identities $p=\bar\nabla_0g$ and $q_i=\bar\nabla_i g$ then give all third spatial derivatives of $g$ from two spatial derivatives of $q$, the $t^2x$ derivatives from one spatial derivative of $p_t$, and $t^3$ derivatives from $p_{tt}$; the other derivatives of total order at most three follow directly from $p,q\in C H^4$ and $p_t\in C H^3$. Since $H^2(\mathbb T^3)\hookrightarrow C^0$, all these derivatives are continuous. The same smooth composition argument gives $F\in C^2$ from $(g,e,b)$, so the classical regularity required by [F2] and [F3] holds. [step 2.1, step 3.1, step 1.2, L2, F2, F3, F7, algebra]

5.1 Maxwell propagation [F2] now gives $dF=d\star_gF=0$. The exact Hodge-to-divergence identity in [L4] converts the second equation to $\nabla_aF^{ab}=0$, so the stress supplier applies with $j=0$ and gives $\nabla^aT_{ab}=0$. Thus [F3] applies with the initial Einstein constraints and $H=0$ from [L3]; hence the reduced metric equation is the full Einstein equation. Smooth persistence [F5] applies to smooth data on the same interval. Finally, [F6] applies to any two reduced solutions on a common interval with these uniform compact-state and $H^s$ bounds and yields both uniqueness and the claimed $C H^{s-1}$ continuous-dependence estimate. [step 2.1, step 4.1, F2, F3, F5, F6, L3, L4]

6.1 (Local smooth data on an arbitrary slice.) Fix a point of a smooth initial three-manifold and a relatively compact slice chart. Choose local product coordinates $(x^0,x^i)$ with $x^0=0$ on the slice and $\partial_0=n$ there. Choose a smooth positive spatial background $\gamma$ in this chart and put $Q^i:=h^{jk}(\Gamma(h)^i{}_{jk}-\Gamma(\gamma)^i{}_{jk})$. Prescribe the local metric jet by $g_{ij}=h_{ij}$, $g_{00}=-1$, $g_{0i}=0$, $\partial_0g_{ij}=2K_{ij}$, $\partial_0g_{00}=-2\operatorname{tr}_hK$, and $\partial_0g_{0i}=h_{ij}Q^j$, relative to the fixed product background $\bar g=-(dx^0)^2+\gamma_{ij}(x)dx^idx^j$. The Christoffel formula gives $H^0=-\operatorname{tr}_hK+\operatorname{tr}_hK=0$ and $H^i=-Q^i+h^{jk}(\Gamma(h)^i{}_{jk}-\Gamma(\gamma)^i{}_{jk})=0$ on the slice. These smooth local data, including the auxiliary derivative variables, take values after shrinking in a convex finite-dimensional neighborhood whose closure lies in the open symmetric-hyperbolic state set. Extend $\gamma$ to a smooth positive metric on a periodic three-torus, agreeing on a smaller ball, by interpolating with a flat metric through the convex cone of positive matrices. Extend the state by a smooth cutoff to a constant admissible state; convexity keeps all values in that neighborhood. Extend the coefficient matrices by the same spatial cutoff, interpolating $A^0$ to the identity and each symmetric $A^i$ and the lower-order term to zero. The convex cone of positive matrices preserves a positive time matrix, and the spatial matrices remain symmetric. The conditional local solver in [F1] therefore gives a smooth reduced solution on a torus cylinder, which satisfies the original reduced equations wherever the cutoff is one. The derivative-definition relations remain valid along the time lines there, by the same homogeneous commutator ODE as step 3.1. The Maxwell divergence residuals vanish near the chosen point by the local flow argument of [F2]. The Einstein constraints and $H=0$ hold on the initial ball; the local cone-energy proof of [F3] therefore gives $H=0$ in a smaller domain of dependence. On that neighborhood the reduced solution solves the full source-free system. This proves the additional local existence clause without imposing constraints on the auxiliary extension outside the slice ball. [step 1.1, step 3.1, F1, F2, F3, algebra] ∎
