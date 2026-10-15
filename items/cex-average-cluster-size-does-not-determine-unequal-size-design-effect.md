---
id: cex-average-cluster-size-does-not-determine-unequal-size-design-effect
kind: counterexample
title: "Average cluster size does not determine the unequal-size design effect"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-cluster-sampling-design-and-cluster-totals
  - def-moments-variance-and-covariance
  - thm-covariance-bilinearity-and-symmetry
  - thm-variance-of-a-finite-sum
  - thm-srswor-cluster-total-estimator-unbiased-and-variance
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Shalabh, Sampling Theory, Chapter 9: Cluster Sampling, PDF pp. 11–14, IIT Kanpur"
      url: "https://home.iitk.ac.in/~shalab/sampling/chapter9-sampling-cluster-sampling.pdf"
    - title: "Sharon L. Lohr, Sampling: Design and Analysis, 2nd ed., §5.2.2, printed pp. 139–141"
      url: "https://drive.uqu.edu.sa/_/maatia/files/Sampling.pdf"
---

## Statement refuted

For unequal cluster sizes, with independent PSUs, equal marginal variance,
common within-cluster correlation, and negligible FPC, the design effect is
still $1+(\bar m-1)\rho$ after substituting the arithmetic mean size $\bar m$
for the equal cluster size. In the example below, $\bar m=2$ and the
within-pair correlation is $1$, so this proposed formula predicts $2$, while
the exact model-averaged design-effect ratio tends to $5/2$ as $M\to\infty$
with fixed $k$.

The two designs are evaluated separately on each fixed realization of the
model values: $S_C$ is a uniform SRSWOR of $k$ PSUs and $S_E$ is a uniform
SRSWOR of $2k$ SSUs. Define
$$\widehat\mu_C=\frac{M}{kN}\sum_{i\in S_C}T_i,\qquad \widehat\mu_E=\frac1{2k}\sum_{(i,j)\in S_E}y_{ij},$$
where $N=\sum_i n_i=2M$. The design effect here is
$E_B[\operatorname{Var}_d(\widehat\mu_C\mid B)]/
E_B[\operatorname{Var}_d(\widehat\mu_E\mid B)]$.

## Facts & Assumptions

**Given:** An even number $M\ge4$ of PSUs, half of size $1$ and half of size
$3$; independent random variables $B_i$ with mean $0$ and variance
$\sigma^2>0$; fixed SSU values $y_{ij}=B_i$ conditional on $(B_i)$; and a
cluster SRSWOR of $k$ PSUs, $1\le k<M$, compared with an element SRSWOR of
$2k$ SSUs from the same finite population. This matches the expected SSU count
in the cluster sample. Define the design effect as the ratio of the two design
variances, each averaged over the model for $(B_i)$.

[F1] [[def-cluster-sampling-design-and-cluster-totals]]: A cluster design
selects PSUs and, in one-stage sampling, observes all SSUs in selected PSUs;
the cluster total is $T_i=\sum_j y_{ij}$.

[F2] [[thm-srswor-cluster-total-estimator-unbiased-and-variance]]: Under
SRSWOR of $k$ from $M$ PSUs, the total estimator has variance
$M^2(1-k/M)S_T^2/k$.

[F3] [[def-moments-variance-and-covariance]]: Variance is the expectation of
the centered square, and covariance is the expectation of the centered
product.

[F4] [[thm-covariance-bilinearity-and-symmetry]]: Covariance is symmetric
and bilinear in finite linear combinations of square-integrable variables.

[F5] [[thm-variance-of-a-finite-sum]]: The variance of a finite sum of
square-integrable real random variables is the sum of all pairwise
covariances.

[A1] Conditional on the model values, the finite population is fixed and each
design is an ordinary uniform SRSWOR. The model variables $B_i$ are
independent across PSUs and share the stated mean and variance.

## Counterexample

1.1 The cluster sizes are $1$ and $3$ in equal proportions, so $N=2M$ and $\bar m=2$; in every size-$3$ cluster the values equal $B_i$, giving correlation $\rho=1$ for each within-cluster pair that exists (size-$1$ clusters have none), and every element has marginal variance $\sigma^2$. The proposed average-size substitution therefore predicts $1+(2-1)\cdot1=2$. [given, F1, A1, algebra]

1.2 For $\bar Y_U=N^{-1}\sum_i n_iB_i$, independence gives $E_B[\bar Y_U]=0$ and $\operatorname{Var}_B(\bar Y_U)=5\sigma^2/(4M)$; each element has $E_B[y_{ij}^2]=\sigma^2$, so the identity $\sum_{i,j}(y_{ij}-\bar Y_U)^2=\sum_{i,j}y_{ij}^2-N\bar Y_U^2$ and $S_U^2=(N-1)^{-1}\sum_{i,j}(y_{ij}-\bar Y_U)^2$ give $E_B[S_U^2]=(N\sigma^2-N\operatorname{Var}_B(\bar Y_U))/(N-1)=\sigma^2(2M-5/2)/(2M-1)$. By [F2] on the singleton-PSU partition with sample size $2k$, the element mean estimator has variance $(1-2k/N)S_U^2/(2k)=(1-k/M)S_U^2/(2k)$, so $E_B[\operatorname{Var}_d(\widehat\mu_E\mid B)]=[(1-k/M)/(2k)]\sigma^2(2M-5/2)/(2M-1)$. [given, A1, F2, F3, F4, F5, algebra]

2.1 Let $n_i\in\{1,3\}$ be the PSU sizes; then $T_i=n_iB_i$, $\sum_i n_i^2=5M$, and independence gives $\operatorname{Var}_B(\bar T)=\sigma^2\sum_i n_i^2/M^2$. Using $\sum_i(T_i-\bar T)^2=\sum_iT_i^2-M\bar T^2$ and $E_B[T_i]=0$ yields $E_B[\sum_i(T_i-\bar T)^2]=\sum_i\operatorname{Var}_B(T_i)-M\operatorname{Var}_B(\bar T)=((M-1)/M)\sigma^2\sum_i n_i^2$, hence $E_B[S_T^2]=(1/(M-1))E_B[\sum_i(T_i-\bar T)^2]=(\sigma^2/M)\sum_i n_i^2=5\sigma^2$. By [F2], dividing the total-estimator variance by $N^2=(2M)^2$ gives $E_B[\operatorname{Var}_d(\widehat\mu_C\mid B)]=(5\sigma^2/(4k))(1-k/M)$. [given, A1, F2, F3, F4, F5, step 1.1, algebra]

3.1 The common positive factor $(1-k/M)\sigma^2/(2k)$ cancels, so $\operatorname{DEFF}=(5/2)(2M-1)/(2M-5/2)$; at $M=100$ this is $199/79$, not $2$, and it tends to $5/2$ as $M\to\infty$, refuting the average-size substitution. [step 1.1, step 1.2, step 2.1, algebra] ∎

## Remarks

This refutes only the arithmetic-mean-size substitution. It does not give a
general design-effect formula for unequal cluster sizes, unequal weights, or
nonexchangeable covariance structures; each requires its own stated estimator
and variance calculation.
