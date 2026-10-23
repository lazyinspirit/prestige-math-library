---
id: thm-fd-controlled-euler-passage
kind: theorem
title: Euler equations under weighted local-equilibrium convergence
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - def-fd-kinetic-density
  - def-fd-elastic-collision-measure
  - prop-fd-kinetic-moment-balances
  - prop-fd-maxwellian-moments
  - lem-smooth-bump-between-concentric-euclidean-balls
  - thm-integration-by-parts
dependency_roles:
  def-fd-kinetic-density: mathematical-premise
  def-fd-elastic-collision-measure: mathematical-premise
  prop-fd-kinetic-moment-balances: mathematical-premise
  prop-fd-maxwellian-moments: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
  thm-integration-by-parts: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, §§3.1–3.2 (context only)"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
    - title: "Nicola Zamponi, From the Boltzmann Equation to Hydrodynamic Models, §3.2, pp. 11–12"
      url: "https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/lecture_notes/LectureNotes-Prague-2017.pdf"
verification:
  precheck: pending
---

## Statement

Let $T_*>0$ seconds, let $L_1,L_2,L_3>0$ be fixed spatial periods in metres, and set $\Omega=\prod_{j=1}^3(\mathbb R/L_j\mathbb Z)$. Give $\Omega$ the completed unnormalised pushforward $dx$ of Lebesgue measure on $C=\prod_j[0,L_j)$ under the quotient map, as in the kinetic-density definition. Let $v_*=1\,\mathrm{m\,s^{-1}}$. For $k=2,3$ put
$$\omega_k(v):=\sum_{j=0}^k(|v|/v_*)^j.$$
Let $Q_{\rm el}=\{(v,w,v',w')\in\mathbb R^{12}:v+w=v'+w',\ |v|^2+|w|^2=|v'|^2+|w'|^2\}$ be the elastic collision set, and use the nonnegative countably additive symmetric collision measure $\nu$ and operator $Q_\nu:\mathcal D_\nu\to L^1_{\rm loc}$ specified in the earlier elastic-collision definition; the three particle-exchange and incoming/outgoing invariances are hypotheses on $\nu$. Thus, for each $f^\epsilon(x,\cdot,t)$ in its declared collision domain, the weak identity has factor $1/4$ and collision bracket $\delta\psi=\psi(v)+\psi(w)-\psi(v')-\psi(w')$ whenever the test and both integrals are admissible. For each dimensionless $\epsilon>0$, let $f^\epsilon>0$ be periodic, $C^1$ in $(t,x)$ and $C^2$ in $v$ on the closed slab (with one-sided time derivatives at its endpoints), with $\int\omega_3 f^\epsilon\,dv<\infty$ at each $(t,x)$, and solve on $0<t<T_*$
$$\epsilon(\partial_t f^\epsilon+v\cdot\nabla_xf^\epsilon)=Q_\nu(f^\epsilon).$$ Assume the common $L^1(dv)$ derivative envelopes from the moment-balance proposition: for each multiplier $\psi\in\{m,mv_1,mv_2,mv_3,m|v|^2/2\}$, the time derivative and each spatially weighted derivative have one velocity majorant independent of $(t,x)$ on compact time slabs. At every $(t,x)$, require $f^\epsilon(x,\cdot,t)\in\mathcal D_\nu$ and $1,v_1,v_2,v_3,|v|^2\in\mathcal S_{f^\epsilon(x,\cdot,t)}$ with the measurability and absolute-convergence conditions of the elastic-collision definition; assume finite velocity moments through degree three. The elastic bracket of each such invariant is zero. Let $n,u,T$ be $C^1$ on $[0,T_*]\times\Omega$, periodic in $x$, with $n,T$ bounded above and bounded away from zero and $u$ bounded; $n$ is number density in $\mathrm{m^{-3}}$, $u$ is velocity in $\mathrm{m\,s^{-1}}$, and $T$ is temperature in kelvins. Use the fixed particle mass $m>0$ in kilograms and Boltzmann constant $k_B>0$ in joules per kelvin from the kinetic-density definition, and define $\rho=mn$, $p=nk_BT$, $E=\rho|u|^2/2+3nk_BT/2$, and
$$M_{n,u,T}(v):=n(2\pi\theta)^{-3/2}e^{-|v-u|^2/(2\theta)},\qquad\theta:=k_BT/m.$$ Assume
$$\int_0^{T_*}\!\int_\Omega\!\int_{\mathbb R^3}\omega_3(v)|f^\epsilon-M_{n,u,T}|\,dv\,dx\,dt\longrightarrow0,$$
and
$$\int_\Omega\!\int_{\mathbb R^3}\omega_2(v)|f^\epsilon(0,x,v)-M_{n,u,T}(0,x,v)|\,dv\,dx\longrightarrow0.$$
Then $\rho=mn$, $p=nk_BT$, and $E=\rho|u|^2/2+3nk_BT/2$ satisfy the compressible monatomic Euler equations in distributions on $(0,T_*)\times\Omega$; explicitly, for all scalar test functions $\phi,\eta\in C^1([0,T_*]\times\Omega)$ and vector test function $\zeta\in C^1([0,T_*]\times\Omega;\mathbb R^3)$ that are periodic in $x$ and vanish near $t=T_*$ but may be nonzero at $t=0$,
$$\partial_t\rho+\nabla_x\cdot(\rho u)=0,$$
$$\partial_t(\rho u)+\nabla_x\cdot(\rho u\otimes u+pI_3)=0,$$
$$\partial_tE+\nabla_x\cdot((E+p)u)=0,$$
and the corresponding weak identities with the initial traces are
$$\int_0^{T_*}\!\int_\Omega(\rho\,\partial_t\phi+\rho u\cdot\nabla_x\phi)\,dx\,dt+\int_\Omega\rho(0,x)\phi(0,x)\,dx=0,$$
$$\int_0^{T_*}\!\int_\Omega(\rho u\cdot\partial_t\zeta+(\rho u\otimes u+pI_3):\nabla_x\zeta)\,dx\,dt+\int_\Omega\rho(0,x)u(0,x)\cdot\zeta(0,x)\,dx=0,$$
$$\int_0^{T_*}\!\int_\Omega(E\,\partial_t\eta+(E+p)u\cdot\nabla_x\eta)\,dx\,dt+\int_\Omega E(0,x)\eta(0,x)\,dx=0,$$
where $(A:\nabla_x\zeta):=\sum_{i,j}A_{ij}\partial_{x_j}\zeta_i$. Their initial traces are the values of these fields at $t=0$. Since the limiting fields are $C^1$, the equations hold pointwise for $0<t<T_*$. This is a conditional passage theorem: it assumes the weighted convergence and asserts no such convergence or kinetic solution exists.

