---
id: lem-qc-binary-dual-dimension
kind: lemma
title: Dimension of the binary dual code
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 3
deps:
  - def-qc-classical-linear-code-over-finite-field
  - def-qc-dual-of-a-finite-field-linear-code
  - def-dimension
  - thm-rank-nullity
  - thm-dual-family-is-a-basis-in-finite-dimension
  - thm-dimension-of-a-linear-subspace
justified_by: []
proof_strategy: direct
axiom_use: "None; extension of a finite basis is proved choice-free by the finite-dimensional subspace theorem."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §37.1.1
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: 'John Preskill, Quantum Computation, Chapter 7: Quantum Error Correction'
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Statement

For every binary linear code $C\le\mathbb F_2^n$ with $n\ge1$,
$\dim C^\perp=n-\dim C$. This argument uses no form of the Axiom of Choice.

## Facts & Assumptions

**Given:** A subspace $C\le\mathbb F_2^n$, its bilinear dual, and the standard
coordinate basis of $\mathbb F_2^n$.

[F1] [[def-qc-dual-of-a-finite-field-linear-code]]: $x\cdot y=\sum_{j<n}x_jy_j$
and $C^\perp=\{y:x\cdot y=0\text{ for every }x\in C\}$.

[F2] [[thm-dual-family-is-a-basis-in-finite-dimension]]: the dual family of a
finite basis of a vector space is a basis of its algebraic dual, with the same
dimension.

[F3] [[thm-dimension-of-a-linear-subspace]]: a finite-dimensional subspace
admits extension of each independent subset to a basis without choice.

[F4] [[thm-rank-nullity]]: for a linear map with finite-dimensional domain,
domain dimension is the sum of kernel dimension and image dimension.

## Proof

1.1 Let $e_0,\ldots,e_{n-1}$ be the standard basis of $\mathbb F_2^n$. Its coordinate dual basis is $e_0^*,\ldots,e_{n-1}^*$, and $e_i\cdot y=y_i=e_i^*(y)$ for $0\le i<n$ by [F1]. Thus the linear map $J:\mathbb F_2^n\to(\mathbb F_2^n)^*$, $J(x)(y)=x\cdot y$, sends a basis to the dual basis from [F2], so it is an isomorphism. [F1, F2, construct]

1.2 Choose a basis $c_1,\ldots,c_m$ of $C$ and extend it to a basis of $\mathbb F_2^n$ by [F3]. For every $f\in C^*$, define $\widetilde f$ on the extended basis by $\widetilde f(c_i)=f(c_i)$ and value $0$ on each added basis vector, then extend linearly. This is a linear functional on $\mathbb F_2^n$ whose restriction to $C$ is $f$. Hence restriction $(\mathbb F_2^n)^*\to C^*$ is onto. [given, F3, construct]

2.1 The composite $T:\mathbb F_2^n\xrightarrow{J}(\mathbb F_2^n)^*\to C^*$ is onto by the isomorphism in step 1.1 and surjectivity in step 1.2. Its kernel consists exactly of those $x$ for which $x\cdot c=0$ for all $c\in C$, namely $C^\perp$ by [F1]. Since $\dim C^*=\dim C=m$ by [F2], rank-nullity [F4] gives $n=\dim C^\perp+m$. Therefore $\dim C^\perp=n-\dim C$. [F1, F2, F4, step 1.1, step 1.2] ∎
