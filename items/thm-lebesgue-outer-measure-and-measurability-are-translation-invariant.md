---
id: thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
kind: theorem
title: "Lebesgue outer measure, Lebesgue measurability and Lebesgue measure are unchanged by translation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-lebesgue-outer-measure, def-half-open-box, def-elementary-set-in-rn, thm-elementary-volume-is-well-defined, lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes, def-translation-of-a-set-in-rn, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, def-caratheodory-measurable-set, thm-lebesgue-measure-is-a-complete-measure, def-extended-reals, def-nonnegative-extended-series]
justified_by: []
aliases: []
landmark: true
short: "translation invariance"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "John K. Hunter, Measure Theory (UC Davis lecture notes), Proposition 2.16"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Theorem 2.3"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$, let $h \in \mathbb{R}^n$, and let $E + h$ be the translate of
$E \subseteq \mathbb{R}^n$ ([[def-translation-of-a-set-in-rn]]). Then:

1. $\lambda_n^*(E+h) = \lambda_n^*(E)$ for **every** subset $E$;
2. $E$ is Lebesgue measurable if and only if $E+h$ is;
3. $\lambda_n(E+h) = \lambda_n(E)$ for every Lebesgue measurable $E$.

**No choice principle is used.** Lebesgue outer measure is defined as an infimum
and the Carathéodory condition is a family of equations between its values, so
all three clauses are statements about objects that exist in ZF; countable
choice is needed to know that $\lambda_n$ is a measure, not to know that it is
translation invariant.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, a vector $h \in \mathbb{R}^n$, and a subset $E \subseteq \mathbb{R}^n$.

[L1] $\lambda_n^*(E) := \inf\{\sum_{k=0}^{\infty}\mu_0(A_k) : A_k \in \mathcal{E}_n$ for every $k$ and $E \subseteq \bigcup_k A_k\}$ ([[def-lebesgue-outer-measure]], [[def-nonnegative-extended-series]]).

[L2] $B(a,b) := \{\, x \in \mathbb{R}^n : a_i < x_i \le b_i \ \text{ for every } i < n \,\}$; a box is nonempty exactly when $a_i<b_i$ for every $i<n$; and for a nonempty box with real parameters $\operatorname{vol}(B) := \prod_{i<n}(b_i-a_i)$, the value being $+\infty$ when a parameter is infinite ([[def-half-open-box]]).

[L3] A subset $E\subseteq\mathbb{R}^n$ is an **elementary set** when there are a natural number $m$ and a list $B_0, \dots, B_{m-1}$ of half-open boxes with $E=\bigcup_{j<m}B_j$ ([[def-elementary-set-in-rn]]), and every elementary set is the union of a finite list of pairwise disjoint half-open boxes ([[lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes]]).

[L4] For every $n\ge1$, elementary volume $\mu_0$ on $\mathcal{E}_n$ has value at $A$ the sum of the volumes of the members of any presentation of $A$ by a finite list of pairwise disjoint half-open boxes ([[thm-elementary-volume-is-well-defined]]).

[L5] A set $E$ is **Lebesgue measurable** when $\lambda_n^*(A) = \lambda_n^*(A\cap E)+\lambda_n^*(A\setminus E)$ for every $A \subseteq \mathbb{R}^n$, and $\lambda_n$ is the restriction of $\lambda_n^*$ to the family of these ([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[def-caratheodory-measurable-set]]).

[F1] The **translate** of $E\subseteq\mathbb R^n$ by $a$ is $E+a:=\{x+a:x\in E\}$; translation by $a$ is the bijection $\tau_a(x)=x+a$, whose inverse is $\tau_{-a}$ ([[def-translation-of-a-set-in-rn]]).

[F2] Addition of a real to an extended real is defined in every case, with $a+b := +\infty$ when $a=+\infty$ and $b \ne -\infty$, and $a+b := -\infty$ when $a=-\infty$ and $b \ne +\infty$ ([[def-extended-reals]]).

## Proof

**Proof technique:** direct.

1.1 For a parameter pair $(a,b)$ one has $B(a,b)+h = B(a+h,b+h)$, where $a+h$ is the parameter $i \mapsto a_i+h_i$: a point $y$ lies in the left side exactly when $y-h$ satisfies $a_i<y_i-h_i\le b_i$, that is $a_i+h_i<y_i\le b_i+h_i$. The translated box is empty exactly when the original is, and has the same volume, because $(b_i+h_i)-(a_i+h_i)=b_i-a_i$ when both are real and an infinite parameter stays infinite. [L2, F1, F2]

2.1 Consequently, if $A = \bigcup_{j<q}B_j$ is a presentation of an elementary set by pairwise disjoint half-open boxes, then $A+h = \bigcup_{j<q}(B_j+h)$ is such a presentation of $A+h$, so $A+h$ is elementary and $\mu_0(A+h)=\mu_0(A)$. [step 1.1, L3, L4]

3.1 A sequence $(A_k)$ of elementary sets covers $E$ if and only if the sequence $(A_k+h)$ covers $E+h$, and the two covering costs are equal by step 2.1; the correspondence is a bijection between the two families of covers, with inverse given by translating by $-h$, so the two infima agree and $\lambda_n^*(E+h)=\lambda_n^*(E)$. [step 2.1, L1, F1]

4.1 For test sets, $A\cap(E+h) = \big((A-h)\cap E\big)+h$ and $A\setminus(E+h) = \big((A-h)\setminus E\big)+h$, so by step 3.1 the Carathéodory identity for $E+h$ tested against $A$ is exactly the identity for $E$ tested against $A-h$; as $A$ ranges over all subsets so does $A-h$, and therefore $E+h$ is Lebesgue measurable if and only if $E$ is, with $\lambda_n(E+h)=\lambda_n^*(E+h)=\lambda_n^*(E)=\lambda_n(E)$ in that case. [step 3.1, L5, F1] ∎
