---
id: thm-posterior-median-minimizes-absolute-risk
kind: theorem
title: Every posterior median minimizes absolute posterior risk
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-posterior-risk-and-bayes-action
  - def-posterior-median
  - lem-lower-posterior-median-is-measurable
  - thm-measurability-of-integration-against-a-kernel
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ryan Martin, Lecture Notes on Advanced Statistical Theory, §5.3.1, PDF pp. 104–105"
      url: "https://homepages.math.uic.edu/~rgmartin/Teaching/Stat511/Notes/511notes.pdf"
    - title: "Alicia A. Johnson, Miles Q. Ott, and Mine Dogucu, Bayes Rules!, Chapter 8 §8.1"
      url: "https://www.bayesrulesbook.com/chapter-8.html"
---

## Statement

Let $\Pi$ be a posterior probability kernel on $\mathbb R$ and let
$$D_1=\left\{y:\int_{\mathbb R}|\theta|\,\Pi_y(d\theta)<\infty\right\}.$$
Then $D_1$ is measurable. For every $y\in D_1$, every posterior median minimizes the finite absolute posterior risk $a\mapsto\int|\theta-a|\,\Pi_y(d\theta)$. The measurable lower-median rule from [[lem-lower-posterior-median-is-measurable]] is therefore an attained Bayes action rule on $D_1$.

## Facts & Assumptions

**Given:** The posterior probability kernel, the finite first-moment set $D_1$, absolute loss, and the median convention in the Statement.

[F1] A posterior median satisfies the two half-mass inequalities. [[def-posterior-median]]

[F2] Posterior risk is the finite integral of the stated loss; a Bayes action rule must measurably attain a finite minimum. [[def-posterior-risk-and-bayes-action]]

[F3] The lower-median selection is measurable and is a median on every fiber. [[lem-lower-posterior-median-is-measurable]]

[F4] Kernel integration makes $y\mapsto\int|\theta|\Pi_y(d\theta)$ measurable. [[thm-measurability-of-integration-against-a-kernel]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 The function $(y,\theta)\mapsto|\theta|$ is product-measurable, so [F4] makes its posterior integral measurable and hence $D_1$ a measurable data domain. For $y\in D_1$ and every finite $a$, $|\theta-a|\le|\theta|+|a|$ makes the posterior risk finite. [given, F2, F4, algebra]

1.2 Fix $y\in D_1$ and a median $m$. For any $a>m$, put $d=a-m$ and partition $\mathbb R$ into $A=(-\infty,m]$, $B=(m,a)$, and $C=[a,\infty)$. On these three sets respectively, $|\theta-a|-|\theta-m|$ equals $d$, $a+m-2\theta$, and $-d$. On $B$, $a+m-2\theta\ge-d$. Therefore $\rho_y(a)-\rho_y(m)\ge d\{\Pi_y(A)-\Pi_y(B)-\Pi_y(C)\}=d\{2\Pi_y(A)-1\}\ge0$, where the last inequality is the first median condition [F1]. [given, F1, F2, algebra]

2.1 If $a<m$, put $d=m-a$ and partition into $A=(-\infty,a]$, $B=(a,m)$, and $C=[m,\infty)$. On these sets the loss difference is respectively $-d$, $2\theta-a-m$, and $d$; on $B$, $2\theta-a-m\ge-d$. Hence $\rho_y(a)-\rho_y(m)\ge d\{-\Pi_y(A)-\Pi_y(B)+\Pi_y(C)\}=d\{2\Pi_y(C)-1\}\ge0$ by the second median condition [F1]. Equality holds when $a=m$. Thus every median is a pointwise minimizer; [F3] supplies a measurable median rule, whose finite risk on $D_1$ and attained minimum satisfy [F2]. [given, F1, F2, F3, step 1.2, algebra] ∎
