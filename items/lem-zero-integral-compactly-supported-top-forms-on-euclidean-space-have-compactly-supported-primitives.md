---
id: "lem-zero-integral-compactly-supported-top-forms-on-euclidean-space-have-compactly-supported-primitives"
kind: "lemma"
title: "Zero-integral compactly supported top forms on Euclidean space have compactly supported primitives"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-integration-descends-to-compactly-supported-top-de-rham-cohomology","lem-smooth-bump-between-concentric-euclidean-balls","thm-multidimensional-integral-properties","thm-differentiation-under-the-integral-sign-on-a-compact-rectangle","thm-ftc-first-part","thm-jordan-fubini-by-sections","lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary","thm-heine-borel-rn","lem-compactness-of-a-subspace-is-ambient","thm-heine-cantor-metric","thm-continuous-on-a-rectangle-is-riemann-integrable","lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes","thm-change-of-variables-for-compact-jordan-sets"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $n\ge1$ and let $\omega\in\Omega_c^n(\mathbb R^n)$ satisfy $\int_{\mathbb R^n}\omega=0$, with the standard orientation and the finite-localization integral. There exists $\eta\in\Omega_c^{n-1}(\mathbb R^n)$ with $d\eta=\omega$. For $n=0$, the integral of a form on the single point is its value, so zero integral means $\omega=0$ and the zero element of $\Omega_c^{-1}=0$ is the only primitive. The construction in positive dimension is by explicit finite-dimensional induction and requires no choice axiom.

## Facts & Assumptions

[F1] [[thm-integration-descends-to-compactly-supported-top-de-rham-cohomology]] fixes the choice-free boundaryless integral convention and compact-primitive interpretation.

[F2] [[lem-smooth-bump-between-concentric-euclidean-balls]] gives a smooth $0\le\rho\le1$ on $\mathbb R$ that is one on $[-1/2,1/2]$ and supported in $(-1,1)$.

[F3] [[thm-multidimensional-integral-properties]] gives linearity, monotonicity, interval-slice additivity and the absolute integral bound.

[F4] [[thm-differentiation-under-the-integral-sign-on-a-compact-rectangle]] passes a continuous parameter derivative through a fixed finite-interval integral.

[F5] [[thm-ftc-first-part]] differentiates an integral function at each point of continuity of its integrand.

[F6] [[thm-jordan-fubini-by-sections]] identifies the compact rectangular integral with the iterated integral over its last coordinate.

[F7] [[lem-the-de-rham-complex-and-pullback-extend-to-manifolds-with-boundary]] supplies the local coefficient differential formula and its signed wedge rule.

[F8] [[thm-heine-borel-rn]] makes closed bounded supports in positive-dimensional Euclidean spaces compact.

[F9] [[lem-compactness-of-a-subspace-is-ambient]] gives finite subcovers of the increasing open cubes covering a compact Euclidean support.

[F10] [[thm-heine-cantor-metric]] gives uniform continuity of each continuous derivative on a compact rectangle.

[F11] [[thm-continuous-on-a-rectangle-is-riemann-integrable]] gives integrability of all smooth coefficient and derivative restrictions on these rectangles.

[F12] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]] identifies the integral of a Euclidean chart-supported top form with its coefficient integral and gives locality.

[F13] [[thm-change-of-variables-for-compact-jordan-sets]] gives the invertible affine interval substitution, with the absolute determinant and oriented-interval sign treated separately.

## Proof

**Given:** $\omega=f\,dx_1\wedge\cdots\wedge dx_n$ of compact support and integral zero. We construct its compact primitive by induction on positive $n$, with the separate dimension-zero convention in the statement.

1.1 By [F9], the increasing open cubes have a finite subfamily covering $\operatorname{supp}f$; take $R>1$ larger than the largest radius in such a finite family. Thus $f$ vanishes outside a compact box strictly inside $[-R,R]^n$. By [F11] and [F12], the given integral is the ordinary integral of $f$ on that rectangle, and all sections used below are integrable. If $n=1$, put $a(x)=\int_{-R}^x f(t)\,dt$ using oriented interval integrals. The fundamental theorem gives $a'=f$; repeated differentiation makes $a$ smooth. It vanishes for $x\le-R$, because the integrand is zero there, and for $x\ge R$, because the total integral is zero. Hence $\eta=a$ has compact support by [F8] and $d\eta=f\,dx$. [F5, F7, F8, F9, F11, F12, given]

1.2 Fix one bump $\rho$ from [F2]. By [F3], $$1\le c:=\int_{-1}^1\rho(t)\,dt\le2,$$ since $\rho=1$ on the middle interval of length one and is between zero and one elsewhere. Integrability follows from [F11]. Put $b=\rho/c$. It is smooth, has compact support in $(-1,1)$ and has integral one. This normalization uses one bump and an explicit positive integral bound, not a global positivity theorem or an infinite choice. [F2, F3, F11]

