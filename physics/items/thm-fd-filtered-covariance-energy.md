---
id: thm-fd-filtered-covariance-energy
kind: theorem
title: Exact filtered covariance and resolved-energy balance
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps:
  - def-countable-choice
  - def-fd-positive-convolution-fluid-filter
  - lem-fd-periodic-filter-normalization-and-commutation
  - prop-divergence-satisfies-the-product-rule
  - thm-integration-by-parts
  - thm-continuous-implies-integrable
  - thm-riemann-fubini-on-product-rectangles
  - thm-multidimensional-integral-properties
  - thm-multidimensional-riemann-criterion
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
  - thm-differentiation-under-the-integral-sign-on-a-compact-rectangle
  - def-multidimensional-darboux-sums
  - def-multidimensional-grid-partition
  - lem-finite-sum-laws
  - cor-archimedean-reciprocal
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-positive-convolution-fluid-filter: mathematical-premise
  lem-fd-periodic-filter-normalization-and-commutation: mathematical-premise
  prop-divergence-satisfies-the-product-rule: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-continuous-implies-integrable: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  thm-multidimensional-riemann-criterion: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-differentiation-under-the-integral-sign-on-a-compact-rectangle: mathematical-premise
  def-multidimensional-darboux-sums: mathematical-premise
  def-multidimensional-grid-partition: mathematical-premise
  lem-finite-sum-laws: mathematical-premise
  cor-archimedean-reciprocal: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-23
sources:
  references:
    - title: "University of Washington, ME 544, Large-Eddy Simulation lecture notes, 8 May 2018"
      url: "https://courses.washington.edu/mengr544/handouts/hd-les.pdf"
    - title: "Gregory L. Eyink, The ‘Multifractal Model’ of Turbulence and A Priori Estimates in Large-Eddy Simulation, I. Subgrid Flux and Locality of Energy Transfer, arXiv:chao-dyn/9602018v1"
      url: "https://arxiv.org/pdf/chao-dyn/9602018"
---
## Statement

Assume the Axiom of Countable Choice required by the normalized periodic torus convention. Let $d\in\{1,2,3\}$, $L>0$, $\mathbb T_L^d=(\mathbb R/L\mathbb Z)^d$, and $d\mu_L=L^{-d}dx$. Fix $0<\ell<L/2$ and let $K:\mathbb R^d\to[0,\infty)$ be smooth, supported in a compact subset of $B_1(0)$, with $\int K(s)\,ds=1$. Define $G_\ell(r)=\sum_{n\in\mathbb Z^d}\ell^{-d}K((r+Ln)/\ell)$ for $r\in\mathbb T_L^d$ and, for every smooth periodic finite-dimensional field $q$, $\overline q_\ell(x)=\int_{\mathbb T_L^d}G_\ell(r)q(x-r)\,dx$. Let $I\subseteq\mathbb R$ be an open time interval and let $u\in C^1(I;C^\infty(\mathbb T_L^d;\mathbb R^d))$ be any smooth periodic vector field. Define

$$\tau_\ell=\overline{u\otimes u}_\ell-\overline u_\ell\otimes\overline u_\ell,\qquad \Pi_\ell=-\tau_\ell:\nabla\overline u_\ell.$$

For $\delta_su(x,t):=u(x-\ell s,t)-u(x,t)$ and $m_\ell(x,t):=\int_{\mathbb R^d}K(s)\delta_su(x,t)\,ds$, the stress has the exact covariance form

$$\tau_\ell(x,t)=\int_{\mathbb R^d}K(s)\,\delta_su(x,t)\otimes\delta_su(x,t)\,ds-m_\ell(x,t)\otimes m_\ell(x,t).$$

It is symmetric and positive semidefinite at every $(x,t)$.

For the additional conclusions below, suppose $\nu>0$ is a constant kinematic viscosity, $p$ and $f$ are smooth scalar and vector fields on $I\times\mathbb T_L^d$, respectively, and $u$ satisfies pointwise

$$\partial_tu+\nabla\cdot(u\otimes u)+\nabla p=\nu\Delta u+f,\qquad \sum_i\partial_i u_i=0,$$

