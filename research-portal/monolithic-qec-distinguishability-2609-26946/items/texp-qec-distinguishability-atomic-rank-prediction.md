---
id: texp-qec-distinguishability-atomic-rank-prediction
kind: thought-experiment
domain: physics
title: Exact and thresholded Kraus ranks for J at most two
status: published
origin: session
deps:
  - post-qec-distinguishability-equal-rate-model
  - post-qec-distinguishability-atomic-lift
  - pthm-qec-distinguishability-zero-temperature-truncation
  - def-qec-distinguishability-effective-rank
  - thm-qec-distinguishability-choi-rank
  - alg-qec-distinguishability-numerical-method
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-spectral-threshold-protocol
  - lem-author-e8d79981fdee-one-jump-dimension
  - lem-author-e8d79981fdee-two-jump-dimension
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
formulation_deps:
  - post-qec-distinguishability-equal-rate-model
  - post-qec-distinguishability-atomic-lift
  - pthm-qec-distinguishability-zero-temperature-truncation
  - def-qec-distinguishability-effective-rank
  - thm-qec-distinguishability-choi-rank
  - alg-qec-distinguishability-numerical-method
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-spectral-threshold-protocol
  - lem-author-e8d79981fdee-one-jump-dimension
  - lem-author-e8d79981fdee-two-jump-dimension
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
argument_deps:
  - post-qec-distinguishability-equal-rate-model
  - post-qec-distinguishability-atomic-lift
  - pthm-qec-distinguishability-zero-temperature-truncation
  - def-qec-distinguishability-effective-rank
  - thm-qec-distinguishability-choi-rank
  - alg-qec-distinguishability-numerical-method
  - lem-qec-prereq-canonical-choi-weights
  - def-qec-prereq-spectral-threshold-protocol
  - lem-author-e8d79981fdee-one-jump-dimension
  - lem-author-e8d79981fdee-two-jump-dimension
  - math:def-axiom-of-choice
  - math:def-countable-choice
  - math:def-dependent-choice
dependency_roles:
  post-qec-distinguishability-equal-rate-model: physical-assumption
  post-qec-distinguishability-atomic-lift: physical-assumption
  pthm-qec-distinguishability-zero-temperature-truncation: physical-result
  def-qec-distinguishability-effective-rank: mathematical-premise
  thm-qec-distinguishability-choi-rank: mathematical-premise
  alg-qec-distinguishability-numerical-method: operational-prerequisite
  lem-qec-prereq-canonical-choi-weights: mathematical-premise
  def-qec-prereq-spectral-threshold-protocol: mathematical-premise
  lem-author-e8d79981fdee-one-jump-dimension: mathematical-premise
  lem-author-e8d79981fdee-two-jump-dimension: mathematical-premise
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
      locator: PDF p. 3 Eqs. (10)-(11), p. 4 Fig. 2 and first two paragraphs
      statement: The article reports exact ranks twelve and eighteen and the
        thresholded rank curves at threshold 10^-8 for the lifted fixed-jump
        model.
      hypotheses: Equal-rate finite J at most two benchmark, prescribed lift and
        unchanged modeled downward jumps.
      reading_limits: Original PDF page 4 image and corresponding extracted text
        inspected; actual equal-rate and lift suppliers read. The analytic
        deduction below is locally authored. No threshold simulation, figure
        digitization, experimental validation or independent review is claimed.
physical_scope: Conditional finite-model prediction with fixed downward jumps
  after lifting; no laboratory observation or microscopic derivation of the
  fixed-jump approximation.
dependency_level: 16
---

## Statement

Use the equal-rate benchmark restricted to the nine-dimensional space $J=0,1,2$, with $\gamma>0$, real $\Delta$, and the prescribed Hamiltonian $H_{\mathcal S}+H_\Delta$. For this prediction adopt the fixed-jump effective GKSL model: the same three downward jump operators, coefficients and rate $\gamma$ are used after the lift is added. Energy shifts alone do not derive this fixed-jump approximation. Carry the Choice, Countable Choice and Dependent Choice assumptions of the physical suppliers.

For this finite model the exact Kraus rank is twelve at $\Delta=0$ and eighteen at $\Delta\ne0$ at every finite $t>0$; at $t=0$ it is one. Here exact rank counts every positive unnormalized Choi eigenvalue, however small. The rank decomposition is one no-jump direction, six or twelve one-jump directions, and five two-jump directions.

Separately, the article's Fig. 2 reports an effective rank, counting canonical weights $w_k=\operatorname{Tr}(K_k^\dagger K_k)>10^{-8}$, for $\Delta/\gamma=0,0.1,1,100$. In its early plotted window the nonzero-lift curves begin at four, can rise to eighteen, and approach nine at long times; the zero-lift curve reaches twelve. These thresholded trajectories are source-reported numerical predictions, not computations replayed here. Four is not the limiting thresholded rank as $t\downarrow0$: for any fixed positive threshold below nine, sufficiently close to zero only the no-jump Choi eigenvalue is above threshold. The limiting complete-decay channel has nine source-to-ground Kraus operators; its rank need not equal the exact rank at finite time.

## Statement references

[[post-qec-distinguishability-equal-rate-model]]

[[post-qec-distinguishability-atomic-lift]]

[[pthm-qec-distinguishability-zero-temperature-truncation]]

[[def-qec-distinguishability-effective-rank]]

[[thm-qec-distinguishability-choi-rank]]

