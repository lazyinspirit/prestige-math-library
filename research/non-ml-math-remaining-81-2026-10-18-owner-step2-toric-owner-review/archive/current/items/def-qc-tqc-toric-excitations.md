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

The word **syndrome** follows the check-eigenvalue convention of
[[def-qc-stabilizer-syndrome-and-logical-operators]].

The checks are Hermitian involutions, as verified below; thus their
eigenvalues on any nonzero simultaneous eigenvector are indeed signs.

## Facts & Assumptions

**Given:** The toric checks on the finite edge register and their simultaneous-eigenvalue convention.

[F1] [[def-qc-tqc-toric-checks]]: every toric check is a Hermitian involution.

[F2] [[def-qc-stabilizer-syndrome-and-logical-operators]]: a syndrome bit is $0$ for commutation sign $+1$ and $1$ for sign $-1$.

## Verification

1.1 A Hermitian involution has only eigenvalues $+1$ and $-1$. Therefore each check eigenvalue on the given nonzero simultaneous eigenvector is one of these two signs, so the two sets in the Definition are well-defined finite subsets of vertices and faces. [given, F1, algebra]

2.1 The listed negative-check sets use exactly the same sign-to-bit convention as [F2], with the vertex and face families kept separate. The words e and m are names for these finite syndrome labels; the Definition explicitly makes no material-quasiparticle assumption. [F2, step 1.1] ∎

