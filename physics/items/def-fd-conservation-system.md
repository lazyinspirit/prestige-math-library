---
id: def-fd-conservation-system
kind: definition
title: Distributional systems and entropy flux pairs
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - lem-fd-locally-integrable-functions-define-distributions
  - def-distributional-derivative
  - def-regular-distribution-from-a-locally-integrable-function
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  lem-fd-locally-integrable-functions-define-distributions: mathematical-premise
  def-distributional-derivative: mathematical-premise
  def-regular-distribution-from-a-locally-integrable-function: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Constantine M. Dafermos, Hyperbolic Conservation Laws in Continuum Physics, 2nd ed., Chapter III §3.2 and Chapter IV §§4.3–4.5"
      url: "https://yulia-petrova.github.io/teaching/shocks/Dafermos.pdf"
    - title: "Lawrence C. Evans, Entropy and Partial Differential Equations, Chapter V §§2–3"
      url: "https://math.berkeley.edu/~evans/entropy.and.PDE.pdf"
    - title: "Piotr Gwiazda, Martin Michálek, and Agnieszka Świerczewska-Gwiazda, A Note on Weak Solutions of Conservation Laws and Energy/Entropy Conservation, §1"
      url: "https://arxiv.org/pdf/1706.10154"
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Definition

Let $d,m\in\mathbb N$, let $I\subseteq\mathbb R$ be an open time interval, let $\Omega\subseteq\mathbb R^d$ be open, and let $\mathcal O\subseteq\mathbb R^m$ be open and convex. Put $Q=I\times\Omega$. A first-order conservation system on $\mathcal O$ consists of fluxes $F_j\in C^1(\mathcal O;\mathbb R^m)$, $1\leq j\leq d$, and the equation
$$\partial_tU+\sum_{j=1}^d\partial_{x_j}F_j(U)=0.$$
A state field $U:Q\to\mathcal O$ is locally bounded if it is measurable and essentially bounded on every compact subset of $Q$. For an open set $Q$, $g\in L^1_{\mathrm{loc}}(Q)$ means $g$ is measurable and $\int_K|g|<\infty$ for every compact $K\subseteq Q$. Require also $U,F_1(U),\ldots,F_d(U)\in L^1_{\mathrm{loc}}(Q;\mathbb R^m)$. These fields then define regular distributions componentwise. The conservation system holds in distributions on $Q$ when, for every real-valued $\varphi\in C_c^\infty(Q;\mathbb R^m)$,
$$\int_Q\left(U\cdot\partial_t\varphi+\sum_{j=1}^dF_j(U)\cdot\partial_{x_j}\varphi\right)\,dx\,dt=0.$$
This is the test-function meaning of the displayed derivative equation, using the distributional derivative convention in the supplied mathematics. The pairing is bilinear, without complex conjugation.

For an initial-value problem on $(0,T)\times\Omega$, $T>0$, let $U_0:\Omega\to\mathcal O$ be measurable and locally integrable. Require integrability of the state and fluxes up to the initial boundary:
$$\int_0^\tau\!\!\int_K\left(|U|+\sum_{j=1}^d|F_j(U)|\right)\,dx\,dt<\infty\qquad(0<\tau<T,\ K\subseteq\Omega\text{ compact}).$$
This condition uses only positive-time values and does not assert a strong trace at $t=0$. A test function up to the initial boundary is the restriction of a smooth function defined on a neighborhood of $[0,T)\times\Omega$, with compact support in $[0,T)\times\Omega$; its value at $t=0$ need not vanish. The initial-value weak identity is
$$\int_0^T\!\!\int_\Omega\left(U\cdot\partial_t\varphi+\sum_{j=1}^dF_j(U)\cdot\partial_{x_j}\varphi\right)\,dx\,dt+\int_\Omega U_0(x)\cdot\varphi(0,x)\,dx=0$$
for every such real vector test function. The stated integrability up to the initial boundary makes every term finite, including for tests nonzero at $t=0$; a weak solution with initial data $U_0$ must satisfy these integrability conditions and this identity for all such tests.

