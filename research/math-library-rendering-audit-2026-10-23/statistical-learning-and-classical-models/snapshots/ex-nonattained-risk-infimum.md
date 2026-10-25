---
id: ex-nonattained-risk-infimum
kind: example
title: "A nonattained risk infimum"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - def-empirical-risk-minimizer
  - alg-approximate-erm
  - def-complete-ordered-real-field
  - cor-archimedean-reciprocal
  - lem-of-inverse-positive
  - lem-of-naturals-positive
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 3 §3.2.2"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Example

Let $\mathsf X=\{x_0\}$ and $\mathsf Y=\{0\}$ with discrete sigma-algebras, let $\mathsf A=\mathbb R$ with its Borel sigma-algebra, and let $P$ put mass one on $(x_0,0)$. For each positive integer $n$, let $f_n(x_0)=1/n$ and set $\mathcal F=\{f_n:n\ge1\}$. Use squared loss $\ell(a,y)=(a-y)^2$. For every sample size $m\ge1$, the only sample has $\widehat R_S(f_n)=R_P(f_n)=1/n^2$. The empirical and population infima over $\mathcal F$ are both $0$ and are not attained. For tolerance $\eta=1/4$, the constant selector $A_{1/4}(S,x)=1/2$ supplies the approximate-ERM procedure with output $f_2$; for tolerance $0$, no exact ERM exists.

## Facts & Assumptions

**Given:** The singleton instance and label spaces, point-mass law, predictor class and squared loss stated in the example.

[F1] Population and empirical risks are the joint-law integral and finite sample average of the loss. [[def-population-and-empirical-risk]]

[F2] An exact ERM attains the empirical infimum; if a finite infimum is not attained, no exact minimizer exists. [[def-empirical-risk-minimizer]]

[F3] The approximate-ERM procedure takes a supplied jointly measurable selector satisfying the samplewise risk condition. [[alg-approximate-erm]]

[F4] The real line is a complete ordered field, with the usual embedded positive integers. [[def-complete-ordered-real-field]]

[F5] For every $\varepsilon>0$ in a complete ordered field, some positive integer $n$ satisfies $1/n<\varepsilon$. [[cor-archimedean-reciprocal]]

[F6] The inverse of a positive field element is positive. [[lem-of-inverse-positive]]

[F7] Every canonical positive integer is positive in the ordered real field. [[lem-of-naturals-positive]]

## Verification

1.1 For every sample $S$ and every $n\ge1$, the only observed pair is $(x_0,0)$, so [F1] gives $\widehat R_S(f_n)=R_P(f_n)=(1/n)^2=1/n^2$. By [F4] and [F7], $n>0$, so [F6] gives $1/n>0$ and each listed risk is positive. [given, F1, F4, F6, F7, algebra]

2.1 Let $\varepsilon>0$ and set $\delta=\min\{\varepsilon,1/2\}>0$. By [F5] choose $n\ge1$ with $0<1/n<\delta\le1/2$. Then $1/n^2<1/n<\varepsilon$. Thus $0$ is a lower bound and no positive number is a lower bound; the infimum is $0$. Step 1.1 shows it is never attained, so no exact ERM exists. [given, F4, F5, F6, F7, step 1.1, algebra]

3.1 For each fixed $m$, the sample space contains only the all-$(x_0,0)$ sample. The constant evaluation map $A_{1/4}(S,x)=1/2$ is jointly measurable and its slice is $f_2$, whose risk is $1/4=0+1/4$ by steps 1.1 and 2.1. It is therefore an admissible supplied selector for [F3], which returns $f_2$; tolerance $0$ has no output satisfying exact minimization by step 2.1. [F1, F2, F3, given, step 1.1, step 2.1, algebra] ∎
