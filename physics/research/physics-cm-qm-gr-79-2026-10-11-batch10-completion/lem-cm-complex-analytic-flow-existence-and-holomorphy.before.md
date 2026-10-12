---
id: lem-cm-complex-analytic-flow-existence-and-holomorphy
kind: lemma
title: "The flow of a bounded holomorphic field on a polydisc: existence in complex time, displacement bound, holomorphy, and the composition law"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps: [def-cm-complex-phase-domains-and-holomorphic-maps, def-cm-analytic-splitting-data-and-exact-splitting-map, lem-cm-cauchy-formula-and-power-series-on-polydiscs, lem-cm-holomorphic-map-calculus, thm-holomorphic-parameter-riemann-integral, thm-weierstrass-convergence-holomorphic-functions, thm-uniform-limit-continuous-complex-functions, thm-norm-inequality-for-the-vector-valued-integral, def-vector-valued-derivative-and-integral, def-ck-euclidean-maps-and-diffeomorphisms, def-metric-ball, def-metric-topology, thm-heine-borel-rn, thm-extreme-value-metric, def-directional-and-partial-derivatives, def-total-derivative-in-euclidean-space]
dependency_roles:
  def-cm-complex-phase-domains-and-holomorphic-maps: mathematical-premise
  def-cm-analytic-splitting-data-and-exact-splitting-map: mathematical-premise
  lem-cm-cauchy-formula-and-power-series-on-polydiscs: mathematical-premise
  lem-cm-holomorphic-map-calculus: mathematical-premise
  thm-holomorphic-parameter-riemann-integral: mathematical-premise
  thm-weierstrass-convergence-holomorphic-functions: mathematical-premise
  thm-uniform-limit-continuous-complex-functions: mathematical-premise
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
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, Chapter 1, Sections 1.1-1.3: holomorphic functions, power series and continuous dependence on data, printed pages 13-31"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "E. Hairer, Geometric Numerical Integration (TU Munchen 2010), Lecture 3 'Backward error analysis', Section 1: Taylor expansion of the flow of a modified vector field and the formal expansion of a one-step method, printed pages 1-3"
      url: "https://www.unige.ch/~hairer/poly_geoint/week3.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $D\subseteq\mathbb C^n$ be open, let $F:D\to\mathbb C^n$ be holomorphic in the sense of [[def-cm-complex-phase-domains-and-holomorphic-maps]] with $\lVert F\rVert\le M$ everywhere on $D$ for some $M>0$, let $Z_0\in D$ and let $s>0$ satisfy $\Delta_s(Z_0)\subseteq D$ ([[def-cm-complex-phase-domains-and-holomorphic-maps]]). Put

$$t_0:=\frac{s}{8nM},\qquad D_{t_0}:=\{t\in\mathbb C:\ |t|\le t_0\}.$$

Then there is a map $\Phi:D_{t_0}\times\Delta_{s/4}(Z_0)\to D$ such that:

1. **Solution.** For every $Z\in\Delta_{s/4}(Z_0)$ the curve $t\mapsto\Phi(t,Z)$ is the unique solution of $\frac{d}{d\tau}Y(\tau)=F(Y(\tau))$, $Y(0)=Z$, on $D_{t_0}$ among all solutions with values in the ball $B(Z,s/2)$; it satisfies $\lVert\Phi(t,Z)-Z\rVert\le M|t|$ and $\Phi(t,Z)\in B(Z,s/8)$.
2. **Holomorphy.** $\Phi$ is holomorphic on the open set $\{|t|<t_0\}\times\Delta_{s/4}(Z_0)$ in the sense of [[def-cm-complex-phase-domains-and-holomorphic-maps]], and $\Phi(0,Z)=Z$.
3. **Composition and inverse.** If $|s_1|,|s_2|,|s_1+s_2|\le t_0$ and $Z\in\Delta_{s/4}(Z_0)$, then
 $$\Phi(s_2,\Phi(s_1,Z))=\Phi(s_1+s_2,Z),\qquad \Phi(-s_1,\Phi(s_1,Z))=Z.$$

## Facts & Assumptions

**Given:** The open $D\subseteq\mathbb C^n$, the holomorphic $F$ with $\lVert F\rVert\le M$ on $D$, the point $Z_0$, the radius $s$ with $\Delta_s(Z_0)\subseteq D$, and $t_0=s/(8nM)$.

[L1] Cauchy estimates on polydiscs ([[lem-cm-cauchy-formula-and-power-series-on-polydiscs]]): if $g$ is continuous and separately holomorphic on $\Delta_\sigma(W)$ then $|\partial_{z_k}g(W)|\le M(\sigma)/\sigma_k$; a holomorphic function on $\Delta_\rho(a)$ is continuous and separately holomorphic there, and satisfies the estimates.

[L2] Calculus of holomorphic maps ([[lem-cm-holomorphic-map-calculus]]): compositions of holomorphic maps are holomorphic with the chain rule; a locally uniform limit of holomorphic maps is holomorphic.