where $(\nabla\cdot T)_i:=\sum_j\partial_jT_{ij}$, $\nabla\cdot v:=\sum_i\partial_iv_i$, and $\Delta:=\sum_j\partial_j^2$. Here $p$ is pressure per unit mass and $f$ is force per unit mass. In SI dimensions, $x,L,\ell$ are in m, $t$ in s, $u$ in m s$^{-1}$, $p$ in m$^2$ s$^{-2}$, $\nu$ in m$^2$ s$^{-1}$, and $f$ in m s$^{-2}$. 

The filtered field satisfies

$$\partial_t\overline u_\ell+\nabla\cdot(\overline u_\ell\otimes\overline u_\ell)+\nabla\overline p_\ell=\nu\Delta\overline u_\ell-\nabla\cdot\tau_\ell+\overline f_\ell,\qquad \nabla\cdot\overline u_\ell=0.$$

Writing $e_\ell=|\overline u_\ell|^2/2$, the pointwise resolved-energy balance is

$$\partial_t e_\ell+\sum_j\partial_j\!\left(e_\ell\overline u_{\ell,j}+\overline p_\ell\overline u_{\ell,j}-\nu\sum_i\overline u_{\ell,i}\partial_j\overline u_{\ell,i}+\sum_i\overline u_{\ell,i}\tau_{\ell,ij}\right)=-\nu|\nabla\overline u_\ell|_F^2+\tau_\ell:\nabla\overline u_\ell+\overline f_\ell\cdot\overline u_\ell,$$

where $|A|_F^2:=\sum_{i,j}|A_{ij}|^2$. Consequently, for every $t\in I$,

$$\frac{d}{dt}\frac12\int_{\mathbb T_L^d}|\overline u_\ell|^2\,d\mu_L+\nu\int_{\mathbb T_L^d}|\nabla\overline u_\ell|_F^2\,d\mu_L=\int_{\mathbb T_L^d}\tau_\ell:\nabla\overline u_\ell\,d\mu_L+\int_{\mathbb T_L^d}\overline f_\ell\cdot\overline u_\ell\,d\mu_L.$$

The forward-transfer sign convention is $\Pi_\ell=-\tau_\ell:\nabla\overline u_\ell$; this theorem makes no sign assertion for $\Pi_\ell$.

## Statement references

[[def-fd-positive-convolution-fluid-filter]]

[[def-countable-choice|Countable Choice axiom]]

[[lem-fd-periodic-filter-normalization-and-commutation]]

[[prop-divergence-satisfies-the-product-rule]]

[[thm-integration-by-parts]]

[[thm-riemann-fubini-on-product-rectangles]]

