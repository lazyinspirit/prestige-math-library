---
title: Equivalence of logical and code-supported physical decoding
status: draft
research_item: lem-author-9fe623b43725-decoder-identification
dependency_level: 4
---

## Prerequisites

- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [lem-author-9fe623b43725-fidelity-feasibility](item-lem-author-9fe623b43725-fidelity-feasibility)
- [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)
- [lem-author-9fe623b43725-logical-transpose](item-lem-author-9fe623b43725-logical-transpose)


## Statement

Let $d\ge1$ be an integer, let $H_P,H_O$ be nonzero finite-dimensional complex inner-product spaces, and let $V:\mathbb C^d\to H_P$ be a linear isometry. Set $P=VV^\dagger$ and $\operatorname{Ad}_V(X)=VXV^\dagger$. CPTP logical decoders $\mathcal R:\mathcal L(H_O)\to\mathcal L(\mathbb C^d)$ correspond bijectively to CPTP code-supported physical recoveries $\mathcal Q:\mathcal L(H_O)\to\mathcal L(H_P)$ by $\mathcal Q=\operatorname{Ad}_V\circ\mathcal R$ and $\mathcal R(Y)=V^\dagger\mathcal Q(Y)V$. Code-supported means $P\mathcal Q(Y)P=\mathcal Q(Y)$ for every $Y\in\mathcal L(H_O)$.

Fix a quantum channel $\mathcal N:\mathcal L(H_P)\to\mathcal L(H_O)$, and let $\mathcal D$ be any completed logical transpose decoder for $(V,\mathcal N)$. Here quantum channels are complex-linear, completely positive and trace-preserving, and $F_e$ denotes entanglement fidelity for the maximally mixed logical input $I_d/d$. Corresponding $\mathcal R$ and $\mathcal Q$ have identical decoded logical channels after $\mathcal N\circ\operatorname{Ad}_V$, hence equal entanglement fidelities. Their fidelity sets have the same real supremum $g$. The logical transpose value $f=F_e(\mathcal D\circ\mathcal N\circ\operatorname{Ad}_V)$ is feasible, independent of the support completion, and satisfies $0\le f\le g\le1$.

## Statement references

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[lem-author-9fe623b43725-fidelity-feasibility](item-lem-author-9fe623b43725-fidelity-feasibility)

[def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

[lem-author-9fe623b43725-logical-transpose](item-lem-author-9fe623b43725-logical-transpose)

## Facts & Assumptions

**Given:** The finite spaces, isometry, fixed quantum channel, decoder classes and completed logical transpose decoder in the Statement.

**Goal:** Prove the channel correspondence, equality of decoded fidelity sets, and the feasibility and bounds of the transpose value.

[F1] The finite-dimensional channel, code-support and encoding conventions are those of code restriction: $V^\dagger V=I$, $P=VV^\dagger$, and the restricted noise and decoded compositions are channels. Encoding by an isometry and decoding a code-supported output by compression identify the logical and code spaces. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F2] The completed transpose decoder has a completion-independent feasible entanglement fidelity $f$, and the real supremum $g$ of the logical-decoder fidelity set exists with $0\le f\le g\le1$. [lem-author-9fe623b43725-fidelity-feasibility](item-lem-author-9fe623b43725-fidelity-feasibility)

[F3] For the finite-dimensional isometry $V$ and quantum channel $\mathcal N$, any completed transpose recovery compressed by $V^\dagger(\cdot)V$ gives a CPTP logical decoder $\mathcal D$. [lem-author-9fe623b43725-logical-transpose](item-lem-author-9fe623b43725-logical-transpose)

[F4] On a channel $\mathcal E$ on $\mathbb C^d$, $F_e(\mathcal E)$ is the overlap with the maximally entangled reference state after applying the identity on the reference and $\mathcal E$ on the logical factor; its input convention is $I_d/d$. [def-qec-prereq-entanglement-fidelity](item-def-qec-prereq-entanglement-fidelity)

## Proof

**Given:** The finite spaces, isometry, fixed quantum channel, decoder classes and completed logical transpose decoder in the Statement.

**Goal:** Prove the channel correspondence, equality of decoded fidelity sets, and the feasibility and bounds of the transpose value.

**Proof technique:** direct.

1.1 Conjugation by $V$ preserves positivity with every ancilla and preserves trace because $V^\dagger V=I$. Thus it sends a CPTP logical decoder to a CPTP code-supported physical recovery. Conversely compression is completely positive and preserves trace on code-supported outputs: in a basis adapted to the code its trace is the sum of the same code diagonal entries. It therefore gives a CPTP logical decoder from any such physical recovery. [given, F1]

2.1 Composing the two constructions gives the identity: on the logical side use $V^\dagger V=I$; on the physical side use $P\mathcal Q(Y)P=\mathcal Q(Y)$. For every logical operator $X$, substitution yields $V^\dagger\mathcal Q(\mathcal N(VXV^\dagger))V=\mathcal R(\mathcal N(VXV^\dagger))$. Thus the decoded maps after the fixed encoded noise coincide as linear maps. [given, F1, step 1.1]

3.1 The coincident decoded maps in step 2.1 are channels by [F1]. Applying the overlap definition [F4] to equal channels gives equal entanglement fidelities for input $I_d/d$. The bijection therefore identifies their entire fidelity sets. The completed logical transpose decoder $\mathcal D$ is among these logical decoders by [F3]; [F2] supplies its completion-independent feasible value $f$, the existence of the logical-decoder supremum $g$, and $0\le f\le g\le1$. Equality of the fidelity sets gives the same supremum for code-supported physical recoveries. [F1, F2, F3, F4, step 2.1] ∎
