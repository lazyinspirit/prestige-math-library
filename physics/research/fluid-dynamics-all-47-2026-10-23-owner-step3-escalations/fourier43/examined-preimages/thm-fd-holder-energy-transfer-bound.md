---
id: thm-fd-holder-energy-transfer-bound
kind: theorem
title: Hölder bound for filtered subfilter energy transfer
status: draft
origin: pipeline
domain: mathematics
dependency_level: 3
deps:
  - def-countable-choice
  - def-fd-positive-convolution-fluid-filter
  - lem-fd-periodic-filter-normalization-and-commutation
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
  - thm-integration-by-parts
  - thm-riemann-fubini-on-product-rectangles
  - thm-multidimensional-integral-properties
  - def-integrable-real-and-complex-functions-and-their-integrals
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - thm-lebesgue-measure-is-a-complete-measure
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-borel-sets-are-lebesgue-measurable
dependency_roles:
  def-countable-choice: mathematical-premise
  def-fd-positive-convolution-fluid-filter: mathematical-premise
  lem-fd-periodic-filter-normalization-and-commutation: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-integration-by-parts: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-multidimensional-integral-properties: mathematical-premise
  def-integrable-real-and-complex-functions-and-their-integrals: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
  def-lebesgue-measure-and-the-lebesgue-sigma-algebra: mathematical-premise
  thm-lebesgue-measure-is-a-complete-measure: mathematical-premise
  thm-lebesgue-measure-of-a-box-of-every-kind: mathematical-premise
  thm-borel-sets-are-lebesgue-measurable: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "University of Washington, ME 544, Large-Eddy Simulation lecture notes, 8
        May 2018"
      url: "https://courses.washington.edu/mengr544/handouts/hd-les.pdf"
    - title: "Gregory L. Eyink, The ‘Multifractal Model’ of Turbulence and A Priori
        Estimates in Large-Eddy Simulation, I. Subgrid Flux and Locality of
        Energy Transfer, arXiv:chao-dyn/9602018v1"
      url: "https://arxiv.org/pdf/chao-dyn/9602018"
---
## Statement

Assume the Axiom of Countable Choice required by the normalized periodic torus convention. Let $d\in\{1,2,3\}$, $L>0$, and $\mathbb T_L^d=(\mathbb R/L\mathbb Z)^d$ with normalized Haar measure $d\mu_L=L^{-d}dx$. Let $K:\mathbb R^d\to[0,\infty)$ be smooth, vanish outside a compact subset of $B_1(0)$, and satisfy $\int K(s)\,ds=1$. Let $I\subseteq\mathbb R$ be an open interval, and let $0<\ell<L/2$. For a finite-dimensional field $q:I\times\mathbb T_L^d\to\mathbb R^m$ whose spatial slices are smooth and periodic, use the periodized filter on each fixed-time slice

$$G_\ell(r)=\sum_{n\in\mathbb Z^d}\ell^{-d}K\!\left(\frac{r+Ln}{\ell}\right),\qquad \overline q_\ell(x,t)=\int_{\mathbb T_L^d}G_\ell(r)q(x-r,t)\,dx.$$

Here $dx$ is volume measure on a period cell, and each Euclidean $s$-integral is the Riemann integral of a compactly supported continuous function on any box containing its support.

Let $u:I\times\mathbb T_L^d\to\mathbb R^d$. Assume that $\partial_tu$ exists and is jointly continuous on $I\times\mathbb T_L^d$, and that for every spatial multi-index $\beta$, $\partial_x^\beta u$ exists and is jointly continuous there, including $\beta=0$. No time derivatives of positive-order spatial derivatives are assumed. Define

$$\tau_\ell=\overline{u\otimes u}_\ell-\overline u_\ell\otimes\overline u_\ell,\qquad \Pi_\ell=-\tau_\ell:\nabla\overline u_\ell.$$

For $0<\alpha<1$, let $A:I\to[0,\infty)$ and assume that for every $(x,t)\in\mathbb T_L^d\times I$ and every $s\in\operatorname{supp}K$,

$$|u(x-\ell s,t)-u(x,t)|\le A(t)\ell^\alpha|s|^\alpha.$$

