---
id: lem-cm-cauchy-formula-and-power-series-on-polydiscs
kind: lemma
title: Iterated Cauchy formula, power-series expansion and Cauchy estimates for functions continuous and separately holomorphic on a polydisc
status: draft
origin: pipeline
domain: mathematics
dependency_level: 2
deps:
- def-cm-complex-phase-domains-and-holomorphic-maps
- thm-cauchy-integral-formula-circle
- lem-cauchy-estimates-on-concentric-subdiscs
- cor-cauchy-estimates-taylor-coefficients
- thm-holomorphic-parameter-riemann-integral
- thm-riemann-fubini-on-product-rectangles
- thm-uniform-limit-interchanges-complex-line-integrals
- cor-ml-estimate-for-complex-line-integrals
- def-complex-contours-reversal-concatenation-and-closedness
- thm-riemann-stieltjes-and-parametric-contour-integrals-agree
- def-vector-valued-derivative-and-integral
- thm-norm-inequality-for-the-vector-valued-integral
- def-ck-and-multi-index-notation-in-several-variables
- def-complex-differentiability-holomorphic-and-entire
- rem-complex-plane-euclidean-dictionary
- def-ck-euclidean-maps-and-diffeomorphisms
- def-metric-ball
- def-metric-topology
- thm-heine-borel-rn
- thm-extreme-value-metric
dependency_roles:
  def-cm-complex-phase-domains-and-holomorphic-maps: mathematical-premise
  thm-cauchy-integral-formula-circle: mathematical-premise
  lem-cauchy-estimates-on-concentric-subdiscs: mathematical-premise
  cor-cauchy-estimates-taylor-coefficients: mathematical-premise
  thm-holomorphic-parameter-riemann-integral: mathematical-premise
  thm-riemann-fubini-on-product-rectangles: mathematical-premise
  thm-uniform-limit-interchanges-complex-line-integrals: mathematical-premise
  cor-ml-estimate-for-complex-line-integrals: mathematical-premise
  def-complex-contours-reversal-concatenation-and-closedness: mathematical-premise
  thm-riemann-stieltjes-and-parametric-contour-integrals-agree: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
  rem-complex-plane-euclidean-dictionary: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-metric-ball: mathematical-premise
  def-metric-topology: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
  - title: J. Lebl, Tasty Bits of Several Complex Variables, Chapter 1, Theorem 1.2.1 and the Cauchy estimates following Proposition 1.2.2, printed pages 18-23
    url: https://www.jirka.org/scv/scv.pdf
verification:
  precheck: pass
---

## Statement

Let $m\ge1$, let $a\in\mathbb C^m$, let $\rho$ be a polyradius with $0<\rho_k<\infty$, and let $f:\Delta_\rho(a)\to\mathbb C$ be continuous and holomorphic in each variable separately, that is, for every $k$ and every choice of the other coordinates the slice $\zeta\mapsto f(\dots,\zeta,\dots)$ is holomorphic on its open disc ([[def-cm-complex-phase-domains-and-holomorphic-maps]], [[def-complex-differentiability-holomorphic-and-entire]]). For a polyradius $r$ with $r_k<\rho_k$ put $M(r):=\sup_{\Gamma_r(a)}|f|$, a finite number.

Then:

1. **Iterated Cauchy formula.** For every $z\in\Delta_r(a)$,
 $$f(z)=\frac{1}{(2\pi i)^m}\oint_{|\zeta_1-a_1|=r_1}\cdots\oint_{|\zeta_m-a_m|=r_m}\frac{f(\zeta)}{\prod_{k}(\zeta_k-z_k)}\,d\zeta_1\cdots d\zeta_m,$$
 and the iterated integrals in any order of the variables agree.
