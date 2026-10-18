---
id: thm-real-gaussian-multicast-noisy-network-coding-inner-bound
kind: theorem
title: Noise-level noisy-network-coding inner bound for real Gaussian multicast networks
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps: [def-axiom-of-choice, def-real-gaussian-multicast-relay-network, lem-finite-or-euclidean-likelihood-ratio-network-coding, lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing]
aliases: []
proof_strategy: direct
axiom_use: AC is inherited from the Euclidean conditional-law and conditional-KL suppliers in the coding lemma; finite-dimensional Gaussian code construction requires no further choice.
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

All mutual informations and rates in this item are measured in bits; differential entropies in the proof are in nats and are divided by $\ln2$.

In the real Gaussian multicast network of [[def-real-gaussian-multicast-relay-network]], take independent Gaussian inputs $X_i\sim N(0,P_i)$ and independent Gaussian test-channel noises. For a chosen node set $\mathcal Q\subseteq[N]$, set $\hat Y_i=Y_i+\hat Z_i$ with $\hat Z_i\sim N(0,1)$ for $i\in\mathcal Q$ and let $\hat Y_i$ be constant otherwise. Every nonnegative rate tuple satisfying
$$\sum_{k\in A\cap\mathcal S}R_k<I(X_A;Y_d,\hat Y_{A^c\cap\mathcal Q}\mid X_{A^c})-I(Y_{A\cap\mathcal Q};\hat Y_{A\cap\mathcal Q}\mid X_{[N]},Y_d,\hat Y_{A^c\cap\mathcal Q})$$
for every destination $d\in\mathcal D$ and every cut $A\subseteq[N]$ with $d\notin A$ and $A\cap\mathcal S\ne\varnothing$ is achievable under the stated average-power constraints. The closure of the union of these strict regions over the stated choices, together with the all-zero tuple, is achievable.

In the special case $P_i=P>0$ for every node and $\mathcal Q=[N]$, a noise-level evaluation gives the sufficient cut inequalities
$$\sum_{k\in A\cap\mathcal S}R_k < \frac12\log_2\det\!\left(I+\frac P2G(A)G(A)^T\right)-\frac{|A|}{2}$$
for every $A\subseteq[N]$ with $A^c\cap\mathcal D\ne\varnothing$ and $A\cap\mathcal S\ne\varnothing$, where $G(A)=G_{A^c,A}$. Their closure is achievable. The all-zero rate tuple is always achievable by singleton source-message sets, independently of whether these cut right-hand sides are nonnegative.

## Facts & Assumptions

**Given:** The real Gaussian network, arbitrary nonnegative node powers $P_i$, independent Gaussian inputs and unit-variance quantization noises on the chosen set $\mathcal Q$; for the determinant specialization all powers equal $P>0$ and $\mathcal Q=[N]$.

[A1] [[def-axiom-of-choice]]: AC is assumed through the Euclidean conditional-law and conditional-KL suppliers.

[F1] [[def-real-gaussian-multicast-relay-network]]: $Y_j=\sum_i g_{ji}X_i+Z_j$ with independent unit Gaussian noises across nodes and times, measurable causal encoders, destination knowledge of its own message, and per-node expected average-square constraint $P_i$.

[F2] [[lem-finite-or-euclidean-likelihood-ratio-network-coding]]: square-integrable local and packing log likelihoods, finite cut informations and finite-second-moment slack input costs imply the NNC cut inner bound in nats, with deterministic measurable encoders, pointwise input-word cost bounds, constant reconstructions, and closure.

[F3] [[lem-standard-borel-conditional-mutual-information-chain-rule-and-data-processing]]: conditional-KL chain rules and nonnegativity apply to these finite Gaussian informations; adding observations cannot decrease mutual information.

## Proof







1.1 Initially choose $0<P_i'<P_i$ when $P_i>0$, and set $X_i=0$ when $P_i=0$. On positive-power nodes take independent $X_i\sim N(0,P_i')$. Use the stated reconstruction kernels. Remove constant coordinates when writing densities. The remaining joint coordinates $(X,Y,\hat Y_{\mathcal Q})$ are an invertible linear image of the independent nonconstant inputs, channel noises and quantization noises: recover inputs first, channel noises from $Y-GX$, and quantization noises from $\hat Y_{\mathcal Q}-Y_{\mathcal Q}$. They therefore have a strictly positive nonsingular Gaussian density. Its needed marginal and conditional densities are likewise Gaussian with positive conditional covariance, so all local and reference likelihood ratios in [F2] exist measurably. Every log ratio is a constant plus a quadratic polynomial in Gaussian variables. [A1, F1, F2, given, construct, algebra]

