---
id: def-square-integrable-martingale-difference-array-and-variance-clock
kind: definition
title: Square-integrable martingale-difference array and variance clock
status: draft
origin: pipeline
deps: [def-martingale-difference-sequence, def-conditional-expectation-as-an-ae-class, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - {title: "Roch, Notes 19: Martingale CLT, Theorem 19.15 setup, pp. 4–5", url: "https://people.math.wisc.edu/~roch/grad-prob/gradprob-notes19.pdf"}
---

## Definition

Assume AC on a fixed probability space $(\Omega,\mathcal F,P)$. A **rowwise square-integrable martingale-difference array** consists of families $(\mathcal F_{n,k})_{n\ge1,k\ge0}$ and $(Z_{n,k})_{n,k\ge1}$ such that for each $n$ the $\mathcal F_{n,k}$ form an increasing filtration of sub-$\sigma$-algebras of $\mathcal F$, $Z_{n,k}\in L^2$ is $\mathcal F_{n,k}$-measurable, and
$$\mathbb E[Z_{n,k}\mid\mathcal F_{n,k-1}]=0\quad\text{a.s.}$$
Define
$$M_{n,m}=\sum_{k=1}^mZ_{n,k},\qquad v_{n,k}=\mathbb E[Z_{n,k}^2\mid\mathcal F_{n,k-1}],\qquad \Gamma_{n,m}=\sum_{k=1}^m v_{n,k}.$$
Each $v_{n,k}$ is nonnegative, integrable, and $\mathcal F_{n,k-1}$-measurable; hence $\Gamma_{n,m}$ is an increasing predictable **variance clock**, while $M_{n,m}$ is a rowwise $L^2$ martingale. A finite triangular row is included by putting $Z_{n,k}=0$ and holding the filtration fixed after its last column. This preserves both limiting sums. AC is used only through conditional-moment existence and countable representative selection.
