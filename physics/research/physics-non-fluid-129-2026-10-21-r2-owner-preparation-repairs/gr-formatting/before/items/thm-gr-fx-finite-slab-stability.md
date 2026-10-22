---
id: thm-gr-fx-finite-slab-stability
kind: theorem
title: "Finite-slab stability in a fixed hyperbolic gauge"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - def-gr-fx-fixed-gauge-data-topology
  - thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability
  - thm-gr-periodic-symmetric-hyperbolic-existence
  - thm-gr-periodic-symmetric-hyperbolic-smooth-persistence
  - lem-gr-smooth-composition-and-commutator-estimates
  - lem-gr-positive-definite-symmetric-matrix-bounds
  - lem-gr-periodic-sobolev-embedding
  - lem-gr-galerkin-projection-properties
  - thm-gr-local-geometric-development
  - thm-gr-harmonic-constraint-propagation
  - thm-gr-constraint-equations-in-normal-frame
  - def-countable-choice
  - def-dependent-choice
  - thm-gr-smooth-maximal-globally-hyperbolic-development
  - thm-gr-barotropic-fluid-local-evolution
  - thm-gr-dust-local-evolution
dependency_roles:
  def-gr-fx-fixed-gauge-data-topology: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-existence: mathematical-premise
  thm-gr-periodic-symmetric-hyperbolic-smooth-persistence: mathematical-premise
  lem-gr-smooth-composition-and-commutator-estimates: mathematical-premise
  lem-gr-positive-definite-symmetric-matrix-bounds: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  lem-gr-galerkin-projection-properties: mathematical-premise
  thm-gr-local-geometric-development: mathematical-premise
  thm-gr-harmonic-constraint-propagation: mathematical-premise
  thm-gr-constraint-equations-in-normal-frame: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-gr-smooth-maximal-globally-hyperbolic-development: mathematical-premise
  thm-gr-barotropic-fluid-local-evolution: mathematical-premise
  thm-gr-dust-local-evolution: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), Section 3.1 and Remarks 1-6, Section 5.1 local constrained development, and Section 5.3 Cauchy Stability: energy, common-time dependence, reconstruction and finite-region gauge comparison"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "J. K. Hunter, Notes on Partial Differential Equations, UC Davis lecture notes, revised 18 June 2014, Chapter 8, Sections 8.1-8.3, Propositions 8.2-8.3, Definitions 8.4-8.5, Theorem 8.6 and Corollary 8.7: the energy identity and boundary-value scope"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    - title: "G. Métivier, The Mathematics of Nonlinear Optics (2009), Chapter 3, Sections 3.1 and 3.3–3.4: local symmetric-hyperbolic existence, energy estimates, Cauchy stability and continuation"
      url: "https://www.math.u-bordeaux.fr/~gmetivie/NLO2008.pdf"
verification:
  precheck: pending
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Dependent Choice. Fix $s\ge5$, a finite slab $J=[0,T]$ with $T>0$, a smooth periodic symmetric-hyperbolic coefficient family on an open state set $O$, and a fixed-gauge comparison context with $K_0\subset\operatorname{int}K_1\subset\operatorname{int}K_2\subset O$, a uniform positive time-matrix bound on $K_2$, and the separate state and time-derivative bounds $R_z,R_t$ of [[def-gr-fx-fixed-gauge-data-topology]]. Let $u,v$ be classical solutions in that context with state range in $K_1$, each with its own source $F_u,F_v\in C(J;H^{s-1})$ in the reduced system

$$A^0(t,x,u)\partial_tu+\sum_{i=1}^3A^i(t,x,u)\partial_i u+B(t,x,u)=F_u,$$

and the analogous equation for $v$. Then there is a constant $C>0$, depending only on the fixed coefficient family, compact state sets, positive time-matrix margin, $R_z$, $R_t$, $s$, and $T$, such that for every $t\in[0,T]$

$$\|u(t)-v(t)\|_{H^{s-1}}\le C e^{Ct}\left(\|u(0)-v(0)\|_{H^{s-1}}+\int_0^t\|F_u(r)-F_v(r)\|_{H^{s-1}}\,dr\right),$$

In particular, when both sources vanish, the finite-slab estimate holds for two solutions of the same reduced system. Fix a smooth reference solution on $J$ with state range in $K_0$ and bounded $H^s$ norm. There is an $H^s$ neighborhood of its initial value such that every smooth, admissible datum in that neighborhood has a solution of the same unforced system on all of $J$, with state range in $K_1$ and a common finite $H^s$ bound. The neighborhood size and bound may depend on the chosen slab and reference solution.

