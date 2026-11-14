---
title: Operational checking time
status: published
research_item: def-qec-distinguishability-checking-time
dependency_level: 3
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 2, paragraph defining checking time after Eq. (5)
      statement: For a target fidelity in (0, 1], the checking time is the infimum of
        times at which the entanglement fidelity of the recovered channel on the
        code is below the target; the article takes the recovery to be the
        transpose recovery.
      hypotheses: A specified code, accumulated noise channel and recovery; the target
        lies in (0, 1].
      reading_limits: Read the supplied article text at the cited passage. This
        citation attributes the article's definition and operational
        interpretation; it is not independent proof of a prerequisite or of
        repeated-cycle performance.
---

PDF p. 2: ` Checking-time definition after Eq. (5) `

## Prerequisites

- [def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)
- [math:def-infimum](https://alphabetamath.cc/item/def-infimum)
- [math:thm-infimum-property](https://alphabetamath.cc/item/thm-infimum-property)


## Definition

Let $H_L=\mathbb C^d$ for an integer $d\geq1$, and let $H_P,H_O$ be nonzero finite-dimensional complex inner-product spaces. Write $\mathcal L(H)$ for the linear operators on $H$. A code is specified by a linear isometry $V:H_L\to H_P$, with code projector $P=VV^*$. For each elapsed time $t\geq0$, let the accumulated noise $\mathcal N_t:\mathcal L(H_P)\to\mathcal L(H_O)$ be a quantum channel, meaning a linear, completely positive, trace-preserving map. Let $\mathcal T_t:\mathcal L(H_O)\to\mathcal L(H_P)$ be a recovery channel supported on the code, meaning $P\mathcal T_t(Y)P=\mathcal T_t(Y)$ for every $Y$. A fixed recovery is included by taking $\mathcal T_t=\mathcal T$ for all $t$.

Define the recovered logical channel by $\mathcal E_t(X)=V^*\mathcal T_t(\mathcal N_t(VXV^*))V$. With a reference copy of $H_L$, set $|\Phi_d\rangle=d^{-1/2}\sum_{j=0}^{d-1}|j\rangle\otimes|j\rangle$, where the vectors $|j\rangle$ form the standard orthonormal basis. The recovered entanglement fidelity for the maximally mixed logical input is $F_{\mathcal T}(t)=\langle\Phi_d|({\rm id}\otimes\mathcal E_t)(|\Phi_d\rangle\langle\Phi_d|)|\Phi_d\rangle$.

For a target $F_0\in(0,1]$, the checking time is $\tau(F_0)=\inf\{t\geq0:F_{\mathcal T}(t)<F_0\}$, with $\inf\varnothing=+\infty$. The article takes the recovery to be the transpose, or Petz, recovery; for a time-dependent noise family this may be constructed separately from each $\mathcal N_t$ and the same code projector.

## Definition references

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery)

[math:def-infimum](https://alphabetamath.cc/item/def-infimum)

[math:thm-infimum-property](https://alphabetamath.cc/item/thm-infimum-property)

## Justification

The code-supported recovery induces a decoder, and composing it with the noise and encoding gives the logical channel $\mathcal E_t$, by [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel). The displayed overlap is therefore well-defined by [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity). The crossing set is a subset of $[0,\infty)$; if nonempty, it is bounded below by zero and has an infimum by [math:thm-infimum-property](https://alphabetamath.cc/item/thm-infimum-property). The empty-set convention supplies the remaining case. The finite-dimensional transpose construction supplies a code-supported recovery for each noise channel as stated in [def-qec-distinguishability-transpose-recovery](item-def-qec-distinguishability-transpose-recovery).

## Remarks

The article interprets this threshold as the time scale for checking often enough to maintain the target for the specified recovery. The definition alone does not establish a repeated-cycle performance bound. The infimum need not itself belong to the strict crossing set, and no monotonicity or continuity of fidelity is assumed. In particular, $\tau=+\infty$ means that no time in the specified family has fidelity strictly below the target; a finite $\tau$ is the boundary of the first such times, not necessarily a time at which the strict inequality holds.
