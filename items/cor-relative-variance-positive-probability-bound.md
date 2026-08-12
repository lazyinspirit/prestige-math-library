---
id: cor-relative-variance-positive-probability-bound
kind: corollary
title: "$\\mathbb P(X=0)\\le\\operatorname{Var}(X)/\\mathbb E[X]^2$ whenever $\\mathbb E[X]\\ne0$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-chebyshev-inequality]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Y. Zhao, MIT 18.218 Probabilistic Method in Combinatorics, Section 3.3"
      url: "https://yufeizhao.com/pm/sp19/pmnotes.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Section 6.2.2"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

If $X$ is a finite real random variable with $\mathbb E[X]\ne0$, then
$$\mathbb P(X=0)\le\frac{\operatorname{Var}(X)}{\mathbb E[X]^2}.$$
Equivalently,
$$\mathbb P(X\ne0)\ge1-\frac{\operatorname{Var}(X)}{\mathbb E[X]^2}.$$

## Facts & Assumptions

**Given:** A finite real random variable $X$ with $\mathbb E[X]\ne0$.

[L1] Chebyshev gives $\mathbb P(|X-\mathbb E[X]|\ge t)\le\operatorname{Var}(X)/t^2$ for $t>0$ ([[thm-chebyshev-inequality]]).

## Proof

**Proof technique:** direct.

1.1 If $X=0$, then $|X-\mathbb E[X]|=|\mathbb E[X]|$, and the latter is positive. Thus $\{X=0\}\subseteq\{|X-\mathbb E[X]|\ge|\mathbb E[X]|\}$. [given]

2.1 Apply [L1] at $t=|\mathbb E[X]|$ and use $t^2=\mathbb E[X]^2$ to obtain the first inequality. [step 1.1, L1, algebra]

3.1 Taking complements gives the equivalent lower bound. The assumption $\mathbb E[X]\ne0$ is exactly what makes the threshold positive and the denominator nonzero. [step 2.1, algebra] ∎
