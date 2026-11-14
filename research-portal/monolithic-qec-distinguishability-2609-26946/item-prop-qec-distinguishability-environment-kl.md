---
title: Environment-state independence under KL
status: published
research_item: prop-qec-distinguishability-environment-kl
dependency_level: 2
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 1, paragraph following Eq. (1)
      statement: Under the Knill–Laflamme conditions the environment state is
        determined by overlaps independent of the normalized code state; the
        environment may learn an error syndrome without learning the encoded
        state.
      hypotheses: The paragraph considers an error channel with Kraus operators and
        states satisfying the Knill–Laflamme conditions on a codespace.
      reading_limits: Attribution to the supplied article text only; the local
        argument below uses the stated mathematical definitions and criterion,
        not the article as proof.
---

PDF p. 1: ` Paragraph following Eq. (1) `

## Prerequisites

- [thm-qec-distinguishability-kl-conditions](item-thm-qec-distinguishability-kl-conditions)
- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [def-qec-prereq-complementary-error-record](item-def-qec-prereq-complementary-error-record)
- [def-qec-prereq-syndrome-and-logical-record](item-def-qec-prereq-syndrome-and-logical-record)
- [math:cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases](https://alphabetamath.cc/item/cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases)
- [math:def-qc-dirac-notation-conversion](https://alphabetamath.cc/item/def-qc-dirac-notation-conversion)


## Statement

Let $H_L,H_P,H_O$ be nonzero finite-dimensional complex inner-product spaces, $V:H_L\to H_P$ an isometry, $C=\operatorname{im}V$, and $\mathcal N(X)=\sum_{a=1}^m E_aXE_a^\dagger$ a quantum channel with a finite Kraus family. Suppose the Knill–Laflamme conditions hold: $\langle\psi|E_a^\dagger E_b|\varphi\rangle=c_{ab}\langle\psi|\varphi\rangle$ for all $\psi,\varphi\in C$ and all $a,b$. For the complementary channel associated with this Kraus family, every density operator supported on $C$ has the same environment state, whose $(a,b)$ entry is $c_{ba}$. In particular, for a normalized code vector $\psi$, the entries are $\langle\psi|E_b^\dagger E_a|\psi\rangle=c_{ba}$.

Consequently every fixed finite instrument applied to this environment has outcome probabilities and, when defined, conditional output states independent of the encoded logical density operator. Such outcomes can serve as syndrome flags: they may convey information about the error record, while the full record conveys no information that distinguishes logical input states. This assertion does not require every error label to be distinguishable.

## Facts & Assumptions

[F1] The finite-dimensional Knill–Laflamme criterion uses the stated scalar-overlap conditions and identifies them with exact correction for the stated channel and code. [thm-qec-distinguishability-kl-conditions](item-thm-qec-distinguishability-kl-conditions)

[F2] On arbitrary finite-dimensional complex inner-product spaces, $|v\rangle$ denotes $v$, $\langle v|$ is the linear functional $x\mapsto\langle x,v\rangle_{\rm root}$, and $|u\rangle\langle v|$ maps $x$ to $\langle x,v\rangle_{\rm root}u$, with the root pairing linear in its first argument. [math:def-qc-dirac-notation-conversion](https://alphabetamath.cc/item/def-qc-dirac-notation-conversion) The symbol $\dagger$ is the adjoint used in [F1]. In specified ordered orthonormal coordinates these conventions give $\langle u|A|v\rangle=u^\dagger Av$ and conjugate-transpose adjoints. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[F3] The isometric encoding has code projector $P=VV^\dagger$; a logical density operator is encoded as $V\rho V^\dagger$. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F4] For the chosen Kraus representation, the complementary record has $(a,b)$ entry $\operatorname{Tr}(E_a X E_b^\dagger)$. A density operator supported on $C$ satisfies $PXP=X$ and has trace one. [def-qec-prereq-complementary-error-record](item-def-qec-prereq-complementary-error-record)

[F5] A syndrome instrument is a fixed finite instrument on the environment; each outcome probability is the trace of its output, and its conditional output is that output divided by its nonzero probability. [def-qec-prereq-syndrome-and-logical-record](item-def-qec-prereq-syndrome-and-logical-record)

[F6] Every finite-dimensional real or complex inner-product space has an orthonormal basis. In particular, this applies to the code subspace $C$ with its inherited inner product. [math:cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases](https://alphabetamath.cc/item/cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases)

## Proof

**Given:** The finite-dimensional channel, isometric code and scalar-overlap conditions in the statement, and an arbitrary density operator $X$ supported on $C$.

**Goal:** Show that the full complementary record and every fixed finite syndrome instrument's statistics and defined conditional outputs are independent of the encoded state.

1.1 By [F6], choose an orthonormal basis $\{|i\rangle\}$ of $C$ and write $X=\sum_{i,j}X_{ij}|i\rangle\langle j|$. The support condition makes this expansion valid, and $\sum_i X_{ii}=\operatorname{Tr}X=1$. Expanding the finite matrix trace gives $\operatorname{Tr}(E_a X E_b^\dagger)=\sum_{i,j}X_{ij}\langle j|E_b^\dagger E_a|i\rangle=c_{ba}\sum_i X_{ii}=c_{ba}$. Thus every entry of the complementary record is independent of $X$; for $X=|\psi\rangle\langle\psi|$ this is the stated overlap formula. [given, F1, F2, F4, F6, algebra]

2.1 Every encoded logical density operator is supported on $C$, so step 1.1 gives one common environment density operator $\sigma$. For each outcome map $\mathcal I_s$ of a fixed finite instrument, both $\mathcal I_s(\sigma)$ and its trace are therefore independent of the logical input. If this trace is nonzero, the normalized conditional output is independent as well; if it is zero, no conditional state is assigned. Hence no finite-outcome measurement or other fixed finite instrument on the record can distinguish logical inputs by its outcome statistics, although its labels may describe syndrome information. [given, F3, F4, F5, step 1.1] ∎
