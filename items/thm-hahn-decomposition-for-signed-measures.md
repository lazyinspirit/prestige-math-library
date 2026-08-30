---
id: thm-hahn-decomposition-for-signed-measures
kind: theorem
title: "Hahn decomposition for signed measures, unique up to total-variation-null sets"
status: draft
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-positive-negative-and-null-sets-for-a-signed-measure, prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation, lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Theorem 6.18"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 12.5"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Let $\nu$ be a signed measure on $(X,\mathcal A)$. Then there exist measurable
sets $P,N$ such that
$$P\cap N=\varnothing,\qquad P\cup N=X,$$
$P$ is positive for $\nu$, and $N$ is negative for $\nu$.

If $(P',N')$ is another such pair, then $P\triangle P'$ is null for $\nu$ and
hence has total variation $0$.

## Facts & Assumptions

**Given:** A signed measure $\nu$ on $(X,\mathcal A)$.

[L1] A measurable set is positive, negative, or null according to the signs of
the signed measures of all its measurable subsets.
([[def-positive-negative-and-null-sets-for-a-signed-measure]])

[L2] A measurable set of positive finite signed measure contains a positive
subset whose signed measure is at least as large. ([[lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass]])

[L3] A set is null for a signed measure exactly when its total variation there
is $0$. ([[prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation]])

## Proof

**Proof technique:** direct.

1.1 Replacing $\nu$ by $-\nu$ swaps positive and negative sets, so it is enough [L1, choose]
to treat the case in which $\nu(E)<+\infty$ for every measurable $E$. Let
$$m:=\sup\{\nu(A): A\in\mathcal A,\ A\text{ is positive}\}.$$
Because $\varnothing$ is positive, $m\ge0$. Choose positive sets $A_n$ with
$\nu(A_n)\to m$, and put $P:=\bigcup_n A_n$.
2.1 The union $P$ is positive: if $E\subseteq P$ is measurable, define [L1, step 1.1]
$B_0:=E\cap A_0$ and $B_n:=E\cap(A_n\setminus\bigcup_{k<n}A_k)$ for $n\ge1$.
Then the $B_n$ are pairwise disjoint measurable subsets of the positive sets
$A_n$, so each $\nu(B_n)\ge0$ by [L1], and $E=\bigcup_n B_n$. Countable
additivity gives $\nu(E)=\sum_n \nu(B_n)\ge0$, so [L1] makes $P$ positive.
Because each $A_n\subseteq P$, one has $\nu(A_n)\le\nu(P)\le m$; letting
$n\to\infty$ yields $\nu(P)=m<+\infty$.
3.1 Let $N:=X\setminus P$. If $N$ were not negative, [L1] would give a [L1, L2, step 2.1]
measurable $E\subseteq N$ with $\nu(E)>0$. By [L2], $E$ would contain a
positive subset $Q$ with $\nu(Q)\ge\nu(E)>0$. Then $P\cup Q$ would be a
positive set, $Q$ would be disjoint from $P$, and
$$\nu(P\cup Q)=\nu(P)+\nu(Q)>m,$$
contradicting the definition of $m$. Hence $N$ is negative.
4.1 If $(P',N')$ is another Hahn decomposition, then [L1, L3, step 3.1]
$P\setminus P'\subseteq P\cap N'$ and $P'\setminus P\subseteq P'\cap N$.
Thus each of $P\setminus P'$ and $P'\setminus P$ is both positive and negative,
hence null by [L1]. Their union is $P\triangle P'$, so [L3] gives
$|\,\nu\,|(P\triangle P')=0$.
5.1 Steps 2.1 through 4.1 give a positive set $P$, a negative set $N=X\setminus P$, [step 2.1, step 3.1, step 4.1] ∎
and uniqueness up to total-variation-null sets.