---
id: thm-finite-multisource-multicast-noisy-network-coding-inner-bound
kind: theorem
title: Noisy network coding inner bound for finite multicast networks
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-finite-discrete-memoryless-network-and-code, lem-finite-or-euclidean-likelihood-ratio-network-coding, def-it-finite-conditional-mutual-information]
aliases: []
proof_strategy: direct
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
      locator: Section III, general multicast construction and simultaneous-decoding proof, printed pp. 14–18 of the 33-page manuscript.
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

**Given:** The finite DMN, independent source messages, finite $Q$, product inputs conditional on $Q$, and finite local reconstruction kernels in the statement.

[F1] [[def-finite-discrete-memoryless-network-and-code]]: nodes use causal encoders; destinations know their own messages; achievability uses average error over all required estimates.

[F2] [[lem-finite-or-euclidean-likelihood-ratio-network-coding]]: for finite alphabets the square-integrable local and packing likelihood hypotheses give precisely the displayed cut inner region, with finite coded time sharing, constant reconstructions, closure, and a separate singleton-message zero tuple; its finite assertion uses no choice axiom.

[F3] [[def-it-finite-conditional-mutual-information]]: finite conditional mutual information is the finite conditional-KL average, with the same logarithm convention for rates and informations.

## Proof





1.1 For each positive-probability value of $Q$, use the target law in the statement. Its alphabets are finite. A target-positive joint atom has positive local marginal-reconstruction probability and positive reference probability for every reference law in [F2], because all its displayed marginal factors are positive. Thus every required likelihood ratio is finite on target support; the finitely many log values are bounded and hence square-integrable. All cut informations are finite. No cost constraint is imposed. These observations verify every hypothesis of the finite branch of [F2], including arbitrary zero-probability letters, which can simply be omitted. [F2, F3, given, algebra]

2.1 Apply [F2] with this law and source/destination sets. Its independent messages, causal encoders and destination side information have exactly the conventions of [F1]. Its cut expression is $I(X_A;Y_d,\hat Y_{A^c}|X_{A^c},Q)-I(Y_A;\hat Y_A|X_{[N]},Y_d,\hat Y_{A^c},Q)$ for every required $A,d$, so every tuple satisfying the displayed strict inequalities is achievable. A constant reconstruction is allowed in [F2] and contributes zero local and conditional information. [F1, F2, step 1.1, given]

3.1 The closure-of-union conclusion follows from [F2], or by choosing a sequence of strict-region laws and rate tuples tending to the claimed point and selecting successively longer codes with error tending to zero and rates tending to that point. Independently, singleton message sets at every source and a destination that returns those unique messages have error exactly zero; this realizes the separate zero tuple even when a cut expression is negative. [F1, F2, step 2.1, construct] ∎
