---
id: op-fixed-shift-chowla-conjecture
kind: open-problem
title: "Fixed-shift Chowla cancellation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-liouville-function
  - def-fixed-shift-liouville-correlation-average
justified_by: []
aliases: []
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Biao Wang, Dynamical generalizations of Chowla's conjecture on short averages, §1"
      url: "https://arxiv.org/pdf/2609.14492v1"
    - title: "OpenAI, Ordinary two-point correlations of multiplicative functions, Theorem 1.1"
      url: "https://mathcommunity.github.io/oai-math-revised/papers/Ordinary-two-point-correlations-of-multiplicative-functions-September-24-2026/final.pdf"
    - title: "OpenAI Math release page, Ordinary two-point correlations of multiplicative functions"
      url: "https://mathcommunity.github.io/oai-math-revised/papers/Ordinary-two-point-correlations-of-multiplicative-functions-September-24-2026/"
    - title: "Terence Tao, Correlations of multiplicative functions, slides 9–13"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2024/03/correlations-jan-5.pdf"
---

## Open problem

Let $\lambda(n)=(-1)^{\Omega(n)}$ for $n\ge1$, where $\Omega(n)$ counts prime
factors with multiplicity and $\Omega(1)=0$. For every integer $k\ge2$ and
every fixed tuple of pairwise distinct integer
shifts $h_1,\ldots,h_k$, determine whether
$$
\lim_{X\to\infty}\frac1X\sum_{\substack{n\in\mathbb Z_{>0}\\ n_0(\mathbf h)\le n\le X}}\prod_{j=1}^k\lambda(n+h_j)=0,\qquad n_0(\mathbf h):=\max\bigl(1,1-\min_j h_j\bigr).
$$

## Status

The general assertion quantified over every fixed $k\ge2$ remains an open
problem. Wang's September 13, 2026 manuscript says that $k\ge2$ is open at
that date; its Theorems 1.1–1.3 concern averages over a growing shift window,
including dynamical and prime-weighted variants, and do not prove fixed-shift
Chowla cancellation. That historical statement is not a current assessment of
the subsequent two-point manuscript.

The September 24, 2026 OpenAI manuscript claims in Theorem 1.1 that an absolute
$c>0$ exists such that, for each fixed $a_1,a_2\ge1$ and $b_1,b_2\ge0$ with
$a_1b_2-a_2b_1\ne0$, the ordinary Liouville correlation sum up to every real
$X\ge3$ is $O_{a_1,a_2,b_1,b_2}(X/(\log X)^c)$. It includes every fixed
pair of distinct integer shifts after a fixed translation and removal of
finitely many initial terms. Its Theorem 1.2 also claims ordinary two-point
cancellation for bounded multiplicative functions when one is uniformly
nonpretentious over the growing twist range $|t|\le X$ for each fixed
Dirichlet character. Neither theorem claims the higher-order fixed-shift
statement for $k\ge3$.

The present source assessment read all 23 pages of Wang and all 87 pages of
the later manuscript, including the quantitative and qualitative graph,
short-sum, normalization, residue-correction and affine-form arguments. No
defect was confirmed in this assessment. This is a source-proof assessment,
not a local reconstruction or independent acceptance of the later theorem.
The pinned Lean final aliases and their actual 1,465-file TwoPoint import
closure were fetched: no explicit `sorry`, `axiom` or `opaque` declaration was
found in those files. That source-token scan is not a kernel compilation,
an axiom report, or a complete audit of the separately imported Mathlib and
prime-number-theorem packages. The release's unreviewed label refers to its
automatically collected notes, and its claim-matching caution says the Lean
statements have not been checked by people against the manuscript; neither
label alone establishes or refutes the mathematical claim.

Accordingly the complete quantified formulation above is preserved, with the
higher-order $k\ge3$ portion unresolved and the $k=2$ portion explicitly
identified as the subject of the later proof claim. No open-problem item or
September manuscript claim is a logical supplier for any theorem here.

## Open problem references

[Wang, §1 and Theorems 1.1–1.3; arXiv v1 uploaded 2026-09-13](https://arxiv.org/pdf/2609.14492v1)

[OpenAI, Theorems 1.1–1.2 and complete proof, PDF pp. 1–87](https://mathcommunity.github.io/oai-math-revised/papers/Ordinary-two-point-correlations-of-multiplicative-functions-September-24-2026/final.pdf)

[OpenAI Math release metadata on the automated notes and Lean statement review](https://mathcommunity.github.io/oai-math-revised/papers/Ordinary-two-point-correlations-of-multiplicative-functions-September-24-2026/)

[Tao, Chowla and logarithmically averaged Chowla, slides 9–13](https://terrytao.wordpress.com/wp-content/uploads/2024/03/correlations-jan-5.pdf)
