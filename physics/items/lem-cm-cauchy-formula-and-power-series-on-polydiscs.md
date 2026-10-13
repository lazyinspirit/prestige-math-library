---
id: lem-cm-cauchy-formula-and-power-series-on-polydiscs
kind: lemma
title: Iterated Cauchy formula, power-series expansion and Cauchy estimates for functions continuous and separately holomorphic on a polydisc
status: published
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
- thm-continuous-on-a-rectangle-is-riemann-integrable
- thm-uniform-limit-interchanges-complex-line-integrals
- cor-ml-estimate-for-complex-line-integrals
- def-complex-contours-reversal-concatenation-and-closedness
- thm-riemann-stieltjes-and-parametric-contour-integrals-agree
- def-vector-valued-derivative-and-integral
- thm-norm-inequality-for-the-vector-valued-integral
- def-ck-and-multi-index-notation-in-several-variables
- def-complex-differentiability-holomorphic-and-entire
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
  thm-continuous-on-a-rectangle-is-riemann-integrable: mathematical-premise
  thm-uniform-limit-interchanges-complex-line-integrals: mathematical-premise
  cor-ml-estimate-for-complex-line-integrals: mathematical-premise
  def-complex-contours-reversal-concatenation-and-closedness: mathematical-premise
  thm-riemann-stieltjes-and-parametric-contour-integrals-agree: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  thm-norm-inequality-for-the-vector-valued-integral: mathematical-premise
  def-ck-and-multi-index-notation-in-several-variables: mathematical-premise
  def-complex-differentiability-holomorphic-and-entire: mathematical-premise
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
3. **Holomorphy, derivatives and estimates.** The function $f$ is holomorphic on $\Delta_\rho(a)$ in the sense of [[def-cm-complex-phase-domains-and-holomorphic-maps]]. Its coordinate derivatives $\partial_{z_k}f$ exist everywhere on $\Delta_\rho(a)$, are continuous and holomorphic in each variable separately there, and satisfy for every polyradius $s=(s_1,\dots,s_m)$ with $0<s_\ell<\rho_\ell$ for all $\ell$,
 $$|\partial_{z_k}f(a)|\le\frac{M(s)}{s_k}.$$

## Facts & Assumptions

**Given:** The polydisc $\Delta_\rho(a)$ with $0<\rho_k<\infty$; a continuous $f$ holomorphic in each variable separately; polyradii $r,r'$ with $r_k<r'_k<\rho_k$; the numbers $M(r),M(r')$.

[F1] One-variable Cauchy formula: if $g$ is holomorphic on $D(a,R)$ and $0<r<R$, then $g(z)=\frac{1}{2\pi i}\int_{|\zeta-a|=r}\frac{g(\zeta)}{\zeta-z}d\zeta$ for $|z-a|<r$, the contour integral agreeing with the parametrized Riemann integral $t\mapsto a+re^{it}$ over $[0,2\pi]$ ([[thm-cauchy-integral-formula-circle]], [[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]], [[def-complex-contours-reversal-concatenation-and-closedness]]).

[F2] One-variable Taylor estimates: for $g$ holomorphic on $D(a',R)$ with $|g|\le M$ on $|\zeta-a'|=s$, the $n$-th Taylor coefficient obeys $|c_n|\le M s^{-n}$ ([[cor-cauchy-estimates-taylor-coefficients]]); and $|g^{(n)}(z)|\le n!sM/(s-t)^{n+1}$ for $|z-a'|\le t<s$ ([[lem-cauchy-estimates-on-concentric-subdiscs]]).

[F3] Parameter integrals: if $\varphi:[0,2\pi]\times\Omega\to\mathbb C$ is jointly continuous and $\varphi(t,\cdot)$ is holomorphic on the open $\Omega\subseteq\mathbb C$ for every $t$, then $z\mapsto\int_0^{2\pi}\varphi(t,z)\,dt$ is holomorphic on $\Omega$ and the derivative integral formula holds under joint continuity of the derivative ([[thm-holomorphic-parameter-riemann-integral]]).

[F4] Write each continuous complex integrand in real and imaginary components using the coordinate identification of [[def-cm-complex-phase-domains-and-holomorphic-maps]]; its Riemann integral is componentwise ([[def-vector-valued-derivative-and-integral]]). Each continuous real component on a closed nondegenerate rectangle is Riemann integrable ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]); Riemann integrals over product rectangles may then be interchanged ([[thm-riemann-fubini-on-product-rectangles]]). Uniform limits of continuous integrands pass under each fixed complex line integral; for a finite product of fixed circles, apply this successively, with uniformity preserved by the fixed contour-length bounds. Vector-valued estimates are componentwise ([[thm-uniform-limit-interchanges-complex-line-integrals]], [[thm-norm-inequality-for-the-vector-valued-integral]], [[cor-ml-estimate-for-complex-line-integrals]]).

