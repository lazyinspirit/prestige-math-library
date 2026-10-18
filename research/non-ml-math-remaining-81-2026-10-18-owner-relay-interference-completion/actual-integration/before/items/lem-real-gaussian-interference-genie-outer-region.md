---
id: lem-real-gaussian-interference-genie-outer-region
kind: lemma
title: Genie-aided outer bounds for the two-user Gaussian interference channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-axiom-of-choice, def-real-two-user-gaussian-interference-channel, lem-it-fano-for-finite-message-density-observations, lem-standard-borel-memoryless-channel-mutual-information-tensorization, lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing, lem-scalar-gaussian-channel-mutual-information-power-bound]
aliases: []
proof_strategy: genie-aided-converse
axiom_use: AC is inherited through the Gaussian-law and scalar-channel information suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Raul H. Etkin, David N. C. Tse, and Hua Wang, Gaussian Interference Channel Capacity to Within One Bit, IEEE Transactions on Information Theory 54(12), 2008
      url: https://arxiv.org/pdf/cs/0702045
      locator: Theorems 1, 3, and 4, §§3.4 and 4.1, PDF pp. 12–13 and 21–26.
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 6, Gaussian genie bounds, printed pp. 123–129.
---

## Statement

For the complex Gaussian channel in [[def-real-two-user-gaussian-interference-channel]], the following are outer bounds in the listed regimes; all logarithms are base two. Write SNR and INR as defined there.

**Weak regime:** If $\mathrm{INR}_1<\mathrm{SNR}_2$ and $\mathrm{INR}_2<\mathrm{SNR}_1$, every achievable pair satisfies
$$R_1\le\log_2(1+\mathrm{SNR}_1),\quad R_2\le\log_2(1+\mathrm{SNR}_2),$$
$$R_1+R_2\le\log_2(1+\mathrm{SNR}_1)+\log_2\!\left(1+\frac{\mathrm{SNR}_2}{1+\mathrm{INR}_2}\right),$$
$$R_1+R_2\le\log_2(1+\mathrm{SNR}_2)+\log_2\!\left(1+\frac{\mathrm{SNR}_1}{1+\mathrm{INR}_1}\right),$$
$$R_1+R_2\le\log_2\!\left(1+\mathrm{INR}_1+\frac{\mathrm{SNR}_1}{1+\mathrm{INR}_2}\right)+\log_2\!\left(1+\mathrm{INR}_2+\frac{\mathrm{SNR}_2}{1+\mathrm{INR}_1}\right),$$
$$2R_1+R_2\le\log_2(1+\mathrm{SNR}_1+\mathrm{INR}_1)+\log_2\!\left(1+\mathrm{INR}_2+\frac{\mathrm{SNR}_2}{1+\mathrm{INR}_1}\right)+\log_2\!\left(\frac{1+\mathrm{SNR}_1}{1+\mathrm{INR}_2}\right),$$
$$R_1+2R_2\le\log_2(1+\mathrm{SNR}_2+\mathrm{INR}_2)+\log_2\!\left(1+\mathrm{INR}_1+\frac{\mathrm{SNR}_1}{1+\mathrm{INR}_2}\right)+\log_2\!\left(\frac{1+\mathrm{SNR}_2}{1+\mathrm{INR}_1}\right).$$

**Mixed regime:** If $\mathrm{INR}_1\ge\mathrm{SNR}_2$ and $\mathrm{INR}_2<\mathrm{SNR}_1$, every achievable pair satisfies the two individual bounds above and
$$R_1+R_2\le\log_2(1+\mathrm{SNR}_1)+\log_2\!\left(1+\frac{\mathrm{SNR}_2}{1+\mathrm{INR}_2}\right),\quad R_1+R_2\le\log_2(1+\mathrm{SNR}_1+\mathrm{INR}_1),$$
$$R_1+2R_2\le\log_2(1+\mathrm{SNR}_2+\mathrm{INR}_2)+\log_2\!\left(1+\mathrm{INR}_1+\frac{\mathrm{SNR}_1}{1+\mathrm{INR}_2}\right)+\log_2\!\left(1+\frac{\mathrm{SNR}_2}{1+\mathrm{INR}_1}\right).$$
The other mixed regime is obtained by interchanging user indices 1 and 2.

## Facts & Assumptions

**Given:** A complex Gaussian interference channel with independent messages and the SNR/INR convention in [F1].

[A1] [[def-axiom-of-choice]]: AC is inherited through the continuous Gaussian-law suppliers.

[F1] [[def-real-two-user-gaussian-interference-channel]]: $Y_1=h_{11}X_1+h_{21}X_2+Z_1$ and $Y_2=h_{12}X_1+h_{22}X_2+Z_2$, with independent unit circular Gaussian noises and the stated powers.

[F2] [[lem-it-fano-for-finite-message-density-observations]]: finite message entropy is bounded by decoding error for density-valued observations.

[F3] [[lem-scalar-gaussian-channel-mutual-information-power-bound]]: for a complex scalar Gaussian channel, $I(X;aX+Z)\le\ln(1+|a|^2\mathbb E|X-\mathbb EX|^2)$ nats, with equality for circular Gaussian inputs.

[F4] [[lem-standard-borel-memoryless-channel-mutual-information-tensorization]]: for arbitrary dependent inputs to a memoryless channel, vector mutual information is bounded by the sum of its one-use mutual informations.

[F5] [[lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing]]: conditional data processing applies to the deterministic message-to-codeword channel map given the other message.

## Proof

1.1 Revealing the other user's message to receiver $i$ fixes its codeword and leaves a memoryless complex Gaussian channel from user $i$ to receiver $i$, up to a known per-coordinate translation. Fano gives $nR_i\ln2\le I(M_i;Y_i^n|M_{3-i})+o(n)$ in nats. Conditional data processing [F5] in both directions removes the known translation and identifies message mutual information with that of the deterministic codeword. Apply [F4] for each value of $M_{3-i}$, then average; the vector mutual information is at most the sum of the scalar Gaussian mutual informations. By [F3], each scalar term is at most $\ln(1+|h_{ii}|^2\operatorname{Var}X_{i,j})\le\ln(1+\mathrm{SNR}_i)$ after Jensen's inequality and the power constraint. Dividing by $n\ln2$ gives $R_i\le\log_2(1+\mathrm{SNR}_i)$. [A1, F1, F2, F3, F4, F5, given, algebra]

1.2 The remaining sum-rate and weighted-sum inequalities require distinct genie observations, Gaussian-noise coupling under the weak/mixed regime inequalities, and entropy comparisons for the resulting augmented channels. The complete calculations for these bounds have not been reconstructed locally, so the statement is not yet proved in this draft. [F1, F2, F3, step 1.1]

## Unresolved proof obligation

Supply full genie and entropy derivations for every displayed sum-rate and weighted-sum bound, including the regime hypotheses that permit each noise coupling. The cited ETW paper proves these bounds, but that citation is not a substitute for the missing local argument.
