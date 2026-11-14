---
id: alg-qec-distinguishability-numerical-method
kind: algorithm
domain: physics
title: Lindbladian exponentiation and Choi Kraus extraction
status: draft
origin: session
deps:
  - post-qec-distinguishability-equal-rate-model
  - post-qec-distinguishability-atomic-lift
  - def-qec-distinguishability-kraus-rank
  - def-qec-distinguishability-qec-matrix
  - thm-qec-distinguishability-transpose-fidelity
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-finite-gksl-channel-interface
  - def-qec-prereq-liouville-choi-reshuffle
  - lem-qec-prereq-rotation-covariance-sectors
  - def-qec-prereq-spectral-threshold-protocol
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
formulation_deps:
  - post-qec-distinguishability-equal-rate-model
  - post-qec-distinguishability-atomic-lift
  - def-qec-distinguishability-kraus-rank
  - def-qec-distinguishability-qec-matrix
  - thm-qec-distinguishability-transpose-fidelity
  - def-qec-prereq-finite-gksl-channel-interface
  - def-qec-prereq-liouville-choi-reshuffle
  - lem-qec-prereq-rotation-covariance-sectors
  - def-qec-prereq-spectral-threshold-protocol
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
argument_deps:
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-finite-gksl-channel-interface
  - def-qec-prereq-liouville-choi-reshuffle
  - thm-qec-distinguishability-transpose-fidelity
  - def-qec-prereq-spectral-threshold-protocol
dependency_roles:
  post-qec-distinguishability-equal-rate-model: physical-assumption
  post-qec-distinguishability-atomic-lift: physical-assumption
  def-qec-distinguishability-kraus-rank: mathematical-premise
  def-qec-distinguishability-qec-matrix: mathematical-premise
  thm-qec-distinguishability-transpose-fidelity: mathematical-premise
  lem-qec-prereq-canonical-choi-weights: mathematical-premise
  def-qec-prereq-finite-gksl-channel-interface: mathematical-premise
  def-qec-prereq-liouville-choi-reshuffle: mathematical-premise
  lem-qec-prereq-rotation-covariance-sectors: mathematical-premise
  def-qec-prereq-spectral-threshold-protocol: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-countable-choice: mathematical-premise
  math:def-dependent-choice: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 17, Numerical method, final sentence
      statement: For the small systems considered, the authors directly exponentiate
        the full Lindbladian and extract Kraus operators from the resulting
        channel's Choi matrix, although the preceding passage describes a sector
        decomposition.
      hypotheses: The article's finite numerical models and the procedure described in
        the Numerical method passage.
      reading_limits: The supplied extracted text of PDF page 17 was read. This
        reference attributes the article's procedure; its cited references were
        not independently read, and no numerical calculation was replayed.
physical_scope: Finite idealized emitter models with the stated physical
  assumptions; outputs are model quantities, not laboratory observations.
dependency_level: 15
---

## Definition

The inputs are a finite nonzero physical Hilbert space $H_P$ with an ordered orthonormal basis $(e_i)_{i=1}^{d}$, a Hermitian Hamiltonian $H$, a finite family of jump operators $L_a$ on $H_P$, and one or more evolution times $t\geq0$. For the article's benchmark, use the finite emitter, downward jumps, equal-rate rigid-rotor parameters and phenomenological diagonal lift specified by the two model postulates, with all their physical, spectral and choice hypotheses. The lift is an assumed model term, not an observed measurement. Define the Lindbladian, a linear map on operators, by $\mathcal L(X)=-i[H,X]+\sum_a(L_aXL_a^\dagger-\{L_a^\dagger L_a,X\}/2)$, in units with $\hbar=1$; $[A,B]=AB-BA$ and $\{A,B\}=AB+BA$.

For each input time, form the full Liouville matrix $L$ of $\mathcal L$ in the ordered matrix-unit basis $E_{ij}=|e_i\rangle\langle e_j|$ and calculate $S=e^{tL}$. Construct the input-first, unnormalized Choi matrix $J$ by the index reshuffle $J_{(i,k),(j,l)}=S_{(k,l),(i,j)}$. Diagonalize $J$ and, for each positive eigenvalue $\lambda_k$ with a chosen orthonormal eigenvector $v_k$, reshape $\sqrt{\lambda_k}v_k$ into $K_k$ using $\sum_i e_i\otimes K_ke_i=\sqrt{\lambda_k}v_k$. Output the resulting canonical Kraus operators and their weights $w_k=\operatorname{Tr}(K_k^\dagger K_k)=\lambda_k$. The Choi matrix is unnormalized: its trace is $d$. The operators may depend on the eigenbasis chosen in a degenerate eigenspace.

