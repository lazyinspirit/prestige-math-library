---
id: thm-laurent-expansion-annulus
kind: theorem
title: "Laurent expansion on an annulus"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-annulus, def-convergent-complex-laurent-series, cor-global-cauchy-theorem-homology, thm-global-cauchy-integral-formula-homology, def-complex-chain-and-cycle, def-integration-and-index-of-complex-chain, prop-linearity-of-complex-line-integrals, thm-winding-number-circle-traversed-k-times, thm-uniform-limit-interchanges-complex-line-integrals]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 5 §1.3"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
    - title: "Jeremy Orloff, MIT 18.04 Topic 7: Taylor and Laurent Series"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/dff6a0c70eefb1e23bb87f8524361801_MIT18_04S18_topic7.pdf"
pipeline_run: null
---

## Statement

Let $f$ be holomorphic on the annulus $A(a;r,R)$ with $0\le r<R\le\infty$
([[def-complex-annulus]]). Then there are complex numbers $c_n$ indexed by
$n\in\mathbb Z$ such that

$$f(z)=\sum_{n\in\mathbb Z}c_n(z-a)^n$$

for every $z\in A(a;r,R)$, and the series converges locally uniformly on the
annulus. In other words, $f$ has a convergent Laurent series on $A(a;r,R)$
([[def-convergent-complex-laurent-series]]).

## Facts & Assumptions

**Given:** A holomorphic function $f$ on $A(a;r,R)$.

[L1] For the positively oriented circle $\gamma_\tau(t)=a+\tau\exp(it)$, one has $n(\gamma_\tau,p)=1$ when $|p-a|<\tau$ and $n(\gamma_\tau,p)=0$ when $|p-a|>\tau$ ([[thm-winding-number-circle-traversed-k-times]], [[def-integration-and-index-of-complex-chain]]).

[L2] For a chain $\Gamma=\gamma_1-\gamma_2$, both $\int_\Gamma h\,dz=\int_{\gamma_1}h\,dz-\int_{\gamma_2}h\,dz$ and $n(\Gamma,p)=n(\gamma_1,p)-n(\gamma_2,p)$ hold by the definitions of chain integration and index together with linearity ([[def-integration-and-index-of-complex-chain]], [[prop-linearity-of-complex-line-integrals]], [[def-complex-chain-and-cycle]]).

[L3] If $\Gamma$ is a null-homologous cycle in an open set and $z$ lies off its trace, then $n(\Gamma,z)f(z)=(2\pi i)^{-1}\int_\Gamma f(\zeta)(\zeta-z)^{-1}\,d\zeta$ ([[thm-global-cauchy-integral-formula-homology]]).

[L4] If $h$ is holomorphic on an open set and $\Gamma$ is a null-homologous cycle there, then $\int_\Gamma h(\zeta)\,d\zeta=0$ ([[cor-global-cauchy-theorem-homology]]).

[L5] Uniform convergence of continuous integrands on a fixed contour permits passage of the limit through the contour integral ([[thm-uniform-limit-interchanges-complex-line-integrals]]).

## Proof

**Proof technique:** direct.

1.1 Fix $z\in A(a;r,R)$ and choose radii $\rho,\sigma$ with $r<\rho<|z-a|<\sigma<R$; let $\gamma_\rho(t)=a+\rho\exp(it)$, let $\gamma_\sigma(t)=a+\sigma\exp(it)$, and put $\Gamma:=\gamma_\sigma-\gamma_\rho$. [given, construct]

1.2 If $r<\rho_1<\rho_2<R$, define $$c_{-m}(\rho_j):=\frac{1}{2\pi i}\int_{|\zeta-a|=\rho_j}f(\zeta)(\zeta-a)^{m-1}\,d\zeta\qquad(j=1,2).$$ For every $m\ge1$ the integrand is holomorphic on $A(a;r,R)$, and the difference of the two circles is a cycle there whose index vanishes outside that annulus. Thus it is null-homologous in $A(a;r,R)$, and [L4] gives $c_{-m}(\rho_2)=c_{-m}(\rho_1)$. [L1, L2, L4]

2.1 If $p\notin A(a;r,R)$, then either $|p-a|\le r<\rho$ or $|p-a|\ge R>\sigma$; [L1] gives $n(\gamma_\sigma,p)=n(\gamma_\rho,p)$, so [L2] gives $n(\Gamma,p)=0$. Both circles lie inside $A(a;r,R)$, hence $\Gamma$ is null-homologous in that original annulus. Because $\rho<|z-a|<\sigma$, the same facts give $n(\Gamma,z)=1$. [step 1.1, L1, L2]

