---
id: prop-qec-distinguishability-branch-weight-probability
kind: proposition
domain: mathematics
title: Canonical weight as maximally mixed branch probability
status: published
origin: session
deps:
  - def-qec-distinguishability-effective-rank
  - lem-qec-prereq-canonical-choi-weights
  - math:def-qc-instrument-and-conditional-state
formulation_deps:
  - def-qec-distinguishability-effective-rank
  - lem-qec-prereq-canonical-choi-weights
  - math:def-qc-instrument-and-conditional-state
argument_deps:
  - lem-qec-prereq-canonical-choi-weights
  - math:def-qc-instrument-and-conditional-state
dependency_roles:
  def-qec-distinguishability-effective-rank: mathematical-premise
  lem-qec-prereq-canonical-choi-weights: mathematical-premise
  math:def-qc-instrument-and-conditional-state: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 4, first paragraph
      statement: For a channel on a space of dimension d, the probability of canonical
        Kraus branch k on the maximally mixed input is w_k/d, where w_k is the
        trace of E_k dagger E_k.
      hypotheses: The article's finite-dimensional channel and canonical
        Kraus-operator setting.
      reading_limits: Attribution to the supplied article extraction; this citation is
        not used as proof. No independent source audit or numerical replication
        is claimed.
dependency_level: 4
---

## Statement

Let $H$ and $K$ be finite-dimensional complex inner-product spaces, with $d=\dim H>0$, and let $\mathcal N:\mathcal L(H)\to\mathcal L(K)$ be a quantum channel, meaning a completely positive trace-preserving linear map. Choose canonical Kraus operators $E_k:H\to K$ from the positive-eigenvalue decomposition of the input-first, unnormalized Choi matrix as in [[lem-qec-prereq-canonical-choi-weights]]. Their weight is $w_k=\operatorname{Tr}(E_k^\dagger E_k)$, as in [[def-qec-distinguishability-effective-rank]].

For the instrument whose branch maps are $X\mapsto E_kXE_k^\dagger$, the probability of branch $k$ on the maximally mixed input $I_H/d$ is $w_k/d$. An instrument is a finite family of completely positive maps whose sum preserves trace; its branch probability is the trace of the branch output. [[math:def-qc-instrument-and-conditional-state]]

## Facts & Assumptions

**Given:** The spaces, channel, canonical operators and weight in the Statement.

**Goal:** Show that the indicated branch probability on $I_H/d$ equals $w_k/d$.

[F1] Under these hypotheses the canonical operators form a Kraus representation of $\mathcal N$, and their branch maps form a finite instrument. [[lem-qec-prereq-canonical-choi-weights]]

[F2] For a finite instrument, the probability of a branch on a density operator is the trace of its output under that branch map. [[math:def-qc-instrument-and-conditional-state]]

## Proof

**Given:** The spaces, channel, canonical operators and weight in the Statement.

**Goal:** Show that the indicated branch probability on $I_H/d$ equals $w_k/d$.

1.1 The operator $I_H/d$ is positive and has trace one, since $d=\dim H>0$; it is therefore a density operator. By [F1] the specified branch maps form an instrument, and [F2] gives $p_k=\operatorname{Tr}(E_k(I_H/d)E_k^\dagger)$. [given, F1, F2, algebra]

2.1 In orthonormal bases of $H$ and $K$, the two traces $\operatorname{Tr}(E_kE_k^\dagger)$ and $\operatorname{Tr}(E_k^\dagger E_k)$ both equal the sum of the squared absolute values of the entries of $E_k$. Thus step 1.1 gives $p_k=\operatorname{Tr}(E_k^\dagger E_k)/d=w_k/d$, as claimed. [given, step 1.1, algebra] ∎

## Remarks

A choice of canonical eigenbasis specifies this mathematical instrument; it does not by itself identify a unique physical measurement record.
