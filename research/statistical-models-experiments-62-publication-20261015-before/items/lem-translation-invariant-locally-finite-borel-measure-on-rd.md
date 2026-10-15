---
id: lem-translation-invariant-locally-finite-borel-measure-on-rd
kind: lemma
title: 'A locally finite translation-invariant Borel measure on $\mathbb R^d$ is a multiple of Lebesgue measure'
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-countable-choice
  - def-measure
  - thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, §8.2 proof of Proposition 8.7"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 8, Proposition 8.7 proof, PDF pp.83–84 (printed pp.71–72): a locally finite translation-invariant measure on R^d is a multiple of Lebesgue measure."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 2, §2.4, PDF pp.35–37: the stationary second moment measure is disintegrated using translation invariance."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

Assume the Axiom of Countable Choice. Let $m$ be a Borel measure on $\mathbb R^d$ that is finite on compact sets and translation invariant. Put $Q=[0,1)^d$ and $c=m(Q)$. Then

$$m(B)=c\,\lambda_d(B)$$

for every Borel $B\subseteq\mathbb R^d$, where $\lambda_d$ is Borel Lebesgue measure. In particular, if $c=0$ then $m$ is the zero measure.

## Facts & Assumptions

**Given:** A natural number $d\ge1$, Countable Choice, a locally finite Borel measure $m$ on $\mathbb R^d$, translation invariance $m(B+x)=m(B)$, and $Q=[0,1)^d$.

[A1] Countable Choice: for every sequence of nonempty sets $(X_n)_{n\in\mathbb N}$ there is a sequence $x_n\in X_n$. ([[def-countable-choice]])

[F1] A measure is countably additive on disjoint measurable sequences, and local finiteness means finite measure on every compact set. ([[def-measure]])

[F2] Under Countable Choice, a translation-invariant Borel measure on $\mathbb R^d$ that assigns mass $1$ to $(0,1]^d$ agrees with $\lambda_d$ on all Borel sets. ([[thm-lebesgue-measure-is-the-unique-normalised-translation-invariant-borel-measure]])

## Proof

**Given:** Countable Choice and a locally finite translation-invariant Borel measure $m$ on $\mathbb R^d$.

1.1 Fix a coordinate $i$ and either face $F$ of $[0,1]^d$ in that coordinate. For each integer $n\ge1$, translate the lower face by $j/(n+1)e_i$, or the upper face by $-j/(n+1)e_i$, for $j=1,\ldots,n$. These $n$ translates are pairwise disjoint compact subsets of $[0,1]^d$, each has measure $m(F)$ by translation invariance, and $m([0,1]^d)<\infty$ by local finiteness. Hence $n m(F)\le m([0,1]^d)$ for every $n$, which forces $m(F)=0$. The boundary of $[0,1]^d$ is a finite union of such faces. [given, F1, construct, algebra]

2.1 The symmetric difference of $Q$ and $(0,1]^d$ is contained in that boundary, so [F1] and step 1.1 give $m(Q)=m((0,1]^d)=c$. [step 1.1, F1]

3.1 If $c=0$, the integer translates $Q+k$, $k\in\mathbb Z^d$, are a countable disjoint partition of $\mathbb R^d$. Translation invariance gives $m(Q+k)=0$ for every $k$, and countable additivity gives $m(\mathbb R^d)=0$. Monotonicity then gives $m(B)=0$ for every Borel $B$. [step 2.1, F1, algebra]

3.2 If $c>0$, $m/c$ is a translation-invariant Borel measure and, by step 2.1, $(m/c)((0,1]^d)=1$. Applying [F2] gives $m/c=\lambda_d$, hence $m(B)=c\lambda_d(B)$ for every Borel $B$. [A1, step 2.1, F2, algebra]

4.1 The cases $c=0$ and $c>0$ exhaust the nonnegative value $m(Q)$, proving the statement. The proof uses Countable Choice only through [F2]; no stronger choice principle is used. [A1, F2, step 3.1, step 3.2] ∎

## Sources

Last and Penrose, Chapter 8, Proposition 8.7 proof; Baddeley, Lecture 2, §2.4. The local face argument supplies the normalization change from $[0,1)^d$ to the source theorem's $(0,1]^d$ convention.
