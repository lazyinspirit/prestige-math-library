---
id: lem-emg-local-potential-gauge
kind: lemma
title: Local potential homotopy and Lorenz gauge reachability
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
proof_strategy: constructive
deps: [def-countable-choice, def-emg-electrovacuum-cauchy-system, def-emg-lorentzian-forms, lem-emg-lorentz-hodge-calculus, prop-emg-potential-ricci-wave-identity, thm-gr-local-symmetric-hyperbolic-well-posedness, lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form, thm-gr-local-geodesics-and-exponential-map, thm-smooth-inverse-function-theorem-on-manifolds, lem-gr-parallel-transport-and-geodesic-speed, thm-differentiation-under-the-integral-sign-on-a-compact-rectangle, thm-gr-periodic-symmetric-hyperbolic-existence, thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-lorentzian-forms: mathematical-premise
  def-emg-electrovacuum-cauchy-system: mathematical-premise
  lem-emg-lorentz-hodge-calculus: mathematical-premise
  prop-emg-potential-ricci-wave-identity: mathematical-premise
  thm-gr-local-symmetric-hyperbolic-well-posedness: mathematical-premise
  lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form: mathematical-premise
  thm-gr-local-geodesics-and-exponential-map: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  lem-gr-parallel-transport-and-geodesic-speed: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-smooth-persistence: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Lecture Notes in Physics 540 (2000), section 5.4 and sections 3.1-3.2"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
      locator: "Section 5.4, printed pp. 83-84 (PDF pp. 82-83), states the source-free Maxwell equations, records that the closed-field equation is solved locally by a potential, and notes that nontrivial spacetime topology can obstruct a global potential. Sections 3.1-3.2 discuss symmetric-hyperbolic systems and local Cauchy theory. The explicit homotopy and gauge construction here is proved locally."
    - title: "H. S. Reall, Part III General Relativity, Cambridge lecture notes, October 12 2022 revision, sections 8.1 and 8.7"
      url: "https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      locator: "Sections 8.1 and 8.7 define differential forms and Stokes' theorem; the local homotopy and gauge wave are proved below."
verification:
  precheck: pending
---

## Statement

Let $U$ be a coordinate neighborhood whose image in $\mathbb R^4$ is star-shaped about the origin, and let $F$ be a smooth real two-form on $U$ with $dF=0$. In those coordinates define

$$A_a(x):=\int_0^1 t x^b F_{ba}(tx)\,dt.$$

Then $A$ is a smooth one-form on $U$ and $dA=F$ there. This is a local potential statement only.

For the gauge assertion, let $g$ be a smooth Lorentz metric on a neighborhood of a smooth spacelike hypersurface patch $S$, and let $A$ be a smooth one-form already defined on that neighborhood. Near each point of $S$ there is a smaller neighborhood and a smooth scalar $\chi$ such that

$$A':=A+d\chi,\qquad dA'=dA,\qquad \nabla^aA'_a=0.$$

Assume Countable Choice $\mathrm{AC}_\omega$ for the symmetric-hyperbolic supplier [[thm-gr-local-symmetric-hyperbolic-well-posedness]]. The gauge proof constructs local Gaussian-normal coordinates with $x^0=0$ on the slice, $g_{00}=-1$, $g_{0i}=0$, and $(g^{ij})$ positive definite. No global potential or global gauge choice is asserted. When the Lorenz condition is combined with the Maxwell equation for a potential, [[prop-emg-potential-ricci-wave-identity]] retains the Ricci term.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth oriented Lorentzian four-manifold, a coordinate star-shaped set, a smooth two-form $F$ with $dF=0$, and, for the gauge clause, a smooth Lorentz metric, smooth potential and smooth spacelike hypersurface patch.

[A1] [[def-countable-choice]]: the gauge existence argument adopts countable choice only as required by [F2].

[F1] [[lem-emg-lorentz-hodge-calculus]]: $d$ has components $2\partial_{[a}A_{b]}$ on one-forms and $d^2=0$.

[F2] [[thm-gr-local-symmetric-hyperbolic-well-posedness]]: under its $\mathrm{AC}_\omega$, integer $s\ge5$, coefficient-smoothness, positive-time-matrix and compact state-range hypotheses, the solution produced by the periodic existence theorem is $C^1$ near the initial point and solves the system there. Its statement does not claim smoothness for smooth data.

[F3] [[prop-emg-potential-ricci-wave-identity]]: for $F=dA$, $\nabla^aF_{ab}=\Box_gA_b-\nabla_b(\nabla^aA_a)-\operatorname{Ric}_{bc}A^c$.

[F4] [[lem-gr-spacelike-hypersurface-normal-and-second-fundamental-form]]: a smooth spacelike hypersurface has a smooth future unit normal $n$, with $g(n,n)=-1$ and $g(n,X)=0$ for tangent $X$.

[F5] [[thm-gr-local-geodesics-and-exponential-map]] and [[thm-smooth-inverse-function-theorem-on-manifolds]]: the geodesic flow depends smoothly on its initial point and velocity; a smooth map with invertible differential is a local diffeomorphism.

[F6] [[lem-gr-parallel-transport-and-geodesic-speed]]: along an affinely parametrized geodesic of the metric-compatible connection, $g(T,T)$ is constant.

[F7] [[def-emg-lorentzian-forms]]: the metric-selected connection is torsion-free and metric-compatible.

[F8] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]: for a continuous integrand on a compact parameter rectangle with a continuous spatial parameter derivative, the derivative passes under the Riemann integral; iteration applies to smooth integrands on compact subrectangles.