For the geometric interpretation, specialize to a fixed harmonic-gauge reduction of one covariant Einstein-matter model satisfying the complete-data initialization, smooth reconstruction, auxiliary-constraint propagation, and matter-conservation hypotheses of [[thm-gr-local-geometric-development]]. Take the initial hypersurface to be $\Sigma=\mathbb T^3_{2\pi}$, fix $\kappa>0$, $\Lambda\in\mathbb R$, a smooth Riemannian metric $h$ and smooth symmetric second fundamental form $K_{\rm ext}$, with $K_{\rm ext}(V,W)=g(\nabla_Vn,W)$ for the future unit normal. Let $\mathcal V=\mathbb RN\oplus T\Sigma$ be the abstract initial normal bundle with metric $g_0(aN+X,bN+Y)=-ab+h(X,Y)$, and let $T_0$ be the stress tensor computed from complete matter data $d$ on that bundle. Assume the initial state is the complete initialization of $(h,K_{\rm ext},d)$, the reconstructed metric remains time-oriented Lorentzian with every $t$-slice spacelike on $J$, and the initial harmonic gauge residual $H$ vanishes. Require the exact constraints

$$S_h+(\operatorname{tr}_hK_{\rm ext})^2-|K_{\rm ext}|_h^2=2\Lambda+2\kappa T_0(N,N),\qquad \operatorname{div}_hK_{\rm ext}-d\operatorname{tr}_hK_{\rm ext}=\kappa T_0(N,\cdot)$$

and every auxiliary compatibility condition hold. Assume the smooth reduced solution and its matter equations and conserved stress persist on $J$ under the same fixed reconstruction and branch. Then it reconstructs to a solution of the original Einstein-matter equations throughout the slab after the fixed-gauge identifications. For a pair of constrained data sets satisfying these hypotheses separately, this conclusion applies to each member of the pair. This is a mathematical model deduction conditional on those hypotheses; it asserts no uniform collar for noncompact initial surfaces.

## Statement references

[[def-countable-choice]]

[[def-dependent-choice]]

[[def-gr-fx-fixed-gauge-data-topology]]

[[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]]

[[thm-gr-periodic-symmetric-hyperbolic-existence]]

[[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]]

[[thm-gr-local-geometric-development]]

[[thm-gr-harmonic-constraint-propagation]]

[[thm-gr-constraint-equations-in-normal-frame]]

[[thm-gr-smooth-maximal-globally-hyperbolic-development]]

[[thm-gr-barotropic-fluid-local-evolution]]

[[thm-gr-dust-local-evolution]]

## Facts & Assumptions

**Given:** Countable Choice, Dependent Choice, the fixed finite-slab comparison context, one coefficient family and gauge, the stated solution and source regularity, common compact state ranges, the separate $H^s$ and time-derivative bounds $R_z,R_t$, and the positive lower bound for $A^0$.

[A1] The geometric application assumes the countable- and dependent-choice hypotheses used by the local development construction ([[def-countable-choice]], [[def-dependent-choice]]).

[F1] A fixed-gauge comparison context uses the same coefficient family and coordinate grid on the same torus; states belong to $L^\infty(J;H^s)\cap C^0(J;H^{s-1})$, with separate uniform bounds $R_z$ and $R_t$ on the state and its time derivative, and $A^0$ has the stated uniform positive lower bound ([[def-gr-fx-fixed-gauge-data-topology]]).

[F2] For the homogeneous periodic system, bounded $H^s$ solutions with values in a compact coefficient set are unique and satisfy an $H^{s-1}$ continuous-dependence estimate on each fixed compact time interval ([[thm-gr-periodic-symmetric-hyperbolic-uniqueness-stability]]).

[F3] Smooth coefficients on compact value sets have $H^{s-1}$ composition-difference and commutator bounds; the difference bound is proportional to the $H^{s-1}$ norm of the state difference, and spatial/time commutators have the orders stated in the supplier ([[lem-gr-smooth-composition-and-commutator-estimates]]).

[F4] A continuous positive-definite symmetric matrix family on a compact parameter set has uniform bounds $aI\le A^0\le bI$ for some $0<a\le b<\infty$ ([[lem-gr-positive-definite-symmetric-matrix-bounds]]).

[F5] For a compact admissible state set and bounded $H^s$ data, the periodic existence theorem gives a common positive local time and a uniform $H^s$ solution bound ([[thm-gr-periodic-symmetric-hyperbolic-existence]]).

