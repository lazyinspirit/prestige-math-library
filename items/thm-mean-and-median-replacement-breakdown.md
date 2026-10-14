---
id: thm-mean-and-median-replacement-breakdown
kind: theorem
title: Replacement breakdown of the sample mean and odd-sample median
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-finite-sample-replacement-breakdown]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "P. B. Stark, Statistics 240 Lecture Notes, Part 9: Robustness and Related Topics, §1.2, PDF pp. 2–3, 11–12"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch9.pdf"
    - title: "Elvezio Ronchetti, Introduction to Robust Statistics, slides 22–23"
      url: "https://orfe.princeton.edu/sites/g/files/toruqf1286/files/documents/ronchetti-lecture1.pdf"
---

## Statement

For any fixed sample $x\in\mathbb R^n$, the sample mean $\bar x=n^{-1}\sum_{i=1}^n x_i$ has finite-sample replacement breakdown fraction $1/n$. If $n=2r+1$ is odd and the conventional sample median is the $(r+1)$-st order statistic, its finite-sample replacement breakdown fraction is $(r+1)/n=\lfloor(n+1)/2\rfloor/n$.

## Facts & Assumptions

**Given:** A sample $x=(x_1,\ldots,x_n)\in\mathbb R^n$, the mean statistic $\bar x$, and, when $n=2r+1$, the sample median $x_{(r+1)}$ after sorting the observations in nondecreasing order.

[F1] [[def-finite-sample-replacement-breakdown]]: breakdown is the smallest replacement count $m$ for which the supremum displacement over changes to at most $m$ coordinates is infinite, divided by $n$.

## Proof

**Proof technique:** direct.

1.1 With no replacements the mean displacement is zero. Replacing coordinate $i$ by $M$ changes the sample mean to $\bar x+(M-x_i)/n$, whose displacement is unbounded as $M\to+\infty$. Thus the smallest breaking count for the mean is one, and [F1] gives $1/n$. [given, F1, algebra]

1.2 Let $n=2r+1$. If at most $r$ coordinates are replaced, at least $r+1$ original observations remain. Writing $x_{\min}=\min_i x_i$ and $x_{\max}=\max_i x_i$, at least $r+1$ resulting observations are at most $x_{\max}$ and at least $r+1$ are at least $x_{\min}$. Therefore the $(r+1)$-st order statistic lies in $[x_{\min},x_{\max}]$, so its displacement from the original median is bounded uniformly over all such replacements. [given, F1, algebra]

1.3 Replace $r+1$ coordinates by the same value $M>x_{\max}$. The $r$ unchanged observations are the first $r$ order statistics and the $r+1$ copies of $M$ occupy positions $r+1$ through $2r+1$. The median is therefore $M$, which is unbounded as $M\to+\infty$. [given, algebra]

2.1 Steps 1.2–1.3 show that the smallest breaking count for the odd-sample median is $r+1$. By [F1] its breakdown fraction is $(r+1)/(2r+1)=\lfloor(n+1)/2\rfloor/n$. [step 1.2, step 1.3, F1, algebra] ∎

