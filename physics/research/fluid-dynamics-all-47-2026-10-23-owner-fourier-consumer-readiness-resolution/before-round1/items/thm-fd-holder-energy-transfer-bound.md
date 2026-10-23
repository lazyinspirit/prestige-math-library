---
id: thm-fd-holder-energy-transfer-bound
kind: theorem
title: Hölder bound for filtered subfilter energy transfer
status: draft
origin: pipeline
domain: mathematics
dependency_level: 4
deps:
  - def-countable-choice
  - def-fd-positive-convolution-fluid-filter
  - thm-fd-filtered-covariance-energy
  - lem-fd-periodic-filter-normalization-and-commutation
  - thm-integration-by-parts
  - thm-riemann-fubini-on-product-rectangles
  - thm-multidimensional-integral-properties
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-positive-convolution-fluid-filter: mathematical-premise
  thm-fd-filtered-covariance-energy: mathematical-premise
  lem-fd-periodic-filter-normalization-and-commutation: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "University of Washington, ME 544, Large-Eddy Simulation lecture notes, 8 May 2018"
      url: "https://courses.washington.edu/mengr544/handouts/hd-les.pdf"
    - title: "Gregory L. Eyink, The ‘Multifractal Model’ of Turbulence and A Priori Estimates in Large-Eddy Simulation, I. Subgrid Flux and Locality of Energy Transfer, arXiv:chao-dyn/9602018v1"
      url: "https://arxiv.org/pdf/chao-dyn/9602018"
---
## Statement

Assume the Axiom of Countable Choice required by the normalized periodic torus convention. Let $d\in\{1,2,3\}$, $L>0$, and $\mathbb T_L^d=(\mathbb R/L\mathbb Z)^d$ with normalized Haar measure $d\mu_L=L^{-d}dx$. Let $K:\mathbb R^d\to[0,\infty)$ be smooth, vanish outside a compact subset of $B_1(0)$, and satisfy $\int K(s)\,ds=1$. For $0<\ell<L/2$, use the periodized filter

$$G_\ell(r)=\sum_{n\in\mathbb Z^d}\ell^{-d}K\!\left(\frac{r+Ln}{\ell}\right),\qquad \overline q_\ell(x)=\int_{\mathbb T_L^d}G_\ell(r)q(x-r)\,dx.$$

Let $I\subseteq\mathbb R$ be an open interval and let $u:I\times\mathbb T_L^d\to\mathbb R^d$ have continuous time derivative and continuous spatial derivatives of every order. Define

$$\tau_\ell=\overline{u\otimes u}_\ell-\overline u_\ell\otimes\overline u_\ell,\qquad \Pi_\ell=-\tau_\ell:\nabla\overline u_\ell.$$

For $0<\alpha<1$, let $A:I\to[0,\infty)$ be measurable and assume that for every $(x,t)\in\mathbb T_L^d\times I$ and every $s\in\operatorname{supp}K$,

$$|u(x-\ell s,t)-u(x,t)|\le A(t)\ell^\alpha|s|^\alpha.$$

Using the finite dimensionless kernel moments $M_\gamma=\int K(s)|s|^\gamma\,ds$ and $N_\gamma=\max_j\int|\partial_jK(s)|\,|s|^\gamma\,ds$, define $C_{d,K,\alpha}:=d^2(M_{2\alpha}+M_\alpha^2)N_\alpha$. Then for every $(x,t)$,

$$|\Pi_\ell(x,t)|\le C_{d,K,\alpha}A(t)^3\ell^{3\alpha-1}.$$

For every compact interval $J\subset I$ with $A^3\in L^1(J)$,

$$\int_J\|\Pi_\ell(\cdot,t)\|_{L^\infty(\mathbb T_L^d)}\,dt\le C_{d,K,\alpha}\ell^{3\alpha-1}\int_J A(t)^3\,dt.$$

Consequently this upper bound tends to zero as $\ell\downarrow0$ when $\alpha>1/3$. At $\alpha=1/3$ it is scale-independent and gives no decay conclusion. With $x,L,\ell$ measured in m, $t$ in s, and $u$ in m s$^{-1}$, the Hölder factor $A$ has units m$^{1-\alpha}$ s$^{-1}$, the moments and constant $C_{d,K,\alpha}$ are dimensionless, and $\Pi_\ell$ has units m$^2$ s$^{-3}$. The estimate is conditional on the stated Hölder increment bound; it neither supplies that bound nor proves an endpoint conservation theorem, a turbulent $4/5$ law, or positive anomalous dissipation.

## Statement references

[[def-fd-positive-convolution-fluid-filter]]

[[def-countable-choice|Countable Choice axiom]]

[[thm-fd-filtered-covariance-energy]]

[[lem-fd-periodic-filter-normalization-and-commutation]]

[[thm-integration-by-parts]]