[F6] For smooth data, the higher-order energy refinement bounds the $H^s$ norm on a finite interval from a bound on the lower $H^{s-1}$ norm; the proof gives $|E_s'|\le C_\rho(1+E_s)$ and the continuation argument uses the fixed local existence time ([[thm-gr-periodic-symmetric-hyperbolic-smooth-persistence]]).

[F7] On $\mathbb T^3_{2\pi}$, $H^{s-1}\subset C^0$ continuously for $s\ge5$ ([[lem-gr-periodic-sobolev-embedding]]).

[F8] For one fixed Einstein-matter model, complete constrained data satisfying the local reduction, compatibility, conservation and positivity hypotheses yield a local full development and data-fixing geometric uniqueness; this does not assert a uniform noncompact collar or global-in-time existence ([[thm-gr-local-geometric-development]]).

[F13] For a smooth harmonic-gauge reduced Einstein-matter solution with covariantly conserved stress, if the gauge residual vanishes and the normal Einstein constraints hold on a spacelike slice, then the residual vanishes and the full Einstein equations hold on a neighborhood of that slice ([[thm-gr-harmonic-constraint-propagation]]).

[F9] The strict-fluid local result requires $\epsilon+p>0$ and $0<p'(\epsilon)<1$, excluding shocks, vacuum boundaries and vanishing sound speed; the dust local result does not assert continuation past flow crossings ([[thm-gr-barotropic-fluid-local-evolution]], [[thm-gr-dust-local-evolution]]).

[F10] Fourier projections are self-adjoint, commute with derivatives, contract in each $H^q$, and have a uniform one-order tail bound ([[lem-gr-galerkin-projection-properties]]).

[F11] The maximal-development theorem asserts existence and maximality in the smooth globally hyperbolic class, with uniqueness up to a unique data-fixing isometry; its Statement gives no quantitative stability estimate uniform over arbitrarily long slabs ([[thm-gr-smooth-maximal-globally-hyperbolic-development]]).

[F12] The full initial constraints for $(h,K_{\rm ext},d)$ are the Hamiltonian and momentum equations with the stress tensor $T_0$ computed from the complete branch data, in the convention $K_{\rm ext}(V,W)=g(\nabla_Vn,W)$ ([[thm-gr-constraint-equations-in-normal-frame]]).

**Proof technique:** direct energy estimate and finite restart.

## Proof

1.1 Let $r=s-1$. By [F1] and compactness of $J\times\mathbb T^3_{2\pi}\times K_2$, all coefficient derivatives needed below are bounded and $A^0(u)$ is uniformly symmetric positive definite; [F4] gives equivalent weighted and unweighted $H^r$ norms. [given, F1, F4, algebra]

1.2 Put $w=u-v$ and $F=F_u-F_v$. Subtracting the two equations and adding and subtracting each coefficient evaluated at $u$ gives $A^0(u)\partial_tw+\sum_iA^i(u)\partial_iw=F+Q$, where $Q=-(A^0(u)-A^0(v))\partial_tv-\sum_i(A^i(u)-A^i(v))\partial_iv-B(u)+B(v)$. This is an identity: the coefficient-difference terms multiplying derivatives of $v$ and the difference of the zero-order terms are exactly the residual after the common principal operator is applied to $w$. [given, F1, algebra]

2.1 The composition-difference estimates in [F3], the state bound $\|v\|_{L^\infty H^s}\le R_z$, and the time-derivative bound $\|\partial_tv\|_{L^\infty H^r}\le R_t$ from [F1] imply $\|Q(t)\|_{H^r}\le C\|w(t)\|_{H^r}$. Solving the displayed difference equation for $\partial_tw$ with $(A^0(u))^{-1}$, whose operator norm is at most $a^{-1}$ by [F4], and using multiplier bounds at order $r-1$ from [F3] gives $\|\partial_tw(t)\|_{H^{r-1}}\le C(\|w(t)\|_{H^r}+\|F(t)\|_{H^{r-1}})$; here $\|\partial_iw\|_{H^{r-1}}\le\|w\|_{H^r}$. [step 1.2, F1, F3, F4, algebra]

