---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-real-gaussian-strong-interference-capacity-region.json
  precheck: pass
id: thm-real-gaussian-strong-interference-capacity-region
kind: theorem
title: Exact strong-interference region for the two-user Gaussian interference channel
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-axiom-of-choice, def-real-two-user-gaussian-interference-channel, lem-real-gaussian-multiple-access-random-coding-region, lem-it-fano-for-finite-message-density-observations, lem-standard-borel-memoryless-channel-mutual-information-tensorization, lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing, lem-scalar-gaussian-channel-mutual-information-power-bound]
aliases: []
proof_strategy: gaussian-multiple-access-and-degradation
axiom_use: AC is inherited through the Gaussian random-coding and scalar-channel information suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 6, strong-interference capacity region, printed pp. 114–119; Chapter 6, Gaussian specialization, pp. 122–126.
    - title: M. H. M. Costa and Abbas A. El Gamal, The Capacity Region of the Discrete Memoryless Interference Channel with Strong Interference, IEEE Transactions on Information Theory 33(5), 1987
      url: https://isl.stanford.edu/groups/elgamal/abbas_publications/J022.pdf
      locator: Theorem 1, printed pp. 710–711.
---

## Statement

For the real or complex Gaussian interference channel of [[def-real-two-user-gaussian-interference-channel]], assume the strong regime
$$|h_{12}|\ge|h_{11}|,\qquad |h_{21}|\ge|h_{22}|.$$
Then the capacity region is the set of nonnegative rate pairs satisfying
$$R_1\le\kappa\log_2(1+\mathrm{SNR}_1),\quad R_2\le\kappa\log_2(1+\mathrm{SNR}_2),$$
$$R_1+R_2\le\kappa\min\{\log_2(1+\mathrm{SNR}_1+\mathrm{INR}_1),\log_2(1+\mathrm{SNR}_2+\mathrm{INR}_2)\},$$
where $\kappa=1/2$ for real and $1$ for complex channels.

## Facts & Assumptions

**Given:** A length-$n$ interference code with independent messages, the channel and power constraints of [F1], and the two gain inequalities in the statement.

[A1] [[def-axiom-of-choice]]: AC is inherited through the Gaussian random-coding and scalar-channel information suppliers.

[F1] [[def-real-two-user-gaussian-interference-channel]]: noises are independent unit-variance real or circular complex Gaussian; the input power constraints and SNR/INR conventions are as displayed there.

[F2] [[lem-real-gaussian-multiple-access-random-coding-region]]: independent Gaussian codebooks achieve both receivers' multiple-access regions.

[F3] [[lem-it-fano-for-finite-message-density-observations]]: a finite message estimated from a density observation with error $P_e$ has conditional entropy at most $\ln2+P_e\ln|\mathcal M|$.

[F4] [[lem-standard-borel-memoryless-channel-mutual-information-tensorization]]: for a memoryless channel and any dependent input vector, vector mutual information is at most the sum of its coordinate mutual informations.

[F5] [[lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing]]: conditional mutual information obeys the chain rule and the data-processing inequality for standard-Borel variables, including finite message side information.

[F6] [[lem-scalar-gaussian-channel-mutual-information-power-bound]]: for either scalar Gaussian model, $I(X;aX+Z)\le\kappa\ln(1+|a|^2\mathbb E|X-\mathbb EX|^2)$ nats, with equality for the corresponding Gaussian inputs.

## Proof





1.1 For the individual bound on $R_1$, give $M_2$ to receiver 1. Fano gives $nR_1\ln2\le I(M_1;Y_1^n|M_2)+o(n)$ in nats. For each fixed $M_2$, $X_2^n$ is fixed; translating $Y_1^n$ by the known vector $-h_{21}X_2^n$ is invertible, so [F5] in both directions preserves this conditional mutual information. The shifted channel from $X_1^n$ is memoryless. The codeword map is deterministic and the channel law depends on $M_1$ only through $X_1^n$, so [F5] in both Markov directions gives $I(M_1;Y_1^n|M_2)=I(X_1^n;h_{11}X_1^n+Z_1^n|M_2)$. Apply [F4] for each $M_2$ and average to bound this by $\sum_iI(X_{1,i};h_{11}X_{1,i}+Z_{1,i})$. By [F6], each term is at most $\kappa\ln(1+|h_{11}|^2p_{1,i})$ nats, where $p_{1,i}=\mathbb E|X_{1,i}|^2$. Jensen's inequality and the power constraint give $R_1\le\kappa\log_2(1+\mathrm{SNR}_1)$. Exchanging users gives the stated $R_2$ bound. [A1, F1, F3, F4, F5, F6, given, algebra]

1.2 First suppose both cross gains are nonzero. Receiver 1 first forms its estimate $\widehat M_1$. On the event $\widehat M_1=M_1$, it reconstructs $X_1^n$ and subtracts $h_{11}X_1^n$, obtaining $h_{21}X_2^n+Z_1^n$. Since $|h_{21}|\ge|h_{22}|$, it scales this residual by $h_{22}/h_{21}$ and adds independent Gaussian noise of variance $1-|h_{22}/h_{21}|^2$; for complex channels use circular Gaussian noise. Adding back $h_{12}X_1^n$ gives a simulated $\widetilde Y_2^n$. For the error analysis, construct the same vector using the true $M_1$: it then has exactly the law of receiver 2's $Y_2^n$, and on $\widehat M_1=M_1$ it equals the receiver's simulation. Hence the joint error is at most $P_{e,1}+P_{e,2}$. Since the message pair is finite, the randomized decoder has a deterministic MAP decoder with no larger average error. Exchanging users and using $|h_{12}|\ge|h_{11}|$ gives the symmetric joint decoder at receiver 2. [F1, given, construct, algebra]

