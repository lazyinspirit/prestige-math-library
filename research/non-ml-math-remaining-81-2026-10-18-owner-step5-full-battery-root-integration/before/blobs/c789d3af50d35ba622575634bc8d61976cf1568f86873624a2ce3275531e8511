---
id: lem-real-gaussian-interference-genie-outer-region
kind: lemma
title: Genie-aided outer bounds for the two-user Gaussian interference channel
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-axiom-of-choice, def-real-two-user-gaussian-interference-channel, lem-it-fano-for-finite-message-density-observations, lem-standard-borel-memoryless-channel-mutual-information-tensorization, lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing, lem-scalar-gaussian-channel-mutual-information-power-bound, lem-complex-gaussian-interference-entropy-estimates]
aliases: []
proof_strategy: genie-aided-converse
axiom_use: AC is inherited through the Gaussian-law and information-theoretic suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Raul H. Etkin, David N. C. Tse, and Hua Wang, Gaussian Interference Channel Capacity to Within One Bit
      url: https://arxiv.org/pdf/cs/0702045
      locator: Theorems 1, 3, and 4, printed pp.13–14 and 23–29.
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

**Given:** A complex Gaussian interference code with independent messages and the SNR/INR convention below; logarithms and entropies in the proof are base two.

[A1] [[def-axiom-of-choice]]: AC is inherited through the Gaussian-law and information suppliers.

[F1] [[def-real-two-user-gaussian-interference-channel]]: the channel has independent unit circular Gaussian receiver noises and the stated average powers.

[F2] [[lem-it-fano-for-finite-message-density-observations]]: a vanishing-error decoder gives a message-entropy bound by mutual information plus $o(n)$.

[F3] [[lem-standard-borel-memoryless-channel-mutual-information-tensorization]]: vector mutual information on a memoryless channel is bounded by the sum of its coordinate values.

[F4] [[lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing]]: conditional chain rules and data processing identify deterministic-message and codeword information and allow revealing side information.

[F5] [[lem-scalar-gaussian-channel-mutual-information-power-bound]]: the scalar Gaussian information power bound and its equality case.

[F6] [[lem-complex-gaussian-interference-entropy-estimates]]: the entropy-difference bound and every unconditioned and genie-conditioned output entropy estimate used below, with only average power assumptions.

## Proof





1.1 Write $a=\mathrm{SNR}_1$, $b=\mathrm{SNR}_2$, $c=\mathrm{INR}_1$, $d=\mathrm{INR}_2$. Give $M_2$ to receiver 1 and subtract its deterministic codeword. Fano, conditional data processing in both directions, and tensorization give $nR_1\le\sum_j I(X_{1,j};h_{11}X_{1,j}+Z_{1,j})+o(n)$. The scalar Gaussian power bound followed by Jensen and the average input constraint gives $R_1\le\log_2(1+a)$. Reflection gives $R_2\le\log_2(1+b)$. The same argument applies when a direct gain vanishes and then forces the corresponding rate to zero. Throughout the proof independent messages give independent user input vectors, regardless of coordinate dependence inside a vector; the additive Fano remainders disappear on division by $n$ and passage to the coding limit. [A1, F1, F2, F3, F4, F5, given, algebra]

2.1 Reveal $X_2^n$ to receiver 1. The chain rule and independent inputs give the following exact expansion of the two augmented mutual informations: $I(X_1^n;Y_1^n|X_2^n)+I(X_2^n;Y_2^n)=h(Y_2^n)-h(Z_1^n)+h(h_{11}X_1^n+Z_1^n)-h(h_{12}X_1^n+Z_2^n)$. If $P_1=0$, the input vector is zero and this entropy difference and the claimed logarithmic ratio are both zero. Otherwise, if $a\ge d$, the entropy-difference estimate [F6] applies with $s=|h_{11}|^2$, $t=|h_{12}|^2$, $P=P_1$; phases are removed by unit-modulus rotations. This is precisely the coupling condition $|h_{11}|\ge|h_{12}|$: the lower-SNR observation can be formed by scaling the higher-SNR observation and adding circular Gaussian noise of variance $1-t/s$. The proof of [F6] covers zero gains without division by a cross gain. Its unconditioned-output bound therefore yields $R_1+R_2\le\log_2(1+b+d)+\log_2((1+a)/(1+d))=\log_2(1+a)+\log_2(1+b/(1+d))$. Only $a\ge d$ is needed. Reflecting the argument gives the second weak sum bound under $b\ge c$, using the reflected noise coupling. [F1, F2, F4, F6, step 1.1, given, construct, algebra]

