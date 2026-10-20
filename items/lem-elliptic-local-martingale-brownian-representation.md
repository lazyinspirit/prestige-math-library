---
id: lem-elliptic-local-martingale-brownian-representation
kind: lemma
title: An elliptic local martingale has a Brownian driver
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
page: anderson-reverse-time-diffusion
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-progressively-measurable-and-predictable-process
  - thm-dominated-convergence
  - lem-predictable-elliptic-martingale-brownian-reconstruction
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pending
sources:
  references:
    - title: "A. W. van der Vaart, Martingales, Diffusions and Financial Mathematics, Theorem 6.1 and Exercise 6.5; Theorem 7.15"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf"
      locator: "Printed pp. 119 and 122: scalar Levy proof and vector exercise; pp. 147–148: inverse-diffusion Brownian reconstruction. The local proof supplies the matrix-valued integral construction and vector argument."
---

## Statement

Assume the Axiom of Choice. Let $(M_t)_{0\le t\le T}$ be a continuous adapted $d$-dimensional local martingale with $M_0=0$. Let $(\sigma_t)_{0\le t\le T}$ be a continuous adapted process of invertible $d\times d$ matrices such that $\|\sigma_t^{-1}\|\le C$ for a deterministic finite constant $C$, and suppose every entry of $\sigma$ is locally square-integrable in time almost surely. Write $[M^i,M^j]$ for the continuous bracket characterized by the local-martingale property of $M^iM^j-[M^i,M^j]$, and assume
$$[M^i,M^j]_t=\int_0^t(\sigma_s\sigma_s^{\mathsf T})_{ij}\,ds\qquad(1\le i,j\le d).$$
Then the stochastic integral $B_t=\int_0^t\sigma_s^{-1}\,dM_s$, constructed as the localized $L^2$ limit of left-step sums, has a continuous version with $[B^i,B^j]_t=\delta_{ij}t$. Consequently $B$ is a standard $d$-dimensional Brownian motion relative to the given filtration.

## Statement references

[Vector Lévy characterization](https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf): identifies a continuous local martingale with identity bracket as Brownian motion; the local proof below supplies the inverse-matrix integral construction.

## Facts & Assumptions

**Given:** the filtered probability space and processes in the statement, the Axiom of Choice, the elementary definition of stochastic integration by predictable step sums, the $L^2$ martingale maximal inequality, and completeness of $L^2$.

[A1] AC is assumed to invoke the predictable reconstruction and its inherited conditional-expectation and $L^2$ interfaces. [[def-axiom-of-choice]]

[F1] Adapted left-step processes are predictable, and pointwise limits and Borel compositions of predictable maps are predictable. [[def-progressively-measurable-and-predictable-process]]

[F7] Dominated convergence passes the uniformly bounded left-step approximations through the finite bracket-energy integrals and the product-compensator limits. [[thm-dominated-convergence]]

[F9] A predictable invertible coefficient with bounded inverse and finite pathwise squared energy admits Brownian reconstruction from the specified local-martingale bracket on the original finite-horizon filtration. The proof constructs stopped integrals on the usual augmentation, normalizes continuous representatives there, and recovers an original-adapted version from unstopped elementary sums. [[lem-predictable-elliptic-martingale-brownian-reconstruction]]

## Proof

**Given:** AC and the processes in the Statement.

1.1 If $T=0$, set $B_0=0$; the integral, bracket and finite-horizon Brownian claims are immediate. Henceforth suppose $T>0$. Form left-step approximations to $\sigma$ on deterministic dyadic partitions, retaining $\sigma_0$ at time zero. They are predictable by [F1]. Take their pointwise limit where it exists as a finite invertible matrix with inverse norm at most $C$, and use $C^{-1}I_d$ otherwise; necessarily $C>0$. The resulting predictable $\widehat\sigma$ agrees with $\sigma$ at all times on its full continuity event. Continuity on the compact horizon gives $\int_0^T\|\widehat\sigma_s\|_F^2ds<\infty$ almost surely, and its bracket identity is the given one. Thus [F9] supplies a Brownian motion $B=\int\widehat\sigma^{-1}dM$ adapted to the original filtration, with bracket $tI_d$. This invocation makes no raw stopped evaluation of an unnormalized almost-surely continuous process. [given, A1, F1, F9, construct]

2.1 This integral also has the left-step construction required in the Statement. On the augmented, normalized stopped intervals of [F9], put $H=\sigma^{-1}$ and use its bounded deterministic left-step approximations. They converge uniformly on each continuous path and are bounded by $C$. The bracket-energy isometry and maximal estimate proved in [F9], together with dominated convergence [F7] and the integrable stopped bracket trace, give localized $L^2$ convergence of their integrals to the same $B$. Equality with the predictable reconstruction follows from uniqueness in that energy completion. Its original-adapted continuous version and Brownian increment identities are supplied by [F9]; the bracket is $[B^i,B^j]_t=\delta_{ij}t$. Hence every asserted conclusion holds on the given filtration. [F7, F9, step 1.1] ∎
