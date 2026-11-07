---
id: lem-hurwitz-zeta-summation-formula
kind: lemma
title: "Euler summation formula for the Hurwitz zeta function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-hurwitz-zeta-function
  - def-natural-logarithm
  - def-complex-exponential
  - lem-integer-part
  - thm-integration-by-parts
  - thm-logarithm-derivative-and-integral
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-holomorphic-parameter-riemann-integral
  - thm-weierstrass-convergence-holomorphic-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory III, Chapter 24, Lemma 24.14"
      url: "https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf"
      locator: "Printed p. 66, Lemma 24.14; this carrier gives the equivalent integer-cutoff Euler summation identity and its local proof."
---

## Statement

For $0<\alpha\le1$, an integer $N\ge1$, and $s\in\mathbb C$ with $\operatorname{Re}s>0$, define the periodic sawtooth
$$B_1(u):=\{u\}-\frac12,\qquad \{u\}:=u-\lfloor u\rfloor.$$
Then, with the quotient at $s=1$ interpreted by its removable value,
$$\zeta(s,\alpha)-\frac1{s-1}-\alpha^{-s}=\sum_{n=1}^{N}(n+\alpha)^{-s}+\frac{(N+\alpha)^{1-s}-1}{s-1}-\frac12(N+\alpha)^{-s}-s\int_N^\infty B_1(u)(u+\alpha)^{-s-1}\,du.$$
Here $(u+\alpha)^{-s}:=\exp(-s\log(u+\alpha))$. This identity continues the defining series meromorphically to $\operatorname{Re}s>0$ with a simple pole of residue $1$ at $s=1$.

## Statement references

[Montgomery–Vaughan, Lemma 24.14](https://personal.science.psu.edu/rcv4/571s25/Vol3.pdf)

## Facts & Assumptions

**Given:** $0<\alpha\le1$, an integer $N\ge1$, and $s\in\mathbb C$ with $\operatorname{Re}s>0$.

[F1] For $\operatorname{Re}s>1$, $\zeta(s,\alpha)=\sum_{n=0}^\infty(n+\alpha)^{-s}$ with $(n+\alpha)^{-s}=\exp(-s\log(n+\alpha))$ ([[def-hurwitz-zeta-function]]).

[F2] For every real $u$, $\lfloor u\rfloor$ is the unique integer with $\lfloor u\rfloor\le u<\lfloor u\rfloor+1$ ([[lem-integer-part]]).

[F3] Integration by parts on a finite interval has its ordinary endpoint formula ([[thm-integration-by-parts]]).

[F4] The complex exponential is entire and differentiates by the chain rule; the logarithm is the real natural logarithm on positive numbers ([[def-complex-exponential]], [[def-natural-logarithm]], [[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-logarithm-derivative-and-integral]]).

[F5] Locally uniform convergence of holomorphic integrals/series preserves holomorphy ([[thm-holomorphic-parameter-riemann-integral]], [[thm-weierstrass-convergence-holomorphic-functions]]).

## Proof

**Proof technique:** finite Euler summation followed by a locally uniform continuation.

1.1 On each integer interval $[m,m+1]$, write $B_1(u)=u-m-\tfrac12$ except at the endpoint, which does not affect the integral. Integration by parts [F3] gives $$\int_m^{m+1}B_1(u)F'(u)\,du=\frac{F(m)+F(m+1)}2-\int_m^{m+1}F(u)\,du.$$ Summing from $m=0$ to $M-1$ proves $$\sum_{m=0}^{M}F(m)=\int_0^M F(u)\,du+\frac{F(0)+F(M)}2+\int_0^M B_1(u)F'(u)\,du.$$ [F2, F3, algebra]

2.1 For $\operatorname{Re}s>1$, apply step 1.1 to $F(u)=(N+\alpha+u)^{-s}$ and let $M\to\infty$. The endpoint term tends to zero, $\int_0^\infty F(u)\,du=(N+\alpha)^{1-s}/(s-1)$, and $F'(u)=-s(N+\alpha+u)^{-s-1}$ by [F4]. Subtracting the $m=0$ term yields $$\sum_{n>N}(n+\alpha)^{-s}=\frac{(N+\alpha)^{1-s}}{s-1}-\frac12(N+\alpha)^{-s}-s\int_N^\infty B_1(v)(v+\alpha)^{-s-1}\,dv,$$ where periodicity gives $B_1(u)=B_1(N+u)$. Adding the terms $0\le n\le N$ and rearranging gives the displayed identity for $\operatorname{Re}s>1$. [given, F1, F2, F3, F4, step 1.1, algebra]

3.1 On each compact subset of $\operatorname{Re}s>0$, the tail integral and its $s$-derivatives are dominated by constants times $(1+u)^{-1-\epsilon}(1+\log u)^m$ for some $\epsilon>0$, so [F5] makes the right side holomorphic after the $s=1$ quotient is assigned its limit $-\log(N+\alpha)$. It agrees with the defining series for $\operatorname{Re}s>1$, so it defines its meromorphic continuation to $\operatorname{Re}s>0$; the sole pole is the explicitly displayed simple pole $1/(s-1)$ with residue $1$. [given, F1, F4, F5, step 2.1] ∎

