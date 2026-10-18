---
id: lem-real-gaussian-multiple-access-random-coding-region
kind: lemma
title: Random coding achieves the finite-dimensional Gaussian multiple-access region
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps: [def-axiom-of-choice, def-real-two-user-gaussian-interference-channel, lem-scalar-gaussian-channel-mutual-information-power-bound, cor-iid-finite-variance-weak-law]
aliases: []
proof_strategy: information-density-random-coding
axiom_use: AC is inherited from the Gaussian input-law and scalar-channel information suppliers; at each blocklength the random codebook is a finite-dimensional Gaussian random vector. Deterministic code selection below enforces both the average power constraints and the decoding error bound.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 4, §4.5, Gaussian multiple-access channel, printed pp. 78–83.
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Cambridge University Press prepublication book"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 18, §18.2, Shannon random-coding bound and information-density threshold decoding, printed pp. 351–355.
---

## Statement

At either receiver of the Gaussian channel in [[def-real-two-user-gaussian-interference-channel]], independent Gaussian codebooks with powers $P_1,P_2$ achieve every nonnegative rate pair for which each nonempty subset $T\subseteq\{1,2\}$ with $\sum_{i\in T}R_i>0$ satisfies
$$\sum_{i\in T}R_i<\kappa\log_2\!\left(1+\sum_{i\in T}|a_i|^2P_i\right),$$
where that receiver observes $Y=a_1X_1+a_2X_2+Z$ with unit-variance real or complex Gaussian noise and $\kappa=1/2$ or $1$, respectively. The codebook symbols are centered $N(0,P_i)$ in the real model and circular $\mathcal{CN}(0,P_i)$ in the complex model. A subset of zero total rate has no false-message candidates and requires no strict inequality; in particular the zero pair is achieved by singleton message sets. The closure of this achievable set is the usual closed Gaussian multiple-access region.

## Facts & Assumptions

**Given:** The Gaussian channel in [F1], independent Gaussian input laws, and a nonnegative rate pair satisfying the strict inequality for every nonempty subset with positive total rate.

[F1] [[def-real-two-user-gaussian-interference-channel]]: the noise is independent standard real Gaussian or unit circular complex Gaussian, with the displayed power convention.

[A1] [[def-axiom-of-choice]]: AC is assumed by the Gaussian-law and scalar-channel information suppliers.

[F2] [[cor-iid-finite-variance-weak-law]]: IID square-integrable real random variables obey the weak law, with deviation probability bounded by variance divided by sample size and squared tolerance.

[F3] [[lem-scalar-gaussian-channel-mutual-information-power-bound]]: the mutual information of a scalar additive Gaussian channel is bounded by its variance formula, with equality for the centered Gaussian input specified here.

## Proof





1.1 First replace every positive allowed power $P_i$ by $P_i^{\prime}=(1-\eta)P_i$ for a sufficiently small $\eta>0$. Every tested subset inequality remains strict by continuity of its logarithm; a zero allowed power stays zero. Use these reduced powers in the codebook law and all information densities below, and subsequently take closure as $\eta\downarrow0$. Generate $M_i=\lceil2^{nR_i}\rceil$ codewords independently for each sender, with IID coordinates from its specified centered real or circular complex Gaussian input law. For a nonempty subset $S\subseteq\{1,2\}$, define its one-use information density by $$\imath_S(x_1,x_2;y):=\ln\frac{w(y|x_1,x_2)}{p_{Y|X_{S^c}}(y|x_{S^c})},$$ where $w$ is the Gaussian channel output density and the denominator averages $w$ over the Gaussian input laws of the senders in $S$. Use the sum of these densities over coordinates as the threshold statistic. For each $S$ with $R(S):=\sum_{i\in S}R_i>0$, choose $\tau_S$ so that $R(S)\ln2<\tau_S<I_S$, where $I_S=\mathbb E\imath_S$ is in nats. A subset with $R(S)=0$ has no false-message candidates and needs no threshold. For each tested subset the true statistic is a sum of IID quadratic polynomials in Gaussian variables with finite variance; [F2] makes its threshold test pass with probability tending to one. [A1, F1, F2, given, choose, algebra]

2.1 If a nonempty subset $S$ of positive total rate is wrong, its independently generated candidate codewords are independent of the output conditional on the correct codewords in $S^c$. By the definition in step 1.1, the exponential of the threshold statistic is the likelihood ratio of the true conditional output density to the density averaged over the candidate input law; its expectation under the false-candidate law is one. The nonnegative likelihood ratio and Markov's inequality therefore bound acceptance by $e^{-n\tau_S}$. Subsets of zero total rate cannot be wrong because all their message sets are singletons. [F1, given, step 1.1, algebra]

3.1 For each tested subset $S$, the number of false candidates is at most $e^{nR(S)\ln2+o(n)}$. Since $R(S)\ln2<\tau_S$, the union bound makes the total error probability vanish. Write $e_n$ for the ensemble-average error, which tends to zero. For sender $i$, the uniform-message average codeword power is $W_{i,n}=(nM_i)^{-1}\sum_{t=1}^n\sum_{m=1}^{M_i}|X_{i,t}(m)|^2$. It has expectation $P_i^{\prime}$ and variance at most $c_i/n$, where $c_i=\operatorname{Var}(|X_i|^2)<\infty$, because all summands are independent and $M_i\ge1$. For $P_i>0$, Chebyshev gives $\Pr\{W_{i,n}>P_i\}\le c_i/[n(P_i-P_i^{\prime})^2]\to0$; when $P_i=0$ every symbol is zero and the constraint holds identically. Markov gives $\Pr\{P_e(\mathcal C_n)>\sqrt{e_n}\}\le\sqrt{e_n}$, with the zero-error case interpreted directly. Thus for all sufficiently large $n$, the union of the two power-failure events and the error-failure event has probability less than one. A deterministic codebook outside their union meets both power constraints and has error at most $\sqrt{e_n}\to0$. The same construction works simultaneously for any fixed finite list of Gaussian receivers: sum their ensemble-average errors before applying Markov and use the same power events. [step 1.1, step 2.1, algebra]

4.1 For each nonempty subset $S$, condition on the other codewords. The remaining signal is a centered real or circular complex Gaussian with variance $\sum_{i\in S}|a_i|^2P_i^{\prime}$. Its mutual information with the unit-noise output is exactly $I_S=\kappa\ln(1+\sum_{i\in S}|a_i|^2P_i^{\prime})$ nats by [F3] and its Gaussian equality case. Dividing by $\ln2$ gives the reduced-power rates in bits. Every strict displayed inequality at the original powers persists for sufficiently small $\eta>0$, so these codes establish the claimed strict region at the original allowed powers. If both rates are zero, singleton message sets achieve zero error. Taking closure gives the stated closed MAC region, including faces where a zero-rate subset has zero mutual information. [A1, F1, F3, step 3.1, algebra] ∎
