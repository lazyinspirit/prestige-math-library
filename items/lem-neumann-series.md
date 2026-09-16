---
id: lem-neumann-series
kind: lemma
title: Neumann series
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-unital-banach-algebra, def-invertible-element-and-general-linear-group-of-a-banach-algebra, thm-banach-series-criterion]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — Corollary 1.51 and §5.1.1, printed pp. 34 and 209–214"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Chapter 2 §2.1, printed pp. 19–24"
      url: "https://arxiv.org/pdf/1211.3404"
---

## Statement

Let $A$ be a unital complex Banach algebra, let $a \in A$ with $\|a\| < 1$, and
for $N \in \mathbb N$ write
$S_N := \sum_{n=0}^{N} a^n$, a finite sum with $a^0 := 1$
([[def-unital-banach-algebra]]). Then

1. the series $\sum_{n \ge 0} a^n$ converges in $A$, and its sum
   $S := \lim_{N \to \infty} S_N$ satisfies $(1-a)S = S(1-a) = 1$; in
   particular $1 - a$ is invertible with $(1-a)^{-1} = S$
   ([[def-invertible-element-and-general-linear-group-of-a-banach-algebra]]);
2. for every $N \in \mathbb N$ the tail estimate
   $$\left\|(1-a)^{-1} - S_N\right\| \; \le \; \frac{\|a\|^{N+1}}{1 - \|a\|}$$
   holds. The hypothesis $\|a\| < 1$ is not symmetric: it is $\|1 - a\|$ that is
   estimated, and $1 - a$ is invertible whenever $a$ lies in the open unit ball.

## Facts & Assumptions

**Given:** A unital complex Banach algebra $A$, an element $a \in A$ with $\|a\| < 1$, the partial sums $S_N = \sum_{n=0}^{N} a^n$, and the number $q := \|a\| \in [0,1)$.

[L1] $A$ is complete under its norm, $\|1\| = 1$, and $\|xy\| \le \|x\|\,\|y\|$ for all $x,y \in A$; multiplication is associative and bilinear ([[def-unital-banach-algebra]]).

[L2] An element $c \in A$ is invertible exactly when there is $b \in A$ with $cb = bc = 1$, and that $b$ is then unique, written $c^{-1}$ ([[def-invertible-element-and-general-linear-group-of-a-banach-algebra]]).

[L3] A normed space $V$ is a Banach space if and only if every absolutely convergent series in $V$ converges ([[thm-banach-series-criterion]]).

## Proof

**Proof technique:** direct.

1.1 For every $n \in \mathbb N$ one has $\|a^n\| \le \|a\|^n = q^n$: this holds at $n = 0$ because $\|a^0\| = \|1\| = 1 = q^0$, and inductively $\|a^{n+1}\| = \|a^n a\| \le \|a^n\|\,\|a\| \le q^n q = q^{n+1}$. [L1, algebra]

1.2 For every $N \in \mathbb N$ the telescoping identities $(1-a)S_N = 1 - a^{N+1}$ and $S_N(1-a) = 1 - a^{N+1}$ hold, by distributivity and $a^n - a^{n+1} = a^n(1-a)$ summed over $0 \le n \le N$. [L1, algebra]

1.3 Multiplication is jointly continuous in the norm: for $x,x',y,y' \in A$ one has $\|xy - x'y'\| \le \|x\|\,\|y-y'\| + \|x-x'\|\,\|y'\|$ by [L1], so $x' \to x$ and $y' \to y$ force $x'y' \to xy$. [L1, algebra]

2.1 Since $q \in [0,1)$, the geometric series satisfies $\sum_{n \ge 0} q^n = 1/(1-q)$ and its tails satisfy $\sum_{n > N} q^n = q^{N+1}/(1-q)$; with [step 1.1] this gives $\sum_{n \ge 0}\|a^n\| \le 1/(1-q) < \infty$. [step 1.1, algebra]

3.1 The series $\sum_{n \ge 0} a^n$ is absolutely convergent, so it converges to an element $S = \lim_N S_N \in A$ by [L3] and completeness of $A$. [L3, step 2.1, L1]

4.1 Since $a^{N+1} \to 0$ in $A$ by [step 1.1] and $q^{N+1} \to 0$, letting $N \to \infty$ in the identities of [step 1.2] is legitimate: $(1-a)S_N \to (1-a)S$ and $S_N(1-a) \to S(1-a)$ by [step 1.3] and [step 3.1], while the right hand sides $1 - a^{N+1}$ tend to $1$; hence $(1-a)S = 1$ and $S(1-a) = 1$. [step 1.2, step 1.3, step 3.1, step 1.1]

5.1 By [L2] the element $1-a$ is invertible with $(1-a)^{-1} = S = \sum_{n\ge0} a^n$, which proves claim 1; moreover for every $N$ the difference of the sum and the partial sum is the tail $(1-a)^{-1} - S_N = \sum_{n > N} a^n$, whose norm is at most $\sum_{n > N} q^n = q^{N+1}/(1-q)$ by [step 1.1] and [step 2.1], which is claim 2. [step 4.1, step 2.1, L2, algebra] ∎
