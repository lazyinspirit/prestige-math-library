---
id: thm-positive-time-spatial-analyticity-of-heat-kernel-solutions
kind: theorem
title: "Spatial analyticity of heat flow at positive time"
status: published
origin: pipeline
deps:
  - def-countable-choice
  - def-heat-kernel
  - def-factorial-and-falling-factorial
  - def-multivariable-power-series
  - def-real-analytic-germ-in-several-variables
  - def-real-exponential-function-and-e
  - lem-exponential-series-has-infinite-radius
  - lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time
  - thm-dominated-convergence
  - thm-exponential-addition-formula
  - thm-gaussian-integral
  - thm-holder-inequality-for-integrals
  - thm-power-series-define-holomorphic-functions-in-several-variables
  - thm-tonelli-and-fubini-for-completed-product-measures
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-3.md"
      - "research/frontier-38-owner-30-alpha-batch-3-5a.md"
      - "research/frontier-38-owner-30-step5-hash-3-post-5a.json"
    reviewed_raw_sha256: "90716f8681bf2e27512ff20f55de4af6bf4ffaabc0e2848f32d1d4c621159480"
    content_sha256: "e0f25d4dc592a5c5882ce55f5470e4d31e5f25c6254183562e2cea32f92e4618"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§5.2.2, printed p. 137 immediately after Proposition 5.14 (explicit spatial analyticity statement for $H^s$ data; the local Gaussian proof below supplies all $L^p$ data); (5.6), printed p. 130"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Definition 1.0.1, p. 1, formula (1.0.2)"
---

## Statement

