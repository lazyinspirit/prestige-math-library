---
id: thm-qa-finite-abelian-hidden-subgroup-sample-law
kind: theorem
title: Fourier samples are uniform in the annihilator
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 17
deps:
  - alg-qa-finite-abelian-hidden-subgroup-sample
  - lem-qa-hidden-coset-state-law
  - def-qa-finite-abelian-hidden-subgroup-problem
  - def-qa-finite-abelian-subgroup-annihilator
  - thm-qa-finite-abelian-dual-character-orthogonality
  - thm-qa-finite-abelian-coset-fourier-transform
  - thm-qa-finite-abelian-subgroup-annihilator-cardinality
  - thm-qa-finite-abelian-fourier-transform-is-unitary
  - lem-qa-finite-character-values-have-unit-modulus
  - def-qc-dirac-notation-conversion
  - def-qc-ordered-bitstring-encoding
  - thm-qc-dirac-notation-coordinate-identity
  - def-qc-density-operator
  - def-trace-of-an-endomorphism
  - prop-trace-is-linear
  - def-qc-projective-measurement
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - lem-qc-tensor-product-basis-and-dimension
  - thm-qc-computational-basis-orthonormal
  - def-qc-circuit-denotational-semantics
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415v6"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

For every finite abelian hidden-subgroup instance with hidden subgroup $H\le G$, one execution of the exact sample procedure returns a valid character code with probability one. Each $\chi\in H^\perp$ has probability $1/|H^\perp|=|H|/|G|$, every character outside $H^\perp$ has probability zero, and every invalid $b$-bit code has probability zero.

## Facts & Assumptions

**Given:** The exact product QFT, projective measurement in its character-label basis, and discarded-output state from [[alg-qa-finite-abelian-hidden-subgroup-sample]] and [[lem-qa-hidden-coset-state-law]].

[F1] Put $N:=|G|$, $M:=|H|$, and $Q:=|H^\perp|$, and write $N_{\mathbb R}:=\iota_{\mathbb R}(N)$, $M_{\mathbb R}:=\iota_{\mathbb R}(M)$, and $Q_{\mathbb R}:=\iota_{\mathbb R}(Q)$ for their positive canonical real images, viewed also in $\mathbb C$. A normalized uniform coset state transforms to amplitude $Q_{\mathbb R}^{-1/2}\overline{\chi(g)}$ on $H^\perp$ and zero outside. In the probability ratios in the Statement and below, $1/|H^\perp|$ means $1/Q_{\mathbb R}$ and $|H|/|G|$ means $M_{\mathbb R}/N_{\mathbb R}$. ([[thm-qa-finite-abelian-coset-fourier-transform]])

[F2] Every value of an additive character of a finite abelian group has modulus one. ([[lem-qa-finite-character-values-have-unit-modulus]])

[F3] The discarded-output input is the uniform mixture over distinct coset states. ([[lem-qa-hidden-coset-state-law]])

[F4] $|H^\perp|=|G|/|H|$. ([[thm-qa-finite-abelian-subgroup-annihilator-cardinality]])

[F5] The abstract normalized Fourier coefficient matrix is unitary, with its column orthogonality supplied by the dual-index character sum. This is a matrix identity for the abstract group and character index spaces; it does not establish orthonormality of encoded register states. ([[thm-qa-finite-abelian-fourier-transform-is-unitary]], [[thm-qa-finite-abelian-dual-character-orthogonality]])

[F6] A density operator is a nonnegative endomorphism of trace one. ([[def-qc-density-operator]])

[F7] The endomorphism trace is the sum of diagonal entries in an ordered basis. ([[def-trace-of-an-endomorphism]])

[F8] The rank-one operator $|x\rangle\langle y|$ sends $v$ to $\langle v,y\rangle_{\rm root}x$ by definition, and its coordinate matrix in ordered orthonormal bases is $[x][y]^\dagger$. ([[def-qc-dirac-notation-conversion]], [[thm-qc-dirac-notation-coordinate-identity]])

[F9] A projective-measurement outcome has weight $\operatorname{tr}(\rho P_a)$. ([[def-qc-projective-measurement]])

[F10] In a fixed ordered basis, the coordinate matrix of a finite sum of endomorphisms is the sum of their coordinate matrices; the definition of endomorphism trace and matrix-trace linearity therefore give trace linearity for the finite sums used here. ([[def-trace-of-an-endomorphism]], [[prop-trace-is-linear]])

[F11] $H^\perp=\{\chi\in\widehat G:\chi(h)=1\text{ for every }h\in H\}$. ([[def-qa-finite-abelian-subgroup-annihilator]])

