---
id: prop-elementary-volume-is-finitely-additive-and-monotone
kind: proposition
title: "Elementary volume is finitely additive, monotone and finitely subadditive on the elementary algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-elementary-volume-is-well-defined, prop-elementary-sets-form-an-algebra, lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes, def-elementary-set-in-rn, lem-finite-sum-laws, def-finite-sum, def-nonnegative-extended-series, def-extended-reals]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Chapter 2"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.1"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$, let $\mathcal{E}_n$ be the elementary subsets of $\mathbb{R}^n$
([[def-elementary-set-in-rn]]) and let $\mu_0$ be elementary volume
([[thm-elementary-volume-is-well-defined]]). Let $E, F \in \mathcal{E}_n$ and let
$E_0,\dots,E_{q-1}$ be a finite list in $\mathcal{E}_n$. Then:

1. **Finite additivity.** If the $E_j$ are pairwise disjoint, then
   $\mu_0\big(\bigcup_{j<q}E_j\big) = \sum_{j<q}\mu_0(E_j)$.
2. **Monotonicity.** If $E \subseteq F$, then $\mu_0(E) \le \mu_0(F)$.
3. **Finite subadditivity.** $\mu_0\big(\bigcup_{j<q}E_j\big) \le \sum_{j<q}\mu_0(E_j)$.

All three hold with the value $+\infty$ allowed, the sums being the finite sums
of [[def-nonnegative-extended-series]].

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the algebra $\mathcal{E}_n$, elementary volume $\mu_0$, and elementary sets $E$, $F$ and $E_0,\dots,E_{q-1}$.

[L1] For every $n\ge1$, there is exactly one function $\mu_0 : \mathcal{E}_n \to [0,+\infty]$ whose value at $A$ is the sum of the volumes of the members of any presentation of $A$ by a finite list of pairwise disjoint half-open boxes ([[thm-elementary-volume-is-well-defined]]).

[L2] Every elementary set is the union of a finite list of pairwise disjoint half-open boxes ([[lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes]]).

[L3] $\mathcal{E}_n$ is an algebra of subsets of $\mathbb{R}^n$, it contains every half-open box, and it is closed under intersection of two members and under difference ([[prop-elementary-sets-form-an-algebra]]).

[L4] A subset $E\subseteq\mathbb{R}^n$ is an **elementary set** when there are a natural number $m$ and a list $B_0, \dots, B_{m-1}$ of half-open boxes with $E=\bigcup_{j<m}B_j$ ([[def-elementary-set-in-rn]]).

[F1] For sequences of reals, $\sum_{k<n}(a_k+b_k) = \sum_{k<n}a_k+\sum_{k<n}b_k$; if $m \le n$ then $\sum_{k<n}a_k = \sum_{k<m}a_k+\sum_{k=m}^{n-1}a_k$; and if $a_k \le b_k$ whenever $0\le k<n$ then $\sum_{k<n}a_k \le \sum_{k<n}b_k$ ([[lem-finite-sum-laws]], claims 1, 3 and 4).

[F2] Finite sums of a sequence of reals are defined by the recursion $\Sigma_0 = 0$, $\Sigma_{\sigma(n)} = \Sigma_n + a_n$ ([[def-finite-sum]]).

[F3] The partial sums of a sequence in $[0,+\infty]$ are the unique sequence with $s_0=0$ and $s_{n+1}=s_n+a_n$, and finite sums use the same recursion, $\sum_{k<n}a_k=s_n$ ([[def-nonnegative-extended-series]]).

[F4] For $a,b \in \overline{\mathbb{R}}$, $a + b := +\infty$ when $a = +\infty$ and $b \ne -\infty$, or $b = +\infty$ and $a \ne -\infty$ ([[def-extended-reals]]).

## Proof

**Proof technique:** direct.

1.1 A finite sum in $[0,+\infty]$ equals $+\infty$ exactly when one of its terms does, and otherwise is the finite sum of reals; hence such sums split over a concatenation of two lists, are monotone termwise, and satisfy $x \le x+y$ for $x,y \in [0,+\infty]$, since with all terms real these are the laws for finite sums of reals and otherwise both sides are $+\infty$. [F1, F2, F3, F4]

2.1 For claim 1, choose for each $j<q$ a presentation of $E_j$ by a finite list of pairwise disjoint half-open boxes, finitely many instantiations of an existential statement; the concatenated list presents $\bigcup_{j<q}E_j$ and its members are pairwise disjoint, boxes from different $E_j$ being disjoint because the $E_j$ are, so splitting the concatenated sum over the $q$ blocks gives $\mu_0(\bigcup_{j<q}E_j) = \sum_{j<q}\mu_0(E_j)$. [step 1.1, L1, L2, L4]

3.1 For claim 2, $F = E \cup (F\setminus E)$ is a disjoint union of two elementary sets, so claim 1 gives $\mu_0(F) = \mu_0(E) + \mu_0(F\setminus E) \ge \mu_0(E)$. [step 1.1, step 2.1, L3]

4.1 For claim 3, put $D_j := E_j \setminus \bigcup_{l<j}E_l$; each $D_j$ is elementary, the $D_j$ are pairwise disjoint with $\bigcup_{j<q}D_j = \bigcup_{j<q}E_j$, and $D_j \subseteq E_j$, so claim 1 and then claim 2 termwise give $\mu_0(\bigcup_{j<q}E_j) = \sum_{j<q}\mu_0(D_j) \le \sum_{j<q}\mu_0(E_j)$, which with steps 2.1 and 3.1 is the Statement. [step 1.1, step 2.1, step 3.1, L3] ∎