3.1 Define $E(t)=\sum_{|\alpha|\le r}\int_{\mathbb T^3_{2\pi}}(D^\alpha w)^{\mathsf T}A^0(t,x,u)D^\alpha w\,dx$. Put $a=A^0(t,x,u)$, $a_i=A^i(t,x,u)$, $y_\alpha=D^\alpha w$, and $h=\partial_tw$. For $E_N:=\sum_{|\alpha|\le r}\int(P_Ny_\alpha)^{\mathsf T}a(P_Ny_\alpha)$, the finite Fourier sums $P_Nw$ are $C^1$ in time by classical regularity, and differentiation gives $E_N'=\sum_{|\alpha|\le r}(2\langle P_ND^\alpha h,aP_Ny_\alpha\rangle+\langle P_Ny_\alpha,\partial_ta\,P_Ny_\alpha\rangle)$. The one-order tail estimate [F10] gives $P_Ny_\alpha\to y_\alpha$ uniformly in $L^2$, since $w$ is bounded in $H^{r+1}$. Self-adjointness changes the first pairing to $\langle D^\alpha h,P_N(aP_Ny_\alpha)\rangle$. The product $ay_\alpha$ is uniformly bounded in $H^1$ by the Leibniz rule and uniform $C^1$ bound on $a$, so $\|P_N(aP_Ny_\alpha)-ay_\alpha\|_2\le\|a\|_\infty\|P_Ny_\alpha-y_\alpha\|_2+\|(P_N-I)(ay_\alpha)\|_2\to0$ uniformly on $J$. Because $D^\alpha h$ is uniformly bounded in $L^2$, the first pairings converge in $L^1(J)$; the quadratic pairings converge uniformly since $\partial_ta$ is bounded. Thus $E_N\to E$ uniformly and $E_N'\to\mathcal G$ in $L^1$, where $\mathcal G=\sum_{|\alpha|\le r}(2\langle D^\alpha h,ay_\alpha\rangle+\langle y_\alpha,\partial_ta\,y_\alpha\rangle)$. Passing to the limit in $E_N(t)-E_N(t')=\int_{t'}^tE_N'$ shows $E$ is absolutely continuous and $E'=\mathcal G$ almost everywhere. Differentiating the difference equation in space is an $L^2$ identity almost everywhere because $w\in L^\infty H^{r+1}$, $h\in L^\infty H^r$, and $F+Q\in L^\infty(J;H^r)$ by steps 1.2 and 2.1; periodicity gives no boundary term. [given, step 1.2, step 2.1, F1, F3, F10, algebra]

3.2 The derivatives of $A^\mu(t,x,u)$ are bounded on the fixed compact coefficient set. The $Q$ term is bounded by [step 2.1]; the commutator terms by [F3] and the $H^{r-1}$ bound on $\partial_tw$ from that step; and the forcing pairing $\sum_{|\alpha|\le r}\langle D^\alpha w,D^\alpha F\rangle$ by $\|w\|_{H^r}\|F\|_{H^r}$. Absorbing the quadratic lower-order terms with $2xy\le x^2+y^2$ while retaining the forcing pairing in mixed form, and using [F4] for energy equivalence, gives $E'(t)\le C E(t)+C\sqrt{E(t)}\|F(t)\|_{H^r}$ and $a\|w(t)\|_{H^r}^2\le E(t)\le b\|w(t)\|_{H^r}^2$ almost everywhere. The convergence established in step 3.1 justifies all time-derivative and commutator pairings. [step 2.1, step 3.1, F3, F4, F10, algebra]

