---
id: cor-finite-two-way-relay-noisy-network-coding-region
kind: corollary
title: Noisy-network-coding inner region for the finite two-way relay channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [def-finite-two-way-relay-channel-and-causal-code, thm-finite-multisource-multicast-noisy-network-coding-inner-bound, def-it-finite-conditional-mutual-information, thm-it-finite-conditional-mutual-information-identities-and-equality, thm-it-finite-entropy-chain-rule]
aliases: []
proof_strategy: specialization
axiom_use: No choice axiom is used; all alphabets are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Sung Hoon Lim, Young-Han Kim, Abbas El Gamal, and Sae-Young Chung, Noisy Network Coding, IEEE Transactions on Information Theory 57(5), 2011
      url: https://isl.stanford.edu/~abbas/papers/Noisy%20Network%20Coding.pdf
      locator: §II, AWGN two-way relay model, and §IV, DMN specialization, PDF pp. 7–9 and 13–14.
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 17, two-way relay channel and noisy network coding, printed pp. 444–453.
---

## Statement

For the finite two-way relay channel in [[def-finite-two-way-relay-channel-and-causal-code]], choose independent inputs $P_{X_1}P_{X_2}P_{X_r}$ and a relay test channel $P_{\hat Y_r|Y_r,X_r}$. The following rates are achievable by the finite multicast NNC theorem [F1]:
$$R_1<\min\{I(X_1;Y_2,\hat Y_r|X_2,X_r),\ I(X_1,X_r;Y_2|X_2)-I(Y_r;\hat Y_r|X_1,X_2,X_r,Y_2)\},$$
$$R_2<\min\{I(X_2;Y_1,\hat Y_r|X_1,X_r),\ I(X_2,X_r;Y_1|X_1)-I(Y_r;\hat Y_r|X_1,X_2,X_r,Y_1)\}.$$
The closure of the union over such laws, together with the zero-rate pair, is an inner region, not asserted to be capacity. The zero pair is attained by singleton message sets at both terminals.

## Facts & Assumptions

**Given:** The finite two-way relay model, independent terminal messages, and the input and relay test-channel laws above.

[F1] [[thm-finite-multisource-multicast-noisy-network-coding-inner-bound]]: for each destination, every cut separating that destination from its required message sources gives the corresponding NNC rate inequality.

[F2] [[def-finite-two-way-relay-channel-and-causal-code]]: terminal 1 wants terminal 2's message and terminal 2 wants terminal 1's message; all inputs depend only on local messages and past local outputs.

[F3] [[def-it-finite-conditional-mutual-information]], [[thm-it-finite-conditional-mutual-information-identities-and-equality]], and [[thm-it-finite-entropy-chain-rule]]: the finite conditional-KL definition, nonnegativity identity, and entropy/mutual-information chain rules apply.

## Proof





1.1 For destination 2 and message source 1, the cut containing only node 1 yields $I(X_1;Y_2,\hat Y_r|X_2,X_r)$; the cut containing nodes 1 and $r$ yields $I(X_1,X_r;Y_2|X_2)-I(Y_r;\hat Y_r|X_1,X_2,X_r,Y_2)$. The other node's observation reconstruction may be constant. These are the two bounds on $R_1$. [F1, F2, given]

2.1 For destination 1 and message source 2, the two cuts are respectively node 2 alone and nodes 2 with the relay. Substitution into [F1] yields the displayed two bounds on $R_2$. Both destinations can use their own message as side information, as in [F2]. [F1, F2, step 1.1]

3.1 Taking the intersection of the two destination constraints and then closure over rates yields the stated inner region; the finite mutual-information quantities use the chain-rule and conditional-law conventions of [F3]. The simultaneous multicast code supplied by [F1] serves both destinations, with each terminal using its own message as side information. [F1, F3, step 1.1, step 2.1, algebra]

4.1 If $R_1=R_2=0$, both terminals use singleton message sets and return their unique required messages, so the error probability is zero. This includes the zero-rate pair even if a displayed right-hand side is negative. [F2, given] ∎
