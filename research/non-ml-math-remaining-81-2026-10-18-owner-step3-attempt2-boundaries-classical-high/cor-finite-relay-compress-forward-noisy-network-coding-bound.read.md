---
id: cor-finite-relay-compress-forward-noisy-network-coding-bound
kind: corollary
title: Compress-forward and noisy-network-coding bounds for a finite relay channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [def-finite-discrete-memoryless-relay-channel-and-causal-code, thm-finite-multisource-multicast-noisy-network-coding-inner-bound, def-it-finite-conditional-mutual-information, thm-it-finite-conditional-mutual-information-identities-and-equality, thm-it-finite-entropy-chain-rule]
aliases: []
proof_strategy: specialization-and-chain-rule
axiom_use: No choice axiom is used; all alphabets are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Thomas M. Cover and Abbas A. El Gamal, Capacity Theorems for the Relay Channel, IEEE Transactions on Information Theory 25(5), 1979
      url: https://isl.stanford.edu/groups/elgamal/abbas_publications/J003.pdf
      locator: §VI, Theorem 6, equations (76)–(82) and compress-forward proof, printed pp. 581–582.
    - title: Sung Hoon Lim, Young-Han Kim, Abbas El Gamal, and Sae-Young Chung, Noisy Network Coding, IEEE Transactions on Information Theory 57(5), 2011
      url: https://isl.stanford.edu/~abbas/papers/Noisy%20Network%20Coding.pdf
      locator: §III, single-relay specialization, PDF pp. 11–12.
---

## Statement

For a finite relay channel, choose $P_XP_{X_r}P_{\hat Y_r|Y_r,X_r}$. Every positive noisy-network-coding rate
$$R<\min\{I(X;Y,\hat Y_r|X_r),\ I(X,X_r;Y)-I(Y_r;\hat Y_r|X,X_r,Y)\}$$
is achievable by the finite multicast NNC theorem in [F1]; rate $R=0$ is always achievable by a one-message code. In particular, if
$$I(Y_r;\hat Y_r|X_r,Y)\le I(X_r;Y),$$
then every positive compress-forward rate $R<I(X;Y,\hat Y_r|X_r)$ is included, along with the zero rate.

## Facts & Assumptions

**Given:** The finite relay model in [F2], the product input and test-channel law above, and the NNC inner-bound statement [F1].

[F1] [[thm-finite-multisource-multicast-noisy-network-coding-inner-bound]]: for the one-source, one-destination three-node network, its cut $A=\{s\}$ gives the first mutual-information term, and cut $A=\{s,r\}$ gives the second term.

[F2] [[def-finite-discrete-memoryless-relay-channel-and-causal-code]]: the one-way relay network has source, relay, destination and causal relay input.

[F3] [[def-it-finite-conditional-mutual-information]], [[thm-it-finite-conditional-mutual-information-identities-and-equality]], and [[thm-it-finite-entropy-chain-rule]]: the finite conditional-KL definition, nonnegativity identity, and entropy/mutual-information chain rules apply.

## Proof





1.1 Substitute $A=\{s\}$ and $A=\{s,r\}$ into [F1]. The first cut has no source-side reconstruction penalty because the source reconstruction can be constant; the second cut has only the relay penalty $I(Y_r;\hat Y_r|X,X_r,Y)$. These substitutions give the displayed NNC minimum. [F1, F2, given]

1.2 The test-channel Markov relation $\hat Y_r-Y_r-(X,Y)$ conditional on $X_r$ gives $$I(Y_r;\hat Y_r|X_r,Y)=I(X;\hat Y_r|X_r,Y)+I(Y_r;\hat Y_r|X,X_r,Y).$$ Indeed, expand $I(X,Y_r;\hat Y_r|X_r,Y)$ in both orders; the term $I(X;\hat Y_r|Y_r,X_r,Y)$ is zero by the test-channel factorization. [F3, given, algebra]

2.1 Subtract the first NNC term from the second and use [F3]: $$I(X,X_r;Y)-I(Y_r;\hat Y_r|X,X_r,Y)-I(X;Y,\hat Y_r|X_r)=I(X_r;Y)-I(Y_r;\hat Y_r|X_r,Y).$$ Thus the stated compress-forward condition makes the second term at least the first. Thus [F1] proves the asserted positive-rate achievability. [F1, F3, step 1.2, algebra]

3.1 At $R=0$, choose a singleton message set at the source and let the destination return its sole message. This achieves zero error without needing either strict mutual-information inequality. [F2, given] ∎
