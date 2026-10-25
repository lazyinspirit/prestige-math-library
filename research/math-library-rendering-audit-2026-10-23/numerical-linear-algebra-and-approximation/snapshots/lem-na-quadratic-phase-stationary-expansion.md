---
id: lem-na-quadratic-phase-stationary-expansion
kind: lemma
title: Local stationary expansion for a quadratic phase
status: published
origin: pipeline
dependency_level: 3
deps:
  - lem-na-fresnel-integral
  - lem-na-quadratic-phase-amplitude-bound
  - lem-na-complex-phase-derivative
  - thm-ftc-second-part
  - thm-integration-by-parts
  - def-improper-integral-at-infinity
  - def-mixed-improper-integral
  - def-absolute-and-conditional-improper-convergence
  - thm-comparison-test-for-improper-integrals
  - thm-improper-p-test-rational
  - thm-multidimensional-integral-properties
  - lem-mean-value-theorem-on-closed-interval
  - thm-heine-cantor-r
  - thm-change-of-variables-for-compact-jordan-sets
  - def-na-finite-interval-oscillatory-integral
  - lem-complex-conjugation-and-modulus-laws
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §2.3(iv) and §7.12(ii)"
      url: "https://dlmf.nist.gov/2.3"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature:
        The story so far, §4"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
axiom_use: "No choice axiom is used; the cutoff is an explicit given and all
  integrations by parts are finite."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $R>0$, $\lambda\ge1$, $\sigma\in\{-1,1\}$, and $A\in C_c^4((-R,R);\mathbb C)$. Fix an even $\chi\in C_c^\infty((-R,R))$ equal to $1$ on a neighborhood of $0$. With $\|A\|_{C^4}:=\max_{0\le j\le4}\|A^{(j)}\|_\infty$, there is a finite constant $C_{R,\chi}$, depending only on $R$ and $\chi$, such that
$$\left|\int_{-R}^R A(u)e^{i\sigma\lambda u^2/2}\,du-A(0)\sqrt{\frac{2\pi}{\lambda}}e^{i\sigma\pi/4}\right|\le C_{R,\chi}\|A\|_{C^4}\lambda^{-3/2}.$$

## Facts & Assumptions

**Given:** $A,R,\lambda,\sigma,\chi$ of the Statement.

[F1] [[lem-na-fresnel-integral]]: $\int_{\mathbb R}e^{i\sigma\lambda u^2/2}\,du=\sqrt{2\pi/\lambda}\,e^{i\sigma\pi/4}$ as an ordinary two-sided improper integral.