2. **Power-series expansion.** For every polyradius $r'$ with $r_k<r'_k<\rho_k$, and every $z\in\Delta_r(a)$,
 $$f(z)=\sum_{\alpha\in\mathbb N^m}c_\alpha\,(z-a)^\alpha,\qquad c_\alpha=\frac{1}{(2\pi i)^m}\oint_{\Gamma_{r'}(a)}\frac{f(\zeta)\,d\zeta}{(\zeta-a)^{\alpha+\mathbf 1}},$$
 where the coefficients $c_\alpha$ do not depend on $r'$, the series converges absolutely and uniformly on every compact subset of $\Delta_\rho(a)$, and $|c_\alpha|\le M(r')\prod_k (r'_k)^{-\alpha_k}$.
3. **Holomorphy, derivatives and estimates.** The function $f$ is holomorphic on $\Delta_\rho(a)$ in the sense of [[def-cm-complex-phase-domains-and-holomorphic-maps]]. Its coordinate derivatives $\partial_{z_k}f$ exist everywhere on $\Delta_\rho(a)$, are continuous and holomorphic in each variable separately there, and satisfy, for $0<s_k<\rho_k$,
 $$|\partial_{z_k}f(a)|\le\frac{M(s)}{s_k}.$$

## Facts & Assumptions

**Given:** The polydisc $\Delta_\rho(a)$ with $0<\rho_k<\infty$; a continuous $f$ holomorphic in each variable separately; polyradii $r,r'$ with $r_k<r'_k<\rho_k$; the numbers $M(r),M(r')$.

[F1] One-variable Cauchy formula: if $g$ is holomorphic on $D(a,R)$ and $0<r<R$, then $g(z)=\frac{1}{2\pi i}\int_{|\zeta-a|=r}\frac{g(\zeta)}{\zeta-z}d\zeta$ for $|z-a|<r$, the contour integral agreeing with the parametrized Riemann integral $t\mapsto a+re^{it}$ over $[0,2\pi]$ ([[thm-cauchy-integral-formula-circle]], [[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]], [[def-complex-contours-reversal-concatenation-and-closedness]]).

[F2] One-variable Taylor estimates: for $g$ holomorphic on $D(a',R)$ with $|g|\le M$ on $|\zeta-a'|=s$, the $n$-th Taylor coefficient obeys $|c_n|\le M s^{-n}$ ([[cor-cauchy-estimates-taylor-coefficients]]); and $|g^{(n)}(z)|\le n!sM/(s-t)^{n+1}$ for $|z-a'|\le t<s$ ([[lem-cauchy-estimates-on-concentric-subdiscs]]).

[F3] Parameter integrals: if $\varphi:[0,2\pi]\times\Omega\to\mathbb C$ is jointly continuous and $\varphi(t,\cdot)$ is holomorphic on the open $\Omega\subseteq\mathbb C$ for every $t$, then $z\mapsto\int_0^{2\pi}\varphi(t,z)\,dt$ is holomorphic on $\Omega$ and the derivative integral formula holds under joint continuity of the derivative ([[thm-holomorphic-parameter-riemann-integral]]).

[F4] Riemann integrals over products of rectangles may be interchanged when the integrand is continuous on the compact product, and the integral of a uniformly convergent sequence of continuous integrands converges to the integral of the limit ([[thm-riemann-fubini-on-product-rectangles]], [[thm-uniform-limit-interchanges-complex-line-integrals]], [[def-vector-valued-derivative-and-integral]], [[thm-norm-inequality-for-the-vector-valued-integral]]).

[F5] The modulus estimate: $|\int_\gamma h\,dz|\le\sup_{\gamma^*}|h|\cdot L(\gamma)$ on a rectifiable contour, the circle $|\zeta-a|=s$ having length $2\pi s$ under the parametrization ([[cor-ml-estimate-for-complex-line-integrals]], [[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[F6] Multi-index notation: $\alpha\in\mathbb N^m$, $|\alpha|=\sum_k\alpha_k$, $\alpha!=\prod_k\alpha_k!$, $w^\alpha=\prod_kw_k^{\alpha_k}$, and the geometric series over $\mathbb N^m$ satisfies $\sum_\alpha\prod_k\theta_k^{\alpha_k}=\prod_k(1-\theta_k)^{-1}$ for $0\le\theta_k<1$ ([[def-ck-and-multi-index-notation-in-several-variables]], [[cor-cauchy-estimates-taylor-coefficients]]).

[F7] A continuous function on a compact set attains a finite maximum; closed bounded subsets of Euclidean space are compact ([[thm-extreme-value-metric]], [[thm-heine-borel-rn]], [[def-metric-topology]], [[def-metric-ball]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

## Proof

**Proof technique:** direct, with an internal finite induction on the number of variables for the iterated formula, then expansion of the geometric kernel and identification of the coefficients; differentiability follows from the expansion.

1.1 Iterated Cauchy formula. We prove clause 1 by induction on $m$. For $m=1$ it is exactly [F1]. Assume it holds for $m-1\ge1$ and let $f$ be as in the statement. Fix $z\in\Delta_r(a)$ and write $z=(z_1,z')$, $a=(a_1,a')$. For $z'$ fixed, the slice $\zeta_1\mapsto f(\zeta_1,z')$ is holomorphic on the disc $|z_1-a_1|<\rho_1$ and continuous on its closure as the restriction of a continuous map, so [F1] gives $f(z_1,z')=\frac{1}{2\pi i}\oint_{|\zeta_1-a_1|=r_1}\frac{f(\zeta_1,z')}{\zeta_1-z_1}d\zeta_1$. For each $\zeta_1$ on the circle, the function $z'\mapsto f(\zeta_1,z')$ is continuous and separately holomorphic on $\Delta_{\rho'}(a')$, $\rho'=(\rho_2,\dots,\rho_m)$, so the induction hypothesis gives $f(\zeta_1,z')$ as an $(m-1)$-fold iterated integral over $|\zeta_k-a_k|=r_k$, $k\ge2$, for $z'\in\Delta_{r'}(a')$. Substituting and interchanging the iterated integrals is legitimate by [F4], since after parametrizing each circle by $[0,2\pi]$ the integrand is continuous on the compact product and the denominators never vanish ($|z_k-a_k|<r_k$). This yields the displayed formula with the outer variable $\zeta_1$; the argument applies to every order of the variables, either directly or by [F4]. [given, F1, F4] 

1.2 Expansion of the kernel. Fix $z\in\Delta_r(a)$ and $r'$ with $r_k<r'_k<\rho_k$, and consider on the distinguished boundary $\Gamma_{r'}(a)$ the product of the geometric series $$\prod_{k=1}^m\frac{1}{\zeta_k-z_k}=\prod_{k=1}^m\sum_{n\ge0}\frac{(z_k-a_k)^n}{(\zeta_k-a_k)^{n+1}}=\sum_{\alpha\in\mathbb N^m}\frac{(z-a)^\alpha}{(\zeta-a)^{\alpha+\mathbf 1}},$$ valid because $|z_k-a_k|<r'_k=|\zeta_k-a_k|$; its partial sums $S_N(\zeta):=\sum_{|\alpha|_\infty\le N}(\zeta-a)^{-\alpha-\mathbf 1}(z-a)^\alpha$ converge uniformly on the compact parameter rectangle to the full product, by [F6] and the Weierstrass test with majorant $\sum_\alpha\prod_k(r_k/r'_k)^{\alpha_k}=\prod_k(1-r_k/r'_k)^{-1}<\infty$. [given, F6, algebra] 

2.1 Power-series expansion. Applying clause 1 with the polyradius $r'$ and substituting step 1.2, the integral of $f S_N$ converges to that of $f\prod_k(\zeta_k-z_k)^{-1}$ by [F4]; by linearity the integral of $fS_N$ equals the finite sum $\sum_{|\alpha|_\infty\le N}c_\alpha(z-a)^\alpha$ with $c_\alpha$ as displayed. Hence the partial sums converge to $f(z)$; the coefficient bound $|c_\alpha|\le M(r')\prod_k(r'_k)^{-\alpha_k}$ follows from [F5], each factor contributing $(2\pi r'_k)/(2\pi)$. Since $\sum_\alpha M(r')\prod_k(r'_k)^{-\alpha_k}|z_k-a_k|^{\alpha_k}$ is finite for $z\in\Delta_{r'}(a)$ by [F6], the series converges absolutely, and it converges uniformly on compacta by the same majorant with $\sup_{\text{compact}}|z_k-a_k|/r'_k<1$; this identifies the limit of the partial sums with the absolutely convergent sum and proves the $r'$-independence of the coefficients, which are given by the same iterated integral for every admissible $r'$. [given, step 1.2, F4, F5, F6] 

3.1 Complex differentiability at the centre. Write the expansion of step 2.1 at the point $a$ as $f(a+v)=c_0+L(v)+q(v)$ with $L(v):=\sum_kc_{e_k}v_k$ (a $\mathbb C$-linear map) and $q(v):=\sum_{|\alpha|\ge2}c_\alpha v^\alpha$. Fix $r'$ with $r'_k<\rho_k$ and $|v_k|\le r'_k/2$, and put $\theta_k:=|v_k|/r'_k\le1/2$; then $|q(v)|\le M(r')\sum_{|\alpha|\ge2}\prod_k\theta_k^{\alpha_k}\le M(r')\sum_{n\ge2}\binom{n+m-1}{m-1}2^{-(n-2)}\cdot\max_k\theta_k^2=:K\max_k|v_k|^2$ with $K<\infty$ depending only on $m$ and $M(r')$, so that $q(v)=o(\lVert v\rVert)$ as $v\to0$. Hence $f$ is complex differentiable at $a$ with $Df(a)=L$. Applying the same argument at an arbitrary centre $\zeta\in\Delta_\rho(a)$ — the hypotheses hold on any polydisc centred at $\zeta$ contained in $\Delta_\rho(a)$ — gives complex differentiability everywhere on $\Delta_\rho(a)$, so $f$ is holomorphic there, with $\partial_{z_k}f(a)=c_{e_k}$. [given, step 2.1, F6, F7, algebra] 

3.2 Derivative formula and estimates at the centre. Differentiating under the iterated integral of clause 1, the difference quotient of the kernel identity $\frac{1}{\zeta_k-z_k-h}-\frac{1}{\zeta_k-z_k}=\frac{h}{(\zeta_k-z_k)^2}+\frac{h^2}{(\zeta_k-z_k)^2(\zeta_k-z_k-h)}$ and [F4] give, for every $k$, $$\partial_{z_k}f(a)=\frac{1}{(2\pi i)^m}\oint_{\Gamma_r(a)}\frac{f(\zeta)}{\prod_{l\ne k}(\zeta_l-a_l)}\cdot\frac{d\zeta}{(\zeta_k-a_k)^2}.$$ By [F5] the modulus is at most $M(r)\prod_lr_l(r_l)^{-1}\cdot r_k^{-1}\cdot\ldots=M(r)/r_k$ (each unmodified factor contributes $r_l/r_l=1$, the squared factor contributes $r_k/r_k^2$), which is the estimate of clause 3 with $s=r$. [given, step 2.1, F2, F4, F5, algebra] 

4.1 Continuity and separate holomorphy of the derivatives. For fixed $k$ and a fixed polydisc $\Delta_s(b)$ with $\overline\Delta_s(b)\subseteq\Delta_\rho(a)$, the integral of step 3.2 with contours of polyradius $s'$ chosen with $s<s'<\rho$ is an iterated integral of a function jointly continuous in $(\zeta,z)$ on the compact product, so it depends continuously on $z$ (by [F4] and the norm inequality); and fixing all coordinates of $z$ except one, say $z_j$, the same integral has an integrand holomorphic in $z_j$ off the contour, so by successive application of [F3] it is holomorphic in $z_j$. Hence $\partial_{z_k}f$ is continuous and holomorphic in each variable separately on $\Delta_\rho(a)$; in particular the estimate of clause 3 holds at any centre with $s<\rho$. [given, step 2.1, step 3.2, F3, F4] 

5.1 Conclusion. Clause 1 is step 1.1; clause 2 is step 2.1; clause 3 combines steps 3.1, 3.2 and 4.1. No choice principle was used: the induction is over the finite range $1,\dots,m$, the geometric series are evaluated by [F6], and the limit is a uniformly convergent sequence of finite partial sums. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1] ∎ 

## Remarks

- The lemma is stated for functions that are continuous and separately holomorphic, which is the hypothesis produced by the Picard iteration of [[lem-cm-complex-analytic-flow-existence-and-holomorphy]]: slice-wise uniform limits of holomorphic functions are holomorphic by the one-variable Weierstrass theorem, and joint continuity comes from uniform convergence of continuous maps. The conclusion upgrades such a function to a holomorphic map in the $\mathbb C$-linear total-derivative sense of [[def-cm-complex-phase-domains-and-holomorphic-maps]].
- The exponent $2^{m+1}$ in the interior estimate is not optimised; only the form $C/r_k$ is used on this page.