3.3 For $\varepsilon>0$, set $Y_\varepsilon=(E+\varepsilon)^{1/2}$. Step 3.2 gives $Y_\varepsilon'\le (C/2)Y_\varepsilon+(C/2)\|F\|_{H^r}$, hence integration yields $Y_\varepsilon(t)\le e^{Ct/2}Y_\varepsilon(0)+(C/2)\int_0^t e^{C(t-r')/2}\|F(r')\|_{H^r}\,dr'$. Letting $\varepsilon\downarrow0$ and using the energy equivalence of step 3.2 gives the stated estimate after enlarging $C$ to absorb $\sqrt{b/a}$ and $C/2$. When $F=0$, it is the homogeneous estimate. [step 3.2, F4, algebra]

4.1 Fix a smooth reference solution $\bar u$ with state range in $K_0$. Compactness gives a positive distance $d$ from its range to the complement of $\operatorname{int}K_1$. Put $\rho:=1+\|\bar u\|_{C(J;H^r)}$ and take initial data in an $H^s$ ball of radius at most $1$ about $\bar u(0)$, so their $H^s$ norms have a common bound $R_0:=1+\|\bar u(0)\|_{H^s}$. On any solution interval where $\|u-\bar u\|_{C(H^r)}<1$, the lower norm is at most $\rho$. The high-order energy differential inequality in [F6], integrated from the initial slice and using this lower bound, gives one finite bound $M=M(R_0,\rho,T)$ for $\|u(t)\|_{H^s}$ throughout every such interval of existence; it continues to hold across uniqueness-glued restarts because the solution and its energy agree at each join. Choose $R_*>M$. Let $K_{\rm mid}$ be the closed state-space tube of radius $d/3$ about the reference range; it is compact and contained in $\operatorname{int}K_1$. Since the coefficient time interval is open and contains compact $J$, choose $\tau_0>0$ so every translate centered at $t_0\in J$ is defined on $[-\tau_0,\tau_0]$. On the resulting compact time-state set, all coefficient bounds used in the Galerkin proof of [F5] are uniform and $A^0\ge aI$. Apply that proof to each translated family $A^\mu(t_0+\sigma,x,z),B(t_0+\sigma,x,z)$ with input set $K_{\rm mid}$, output set $K_1$ and norm radius $R_*$. The common coefficient bounds, state margin and radius give one local time $\tau_*>0$, decreased if necessary so $\tau_*\le\tau_0$, and one solution bound $M_{\rm loc}$ independent of $t_0$. Smooth persistence [F6] gives smooth local solutions for the smooth restart data. [given, F5, F6, algebra]

4.2 Fix the comparison constant in step 3.3 using the bounds $R_*$ and the corresponding time-derivative bound supplied by the unforced equation, [F3] and [F4]. Choose the initial $H^s$ radius so small that this estimate keeps $\|u-\bar u\|_{C(J;H^r)}<\min\{1,d/(4C_{\rm emb})\}$, where $C_{\rm emb}$ is the embedding constant from [F7]. On every partial interval of existence, a first exit from either bootstrap bound is impossible: the strict estimate persists there, the state range lies in $K_{\rm mid}$, and step 4.1 bounds the $H^s$ norm strictly below $R_*$. If a constructed interval ends before $T$, its endpoint data therefore lie in $K_{\rm mid}$ with $H^s$ norm below $R_*$. Step 4.1 supplies a restarted solution on a time interval centered there, with $H^s$ norm at most $M_{\rm loc}$; the previous and restarted solutions overlap to the left of the restart time. Uniqueness [F2], applied with the common bound $\max\{R_*,M_{\rm loc}\}$, identifies them on that overlap. The same bootstrap bounds then continue on the restarted interval. Since $\tau_*>0$ is independent of the restart point, finitely many such restarts cover $J$. This proves the claimed neighborhood. [step 3.3, step 4.1, F2, F3, F4, F5, F6, F7, algebra]

5.1 For the fixed harmonic-gauge reduction in the geometric clause, let $H$ be its gauge residual and $E$ its Einstein residual. Define $P\subseteq[0,T]$ to consist of times at which $H=0$ and the normal Einstein constraints vanish on the whole slice $\{t\}\times\mathbb T^3_{2\pi}$. The given initial gauge condition and constraints put $0$ in $P$. At any $t_0\in P$, the reduced matter solution has conserved stress by the stated fixed-model hypotheses, so [F13] gives an open neighborhood of that entire slice on which $H=0$ and $E=0$. The torus slice is compact, hence this neighborhood contains all slices with $|t-t_0|<\varepsilon$ for some $\varepsilon>0$; thus $P$ is relatively open. If $t_n\in P$ converges to $t_0$, smoothness of the reduced metric, matter fields and their residuals makes $H=0$ and the normal constraint residuals zero at $t_0$, so $P$ is closed. At an endpoint use [F5] to extend the smooth reduced solution a short distance, and [F2] to identify it with the original solution on the overlap; this makes the same open-set argument valid there. Since $[0,T]$ is connected, $P=[0,T]$. The neighborhoods from [F13] therefore cover the slab, proving the original Einstein-matter equations throughout it. [given, step 4.2, A1, F2, F5, F8, F12, F13, algebra]

5.2 The constant and the number of restarts depend on the chosen finite $T$ and the fixed compact state margin. Neither the estimate nor the restart argument is uniform as $T\to\infty$; [F11] is only an existence/maximality and isometry-uniqueness statement. The strict-fluid and dust qualifications in [F9] remain active: shocks or vacuum boundaries and dust flow crossings lie outside the corresponding local branch. [step 4.2, F9, F11, algebra] ∎

## Remarks

For the SI interpretation, the time coordinate is the length coordinate $x^0=ct_{\rm phys}$ in metres and the torus coordinates are dimensionless angles. Metric components therefore carry the coordinate-dependent units $[g_{00}]=1$, $[g_{0i}]=\mathrm m$, and $[g_{ij}]=\mathrm m^2$; the state components are divided by fixed unit scales before their numerical Sobolev norms are formed, as specified in [[def-gr-fx-fixed-gauge-data-topology]]. This item proves an estimate for the mathematical coefficient fields in that fixed convention and makes no empirical assertion.

