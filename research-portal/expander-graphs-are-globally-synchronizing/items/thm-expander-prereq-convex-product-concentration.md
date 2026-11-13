---
id: thm-expander-prereq-convex-product-concentration
kind: theorem
title: Convex Lipschitz concentration with its coordinate metric
domain: mathematics
status: draft
origin: pipeline
deps:
  - def-expander-prereq-symmetric-coordinate-metrics
  - math:def-independent-random-elements
  - math:def-probability-measure
  - math:def-convex-subset-of-euclidean-space
  - math:def-random-element-and-real-random-variable
dependency_roles:
  def-expander-prereq-symmetric-coordinate-metrics: mathematical-premise
  math:def-independent-random-elements: mathematical-premise
  math:def-probability-measure: mathematical-premise
  math:def-convex-subset-of-euclidean-space: mathematical-premise
  math:def-random-element-and-real-random-variable: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Concentration Inequalities: A Nonasymptotic Theory of Independence"
      url: https://math.hse.ru/data/2016/11/24/1113029206/Concentration%20inequalities.pdf
      locator: Section 7.5, Theorem 7.12, printed p. 222, PDF p. 231
      statement: For independent random variables $X_1,\ldots,X_d$ taking values in
        $[0,1]$ and a quasi-convex function $g:[0,1]^d\to\mathbb R$ satisfying
        $|g(x)-g(y)|\le\|x-y\|_2$, each of the probabilities $\mathbb
        P(g(X)>m_g+s)$ and $\mathbb P(g(X)<m_g-s)$ is at most $2e^{-s^2/4}$ for
        $s>0$, where $m_g$ is a median of $g(X)$.
      hypotheses: Independent $[0,1]$-valued coordinates; quasi-convexity; Lipschitz
        constant at most one for Euclidean distance; positive deviation; a
        median.
      reading_limits: The theorem statement and preceding Euclidean metric and
        quasi-convexity conventions were read in the linked PDF. Its proof was
        not independently reconstructed or verified; no whole-book reading is
        claimed.
dependency_level: 1
---

## Statement

Let $d\ge1$, and let $X=(X_1,\ldots,X_d)$ have independent random coordinates taking values in $[0,1]$ on a probability space with probability $\mathbb P$. Equip $[0,1]^d$ with the Euclidean distance $\|x-y\|_2=(\sum_{i=1}^d(x_i-y_i)^2)^{1/2}$. Suppose $f:[0,1]^d\to\mathbb R$ is quasi-convex and $L$-Lipschitz for some $L>0$. Here quasi-convex means that every sublevel set $\{x:f(x)\le a\}$ is convex, and $L$-Lipschitz means $|f(x)-f(y)|\le L\|x-y\|_2$ for all $x,y$ in the cube. Let $m$ be a median of $f(X)$, meaning $\mathbb P(f(X)\le m)\ge1/2$ and $\mathbb P(f(X)\ge m)\ge1/2$. Then, for every $t>0$, $\mathbb P(f(X)>m+t)\le2e^{-t^2/(4L^2)}$ and $\mathbb P(f(X)<m-t)\le2e^{-t^2/(4L^2)}$. Every convex function is quasi-convex, so the conclusion applies in particular to convex $f$.

## Statement references

[[def-expander-prereq-symmetric-coordinate-metrics|Coordinate metric, convexity and Lipschitz constants]]

[[math:def-independent-random-elements|Independent random elements]]

[[math:def-probability-measure|Probability measures and probability spaces]]

[[math:def-convex-subset-of-euclidean-space|Convex subsets of Euclidean space]]

[[math:def-random-element-and-real-random-variable|Random elements and real random variables]]

## External input

Boucheron, Lugosi and Massart, Theorem 7.12, gives the two stated median tail bounds with exponent $-s^2/4$ for a quasi-convex Euclidean $1$-Lipschitz function of independent $[0,1]$-valued coordinates. This imported theorem is used as a premise; its proof is not reconstructed here.

## Facts & Assumptions

[F1] The external input above supplies both tails for positive deviations $s$ and Euclidean $1$-Lipschitz quasi-convex functions.

[F2] The coordinate metric and convex-function and Lipschitz conventions are as in [[def-expander-prereq-symmetric-coordinate-metrics]]; convex subsets of Euclidean space are as in [[math:def-convex-subset-of-euclidean-space]].

## Proof

**Given:** The hypotheses and a median $m$ in the statement.

**Goal:** Establish both scaled tail bounds and the convex special case.

1.1 Put $g=f/L$ and $m_g=m/L$. Since $L>0$, the sublevel sets of $g$ are sublevel sets of $f$, and the Lipschitz inequality for $f$ shows that $g$ is Euclidean $1$-Lipschitz. Dividing the two median inequalities by the positive constant shows that $m_g$ is a median of $g(X)$. [given, F2]

2.1 Apply [F1] to $g$ with $s=t/L>0$. The events $g(X)>m_g+t/L$ and $g(X)<m_g-t/L$ are respectively the two events in the conclusion, giving the displayed bounds. If $f$ is convex, its defining inequality shows that each sublevel set is convex; hence it is quasi-convex and the same bounds apply. [F1, F2, step 1.1] ∎