[L3] Parameter integrals ([[thm-holomorphic-parameter-riemann-integral]]): a jointly continuous $\varphi:[0,1]\times\Omega\to\mathbb C$ whose slices are holomorphic in the parameter is holomorphic with a holomorphic integral.

[L4] Uniform limits: a uniform limit of continuous maps into $\mathbb C^n$ on a compact space is continuous ([[thm-uniform-limit-continuous-complex-functions]], [[def-ck-euclidean-maps-and-diffeomorphisms]]); one-variable locally uniform limits of holomorphic functions are holomorphic ([[thm-weierstrass-convergence-holomorphic-functions]]).

[L5] Integrals of continuous $\mathbb C^n$-valued functions satisfy $\lVert\int_0^1\varphi\,d\sigma\rVert\le\int_0^1\lVert\varphi\rVert\,d\sigma$; the complex segment integral $\int_0^t\psi(\tau)d\tau=t\int_0^1\psi(\sigma t)\,d\sigma$ is thereby controlled ([[thm-norm-inequality-for-the-vector-valued-integral]], [[def-vector-valued-derivative-and-integral]]).

[L6] Polydisc and ball geometry: $B(W,r)\subseteq\Delta_r(W)$ and $\Delta_r(W)\subseteq B(W,r\sqrt n)$ for every radius $r$; balls are convex and compact balls are compact ([[def-cm-complex-phase-domains-and-holomorphic-maps]], [[def-metric-ball]], [[def-metric-topology]], [[thm-heine-borel-rn]], [[thm-extreme-value-metric]], [[def-directional-and-partial-derivatives]], [[def-total-derivative-in-euclidean-space]]).

## Proof

**Proof technique:** constructive; Picard iteration with the contraction estimate on the polydisc $\Delta_{s/2}(Z_0)$, uniform Cauchy convergence, and slice-wise holomorphy of the limit.

1.1 Lipschitz estimate. For $W\in B(Z_0,3s/4)$ and each $k$, the polydisc $\Delta_{s/4}(W)$ is contained in $\Delta_s(Z_0)\subseteq D$: a point $\zeta$ of it has $|\zeta_k-W_k|<s/4$, so $|\zeta_k-Z_0{}_k|<s/4+3s/4=s$. Hence by [L1] applied to the holomorphic $F$ at $W$ with polyradius $s/4$, $\lVert\partial_{z_k}F(W)\rVert\le 4M/s$; consequently for $W,W'\in B(Z_0,3s/4)$ the mean value estimate along the segment (which lies in the convex ball by [L6]) gives $\lVert F(W)-F(W')\rVert\le 4nM\lVert W-W'\rVert/s=:\Lambda\lVert W-W'\rVert$ with $\Lambda=4nM/s=1/(2t_0)$. [given, L1, L6]

2.1 The Picard map [construct]. Fix $Z\in\Delta_{s/4}(Z_0)$ and let $X_Z$ be the set of continuous $\gamma:D_{t_0}\to\mathbb C^n$ with $\gamma(0)=Z$ and $\lVert\gamma(t)-Z\rVert\le s/2$ for all $t\in D_{t_0}$, equipped with the supremum distance. Define $T\gamma$ by $(T\gamma)(t):=Z+t\int_0^1F(\gamma(\sigma t))\,d\sigma$. For $\gamma\in X_Z$ the integrand is continuous and its values lie in $B(Z,s/2)\subseteq B(Z_0,3s/4)$ by [L6], so $\lVert(T\gamma)(t)-Z\rVert\le|t|M\le t_0M=s/(8n)\le s/2$: $T$ maps $X_Z$ to itself. Moreover by step 1.1, for $\gamma_1,\gamma_2\in X_Z$, $$\lVert(T\gamma_1)(t)-(T\gamma_2)(t)\rVert\le|t|\int_0^1\Lambda\lVert\gamma_1(\sigma t)-\gamma_2(\sigma t)\rVert\,d\sigma\le t_0\Lambda\lVert\gamma_1-\gamma_2\rVert_\infty=\tfrac12\lVert\gamma_1-\gamma_2\rVert_\infty.$$ [given, step 1.1, L5, L6, algebra]

3.1 Iterates. Put $\gamma_0(t):=Z$ and $\gamma_{m+1}:=T\gamma_m$; all $\gamma_m$ lie in $X_Z$ by step 2.1, and $\lVert\gamma_{m+1}-\gamma_m\rVert_\infty\le2^{-m}\lVert\gamma_1-\gamma_0\rVert_\infty\le2^{-m}t_0M$. Each $\gamma_m$ is continuous, and is holomorphic on $D_{t_0}$ in the variable $t$: $\gamma_0$ is constant; if $\gamma_m$ is holomorphic then $\sigma\mapsto\gamma_m(\sigma t)$ is holomorphic in $t$ for each $\sigma$ by [L2], so $\sigma\mapsto F(\gamma_m(\sigma t))$ is jointly continuous in $(\sigma,t)$ and holomorphic in $t$, and its $\sigma$-integral is holomorphic in $t$ by [L3]; multiplying by $t$ gives $T\gamma_m$ holomorphic. Moreover, for fixed $t$ each $\gamma_m(t,\cdot)$ is holomorphic in $Z$ on $\Delta_{s/4}(Z_0)$: the same induction, with [L3] applied in each $Z$-coordinate and [[lem-cm-cauchy-formula-and-power-series-on-polydiscs]] upgrading separate holomorphy plus continuity to holomorphy. [given, step 2.1, L1, L2, L3]