2.1 These log ratios are square-integrable: a quadratic polynomial squared is a finite sum of monomials of degree at most four, and Gaussian fourth moments are finite. Explicitly for a scalar $N(0,v)$ density, integrating by parts twice gives $\mathbb E Z^4=3v^2$; Gaussian coordinates have those scalar marginal laws, and $\mathbb E(Z_i^2Z_j^2)\le(\mathbb E Z_i^4\,\mathbb E Z_j^4)^{1/2}$. The input cost $c_i(x)=x^2$ also has finite second moment $3(P_i')^2$ and mean $P_i'<P_i$. All the Gaussian cut mutual informations are finite, as differences of finite Gaussian conditional log-density expectations. Thus every Euclidean hypothesis of [F2] holds at the positive-power nodes with slack square costs; zero-power inputs are fixed zero coordinates satisfying their constraints pointwise and need no shell constraint. [A1, F2, step 1.1, algebra]

3.1 Apply [F2] with constant time-sharing variable, converting $r_i=R_i\ln2$. It gives precisely the first displayed strict cut inequalities at variances $P_i'$, since constant reconstructions may be deleted from both mutual informations. Its codes are deterministic and measurable, and every positive-power input word has empirical square cost at most a threshold strictly below $P_i$. Hence the expected average-power constraints in [F1] hold for the chosen deterministic code, independently of messages and selected compression indices. Zero-power nodes always send zero. [A1, F1, F2, step 2.1, construct, algebra]

4.1 Increase $P_i'$ to $P_i$ simultaneously at positive-power nodes. Each mutual information in these finitely many cuts is a continuous function of the variances: its Gaussian entropy formula is a log determinant of a positive-definite conditional noise covariance plus a positive-semidefinite signal covariance. One may derive the formula directly from the Gaussian density: for positive-definite $K$, integration of its log density gives $h(N(0,K))=\tfrac12\ln((2\pi e)^m\det K)$ because the expected quadratic form is $m$. Conditional noise covariance is positive definite even at the limiting input variances. Therefore any tuple satisfying all strict inequalities at $P_i$ satisfies them at $P_i'$ sufficiently close to $P_i$. Use the codes from step 3.1, already satisfying the original power constraints. This proves the full chosen-$\mathcal Q$ achievability assertion, including arbitrary zero-power nodes. [A1, F1, F2, step 1.1, step 3.1, algebra]

5.1 For the target Gaussian law, conditioned on all inputs the noises at nodes in $A$ are independent of $(Y_d,\hat Y_{A^c\cap\mathcal Q})$, since $d\notin A$ and channel and quantization noises are independent across nodes. Each active source-side test channel adds independent unit quantization noise to unit channel noise. Using the density entropy formula from step 4.1 gives $I(Y_{A\cap\mathcal Q};\hat Y_{A\cap\mathcal Q}|X_{[N]},Y_d,\hat Y_{A^c\cap\mathcal Q})=\frac{|A\cap\mathcal Q|}{2}\log_2 2=\frac{|A\cap\mathcal Q|}{2}.$ Constants contribute zero. This calculation holds for every destination outside $A$ and all choices of powers. [F1, step 4.1, given, algebra]

6.1 When $\mathcal Q=[N]$ and all powers equal $P$, condition on $X_{A^c}$. The quantized vector $\hat Y_{A^c}$ is a known translation of $G(A)X_A$ plus an independent Gaussian vector of covariance $2I$. Its entropy minus the entropy of that noise, divided by $\ln2$, gives $I(X_A;\hat Y_{A^c}|X_{A^c})=\frac12\log_2\det\left(I+\frac P2G(A)G(A)^T\right).$ By [F3], adding $Y_d$ can only increase this positive mutual-information term. Subtracting the penalty $|A|/2$ from step 5.1 proves the sufficient determinant inequality for every destination outside every admissible cut. Step 4.1 makes all tuples satisfying this finite family of strict sufficient inequalities achievable. [F1, F3, step 4.1, step 5.1, given, algebra]

7.1 The closure of the strict regions follows from [F2], or by selecting successively longer reliable codes for rate tuples tending to the claimed boundary points. For the all-zero tuple give every source a singleton message set, transmit zero at all nodes, and return the unique messages at every destination; error and power are both zero. This argument applies even if a sufficient cut expression is negative. [F1, F2, step 4.1, step 6.1, construct] ∎
