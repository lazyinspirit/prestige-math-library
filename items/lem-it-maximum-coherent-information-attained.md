---
id: lem-it-maximum-coherent-information-attained
kind: lemma
title: Finite channel information maxima are attained
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-qc-quantum-channel
  - def-qc-density-operator
  - def-it-von-neumann-entropy
  - def-it-quantum-channel-complement-and-coherent-information
  - lem-it-quantum-coherent-information-complement-identity
  - lem-it-finite-quantum-entropy-continuity
  - lem-euclidean-linear-maps-have-matrices-and-are-bounded
  - thm-all-norms-on-rn-are-equivalent
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-non-negative-and-positive-operator
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-trace-of-an-endomorphism
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; all spaces and sums are finite-dimensional."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §§5.2.1 and 8.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, §§11.10 and 24.4"
      url: "https://arxiv.org/pdf/1106.1445v8"
---
## Statement

Let $\mathcal N:A\to B$ be a quantum channel between nonzero finite-dimensional complex inner-product spaces, and fix any finite Stinespring complement $\mathcal N^c:A\to E$. Both functions

$$\rho\longmapsto I_c(\rho,\mathcal N),\qquad \rho\longmapsto S(\rho)+I_c(\rho,\mathcal N)$$

attain a maximum on the density operators on $A$.

## Facts & Assumptions

**Given:** The finite-dimensional channel and chosen complement in the Statement.

[F1] [[def-qc-density-operator]], [[thm-complex-spectral-theorem-for-normal-endomorphisms]], and [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: a state is a nonnegative trace-one self-adjoint operator with a finite orthonormal eigenbasis and nonnegative eigenvalues summing to one.

[F2] [[def-non-negative-and-positive-operator]], [[def-adjoint-of-a-linear-map-between-inner-product-spaces]], [[def-operator-norm-on-a-finite-dimensional-inner-product-space]], and [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: nonnegativity is equivalent to self-adjointness and $\langle Tx,x\rangle\ge0$ for every vector; $|\langle Tx,y\rangle|\le\|T\|\|x\|\|y\|$.

[F3] [[def-it-quantum-channel-complement-and-coherent-information]] and [[lem-it-quantum-coherent-information-complement-identity]]: $I_c(\rho,\mathcal N)=S(\mathcal N(\rho))-S(\mathcal N^c(\rho))$.

[F4] [[lem-it-finite-quantum-entropy-continuity]]: entropy is continuous in operator norm on each fixed finite-dimensional state space, including at states with zero eigenvalues.

[F5] [[lem-euclidean-linear-maps-have-matrices-and-are-bounded]] and [[thm-all-norms-on-rn-are-equivalent]]: a linear map between finite-dimensional coordinate spaces is continuous, and the operator-norm topology agrees with the Euclidean coordinate topology.

[F6] [[thm-heine-borel-rn]]: a closed bounded subset of a positive-dimensional real Euclidean space is compact.

[F7] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space attains its maximum.

## Proof

1.1 Regard the self-adjoint endomorphisms of $A$ as a real vector space of dimension $d^2$, where $d=\dim A\ge1$, using an orthonormal basis of $A$ and the real diagonal and real/imaginary off-diagonal matrix coordinates. The state set is nonempty because $I_A/d$ is a state. It is closed: trace one and the self-adjoint matrix-coordinate equalities are closed conditions, and for each fixed $x\in A$, the quadratic form condition $\langle\rho x,x\rangle\ge0$ is closed by finite-dimensional continuity; [F1]–[F2] show their intersection is exactly the state set. It is bounded in the coordinate norm on Hermitian matrices: each eigenvalue lies in $[0,1]$, so the operator norm is at most one; for standard basis vectors $e_i,e_j$, [F2] gives $|\langle\rho e_j,e_i\rangle|\le1$, hence all $d^2$ real matrix coordinates are bounded. The operator and coordinate norms induce the same topology by [F5], so [F6] makes the state set compact in operator norm. [F1, F2, F5, F6, given, construct, algebra]

2.1 The channels $\mathcal N$ and $\mathcal N^c$ are finite-dimensional linear maps and hence continuous in operator norm by [F5]. Their outputs on states are states. By [F3]–[F4], $\rho\mapsto S(\mathcal N(\rho))-S(\mathcal N^c(\rho))$ is continuous; adding the continuous function $S(\rho)$ shows that the second displayed objective is continuous as well. [F3, F4, F5, step 1.1, algebra]

3.1 Apply [F7] to each of these two continuous real-valued functions on the nonempty compact state space from step 1.1. Each therefore attains its maximum, as asserted. [F7, step 1.1, step 2.1] ∎

