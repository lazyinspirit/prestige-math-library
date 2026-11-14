---
title: Monolithic encoding and degenerate error processes
status: published
research_item: def-qec-distinguishability-monolithic-encoding
dependency_level: 1
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 1, Introduction, first and second paragraphs
      statement: Monolithic encoding stores information in the multilevel structure of
        one system; the article calls decay processes degenerate when the
        environment cannot tell which physical basis state decayed, and
        discusses coincident transition frequencies in degenerate manifolds and
        uniformly spaced levels.
      hypotheses: The qualitative encoding and decay-path discussion in the Introduction.
      reading_limits: Article-origin attribution for the terminology and examples. The
        supplied extracted text of PDF page 1 was read; this citation is not an
        independent proof of a prerequisite or of a physical realization.
    - title: "John Preskill, Quantum Information, Chapter 3: Foundations II:
        Measurement and Evolution (updated October 2018)"
      url: https://www.preskill.caltech.edu/ph219/chap3_15.pdf
      locator: Section 3.1.2, printed pp. 9–11, Eqs. (3.25)–(3.31); Section 3.2.4,
        printed pp. 16–17, Eqs. (3.51)–(3.55).
      statement: Finite generalized measurements use positive effects summing to the
        identity and probabilities tr(rho E_a). A branch operation sums its
        Kraus outputs; its trace gives the branch probability and division by
        that positive trace gives the conditional state. Effects alone do not
        specify the update.
      hypotheses: Density-operator input; normalized Kraus family, possibly grouped by
        recorded outcome; positive branch weight for conditional normalization.
        The application here uses finite-dimensional spaces and finitely many
        outcomes.
      reading_limits: Read the identified sections and equations in the author-hosted
        PDF text. No apparatus implementation or decay dynamics was checked.
        Existing library instrument theorems supply the mathematical
        well-definedness; the environmental branch assignment below is an
        explicit model assumption.
---

PDF p. 1: ` Introduction, paragraphs 1–2 `

## Prerequisites

