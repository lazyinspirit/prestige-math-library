---
title: Two-jump probability from a bounded hazard
status: draft
research_item: lem-qec-prereq-bounded-intensity-two-jumps
dependency_level: 6
sources:
  references:
    - title: M. B. Plenio and P. L. Knight, The quantum-jump approach to dissipative
        dynamics in quantum optics
      url: https://arxiv.org/abs/quant-ph/9702007
      locator: Section IV.C, PDF pp. 46–49, Eqs. (120)–(133), especially (122),
        (124)–(128)
      reading_limits: Contextual bibliography retained from prior authoring, not an
        imported premise. This adjudication did not reread the paper or
        independently check that contextual locator. The two-jump estimate and
        its finite GKSL application use the declared mathematical suppliers and
        the local argument below; no general existence theorem is imported from
        this citation.
---

## Prerequisites

- [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)
- [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)
- [math:def-counting-process-intensity-and-compensator-contract](https://alphabetamath.cc/item/def-counting-process-intensity-and-compensator-contract)
- [math:lem-conditional-intensity-interevent-survival-and-density](https://alphabetamath.cc/item/lem-conditional-intensity-interevent-survival-and-density)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [lem-qec-author-9ff6bb2d6819-record-hazard-compensator](item-lem-qec-author-9ff6bb2d6819-record-hazard-compensator)
- [math:def-temporal-point-process-and-conditional-intensity](https://alphabetamath.cc/item/def-temporal-point-process-and-conditional-intensity)
- [lem-qec-author-9ff6bb2d6819-marked-waiting-kernel](item-lem-qec-author-9ff6bb2d6819-marked-waiting-kernel)
- [math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound)


## Statement

Assume AC for the intensity interface, hence also Countable Choice and Dependent Choice for its conditional waiting-law suppliers. For a supplied simple, non-explosive counting process, use measurable conditional waiting laws in the full-history sense: the supplied jointly measurable kernels give the actual next-event law conditional on the full history, including histories immediately after each event. If their locally integrable conditional no-event hazards are bounded by a finite $r\ge0$ for every history throughout $[0,\tau]$, where $\tau>0$, the probability of at least two jumps is at most $r^2\tau^2/2$. Over $N=T/\tau$ intervals, with $N$ an integer and the same bound valid conditional on every interval's initial history, a union bound gives at most $r^2T\tau/2$. In the exact finite quantum-jump instrument associated with a finite GKSL generator and its specified $L_a$, the sufficient hypothesis is $\sum_aL_a^\dagger L_a\le rI$. A stationary Poisson law is not assumed.

## Facts & Assumptions

[F1] Use the finite GKSL evolution with Hermitian $H$ and a finite family $L_a$. [def-qec-prereq-finite-gksl-channel-interface](item-def-qec-prereq-finite-gksl-channel-interface)

[F2] Finite coarse partitions of a monitored record define instruments and conditional states by normalized positive outputs. [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)

[F3] The simple non-explosive counting-process intensity contract distinguishes a supplied density formula from an actual compensator law. [math:def-counting-process-intensity-and-compensator-contract](https://alphabetamath.cc/item/def-counting-process-intensity-and-compensator-contract)

[F4] A supplied measurable conditional waiting law with locally integrable hazard $\lambda_h$ has density $\lambda_h(u)\exp(-\int\lambda_h)$; this supplier assumes AC, Countable Choice and Dependent Choice. [math:lem-conditional-intensity-interevent-survival-and-density](https://alphabetamath.cc/item/lem-conditional-intensity-interevent-survival-and-density)

[F5] Assume full AC; in particular carry the Countable Choice and Dependent Choice requirements of the waiting-law supplier. [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[F6] The five preceding finite-matrix lemmas construct the exact GKSL record instrument, with conditional hazard $\operatorname{Tr}(Q\sigma_{t-})$ and the full compensator law. [lem-qec-author-9ff6bb2d6819-record-hazard-compensator](item-lem-qec-author-9ff6bb2d6819-record-hazard-compensator)

[F7] Use the measurable full-history and next-event-kernel conventions, with actual conditional laws after each event and jointly measurable finite-time densities; these are supplied law hypotheses, not an existence assertion from a displayed hazard. [math:def-temporal-point-process-and-conditional-intensity](https://alphabetamath.cc/item/def-temporal-point-process-and-conditional-intensity)

[F8] For every density matrix, the finite no-jump evolution supplies a marked waiting probability kernel, measurable state updates at events, and marked hazards whose sum is $\operatorname{Tr}(Q\widehat\sigma(u))$, where $Q=\sum_aL_a^\dagger L_a$. [lem-qec-author-9ff6bb2d6819-marked-waiting-kernel](item-lem-qec-author-9ff6bb2d6819-marked-waiting-kernel)

[F9] The probability of a finite union of events is at most the sum of their probabilities. [math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound)

## Proof

**Given:** A supplied process and history-uniform hazard bound as in the statement; for the quantum application, finite GKSL data and $Q\le rI$.

**Goal:** Bound two or more jumps in one interval and in the $N$ check intervals, and justify the quantum application.

1.1 Conditional on the initial history, let $S_1$ be the first jump time. By [F4] its finite-time density $f_1(s)$ is at most $r$. By [F7], conditional on the first jump and its updated full history $h$, the next-event density $f_{2,h}(t)$ is also at most $r$ throughout the remaining interval, because its survivor is at most one. Thus its conditional probability of another jump by $\tau$ is at most $r(\tau-s)$. Integrating the conditional probability with the first-event law yields $\Pr(N_\tau-N_0\ge2)\le\int_0^\tau r\,r(\tau-s)\,ds=r^2\tau^2/2$. This counts the first two events regardless of later events; atoms at infinite waiting time contribute zero, and no independence or stationary intensity is used. The history kernels provide the disintegration used here, so no selection of conditional densities at individual histories is asserted. [given, F3, F4, F5, F7, algebra]

2.1 The bound in step 1.1 is uniform in the initial history of each check interval, so averaging it gives the same bound for that interval even if earlier measurements change its initial state. By [F9], the probability of at least one interval containing two jumps is at most the sum of the $N$ interval probabilities, namely $Nr^2\tau^2/2=r^2T\tau/2$. The same argument allows arbitrary state resets between intervals, provided the uniform hazard bound remains valid. [given, F7, F9, step 1.1, algebra]

3.1 For the specified finite quantum model, [F6] constructs the record process and shows that its ensemble is the channel of [F1], with the finite coarse instruments and normalized conditional states of [F2]. Its conditional hazard is $\lambda_t=\operatorname{Tr}(Q\sigma_{t-})$. Since $\sigma_{t-}$ is positive of trace one and $0\le Q\le rI$, this is between zero and $r$ for every state, including states reachable after an allowed reset. By [F8], the waiting kernel and marked update are jointly measurable functions of the current density matrix, so they can be applied after every event using its updated full history. By [F6], these are the actual conditional laws of the simple non-explosive record process, and its compensator satisfies [F3]. Thus [F7] supplies the history conventions, [F8] supplies the explicit waiting kernels, and [F6] identifies their conditional-law application to this process. The hypotheses used in steps 1.1 and 2.1 therefore hold for this instrument, proving both stated bounds. [F1, F2, F3, F6, F7, F8, step 1.1, step 2.1, algebra] ∎

## Source notes

The probability estimate uses supplied full-history waiting kernels; a bare intensity formula is not used as an existence assertion. The finite GKSL application uses the existing marked waiting-kernel and record-instrument lemmas, independently of the trajectory-expansion draft. Plenio–Knight is retained as contextual bibliography from prior authoring, not as an imported general existence theorem; this adjudication did not reread it. This repair concerns generated prerequisite content and makes no claim about a defect in the article under study.
