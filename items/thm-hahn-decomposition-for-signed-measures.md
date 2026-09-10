---
id: thm-hahn-decomposition-for-signed-measures
kind: theorem
title: "Hahn decomposition for signed measures, unique up to total-variation-null sets"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-positive-negative-and-null-sets-for-a-signed-measure, prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation, lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass, def-signed-measure, def-axiom-of-choice]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-09
    scope: "Owner-authorized local defect repair; no independent judge or owner audit"
    delegated_by: owner
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Theorem 6.18"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Theorem 12.5"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\nu$ be a signed measure on $(X,\mathcal A)$. Then there exist measurable
sets $P,N$ such that
$$P\cap N=\varnothing,\qquad P\cup N=X,$$
$P$ is positive for $\nu$, and $N$ is negative for $\nu$.

Separately, without any choice axiom, if two such decompositions $(P,N)$ and
$(P',N')$ are given, then $P\triangle P'$ is null for $\nu$ and hence has
total variation $0$. This conditional comparison does not assume the
general existence assertion.

## Facts & Assumptions

**Given:** A signed measure $\nu$ on $(X,\mathcal A)$ in the sense of [[def-signed-measure]], and the Axiom of Choice ([[def-axiom-of-choice]]).

[L1] A measurable set is positive, negative, or null according to the signs of
the signed measures of all its measurable subsets.
([[def-positive-negative-and-null-sets-for-a-signed-measure]])

[L2] Under AC, a measurable set of positive finite signed measure contains a positive
subset whose signed measure is at least as large. ([[lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass]])

[L3] A set is null for a signed measure exactly when its total variation there
is $0$. ([[prop-signed-null-sets-are-exactly-the-sets-of-zero-total-variation]])

## Proof

**Proof technique:** direct.

1.1 A signed measure omits at least one infinite sign. Replacing $\nu$ by $-\nu$ swaps positive and negative sets, so first work in the case $\nu(E)<+\infty$ for every measurable $E$. Put $m=\sup\{\nu(A):A\in\mathcal A,\ A\text{ positive}\}\in[0,+\infty]$; the empty set is admissible. If $m<+\infty$, for every $n\ge1$ the family of positive sets with $\nu(A)>m-1/n$ is nonempty. If $m=+\infty$, use instead the nonempty family with $\nu(A)>n$. AC selects $A_n$ from these families simultaneously. Set $P=\bigcup_{n\ge1}A_n$. This is the optimizing-sequence use of AC; the positive-subset supplier [L2] has its separate stated AC use. [given, L1, choose]

2.1 For measurable $E\subseteq P$, set $B_n=E\cap(A_n\setminus\bigcup_{1\le j<n}A_j)$. These are disjoint measurable subsets of positive sets, with union $E$. Thus countable additivity gives $\nu(E)=\sum_n\nu(B_n)\ge0$. Hence $P$ is positive and $\nu(P)$ is finite in the chosen sign convention. For each $n$, positivity of $P\setminus A_n$ gives $\nu(P)\ge\nu(A_n)$. The branch $m=+\infty$ would imply $\nu(P)>n$ for every $n$, impossible. Therefore $m$ is finite and $m-1/n<\nu(A_n)\le\nu(P)\le m$, whence $\nu(P)=m$. [L1, step 1.1, algebra]

3.1 Put $N=X\setminus P$. If a measurable $E\subseteq N$ had $\nu(E)>0$, its value would be finite by the chosen sign convention. By [L2] it would contain a positive subset $Q$ with $\nu(Q)\ge\nu(E)>0$. Disjoint positive sets have positive union, by splitting each measurable subset between them; hence $P\cup Q$ would be positive and $\nu(P\cup Q)=m+\nu(Q)>m$, a contradiction. Thus every measurable subset of $N$ has nonpositive value, so $N$ is negative. [L1, L2, step 2.1, algebra]

4.1 If the original sign was reversed, interchange the two sets just constructed; they then form a positive/negative partition for the original measure. For any two decompositions of that measure, $P\setminus P'$ lies in both a positive set $P$ and a negative set $N'$, and similarly $P'\setminus P$ lies in $P'\cap N$. Every measurable subset of either difference therefore has value zero. Splitting a measurable subset of their disjoint union into its two parts proves that $P\triangle P'$ is null. By [L3] its total variation is zero. This uniqueness argument itself makes no sequence choices. [L1, L3, step 3.1, algebra] ∎
