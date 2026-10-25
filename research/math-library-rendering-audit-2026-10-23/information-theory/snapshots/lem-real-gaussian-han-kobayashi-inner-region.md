---
id: lem-real-gaussian-han-kobayashi-inner-region
kind: lemma
title: Gaussian Han-Kobayashi inner region for a fixed private-power split
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-axiom-of-choice, def-real-two-user-gaussian-interference-channel, cor-iid-finite-variance-weak-law, lem-scalar-gaussian-channel-mutual-information-power-bound]
aliases: []
proof_strategy: split-message-random-coding
axiom_use: AC is inherited through the Gaussian input laws and scalar-channel information supplier; the random-code selection at each finite blocklength uses no further choice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 6, Han-Kobayashi scheme and Gaussian message splitting, printed pp. 119–126.
    - title: Raul H. Etkin, David N. C. Tse, and Hua Wang, Gaussian Interference Channel Capacity to Within One Bit, IEEE Transactions on Information Theory 54(12), 2008
      url: https://arxiv.org/pdf/cs/0702045
      locator: §§3.2 and 4.2, power splitting and simultaneous decoding, PDF pp. 6–7 and 29–30.
---

## Statement

For either Gaussian model in [[def-real-two-user-gaussian-interference-channel]], choose private powers $0\le P_{1p},P_{2p}\le P_1,P_2$ and common powers $P_{ic}=P_i-P_{ip}$. Split each message into independent common and private parts, and transmit $X_i=U_i+V_i$ with independent centered Gaussian codewords of powers $P_{ic}$ and $P_{ip}$ (circular in the complex model). At receiver 1, decode $(U_1,V_1,U_2)$ and treat $V_2$ as Gaussian noise of variance $N_1=1+|h_{21}|^2P_{2p}$. At receiver 2, decode $(U_1,U_2,V_2)$ and treat $V_1$ as noise of variance $N_2=1+|h_{12}|^2P_{1p}$. A nonnegative rate split $R_i=R_{ic}+R_{ip}$ is achievable if, at each receiver $j$, every nonempty subset $T$ of its three decoded streams with positive total rate satisfies
$$\sum_{s\in T}R_s<\kappa\log_2\!\left(1+\frac{\sum_{s\in T}|a_{j,s}|^2P_s}{N_j}\right),$$
where $a_{1,1c}=a_{1,1p}=h_{11}$, $a_{1,2c}=h_{21}$, $a_{2,1c}=h_{12}$, and $a_{2,2c}=a_{2,2p}=h_{22}$; $\kappa=1/2$ for real and $1$ for complex channels. A zero-rate stream has a singleton message set and creates no false-message class; the all-zero split is always achievable. The closure of the union over feasible rate splits is an inner region.

## Facts & Assumptions

**Given:** The Gaussian channel in [F1], a fixed pair of private powers, and a nonnegative rate split satisfying the strict inequalities for every nonempty decoded-stream subset with positive total rate.

[A1] [[def-axiom-of-choice]]: AC is inherited through the nondegenerate Gaussian-law construction.

[F1] [[def-real-two-user-gaussian-interference-channel]]: the two receivers observe the stated linear combinations with independent unit-variance Gaussian noises and satisfy the stated power constraints.

[F2] [[cor-iid-finite-variance-weak-law]]: every IID finite-variance information-density summand obeys the weak law.

[F3] [[lem-scalar-gaussian-channel-mutual-information-power-bound]]: the scalar additive Gaussian channel mutual information equals its Gaussian variance formula for the centered Gaussian input specified here.

## Proof





1.1 Generate independent message-indexed Gaussian codebooks for $U_1,V_1,U_2,V_2$, with each coordinate law matching its assigned power. The two components at transmitter $i$ sum to a Gaussian input of power $P_i$; when one component has zero power, set its rate to zero and omit it. The private component of user 2 contributes independent Gaussian noise at receiver 1, and the private component of user 1 contributes independent Gaussian noise at receiver 2, with the variances $N_1,N_2$ stated above. [A1, F1, given]

2.1 At receiver $j$, let $\mathcal D_j$ be its three decoded streams. For every nonempty $T\subseteq\mathcal D_j$, define the information density $\imath_{j,T}(u_T;y|u_{T^c})=\ln\frac{w_j(y|u_{\mathcal D_j})}{\int w_j(y|u_T',u_{T^c})\prod_{s\in T}P_{U_s}(du_s')},$ where $w_j$ is the Gaussian output density with the other user's private stream included in its noise variance $N_j$. Decode the positive-rate streams by threshold tests for every subset with positive total rate. A zero-rate stream has a singleton message set, so it creates no competing codeword. Choose thresholds between $\ln2$ times each subset rate and its mutual information in nats. For each tested true subset, the information density is a sum of IID quadratic functions of Gaussian variables with finite variance, so [F2] makes the tests pass with probability tending to one. Condition on the complementary decoded streams and rescale the output by $N_j^{-1/2}$; [F3] and its Gaussian equality case give the stated subset mutual information in nats. [F1, F2, F3, step 1.1, algebra]

3.1 For either receiver and any nonempty subset $T$ of incorrectly decoded streams, $T$ has positive total rate; its false codewords are independent of the output and the correctly decoded streams. The likelihood ratio for that subset has mean one under this false-candidate law, so Markov's inequality bounds the chance of passing a threshold $n\tau_T$ by $e^{-n\tau_T}$. There are at most $e^{n\ln2\sum_{s\in T}R_s+o(n)}$ false tuples. The union bound over the tested subsets tends to zero because each threshold exceeds the corresponding rate sum in nats. [F1, given, step 2.1, algebra]

4.1 The ensemble error argument alone does not yet impose deterministic codebook powers. For fixed $0<\varepsilon<1$, instead generate each positive component at power $(1-\varepsilon)P_s$. The finitely many strict positive-rate subset inequalities remain valid for sufficiently small $\varepsilon$, by continuity; zero-power components have zero rate and are omitted. For user $i$, let $B_{i,j}$ be the coordinate-$j$ input energy $|U_i+V_i|^2$, averaged over all of its common/private message indices, including the cross term. These variables are IID across coordinates, have mean $(1-\varepsilon)P_i$, and satisfy $\mathbb E B_{i,j}^2\le\mathbb E|U_i+V_i|^4\le3P_i^2$ by Jensen and the real Gaussian fourth moment; in the circular complex case the sharper constant is $2P_i^2$. Thus the codebook's expected average input power has variance at most $3P_i^2/n$. Chebyshev shows that the probability of either user's power exceeding its unscaled constraint tends to zero, while Markov applied to the ensemble sum of receiver errors shows that the probability of an error exceeding the square root of that ensemble mean tends to zero. Consequently some deterministic codebook simultaneously meets both power constraints and has vanishing receiver errors. If $P_i=0$, its codeword is identically zero and no concentration is needed. Taking achievable closures and then $\varepsilon\downarrow0$ recovers the stated component powers and all boundary split rates by continuity. Singleton streams create no competing codewords; if every rate is zero, use the all-zero code and obtain zero error. This proves the full real and complex fixed-split region without changing the statement. [F1, F2, F3, step 1.1, step 2.1, step 3.1, given, choose, algebra] ∎
