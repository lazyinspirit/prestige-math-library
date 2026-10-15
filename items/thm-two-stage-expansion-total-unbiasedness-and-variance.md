---
id: thm-two-stage-expansion-total-unbiasedness-and-variance
kind: theorem
title: "Unbiasedness and variance decomposition for the two-stage expansion total"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-two-stage-cluster-sampling-and-expansion-estimator
  - def-sigma-algebra
  - def-conditional-expectation-given-a-sigma-algebra
  - def-axiom-of-choice
  - def-conditional-expectation-as-an-ae-class
  - def-conditional-variance
  - cor-conditional-variance-decomposition
  - def-moments-variance-and-covariance
  - thm-covariance-bilinearity-and-symmetry
  - thm-variance-of-a-finite-sum
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
    - title: "Shalabh, Sampling Theory, Chapter 10: Two Stage Sampling (Subsampling), PDF pp. 3–7, IIT Kanpur"
      url: "https://home.iitk.ac.in/~shalab/sampling/chapter10-sampling-two-stage-sampling.pdf"
    - title: "Sharon L. Lohr, Sampling: Design and Analysis, 2nd ed., §5.3 and §6.6, printed pp. 145–150 and 204–210"
      url: "https://drive.uqu.edu.sa/_/maatia/files/Sampling.pdf"
---

## Statement

Use the product two-stage design and expansion estimator from
[[def-two-stage-cluster-sampling-and-expansion-estimator]]. Assume AC and
$\pi_i^{(1)}>0$ for every PSU $i$ and $\pi_{j\mid i}^{(2)}>0$ for every SSU
$j\in U_i$. Define
$$\Delta_{ir}^{(1)}=\pi_{ir}^{(1)}-\pi_i^{(1)}\pi_r^{(1)},\qquad \Delta_{j\ell\mid i}^{(2)}=\pi_{j\ell\mid i}^{(2)}- \pi_{j\mid i}^{(2)}\pi_{\ell\mid i}^{(2)}.$$
Then $E_d[\widehat T]=T$ and
$$\operatorname{Var}_d(\widehat T) =\sum_{i=1}^{M}\sum_{r=1}^{M} \frac{\Delta_{ir}^{(1)}}{\pi_i^{(1)}\pi_r^{(1)}}T_iT_r +\sum_{i=1}^{M}\frac{1}{\pi_i^{(1)}} \sum_{j\in U_i}\sum_{\ell\in U_i} \frac{\Delta_{j\ell\mid i}^{(2)}} {\pi_{j\mid i}^{(2)}\pi_{\ell\mid i}^{(2)}}y_{ij}y_{i\ell}.$$
The first term is the design variance of the expansion based on the true PSU
totals. The second is the expected within-PSU sampling variance. Zero pair
inclusion probabilities are permitted because the formula divides only by
positive first-order inclusion probabilities.

## Facts & Assumptions

**Given:** AC; a finite fixed population partitioned into PSUs $U_i$ with fixed
SSU values $y_{ij}$; the product two-stage sampling law; positive first-order
inclusion probabilities at both stages; and the expansion estimators and
stage-specific inclusion probabilities in the Statement.

[F1] [[def-two-stage-cluster-sampling-and-expansion-estimator]]: Given
$S_1$, the second-stage samples are independent with joint mass
$\prod_{i\in S_1}p_{2i}(S_i)$; the full joint mass is
$p_1(S_1)\prod_{i\in S_1}p_{2i}(S_i)$.

[F10] [[def-two-stage-cluster-sampling-and-expansion-estimator]]: It defines
the first- and second-order inclusion probabilities, their covariance
differences, and $\widehat T_i$ and $\widehat T$ using positive first-order
inclusion probabilities.

[F11] [[def-two-stage-cluster-sampling-and-expansion-estimator]]: The
first-stage $E_1$ and $\operatorname{Var}_1$, and conditional second-stage
$E_2[\cdot\mid S_1]$ and centered-square
$\operatorname{Var}_2(\cdot\mid S_1)$, are defined as finite-law
expectations and variances.

