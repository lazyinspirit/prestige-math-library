---
id: cex-a-norm-need-not-satisfy-the-parallelogram-law
kind: counterexample
title: A norm need not satisfy the parallelogram law
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-jordan-von-neumann-polarization, def-l-p-space-as-a-quotient-by-null-functions, def-counting-measure, rem-ell-p-is-l-p-of-counting-measure, lem-rational-power-laws, lem-rational-power-monotone, def-rational-power, def-real-and-complex-inner-product-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §1.3.3, p.39 and §2.3.6"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis, Lecture 15"
      url: "https://live.ocw.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
---

## Statement refuted

Every norm on a real vector space containing two linearly independent vectors is induced by an inner product, equivalently satisfies the parallelogram law.

## Facts & Assumptions

[A1] A norm is induced by an inner product if and only if it satisfies the parallelogram law $\|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2$ ([[thm-jordan-von-neumann-polarization]]).

[A2] For $1\le p<\infty$ the space $\ell^p$ is the quotient $L^p(\#)$ of counting measure on $\mathbb N$, whose norm is $\|f\|_p=\bigl(\int|f|^p\,d\#\bigr)^{1/p}=\bigl(\sum_k|a_k|^p\bigr)^{1/p}$, while $\|f\|_\infty=\sup_k|a_k|$; almost-everywhere equality is equality everywhere ([[rem-ell-p-is-l-p-of-counting-measure]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-counting-measure]]).

[A3] Rational powers of a fixed base $b>1$ are strictly increasing in the exponent, and satisfy $(b^r)^s=b^{rs}$ and $b^{r+s}=b^rb^s$ ([[lem-rational-power-monotone]], [[lem-rational-power-laws]], [[def-rational-power]]).

[A4] Every inner-product norm satisfies the parallelogram law ([[def-real-and-complex-inner-product-space]], [[thm-jordan-von-neumann-polarization]]).

## Counterexample

**Proof technique:** direct.

**Given:** A rational $p$ with $1\le p<\infty$, $p\ne2$, and the coordinate vectors $e_1,e_2$ of the sequence space $\ell^p$, together with the case of the supremum norm $\|\cdot\|_\infty$.

1.1 In $\ell^p$ the function $f=e_1+e_2$ has $|f|^p=1$ at the two indices $0,1$ and $0$ elsewhere, so $\|e_1+e_2\|_p=(1+1)^{1/p}=2^{1/p}$, and likewise $\|e_1-e_2\|_p=2^{1/p}$ because $|f|=1$ at the same two indices; in $\ell^\infty$ the two norms are $\|e_1\pm e_2\|_\infty=1$. [A2, A3]

2.1 The parallelogram law in $\ell^p$ would therefore read $2\cdot2^{2/p}=4$, that is $2^{2/p}=2=2^1$, which by strict monotonicity of the rational powers of base $2$ forces $2/p=1$, that is $p=2$; for $p\ne2$ it fails, and in $\ell^\infty$ the two sides are $2$ and $4$, so it fails there too. [step 1.1, A3, algebra]

3.1 By the Jordan–von Neumann characterisation, the norm of $\ell^p$ with $p\ne2$, and the supremum norm of $\ell^\infty$, are therefore not induced by any inner product on a space containing the two linearly independent coordinate vectors: the parallelogram law fails on $e_1,e_2$, and it would hold on every pair of vectors if an inducing inner product existed. [step 2.1, A1, A4] ∎
