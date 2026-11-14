---
title: Calibrated fast checks restore ideal rank-one correction
status: published
research_item: pthm-qec-distinguishability-atomic-continuous-checking
dependency_level: 16
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p.5 rapid-checking paragraph; pp.14–16 S4, including general
        diagonal Hamiltonian on p.14, host check on p.15, and final
        calibrated-phase discussion on p.16
      statement: The article asserts calibrated rapid-checking protection for codes
        correcting coherent rank-one transitions, vanishing unknown-jump-time
        residuals, and negligible multiple jumps at fixed total time. S4
        explicitly realizes its check by a host-manifold projector for an
        initial single-J code and discusses general known diagonal lifts. The
        general multiple-block syndrome realization below is a local conditional
        extension, not a protocol verified in the article.
      hypotheses: Ideal fixed-jump effective emitter model, exact correction of the
        relevant coherent errors, known and available deterministic phase
        compensation, and ideal checks. The explicit host-projector calculation
        assumes one initial excited J manifold. The local extension additionally
        states the full identity-and-modeled-jump scalar products for its
        arbitrary finite-support code.
      reading_limits: For this proposal, read the supplied original extracted PDF pp.5
        and14–16, including the S4 opening, single-host measurement, and final
        calibrated-phase discussion. No new image inspection, simulation or
        experiment was performed. This article reference supplies attribution
        and protocol context only; the convergence argument uses the existing
        mathematical decoder and cycle lemmas. No correction property for
        arbitrary codes is inferred from the article's wording.
---

PDF p. 5: ` Rapid-checking discussion before Discussion `; PDF p. 14: ` S4 opening paragraph `; PDF p. 16: ` Final S4 paragraph `

## Prerequisites

- [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)
- [def-qec-distinguishability-rank-one-transitions](item-def-qec-distinguishability-rank-one-transitions)
- [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)
- [lem-qec-author-5cb5859376bb-amplified-trace-sandwich](item-lem-qec-author-5cb5859376bb-amplified-trace-sandwich)
- [lem-qec-author-5cb5859376bb-code-syndrome-decoder](item-lem-qec-author-5cb5859376bb-code-syndrome-decoder)
- [lem-qec-author-5cb5859376bb-calibrated-channel-expansion](item-lem-qec-author-5cb5859376bb-calibrated-channel-expansion)
- [lem-qec-author-5cb5859376bb-unconditional-cycle-branches](item-lem-qec-author-5cb5859376bb-unconditional-cycle-branches)
- [lem-qec-author-5cb5859376bb-continuous-recovery-budget](item-lem-qec-author-5cb5859376bb-continuous-recovery-budget)
- [def-qec-prereq-calibrated-cycle-contract](item-def-qec-prereq-calibrated-cycle-contract)
- [pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)


## Statement

For a code correcting the model’s rank-one transitions, ideal rapid checking and decoding on detection approach perfect protection at fixed total time, provided the lift on finite-dimensional support is bounded and deterministic phases are calibrated and compensated. Single-decay residual distinguishability vanishes and multi-decay events become negligible as $\tau\to0$. The conclusion concerns the ideal channel and checks, with jump amplitudes held fixed.

Precisely, let $H_P$ be the full finite physical space of the fixed-jump model, and let $V:H_L\to H_P$ be an isometry from a nonzero finite-dimensional logical space. Put $E_0=I_{H_P}$, $E_1=L_{-1}$, $E_2=L_0$ and $E_3=L_1$, using the full modeled coherent jumps. In this theorem, correction of the modeled transitions means the pair-product condition $V^\dagger E_a^\dagger E_bV=c_{ab}I_{H_L}$ for every $a,b\in\{0,1,2,3\}$ and some complex scalars $c_{ab}$; equivalently it holds for all pairs in their complex linear span. This is an explicit hypothesis on the chosen code. The code may occupy several spin blocks. In that general case the ideal check uses a full code-syndrome decoder after Hamiltonian phase compensation, followed by re-encoding at every interval; the single-host projector is the source's more specific realization.

## Facts & Assumptions

[F1] Retain the finite fixed-jump model with all inherited physical, spectral and choice hypotheses and an arbitrary bounded known diagonal lift. [post-qec-distinguishability-general-lift-model](item-post-qec-distinguishability-general-lift-model)

[F2] Rank one means a coherent spherical tensor error component, not each magnetic matrix unit. [def-qec-distinguishability-rank-one-transitions](item-def-qec-distinguishability-rank-one-transitions)

[F3] Assume the full identity-and-jump scalar products in the Statement for the chosen isometry $V$, with encoding $\mathcal V(X)=VXV^\dagger$. This hypothesis has exactly the finite-space types and pair-product form required by the decoder; its validity for the code is assumed, not inferred from a selected-target convention. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel) [lem-qec-author-5cb5859376bb-code-syndrome-decoder](item-lem-qec-author-5cb5859376bb-code-syndrome-decoder)

[F4] Trace-norm sandwich estimates are uniform under finite reference extension. [lem-qec-author-5cb5859376bb-amplified-trace-sandwich](item-lem-qec-author-5cb5859376bb-amplified-trace-sandwich)

[F5] Any code satisfying the identity-and-jump scalar products has a complete code-syndrome decoder. [lem-qec-author-5cb5859376bb-code-syndrome-decoder](item-lem-qec-author-5cb5859376bb-code-syndrome-decoder)

[F6] Deterministic Hamiltonian compensation gives a uniform quadratic channel remainder. [lem-qec-author-5cb5859376bb-calibrated-channel-expansion](item-lem-qec-author-5cb5859376bb-calibrated-channel-expansion)