[Gregory L. Eyink, *The ‘Multifractal Model’ of Turbulence and A Priori Estimates in Large-Eddy Simulation*, §II, printed pp. 5–8, equations (12)–(25), increment covariance and stress/flux estimates under a Hölder hypothesis](https://arxiv.org/pdf/chao-dyn/9602018)

[University of Washington, ME 544, *Large-Eddy Simulation* lecture notes, §2–3, printed pp. 5–12, filter conditions and resolved-energy convention used by the preceding supplier](https://courses.washington.edu/mengr544/handouts/hd-les.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the periodic kernel and smooth field in the statement, an exponent $0<\alpha<1$, the increment bound in the statement, and a measurable nonnegative $A$ with $A^3\in L^1(J)$ on the stated compact time interval.

[A1] The increment hypothesis is $|\delta_su(x,t)|\le A(t)\ell^\alpha|s|^\alpha$ for $\delta_su(x,t):=u(x-\ell s,t)-u(x,t)$ and $s\in\operatorname{supp}K$.

[A2] Adopt Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]); the Fourier-Sobolev torus convention is stated and proved under this axiom.

[F1] [[thm-fd-filtered-covariance-energy]]: $\tau_\ell=\int K\,\delta_su\otimes\delta_su\,ds-m_\ell\otimes m_\ell$, where $m_\ell=\int K\,\delta_su\,ds$, and $\Pi_\ell=-\tau_\ell:\nabla\overline u_\ell$.

[F2] [[lem-fd-periodic-filter-normalization-and-commutation]]: $M_\gamma$ and $N_\gamma$ are finite for every $\gamma>0$, and the filter has the Euclidean convolution representation.

[F3] [[thm-integration-by-parts]]: differentiable factors on a compact interval with integrable derivatives satisfy the ordinary integration-by-parts identity; if a factor is compactly supported, its boundary term vanishes.

[F4] [[thm-riemann-fubini-on-product-rectangles]]: integrable functions on product rectangles may be integrated one coordinate at a time.

[F5] [[thm-multidimensional-integral-properties]]: the multidimensional integral is order preserving and satisfies $|\int g|\le\int|g|$ for integrable $g$.

## Proof

**Proof technique:** direct.

1.1 By the Euclidean convolution representation, $\partial_j\overline u_{\ell,i}=\int K(s)\partial_j u_i(x-\ell s,t)\,ds$. Since $\partial_{s_j}u_i(x-\ell s,t)=-\ell\partial_j u_i(x-\ell s,t)$, integration by parts in $s_j$ over a box containing $\operatorname{supp}K$ gives $\partial_j\overline u_{\ell,i}=\ell^{-1}\int\partial_jK(s)u_i(x-\ell s,t)\,ds=\ell^{-1}\int\partial_jK(s)(u_i(x-\ell s,t)-u_i(x,t))\,ds$. Here $K$ vanishes at the box boundary and $\int\partial_jK(s)\,ds=0$; the iterated integration is justified by [F4] and the boundary term is zero by [F3]. [A2, F2, F3, F4, algebra]

1.2 By [F1], each stress component is $\tau_{\ell,ij}=\int K(s)\delta_{s,i}u\,\delta_{s,j}u\,ds-m_{\ell,i}m_{\ell,j}$. From [F5], nonnegativity of $K$, and [A1], $|\int K(s)\delta_{s,i}u\,\delta_{s,j}u\,ds|\le A(t)^2\ell^{2\alpha}M_{2\alpha}$ and $|m_{\ell,i}|\le A(t)\ell^\alpha M_\alpha$. Therefore $|\tau_{\ell,ij}|\le A(t)^2\ell^{2\alpha}(M_{2\alpha}+M_\alpha^2)$. [A1, A2, F1, F2, F5, algebra]

2.1 Apply [F5] and [A1] to the last integral in step 1.1. For each component, $|\partial_j\overline u_{\ell,i}(x,t)|\le A(t)\ell^{\alpha-1}\int|\partial_jK(s)|\,|s|^\alpha\,ds\le A(t)\ell^{\alpha-1}N_\alpha$. [A1, F2, F5, step 1.1]

3.1 Summing the $d^2$ products in $\Pi_\ell=-\sum_{i,j}\tau_{\ell,ij}\partial_j\overline u_{\ell,i}$ and using steps 2.1 and 1.2 gives $|\Pi_\ell(x,t)|\le d^2(M_{2\alpha}+M_\alpha^2)N_\alpha A(t)^3\ell^{3\alpha-1}=C_{d,K,\alpha}A(t)^3\ell^{3\alpha-1}$. [F1, step 2.1, step 1.2, algebra]

4.1 On each compact interval $J$, continuity of $\Pi_\ell$ on the compact product $\mathbb T_L^d\times J$ makes $t\mapsto\sup_x|\Pi_\ell(x,t)|$ continuous: the difference between its values at $t$ and $s$ is bounded by $\sup_x|\Pi_\ell(x,t)-\Pi_\ell(x,s)|$, which tends to zero as $s\to t$. The pointwise bound is uniform in $x$, and integrating it over $J$ gives the stated time-integrated estimate. If $\alpha>1/3$, then $3\alpha-1>0$, and the right-hand side tends to zero as $\ell\downarrow0$ for fixed $J$ and $A$. At $\alpha=1/3$ the exponent is zero, so the estimate alone does not imply decay. [given, step 3.1, algebra] ∎

## Remarks

The bound is obtained from exact filter identities plus an explicit Hölder increment assumption. The exponent $1/3$ marks the threshold of this estimate only; no regularity premise for three-dimensional Euler or Navier–Stokes solutions is inferred.