4.1 Uniform convergence. By step 3.1, $(\gamma_m)$ is uniformly Cauchy on $D_{t_0}\times\Delta_{s/4}(Z_0)$: $\lVert\gamma_{m'}-\gamma_m\rVert_\infty\le2^{-m+1}t_0M$ for $m'\ge m$. Hence it converges uniformly to a map $\Phi$ on the compact product, which is therefore continuous by [L4] and satisfies $\lVert\Phi(t,Z)-Z\rVert\le s/2$, indeed $\le M|t|\le s/(8n)$; $\Phi(0,Z)=Z$. For fixed $Z$, applying [L4] to the one-variable functions $t\mapsto\gamma_m(t,Z)$ shows $t\mapsto\Phi(t,Z)$ is holomorphic on $\{|t|<t_0\}$; for fixed $t$, applying [L4] in each complex coordinate of $Z$ shows $Z\mapsto\Phi(t,Z)$ is holomorphic in each variable separately, and then [[lem-cm-cauchy-formula-and-power-series-on-polydiscs]] upgrades continuity plus separate holomorphy to holomorphy on $\{|t|<t_0\}\times\Delta_{s/4}(Z_0)$. [given, step 3.1, L1, L2, L4]

5.1 Fixed point. $T$ is Lipschitz with constant $1/2$ on $X_Z$ by step 2.1, so $T\Phi=\lim_mT\gamma_m=\lim_m\gamma_{m+1}=\Phi$ uniformly. Hence $\Phi(t,Z)=Z+t\int_0^1F(\Phi(\sigma t,Z))\,d\sigma=Z+\int_0^tF(\Phi(\tau,Z))\,d\tau$ for all $(t,Z)$, the last integral being the segment integral. Differentiating: for $h\ne0$ small, $$\frac{\Phi(t+h,Z)-\Phi(t,Z)}{h}-F(\Phi(t,Z))=\int_0^1\bigl[F(\Phi(t+\sigma h,Z))-F(\Phi(t,Z))\bigr]d\sigma\longrightarrow0$$ as $h\to0$ by continuity of $\Phi$ and $F$ and the norm inequality [L5]. Hence $\frac{d}{dt}\Phi(t,Z)=F(\Phi(t,Z))$; with $\Phi(0,Z)=Z$ and the displacement bound this proves clause 1 except uniqueness, and clause 2. [given, step 4.1, L1, L2, L5]

6.1 Uniqueness and composition. If $Y_1,Y_2:D_{t_0}\to B(Z,s/2)$ both solve $Y'=F(Y)$ with $Y_j(0)=Z$, then $\lVert Y_1-Y_2\rVert_\infty\le\tfrac12\lVert Y_1-Y_2\rVert_\infty$ by the estimate of step 2.1 applied to their integrals, so $Y_1=Y_2$; this completes clause 1. For clause 3, fix $Z$ and $s_1$ with $|s_1|,|s_2|,|s_1+s_2|\le t_0$; both $t\mapsto\Phi(s_1+t,Z)$ and $t\mapsto\Phi(s_2,\Phi(s_1,Z))$ solve the same initial value problem with initial value $\Phi(s_1,Z)$, and both stay in $B(\Phi(s_1,Z),s/2)$ on $D_{t_0}$ by step 4.1 since $\lVert\Phi(s_1,Z)-Z\rVert\le s/8$ and displacements add at most $s/8+s/8\le s/2$; uniqueness (with centre $Z_0$ replaced by the point $\Phi(s_1,Z)$, whose polydisc $\Delta_{s/4}$ lies in $D$ because $\Phi(s_1,Z)\in\Delta_{s/4}(Z_0)$) gives $\Phi(s_2,\Phi(s_1,Z))=\Phi(s_1+s_2,Z)$; taking $s_2=-s_1$ gives the inverse identity. [given, step 5.1, L6, discharge-construct] ∎

## Remarks

- The lemma is local by design: the time radius $t_0=s/(8nM)$ shrinks with the size of the field and with the complex margin, and the initial-data polydisc is $\Delta_{s/4}(Z_0)$. Applying it at every point of an open set and using the composition law gives the maximal complex flow of $F$; the applications on this page only need the local statement, with the domains chosen explicitly.
- Clause 1's uniqueness is asserted among solutions with values in the ball $B(Z,s/2)$, which is what the contraction proof gives; no global uniqueness of complex-time solutions outside that ball is claimed.