[F2] [[def-sigma-algebra]]: A sigma-algebra is an algebra of subsets closed
under countable unions.

[F3] [[def-conditional-expectation-given-a-sigma-algebra]]: A conditional
expectation version is a measurable integrable function whose integral on
each conditioning event equals the integral of the input.

[F4] [[def-conditional-expectation-as-an-ae-class]]: Assume AC for the
supplied existence theorem; $E[X\mid\mathcal G]$ is the unique almost-sure
class of conditional-expectation versions.

[F5] [[def-conditional-variance]]: Assume AC; for $X\in L^2$, conditional
variance is $E[(X-E[X\mid\mathcal G])^2\mid\mathcal G]$ as an almost-sure
class.

[F6] [[cor-conditional-variance-decomposition]]: Assume AC. For real
$X\in L^2(P)$ and a sub-sigma-algebra $\mathcal G$,
$\operatorname{Var}(X)=E[\operatorname{Var}(X\mid\mathcal G)]+
\operatorname{Var}(E[X\mid\mathcal G])$.

[F7] [[def-moments-variance-and-covariance]]: Variance and covariance are
the expectations of the centered square and centered product.

[F8] [[thm-covariance-bilinearity-and-symmetry]]: Covariance is symmetric
and bilinear in finite linear combinations of square-integrable variables.

[F9] [[thm-variance-of-a-finite-sum]]: The variance of a finite sum of
square-integrable real random variables is the sum of all pairwise
covariances.

[A1] [[def-axiom-of-choice]]: AC states that every family of nonempty sets
has a choice function. It is used here only through the conditional
expectation and conditional-variance supplier branch [F3]–[F5].

## Proof

1.1 For each selected PSU $i\in S_1$, let $J_{ij}=1\{j\in S_i\}$; by [F1] and [F10], $E_2[J_{ij}\mid S_1]=\pi_{j\mid i}^{(2)}$, so finite linearity gives $E_2[\widehat T_i\mid S_1]=\sum_{j\in U_i}E_2[J_{ij}\mid S_1]y_{ij}/\pi_{j\mid i}^{(2)}=\sum_{j\in U_i}y_{ij}=T_i$. [given, F1, F10, algebra]

1.2 For PSU $i$ and SSU $j$ put $J_{ij}=1\{j\in S_i\}$. By [F10], [F7]–[F9] give $V_i=\operatorname{Var}_{2i}(\sum_{j\in U_i}J_{ij}y_{ij}/\pi_{j\mid i}^{(2)})=\sum_{j,\ell\in U_i}\operatorname{Cov}_{2i}(J_{ij},J_{i\ell})y_{ij}y_{i\ell}/(\pi_{j\mid i}^{(2)}\pi_{\ell\mid i}^{(2)})=\sum_{j,\ell\in U_i}\Delta_{j\ell\mid i}^{(2)}y_{ij}y_{i\ell}/(\pi_{j\mid i}^{(2)}\pi_{\ell\mid i}^{(2)})$. Only first-order probabilities occur in denominators. [F7, F8, F9, F10, algebra]

2.1 Let $\Omega$ be the finite joint outcome space with law $P_d$ and $\mathcal F=2^\Omega$; since first-stage fibers partition $\Omega$, complements and countable unions of their unions are again unions of fibers, so they form a sigma-algebra $\mathcal G\subseteq\mathcal F$ by [F2]. The function $H(S_1)=\sum_{i\in S_1}T_i/\pi_i^{(1)}$ is finite, integrable and $\mathcal G$-measurable. For each $A=\{S_1\in B_A\}\in\mathcal G$, [F1] and step 1.1 give $E_d[1_A\widehat T]=\sum_{s_1\in B_A}p_1(s_1)\sum_{(s_i)}(\prod_{i\in s_1}p_{2i}(s_i))\sum_{i\in s_1}\widehat T_i/\pi_i^{(1)}=\sum_{s_1\in B_A}p_1(s_1)H(s_1)=E_d[1_AH]$. Thus [F3] makes $H$ a conditional-expectation version and [F4] identifies its class as $E_d[\widehat T\mid\mathcal G]$; the finite support also gives $\widehat T\in L^2$. [A1, F1, F2, F3, F4, F10, step 1.1, algebra]