A convex entropy-flux pair for the system is a function $\eta\in C^2(\mathcal O;\mathbb R)$ that is convex on the convex state domain $\mathcal O$ and functions $q_j\in C^1(\mathcal O;\mathbb R)$ satisfying
$$Dq_j(V)=D\eta(V)\,DF_j(V)\qquad(V\in\mathcal O,\ 1\leq j\leq d),$$
where convexity means $\eta((1-\theta)V+\theta W)\leq(1-\theta)\eta(V)+\theta\eta(W)$ for $V,W\in\mathcal O$ and $\theta\in[0,1]$, and $D\eta,Dq_j$ are row derivatives while $DF_j$ is the Jacobian matrix. For a state field $U$, require $\eta(U),q_1(U),\ldots,q_d(U)\in L^1_{\mathrm{loc}}$ before using their distributions. The entropy inequality on $Q$ means
$$\partial_t\eta(U)+\sum_{j=1}^d\partial_{x_j}q_j(U)\leq0,$$
with the sign convention that this holds exactly when
$$\int_Q\left(\eta(U)\,\partial_t\psi+\sum_{j=1}^dq_j(U)\,\partial_{x_j}\psi\right)\,dx\,dt\geq0$$
for every nonnegative $\psi\in C_c^\infty(Q)$. With initial data on $(0,T)\times\Omega$, require also
$$\int_0^\tau\!\!\int_K\left(|\eta(U)|+\sum_{j=1}^d|q_j(U)|\right)\,dx\,dt<\infty\qquad(0<\tau<T,\ K\subseteq\Omega\text{ compact})$$
and $\eta(U_0)\in L^1_{\mathrm{loc}}(\Omega)$. Use every nonnegative scalar test up to the initial boundary defined above and add $\int_\Omega\eta(U_0)\psi(0,x)\,dx$ to the entropy integral. These conditions make all terms finite even when the test is nonzero at $t=0$. A weak solution satisfying this inequality is entropy-admissible relative to that pair.

## Definition references

[[lem-fd-locally-integrable-functions-define-distributions|regular distributions from locally integrable fields]]

[[def-distributional-derivative|distributional derivative convention]]

[[def-regular-distribution-from-a-locally-integrable-function|local integrability and regular functional]]

## Remarks

For a state field $U\in C^1(Q;\mathcal O)$ satisfying the conservation system pointwise on $Q$, the compatibility identity and the classical chain rule give $\partial_t\eta(U)+\sum_j\partial_{x_j}q_j(U)=D\eta(U)\left(\partial_tU+\sum_jDF_j(U)\partial_{x_j}U\right)=0$. For a merely weak solution this calculation is unavailable; the entropy inequality is an additional condition and does not follow from the weak conservation equation alone.

As a mathematical example of the notation, the one-dimensional spatial reduction of the compressible Euler model in three spatial dimensions uses $U=(\rho,\rho v,E)$ and $F(U)=(\rho v,\rho v^2+p,v(E+p))$, with $E=\rho e+\tfrac12\rho v^2$. Here $\rho>0$ is mass density in $\mathrm{kg\,m^{-3}}$, $v$ is axial velocity in $\mathrm{m\,s^{-1}}$, $e$ is specific internal energy in $\mathrm{J\,kg^{-1}}$, $E$ is total energy density in $\mathrm{J\,m^{-3}}$, and $p=P(\rho,e)$ is pressure in pascals, with $P$ a separately specified constitutive map. The components of $U$ have units $\mathrm{kg\,m^{-3}}$, $\mathrm{kg\,m^{-2}\,s^{-1}}$, and $\mathrm{J\,m^{-3}}$; those of $F$ are the corresponding quantities multiplied by velocity. This is only a mathematical model form, not an adopted physical postulate. An entropy inequality does not establish general compressible-system existence or uniqueness.

## Remarks references

[[thm-chain-rule-for-total-derivatives|classical chain rule]]