[F9] [[thm-gr-periodic-symmetric-hyperbolic-existence]]: for the smooth periodic coefficient family constructed in the proof, compact state sets $K=\{0\}\subset\operatorname{int}K'$, zero initial state and $R=0$, it supplies a common time interval and the Sobolev solution with its compact-state and norm bounds.

[F10] [[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]]: if that initial state is smooth, the same solution is smooth on the original existence interval.

[F11] For a smooth scalar $\chi$, define the metric wave operator by $\Box_g\chi:=\nabla^a\nabla_a\chi=g^{ab}(\partial_a\partial_b\chi-\Gamma^c{}_{ab}\partial_c\chi)$; here $\Gamma^c{}_{ab}$ are the Christoffel coefficients of $g$ in the chosen chart.

## Proof

1.1 Translate the coordinates so the star center is $0$. Differentiating under the integral gives $\partial_kA_a-\partial_aA_k=\int_0^1(2tF_{ka}(tx)+t^2x^b(\partial_kF_{ba}-\partial_aF_{bk})(tx))\,dt$. The coordinate identity $dF=0$ in [F1] gives $\partial_kF_{ba}-\partial_aF_{bk}=\partial_bF_{ka}$. The integrand is therefore $\frac{d}{dt}(t^2F_{ka}(tx))$, whose integral is $F_{ka}(x)$ because the lower endpoint is zero. Thus $dA=F$. On every compact coordinate rectangle around a point of $U$, the integrand and all its coordinate derivatives are continuous on the product with $[0,1]$; apply [F8] one derivative at a time to prove smoothness of $A$. [given, F1, F8, construct, algebra]

1.2 For a smooth scalar $\chi$, [F1] gives $d(A+d\chi)=dA+d^2\chi=dA$, and metric compatibility in [F7] gives $\nabla^a(A_a+\nabla_a\chi)=\nabla^aA_a+\Box_g\chi$. Hence the Lorenz condition is obtained by solving $\Box_g\chi=-\nabla^aA_a$ with zero initial value and zero initial normal derivative on a smaller spacelike patch. The operator is exactly the scalar operator defined in [F11]. [given, F1, F7, F11, algebra]

1.3 Fix $p\in S$. By [F4] the future unit normal $n_y$ varies smoothly in a slice neighborhood. By [F5] the geodesic flow $(t,y,v)\mapsto\gamma_{y,v}(t)$ is smooth near $(0,p,n_p)$, so $\Phi(t,y):=\gamma_{y,n_y}(t)$ is smooth. At $(0,p)$ its differential sends the time direction to $n_p$ and slice tangent vectors to themselves; these span $T_pM$, so [F5] makes $\Phi$ a coordinate chart after shrinking. Put $T=\partial_0$ and $J_i=\partial_i$. The geodesic equation gives $\nabla_TT=0$ and [F6] gives $g(T,T)=-1$. Since $[T,J_i]=0$, torsion-freeness in [F7] gives $\nabla_TJ_i=\nabla_{J_i}T$, so $\partial_0g(T,J_i)=g(\nabla_TT,J_i)+g(T,\nabla_TJ_i)=\tfrac12J_i(g(T,T))=0$. At $t=0$, $g(T,J_i)=g(n,J_i)=0$ by [F4]; hence $g_{0i}=0$ and $g_{00}=-1$ throughout the smaller chart. By continuity the spatial metric stays positive on a smaller relatively compact chart, so $(g^{ij})$ is positive definite. [F4, F5, F6, F7, construct, algebra]

