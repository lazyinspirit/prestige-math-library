---
id: thm-na-fourier-oscillatory-moment-recurrence
kind: theorem
title: Exact polynomial moments for the linear Fourier phase
status: published
origin: pipeline
dependency_level: 2
deps:
  - alg-na-fourier-polynomial-moments
  - def-na-finite-interval-oscillatory-integral
  - lem-na-complex-phase-derivative
  - thm-integration-by-parts
  - lem-derivative-of-a-power
proof_strategy: direct
axiom_use: "No choice axiom is used; the argument uses explicit finite formulas
  and the cited calculus results."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature:
        The story so far, §3.2"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
    - title: "D. Levin, Procedures for computing one- and two-dimensional integrals of
        functions with rapid irregular oscillations, §1"
      url: "https://people.math.ethz.ch/~hiptmair/Seminars/OSCINT/LEV82.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §2.3(i)"
      url: "https://dlmf.nist.gov/2.3"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

For real endpoints $a<b$, $\omega\in\mathbb R\setminus\{0\}$, and an integer $m\ge0$, the output of [[alg-na-fourier-polynomial-moments]] satisfies $\mu_k=\int_a^b x^k e^{i\omega x}\,dx$ for every $0\le k\le m$, with
$$\mu_0=\frac{e^{i\omega b}-e^{i\omega a}}{i\omega},\qquad \mu_k=\frac{b^ke^{i\omega b}-a^ke^{i\omega a}}{i\omega}-\frac{k}{i\omega}\mu_{k-1}\quad(k\ge1).$$
Thus all polynomial moments for the Fourier phase $g(x)=x$ are obtained by a finite exact recurrence.

## Facts & Assumptions

**Given:** Reals $a<b$, $\omega\ne0$, and the componentwise complex integral convention of [[def-na-finite-interval-oscillatory-integral]].

[F1] [[alg-na-fourier-polynomial-moments]]: $\mu_0=(e^{i\omega b}-e^{i\omega a})/(i\omega)$ and $\mu_k=(b^ke^{i\omega b}-a^ke^{i\omega a})/(i\omega)-k\mu_{k-1}/(i\omega)$.

[F2] [[lem-na-complex-phase-derivative]]: $(e^{i\omega x})'=i\omega e^{i\omega x}$.

[F3] [[thm-integration-by-parts]]: $\int u v'=[uv]-\int u'v$ for real $C^1$ functions; the componentwise complex identity follows by applying it to real and imaginary parts.

[F4] [[lem-derivative-of-a-power]]: for $k\ge1$, $(x^k)'=kx^{k-1}$.

## Proof

1.1 The algorithm sets $\mu_0=(e^{i\omega b}-e^{i\omega a})/(i\omega)$. Since $(e^{i\omega x}/(i\omega))'=e^{i\omega x}$ by [F2], [F3] with $u=1$ identifies this value with $\int_a^b e^{i\omega x}\,dx$. [given, F1, F2, F3, algebra]

2.1 For $k\ge1$, apply [F3] to $u=x^k$ and $v'=e^{i\omega x}$. Using [F2] and [F4] gives $\int_a^b x^ke^{i\omega x}\,dx=(b^ke^{i\omega b}-a^ke^{i\omega a})/(i\omega)-k\int_a^b x^{k-1}e^{i\omega x}\,dx/(i\omega)$. Starting from step 1.1, induction identifies each value returned by the algorithm with the corresponding moment. [given, F1, F2, F3, F4, step 1.1, algebra] ∎
