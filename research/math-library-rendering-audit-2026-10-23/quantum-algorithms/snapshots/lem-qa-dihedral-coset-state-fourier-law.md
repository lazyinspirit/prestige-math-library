---
id: lem-qa-dihedral-coset-state-fourier-law
kind: lemma
title: Fourier sample from a generalized-dihedral reflection coset state
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 14
deps:
  - def-generalized-dihedral-group
  - def-external-semidirect-product
  - thm-external-semidirect-product-is-a-group
  - def-qc-circuit-denotational-semantics
  - def-qc-coherent-function-oracle
  - def-qc-dirac-notation-conversion
  - def-qc-partial-trace
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - def-qc-povm-and-outcome-law
  - def-qc-instrument-and-conditional-state
  - thm-qc-luders-instrument-of-a-povm-is-valid
  - thm-non-negative-square-root-exists-and-is-unique
  - thm-qc-projective-conditional-state
  - def-non-negative-and-positive-operator
  - def-qc-register-and-computational-basis
  - def-qc-tensor-register-and-permutation
  - thm-qc-computational-basis-orthonormal
  - def-qa-cyclic-quantum-fourier-transform
  - thm-qc-dirac-notation-coordinate-identity
  - def-trace-of-an-endomorphism
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-complex-exponential-addition-and-real-extension
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "None; all registers and sums are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Greg Kuperberg, A Subexponential-Time Quantum Algorithm for the Dihedral Hidden Subgroup Problem"
      url: "https://arxiv.org/pdf/quant-ph/0302112"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms (17 April 2025)"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
---

## Statement

Write $A=\mathbb Z/N\mathbb Z$ additively, $N\ge2$, and identify its generalized-dihedral group with $A\times\mathbb Z/2\mathbb Z$ under
$$
(a,b)(a',b')=(a+(-1)^b a',\,b+b'\bmod2).
$$
Let $H_s=\{(0,0),(s,1)\}$ and let a total encoded function $F$ be constant on each left coset of $H_s$ and distinct on different left cosets. Start in the uniform state on the $2N$ group elements, evaluate the coherent XOR oracle for $F$ into a zero output register, discard that register, apply the positive-sign $\operatorname{QFT}_N$ to the first coordinate, and measure that coordinate. The measured $k\in\mathbb Z/N\mathbb Z$ is uniform. Conditional on $k$, the remaining qubit is, up to a global phase,
$$
|\psi_k\rangle=\frac{|0\rangle+\exp(2\pi i ks/N)|1\rangle}{\sqrt2}.
$$

The coordinate readout uses the Lüders projective instrument for the projections $\Pi_k=|k\rangle\langle k|\otimes I_2$. The stated conditional qubit is the post-measurement state after discarding the measured coordinate.

## Facts & Assumptions

**Given:** $N\ge2$, $s\in\mathbb Z/N\mathbb Z$, the displayed finite group law, the stated left-coset hiding promise, and the exact finite-register and Fourier operations above.

[F1] The generalized dihedral group is the external semidirect product by the inversion action; its multiplication is $(a,b)(a',b')=(a+(-1)^b a',b+b')$, and this multiplication defines a group ([[def-generalized-dihedral-group]], [[def-external-semidirect-product]], [[thm-external-semidirect-product-is-a-group]]).

[F2] A coherent XOR oracle acts on the ordered basis as $|x,y\rangle\mapsto|x,y\oplus F(x)\rangle$ ([[def-qc-coherent-function-oracle]]).

[F3] Discarding the second factor is the partial trace, which contracts equal basis indices and sums them ([[def-qc-partial-trace]]).

[F4] The finite computational bases are orthonormal and ordered tensor factors retain their declared order ([[thm-qc-computational-basis-orthonormal]], [[def-qc-register-and-computational-basis]], [[def-qc-tensor-register-and-permutation]]).

[F5] The cyclic Fourier transform has matrix action $|a\rangle\mapsto N^{-1/2}\sum_{k=0}^{N-1}\exp(2\pi iak/N)|k\rangle$ ([[def-qa-cyclic-quantum-fourier-transform]]).

[F6] A projective-measurement outcome has weight $\operatorname{tr}(\rho P_k)$ ([[def-qc-projective-measurement]], [[thm-qc-projective-measurement-outcome-law]]).