Using the finite dimensionless kernel moments $M_\gamma=\int K(s)|s|^\gamma\,ds$ and $N_\gamma=\max_j\int|\partial_jK(s)|\,|s|^\gamma\,ds$, define $C_{d,K,\alpha}:=d^2(M_{2\alpha}+M_\alpha^2)N_\alpha$. Then for every $(x,t)$,

$$|\Pi_\ell(x,t)|\le C_{d,K,\alpha}A(t)^3\ell^{3\alpha-1}.$$

For every compact interval $J\subset I$ such that $A^3$ is Lebesgue measurable on $J$ and $\int_J A(t)^3\,dt<\infty$ (equivalently, $A^3\in L^1(J,dt)$, with $dt$ denoting Lebesgue measure),

$$\int_J\sup_{x\in\mathbb T_L^d}|\Pi_\ell(x,t)|\,dt\le C_{d,K,\alpha}\ell^{3\alpha-1}\int_J A(t)^3\,dt.$$

Consequently this upper bound tends to zero as $\ell\downarrow0$ when $\alpha>1/3$. At $\alpha=1/3$ it is scale-independent and gives no decay conclusion. With $x,L,\ell$ measured in m, $t$ in s, and $u$ in m s$^{-1}$, the Hölder factor $A$ has units m$^{1-\alpha}$ s$^{-1}$, the moments and constant $C_{d,K,\alpha}$ are dimensionless, and $\Pi_\ell$ has units m$^2$ s$^{-3}$. The estimate is conditional on the stated Hölder increment bound; it neither supplies that bound nor proves an endpoint conservation theorem, a turbulent $4/5$ law, or positive anomalous dissipation.

## Statement references

[[def-fd-positive-convolution-fluid-filter]]

[[def-countable-choice|Countable Choice axiom]]

[[thm-fd-filtered-covariance-energy]]

[[lem-fd-periodic-filter-normalization-and-commutation]]

[[thm-integration-by-parts]]

[[def-integrable-real-and-complex-functions-and-their-integrals]]

[[prop-order-and-scalar-rules-for-the-nonnegative-integral]]

[[thm-heine-borel-rn]]

[[thm-heine-cantor-metric]]

[Gregory L. Eyink, *The ‘Multifractal Model’ of Turbulence and A Priori Estimates in Large-Eddy Simulation*, §II, printed pp. 5–8, equations (12)–(25), increment covariance and stress/flux estimates under a Hölder hypothesis](https://arxiv.org/pdf/chao-dyn/9602018)

[University of Washington, ME 544, *Large-Eddy Simulation* lecture notes, §2–3, printed pp. 5–12, filter conditions and resolved-energy convention used by the preceding supplier](https://courses.washington.edu/mengr544/handouts/hd-les.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the periodic kernel and field with the regularity in the Statement, an exponent $0<\alpha<1$, the increment bound in the Statement, and a nonnegative function $A$. The time-integrated conclusion additionally assumes the stated Lebesgue measurability and integrability of $A^3$ on $J$.

[A1] The increment hypothesis is $|\delta_su(x,t)|\le A(t)\ell^\alpha|s|^\alpha$ for $\delta_su(x,t):=u(x-\ell s,t)-u(x,t)$ and $s\in\operatorname{supp}K$.

[A2] Adopt Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]); the Fourier-Sobolev torus convention is stated and proved under this axiom.

[F1] [[def-fd-positive-convolution-fluid-filter]]: $\overline q_\ell(x)=\int_{\mathbb T_L^d}G_\ell(r)q(x-r)\,dx$, $\tau_\ell=\overline{u\otimes u}_\ell-\overline u_\ell\otimes\overline u_\ell$, and $\Pi_\ell=-\tau_\ell:\nabla\overline u_\ell$.

[F2] [[lem-fd-periodic-filter-normalization-and-commutation]]: the kernel has unit mass, the filter has Euclidean representation, spatial derivatives commute with filtering at each fixed time, and $M_\gamma,N_\gamma$ are finite for $\gamma>0$. The spatial commutation clause applies to each time slice by extending that slice constantly in time. Its proof establishes Riemann integrability of the continuous compactly supported kernel factors and their products with periodic fields and spatial derivatives used here.

[F3] [[thm-integration-by-parts]]: differentiable factors on a compact interval whose derivatives are Riemann integrable satisfy the integration-by-parts identity; the integrability hypotheses ensure both product integrals exist.

