---
id: thm-booker-lee-strombergsson-finite-selberg-verification-ranges
kind: theorem
title: Booker–Lee–Strömbergsson Finite Selberg Verification Ranges
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - def-selberg-exceptional-eigenvalue-parameter
  - thm-booker-lee-strombergsson-twist-minimal-sieve
  - thm-b-l-s-interval-certificate-correctness
proof_strategy: finite-trace-formula-computation
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  precheck: pending
sources:
  references:
    - title: "A. Booker, M. Lee, and A. Strömbergsson, Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture"
      url: "https://arxiv.org/pdf/1803.06016v2"
      locator: "Theorem 1.1 and §§4–5: finite Γ₁(N) and principal-level verification ranges."
    - title: "A. Pascadi, On the Exponents of Distribution of Primes and Smooth Numbers"
      url: "https://arxiv.org/pdf/2505.00653v2"
      locator: "§1.4: conjectural target and unconditional Kim–Sarnak bound, distinguished from finite computations."
---

## Statement

Subject to the software and hardware correctness qualifications stated for
their interval computation, Booker, Lee, and Strömbergsson verify the Selberg
eigenvalue conjecture for $\Gamma_1(N)$ for every integer $1\le N\le880$ and
for the principal congruence subgroup $\Gamma(N)$ for every integer
$1\le N\le226$. Here
$$\Gamma_1(N)=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z):
a\equiv d\equiv1,\ c\equiv0\pmod N\right\},\qquad
\Gamma(N)=\{\gamma\in\mathrm{SL}_2(\mathbb Z):\gamma\equiv I\pmod N\}.$$
The conclusion concerns positive cuspidal weight-zero Laplace eigenvalues:
each is at least $1/4$; the constant eigenfunction of eigenvalue $0$ is not
part of the claim. This is a finite verification, not the Selberg conjecture
for all congruence levels.

## Statement references

[A. Booker, M. Lee, and A. Strömbergsson, *Twist-Minimal Trace Formulas and the Selberg Eigenvalue Conjecture*](https://arxiv.org/pdf/1803.06016v2)

[A. Pascadi, *On the Exponents of Distribution of Primes and Smooth Numbers*](https://arxiv.org/pdf/2505.00653v2)

## Proof status

The source reports the claimed ranges, but its production source code,
certificate arrays, and raw interval outputs are not staged. This finite
computation is not one of the run's four authorized external computation
inputs, so the published calculation is not imported as a local proof. The
conditional checker theorem does not establish that a certificate exists or
was accepted. This full finite claim is retained and escalated pending the
production data and a complete local replay.
