---
id: lem-em-integrable-causal-dispersion
kind: lemma
domain: mathematics
title: "Dispersion relations for an absolutely continuous integrable causal kernel"
status: draft
origin: pipeline
pipeline_run: physics-em-sr-40-2026-10-08
dependency_level: 0
deps: [def-complex-domain, thm-existence-of-complex-line-integrals-on-rectifiable-paths, cor-cauchy-theorem-for-null-homotopic-loops, cor-cauchy-theorem-star-shaped-domain, cor-ml-estimate-for-complex-line-integrals, thm-differentiation-under-the-integral-sign, thm-dominated-convergence, def-absolutely-continuous-function, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-integration-by-parts-for-absolutely-continuous-functions, thm-c1-lipschitz-ac-bv-hierarchy, def-countable-choice, def-dependent-choice, thm-heine-cantor-metric, thm-uniform-limit-interchanges-complex-line-integrals, thm-continuous-partials-and-cauchy-riemann-imply-holomorphic, prop-order-and-scalar-rules-for-the-nonnegative-integral]
dependency_roles:
  def-complex-domain: mathematical-premise
  thm-existence-of-complex-line-integrals-on-rectifiable-paths: mathematical-premise
  cor-cauchy-theorem-for-null-homotopic-loops: mathematical-premise
  cor-cauchy-theorem-star-shaped-domain: mathematical-premise
  cor-ml-estimate-for-complex-line-integrals: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  def-absolutely-continuous-function: mathematical-premise
  thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions: mathematical-premise
  thm-integration-by-parts-for-absolutely-continuous-functions: mathematical-premise
  thm-c1-lipschitz-ac-bv-hierarchy: mathematical-premise
  def-countable-choice: mathematical-premise
  def-dependent-choice: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-uniform-limit-interchanges-complex-line-integrals: mathematical-premise
  thm-continuous-partials-and-cauchy-riemann-imply-holomorphic: mathematical-premise
  prop-order-and-scalar-rules-for-the-nonnegative-integral: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "D. Tong, Kinetic Theory (University of Cambridge Part III lecture notes), Chapter 4 'Linear Response'"
      url: "https://davidtong.org/pdfs/teaching/kinetic-theory/kinetic4.pdf"
      locator: "Sec. 4.1.2-4.1.3, printed pp. 79-86: causality forces analyticity in the upper half-plane and the indented-contour argument gives the Kramers-Kronig relations. The exact L1 hypotheses, the AC integration-by-parts identity, the star-shaped-domain contour bookkeeping and the sharp 1/|z| bound are supplied locally here."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Statement

Assume Countable Choice and Dependent Choice ([[def-countable-choice]], [[def-dependent-choice]]). Let $d\ge1$ and let $K:[0,\infty)\to\mathbb R^{d\times d}$ be a locally absolutely continuous matrix kernel with $K,K'\in L^1(0,\infty;\mathbb R^{d\times d})$ and $sK(s)\in L^1(0,\infty;\mathbb R^{d\times d})$ (entrywise integrability), and let

$$\chi(z)=\int_0^\infty K(s)e^{izs}\,ds\qquad(\operatorname{Im}z>0)$$

be the matrix response function. Here locally absolutely continuous means that each real entry restricted to every compact interval $[a,b]\subseteq[0,\infty)$ satisfies the finite disjoint-interval condition of [[def-absolutely-continuous-function]]: for every $\epsilon>0$ there is $\delta>0$ such that $\sum_\ell(v_\ell-u_\ell)<\delta$ implies $\sum_\ell|K_{jk}(v_\ell)-K_{jk}(u_\ell)|<\epsilon$ for every finite family with disjoint interiors. $K\prime$ denotes the almost-everywhere derivative, with any measurable zero extension on its null exceptional set. Then the entries of $\chi$ are holomorphic functions on the upper half-plane ([[def-complex-domain]]), continuous and $C^1$ on its real boundary, bounded on the closed upper half-plane with $|\chi_{jk}(z)|\le|K_{jk}(0)|+\|K'_{jk}\|_1$ for $|z|\ge1$, and the entrywise principal-value dispersion formulas hold: for real $\omega$,

