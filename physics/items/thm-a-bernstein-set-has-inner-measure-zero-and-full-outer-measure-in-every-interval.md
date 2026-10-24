---
id: thm-a-bernstein-set-has-inner-measure-zero-and-full-outer-measure-in-every-interval
kind: theorem
title: "A Bernstein set has inner measure $0$, and in every nondegenerate interval its intersection has full outer measure"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-compact-subsets-of-a-bernstein-set-are-countable,
       def-bernstein-set-on-r, def-lebesgue-inner-measure-on-r,
       lem-countable-sets-are-null, thm-lebesgue-outer-regularity-for-arbitrary-subsets,
       thm-lebesgue-measure-of-a-box-of-every-kind, thm-open-subsets-of-r-structure,
       lem-q-and-irrationals-dense-r, def-perfect-set-r, def-countable-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jacek Cichoń, Aleksander Kharazishvili, and Bogdan Węglorz, Subsets of the Real Line, Chapter 8"
      url: "https://ki.pwr.edu.pl/cichon/Materialy/BOOK.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Let $B \subseteq \mathbb{R}$ be a
Bernstein set.

1. $\lambda_*(B)=0$.
2. For every nondegenerate bounded interval $I \subseteq \mathbb{R}$,
   $$\lambda^*(B \cap I)=\lambda(I).$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a Bernstein set $B \subseteq \mathbb{R}$.

[L1] Every compact subset of a Bernstein set is countable ([[lem-compact-subsets-of-a-bernstein-set-are-countable]]).

[F1] $\lambda_*(E)=\sup\{\, \lambda(K) : K \subseteq E \text{ and } K \text{ is compact} \,\}$ ([[def-lebesgue-inner-measure-on-r]]).

[L2] Every at most countable subset of $\mathbb{R}$ has measure zero ([[lem-countable-sets-are-null]]).

[L3] Assuming countable choice, $\lambda^*(E)=\inf\{\, \lambda(U) : U \subseteq \mathbb{R} \text{ open and } E \subseteq U \,\}$ ([[thm-lebesgue-outer-regularity-for-arbitrary-subsets]]).

[L4] Assuming countable choice, every interval with any endpoint convention is Lebesgue measurable with its usual length ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[L5] Every open subset of $\mathbb{R}$ is a countable disjoint union of open intervals ([[thm-open-subsets-of-r-structure]]).

[L6] Every nonempty open subset of $\mathbb{R}$ is uncountable ([[lem-q-and-irrationals-dense-r]]).

[L7] A perfect subset of $\mathbb{R}$ is closed and has no isolated points ([[def-perfect-set-r]]).

## Proof

**Proof technique:** direct.

1.1 Every compact subset of $B$ is countable by [L1], hence has Lebesgue measure $0$ by [L2]. Since $0$ is attained by the compact set $\varnothing$, the supremum in [F1] is exactly $0$. Therefore $\lambda_*(B)=0$. [L1, L2, F1]

1.2 Let $I$ be a nondegenerate bounded interval, and assume $\lambda^*(B \cap I) < \lambda(I)$. Choose a closed nondegenerate interval $J\subseteq I$ with $\lambda^*(B\cap I)<\lambda(J)$; this is possible by moving any omitted endpoints inward by a sufficiently small amount. By [L3] choose an open set $U\supseteq B\cap I$ with $\lambda(U)<\lambda(J)$. Then $F:=J\setminus U$ is closed in $\mathbb R$, satisfies $F\subseteq I\setminus B$, and is measurable. Because $U\cap J$ is measurable and contained in $U$, [L4] gives $$\lambda(F)=\lambda(J)-\lambda(U\cap J)\ge\lambda(J)-\lambda(U)>0.$$ In particular $F$ is uncountable by [L2]. The closed uncountable set $F$ has a nonempty perfect subset: its set of condensation points is closed, nonempty, and has no isolated points by the argument of [[lem-compact-subsets-of-a-bernstein-set-are-countable]]. That perfect subset lies inside $I\setminus B$, contradicting the Bernstein property. Therefore $\lambda^*(B\cap I)=\lambda(I)$. [L2, L3, L4, L5, L6, L7]

2.1 Step 1.1 is claim 1, and step 1.2 is claim 2. [step 1.1, step 1.2] ∎
