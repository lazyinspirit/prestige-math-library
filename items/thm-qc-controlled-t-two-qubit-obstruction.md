---
id: thm-qc-controlled-t-two-qubit-obstruction
kind: theorem
title: Two-qubit determinant obstruction to controlled T
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
page: clifford-t-exact-and-approximate-synthesis
deps:
  - def-qc-clifford-t-gate-library
  - lem-qc-clifford-t-entry-ring
  - lem-qc-dyadic-cyclotomic-unit-circle
  - thm-determinant-multiplicative
  - thm-leibniz-determinant-is-alternating-multilinear-and-normalized
  - def-qc-circuit-denotational-semantics
  - lem-qc-local-gate-wire-embedding
  - def-qc-global-phase-equivalence
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Kliuchnikov, Maslov, and Mosca, Practical approximation of single-qubit unitaries by single-qubit quantum circuits"
      url: https://arxiv.org/pdf/1206.5236
dependency_level: 11
---

## Statement

The two-qubit controlled-$T$ matrix
$C(T)=\operatorname{diag}(1,1,1,\omega)$ cannot be implemented exactly, or
up to a scalar global phase, by a circuit on exactly two wires using only
one-qubit Clifford+T gates and CNOT. The assertion concerns no workspace wire;
it does not rule out implementations with an explicit ancilla.

## Facts & Assumptions

**Given:** $\omega=e^{i\pi/4}$, the exact two-wire gate embeddings, and multiplicativity and column multilinearity of the determinant.

[F1] [[lem-qc-clifford-t-entry-ring]]: every matrix entry of a finite Clifford+T circuit lies in $D$.

[F2] [[lem-qc-dyadic-cyclotomic-unit-circle]]: every $\lambda\in D$ with $\lambda\bar\lambda=1$ is an eighth root $\omega^j$.

[F3] [[def-qc-clifford-t-gate-library]]: $H,T,S,Z$ have the displayed exact matrices and CNOT permutes the two-wire computational basis by $|a,b\rangle\mapsto|a,b\oplus a\rangle$.

[F4] [[thm-determinant-multiplicative]]: the determinant of a product of square matrices is the product of their determinants.

[F5] [[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]: determinant is multilinear in its columns, so scaling all four columns by $\lambda$ scales the determinant by $\lambda^4$.

[F6] [[lem-qc-local-gate-wire-embedding]]: on two ordered wires, a one-wire operation acts on its selected factor and as identity on the other factor.

[F7] [[def-qc-circuit-denotational-semantics]]: a finite chronological circuit is represented by the product of its gate-embedding matrices, with later gates multiplying on the left.

[F8] [[def-qc-global-phase-equivalence]]: $A$ and $B$ are equivalent up to global phase exactly when $A=\lambda B$ for a scalar $\lambda$ of modulus $1$.

## Proof


1.1 By [F6], the two one-wire embeddings are $H\otimes I_2,I_2\otimes H$ and the corresponding tensor embeddings for $T,T^\dagger,S,S^\dagger,X,Y,Z$ and scalar phases. Direct diagonal/permutation calculations give $\det(H\otimes I_2)=\det(I_2\otimes H)=1$, $\det(T\otimes I_2)=\det(I_2\otimes T)=\omega^2$, and $\det(T^\dagger\otimes I_2)=\det(I_2\otimes T^\dagger)=\omega^{-2}$. The same calculation gives determinant $\omega^4$ for embedded $S,S^\dagger$, determinant $1$ for embedded $X,Y,Z$, and $\omega^{4j}$ for the embedded scalar phase $\omega^jI_2$. CNOT is a single transposition of $|10\rangle$ and $|11\rangle$, so its determinant is $-1=\omega^4$. Thus every primitive determinant is an even power of $\omega$; [F4,F7] make the determinant of a finite circuit product an even power as well. [F3, F4, F6, F7, given, algebra]

2.1 The target has determinant $\det C(T)=\omega$. Exact equality contradicts step 1.1. If a two-wire circuit $V$ equals $\lambda C(T)$ for a unit scalar $\lambda$ as in [F8], then its $(0,0)$ entry is $\lambda$, so [F1] gives $\lambda\in D$; unitarity gives $\lambda\bar\lambda=1$, so [F2] gives $\lambda=\omega^j$. By [F5], $\det V=\lambda^4\det C(T)=\omega^{4j+1}$, an odd power, again contradicting step 1.1. [F1, F2, F5, F8, step 1.1, algebra] ∎

## Unresolved supplier checks

The determinant calculation was reconciled with the actual QC09 local-wire
embedding and circuit-semantics bodies. QC07's exact gate matrices and the
ring-unit-circle supplier were also inspected. This records interface review,
not independent acceptance of those draft suppliers.
