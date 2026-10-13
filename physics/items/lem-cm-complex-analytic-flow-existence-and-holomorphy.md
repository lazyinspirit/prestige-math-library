---
id: lem-cm-complex-analytic-flow-existence-and-holomorphy
kind: lemma
title: 'The flow of a bounded holomorphic field on a polydisc: existence in complex time, displacement bound, holomorphy, and the composition law'
status: draft
origin: pipeline
domain: mathematics
dependency_level: 6
deps:
- def-cm-complex-phase-domains-and-holomorphic-maps
- def-cm-analytic-splitting-data-and-exact-splitting-map
- lem-cm-cauchy-formula-and-power-series-on-polydiscs
- lem-cm-holomorphic-map-calculus
- thm-holomorphic-parameter-riemann-integral
- thm-weierstrass-convergence-holomorphic-functions
- thm-uniform-limit-continuous-complex-functions
- cor-vector-valued-ftc-and-lipschitz-bound
- thm-reals-cauchy-complete
- thm-norm-inequality-for-the-vector-valued-integral
- def-vector-valued-derivative-and-integral
- def-ck-euclidean-maps-and-diffeomorphisms
- def-metric-ball
- def-metric-topology
- thm-heine-borel-rn
- thm-extreme-value-metric
- def-directional-and-partial-derivatives
- def-total-derivative-in-euclidean-space
dependency_roles:
  def-cm-complex-phase-domains-and-holomorphic-maps: mathematical-premise
  def-cm-analytic-splitting-data-and-exact-splitting-map: mathematical-premise
  lem-cm-cauchy-formula-and-power-series-on-polydiscs: mathematical-premise
  lem-cm-holomorphic-map-calculus: mathematical-premise
  thm-holomorphic-parameter-riemann-integral: mathematical-premise
  thm-weierstrass-convergence-holomorphic-functions: mathematical-premise
  thm-uniform-limit-continuous-complex-functions: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-reals-cauchy-complete: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  def-total-derivative-in-euclidean-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: constructive
sources:
  references:
  - title: 'J. Lebl, Tasty Bits of Several Complex Variables, Chapter 1, Sections 1.1-1.3: holomorphic functions, power series and continuous dependence on data, printed pages 13-31'
    url: https://www.jirka.org/scv/scv.pdf
  - title: 'E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 3 ''Backward error analysis'', Section 1: Taylor expansion of the flow of a modified vector field and the formal expansion of a one-step method, printed pages 1-3'
    url: https://www.unige.ch/~hairer/poly_geoint/week3.pdf
verification:
  precheck: pass
---

## Statement

In this item, a **complex-time solution** on an open set $\Omega\subseteq\mathbb C$ is a holomorphic map $Y:\Omega\to D$ satisfying $Y'(\tau)=F(Y(\tau))$. For a closed time disc, a solution means the restriction of such a map that is continuous on the closed disc.

Let $n\ge1$, let $D\subseteq\mathbb C^n$ be open, let $F:D\to\mathbb C^n$ be holomorphic in the sense of [[def-cm-complex-phase-domains-and-holomorphic-maps]] with $\lVert F\rVert\le M$ everywhere on $D$ for some $M>0$, let $Z_0\in D$ and let $s>0$ satisfy $\Delta_s(Z_0)\subseteq D$ ([[def-cm-complex-phase-domains-and-holomorphic-maps]]). Put

$$t_0:=\frac{s}{8nM},\qquad D_{t_0}:=\{t\in\mathbb C:\ |t|\le t_0\}.$$

Then there is a map $\Phi:D_{t_0}\times B(Z_0,s/4)\to D$ that is the restriction of a jointly holomorphic map on $\{|t|<3t_0/2\}\times B(Z_0,s/4)$, such that:

1. **Solution.** For every $Z\in B(Z_0,s/4)$, $t\mapsto\Phi(t,Z)$ solves $Y'=F(Y)$ with $Y(0)=Z$ for $|t|<3t_0/2$. It is the unique holomorphic solution on $|t|<t_0$ among solutions with values in $B(Z,s/2)$. On $D_{t_0}$ it satisfies $\lVert\Phi(t,Z)-Z\rVert\le M|t|\le s/(8n)$.
2. **Holomorphy.** $\Phi$ is holomorphic on the open set $\{|t|<t_0\}\times B(Z_0,s/4)$ in the sense of [[def-cm-complex-phase-domains-and-holomorphic-maps]], and $\Phi(0,Z)=Z$.
3. **Composition and inverse.** Repeating the construction with each initial point as a center gives a family of compatible local maps; in this clause $\Phi(t,Z)$ denotes the map in the chart centered at $Z$. If the two sides are defined by branches on the same connected open continuation of a solution, then $\Phi(s_2,\Phi(s_1,Z))=\Phi(s_1+s_2,Z)$. In particular, along the reverse continuation of the same local solution, $\Phi(-s_1,\Phi(s_1,Z))=Z$ whenever both sides are defined.

