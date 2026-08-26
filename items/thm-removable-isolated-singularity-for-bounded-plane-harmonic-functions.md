---
id: thm-removable-isolated-singularity-for-bounded-plane-harmonic-functions
kind: theorem
title: "A bounded harmonic function near an isolated puncture extends harmonically"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-plane-harmonic-function, thm-local-holomorphic-potential-for-harmonic-functions, thm-removable-singularity-characterizations, thm-zero-order-factorization-holomorphic-function, thm-primitives-homologically-simply-connected-domains, prop-star-shaped-plane-domains-are-homologically-simply-connected, thm-complex-exponential-is-entire-with-derivative-itself, cor-complex-exponential-cartesian-form-modulus-and-eulers-identity, thm-chain-rule-for-complex-derivatives, lem-cauchy-estimates-on-concentric-subdiscs, thm-continuous-partials-and-cauchy-riemann-imply-holomorphic, cor-real-valued-holomorphic-function-is-constant, cor-holomorphic-functions-are-real-analytic-and-smooth, thm-c2-holomorphic-components-are-harmonic, thm-ftc-second-part]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. M. Stein and R. Shakarchi, Complex Analysis, Ch. 2 and Ch. 3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
    - title: "Jeremy Orloff, MIT 18.04 Topic 5: Introduction to Harmonic Functions"
      url: "https://ocw.mit.edu/courses/18-04-complex-variables-with-applications-spring-2018/2e739bb156efb0bc7103fc43d0897dda_MIT18_04S18_topic5.pdf"
pipeline_run: null
---

## Statement

Let $u$ be harmonic on a punctured disc $0<|z-a|<R$, and suppose $u$ is bounded
there. Then there is a harmonic function $U$ on $|z-a|<R$ whose restriction to
the punctured disc is $u$.

## Facts & Assumptions

**Given:** A harmonic function $u$ on $0<|z-a|<R$ and a bound $|u(z)|\le M$ there.

[L1] Near every point of the punctured disc, $u$ is the real part of a holomorphic function ([[thm-local-holomorphic-potential-for-harmonic-functions]]).

[L2] If $F$ is holomorphic on a disc and $|F|\le B$ on a concentric circle of radius $\rho$, then $|F'(z_0)|\le B/\rho$ at the centre $z_0$ of the smaller disc ([[lem-cauchy-estimates-on-concentric-subdiscs]]).

[L3] A holomorphic function on a punctured disc extends holomorphically across the centre as soon as it is bounded on some punctured neighbourhood of that centre ([[thm-removable-singularity-characterizations]]).

[L4] A holomorphic function with a zero at $a$ factors as $(z-a)q(z)$ with $q$ holomorphic near $a$ ([[thm-zero-order-factorization-holomorphic-function]]).

[L5] A star-shaped disc is homologically simply connected, so every holomorphic function on it has a primitive ([[prop-star-shaped-plane-domains-are-homologically-simply-connected]], [[thm-primitives-homologically-simply-connected-domains]]).

[L6] The complex exponential is entire, $|\exp(x+iy)|=e^x$, and sums and compositions of holomorphic functions are holomorphic ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[thm-chain-rule-for-complex-derivatives]]).

[L7] A complex-valued function with continuous first partials satisfying the Cauchy-Riemann equations is holomorphic, and a real-valued holomorphic function on a domain is constant ([[thm-continuous-partials-and-cauchy-riemann-imply-holomorphic]], [[cor-real-valued-holomorphic-function-is-constant]]).

[L8] Holomorphic functions are smooth, and the real part of a holomorphic $C^2$ function is harmonic ([[cor-holomorphic-functions-are-real-analytic-and-smooth]], [[thm-c2-holomorphic-components-are-harmonic]]).

[L9] The fundamental theorem of calculus on a real interval rewrites a function difference as the integral of its derivative ([[thm-ftc-second-part]]).

## Proof

**Proof technique:** direct.

