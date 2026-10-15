---
id: thm-sen-yates-grundy-variance-identity
kind: theorem
title: Sen–Yates–Grundy variance identity
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-finite-population-and-sampling-design
  - def-inclusion-covariance-difference
  - thm-horvitz-thompson-variance-and-pair-inclusion-estimator
  - cor-expectation-of-an-indicator-is-probability
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - def-moments-variance-and-covariance
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Shalabh, Sampling Theory, Chapter 7: Varying Probability Sampling, PDF pp. 28–30"
      url: "https://home.iitk.ac.in/~shalab/sampling/chapter7-sampling-varying-probability-sampling.pdf"
    - title: "John J. Borkowski, Horvitz–Thompson Estimators, STAT 446 Lecture 6, §6.2, printed pp. 143–146"
      url: "https://math.montana.edu/jobo/st446/documents/ho6.pdf"

---

## Statement

Let $(U,y)$ be a finite population with a fixed-size sampling design as in
[[def-finite-population-and-sampling-design]], so every supported sample has
the same size $n$. Assume $\pi_i>0$ for every $i\in U$ and put
$x_i:=y_i/\pi_i$. Then
$$\sum_{j\in U}\Delta_{ij}=0\quad(i\in U),$$
and the Horvitz–Thompson variance satisfies the Sen–Yates–Grundy identity
$$\operatorname{Var}_d(\widehat T_{HT})=-\frac12\sum_{i,j\in U}\Delta_{ij}(x_i-x_j)^2.$$
If additionally $\pi_{ij}>0$ for every ordered pair, then the sample
expression
$$\widehat V_{SYG}:=-\frac12\sum_{i,j\in U}I_iI_j\frac{\Delta_{ij}}{\pi_{ij}}(x_i-x_j)^2$$
is unbiased for $\operatorname{Var}_d(\widehat T_{HT})$. If
$\Delta_{ij}\le0$ for every distinct pair, this condition guarantees that
$\widehat V_{SYG}$ is nonnegative for every supported sample. It is a
sufficient sign condition for the sample expression; the true variance in
the identity is nonnegative for every valid design.

## Facts & Assumptions

**Given:** A fixed finite population and design with sample size $n$ on every
supported outcome, $\pi_i>0$ for every unit, and additionally
$\pi_{ij}>0$ for every pair when proving the sample-estimate claim.

[F1] [[def-finite-population-and-sampling-design]]: $I_i$ indicates inclusion
of unit $i$, $\pi_i=P_d(I_i=1)$, $\pi_{ij}=P_d(I_i=I_j=1)$, and
$\pi_{ij}=\pi_{ji}$.

[F2] [[def-inclusion-covariance-difference]]: $\Delta_{ij}=\pi_{ij}-\pi_i\pi_j$.

[F3] [[thm-horvitz-thompson-variance-and-pair-inclusion-estimator]]: For
$\pi_i>0$,
$$\operatorname{Var}_d(\widehat T_{HT})=\sum_{i,j\in U}\Delta_{ij}x_ix_j.$$

[F4] [[cor-expectation-of-an-indicator-is-probability]]: An event indicator
has expectation equal to the probability of its event.

[F5] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: For
integrable random variables $X,Y$ and scalars $a,b$ on one probability
space, $E[aX+bY]=aE[X]+bE[Y]$.

[F6] [[def-moments-variance-and-covariance]]: Variance is the expectation of
a square and therefore is nonnegative.

## Proof

1.1 For each i,j, $I_iI_j$ indicates joint inclusion and $I_i$ indicates inclusion by [F1], so [F4] gives their expectations as $\pi_{ij}$ and $\pi_i$. Since $\sum_j I_j=n$ on every sample, finite linearity by induction using [F5] gives $\sum_j\pi_{ij}=E_d[I_i\sum_jI_j]=n\pi_i$ and $\sum_j\pi_i\pi_j=\pi_iE_d[\sum_jI_j]=n\pi_i$; subtracting by [F2] gives $\sum_j\Delta_{ij}=0$. [F1, F2, F4, F5, algebra]

2.1 By [F1] and [F2], $\Delta_{ij}=\Delta_{ji}$ and the column sums also vanish; expansion gives $-\frac12\sum_{i,j}\Delta_{ij}(x_i-x_j)^2=-\frac12(\sum_i x_i^2\sum_j\Delta_{ij}+\sum_j x_j^2\sum_i\Delta_{ij}-2\sum_{i,j}\Delta_{ij}x_ix_j)=\sum_{i,j}\Delta_{ij}x_ix_j$, which is $\operatorname{Var}_d(\widehat T_{HT})$ by [F3] and is nonnegative by [F6]. [F1, F2, F3, F6, step 1.1, algebra]

3.1 If every $\pi_{ij}>0$, each coefficient in $\widehat V_{SYG}$ is defined and every term is integrable on the finite support. Finite-sum linearity follows by induction from [F5]; by [F1], each $I_iI_j$ indicates joint inclusion, so [F4] gives $E_d[I_iI_j]=\pi_{ij}$ and $E_d[\widehat V_{SYG}]=-\frac12\sum_{i,j}\frac{\Delta_{ij}}{\pi_{ij}}E_d[I_iI_j](x_i-x_j)^2=-\frac12\sum_{i,j}\Delta_{ij}(x_i-x_j)^2=\operatorname{Var}_d(\widehat T_{HT})$ by step 2.1. [given, F1, F3, F4, F5, step 2.1, algebra]

4.1 On a supported sample, diagonal terms vanish and symmetry gives $\widehat V_{SYG}(s)=-\sum_{i<j,\ i,j\in s}\frac{\Delta_{ij}}{\pi_{ij}}(x_i-x_j)^2$; if every distinct-pair $\Delta_{ij}\le0$, every summand is nonnegative, proving the sufficient condition. [given, F1, step 3.1, algebra] ∎