[F12] For $N\ge2$, the sample procedure's supplied $Q_G$ is a unitary on the full $b$-qubit register and its exact action on each valid group code is the prescribed Fourier superposition of valid character codes; the procedure measures the full $b$-bit computational basis. The $N=1$ branch instead returns the unique trivial character without a query. ([[alg-qa-finite-abelian-hidden-subgroup-sample]])

[F13] The problem definition makes the group code injective and uses the same least-residue, fixed-width encoding for character labels, which is injective coordinatewise. An $n$-qubit register is an ordered tensor product of $Q_2$ factors ([[def-qc-register-and-computational-basis]]), with the declared bit order ([[def-qc-ordered-bitstring-encoding]]). The factor bases are orthonormal ([[thm-qc-computational-basis-orthonormal]]), and the tensor inner product is the product of the factor inner products ([[def-qc-tensor-register-and-permutation]]); hence the factor-basis theorem makes the lexicographic product computational basis orthonormal ([[lem-qc-tensor-product-basis-and-dimension]]). Thus distinct valid group or character codes give orthonormal register states. ([[def-qa-finite-abelian-hidden-subgroup-problem]])

## Proof

If $N=1$, then $G=H=\{0\}$ and $H^\perp$ contains the trivial character by [F11]. By [F4], $|H^\perp|=|G|/|H|=1$, so it is the singleton containing that character. The algorithm's trivial-group branch [F12] returns it with probability one. Here $b=0$, so the sole zero-bit code is valid by [F13] and there are no invalid codes. The claimed probability is $1=|H|/|G|$. Assume $N\ge2$ for the remaining steps.

1.1 Fix a coset $g+H$ in the mixture of [F3] and write its transformed vector as $\psi_g=\sum_{\chi\in\widehat G}\alpha_{g,\chi}|\chi\rangle$. The input coset ket is normalized by [F3], with its valid group-code coordinates orthonormal by [F13], and the supplied circuit $Q_G$ is unitary by [F12], so $\|\psi_g\|=1$. For any vector $v$, [F8] gives $\langle\rho_gv,v\rangle_{\rm root}=|\langle v,\psi_g\rangle_{\rm root}|^2\ge0$ for $\rho_g=|\psi_g\rangle\langle\psi_g|$. In character coordinates, $\rho_g$ has diagonal entries $|\alpha_{g,\chi}|^2$, whose sum is $\|\psi_g\|^2=1$; [F7] gives $\operatorname{tr}(\rho_g)=1$. Thus [F6] makes $\rho_g$ a density operator. [F3, F6, F7, F8, F12, F13, algebra]

1.2 The valid character-code basis is orthonormal by [F13], independently of the abstract matrix unitarity in [F5]. The exact action in [F12] places $\psi_g$ in its span, so every invalid $b$-bit outcome has probability zero. For a valid character $\chi$, its rank-one projector $P_\chi=|\chi\rangle\langle\chi|$ has a single diagonal $1$ at that code. The matrix of $\rho_g$ has entries $\alpha_{g,\mu}\overline{\alpha_{g,\nu}}$, so the projective-measurement weight [F9], computed by [F7]–[F8], is $\operatorname{tr}(\rho_gP_\chi)=|\alpha_{g,\chi}|^2$. By [F1], [F2], and the support definition [F11], this is $|Q_{\mathbb R}^{-1/2}\overline{\chi(g)}|^2=Q_{\mathbb R}^{-1}=1/Q_{\mathbb R}$ when $\chi\in H^\perp$ and $0$ otherwise; the square root is the positive real one. [F1, F2, F7, F8, F9, F11, F12, F13, algebra]

2.1 The probability in step 1.2 does not depend on the coset representative. The discarded-output state is the uniform mixture [F3], and trace linearity [F10] makes its measurement distribution the average of the same per-coset distribution. Hence the measured character is uniform on all of $H^\perp$ and has zero probability outside it. [F3, F10, step 1.2]

3.1 By [F4], $N=MQ$, so the canonical real images in [F1] satisfy $N_{\mathbb R}=M_{\mathbb R}Q_{\mathbb R}$: each image is the sum of the corresponding number of copies of $1$, and distributivity preserves this product. Hence each supported outcome has probability $Q_{\mathbb R}^{-1}=M_{\mathbb R}/N_{\mathbb R}$, which is $1/|H^\perp|=|H|/|G|$ in the probability notation of [F1]. In the boundary case $H=G$, $Q=1$ and the coset-transform formula [F1] gives the single trivial character with probability one. [F1, F4, step 2.1] ∎

## Remarks

The proof uses the normalized-state amplitude, not the unnormalized indicator coefficient $|H|/\sqrt{|G|}$. The current QA-05 annihilator-cardinality proof supplies the cardinality used here. The projective-measurement item and the required measurement and circuit page bodies were inspected for the sampling and terminal-readout hypotheses; those suppliers remain draft, and no independent acceptance is claimed.
