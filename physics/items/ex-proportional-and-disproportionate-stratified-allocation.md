---
id: ex-proportional-and-disproportionate-stratified-allocation
kind: example
title: Proportional and disproportionate stratified allocations
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 7
deps:
  - def-stratified-sampling-design-and-estimator
  - thm-stratified-total-unbiasedness-and-variance
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Shalabh, Sampling Theory, MTH 417 lecture notes, Chapter 4: Stratified Sampling, PDF pp. 8–9 and 12–14"
      url: "https://home.iitk.ac.in/~shalab/sampling/chapter4-sampling-stratified-sampling.pdf"
    - title: "Robin Arnold, STAT392 Sample Surveys, Chapter 8: Stratified Sampling, §§8.3 and 8.8"
      url: "https://homepages.ecs.vuw.ac.nz/~rarnold/STAT392/SampleSurveysBook/_book/stratified-sampling"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let $U_1$ have fixed values $7,9,11,13$ and let $U_2$ have fixed values
$18,22$. Compare independent stratified SRSWOR allocations $(n_1,n_2)=(2,1)$
and $(1,2)$, both with total sample size three. The first allocation is
proportional to stratum sizes; the second oversamples the smaller stratum.

## Facts & Assumptions

**Given:** The six fixed values above, independent within-stratum SRSWOR,
and the two stated allocations.

[F1] [[def-stratified-sampling-design-and-estimator]]: The estimator is
$\widehat T_{st}=N_1\bar y_{1,R}+N_2\bar y_{2,R}$; certainty strata have
zero variance contribution.

[F2] [[thm-stratified-total-unbiasedness-and-variance]]: The estimator is
design-unbiased, and its variance is the sum of the stratum contributions
$N_h^2(1-n_h/N_h)S_h^2/n_h$ over noncertainty strata.

## Verification

1.1 The fixed means are $\bar y_1=10$ and $\bar y_2=20$. The population variances are $S_1^2=((-3)^2+(-1)^2+1^2+3^2)/3=20/3$ and $S_2^2=((-2)^2+2^2)/1=8$, so the total is $4(10)+2(20)=80$. [given, choose, algebra]

2.1 Both allocations satisfy $1\le n_h\le N_h$. By [F2] and step 1.1, each corresponding weighted estimator has expectation $80$. [F1, F2, step 1.1]

2.2 Under allocation $(2,1)$, [F2] and step 1.1 give variance $16(1-2/4)(20/3)/2+4(1-1/2)8/1=80/3+16=128/3$. [F2, step 1.1, algebra]

2.3 Under allocation $(1,2)$, the second stratum is a census, so [F1], [F2], and step 1.1 give variance $16(1-1/4)(20/3)/1=80$. [F1, F2, step 1.1, algebra]

3.1 Step 2.1 gives unbiasedness for both designs, and steps 2.2–2.3 give $128/3<80$ for these fixed values. [step 2.1, step 2.2, step 2.3, algebra] ∎