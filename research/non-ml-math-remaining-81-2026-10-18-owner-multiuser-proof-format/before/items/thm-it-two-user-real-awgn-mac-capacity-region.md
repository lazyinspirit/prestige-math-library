---
id: thm-it-two-user-real-awgn-mac-capacity-region
kind: theorem
title: No-feedback real AWGN MAC capacity region
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-it-two-user-real-awgn-mac-code, def-it-real-differential-entropy, lem-it-finite-gaussian-mixture-entropy-bounds, lem-it-fano-for-finite-message-density-observations]
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; a deterministic codebook is fixed from a nonempty positive-probability event in the finite-block Gaussian ensemble.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 15, Gaussian multiple-access channel
      url: https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf
    - title: Abbas El Gamal and Young-Han Kim, Network Information Theory, Lecture Notes 10, Gaussian Vector Channels and scalar Gaussian information bounds
      url: https://arxiv.org/pdf/1001.3404v3
---

## Statement

For the channel, independent private messages, average joint-error convention and expected average-power constraints in [[def-it-two-user-real-awgn-mac-code]], the capacity region in nats/use is
$$\overline{\bigcup}\left\{(R_1,R_2)\in[0,\infty)^2:\ R_1\le\frac12\ln(1+P_1/N),\ R_2\le\frac12\ln(1+P_2/N),\ R_1+R_2\le\frac12\ln(1+(P_1+P_2)/N)\right\}.$$
The overline means closure; equivalently the strict inequalities for positive-rate users are achievable and the closed displayed region is their closure. The theorem is for independent messages and separate no-feedback encoders.

## Facts & Assumptions

**Given:** $P_1,P_2\ge0$, $N>0$, independent uniform private messages, no feedback, expected average powers at most $P_j$, and average joint error tending to zero.

[F1] [[def-it-two-user-real-awgn-mac-code]]: the channel is $Y_i=X_{1i}+X_{2i}+Z_i$, the noises are independent with density $(2\pi N)^{-1/2}e^{-z^2/(2N)}$, and the input power constraints are $n^{-1}\sum_i\mathbb E X_{ji}^2\le P_j$.

[F2] [[lem-it-finite-gaussian-mixture-entropy-bounds]]: adding independent nondegenerate Gaussian noise to a finite-second-moment vector gives finite differential entropy, $h(Y^n)\le\sum_i h(Y_i)$, and each scalar term is at most $\frac12\ln(2\pi e\operatorname{Var}Y_i)$.

[F3] [[lem-it-fano-for-finite-message-density-observations]]: if a finite message is estimated from a density observation with error $\epsilon$, then $H(M\mid Y)\le\ln2+\epsilon\ln|\mathcal M|$.

## Proof

1.1 First assume $P_1,P_2>0$ and choose rates strictly inside all three bounds. By continuity choose $0<Q_j<P_j$ such that the same inequalities hold with $Q_j$. Generate independent codebooks whose $M_j=\lceil e^{nR_j}\rceil$ length-$n$ codewords have IID $N(0,Q_j)$ coordinates. [given, F1, choose, algebra]

1.2 For the three nonempty user subsets $S\subseteq\{1,2\}$ define the likelihood ratio $L_S(x_1^n,x_2^n;y^n)=w^n(y^n\mid x_1^n,x_2^n)/p_{Y^n\mid X_{S^c}^n}(y^n\mid x_{S^c}^n)$, where the denominator averages the Gaussian input law of the users in $S$. Decode the unique pair whose three log likelihood ratios exceed thresholds $n\tau_S$, chosen with $R(S)<\tau_S<\frac12\ln(1+Q(S)/N)$. [given, F1, step 1.1, choose]

1.3 For the transmitted pair, each $n^{-1}\ln L_S$ is an average of IID Gaussian log likelihood ratios with finite variance and mean $\frac12\ln(1+Q(S)/N)$; the variance is finite because each log ratio is a quadratic polynomial in a finite-dimensional Gaussian vector. Chebyshev's inequality makes the probability that any true threshold fails tend to zero. [F1, step 1.2, algebra]

1.4 If the wrong-message set is $S$, condition on the true complementary codewords and output. The wrong codewords are independent of that output and have the denominator input law, so $\mathbb E[L_S]=1$ under this reference law. Markov's inequality bounds each false threshold event by $e^{-n\tau_S}$. There are at most $e^{nR(S)+o(n)}$ such candidates; $\tau_S>R(S)$ and the finite union bound make the ensemble-average joint error tend to zero. [step 1.2, step 1.3, algebra, algebra]

1.5 For user $j$, the probability $p_{j,n}$ that one Gaussian codeword exceeds energy $nP_j$ is at most $\exp[-\frac n2(P_j/Q_j-1-\ln(P_j/Q_j))]$, by applying the Gaussian-square moment generating function and optimizing its positive parameter. Thus $p_{j,n}\to0$. The expected fraction of bad words is $p_{j,n}$; Markov's inequality makes both bad fractions at most $\sqrt{p_{j,n}}$ with probability tending to one. Since the ensemble mean error tends to zero, another Markov bound makes the event of error at most the square root of that mean have probability tending to one. The intersection of these events has positive probability for all large $n$, so fix one realization. Delete bad words and relabel. Each retained word meets its power constraint, retained rates still tend to $R_j$, and conditional error is at most the former error divided by the product of retained fractions, which tends to one. [F1, step 1.4, algebra, algebra, choose]

2.1 For any code and nonempty $S\subseteq\{1,2\}$, let $M_S$ be its message tuple and decode it using the receiver estimate together with the known complementary messages. Its error is at most the joint error $P_e$. Fano [F3] and the mutual-information identity give
$$nR(S)\le I(M_S;Y^n\mid M_{S^c})+\ln2+P_e nR(S).$$
Given all messages the output is a Gaussian translate, and conditioning on $M_{S^c}$ only translates $Y^n$ by the known complementary codeword. [given, F1, F3, algebra]

2.2 The signal coordinates from the users in $S$ are independent because their messages are independent. By [F2], subadditivity, the scalar Gaussian entropy bound and Jensen's inequality,
$$I(M_S;Y^n\mid M_{S^c})\le\sum_i\frac12\ln\!\left(1+\frac{\sum_{j\in S}\operatorname{Var}(X_{ji})}{N}\right)\le\frac n2\ln\!\left(1+\frac{\sum_{j\in S}P_j}{N}\right).$$
Here $\operatorname{Var}(X_{ji})\le\mathbb E X_{ji}^2$ and the expected block-power constraints bound the average of the summed variances. [F1, F2, step 2.1, algebra, algebra]

2.3 Divide the inequalities from steps 2.1–2.2 by $n$, let blocklength tend to infinity with $P_e\to0$, and take $S=\{1\},\{2\},\{1,2\}$. This gives all three converse bounds. [step 2.1, step 2.2, algebra]

3.1 If a power is zero, its input is zero almost surely under the expected-power constraint; remove that user and apply the one-user specialization of steps 1.1–2.3. If both powers are zero only rate $(0,0)$ is possible. Closing the achievable strict region proves the stated region, including its boundary. [F1, step 1.1, step 1.5, step 2.3, cases, algebra] ∎
