---
id: thm-riemann-zeta-classical-zero-free-region
title: "Riemann zeta classical zero free region"
kind: theorem
status: published
origin: pipeline
deps: [lem-zeta-logarithmic-derivative-zero-bound, lem-zeta-three-four-one-logarithmic-derivative-inequality, thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane, thm-riemann-zeta-continuation-to-the-right-half-plane]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Theorem 6.6, pp.172\u2013173"
      url: https://personal.science.psu.edu/rcv4/personal/Publications/MNTI/10.0_pp_168_198_The_Prime_Number_Theorem.pdf
proof_strategy: direct argument
---

## Statement

There is an absolute $c_0>0$ such that $\zeta$ has no zeros in $\sigma\ge1-c_0/\log(|t|+2)$. The pole at $s=1$ is not a zero.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[lem-zeta-logarithmic-derivative-zero-bound]]: Write $s=\sigma+it$ and let $\rho$ range over nontrivial zeta zeros with multiplicity. With the Hadamard constant $B$, $\frac{\zeta'}{\zeta}(s)=B+\sum_\rho\left(\frac1{s-\rho}+\frac1\rho\right)-\frac1{s-1}+\frac{\log\pi}{2}-\frac{\Gamma'(1+s/2)}{2\Gamma(1+s/2)}.$ This is a meromorphic identity, using convergent genus-one terms. Uniformly for $-1\le\sigma\le2$, $|t|\ge3$ and $\zeta(s)\ne0$, $\operatorname{Re}\frac{\zeta'}\zeta(s)=\sum_\rho\operatorname{Re}\frac1{s-\rho}-\frac12\log|t|+O(1),$ and this real series is absolutely convergent.

[F2] [[lem-zeta-three-four-one-logarithmic-derivative-inequality]]: For $\sigma>1$ and $t\in\mathbb R$, $-3\frac{\zeta'(\sigma)}{\zeta(\sigma)}-4\operatorname{Re}\frac{\zeta'(\sigma+it)}{\zeta(\sigma+it)}-\operatorname{Re}\frac{\zeta'(\sigma+2it)}{\zeta(\sigma+2it)}\ge0.$

[F3] [[thm-riemann-zeta-is-zero-free-on-the-closed-right-half-plane]]: The meromorphic continuation of $\zeta$ has no zeros on the closed half-plane $\operatorname{Re}s\ge1$. Its only singularity there is the simple pole at $s=1$.

[F4] [[thm-riemann-zeta-continuation-to-the-right-half-plane]]: For every complex number $s$ with $\operatorname{Re}s>0$ and $s\ne1$, $\zeta(s)=\frac{s}{s-1}-s\int_1^\infty \{x\}x^{-s-1}\,dx,$ where $\{x\}=x-\lfloor x\rfloor$ is the fractional part. The integral defines a holomorphic function on $\operatorname{Re}s>0$, so the right-hand side is meromorphic there with a single simple pole at $s=1$ of residue $1$.

## Proof

1.1 For $1<\sigma\le2$, the simple pole gives $-\zeta'/\zeta(\sigma)=1/(\sigma-1)+O(1)$. If $\rho_0=\beta+i\gamma$ is a zero with $|\gamma|\ge3$, positivity of the real zero summands gives $-\operatorname{Re}(\zeta'/\zeta)(\sigma+i\gamma)\le1\!\cdot C_1\log(|\gamma|+2)-1/(\sigma-\beta)$ and $-\operatorname{Re}(\zeta'/\zeta)(\sigma+2i\gamma)\le C_1\log(|\gamma|+2)$. [F1, F4]

2.1 Insert these bounds in the three-four-one inequality. For an absolute $C\ge1$, put $L=\log(|\gamma|+2)$; then $4/(\sigma-\beta)\le3/(\sigma-1)+CL$. Taking $\sigma-1=1/(2CL)$ yields $1-\beta\ge1/(14CL)$. Choosing a strictly smaller constant excludes even the closed boundary of the claimed high-height region. [F2, step 1.1]

3.1 The function $h(s)=(s-1)\zeta(s)$ is holomorphic near the compact segment $\{1+it:|t|\le3\}$, nonzero there, and $h(1)=1$. Finitely many nonvanishing neighborhoods cover this segment and contain a uniform thin rectangle about it. Shrink $c_0$ so the proposed bounded-height region to the left of one lies in that rectangle. To the right use the already proved zero-free half-plane. This proves the claim at every height, including zero. [F3, F4, step 2.1] ∎
