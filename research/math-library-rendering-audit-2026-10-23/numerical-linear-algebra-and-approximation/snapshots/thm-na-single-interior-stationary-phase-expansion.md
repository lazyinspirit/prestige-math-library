---
id: thm-na-single-interior-stationary-phase-expansion
kind: theorem
title: Stationary-phase expansion at one simple interior critical point
status: published
origin: pipeline
dependency_level: 4
deps:
  - def-na-finite-interval-oscillatory-integral
  - lem-na-one-dimensional-morse-coordinate
  - lem-na-quadratic-phase-stationary-expansion
  - thm-na-nonstationary-oscillatory-integration-by-parts
  - thm-change-of-variables-for-compact-jordan-sets
  - lem-euclidean-bump-for-a-compact-set-inside-an-open-set
  - thm-multidimensional-integral-properties
  - lem-complex-conjugation-and-modulus-laws
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §2.3(iv)"
      url: "https://dlmf.nist.gov/2.3"
    - title: "NIST Digital Library of Mathematical Functions, §7.12(ii)"
      url: "https://dlmf.nist.gov/7.12"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature:
        The story so far, §4"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
axiom_use: "No choice axiom is used; the cutoff is constructed from one explicit
  compact-set bump."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $a<b$, $f\in C^4[a,b]$ be complex-valued, and $g\in C^7[a,b]$ be real-valued. Suppose $g'(x_0)=0$, $g''(x_0)\ne0$ for one $x_0\in(a,b)$, and $g'$ has no other zero on $[a,b]$. Choose a coordinate $\Phi:J\to(-R,R)$ from [[lem-na-one-dimensional-morse-coordinate]], after restricting its domain so $\overline J\subset(a,b)$, and an even $\eta\in C_c^\infty((-R,R))$ equal to $1$ near $0$. Such a cutoff exists by symmetrizing a bump from [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]. Extend $\chi(x)=\eta(\Phi(x))$ by $0$ outside $J$, put $h=(1-\chi)f$, $A(u)=\eta(u)f(\Phi^{-1}(u))(\Phi^{-1})'(u)$, and $\sigma=\operatorname{sgn}(\omega g''(x_0))$. For $|\omega|\ge1$,
$$I_\omega(f,g;[a,b])=\frac{1}{i\omega}\left[\frac{f(x)e^{i\omega g(x)}}{g'(x)}\right]_a^b+f(x_0)e^{i\omega g(x_0)}\sqrt{\frac{2\pi}{|\omega g''(x_0)|}}e^{i\sigma\pi/4}+\mathcal R_\omega,$$
where
$$|\mathcal R_\omega|\le\left(C_{R,\eta}\|A\|_{C^4}+|T_gh(a)/g'(a)|+|T_gh(b)/g'(b)|+(b-a)\|T_g^2h\|_\infty\right)|\omega|^{-3/2}.$$
On the neighborhood where $h=0$, define $T_gh$ and $T_g^2h$ to be $0$; elsewhere use the recurrence from [[def-na-finite-interval-oscillatory-integral]]. The nonstationary norm is taken over the two closed intervals away from that neighborhood.

## Facts & Assumptions

**Given:** The stated interval, amplitude, phase, stationary point, chart, cutoff, and $|\omega|\ge1$.

[F1] [[lem-na-one-dimensional-morse-coordinate]]: $g(x)=g(x_0)+\operatorname{sgn}(g''(x_0))\Phi(x)^2/2$ and $\Phi'(x_0)=\sqrt{|g''(x_0)|}$.

[F2] [[lem-na-quadratic-phase-stationary-expansion]]: for an even cutoff $\eta$ and compactly supported $C^4$ amplitude $A$, the quadratic-phase integral has leading term $A(0)\sqrt{2\pi/|\omega|}e^{i\operatorname{sgn}(\omega g''(x_0))\pi/4}$ and remainder at most $C_{R,\eta}\|A\|_{C^4}|\omega|^{-3/2}$.

[F3] [[thm-na-nonstationary-oscillatory-integration-by-parts]]: the two-step expansion for $h$ applies on intervals where $|g'|\ge c>0$.

[F4] [[thm-change-of-variables-for-compact-jordan-sets]]: an injective $C^1$ coordinate change transforms a real compact Jordan integral by its absolute derivative; apply separately to the real and imaginary parts of a complex amplitude.

[F5] [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]]: a compact interval inside an open interval admits a smooth cutoff equal to $1$ on the compact interval and supported in the open interval.

[F6] Real Riemann integrals on an interval are linear and additive across an interior cut by [[thm-multidimensional-integral-properties]] with $m=1$; apply componentwise using [[def-na-finite-interval-oscillatory-integral]].

[F7] The complex modulus is subadditive, $|z+w|\le|z|+|w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

## Proof

1.1 Use [F5] for a compact neighborhood of $0$ inside $(-R,R)$ and symmetrize the resulting bump to obtain the even $\eta$ in the Statement. By [F1], $\chi$ is $1$ near $x_0$, vanishes near $a,b$, and $A$ is compactly supported and $C^4$; moreover $A(0)=f(x_0)/\sqrt{|g''(x_0)|}$. Since $g'$ has no other zero, its modulus has a positive minimum on the two closed intervals outside a smaller neighborhood where $\chi=1$. [given, F1, F5, construct]

2.1 Choose $r<R$ with $\operatorname{supp}\eta\subset(-r,r)$ and put $K=\Phi^{-1}([-r,r])$, a compact interval inside $J$. Since $\chi f$ vanishes off $K$, interval additivity [F6] identifies its integral on $[a,b]$ with its integral on $K$. Apply [F4] on $K$ separately to the real and imaginary parts. The transformed amplitude is $A(u)$, supported in $(-r,r)$, so [F6] also identifies its integral on $[-r,r]$ with that on $[-R,R]$. The phase exponential factors as $e^{i\omega g(x_0)}e^{i\operatorname{sgn}(\omega g''(x_0))|\omega|u^2/2}$. Then [F2], with $\lambda=|\omega|$ and sign $\sigma$, gives the stationary term in the Statement and a local remainder at most $C_{R,\eta}\|A\|_{C^4}|\omega|^{-3/2}$. [given, F1, F2, F4, F6, step 1.1, algebra]

2.2 The complementary amplitude $h$ vanishes on a neighborhood of $x_0$. Apply [F3] with $r=2$ on each side of that neighborhood; interval additivity [F6] combines the two formulas, and the internal endpoint terms vanish because $h$ and its derivatives are zero there. Since $\chi$ vanishes near $a,b$, the first endpoint term is exactly $\frac{1}{i\omega}[f e^{i\omega g}/g']_a^b$. The complex triangle inequality [F7] combines the remaining side estimates into a total modulus at most $\left(|T_gh(a)/g'(a)|+|T_gh(b)/g'(b)|+(b-a)\|T_g^2h\|_\infty\right)|\omega|^{-2}.$ [given, F3, F6, F7, step 1.1]

3.1 By componentwise linearity [F6], the localized and complementary integrals sum to $I_\omega(f,g;[a,b])$. The complex triangle inequality [F7] and $|\omega|^{-2}\le|\omega|^{-3/2}$ for $|\omega|\ge1$ combine the two remainder bounds and give the stated $\mathcal R_\omega$ bound and endpoint term. [F6, F7, step 2.1, step 2.2, algebra] ∎
## Remarks

This theorem treats one interior simple stationary point and keeps the endpoint contribution explicit. Stationary endpoints and coalescing critical points are excluded; an endpoint or Airy-type uniform treatment requires a separate coordinate and remainder argument. Levin collocation in this pair remains on the nonstationary branch.
