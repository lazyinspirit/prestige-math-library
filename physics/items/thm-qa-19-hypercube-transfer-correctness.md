---
id: thm-qa-19-hypercube-transfer-correctness
kind: theorem
title: Exact state transfer on the Boolean hypercube
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 13
deps:
  - alg-qa-19-hypercube-state-transfer
  - def-qa-19-finite-matrix-dynamics
  - thm-qa-19-matrix-exponential-unitary-properties
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - def-qc-dirac-notation-conversion
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - thm-qc-computational-basis-orthonormal
  - thm-qa-19-measurement-distribution
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-quarter-turn-values-and-shift-formulas
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 17 §17.2
      url: https://www.cs.umd.edu/~amchilds/qa/qa.pdf
      locator: "Chapter 17 §17.2, PDF p.82 (printed p.74): hypercube adjacency and exact opposite-corner transfer."
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, Chapter 9 §9.1"
      url: https://arxiv.org/pdf/1907.09415
      locator: "Chapter 9 §9.1, printed pp.71–72/PDF pp.83–84: finite Hermitian evolution under the spectral functional calculus."
---

## Statement

For every integer $n\ge0$, the algorithm
[[alg-qa-19-hypercube-state-transfer]] evolves the initial vector $e_{0^n}$
to
$$U_{A_n}(\pi/2)e_{0^n}=(-i)^n e_{1^n}.$$
Consequently its computational-basis measurement outputs $1^n$ with
probability one, including the empty word when $n=0$.

## Facts & Assumptions
**Given:** An integer $n\ge0$, the standard $n$-qubit register, and
$A_n=\sum_{j<n}X_j$ as in the algorithm.

[F1] [[alg-qa-19-hypercube-state-transfer]]: the Hamiltonian is
$A_n=\sum_{j<n}X_j$ and the initial vector is $e_{0^n}$.

[F2] [[def-qc-register-and-computational-basis]]: the computational basis is
the ordered standard basis of $\mathbb C^2$ on each qubit.

[F3] [[def-qc-tensor-register-and-permutation]]: the product basis of an
ordered tensor register is the lexicographically ordered tensor of its factor
bases; the empty tensor product is $\mathbb C$.

[F4] [[thm-complex-spectral-theorem-for-normal-endomorphisms]]: a finite
normal endomorphism has an orthonormal eigenbasis.

[F5] [[thm-complex-exponential-addition-and-real-extension]]:
$e^{z+w}=e^ze^w$ for complex $z,w$.

[F6] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]:
$e^{it}=\cos t+i\sin t$ for real $t$.

[F7] [[thm-quarter-turn-values-and-shift-formulas]]:
$\cos(\pi/2)=0$ and $\sin(\pi/2)=1$.

[F8] [[thm-qa-19-measurement-distribution]]: in a finite register, the
computational-basis outcome probability is the squared modulus of the
corresponding output coordinate.

[F9] [[def-qa-19-finite-matrix-dynamics]]: $U_{A_n}(t)$ acts on an
eigenvector of $A_n$ with eigenvalue $\lambda$ by multiplication by
$e^{-it\lambda}$.

[F10] [[def-qc-tensor-map]]: tensor maps act factorwise on elementary tensors;
the empty tensor map is the identity on $\mathbb C$.

## Proof

**Proof technique:** direct.

1.1 In $\mathbb C^2$, put $f_+=(e_0+e_1)/\sqrt2$ and $f_-=(e_0-e_1)/\sqrt2$. Direct inner-product calculation makes $(f_+,f_-)$ an orthonormal basis, and direct matrix multiplication gives $Xf_+=f_+$ and $Xf_-=-f_-$. By [F3], the vectors $f_{s_0}\otimes\cdots\otimes f_{s_{n-1}}$ form an orthonormal basis of the $n$-qubit register; for $n=0$ this is the singleton basis of $\mathbb C$. By [F10], each $X_j$ acts on this vector by $(-1)^{s_j}$, so $A_n$ has the real eigenvalue $\sum_{j<n}(-1)^{s_j}$. This basis diagonalizes every $X_j$ with real eigenvalues as well. Hence $A_n$ and each $X_j$ are self-adjoint and their finite matrix evolutions are defined. [given, F1, F2, F3, F10, algebra]

2.1 The eigenbasis in step 1.1 and the spectral functional-calculus rule [F4], [F9] give that $U_{A_n}(t)$ acts on that basis vector by $e^{-it\sum_j(-1)^{s_j}}$. Repeated use of [F5] makes this the product of the one-qubit eigenvalues. By [F10], this is the action of $\bigotimes_{j<n}U_X(t)$ on that basis vector, so the maps agree on a basis. Also, each $U_{X_j}(t)$ acts on the same vector by $e^{-it(-1)^{s_j}}$, by step 1.1 and [F4], [F9]. Their chronological composition $U_{X_{n-1}}(t)\cdots U_{X_0}(t)$ therefore has the same eigenvalue $e^{-it\sum_j(-1)^{s_j}}$ on every basis vector. It equals $U_{A_n}(t)$, so the local-operation branch implements the whole evolution. For $n=0$, the composition is empty and equals the identity on $\mathbb C$. [step 1.1, F4, F5, F9, F10, algebra]

3.1 At $t=\pi/2$, the eigenvalues of $U_X(t)$ on $f_+,f_-$ are $-i,i$ by [F6]–[F7]. These are the eigenvalues of $-iX$ on the same basis, so $U_X(\pi/2)=-iX$. By [F10], each of the $n$ factors contributes the scalar $-i$ on elementary tensors, and these tensors span the register; hence $U_{A_n}(\pi/2)=(-i)^nX^{\otimes n}$. [step 2.1, F2, F6, F7, F10, algebra]

4.1 Each $X$ exchanges $e_0$ and $e_1$, hence [F10] gives $X^{\otimes n}e_{0^n}=e_{1^n}$. By step 2.1, both the whole-operation branch and the local-operation branch have net evolution $U_{A_n}(\pi/2)$; step 3.1 therefore gives their output vector $(-i)^n e_{1^n}$. For $n=0$ it reads $I_{\mathbb C}e_{()}=e_{()}$. [F1, F2, F10, step 2.1, step 3.1, algebra]

5.1 The vector in step 4.1 has norm one, and [F8] assigns probability $|(-i)^n|^2=1$ to the outcome $1^n$. Thus every other basis outcome has probability zero. [step 4.1, F8, algebra] ∎