## Statement references

[Golse, §§3.1–3.2, collision and moment context, full chapter](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)

[Zamponi, §3.2, full lecture notes](https://www.uni-ulm.de/fileadmin/website_uni_ulm/mawi.inst.020/lecture_notes/LectureNotes-Prague-2017.pdf)

## Facts & Assumptions

**Given:** The regular scaled kinetic solutions, the displayed spacetime and initial weighted convergence, and the $C^1$ positive limiting fields.

[F1] [[prop-fd-kinetic-moment-balances]]: For a solution of the unscaled equation, the collision invariants give the exact mass, momentum, and energy balances with fluxes $\rho u$, $\rho u\otimes u+P$, and $Eu+Pu+q$.

[F2] [[prop-fd-maxwellian-moments]]: The local Gaussian has density $n$, momentum $nu$, pressure tensor $pI_3$ with $p=nk_BT$, zero centered heat flux, and energy $E=\rho|u|^2/2+3nk_BT/2$.

[F3] [[def-fd-kinetic-density]]: The fixed velocity weight $\omega_k$ is dimensionless; multiplication by it controls all velocity polynomials of degree at most $k$ up to fixed dimensional constants.

[F4] [[lem-smooth-bump-between-concentric-euclidean-balls]]: For concentric radii $0<r<R$ there is a nonnegative smooth function equal to one on the closed radius-$r$ ball and supported in the open radius-$R$ ball.

[F5] [[thm-integration-by-parts]]: For differentiable functions on a compact interval with integrable derivatives, integration by parts gives the boundary term and the integral of the product derivative; it applies coordinatewise to the $C^1$ moment fields and tests.

[A1] Each $f^\epsilon$ satisfies the regularity, moment, derivative-envelope, and weak collision hypotheses of [F1], with the scaled equation in the Statement.

[A2] The limiting fields and both convergence assumptions in the Statement hold.

## Proof

1.1 Multiply the scaled kinetic equation in [A1] by $m$, $mv_i$, and $m|v|^2/2$, integrate over velocity, and use the elastic weak identity. Each collision bracket is zero, so division by $\epsilon>0$ gives the same three exact pointwise moment balances as [F1] for every $\epsilon$. The common derivative envelopes and continuity of the velocity derivatives permit the dominated differentiation used in [F1]; dominated convergence makes the resulting moment densities and fluxes $C^1$ on the slab, with one-sided derivatives at its endpoints. Their finite moments identify the traces at $t=0$ with the velocity integrals of $f^\epsilon(0)$. Multiply each balance by its corresponding $C^1$ periodic test and apply [F5] on each time and spatial coordinate interval. Opposite periodic-face terms cancel, the tests vanish near $T_*$, and the remaining time boundary is the initial moment term. This gives the three weak moment identities on $[0,T_*]$ with initial values from $f^\epsilon(0)$. [A1, F1, F5, algebra]

2.1 For each compactly supported $C^1$ scalar, vector, or scalar test in time and periodic space, the coefficients in the weak moment identities are velocity polynomials of degree at most three; the initial terms have degree at most two. By [F3] and [A2], the absolute difference between an $f^\epsilon$ moment or flux and the corresponding Gaussian moment is bounded by a constant (depending on the test and fixed physical coefficients) times the displayed $\omega_3$ spacetime error. The initial-moment difference is bounded by the analogous $\omega_2$ error. Both bounds tend to zero. [A1, A2, F1, F3, step 1.1, algebra]

3.1 By [F2], the limiting Gaussian moment fluxes are $\rho u$, $\rho u\otimes u+pI_3$, and $(E+p)u$. Pass to the limit in each weak identity from step 1.1 using step 2.1. This gives the three Euler equations in distributions and the stated initial traces. [A2, F2, step 1.1, step 2.1, algebra]

4.1 Each residual component is continuous because $n,u,T$ are $C^1$. If one residual were nonzero at a point, continuity would give a coordinate ball whose closure lies in $(0,T_*)$ times a flat torus chart and on which that component has a constant strict sign. Choose concentric coordinate balls with radii $0<r<R$ inside this neighborhood. By [F4] there is a smooth nonnegative bump equal to one on the inner ball and supported in the outer ball; extend it by zero from the chart to the periodic domain. Its pairing with the residual has strict sign, contradicting the distributional equation from step 3.1. Therefore every residual component vanishes pointwise. [A2, F4, step 3.1, algebra] ∎
