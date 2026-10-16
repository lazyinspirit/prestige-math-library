---
id: thm-qc-teleportation-equiprobable-outcomes
kind: theorem
title: Teleportation outcomes are equiprobable
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 11
deps:
  - thm-qc-teleportation-bell-expansion
  - alg-qc-teleportation
  - def-qc-projective-measurement
  - def-qc-density-operator
  - thm-qc-projective-measurement-outcome-law
  - def-qc-tensor-register-and-permutation
  - def-qc-register-and-computational-basis
  - thm-qc-computational-basis-orthonormal
  - def-qc-pauli-matrices
  - def-trace-of-an-endomorphism
justified_by: []
proof_strategy: direct
axiom_use: "None; the measurement has four explicitly listed outcomes and all sums are finite."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §6.3.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "Chapter 6, §6.3.1, Example 6.50."
    - title: "Richard Cleve, Quantum Information Processing course notes for QIC 710 / CS 768 / PHYS 767 / CO 681 / AMATH 871 / PMATH 871, version dated October 13, 2026"
      url: "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf"
      locator: "§10.3, equation (139), PDF p.84."
---

## Statement

For every normalized input qubit vector $|\psi\rangle$, the projective
measurement of the first two wires after the pre-measurement gates in
[[alg-qc-teleportation]] has
$\Pr[(a,b)]=1/4$ for each $(a,b)\in\{0,1\}^2$.

## Facts & Assumptions

**Given:** A normalized input vector $|\psi\rangle$ and the ordered wires
$A,B,C$ of the teleportation procedure.

[A1] $\langle\psi,\psi\rangle=1$.

[F1] [[thm-qc-teleportation-bell-expansion]] gives the post-gate vector as $\frac12\sum_{a,b}|ab\rangle_{AB}\otimes X^bZ^a|\psi\rangle_C$.

[F2] [[def-qc-projective-measurement]] defines finite orthogonal projectors summing to the identity and assigns outcome weight $p_\rho(a)=\operatorname{tr}(\rho P_a)$ to a density operator.

[F3] [[thm-qc-projective-measurement-outcome-law]] states that these weights lie in $[0,1]$ and sum to one.

[F4] [[def-qc-tensor-register-and-permutation]] fixes the lexicographic product-basis order for the three qubit wires.

[F5] [[def-qc-register-and-computational-basis]] defines each qubit register as $Q_2=\mathbb C^2$ with ordered basis $|0\rangle,|1\rangle$.

[F6] [[def-qc-pauli-matrices]] gives the exact matrices $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$.

[F7] [[def-trace-of-an-endomorphism]] defines trace as the sum of diagonal matrix entries in a chosen basis.

[F8] [[thm-qc-computational-basis-orthonormal]] proves that the ordered computational basis of each qubit factor is orthonormal.

[F9] [[def-qc-density-operator]] defines a density operator as a non-negative operator with trace one.

## Proof

1.1 For each $(a,b)$, let $P_{ab}$ be the diagonal projection onto the two basis vectors $|ab0\rangle,|ab1\rangle$ of the ordered three-wire register. These four projections are self-adjoint idempotents, their ranges are pairwise orthogonal, and their sum is the identity because the eight orthonormal computational basis vectors from [F8] are partitioned by their first two bits. Hence they form a projective measurement as in [F2]. [given, F2, F4, F5, F8, algebra]

1.2 Write the post-gate vector in [F1] as $\Omega=\sum_i c_i e_i$ in the orthonormal basis [F4]. For the matrix $\rho$ with entries $\rho_{ij}=c_i\overline{c_j}$, self-adjointness is immediate; for any coordinate vector $z$, $\langle\rho z,z\rangle=|\sum_j z_j\overline{c_j}|^2\ge0$. The matrix [F6] sends $(\alpha,\beta)$ to $(\beta,\alpha)$ under $X$ and to $(\alpha,-\beta)$ under $Z$, so each preserves $|\alpha|^2+|\beta|^2$ and every $X^bZ^a$ preserves norm. The branch vectors in [F1] have orthogonal $AB$ labels, hence $\operatorname{tr}(\rho)=\sum_i|c_i|^2=\|\Omega\|^2=\|\psi\|^2=1$ by [A1] and [F7]. Thus $\rho$ is a density operator by [F9], since the preceding calculation establishes nonnegativity and trace one. [given, A1, F1, F2, F4, F6, F7, F9, algebra]

2.1 By [F2] and [F7], the probability weight of label $(a,b)$ is $\operatorname{tr}(\rho P_{ab})=|c_{ab0}|^2+|c_{ab1}|^2$, the sum of the two diagonal entries selected by $P_{ab}$. The branch vector in [F1] has these two coefficients equal to those of $\frac12X^bZ^a|\psi\rangle$, so this sum is $\frac14\|X^bZ^a\psi\|^2$. [step 1.1, step 1.2, F1, F2, F7, algebra]

3.1 The matrices in [F6] are unitary: direct multiplication gives $X^*X=I$ and $Z^*Z=I$. Hence $\|X^bZ^a\psi\|^2=\|\psi\|^2=1$, so every weight in step 2.1 is $1/4$. By [F3] these are the outcome probabilities, and the four weights sum to one. [A1, step 2.1, F3, F6, algebra] ∎
