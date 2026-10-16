---
id: thm-qc-pattern-branch-probabilities-and-zero-branches
kind: theorem
title: "Pattern branch probabilities and zero-probability transcripts"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qc-adaptive-measurement-pattern, def-qc-pure-state-and-ray, def-qc-density-operator, def-qc-projective-measurement, def-qc-instrument-and-conditional-state, def-qc-controlled-phase-rotation, def-qc-register-and-computational-basis, thm-qc-computational-basis-orthonormal, def-qc-tensor-register-and-permutation, def-qc-tensor-map, def-trace-of-an-endomorphism, thm-trace-of-ab-equals-trace-of-ba, def-qc-dirac-notation-conversion, thm-qc-dirac-notation-coordinate-identity, def-non-negative-and-positive-operator, thm-non-negative-operator-characterisations, def-qc-j-gate-and-equatorial-basis, lem-qc-j-basis-and-phase-identities]
justified_by: []
dependency_level: 10
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, arXiv:1907.09415, §§20.2–20.3 and §20.6"
      url: https://arxiv.org/pdf/1907.09415
    - title: "Robert Raussendorf, Daniel E. Browne, and Hans J. Briegel, Measurement-based quantum computation on cluster states, §§II D–F, pp. 8–16"
      url: https://arxiv.org/pdf/quant-ph/0301052
---

## Statement

For a finite adaptive pattern with transcript branch maps $K_{\mathbf b}$, a
normalized pure input $|\psi\rangle$ has
$p_{\mathbf b}=\|K_{\mathbf b}|\psi\rangle\|^2$ and
$\sum_{\mathbf b}p_{\mathbf b}=1$. For a density operator $\rho$, the branch
probability is $p_{\mathbf b}=\operatorname{tr}(K_{\mathbf b}\rho
K_{\mathbf b}^\dagger)$ and these probabilities also sum to one. A transcript
with $p_{\mathbf b}=0$ is impossible and has no normalized conditional output;
normalization is defined only for positive-probability branches.

## Facts & Assumptions

**Given:** A finite pattern with $q$ ordered binary projective measurements
and a normalized pure or mixed input state.

[F1] The pattern Definition fixes the ordered input embedding, graph edge unitary, transcript-dependent measurement bases, branch maps, and output restriction ([[def-qc-adaptive-measurement-pattern]]).

[F2] At each transcript prefix, the chosen pair $\{|b\rangle_\alpha:b=0,1\}$ is an orthonormal basis, so its rank-one projectors sum to the identity ([[def-qc-j-gate-and-equatorial-basis]], [[lem-qc-j-basis-and-phase-identities]], [[def-qc-projective-measurement]]).

[F3] A density operator is nonnegative and has trace one ([[def-qc-density-operator]]).

[F4] Trace is basis-independent and cyclic for conformable finite-dimensional maps ([[def-trace-of-an-endomorphism]], [[thm-trace-of-ab-equals-trace-of-ba]]).

[F5] Every nonnegative operator on a finite-dimensional inner-product space has an orthonormal eigenbasis with nonnegative real eigenvalues ([[def-non-negative-and-positive-operator]], [[thm-non-negative-operator-characterisations]]).

[F6] A pure state represented by a unit vector $u$ has rank-one operator $|u\rangle\langle u|$, whose coordinate matrix is $uu^\dagger$ ([[def-qc-pure-state-and-ray]], [[def-qc-dirac-notation-conversion]], [[thm-qc-dirac-notation-coordinate-identity]]).

[F7] For an instrument, the conditional output is normalized only when its branch weight is positive; at zero weight it is $\bot$, not a state ([[def-qc-instrument-and-conditional-state]]).

[F8] Each controlled-phase edge gate is unitary, the computational basis is
orthonormal, and tensoring with the prepared unit $|+\rangle$ ancillas is an
isometry ([[def-qc-controlled-phase-rotation]],
[[def-qc-register-and-computational-basis]],
[[thm-qc-computational-basis-orthonormal]],
[[def-qc-tensor-register-and-permutation]]).

## Proof


