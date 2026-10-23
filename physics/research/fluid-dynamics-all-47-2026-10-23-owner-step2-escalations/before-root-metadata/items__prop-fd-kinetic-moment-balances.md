---
id: prop-fd-kinetic-moment-balances
kind: proposition
title: Exact unclosed kinetic conservation laws
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-fd-kinetic-density
  - def-fd-elastic-collision-measure
  - thm-differentiation-under-the-integral-sign
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
dependency_roles:
  def-fd-kinetic-density: mathematical-premise
  def-fd-elastic-collision-measure: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Kinetic Theory, Part 2, §2.4.1, pp. 36–39"
      url: "https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf"
    - title: "François Golse, The Boltzmann Equation and Its Hydrodynamic Limits, §3.1, pp. 19–22"
      url: "https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf"
verification:
  precheck: pending
---

## Statement

Let $I$ and the periodic cell $\Omega$ be as in the kinetic-density definition, and let $f:I\times\Omega\times\mathbb R^3\to(0,\infty)$ be continuously differentiable in $(t,x)$ and measurable in $v$. For each compact $I_0\subset I$ and each $\psi\in\{m,mv_1,mv_2,mv_3,m|v|^2/2\}$, assume there are nonnegative functions $G_{\psi,0,I_0},G_{\psi,j,I_0}\in L^1(\mathbb R^3,dv)$ for $j=1,2,3$, independent of $(t,x)\in I_0\times\Omega$, such that for almost every $v$ and every $(t,x)\in I_0\times\Omega$,
$$|\psi(v)\partial_t f(t,x,v)|\le G_{\psi,0,I_0}(v),\qquad |\psi(v)v_j\partial_{x_j}f(t,x,v)|\le G_{\psi,j,I_0}(v)\quad(j=1,2,3).$$
At every $(t,x)$ assume $\int\omega_3(v)f(t,x,v)\,dv<\infty$, so the moments through absolute order three are finite. Use the collision set $Q_{\rm el}=\{(v,w,v',w')\in\mathbb R^{12}:v+w=v'+w',\ |v|^2+|w|^2=|v'|^2+|w'|^2\}$ with its relative Borel sigma-algebra, and the nonnegative countably additive measure $\nu$ invariant under particle exchange in either pair and incoming/outgoing interchange, together with the operator $Q_\nu$ from the elastic-collision definition. At each $(t,x)$ assume $f(t,x,\cdot)\in\mathcal D_\nu$ and $1,v_1,v_2,v_3,|v|^2\in\mathcal S_{f(t,x,\cdot)}$, with the measurability and absolute-convergence conditions of that definition. With $A=f(v)f(w)$, $B=f(v')f(w')$, and $\delta\varphi=\varphi(v)+\varphi(w)-\varphi(v')-\varphi(w')$, assume for each such test that
$$\int_{\mathbb R^3}\varphi(v)Q_\nu(f)(v)\,dv=\frac14\int_{Q_{\rm el}}(B-A)\delta\varphi\,d\nu.$$ Suppose pointwise that
$$\partial_t f+v\cdot\nabla_x f=Q_\nu(f).$$
Set $n:=\int f\,dv$, $\rho:=mn$, $u:=n^{-1}\int vf\,dv$, $c:=v-u$, $T:=m(3k_Bn)^{-1}\int|c|^2f\,dv$, $P:=m\int c\otimes c f\,dv$, $q:=(m/2)\int|c|^2c f\,dv$, and $E:=(m/2)\int|v|^2f\,dv$, using the positive constants $m,k_B$ and Lebesgue measure from the kinetic-density definition. Define $(P u)_i:=\sum_jP_{ij}u_j$ and $\nabla_x\cdot A$ rowwise for a matrix field $A$. Then on $I\times\Omega$,
$$\partial_t\rho+\nabla_x\cdot(\rho u)=0,$$
$$\partial_t(\rho u)+\nabla_x\cdot(\rho u\otimes u+P)=0,$$
$$\partial_tE+\nabla_x\cdot(Eu+Pu+q)=0.$$
These are exact unclosed moment identities conditional on the displayed equation and integrability assumptions. They do not determine $P$ or $q$ from $\rho,u,T$ and do not assert existence of a solution.

## Statement references

[Tong, §2.4.1, full lecture notes](https://www.damtp.cam.ac.uk/user/tong/kintheory/two.pdf)

[Golse, §3.1, full chapter](https://www.cmls.polytechnique.fr/perso/golse/Surveys/FGHdBookEvEq.pdf)

## Facts & Assumptions

**Given:** The regular positive solution of the displayed kinetic equation, the finite absolute third moment, the derivative envelopes, and the admissibility of the collision-invariant tests.

[F1] [[def-fd-kinetic-density]]: $\rho=mn$, $\rho u=m\int vf\,dv$, $P=m\int(v-u)\otimes(v-u)f\,dv$, $q=(m/2)\int|v-u|^2(v-u)f\,dv$, and $E=(m/2)\int|v|^2f\,dv$.

[F2] [[def-fd-elastic-collision-measure]]: For every admissible test $\varphi$, $\int\varphi Q_\nu(f)\,dv=(1/4)\int(B-A)\delta\varphi\,d\nu$; elastic collisions conserve pair momentum and squared speed.

[F3] [[thm-differentiation-under-the-integral-sign]]: An integrable common envelope for the parameter derivative permits differentiation under the velocity integral.

[F4] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]: Absolutely integrable functions on the product of the periodic spatial and velocity measure spaces may be integrated in either order.

[A1] The function $f$ and its derivatives satisfy all regularity, envelope, and collision-test assumptions in the Statement.

## Proof

1.1 On every elastic quadruple, $\delta 1=0$, $\delta v_i=v_i+w_i-v'_i-w'_i=0$, and $\delta(|v|^2)=|v|^2+|w|^2-|v'|^2-|w'|^2=0$. Multiplication by the constants $m$ and $m/2$ preserves these zero brackets. The weak identity [F2] therefore gives $\int mQ_\nu(f)\,dv=0$, $\int mv_iQ_\nu(f)\,dv=0$, and $\int (m/2)|v|^2Q_\nu(f)\,dv=0$ at each $(t,x)$. [given, F2, A1, algebra]

2.1 Multiply the kinetic equation in [A1] successively by $m$, $mv_i$, and $m|v|^2/2$, and integrate over velocity. The common $L^1(dv)$ envelopes and [F3] pass both the time and spatial derivatives through each velocity integral. Step 1.1 removes the collision terms, so the density, momentum, and energy equations have fluxes $m\int vf\,dv$, $m\int v\otimes v f\,dv$, and $(m/2)\int |v|^2v f\,dv$, respectively. Differentiability of these moment fields makes them bounded on compact time-space regions; the common derivative envelopes give local product-space integrability, so [F4] permits reading the same balances distributionally. [given, A1, F1, F3, F4, step 1.1, algebra]

3.1 Since $\int c f\,dv=0$ by the definition of $u$, expanding $v=u+c$ gives $m\int vf\,dv=\rho u$ and $m\int v\otimes v f\,dv=\rho u\otimes u+P$. Expanding $|u+c|^2(u+c)$, the terms linear in $c$ integrate to zero, the $2(u\cdot c)c$ term contributes $Pu$, the $|c|^2u$ term contributes $(\operatorname{tr}P)u/2$, and the $|c|^2c$ term contributes $q$. Since $E=\rho|u|^2/2+\operatorname{tr}P/2$, the energy flux is $Eu+Pu+q$. Substitution into step 2.1 gives all three asserted balances. [F1, step 2.1, algebra] ∎