2.1 Write $f=-\nabla^aA_a$, $p_0=\partial_0\chi$, and $q_i=\partial_i\chi$. Put $W^c:=g^{ab}\Gamma^c{}_{ab}$ and define the smooth lower-order term $L(p_0,q):=W^0p_0+\sum_iW^iq_i$. By [F11], $-\Box_g\chi=-g^{00}\partial_0p_0-2g^{0k}\partial_kp_0-g^{ij}\partial_iq_j+L(p_0,q)$. The wave equation $\Box_g\chi=f$, together with $\partial_0\chi=p_0$ and $\partial_0q_i=\partial_ip_0$, is therefore equivalent to $\partial_0\chi-p_0=0$, $-g^{00}\partial_0p_0-2g^{0k}\partial_kp_0-g^{ij}\partial_iq_j+L(p_0,q)=-f$, and $g^{ij}(\partial_0q_j-\partial_jp_0)=0$. In unknown order $(\chi,p_0,q_1,q_2,q_3)$, the time matrix is $A^0=\operatorname{diag}(1,-g^{00},(g^{ij}))$. The $k$th spatial matrix has $p_0,p_0$ entry $-2g^{0k}$, $p_0,q_j$ entry $-g^{kj}$, $q_i,p_0$ entry $-g^{ik}$, and all other principal entries zero, so it is symmetric. By the chart conditions, $A^0$ is positive definite on a smaller compact cylinder. [step 1.2, step 1.3, F7, F11, algebra]

3.1 Make a time-independent affine change of the spatial chart coordinates, if needed, so a relatively compact spatial box about $p$ identifies with a box $V_T\Subset(-\pi,\pi)^3$ in $\mathbb T^3_{2\pi}$. Transform the spatial principal matrices by the constant coordinate Jacobian; they remain symmetric. Choose an open time interval $I_0\ni0$ and, by step 2.1, a relatively compact cylinder $C\Subset I_0\times V_T$ on which the time matrix is positive definite. Take a smooth cutoff $\rho\in C_c^\infty(C)$ with $0\le\rho\le1$ and $\rho=1$ near $(0,p)$. Extend the cutoff products by zero to $I_0\times\mathbb T^3_{2\pi}$, set $A^0_{\rm ext}=\rho A^0+(1-\rho)I$ on $C$ and $A^0_{\rm ext}=I$ outside $C$, and set $A^k_{\rm ext}=\rho A^k$. For the unknown order $(\chi,p_0,q_1,q_2,q_3)$, the lower-order vector before cutoff is $B=(-p_0,L(p_0,q)+f,0,0,0)$; set $B_{\rm ext}=\rho B$. Both $A^0$ and $I$ are positive definite wherever the convex combination is used, so $A^0_{\rm ext}$ is positive definite everywhere; each $A^k_{\rm ext}$ remains symmetric. Smoothness of the cutoff products and compactness of their support give a uniform positive lower bound for $A^0_{\rm ext}$ on $I_0\times\mathbb T^3_{2\pi}$. Regard the unknown as $\mathbb R^5$-valued, use $O=\mathbb R^5$, $s=5$, $K=\{0\}$, $K'=\{u:|u|\le1\}$, $R=0$, and zero initial state. The extended coefficients form a smooth periodic family; by [F9] the periodic system has a solution on a common interval. By [F2] this solution is $C^1$ and solves the system pointwise near $(0,p)$. Its initial data are smooth, so [F10] makes that same solution smooth on the original common interval. On the intersection of this interval with the smaller cylinder where $\rho=1$, the coefficients and source agree with the unextended system, so restriction gives the required smooth local solution. [A1, F2, F9, F10, step 2.1, construct, algebra]

4.1 The invertible matrix $(g^{ij})$ in the last equations of step 2.1 gives $\partial_0q_i=\partial_ip_0$. Since initially $q_i=\partial_i\chi=0$ and $\partial_0\chi=p_0$, the difference $q_i-\partial_i\chi$ remains zero. Thus the middle equation in step 2.1 is exactly $\Box_g\chi=f$, and step 1.2 gives $\nabla^aA'_a=0$ near $p$. [step 1.2, step 2.1, step 3.1, algebra]

5.1 If $F=dA'$ also obeys the Maxwell divergence equation, [F3] and the Lorenz condition give its Ricci-coupled potential wave equation; no Ricci-flat cancellation is asserted. The construction in 1.1 is confined to its star-shaped chart and the gauge argument in 4.1 is local near each point of $S$, so neither supplies a global potential or gauge. This completes the local construction and scope assertion. [step 1.1, step 4.1, F3, algebra, discharge-construct] ∎
