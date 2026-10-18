---
id: ex-na-large-frequency-fourier-filon-versus-midpoint-sample
kind: example
title: A Fourier integral missed by one sample but captured by Filon moments
status: draft
origin: pipeline
dependency_level: 6
deps:
  - alg-na-filon-nodal-moment-quadrature
  - alg-na-fourier-polynomial-moments
  - thm-na-fourier-oscillatory-moment-recurrence
  - thm-na-filon-interpolation-error-bound
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - lem-power-laws
proof_strategy: direct
axiom_use: "No choice axiom is used; the argument uses explicit finite formulas and the cited calculus results."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "A. Iserles, S. P. Nørsett, and S. Olver, Highly oscillatory quadrature: The story so far, §3.2"
      url: "https://www.cs.ox.ac.uk/sheehan.olver/papers/storysofar.pdf"
    - title: "NIST Digital Library of Mathematical Functions, §2.3(i)"
      url: "https://dlmf.nist.gov/2.3"
---

## Example

Let $N$ be a positive odd integer, $\omega=2\pi N$, and $g(x)=x$ on $[0,1]$. For $f(x)=1$, the exact integral is $0$ and the endpoint Filon rule returns $0$, while the one-sample midpoint value $M_\omega(f)=f(1/2)e^{i\omega/2}$ is $-1$. For $f(x)=x^2$, the same endpoint Filon rule has the exact error $2/\omega^2$.

## Facts & Assumptions

**Given:** The positive odd integer $N$, $\omega=2\pi N$, $g(x)=x$, and the two amplitudes $f(x)=1$ and $f(x)=x^2$ on $[0,1]$.

[F1] [[alg-na-filon-nodal-moment-quadrature]]: the Filon output is $\sum_j f(c_j)\widehat\mu_j$, using the Lagrange interpolant's phase moments.

[F2] [[alg-na-fourier-polynomial-moments]]: for endpoints $a,b$, the recurrence is $\mu_0=(e^{i\omega b}-e^{i\omega a})/(i\omega)$ and $\mu_k=(b^ke^{i\omega b}-a^ke^{i\omega a})/(i\omega)-k\mu_{k-1}/(i\omega)$.

[F3] [[thm-na-fourier-oscillatory-moment-recurrence]]: each output $\mu_k$ is the exact integral $\int_a^b x^ke^{i\omega x}\,dx$.

[F4] [[thm-na-filon-interpolation-error-bound]]: endpoint Filon with exact moments has error bounded by an explicit constant times $|\omega|^{-2}$ under $f\in C^2$ and nonstationary $g\in C^3$.

[F5] [[thm-complex-exponential-addition-and-real-extension]]: $e^{z+w}=e^ze^w$ for complex $z,w$.

[F6] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $e^{i\pi}=-1$.

[F7] [[lem-power-laws]]: for a nonzero field element and natural exponents, $(a^m)^n=a^{mn}$ and $a^{m+n}=a^ma^n$.

## Verification

1.1 Since $e^{i2\pi N}=(e^{i\pi})^{2N}=(-1)^{2N}=1$ and $e^{i\pi N}=(-1)^N=-1$ for odd $N$, by [F5]--[F7], [F2] and [F3] give $\mu_0=0$. For $f=1$ the endpoint interpolant is constant, so [F1] returns the exact integral $0$, while the one-sample value is $M_\omega(1)=e^{i\pi N}=-1$. [given, F1, F2, F3, F5, F6, F7, algebra]

2.1 For $f=x^2$, the degree-one endpoint interpolant is $p(x)=x$. Step 1.1 gives $e^{i\omega}=1$, so [F2] gives $\mu_1=1/(i\omega)$ and $\mu_2=1/(i\omega)-2/(i\omega)^2$. Thus $I_\omega(f,g)-Q_1=\mu_2-\mu_1=-2/(i\omega)^2=2/\omega^2$. The hypotheses of [F4] hold, so this exact error has the asserted second-order frequency decay. [given, F1, F2, F3, F4, step 1.1, algebra] ∎
