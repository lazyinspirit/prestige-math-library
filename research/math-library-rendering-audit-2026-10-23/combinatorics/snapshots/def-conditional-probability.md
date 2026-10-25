---
id: def-conditional-probability
kind: definition
title: "Conditional probability $\\mathbb P(A\\mid B)$ for $\\mathbb P(B)>0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-probability-space-and-event]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 4.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 1.4"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be events in a finite probability space with $\mathbb P(B)>0$. The **conditional probability of $A$ given $B$** is
$$\mathbb P(A\mid B):=\frac{\mathbb P(A\cap B)}{\mathbb P(B)}.$$
No value is assigned to $\mathbb P(A\mid B)$ when $\mathbb P(B)=0$.
