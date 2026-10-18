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





1.1 Use the stated full powers $P_i$ in the codebook laws and information densities. Generate $M_i=\lceil2^{nR_i}\rceil$ codewords independently for each sender, with IID coordinates from its specified centered real or circular complex Gaussian input law. For a nonempty subset $S\subseteq\{1,2\}$, define its one-use information density by $$\imath_S(x_1,x_2;y):=\ln\frac{w(y|x_1,x_2)}{p_{Y|X_{S^c}}(y|x_{S^c})},$$ where $w$ is the Gaussian channel output density and the denominator averages $w$ over the Gaussian input laws of the senders in $S$. Use the sum of these densities over coordinates as the threshold statistic. For each $S$ with $R(S):=\sum_{i\in S}R_i>0$, choose $\tau_S$ so that $R(S)\ln2<\tau_S<I_S$, where $I_S=\mathbb E\imath_S$ is in nats. A subset with $R(S)=0$ has no false-message candidates and needs no threshold. For each tested subset the true statistic is a sum of IID quadratic polynomials in Gaussian variables with finite variance; [F2] makes its threshold test pass with probability tending to one. [A1, F1, F2, given, choose, algebra]

2.1 If a nonempty subset $S$ of positive total rate is wrong, its independently generated candidate codewords are independent of the output conditional on the correct codewords in $S^c$. By the definition in step 1.1, the exponential of the threshold statistic is the likelihood ratio of the true conditional output density to the density averaged over the candidate input law; its expectation under the false-candidate law is one. The nonnegative likelihood ratio and Markov's inequality therefore bound acceptance by $e^{-n\tau_S}$. Subsets of zero total rate cannot be wrong because all their message sets are singletons. [F1, given, step 1.1, algebra]

3.1 For each tested subset $S$, the number of false candidates is at most $e^{nR(S)\ln2+o(n)}$, so the union bound gives ensemble-average error $e_n\to0$. For $P_i>0$, write $K_i=nM_i$ and $D_i=\sum_{t,m}(|X_{i,t}(m)|^2-P_i)$; the power constraint is $D_i\le0$. Gaussian moments and independence give $\mathbb E D_i=0$, $v_i:=\mathbb E D_i^2>0$, and $\mathbb E D_i^4\le15v_i^2$: in the real case the ratio is $3+12/K_i$, and in the complex case it is $3+6/K_i$. Hölder gives $v_i\le(\mathbb E|D_i|)^{2/3}(\mathbb E D_i^4)^{1/3}$, hence $\mathbb E|D_i|\ge\sqrt{v_i/15}$. Since $\mathbb E(D_i)_-=\mathbb E|D_i|/2$, Cauchy–Schwarz gives $\Pr\{D_i<0\}\ge1/60$. If $P_i=0$, its codebook is identically zero. The two independently generated codebooks therefore meet both power constraints with probability at least $1/3600$. Markov bounds the probability of error exceeding $\sqrt{e_n}$ by $\sqrt{e_n}$; for large $n$ this is less than $1/3600$, so there exists a deterministic power-feasible codebook with error at most $\sqrt{e_n}\to0$ (if $e_n=0$, error is zero almost surely). For any fixed finite list of receivers satisfying their subset inequalities, apply steps 1.1–2.1 at each receiver to this same input ensemble and replace $e_n$ by the sum of their average errors; the identical selection then makes every receiver's error vanish. [step 1.1, step 2.1, algebra]

4.1 For each nonempty subset $S$, condition on the other codewords. The remaining signal is a centered real or circular complex Gaussian with variance $\sum_{i\in S}|a_i|^2P_i$. Its mutual information with the unit-noise output is exactly $I_S=\kappa\ln(1+\sum_{i\in S}|a_i|^2P_i)$ nats by [F3] and its Gaussian equality case. Dividing by $\ln2$ gives the rates in bits. Step 3.1 selects deterministic codes from exactly the full-variance ensemble stated above, establishing the strict region under the allowed powers. If both rates are zero, singleton message sets achieve zero error. Taking closure gives the stated closed MAC region, including faces where a zero-rate subset has zero mutual information. [A1, F1, F3, step 3.1, algebra] ∎