$$\operatorname{Re}\chi_{jk}(\omega)=\frac1\pi\operatorname{PV}\!\int_{\mathbb R}\frac{\operatorname{Im}\chi_{jk}(\xi)}{\xi-\omega}\,d\xi,\qquad \operatorname{Im}\chi_{jk}(\omega)=-\frac1\pi\operatorname{PV}\!\int_{\mathbb R}\frac{\operatorname{Re}\chi_{jk}(\xi)}{\xi-\omega}\,d\xi .$$

The sharper bound $|\chi_{jk}(z)|\le(|K_{jk}(0)|+\|K\prime_{jk}\|_1)/|z|$ holds for every nonzero $z$ with $\operatorname{Im}z\ge0$. Here $\operatorname{PV}\int_{\mathbb R}F(\xi)/(\xi-\omega)d\xi$ means $\lim_{R\to\infty}\lim_{\eta\downarrow0}(\int_{\omega-R}^{\omega-\eta}+\int_{\omega+\eta}^{\omega+R})F(\xi)/(\xi-\omega)d\xi$; the tails converge absolutely, so the choice of centering at infinity does not change the limit. For an instantaneous real response matrix $\chi_\infty\in\mathbb R^{d\times d}$ define the total transfer function $\chi_{\mathrm{total}}:=\chi_\infty+\chi$; the formulas then apply to $\chi_{\mathrm{total}}-\chi_\infty=\chi$; the scalar case is $d=1$. Causality alone supplies neither growth assumptions beyond those stated nor the passivity quadratic-form condition, which is a separate model assertion.

## Facts & Assumptions

**Given:** An integer $d\ge1$, a locally absolutely continuous matrix kernel $K:[0,\infty)\to\mathbb R^{d\times d}$ with $K,K'\in L^1(0,\infty)$ and $sK(s)\in L^1(0,\infty)$ entrywise, Countable Choice and Dependent Choice, and the response $\chi$ as in the statement. Write $k=K_{jk}$ for a fixed real entry.

[L1] **Absolute continuity, its calculus and integrability.** [[def-absolutely-continuous-function]] defines absolute continuity on a compact interval by the finite disjoint-interval condition; [[thm-c1-lipschitz-ac-bv-hierarchy]] gives that a $C^1$ function on $[a,b]$ in the endpoint-extension sense is Lipschitz, hence absolutely continuous. Under Countable and Dependent Choice, [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]] gives, for $k$ absolutely continuous on $[0,N]$, the a.e. derivative $k'\in L^1[0,N]$ and the identity $k(s)=k(0)+\int_0^sk'(u)\,du$; [[thm-integration-by-parts-for-absolutely-continuous-functions]] gives $\int_a^bFG'+\int_a^bF'G=F(b)G(b)-F(a)G(a)$ for absolutely continuous $F,G$.

