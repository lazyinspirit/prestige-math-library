---
id: thm-emg-local-high-sobolev-electrovacuum
kind: theorem
title: "Local high-Sobolev and smooth electrovacuum"
status: draft
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
  - lem-emg-maxwell-stress-conservation
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
  lem-emg-maxwell-stress-conservation: mathematical-premise
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

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$. Let $s\ge5$ be an integer, $\kappa>0$, $\mu_0>0$, and $\Lambda\in\mathbb R$. On $\mathbb T^3_{2\pi}=\mathbb R^3/(2\pi\mathbb Z)^3$, let $h\in H^{s+1}$ be a symmetric Riemannian metric with $h\ge c_0 I$ for some $c_0>0$, let $K\in H^s$ be a symmetric covariant two-tensor, and let $e,b\in H^s$ be spatial vector fields. Here $H^s$ is the real componentwise Fourier Sobolev space of [[def-emg-periodic-high-sobolev-state]]. Use the length coordinate $t=x^0=ct_{\rm SI}$, so $g,h$ are dimensionless, $K$ has units $\mathrm m^{-1}$, and $e=E/c$ and $b=B$ both have units tesla in an oriented orthonormal frame; $\kappa\mu_0^{-1}|e|^2$ has units $\mathrm m^{-2}$. Use the sign convention $K(X,Y)=g(\nabla_Xn,Y)$ for the future unit normal. Assume
$$D_ie^i=0,\qquad D_ib^i=0,\qquad R(h)+(\operatorname{tr}_hK)^2-|K|_h^2=2\Lambda+\frac{\kappa}{\mu_0}(|e|_h^2+|b|_h^2),\qquad D^jK_{ji}-D_i\operatorname{tr}_hK=-\frac{\kappa}{\mu_0}(e\times_h b)_i,$$
where $D$ is the Levi-Civita derivative of $h$. Then there are $T>0$ and a solution of the full source-free Einstein–Maxwell system on $(-T,T)\times\mathbb T^3$ with
$$g\in L^\infty H^{s+1}\cap C^0H^s,\qquad \partial_tg\in L^\infty H^s\cap C^0H^{s-1},\qquad F\in L^\infty H^s\cap C^0H^{s-1}.$$
The initial two-form is reconstructed by $F(n,\mathsf e_i)=-e_i$ and $F(\mathsf e_i,\mathsf e_j)=\epsilon_{ijk}b_k$; no independent Maxwell normal derivative is prescribed. The metric remains Lorentzian with spacelike $t$-levels in a fixed compact admissible state neighborhood. Smooth data give a smooth solution on the same base-order interval. For a fixed harmonic background, on any common local interval with the stated compact-state and uniform $H^s$ bounds, the harmonic-reduced first-order state is unique and continuously dependent on its initial state in $C^0H^{s-1}$. In addition, on any smooth oriented three-manifold, smooth constrained data with these same equations have a smooth full development in a neighborhood of each initial point. No endpoint regularity threshold, strong $C^0H^s$ stability, global continuation, or geodesic completeness is asserted.

## Facts & Assumptions

**Given:** Countable Choice, the constrained data and constants in the Statement, and a fixed smooth comparison metric $\bar g=-dt^2+\gamma$ with Levi-Civita connection $\bar\nabla$.

[L1] Draft definition [[def-emg-electrovacuum-cauchy-system]] fixes the source-free system $G+\Lambda g=\kappa\mu_0^{-1}Q(g,F)$, $dF=d\star_gF=0$, signature $(-,+,+,+)$ and $Q_{ab}=F_{ac}F_b{}^c-\tfrac14g_{ab}F_{cd}F^{cd}$. Its item file is listed in batch 6; its status is draft and its precheck is pending; this use is conditional on that draft.

[L2] Draft periodic-state definition [[def-emg-periodic-high-sobolev-state]] fixes the componentwise real Fourier $H^s(\mathbb T^3_{2\pi})$ norm, the metric/first-derivative/electric/magnetic state variables, and $\mathrm{AC}_\omega$. Its item file is listed in batch 6; its status is draft and its precheck is pending; this use is conditional on that draft.

[L3] Draft harmonic initialization [[lem-emg-fixed-smooth-background-harmonic-data]] chooses the initial metric jet relative to a fixed smooth positive background, with $g_{ij}=h_{ij}$, $g_{00}=-1$, $g_{0i}=0$, $\partial_0g_{ij}=2K_{ij}$ and the stated remaining derivatives so $H=0$. Its item file is listed in batch 6; its status is draft and its precheck is pending; this use is conditional on that draft.

