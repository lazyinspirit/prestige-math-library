---
title: Bosonic anharmonicity and finite-energy GKP tradeoff
status: published
research_item: rem-qec-distinguishability-bosonic-implications
dependency_level: 3
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF p. 5, Discussion, first paragraph
      statement: The article discusses partially distinguishable decay events in
        weakly anharmonic bosonic oscillators, the role of anharmonicity in
        circuit-QED level addressability, and a possible tradeoff between
        increasing GKP envelope size and Kerr-induced distinguishability; it
        says logical lifetime need not improve monotonically with mean photon
        number.
      hypotheses: Qualitative discussion of weakly anharmonic oscillators and
        finite-energy GKP encodings; the article does not supply a bosonic
        lifetime calculation in this passage.
      reading_limits: Read the supplied extracted text of PDF p. 5, Discussion, first
        paragraph. This reference attributes the qualitative discussion to the
        article and supplies no independent prerequisite proof. The original GKP
        construction was independently examined for the bosonic-scope supplier;
        the article's circuit-QED and Kerr/lifetime references [20, 21, 49, 50]
        were not independently examined for this item.
---

PDF p. 5: ` Discussion, first paragraph `

## Prerequisites

- [def-qec-prereq-bosonic-kerr-scope](item-def-qec-prereq-bosonic-kerr-scope)
- [def-qec-prereq-complementary-error-record](item-def-qec-prereq-complementary-error-record)
- [def-qec-prereq-syndrome-and-logical-record](item-def-qec-prereq-syndrome-and-logical-record)
- [prop-qec-distinguishability-environment-kl](item-prop-qec-distinguishability-environment-kl)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)


## Remark

The article extends its which-path discussion to bosonic codes in weakly anharmonic oscillators. An oscillator is anharmonic when its successive transition frequencies are not all equal; a which-path record is environmental information that can distinguish alternatives for the initial state or decay event. The article says that frequency shifts can make nominally degenerate decay events partially distinguishable. It also describes this as a practical constraint in circuit quantum electrodynamics (circuit QED), while noting that the same anharmonicity is needed for level addressability: the ability to selectively address transitions between specified levels.

For Gottesman–Kitaev–Preskill (GKP) oscillator codes, whose ideal code states are nonnormalizable comb states, the article describes a competing effect: increasing the mean photon number $\bar n$, the mean occupation of the oscillator, better approximates the ideal code, while Kerr shifts make occupied Fock states more distinguishable. It suggests that this contributes to an optimal envelope size and that logical lifetime need not improve monotonically with $\bar n$. These are the article's qualitative claims; this passage supplies neither a bosonic lifetime calculation nor a measured lifetime. The bosonic-scope definition below specifies a GKP qubit family by two interleaved position combs, and Gaussian approximate wavefunctions with peak width $\Delta$ and envelope width $\kappa^{-1}$. In that prescription, an ideal-code approximation concerns narrow peaks and a broad envelope; envelope width or mean occupation alone is not a universal measure of approximation quality.

In the prescribed Kerr model below, nonzero anharmonicity separates adjacent downward transition frequencies. Whether a bath actually records those differences, and how the logical lifetime changes, depend on additional dynamics and on the chosen encoding, recovery and lifetime criterion. In particular, the finite-dimensional environment-independence result stated below is a conditional diagnostic, not a direct theorem about an infinite-dimensional oscillator.

## Remark references

[def-qec-prereq-bosonic-kerr-scope](item-def-qec-prereq-bosonic-kerr-scope)

[def-qec-prereq-complementary-error-record](item-def-qec-prereq-complementary-error-record)

[def-qec-prereq-syndrome-and-logical-record](item-def-qec-prereq-syndrome-and-logical-record)

[prop-qec-distinguishability-environment-kl](item-prop-qec-distinguishability-environment-kl)

## Facts & Assumptions

[F1] Assuming Countable Choice, the prescribed one-mode model has occupation states $|n\rangle$, number operator $N|n\rangle=n|n\rangle$, and Hamiltonian $H=\omega N+\frac K2N(N-1)$ on the finite occupation span. Its downward transition $n\to n-1$ has frequency $\omega+K(n-1)$ for $n\geq1$. The same supplier specifies finite-mean-occupation encodings, defines the GKP qubit combs and their Gaussian peak/envelope approximation, distinguishes those formal ideal distributions from normalizable code vectors, and gives a contract for comparing logical lifetimes. [def-qec-prereq-bosonic-kerr-scope](item-def-qec-prereq-bosonic-kerr-scope) [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

[F2] For a finite-dimensional channel with a finite Kraus family and an isometric code, the complementary error record is the output of the associated environment channel. It is logical-state independent when that full output is the same for every encoded density operator. [def-qec-prereq-complementary-error-record](item-def-qec-prereq-complementary-error-record) [def-qec-prereq-syndrome-and-logical-record](item-def-qec-prereq-syndrome-and-logical-record)

[F3] Under the finite-dimensional Knill–Laflamme scalar-overlap conditions for that channel and code, the full complementary record is logical-state independent. A fixed instrument on that record then has input-independent outcome probabilities and, where defined, conditional outputs. [prop-qec-distinguishability-environment-kl](item-prop-qec-distinguishability-environment-kl)

[A1] Assume Countable Choice for the one-mode Fock-space model in [F1]. [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)

## Justification

**Given:** The prescribed Kerr model under Countable Choice, and separately the finite-dimensional channel and code hypotheses in [F2] and [F3].

**Goal:** Explain the conditional frequency separation and the limits of the record and lifetime conclusions.

1.1 By [F1], the downward transition frequencies for $n\to n-1$ and $(n+1)\to n$ differ by $K$. Thus they are unequal when $K\ne0$. The energy model specifies those frequencies but does not specify a system–bath interaction or a complementary channel that resolves them. [F1, A1, algebra]

2.1 In the separate finite-dimensional setting, [F2] defines logical leakage through a dependence of the full environment output on the encoded density operator, and [F3] rules out that dependence when the stated Knill–Laflamme conditions hold. Step 1.1 alone does not establish those finite-dimensional hypotheses or an environmental record. Likewise, [F1] requires an encoding family, noise, recovery, fidelity and threshold before a lifetime comparison is defined; the frequency separation alone supplies no monotonicity conclusion. [F1, F2, F3, step 1.1] ∎

## Source notes

The article cites references [20, 21, 49, 50] in its circuit-QED and Kerr/lifetime discussion; those references have not been independently read for this item. The GKP construction itself is supplied independently by the original Gottesman–Kitaev–Preskill paper, as recorded in the bosonic-scope definition. The conditional argument uses the named suppliers and does not treat the article's discussion as proof of a prerequisite or as an experimental observation.
