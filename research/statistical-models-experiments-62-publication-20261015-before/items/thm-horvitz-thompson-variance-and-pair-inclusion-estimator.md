---
id: thm-horvitz-thompson-variance-and-pair-inclusion-estimator
kind: theorem
title: Horvitz–Thompson variance and pair-inclusion estimate
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-finite-population-and-sampling-design
  - def-inclusion-covariance-difference
  - def-moments-variance-and-covariance
  - thm-covariance-bilinearity-and-symmetry
  - thm-variance-of-a-finite-sum
  - cor-expectation-of-an-indicator-is-probability
  - cor-expectation-linearity-monotonicity-and-modulus-bound
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
    - title: "Shalabh, Sampling Theory, Chapter 7: Varying Probability Sampling, PDF pp. 25–27"
      url: "https://home.iitk.ac.in/~shalab/sampling/chapter7-sampling-varying-probability-sampling.pdf"
    - title: "John J. Borkowski, Horvitz–Thompson Estimators, STAT 446 Lecture 6, §6.2, printed pp. 141–143"
      url: "https://math.montana.edu/jobo/st446/documents/ho6.pdf"

---

## Statement

Let $(U,y)$ be a finite population with a sampling design as in
[[def-finite-population-and-sampling-design]]. Write $I_i$ for the indicator
that unit $i$ is included, and assume $\pi_i>0$ for every $i\in U$. The
Horvitz–Thompson total is
$$\widehat T_{HT}:=\sum_{i\in U}\frac{I_i y_i}{\pi_i}.$$
Its design variance is
$$\operatorname{Var}_d(\widehat T_{HT})=\sum_{i,j\in U}\frac{\Delta_{ij}y_i y_j}{\pi_i\pi_j},$$
where $\Delta_{ij}$ is defined in
[[def-inclusion-covariance-difference]]. If, in addition, $\pi_{ij}>0$ for
every ordered pair $(i,j)$, the all-pairs inverse-inclusion expression
$$\widehat V_{HT}:=\sum_{i,j\in U}I_iI_j\frac{\Delta_{ij}}{\pi_{ij}}\frac{y_i}{\pi_i}\frac{y_j}{\pi_j}$$
is defined and satisfies
$$E_d[\widehat V_{HT}]=\operatorname{Var}_d(\widehat T_{HT}).$$
When a pair has zero inclusion probability, the corresponding all-pairs
coefficient $\Delta_{ij}/\pi_{ij}$ is undefined; omitting unsupported pairs
is a different expression and does not by itself prove unbiasedness or
non-estimability by some other method.

## Facts & Assumptions

**Given:** A finite population $(U,y)$, a finite sampling design, $\pi_i>0$
for every unit, and additionally $\pi_{ij}>0$ for every ordered pair when
proving the pair-inclusion identity.

[F1] [[def-finite-population-and-sampling-design]]: The population values are
fixed; the finite design has support $\mathcal S_d$ and weights $p_d$; $I_i$
is the inclusion indicator; $\pi_i=P_d(I_i=1)$ and
$\pi_{ij}=P_d(I_i=I_j=1)$; also $\pi_{ii}=\pi_i$.

[F2] [[def-inclusion-covariance-difference]]: $\Delta_{ij}=\pi_{ij}-\pi_i\pi_j$.

[F3] [[def-moments-variance-and-covariance]]: Variance is the expectation of
the squared centered variable, and covariance is the expectation of the
product of centered variables.

[F4] [[cor-expectation-of-an-indicator-is-probability]]: The expectation of
an event indicator equals the probability of its event.

[F5] [[thm-variance-of-a-finite-sum]]: The variance of a finite sum of
square-integrable variables on one probability space is the double sum of
their pairwise covariances.

[F6] [[thm-covariance-bilinearity-and-symmetry]]: Covariance is bilinear for
finite linear combinations of square-integrable variables on one probability
space.

[F7] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]: For
integrable random variables $X,Y$ and scalars $a,b$ on one probability
space, $E[aX+bY]=aE[X]+bE[Y]$.

## Proof

1.1 For each $i\in U$, set $X_i=I_i y_i/\pi_i$. The design support is finite by [F1], each $I_i$ is bounded, and $y_i/\pi_i$ is finite by the positivity assumption; hence every $X_i$ is square-integrable and $\widehat T_{HT}=\sum_{i\in U}X_i$. [given, F1, choose]

2.1 Apply [F5] to this finite family on the common design probability space to obtain $\operatorname{Var}_d(\widehat T_{HT})=\sum_{i,j\in U}\operatorname{Cov}_d(X_i,X_j)$. [F1, F5, step 1.1]

3.1 By [F6], $\operatorname{Cov}_d(X_i,X_j)=\frac{y_i y_j}{\pi_i\pi_j}\operatorname{Cov}_d(I_i,I_j)$. For $A_i=\{s:i\in s\}$, $I_i=\mathbf1_{A_i}$ and $I_iI_j=\mathbf1_{A_i\cap A_j}$, so [F4] and [F1] give $E_d[I_i]=\pi_i$ and $E_d[I_iI_j]=\pi_{ij}$; expanding [F3] gives $\operatorname{Cov}_d(I_i,I_j)=\pi_{ij}-\pi_i\pi_j=\Delta_{ij}$ by [F2], and substitution in step 2.1 proves the variance formula. [F1, F2, F3, F4, F6, step 2.1, algebra]

4.1 Under the additional pair-positivity assumption every coefficient in $\widehat V_{HT}$ is defined and every term is integrable on the finite support. Linearity over the finite index set $U\times U$ follows by induction: the empty sum has expectation zero, and adjoining one term uses the two-variable rule [F7]. For each pair, $I_iI_j$ is the indicator of joint inclusion by [F1], so [F4] gives $E_d[I_iI_j]=\pi_{ij}$; hence $E_d[\widehat V_{HT}]=\sum_{i,j\in U}\frac{\Delta_{ij}}{\pi_{ij}}\frac{y_i y_j}{\pi_i\pi_j}E_d[I_iI_j]=\sum_{i,j\in U}\frac{\Delta_{ij}y_i y_j}{\pi_i\pi_j}=\operatorname{Var}_d(\widehat T_{HT})$ by step 3.1. [given, F1, F4, F7, step 3.1, algebra]

5.1 If $\pi_{ij}=0$, the coefficient $\Delta_{ij}/\pi_{ij}$ in the all-pairs expression is undefined; removing that unsupported term changes the expression, and step 4.1 no longer proves unbiasedness, without ruling out another design-specific estimator. [given, step 4.1, algebra] ∎