[F1] [[lem-emg-coupled-reduced-einstein-evolution]] verifies the combined metric-wave and field-strength principal blocks. Its actual proof applies [[thm-emg-symmetric-hyperbolic-research-supplier]], whose draft file is listed in batch 6 but has precheck pending; the reduced local existence conclusion is therefore conditional.

[L5] Draft supplier [[thm-emg-symmetric-hyperbolic-research-supplier]]: for integer $s\ge5$, smooth periodic symmetric coefficient matrices and lower-order terms on an open state set, a uniformly positive time matrix on compact admissible neighborhoods, and bounded $H^s$ initial data with values in such a neighborhood, there is a common local solution with $L^\infty H^s\cap C H^{s-1}$ bounds, $\partial_tU\in L^\infty H^{s-1}$ and compact-state control. Its draft item file is listed in batch-6 inventory, with status draft and verification precheck pending; its stated argument is conditional, not accepted.

[F2] [[thm-emg-maxwell-gauss-propagation]] recovers both full Maxwell equations from $\iota_n dF=\iota_n d\star_gF=0$ and zero initial Gauss divergences when the metric, field and transverse future unit normal are $C^1$. The smooth coordinate time levels and the metric/field regularity established in proof 4.1 supply this explicit normal regularity.

[L4] Draft stress identity [[lem-emg-maxwell-stress-conservation]] gives $\nabla^aT_{ab}=-F_{bc}j^c$; with source-free current $j=0$, it gives $\nabla^aT_{ab}=0$. Its item file is listed in batch 6; its status is draft and its precheck is pending; this use is conditional.

[F3] [[thm-emg-einstein-gauge-propagation]] propagates the harmonic condition and recovers the full Einstein equation when the initial constraints and Maxwell stress conservation hold.

[F4] [[thm-gr-periodic-symmetric-hyperbolic-existence]] supplies the bounded-set common existence time and $L^\infty H^s\cap C H^{s-1}$ state regularity under AC$_\omega$. The inspected carrier is marked published, but its verification precheck remains pending.

[F5] [[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]] gives smooth persistence on the same interval for smooth data. The inspected carrier is marked published, but its verification precheck remains pending.

[F6] [[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]] gives uniqueness and continuous dependence in $H^{s-1}$ for classical periodic solutions with the stated common compact-state and $H^s$ bounds. Its actual statement includes AC$_\omega$ and a common existence-time hypothesis; the inspected carrier is marked published, but its verification precheck remains pending.

[F7] [[lem-gr-smooth-composition-and-commutator-estimates]] gives composition and product bounds on compact state sets; [[lem-gr-periodic-sobolev-algebra]] gives the $H^q$ algebra property for $q\ge4$; [[lem-gr-periodic-sobolev-embedding]] gives $H^q\hookrightarrow C^m$ when $q-m>3/2$.

## Proof

1.1 The constraints in the Statement are the normal projections and Maxwell Gauss constraints of the model [L1] under the stated $K,e,b$ conventions. Initialization [L3] gives $H=0$ and the compatible derivative variables $p=\bar\nabla_0g$, $q_i=\bar\nabla_i g$ on the initial slice. The initial state lies in $H^s$: $h\in H^{s+1}$ gives $q_i\in H^s$, $K,e,b\in H^s$, and the harmonic normal derivatives are in $H^s$ by the smooth composition estimates [F7] on the compact range of the uniformly positive $h$. Compactness of $\mathbb T^3$ and $h\ge c_0I$ place the initial state in a compact subset of the open admissible set. [given, L1, L2, L3, F7]

2.1 By [F1], the metric and Maxwell principal blocks are symmetric with positive time matrices and have no derivative coupling. At the initial orthogonal state $g^{00}<0$, $(g^{ij})>0$ and $\alpha>0$; these strict inequalities persist on a compact admissible state neighborhood, so the complete coefficient family meets the positivity and compact-state assumptions of [L5]. Applying that draft supplier conditionally gives the reduced solution and its $L^\infty H^s\cap C H^{s-1}$ and $\partial_tU\in L^\infty H^{s-1}$ bounds. The actual inspected generic existence theorem [F4] states the same periodic coefficient interface and is marked published with precheck pending; it is independent current support, not acceptance of the CP01 draft supplier. [step 1.1, F1, L5, F4, algebra]

