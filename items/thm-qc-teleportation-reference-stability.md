---
id: thm-qc-teleportation-reference-stability
kind: theorem
title: Teleportation preserves a finite reference
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 12
deps:
  - thm-qc-teleportation-bell-expansion
  - thm-qc-teleportation-correction-identity
  - def-qc-tensor-register-and-permutation
  - def-qc-tensor-map
  - def-qc-pauli-matrices
  - def-qc-projective-measurement
  - def-qc-density-operator
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-projective-conditional-state
  - def-trace-of-an-endomorphism
  - thm-qc-computational-basis-orthonormal
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
justified_by: []
proof_strategy: direct
axiom_use: "None; the argument uses finite tensor bases and linearity, with no choice principle."
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information (2018), §6.3.1"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
      locator: "Chapter 6, §6.3.1, Theorem 6.47 and Example 6.50."
    - title: "Richard Cleve, Quantum Information Processing course notes for QIC 710 / CS 768 / PHYS 767 / CO 681 / AMATH 871 / PMATH 871, version dated October 13, 2026"
      url: "https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf"
      locator: "§10.3, discussion following equation (140), PDF p.85."
---

## Statement

Let $R$ be any finite-dimensional complex inner-product space and let
$|\Psi\rangle_{AR}$ be any normalized vector on $Q_2\otimes R$, with no
product-state assumption. Run teleportation on $A$ using a shared
$|\Phi^+\rangle_{BC}$, keeping the global wire order $A,B,C,R$ and applying
the canonical ordered tensor identifications. For every measured label $(a,b)$,
the corrected joint vector on $C\otimes R$ is exactly
$|\Psi\rangle_{CR}$, with $A$ relabelled as the output wire $C$.

## Facts & Assumptions

**Given:** A finite-dimensional reference space $R$, a normalized vector
$|\Psi\rangle_{AR}$, the Bell resource on $B,C$, and the teleportation
measurement and correction.

[A1] $|\Psi\rangle_{AR}$ is an arbitrary normalized vector; it need not factor as a vector on $A$ times one on $R$.

[F1] [[def-qc-tensor-register-and-permutation]] defines the ordered product basis and the wire-permutation map for finite tensor registers.

[F2] [[def-qc-tensor-map]] defines $T\otimes S$ on elementary tensors by $(T\otimes S)(x\otimes y)=Tx\otimes Sy$ and extends it linearly.

[F3] [[thm-qc-teleportation-bell-expansion]] gives the branch expansion $\frac12\sum_{a,b}|ab\rangle\otimes X^bZ^a|\psi\rangle$ for every qubit vector.

[F4] [[thm-qc-teleportation-correction-identity]] proves $Z^aX^bX^bZ^a=I$ for each pair of bits.

[F5] [[def-qc-projective-measurement]] defines finite projective measurement weights by $p_\rho(a)=\operatorname{tr}(\rho P_a)$.

[F6] [[thm-qc-projective-measurement-outcome-law]] states that the weights of a finite projective measurement are probabilities.

[F7] [[thm-qc-projective-conditional-state]] states that when $p_a>0$, the conditional state is $P_a\rho P_a/p_a$.

[F8] [[def-trace-of-an-endomorphism]] defines trace as the sum of diagonal entries in a basis.

[F9] [[def-qc-pauli-matrices]] gives the exact $X,Z$ matrices, which preserve the qubit norm.

[F10] [[thm-qc-computational-basis-orthonormal]] proves that the ordered computational basis of each qubit factor is orthonormal.

[F11] Since $R$ is finite-dimensional, it has a finite ordered orthonormal basis by [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]. If $R=\{0\}$, no normalized vector on $Q_2\otimes R$ exists, so the theorem has no instance in that case.

[F12] [[def-qc-density-operator]] defines a density operator as a non-negative operator with trace one.

## Proof