[F7] The full decoded cycle and its probability-weighted null and jump branches have the complete stated bounds. [lem-qec-author-5cb5859376bb-unconditional-cycle-branches](item-lem-qec-author-5cb5859376bb-unconditional-cycle-branches)

[F8] The full CPTP cycle has a fixed-time telescoping budget tending to zero. [lem-qec-author-5cb5859376bb-continuous-recovery-budget](item-lem-qec-author-5cb5859376bb-continuous-recovery-budget)

[F9] Calibrated cycles must weight conditional branch errors by their probabilities and reset through decoded recovery. [def-qec-prereq-calibrated-cycle-contract](item-def-qec-prereq-calibrated-cycle-contract)

[F10] The fixed normalized jumps have scalar total decay operator γ on every excited host block. [pthm-qec-distinguishability-uniform-decay-rate](item-pthm-qec-distinguishability-uniform-decay-rate)

[F11] The absorption–emission error-span convention fixes one input spin block and a selected set of neighboring target blocks containing that input. It imposes pair products only for that selected span and makes no general assertion about a multiple-block code or an omitted downward target. [def-qec-prereq-ae-error-span-contract](item-def-qec-prereq-ae-error-span-contract)

## Proof

**Given:** The fixed finite-support code with the explicit full identity-and-jump scalar products in the Statement, bounded known lift and ideal available phase compensation and syndrome decoding. **Goal:** Prove the complete one-cycle estimate and repeated fixed-time protection without restricting to particular named codes.

1.1 Write $\mathcal E=\operatorname{span}_{\mathbb C}\{E_0,E_1,E_2,E_3\}$ on $H_P$. For $E=\sum_a\alpha_aE_a$ and $F=\sum_b\beta_bE_b$, the assumed products [F3] give $V^\dagger E^\dagger FV=(\sum_{a,b}\overline{\alpha_a}\beta_b c_{ab})I_{H_L}$ by finite expansion. Conversely, the condition for all pairs in $\mathcal E$ includes each generator pair. Thus the full modeled correction hypothesis is well defined and supplies exactly [F5]'s input, independently of the number of occupied spin blocks. It is distinct from merely correcting the selected fixed-host span in [F11]; applying that narrower condition would first require a single-host code and, under the identification of its selected blocks with the physical blocks, an operator in the selected span agreeing with each modeled jump on the code, with the downward target included. Apply [F5] directly to the assumed full generator products to obtain its CPTP decoder, including the code syndrome and a fixed-state completion on unused output ranges, also for a degenerate Gram matrix. The jumps remain coherent tensor components as in [F2]. [F2, F3, F5, F11, algebra]

2.1 At each interval first undo the known deterministic Hamiltonian phase by $e^{iH\tau}$ and then apply that ideal syndrome decoder; re-encode its logical output for the next interval. The resulting CPTP logical cycle is exactly $C_\tau$ in [F7]. Bounded finite parameters in [F1] make the constants of [F6] finite. By [F7], its total reference-extended induced trace-norm error is at most $K\tau^2$, its compensated null contribution differs from $(1-r\tau)I$ by at most $K\tau^2$, and its unnormalized detected trajectory contribution differs from $r\tau I$ by at most $2K\tau^2$. The same recovery operates on both branches; no unknown jump time is supplied to it. [F1, F4, F5, F6, F7, F9, step 1.1]

3.1 In the source's single-host realization, $\sum_aL_a^\dagger L_a=\gamma I$ on the host and every jump leaves it. The exact host-projected null branch is therefore $e^{-\gamma\tau}e^{-iH_{J_0}\tau}\rho e^{iH_{J_0}\tau}$ for any real diagonal lift on that host; compensating its known unitary restores $e^{-\gamma\tau}\rho$. This uses no special linear-in-m lift and confirms the source's null/detected operational interpretation. For a general finite-support code the full Knill–Laflamme syndrome realization in steps 1.1 and 2.1 supplies the complete ideal check. [F1, F5, F7, F10, step 1.1, step 2.1]

4.1 Apply [F8] to $N=T/\tau$ recovered and re-encoded cycles. The total trace-norm error is at most $KT\tau$, including reference entanglement, and the probability of any multi-jump interval is at most $K_2T\tau$. Both vanish as $\tau\to0$ at fixed total time. For a nonzero code rate, [F7] also gives an $O(\tau)$ normalized single-decay residual whose probability-weighted contribution is quadratic; when that rate is zero, its unconditional estimate still applies. These complete branch and channel bounds prove the stated conditional claim. [F7, F8, F9, step 2.1, step 3.1] ∎

## Source notes

The convergence conclusion and all fixed-time, branch and finite-support claims are retained, with the full modeled correction hypothesis now explicit. The local proof uses the existing decoder and complete-cycle bounds. The selected-target absorption–emission definition remains valid in its stated single-host scope and is not used to establish the full-jump condition for arbitrary finite-support codes. No correction claim for a named code is proved here. Calibration means that the known deterministic phase control is available.

The explicit two-outcome host projector in original S4 is a protocol for an input within one host $J$ manifold. For that case, arbitrary real diagonal host lifts have the exact compensated null formula in the proof. For a general finite-support code satisfying the full products, the ideal-check existence conclusion uses the full Knill–Laflamme syndrome decoder and re-encoding. Testing an arbitrary host manifold alone does not define that protocol. The trajectory branches in the bounds are virtual: the same decoder acts on their sum without a jump-count or jump-time observation. All constants concern fixed finite parameters. No uniform large-energy bound, laboratory-control accuracy, changing-amplitude bath model or uncalibrated extension is asserted. The identified gap belongs to the generated item, not to an established defect in the original article.
