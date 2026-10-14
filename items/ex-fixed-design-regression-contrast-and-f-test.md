---
id: ex-fixed-design-regression-contrast-and-f-test
kind: example
title: "A fixed-design slope contrast and nested-model F statistic"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - thm-gaussian-linear-model-qr-and-exact-t-f-pivots
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "MIT 18.S096, Regression Analysis, Lecture 6, Normal Regression Models"
      url: "https://ocw.iti.hr/courses/mathematics/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/lecture-notes/MIT18_S096F13_lecnote6.pdf"
    - title: "Yen-Chi Chen, UW STAT 512 Lecture 8: Linear Models and Multivariate Normal Distributions"
      url: "https://faculty.washington.edu/yenchic/20A_stat512/Lec8_Linear.pdf"
---

## Example

Assume the Axiom of Choice. Use the fixed design with rows $(1,-1),(1,-1),(1,1),(1,1)$ and observations $y=(1,2,4,5)^T$. The full model has intercept and slope; the reduced model has only an intercept, so the rank difference is $q=1$. The least-squares estimates are $(\widehat\beta_0,\widehat\beta_1)=(3,3/2)$, the full residual sum is $RSS_U=1$, and the reduced residual sum is $RSS_R=10$. Thus the observed slope t statistic under $H_0:\beta_1=0$ is $3\sqrt2$, and the nested-model F statistic is
$$
F=\frac{(10-1)/1}{1/(4-2)}=18.
$$
Under fixed-design normal errors with the null true, the theorem gives exact laws $t_2$ for the contrast and $F_{1,2}$ for the nested-model statistic.

## Facts & Assumptions

**Given:** The displayed deterministic design, response vector, and the fixed-design normal error model under the null.

[F1] For a fixed full-rank Gaussian design, every nonzero coefficient contrast has an exact t pivot and a nested reduced/full model has the stated exact F pivot. [[thm-gaussian-linear-model-qr-and-exact-t-f-pivots]]

## Verification

**Proof technique:** direct.

1.1 The two design columns are orthogonal: their inner product is $1(-1)+1(-1)+1(1)+1(1)=0$, and each has squared norm $4$. Hence $X^TX=4I_2$. The displayed least-squares coefficients are $\widehat\beta_0=(1+2+4+5)/4=3$ and $\widehat\beta_1=(-1-2+4+5)/4=3/2$. The full fitted values are $(3/2,3/2,9/2,9/2)$, so the residuals are $(-1/2,1/2,-1/2,1/2)$ and $RSS_U=1$. [given, algebra]

2.1 The reduced fit is the sample mean $3$, with residuals $(-2,-1,1,2)$ and $RSS_R=10$. For $c=(0,1)^T$, $c^T(X^TX)^{-1}c=1/4$ and $S^2=RSS_U/(4-2)=1/2$, so the observed null t statistic is $(3/2)/\sqrt{(1/2)(1/4)}=3\sqrt2$. [given, step 1.1, algebra]

3.1 The rank difference is one and the denominator degrees of freedom are $4-2=2$. Therefore $F=((RSS_R-RSS_U)/1)/(RSS_U/2)=18$. Under the normal model and the null $\beta_1=0$, [F1] gives the exact $F_{1,2}$ law; the t contrast has the exact $t_2$ law and its square agrees with $F$ here. [F1, step 1.1, step 2.1, algebra] ∎
