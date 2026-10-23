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
  - prop-fd-kinetic-moment-balances
  - prop-fd-maxwellian-moments
  - lem-smooth-bump-between-concentric-euclidean-balls
dependency_roles:
  def-fd-kinetic-density: mathematical-premise
  prop-fd-kinetic-moment-balances: mathematical-premise
  prop-fd-maxwellian-moments: mathematical-premise
  lem-smooth-bump-between-concentric-euclidean-balls: mathematical-premise
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

Let $T_*>0$, let $\Omega$ be a fixed rectangular three-dimensional periodic cell, and let $v_*=1\,\mathrm{m\,s^{-1}}$. For $k=2,3$ put
$$\omega_k(v):=\sum_{j=0}^k(|v|/v_*)^j.$$
For each $\epsilon>0$, let $f^\epsilon>0$ be a regular solution on $[0,T_*]\times\Omega\times\mathbb R^3$ of
$$\epsilon(\partial_t f^\epsilon+v\cdot\nabla_xf^\epsilon)=Q_\nu(f^\epsilon).$$ Assume the time and spatial derivative envelopes of the moment-balance proposition, finite velocity moments through degree three, and the absolutely convergent weak collision identity for $\psi=1,v_1,v_2,v_3,|v|^2$; the elastic bracket of each such invariant is zero. Let $n,u,T$ be $C^1$ on $[0,T_*]\times\Omega$, periodic in $x$, with $n,T$ bounded above and bounded away from zero and $u$ bounded. Define $\rho=mn$, $p=nk_BT$, $E=\rho|u|^2/2+3nk_BT/2$, and
$$M_{n,u,T}(v):=n(2\pi\theta)^{-3/2}e^{-|v-u|^2/(2\theta)},\qquad\theta:=k_BT/m.$$ Assume
$$\int_0^{T_*}\!\int_\Omega\!\int_{\mathbb R^3}\omega_3(v)|f^\epsilon-M_{n,u,T}|\,dv\,dx\,dt\longrightarrow0,$$
and
$$\int_\Omega\!\int_{\mathbb R^3}\omega_2(v)|f^\epsilon(0,x,v)-M_{n,u,T}(0,x,v)|\,dv\,dx\longrightarrow0.$$
Then $\rho=mn$, $p=nk_BT$, and $E=\rho|u|^2/2+3nk_BT/2$ satisfy the compressible monatomic Euler equations in distributions on $(0,T_*)\times\Omega$; explicitly, for every $C^1$ scalar tests $\phi,\eta$ and vector test $\zeta$ on $[0,T_*]\times\Omega$, periodic in $x$ and compactly supported away from $t=T_*$,
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

[A1] Each $f^\epsilon$ satisfies the regularity, moment, derivative-envelope, and weak collision hypotheses of [F1], with the scaled equation in the Statement.

[A2] The limiting fields and both convergence assumptions in the Statement hold.

## Proof

1.1 Multiply the scaled kinetic equation in [A1] by $m$, $mv_i$, and $m|v|^2/2$, integrate over velocity, and use the elastic weak identity. Each collision bracket is zero, so division by $\epsilon>0$ gives the same three exact moment balances as [F1] for every $\epsilon$. In weak form on the periodic cell, these balances include the initial moments of $f^\epsilon(0)$. [A1, F1, algebra]

2.1 For each compactly supported $C^1$ scalar, vector, or scalar test in time and periodic space, the coefficients in the weak moment identities are velocity polynomials of degree at most three; the initial terms have degree at most two. By [F3] and [A2], the absolute difference between an $f^\epsilon$ moment or flux and the corresponding Gaussian moment is bounded by a constant (depending on the test and fixed physical coefficients) times the displayed $\omega_3$ spacetime error. The initial-moment difference is bounded by the analogous $\omega_2$ error. Both bounds tend to zero. [A1, A2, F1, F3, step 1.1, algebra]

3.1 By [F2], the limiting Gaussian moment fluxes are $\rho u$, $\rho u\otimes u+pI_3$, and $(E+p)u$. Pass to the limit in each weak identity from step 1.1 using step 2.1. This gives the three Euler equations in distributions and the stated initial traces. [A2, F2, step 1.1, step 2.1, algebra]

4.1 Each residual component is continuous because $n,u,T$ are $C^1$. If one residual were nonzero at a point, continuity would give a coordinate ball whose closure lies in $(0,T_*)$ times a flat torus chart and on which that component has a constant strict sign. Choose concentric coordinate balls with radii $0<r<R$ inside this neighborhood. By [F4] there is a smooth nonnegative bump equal to one on the inner ball and supported in the outer ball; extend it by zero from the chart to the periodic domain. Its pairing with the residual has strict sign, contradicting the distributional equation from step 3.1. Therefore every residual component vanishes pointwise. [A2, F4, step 3.1, algebra] ∎
