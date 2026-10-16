---
id: thm-qc-pauli-product-and-adjoint
kind: theorem
title: Pauli product and adjoint
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-phase-aware-n-qubit-pauli-group
  - def-qc-pauli-matrices
  - thm-qc-pauli-algebra
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-tensor-map-composition-and-adjoint
justified_by: []
dependency_level: 6
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
    - title: "John Preskill, Quantum Error Correction, Physics 229 Lecture Notes, Chapter 7"
      url: https://www.preskill.caltech.edu/ph229/notes/chap7.pdf
    - title: "Scott Aaronson and Daniel Gottesman, Improved Simulation of Stabilizer Circuits"
      url: https://arxiv.org/pdf/quant-ph/0406196
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: "None; all arguments are finite tensor and matrix calculations."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

For $k,k'\in\mathbb Z/4\mathbb Z$ and $x,z,x',z'\in\mathbb F_2^n$, with $P(k,x,z)=i^kX^xZ^z$ and $X^xZ^z$ ordered as written,

$$P(k,x,z)P(k',x',z')=P(k+k'+2(z\cdot x'),x+x',z+z'),$$

where the dot product is first evaluated in $\mathbb F_2$ as $0$ or $1$, and then multiplied by $2$ in $\mathbb Z/4\mathbb Z$. The set $\mathcal P_n$ is a group. If $p\in\{0,1\}$ represents $x\cdot z\in\mathbb F_2$, then $P(k,x,z)^*=P(2p-k,x,z)=P(k,x,z)^{-1}$, and its center is $Z_n=\{i^k I:k\in\mathbb Z/4\mathbb Z\}$.

## Facts & Assumptions

**Given:** n>=1, the ordered register, and the phase-aware Pauli convention.

[F1] [[thm-qc-pauli-algebra]]: X and Z are Hermitian involutions and ZX=-XZ.

[F2] [[def-qc-tensor-map]] and [[thm-qc-tensor-map-composition-and-adjoint]]: tensor maps act on elementary tensors, preserve composition, and take factorwise adjoints.

[F3] [[def-qc-tensor-register-and-permutation]]: the tensor factors and product basis have a fixed order.

## Proof

1.1 On one factor, $Z^{z_j}X^{x'_j}=(-1)^{z_jx'_j}X^{x'_j}Z^{z_j}$, since the factors commute unless both exponents are $1$, when $ZX=-XZ$ by [F1]. Multiplying these identities over the ordered factors gives $Z^zX^{x'}=(-1)^pX^{x'}Z^z$, where $p$ is the integer representative $0$ or $1$ of $z\cdot x'\in\mathbb F_2$. [given, F1, F2, F3, algebra]

2.1 Substituting that reordering into $i^{k+k'}X^xZ^zX^{x'}Z^{z'}$ gives $i^{k+k'+2p}X^{x+x'}Z^{z+z'}$, which is exactly the stated product formula; all binary exponents add modulo $2$, while the phase exponent adds modulo $4$. [given, step 1.1, algebra]

3.1 The formula proves closure. $P(0,0,0)=I$ is an identity, and associativity is inherited from matrix multiplication, so $\mathcal P_n$ is a group once inverses are supplied below. [given, step 2.1, algebra]

3.2 Taking the adjoint reverses the order and conjugates $i^k$: $(i^kX^xZ^z)^*=i^{-k}Z^zX^x=i^{-k}(-1)^pX^xZ^z=P(2p-k,x,z)$, where $p$ represents $x\cdot z$. The product formula then gives $P^*P=PP^*=I$, so this adjoint is the inverse and completes the group proof. [given, F1, F2, step 2.1, algebra]

4.1 Scalar operators $i^kI$ commute with every matrix and belong to $\mathcal P_n$. Conversely, if $P(k,x,z)$ commutes with every $X_j$, the product law forces $z_j=0$ for each $j$; commuting with every $Z_j$ forces $x_j=0$ for each $j$. Thus every central element is scalar and the center is exactly $Z_n$. [given, F1, step 2.1, algebra] ∎
