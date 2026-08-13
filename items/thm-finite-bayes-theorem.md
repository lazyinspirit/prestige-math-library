---
id: thm-finite-bayes-theorem
kind: theorem
title: "Bayes' theorem over a finite partition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-conditional-probability-multiplication-and-chain-rules, thm-finite-law-of-total-probability]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Bayes' Formula"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 1.4.3"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

Let $B_0,\ldots,B_{n-1}$ be a finite partition with $\mathbb P(B_i)>0$ for every $i<n$. If $\mathbb P(A)>0$, then for every $j<n$,
$$\mathbb P(B_j\mid A)=\frac{\mathbb P(A\mid B_j)\mathbb P(B_j)}{\sum_{i<n}\mathbb P(A\mid B_i)\mathbb P(B_i)}.$$

## Facts & Assumptions

**Given:** A finite partition, an event $A$ of positive probability, and an index $j<n$ as in the Statement.

[L1] The multiplication rule gives $\mathbb P(A\cap B)=\mathbb P(A\mid B)\mathbb P(B)$ whenever $\mathbb P(B)>0$ ([[thm-conditional-probability-multiplication-and-chain-rules]]).

[L2] The law of total probability gives $\mathbb P(A)=\sum_i\mathbb P(A\mid B_i)\mathbb P(B_i)$ ([[thm-finite-law-of-total-probability]]).

## Proof

**Proof technique:** direct.

1.1 By conditional probability and symmetry of intersection, $\mathbb P(B_j\mid A)=\mathbb P(A\cap B_j)/\mathbb P(A)$. [L1]

2.1 The numerator in step 1.1 is $\mathbb P(A\mid B_j)\mathbb P(B_j)$, and [L2] is the denominator. [L1, L2]

3.1 Substitution yields the formula; its denominator is positive because it equals $\mathbb P(A)>0$. [step 1.1, step 2.1, algebra] ∎
