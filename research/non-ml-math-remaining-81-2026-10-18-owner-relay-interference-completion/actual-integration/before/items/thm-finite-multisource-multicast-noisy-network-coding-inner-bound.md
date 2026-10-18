---
id: thm-finite-multisource-multicast-noisy-network-coding-inner-bound
kind: theorem
title: Noisy network coding inner bound for finite multicast networks
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-finite-discrete-memoryless-network-and-code, lem-finite-joint-iid-strong-typicality, lem-finite-conditional-codebook-covering, lem-finite-conditional-typicality-packing, def-it-finite-conditional-mutual-information, thm-it-finite-conditional-mutual-information-identities-and-equality, thm-it-finite-entropy-chain-rule]
aliases: []
proof_strategy: block-Markov-random-coding
axiom_use: No choice axiom is used; all alphabets, block codebooks, and message sets are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Sung Hoon Lim, Young-Han Kim, Abbas El Gamal, and Sae-Young Chung, Noisy Network Coding, IEEE Transactions on Information Theory 57(5), 2011
      url: https://isl.stanford.edu/~abbas/papers/Noisy%20Network%20Coding.pdf
      locator: §III, Theorem 1 and its simultaneous-decoding proof, PDF pp. 9–12.
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 18, §18.2, noisy network coding, printed pp. 459–466.
---

## Statement

Consider a finite DMN as in [[def-finite-discrete-memoryless-network-and-code]]. Let $\mathcal S$ be a source-node set, let $\mathcal D$ be a destination-node set, and let each source $k\in\mathcal S$ send an independent message of rate $R_k$ to every destination. For a finite time-sharing variable $Q$, choose
$$P_Q\prod_{k=1}^N P_{X_k|Q}\prod_{k=1}^N P_{\hat Y_k|Y_k,X_k,Q}.$$
For every destination $d\in\mathcal D$ and every nonempty cut set $A\subseteq[N]$ with $A\cap\mathcal S\ne\varnothing$ and $d\notin A$, the noisy-network-coding inner bound is
$$\sum_{k\in A\cap\mathcal S}R_k < I(X_A;Y_d,\hat Y_{A^c}\mid X_{A^c},Q)-I(Y_A;\hat Y_A\mid X_{[N]},Y_d,\hat Y_{A^c},Q).$$
The closure of the union of these rate tuples, together with the all-zero rate tuple, is achievable; the separate zero tuple is attained by singleton message sets even if some cut expression is negative. A constant reconstruction $\hat Y_k$ is permitted at any node.

## Facts & Assumptions

**Given:** A finite DMN, independent source messages, a finite product input law conditional on $Q$, and finite test channels $P_{\hat Y_k|Y_k,X_k,Q}$.

[F1] [[def-finite-discrete-memoryless-network-and-code]]: nodes use causal encoders and each channel use has transition law $W(y_{[N]}|x_{[N]})$ independent of earlier uses.

[F2] [[lem-finite-joint-iid-strong-typicality]]: IID tuples from a finite joint law are strongly typical with probability tending to one.

[F3] [[lem-finite-conditional-codebook-covering]]: a conditionally generated finite random codebook contains a jointly typical test-channel reconstruction when its rate exceeds the relevant conditional mutual information.

[F4] [[lem-finite-conditional-typicality-packing]]: false independently generated candidate tuples have probability exponentially bounded by the corresponding conditional mutual information.

[F5] [[def-it-finite-conditional-mutual-information]], [[thm-it-finite-conditional-mutual-information-identities-and-equality]], and [[thm-it-finite-entropy-chain-rule]]: conditional mutual information has its finite conditional-KL definition and nonnegativity identity, and finite entropy and mutual information obey their chain rules.

## Proof

1.1 For block-Markov coding over $B$ blocks, generate independent message-indexed input codebooks for each node and, for each candidate input codeword, a reconstruction codebook whose words have law $P_{\hat Y_k|X_k,Q}$. In each block node $k$ selects a reconstruction index for its preceding observation and uses that index to select its next-block channel codeword. The causal encoders in [F1] can implement this one-block delay. [F1, given]

1.2 For each true input and observation tuple, the reconstruction indices are selected by joint typicality. The covering lemma [F3] makes all such selections succeed with probability tending to one if their rates are chosen above the corresponding $I(Y_k;\hat Y_k|X_k,Q)$. The true channel, input, and reconstruction tuples are typical with high probability by [F2]. [F2, F3, F5, step 1.1]

1.3 Each destination jointly tests a candidate tuple of source messages and reconstruction indices against its received blocks and the reconstruction codewords. A complete error analysis must partition false candidates by the set of incorrect message indices and reconstruction indices, apply [F4] to each class, sum the resulting exponents over all node subsets, and eliminate the auxiliary reconstruction rates. That derivation is not completed in this draft, so the displayed cut inequalities have not been established here. [F1, F4, F5, step 1.2]

1.4 For the all-zero rate tuple, give every source a singleton message set and have every destination output the unique messages. The error probability is zero for every blocklength, so this separate tuple is achievable even if a cut has a negative right-hand side. [F1, given]

## Unresolved proof obligation

For each $d$ and cut $A$, derive the simultaneous-decoder probability bound for every false-index pattern and show that eliminating the reconstruction rates gives exactly the difference
$I(X_A;Y_d,\hat Y_{A^c}|X_{A^c},Q)-I(Y_A;\hat Y_A|X_{[N]},Y_d,\hat Y_{A^c},Q)$.
The complete derivation is in the cited NNC proof, but it has not been reconstructed and checked as a local argument. This item is not ready for acceptance.