Assume Countable Choice. Let $n\ge1$, $1\le p\le\infty$,
$f\in L^p(\mathbb R^n)$, and $t>0$. Then $H_tf$ is real analytic on
$\mathbb R^n$ (for complex data the real and imaginary parts are real
analytic). For every $r>0$ and multi-index $\alpha$,
$\|D^\alpha H_tf\|_\infty\le\alpha!r^{-|\alpha|}M_{n,p,t,r}\|f\|_p$, where
$M_{n,p,t,r}=\|\Gamma(\cdot,t)\exp(r\sum_i|x_i|/(2t)+nr^2/(4t))\|_{p'}<\infty$,
$1/p+1/p'=1$. The spatial Taylor series converges absolutely and equals
$H_tf(x+h)$ for every real $h$, uniformly for $h$ in each compact box. In
particular taking $r=\sqrt t$ gives a factorial Gaussian derivative bound
$C_{n,p}\alpha!t^{-|\alpha|/2-n/(2p)}\|f\|_p$.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $1\le p\le\infty$ with conjugate $p'$, $f\in L^p(\mathbb R^n)$, $t>0$, $r>0$, a centre $a\in\mathbb R^n$ and a multi-index $\alpha$.

[A1] Countable Choice is the hypothesis carried by the integration, differentiation and measure-theoretic suppliers below ([[def-countable-choice]]).

[F1] The heat kernel is $\Gamma(w,t)=(4\pi t)^{-n/2}e^{-|w|^2/(4t)}$, where $|w|^2=\sum_iw_i^2$ ([[def-heat-kernel]]).

[F2] The real exponential is $\exp(u)=\sum_{k\ge0}u^k/k!$, with the factorial of [[def-factorial-and-falling-factorial]], and the series converges absolutely for every real $u$ ([[def-real-exponential-function-and-e]], [[lem-exponential-series-has-infinite-radius]]); for all real $u,v$, $\exp(u)\exp(v)=\exp(u+v)$ ([[thm-exponential-addition-formula]]).

[F3] The absolutely convergent representative $u(x,t)=\int_{\mathbb R^n}\Gamma(x-y,t)f(y)\,dy$ is defined at every point and is $C^\infty$ in $x$ for $t>0$, with $D^\alpha u(\cdot,t)=(D^\alpha\Gamma_t)*f$ ([[lem-spatial-and-time-derivatives-pass-through-heat-convolution-for-positive-time]]); its class is $H_tf$.

[F4] For conjugate exponents and measurable $B,F$ with $B\in\mathcal L^{p'}$ and $F\in\mathcal L^p$, $\int|BF|\le\|B\|_{p'}\|F\|_p$ ([[thm-holder-inequality-for-integrals]]).

[F5] If $g_N\to g$ pointwise and $|g_N|\le G$ pointwise with $G$ integrable, then $\int g_N\to\int g$ ([[thm-dominated-convergence]]).

[F6] On sigma-finite product spaces, Tonelli's theorem equates the double integrals of a nonnegative measurable function with either iterated integral ([[thm-tonelli-and-fubini-for-completed-product-measures]]); the counting measure on $\mathbb N^n$ is sigma-finite, so it may be used as one factor.

[F7] $\int_{-\infty}^{\infty}e^{-s^2}\,ds=\sqrt\pi$ ([[thm-gaussian-integral]]).

[F8] The multi-indexed power series of [[def-multivariable-power-series]] converge absolutely at a point exactly when the associated series of moduli does, and box partial sums converge to the sum of an absolutely convergent series.

[F9] Fix $m\ge1$, $a\in\mathbb C^m$, a polyradius $r$ and coefficients with $|c_\alpha|\le M\prod_{k<m}r_k^{-\alpha_k}$. Then $\sum_\alpha c_\alpha(z-a)^\alpha$ converges absolutely and uniformly on each $\overline\Delta_{\theta r}(a)$, $0<\theta<1$, its sum $g$ is holomorphic on $\Delta_r(a)$, and every iterated complex partial derivative exists there with $\partial^\beta_zg(a)=\beta!c_\beta$ ([[thm-power-series-define-holomorphic-functions-in-several-variables]]).

[F10] A real analytic germ at $a$ is represented on a polydisc by $f(x)=\sum_\alpha c_\alpha(x-a)^\alpha$ with real coefficients $c_\alpha=D^\alpha f(a)/\alpha!$, absolutely convergent there ([[def-real-analytic-germ-in-several-variables]]).



## Proof

**Proof technique:** direct.

1.1 Expansion of the translated kernel: put $w=a-y$ and fix real $h$ with $|h_i|\le r$ for every $i$. By [F1] and the addition formula [F2], $\Gamma(a+h-y,t)=\Gamma(w,t)\prod_{i<n}\exp\bigl(-w_ih_i/(2t)\bigr)\exp\bigl(-h_i^2/(4t)\bigr)$; expanding each factor by the exponential series of [F2] and regrouping the finite products gives $\Gamma(a+h-y,t)=\sum_\alpha b_\alpha(w)h^\alpha$ with $b_\alpha(w)=\Gamma(w,t)\prod_{i<n}\sum_{m_i+2\ell_i=\alpha_i}\frac{(-w_i/(2t))^{m_i}}{m_i!}\frac{(-1/(4t))^{\ell_i}}{\ell_i!}$, and the nonnegative series of moduli is bounded by $\sum_\alpha|b_\alpha(w)|r^{|\alpha|}\le\Gamma(w,t)\prod_{i<n}\exp\bigl(r|w_i|/(2t)\bigr)\exp\bigl(r^2/(4t)\bigr)=:B_r(w)$, because the product of the two absolutely convergent exponential series is the absolutely convergent series for the product of the exponentials. [A1, F1, F2, F8, given, algebra]

2.1 The inequality $2r|w_i|\le w_i^2/2+2r^2$ gives $B_r(w)\le(4\pi t)^{-n/2}\exp(3nr^2/(4t))\exp(-|w|^2/(8t))$. The last Gaussian is bounded and has integrable positive powers, by the Gaussian integral [F7], a scaling in each coordinate, and Tonelli [F6]. Thus $M_{n,p,t,r}:=\|B_r\|_{p'}<\infty$ for every $1\le p'\le\infty$. [step 1.1, F1, F6, F7, given, algebra]

3.1 Coefficient bounds: for every multi-index $\alpha$ define $c_\alpha(a):=\int_{\mathbb R^n}b_\alpha(a-y)f(y)\,dy$, absolutely convergent because $|b_\alpha|\le r^{-|\alpha|}B_r$ and $B_r\in L^{p'}$ with $f\in L^p$ by [F4]. Tonelli's theorem [F6] applied to the nonnegative summands over the counting index $\alpha$ and $y\in\mathbb R^n$ gives $\sum_\alpha r^{|\alpha|}|c_\alpha(a)|\le\sum_\alpha r^{|\alpha|}\int|b_\alpha(a-y)||f(y)|\,dy\le\int B_r(a-y)|f(y)|\,dy\le M_{n,p,t,r}\|f\|_p$ by step 2.1 and [F4], the bound being uniform in the centre $a$. [step 1.1, step 2.1, F4, F6, given]

4.1 Power-series expansion of the representative: fix the centre $a$ and real $h$ with $|h_i|\le r$. For the box partial sums $S_N(y):=\sum_{\alpha_i\le N\text{ for all }i}b_\alpha(a-y)h^\alpha$ of step 1.1 one has $S_N(y)\to\Gamma(a+h-y,t)$ pointwise in $y$ and $|S_N(y)|\le B_r(a-y)$; since $B_r(a-\cdot)|f|\in L^1$ by steps 2.1 and 3.1, dominated convergence [F5] gives $u(a+h,t)=\int\Gamma(a+h-y,t)f(y)\,dy=\sum_\alpha c_\alpha(a)h^\alpha$, where $u$ is the everywhere-defined representative of [F3]. The summable bound $\sum_\alpha|c_\alpha(a)|r^{|\alpha|}<\infty$ from step 3.1 also gives uniform absolute convergence on this closed box, by [F8]. [step 1.1, step 2.1, step 3.1, F3, F5, F8, given]

5.1 Holomorphic extension and derivative formula: by step 3.1 the coefficients satisfy $|c_\alpha(a)|\le r^{-|\alpha|}M_{n,p,t,r}\|f\|_p$ for every $\alpha$, so [F9] with polyradius $(r,\dots,r)$ gives a holomorphic function $g$ on the polydisc $\Delta_r(a)\subseteq\mathbb C^n$ whose power series is $\sum_\alpha c_\alpha(a)(z-a)^\alpha$ and whose iterated complex partial derivatives at $a$ are $\partial^\beta g(a)=\beta!c_\beta(a)$; by step 4.1 the restriction of $g$ to the real polydisc agrees with the representative $u(\cdot,t)$, so $D^\alpha u(a,t)=\alpha!c_\alpha(a)$ and $|D^\alpha H_tf(a)|=\alpha!|c_\alpha(a)|\le\alpha!r^{-|\alpha|}M_{n,p,t,r}\|f\|_p$, uniformly in $a$. [step 3.1, step 4.1, F9, given]

6.1 Real analyticity: if $f$ is real-valued, the coefficients $c_\alpha(a)$ of step 4.1 are real and the absolute convergence of $\sum_\alpha c_\alpha(a)h^\alpha$ for every real $h$ (step 4.1 with $r$ arbitrary) exhibits $u(\cdot,t)$ as a real analytic germ at every centre $a$ in the sense of [F10]; for complex $f$ apply the same conclusion to $\operatorname{Re}f$ and $\operatorname{Im}f$, which lie in $L^p$ with $\|{\cdot}\|_p\le\|f\|_p$, and add the two expansions using linearity of the integral, so the real and imaginary parts of $H_tf$ are real analytic. [step 4.1, step 5.1, F3, F10, given]

6.2 The choice $r=\sqrt t$: the substitution $w=\sqrt t\,z$ gives $B_{\sqrt t}(\sqrt t z)=(4\pi t)^{-n/2}e^{-|z|^2/4}e^{\sum_i|z_i|/2}e^{n/4}$ and $dw=t^{n/2}dz$. For $p'<\infty$ apply this to the $L^{p'}$ integral; for $p'=\infty$ take essential suprema. In both cases $M_{n,p,t,\sqrt t}=t^{-n/(2p)}C_{n,p}$ with $C_{n,p}:=\bigl\|(4\pi)^{-n/2}e^{-|\cdot|^2/4}e^{\sum_i|\cdot_i|/2}e^{n/4}\bigr\|_{p'}<\infty$; step 5.1 with this $r$ gives the stated factorial Gaussian bound $C_{n,p}\alpha!t^{-|\alpha|/2-n/(2p)}\|f\|_p$. [step 5.1, given, algebra]

7.1 Steps 1.1, 2.1, 3.1, 4.1, 5.1, 6.1 and 6.2 establish the absolutely convergent spatial Taylor expansion of $H_tf$ at every centre with coefficients $c_\alpha(a)$, the uniform factorial bound $\|D^\alpha H_tf\|_\infty\le\alpha!r^{-|\alpha|}M_{n,p,t,r}\|f\|_p$ for every $r>0$, the real analyticity of $H_tf$ (real and imaginary parts for complex data), and the specialisation $r=\sqrt t$; the expansion converges for every real displacement because $r$ is arbitrary. [step 5.1, step 6.1, step 6.2, given] ∎
