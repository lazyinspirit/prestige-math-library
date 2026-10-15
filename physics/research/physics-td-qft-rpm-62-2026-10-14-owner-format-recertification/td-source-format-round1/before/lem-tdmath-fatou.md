---
id: lem-tdmath-fatou
kind: lemma
title: "Fatou's lemma"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: ["def-tdmath-measure-integral","thm-tdmath-monotone-convergence"]
justified_by: []
dependency_roles: {"def-tdmath-measure-integral":"mathematical-premise","thm-tdmath-monotone-convergence":"mathematical-premise"}
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Terence Tao, 245A Notes 3: Integration on Abstract Measure Spaces and the Convergence Theorems, full author-hosted lecture text"
      url: "https://terrytao.wordpress.com/2010/09/25/245a-notes-3-integration-on-abstract-measure-spaces-and-the-convergence-theorems/"
      locator: "Complete HTML lecture text read; abstract measure spaces, integration, Fatou, monotone convergence, dominated convergence, and the L1 convergence argument."
---

## Statement

Let $(X,\Sigma,\mu)$ be a measure space and let $f_n:X\to[0,\infty]$ be measurable. Then $\int\liminf_{n\to\infty} f_n\,d\mu\le\liminf_{n\to\infty}\int f_n\,d\mu$.

## Facts & Assumptions

**Given:** As stated in the item.

[F1] [[def-tdmath-measure-integral]]: nonnegative integrals are monotone and the integral of a nonnegative measurable function is defined by simple minorants.

[F2] [[thm-tdmath-monotone-convergence]]: integrals commute with increasing pointwise limits, including infinite values.

[A1] The sequence $f_n$ is nonnegative and measurable on the stated measure space.

## Proof

**Given:** A measure space and measurable $f_n\ge0$.

1.1 Set $h_k:=\inf_{n\ge k}f_n$. For each real $a$, $\{h_k<a\}=\bigcup_{n\ge k}\{f_n<a\}$, so $h_k$ is measurable by the sigma-algebra closure in [F1]. The sequence $h_k$ is increasing and its pointwise limit is $\liminf_n f_n$, which is measurable since $\{\lim_kh_k>a\}=\bigcup_k\{h_k>a\}$. [F1, A1]

1.2 For every $n\ge k$, monotonicity gives $\int h_k\le\int f_n$, so $\int h_k\le\inf_{n\ge k}\int f_n$. Taking $k\to\infty$ and applying monotone convergence to $h_k$ yields $\int\liminf f_n=\lim_k\int h_k\le\lim_k\inf_{n\ge k}\int f_n=\liminf_n\int f_n$. [F1, F2, step 1.1] ∎
