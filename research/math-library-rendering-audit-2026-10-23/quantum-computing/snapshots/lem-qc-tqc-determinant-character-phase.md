---
id: lem-qc-tqc-determinant-character-phase
kind: lemma
title: The braid phase is a common scalar character
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-qc-tqc-braid-action-from-fusion-data
  - def-braid-group-by-the-artin-presentation
  - ex-qc-tqc-fibonacci-data
  - thm-qc-standalone-global-phase-invariance
  - thm-qc-controlled-global-phase-is-relative-phase
dependency_level: 7
axiom_use: None; exponent sum is a homomorphism defined by the finite Artin presentation.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak, Steven H. Simon, Ady Stern, Michael Freedman, and Sankar Das Sarma, Non-Abelian Anyons and Topological Quantum Computation"
      url: https://arxiv.org/pdf/0707.1889
      locator: §II.B and §IV.B.c, PDF pp. 7–11 and 53–57
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §9.17, PDF pp. 61–62; global phase and controlled access
---

## Statement

Fix the Fibonacci convention with common exchange scalar $R_1$. Let
$e:B_n\to\mathbb Z$ be exponent sum, sending each Artin generator $\sigma_i$
to $1$. If $\widetilde\rho$ is the generator-normalized representation
$\widetilde\rho(\sigma_i)=R_1^{-1}\rho(\sigma_i)$, then for every braid $b$
and every total-charge block,
$$\rho(b)=R_1^{e(b)}\widetilde\rho(b).$$
The scalar is the same on every total-charge block and every spectator
multiplicity. It is a global phase for an uncontrolled fixed-sector
computation; under coherent control it is a relative phase and must be
tracked.

## Facts & Assumptions

**Given:** The fixed-chirality Fibonacci $F/R$ data and the Artin presentation.

[A1] Assume every generator has the same scalar $R_1$ on all fusion
channels; its relative channel phases define the normalized generator. The
actual Fibonacci data carrier fixes $R_1=e^{-4\pi i/5}$ and
$R_\tau=e^{3\pi i/5}$ in its stated gauge.
[[ex-qc-tqc-fibonacci-data]]

[F2] Standalone unit-modulus phases leave pure-state measurement
probabilities unchanged.
[[thm-qc-standalone-global-phase-invariance]]

[F3] A separately controlled scalar phase can change measurement
probabilities by becoming relative to the control branch.
[[thm-qc-controlled-global-phase-is-relative-phase]]

## Proof

1.1 Exponent sum is well defined on the Artin group: both sides of every adjacent braid relation have sum $3$, both sides of every distant commutation relation have sum $2$, and inverse cancellation changes the sum by $0$. Thus $e:B_n\to\mathbb Z$ is a homomorphism. [given, algebra]

2.1 For a word $b=\sigma_{i_1}^{\epsilon_1}\cdots\sigma_{i_k}^{\epsilon_k}$, each positive generator contributes $R_1$ and each inverse contributes $R_1^{-1}$ to the scalar, by [A1]. The scalar product is therefore $R_1^{\epsilon_1+\cdots+\epsilon_k}=R_1^{e(b)}$, while the remaining normalized matrices multiply to $\widetilde\rho(b)$. Since every relation preserves exponent sum, this factorization is independent of the word representative. [A1, step 1.1, algebra]

3.1 The same scalar multiplies every charge block, so [F2] applies to an uncontrolled isolated sector. Under coherent control the scalar multiplies only the active branch, and [F3] shows it becomes a relative phase; it cannot be discarded without recording or correcting it. [F2, F3, step 2.1] ∎
