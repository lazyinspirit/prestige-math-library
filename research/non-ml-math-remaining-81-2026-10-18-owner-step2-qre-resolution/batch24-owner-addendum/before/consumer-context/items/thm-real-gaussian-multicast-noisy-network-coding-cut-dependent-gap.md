---
id: thm-real-gaussian-multicast-noisy-network-coding-cut-dependent-gap
kind: theorem
title: Cut-dependent Gaussian multicast gap to the cut-set bound
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 9
deps: [def-axiom-of-choice, def-real-gaussian-multicast-relay-network, thm-real-gaussian-multicast-noisy-network-coding-inner-bound, lem-real-vector-gaussian-maximum-differential-entropy, lem-it-fano-for-finite-message-density-observations, cor-real-spectral-theorem-for-self-adjoint-endomorphisms, lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing, lem-bounded-density-finite-second-moment-has-finite-differential-entropy]
aliases: []
proof_strategy: cut-set-relaxation-and-determinant-comparison
axiom_use: AC is inherited through the Gaussian maximum-entropy and Gaussian probability-law suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Sung Hoon Lim, Young-Han Kim, Abbas El Gamal, and Sae-Young Chung, Noisy Network Coding, IEEE Transactions on Information Theory 57(5), 2011
      url: https://isl.stanford.edu/~abbas/papers/Noisy%20Network%20Coding.pdf
      locator: §V-A, Theorem 4 and proof of the AWGN multicast capacity gap, PDF pp. 20–22.
    - title: "A. S. Avestimehr, S. N. Diggavi, and D. N. C. Tse, Wireless Network Information Flow: A Deterministic Approach, IEEE Transactions on Information Theory 57(4), 2011"
      url: https://web.stanford.edu/~dntse/papers/adt2011.pdf
      locator: Theorem 4.6, scalar and vector quantization gap comparisons, printed pp. 2005–2008.
---

## Statement

For the real Gaussian multicast network in [[def-real-gaussian-multicast-relay-network]] with common node power $P$, compare the noisy-network-coding inner cut in [F1] with the cut-set outer region. For each admissible cut $A$, the outer cut is at most
$$\frac12\log_2\det\!\left(I+\frac P2G(A)G(A)^T\right)+\frac12\min\{|A|,|A^c|\}\log_2(2|A|).$$
Consequently the outer and inner cut bounds differ by at most
$$\Delta(A)=\frac{|A|}{2}+\frac12\min\{|A|,|A^c|\}\log_2(2|A|)$$
bits per use on that cut. This is a cutwise comparison; it does not assert a single cut-independent gap constant.

## Facts & Assumptions

**Given:** A length-$n$ causal Gaussian multicast code in [F2] with all node powers at most $P$, and a cut $A$ with $A\cap\mathcal S\ne\varnothing$ and $A^c\cap\mathcal D\ne\varnothing$.

[A1] [[def-axiom-of-choice]]: AC is inherited through the Gaussian maximum-entropy and Gaussian-law suppliers.

[F1] [[thm-real-gaussian-multicast-noisy-network-coding-inner-bound]]: the exact NNC expression for destination $d\in A^c$ is
$$N_d(A)=I(X_A;Y_d,\hat Y_{A^c}\mid X_{A^c})-I(Y_A;\hat Y_A\mid X_{[N]},Y_d,\hat Y_{A^c}).$$
With $\mathcal Q=[N]$, $P_i=P$, and unit-variance quantization noise, its first term is at least $I(X_A;\hat Y_{A^c}\mid X_{A^c})=\frac12\log_2\det(I+(P/2)G(A)G(A)^T)$, while the penalty is $|A|/2$. Hence $N_d(A)\ge L(A):=\frac12\log_2\det(I+(P/2)G(A)G(A)^T)-|A|/2$. The NNC theorem also separately achieves the all-zero tuple.

[F2] [[def-real-gaussian-multicast-relay-network]]: causal encoders use each node's own message and past output; outputs across the cut have form $Y_{A^c}=G(A)X_A+G'(A)X_{A^c}+Z_{A^c}$ with identity noise covariance.

[F3] [[lem-real-vector-gaussian-maximum-differential-entropy]]: a vector with positive-definite covariance $K$ has differential entropy at most $\frac12\ln((2\pi e)^d\det K)$.

[F4] [[lem-it-fano-for-finite-message-density-observations]]: decoding a finite message tuple from a density observation with error tending to zero gives its conditional entropy at most $o(n)$.

[F5] [[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]]: real symmetric matrices have real eigenvalues and an orthonormal eigenbasis; a positive-definite matrix has positive eigenvalues and a positive-definite square root.

[F6] [[lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing]]: the conditional mutual-information chain rule expands the length-$n$ observation, and conditional data processing bounds each current observation by its current inputs.

[F7] [[lem-bounded-density-finite-second-moment-has-finite-differential-entropy]]: a bounded density with finite second moment has a finite, absolutely defined differential entropy.

## Proof





