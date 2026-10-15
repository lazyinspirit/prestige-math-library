---
id: thm-stratified-interference-variance-estimators-conservative
kind: theorem
title: "Stratified-interference variance estimators are conservative"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 5
deps:
  - def-stratified-interference-design-based-variance-estimators
  - lem-two-stage-finite-design-variance-identities
  - lem-finite-simple-random-sampling-identities
  - thm-two-stage-randomized-interference-estimators-unbiased
  - def-two-stage-randomized-interference-design-and-effects
  - def-variance-and-covariance
  - lem-finite-sum-laws
  - lem-finite-event-conditional-expectation-formula
  - thm-linearity-of-expectation
  - lem-measurable-functions-preserve-independence
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Michael G. Hudgens and M. Elizabeth Halloran, Toward Causal Inference With Interference, Theorems 4–9 and Appendices A.4–A.9"
      url: "https://www.treatment-effects.com/Hudgens-Halloran-2008.pdf"
---

## Statement

Assume the two-stage design of [[def-two-stage-randomized-interference-design-and-effects]], stratified interference as in [[def-stratified-interference-design-based-variance-estimators]], and $2\le C\le N-2$. For the population direct-effect variance estimator under $\psi$, additionally assume $2\le K_i^\psi\le n_i-2$ for every group. Then
$$\mathbb E[\widehat V_D(\psi)]=\operatorname{Var}(\widehat{DE}(\psi))+\frac1{N^2}\sum_{i=1}^N\frac{S_{iD}^2(\psi)}{n_i}.$$
For the source arm-wise variance estimators of the indirect, total, and overall contrasts,
$$\mathbb E[\widehat V_I(\phi,\psi)]=\operatorname{Var}(\widehat{IE}(\phi,\psi))+\frac{S_I^2}{N},$$
$$\mathbb E[\widehat V_T(\phi,\psi)]=\operatorname{Var}(\widehat{TE}(\phi,\psi))+\frac{S_T^2}{N},\qquad \mathbb E[\widehat V_O(\phi,\psi)]=\operatorname{Var}(\widehat{OE}(\phi,\psi))+\frac{S_O^2}{N},$$
where
$$I_i=\bar Y_i(0;\phi)-\bar Y_i(0;\psi),\quad T_i=\bar Y_i(0;\phi)-\bar Y_i(1;\psi),\quad O_i=\bar Y_i(\phi)-\bar Y_i(\psi),$$
and, with $\bar I=N^{-1}\sum_iI_i$, $\bar T=N^{-1}\sum_iT_i$, and $\bar O=N^{-1}\sum_iO_i$,
$$S_I^2=\frac1{N-1}\sum_i(I_i-\bar I)^2,\qquad S_T^2=\frac1{N-1}\sum_i(T_i-\bar T)^2,\qquad S_O^2=\frac1{N-1}\sum_i(O_i-\bar O)^2.$$
All correction terms are nonnegative. The direct-effect correction is zero exactly when, within every group, the individual direct effects $Y_{ij}(0;\psi)-Y_{ij}(1;\psi)$ are constant across $j$. Each contrast correction is zero exactly when its corresponding group-level effects are constant across $i$. Thus the variance estimators are conservative, and equality requires the stated additivity condition. The variance estimators are undefined outside their stated minimum sample sizes; the point-effect estimators remain defined for the wider design range $1\le K_i^s<n_i$.

## Facts & Assumptions

**Given:** Fixed finite-population potential outcomes; the two-stage complete randomization; stratified interference; $2\le C\le N-2$; and, for the direct variance estimator under $\psi$, $2\le K_i^\psi\le n_i-2$ for every group.

[F1] [[def-two-stage-randomized-interference-design-and-effects]]: exactly $C$ groups are selected uniformly for $\psi$, and conditional on strategy labels, the fixed-size within-group treatment subsets are uniform and independent across groups.

[F2] [[def-stratified-interference-design-based-variance-estimators]]: at a fixed within-group treated count, each unit's outcome is invariant to which peers are treated; it defines the sample-variance estimators used below.

[F3] [[lem-finite-simple-random-sampling-identities]]: finite-population sample means have the stated covariance identity, and observed sample covariance is unbiased when the sample size is at least two.

[F4] [[lem-two-stage-finite-design-variance-identities]]: first-stage strategy means and contrasts have the stated design variance formulas, and the usual arm-wise variance estimator adds the finite-population variance of the group-level contrast divided by $N$.

[F5] [[def-variance-and-covariance]]: design variance is the finite expectation of the squared centered estimator, with covariance the corresponding centered product expectation.

[F6] [[thm-two-stage-randomized-interference-estimators-unbiased]]: the observed group means under either strategy are unbiased for their defined group-level targets.

[F7] [[lem-finite-sum-laws]]: finite sums distribute over addition and scaling.

[F8] [[thm-linearity-of-expectation]]: expectation distributes over finite real linear combinations on a finite probability space.

[F9] [[lem-finite-event-conditional-expectation-formula]]: event-conditioned means are finite weighted sums and conditional expectations average over a finite partition to the unconditional expectation.

[F10] [[lem-measurable-functions-preserve-independence]]: measurable coordinatewise functions of independent random elements remain independent.