1.1 For $0\le j\le q$, put $R_j:=V\setminus\{m_1,\ldots,m_j\}$ and let $\Pi_j:\mathcal H_V\to\mathcal H_{m_1}\otimes\cdots\otimes \mathcal H_{m_j}\otimes\mathcal H_{R_j}$ be the wire permutation listing the first $j$ measured vertices in measurement order and the remainder in inherited order. For a prefix $\mathbf c=(c_1,\ldots,c_j)$, let $B_{\mathbf c}:=\bigotimes_{t=1}^j{}_{\alpha_t(c_{<t})}\!\langle c_t|_{m_t}$ be the tensor map of its linear measurement bras, with its scalar output $\mathbb C^{\otimes j}$ identified with $\mathbb C$, and define $K_{\mathbf c}:=(B_{\mathbf c}\otimes I_{R_j})\Pi_jU_G\iota_I: \mathcal H_I\to\mathcal H_{R_j}$. For $j=0$, the empty tensor map and permutation are identities, so $K_\emptyset=U_G\iota_I$. If $j<q$, let $Q_{j+1}:\mathcal H_{R_j}\to\mathcal H_{m_{j+1}}\otimes\mathcal H_{R_{j+1}}$ list the next measured vertex first, and put $L_{b|\mathbf c}:=({}_{\alpha_{j+1}(\mathbf c)}\!\langle b|_{m_{j+1}} \otimes I_{R_{j+1}})Q_{j+1}$. Under canonical associations, $B_{\mathbf c b}=B_{\mathbf c}\otimes {}_{\alpha_{j+1}(\mathbf c)}\!\langle b|_{m_{j+1}}$ and $\Pi_{j+1}=(I_{\mathcal H_{m_1}\otimes\cdots\otimes\mathcal H_{m_j}} \otimes Q_{j+1})\Pi_j$. Tensor-map factorwise action and permutation composition therefore give $K_{\mathbf c b}=L_{b|\mathbf c}K_{\mathbf c}$. At $j=q$, $R_q=O$, $\Pi_q=\Pi_{M,O}$, and this recursive map is exactly the full branch map in the Definition. Set $\sigma_{\mathbf c}:=K_{\mathbf c}\rho K_{\mathbf c}^\dagger$. At the root it is nonnegative since it is a congruence of $\rho$ by $U_G\iota_I$. At every prefix, nonnegativity of $\sigma_{\mathbf c}$ gives $\langle L_{b|\mathbf c}\sigma_{\mathbf c}L_{b|\mathbf c}^\dagger v,v\rangle =\langle\sigma_{\mathbf c}L_{b|\mathbf c}^\dagger v, L_{b|\mathbf c}^\dagger v\rangle\ge0$, so each child state is nonnegative. Orthonormality in [F2] gives $\sum_{b=0}^1L_{b|\mathbf c}^\dagger L_{b|\mathbf c}=I_{R_j}$. By trace cyclicity [F4], the two child traces sum to $\operatorname{tr}(\sigma_{\mathbf c})$. [F1, F2, F3, F4, F8, construct]

2.1 The root state is $U_G\iota_I\rho\iota_I^\dagger U_G^\dagger$, where $\iota_I$ tensors the unit $|+\rangle$ ancillas and $U_G$ is the finite edge-gate product in [F1]. By [F8], $\iota_I^\dagger\iota_I=I$ and $U_G^\dagger U_G=I$; trace cyclicity [F4] therefore gives root trace $\operatorname{tr}(\rho)=1$. Repeatedly applying the trace identity of step 1.1 down the finite binary tree preserves the sum of leaf traces. By the terminal identity in step 1.1, the leaf state is the stated $K_{\mathbf b}\rho K_{\mathbf b}^\dagger$, so $\sum_{\mathbf b}\operatorname{tr}(K_{\mathbf b}\rho K_{\mathbf b}^\dagger)=1$. When there are no measurements, the unique empty transcript has the same trace as this root state. [step 1.1, F1, F3, F4, F8, induction]

3.1 For a pure input $\rho=|\psi\rangle\langle\psi|$, the branch output is $|K_{\mathbf b}\psi\rangle\langle K_{\mathbf b}\psi|$ by [F6], so its trace is $\|K_{\mathbf b}|\psi\rangle\|^2$ by the coordinate formula in [F6]. For a density input the branch probability is the branch-output trace in step 2.1. [step 2.1, F3, F6, algebra]

4.1 Each branch output $K_{\mathbf b}\rho K_{\mathbf b}^\dagger$ is nonnegative because $\langle K_{\mathbf b}\rho K_{\mathbf b}^\dagger v,v\rangle=\langle\rho K_{\mathbf b}^\dagger v,K_{\mathbf b}^\dagger v\rangle\ge0$ by [F3]. Its trace is therefore nonnegative by [F5]. If that trace is zero, the nonnegative eigenvalues in [F5] sum to zero by [F4], so each is zero and the output operator is zero. For a pure input, step 3.1 then gives $K_{\mathbf b}|\psi\rangle=0$. In either case [F7] leaves no normalized conditional state; for positive probability the indicated division is defined. [step 3.1, F3, F4, F5, F7, algebra] ∎

