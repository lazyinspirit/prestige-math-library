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
$$\overline{\left\{(R_1,R_2)\in[0,\infty)^2:\ R_1\le\frac12\ln(1+P_1/N),\ R_2\le\frac12\ln(1+P_2/N),\ R_1+R_2\le\frac12\ln(1+(P_1+P_2)/N)\right\}}.$$
The overline means closure; equivalently the strict inequalities for positive-rate users are achievable and the closed displayed region is their closure. The theorem is for independent messages and separate no-feedback encoders.

## Facts & Assumptions

**Given:** $P_1,P_2\ge0$, $N>0$, independent uniform private messages, no feedback, expected average powers at most $P_j$, and average joint error tending to zero.

[F1] [[def-it-two-user-real-awgn-mac-code]]: the channel is $Y_i=X_{1i}+X_{2i}+Z_i$, the noises are independent with density $(2\pi N)^{-1/2}e^{-z^2/(2N)}$, and the input power constraints are $n^{-1}\sum_i\mathbb E X_{ji}^2\le P_j$.

[F2] [[lem-it-finite-gaussian-mixture-entropy-bounds]]: adding independent nondegenerate Gaussian noise to a finite-second-moment vector gives finite differential entropy, $h(Y^n)\le\sum_i h(Y_i)$, and each scalar term is at most $\frac12\ln(2\pi e\operatorname{Var}Y_i)$.

[F3] [[lem-it-fano-for-finite-message-density-observations]]: if a finite message is estimated from a density observation with error $\epsilon$, then $H(M\mid Y)\le\ln2+\epsilon\ln|\mathcal M|$.

## Proof

1.1 First assume $P_1,P_2>0$ and choose rates strictly inside all three bounds. By continuity choose $0<Q_j<P_j$ such that the same inequalities hold with $Q_j$. Generate independent codebooks whose $M_j=\lceil e^{nR_j}\rceil$ length-$n$ codewords have IID $N(0,Q_j)$ coordinates. [given, F1, choose, algebra]

1.2 For each nonempty $S\subseteq\{1,2\}$, let $M_S$ denote its message tuple and let $g_S$ be the corresponding projection of the Borel joint decoder; with $M_{S^c}$ supplied, $g_S(Y^n)$ is a measurable estimator into the finite alphabet of $M_S$ and has error at most $P_e$. For fixed messages the output density is $$w_n(y^n\mid m_1,m_2)=\prod_{i=1}^n\phi_N(y_i-x_{1i}(m_1)-x_{2i}(m_2)),$$ which is positive; let $p_n(y^n\mid m_{S^c})$ be its average over the uniform $M_S$. Define $I(M_S;Y^n\mid M_{S^c})$ here as the expectation of $\ln[w_n(Y^n\mid M_1,M_2)/p_n(Y^n\mid M_{S^c})]$. Bayes' rule identifies this expectation with $H(M_S\mid M_{S^c})-H(M_S\mid Y^n,M_{S^c})$. The factorization of $w_n$ and the conditional density factorization of $p_n$ over successive outputs make the log ratio a sum of the one-use conditional log ratios, so this definition has the chain rule used below; all terms are integrable because the codebooks are finite and the Gaussian-mixture output entropies are finite by [F2]. Fano [F3], independence of the messages and $H(M_S)=nR(S)$ now give $$nR(S)\le I(M_S;Y^n\mid M_{S^c})+\ln2+P_e nR(S).$$ [given, F1, F2, F3, algebra]

2.1 For the three nonempty user subsets $S\subseteq\{1,2\}$ write $Q(S):=\sum_{j\in S}Q_j$ and define the likelihood ratio $L_S(x_1^n,x_2^n;y^n)=w^n(y^n\mid x_1^n,x_2^n)/p_{Y^n\mid X_{S^c}^n}(y^n\mid x_{S^c}^n)$, where the denominator averages the Gaussian input law of the users in $S$. Decode the unique pair whose three log likelihood ratios exceed thresholds $n\tau_S$, chosen with $R(S)<\tau_S<\frac12\ln(1+Q(S)/N)$; if no pair or more than one pair passes all three tests, output the fixed default pair $(1,1)$. The finitely many continuous likelihood-ratio tests have Borel pass sets, so this rule is a Borel-measurable decoder. [given, F1, step 1.1, choose]

