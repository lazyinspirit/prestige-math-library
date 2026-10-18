---
id: thm-finite-full-feedback-relay-capacity
kind: theorem
title: Capacity of a finite relay channel with output feedback to source and relay
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-finite-discrete-memoryless-relay-channel-and-causal-code, thm-finite-relay-cut-set-outer-bound, thm-finite-relay-decode-forward-inner-bound, def-qa-35-finite-probability-entropy-and-stochastic-matrices, lem-finite-conditional-channel-mutual-information-concave-input-law]
aliases: []
proof_strategy: matching-inner-and-outer-bounds
axiom_use: No choice axiom is used; the relay alphabets and codebooks are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Thomas M. Cover and Abbas A. El Gamal, Capacity Theorems for the Relay Channel, IEEE Transactions on Information Theory 25(5), 1979
      url: https://isl.stanford.edu/groups/elgamal/abbas_publications/J003.pdf
      locator: Theorem 3, printed p. 574; §V, equation (75) and feedback-capacity proof, printed p. 580.
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 17, §17.4, full output feedback, printed pp. 444–448.
---

## Statement

For the finite relay channel with full output feedback to source and relay in [[def-finite-discrete-memoryless-relay-channel-and-causal-code]], the capacity is
$$C=\max_{P_{X,X_r}}\min\{I(X,X_r;Y),\ I(X;Y,Y_r|X_r)\}.$$

## Facts & Assumptions

**Given:** A finite relay channel with full feedback to both encoders.

[F1] [[def-finite-discrete-memoryless-relay-channel-and-causal-code]]: both encoders choose current inputs from the message and/or past output pair; current outputs follow the memoryless law.

[F2] [[thm-finite-relay-cut-set-outer-bound]]: any causal relay code satisfies both cut-set bounds with a finite time-sharing variable.

[F3] [[thm-finite-relay-decode-forward-inner-bound]]: block-Markov decode-forward achieves the minimum of the source-to-relay-observation and source-plus-relay-to-destination mutual informations.

[F4] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: the finite entropy summand $-p\ln p$, extended by zero at $p=0$, is continuous on the probability simplex.

[F5] [[lem-finite-conditional-channel-mutual-information-concave-input-law]]: for a fixed channel, conditional mutual information is concave in the input law, including conditional input laws given $X_r$.

## Proof





1.1 Apply [F2]. Its outer bound has a finite time-sharing variable $Q$ and bounds $I(X,X_r;Y|Q)$ and $I(X;Y,Y_r|X_r,Q)$. Apply [F5] first with input $(X,X_r)$ and no side information, then with input $X$ and side information $X_r$. Averaging over $Q$ cannot increase either conditional mutual information, so both are bounded by the corresponding quantities under the averaged joint input law $P_{X,X_r}$. This gives the displayed maximum as an outer bound. [F1, F2, F5, algebra]

1.2 For achievability, view $(Y_r,Y)$ as the relay's observation and $Y$ as the destination output. This is a finite relay channel whose relay encoder can causally use the observation pair because it has full feedback in [F1]. Apply the block-Markov construction of [F3] with the relay observation $\widetilde Y_r=(Y_r,Y)$; its decoding term becomes $I(X;Y,Y_r|X_r)$, while the destination decoding term is $I(X,X_r;Y)$. Every joint input law factors as $P_{X_r}P_{X|X_r}$, so the construction achieves every rate below the displayed minimum. [F1, F3, given]

2.1 The outer bound in step 1.1 and achievable rates in step 1.2 coincide for every joint input law. The joint-input probability simplex is compact. Each mutual information is continuous there because it is a finite sum of terms $-p\ln p$, with $p\ln p$ extended continuously by $0$ at $p=0$; the minimum of the two continuous functions is continuous. It therefore attains a maximum, and taking that maximum and closure proves the capacity formula. [step 1.1, step 1.2, F4, algebra] ∎
