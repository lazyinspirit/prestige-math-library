---
id: lem-hypergeometric-binomial-contiguity-for-permutation-samples
kind: lemma
title: Hypergeometric and binomial composition counts are contiguous
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - thm-lindeberg-feller-central-limit-theorem-sufficiency
  - thm-real-stirling-formula
  - def-identically-distributed-and-iid-random-variables
  - def-moments-variance-and-covariance
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-factorization-of-expectations-for-independent-variables
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "E. Y. Chung and J. P. Romano, Exact and Asymptotically Robust Permutation Tests, Stanford Technical Report 2011-05, §3.4 and Appendix A, Lemma 3.2 proof"
      url: "https://stacks.stanford.edu/file/vs995qc2521/vs995qc2521_2011-05.pdf"
---

## Statement

Assume AC. For each $N$, let $M_N$ of $N$ objects be marked, with
$p_N=M_N/N\to p\in(0,1)$, and let $k_N/N\to s\in(0,1)$. Let
$B_N\sim\operatorname{Bin}(k_N,p_N)$ and let $H_N$ count marked objects in a
uniform size-$k_N$ sample without replacement from the $N$ objects. Then the
law of $H_N$ is contiguous to the law of $B_N$: for every sequence of sets
$A_N$, if $P(B_N\in A_N)\to0$, then $P(H_N\in A_N)\to0$.

More precisely, the likelihood ratio $L_N(j)=P(H_N=j)/P(B_N=j)$ satisfies

$$L_N(B_N)\Rightarrow (1-s)^{-1/2}\exp\!\left(-\frac{s}{2(1-s)}Z^2\right),\qquad Z\sim N(0,1),$$

and this nonnegative limit has mean $1$.

## Facts & Assumptions

**Given:** AC, marked-object proportions $p_N\to p\in(0,1)$, sampling proportions $k_N/N\to s\in(0,1)$, a binomial count, and a uniform sample without replacement.

[F1] [[thm-lindeberg-feller-central-limit-theorem-sufficiency]] gives a standard-normal limit for a centered independent triangular array under the Lindeberg condition, assuming AC.

[F2] [[thm-real-stirling-formula]] states $j!\sim\sqrt{2\pi j}(j/e)^j$ as positive integers $j\to\infty$.

[F3] [[def-identically-distributed-and-iid-random-variables]] defines IID as mutual independence together with a common law.

[F4] [[def-moments-variance-and-covariance]] defines variance as the centered second moment.

[F5] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] supplies the finite product probability measure used for that Bernoulli row.

[F6] [[thm-factorization-of-expectations-for-independent-variables]] factors expectations of products of integrable functions of independent variables.

[A1] AC is used exactly through [F1]. [[def-axiom-of-choice]]

## Proof

**Given:** The hypotheses in the Statement. Prove the likelihood-ratio limit and the stated direction of contiguity.

1.1 The exact mass ratio, with $q_N=1-p_N$, is $L_N(j)=\frac{\binom{M_N}{j}\binom{N-M_N}{k_N-j}}{\binom{N}{k_N}\binom{k_N}{j}p_N^j q_N^{k_N-j}}$ on the hypergeometric support, and is zero off that support. [given, algebra]

1.2 By [F5], form the $k_N$-fold product of the law assigning masses $p_N$ and $q_N$ to $1$ and $0$. The rectangle formula makes its coordinate indicators $I_{N,i}$ independent with that common Bernoulli law, hence IID in the sense of [F3]. Each binary vector with $j$ ones has mass $p_N^j q_N^{k_N-j}$, and there are $\binom{k_N}{j}$ such vectors. Their sum therefore has the specified binomial law, so we may realize $B_N=\sum_{i=1}^{k_N}I_{N,i}$ on this space. [F3, F5, given, construct, algebra]

2.1 Each indicator has mean $p_N$ and variance $p_Nq_N$ by [F4]. Factorization [F6] gives $E[I_{N,i}I_{N,j}]=p_N^2$ for $i\ne j$, so the row sum has mean $k_Np_N$ and variance $k_Np_Nq_N$. [F4, F6, step 1.2, algebra]

3.1 Each centered summand has magnitude at most $1$, while the row standard deviation is $\sqrt{k_Np_Nq_N}\asymp\sqrt N$. Thus for each fixed $\varepsilon>0$ all Lindeberg tail terms are zero for large $N$; under AC [A1], [F1] gives $Z_N:=\frac{B_N-k_Np_N}{\sqrt{k_Np_Nq_N}}\Rightarrow Z\sim N(0,1).$ [A1, F1, step 2.1, given, algebra]

