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
  - lem-qftx-wilson-loop-gauge-invariance
  - def-probability-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-product-measure-on-sigma-finite-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - def-tdmath-measure-integral
  - def-measure-with-density
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
dependency_roles:
  def-countable-choice: mathematical-premise
  def-qftx-wilson-loop: mathematical-premise
  def-qftx-su2-wilson-plaquette-measure: mathematical-premise
  lem-qftx-planar-plaquette-factorization: mathematical-premise
  lem-qftx-su2-one-plaquette-average: mathematical-premise
  lem-qftx-wilson-loop-gauge-invariance: mathematical-premise
  def-probability-measure: mathematical-premise
  def-product-sigma-algebra-and-finite-product-sigma-algebras: mathematical-premise
  def-product-measure-on-sigma-finite-spaces: mathematical-premise
  thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique: mathematical-premise
  def-tdmath-measure-integral: mathematical-premise
  def-measure-with-density: mathematical-premise
  thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces: mathematical-premise
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$. For one square face with free boundary in the finite $SU(2)$ Wilson model at $0<\beta\leq1$, take the loop to follow the positively oriented face boundary counterclockwise from its lower-left corner. Let $U_{\partial\square}$ be the ordered product of the face's link matrices in traversal order, using inverse matrices on reverse edges, and set $W(\partial\square):=\tfrac12\operatorname{Tr}_2(U_{\partial\square})$. Use $\mu_2$, the normalized pushforward of round $S^3$ surface area under the matrix-coordinate map in the finite $SU(2)$ plaquette-measure definition, and $\tau(U)=\tfrac12\operatorname{Tr}_2U$. The normalized plaquette holonomy has law $d\nu_\beta(U)=z_\beta^{-1}e^{\beta\tau(U)}d\mu_2(U)$, where $z_\beta=\int e^{\beta\tau}d\mu_2$. The Wilson action partition factor is $Z_\square=e^{-\beta}z_\beta$, and this normalized fundamental loop has expectation $\langle W(\partial\square)\rangle_\beta=\lambda(\beta)$, where $\lambda(\beta)=\int\tau e^{\beta\tau}d\mu_2/z_\beta=\beta/4+O(\beta^3)$ as $\beta\downarrow0$.

## Example references

[[def-qftx-su2-wilson-plaquette-measure|One-plaquette action, trace, and probability measure]]

[[lem-qftx-planar-plaquette-factorization|Finite one-face plaquette law]]

[[lem-qftx-su2-one-plaquette-average|Exact one-plaquette expectation and small-coupling expansion]]

[[lem-qftx-wilson-loop-gauge-invariance|Gauge invariance of the original loop observable under tree gauge fixing]]

[[def-probability-measure|Normalized plaquette probability]]

[[def-product-sigma-algebra-and-finite-product-sigma-algebras|Finite product sigma-algebra]]

[[def-product-measure-on-sigma-finite-spaces|Product link measure]]

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique|Finite product probability and rectangle formula]]

[[def-tdmath-measure-integral|Partition factor and loop expectation as integrals]]

[[def-measure-with-density|Plaquette law defined by its density]]

[Meyer, §1.4.1.1, printed pp. 22–24, on leading Wilson-loop integration in the strong-coupling regime](https://ndl.ethernet.edu.et/bitstream/123456789/73862/1/82.pdf.pdf)

[Lohmayer, §§4.1–4.2.2, printed pp. 59–64, on one-plaquette reduction for two-dimensional gauge theory](https://epub.uni-regensburg.de/16031/1/EigenvalueDistributionsOfWilsonLoops.pdf)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the one-face free-boundary $SU(2)$ lattice, $0<\beta\leq1$, and $W(\partial\square)=\tfrac12\operatorname{Tr}_2(U_{\partial\square})$.

[A1] The proof is carried out over $\mathrm{AC}_\omega$. [[def-countable-choice]]

[F1] [[def-qftx-su2-wilson-plaquette-measure]]: $S_\beta=\beta(1-\tau(U_p))$, $z_\beta=\int e^{\beta\tau}d\mu_2$, and $d\nu_\beta=z_\beta^{-1}e^{\beta\tau}d\mu_2$.

[F2] [[def-qftx-wilson-loop]]: the normalized fundamental loop is half the trace of the ordered edge product.

[F3] [[lem-qftx-planar-plaquette-factorization]]: on a one-face free-boundary rectangle, the plaquette holonomy has law $\nu_\beta$.

[F4] [[lem-qftx-su2-one-plaquette-average]]: $\mu_2$ is a normalized bi-invariant Borel probability, $\int\tau\,d\nu_\beta=\lambda(\beta)$, and $\lambda(\beta)=\beta/4+O(\beta^3)$.

[F5] [[lem-qftx-wilson-loop-gauge-invariance]]: the loop trace in the original link variables equals its value in the tree-gauge representative, while [[lem-qftx-planar-plaquette-factorization]] supplies the law of the representative's plaquette variable.

[F6] [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces|Fubini's theorem for $L^1$ functions on a sigma-finite product]]: an $L^1$ function on a product of sigma-finite measure spaces has equal product and iterated integrals. In particular this applies successively to bounded measurable functions on a finite product of probability spaces, since their absolute integrals are finite.

## Verification

1.1 Write $A,B,C,D\in SU(2)$ for the eastward bottom, northward right, eastward top, and northward left link matrices. The counterclockwise face word is $U_p=ABC^{-1}D^{-1}$ by [F3]. Multiplication is product-Borel measurable in this finite Lie-group case, as specified in [F3], and inversion is continuous, so this group word is measurable. For any bounded Borel function $f:SU(2)\to\mathbb C$, its composition with the group word is bounded on the four-link product probability space. By [F6] integrate first in $A$: for fixed $B,C,D$, right invariance in [F4] gives $\int f(ABC^{-1}D^{-1})\,d\mu_2(A)=\int f(U)\,d\mu_2(U)$. Integrating the remaining three probability factors therefore proves $\int_{SU(2)^4}f(U_p)\,d\mu_2^{\otimes4}=\int_{SU(2)}f(U)\,d\mu_2(U)$. The only inherited choice premise is [A1]. [given, A1, F3, F4, F6, algebra]

2.1 On one face the action weight is $e^{-\beta}e^{\beta\tau(U_p)}$ by [F1]. Since $|\tau|\leq1$, the function $e^{\beta\tau}$ is bounded. Apply step 1.1 to it to obtain $Z_\square=e^{-\beta}\int e^{\beta\tau(U)}\,d\mu_2(U)=e^{-\beta}z_\beta$. Applying the same identity to $f(U)=\mathbf1_H(U)e^{\beta\tau(U)}$ for each Borel set $H\subseteq SU(2)$ and dividing by $Z_\square>0$ shows that the original plaquette holonomy has law $\nu_\beta$. [F1, step 1.1, algebra]

3.1 In the chosen orientation the loop word is exactly the positively oriented face word, so its ordered holonomy is $U_p$ and its Wilson observable is $W(\partial\square)=\tau(U_p)$ by [F2]. The equality with the original loop observable follows pointwise from [F5]; integrating against the representative plaquette law in [F3] gives $\int\tau\,d\nu_\beta=\lambda(\beta)$ by [F4], also directly from the original holonomy law in step 2.1. [F2, F3, F4, F5, step 2.1, algebra]

4.1 Substituting the expansion from [F4] yields $\langle W(\partial\square)\rangle_\beta=\beta/4+O(\beta^3)$ as $\beta\downarrow0$. This is a finite-regulator model expectation. [F4, step 3.1, algebra] ∎
