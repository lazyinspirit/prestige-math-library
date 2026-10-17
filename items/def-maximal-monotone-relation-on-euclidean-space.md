---
id: def-maximal-monotone-relation-on-euclidean-space
kind: definition
title: "Monotone and maximal-monotone relations on Euclidean space"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
axiom_base: "No additional axiom; finite-dimensional real definitions and exact algebra only."
deps: [def-euclidean-inner-product]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jonathan Eckstein and Dimitri P. Bertsekas, On the Douglas–Rachford splitting method and the proximal point algorithm for maximal monotone operators, §§2–4"
      url: "https://web.mit.edu/dimitrib/www/Eckstein_Bertsekas_D-R.pdf"
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §4.4"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Definition

Fix $n\in\mathbb N$ and the Euclidean space $E=\mathbb R^n$ with inner
product and norm from [[def-euclidean-inner-product]]. A **relation** $A$ on
$E$ is a subset of $E\times E$; write $a\in A(x)$ exactly when
$(x,a)\in A$. Its graph is this subset. The relation is **monotone** if
$$\langle x-x',a-a'\rangle\ge0\quad\text{for all }(x,a),(x',a')\in A.$$
It is **maximal monotone** if it is monotone and no strictly larger subset of
$E\times E$ is monotone. This definition is finite-dimensional and makes no
claim about infinite-dimensional spaces.

## Facts & Assumptions

**Given:** $n\in\mathbb N$ and $E=\mathbb R^n$.

[A1] The ambient space is $E=\mathbb R^n$ and $A\subseteq E\times E$.


[F1] [[def-euclidean-inner-product]]: $\langle x,y\rangle=\sum_{i<n}x_i y_i$ is a real bilinear inner product on $E$.

## Proof


1.1 A relation is a graph of ordered pairs $(x,a)$ with both coordinates in $E$; the notation $a\in A(x)$ is the same membership statement. The displayed inequality therefore quantifies over two graph points and is well-defined by [F1]. [A1, given, F1, given]

2.1 Maximality is inclusion-maximality among monotone graphs: it rules out a monotone proper extension and does not mean that the graph is a largest monotone subset. These are the graph-level conventions used below. [A1, given, F1, given] ∎
