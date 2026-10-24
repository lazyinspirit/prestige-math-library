---
id: lem-hard-margin-svm-has-unique-minimizer
kind: lemma
title: "A strictly separable finite sample has a unique hard-margin vector"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-linear-separable-margin-and-hard-margin-svm
  - thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; attainment follows from a nonempty closed bounded sublevel set and finite-dimensional compactness."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Daniel Soudry et al., The Implicit Bias of Gradient Descent on Separable Data, equation (4)"
      url: "https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf"
    - title: "Matus Telgarsky, Deep Learning Theory lecture notes, §10.1"
      url: "https://mjt.cs.illinois.edu/dlt/"
---

## Statement

For a finite strictly linearly separable sample in $\mathbb R^d$, the hard-margin feasible set is nonempty and the problem of minimizing $\frac12\|w\|_2^2$ over that set attains a unique minimizer.

## Statement references

[[def-linear-separable-margin-and-hard-margin-svm|Strict separability and hard-margin problem]]

[Daniel Soudry et al., *The Implicit Bias of Gradient Descent on Separable Data*, equation (4)](https://jmlr.csail.mit.edu/papers/volume19/18-188/18-188.pdf)

[Matus Telgarsky, *Deep Learning Theory* lecture notes, §10.1](https://mjt.cs.illinois.edu/dlt/)

## Facts & Assumptions

**Given:** A finite sample as in [[def-linear-separable-margin-and-hard-margin-svm]], with a vector that strictly separates all of its examples.

[F1] [[def-linear-separable-margin-and-hard-margin-svm]]: the feasible constraints are the finitely many closed half-spaces $m_i(w)\ge1$, where each $m_i$ is a continuous linear functional.

[F2] [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]: a nonempty closed and bounded subset of $\mathbb R^d$ is compact, and a continuous real-valued function on it attains its minimum.

## Proof

**Proof technique:** direct existence by compactness and uniqueness by strict convexity.

1.1 Strict separability gives $u$ with $m_i(u)>0$ for every $i$. Since the sample is finite, $a:=\min_i m_i(u)>0$. The scaled vector $u/a$ satisfies $m_i(u/a)=m_i(u)/a\ge1$, so the feasible set in [F1] is nonempty. [given, F1, algebra]

2.1 Put $R=\|u/a\|_2$ and $K=\mathcal F\cap\{w:\|w\|_2\le R\}$. The set $K$ is nonempty by step 1.1 and is closed and bounded by [F1], so [F2] makes it compact and gives a minimizer $w_*$ of $\frac12\|w\|_2^2$ on $K$. Every feasible vector outside the radius-$R$ ball has norm greater than $R$, while $u/a\in K$ has norm $R$; therefore no such vector improves on $w_*$. Hence $w_*$ is a global minimizer on $\mathcal F$. [F1, F2, step 1.1, construct]

3.1 If two distinct feasible minimizers $w,z$ existed, their midpoint would remain feasible because each $m_i$ is linear. But $\left\|\frac{w+z}{2}\right\|_2^2=\frac12\|w\|_2^2+\frac12\|z\|_2^2-\frac14\|w-z\|_2^2$ is strictly smaller than their common minimum value, a contradiction. Therefore the minimizer is unique. [F1, step 2.1, algebra] ∎