3.1 The first-order metric equations impose $\bar\nabla_0g=p$ and $\bar\nabla_0q_i-\bar\nabla_ip=\mathcal C_i$, where $\mathcal C_i=[\bar\nabla_0,\bar\nabla_i]g$ is the fixed background-curvature commutator. For $Z_i=q_i-\bar\nabla_i g$, subtract the commutator identity for $g$ from the equation for $q_i$. The derivative-slot connection terms cancel and give a homogeneous linear ODE along each coordinate time line for $Z_i$; its initial value is zero by [L3], so uniqueness for a linear ODE gives $Z_i=0$. Thus $q_i=\bar\nabla_i g$ throughout the interval. [step 1.1, step 2.1, L3, F1, algebra]

4.1 The Fourier norm identity $\|g\|_{H^{s+1}}^2\asymp\|g\|_{H^s}^2+\sum_i\|\partial_i g\|_{H^s}^2$, together with step 3.1 and the smooth background coefficients, gives $g\in L^\infty H^{s+1}$. The same identity at one lower order and the $C H^{s-1}$ continuity of the first-order state give $g\in C H^s$. The tetrad reconstruction of $F$ is a smooth algebraic function of $(g,e,b)$ on the compact admissible state set; [F7] gives $F\in L^\infty H^s\cap C H^{s-1}$. For $s\ge5$, the reduced equation writes $U_t$ as a smooth expression in $(U,\partial_iU)$; since $U\in C H^{s-1}$, its right side is continuous in $H^{s-2}$. Thus $U_t\in C H^{s-2}$, and differentiating this expression once gives $U_{tt}\in C H^{s-3}$. At the base order $s=5$, these spaces are $H^3$ and $H^2$. The identities $p=\bar\nabla_0g$ and $q_i=\bar\nabla_i g$ then give the third spatial derivatives of $g$ from two spatial derivatives of $q$, the $t^2x$ derivatives from one spatial derivative of $p_t$, and $t^3$ derivatives from $p_{tt}$; the other derivatives of total order at most three follow directly from $p,q\in C H^4$ and $p_t\in C H^3$. Since $H^2(\mathbb T^3)\hookrightarrow C^0$, all these derivatives are continuous. The same smooth composition argument gives $F\in C^2$ from $(g,e,b)$, so the classical regularity required by [F2] and [F3] holds. [step 2.1, step 3.1, L2, F2, F3, F7, algebra]

5.1 Maxwell propagation [F2] now gives $dF=d\star_gF=0$. The conditional stress identity [L4] gives $\nabla^aT_{ab}=0$, so [F3] applies with the initial Einstein constraints and $H=0$ from [L3]; hence the reduced metric equation is the full Einstein equation. Smooth persistence [F5] applies to smooth data on the same interval. Finally, [F6] applies to any two reduced solutions on a common interval with these uniform compact-state and $H^s$ bounds and yields both uniqueness and the claimed $C H^{s-1}$ continuous-dependence estimate. [step 2.1, step 4.1, F2, F3, F5, F6, L3, L4]

6.1 (Local smooth data on an arbitrary slice.) Fix a point of a smooth initial three-manifold and choose an orthogonal spacetime chart over a relatively compact slice ball, with the prescribed smooth background connection. The initial harmonic state from [L3] and its admissibility inequalities take values, after shrinking the ball, in a convex finite-dimensional neighborhood whose closure lies in the open symmetric-hyperbolic state set. Extend the state by a smooth cutoff to a constant admissible state on a periodic three-torus; convexity keeps all values in that neighborhood. Extend the coefficient matrices by the same spatial cutoff, interpolating $A^0$ to the identity and each symmetric $A^i$ and the lower-order term to zero. The convex cone of positive matrices preserves a positive time matrix, and the spatial matrices remain symmetric. The conditional local solver in [F1] therefore gives a smooth reduced solution on a torus cylinder, which satisfies the original reduced equations wherever the cutoff is one. The derivative-definition relations remain valid along the time lines there, by the same homogeneous commutator ODE as step 3.1. The Maxwell divergence residuals vanish near the chosen point by the local flow argument of [F2]. The Einstein constraints and $H=0$ hold on the initial ball; the local cone-energy proof of [F3] therefore gives $H=0$ in a smaller domain of dependence. On that neighborhood the reduced solution solves the full source-free system. This proves the additional local existence clause without imposing constraints on the auxiliary extension outside the slice ball. [step 1.1, step 3.1, L3, F1, F2, F3, algebra] ∎
