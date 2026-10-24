---
id: thm-finite-strong-interference-channel-capacity
kind: theorem
title: Capacity region of a finite two-user interference channel under strong interference
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-finite-two-user-interference-channel-and-strong-regime, lem-finite-strong-interference-block-lift, thm-it-fano-inequality, thm-it-two-user-discrete-memoryless-mac-capacity-region, thm-it-finite-entropy-chain-rule]
aliases: []
proof_strategy: converse-and-random-coding
axiom_use: No choice axiom is used; all alphabets and codebooks are finite.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 6, §6.2, strong-interference capacity theorem and proof, printed pp. 114–119.
    - title: M. H. M. Costa and Abbas A. El Gamal, The Capacity Region of the Discrete Memoryless Interference Channel with Strong Interference, IEEE Transactions on Information Theory 33(5), 1987
      url: https://isl.stanford.edu/groups/elgamal/abbas_publications/J022.pdf
      locator: Theorem 1, printed pp. 710–711.
---

## Statement

For the channel and universal strong-interference assumptions of [[def-finite-two-user-interference-channel-and-strong-regime]], the capacity region is the closure of the union over finite $Q$ and laws $P_QP_{X_1|Q}P_{X_2|Q}$ of rate pairs satisfying
$$R_1\le I(X_1;Y_1|X_2,Q),\quad R_2\le I(X_2;Y_2|X_1,Q),$$
$$R_1+R_2\le \min\{I(X_1,X_2;Y_1|Q),I(X_1,X_2;Y_2|Q)\}.$$

## Facts & Assumptions

**Given:** A finite interference channel satisfying the universal inequalities in [F1].

[F1] [[def-finite-two-user-interference-channel-and-strong-regime]]: the two mutual-information orderings hold for every product input law.

[F2] [[lem-finite-strong-interference-block-lift]]: these orderings tensorize for independent codeword vectors.

[F3] [[thm-it-fano-inequality]]: decoding with error $P_e$ gives conditional message entropy at most $\ln2+P_e\ln|\mathcal M|$.

[F4] [[thm-it-two-user-discrete-memoryless-mac-capacity-region]]: for each finite product input law with public time sharing, the no-feedback DM-MAC capacity region has the two individual mutual-information bounds and the joint sum bound; its achievability proof uses independent random codebooks with the stated product law.

[F5] [[thm-it-finite-entropy-chain-rule]]: finite entropy chain rules and conditioning identities give the coordinatewise entropy bound in the converse.

## Proof





1.1 For any length-$n$ code, independence of the messages makes the induced vectors $X_1^n,X_2^n$ independent. Fano at receiver 1 and the fact that revealing $M_2$ cannot reduce mutual information give $nR_1\le I(X_1^n;Y_1^n|X_2^n)+o(n)$. The analogous receiver-2 bound is $nR_2\le I(X_2^n;Y_2^n|X_1^n)+o(n)$. [F1, F3, given, algebra]

1.2 Fix finite $Q$ and product conditional input laws. Apply [F4] to the marginal MAC at receiver 1 and to the marginal MAC at receiver 2. Both uses of [F4] generate the same ensemble of independent sender codebooks, because the input laws and time-sharing sequence are the same; only the two decoders differ. Under the strong-interference inequalities [F1], receiver 2's individual bound for sender 1 is at least receiver 1's intended individual bound, and receiver 1's individual bound for sender 2 is at least receiver 2's intended bound. The intersection of the two MAC regions is therefore exactly the three inequalities in the statement. [F1, F4, given]

2.1 For the first individual bound, the finite entropy chain rule [F5] and memorylessness give $$I(X_1^n;Y_1^n|X_2^n)=H(Y_1^n|X_2^n)-H(Y_1^n|X_1^n,X_2^n)\le\sum_i I(X_{1,i};Y_{1,i}|X_{2,i}),$$ where the first entropy is at most $\sum_iH(Y_{1,i}|X_{2,i})$ by the chain rule and conditioning, and the second entropy is exactly $\sum_iH(Y_{1,i}|X_{1,i},X_{2,i})$ by the memoryless channel. The same calculation applies to user 2. [F1, F2, F5, step 1.1, algebra]

2.2 By the block-lift inequality [F2], $I(X_2^n;Y_1^n|X_1^n)\ge I(X_2^n;Y_2^n|X_1^n)$. Since $M_2$ is independent of $M_1$, Fano at receiver 2 implies $$H(M_2|Y_1^n,M_1)=H(M_2|M_1)-I(M_2;Y_1^n|M_1)\le H(M_2|M_1)-I(M_2;Y_2^n|M_1)=o(n).$$ Fano at receiver 1 gives $H(M_1|Y_1^n)=o(n)$. Thus $n(R_1+R_2)\le I(M_1,M_2;Y_1^n)+o(n)\le I(X_1^n,X_2^n;Y_1^n)+o(n)\le\sum_i I(X_{1,i},X_{2,i};Y_{1,i})+o(n)$. Exchanging receivers gives the corresponding sum bound at $Y_2$. [F1, F2, F3, step 1.1, algebra]

3.1 Let $Q$ be uniform on $[n]$ and let $(X_1,X_2)$ have the time-$Q$ input law; since the message vectors are independent, $P_{X_1,X_2|Q}=P_{X_1|Q}P_{X_2|Q}$. Combining steps 2.1, 2.2 gives the stated inequalities for this $Q$. Taking limits and closure proves the converse. [step 2.1, step 2.2, algebra]

4.1 The [F4] random-coding proof gives ensemble-average error tending to zero at each receiver under the strict MAC inequalities. The expected sum of the two receiver errors is at most the sum of those two vanishing bounds, so a deterministic codebook pair exists for which both errors tend to zero. Closure removes strictness and the finite variable $Q$ supplies time sharing. [F4, step 1.2, algebra] ∎
