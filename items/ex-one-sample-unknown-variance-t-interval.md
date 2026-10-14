---
id: ex-one-sample-unknown-variance-t-interval
kind: example
title: "An exact unknown-variance t interval for a four-point sample"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing
  - thm-normal-mean-residual-independence-and-exact-t-pivot
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
    - title: "Dmitry Panchenko, MIT 18.443 Statistics for Applications, Fall 2003, Lecture 17"
      url: "https://mitocw.ups.edu.ec/courses/mathematics/18-443-statistics-for-applications-fall-2003/lecture-notes/18443.pdf"
    - title: "Joshua M. Tebbs, STAT 512 Lecture Notes, Chapter 8, §8.7.1"
      url: "https://people.stat.sc.edu/Tebbs/stat512/s24notes.pdf"
---

## Example

Assume the Axiom of Choice and an iid sample of size $4$ from $N(\mu,\sigma^2)$ with $\sigma>0$. For the observed values $(1,2,4,5)$, the sample mean is $\bar x=3$ and the unbiased sample variance is $s^2=10/3$. The exact $95\%$ t interval produced by the sample is
$$
\left[3-t_{3,39/40}\frac{\sqrt{10/3}}2,\ 3+t_{3,39/40}\frac{\sqrt{10/3}}2\right].
$$
The repeated-sampling coverage of this interval procedure is exactly $0.95$ under the stated normal model; this is a coverage statement about the procedure, not a probability assigned to the fixed parameter after observing these data.

## Facts & Assumptions

**Given:** The stated normal sample model and observed values $(1,2,4,5)$.

[F1] For an iid normal sample with unknown variance and sample size $n\ge2$, the t pivot has law $t_{n-1}$ and its central quantile interval has exact coverage $1-\alpha$. [[thm-normal-mean-residual-independence-and-exact-t-pivot]]

[F2] The $u$-quantile $t_{k,u}$ is the unique point where the continuous strictly increasing $t_k$ CDF equals $u$. [[lem-student-t-and-f-cdfs-are-continuous-and-strictly-increasing]]

## Verification

**Proof technique:** direct.

1.1 The arithmetic mean is $(1+2+4+5)/4=3$. The deviations from $3$ are $-2,-1,1,2$, whose squared sum is $4+1+1+4=10$. [given, algebra]

2.1 Dividing this sum by $n-1=3$ gives $s^2=10/3$, hence $s=\sqrt{10/3}$. Substituting $n=4$, $\alpha=5/100$, and the observed sample into [F1] yields the displayed interval with the unique quantile $t_{3,39/40}$ from [F2]; its repeated-sampling coverage is $1-\alpha=95/100$. [F1, F2, step 1.1, algebra] ∎