3.1 Taking the first-stage expectation of $H$ in step 2.1 and using $E_1[1\{i\in S_1\}]=\pi_i^{(1)}$ gives $E_d[\widehat T]=E_1[\sum_{i\in S_1}T_i/\pi_i^{(1)}]=\sum_{i=1}^{M}T_i=T$. [given, F1, F10, step 2.1, algebra]

3.2 For each first-stage outcome $s$, let $K(s)=\operatorname{Var}_2(\widehat T\mid S_1=s)=E_2[(\widehat T-H(s))^2\mid S_1=s]$, where [F10] and step 1.1 give $E_2[\widehat T\mid S_1=s]=H(s)$ by finite linearity; $K$ is finite, hence integrable, and $\mathcal G$-measurable. For any $A=\{S_1\in B_A\}\in\mathcal G$, summing the product law over fibers gives $E_d[1_A(\widehat T-H)^2]=\sum_{s\in B_A}p_1(s)K(s)=E_d[1_AK]$. Thus [F3] and [F4] identify $K$ as the conditional-expectation class of the squared residual, and [F5] identifies it with $\operatorname{Var}(\widehat T\mid\mathcal G)$; consequently its expectation is $E_1[\operatorname{Var}_2(\widehat T\mid S_1)]$, while the conditional-mean variance is $\operatorname{Var}_1(H)$ because $H$ is a function of $S_1\sim p_1$. Applying [F6] under AC yields $\operatorname{Var}_d(\widehat T)=\operatorname{Var}_1(\sum_{i\in S_1}T_i/\pi_i^{(1)})+E_1[\operatorname{Var}_2(\widehat T\mid S_1)]$. [A1, F1, F3, F4, F5, F6, F10, F11, step 1.1, step 2.1, algebra]

3.3 Write $I_i^{(1)}=1\{i\in S_1\}$. The conditional mean in step 2.1 is the first-stage HT estimator of the fixed totals; [F7]–[F9] give $\operatorname{Var}_1(\sum_{i\in S_1}T_i/\pi_i^{(1)})=\sum_{i,r}\operatorname{Cov}_1(I_i^{(1)},I_r^{(1)})T_iT_r/(\pi_i^{(1)}\pi_r^{(1)})=\sum_{i,r}\Delta_{ir}^{(1)}T_iT_r/(\pi_i^{(1)}\pi_r^{(1)})$ by [F10]. [F7, F8, F9, F10, F11, step 2.1, algebra]

4.1 Conditional on $S_1$, [F1] factors the product law across PSUs; for distinct selected $i,r$, $E_2[(\widehat T_i-T_i)(\widehat T_r-T_r)\mid S_1]=E_2[\widehat T_i-T_i\mid S_1]E_2[\widehat T_r-T_r\mid S_1]=0$ by step 1.1, so [F7] gives zero covariance. With $V_i$ from step 1.2, [F8] and [F9] give $\operatorname{Var}_2(\widehat T\mid S_1)=\sum_{i\in S_1}V_i/(\pi_i^{(1)})^2$, whose first-stage expectation is $\sum_i\pi_i^{(1)}V_i/(\pi_i^{(1)})^2=\sum_iV_i/\pi_i^{(1)}$. [F1, F7, F8, F9, F10, F11, step 1.1, step 1.2, step 3.2, algebra]

5.1 Substituting the within-stage expression from step 1.2 and step 4.1 and the between-stage expression from step 3.3 into the decomposition in step 3.2 gives the stated variance, while step 3.1 gives unbiasedness. [step 1.2, step 3.1, step 3.2, step 3.3, step 4.1, algebra] ∎

## Remarks

The AC hypothesis is carried from the published conditional-expectation and
conditional-variance suppliers used in step 2.1; it is not used in the
one-stage theorem or the direct finite enumeration on the B page. The stage-2
independence assumption is essential: dependent second-stage samples across
PSUs add conditional covariance terms.
