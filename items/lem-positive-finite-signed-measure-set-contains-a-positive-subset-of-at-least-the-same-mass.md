---
id: lem-positive-finite-signed-measure-set-contains-a-positive-subset-of-at-least-the-same-mass
kind: lemma
title: "A set of positive finite signed measure contains a positive subset of at least the same mass"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-positive-negative-and-null-sets-for-a-signed-measure, lem-finite-signed-measure-sets-have-only-finite-subset-values, prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity, def-axiom-of-choice]
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
    - title: "John K. Hunter, Measure Theory, Lemma 6.17"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 12.4"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\nu$ be a signed measure on $(X,\mathcal A)$ and let $A\in\mathcal A$
satisfy $0<\nu(A)<+\infty$. Then there exists a positive set $P\subseteq A$
such that
$$\nu(P)\ge \nu(A).$$

## Facts & Assumptions

**Given:** A signed measure $\nu$, a measurable set $A$ with $0<\nu(A)<+\infty$, and the Axiom of Choice ([[def-axiom-of-choice]]).

[L1] A measurable set is positive when every measurable subset has nonnegative signed measure. ([[def-positive-negative-and-null-sets-for-a-signed-measure]])

[L2] Every measurable subset of $A$ has finite signed measure. ([[lem-finite-signed-measure-sets-have-only-finite-subset-values]])

[L3] If a disjoint union has finite signed measure, then the resulting real series converges absolutely. ([[prop-finite-union-values-force-absolute-convergence-for-signed-measure-additivity]])

## Proof

**Proof technique:** direct.

1.1 For each $n\ge1$ and measurable $R\subseteq A$, put $\delta(R)=\inf\{\nu(E):E\in\mathcal A,\ E\subseteq R\}$. If $R$ is positive, prescribe the subset $\varnothing$. Otherwise $\delta(R)<0$: if it is finite, the subsets $E\subseteq R$ with $\nu(E)\le\delta(R)/2$ form a nonempty family; if it is $-\infty$, use the nonempty family with $\nu(E)\le-n$. Apply AC to this set-indexed family of nonempty admissible-subset families to fix a selector $E(n,R)$. Define recursively $R_1=A$, $A_n=E(n,R_n)$, $\delta_n=\delta(R_n)$ and $R_{n+1}=R_n\setminus A_n$. The $A_n$ are pairwise disjoint, have finite nonpositive values by [L2], and satisfy $\delta_n\le\nu(A_n)\le\delta_n/2$ when $\delta_n$ is finite, and $\nu(A_n)\le-n$ otherwise. This selector is the precise use of AC; no minimal choice principle is asserted. [given, L1, L2, choose]

2.1 Put $B:=\bigcup_{n\ge1} A_n$ and $P:=A\setminus B$. Because $B\subseteq A$, [L2] makes $\nu(B)$ finite, and [L3] makes $\sum_{n\ge1}\nu(A_n)$ absolutely convergent. Thus $\nu(A_n)\to0$, and only finitely many terms satisfy $\nu(A_n)\le-1$. The $\delta_n=-\infty$ branch therefore occurs only finitely often. For some $n_0$ and every $n\ge n_0$, $\delta_n$ is finite and $0\ge\delta_n\ge2\nu(A_n)$. Comparison proves convergence of the tail $\sum_{n\ge n_0}|\delta_n|$, and in particular $\delta_n\to0$. No assertion about summing earlier infinite values is needed. [L2, L3, step 1.1]

3.1 If $E\subseteq P$ is measurable, then $E\subseteq R_n$ for every $n$, so $\nu(E)\ge\delta_n$ by definition of $\delta_n$. Letting $n\to\infty$ in step 2.1 gives $\nu(E)\ge0$, so [L1] shows that $P$ is positive. [L1, step 1.1, step 2.1]

3.2 Because every term $\nu(A_n)$ is nonpositive, step 2.1 gives $$\nu(B)=\sum_{n\ge1} \nu(A_n)\le0.$$ Hence $\nu(P)=\nu(A)-\nu(B)\ge\nu(A)$. [step 2.1, algebra]

4.1 Steps 3.1 and 3.2 give a positive subset $P\subseteq A$ with $\nu(P)\ge\nu(A)$. [step 3.1, step 3.2] ∎