[L2] **Convergence and parameter integrals.** [[thm-dominated-convergence]]: if $f_n\to f$ a.e. and $|f_n|\le g$ a.e. with $\int g<\infty$, then $\int|f_n-f|\to0$ and $\int f_n\to\int f$. [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: monotonicity and the scalar rule for nonnegative integrals; in particular a nonnegative function bounded below by a positive constant on sets of unbounded measure has infinite integral. [[thm-differentiation-under-the-integral-sign]]: with an integrable majorant for the parameter derivative, the parameter integral is differentiable with the expected derivative.

[L3] **Complex analysis tools.** [[def-complex-domain]]: the upper half-plane $H=\{z:\operatorname{Im}z>0\}$ and its translates are nonempty connected open sets. [[thm-continuous-partials-and-cauchy-riemann-imply-holomorphic]]: a function with continuous first partials satisfying $u_x=v_y$, $u_y=-v_x$ at every point is holomorphic. [[thm-existence-of-complex-line-integrals-on-rectifiable-paths]] and [[cor-ml-estimate-for-complex-line-integrals]]: line integrals of continuous integrands over rectifiable contours exist and satisfy $|\int_\gamma f|\le ML(\gamma)$ when $|f|\le M$ on the trace. [[cor-cauchy-theorem-star-shaped-domain]]: a holomorphic function on an open star-shaped set has zero integral over every closed rectifiable contour in it; [[cor-cauchy-theorem-for-null-homotopic-loops]] records the same conclusion for null-homotopic loops in general open sets. [[thm-uniform-limit-interchanges-complex-line-integrals]]: on a fixed rectifiable contour, uniform convergence of continuous integrands passes to the integral. [[thm-heine-cantor-metric]]: a continuous function on a compact metric space is uniformly continuous, so continuity on the closed upper half-plane gives uniform convergence on compact pieces under vertical shifts. [[def-countable-choice]], [[def-dependent-choice]] are the declared choice assumptions of [L1].

## Proof

1.1 Fix an entry $k=K_{jk}$. On each $[0,N]$ the FTC representation of [L1] gives $k(s)=k(0)+\int_0^sk'(u)\,du$ for every $s\in[0,N]$. Since $k'\in L^1(0,\infty)$, the limit $\ell:=k(0)+\int_0^\infty k'(u)\,du$ exists and $k(s)\to\ell$ as $s\to\infty$, because $|k'(u)|\mathbf 1_{[0,s]}(u)\le|k'(u)|$ and dominated convergence [L2] applies. If $\ell\ne0$ there is $s_0$ with $|k(s)|\ge|\ell|/2$ for all $s\ge s_0$, so monotonicity of the nonnegative integral [L2] gives $\int_0^N|k|\ge(|\ell|/2)(N-s_0)\to\infty$, contradicting $k\in L^1$; hence $\ell=0$ and $k(s)\to0$. [L1, L2]

1.2 For $\operatorname{Im}z\ge0$ the integral defining the entry $\chi_{jk}(z)=\int_0^\infty k(s)e^{izs}ds$ converges absolutely with $|\chi_{jk}(z)|\le\int_0^\infty|k(s)|e^{-\operatorname{Im}z\cdot s}ds\le\|k\|_1$, and it is continuous on the closed upper half-plane: if $z_n\to z$ in $\{\operatorname{Im}\ge0\}$, then $k(s)e^{iz_ns}\to k(s)e^{izs}$ pointwise with majorant $|k(s)|$, so [L2] gives $\chi_{jk}(z_n)\to\chi_{jk}(z)$. [L2]

1.3 Write $z=x+iy$ on $H$. The parameter derivatives of the integrand $k(s)e^{izs}$ in $x$ and $y$ are $isk(s)e^{izs}$ and $-sk(s)e^{izs}$, whose absolute values are bounded by the measurable function $s|k(s)|$, integrable by hypothesis; [[thm-differentiation-under-the-integral-sign]] applied on a bounded rectangle around any point of $H$ therefore gives $\partial_x\chi_{jk}(z)=\int_0^\infty isk(s)e^{izs}ds$ and $\partial_y\chi_{jk}(z)=-\int_0^\infty sk(s)e^{izs}ds$, and both partials are continuous on $H$ by [L2]. Since $\partial_y\chi_{jk}=-\int_0^\infty sk(s)e^{izs}ds=i\,\partial_x\chi_{jk}$, the Cauchy-Riemann equations hold with continuous partials, and [[thm-continuous-partials-and-cauchy-riemann-imply-holomorphic]] makes $\chi_{jk}$ holomorphic on the upper half-plane. [L2, L3]

2.1 Along the real boundary, fix $\omega\in\mathbb R$: for $t$ in a bounded interval around $\omega$ the integrand $k(s)e^{its}$ has $t$-derivative $isk(s)e^{its}$, bounded by the integrable $s|k(s)|$, so [[thm-differentiation-under-the-integral-sign]] gives $\chi_{jk}'(t)=\int_0^\infty isk(s)e^{its}ds$ for every such $t$, and this derivative is continuous in $t$ by dominated convergence [L2]. Thus $\chi_{jk}$ is continuous on the closed upper half-plane (step 1.2) and $C^1$ on its real boundary. [step 1.2, L2]

2.2 For $z\ne0$ with $\operatorname{Im}z\ge0$ and $N>0$, apply [[thm-integration-by-parts-for-absolutely-continuous-functions]] on $[0,N]$ to the absolutely continuous pair $(k,\operatorname{Re}e^{izs})$ and to $(k,\operatorname{Im}e^{izs})$; the function $s\mapsto e^{izs}$ is $C^1$ hence absolutely continuous by [L1], and combining the two real identities gives $\int_0^Nk(s)e^{izs}ds=\frac{k(N)e^{izN}-k(0)}{iz}-\frac{1}{iz}\int_0^Nk'(s)e^{izs}ds$. Since $|e^{izN}|\le1$ for $\operatorname{Im}z\ge0$ and $k(N)\to0$ by step 1.1, dominated convergence [L2] with majorant $|k'|$ gives, in the limit $N\to\infty$, $\chi_{jk}(z)=-\frac{k(0)}{iz}-\frac{1}{iz}\int_0^\infty k'(s)e^{izs}ds$; hence $|\chi_{jk}(z)|\le\frac{|k(0)|+\|k'\|_1}{|z|}$ for every nonzero $z$ with $\operatorname{Im}z\ge0$, in particular $|\chi_{jk}(z)|\le|k(0)|+\|k'\|_1$ for $|z|\ge1$, and $\chi_{jk}(z)=O(1/|z|)$ uniformly on the closed upper half-plane. [step 1.1, L1, L2]

