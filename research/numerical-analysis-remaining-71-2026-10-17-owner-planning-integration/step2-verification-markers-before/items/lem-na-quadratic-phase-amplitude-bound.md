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
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §2.3(iv)"
      url: "https://dlmf.nist.gov/2.3"
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature: The story so far, §4"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
axiom_use: "No choice axiom is used; the proof is a finite split and integration by parts."
---

## Statement

Let $R>0$, $\lambda>0$, $\sigma\in\{-1,1\}$, and $H\in C_c^1((-R,R);\mathbb C)$. Then
$$\left|\int_{-R}^RH(u)e^{i\sigma\lambda u^2/2}\,du\right|\le\frac{6\|H\|_\infty+R\|H'\|_\infty}{\sqrt\lambda}.$$

## Facts & Assumptions

**Given:** The stated compactly supported complex amplitude, $R,\lambda,\sigma$, and the componentwise complex integral convention of [[def-na-finite-interval-oscillatory-integral]].

[F1] [[lem-na-complex-phase-derivative]]: $(e^{i\sigma\lambda u^2/2})'=i\sigma\lambda u e^{i\sigma\lambda u^2/2}$.

[F2] [[thm-integration-by-parts]]: integration by parts on a compact interval holds for real $C^1$ functions and hence componentwise for complex functions.

## Proof

1.1 Rescale $u=Rt$, put $\Lambda=\lambda R^2$, and define $\widetilde H(t)=H(Rt)$. If $\Lambda<1$, the integral is at most $2R\|H\|_\infty\le2\|H\|_\infty/\sqrt\lambda$, so the claim holds. Assume $\Lambda\ge1$, put $\delta=\Lambda^{-1/2}$, and split $[-1,1]$ into $[-\delta,\delta]$, $[\delta,1]$, and $[-1,-\delta]$. The central integral in the rescaled variable is at most $2\delta\|H\|_\infty$. [given, construct, algebra]

2.1 On $[\delta,1]$, [F1] and [F2] integrate by parts using $(i\sigma\Lambda t)^{-1}$ and $\widetilde H$; the boundary at $1$ vanishes because $\widetilde H$ is compactly supported in $(-1,1)$. The remaining boundary is at most $\|H\|_\infty/(\Lambda\delta)$, and the integral is bounded by $\frac1\Lambda\left(R\|H'\|_\infty\log(1/\delta)+\|H\|_\infty/\delta\right).$ The negative interval has the same bound. Since $\delta=\Lambda^{-1/2}$ and $\log\Lambda\le\sqrt\Lambda$ for $\Lambda\ge1$, adding the three pieces gives $(6\|H\|_\infty+R\|H'\|_\infty)/\sqrt\Lambda$ in the rescaled integral. Multiplication by $R$ and $\Lambda=\lambda R^2$ give the claimed bound. [given, F1, F2, step 1.1, algebra] ∎