1.1 For any instance of the theorem, choose an ordered orthonormal basis $\mathcal E_R=(e_j)_{j<d}$ of $R$ using [F11]. This supplies the reference-factor basis required by [F1]; together with the qubit computational bases, it gives product bases for the initial order $A,R,B,C$ and the stated global order $A,B,C,R$. Write $|\Psi\rangle_{AR}=\sum_{j<d}|\psi_j\rangle_A\otimes e_j$, where $|\psi_j\rangle=\alpha_j|0\rangle+\beta_j|1\rangle$. The canonical wire permutation in [F1] sends the initial vector to $\sum_j|\psi_j\rangle_A\otimes|\Phi^+\rangle_{BC}\otimes e_j$. By [F3], for each (not necessarily normalized) qubit vector $|\psi_j\rangle$, the pre-measurement gates give $\frac12\sum_{a,b}|ab\rangle_{AB}\otimes X^bZ^a|\psi_j\rangle_C$. Tensoring these identities with $e_j$ using [F2] and summing yields $$|\Omega\rangle_{ABCR}=\frac12\sum_{a,b}|ab\rangle_{AB}\otimes (X^bZ^a\otimes I_R)|\Psi\rangle_{CR}.$$ [A1, F1, F2, F3, F11, algebra]

2.1 Define $P_{ab}$ on $A,B,C,R$ as the diagonal projection onto product-basis vectors whose first two bits are $ab$. These four projections form a PVM because they partition the product basis from step 1.1; that product basis is orthonormal by [F1] and [F10]. Write $|\Omega\rangle=\sum_i c_i e_i$ in this basis and define $\rho_{ij}=c_i\overline{c_j}$. This rank-one matrix is self-adjoint and has nonnegative quadratic form $\langle\rho z,z\rangle=|\sum_j z_j\overline{c_j}|^2$. For each label, write $|\chi_{ab}\rangle=(X^bZ^a\otimes I_R)|\Psi\rangle$. The product inner product and the chosen basis of $R$ give $$\|\chi_{ab}\|^2=\sum_{j<d}\|X^bZ^a|\psi_j\rangle\|^2=\sum_{j<d}\|\psi_j\|^2=\|\Psi\|^2=1,$$ since [F9] shows that $X$ and $Z$ each preserve the qubit norm. The four $AB$ labels in step 1.1 are orthogonal, so $\|\Omega\|^2=\frac14\sum_{a,b}\|\chi_{ab}\|^2=1$. Thus [F8] gives $\operatorname{tr}(\rho)=\sum_i|c_i|^2=1$, and $\rho$ is a density operator by [F12]. The weight $\operatorname{tr}(\rho P_{ab})$ is the sum of the diagonal entries selected by $P_{ab}$, equal to $\|P_{ab}|\Omega\rangle\|^2=\frac14$; by [F6] these weights are probabilities. [A1, step 1.1, F1, F5, F6, F8, F9, F10, F12, algebra]

3.1 Applying $P_{ab}$ to step 1.1 gives $\frac12|ab\rangle\otimes|\chi_{ab}\rangle$. Since $\|\chi_{ab}\|=1$ by step 2.1, this projected vector has norm $1/2$ and its normalized branch vector is exactly $|ab\rangle\otimes|\chi_{ab}\rangle$. Equivalently, [F7] gives conditional density $|ab\rangle\langle ab|_{AB}\otimes|\chi_{ab}\rangle\langle\chi_{ab}|_{CR}$ after division by the outcome weight $1/4$. Thus the conditional vector on $C\otimes R$ before Bob's correction is $|\chi_{ab}\rangle$. [step 1.1, step 2.1, F7, algebra]

4.1 Bob's correction acts on the $C$ factor as $Z^aX^b$. By [F2] and [F4], on every elementary tensor $x_C\otimes r_R$ its composition with $X^bZ^a\otimes I_R$ is $x_C\otimes r_R$; elementary tensors span by [F1], so it fixes the whole joint vector $|\Psi\rangle_{CR}$. The corrected normalized branch vector is therefore $|ab\rangle_{AB}\otimes|\Psi\rangle_{CR}$, whose $C\otimes R$ factor is exactly the original input vector for every label. [step 3.1, F1, F2, F4, algebra] ∎

