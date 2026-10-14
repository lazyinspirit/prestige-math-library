---
id: ex-median-influence-and-replacement-breakdown
kind: example
title: A smooth median has bounded influence and about one-half breakdown
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 12
deps:
  - def-finite-sample-replacement-breakdown
  - def-gross-error-sensitivity
  - def-lower-median-functional
  - def-statistical-functional-and-influence-function
  - thm-mean-and-median-replacement-breakdown
  - thm-median-influence-function
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "P. B. Stark, Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics, §§1.2–1.3, PDF pp. 2–3, 13–18"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf"
    - title: "Elvezio Ronchetti, Introduction to Robust Statistics, slides 15–17 and 22"
      url: "https://orfe.princeton.edu/sites/g/files/toruqf1286/files/documents/ronchetti-lecture1.pdf"
---

## Example

Suppose $F$ has a unique median $m$, satisfies $F(m)=1/2$, and has a continuous density with $f(m)>0$. The median's gross-error sensitivity is $1/(2f(m))<\infty$. For odd sample sizes $n=2r+1$, the sample median's replacement breakdown fraction is $(r+1)/(2r+1)$, which tends to $1/2$ as $n$ increases through odd integers.

## Facts & Assumptions

**Given:** A probability law $F$ and median $m$ satisfying the density and uniqueness assumptions in the Statement of [[thm-median-influence-function]], and an odd sample size $n=2r+1$.

[F1] [[thm-median-influence-function]]: the median has gross-error sensitivity $1/(2f(m))$ under these assumptions.

[F2] [[thm-mean-and-median-replacement-breakdown]]: the odd-sample median's replacement breakdown fraction is $(r+1)/(2r+1)$ for every fixed sample.

## Verification

1.1 By [F1], the influence values have absolute value at most $1/(2f(m))$, and their supremum is exactly that value, which is finite because $f(m)>0$. [F1, algebra]

1.2 By [F2], the finite-sample replacement breakdown fraction is $(r+1)/(2r+1)=1/2+1/[2(2r+1)]$. [F2, algebra]

2.1 Since $1/[2(2r+1)]\to0$ as $r\to\infty$, the odd-sample median breakdown fractions tend to $1/2$. [step 1.2, algebra]

3.1 The bounded pointwise sensitivity and the separate replacement count follow from different definitions and theorems; here the median has both properties under the stated density hypothesis. [step 1.1, step 2.1] ∎

