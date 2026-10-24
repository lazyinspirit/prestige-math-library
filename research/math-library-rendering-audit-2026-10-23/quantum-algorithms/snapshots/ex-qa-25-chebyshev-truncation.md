---
id: ex-qa-25-chebyshev-truncation
kind: example
title: Low-degree Chebyshev simulation polynomial
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 21
deps:
  - def-qa-25-hamiltonian-simulation-polynomial
  - lem-qa-25-jacobi-anger-truncation
proof_strategy: direct
axiom_use: "None; this is a finite coefficient and parity calculation."
sources:
  references:
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond, Lemma 57"
      url: "https://arxiv.org/pdf/1806.01838"
provenance:
  statement: ai-altered
  proof: ai-generated
---

## Example

For real $\tau$, truncate the Jacobi–Anger expansion at degree $d=2$. The resulting complex polynomial is
$$P_2(x)=J_0(\tau)-2J_2(\tau)T_2(x)-2iJ_1(\tau)T_1(x) =J_0(\tau)-2J_2(\tau)(2x^2-1)-2iJ_1(\tau)x.$$
Its real part is even and its imaginary part is odd. Its uniform remainder is bounded by $2\sum_{k>2}|J_k(\tau)|$, and by the displayed factorial bound of [[lem-qa-25-jacobi-anger-truncation]] when $|\tau|/8<1$.

## Facts & Assumptions

**Given:** The Bessel series, Chebyshev recurrence, and real parameter $\tau$ of [[def-qa-25-hamiltonian-simulation-polynomial]].

[F1] [[def-qa-25-hamiltonian-simulation-polynomial]]: $J_k(\tau)=\sum_{j\ge0}(-1)^j(\tau/2)^{2j+k}/(j!(j+k)!)$, $T_0(x)=1$, $T_1(x)=x$, and $T_{k+1}=2xT_k-T_{k-1}$ for $k\ge1$.

[F2] [[lem-qa-25-jacobi-anger-truncation]]: truncating at degree $d$ has error at most $2\sum_{k>d}|J_k(\tau)|$, with the factorial bound when its ratio condition holds.

## Proof

**Given:** As in Facts & Assumptions.

1.1 The recurrence gives $T_2(x)=2xT_1(x)-T_0(x)=2x^2-1$. The $k=0$ term of the Chebyshev expansion is $J_0$; the $k=1$ coefficient is $2(-i)J_1=-2iJ_1$; and the $k=2$ coefficient is $2(-i)^2J_2=-2J_2$. Therefore the degree-two truncation is exactly the displayed $P_2$. [F1, given, algebra]

2.1 The series in [F1] is real for real $\tau$, so $J_0,J_1,J_2$ are real. Since $T_2$ is even and $T_1$ is odd, $\operatorname{Re}P_2=J_0-2J_2T_2$ is even and $\operatorname{Im}P_2=-2J_1T_1$ is odd. Applying [F2] with $d=2$ gives the uniform tail $2\sum_{k>2}|J_k(\tau)|$; its factorial denominator condition is $|\tau|/[2(2+2)]=|\tau|/8<1$. [F1, F2, step 1.1, algebra]

3.1 At $\tau=0$, the series gives $J_0(0)=1$ and $J_1(0)=J_2(0)=0$, so $P_2(x)=1=e^0$. At $x=\pm1$, $T_1(x)=x$ and $T_2(x)=1$, and the same tail bound from [F2] applies without an endpoint exception. [F1, F2, step 1.1, algebra] ∎
