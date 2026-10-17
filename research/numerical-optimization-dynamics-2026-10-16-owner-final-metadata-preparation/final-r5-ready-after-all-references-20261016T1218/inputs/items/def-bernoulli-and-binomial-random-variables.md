---
id: def-bernoulli-and-binomial-random-variables
kind: definition
title: "Bernoulli random variables and binomial random variables as sums of independent Bernoulli trials"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-real-random-variable-and-distribution, def-independence-of-finite-random-variables, def-finite-sum]
justified_by: []
aliases: []
landmark: false
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
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 5.1"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 3.1.5"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Definition

For $p\in[0,1]$, a **Bernoulli$(p)$ random variable** takes the value $1$ with probability $p$ and $0$ with probability $1-p$.

For $n\in\mathbb N$, a **binomial$(n,p)$ random variable** is a sum $X=\sum_{i<n}X_i$ of $n$ mutually independent Bernoulli$(p)$ variables. When $n=0$, this is the constant zero random variable.