2.1 In the nonzero-cross-gain case of step 1.2, apply the density-observation Fano bound [F3] to the joint decoder at receiver 1. Let $M=(M_1,M_2)$ and $X=(X_1^n,X_2^n)$. The deterministic codeword map and channel law give both Markov directions between $M$ and $X$ with observation $Y_1^n$, so [F5] yields $I(M;Y_1^n)=I(X;Y_1^n)$. The two input vectors are independent because their messages are independent. By [F4], $n(R_1+R_2)\ln2\le I(X_1^n,X_2^n;Y_1^n)+o(n)\le\sum_iI(X_{1,i},X_{2,i};Y_{1,i})+o(n)$. The output variance at time $i$ is at most $1+|h_{11}|^2\mathbb E|X_{1,i}|^2+|h_{21}|^2\mathbb E|X_{2,i}|^2$, because the independent inputs have zero cross covariance after centering. These single-coordinate mutual informations are finite by the power bound and [F6]. [F1, F3, F4, F5, F6, step 1.2, algebra]

3.1 For each coordinate put $S_i=h_{11}X_{1,i}+h_{21}X_{2,i}$. The channel output depends on the input pair only through $S_i$, so [F5] in both directions gives $I(X_{1,i},X_{2,i};Y_{1,i})=I(S_i;S_i+Z_{1,i})$. Independence gives $\operatorname{Var}(S_i)\le |h_{11}|^2p_{1,i}+|h_{21}|^2p_{2,i}$; [F6] therefore bounds this term by $\kappa\ln(1+|h_{11}|^2p_{1,i}+|h_{21}|^2p_{2,i})$ nats. Jensen's inequality and the average power constraints yield $R_1+R_2\le\kappa\log_2(1+\mathrm{SNR}_1+\mathrm{INR}_1)$. The joint decoder at receiver 2 analogously gives $R_1+R_2\le\kappa\log_2(1+\mathrm{SNR}_2+\mathrm{INR}_2)$. If $h_{21}=0$, then $h_{22}=0$, so $R_2=0$ by step 1.1; the first sum bound is the $R_1$ individual bound and the second is no tighter because $\mathrm{INR}_2\ge\mathrm{SNR}_1$. If $h_{12}=0$, then $h_{11}=0$, so $R_1=0$ and the second sum bound is the $R_2$ individual bound while the first is no tighter because $\mathrm{INR}_1\ge\mathrm{SNR}_2$. Thus both sum bounds hold also when a cross gain vanishes. [F1, F5, F6, step 1.1, step 1.2, step 2.1, algebra, cases]

4.1 Use the same independent Gaussian codebook ensemble at the two receivers. The finite-receiver construction in the proof of [F2] sums the two ensemble-average errors and jointly selects codebooks meeting both deterministic power constraints, so one codebook pair achieves the intersection of the two Gaussian MAC regions. The strong gain inequalities make each unintended-receiver individual constraint at least as large as the corresponding intended-receiver constraint; the two sum constraints are exactly those displayed. Therefore every rate pair strictly inside the claimed region is achievable, and closure removes strictness. [F1, F2, step 1.1, algebra] ∎

## Remarks

Write $A=\kappa\log_2(1+\mathrm{SNR}_1)$, $B=\kappa\log_2(1+\mathrm{SNR}_2)$, and $C=\kappa\min\{\log_2(1+\mathrm{SNR}_1+\mathrm{INR}_1),\log_2(1+\mathrm{SNR}_2+\mathrm{INR}_2)\}$. The region is the rectangle $[0,A]\times[0,B]$ intersected with $R_1+R_2\le C$. The strong gain inequalities give $\mathrm{INR}_2\ge\mathrm{SNR}_1$ and $\mathrm{INR}_1\ge\mathrm{SNR}_2$, hence $C\ge\max\{A,B\}$.

The schematic shows the case $A,B>0$ and $\max\{A,B\}<C<A+B$. Its sloping edge joins $(A,C-A)$ to $(C-B,B)$; the dashed edges complete the individual-bound rectangle. Coordinates are symbolic, and the figure is not to scale.

```tikz
\begin{tikzpicture}[scale=0.85]
\fill[blue!15] (0,0) -- (5,0) -- (5,1.3) -- (2.5,3.8) -- (0,3.8) -- (0,0);
\draw[dashed,gray] (5,1.3) -- (5,3.8) -- (2.5,3.8);
\draw[thick,blue] (0,0) -- (5,0) -- (5,1.3) -- (2.5,3.8) -- (0,3.8) -- (0,0);
\draw[->] (0,0) -- (6,0) node[right] {$R_1$};
\draw[->] (0,0) -- (0,4.6) node[above] {$R_2$};
\node[below left] at (0,0) {$0$};
\node[below] at (5,0) {$A$};
\node[left] at (0,3.8) {$B$};
\node at (2,1.5) {$\mathcal C$};
\node[right] at (4,2.8) {$R_1+R_2=C$};
\end{tikzpicture}
```

Here $\mathcal C$ denotes the capacity region in the statement. If $C\ge A+B$, the sum constraint is redundant and the full rectangle remains. At $C=\max\{A,B\}<A+B$, a sloping-edge endpoint reaches an axis, with both endpoints reaching axes when $A=B=C$. If $A=0$ or $B=0$, the region is the corresponding axis segment (or just the origin when both vanish). These cases follow from the same inequalities; the proof above is independent of the illustration.
