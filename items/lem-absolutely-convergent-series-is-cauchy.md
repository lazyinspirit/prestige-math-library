---
id: lem-absolutely-convergent-series-is-cauchy
kind: lemma
title: "An absolutely convergent series has Cauchy partial sums"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-series-and-absolute-convergence-in-a-normed-space, def-cauchy-in-metric,
       def-series]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Statement

Let $V$ be a normed space and let $\sum_{n=0}^\infty x_n$ be an absolutely
convergent series in $V$. Then the partial sums form a Cauchy sequence in $V$.

## Facts & Assumptions

**Given:** A normed space $V$, a sequence $(x_n)$ in $V$, and its partial sums $s_m:=\sum_{n<m}x_n$.

[L1] Absolute convergence means the scalar series $\sum_{n=0}^\infty\|x_n\|$ converges ([[def-series-and-absolute-convergence-in-a-normed-space]]).

[L2] A convergent scalar series has Cauchy partial sums ([[def-series]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], for every $\varepsilon>0$ there is $N$ such that $\sum_{\ell\le n<m}\|x_n\|<\varepsilon$ whenever $m>\ell\ge N$. [L1, L2]

1.2 For such $m>\ell\ge N$, the tail of the vector partial sums satisfies $s_m-s_\ell=\sum_{\ell\le n<m}x_n$. [given]

2.1 Applying the triangle inequality to the finite sum in step 1.2 gives $\|s_m-s_\ell\|\le \sum_{\ell\le n<m}\|x_n\|<\varepsilon$. [step 1.1, step 1.2, algebra]

3.1 Since this holds for every $\varepsilon>0$, the partial sums $(s_m)$ are Cauchy in the norm metric, which is exactly the claim. [step 2.1, given] ∎