[F4] [[thm-riemann-fubini-on-product-rectangles]]: a Riemann-integrable function on a product of nondegenerate rectangles, with integrable sections, has equal multiple and iterated integrals; continuous compactly supported integrands here satisfy those conditions.

[F5] [[thm-multidimensional-integral-properties]]: for Riemann-integrable functions on a nondegenerate rectangle, the integral is linear and order preserving, $|g|$ is integrable, and $|\int g|\le\int|g|$.

[F6] [[def-integrable-real-and-complex-functions-and-their-integrals]]: a real Lebesgue-measurable function is in $L^1(J,dt)$ exactly when $\int_J|g|\,dt<\infty$; for nonnegative $g$, this is $\int_Jg\,dt<\infty$.

[F7] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: on any measure space, nonnegative measurable $f\le g$ implies $\int f\le\int g$, and multiplication by a nonnegative finite scalar commutes with the nonnegative integral, with the zero case stated separately.

[F8] [[thm-heine-borel-rn]] and [[thm-heine-cantor-metric]]: closed period cells and their products with compact time intervals are compact, and continuous functions on these compact metric sets are uniformly continuous.

[F9] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]] defines $\mathcal L(\mathbb R)$ and $\lambda_1=\lambda_1^*\!\restriction_{\mathcal L(\mathbb R)}$. Under Countable Choice, [[thm-lebesgue-measure-is-a-complete-measure]] makes $(\mathbb R,\mathcal L(\mathbb R),\lambda_1)$ a complete measure space. By [[thm-lebesgue-measure-of-a-box-of-every-kind]], every compact interval $[a,b]$, including $a=b$, is Lebesgue measurable with measure $b-a$.

[F10] [[thm-borel-sets-are-lebesgue-measurable]]: under Countable Choice every Borel subset of $\mathbb R$, in particular every open set, belongs to $\mathcal L(\mathbb R)$.

## Proof

**Proof technique:** direct.

1.1 Put $\delta_su(x,t)=u(x-\ell s,t)-u(x,t)$ and $m_\ell(x,t)=\int K(s)\delta_su(x,t)\,ds$. By unit mass and the Euclidean representation in [F2], $m_\ell=\overline u_\ell-u$. Expanding componentwise and using linearity [F5] gives $\int K(s)\delta_{s,i}u\,\delta_{s,j}u\,ds=\overline{u_i u_j}_\ell-\overline u_{\ell,i}u_j-u_i\overline u_{\ell,j}+u_i u_j$. Subtracting $m_{\ell,i}m_{\ell,j}=(\overline u_{\ell,i}-u_i)(\overline u_{\ell,j}-u_j)$ yields $\tau_{\ell,ij}$. Thus the covariance identity holds at each fixed time under the stated spatial regularity, without a time-regularity hypothesis on its spatial derivatives. [F1, F2, F5, algebra]

1.2 By [F1], each stress component is $\tau_{\ell,ij}=\int K(s)\delta_{s,i}u\,\delta_{s,j}u\,ds-m_{\ell,i}m_{\ell,j}$. From [F5], nonnegativity of $K$, and [A1], $|\int K(s)\delta_{s,i}u\,\delta_{s,j}u\,ds|\le A(t)^2\ell^{2\alpha}M_{2\alpha}$ and $|m_{\ell,i}|\le A(t)\ell^\alpha M_\alpha$. Therefore $|\tau_{\ell,ij}|\le A(t)^2\ell^{2\alpha}(M_{2\alpha}+M_\alpha^2)$. [A1, F1, F2, F5, algebra]

1.3 By [F2], spatial differentiation at fixed $t$ passes through the convolution. Since $\partial_{s_j}u_i(x-\ell s,t)=-\ell\partial_j u_i(x-\ell s,t)$, integration by parts in $s_j$ over a box containing $\operatorname{supp}K$ gives $\partial_j\overline u_{\ell,i}=\ell^{-1}\int\partial_jK(s)u_i(x-\ell s,t)\,ds$. Compact support gives $\int\partial_jK(s)\,ds=0$, so this equals $\ell^{-1}\int\partial_jK(s)\delta_{s,i}u(x,t)\,ds$. The product-rectangle integrals are justified by [F4], and integration by parts by [F3]. Applying [F5] and [A1] gives $|\partial_j\overline u_{\ell,i}(x,t)|\le A(t)\ell^{\alpha-1}\int|\partial_jK(s)|\,|s|^\alpha\,ds\le A(t)\ell^{\alpha-1}N_\alpha$. [A1, F2, F3, F4, F5, algebra]

