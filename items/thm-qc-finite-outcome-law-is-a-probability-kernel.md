---
id: thm-qc-finite-outcome-law-is-a-probability-kernel
kind: theorem
title: "The finite POVM law is a probability kernel"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-finite-outcome-probability-kernel, thm-qc-povm-probabilities-normalize, def-finite-probability-space-and-event, def-trace-of-an-endomorphism, prop-trace-is-linear, def-matrix-product-and-identity-matrix, def-qc-density-operator, def-non-negative-and-positive-operator]
justified_by: []
dependency_level: 4
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §2.3.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "John Preskill, Quantum Computation, Chapter 3: Foundations II: Measurement and Evolution, §3.1.2"
      url: "https://www.preskill.caltech.edu/ph219/chap3_15.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For a finite POVM $E=(E_a)_{a\in\Omega}$ on a nonzero finite-dimensional complex inner-product space $H$, the assignment

$$K_E(\rho,S)=\sum_{a\in S}\operatorname{tr}(\rho E_a)$$

is a probability kernel from the matrix-coordinate Borel density set $\mathcal D(H)$ to the finite outcome set $\Omega$. For every event $S\subseteq\Omega$, the function $\rho\mapsto K_E(\rho,S)$ is affine on $\mathcal D(H)$, meaning it preserves every convex combination $\lambda\rho+(1-\lambda)\sigma$ with $0\le\lambda\le1$.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex-inner-product space $H$, a finite nonempty outcome set $\Omega$, and a finite POVM $E=(E_a)_{a\in\Omega}$.

[F1] [[def-qc-finite-outcome-probability-kernel]]: $\mathcal D(H)$ carries the matrix-coordinate subspace Borel $\sigma$-algebra; $\Omega$ carries all subsets; $K_E(\rho,S)=\sum_{a\in S}\operatorname{tr}(\rho E_a)$.

[F2] [[thm-qc-povm-probabilities-normalize]]: for each density $\rho$, the weights $p_\rho(a)=\operatorname{tr}(\rho E_a)$ are nonnegative and sum to one.

[F3] [[def-finite-probability-space-and-event]]: a finite probability space is a finite outcome set with nonnegative weights summing to one, and an event's mass is the sum of its outcome weights.

[F4] [[def-trace-of-an-endomorphism]]: endomorphism trace is matrix trace in any basis; in the chosen coordinates it is the sum of diagonal entries.

[F5] [[prop-trace-is-linear]]: $\operatorname{tr}(A+B)=\operatorname{tr}(A)+\operatorname{tr}(B)$ and $\operatorname{tr}(\lambda A)=\lambda\operatorname{tr}(A)$.

[F6] [[def-qc-density-operator]]: on a nonzero finite-dimensional complex inner-product space, a density operator is nonnegative and has trace one.

[F7] [[def-non-negative-and-positive-operator]]: a nonnegative operator is self-adjoint and has nonnegative quadratic form on every vector.

[F8] [[def-matrix-product-and-identity-matrix]]: matrix products are row-by-column finite sums, so $\operatorname{tr}(AB)=\sum_{i,j}A_{ij}B_{ji}$ in finite coordinates.

## Proof

1.1 Fix $\rho\in\mathcal D(H)$. By [F2], the weights $p_\rho(a)$ are nonnegative and sum to one, so [F3] gives a finite probability space on $\Omega$. Its probability for an event $S$ is $\sum_{a\in S}p_\rho(a)$, which equals $K_E(\rho,S)$ by [F1]. Thus the kernel value at each input is a probability measure on the finite outcome set. [given, F1, F2, F3]

1.2 Fix $S\subseteq\Omega$ and use the ordered basis defining the matrix coordinates. In those coordinates, each summand is $\operatorname{tr}(\rho E_a)=\sum_{i,j}\rho_{ij}(E_a)_{ji}$ by [F4] and the row-by-column product formula [F8]; it is a finite linear combination of coordinate projections $\rho\mapsto\rho_{ij}$. The projections are continuous in the matrix-coordinate topology, so each summand and the finite sum $g_S(\rho)=K_E(\rho,S)$ are continuous. [given, F1, F4, F8]

2.1 For every open $U\subseteq\mathbb R$, continuity in step 1.2 makes $g_S^{-1}(U)$ open and hence Borel. The collection of subsets $B\subseteq\mathbb R$ for which $g_S^{-1}(B)$ is Borel is a $\sigma$-algebra, because inverse images preserve complements and countable unions; it contains every open set by the same continuity. It therefore contains the Borel $\sigma$-algebra, proving that $g_S$ is Borel measurable. [step 1.2]

3.1 Let $\lambda\in[0,1]$ and $\rho,\sigma\in\mathcal D(H)$. Put $T=\lambda\rho+(1-\lambda)\sigma$. Since $\lambda$ and $1-\lambda$ are real and $\rho,\sigma$ are self-adjoint by [F6]–[F7], for every $x,y\in H$ one has $\langle Tx,y\rangle=\lambda\langle\rho x,y\rangle+(1-\lambda)\langle\sigma x,y\rangle=\langle x,Ty\rangle$. Thus $T$ is self-adjoint; also $\langle Tx,x\rangle=\lambda\langle\rho x,x\rangle+(1-\lambda)\langle\sigma x,x\rangle\ge0$, so $T$ is nonnegative by [F7]. It has trace one by [F6] and [F5], so it lies in $\mathcal D(H)$. Applying [F5] to the finite sum in [F1] gives $K_E(\lambda\rho+(1-\lambda)\sigma,S)=\lambda K_E(\rho,S)+(1-\lambda)K_E(\sigma,S)$. This proves affinity. [given, F1, F5, F6, F7, algebra] ∎