[F7] A rank-one operator $|x\rangle\langle y|$ acts by $z\mapsto\langle z,y\rangle_{\rm root}x$ ([[def-qc-dirac-notation-conversion]]).

[F8] The circuit denotation composes the declared finite gates in chronological order ([[def-qc-circuit-denotational-semantics]]).

[F9] The coordinate matrix of a rank-one Dirac operator is $[x][y]^\dagger$ ([[thm-qc-dirac-notation-coordinate-identity]]).

[F10] Endomorphism trace is the sum of diagonal entries in an ordered basis ([[def-trace-of-an-endomorphism]]).

[F11] For real $\theta$, $|\exp(i\theta)|=1$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]).

[F12] The complex exponential satisfies $\exp(z+w)=\exp(z)\exp(w)$ ([[thm-complex-exponential-addition-and-real-extension]]).

[F13] A finite projective measurement is implemented by the Lüders instrument of its projections: the outcome-$k$ branch is $\mathcal I_k(\rho)=\Pi_k\rho\Pi_k$, and for $p_k=\operatorname{tr}(\rho\Pi_k)>0$ its conditional state is $\Pi_k\rho\Pi_k/p_k$ ([[def-qc-povm-and-outcome-law]], [[def-qc-instrument-and-conditional-state]], [[thm-qc-luders-instrument-of-a-povm-is-valid]], [[thm-non-negative-square-root-exists-and-is-unique]], [[thm-qc-projective-conditional-state]], [[def-non-negative-and-positive-operator]]). The $\Pi_k$ are orthogonal projections summing to the identity, so the same projective-to-POVM and positive-square-root specialization applies to the coordinate-register PVM.

## Proof


1.1 By [F1], $(s,1)^2=(s-s,0)=(0,0)$, so $H_s$ has the two displayed elements. Right multiplication gives $(a,0)(s,1)=(a+s,1)$ and $(a,1)(s,1)=(a-s,0)$. Hence the distinct left cosets are $C_a=\{(a,0),(a+s,1)\}$ for $a\in A$: every group element occurs in one such pair, and the first coordinate of its unique $(\,\cdot\,,0)$ representative identifies the pair. [given, F1, algebra]

2.1 The initial state has amplitude $(2N)^{-1/2}$ on each group basis vector. After the oracle call in the declared circuit order [F8], the output basis label is constant on each $C_a$ and distinct for different $a$. By [F2]–[F4], tracing out the output retains exactly pairs of group labels in the same $C_a$, so the group-register operator is $\rho=\frac1{2N}\sum_{a\in A}\sum_{z,z'\in C_a}|z\rangle\langle z'|=\frac1N\sum_{a\in A}|C_a\rangle\langle C_a|$, where $|C_a\rangle=(|a,0\rangle+|a+s,1\rangle)/\sqrt2$. Each $|C_a\rangle$ is normalized because its two distinct group basis vectors are orthonormal. The rank-one notation is the operator of [F7], with coordinate matrix and trace given by [F9]–[F10]. [given, F2, F3, F4, F7, F8, F9, F10, step 1.1, algebra]

3.1 Applying [F5] to the first coordinate sends each coset vector to $$ |\phi'_a\rangle=\frac1{\sqrt N}\sum_{k=0}^{N-1}\exp(2\pi iak/N)|k\rangle\otimes|\psi_k\rangle. $$ The factorization uses [F12]. Let $\rho'=\frac1N\sum_a|\phi'_a\rangle\langle\phi'_a|$ be the transformed mixture from step 2.1. Under the Lüders branch [F13], $$ \Pi_k\rho'\Pi_k=\frac1{N^2}\sum_{a\in A}|k\rangle\langle k|\otimes|\psi_k\rangle\langle\psi_k|=\frac1N|k\rangle\langle k|\otimes|\psi_k\rangle\langle\psi_k|. $$ Its trace is $1/N$ by [F9]–[F11], so every $k$ occurs with that probability. The normalized conditional state on the joint register is $|k\rangle\langle k|\otimes|\psi_k\rangle\langle\psi_k|$. Discarding the first coordinate contracts its matching basis index by [F3]; after reordering the factors if needed by [F4], the retained qubit density is $|\psi_k\rangle\langle\psi_k|$. Hence the conditional qubit ray is $|\psi_k\rangle$, as claimed. [given, F3, F4, F5, F6, F9, F10, F11, F12, F13, step 2.1, algebra] ∎

