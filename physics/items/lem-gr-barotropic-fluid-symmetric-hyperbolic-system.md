---
id: lem-gr-barotropic-fluid-symmetric-hyperbolic-system
kind: lemma
title: "The barotropic fluid equations in enthalpy form are symmetric hyperbolic with positive principal symbol"
status: published
origin: session
domain: mathematics
dependency_level: 14
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps: [def-gr-barotropic-enthalpy-variable, def-gr-perfect-fluid-matter-model, prop-gr-dust-and-perfect-fluid-conservation-equations, lem-gr-reduced-einstein-principal-part, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-metric-selected-connection, thm-gr-nondegenerate-levi-civita-and-tensor-derivative, def-ck-and-multi-index-notation-in-several-variables, def-c-r-and-smooth-maps-between-smooth-manifolds, def-countable-choice]
dependency_roles:
  def-gr-barotropic-enthalpy-variable: mathematical-premise
  def-gr-perfect-fluid-matter-model: mathematical-premise
  prop-gr-dust-and-perfect-fluid-conservation-equations: mathematical-premise
  lem-gr-reduced-einstein-principal-part: mathematical-premise
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-c-r-and-smooth-maps-between-smooth-manifolds: mathematical-premise
  def-countable-choice: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 4.2 (The Einstein-Euler System): the hyperbolic reduction of the Einstein-Euler system, the positivity conditions on specific enthalpy and speed of sound (4.38), the frame variables and their reduced equations, and the pressure-free (dust) subsidiary system of Sections 4.2.4-4.2.5, equations (4.26)-(4.48) and (4.56)-(4.63)"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "I. Rodnianski and J. Speck, The Stability of the Irrotational Euler-Einstein System with a Positive Cosmological Constant, arXiv:0911.5501 (v2, 2010), Sections 1 and 3: the Euler-Einstein system, the speed-of-sound hypotheses 0<cs<1 for a barotropic fluid (Postulate (4)), the sound cone and the wave-equation formulation of the fluid equations"
      url: "https://arxiv.org/pdf/0911.5501"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the enthalpy integral. Fix a smooth EOS $p=p(\epsilon)$ on an open interval $J$ satisfying $\epsilon+p>0$ and $0<p'(\epsilon)<1$. Fix the integration reference in the enthalpy variable $r$ of [[def-gr-barotropic-enthalpy-variable]], and put $c_s=\sqrt{p'}$. Let $u$ be the future unit fluid velocity, $D=\nabla_u$, $\vartheta=\nabla_a u^a$, $a=\nabla_u u$ and $\Pi^{ab}=g^{ab}+u^au^b$ ([[def-gr-perfect-fluid-matter-model]]). Then:

**(a)** The full fluid equations are equivalent to
$$Dr+c_s\vartheta=0,\qquad \nabla_u u^b+c_s\Pi^{ba}\partial_ar=0.$$
The fluid stress $T^{ab}=(\epsilon+p)u^au^b+pg^{ab}$ is divergence-free precisely when these fluid equations hold.

