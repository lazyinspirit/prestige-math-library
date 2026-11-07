---
id: lem-dickman-saddle-parameter-and-central-gaussian-estimate
kind: lemma
title: The Dickman saddle parameter and its central Gaussian estimate
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
proof_strategy: direct
axiom_use: No choice axiom is used; all estimates use explicit compact integrals and scalar tails.
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- lem-dickman-entire-laplace-transform
- thm-gaussian-integral
- thm-ftc-second-part
- thm-natural-logarithm-laws
- thm-sine-and-cosine-derivatives
- lem-sine-chord-and-lipschitz-bounds
- def-complex-exponential
- thm-complex-exponential-addition-and-real-extension
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- thm-real-power-continuity-and-derivatives
sources:
  references:
  - title: Adolf Hildebrand and Gérald Tenenbaum, Integers without large prime factors
    url: https://numdam.org/item/JTNB_1993__5_2_411_0.pdf
    locator: Sections 2–3, Dickman transform and saddle context. The bounded central estimate below is locally proved; no full saddle contour result is imported.
---

## Statement

For every real $u\ge2$, there is a unique $\xi=\xi(u)>0$ satisfying $e^\xi=1+u\xi$. Put
$$V(u)=\int_0^1v e^{\xi v}\,dv,\qquad a(u)=u^{-2/5}.$$
Then
$$\log u<\xi<2\log u,\qquad \frac u2\le V(u)\le u,\qquad \frac1u\le\xi'(u)\le\frac2u.$$
For the entire Dickman transform $\widehat\rho$ and every real $t$ with $|t|\le\pi$,
$$\left|\frac{\widehat\rho(-\xi+it)}{\widehat\rho(-\xi)}\right|\le e^{-ut^2/\pi^2}.$$
Moreover, with an absolute implied constant,
$$\int_{-a(u)}^{a(u)} e^{itu}\frac{\widehat\rho(-\xi+it)}{\widehat\rho(-\xi)}\,dt=\sqrt{\frac{2\pi}{V(u)}}\left(1+O(u^{-1/5})\right).$$
The integral is an ordinary compact complex integral. This is only the central saddle estimate; no full inversion, contour-tail bound, finite-zeta comparison, or uniform smooth-counting asymptotic is asserted.

## Facts & Assumptions

**Given:** $u\ge2$ and the entire Dickman transform.

[F1] The entire transform satisfies $\widehat\rho(s)=\exp(\gamma+\int_0^1(e^{-sv}-1)\,dv/v)$, with the removable value at $v=0$. [[lem-dickman-entire-laplace-transform]]

[F2] The real Gaussian integral is $\int_{-\infty}^{\infty}e^{-x^2}\,dx=\sqrt\pi$. Compact FTC and real-power/logarithm laws hold. [[thm-gaussian-integral]] [[thm-ftc-second-part]] [[thm-natural-logarithm-laws]] [[thm-real-power-continuity-and-derivatives]]

[F3] Sine and cosine have their usual derivatives, and on $0\le z\le\pi/2$ one has $\sin z\ge2z/\pi$. Complex exponential satisfies its power series, addition, modulus and Euler identities. [[thm-sine-and-cosine-derivatives]] [[lem-sine-chord-and-lipschitz-bounds]] [[def-complex-exponential]] [[thm-complex-exponential-addition-and-real-extension]] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]

## Proof

1.1 For $r\ge0$ put $U(r)=\int_0^1e^{rv}\,dv$, with $U(0)=1$. Compact differentiation gives $U'(r)=\int_0^1v e^{rv}\,dv>0$; also $U(r)=(e^r-1)/r$ for $r>0$ and $U(r)\to\infty$ as $r\to\infty$, since its integral over $[1/2,1]$ is at least $e^{r/2}/2$. Thus for every $u\ge2$ there is a unique $\xi>0$ with $U(\xi)=u$, equivalently $e^\xi=1+u\xi$. Since $U'>0$, the inverse is differentiable and $\xi'(u)=1/V(u)$. [F2, given, construct, algebra]

2.1 Since $e^{\xi v}$ is increasing in $v$, pairing $v$ and $1-v$ on $[0,1/2]$ gives $\int_0^1(v-1/2)e^{\xi v}dv\ge0$. Hence $u/2\le V\le u$, and step 1.1 gives $1/u\le\xi'\le2/u$. For the logarithmic bounds, $\log u>1-1/u$ when $u>1$, by integrating $1/t>1/u$ over $[1,u]$; hence $U(\log u)<u$. Also $U(2\log u)>u$ is equivalent to $u^2-2u\log u-1>0$. Its derivative is $2(u-1-\log u)>0$ for $u>1$, and its value at $u=2$ is positive because $e^{3/4}>1+3/4+(3/4)^2/2>2$, so $\log2<3/4$. Strict monotonicity of $U$ now gives $\log u<\xi<2\log u$. [F2, step 1.1, algebra]

2.2 Divide the two transform values in [F1] using [F3]. The common constant and $-1$ terms cancel, giving $$e^{itu}\frac{\widehat\rho(-\xi+it)}{\widehat\rho(-\xi)}=\exp\!\left(\int_0^1\frac{e^{\xi v}(e^{-itv}-1+itv)}v\,dv\right),$$ because $u=\int_0^1e^{\xi v}dv$. The quotient is well-defined since the exponential is nonzero. Taylor's integral remainder on the real segment gives $|e^{-iw}-1+iw+w^2/2|\le|w|^3/6$. Therefore the exponent equals $-Vt^2/2+R(t)$ with $|R(t)|\le u|t|^3/6$, since $v^2\le1$ and $\int_0^1e^{\xi v}dv=u$. [F1, F3, step 1.1, construct, algebra]

3.1 For $|t|\le\pi$ and $0\le v\le1$, [F3] gives $1-\cos(tv)=2\sin^2(tv/2)\ge2t^2v^2/\pi^2$. Taking the real part of the exponent in step 2.2 therefore yields $$\left|\frac{\widehat\rho(-\xi+it)}{\widehat\rho(-\xi)}\right|\le\exp\left(-\frac{2Vt^2}{\pi^2}\right)\le e^{-ut^2/\pi^2}.$$ This is a finite-interval estimate and includes both endpoints. [F3, step 2.1, step 2.2, algebra]

4.1 Put $a=u^{-2/5}<1$. On $|t|\le a$, step 2.2 gives $|R(t)|\le u^{-1/5}/6\le1$, so $e^{R(t)}=1+O(u^{-1/5})$ uniformly by the exponential power series. Thus the integral in the Statement equals $(1+O(u^{-1/5}))\int_{-a}^ae^{-Vt^2/2}dt$. The uniform complex error is bounded in modulus by its scalar majorant, so this use of the $O$ term is valid before integration. By [F2], the full Gaussian integral is $\sqrt{2\pi/V}$. For its omitted positive tail, $\int_a^\infty e^{-Vt^2/2}dt\le(Va)^{-1}e^{-Va^2/2}$ by integrating $t/a\ge1$. Since $V\ge u/2$, the tail relative to the full Gaussian is $O(u^{-1/10}e^{-u^{1/5}/4})=O(u^{-1/5})$: setting $z=u^{1/5}$ makes $z^{1/2}e^{-z/4}$ bounded by an absolute constant. This proves the stated central integral estimate. [F2, F3, step 2.1, step 2.2, algebra] ∎