- [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)
- [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)
- [def-qec-prereq-complementary-error-record](item-def-qec-prereq-complementary-error-record)
- [def-qec-prereq-bosonic-kerr-scope](item-def-qec-prereq-bosonic-kerr-scope)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)
- [math:thm-qc-instrument-outcome-law-normalizes](https://alphabetamath.cc/item/thm-qc-instrument-outcome-law-normalizes)
- [math:thm-qc-instrument-conditional-state-is-density](https://alphabetamath.cc/item/thm-qc-instrument-conditional-state-is-density)
- [math:def-qc-povm-and-outcome-law](https://alphabetamath.cc/item/def-qc-povm-and-outcome-law)
- [math:thm-qc-povm-probabilities-normalize](https://alphabetamath.cc/item/thm-qc-povm-probabilities-normalize)
- [physics:post-nrqm-framework-observable-and-probability](https://alphabetamath.cc/physics/item/post-nrqm-framework-observable-and-probability)
- [` John Preskill, Quantum Information, Chapter 3: Foundations II: Measurement and Evolution (updated October 2018) · Section 3.1.2, printed pp. 9–11, Eqs. (3.25)–(3.31); Section 3.2.4, printed pp. 16–17, Eqs. (3.51)–(3.55). `](https://www.preskill.caltech.edu/ph219/chap3_15.pdf)


## Definition

A monolithic encoding stores logical information in the multilevel structure of one physical system, such as a bosonic mode, molecule, or atom. In a finite-dimensional description, let $H_L$ and $H_P$ be nonzero finite-dimensional complex inner-product spaces with specified ordered orthonormal bases. Use the finite operator and ket conventions in their coordinates, identifying each space with $\mathbb C^d$ in its specified basis. An encoding is a linear isometry $V:H_L\to H_P$ from the logical space into the state space of that one system; its image is the code. An encoded superposition is a linear combination of code vectors, expressible in the specified physical orthonormal basis.

A decay path specifies an initial physical basis state and a corresponding decay process. In the article's terminology, two such processes are degenerate when the environmental information available after the decay cannot distinguish which of the two initial basis states decayed. For a precise finite-dimensional realization of this terminology, use the stated $H_P$ and specify a nonzero finite-dimensional complex inner-product space $E$ with a specified ordered orthonormal basis and the same coordinate and ket conventions. The space $E$ contains the entire environmental record available for comparison. Specify also a nonempty finite set $A$ of branch labels. Declare a finite environmental instrument: complex-linear completely positive maps $\mathcal I_a:\mathcal L(H_P)\to\mathcal L(E)$ with $\sum_{a\in A}\operatorname{tr}(\mathcal I_a(X))=\operatorname{tr}(X)$ for every $X\in\mathcal L(H_P)$. The instrument and its physical interpretation are prescribed model data, not inferred from the transition energies.

For path $i=1,2$, choose $|s_i\rangle$ from the specified physical orthonormal basis and its decay branch $a_i\in A$, and put $\rho_i=|s_i\rangle\langle s_i|$, $\tau_i=\mathcal I_{a_i}(\rho_i)$ and $p_i=\operatorname{tr}(\tau_i)$. When $p_i>0$, its normalized conditional environmental state is $\sigma_i=\tau_i/p_i$ on the common space $E$; when $p_i=0$, no conditional state is assigned. The comparison requires $p_1,p_2>0$ and concerns the records conditioned on those paths, rather than the incidence rates $p_i$. Preparation and branch indices are bookkeeping labels, not automatically accessible records; if any such label is available to the environment, its register must be included in $E$ and in the declared output states.

In this realization, degeneracy means $\sigma_1=\sigma_2$. An environmental measurement in the adopted finite-outcome model is any finite POVM $(F_b)_{b\in B}$ on $E$: $B$ is finite and nonempty, $F_b\ge0$, and $\sum_bF_b=I_E$. Adopt the physical outcome law $q_i(b)=\operatorname{tr}(\sigma_i F_b)$. Equal conditional states therefore give the same outcome probabilities for every such measurement. This includes every binary effect test $(F,I_E-F)$ with $0\le F\le I_E$, so it covers every individual environmental event represented by an effect in the adopted model. It neither specifies an infinite-dimensional bath model nor asserts that a particular apparatus realizes these measurements. This pathwise condition alone does not assert that the full environmental record is independent of every encoded superposition, nor that an arbitrary code is exactly correctable.

For levels with energies $E_s$ and $E_f$, call $E_s-E_f$ the transition frequency in units with $\hbar=1$. Two transitions from equal-energy initial levels to equal-energy final levels have equal frequencies. Adjacent downward transitions in a uniformly spaced ladder also have equal frequencies. These are examples of coincident frequencies, not by themselves a complete specification of the environmental record.

## Definition references

[def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[def-qec-prereq-complementary-error-record](item-def-qec-prereq-complementary-error-record)

[def-qec-prereq-bosonic-kerr-scope](item-def-qec-prereq-bosonic-kerr-scope)

[math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)

[math:thm-qc-instrument-outcome-law-normalizes](https://alphabetamath.cc/item/thm-qc-instrument-outcome-law-normalizes)

[math:thm-qc-instrument-conditional-state-is-density](https://alphabetamath.cc/item/thm-qc-instrument-conditional-state-is-density)

[math:def-qc-povm-and-outcome-law](https://alphabetamath.cc/item/def-qc-povm-and-outcome-law)

[math:thm-qc-povm-probabilities-normalize](https://alphabetamath.cc/item/thm-qc-povm-probabilities-normalize)

[physics:post-nrqm-framework-observable-and-probability](https://alphabetamath.cc/physics/item/post-nrqm-framework-observable-and-probability)

## Facts & Assumptions

[F1] A finite-dimensional isometric encoding has code subspace $\operatorname{im}V$; its restricted channel and decoded recovery have the types specified in the code-restriction interface. [def-qec-prereq-restricted-logical-channel](item-def-qec-prereq-restricted-logical-channel)

[F2] For a finite Kraus representation, the complementary record is obtained by tracing the output system from the chosen dilation; logical-state independence requires equality of the entire record for all code density operators. [def-qec-prereq-complementary-error-record](item-def-qec-prereq-complementary-error-record)

[F3] Under Countable Choice, the prescribed one-mode model has occupation levels $E_n=\omega n+\frac K2n(n-1)$ and adjacent gaps $\omega+K(n-1)$. [def-qec-prereq-bosonic-kerr-scope](item-def-qec-prereq-bosonic-kerr-scope) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F4] A finite instrument has completely positive branch maps with trace-preserving sum. For a density input, its trace weights form a probability distribution and each positive-weight branch divided by its weight is a density operator on the output space. [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state) [math:thm-qc-instrument-outcome-law-normalizes](https://alphabetamath.cc/item/thm-qc-instrument-outcome-law-normalizes) [math:thm-qc-instrument-conditional-state-is-density](https://alphabetamath.cc/item/thm-qc-instrument-conditional-state-is-density)

[F5] For a density operator on a nonzero finite-dimensional space and a finite POVM, the weights $\operatorname{tr}(\sigma F_b)$ are nonnegative and sum to one. This mathematical normalization does not itself identify physical outcomes. [math:def-qc-povm-and-outcome-law](https://alphabetamath.cc/item/def-qc-povm-and-outcome-law) [math:thm-qc-povm-probabilities-normalize](https://alphabetamath.cc/item/thm-qc-povm-probabilities-normalize)

[F6] In the specified orthonormal coordinates, the finite operator conventions use the standard complex inner product, conjugate-transpose adjoints and the outer product $|u\rangle\langle v|:x\mapsto u(v^\dagger x)$. [def-qec-prereq-finite-operator-conventions](item-def-qec-prereq-finite-operator-conventions)

[A1] Assume Countable Choice for the one-mode Fock-space example in [F3] and for the cited physical measurement convention in [A2]. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[A2] Prescribe the stated environmental instrument as the decay-branch model, interpreting its trace weights as branch probabilities and its positive-weight normalized outputs as conditional environmental states. Independently adopt clause (iv) of P2 for environmental finite-outcome measurements: the probability of outcome $b$ is $\operatorname{tr}(\sigma F_b)$. This is a physical model assumption, not an empirical observation or a deduction from the effects; P2 supplies no branch update. Only its finite-effect clause is used, without the spectral-PVM construction of clause (ii) or its additional Axiom of Choice hypothesis. [physics:post-nrqm-framework-observable-and-probability](https://alphabetamath.cc/physics/item/post-nrqm-framework-observable-and-probability) [math:def-qc-instrument-and-conditional-state](https://alphabetamath.cc/item/def-qc-instrument-and-conditional-state)

## Justification

**Given:** The stated finite-dimensional encoding, environmental instrument and POVMs, the physical assignments in [A2], and Countable Choice as specified in [A1].

**Goal:** Justify the conditional-state construction and the scope of indistinguishability and coincident frequencies.

1.1 The isometry in [F1] gives a precise finite-dimensional meaning to an encoded subspace of one physical system; it does not require that every physical platform be finite-dimensional. The specified orthonormal bases and the coordinate and ket conventions in [F6] make the path labels and outer products unambiguous. Each $\rho_i=|s_i\rangle\langle s_i|$ is a density operator: in the specified orthonormal basis its matrix has one diagonal entry $1$ and all other entries $0$, and its quadratic form is $|\langle s_i|x\rangle|^2\ge0$. Apply [F4] to the declared instrument and this input. Its branch weight $p_i$ is nonnegative, and when $p_i>0$ the quotient $\tau_i/p_i$ is a density operator on $E$. The zero-weight case is left undefined as required by the instrument convention. The probability and conditional-state interpretations are the prescribed assumptions in [A2]. [given, F1, F4, F6, A2]

2.1 For any one of the specified POVMs, [F5] gives a normalized outcome law, with physical interpretation from [A2]. If $\sigma_1=\sigma_2$, substitution gives $q_1(b)=\operatorname{tr}(\sigma_1 F_b)=\operatorname{tr}(\sigma_2 F_b)=q_2(b)$ for each $b$. This holds for every finite POVM, including the binary family $(F,I_E-F)$ for any effect $F$, since its two members are nonnegative and sum to $I_E$. All accessible registers are already part of $E$ by the stated construction. Thus the conclusion concerns the entire declared conditional record rather than only one measured component. [given, F5, A1, A2, step 1.1]

3.1 The full-record condition in [F2] instead quantifies over all code density operators and includes coherences, so equality for the two specified conditional paths is not used to infer that condition or exact correctability. The model does not assume equal path incidence rates. [F1, F2, step 1.1, step 2.1]

4.1 If $E_{s_1}=E_{s_2}$ and $E_{f_1}=E_{f_2}$, subtraction gives $E_{s_1}-E_{f_1}=E_{s_2}-E_{f_2}$. For a uniformly spaced ladder $E_n=E_0+n\omega$, every adjacent downward gap is $\omega$. In particular, the model in [F3] has this property when $K=0$. Equality of frequencies alone specifies neither all other environmental degrees of freedom nor the instrument or its conditional states; no converse from equal frequencies to path indistinguishability is assumed. [given, F3, A1, step 1.1, step 3.1, algebra] ∎