1.1 Fix $z_0$ with $0<|z_0-a|<R/2$, and let $\rho:=|z_0-a|/4$. Then the disc $D(z_0,2\rho)$ lies in $0<|z-a|<R$. By [L1], choose a holomorphic function $F$ on $D(z_0,2\rho)$ with $\operatorname{Re}F=u$ there. [L1, choose]

2.1 The function $H:=\exp(F)$ is holomorphic on $D(z_0,2\rho)$ by [L6], and its modulus is $|H|=e^u\le e^M$ there by the bound on $u$. Applying [L2] on the circle of radius $\rho$ about $z_0$ gives $|H'(z_0)|\le e^M/\rho=4e^M/|z_0-a|$. Since $H'=F'\exp(F)$ and $|\exp(-F(z_0))|=e^{-u(z_0)}\le e^M$, one gets $$|F'(z_0)|\le \frac{4e^{2M}}{|z_0-a|}.$$ [step 1.1, L2, L6, algebra]

3.1 On every local potential disc from step 1.1 one has $F'=u_x-iu_y$, so $g:=u_x-iu_y$ is holomorphic on the punctured disc. Because the point $z_0$ of step 1.1 was arbitrary in $0<|z_0-a|<R/2$, step 2.1 yields $|(z-a)g(z)|\le4e^{2M}$ throughout $0<|z-a|<R/2$. Therefore $h(z):=(z-a)g(z)$ is holomorphic on $0<|z-a|<R$ and bounded on the punctured neighbourhood $0<|z-a|<R/2$, so [L3] extends it holomorphically across $a$; write $c:=h(a)$. [step 2.1, L3, algebra]

4.1 Because $h-c$ is holomorphic on $D(a,R)$ and vanishes at $a$, [L4] gives a holomorphic function $k$ on $D(a,R)$ with $h(z)-c=(z-a)k(z)$. Hence $g(z)=c/(z-a)+k(z)$ on the punctured disc. Restricting to the real ray $z=a+t$ with $t>0$, the identity $u_x(a+t)=\operatorname{Re}g(a+t)=\operatorname{Re}(c)/t+\operatorname{Re}k(a+t)$ and [L9] imply $$u(a+t_0)-u(a+t)=\operatorname{Re}(c)\log\!\frac{t_0}{t}+\int_t^{t_0}\operatorname{Re}k(a+s)\,ds.$$ Because $u$ is bounded and $k$ is continuous near $a$, the logarithmic term cannot diverge; hence $\operatorname{Re}(c)=0$. [step 3.1, L4, L9, algebra]

5.1 For $0<r<R$, parameterize the circle by $\gamma_r(t)=a+re^{it}$. Since $u\circ\gamma_r$ is $C^1$ and periodic, $$0=u(\gamma_r(2\pi))-u(\gamma_r(0))=\int_0^{2\pi}\frac{d}{dt}u(\gamma_r(t))\,dt=\operatorname{Re}\int_{\gamma_r}g(z)\,dz.$$ Writing $g=c/(z-a)+k(z)$, the holomorphic function $k$ has a primitive on $D(a,R)$ by [L5], so its circle integral is $0$; therefore $0=\operatorname{Re}(2\pi i c)$, which means $\operatorname{Im}(c)=0$. Combined with step 4.1, this gives $c=0$. [step 3.1, step 4.1, L5, algebra]

6.1 Step 5.1 shows $h(a)=0$, so [L4] gives a holomorphic extension $g$ on $D(a,R)$ with $h(z)=(z-a)g(z)$. Since the disc is star-shaped, [L5] gives a primitive $G$ of $g$ on $D(a,R)$. On the punctured disc, $H:=u-\operatorname{Re}G$ has continuous first partials with $H_x=H_y=0$, so [L7] makes $H$ holomorphic there; being real-valued, $H$ is constant by [L7]. Therefore some real constant $b$ makes $u=\operatorname{Re}G+b$ on the punctured disc. Since $G$ is holomorphic on the full disc, [L8] makes $U:=\operatorname{Re}G+b$ harmonic on $D(a,R)$, and this $U$ extends $u$. [step 5.1, L4, L5, L7, L8] ∎
