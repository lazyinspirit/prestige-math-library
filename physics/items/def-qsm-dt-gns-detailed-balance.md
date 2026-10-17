---
id: def-qsm-dt-gns-detailed-balance
kind: definition
title: Specified finite GNS detailed balance
status: published
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: physics
dependency_level: 3
deps:
  - def-qsm-dt-gksl-definition
  - lem-qsm-matrix-state-calculus
  - lem-qsm-dt-finite-trace-pairing-cyclicity
dependency_roles:
  def-qsm-dt-gksl-definition: mathematical-premise
  lem-qsm-matrix-state-calculus: mathematical-premise
  lem-qsm-dt-finite-trace-pairing-cyclicity: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: Robert Alicki and Karl Lendi, Quantum Dynamical Semigroups and Applications, Lecture Notes in Physics 717, §§1.2.4 and 1.3.4
      url: https://www.nzdr.ru/data/media/biblio/kolxoz/P/PS/PSa/Alicki%20R.%2C%20Lendi%20K.%20Quantum%20dynamical%20semigroups%20and%20applications%20%28LNP0717%2C%20Springer%2C%202007%29%28136s%29_PSa_.pdf
    - title: Eric A. Carlen and Jan Maas, Gradient flow and entropy inequalities for quantum Markov semigroups with detailed balance, §2
      url: https://arxiv.org/pdf/1609.01254
---

## Definition

Let $d\geq1$ be finite, let $\mathcal H=\mathbb C^d$ with its standard inner product, and write $M_d(\mathbb C)$ for its matrices. Let $H_{\rm s}=H_{\rm s}^*\in M_d(\mathbb C)$ be a Hamiltonian in joules, let $\hbar>0$ have units joule-seconds, and let $m\geq0$ be an integer with $L_1,\ldots,L_m\in M_d(\mathbb C)$ a finite family of jump matrices in seconds$^{-1/2}$. Matrices on which the generators act are dimensionless. The Schrödinger generator $\mathcal L$ is the finite GKSL generator of [[def-qsm-dt-gksl-definition]].

Its trace-dual observable generator is

$$G(A)=\frac{i}{\hbar}[H_{\rm s},A]+D(A),\qquad D(A)=\sum_{j=1}^{m}\left(L_j^*AL_j-\frac12\{L_j^*L_j,A\}\right).$$

Here $[U,V]=UV-VU$, $\{U,V\}=UV+VU$, and $A^*$ is the conjugate transpose. The units of $G$, $D$, and $\mathcal L$ are seconds$^{-1}$. The generator preserves the identity, $D(I)=0$, so $e^{tD}(I)=I$.

Let $\sigma=\sigma^*>0$ be a dimensionless density matrix on $\mathcal H$, so $\operatorname{Tr}\sigma=1$. Define

$$\langle A,B\rangle_\sigma:=\operatorname{Tr}(\sigma B^*A),\qquad \|A\|_\sigma:=\langle A,A\rangle_\sigma^{1/2}.$$

This inner product is linear in its first variable. It is positive definite because $\sigma>0$. The data satisfy **the specified finite GNS detailed-balance convention** when $[H_{\rm s},\sigma]=0$ and $D$ is self-adjoint for this inner product, meaning $\langle D(A),B\rangle_\sigma=\langle A,D(B)\rangle_\sigma$ for all $A,B\in M_d(\mathbb C)$. The Hamiltonian part of $G$ is kept separate and is anti-self-adjoint. Quantum detailed-balance conventions vary; in particular, this definition does not identify GNS symmetry with KMS or Kubo–Mori symmetry.

## Facts & Assumptions

**Given:** The finite GKSL data $d,H_{\rm s},\hbar,(L_j)_{j=1}^m$, a faithful density matrix $\sigma$, and the finite trace.

[F1] [[def-qsm-dt-gksl-definition]]: $\mathcal L(X)=-\frac{i}{\hbar}[H_{\rm s},X]+\sum_j(L_jXL_j^*-\frac12\{L_j^*L_j,X\})$.

[F2] [[lem-qsm-matrix-state-calculus]]: finite Hermitian matrices have basis-independent spectral calculus; a finite density is positive semidefinite with trace one.

[F3] [[lem-qsm-dt-finite-trace-pairing-cyclicity]]: the finite trace cycles rectangular and square matrix products.

## Proof

1.1 The square root $\sigma^{1/2}$ exists by [F2] and is invertible because $\sigma>0$. Thus $\langle A,A\rangle_\sigma=\operatorname{Tr}((A\sigma^{1/2})^*(A\sigma^{1/2}))>0$ for every nonzero $A$. Linearity in the first variable is immediate, and cyclicity [F3] gives Hermitian symmetry; hence the displayed form is a positive-definite inner product. [given, F2, F3, algebra]

2.1 For the Hamiltonian term, cyclicity in [F3] gives $\operatorname{Tr}(-i[H_{\rm s},X]A/\hbar)=\operatorname{Tr}(X\,i[H_{\rm s},A]/\hbar)$. Indeed, $\operatorname{Tr}(H_{\rm s}XA)=\operatorname{Tr}(XA H_{\rm s})$ and $\operatorname{Tr}(XH_{\rm s}A)$ is already in the desired input-first order. [given, F1, F3, step 1.1, algebra]

3.1 For each jump matrix, $\operatorname{Tr}(L_jXL_j^*A)=\operatorname{Tr}(X L_j^* A L_j)$. The first anticommutator term satisfies $\operatorname{Tr}(L_j^*L_jXA)=\operatorname{Tr}(X A L_j^*L_j)$ by cyclicity, and the second is already $\operatorname{Tr}(X L_j^*L_j A)$. Thus the trace-dual dissipator is exactly the displayed $D$. Substituting $A=I$ cancels $L_j^*L_j-\frac12(L_j^*L_j+L_j^*L_j)=0$ term by term, so $D(I)=0$. [given, F1, F3, step 2.1, algebra] ∎

## Remarks

The cited Alicki–Lendi convention uses the same dissipative self-adjointness condition with the Hamiltonian part separated. Its inner product is written conjugate-linear in the first variable; swapping the two slots and conjugating gives the first-linear convention used here, without changing self-adjointness. Carlen–Maas explicitly distinguish the GNS inner product from the KMS inner product. No equivalence with another detailed-balance convention is assumed.