2.2 On $\gamma_\sigma$ one has $|(z-a)/(\zeta-a)|<1$, so $$\frac{1}{\zeta-z}=\frac{1}{\zeta-a}\cdot\frac{1}{1-(z-a)/(\zeta-a)}=\sum_{n\ge0}\frac{(z-a)^n}{(\zeta-a)^{n+1}},$$ and the geometric series converges uniformly on that circle. [step 1.1, algebra]

2.3 On $\gamma_\rho$ one has $|(\zeta-a)/(z-a)|<1$, so $$\frac{1}{\zeta-z}=-\frac{1}{z-a}\cdot\frac{1}{1-(\zeta-a)/(z-a)}=-\sum_{m\ge1}(\zeta-a)^{m-1}(z-a)^{-m},$$ and this geometric series converges uniformly on that circle as well. [step 1.1, algebra]

3.1 Applying [L3] on the original annulus $A(a;r,R)$ yields $$f(z)=\frac{1}{2\pi i}\int_{\gamma_\sigma}\frac{f(\zeta)}{\zeta-z}\,d\zeta-\frac{1}{2\pi i}\int_{\gamma_\rho}\frac{f(\zeta)}{\zeta-z}\,d\zeta.$$ [step 1.1, step 2.1, L2, L3]

3.2 If $r<\sigma_1<\sigma_2<R$, define $$c_n(\sigma_j):=\frac{1}{2\pi i}\int_{|\zeta-a|=\sigma_j}\frac{f(\zeta)}{(\zeta-a)^{n+1}}\,d\zeta\qquad(j=1,2).$$ For every $n\ge0$ the integrand is holomorphic on $A(a;r,R)$, the difference of the two circles is null-homologous there by the argument of step 2.1, and [L4] gives $c_n(\sigma_2)=c_n(\sigma_1)$. [L1, L2, L4]

4.1 For $n\ge0$ set $$c_n(\sigma):=\frac{1}{2\pi i}\int_{\gamma_\sigma}\frac{f(\zeta)}{(\zeta-a)^{n+1}}\,d\zeta,$$ and for $m\ge1$ set $$c_{-m}(\rho):=\frac{1}{2\pi i}\int_{\gamma_\rho}f(\zeta)(\zeta-a)^{m-1}\,d\zeta.$$ Indeed, the minus sign in the inner-circle part of step 3.1 cancels the minus sign in the geometric expansion of step 2.3. Thus [L5] applied to the uniformly convergent series of steps 2.2 and 2.3 turns step 3.1 into $$f(z)=\sum_{n\ge0}c_n(\sigma)(z-a)^n+\sum_{m\ge1}c_{-m}(\rho)(z-a)^{-m}.$$ [step 3.1, step 2.2, step 2.3, L5]

4.2 Let $K_{\rho_0,\sigma_0}\subseteq A(a;r,R)$ be a closed subannulus, and choose $\rho,\sigma$ with $r<\rho<\rho_0\le\sigma_0<\sigma<R$; writing $M_\rho=\max_{\gamma_\rho}|f|$ and $M_\sigma=\max_{\gamma_\sigma}|f|$, the integral formulas of steps 3.2 and 1.2 give $|c_n(z_0-a)^n|\le M_\sigma(\sigma_0/\sigma)^n$ for $n\ge0$ and $|c_{-m}(z_0-a)^{-m}|\le M_\rho(\rho/\rho_0)^m$ for $m\ge1$ and every $z_0\in K_{\rho_0,\sigma_0}$. [step 3.2, step 1.2, algebra]

5.1 Steps 3.2 and 1.2 let us write $c_n$ for the common value of the outer-circle integral when $n\ge0$ and of the inner-circle integral when $n<0$, and step 4.1 becomes $f(z)=\sum_{n\in\mathbb Z}c_n(z-a)^n$. [step 4.1, step 3.2, step 1.2]

6.1 The geometric majorants in step 4.2 converge, so both one-sided subseries converge uniformly on $K_{\rho_0,\sigma_0}$; since the closed subannulus was arbitrary, the Laurent series converges locally uniformly on $A(a;r,R)$ and represents $f$ there. [step 5.1, step 4.2] ∎
