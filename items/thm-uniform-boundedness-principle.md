---
id: thm-uniform-boundedness-principle
kind: theorem
title: "Uniform boundedness principle"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bounded-linear-operator, def-operator-norm, thm-baire-category-for-complete-metric-spaces]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Buhler--Salamon, Functional Analysis, Theorem 2.1"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume DC. Let $X$ be a Banach space, $Y$ a normed space, and let $\mathcal F$ be a family of bounded linear operators $X\to Y$ ([[def-bounded-linear-operator]]). If $\sup_{T\in\mathcal F}\|Tx\|<\infty$ for every $x\in X$, then $\sup_{T\in\mathcal F}\|T\|<\infty$, where the norm is [[def-operator-norm]].

## Facts & Assumptions

**Given:** DC, $X,Y,\mathcal F$ as in the statement, and pointwise boundedness.

## Proof

**Proof technique:** direct.

1.1 Put $E_n=\{x:\sup_{T\in\mathcal F}\|Tx\|\le n\}$. Each $E_n$ is closed (an intersection of inverse images of closed balls), and pointwise boundedness gives $X=\bigcup_{n\ge1}E_n$. [given]

2.1 By [[thm-baire-category-for-complete-metric-spaces]], some $E_N$ contains a ball $B(x_0,r)$. [step 1.1]

3.1 For $\|h\|<r$, both $x_0$ and $x_0+h$ lie in that ball, so $\|Th\|\le\|T(x_0+h)\|+\|Tx_0\|\le2N$ for every $T$. [step 2.1]

4.1 Rescaling a nonzero $x$ to $h=rx/(2\|x\|)$ yields $\|Tx\|\le4N\|x\|/r$; the same is clear for $x=0$. Thus $\|T\|\le4N/r$ for every $T$. [step 3.1, algebra] ∎