## Proof

1.1 Fix a group $i$ assigned to $\psi$, put $k=K_i^\psi$, and set $x_{0j}=Y_{ij}(0;\psi)$ and $x_{1j}=Y_{ij}(1;\psi)$. By [F9], conditioning on $S_i=\psi$ uses the finite conditional weighted-sum law; [F2] fixes the two potential-outcome lists, while [F1] makes the treated units a uniform $k$-subset and the controls its uniform $(n_i-k)$-element complement. If $\bar x_{0,T}$ is the treated-subset mean of $x_0$ and $\bar x_0$ is its full-group mean, the control mean is $\bar x_0-\frac{k}{n_i-k}(\bar x_{0,T}-\bar x_0)$. Both arm means have expectations $\bar x_0,\bar x_1$ by [F3], so $\mathbb E[\hat D_i(\psi)\mid S_i=\psi]=D_i(\psi)$. [F1, F2, F3, F9, given]

1.2 For the indirect contrast apply [F4] with $a_i(\phi)=\bar Y_i(0;\phi)$ and $a_i(\psi)=\bar Y_i(0;\psi)$ and observed group means $X_i(s)=\hat{\bar Y}_i(0;s)$. These are measurable functions of their groups' second-stage assignments, so [F1] and [F10] supply [F4]'s conditional-independence premise; [F6] supplies the means. The arm-wise estimator's correction is $S_I^2/N$. For the total contrast use $a_i(\phi)=\bar Y_i(0;\phi)$ and $a_i(\psi)=\bar Y_i(1;\psi)$ with their corresponding observed group means; [F6] and [F4] give correction $S_T^2/N$. For the overall contrast use $a_i(s)=\bar Y_i(s)$ and $X_i(s)=\hat{\bar Y}_i(s)$; the same results give correction $S_O^2/N$. The formulas are exactly the arm-wise variance sums in [F2], and expectation linearity [F8] gives each displayed identity. [F1, F2, F4, F6, F8, F10, given]

2.1 Write $S_{i0}^2,S_{i1}^2$ for the finite-population variances of $x_0,x_1$ and $S_{i01}$ for their covariance. By [F3], $\operatorname{Cov}(\bar x_{0,T},\bar x_{1,T})=(1-k/n_i)S_{i01}/k$, so the control-mean covariance with the treated mean is $-\frac{k}{n_i-k}(1-k/n_i)S_{i01}/k=-S_{i01}/n_i$. Also the control-mean variance is $kS_{i0}^2/(n_i(n_i-k))$ and the treated-mean variance is $(n_i-k)S_{i1}^2/(n_i k)$. Expanding the variance of their difference by [F5], expectation linearity [F8], and [F7], and using $S_{iD}^2=S_{i0}^2+S_{i1}^2-2S_{i01}$, gives $v_i=\operatorname{Var}(\hat D_i(\psi)\mid S_i=\psi)=S_{i0}^2/(n_i-k)+S_{i1}^2/k-S_{iD}^2(\psi)/n_i$. The sample-covariance identity [F3] makes $\mathbb E[s_{i0}^2\mid S_i=\psi]=S_{i0}^2$ and $\mathbb E[s_{i1}^2\mid S_i=\psi]=S_{i1}^2$; hence $\mathbb E[\hat v_i\mid S_i=\psi]=v_i+S_{iD}^2(\psi)/n_i$ for $\hat v_i=s_{i0}^2/(n_i-k)+s_{i1}^2/k$. [F2, F3, F5, F7, F8, F9, step 1.1, algebra]

3.1 Each group estimator $\hat D_i(\psi)$ is a measurable function of that group's second-stage assignment. By the conditional independence in [F1] and [F10], these estimators are conditionally independent across groups, so [F4] applies using the means from step 1.1 and variances from step 2.1. With $S_D^2=(N-1)^{-1}\sum_i(D_i(\psi)-DE(\psi))^2$, [F4] gives $\operatorname{Var}(\widehat{DE}(\psi))=(1-C/N)S_D^2/C+(CN)^{-1}\sum_i v_i$ and $\mathbb E[s_{D,\psi}^2]=S_D^2+N^{-1}\sum_i v_i$. Therefore the first component of $\widehat V_D$ has expectation $(1-C/N)S_D^2/C+(1-C/N)(CN)^{-1}\sum_i v_i$. By [F8], [F9], and $\mathbb P(S_i=\psi)=C/N$, the second component has expectation $N^{-2}\sum_i\{v_i+S_{iD}^2(\psi)/n_i\}$. Adding the components and using $(1-C/N)/(CN)+1/N^2=1/(CN)$ proves the direct-effect identity. [F1, F2, F4, F8, F9, F10, step 1.1, step 2.1, given, algebra]

4.1 Each correction is a positive constant times a finite sum of squared deviations. By [F7], such a correction is zero exactly when every squared deviation is zero: the direct correction requires each within-group direct effect to be constant across units, and each contrast correction requires its corresponding group-level effects to be constant across groups. Thus every correction is nonnegative and the stated equality conditions are exact. [F2, F7, step 3.1, step 1.2, algebra] ∎