3.1 Let $F=\chi_{jk}$, which is holomorphic on $H$, continuous on the closed upper half-plane and $O(1/|z|)$ there by steps 1.3, 1.2 and 2.2. Fix $\omega\in\mathbb R$, choose $R>|\omega|+2$ and $0<\eta<1$, and let $\gamma$ be the closed contour consisting of the real segments $[\omega-R,\omega-\eta]$ and $[\omega+\eta,\omega+R]$ traversed from left to right, the clockwise small upper semicircle $z=\omega+\eta e^{i\theta}$ with $\theta$ decreasing from $\pi$ to $0$, and the counterclockwise large upper semicircle $z=\omega+Re^{i\theta}$ with $\theta$ increasing from $0$ to $\pi$; every piece is rectifiable and the contour is closed. For $\delta>0$ put $f_\delta(z)=F(z+i\delta)/(z-\omega)$ on the open set $D_\delta=\{z:\operatorname{Im}z>-\delta/2\}\setminus\{\omega-iv:v\ge0\}$: this set is star-shaped about $\omega+iA$ for $A>1$, because the removed ray lies in $\{\operatorname{Im}\le0\}$ while every point of $\gamma$ has $\operatorname{Im}\ge0$ and different from $\omega$, so the segment from $\omega+iA$ to it stays in $D_\delta$. On $D_\delta$ the function $F(\cdot+i\delta)$ is holomorphic (translate of a holomorphic function) and $1/(z-\omega)$ is holomorphic off $\omega$, and $\gamma$ lies in $D_\delta$; [[cor-cauchy-theorem-star-shaped-domain]] therefore gives $\int_\gamma f_\delta=0$. As $\delta\downarrow0$ the integrands $f_\delta$ converge uniformly on the trace of $\gamma$ to $F(z)/(z-\omega)$: the trace is compact, all shifted points lie in a compact subset of the closed upper half-plane, and $F$ is uniformly continuous there by [[thm-heine-cantor-metric]]; so [[thm-uniform-limit-interchanges-complex-line-integrals]] gives $\int_\gamma F(z)/(z-\omega)dz=0$. [step 1.2, step 1.3, step 2.2, L1, L3]

