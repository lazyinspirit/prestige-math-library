---
id: thm-qsm-models-dimer-entanglement
kind: theorem
title: "Finite Pauli dimer spectrum and exact separability threshold"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-qsm-pauli-two-qubit-conventions
  - lem-qsm-pauli-dimer-spectrum
  - def-qsm-finite-two-qubit-state-and-separability
  - lem-qsm-qubit-bloch-ball
  - lem-qsm-pauli-separable-correlation-bound
  - lem-qsm-pauli-boundary-mixture
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - thm-natural-logarithm-laws
dependency_roles:
  def-qsm-pauli-two-qubit-conventions: mathematical-premise
  lem-qsm-pauli-dimer-spectrum: mathematical-premise
  def-qsm-finite-two-qubit-state-and-separability: mathematical-premise
  lem-qsm-qubit-bloch-ball: mathematical-premise
  lem-qsm-pauli-separable-correlation-bound: mathematical-premise
  lem-qsm-pauli-boundary-mixture: mathematical-premise
  def-natural-logarithm: mathematical-premise
  def-real-exponential-function-and-e: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Doron Cohen, Lecture Notes in Statistical Mechanics and Mesoscopics, §2.3"
      url: "https://physics.bgu.ac.il/~dcohen/ARCHIVE/sqm.pdf"
    - title: "Damian Markham, Janet Anders, Vlatko Vedral, Mio Murao, and Akimasa Miyake, Survival of entanglement in thermal states, Example 1"
      url: "https://arxiv.org/pdf/quant-ph/0606103"
---

## Statement

Use $C$ from [[def-qsm-pauli-two-qubit-conventions]], with singlet projection $P_s=|s\rangle\langle s|$ and triplet projection $P_t=I_4-P_s$, where $s=(e_0\otimes e_1-e_1\otimes e_0)/\sqrt2$. For each dimensionless $x\ge0$, define the finite two-qubit density matrix
$$\rho_x:=\frac{e^{3x}P_s+e^{-x}P_t}{e^{3x}+3e^{-x}}.$$
Then $\rho_x$ is separable exactly when $x\le(\log 3)/4$, and it is entangled exactly when $x>(\log 3)/4$. In particular, the equality state at $x=(\log 3)/4$ is separable.

## Facts & Assumptions

**Given:** The Pauli matrices and exchange operator, the singlet/triplet eigenspaces, the finite density and separability definitions, and the dimensionless parameter $x\ge0$.

[F1] [[lem-qsm-pauli-dimer-spectrum]] and [[def-qsm-pauli-two-qubit-conventions]]: the singlet $s$ is a unit vector, the three triplets form an orthonormal basis of $s^\perp$, and $C$ has eigenvalue $-3$ on $s$ and eigenvalue $1$ on that triplet space. The rank-one convention gives $P_sx=\langle x,s\rangle s$, so $P_s$ is the orthogonal projection onto $\mathbb C s$ and $P_t=I_4-P_s$ is the orthogonal projection onto the triplet space; their ranks are one and three.

[F2] [[def-qsm-finite-two-qubit-state-and-separability]]: a density matrix is Hermitian, positive semidefinite, and has trace one.

[F3] [[lem-qsm-qubit-bloch-ball]]: the Bloch-coordinate matrix with vector $a=0$ is the positive trace-one matrix $I_2/2$.

[F4] [[def-qsm-finite-two-qubit-state-and-separability]]: a separable two-qubit density matrix is a finite convex combination of product qubit density matrices.

[F5] [[lem-qsm-pauli-separable-correlation-bound]]: every separable two-qubit density matrix has $\operatorname{tr}(\rho C)\ge-1$.

[F6] [[lem-qsm-pauli-boundary-mixture]]: $\rho_*=\tfrac14(I_4-C/3)$ is separable.

[F7] [[def-natural-logarithm]], [[def-real-exponential-function-and-e]], and [[thm-natural-logarithm-laws]]: $\log$ is the inverse of the strictly increasing real exponential on positive reals, so $e^{4x}>3$ is equivalent to $x>(\log3)/4$.

## Proof

1.1 The projections $P_s,P_t$ are orthogonal and have ranks one and three by [F1]. Their weighted sum in the definition of $\rho_x$ is therefore positive, and its trace is $e^{3x}+3e^{-x}>0$; division normalizes its trace to one. By [F2] this is a two-qubit density matrix. Its singlet probability is $p_s=e^{3x}/(e^{3x}+3e^{-x})=e^{4x}/(e^{4x}+3)$. [given, F1, F2, algebra]

2.1 Using the two eigenvalues in [F1], $\operatorname{tr}(\rho_xC)=-3p_s+(1-p_s)=1-4p_s=3(1-e^{4x})/(e^{4x}+3)=:c$. For $x\ge0$, $e^{4x}\ge1$, hence $-3\le c\le0$, and $c<-1$ exactly when $e^{4x}>3$, equivalently $x>(\log3)/4$ by [F7]. [given, F1, F7, step 1.1, algebra]

3.1 If $x>(\log3)/4$, step 2.1 gives $\operatorname{tr}(\rho_xC)=c<-1$. This contradicts the lower bound [F5] satisfied by every separable state, so $\rho_x$ is entangled. [given, F5, step 2.1]

4.1 If $0\le x\le(\log3)/4$, step 2.1 gives $-1\le c\le0$. The spectral projections in [F1] give $\rho_x=\tfrac14(I_4+(c/3)C)$; substituting [F6] yields $\rho_x=(-c)\rho_*+(1+c)I_4/4$. Both coefficients are nonnegative and sum to one; [F3] makes $I_2/2$ a qubit density matrix, so $I_4/4=(I_2/2)\otimes(I_2/2)$ is a product density matrix. Thus [F4] and [F6] make $\rho_x$ separable, including at equality $c=-1$. [given, F1, F3, F4, F6, step 2.1, algebra] ∎
