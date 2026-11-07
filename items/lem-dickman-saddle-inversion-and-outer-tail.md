---
id: lem-dickman-saddle-inversion-and-outer-tail
kind: lemma
title: Dickman saddle inversion and the outer Fourier tail
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
proof_strategy: direct
axiom_use: No choice axiom is used; the inversion and oscillatory estimates are derived from explicit finite integrals and scalar tails.
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-dickman-saddle-parameter-and-central-gaussian-estimate
- lem-dickman-entire-laplace-transform
- lem-dickman-method-of-steps-existence-uniqueness-and-positivity
- thm-gaussian-integral
- thm-ftc-second-part
- thm-natural-logarithm-laws
- thm-sine-and-cosine-derivatives
- def-complex-exponential
- thm-complex-exponential-addition-and-real-extension
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- thm-real-power-continuity-and-derivatives
sources:
  references:
  - title: Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors
    url: https://numdam.org/item/JTNB_1993__5_2_411_0.pdf
    locator: Sections 2–3, Dickman transform and saddle inversion context. The full real-line tail and inversion argument below is supplied locally.
---

## Statement

Let $u\ge2$, let $\xi>0$ be the unique solution of $e^\xi=1+u\xi$, and put
$$V=\int_0^1v e^{\xi v}\,dv,\qquad I(\xi)=\int_0^1\frac{e^{\xi v}-1}{v}\,dv.$$
Then, with an absolute implied constant,
$$\rho(u)=\frac{\exp(\gamma-u\xi+I(\xi))}{\sqrt{2\pi V}}\left(1+O(u^{-1/5})\right).$$
More precisely, the symmetric improper integral
$$\rho(u)=\frac{e^{-u\xi}}{2\pi}\lim_{T\to\infty}\int_{-T}^T e^{itu}\widehat\rho(-\xi+it)\,dt$$
exists, and the part outside $|t|\le u^{-2/5}$ is $O(\widehat\rho(-\xi)u^{-7/10})$ after the common factor $e^{-u\xi}$. No finite-zeta comparison or uniform smooth-number counting result is asserted.

## Facts & Assumptions

**Given:** The real parameter $u\ge2$, its saddle $\xi$ and $V$.

[F1] The recorded central saddle lemma supplies $\log u<\xi<2\log u$, $u/2\le V\le u$, Gaussian decay on $|t|\le\pi$, and the central integral $\sqrt{2\pi/V}(1+O(u^{-1/5}))$. [[lem-dickman-saddle-parameter-and-central-gaussian-estimate]]

[F2] The Dickman transform is entire, its integral converges absolutely and locally uniformly, and $$\widehat\rho(s)=\exp\left(\gamma+\int_0^1\frac{e^{-sv}-1}{v}dv\right).$$ The Dickman function is continuous, positive, equals one on $[0,1]$, and is differentiable on $(1,\infty)$ with continuous derivative $-\rho(u-1)/u$; for $u\ge1$ it satisfies $u\rho(u)=\int_{u-1}^u\rho(v)dv$. [[lem-dickman-entire-laplace-transform]] [[lem-dickman-method-of-steps-existence-uniqueness-and-positivity]]

[F3] Compact integration by parts, real logarithm and power laws, and the usual sine/cosine and complex exponential identities hold. The real Gaussian integral is $\sqrt\pi$. [[thm-ftc-second-part]] [[thm-natural-logarithm-laws]] [[thm-sine-and-cosine-derivatives]] [[def-complex-exponential]] [[thm-complex-exponential-addition-and-real-extension]] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] [[thm-real-power-continuity-and-derivatives]] [[thm-gaussian-integral]]

## Proof

1.1 Put $R(t)=\widehat\rho(-\xi+it)/\widehat\rho(-\xi)$. By [F2], $$-\log|R(t)|=\int_0^1e^{\xi v}\frac{1-\cos(tv)}v\,dv=:D(t)\ge0.$$ For $|t|\ge1$, the part without the factor $e^{\xi v}-1$ is $\int_0^{|t|}(1-\cos w)dw/w\ge\log|t|-2$: integrate $\int_1^{|t|}\cos w\,dw/w$ by parts to bound its absolute value by two. Thus $|R(t)|\le e^2/|t|$. Also $\xi>1$, since $u\ge2$ and $(e-1)<2$. [F2, F3, given, algebra]

