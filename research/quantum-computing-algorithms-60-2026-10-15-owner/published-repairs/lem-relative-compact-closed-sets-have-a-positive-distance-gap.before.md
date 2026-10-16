---
id: lem-relative-compact-closed-sets-have-a-positive-distance-gap
kind: lemma
title: A compact set and a disjoint closed set have a positive norm-distance gap
status: published
origin: pipeline
deps: [rem-real-and-complex-normed-space-convention, def-metric-compactness, def-metric-topology, lem-finite-choice, lem-finite-set-has-max]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, §§1.1–1.2 and §1.3 evaluation paragraph
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Theorems 4.13–4.20 and §5.1 (2018 university-hosted copy)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
pipeline_run: phase-2-wave-1
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Statement

Let $X$ be a real or complex normed space. If $K\subseteq X$ is nonempty compact, $C\subseteq X$ is nonempty closed, and $K\cap C=\varnothing$, then there is $\delta>0$ with
$$\|k-c\|\ge\delta\qquad(k\in K,\ c\in C).$$
No convexity, completeness, HB, or infinite choice principle is required.

## Facts & Assumptions

[F1] Closed means open complement; an open set contains a positive-radius ball about each of its points ([[def-metric-topology]]).

[F2] A compact subset is compact for its restricted metric, so every intrinsic open cover has a finite subcover ([[def-metric-compactness]]).

[F3] A natural-number-indexed finite family of nonempty sets has a choice function in ZF ([[lem-finite-choice]]).

[F4] Every nonempty finite list of real numbers has a maximum and a minimum ([[lem-finite-set-has-max]]).

[F5] The induced metric is $d(x,y)=\|x-y\|$ over either scalar field, with the norm triangle inequality ([[rem-real-and-complex-normed-space-convention]]).

## Proof

**Given:** A normed $X$, nonempty compact $K$, nonempty closed $C$, and $K\cap C=\varnothing$.

1.1 Form the set of all admissible pairs $T=\{(a,r)\in K\times(0,\infty):B(a,3r)\cap C=\varnothing\}$ and the family $\mathcal U=\{K\cap B(a,r):(a,r)\in T\}$. For each fixed $k\in K$, the open complement of $C$ contains $k$, so some $s>0$ has $B(k,s)\cap C=\varnothing$. Then $(k,s/3)\in T$ and $k\in K\cap B(k,s/3)$. Thus $\mathcal U$ covers $K$ without selecting radii for all $k$ simultaneously. [given, F1]

2.1 Each $V=K\cap B(a,r)$ in this family is open for the restricted metric on $K$. Indeed, if $k\in V$, then $r-\|k-a\|>0$, and every $y\in K$ with $\|y-k\|<r-\|k-a\|$ satisfies $\|y-a\|\le\|y-k\|+\|k-a\|<r$, so is in $V$. Thus $\mathcal U$ is an intrinsic open cover of $K$. [step 1.1, F1, F5, algebra]

3.1 Compactness gives a finite subcover $V_0,\ldots,V_{n-1}$ with $n\ge1$, since $K\ne\varnothing$. For each index $j<n$ define $W_j=\{(a,r)\in T:V_j=K\cap B(a,r)\}$. Each $W_j$ is nonempty by the definition of $\mathcal U$. Applying finite choice to the function $j\mapsto W_j$ supplies pairs $(a_j,r_j)\in W_j$ for these finitely many indices. Repeated $V_j$ or $W_j$ cause no problem: a choice function on the set of values can be evaluated at each $W_j$. [step 1.1, step 2.1, F2, F3]

4.1 The finite list $r_0,\ldots,r_{n-1}$ consists of positive reals, so its minimum $\delta$ exists and is positive, since it equals one of those reals. [step 3.1, F4]

5.1 For any $k\in K$ choose an index $j<n$ with $k\in V_j$, possible because the finite family covers $K$. For every $c\in C$, admissibility gives $\|c-a_j\|\ge3r_j$, whereas $\|k-a_j\|<r_j$. Hence $\|c-k\|\ge\|c-a_j\|-\|k-a_j\|>2r_j\ge\delta$. This proves the uniform bound for all $k,c$. [step 3.1, step 4.1, F5, algebra] ∎

## Source notes

Brezis Theorem 1.7 proof, p.7, closed-minus-compact step expanded; Teschl Corollary 5.4 proof, p.140, finite-cover step specialized to normed spaces.
