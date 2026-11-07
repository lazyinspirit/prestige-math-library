---
id: lem-positive-radius-smoothed-voronoi-error-transforms
kind: lemma
title: "Positive radius smoothing of the divisor and circle errors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-countable-choice
  - def-dirichlet-divisor-error-term
  - def-gauss-circle-error-term
  - thm-voronoi-divisor-summation-formula
  - lem-voronoi-damped-sine-cosine-kernel-asymptotic
  - thm-voronoi-two-square-summation-for-smooth-radial-tests
  - lem-voronoi-j1-square-root-decay
  - lem-bessel-integral-representations-and-scaled-range
  - lem-divisor-function-subpower-bound
  - thm-two-square-representation-count
  - lem-schwartz-cutoffs-from-the-standard-smooth-step
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "Countable Choice is used only through the stated circle Poisson/Voronoï supplier."
sources:
  references:
    - title: "Youness Lamzouri, Sharp Omega Results for the Divisor and Circle Problems"
      url: "https://arxiv.org/pdf/2605.21476v1"
      locator: "Proof of Theorem 1.1, §3, pp.12–13; the positive-radius smoothing below is a locally constructed substitute for the sharp truncated formulas (3.9)–(3.11)."
---

## Statement

Assume Countable Choice. Let $w\in C_c^\infty(\mathbb R)$ be real, even, nonnegative, supported in $[-1,1]$, with integral one and $\widehat w(\xi):=\int w(u)e^{2\pi i\xi u}\,du\ge0$ for every real $\xi$. Such a function exists. For $t\ge2$ and $0<h\le1$ put
$$D_h(t)=\int_{-1}^1 w(u)\Delta((t+hu)^2)\,du,\qquad C_h(t)=\int_{-1}^1 w(u)P((t+hu)^2)\,du.$$
For each fixed $\varepsilon\in(0,1/16)$, uniformly in these parameters,
$$D_h(t)=\frac{t^{1/2}}{\pi\sqrt2}\sum_{n\ge1}\frac{d(n)}{n^{3/4}}\widehat w(2h\sqrt n)\cos(4\pi\sqrt n\,t-\pi/4)+O_{w,\varepsilon}(1+t^{-1/2}h^{1/2-\varepsilon}),$$
$$C_h(t)=-\frac{t^{1/2}}\pi\sum_{n\ge1}\frac{r_2(n)}{n^{3/4}}\widehat w(h\sqrt n)\cos(2\pi\sqrt n\,t+\pi/4)+O_{w,\varepsilon}(t^{-1/2}+t^{-1/2}h^{1/2-\varepsilon}).$$
Both displayed series converge absolutely. Their nonnegative coefficient sums are $O_{w,\varepsilon}(h^{-1/2-\varepsilon})$. Each average lies between the infimum and supremum of the corresponding error on $[(t-h)^2,(t+h)^2]$.

## Statement references

