---
id: ex-sample-covariance-singular-when-sample-size-not-exceeding-dimension
kind: example
title: The unbiased sample covariance is singular when 2 ≤ n ≤ p
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 2
deps:
  - def-multivariate-normal-sample-model-and-statistics
  - def-rank-and-nullity
  - thm-rank-nullity
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Arak Mathai, Serge Provost, and Hans J. Haubold, Multivariate Statistical Analysis in the Real and Complex Domains, Chapter 3 §3.5, PDF pp. 55–62"
      url: "https://link.springer.com/content/pdf/10.1007/978-3-030-95864-0_3.pdf"
    - title: "Soumendu Mukherjee, Multivariate Analysis 2021, Lecture 3, PDF pp. 1–5"
      url: "https://soumendu041.gitlab.io/teaching/courses/mva2021/lectures/scribes/lec-3.pdf"
    - title: "Peter D. Hoff, Multivariate Statistical Analysis, Duke STA 832 lecture notes, relevant sections in Chapters 4 and 7"
      url: "https://www2.stat.duke.edu/~pdh10/Teaching/832/Materials/notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

For every dataset of $n$ vectors in $\mathbb R^p$ with $2\le n\le p$, the covariance convention $S=R/(n-1)$ from [[def-multivariate-normal-sample-model-and-statistics]] is singular. Equality $n=p$ is included. At $n=1$, that covariance convention is undefined because its denominator is zero.

## Facts & Assumptions

**Given:** Integers $2\le n\le p$ and arbitrary vectors $x_1,\ldots,x_n\in\mathbb R^p$.

[F1] The centered scatter is $R=\sum_{i=1}^n(x_i-\bar x)(x_i-\bar x)^T$ and $S=R/(n-1)$. [[def-multivariate-normal-sample-model-and-statistics]]

[F2] Rank is the dimension of the image, nullity is the dimension of the kernel, and their sum equals the dimension of the finite-dimensional domain. [[def-rank-and-nullity]] [[thm-rank-nullity]]

## Verification

1.1 Let $v_i=x_i-\bar x$. Their sum is $\sum_i v_i=0$, so the $n$ centered vectors are linearly dependent. Their span therefore has dimension at most $n-1\le p-1$. [given, F1, algebra]

2.1 Let $V=[v_1|\cdots|v_n]:\mathbb R^n\to\mathbb R^p$. Since $V(1,\ldots,1)^T=0$, [F2] gives $\operatorname{rank}V\le n-1\le p-1$, so $\operatorname{im}V$ is a proper subspace of $\mathbb R^p$. The scatter matrix is $R=VV^T$, hence $\operatorname{im}R\subseteq\operatorname{im}V$; it is not surjective and therefore is singular. Because $n-1>0$, $S=R/(n-1)$ has the same non-surjective image and is singular. [F1, F2, step 1.1, algebra]

3.1 If $n=p$, the rank bound in step 1.1 is $p-1$, so equality of sample size and dimension still forces singularity. If $n=1$, the definition $S=R/(n-1)$ has zero denominator and defines no sample covariance; this example makes no $n=1$ covariance claim. [F1, step 1.1, step 2.1] ∎

