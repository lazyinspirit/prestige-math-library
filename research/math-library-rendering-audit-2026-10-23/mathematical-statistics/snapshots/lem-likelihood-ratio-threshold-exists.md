---
id: lem-likelihood-ratio-threshold-exists
kind: lemma
title: "A likelihood-ratio threshold with boundary randomization exists"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-measurable-function-between-measurable-spaces
  - def-probability-measure
  - prop-measure-monotonicity
  - thm-continuity-from-below-for-measures
  - thm-continuity-from-above-for-measures
  - def-infimum
  - thm-infimum-property
  - cor-archimedean-reciprocal
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Chapter 13, §§13.1.1–13.1.2, PDF pp. 76–77"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Karl B. Gregory, USC STAT 713 Lecture 11: Neyman–Pearson and Karlin–Rubin, PDF pp. 7–9"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_11_slides_annotated.pdf"
---

## Statement

Let $Q$ be a probability measure on $(X,\mathcal A)$, and let
$T:X\to[0,\infty)$ be a finite-valued measurable function. For every
$\alpha\in(0,1]$, there exist $c\in[0,\infty)$ and
$\gamma\in[0,1]$ such that
$$Q(T>c)+\gamma Q(T=c)=\alpha.$$

## Facts & Assumptions

**Given:** A probability measure $Q$, a finite-valued measurable
$T:X\to[0,\infty)$, and $0<\alpha\le1$.

[F1] [[def-probability-measure]]: $Q$ is a measure with $Q(X)=1$.

[F2] [[def-measurable-function-between-measurable-spaces]]: $T$ is measurable when the preimage of each Borel subset of $[0,\infty)$ belongs to $\mathcal A$.

[F3] [[prop-measure-monotonicity]]: inclusion of measurable sets implies the same order between their measures.

[F4] [[thm-continuity-from-above-for-measures]]: for decreasing measurable sets whose first set has finite measure, the measure of the intersection is the infimum of their measures.

[F5] [[thm-continuity-from-below-for-measures]]: for increasing measurable sets, the measure of their union is the supremum of their measures.

[F6] [[thm-infimum-property]] and [[def-infimum]]: a nonempty subset of $\mathbb R$ bounded below has a greatest lower bound, characterized as a lower bound that is at least every other lower bound.

[F7] [[cor-archimedean-reciprocal]]: the positive reciprocals of the natural numbers fall below every positive real number; equivalently, the natural numbers are unbounded in $\mathbb R$.

## Proof

**Proof technique:** direct.

1.1 Put $q(t)=Q(\{x:T(x)>t\})$ for $t\ge0$ and $S=\{t\ge0:q(t)\le\alpha\}$. The sets $\{T>n\}$ decrease to the empty set because $T$ is finite-valued and the natural numbers are unbounded by [F7]. Their first member has measure at most one, so [F4] gives $q(n)\to0$. Thus $S\ne\varnothing$. If $s\in S$ and $t\ge s$, then $\{T>t\}\subseteq\{T>s\}$, so [F3] gives $q(t)\le q(s)\le\alpha$. Hence $S$ is upward closed, is bounded below by zero, and has a finite infimum $c$ by [F6]. [given, F1, F3, F4, F6, F7, choose]

2.1 If $t>c$, then $t\in S$: otherwise no member of $S$ lies below $t$, making $t$ a lower bound larger than $c$. Therefore $q(c+1/n)\le\alpha$ for every positive integer $n$. By [F7], for every $T(x)>c$ some $n$ satisfies $1/n<T(x)-c$, so the sets $\{T>c+1/n\}$ increase to $\{T>c\}$. Thus [F5] gives $Q(T>c)\le\alpha$. [F2, F3, F5, F6, F7, step 1.1, algebra]

2.2 If $c>0$, set $s_n=c(1-1/(n+1))$ for $n\ge1$. Then $s_n<c$, and [F7] gives $s_n\uparrow c$; also $s_n\notin S$, so $q(s_n)>\alpha$. The sets $\{T>s_n\}$ decrease to $\{T\ge c\}$, since every $T(x)<c$ is eventually below some $s_n$ by [F7]. Their first member has finite measure since $Q(X)=1$. Thus [F4] gives $Q(T\ge c)\ge\alpha$. If $c=0$, the same lower bound follows from $Q(T\ge0)=1$. [F1, F2, F4, F7, step 1.1, algebra]

3.1 Since $\{T\ge c\}$ is the disjoint union of $\{T>c\}$ and $\{T=c\}$, finite additivity gives $Q(T=c)=Q(T\ge c)-Q(T>c)$. If this mass is positive, define $\gamma=(\alpha-Q(T>c))/Q(T=c)$; the bounds in steps 2.1 and 2.2 give $0\le\gamma\le1$ and the required equality. If the mass is zero, those same bounds force $Q(T>c)=\alpha$, and $\gamma=0$ works. [F1, step 2.1, step 2.2, algebra, construct] ∎
