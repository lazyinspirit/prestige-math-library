---
id: lem-na-quadratic-phase-amplitude-bound
kind: lemma
title: One-dimensional quadratic oscillatory amplitude bound
status: draft
origin: pipeline
dependency_level: 2
deps:
  - def-na-finite-interval-oscillatory-integral
  - lem-na-complex-phase-derivative
  - thm-integration-by-parts
  - thm-change-of-variables-for-compact-jordan-sets
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
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature:
        The story so far, §4"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
axiom_use: "No choice axiom is used; the proof is a finite split and integration
  by parts."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Let $R>0$, $\lambda>0$, $\sigma\in\{-1,1\}$, and $H\in C_c^1((-R,R);\mathbb C)$. Then
$$\left|\int_{-R}^RH(u)e^{i\sigma\lambda u^2/2}\,du\right|\le\frac{6\|H\|_\infty+R\|H'\|_\infty}{\sqrt\lambda}.$$

## Facts & Assumptions

**Given:** The stated compactly supported complex amplitude, $R,\lambda,\sigma$, and the componentwise complex integral convention of [[def-na-finite-interval-oscillatory-integral]].

[F1] [[lem-na-complex-phase-derivative]]: $(e^{i\sigma\lambda u^2/2})'=i\sigma\lambda u e^{i\sigma\lambda u^2/2}$.

[F2] [[thm-integration-by-parts]]: integration by parts on a compact interval holds for real $C^1$ functions and hence componentwise for complex functions.

[F3] [[thm-change-of-variables-for-compact-jordan-sets]]: an increasing affine map $t\mapsto Rt$ on a compact interval changes a real integral by its positive derivative $R$; apply separately to the real and imaginary parts of a complex integrand.

[F4] For a continuous complex $z$ on a compact interval, the componentwise definition of [[def-na-finite-interval-oscillatory-integral]], the conjugation and modulus laws [[lem-complex-conjugation-and-modulus-laws]], and real linearity and monotonicity from [[thm-multidimensional-integral-properties]] give $\left|\int z\right|\le\int|z|$: if $Z=\int z\ne0$, set $\zeta=\overline Z/|Z|$, so $|\zeta|=1$ and $|Z|=\int\operatorname{Re}(\zeta z)\le\int|z|$. If $Z=0$ the bound is immediate. The conjugation and modulus laws also give $|z+w|\le|z|+|w|$ for complex scalars.

[F5] The integral over an interval is additive across an interior cut by the coordinate-slice clause of [[thm-multidimensional-integral-properties]]; apply this to the real and imaginary parts of complex integrands.

## Proof

1.1 Rescale $u=Rt$ by [F3], put $\Lambda=\lambda R^2$, and define $\widetilde H(t)=H(Rt)$. If $\Lambda\le4$, [F4] bounds the integral by $2R\|H\|_\infty\le4\|H\|_\infty/\sqrt\lambda$, so the claim holds. Assume $\Lambda>4$, put $\delta=2\Lambda^{-1/2}<1$, and split $[-1,1]$ into $[-\delta,\delta]$, $[\delta,1]$, and $[-1,-\delta]$. By [F5], the integral is the sum over these subintervals; the central integral in the rescaled variable is at most $2\delta\|H\|_\infty=4\|H\|_\infty/\sqrt\Lambda$ by [F4]. [given, F3, F4, F5, construct, algebra]

2.1 On $[\delta,1]$, [F1] and [F2] integrate by parts using $(i\sigma\Lambda t)^{-1}$ and $\widetilde H$; the boundary at $1$ vanishes because $\widetilde H$ is compactly supported in $(-1,1)$. The remaining boundary is at most $\|H\|_\infty/(\Lambda\delta)$. The integral term is at most $\frac1\Lambda\left(R\|H'\|_\infty\int_\delta^1t^{-1}dt+\|H\|_\infty\int_\delta^1t^{-2}dt\right)\le\frac{R\|H'\|_\infty+\|H\|_\infty}{\Lambda\delta}$, since both integrals are at most $1/\delta$. [F4] justifies the complex integral norm bounds; the negative interval has the same estimates. With $\delta=2\Lambda^{-1/2}$, each boundary is at most $\|H\|_\infty/(2\sqrt\Lambda)$ and each integral is at most $(R\|H'\|_\infty+\|H\|_\infty)/(2\sqrt\Lambda)$. By [F5], adding the central piece and two tails gives $(6\|H\|_\infty+R\|H'\|_\infty)/\sqrt\Lambda$ in the rescaled integral. Multiplication by $R$ and $\Lambda=\lambda R^2$ give the claimed bound. [given, F1, F2, F4, F5, step 1.1, algebra] ∎