**(b)** For variations $\eta=(\delta r,\delta u)$ with $g(u,\delta u)=0$, the smooth symmetric principal bilinear form at a covector $\zeta$ is
$$Q_\zeta(\eta,\eta')=\zeta(u)\left[\delta r\delta r'+g(\delta u,\delta u')\right]+c_s\left[\delta r\zeta(\delta u')+\delta r'\zeta(\delta u)\right].$$
For every timelike covector positively evaluated on future timelike vectors, it is positive definite. In a rest orthonormal basis it has eigenvalues $\zeta(u)$ twice and $\zeta(u)\pm c_s|\zeta_\perp|$, where $\zeta=-\zeta(u)u^\flat+\zeta_\perp$. Smooth velocity coordinates turn this bilinear form into actual smooth symmetric coefficient matrices.

**(c)** Appending the harmonic reduced Einstein metric block gives a smooth coupled first-order symmetric hyperbolic family on a local open admissible state set, with zeroth-order coupling in derivatives of the first-order variables. In an initially orthogonal chart, complete fluid data are $(\epsilon_0,v_0)$ with $h(v_0,v_0)<1$, or the corresponding bundle velocity $U_0=W_0(N+v_0)$, $W_0=(1-h(v_0,v_0))^{-1/2}$ in $\mathbb RN\oplus T\Sigma$. Write the initial lapse as $\alpha_0:=\sqrt{-g^0_{00}}>0$, so orthogonality means $g^0_{0i}=0$ and $N=\alpha_0^{-1}\partial_t$. They initialize $r=r(\epsilon_0)$, $u^0=W_0/\alpha_0$ and $u^i=W_0v_0^i$. Normalization is enforced by reconstruction, and a reduced solution recovers the full fluid equations and conserved stress before imposing Einstein's unreduced equations. Every full fluid solution extracts to the same system. No vanishing-sound-speed or dust conclusion is asserted.

## Facts & Assumptions

**Given:** Countable Choice, the fixed strict EOS and enthalpy reference, the metric and unit future velocity, the chart, and complete fluid data where initialization is claimed.

[L1] $r'=c_s/(\epsilon+p)>0$; the enthalpy change of variables is a smooth diffeomorphism of open intervals ([[def-gr-barotropic-enthalpy-variable]], [[def-c-r-and-smooth-maps-between-smooth-manifolds]]).

[L2] Stress divergence decomposes into the energy and Euler equations, using unit normalization, metric compatibility and $\Pi$ projection ([[prop-gr-dust-and-perfect-fluid-conservation-equations]], [[def-gr-perfect-fluid-matter-model]], [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[L3] The reduced Einstein metric block is symmetric with positive time matrix $\operatorname{diag}(I,-g^{00}I,g^{ij}I)$ on its admissible chart state ([[lem-gr-reduced-einstein-principal-part]]).

[L4] The inverse metric and musical operations identify $u^\perp$ as a positive definite three-space, and a timelike covector with $\zeta(u)>0$ has $|\zeta_\perp|<\zeta(u)$ ([[def-gr-inverse-metric-and-musical-isomorphisms]], [[def-gr-metric-selected-connection]]).

## Proof

1.1 (Equations and conservation.) By [L1], $Dr=c_sD\epsilon/(\epsilon+p)$ and $c_s\partial_ar=p'\partial_a\epsilon/(\epsilon+p)$. Hence division by $\epsilon+p>0$ transforms the energy and Euler equations into the displayed enthalpy system, and the inverse transformation recovers them. Applying [L2] proves equivalence to stress conservation for every metric and normalized velocity, without requiring Einstein's equation. [given, L1, L2, algebra]

1.2 (Actual independent velocity coordinates.) Restrict a chart to the open metric states with $g_{00}<0$ and positive spatial metric block, as holds near its initially orthogonal surface. Use independent components $y^i=u^i$ and set $b=g_{0i}y^i$, $c=g_{ij}y^iy^j$. The future branch of the normalization equation is $$u^0=\frac{-b-\sqrt{b^2-g_{00}(1+c)}}{g_{00}}.$$ The discriminant is positive and $u^0>0$. It is smooth, and differentiating normalization gives $g(u,e_A)=0$ for $e_A=\partial u/\partial y^A$ at fixed metric. The spatial components of $e_A$ are the standard basis, so these three vectors are a smooth basis of $u^\perp$. This parametrizes all future unit velocities in the local chart. Terms from differentiating $u(g,y)$ with respect to $g$ multiply $\partial g$; the connection terms do likewise. When metric first-order variables are appended, all are zeroth-order sources in the full unknowns. [given, L4, algebra, construct]

2.1 (Smooth symmetric coefficient matrices.) In the leading part of step 1.1, $\partial_\mu u=e_B\partial_\mu y^B$ modulo the metric-derivative terms of step 1.2. Multiply the Euler vector equation by $g(e_A,\cdot)$. Its components together with the energy equation have coefficient matrices at $\partial_\mu$ with entries $$A^\mu_{rr}=u^\mu,\qquad A^\mu_{rB}=c_s e_B^\mu=A^\mu_{Br},\qquad A^\mu_{AB}=u^\mu g(e_A,e_B).$$ They are smooth and symmetric, and their covector contraction is exactly $Q_\zeta$ in the Statement. The Euler equation is tangent to $u^\perp$ because unit normalization is enforced, so taking its three $e_A$ components is equivalent to its full vector equation. Thus this is an actual equivalent coordinate system, not only a symbol computed in a different rest frame at each point. [step 1.1, step 1.2, L4, algebra]

3.1 (Positivity and eigenvalues.) For $a=\delta r$ and $v=\delta u\in u^\perp$, [L4] and Cauchy-Schwarz give $|\zeta(v)|\le|\zeta_\perp||v|$ and therefore $$Q_\zeta((a,v),(a,v))\ge\left(\zeta(u)-c_s|\zeta_\perp|\right)(a^2+|v|^2)>0.$$ The strict last inequality uses $c_s<1$ and $|\zeta_\perp|<\zeta(u)$. In a rest orthonormal basis the matrix has diagonal blocks $\zeta(u)$ and $\zeta(u)I_3$ and off-diagonal $c_s\zeta_\perp$. The two directions perpendicular to $\zeta_\perp$ give eigenvalue $\zeta(u)$, and the remaining two-dimensional block gives $\zeta(u)\pm c_s|\zeta_\perp|$. Thus the actual time matrix for the positively evaluated timelike time conormal is positive; after relatively compact shrinking its lower bound is uniform. [step 2.1, given, L4, algebra]

4.1 (Coupling, complete initialization and recovery.) Append [L3]'s metric block. Stress depends algebraically on $(g,r,y)$; the fluid metric derivatives from step 1.2 depend algebraically on the metric first-order variables, so the combined principal matrices remain block diagonal and symmetric. The time block is positive by step 3.1 and [L3]. At the initial orthogonal metric, the prescribed $v_0$ gives the normalized bundle velocity $U_0=W_0(N+v_0)$ and has coordinate components $u^0=W_0/\alpha_0$, $u^i=W_0v_0^i$, since $N=\alpha_0^{-1}\partial_t$. Indeed $g^0(U_0,U_0)=W_0^2(-1+h(v_0,v_0))=-1$. This initializes every independent fluid variable as stated. Reconstruction keeps $u$ unit and future; the smooth inverse enthalpy map and step 2.1 recover the full fluid equations on any reduced solution. Step 1.1 then gives conserved stress on that reduced metric before imposing Einstein recovery. Conversely every physical fluid solution transforms to these same equations and variables. All asserted conclusions follow. [step 1.1, step 1.2, step 2.1, step 3.1, L1, L3, algebra] ∎

## Remarks

Neither initial timelike normalization alone nor conservation of an unspecified stress tensor supplies a fluid evolution law. The fixed EOS, full velocity data and explicit reconstruction do so here. Dust has its own reduction.