[University of Washington, ME 544, *Large-Eddy Simulation* lecture notes, §3, printed pp. 10–12, filtered momentum, residual stress, resolved-energy equation (13)–(24)](https://courses.washington.edu/mengr544/handouts/hd-les.pdf)

[Gregory L. Eyink, *The ‘Multifractal Model’ of Turbulence and A Priori Estimates in Large-Eddy Simulation*, §I–II, printed pp. 2–7, filtered equations, stress covariance, and transfer convention](https://arxiv.org/pdf/chao-dyn/9602018)

## Facts & Assumptions

**Given:** Countable Choice and $d\in\{1,2,3\}$, $L>0$, $0<\ell<L/2$, $I$ open, a nonnegative unit-mass smooth kernel supported in a compact subset of $B_1(0)$, and $u\in C^1(I;C^\infty(\mathbb T_L^d;\mathbb R^d))$.

[A1] Adopted Countable Choice axiom: every countable family of nonempty sets has a choice function ([[def-countable-choice]]); the normalized periodic torus convention is stated and proved under this axiom.

[A2] Additional adopted mathematical PDE premise, used only for the filtered momentum and energy conclusions: $\nu>0$ is constant, $p,f$ are smooth, $\partial_tu_i+\partial_j(u_i u_j)+\partial_i p=\nu\partial_j\partial_j u_i+f_i$ and $\partial_i u_i=0$ pointwise.

[F1] [[def-fd-positive-convolution-fluid-filter]]: $\overline q_\ell(x)=\int_{\mathbb T_L^d}G_\ell(r)q(x-r)\,dx$, $\tau_\ell=\overline{u\otimes u}_\ell-\overline u_\ell\otimes\overline u_\ell$, and $\Pi_\ell=-\tau_\ell:\nabla\overline u_\ell$.

[F2] [[lem-fd-periodic-filter-normalization-and-commutation]]: $G_\ell$ has unit mass, the filter commutes with spatial and time derivatives, and its Euclidean representation is $\overline q_\ell(x)=\int K(s)q(x-\ell s)\,ds$.

[F3] [[prop-divergence-satisfies-the-product-rule]]: for a smooth scalar $g$ and smooth vector field $X$ on a volume-form manifold, $\operatorname{div}(gX)=dg(X)+g\operatorname{div}X$.

[F4] [[thm-integration-by-parts]]: for differentiable functions with integrable derivatives on a closed interval, $\int_a^b u v'=u(b)v(b)-u(a)v(a)-\int_a^b u'v$.

[F5] [[thm-continuous-implies-integrable]]: a continuous real function on a compact interval is Riemann integrable.

[F6] [[thm-riemann-fubini-on-product-rectangles]]: an integrable function on a product rectangle with integrable sections has equal multiple and iterated Riemann integrals.

[F7] [[thm-multidimensional-riemann-criterion]]: bounded functions on a nondegenerate rectangle are Riemann integrable when every positive tolerance admits a grid with a smaller Darboux gap; closed rectangles are compact and continuous functions on them are uniformly continuous ([[thm-heine-borel-rn]], [[thm-heine-cantor-metric]]).

[F8] [[thm-multidimensional-integral-properties]]: the multidimensional Riemann integral is linear and order preserving.

[F9] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]]: a continuous integrand with a continuous parameter derivative on a compact rectangle can be differentiated under its one-dimensional Riemann integral.

[F10] [[def-multidimensional-darboux-sums]]: the Darboux gap is the sum of cell oscillations times cell volumes; [[def-multidimensional-grid-partition]]: grid cells cover the box and their volumes sum to its volume; [[lem-finite-sum-laws]]: finite sums preserve inequalities.

[F11] [[cor-archimedean-reciprocal]]: for each $\eta>0$ there is $N\ge1$ with $1/N<\eta$, so a period cell admits uniform grids of arbitrarily small mesh.

## Proof

**Proof technique:** direct.

1.1 Put $\delta_su(x,t)=u(x-\ell s,t)-u(x,t)$. Unit mass and the Euclidean filter representation give $m_\ell=\overline u_\ell-u$. Expanding componentwise gives $\int K(s)\,\delta_su\otimes\delta_su\,ds=\overline{u\otimes u}_\ell-\overline u_\ell\otimes u-u\otimes\overline u_\ell+u\otimes u$, while $m_\ell\otimes m_\ell=(\overline u_\ell-u)\otimes(\overline u_\ell-u)$. Subtraction gives the stated covariance formula and symmetry. [A1, F1, F2, F8, algebra]

1.2 Apply the filter to [A2]. By [F2], time and spatial derivatives pass through the filter, so $\partial_t\overline u_\ell+\nabla\cdot\overline{u\otimes u}_\ell+\nabla\overline p_\ell=\nu\Delta\overline u_\ell+\overline f_\ell$ and $\nabla\cdot\overline u_\ell=0$. Substituting $\overline{u\otimes u}_\ell=\overline u_\ell\otimes\overline u_\ell+\tau_\ell$ gives the stated filtered system. [A1, A2, F1, F2, algebra]

2.1 For $z\in\mathbb R^d$, contraction of the covariance formula gives $z^{\mathsf T}\tau_\ell z=\int K(s)(z\cdot\delta_su)^2\,ds-(\int K(s)z\cdot\delta_su\,ds)^2=\int K(s)(z\cdot\delta_su-z\cdot m_\ell)^2\,ds\ge0$, where unit mass expands the square and $K\ge0$ makes the last integrand nonnegative. Thus $\tau_\ell$ is positive semidefinite. [F1, F2, step 1.1, algebra]

