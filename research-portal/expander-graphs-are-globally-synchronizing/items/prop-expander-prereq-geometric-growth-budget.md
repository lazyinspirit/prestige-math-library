---
id: prop-expander-prereq-geometric-growth-budget
kind: proposition
title: Geometric growth, truncation and total decrement budgets
domain: mathematics
status: published
origin: pipeline
deps:
  - math:thm-geometric-series
  - math:thm-natural-logarithm-laws
  - math:lem-integer-part
  - math:thm-induction-principle
  - math:lem-power-laws
  - math:thm-monotone-convergence
  - math:def-sequence
  - math:def-integer-power
  - math:def-finite-sum
  - math:def-series
dependency_roles:
  math:thm-geometric-series: mathematical-premise
  math:thm-natural-logarithm-laws: mathematical-premise
  math:lem-integer-part: mathematical-premise
  math:thm-induction-principle: mathematical-premise
  math:lem-power-laws: mathematical-premise
  math:thm-monotone-convergence: mathematical-premise
  math:def-sequence: mathematical-premise
  math:def-integer-power: mathematical-premise
  math:def-finite-sum: mathematical-premise
  math:def-series: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 0
---

## Statement

Let $q>1$ and $b>0$. For every integer $k\ge 0$, $\sum_{j=k}^{\infty}bq^{-j}=bq^{-k}q/(q-1)$.

Let $M>0$ and let $(a_j)_{j\ge 0}$ be a positive real sequence satisfying $a_{j+1}\ge\min\{qa_j,M\}$ for every $j\ge0$. Reaching the cap means having $a_j\ge M$; the sequence may overshoot it. For every $j$, $a_j\ge\min\{q^ja_0,M\}$, and before the first cap crossing $a_j\ge q^ja_0$. If $0<a_0<M$, the cap is reached in at most $\lceil\log(M/a_0)/\log q\rceil$ updates, where $\lceil x\rceil$ is the least integer at least $x$. If $a_0\ge M$, it is already reached.

A geometric stage beginning at an index $k$ is a consecutive finite or infinite collection of indices $j\ge k$ for which $a_j\ge a_kq^{j-k}$. If nonnegative angle decrements $d_j$ on such a stage satisfy $d_j\le b/a_j$, their total is at most $bq/(a_k(q-1))$; for an infinite stage the total denotes the convergent series of decrements.

## Statement references

[[math:thm-geometric-series]]

[[math:thm-natural-logarithm-laws]]

[[math:lem-integer-part]]

[[math:thm-induction-principle]]

[[math:lem-power-laws]]

[[math:thm-monotone-convergence]]

[[math:def-sequence]]

[[math:def-integer-power]]

[[math:def-finite-sum]]

[[math:def-series]]

## Facts & Assumptions

[F1] For $|r|<1$, the geometric series has sum $\sum_{h=0}^{\infty}r^h=1/(1-r)$ ([[math:thm-geometric-series]]).

[F2] The logarithm is strictly increasing on the positive reals, $\log 1=0$, and $\log(xy)=\log x+\log y$ for positive $x,y$ ([[math:thm-natural-logarithm-laws]]).

[F3] Every real $x$ has an integer part $m$ with $m\le x<m+1$; consequently the least integer at least $x$ exists ([[math:lem-integer-part]]).

[F4] A property of natural numbers holding at zero and preserved by the successor step holds for every natural number ([[math:thm-induction-principle]]).

[F5] Integer powers of a nonzero real obey $q^{m+n}=q^mq^n$ and $q^{-m}=1/q^m$; in particular $q^{j+1}=q^jq$ ([[math:lem-power-laws]]).

[F6] Every nondecreasing real sequence bounded above converges to its supremum ([[math:thm-monotone-convergence]]).

## Proof

**Given:** The positive numbers $q-1$, $b$, $M$ and the sequence $(a_j)$ satisfy the stated hypotheses.

**Goal:** Establish the tail identity, growth and stopping bounds, and the decrement budget.

1.1 Set $r=1/q$, so $0<r<1$. By the power laws, $q^{-(k+h)}=q^{-k}r^h$. Factoring $bq^{-k}$ from the partial sums and applying the geometric-series formula gives $\sum_{j=k}^{\infty}bq^{-j}=bq^{-k}/(1-1/q)=bq^{-k}q/(q-1)$. [given, F1, F5, algebra]

1.2 Induct on $j$ to show $a_j\ge\min\{q^ja_0,M\}$. At $j=0$ this is immediate. If it holds at $j$, then $qa_j\ge\min\{q^{j+1}a_0,qM\}$; since $qM>M$, the recurrence yields $a_{j+1}\ge\min\{q^{j+1}a_0,M\}$. Thus the claim holds for every $j$. If $a_j<M$, the minimum cannot equal $M$, so $a_j\ge q^ja_0$. [given, F4, F5, algebra]

2.1 Suppose $a_0<M$ and set $x=\log(M/a_0)/\log q$ and $N=\lceil x\rceil$. Since $M/a_0>1$ and $q>1$, strict logarithmic monotonicity gives $x>0$; the integer-part property gives a finite positive integer $N\ge x$. Repeated use of the logarithm product law gives $\log(q^N)=N\log q\ge\log(M/a_0)$, so strict monotonicity gives $q^Na_0\ge M$. Step 1.2 then gives $a_N\ge M$. If $a_0\ge M$, the cap is reached at index zero. [given, F2, F3, F4, F5, step 1.2, algebra]

3.1 On a geometric stage beginning at $k$, positivity and the stage bound give $0\le d_{k+h}\le(b/a_k)q^{-h}$ for each included index. Every finite partial total is therefore bounded above by the corresponding finite geometric sum, hence by $bq/(a_k(q-1))$ from step 1.1 with $k=0$. For an infinite stage these partial totals are nondecreasing and bounded, so they converge by F6, and their limit has the same upper bound. This proves all the stated bounds. [given, F5, F6, step 1.1, algebra] ∎
