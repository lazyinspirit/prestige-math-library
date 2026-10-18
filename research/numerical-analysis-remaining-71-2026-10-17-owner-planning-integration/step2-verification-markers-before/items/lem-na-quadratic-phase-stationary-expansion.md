---
id: lem-na-quadratic-phase-stationary-expansion
kind: lemma
title: Local stationary expansion for a quadratic phase
status: draft
origin: pipeline
dependency_level: 3
deps:
  - lem-na-fresnel-integral
  - lem-na-quadratic-phase-amplitude-bound
  - lem-na-complex-phase-derivative
  - thm-ftc-second-part
  - thm-integration-by-parts
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §2.3(iv) and §7.12(ii)"
      url: "https://dlmf.nist.gov/2.3"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature: The story so far, §4"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
axiom_use: "No choice axiom is used; the cutoff is an explicit given and all integrations by parts are finite."
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

## Proof

1.1 Put $D(u)=A(u)-A(0)\chi(u)-A'(0)u\chi(u)$. Then $D(0)=D'(0)=0$. Near zero, twice applying [F3] gives $D(u)=u^2B(u)$ with $B(u)=\int_0^1(1-t)D''(tu)\,dt$; differentiating this finite parameter integral twice shows $B\in C^2$. Away from zero set $B=D/u^2$. These definitions agree near zero, $B$ is compactly supported, and $\|B\|_{C^2}\le C_{R,\chi}\|A\|_{C^4}$. Thus $A=A(0)\chi+A'(0)u\chi+u^2B$. [given, F3, construct, algebra]

2.1 The integral of $u\chi(u)e^{i\sigma\lambda u^2/2}$ is zero because its integrand is odd. Let $S=1-\chi$. Two integrations by parts, using [F4] and [F5], give $\int_{\mathbb R}S(u)e^{i\sigma\lambda u^2/2}\,du=\frac{1}{(i\sigma\lambda)^2}\int_{\mathbb R}\left(\frac{((S/u)')}{u}\right)'e^{i\sigma\lambda u^2/2}\,du.$ All boundary terms vanish: $S=0$ near $0$, while at infinity $S/u\to0$ and $(S/u)'/u\to0$. The last amplitude is integrable because it vanishes near zero and is $O(|u|^{-4})$ at infinity. Hence its contribution is at most $C_\chi\lambda^{-2}$. [given, F1, F4, F5, step 1.1, algebra]

3.1 Since $\chi=1$ near zero, [F1] and step 2.1 give $A(0)\int\chi(u)e^{i\sigma\lambda u^2/2}\,du=A(0)\sqrt{\frac{2\pi}{\lambda}}e^{i\sigma\pi/4}+O(C_\chi\|A\|_{C^4}\lambda^{-2}).$ For the last term in step 1.1, one integration by parts gives $\int u^2B e^{i\sigma\lambda u^2/2}=-(i\sigma\lambda)^{-1}\int(B+uB')e^{i\sigma\lambda u^2/2}$; the boundary term vanishes by compact support. Apply [F2] to $H=B+uB'\in C_c^1$ and the bound on $\|B\|_{C^2}$ to obtain $O(C_{R,\chi}\|A\|_{C^4}\lambda^{-3/2})$. Since $\lambda^{-2}\le\lambda^{-3/2}$ for $\lambda\ge1$, adding the three contributions proves the stated estimate. [given, F1, F2, step 1.1, step 2.1, algebra] ∎