1.1 Fix a destination $d\in A^c$. Give the messages of nodes in $A^c$ to that destination, and also give it all outputs $Y_{A^c}^n$. Since rates are bits and Fano's bound is in nats, [F4] gives $$n\ln2\sum_{k\in A\cap\mathcal S}R_k\le I(M_{A\cap\mathcal S};Y_{A^c}^n\mid M_{A^c})+o(n).$$ By the conditional chain rule [F6], expand the mutual information across time. For time $i$, condition on $H_i=(M_{A^c},Y_{A^c}^{i-1})$. Each input in $A^c$ is then fixed by causality in [F2]. The current outputs depend on messages in $A$ only through the current inputs $X_{A,i}$, so conditional data processing [F6] gives $$I(M_{A\cap\mathcal S};Y_{A^c,i}\mid H_i)\le I(X_{A,i};Y_{A^c,i}\mid H_i).$$ The right side is the mutual information of $G(A)X_{A,i}+Z_{A^c,i}$ under the conditional input law given $H_i$. [A1, F2, F4, F6, given, algebra]

2.1 For almost every $h$, the conditional input second moment given $H_i=h$ is finite, since its average is bounded by the node power constraints. The conditional output is a translate of a Gaussian convolution, so its density is bounded by the standard Gaussian noise peak; [F7] makes its differential entropy finite. Let $K_{i,h}$ be the conditional covariance of $X_{A,i}$ given $H_i=h$. The channel noise is independent with covariance $I$, so [F3] bounds each conditional mutual information in step 1.1, measured in nats, by $$\frac12\ln\det(I_{|A^c|}+G(A)K_{i,h}G(A)^T).$$ Set $\bar K=n^{-1}\sum_i\mathbb E[K_{i,H_i}]$. Since covariance trace is at most the corresponding second moment and each node's average power is at most $P$, $\bar K\succeq0$ and $\operatorname{tr}\bar K\le |A|P$. [F2, F3, F7, step 1.1, algebra]

3.1 For positive-definite matrices $B,B_0$, let $C=B_0^{-1/2}BB_0^{-1/2}$. Its eigenvalues $\lambda_j$ are positive by [F5], and $\ln\lambda_j\le\lambda_j-1$ because $u-1-\ln u$ has derivative $1-1/u$, decreases on $(0,1]$, increases on $[1,\infty)$, and vanishes at $1$. Thus $$\ln\det B\le\ln\det B_0+\operatorname{tr}(B_0^{-1}(B-B_0)).$$ Apply this with $B=I+G K_{i,h}G^T$ and $B_0=I+G\bar K G^T$, then average over $i,h$; the trace term averages to zero. Hence the average natural log determinant in step 2.1 is at most $\ln\det(I+G\bar K G^T)$. The spectral theorem gives $\bar K\preceq\operatorname{tr}(\bar K)I$, since every nonnegative eigenvalue is at most their sum; hence $G\bar K G^T\preceq |A|P GG^T$. If $0\prec C\preceq D$, then $C^{-1/2}DC^{-1/2}=I+E$ for some $E\succeq0$, so its eigenvalues are at least one and $\det C\le\det D$. Applying this order property and dividing the Fano bound in step 1.1 by $n\ln2$ yields $$\sum_{k\in A\cap\mathcal S}R_k\le\frac{1}{2\ln2}\ln\det(I_{|A^c|}+|A|P GG^T).$$ [F2, F5, step 1.1, step 2.1, algebra]

4.1 Put $a=|A|$ and $b=|A^c|$; both are positive. For any positive-semidefinite $H$ of size $m$, $I_m+aPH\preceq2a(I_m+(P/2)H)$, so determinant monotonicity gives $$\frac{1}{2\ln2}\ln\det(I_m+aPH)\le\frac12\log_2\det(I_m+(P/2)H)+\frac m2\log_2(2a).$$ The block determinant of $\begin{pmatrix}I_b&\sqrt{aP}G\\-\sqrt{aP}G^T&I_a\end{pmatrix}$, computed by taking either identity block as the Schur complement pivot, gives $\det(I_b+aPGG^T)=\det(I_a+aPG^TG)$. Apply the previous inequality once in dimension $b$ and once in dimension $a$, then use this identity to take the smaller additive term. The cut-set outer bound is at most $$\frac12\log_2\det\!\left(I+\frac P2GG^T\right)+\frac12\min(a,b)\log_2(2a).$$ [F5, step 3.1, algebra]

5.1 Write $D(A)=\frac12\log_2\det(I+(P/2)G(A)G(A)^T)$, so the sufficient lower bound in [F1] is $L(A)=D(A)-a/2$. Step 4.1 gives the cut-set outer value $O(A)\le D(A)+\frac12\min(a,b)\log_2(2a)=L(A)+\Delta(A)$. If $L(A)>0$, the exact NNC expression satisfies $N_d(A)\ge L(A)$, so $O(A)-N_d(A)\le\Delta(A)$. If $L(A)\le0$, use the separately achievable zero-rate tuple from [F1]; then $O(A)\le L(A)+\Delta(A)\le\Delta(A)$, so the outer cut is within $\Delta(A)$ of that achievable rate. This proves the cutwise comparison without treating the determinant expression as the exact NNC rate and covers negative sufficient-cut values. [F1, step 4.1, algebra, cases] ∎