4.1 Put $s_N=k_N/N$ and $\delta_N=B_N-k_Np_N$. By [step 3.1], $\delta_N=O_P(\sqrt N)$, so the event $|\delta_N|\le N^{2/3}$ has probability tending to one. On this event, all factorial arguments in [step 1.1] are bounded below by a positive multiple of $N$, since $p_N\to p$ and $s_N\to s$ with $p,s\in(0,1)$. Let $H(a,x)=a\log a-x\log x-(a-x)\log(a-x)$ and $H(t)=H(1,t)$. Stirling's formula [F2], uniformly for these arguments, expands each log-binomial coefficient as $H(a,x)-\frac12\log(2\pi x(a-x)/a)+o(1)$. The order-$N$ terms at $\delta=0$ cancel because $H(p_NN,s_Np_NN)=p_NNH(s_N)$, $H(q_NN,s_Nq_NN)=q_NNH(s_N)$, and $H(s_NN,s_Np_NN)=s_NNH(p_N)$. For $F_N(\delta)=H(p_NN,s_Np_NN+\delta)+H(q_NN,s_Nq_NN-\delta)-H(N,s_NN)-H(s_NN,s_Np_NN+\delta)-(s_Np_NN+\delta)\log p_N-(s_Nq_NN-\delta)\log q_N$, use $H_a'(x)=\log((a-x)/x)$ and $H_a''(x)=-1/x-1/(a-x)$; direct substitution gives $F_N(0)=0$, $F_N'(0)=0$ and $F_N''(0)=-\frac1{p_NNs_N(1-s_N)}-\frac1{q_NNs_N(1-s_N)}+\frac1{s_NNp_Nq_N}=-\frac1{p_Nq_NN(1-s_N)}.$ The third derivative is bounded by $C/N^2$ throughout this event because every argument remains at least $cN$. The square-root terms at $\delta=0$ sum to $-\frac12\log\frac{(2\pi p_NNs_N(1-s_N))(2\pi q_NNs_N(1-s_N))}{(2\pi Ns_N(1-s_N))(2\pi s_NNp_Nq_N)}=-\frac12\log(1-s_N),$ and their change is $O(|\delta_N|/N)=o_P(1)$. Taylor's formula therefore gives $\log L_N(B_N)=-\frac12\log(1-s_N)-\frac{\delta_N^2}{2p_Nq_NN(1-s_N)}+O_P(|\delta_N|^3/N^2)+o_P(1)=-\frac12\log(1-s_N)-\frac{s_N}{2(1-s_N)}Z_N^2+o_P(1).$ The Taylor remainder is $o_P(1)$ because $\delta_N=O_P(\sqrt N)$, and the omitted event has probability tending to zero by [step 3.1]. [F2, step 1.1, step 3.1, algebra]

5.1 Since $s_N\to s$, [step 3.1] and [step 4.1] imply the displayed likelihood-ratio limit. Its mean is $(1-s)^{-1/2}E\exp\!\left(-\frac{s}{2(1-s)}Z^2\right)=(1-s)^{-1/2}\sqrt{1-s}=1,$ by direct integration against the standard-normal density. [step 3.1, step 4.1, algebra]

6.1 Each $L_N(B_N)\ge0$ and $E[L_N(B_N)]=1$ by the likelihood-ratio definition. Nonnegative convergence in distribution to a variable with the same mean implies uniform integrability: for fixed $K$, $E[L_N\wedge K]\to E[L\wedge K]$, so $\limsup_NE[(L_N-K)_+]=1-E[L\wedge K]\to0$ as $K\to\infty$. This also controls $E[L_N\mathbf1_{\{L_N>2K\}}]$. [step 5.1, algebra]

7.1 If $P(B_N\in A_N)\to0$, then for every $K>0$, $P(H_N\in A_N)=E[L_N(B_N)\mathbf1_{\{B_N\in A_N\}}]\le K P(B_N\in A_N)+E[L_N(B_N)\mathbf1_{\{L_N(B_N)>K\}}].$ The first term tends to zero for fixed $K$ and the second is uniformly small for large $K$ by step 6.1. Therefore $P(H_N\in A_N)\to0$. This proves the required direction of contiguity; the reverse direction is not needed here. [step 6.1, algebra] ∎