2.2 The density-ratio chain rule from step 1.2 gives $I(M_S;Y^n\mid M_{S^c})=\sum_i I(M_S;Y_i\mid M_{S^c},Y^{i-1})$. For fixed messages and past outputs, the current output is a translate of $Z_i$, so direct integration of the Gaussian log density gives $h(Y_i\mid M_1,M_2,Y^{i-1})=h(Z_i)$. If $S=\{1\}$, then conditioned on $(M_2,Y^{i-1})$ the output is a finite Gaussian mixture with random shift $X_{1i}$; the conditional density-ratio formula gives $I(M_1;Y_i\mid M_2,Y^{i-1})=h(Y_i\mid M_2,Y^{i-1})-h(Z_i)$. Apply the scalar conditional bound in [F2] and the law of total variance to obtain $$I(M_1;Y_i\mid M_2,Y^{i-1})\le\frac12\ln\!\left(1+\frac{\operatorname{Var}(X_{1i})}{N}\right),$$ since $X_{1i}$ is independent of $M_2$ and $\mathbb E\operatorname{Var}(X_{1i}\mid M_2,Y^{i-1})\le\operatorname{Var}(X_{1i})$. The same argument with users interchanged gives the $S=\{2\}$ bound. For $S=\{1,2\}$, condition only on $Y^{i-1}$ and use the random shift $X_{1i}+X_{2i}$; its averaged conditional variance is at most $\operatorname{Var}(X_{1i}+X_{2i})=\operatorname{Var}(X_{1i})+\operatorname{Var}(X_{2i})$ by the law of total variance and independence of the two messages. Thus $$I(M_1,M_2;Y_i\mid Y^{i-1})\le\frac12\ln\!\left(1+\frac{\operatorname{Var}(X_{1i})+\operatorname{Var}(X_{2i})}{N}\right).$$ In each bound the conditional output is a scalar Gaussian convolution, so [F2] also ensures its differential entropy is finite. Jensen's inequality and the expected block-power constraints give the three converse bounds after summing over $i$. [F1, F2, step 1.2, algebra, algebra]

3.1 For the transmitted pair and a fixed $S$, subtract the known complementary signal from $Y_i$ and write $T_i=\sum_{j\in S}X_{ji}$. Under the random-code ensemble, $T_i\sim N(0,Q(S))$ is independent of $Z_i$, so the single-use log likelihood ratio in step 2.1 equals $$\ln\frac{\phi_N(Z_i)}{\phi_{N+Q(S)}(T_i+Z_i)}=\frac12\ln\frac{N+Q(S)}N-\frac{Z_i^2}{2N}+\frac{(T_i+Z_i)^2}{2(N+Q(S))}.$$ Its expectation is $\frac12\ln(1+Q(S)/N)$ because the two normalized quadratic terms each have expectation $1/2$; its variance is finite because it is a quadratic polynomial in a finite-dimensional Gaussian vector. The summands are IID across coordinates. Chebyshev's inequality makes the probability that any true threshold fails tend to zero. [F1, step 2.1, algebra]

3.2 Step 2.2 and the expected block-power constraints bound $I(M_S;Y^n\mid M_{S^c})/n$ uniformly for each nonempty $S$. The Fano inequalities in step 1.2 then bound the code rates whenever $P_e<1/2$, so their normalized remainders tend to zero along a reliable sequence. Dividing by $n$, letting blocklength tend to infinity with $P_e\to0$, and taking $S=\{1\},\{2\},\{1,2\}$ gives all three converse bounds. [step 1.2, step 2.2, algebra]

4.1 If the wrong-message set is $S$, condition on the true complementary codewords and output. The wrong codewords are independent of that output and have the denominator input law, so $\mathbb E[L_S]=1$ under this reference law. Markov's inequality bounds each false threshold event by $e^{-n\tau_S}$. There are at most $e^{nR(S)+o(n)}$ such candidates; $\tau_S>R(S)$ and the finite union bound make the ensemble-average joint error tend to zero. [step 2.1, step 3.1, algebra, algebra]

5.1 For user $j$, the probability $p_{j,n}$ that one Gaussian codeword exceeds energy $nP_j$ is at most $\exp[-\frac n2(P_j/Q_j-1-\ln(P_j/Q_j))]$, by applying the Gaussian-square moment generating function and optimizing its positive parameter. Thus $p_{j,n}\to0$. The expected fraction of bad words is $p_{j,n}$; Markov's inequality makes both bad fractions at most $\sqrt{p_{j,n}}$ with probability tending to one. Since the ensemble mean error tends to zero, another Markov bound makes the event of error at most the square root of that mean have probability tending to one. The intersection of these events has positive probability for all large $n$, so fix one realization. Delete bad words and relabel. Each retained word meets its power constraint, retained rates still tend to $R_j$, and conditional error is at most the former error divided by the product of retained fractions, which tends to one. [F1, step 4.1, algebra, algebra, choose]

6.1 If a power is zero, its input is zero almost surely under the expected-power constraint; remove that user and apply the one-user specialization of steps 1.1, 2.1, 3.1, 4.1, 5.1, 1.2, 2.2 and 3.2. If both powers are zero only rate $(0,0)$ is possible. Closing the achievable strict region proves the stated region, including its boundary. [F1, step 1.1, step 5.1, step 3.2, cases, algebra] ∎

