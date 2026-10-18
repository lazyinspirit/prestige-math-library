---
id: thm-real-gaussian-multicast-noisy-network-coding-inner-bound
kind: theorem
title: Noise-level noisy-network-coding inner bound for real Gaussian multicast networks
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-axiom-of-choice, def-real-gaussian-multicast-relay-network, lem-real-vector-gaussian-maximum-differential-entropy]
aliases: []
proof_strategy: Gaussian-evaluation-of-noisy-network-coding
axiom_use: AC is inherited from the Gaussian maximum-entropy result; finite-dimensional coding requires no further choice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: Sung Hoon Lim, Young-Han Kim, Abbas El Gamal, and Sae-Young Chung, Noisy Network Coding, IEEE Transactions on Information Theory 57(5), 2011
      url: https://isl.stanford.edu/~abbas/papers/Noisy%20Network%20Coding.pdf
      locator: §V-A, AWGN multicast inner bound, PDF pp. 20–22.
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 18, Gaussian network coding and continuous-alphabet random coding, printed pp. 468–477.
---

## Statement

All mutual informations and rates in this item are measured in bits; the differential entropies used in the proof are in nats and are divided by $\ln2$.

In the real Gaussian multicast network of [[def-real-gaussian-multicast-relay-network]], take independent Gaussian inputs $X_i\sim N(0,P_i)$ and independent Gaussian test-channel noises. For a chosen node set $\mathcal Q\subseteq[N]$, set $\hat Y_i=Y_i+\hat Z_i$ with $\hat Z_i\sim N(0,1)$ for $i\in\mathcal Q$ and let $\hat Y_i$ be constant otherwise. The continuous-alphabet noisy-network-coding expression for a destination $d\notin A$ and cut $A$ is
$$I(X_A;Y_d,\hat Y_{A^c\cap\mathcal Q}\mid X_{A^c})-I(Y_{A\cap\mathcal Q};\hat Y_{A\cap\mathcal Q}\mid X_{[N]},Y_d,\hat Y_{A^c\cap\mathcal Q}).$$
This expression is conditional on the continuous-alphabet coding theorem identified in the unresolved proof obligation below. In the special case $P_i=P$ for every node and $\mathcal R=[N]$, a noise-level evaluation gives the cut inequalities
$$\sum_{k\in A\cap\mathcal S}R_k < \frac12\log_2\det\!\left(I+\frac P2G(A)G(A)^T\right)-\frac{|A|}{2}$$
for every $A\subseteq[N]$ with $A^c\cap\mathcal D\ne\varnothing$ and $A\cap\mathcal S\ne\varnothing$. The all-zero rate tuple is always achievable by singleton source-message sets, independently of whether these cut right-hand sides are nonnegative.

## Facts & Assumptions

**Given:** The real Gaussian network in [F1], common power $P>0$, independent Gaussian inputs, and independent unit-variance Gaussian quantization noises.

[A1] [[def-axiom-of-choice]]: AC is used through the Gaussian-law and differential-entropy suppliers.

[F1] [[def-real-gaussian-multicast-relay-network]]: channel outputs are $Y_j=\sum_i g_{ji}X_i+Z_j$ with independent unit-variance real Gaussian noises.

[F2] [[lem-real-vector-gaussian-maximum-differential-entropy]]: a vector with positive-definite covariance $K$ has differential entropy at most $\frac12\ln((2\pi e)^d\det K)$.

## Proof

1.1 Fix an admissible cut $A$. Conditioned on all inputs, $\hat Y_A$ consists of independent sums of unit-variance channel noise and unit-variance quantization noise. Therefore
$$I(Y_A;\hat Y_A\mid X_{[N]},\hat Y_{A^c},Y_d)\le I(Y_A;\hat Y_A\mid X_{[N]})=\frac{|A|}{2}\log_2 2=\frac{|A|}{2},$$
where the inequality follows from the Markov relation $(\hat Y_{A^c},Y_d)\to(X_{[N]},Y_A)\to\hat Y_A$. [A1, F1, given, algebra]

1.2 Given $X_{A^c}$, the quantized outputs in $A^c$ are $G(A)X_A$ plus an independent Gaussian noise vector with covariance $2I$. Its mutual information with $X_A$ is $\frac12\log_2\det(I+(P/2)G(A)G(A)^T)$, by the Gaussian density formula. Adding $Y_d$ cannot decrease mutual information, so
$$I(X_A;Y_d,\hat Y_{A^c}\mid X_{A^c})\ge\frac12\log_2\det\!\left(I+\frac P2G(A)G(A)^T\right).$$
[F1, F2, given, algebra]

1.3 Subtract the penalty in step 1.1 from the positive term in step 1.2. This is the claimed cut expression. The remaining coding assertion—that the continuous-alphabet NNC random-coding theorem applies to this Gaussian network with the displayed test channel—has not been proved locally here; the finite-alphabet theorem does not by itself establish that extension. [step 1.1, step 1.2, algebra]

1.4 Give each source a singleton message set and let each destination return the unique messages. This achieves the all-zero rate tuple with zero error for every blocklength, including when a displayed cut expression is negative. [F1, given]

## Unresolved proof obligation

Supply a local continuous-alphabet noisy-network-coding random-coding proof (or an exact previously authored supplier) that establishes the cut formula for Euclidean alphabets and average-power constraints. The determinant and quantization-penalty calculations above are complete conditional on that coding theorem, but the theorem is not ready for acceptance.
