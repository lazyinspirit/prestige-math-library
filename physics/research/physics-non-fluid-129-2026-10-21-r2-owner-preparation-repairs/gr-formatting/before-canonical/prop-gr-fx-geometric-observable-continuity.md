---
id: prop-gr-fx-geometric-observable-continuity
kind: proposition
title: "Continuity of finite-domain geometric observables"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
deps:
  - thm-gr-fx-finite-slab-stability
  - def-gr-fx-fixed-gauge-data-topology
  - lem-gr-periodic-sobolev-embedding
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - prop-coordinate-geodesic-equation
  - thm-gronwall-integral-inequality
  - def-gr-timelike-worldline-and-proper-time
dependency_roles:
  thm-gr-fx-finite-slab-stability: mathematical-premise
  def-gr-fx-fixed-gauge-data-topology: mathematical-premise
  lem-gr-periodic-sobolev-embedding: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  prop-coordinate-geodesic-equation: mathematical-premise
  thm-gronwall-integral-inequality: mathematical-premise
  def-gr-timelike-worldline-and-proper-time: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), Section 5.3: finite-region Cauchy stability in a fixed common gauge"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "J. K. Hunter, Notes on Partial Differential Equations, UC Davis lecture notes, revised 18 June 2014, Chapter 8, Sections 8.1 and 8.3: energy control for symmetric systems on fixed intervals"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
    - title: "G. Métivier, The Mathematics of Nonlinear Optics (2009), Chapter 3, Sections 3.3–3.4: finite-interval stability and continuation for symmetric-hyperbolic systems"
      url: "https://www.math.u-bordeaux.fr/~gmetivie/NLO2008.pdf"
verification:
  precheck: pending
---

## Statement

Let $s\ge5$ be an integer and let $J=[0,T]$, $T>0$, be a compact slab for one unforced smooth symmetric-hyperbolic reduction and the fixed gauge of [[def-gr-fx-fixed-gauge-data-topology]]. Let $z_n,z$ be classical solutions with the same coefficient family, gauge, matter branch and reconstruction rule. Assume their states lie in one compact admissible set, their $H^s$ and time-derivative norms have a common finite bound, and their initial data converge in $H^{s-1}$. Take $g_n,g$ to be the $g_{ab}$ components of those first-order states in the common coordinates. Then $g_n\to g$ in $C^1(J\times\mathbb T^3_{2\pi})$.

Fix a compact parameter interval $I=[a,b]$, a common coordinate chart $U$ with closure in $(0,T)\times\mathbb T^3_{2\pi}$, and a compact subset $K$ of its position-velocity phase space. If future timelike geodesics $\gamma_n:I\to M$ of $g_n$ have initial position-velocity data converging to those of a $g$-geodesic $\gamma$, and all the position-velocity lifts, including that of $\gamma$, stay in $K$, then $\gamma_n\to\gamma$ in $C^1(I)$ in chart components.

Finally, assume the curves are future timelike for their respective metrics, share the fixed time orientation and constant $c>0$ of [[def-gr-timelike-worldline-and-proper-time]], and have a uniform timelike margin
$$g_n(\dot\gamma_n(\lambda),\dot\gamma_n(\lambda))\le-\eta<0\qquad(n\ge1,\ \lambda\in I).$$
Then their proper times converge:
$$\frac1c\int_a^b\sqrt{-g_n(\dot\gamma_n,\dot\gamma_n)}\,d\lambda\longrightarrow\frac1c\int_a^b\sqrt{-g(\dot\gamma,\dot\gamma)}\,d\lambda.$$
All conclusions concern a fixed finite slab and a fixed coordinate gauge; they assert no uniformity as $T\to\infty$ and no identification of arbitrary coordinate representatives.

## Statement references

[[thm-gr-fx-finite-slab-stability]]

[[def-gr-fx-fixed-gauge-data-topology]]

[[lem-gr-periodic-sobolev-embedding]]

[[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]

[[prop-coordinate-geodesic-equation]]

[[thm-gronwall-integral-inequality]]

[[def-gr-timelike-worldline-and-proper-time]]

## Facts & Assumptions

**Given:** The same unforced fixed-gauge reduction on $J$, a common compact state range and $H^s$ bound, convergence of initial data in $H^{s-1}$, and the compactness and timelike hypotheses in the Statement.

[F1] On a fixed finite slab, two solutions of one fixed reduced system in a common bounded coefficient set satisfy an $H^{s-1}$ continuous-dependence estimate, with constants allowed to depend on the slab and coefficient bounds ([[thm-gr-fx-finite-slab-stability]]).

[F2] For $s\ge5$, $H^{s-1}(\mathbb T^3_{2\pi})$ embeds continuously into $C^2(\mathbb T^3_{2\pi})$ because $(s-1)-2>3/2$ ([[lem-gr-periodic-sobolev-embedding]]).

[F3] The Levi-Civita symbols are $\Gamma^a{}_{bc}=\tfrac12g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$ in a chart ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]).

