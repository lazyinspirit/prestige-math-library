---
title: Near-optimality for maximally mixed entanglement fidelity
status: published
research_item: thm-qec-prereq-transpose-entanglement-guarantee
dependency_level: 5
sources:
  references:
    - title: The Near-optimal Performance of Quantum Error Correction Codes
      url: https://arxiv.org/pdf/2401.02022
      locator: PDF p. 2, Eqs. (2)-(5) and Theorem 1; PDF p. 8 (supplement p. 2), Eq.
        (S7), Lemma 1 and Eq. (S8)
      statement: For an isometric finite-dimensional encoding and a noise channel, the
        channel fidelity defined by overlap with the purified maximally mixed
        state has optimum $F^{\rm opt}$ over all physical CPTP recoveries. The
        transpose recovery has Kraus operators $P N_i^\dagger\mathcal
        N(P)^{-1/2}$ with inverse on the support, and satisfies
        $\tfrac12(1-F(\mathcal R^{\rm TC}\mathcal N\mathcal E))\le1-F^{\rm
        opt}\le1-F(\mathcal R^{\rm TC}\mathcal N\mathcal E)$.
      hypotheses: Finite-dimensional isometric code, finite-dimensional CPTP noise,
        fixed maximally mixed logical input, optimization over unrestricted CPTP
        recovery; support inverse in the transpose construction.
      reading_limits: Checked the extracted PDF text at p. 2, Eqs. (2)-(5) and Theorem
        1; p. 8 (supplement p. 2), Eq. (S7), Lemma 1 and Eq. (S8); and p. 11,
        Eqs. (S34)-(S36). These passages identify the fidelity convention,
        support inverse, transpose recovery and bound. The substantial
        near-optimality proof is imported; no full-proof reading,
        reconstruction, image inspection or independent source audit is claimed.
external_input: true
---

## Prerequisites

- [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)
- [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)
- [lem-author-9fe623b43725-decoder-identification](item-lem-author-9fe623b43725-decoder-identification)
- [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)
- [math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)
- [` The Near-optimal Performance of Quantum Error Correction Codes · PDF p. 2, Eqs. (2)-(5) and Theorem 1; PDF p. 8 (supplement p. 2), Eq. (S7), Lemma 1 and Eq. (S8) `](https://arxiv.org/pdf/2401.02022)


## Statement

Let $V:\mathbb C^d\to H_P$ be an isometry onto a nonzero finite-dimensional code, $P=VV^\dagger$, and let $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$ be a finite-dimensional quantum channel. Choose a finite Kraus family $(E_a)_{a\in A}$ for $\mathcal N$, where $A$ is finite, $E_a:H_P\to H_O$, and $\mathcal N(X)=\sum_{a\in A}E_aXE_a^\dagger$ for every $X\in\mathcal L(H_P)$. Let $F_{\rm opt}=\max_{\mathcal R}F_e(\mathcal R\mathcal N\operatorname{Ad}_V)$ over all CPTP logical decoders. Let $F_{\rm tr}$ be the value for the support-normalized transpose recovery $R_a=PE_a^\dagger\mathcal N(P)^{-1/2}$, completed to a channel and compressed to the logical space. Then $1-F_{\rm opt}\le1-F_{\rm tr}\le2(1-F_{\rm opt})$. The input of this entanglement fidelity is fixed to $I/d$; this is not a worst-case pure-state fidelity guarantee.

## Facts & Assumptions

[F1] Entanglement fidelity is the overlap with the purified maximally mixed logical input. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F2] The support-normalized transpose map has a CPTP completion with the same action on all encoded noisy operators. [thm-qec-prereq-transpose-support-completion](item-thm-qec-prereq-transpose-support-completion)

[F3] Logical decoders and code-supported physical recoveries have identical decoded fidelity sets; the transpose value is feasible, lies in $[0,1]$, and is independent of completion. [lem-author-9fe623b43725-decoder-identification](item-lem-author-9fe623b43725-decoder-identification)

[F4] The chosen finite Kraus family consists of maps $E_a:H_P\to H_O$ satisfying $\mathcal N(X)=\sum_{a\in A}E_aXE_a^\dagger$ for every input operator. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F5] Every channel between the stated finite-dimensional spaces admits a finite Kraus representation, so the choice in the Statement is available. [math:thm-qc-finite-kraus-choi-stinespring-equivalence](https://alphabetamath.cc/item/thm-qc-finite-kraus-choi-stinespring-equivalence)

## External input

Imported near-optimality contract: For an isometric finite-dimensional encoding and a noise channel, the channel fidelity defined by overlap with the purified maximally mixed state has optimum $F^{\rm opt}$ over all physical CPTP recoveries. The transpose recovery has Kraus operators $P N_i^\dagger\mathcal N(P)^{-1/2}$ with inverse on the support, and satisfies $\tfrac12(1-F(\mathcal R^{\rm TC}\mathcal N\mathcal E))\le1-F^{\rm opt}\le1-F(\mathcal R^{\rm TC}\mathcal N\mathcal E)$.

Source: The Near-optimal Performance of Quantum Error Correction Codes, PDF p. 2, Eqs. (2)-(5) and Theorem 1; PDF p. 8 (supplement p. 2), Eq. (S7), Lemma 1 and Eq. (S8).

## Source notes

The source defines the maximally entangled vector with the channel and reference in the opposite tensor order. Swapping both input and output tensor factors preserves the scalar overlap. Its code basis is identified with the logical basis by $V$. The decoder-identification lemma establishes equivalence of logical and code-supported physical decoder conventions, together with feasibility and completion independence of the transpose fidelity. Its prerequisite chain supplies the Kraus fidelity formula, logical transpose construction, reference-level completion independence and feasibility. The substantial near-optimality inequality itself remains the exact external input; no local proof of it is claimed. The two inequalities in Eq. (S8) are rewritten by multiplying the first by two and reversing their order.