## Facts & Assumptions

**Given:** The open $D\subseteq\mathbb C^n$, the holomorphic $F$ with $\lVert F\rVert\le M$ on $D$, the point $Z_0$, the radius $s$ with $\Delta_s(Z_0)\subseteq D$, and $t_0=s/(8nM)$.

[L1] Scalar Cauchy estimates on polydiscs ([[lem-cm-cauchy-formula-and-power-series-on-polydiscs]]): if a scalar holomorphic $g$ is bounded by $A$ on the distinguished boundary of a polydisc of radius $r$ about $W$, then $|\partial_{z_k}g(W)|\le A/r$. Applying this to each component $F_i$ gives $|\partial_{z_k}F_i(W)|\le4M/s$ whenever $\Delta_{s/4}(W)\subseteq D$. Thus the Euclidean norm of the $k$-th column of $DF(W)$ is at most $4\sqrt n M/s$. For $v\in\mathbb C^n$, $\|DF(W)v\|\le(4\sqrt n M/s)\sum_k|v_k|\le(4nM/s)\|v\|$, using $(\sum_k|v_k|)^2\le n\sum_k|v_k|^2$. This supplies the claimed vector-valued Lipschitz constant without applying a scalar estimate directly to a vector-valued map.

[L2] Calculus of holomorphic maps ([[lem-cm-holomorphic-map-calculus]]): compositions of holomorphic maps are holomorphic with the chain rule; a locally uniform limit of holomorphic maps is holomorphic.

[L3] Parameter integrals ([[thm-holomorphic-parameter-riemann-integral]]): a jointly continuous scalar $\varphi:[0,1]\times\Omega\to\mathbb C$ whose slices are holomorphic in the complex parameter has a holomorphic integral, with differentiation under the integral when the parameter derivative is jointly continuous. For a $\mathbb C^n$-valued integrand, apply this scalar result to each of its $n$ components; the resulting integral is holomorphic componentwise.

[L4] Completeness and componentwise uniform limits. A uniformly Cauchy sequence of maps into $\mathbb C^n\cong\mathbb R^{2n}$ has a pointwise limit: at each argument its $2n$ real coordinates are Cauchy and converge by [[thm-reals-cauchy-complete]], and assembling these limits gives a vector limit. A uniform tail bound in Euclidean norm passes to that limit by continuity of the norm, so convergence is uniform. Each component of a uniform limit of continuous $\mathbb C^n$-valued maps is continuous by [[thm-uniform-limit-continuous-complex-functions]]; finitely many continuous components give a continuous vector map, since $\|v\|\le\sqrt n\max_i|v_i|$. Likewise a locally uniform limit of holomorphic scalar functions is holomorphic by [[thm-weierstrass-convergence-holomorphic-functions]]. For a finite vector of componentwise holomorphic functions, collect their scalar derivatives into one complex-linear map; the Euclidean norm of the vector of finitely many $o(\|v\|)$ remainders is again $o(\|v\|)$, so the vector map is holomorphic in the total-derivative sense.

[L5] Integrals of continuous $\mathbb C^n$-valued functions satisfy $\lVert\int_0^1\varphi\,d\sigma\rVert\le\int_0^1\lVert\varphi\rVert\,d\sigma$; the complex segment integral $\int_0^t\psi(\tau)d\tau=t\int_0^1\psi(\sigma t)\,d\sigma$ is thereby controlled ([[thm-norm-inequality-for-the-vector-valued-integral]], [[def-vector-valued-derivative-and-integral]]).

[L6] Polydisc and ball geometry: $B(W,r)\subseteq\Delta_r(W)$ and $\Delta_r(W)\subseteq B(W,r\sqrt n)$ for every radius $r$; balls are convex and compact balls are compact ([[def-cm-complex-phase-domains-and-holomorphic-maps]], [[def-metric-ball]], [[def-metric-topology]], [[thm-heine-borel-rn]], [[thm-extreme-value-metric]], [[def-directional-and-partial-derivatives]], [[def-total-derivative-in-euclidean-space]]).