[F5] The modulus estimate: $|\int_\gamma h\,dz|\le\sup_{\gamma^*}|h|\cdot L(\gamma)$ on a rectifiable contour, the circle $|\zeta-a|=s$ having length $2\pi s$ under the parametrization ([[cor-ml-estimate-for-complex-line-integrals]], [[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[F6] Multi-index notation: $\alpha\in\mathbb N^m$, $|\alpha|=\sum_k\alpha_k$, $\alpha!=\prod_k\alpha_k!$, $w^\alpha=\prod_kw_k^{\alpha_k}$, and the geometric series over $\mathbb N^m$ satisfies $\sum_\alpha\prod_k\theta_k^{\alpha_k}=\prod_k(1-\theta_k)^{-1}$ for $0\le\theta_k<1$ ([[def-ck-and-multi-index-notation-in-several-variables]], [[cor-cauchy-estimates-taylor-coefficients]]).

[F7] A continuous function on a compact set attains a finite maximum; closed bounded subsets of Euclidean space are compact ([[thm-extreme-value-metric]], [[thm-heine-borel-rn]], [[def-metric-topology]], [[def-metric-ball]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

## Proof

**Proof technique:** direct, with an internal finite induction on the number of variables for the iterated formula, then expansion of the geometric kernel and identification of the coefficients; differentiability follows from the expansion.

1.1 Iterated Cauchy formula. We prove clause 1 by induction on $m$. For $m=1$ it is exactly [F1]. Assume it holds for $m-1\ge1$ and let $f$ be as in the statement. Fix $z\in\Delta_r(a)$ and write $z=(z_1,z')$, $a=(a_1,a')$. For $z'$ fixed, the slice $\zeta_1\mapsto f(\zeta_1,z')$ is holomorphic on the disc $|z_1-a_1|<\rho_1$ and continuous on its closure as the restriction of a continuous map, so [F1] gives $f(z_1,z')=\frac{1}{2\pi i}\oint_{|\zeta_1-a_1|=r_1}\frac{f(\zeta_1,z')}{\zeta_1-z_1}d\zeta_1$. For each $\zeta_1$ on the circle, the function $z'\mapsto f(\zeta_1,z')$ is continuous and separately holomorphic on $\Delta_{\rho'}(a')$, $\rho'=(\rho_2,\dots,\rho_m)$, so the induction hypothesis gives $f(\zeta_1,z')$ as an $(m-1)$-fold iterated integral over $|\zeta_k-a_k|=r_k$, $k\ge2$, for $z'\in\Delta_{r'}(a')$. Substituting and interchanging the iterated integrals is legitimate by [F4], since after parametrizing each circle by $[0,2\pi]$ the integrand is continuous on the compact product and the denominators never vanish ($|z_k-a_k|<r_k$). This yields the displayed formula with the outer variable $\zeta_1$; the argument applies to every order of the variables, either directly or by [F4]. [given, F1, F4]

1.2 Expansion of the kernel. Fix $z\in\Delta_r(a)$ and $r'$ with $r_k<r'_k<\rho_k$, and consider on the distinguished boundary $\Gamma_{r'}(a)$ the product of the geometric series $$\prod_{k=1}^m\frac{1}{\zeta_k-z_k}=\prod_{k=1}^m\sum_{n\ge0}\frac{(z_k-a_k)^n}{(\zeta_k-a_k)^{n+1}}=\sum_{\alpha\in\mathbb N^m}\frac{(z-a)^\alpha}{(\zeta-a)^{\alpha+\mathbf 1}},$$ valid because $|z_k-a_k|<r'_k=|\zeta_k-a_k|$; its partial sums $S_N(\zeta):=\sum_{|\alpha|_\infty\le N}(\zeta-a)^{-\alpha-\mathbf 1}(z-a)^\alpha$ converge uniformly on the compact parameter rectangle to the full product, by [F6] and the Weierstrass test with majorant $\sum_\alpha\prod_k(r_k/r'_k)^{\alpha_k}=\prod_k(1-r_k/r'_k)^{-1}<\infty$. [given, F6, algebra]

2.1 Power-series expansion at a fixed contour radius. Fix any polyradius $s$ with $0<s_k<\rho_k$ and any $z\in\Delta_s(a)$. Choose an inner polyradius $\hat s$ with $|z_k-a_k|<\hat s_k<s_k$ for all $k$; the kernel expansion of step 1.2 applies with $\hat s$ as the inner radius and $s$ as the contour radius. Applying clause 1 with contour radius $s$ and substituting that expansion, the integral of $fS_N$ converges to that of $f\prod_k(\zeta_k-z_k)^{-1}$ by [F4]; by linearity the integral of $fS_N$ is the finite sum $\sum_{|\alpha|_\infty\le N}c_\alpha(s)(z-a)^\alpha$, where $c_\alpha(s)$ is the displayed iterated contour integral with radii $s$. Hence these partial sums converge to $f(z)$. The coefficient estimate $|c_\alpha(s)|\le M(s)\prod_k s_k^{-\alpha_k}$ follows from [F5], each factor contributing $(2\pi s_k)/(2\pi)$. By [F6], the resulting product of geometric series proves absolute convergence on $\Delta_s(a)$ and uniform convergence on every compact subset of $\Delta_s(a)$, since the coordinate ratios have suprema strictly below $1$ there. [given, step 1.2, F4, F5, F6]

3.1 Independence of the contour radii. Fix a multi-index $\alpha$ and two polyradii $s,\tilde s$ with all components strictly between $0$ and the corresponding $\rho_k$. Connect them by changing one radius at a time. For a fixed coordinate $k$, hold the other contour radii fixed and integrate first in those other variables, defining $g(\zeta_k):=\frac{1}{(2\pi i)^{m-1}}\oint_{\Gamma_{s_{\ne k}}(a_{\ne k})}\frac{f(\zeta)}{\prod_{\ell\ne k}(\zeta_\ell-a_\ell)^{\alpha_\ell+1}}\prod_{\ell\ne k}d\zeta_\ell$. For $m=1$ this means $g=f$. The parameter-integral theorem [F3], applied to the scalar integrands of these iterated contour integrals, shows that $g$ is holomorphic on $|\zeta_k-a_k|<\rho_k$. Differentiating its one-variable Cauchy formula [F1] $\alpha_k$ times at $a_k$ under the contour integral, justified by [F3] because the differentiated kernels are jointly continuous on the contour, gives $\frac{1}{2\pi i}\oint_{|\zeta_k-a_k|=s_k}\frac{g(\zeta_k)}{(\zeta_k-a_k)^{\alpha_k+1}}\,d\zeta_k=\frac{g^{(\alpha_k)}(a_k)}{\alpha_k!}$. The right side is independent of $s_k$. By [F4] the contour order can be chosen so this is the $k$-th integral in $c_\alpha(s)$; therefore changing only $s_k$ leaves that coefficient unchanged. Repeating for each coordinate proves $c_\alpha(s)=c_\alpha(\tilde s)$. In particular the coefficients do not depend on the admissible $r'$. For any compact subset of $\Delta_\rho(a)$, choose a contour polyradius $s$ strictly larger in each coordinate than the maximum coordinate distance of that compact set from $a$; step 2.1 and the established independence give uniform absolute convergence there. [given, F1, F3, F4, construct, step 2.1]

3.2 Complex differentiability at the centre. Write the expansion of step 2.1 at the point $a$ as $f(a+v)=c_0+L(v)+q(v)$ with $L(v):=\sum_kc_{e_k}v_k$ (a $\mathbb C$-linear map) and $q(v):=\sum_{|\alpha|\ge2}c_\alpha v^\alpha$. Fix a polyradius $r'$ with $0<r'_k<\rho_k$ and take $|v_k|\le r'_k/2$; put $\theta_k:=|v_k|/r'_k\le1/2$. The coefficient bounds give $|q(v)|\le M(r')\sum_{|\alpha|\ge2}\prod_k\theta_k^{\alpha_k}\le M(r')C_m\max_k\theta_k^2\le\frac{M(r')C_m}{(\min_k r'_k)^2}\,\lVert v\rVert^2$, where $C_m:=\sum_{n\ge2}\binom{n+m-1}{m-1}2^{-(n-2)}<\infty$. Thus $q(v)=o(\lVert v\rVert)$ as $v\to0$. Hence $f$ is complex differentiable at $a$ with $Df(a)=L$. Applying the same argument at an arbitrary centre $\zeta\in\Delta_\rho(a)$ — the hypotheses hold on any polydisc centred at $\zeta$ contained in $\Delta_\rho(a)$ — gives complex differentiability everywhere on $\Delta_\rho(a)$, so $f$ is holomorphic there, with $\partial_{z_k}f(a)=c_{e_k}$. [given, step 2.1, F6, F7, algebra]

3.3 Derivative formula and estimates at the centre. Differentiating under the iterated integral of clause 1, the difference quotient of the kernel identity $\frac{1}{\zeta_k-z_k-h}-\frac{1}{\zeta_k-z_k}=\frac{h}{(\zeta_k-z_k)^2}+\frac{h^2}{(\zeta_k-z_k)^2(\zeta_k-z_k-h)}$ and [F4] give, for every $k$, $$\partial_{z_k}f(a)=\frac{1}{(2\pi i)^m}\oint_{\Gamma_r(a)}\frac{f(\zeta)}{\prod_{l\ne k}(\zeta_l-a_l)}\cdot\frac{d\zeta}{(\zeta_k-a_k)^2}.$$ By [F5] the modulus is at most $M(r)\prod_lr_l(r_l)^{-1}\cdot r_k^{-1}\cdot\ldots=M(r)/r_k$ (each unmodified factor contributes $r_l/r_l=1$, the squared factor contributes $r_k/r_k^2$), which is the estimate of clause 3 with $s=r$. [given, step 2.1, F2, F4, F5, algebra]

4.1 Continuity and separate holomorphy of the derivatives. Fix a polydisc $\Delta_s(b)$ with $\overline\Delta_s(b)\subseteq\Delta_\rho(a)$. Compactness of $\overline\Delta_s(b)$ inside the open polydisc lets us choose a polyradius $s'$ with $s_k<s'_k$ for every $k$ and $\overline\Delta_{s'}(b)\subseteq\Delta_\rho(a)$. Differentiating the iterated Cauchy formula on $\Delta_{s'}(b)$, for $z\in\Delta_s(b)$, $\partial_{z_k}f(z)=\frac{1}{(2\pi i)^m}\oint_{\Gamma_{s'}(b)}\frac{f(\zeta)}{(\zeta_k-z_k)^2\prod_{\ell\ne k}(\zeta_\ell-z_\ell)}\,d\zeta_1\cdots d\zeta_m$. The integrand is jointly continuous in $z$ and the contour parameters on the compact product, so the integral is continuous in $z$; fixing all but one coordinate of $z$, the integrand is holomorphic in that coordinate and [F3] makes the integral holomorphic in it. Such polydiscs cover $\Delta_\rho(a)$, proving the regularity assertion. The Cauchy bound of clause 3 applies at any centre with any polyradius strictly inside its domain. [given, step 2.1, step 3.3, F3, F4]

5.1 Conclusion. Clause 1 is step 1.1; clause 2 combines steps 2.1 and 3.1; clause 3 combines steps 3.2, 3.3 and 4.1. No choice principle was used: the induction is over the finite range $1,\dots,m$, the geometric series are evaluated by [F6], and the limit is a uniformly convergent sequence of finite partial sums.   [step 1.1, step 2.1, step 3.1, step 3.2, step 3.3, step 4.1] ∎

## Remarks

- The lemma is stated for functions that are continuous and separately holomorphic, which is the hypothesis produced by the Picard iteration of [[lem-cm-complex-analytic-flow-existence-and-holomorphy]]: slice-wise uniform limits of holomorphic functions are holomorphic by the one-variable Weierstrass theorem, and joint continuity comes from uniform convergence of continuous maps. The conclusion upgrades such a function to a holomorphic map in the $\mathbb C$-linear total-derivative sense of [[def-cm-complex-phase-domains-and-holomorphic-maps]].
- The exponent $2^{m+1}$ in the interior estimate is not optimised; only the form $C/r_k$ is used on this page.
