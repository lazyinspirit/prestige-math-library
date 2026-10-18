---
id: def-qc-tqc-toric-excitations
kind: definition
title: Toric e and m syndromes
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-qc-tqc-toric-checks
  - def-qc-stabilizer-syndrome-and-logical-operators
justified_by: []
axiom_use: "None; this item defines finite check eigenvalue labels."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Alexei Kitaev, Fault-tolerant quantum computation by anyons"
      url: https://arxiv.org/pdf/quant-ph/9707021
    - title: "John Preskill, Quantum Computation, Chapter 9: Topological Quantum Computation"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
---

## Definition

For a nonzero vector $\psi$ that is a simultaneous eigenvector of all toric
checks, its **e syndrome** is the set of vertices $q$ for which
$A_q\psi=-\psi$, and its **m syndrome** is the set of faces $f$ for which
$B_f\psi=-\psi$. A violated star is called an e defect and a violated
plaquette is called an m defect. These are finite stabilizer-syndrome labels;
the names do not assume that a material contains localized physical
quasiparticles.

These eigenvalue labels agree with the commutation-sign syndrome of
[[def-qc-stabilizer-syndrome-and-logical-operators]] when a Pauli error acts
on a common $+1$ check eigenvector, as verified below.

The checks are Hermitian involutions, as verified below; thus their
eigenvalues on any nonzero simultaneous eigenvector are indeed signs.

## Facts & Assumptions

**Given:** The toric checks on the finite edge register and their simultaneous-eigenvalue convention.

[F1] [[def-qc-tqc-toric-checks]]: every toric check is a Hermitian involution.

[F2] [[def-qc-stabilizer-syndrome-and-logical-operators]]: a syndrome bit is $0$ for commutation sign $+1$ and $1$ for sign $-1$.

## Verification

1.1 A Hermitian involution has only eigenvalues $+1$ and $-1$. Therefore each check eigenvalue on the given nonzero simultaneous eigenvector is one of these two signs, so the two sets in the Definition are well-defined finite subsets of vertices and faces. [given, F1, algebra]

2.1 Let $\phi\ne0$ be a common $+1$ check eigenvector, and let $E$ be a Pauli error. For any check $g$, write $Eg=(-1)^s gE$ with $s\in\mathbb F_2$. Then $g(E\phi)=(-1)^s E(g\phi)=(-1)^s E\phi$. Since $E$ is invertible, $E\phi\ne0$; its negative-check sets therefore consist exactly of the checks with commutation bit $s=1$. On an independent generating list these are the syndrome bits of [F2]. Thus the eigenvalue labels defined here are compatible with that error-syndrome convention, with stars and plaquettes kept separate. [F1, F2, step 1.1, algebra] ∎

