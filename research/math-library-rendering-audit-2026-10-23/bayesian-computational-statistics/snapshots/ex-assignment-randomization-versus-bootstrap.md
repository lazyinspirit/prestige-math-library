---
id: ex-assignment-randomization-versus-bootstrap
kind: example
title: "Assignment randomization and bootstrap are different laws"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - def-resampling-sampling-unit-contract
  - alg-n-out-of-n-bootstrap-from-empirical-law
  - thm-bootstrap-draws-are-conditionally-iid-empirical-law
  - def-finite-randomized-treatment-assignment-model
  - def-finite-population-average-treatment-effect-and-weak-null
  - def-fisher-sharp-null-and-predeclared-test-orderings
  - def-statistic-and-estimator
  - def-p-value
  - def-empirical-measure
  - thm-fisher-sharp-null-randomization-pvalues-are-valid
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Gary W. Oehlert, A First Course in Design and Analysis of Experiments, Chapter 2, §2.4"
      url: "https://users.stat.umn.edu/~gary/book/fcdae.pdf"
    - title: "Siva Balakrishnan, CMU 36-705 Lecture 28, §28.5 Fisher's Exact p-values"
      url: "https://www.stat.cmu.edu/~siva/teaching/705/lec28.pdf"
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §2, printed pp. 3–5"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "B. Efron and R. Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Stanford LCS Technical Report 19 / BIO 101 (October 1985; full-text report copy)"
      url: "https://stacks.stanford.edu/file/xv648rw7816/xv648rw7816_LCS-19.pdf"
---

## Example

Take two fixed units with potential outcomes $y=(0,2)$ under the Fisher sharp null, and suppose the observed assignment is $z^{(1)}=(1,0)$. The allowed assignment vectors are $z^{(1)}=(1,0)$ and $z^{(2)}=(0,1)$, each with probability $1/2$. Predeclare the statistic as treated outcome minus untreated outcome. Compare its law under the known assignment mechanism with its law when the two observed outcomes are pointwise bootstrapped with replacement and the observed assignment $z^{(1)}$ is held fixed in the contrast.

## Facts & Assumptions

**Given:** Two fixed units, observed assignment $z^{(1)}=(1,0)$, the two allowed assignments with equal design probabilities, potential outcomes fixed at $(0,2)$ under every assignment, and the predeclared treated-minus-untreated score.

[F1] [[def-finite-randomized-treatment-assignment-model]]: units and potential outcomes are fixed, the assignment has the known finite probability law, and the assignment is the only randomness in the design.

[F2] [[def-fisher-sharp-null-and-predeclared-test-orderings]]: under the Fisher sharp null the response vector is constant over allowed assignments, and the score is fixed in advance; upper-tail ordering includes ties.

[F3] [[thm-fisher-sharp-null-randomization-pvalues-are-valid]]: under every such finite sharp-null design, the inclusive weighted upper-tail rank p-value is superuniform using the actual assignment weights.

[F4] [[alg-n-out-of-n-bootstrap-from-empirical-law]]: pointwise bootstrap samples observed unit values with independent uniform index draws.

[F5] [[thm-bootstrap-draws-are-conditionally-iid-empirical-law]]: conditional on the fixed data, the bootstrap entries are IID from the empirical law.

[F6] [[def-finite-population-average-treatment-effect-and-weak-null]]: the weak zero-average-effect null restricts only the average unit effect, while the Fisher sharp null requires every unit effect to be zero.

[F7] [[def-resampling-sampling-unit-contract]]: the conditional bootstrap law is a law on resampled data records, while a Bayesian posterior is a conditional law on parameter values under a specified prior and joint model.

[F8] [[def-p-value]]: a p-value statistic is valid for a null hypothesis when it is superuniform under every null law.

[F9] [[def-empirical-measure]]: the empirical law assigns each indexed observation mass $1/n$, counting repetitions by index.

## Verification

1.1 Define $T(z,y)=\sum_{i:z_i=1}y_i-\sum_{i:z_i=0}y_i$. The sharp-null schedule fixes $y=(0,2)$, so $T(z^{(1)},y)=-2$ and $T(z^{(2)},y)=2$. [given, F1, F2, construct]

2.1 The design randomization law therefore assigns probability $1/2$ to each of $-2$ and $2$. Its inclusive upper-tail p-value is $1$ at $z^{(1)}$ and $1/2$ at $z^{(2)}$, a superuniform distribution under the assignment law, so [F8] identifies it as valid for this null; [F3] also gives the general validity statement. [F1, F2, F3, F8, step 1.1, algebra]

3.1 The observed unit values are $(0,2)$, so [F9] gives empirical mass $1/2$ to each. By [F4] and [F5], an ordered size-two bootstrap pair takes $(0,0),(0,2),(2,0),(2,2)$ with probabilities $1/4$ each. The same difference score has bootstrap law with masses $1/2$ at $0$ and $1/4$ at each of $-2,2$, which differs from the design law in step 2.1. [F4, F5, F9, step 1.1, step 2.1, algebra]

4.1 The two laws have different state spaces and sampling mechanisms: one resamples assignments under a known design, the other resamples observed unit records conditional on those records. By [F7], a Bayesian posterior, when defined, is instead a conditional law on parameter values under a specified prior and joint model; this example supplies no such prior or posterior. By [F6], its sharp-null calculation also asserts no validity under the weaker average-effect null. [F1, F4, F5, F6, F7, step 2.1, step 3.1] ∎