2.2 In components, $\partial_j(\overline u_{\ell,i}\overline u_{\ell,j})=\overline u_{\ell,j}\partial_j\overline u_{\ell,i}+\overline u_{\ell,i}\partial_j\overline u_{\ell,j}$; the last term vanishes by $\nabla\cdot\overline u_\ell=0$. Hence the filtered quadratic divergence is the incompressible transport term used in the energy balance. [step 1.2, algebra]

3.1 Multiply the filtered momentum equation by $\overline u_{\ell,i}$ and sum over $i$. The product rule [F3] and $\nabla\cdot\overline u_\ell=0$ give $\overline u_{\ell,i}\partial_i\overline p_\ell=\partial_i(\overline p_\ell\overline u_{\ell,i})$ and $-\overline u_{\ell,i}\partial_j\tau_{\ell,ij}=-\partial_j(\overline u_{\ell,i}\tau_{\ell,ij})+\tau_{\ell,ij}\partial_j\overline u_{\ell,i}$. The scalar product rule gives $\nu\overline u_{\ell,i}\partial_j\partial_j\overline u_{\ell,i}=\nu\partial_j(\overline u_{\ell,i}\partial_j\overline u_{\ell,i})-\nu(\partial_j\overline u_{\ell,i})^2$, and [F2] supplies $\partial_t(|\overline u_\ell|^2/2)=\overline u_{\ell,i}\partial_t\overline u_{\ell,i}$. Collecting the divergence terms yields the stated pointwise local energy equation. [F2, F3, step 1.2, step 2.2, algebra]

4.1 On the closed period cell $Q=[0,L]^d$, each component of the local energy flux and its divergence is continuous. By [F7], each is bounded and uniformly continuous. Given $\varepsilon>0$, let $\delta>0$ be a uniform-continuity radius for tolerance $\varepsilon/(2L^d)$. Choose $N\ge1$ with $1/N<\delta/(L\sqrt d)$ by [F11] and divide each coordinate interval into $N$ equal parts. Each cell's Euclidean diameter is at most $L\sqrt d/N<\delta$, so its oscillation is below that tolerance; by [F10] the Darboux gap is at most $(\varepsilon/(2L^d))\sum_i\operatorname{vol}(Q_i)=\varepsilon/2<\varepsilon$. The criterion [F7] makes the flux components and their divergence Riemann integrable on $Q$. [F7, F10, F11, step 3.1]

5.1 Fix all coordinates but $x_j$. Apply [F4] to $u=1$ and $v$ equal to the $j$-th local flux component on $[0,L]$; its derivative is continuous and integrable by [F5], and periodicity makes the endpoint term zero. By [F6], integrating these zero one-dimensional integrals over the other coordinates gives zero integral for the total divergence on $\mathbb T_L^d$. [F4, F5, F6, step 4.1]

6.1 Fix $t_0\in I$ and choose a compact interval $J\subset I$ with $t_0$ in its interior. On $J\times Q$, $e_\ell$ and $\partial_t e_\ell$ are continuous, so [F7] gives boundedness and uniform continuity and its grid criterion gives Riemann integrability of each spatial section. By [F6] the spatial integral is an iterated integral; applying [F9] successively to its $d$ one-dimensional integrations passes $\partial_t$ through each integral at $t_0$. Integrating the local identity from step 3.1 over $Q$, using step 5.1 to make the total-divergence integral zero, and dividing by $L^d$ for normalized Haar measure gives the stated global resolved-energy identity at $t_0$. [F6, F7, F9, step 3.1, step 5.1, algebra] ∎

## Remarks

The covariance identity is exact and the stress is positive semidefinite because the kernel is nonnegative. The transfer $\Pi_\ell$ is a separate contraction with the resolved gradient; this theorem makes no universal sign assertion. The filtered stress is an exact residual of the stated smooth equation, not an adopted closure model.