2.1 Summing the $d^2$ products in $\Pi_\ell=-\sum_{i,j}\tau_{\ell,ij}\partial_j\overline u_{\ell,i}$ and using steps 1.3 and 1.2 gives $|\Pi_\ell(x,t)|\le d^2(M_{2\alpha}+M_\alpha^2)N_\alpha A(t)^3\ell^{3\alpha-1}=C_{d,K,\alpha}A(t)^3\ell^{3\alpha-1}$. [F1, step 1.3, step 1.2, algebra]

3.1 Fix a compact interval $J\subset I$. By [A2] and [F9], $J$ is Lebesgue measurable, including when it is a singleton. Set $\mathcal L_J:=\{J\cap E:E\in\mathcal L(\mathbb R)\}$ and $\lambda_J(B):=\lambda_1(B)$ for $B\in\mathcal L_J$; this is a measure on $J$, since its empty-set value and countable additivity are inherited from $\lambda_1$. Here $dt$ means $d\lambda_J$. If $J$ is empty, both displayed time integrals are zero; otherwise lift the fields periodically to a period cell $Q=[0,L]^d$. Choose closed boxes $S\subset\mathbb R^d$ and $Q'\subset\mathbb R^d$ with $\operatorname{supp}K\subset S$, $Q\subset Q'$, and $x-\ell s\in Q'$ whenever $x\in Q$ and $s\in S$. By [F8], $Q'\times J$ and $Q\times J\times S$ are compact. The lifts of $u$ and $\partial_j u$ are uniformly continuous on $Q'\times J$, so the maps $(x,t,s)\mapsto u(x-\ell s,t)$ and $(x,t,s)\mapsto\partial_j u(x-\ell s,t)$ are uniformly continuous on $Q\times J\times S$. The convolution formulas and the spatial derivative formula from [F2] therefore make $\overline u_\ell$, $\overline{u\otimes u}_\ell$, $\nabla\overline u_\ell$, and $\Pi_\ell$ continuous on $Q\times J$. Thus $F_\ell(t):=\sup_{x\in\mathbb T_L^d}|\Pi_\ell(x,t)|$ is finite and continuous: $|F_\ell(t)-F_\ell(s)|\le\sup_x|\Pi_\ell(x,t)-\Pi_\ell(x,s)|\to0$ as $s\to t$. For each open set $V\subseteq\mathbb R$, continuity makes $F_\ell^{-1}(V)$ relatively open in $J$, hence equal to $J\cap O$ for some open $O\subseteq\mathbb R$; [F10] gives $O\in\mathcal L(\mathbb R)$, so $F_\ell^{-1}(V)\in\mathcal L_J$. Thus $F_\ell:J\to[0,\infty)$ is $\mathcal L_J$-measurable. By step 2.1, $0\le F_\ell(t)\le C_{d,K,\alpha}\ell^{3\alpha-1}A(t)^3$ on $J$. The given $A^3$ is nonnegative and $\mathcal L_J$-measurable with finite $\lambda_J$ integral, while $C_{d,K,\alpha}\ell^{3\alpha-1}$ is a finite nonnegative scalar by [F2] and $\ell>0$. Apply [F7] on the measure space $(J,\mathcal L_J,\lambda_J)$ and use [F6] to obtain the claimed finite integral inequality, including the zero-scalar case without forming $0\cdot\infty$. When $\alpha>1/3$, $3\alpha-1>0$, so its right-hand side tends to zero as $\ell\downarrow0$; at $\alpha=1/3$ its scale factor is $1$, which gives no decay conclusion. [A2, F2, F6, F7, F8, F9, F10, step 2.1, algebra] ∎

## Remarks

The bound is obtained from exact filter identities plus an explicit Hölder increment assumption. The exponent $1/3$ marks the threshold of this estimate only; no regularity premise for three-dimensional Euler or Navier–Stokes solutions is inferred.