[[alg-qec-distinguishability-numerical-method]]

[[lem-qec-prereq-canonical-choi-weights]]

[[def-qec-prereq-spectral-threshold-protocol]]

[[lem-author-e8d79981fdee-one-jump-dimension]]

[[lem-author-e8d79981fdee-two-jump-dimension]]

[[math:def-axiom-of-choice]]

[[math:def-countable-choice]]

[[math:def-dependent-choice]]

## Facts & Assumptions

[F1] Adopt the finite equal-rate benchmark and its physical applicability hypotheses. [[post-qec-distinguishability-equal-rate-model]]

[F2] Adopt the prescribed diagonal lift, separately from the fixed-jump assumption. [[post-qec-distinguishability-atomic-lift]]

[F3] The complete finite cutoff is invariant for the downward model. [[pthm-qec-distinguishability-zero-temperature-truncation]]

[F4] Effective rank is defined by canonical Kraus weights. [[def-qec-distinguishability-effective-rank]]

[F5] Exact Kraus rank equals Choi rank. [[thm-qec-distinguishability-choi-rank]]

[F6] Exponentiation and Choi extraction specify the numerical procedure; no execution is claimed. [[alg-qec-distinguishability-numerical-method]]

[F7] Canonical weights equal the unnormalized Choi eigenvalues, with trace nine. [[lem-qec-prereq-canonical-choi-weights]]

[F8] Exact rank, strict threshold and numerical tolerances are distinct. [[def-qec-prereq-spectral-threshold-protocol]]

[F9] The finite lowering-matrix model has Choi rank twelve or eighteen for positive finite time, and rank one at zero. [[lem-author-e8d79981fdee-two-jump-dimension]]

[F10] Carry the Axiom of Choice. [[math:def-axiom-of-choice]]

[F11] Carry Countable Choice. [[math:def-countable-choice]]

[F12] Carry Dependent Choice. [[math:def-dependent-choice]]

[F13] For the same finite lowering matrices, the one-jump amplitude span has dimension six at $\Delta=0$ and twelve at $\Delta\ne0$, for every $t>0$. [[lem-author-e8d79981fdee-one-jump-dimension]]

[A1] The fixed-jump continuation after adding the lift is part of the model adopted in the Statement, not a consequence of the lift postulate alone.

## Proof

**Given:** The finite fixed-jump model and hypotheses in the Statement.

**Goal:** Deduce exact ranks, distinguish the thresholded source report and identify the endpoints.

1.1 In the stated fixed-jump model, the benchmark coefficients are exactly $\sqrt\gamma b_{J,m,q}$ from [F13], with $q=\delta$. The rotor energies are $E_J=\omega_0J(J+1)$, and the lift adds $\Delta Jm$. Complete-block invariance permits the $J\leq2$ restriction without adding an artificial top-boundary transition. Apply [F13] to these finite matrices to obtain six one-jump directions at $\Delta=0$ and twelve at $\Delta\ne0$. Apply [F9] to the same matrices for the one no-jump direction, five two-jump directions and total Choi ranks, and [F5] for the asserted exact Kraus ranks. This is a conditional analytic deduction, not evidence for the physical accuracy of fixed jumps after lifting. [given, F1, F2, F3, F5, F9, F10, F11, F12, F13]

1.2 By [F4], [F7] and [F8], effective rank counts only eigenvalues above the stated strict threshold and is bounded above by exact rank. At $t=0$, the identity channel on dimension nine has a single nonzero Choi eigenvalue nine. The finite generator exponential is continuous at zero, so its Choi matrix is continuous there. To see the threshold conclusion without rank continuity, write $Q_t=Q_0+B_t$ with $\|B_t\|\to0$. On the codimension-one subspace perpendicular to the identity vector, every Rayleigh quotient is at most $\|B_t\|$. There cannot be two eigenvalues above $\|B_t\|$, since their two-dimensional span intersects that subspace. The largest eigenvalue is at least $9-\|B_t\|$, by testing the normalized identity vector. This gives effective rank one for sufficiently small time at any fixed threshold in $(0,9)$. It also explains why the displayed early count four is a finite-window statement, not the exact endpoint. [given, F4, F6, F7, F8, algebra]

2.1 Every jump lowers $J$; the total excited population eventually leaves both excited manifolds. In the equal-rate model $p_2(t)=e^{-\gamma t}p_2(0)$ and $p_1(t)=e^{-\gamma t}[p_1(0)+\gamma t p_2(0)]$, by the diagonal block trace equations. Both vanish. Positivity bounds ground–excited and excited–excited coherences by square roots of the respective populations, so each input state's output tends to the ground state; finite linearity extends this to the replacement channel $X\mapsto\operatorname{Tr}(X)|0,0\rangle\langle0,0|$. Its nine matrix-unit Kraus operators are $|0,0\rangle\langle J,m|$, with nine orthogonal vectorizations of norm one. Thus its Choi rank is nine, and for threshold $10^{-8}$ the effective rank is eventually nine by the same spectral perturbation reasoning as step 1.2 around eigenvalues zero and one. This is a limiting statement and does not change step 1.1 at any finite time. [given, F1, F2, F3, F5, F7, F9, step 1.1, step 1.2, algebra] ∎

## Source notes

The thresholded curve shapes and tested parameter values remain attributed to Fig. 2. The local analytic argument establishes exact ranks and endpoint qualifications only; it supplies no certified crossing times or numerical trajectory reproduction. No original-article defect is asserted.
