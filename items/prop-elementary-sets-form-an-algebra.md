---
id: prop-elementary-sets-form-an-algebra
kind: proposition
title: "The elementary sets form an algebra of subsets of $\\mathbb{R}^n$ containing every half-open box"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-elementary-set-in-rn, lem-half-open-boxes-form-an-elementary-family, def-algebra-of-subsets, def-half-open-box]
justified_by: []
aliases: []
landmark: true
short: "$\\mathcal{E}_n$ is an algebra"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.1"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Section 1"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$. The family $\mathcal{E}_n$ of elementary subsets of
$\mathbb{R}^n$ ([[def-elementary-set-in-rn]]) is an algebra of subsets of
$\mathbb{R}^n$ ([[def-algebra-of-subsets]]): it contains $\varnothing$, it is
closed under complement in $\mathbb{R}^n$, and it is closed under union of two
members. It contains every half-open box, and it is closed under intersection of
two members and under difference.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$ and the family $\mathcal{E}_n$ of finite unions of half-open boxes in $\mathbb{R}^n$.

[L1] A subset $E\subseteq\mathbb{R}^n$ is an **elementary set** when there are a natural number $m$ and a list $B_0, \dots, B_{m-1}$ of half-open boxes with $E=\bigcup_{j<m}B_j$; at $m = 0$ the union is empty, so $\varnothing \in \mathcal{E}_n$; at $m = 1$ every half-open box is elementary, $\mathbb{R}^n = (-\infty,+\infty]^n$ included ([[def-elementary-set-in-rn]]).

[L2] The intersection of the members of a finite list of half-open boxes is a half-open box, the empty list giving $\mathbb{R}^n$ ([[lem-half-open-boxes-form-an-elementary-family]]).

[L3] For every parameter pair $(a,b)$ there is a finite list of pairwise disjoint half-open boxes whose union is $\mathbb{R}^n \setminus B(a,b)$ ([[lem-half-open-boxes-form-an-elementary-family]]).

[F1] An **algebra of subsets of $X$** is a family $\mathcal A\subseteq\mathcal P(X)$ such that $\varnothing\in\mathcal A$; if $A\in\mathcal A$, then $X\setminus A\in\mathcal A$; and if $A,B\in\mathcal A$, then $A\cup B\in\mathcal A$ ([[def-algebra-of-subsets]]).

[F2] $B(a,b) := \{\, x \in \mathbb{R}^n : a_i < x_i \le b_i \ \text{ for every } i < n \,\}$ ([[def-half-open-box]]).

## Proof

**Proof technique:** direct.

1.1 The empty list of boxes has union $\varnothing$ and the one-member list $B$ has union $B$, so $\varnothing \in \mathcal{E}_n$, every half-open box lies in $\mathcal{E}_n$, and $\mathbb{R}^n \in \mathcal{E}_n$. [L1]

1.2 If $E = \bigcup_{j<m} B_j$ and $F = \bigcup_{k<p} C_k$ are presentations, then concatenating the two lists into a list of length $m+p$ presents $E \cup F$, so $\mathcal{E}_n$ is closed under the union of two members. [L1]

1.3 With the same presentations, $E \cap F = \bigcup_{j<m}\bigcup_{k<p}(B_j \cap C_k)$, each $B_j \cap C_k$ is a half-open box, and the $mp$ boxes can be listed by a bijection of $\{\,q \in \mathbb{N} : q < mp\,\}$ with the pairs $(j,k)$, so $E \cap F \in \mathcal{E}_n$. [L1, L2, F2, algebra]

1.4 The complement of a single half-open box is a finite union of half-open boxes, hence lies in $\mathcal{E}_n$. [L3, L1]

2.1 For a presentation $E = \bigcup_{j<m}B_j$ one has $\mathbb{R}^n \setminus E = \bigcap_{j<m}(\mathbb{R}^n \setminus B_j)$; putting $F_0 := \mathbb{R}^n$ and $F_{q+1} := F_q \cap (\mathbb{R}^n \setminus B_q)$, an induction on $q \le m$ using step 1.1 for $F_0$ and steps 1.3 and 1.4 for the successor case gives $F_q \in \mathcal{E}_n$ for every $q \le m$, and $F_m = \mathbb{R}^n \setminus E$. [step 1.1, step 1.3, step 1.4, algebra]

3.1 Steps 1.1, 1.2 and 2.1 are the three clauses of [F1], so $\mathcal{E}_n$ is an algebra of subsets of $\mathbb{R}^n$; it contains every half-open box by step 1.1, is closed under binary intersection by step 1.3, and is closed under difference because $E \setminus F = E \cap (\mathbb{R}^n \setminus F)$. [step 1.1, step 1.2, step 1.3, step 2.1, F1] ∎
