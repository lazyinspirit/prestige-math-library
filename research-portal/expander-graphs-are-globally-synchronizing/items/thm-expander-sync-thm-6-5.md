---
id: thm-expander-sync-thm-6-5
title: Convex Lipschitz concentration — Theorem 6.5
kind: theorem
domain: mathematics
status: published
origin: pipeline
deps:
  - thm-expander-prereq-convex-product-concentration
  - def-expander-prereq-symmetric-coordinate-metrics
  - math:def-independent-random-elements
  - math:def-random-element-and-real-random-variable
  - math:def-probability-measure
dependency_roles:
  thm-expander-prereq-convex-product-concentration: mathematical-premise
  def-expander-prereq-symmetric-coordinate-metrics: mathematical-premise
  math:def-independent-random-elements: mathematical-premise
  math:def-random-element-and-real-random-variable: mathematical-premise
  math:def-probability-measure: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF pp. 34–35, Theorem 6.5 and equation (6.4)
      statement: For independent $[0,1]$-valued coordinates and a convex 1-Lipschitz
        function, the upper deviation from a median is at most $2e^{-t^2/4}$ for
        $t>0$.
      hypotheses: Independent coordinates, a convex 1-Lipschitz function, a median and
        a positive deviation; the displayed domain uses $n$ after introducing
        $d$ coordinates.
      reading_limits: The theorem and its surrounding extracted article text were
        inspected. This reference attributes the article claim and does not
        supply its proof.
dependency_level: 2
---

## Statement

Let $d\ge1$ be an integer and $X=(X_1,\ldots,X_d)$ a vector of independent random variables taking values in $[0,1]$ on a probability space with probability $\mathbb P$. Let $f:[0,1]^d\to\mathbb R$ be convex and 1-Lipschitz for Euclidean distance $\|x-y\|_2=(\sum_{i=1}^d(x_i-y_i)^2)^{1/2}$. Thus convexity means $f((1-\lambda)x+\lambda y)\le(1-\lambda)f(x)+\lambda f(y)$ for $x,y$ in the cube and $0\le\lambda\le1$, and 1-Lipschitz means $|f(x)-f(y)|\le\|x-y\|_2$ for such $x,y$.

Let $Mf(X)$ be a median of $f(X)$, meaning that $\mathbb P(f(X)\le Mf(X))\ge1/2$ and $\mathbb P(f(X)\ge Mf(X))\ge1/2$. Then, for every $t>0$, $\mathbb P(f(X)>Mf(X)+t)\le2e^{-t^2/4}$.

## Statement references

[[def-expander-prereq-symmetric-coordinate-metrics|Coordinate metric, convexity and Lipschitz constants]]

[[math:def-independent-random-elements|Independent random elements]]

[[math:def-random-element-and-real-random-variable|Random elements and real random variables]]

[[math:def-probability-measure|Probability measures and probability spaces]]

[[thm-expander-prereq-convex-product-concentration|Convex Lipschitz concentration with its coordinate metric]]

## Facts & Assumptions

[F1] For independent $[0,1]$-valued coordinates, a convex Euclidean $L$-Lipschitz function with $L>0$, a median $m$, and $t>0$, the upper-tail probability is at most $2e^{-t^2/(4L^2)}$ ([[thm-expander-prereq-convex-product-concentration]]).

[F2] Convexity and the Lipschitz condition use the stated Euclidean coordinate metric ([[def-expander-prereq-symmetric-coordinate-metrics]]).

## Proof

**Given:** The independent coordinates, convex 1-Lipschitz function, median $Mf(X)$, and $t>0$ in the statement.

**Goal:** Prove the stated upper-tail bound.

1.1 The hypotheses give a convex function on the coordinate cube with Euclidean Lipschitz bound $L=1$ and independent $[0,1]$-valued coordinates. The number $Mf(X)$ satisfies both median inequalities required by [F1]. [given, F1, F2]

2.1 Apply [F1] with $L=1$, $m=Mf(X)$ and the given $t>0$. The exponent becomes $-t^2/4$, yielding $\mathbb P(f(X)>Mf(X)+t)\le2e^{-t^2/4}$, as claimed. [F1, step 1.1, algebra] ∎

## Source notes

The article attributes this concentration result to Boucheron, Lugosi and Massart, Theorem 7.12. Its displayed function domain uses $n$ after introducing $d$ coordinates; the statement above uses $d$ consistently. The article reference records attribution, while [F1] supplies the argument.