4.1 Estimate the pieces of the identity of step 3.1, using $|F(z)|\le C/|z|$ from step 2.2. On the large arc $|z-\omega|=R$ and $|z|\ge R-|\omega|$, so the integrand is at most $C/(R(R-|\omega|))$ and [[cor-ml-estimate-for-complex-line-integrals]] bounds the contribution by $\pi RC/(R(R-|\omega|))\to0$ as $R\to\infty$. On the small arc, parametrizing $z=\omega+\eta e^{i\theta}$ with $\theta$ decreasing from $\pi$ to $0$ gives $\int=-i\int_0^\pi F(\omega+\eta e^{i\theta})\,d\theta\to-i\pi F(\omega)$ as $\eta\downarrow0$ by continuity of $F$. The two real segments contribute $\int_{\eta<|t|<R}F(\omega+t)/t\,dt$ with $t$ real; on $\eta<|t|\le1$ subtract $F(\omega)$, whose quotient has zero integral on this symmetric punctured interval. The difference quotient $[F(\omega+t)-F(\omega)]/t$ is bounded there and tends to $F'(\omega)$ by the boundary $C^1$ property (step 2.1). On the tails keep the ORIGINAL integrand $F(\omega+t)/t$: for $|t|\ge\max(1,2|\omega|)$ its modulus is at most $2C/|t|^2$ by step 2.2, while the intervening compact intervals are regular. Thus the principal value exists by local cancellation and its two tails converge absolutely. Passing to the limit first in $\eta$ and then in $R$ in the identity $\int_\gamma F/(z-\omega)=0$ therefore yields $\operatorname{PV}\int_{\mathbb R}\frac{F(\xi)}{\xi-\omega}d\xi=i\pi F(\omega)$, and the tails converge absolutely, so the centering at infinity does not affect the limit. [step 2.1, step 2.2, step 3.1, L3]

5.1 Write $F=u+iv$ with $u=\operatorname{Re}F$, $v=\operatorname{Im}F$. Splitting the identity of step 4.1 into real and imaginary parts gives $\operatorname{PV}\int_{\mathbb R}\frac{u(\xi)}{\xi-\omega}d\xi+i\operatorname{PV}\int_{\mathbb R}\frac{v(\xi)}{\xi-\omega}d\xi=i\pi(u(\omega)+iv(\omega))=-\pi v(\omega)+i\pi u(\omega)$; comparing parts, $u(\omega)=\frac1\pi\operatorname{PV}\int_{\mathbb R}\frac{v(\xi)}{\xi-\omega}d\xi$ and $v(\omega)=-\frac1\pi\operatorname{PV}\int_{\mathbb R}\frac{u(\xi)}{\xi-\omega}d\xi$. [step 4.1]

6.1 Each entry $k=K_{jk}$ is locally absolutely continuous with $k,k'\in L^1(0,\infty)$ and $sk(s)\in L^1(0,\infty)$ by the hypotheses on $K$, so steps 1.3, 2.1, 2.2 and 5.1 apply to it: the entries of $\chi$ are holomorphic on the upper half-plane, continuous on the closed upper half-plane and $C^1$ on the real boundary, obey $|\chi_{jk}(z)|\le(|k(0)|+\|k'\|_1)/|z|$ for nonzero $z$ with $\operatorname{Im}z\ge0$ (hence $|\chi_{jk}(z)|\le|k(0)|+\|k'\|_1$ for $|z|\ge1$), and satisfy the two displayed principal-value dispersion formulas. For an instantaneous real matrix $\chi_\infty$ the identities applied to $\chi=\chi_{\mathrm{total}}-\chi_\infty$ give the stated form of the total transfer function; the scalar case is $d=1$. Nothing in the argument uses or produces a passivity quadratic-form condition, and no growth assumption beyond the stated integrability of $K,K',sK$ is made. [step 1.3, step 2.1, step 2.2, step 5.1] ∎