[L7] The vector-valued fundamental theorem of calculus gives $\int_0^1u'(\sigma)\,d\sigma=u(1)-u(0)$ for a differentiable $u:[0,1]\to\mathbb R^{2n}$ with integrable derivative; its bounded-derivative clause says that if $u$ is continuous and $\|u'(\sigma)\|\le A$ on $(0,1)$, then $\|u(1)-u(0)\|\le A$ ([[cor-vector-valued-ftc-and-lipschitz-bound]], both clauses).

## Proof

**Proof technique:** constructive; Picard iteration with the contraction estimate on the polydisc $\Delta_{s/2}(Z_0)$, uniform Cauchy convergence, and slice-wise holomorphy of the limit.

1.1 Lipschitz estimate. For every $W$ with $\|W-Z_0\|\le3s/4$, the polydisc $\Delta_{s/4}(W)$ is contained in $\Delta_s(Z_0)\subseteq D$: each coordinate satisfies $|\zeta_k-Z_0{}_k|\le|W_k-Z_0{}_k|+|\zeta_k-W_k|<3s/4+s/4=s$. By [L1], the operator norm of $DF(W)$ is at most $\Lambda=4nM/s$. For $W,W'\in B(Z_0,3s/4)$ the segment $u(t)=F(W'+t(W-W'))$, $0\le t\le1$, stays in the convex ball by [L6]; by the chain rule in [L2], its derivative is $DF(W'+t(W-W'))(W-W')$ and has norm at most $\Lambda\|W-W'\|$. Applying [L7] to this real-parameter curve gives $\|F(W)-F(W')\|\le\Lambda\|W-W'\|$. Since $t_0=s/(8nM)$, $\Lambda=1/(2t_0)$. [given, L1, L2, L6, L7]

2.1 The Picard map [construct]. Fix $Z\in B(Z_0,s/4)$ and let $X_Z$ be the set of continuous $\gamma:D_{t_0}\to\mathbb C^n$ with $\gamma(0)=Z$ and $\lVert\gamma(t)-Z\rVert\le s/2$ for all $t\in D_{t_0}$, equipped with the supremum distance. Define $T\gamma$ by $(T\gamma)(t):=Z+t\int_0^1F(\gamma(\sigma t))\,d\sigma$. For $\gamma\in X_Z$, the integrand is continuous; since $\|Z-Z_0\|<s/4$ and $\lVert\gamma(\sigma t)-Z\rVert\le s/2$, its values satisfy $\|\gamma(\sigma t)-Z_0\|<3s/4$ and lie in $D$. Therefore $\lVert(T\gamma)(t)-Z\rVert\le|t|M\le t_0M=s/(8n)\le s/2$: $T$ maps $X_Z$ to itself. Moreover, by step 1.1 and [L5], for $\gamma_1,\gamma_2\in X_Z$, $$\lVert(T\gamma_1)(t)-(T\gamma_2)(t)\rVert\le|t|\int_0^1\Lambda\lVert\gamma_1(\sigma t)-\gamma_2(\sigma t)\rVert\,d\sigma\le t_0\Lambda\lVert\gamma_1-\gamma_2\rVert_\infty=\tfrac12\lVert\gamma_1-\gamma_2\rVert_\infty.$$ The same construction on $D_{t_*}$ with $t_*:=3t_0/2$ also works: $t_*\Lambda=3/4<1$ and $t_*M=3s/(16n)<s/2$, so the iterates have summable successive differences bounded by a geometric sequence with ratio $3/4$ and remain in $X_Z$. The coordinatewise completeness argument of [L4] gives their limit. Repeating steps 3.1--5.1 with this radius yields a solution holomorphic on $|t|<t_*$, so the solution on $D_{t_0}$ extends through its boundary. [given, step 1.1, L4, L5, L6, algebra]

3.1 Iterates. For each initial value $Z$, put $\gamma_0(t,Z):=Z$ and $\gamma_{m+1}(\cdot,Z):=T(\gamma_m(\cdot,Z))$; all $\gamma_m(\cdot,Z)$ lie in $X_Z$ by step 2.1, and $\lVert\gamma_{m+1}(\cdot,Z)-\gamma_m(\cdot,Z)\rVert_\infty\le2^{-m}\lVert\gamma_1(\cdot,Z)-\gamma_0(\cdot,Z)\rVert_\infty\le2^{-m}t_0M$. Joint continuity in $(t,Z)$ follows by induction: $\gamma_0(t,Z)=Z$ is continuous, and if $\gamma_m$ is jointly continuous then $(\sigma,t,Z)\mapsto F(\gamma_m(\sigma t,Z))$ is continuous; on each compact parameter neighborhood its $\sigma$-integral is continuous by uniform continuity. Each $\gamma_m$ is also holomorphic on $D_{t_0}$ in the variable $t$: $\gamma_0$ is constant; if $\gamma_m$ is holomorphic then $t\mapsto\gamma_m(\sigma t)$ and its composition with $F$ are holomorphic for each $\sigma$ by [L2]. The parameter integral in the definition of $T$ is holomorphic componentwise by [L3], so every component of $T\gamma_m$ is holomorphic in $t$; the finite-dimensional assembly described in [L4] makes the vector map holomorphic. For fixed $t$, the same induction shows that each component of $\gamma_m(t,\cdot)$ is holomorphic in each coordinate of $Z$: apply [L3] separately to each output component and each input coordinate. Thus the iterates are continuous and separately holomorphic in the variables needed below. [given, step 2.1, L1, L2, L3, L4]