1.2 We justify inversion at this particular $u$ directly. Put $f(v)=e^{\xi v}\rho(v)$ for $v\ge0$ and $f(v)=0$ for $v<0$. By [F2], $\rho$ is nonincreasing and its integral identity gives $v\rho(v)\le\rho(v-1)$ for $v\ge1$. Iteration yields $\rho(v)\le1/n!$ on $[n,n+1]$. Thus $f$ has the explicit integrable majorant $e^{\xi(n+1)}/n!$ on that interval, and it is $C^1$ near $u\ge2$. For finite $T$, finite-interval interchange followed by the absolute tail bound gives $$\int_{-T}^T e^{itu}\widehat\rho(-\xi+it)dt=2\int_{\mathbb R}f(v)\frac{\sin(T(u-v))}{u-v}dv.$$ Fix $0<\delta<1/2$ and subtract $f(u)\mathbf1_{|v-u|\le\delta}$. The resulting quotient by $u-v$ is piecewise continuous, extends continuously at $v=u$, and has an absolutely integrable explicit tail. Its sine integral tends to zero: on a compact interval approximate it uniformly by finitely many step functions, integrate each sine explicitly, then use the scalar tail. The subtracted part tends to $\pi f(u)$ because $\int_0^T\sin z\,dz/z\to\pi/2$. For completeness, this last identity follows without an unqualified inversion theorem: for $a>0$, differentiate $\int_0^\infty e^{-az}\sin z\,dz/z$ in $a$ to get $-1/(1+a^2)$ and its value $\arctan(1/a)$; integration by parts bounds the tail uniformly in $a\ge0$ by $2/T$, so letting $a\downarrow0$ gives $\pi/2$. Dividing by $2\pi e^{u\xi}$ proves the exact inversion formula. [F2, F3, construct, algebra]

2.1 Assume $\xi\ge2$ and set $\ell=1/\xi$. On $1-\ell\le v\le1$, $e^{\xi v}-1\ge c_0e^\xi$ for an absolute $c_0>0$, and $1/v\ge1$. The integral of $\cos(tv)$ on this interval has absolute value at most $\ell|\sin(t\ell/2)/(t\ell/2)|$. For every real $w$, $$1-\left|\frac{\sin w}{w}\right|\ge c_1\min\{w^2,1\}:$$ for $|w|\le1$ use the alternating sine series through degree five; for $1\le|w|\le2$ use monotonicity of $\sin w/w$ on $(0,\pi)$ and $\sin1\le101/120$; for $|w|\ge2$ use $|\sin w|/|w|\le1/2$. Hence the part of $D(t)$ involving $e^{\xi v}-1$ is at least $$c_2\frac{e^\xi}{\xi}\min\left\{\frac{t^2}{\xi^2},1\right\}\ge c_2u\min\left\{\frac{t^2}{\xi^2},1\right\},$$ because $e^\xi=1+u\xi$. Combining with step 1.1 gives $$|R(t)|\le\frac C{1+|t|}\exp\left(-cu\min\left\{\frac{t^2}{\xi^2},1\right\}\right)\qquad(|t|\ge1).$$ For $1<\xi<2$, $u=(e^\xi-1)/\xi<e^2$, so enlarging $C$ makes the same bound follow from step 1.1. [F1, F3, step 1.1, algebra]

3.1 For $|t|\ge1$, differentiating [F2] gives $$R'(t)=-iR(t)\int_0^1e^{(\xi-it)v}\,dv,\qquad |R'(t)|\le |R(t)|\frac{e^\xi+1}{|\xi-it|}\le\frac{C u\xi}{|t|}|R(t)|,$$ using $e^\xi=1+u\xi$ and $u\xi\ge2$. Put $T_0=\max(\pi,\xi)$. By step 2.1, for $|t|\ge T_0$ one has $|R(t)|\le Ce^{-cu}/|t|$ and $|R'(t)|\le Cu\xi e^{-cu}/t^2$. Integrating $e^{itu}R(t)$ by parts on $[T_0,T]$ and letting $T\to\infty$ yields a limit and the tail bound $$\left|\int_{T_0}^\infty e^{itu}R(t)dt\right|\le\frac1u\left(|R(T_0)|+\int_{T_0}^\infty|R'(t)|dt\right)\le Ce^{-cu}.$$ The negative tail has the same bound by conjugation. [F2, F3, step 2.1, algebra]

4.1 Put $a=u^{-2/5}$. On $a\le|t|\le\pi$, [F1] gives a total integral $O(u^{-1/2}e^{-cu^{1/5}})$ by the Gaussian tail estimate. If $\xi>\pi$, then on $\pi\le|t|\le\xi$, step 2.1 bounds the total absolute integral by $C\xi e^{-cu/\xi^2}$. Since $\xi\le2\log u$ by [F1] and $u/(\log u)^3\to\infty$, this is $O(u^{-7/10})$; the last limit follows directly from the exponential power series and the bounded remaining compact interval. If $\xi\le\pi$, that middle interval is empty. Step 3.1 bounds the remaining conditional tails by $O(e^{-cu})$. Hence the entire outer contribution is $O(u^{-7/10})$, with an absolute constant. [F1, F3, step 2.1, step 3.1, algebra]

5.1 Divide the inversion integral by $\widehat\rho(-\xi)$. The central contribution is the Gaussian expression of [F1], and step 4.1 bounds the entire outer contribution by $O(u^{-7/10})$, which is a relative $O(u^{-1/5})$ because $V\le u$. Finally [F2] gives $\widehat\rho(-\xi)=e^{\gamma+I(\xi)}$. Substitution proves the displayed saddle asymptotic, with no assertion about the finite smooth-number Euler product. [F1, F2, step 4.1, step 1.2, algebra] ∎
