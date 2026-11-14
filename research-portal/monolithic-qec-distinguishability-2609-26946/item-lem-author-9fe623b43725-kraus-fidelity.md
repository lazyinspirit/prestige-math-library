---
title: Kraus trace formula for maximally mixed entanglement fidelity
status: draft
research_item: lem-author-9fe623b43725-kraus-fidelity
dependency_level: 1
---

## Prerequisites

- [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)
- [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)
- [math:def-trace-of-an-endomorphism](https://alphabetamath.cc/item/def-trace-of-an-endomorphism)
- [math:def-qc-tensor-map](https://alphabetamath.cc/item/def-qc-tensor-map)
- [math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)


## Statement

Let $H=\mathbb C^d$, $d\ge1$, and let $\mathcal E(X)=\sum_a K_aXK_a^\dagger$ be a channel on $H$. Then $F_e(\mathcal E)=d^{-2}\sum_a|\operatorname{tr}K_a|^2$.

## Statement references

[math:def-qc-quantum-channel](https://alphabetamath.cc/item/def-qc-quantum-channel)

## Facts & Assumptions

**Given:** The spaces, maps and operators in the Statement.

**Goal:** Prove the asserted identities and conclusions.

[F1] Entanglement fidelity is the overlap with the normalized vector $\Phi_d=d^{-1/2}\sum_j|j\rangle\otimes|j\rangle$. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[F2] A Kraus representation expresses the channel as a finite sum of conjugations. [math:def-qc-kraus-representation](https://alphabetamath.cc/item/def-qc-kraus-representation)

[F3] The trace of an endomorphism is the trace of its matrix in any ordered basis, hence the sum of its diagonal entries. [math:def-trace-of-an-endomorphism](https://alphabetamath.cc/item/def-trace-of-an-endomorphism)

[F4] The tensor map $I\otimes K$ is the unique linear map with $(I\otimes K)(u\otimes v)=u\otimes Kv$. [math:def-qc-tensor-map](https://alphabetamath.cc/item/def-qc-tensor-map)

## Proof

**Proof technique:** direct.

1.1 For any operator $K$ on $H$, expansion in the standard basis gives $\langle\Phi_d|(I\otimes K)|\Phi_d\rangle=d^{-1}\sum_j\langle j|K|j\rangle=d^{-1}\operatorname{tr}K$. [given, F1, F3, F4]

2.1 Apply the Kraus expansion to the second tensor factor of $|\Phi_d\rangle\langle\Phi_d|$. Each summand contributes the squared modulus of the overlap in step 1.1. Summing proves the stated trace formula. [F1, F2, F4, step 1.1] ∎