4.1 Uniform convergence. By step 3.1, $(\gamma_m)$ is uniformly Cauchy on $D_{t_0}\times B(Z_0,s/4)$: $\lVert\gamma_{m'}-\gamma_m\rVert_\infty\le2^{-m+1}t_0M$ for $m'\ge m$. By the coordinatewise completeness argument in [L4], it converges uniformly to a map $\Phi$; the componentwise continuity argument in [L4] makes $\Phi$ continuous. It satisfies $\lVert\Phi(t,Z)-Z\rVert\le s/2$, indeed $\le M|t|\le s/(8n)$, and $\Phi(0,Z)=Z$. For fixed $Z$, each component of $t\mapsto\Phi(t,Z)$ is a locally uniform limit of holomorphic functions, so it is holomorphic by [L4]; the same applies to each output component with $t$ fixed and one complex coordinate of $Z$ varying. At any point of the open product choose a polydisc contained in it. Each scalar component is continuous and separately holomorphic there, so [[lem-cm-cauchy-formula-and-power-series-on-polydiscs]] makes that component holomorphic in the total-derivative sense; the finite-dimensional assembly in [L4] then makes $\Phi$ a holomorphic $\mathbb C^n$-valued map. [given, step 3.1, L1, L2, L4]

5.1 Fixed point and differential equation. $T$ is Lipschitz with constant $1/2$ on $X_Z$ by step 2.1, so $T\Phi=\lim_mT\gamma_m=\lim_m\gamma_{m+1}=\Phi$ uniformly. Put $G(t):=F(\Phi(t,Z))$, which is holomorphic with continuous derivative on $|t|<t_0$ by step 4.1 and [L2]. The fixed-point identity is $\Phi(t,Z)=Z+t\int_0^1G(\sigma t)\,d\sigma$. By the derivative formula in [L3], applied componentwise, $$\frac{d}{dt}\Phi(t,Z)=\int_0^1G(\sigma t)\,d\sigma+t\int_0^1\sigma G'(\sigma t)\,d\sigma=\int_0^1\frac{d}{d\sigma}\bigl(\sigma G(\sigma t)\bigr)\,d\sigma=G(t)=F(\Phi(t,Z)),$$ where the penultimate equality is [L7] applied to the $\mathbb R^{2n}$-valued curve $\sigma\mapsto\sigma G(\sigma t)$. The fixed-point identity also gives $\Phi(0,Z)=Z$ and, by [L5], $\lVert\Phi(t,Z)-Z\rVert\le M|t|\le s/(8n)$. This proves clause 1 except uniqueness, and clause 2. [given, step 4.1, L2, L3, L5, L7]

6.1 Uniqueness and composition. Two solutions in the prescribed curve ball obey the contraction inequality of step 2.1 and coincide. More generally, two local solutions through any point agree on a sufficiently small time disc by that same argument centred at the point; the set of times of agreement is both relatively open and closed in a connected common continuation, hence they agree there. For fixed $s_1$, the curves $t\mapsto\Phi(s_1+t,Z)$ and $t\mapsto\Phi(t,\Phi(s_1,Z))$ have the same initial value and derivative $F$ wherever both are defined. Local uniqueness, followed by this continuation argument, proves the qualified composition rule and, with $t=-s_1$, the inverse rule. This proves all three clauses. [given, step 2.1, step 5.1, L6, discharge-construct] ∎

## Remarks

- The lemma is local by design: the time radius $t_0=s/(8nM)$ shrinks with the size of the field and with the complex margin, and the initial-data ball is $B(Z_0,s/4)$. Applying it at each point gives compatible local solution maps. Continued branches are used on specified connected time domains; the local construction does not select a single-valued global maximal flow.
- Clause 1's uniqueness is asserted among solutions with values in the ball $B(Z,s/2)$, which is what the contraction proof gives; no global uniqueness of complex-time solutions outside that ball is claimed.