For a supplied isometric code $V:\mathbb C^{d_L}\to H_P$, with $d_L\geq1$, optionally form the quantum-error-correction matrix $M_{[\mu,k],[\nu,l]}=\langle\mu|V^\dagger K_k^\dagger K_lV|\nu\rangle$. Output the transpose-recovery entanglement fidelity at the maximally mixed logical input as $d_L^{-2}\|\operatorname{Tr}_L\sqrt M\|_F^2$: $\operatorname{Tr}_L$ contracts the logical indices and $\|B\|_F^2=\sum_{k,l}|B_{kl}|^2$. Entanglement fidelity is the overlap of a maximally entangled logical-reference state with its image after the encoded channel and support-completed transpose recovery.

The exact Kraus rank is the number of positive Choi eigenvalues. If a numerical threshold is used, instead report the strict count of estimated eigenvalues above the specified positive threshold, the Choi normalization, the estimates and treatment of negative estimates; record any certified eigenvalue error bound, or state that it is unknown. A threshold count alone does not determine exact rank. The instructions describe the exact target operations; a floating-point implementation produces approximations and requires its own error assessment.

The article uses the full matrix for its small systems even though, when the Hamiltonian is diagonal in $J_z$ and each jump has a definite $J_z$ weight, operator sectors spanned by matrix units with fixed magnetic-label difference are invariant and can be evolved separately. This item neither performs the calculation nor asserts a measured result, numerical convergence, or replication of the article's figures.

## Facts & Assumptions

[F1] For a finite Hermitian Hamiltonian and finite jump family, the displayed GKSL generator has a well-defined exponential that is a completely positive trace-preserving channel for $t\geq0$. [[def-qec-prereq-finite-gksl-channel-interface]]

[F2] In the stated matrix-unit and input-first conventions, the Liouville matrix of the exponential is $e^{tL}$ and its Choi entries are obtained by the displayed reshuffle. [[def-qec-prereq-liouville-choi-reshuffle]]

[F3] Positive Choi eigenpairs yield a Kraus representation by the displayed reshaping, its weights are the positive eigenvalues, and their number is the minimum Kraus-representation size. [[lem-qec-prereq-canonical-choi-weights]] [[def-qec-distinguishability-kraus-rank]]

[F4] For an isometric finite-dimensional code and a channel with a finite Kraus family, the stated QEC-matrix formula gives the entanglement fidelity of support-completed transpose recovery, including singular matrices. [[def-qec-distinguishability-qec-matrix]] [[thm-qec-distinguishability-transpose-fidelity]]

[F5] The threshold protocol distinguishes exact rank from a numerical threshold count and gives conditional bounds when certified eigenvalue errors are supplied. [[def-qec-prereq-spectral-threshold-protocol]]

[F6] A diagonal Hamiltonian and definite-weight jumps give invariant operator-weight sectors under the stated rotation conventions. [[lem-qec-prereq-rotation-covariance-sectors]]

[A1] For the benchmark application assume the equal-rate finite emitter and the diagonal lift, including their stated physical and spectral hypotheses, and assume the Axiom of Choice, Countable Choice and Dependent Choice required by those interfaces. [[post-qec-distinguishability-equal-rate-model]] [[post-qec-distinguishability-atomic-lift]] [[math:def-axiom-of-choice]] [[math:def-countable-choice]] [[math:def-dependent-choice]]

## Justification

**Given:** The finite matrices, ordered basis, nonnegative times and, when fidelity is requested, the isometric code specified above.

**Goal:** Explain why the exact operations define the stated channel representation and optional fidelity.

1.1 By [F1], the exponential defines a channel. Its Liouville matrix and Choi matrix have the stated relationship by [F2]. Applying [F3] to that finite channel gives the Kraus family, its weights and exact rank; choosing an eigenbasis resolves the nonuniqueness within repeated eigenspaces. [given, F1, F2, F3]

2.1 For the optional code, the hypotheses of [F4] hold for the channel and Kraus family from step 1.1, giving the displayed fidelity even in the singular case. The distinction between exact and thresholded counts and the conditional status of any error bounds are as in [F5]. The full-matrix instruction is well defined independently of a sector decomposition; [F6] describes the alternative only when its hypotheses hold. Thus the outputs are defined under the stated inputs, without asserting numerical accuracy or a physical observation. [given, F4, F5, F6, step 1.1] ∎