[Lamzouri](https://arxiv.org/pdf/2605.21476v1)

## Facts & Assumptions

**Given:** Countable Choice, $t\ge2$, $0<h\le1$, and the indicated positive smooth kernel.

[A1] [[def-countable-choice]] is assumed for the circle summation formula.

[F1] [[thm-voronoi-divisor-summation-formula]] gives the boundedly convergent endpoint-averaged divisor series; [[lem-voronoi-damped-sine-cosine-kernel-asymptotic]] gives its oscillatory leading term with uniform $O((nx)^{-1/4})$ error.

[F2] [[thm-voronoi-two-square-summation-for-smooth-radial-tests]] gives the exact compact smooth radial circle error transform. [[lem-voronoi-j1-square-root-decay]] gives $(zJ_1(z))'=zJ_0(z)$ and [[lem-bessel-integral-representations-and-scaled-range]] gives the integral representation of $J_1$.

[F3] [[lem-divisor-function-subpower-bound]] gives $d(n)\ll_\eta n^\eta$; [[thm-two-square-representation-count]] gives $r_2(n)\le4d(n)$.

[F4] [[lem-schwartz-cutoffs-from-the-standard-smooth-step]] supplies a nonzero real even compactly supported smooth bump.

## Proof

1.1 Choose a nonzero real even smooth bump $v$ supported in $[-1/2,1/2]$ by [F4], and set $w=(v*v)/(\int v)^2$ after taking $v\ge0$ and nonzero. Then $w$ is real, even, nonnegative, supported in $[-1,1]$, and has integral one. Its Fourier transform is $\widehat w(\xi)=|\widehat v(\xi)|^2/(\int v)^2\ge0$. Repeated compact integration by parts gives $|\widehat w(\xi)|\le C_N(1+|\xi|)^{-N}$ for each fixed integer $N$. [F4, given, algebra]

1.2 We record the needed leading Bessel term, including its constant. The representation in [F2] is $J_1(z)=\pi^{-1}\Re\int_0^\pi e^{i\theta-iz\sin\theta}d\theta$. Near $\pi/2$, put $y=2\sin((\theta-\pi/2)/2)$, so $-\sin\theta=-1+y^2/2$ exactly. The transformed amplitude is smooth and has even contribution $i(1+O(y^2))$; its odd part integrates to zero on a symmetric cutoff. The damped Gaussian integral $\int_{\mathbb R}e^{izy^2/2-\eta y^2}dy=(2\pi)^{1/2}(\eta-iz/2)^{-1/2}/\sqrt2$, followed by $\eta\downarrow0$, gives the local leading term $(2/(\pi z))^{1/2}\cos(z-3\pi/4)$. Taylor's $O(y^2)$ remainder, two integrations by parts outside $|y|\le z^{-1/2}$ and a dyadic decomposition give $O(z^{-3/2})$. Away from the stationary point integrate twice by parts. The first endpoint boundary term is purely imaginary before taking the real part because the amplitude is real at $0,\pi$ and the phase is zero there, so the real nonstationary contribution is $O(z^{-2})$. Thus uniformly for $z\ge1$, [F2, given, algebra]
$$J_1(z)=\sqrt{\frac2{\pi z}}\cos(z-3\pi/4)+O(z^{-3/2}).$$
The Gaussian identity follows by squaring the absolutely convergent damped integral and polar coordinates for $\eta>0$; finite integration by parts removes the auxiliary damping on the fixed compact cutoff. [F2, given, algebra]

2.1 Put $s=t+hu$. By [F1], for every $s\in[t-h,t+h]$ the endpoint-averaged divisor error is $s^{1/2}(\pi\sqrt2)^{-1}\sum_{n\ge1}d(n)n^{-3/4}\cos(4\pi\sqrt n\,s-\pi/4)+O(s^{-1/2})$, the error series converging uniformly and absolutely by [F3]. The ordinary error differs by $\frac14+\frac12d(s^2)$ when $s^2$ is integral and by $\frac14$ otherwise; the exceptional $u$ are finite, so they do not affect the proper integral. Bounded convergence of the given partial sums permits integration of the series, and repeated integration by parts in $u$ makes the integrated series absolutely convergent. Replace $s^{1/2}$ by $t^{1/2}$. For every fixed $N$, integration by parts shows the Fourier transform of $w(u)(s^{1/2}-t^{1/2})$ is $O_{w,N}(h t^{-1/2}(1+h\sqrt n)^{-N})$. Dyadic summation with [F3] bounds $\sum d(n)n^{-3/4}(1+h\sqrt n)^{-N}$ by $O(h^{-1/2-\varepsilon})$, after choosing a smaller subpower exponent. Evenness of $w$ then yields the divisor formula. [F1, F3, step 1.1, algebra]

2.2 Define $\varphi(x)=w((\sqrt{x}-t)/h)/(2h\sqrt{x})$ for $x>0$ and zero off $[(t-h)^2,(t+h)^2]$, and $f(x)=\int_x^\infty\varphi(v)dv$. It is smooth and compactly supported on $[0,\infty)$, with a smooth extension across zero, and $-f'=\varphi$. Apply [F2]. Since $\int_0^xJ_0(2\pi\sqrt{nv})dv=\sqrt{x}J_1(2\pi\sqrt{nx})/(\pi\sqrt n)$ by [F2], finite Fubini first gives [F2, step 1.1, algebra]
$$C_h(t)=\sum_{n\ge1}\frac{r_2(n)}{\sqrt n}\int_{-1}^1w(u)(t+hu)J_1(2\pi\sqrt n(t+hu))du.$$
The summation interchange is justified by the absolute circle transform in [F2] and finite compact Fubini for each summand. Insert step 1.2: because $t+hu\ge1$, the sum of the remainders is $O(t^{-1/2}\sum r_2(n)n^{-5/4})=O(t^{-1/2})$ by [F3]. The leading phase is $\cos(2\pi\sqrt n s-3\pi/4)=-\cos(2\pi\sqrt n s+\pi/4)$. The same amplitude replacement and dyadic bound as in step 2.1 give the circle formula and absolute convergence. [A1, F2, F3, step 1.1, step 1.2, step 2.1, algebra]

3.1 The dyadic estimate in step 2.1 also bounds both nonnegative coefficient sums by $O(h^{-1/2-\varepsilon})$. Since $w\ge0$ has integral one, each average lies between the infimum and supremum of the error on its indicated interval. The error functions are bounded on this interval; the infimum and supremum therefore exist. [F3, step 1.1, step 2.1, step 2.2, algebra] ∎
