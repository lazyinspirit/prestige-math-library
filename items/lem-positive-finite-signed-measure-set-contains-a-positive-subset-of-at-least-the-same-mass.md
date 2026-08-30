---
id: lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass
kind: lemma
title: "A set of positive finite signed measure contains a positive subset of at least the same mass"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-positive-negative-and-null-sets-for-a-signed-measure, lem-finite-signed-measure-sets-have-only-finite-subset-values, prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "John K. Hunter, Measure Theory, Lemma 6.17"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 12.4"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Let $\nu$ be a signed measure on $(X,\mathcal A)$ and let $A\in\mathcal A$
satisfy $0<\nu(A)<+\infty$. Then there exists a positive set $P\subseteq A$
such that
$$\nu(P)\ge \nu(A).$$

## Facts & Assumptions

**Given:** A signed measure $\nu$ and a measurable set $A$ with $0<\nu(A)<+\infty$.

[L1] A measurable set is positive when every measurable subset has nonnegative signed measure. ([[def-positive-negative-and-null-sets-for-a-signed-measure]])

[L2] Every measurable subset of $A$ has finite signed measure. ([[lem-finite-signed-measure-sets-have-only-finite-subset-values]])

[L3] If a disjoint union has finite signed measure, then the resulting real series converges absolutely. ([[prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity]])

## Proof

**Proof technique:** direct.

1.1 Define $R_1:=A$. If $R_n$ is not positive, choose a measurable subset $B_n\subseteq R_n$ with $\nu(B_n)<0$, set $$\delta_n:=\inf\{\nu(E):E\in\mathcal A,\ E\subseteq R_n\},$$ and choose $A_n\subseteq R_n$ so that either $$\delta_n\le\nu(A_n)\le \delta_n/2<0\qquad\text{when }\delta_n>-\infty,$$ or $$\nu(A_n)\le-n\qquad\text{when }\delta_n=-\infty.$$ If $R_n$ is positive, put $A_n=\varnothing$ and $\delta_n=0$. In every case define $R_{n+1}:=R_n\setminus A_n$. Then the $A_n$ are pairwise disjoint subsets of $A$ and each $\nu(A_n)\le0$. [L1, L2, choose]

2.1 Put $B:=\bigcup_{n\ge1} A_n$ and $P:=A\setminus B$. Because $B\subseteq A$, [L2] makes $\nu(B)$ finite, and [L3] makes the real series $\sum_{n\ge1} \nu(A_n)$ absolutely convergent. Since every nonzero term is nonpositive, only finitely many satisfy $\nu(A_n)\le-1$; therefore the $\delta_n=-\infty$ branch of step 1.1 occurs only finitely often. For all large $n$ one then has $\delta_n>-\infty$ and $$0\ge\delta_n\ge 2\nu(A_n).$$ Hence $\sum_{n\ge1} |\delta_n|$ converges by comparison with $2\sum_{n\ge1} |\nu(A_n)|$, so $\delta_n\to0$. [L2, L3, step 1.1]

3.1 If $E\subseteq P$ is measurable, then $E\subseteq R_n$ for every $n$, so $\nu(E)\ge\delta_n$ by definition of $\delta_n$. Letting $n\to\infty$ in step 2.1 gives $\nu(E)\ge0$, so [L1] shows that $P$ is positive. [L1, step 1.1, step 2.1]

3.2 Because every term $\nu(A_n)$ is nonpositive, step 2.1 gives $$\nu(B)=\sum_{n\ge1} \nu(A_n)\le0.$$ Hence $\nu(P)=\nu(A)-\nu(B)\ge\nu(A)$. [step 2.1, algebra]

4.1 Steps 3.1 and 3.2 give a positive subset $P\subseteq A$ with $\nu(P)\ge\nu(A)$. [step 3.1, step 3.2] ∎