2.2 Define $S_1^n=h_{12}X_1^n+Z_2^n$ and $S_2^n=h_{21}X_2^n+Z_1^n$ using independent receiver noises. Give $S_1^n$ to receiver 1 and $S_2^n$ to receiver 2. Expanding both augmented informations gives $I(X_1^n;Y_1^n,S_1^n)+I(X_2^n;Y_2^n,S_2^n)=h(Y_1^n|S_1^n)+h(Y_2^n|S_2^n)-h(Z_1^n)-h(Z_2^n)$: the positive $h(S_1^n)$ and $h(S_2^n)$ cancel the interference-plus-noise entropies of the two conditional channels. Applying the two conditional-output estimates in [F6] and $h(Z_i^n)=n\log_2(\pi e)$ proves the third displayed weak sum bound. This calculation is valid in every regime and requires no degradation inequality. [F1, F2, F4, F6, step 1.1, given, construct, algebra]

3.1 Add two copies of receiver 1's Fano bound and one of receiver 2's. Augment receiver 2 by $S_2^n$ and one receiver 1 copy by $X_2^n$. The resulting information sum equals $h(Y_1^n)+h(Y_2^n|S_2^n)-2h(Z_1^n)+h(h_{11}X_1^n+Z_1^n)-h(h_{12}X_1^n+Z_2^n)$. Indeed the three information terms contribute, respectively, $h(Y_1^n)-h(S_2^n)$, $h(S_2^n)+h(Y_2^n|S_2^n)-h(h_{12}X_1^n+Z_2^n)-h(Z_1^n)$, and $h(h_{11}X_1^n+Z_1^n)-h(Z_1^n)$. The unconditioned, conditional, and entropy-difference estimates of [F6] give $2R_1+R_2\le\log_2(1+a+c)+\log_2(1+d+b/(1+c))+\log_2((1+a)/(1+d))$. The only degradation hypothesis is $a\ge d$, exactly as in step 2.1. Reflection proves the displayed $R_1+2R_2$ bound under $b\ge c$. Thus the stated weak regime supplies every required coupling. [F1, F2, F4, F6, step 1.1, step 2.1, step 2.2, given, algebra]

3.2 In the mixed regime $c\ge b$ and $a>d$, the individual bounds and first sum bound still follow from steps 1.1 and 2.1. For the MAC sum bound, receiver 1 first decodes $M_1$. On the event of correct decoding it subtracts $h_{11}X_1^n$ and obtains $h_{21}X_2^n+Z_1^n$. If $P_2=0$, step 1.1 gives $R_2=0$ and the required MAC sum bound already follows from the individual bound. Otherwise, if $h_{21}\ne0$, scale by $h_{22}/h_{21}$ and add independent circular Gaussian noise of variance $1-|h_{22}/h_{21}|^2$, which is nonnegative because $c\ge b$ and $P_2>0$. Add the known vector $h_{12}X_1^n$ and apply receiver 2's decoder. Coupling this simulation to the one using the true $M_1$ bounds its joint-message error by the sum of the two original errors; a deterministic MAP decoder has no larger average error. Joint-message Fano and the unconditioned-output estimate [F6] give $R_1+R_2\le\log_2(1+a+c)$. If $h_{21}=0$, then $b=c=0$ and step 1.1 forces $R_2=0$, so the same sum bound follows immediately. This establishes the exact mixed sum claim, including degenerate gains. [F1, F2, F4, F6, step 1.1, step 2.1, given, construct, algebra, cases]

4.1 For the mixed weighted bound add the three Fano information terms $I(X_1^n;Y_1^n,S_1^n)$, $I(X_2^n;Y_2^n)$, and $I(X_2^n;Y_2^n,S_2^n|X_1^n)$. The first expands as $h(S_1^n)-h(Z_2^n)+h(Y_1^n|S_1^n)-h(S_2^n)$, the second as $h(Y_2^n)-h(S_1^n)$, and the third as $h(S_2^n)-h(Z_1^n)+h(Y_2^n|S_2^n,X_1^n)-h(Z_2^n)$. Their sum is $h(Y_1^n|S_1^n)+h(Y_2^n)+h(Y_2^n|S_2^n,X_1^n)-h(Z_1^n)-2h(Z_2^n)$. Apply the three corresponding bounds in [F6] to obtain exactly $R_1+2R_2\le\log_2(1+b+d)+\log_2(1+c+a/(1+d))+\log_2(1+b/(1+c))$. This particular weighted estimate is universal and uses no degradation condition. Reflection gives the other mixed regime. Combining the preceding steps proves every displayed inequality with precisely the hypotheses asserted in the statement. [F1, F2, F4, F6, step 1.1, step 2.2, step 3.2, given, algebra] ∎