2.1 Let $n\ge2$, write $x'=(x_1,\ldots,x_{n-1})$, $t=x_n$, and define $$f_0(x')=\int_{-R}^{R}f(x',s)\,ds,\qquad g(x',t)=f(x',t)-f_0(x')b(t),\qquad h(x',t)=\int_{-R}^{t}g(x',s)\,ds.$$ The function $f_0$ is smooth: repeatedly apply [F4] in each one parameter coordinate on smaller closed parameter rectangles. Each resulting derivative is the integral of the corresponding derivative of $f$. Joint continuity follows from [F10] and [F3], since the change of that integral is bounded by $2R$ times the uniform change of the integrand. Hence $g$ is smooth. For joint smoothness of $h$, use $$h(x',t)=(t+R)\int_0^1g(x',-R+u(t+R))\,du.$$ This formula is valid also at $t=-R$ and for $t<-R$, by [F13] for $t\ne-R$ (reverse the interval when $t<-R$); at $t=-R$ both sides are zero. On any compact parameter neighbourhood the integrand and all parameter derivatives are continuous on its product with $[0,1]$; repeated [F4], [F10] and the same bound prove all joint derivatives continuous. Finally [F5] gives $\partial_t h=g$. [F3, F4, F5, F10, F11, F13, step 1.1, step 1.2]

3.1 The function $f_0$ vanishes outside $[-R,R]^{n-1}$ and has compact support by [F8]. For every $x'$, $$\int_{-R}^{R}g(x',s)\,ds=f_0(x')-f_0(x')\int_{-R}^{R}b(s)\,ds=0,$$ since $R>1$ and $b$ is supported in $(-1,1)$. Therefore $h$ vanishes when $t\le-R$ or $t\ge R$. It also vanishes outside the stated $x'$ box, because both $f$ and $f_0$ vanish there. Thus $h$ has closed support inside $[-R,R]^n$ and is compactly supported by [F8]. By [F6] with all smooth sections and by [F12], $$\int_{\mathbb R^{n-1}} f_0\,dx'=\int_{\mathbb R^n}f\,dx=0.$$ [F3, F6, F8, F11, F12, step 1.1, step 1.2, step 2.1]

4.1 Apply the induction hypothesis in dimension $n-1$ to the compactly supported top form $f_0\,dx_1\wedge\cdots\wedge dx_{n-1}$. It gives a compactly supported $(n-2)$-form $\gamma$ with $d\gamma=f_0\,dx_1\wedge\cdots\wedge dx_{n-1}$. Let $\pi:\mathbb R^n\to\mathbb R^{n-1}$ be projection and put $$\eta=(-1)^{n-1}h\,dx_1\wedge\cdots\wedge dx_{n-1}+\pi^*\gamma\wedge b(t)\,dt.$$ For the first summand, every $x'$ derivative repeats a differential and vanishes; moving $dt$ past $n-1$ factors cancels $(-1)^{n-1}$, so its derivative is $g\,dx_1\wedge\cdots\wedge dx_n$. For the second, [F7] gives $\pi^*d\gamma\wedge b\,dt$, since $d(b\,dt)=b'\,dt\wedge dt=0$. Its coefficient is $f_0b$. Thus $d\eta=(g+f_0b)\,dx_1\wedge\cdots\wedge dx_n=\omega$. [F7, step 2.1, step 3.1]

5.1 The first summand of $\eta$ is supported in $[-R,R]^n$ by step 3.1. The second is supported in $\operatorname{supp}\gamma\times[-1,1]$. By [F9] the first factor is bounded; the product support is closed and bounded, so [F8] makes it compact. Their finite union is bounded, and the closed support of the sum lies in it, again compact by [F8]. This completes the induction with an actual compact primitive; projection pullback by itself was not claimed to preserve compact support. [F8, F9, step 3.1, step 4.1]

6.1 At $n=0$, [F1] and [F12] identify the integral on the standard oriented point with its scalar value; zero integral forces zero, the derivative of the zero negative-degree element. For zero input the construction gives $f_0=g=h=0$ and one may take $\gamma=0$, hence $\eta=0$. The interval endpoints, zero fibres and vanishing support were checked in steps 1.1 and 3.1. The induction chooses one normalized bump and, at each of finitely many dimensions for a given input, one previously established primitive. There is no choice of primitives over an infinite family and no AC. [F1, F2, F8, F12, step 1.1, step 1.2, step 3.1, step 4.1, step 5.1] ∎