[F2] [[lem-na-quadratic-phase-amplitude-bound]]: for $H\in C_c^1((-R,R))$, $|\int H(u)e^{i\sigma\lambda u^2/2}\,du|\le(6\|H\|_\infty+R\|H'\|_\infty)\lambda^{-1/2}$.

[F3] [[thm-ftc-second-part]]: continuous derivatives integrate to endpoint increments; applying it twice gives the integral Taylor remainder.

[F4] [[thm-integration-by-parts]]: the real compact-interval identity extends componentwise to complex $C^1$ functions.

[F5] [[lem-na-complex-phase-derivative]]: $(e^{i\sigma\lambda u^2/2})'=i\sigma\lambda u e^{i\sigma\lambda u^2/2}$.

[F6] [[def-improper-integral-at-infinity]], [[def-mixed-improper-integral]], and [[def-absolute-and-conditional-improper-convergence]]: one-sided limits define improper integrals, whole-line integrals sum separately convergent tails, and absolute convergence is tested on each tail.

[F7] [[thm-improper-p-test-rational]] and [[thm-comparison-test-for-improper-integrals]]: a continuous function bounded in modulus by $C|u|^{-4}$ on each tail has an absolutely convergent improper integral there.

[F8] For a continuous complex $z$ on a compact interval, the componentwise definition of [[def-na-finite-interval-oscillatory-integral]], the conjugation and modulus laws [[lem-complex-conjugation-and-modulus-laws]], and real linearity and monotonicity from [[thm-multidimensional-integral-properties]] give $\left|\int z\right|\le\int|z|$: if $Z=\int z\ne0$, set $\zeta=\overline Z/|Z|$, so $|\zeta|=1$ and $|Z|=\int\operatorname{Re}(\zeta z)\le\int|z|$. If $Z=0$ the bound is immediate. The conjugation and modulus laws also give $|z+w|\le|z|+|w|$ for complex scalars.

[F9] The mean-value theorem [[lem-mean-value-theorem-on-closed-interval]] and Heine--Cantor [[thm-heine-cantor-r]]: on compact $[-R,R]$, the continuous derivatives $D^{(3)}$ and $D^{(4)}$ are uniformly continuous; componentwise mean-value estimates justify differentiating $B(u)=\int_0^1(1-t)D''(tu)\,dt$ twice, giving $B'(u)=\int_0^1(1-t)tD'''(tu)\,dt$ and $B''(u)=\int_0^1(1-t)t^2D''''(tu)\,dt$.

[F10] Reflection $u\mapsto-u$ preserves the compact interval integral by [[thm-change-of-variables-for-compact-jordan-sets]]; real interval linearity from [[thm-multidimensional-integral-properties]], applied componentwise, then makes the integral of an odd complex function on $[-R,R]$ zero.

## Proof

1.1 Put $D(u)=A(u)-A(0)\chi(u)-A'(0)u\chi(u)$. Then $D(0)=D'(0)=0$. Near zero, twice applying [F3] gives $D(u)=u^2B(u)$ with $B(u)=\int_0^1(1-t)D''(tu)\,dt$; differentiating this finite parameter integral twice is justified by [F9] and gives $B\in C^2$. Away from zero set $B=D/u^2$. These definitions agree near zero, $B$ is compactly supported, and $\|B\|_{C^2}\le C_{R,\chi}\|A\|_{C^4}$. Thus $A=A(0)\chi+A'(0)u\chi+u^2B$. [given, F3, F9, construct, algebra]

2.1 By [F10], the integral of $u\chi(u)e^{i\sigma\lambda u^2/2}$ is zero: the integrand is odd and vanishes outside $[-R,R]$. Let $S=1-\chi$. Since $S=0$ near $0$, apply [F4] and [F5] twice on finite truncations of each half-line. All boundary terms vanish at the inner endpoints because $S=0$ there, and at infinity because $S/u\to0$ and $((S/u)'/u)\to0$. The final amplitude $K(u)=\left(\frac{(S/u)'}{u}\right)'$ is continuous, vanishes near $0$, and is $O(|u|^{-4})$ on both tails; [F7] makes its phase-weighted improper integral absolutely convergent. Taking one-sided limits in the finite integration-by-parts identities and using [F6] gives $\int_{\mathbb R}S(u)e^{i\sigma\lambda u^2/2}\,du=\frac{1}{(i\sigma\lambda)^2}\int_{\mathbb R}K(u)e^{i\sigma\lambda u^2/2}\,du$. Apply [F8] on finite truncations and pass to the limits from [F7] to bound the latter modulus by $\lambda^{-2}\int_{\mathbb R}|K(u)|du=C_\chi\lambda^{-2}$. [given, F1, F4, F5, F6, F7, F8, F10, step 1.1, algebra]

3.1 Since $\chi=1$ near zero, [F1] and step 2.1 give $A(0)\int\chi(u)e^{i\sigma\lambda u^2/2}\,du=A(0)\sqrt{\frac{2\pi}{\lambda}}e^{i\sigma\pi/4}+O(C_\chi\|A\|_{C^4}\lambda^{-2}).$ For the last term in step 1.1, one integration by parts gives $\int u^2B e^{i\sigma\lambda u^2/2}=-(i\sigma\lambda)^{-1}\int(B+uB')e^{i\sigma\lambda u^2/2}$; the boundary term vanishes by compact support. Apply [F2] to $H=B+uB'\in C_c^1$ and the bound on $\|B\|_{C^2}$ to obtain $O(C_{R,\chi}\|A\|_{C^4}\lambda^{-3/2})$. Since $\lambda^{-2}\le\lambda^{-3/2}$ for $\lambda\ge1$, adding the three contributions and applying the complex scalar triangle inequality in [F8] proves the stated estimate. [given, F1, F2, F8, step 1.1, step 2.1, algebra] ∎