[F4] In a chart, a smooth curve is a geodesic exactly when $\ddot x^k+\Gamma^k{}_{ij}(x)\dot x^i\dot x^j=0$ ([[prop-coordinate-geodesic-equation]]).

[F5] If $u(t)\le A+L\int_a^t u(r)\,dr$ with constant $A,L\ge0$, then $u(t)\le A\exp(L(t-a))$ ([[thm-gronwall-integral-inequality]]).

[F6] For a future timelike $C^1$ curve, proper time is $c^{-1}\int\sqrt{-g(\dot\gamma,\dot\gamma)}\,d\lambda$ ([[def-gr-timelike-worldline-and-proper-time]]).

**Proof technique:** finite-slab stability, Sobolev embedding and finite-dimensional ODE comparison.

## Proof

1.1 The finite-slab estimate [F1] with zero source difference gives $\|z_n-z\|_{C(J;H^{s-1})}\to0$ from convergence of the initial data. Since $s\ge5$, [F2] gives uniform convergence in space of the metric components and their first spatial derivatives; the first-order state includes $p_{ab}=\partial_0g_{ab}$ and $q_{abi}=\partial_i g_{ab}$, so those derivatives converge uniformly as well. Thus the metric components converge in $C^1$ on the compact spacetime slab. [given, F1, F2, algebra]

2.1 By [F3], the Christoffel functions are formed from the metric and its first derivatives by finite sums, products and inversion of the metric matrix. The metric matrices lie in a compact subset of the nonsingular Lorentzian matrices, so the adjugate-over-determinant formula bounds their inverses; step 1.1 therefore gives $\Gamma(g_n)\to\Gamma(g)$ uniformly. The uniform $H^s$ state and time-derivative bounds in the hypotheses, together with [F2], bound all second coordinate derivatives of the metric on every compact chart neighborhood: purely spatial derivatives come from the $H^s$ bounds for $q$, and derivatives involving $x^0$ come from $\partial_t p$ and $\partial_tq$, which are bounded in $H^{s-1}$. Thus the Christoffel functions and geodesic vector fields have uniformly bounded first derivatives on a compact neighborhood of the lift set. A finite cover by convex coordinate balls, together with boundedness of the vector fields for pairs outside a common ball, gives one Lipschitz constant on the compact lift set. The geodesic vector fields $G_n(x,v)=(v,-\Gamma(g_n)(x)[v,v])$ also converge uniformly there to $G$. [given, step 1.1, F2, F3, algebra]

2.2 Let $Y_n=(x_n,v_n)$ and $Y=(x,v)$ be the position-velocity lifts. By [F4] their chart components satisfy $\dot x=v$, $\dot v=-\Gamma(x)[v,v]$. Their integral equations and the common Lipschitz constant $L$ give $$|Y_n(\lambda)-Y(\lambda)|\le |Y_n(a)-Y(a)|+(b-a)\|G_n-G\|_\infty+L\int_a^\lambda|Y_n(r)-Y(r)|\,dr.$$ The first two terms form a constant $A_n\to0$. Apply [F5] to $u(\lambda)=|Y_n(\lambda)-Y(\lambda)|$ to get $\sup_I|Y_n-Y|\le A_n\exp(L(b-a))\to0$. Since $\dot x_n=v_n$, this is exactly $C^1$ convergence of the coordinate curves. [step 2.1, F4, F5, algebra]

3.1 On the common compact phase set, the velocities are uniformly bounded. Uniform metric convergence from step 1.1 and uniform curve/velocity convergence from step 2.2 imply $$g_n(\dot\gamma_n,\dot\gamma_n)\longrightarrow g(\dot\gamma,\dot\gamma)$$ uniformly on $I$. The limit therefore satisfies $g(\dot\gamma,\dot\gamma)\le-\eta$; because all curves use the same time orientation, the limit remains future timelike. The uniform margin places all numbers $-g_n(\dot\gamma_n,\dot\gamma_n)$ and their limit in a bounded interval $[\eta,M]$ with $\eta>0$. The square-root function is Lipschitz on this interval, so the proper-time integrands converge uniformly. Their integrals on the finite interval converge, and [F6] identifies them with the stated proper times. [step 1.1, step 2.2, F6, algebra] ∎ 