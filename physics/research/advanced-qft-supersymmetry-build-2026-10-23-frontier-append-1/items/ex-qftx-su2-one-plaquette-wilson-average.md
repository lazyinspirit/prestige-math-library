---
id: ex-qftx-su2-one-plaquette-wilson-average
kind: example
title: One-plaquette SU(2) Wilson average
status: draft
origin: session
dependency_level: 4
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
axiom_base: "ZF + AC_omega through the finite lattice datum."
deps:
  - def-countable-choice
  - def-qftx-wilson-loop
  - def-qftx-su2-wilson-plaquette-measure
  - lem-qftx-planar-plaquette-factorization
  - lem-qftx-su2-one-plaquette-average
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-wilson-loop: mathematical-premise
  def-qftx-su2-wilson-plaquette-measure: mathematical-premise
  lem-qftx-planar-plaquette-factorization: mathematical-premise
  lem-qftx-su2-one-plaquette-average: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "H. B. Meyer, Lattice QCD: A Brief Introduction, in Lattice QCD for Nuclear Physics, Lecture Notes in Physics 889"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf"
      locator: "§1.4.1.1, printed pp. 22–24, for the single-plaquette Haar integral and leading strong-coupling behavior; the exact finite SU(2) integral is calculated locally."
    - title: "Robert Lohmayer, Eigenvalue Distributions of Wilson Loops"
      url: "https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf"
      locator: "§§4.1 and 4.2.2, printed pp. 59–64, for reduction to the one-plaquette matrix expectation; the explicit SU(2) integral is evaluated locally."
verification:
  precheck: pending
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. For one square face with free boundary in the finite $SU(2)$ Wilson model at $0<\beta\leq1$, the normalized plaquette holonomy has law $d\nu_\beta(U)=z_\beta^{-1}e^{\beta\tau(U)}d\mu_2(U)$, where $\tau(U)=\tfrac12\operatorname{Tr}_2U$ and $z_\beta=\int e^{\beta\tau}d\mu_2$. The Wilson action partition factor is $Z_\square=e^{-\beta}z_\beta$, and the normalized fundamental Wilson loop around the square has expectation $\langle W(\partial\square)\rangle_\beta=\lambda(\beta)$, where $\lambda(\beta)=\int\tau e^{\beta\tau}d\mu_2/z_\beta=\beta/4+O(\beta^3)$ as $\beta\downarrow0$.

## Example references

[[def-qftx-su2-wilson-plaquette-measure|One-plaquette action, trace, and probability measure]]

[[lem-qftx-planar-plaquette-factorization|Finite one-face plaquette law]]

[[lem-qftx-su2-one-plaquette-average|Exact one-plaquette expectation and small-coupling expansion]]

[Meyer, §1.4.1.1, printed pp. 22–24, on leading Wilson-loop integration in the strong-coupling regime](https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf)

[Lohmayer, §§4.1–4.2.2, printed pp. 59–64, on one-plaquette reduction for two-dimensional gauge theory](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the one-face free-boundary $SU(2)$ lattice, $0<\beta\leq1$, and $W(\partial\square)=\tfrac12\operatorname{Tr}_2(U_{\partial\square})$.

[A1] The proof is carried out over $\mathrm{AC}_\omega$. [[def-countable-choice]]

[F1] [[def-qftx-su2-wilson-plaquette-measure]]: $S_\beta=\beta(1-\tau(U_p))$, $z_\beta=\int e^{\beta\tau}d\mu_2$, and $d\nu_\beta=z_\beta^{-1}e^{\beta\tau}d\mu_2$.

[F2] [[def-qftx-wilson-loop]]: the normalized fundamental loop is half the trace of the ordered edge product.

[F3] [[lem-qftx-planar-plaquette-factorization]]: on a one-face free-boundary rectangle, the plaquette holonomy has law $\nu_\beta$.

[F4] [[lem-qftx-su2-one-plaquette-average]]: $\int\tau\,d\nu_\beta=\lambda(\beta)$ and $\lambda(\beta)=\beta/4+O(\beta^3)$.

## Verification

1.1 On one face the action weight is $e^{-\beta}e^{\beta\tau(U_p)}$. The one-face instance of [F3] gives the normalized plaquette law $\nu_\beta$, so the partition factor is $e^{-\beta}z_\beta$. The only inherited choice premise is [A1]. [given, A1, F1, F3, algebra]

2.1 The boundary Wilson observable is $W(\partial\square)=\tau(U_p)$ by [F2], and integrating it against the law in [F3] gives $\int\tau\,d\nu_\beta=\lambda(\beta)$ by [F4]. [F2, F3, F4, step 1.1, algebra]

3.1 Substituting the expansion from [F4] yields $\langle W(\partial\square)\rangle_\beta=\beta/4+O(\beta^3)$ as $\beta\downarrow0$. This is a finite-regulator model expectation. [F4, step 2.1, algebra] ∎
