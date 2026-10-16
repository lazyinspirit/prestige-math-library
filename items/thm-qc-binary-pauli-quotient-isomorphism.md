---
id: thm-qc-binary-pauli-quotient-isomorphism
kind: theorem
title: Binary Pauli quotient isomorphism
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps:
  - def-qc-binary-pauli-label-and-quotient
  - thm-qc-pauli-product-and-adjoint
  - def-qc-pauli-matrices
  - thm-qc-pauli-algebra
  - def-qc-ordered-bitstring-encoding
  - thm-qc-bitstring-index-is-bijection
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-tensor-map-composition-and-adjoint
  - thm-z-mod-p-is-a-field
  - def-finite-field-and-its-order
  - def-vector-space
  - def-linear-basis
  - def-dimension
justified_by: []
dependency_level: 8
sources:
  references:
    - title: "John Preskill, Quantum Error Correction, Physics 229 Lecture Notes, Chapter 7"
      url: https://www.preskill.caltech.edu/ph229/notes/chap7.pdf
    - title: "M. Hein et al., Entanglement in Graph States and Its Applications"
      url: https://arxiv.org/pdf/quant-ph/0602096
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: https://arxiv.org/pdf/1907.09415
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: "None; surjectivity, injectivity, and dimension use explicit finite coordinates."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
---

## Statement

The map $\pi:\mathcal P_n\to V_n$, $P(k,x,z)\mapsto(x,z)$, is a surjective group homomorphism with kernel exactly $Z_n$. Therefore the quotient map in [[def-qc-binary-pauli-label-and-quotient]] is an isomorphism $\mathcal P_n/Z_n\cong (V_n,+)$, and $\dim_{\mathbb F_2}V_n=2n$. No phase or label ambiguity occurs, including when $n=1$.

## Facts & Assumptions

**Given:** $n\ge1$, the ordered computational basis indexed by bit strings, and the phase-aware Pauli group; $|0^n\rangle$ is the all-zero basis vector and $e_j$ is the bit string with its only $1$ in position $j$.

[F1] [[thm-qc-pauli-product-and-adjoint]]: the exact product law adds binary labels, and the scalar center is Z_n.

[F2] [[def-qc-ordered-bitstring-encoding]] and [[thm-qc-bitstring-index-is-bijection]]: distinct bit strings index distinct ordered computational-basis vectors.

[F3] [[def-qc-pauli-matrices]] and [[thm-qc-pauli-algebra]]: the displayed X and Z matrices act on one-bit basis vectors by X|b〉=|b+1〉 and Z|b〉=(-1)^b|b〉.

[F4] [[def-qc-tensor-register-and-permutation]], [[def-qc-tensor-map]], and [[thm-qc-tensor-map-composition-and-adjoint]]: the product basis is ordered, tensor maps act factorwise, and their products compose factorwise.

[F5] [[def-linear-basis]] and [[def-dimension]]: a basis is an independent spanning family, and dimension is the size of a finite basis.

## Proof

1.1 By the one-factor actions in [F3] and the factorwise tensor-map rules in [F4], $P(k,x,z)|y〉=i^k(-1)^{z·y}|y+x〉$. Distinct bit strings give distinct basis vectors by [F2], so the output basis index of the image of |0〉 is x. [given, F2, F3, F4, algebra]

2.1 Suppose $P(k,x,z)=\lambda P(k',x',z')$ for a nonzero scalar $\lambda$. Applying both sides to $|0^n\rangle$ gives nonzero multiples of $|x\rangle$ and $|x'\rangle$; distinct bit strings index distinct basis vectors by [F2], so $x=x'$. Comparing the coefficients of this common basis vector gives $i^k=\lambda i^{k'}$. Applying the operators to $|e_j\rangle$ gives the common output basis vector $|e_j+x\rangle$ with coefficients $i^k(-1)^{z_j}$ and $\lambda i^{k'}(-1)^{z'_j}$; their equality and the preceding phase equality imply $z_j=z'_j$ for every $j$. Thus operators equal up to scalar exactly when their binary labels agree; when $\lambda=1$, the same coefficient comparison gives $k=k'$ modulo $4$, so the exact parameter triple is unique. [given, F2, F3, step 1.1, algebra]

3.1 The parameter uniqueness in step 2.1 makes $\pi$ an unambiguous map on operators. The product formula [F1] makes $\pi$ a homomorphism; its kernel is exactly the zero-label operators $P(k,0,0)=i^kI=Z_n$, and every $(x,z)$ is the image of $P(0,x,z)$. The scalar set $Z_n$ is a subgroup because it contains $I$ and is closed under products and inverses; it is central by [F1]. Hence $P\sim Q$ is an equivalence relation: $P^{-1}P=I\in Z_n$, $Q^{-1}P=(P^{-1}Q)^{-1}\in Z_n$ whenever $P^{-1}Q\in Z_n$, and $P^{-1}R=(P^{-1}Q)(Q^{-1}R)\in Z_n$ whenever both factors lie in $Z_n$. Its class $[P]$ is the right coset $PZ_n$, since $P^{-1}Q\in Z_n$ exactly when $Q=Pz$ for some $z\in Z_n$. If representatives change from $P,Q$ to $Pz,Qw$ with $z,w\in Z_n$, centrality gives $PzQw=PQzw$, so $[P][Q]=[PQ]$ is well-defined. Step 2.1 makes the induced coset map injective, while $P(0,x,z)$ gives surjectivity. It is therefore the asserted quotient isomorphism. [given, F1, step 2.1, algebra]

4.1 The 2n vectors (e_j,0) and (0,e_j) span V_n by coordinate expansion and are linearly independent because a zero linear combination has each x and z coordinate zero. They form a basis by [F5], so dim V_n=2n. [given, F5, algebra] ∎
