---
id: lem-na-lipschitz-critical-image-null
kind: lemma
title: "Critical images of Euclidean Lipschitz maps are null"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
axiom_base: "Full Axiom of Choice; uses identified in the proof."
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-lipschitz-holder-contraction
  - def-null-and-content-zero-in-rn
  - lem-null-sets-in-rn-closed-under-subsets-and-countable-unions
  - def-metric-ball
  - thm-lebesgue-measure-under-dilations-and-reflections
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-lebesgue-measure-is-a-complete-measure
  - prop-measure-monotonicity
  - thm-n-cross-n-countable
  - thm-rationals-countable
  - thm-product-of-countable
  - lem-rat-embeds-dense
  - thm-well-ordering-principle
  - def-finite-sum
  - lem-finite-sum-laws
  - def-nonnegative-extended-series
  - thm-nonnegative-series-bounded-partial-sums
  - thm-zorn
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces, complete 168-page notes; Sections 2.6 and
        3.3-3.4"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
    - title: "Crandall, Ishii and Lions, User's guide to viscosity solutions, Appendix
        A, Theorem A.2 and pp. 58-60, notes pp. 62-63"
      url: "https://arxiv.org/pdf/math/9207212"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $g:\mathbb R^n\to\mathbb R^n$ be $L$-Lipschitz in the Euclidean norm ([[def-lipschitz-holder-contraction]]), where $n\ge1$. Write $B(x,r)$ for the Euclidean ball ([[def-metric-ball]]). Let
$$C=\{p\in\mathbb R^n:g(p+h)=g(p)+Dg(p)h+o(|h|)\text{ as }h\to0,\ \det Dg(p)=0\}.$$
Then $g(C)$ is null in $\mathbb R^n$.

## Facts & Assumptions

**Given:** The Axiom of Choice, an integer $n\ge1$, and an $L$-Lipschitz map $g:\mathbb R^n\to\mathbb R^n$.

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]); in particular this supplies Countable Choice.

[F1] A set in $\mathbb R^n$ is null when it has closed-cube covers with arbitrarily small total volume ([[def-null-and-content-zero-in-rn]]).

[F2] Countable unions and subsets of null subsets of $\mathbb R^n$ are null under Countable Choice ([[lem-null-sets-in-rn-closed-under-subsets-and-countable-unions]]).

[F3] Zorn's lemma follows from the Axiom of Choice ([[thm-zorn]]).

[F4] The Euclidean unit ball is measurable and has measure $v_n$ with $0<v_n<\infty$ ([[def-metric-ball]], [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]).

[F5] Lebesgue measure is translation invariant and scales under positive dilations by the $n$th power ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[thm-lebesgue-measure-under-dilations-and-reflections]]).

[F6] Lebesgue measure is countably additive on pairwise disjoint measurable sets and monotone ([[thm-lebesgue-measure-is-a-complete-measure]], [[prop-measure-monotonicity]]).

[F7] The product $\mathbb N\times\mathbb N$ is countable ([[thm-n-cross-n-countable]]).

[F8] The rational vectors $\mathbb Q^n$ form a countable dense subset of $\mathbb R^n$ by coordinatewise rational approximation, and every nonempty subset of the enumerating index set has a least element ([[thm-rationals-countable]], [[thm-product-of-countable]], [[lem-rat-embeds-dense]], [[thm-well-ordering-principle]]).

[F9] Finite sums of nonnegative terms are monotone, and a nonnegative series whose partial sums are bounded by $M$ converges with sum at most $M$ ([[def-finite-sum]], [[lem-finite-sum-laws]], [[def-nonnegative-extended-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

## Proof

1.1 Fix $R\ge1$ and $0<\varepsilon<1$. For each $p\in C\cap B(0,R)$, differentiability gives a nonempty set of radii $0<r_p<1$ such that $|g(p+h)-g(p)-Dg(p)h|\le\varepsilon|h|$ whenever $|h|\le5r_p$. By [A1], choose one such radius for each $p$. Divide this ball family into dyadic radius classes $[2^{-j-1},2^{-j})$, largest first. In each class use [F3] on the set of subfamilies disjoint from all previously selected balls; the union of any chain is an upper bound, so a maximal disjoint subfamily exists. The union of selected subfamilies is disjoint. It is countable by [F8]: enumerate $\mathbb Q^n$ and assign to each ball the first rational point it contains; disjoint balls get distinct points. If a rejected ball has radius $r$ and meets a selected ball of radius $R_s>r/2$, then $r<2R_s$ and every point of the rejected ball is within $2r+R_s<5R_s$ of the selected center. Thus the fivefold dilates of a countable disjoint subfamily $B(p_i,r_i)$ cover $C\cap B(0,R)$. [A1, F3, F8, given, construct]

1.2 Put $v_n=\lambda(B(0,1))$. For any selected ball $B(p_i,r_i)$, the image $g(B(p_i,5r_i))$ lies within distance $5\varepsilon r_i$ of $g(p_i)+Dg(p_i)B(0,5r_i)$. This affine image lies in a disk of radius $5Lr_i$ centered at $g(p_i)$ in an affine subspace of dimension $q\le n-1$. In orthonormal coordinates centered at $g(p_i)$ and adapted to that subspace, the tube lies in a box with $q$ side lengths at most $10Lr_i+10\varepsilon r_i$ and $n-q$ side lengths $10\varepsilon r_i$. Subdivide each side into intervals of length at most $\varepsilon r_i$. The number of resulting boxes is at most $c_n(1+L/\varepsilon)^q$; each is contained in an axis-parallel cube of side at most $c_n\varepsilon r_i$. Since $q\le n-1$ and $\varepsilon<1$, their total cube volume is at most $C_n\varepsilon(L+1)^{n-1}r_i^n$ for a finite constant $C_n\ge1$ depending only on $n$. This constructs actual null covers without a rotation-invariance theorem or an area formula. [given, construct, algebra]

2.1 The selected balls lie in $B(0,R+1)$ and are pairwise disjoint. By [F5], each has measure $v_n r_i^n$, and the containing ball has measure $v_n(R+1)^n$. Countable additivity and monotonicity [F6] give $\sum_i r_i^n\le(R+1)^n$, using $v_n>0$. The Countable Choice hypotheses of [F5] and [F6] follow from [A1]. [A1, F4, F5, F6, step 1.1, algebra]

3.1 The fivefold balls in step 1.1 cover $C\cap B(0,R)$, and step 1.2 supplies a finite cube cover of each corresponding image with total volume at most $C_n\varepsilon(L+1)^{n-1}r_i^n$. By [A1], choose one such finite cover for each selected ball. Index these cubes by $(i,j)$; [F7] enumerates the resulting subset of $\mathbb N^2$. Every finite partial sum is at most $C_n\varepsilon(L+1)^{n-1}\sum_i r_i^n\le C_n\varepsilon(L+1)^{n-1}(R+1)^n$ by [F9] and step 2.1. For any cover budget $\delta>0$, take $\varepsilon=\min\{1/2,\delta/[C_n(L+1)^{n-1}(R+1)^n]\}>0$; the bound is then at most $\delta$. By [F1], $g(C\cap B(0,R))$ is null. [A1, F1, F7, F9, step 1.1, step 1.2, step 2.1, algebra]

4.1 The set $C$ is the union of $C\cap B(0,R)$ over integers $R\ge1$. Each image in this countable union is null by step 3.1; [F2] therefore gives that $g(C)$ is null. Its Countable Choice hypothesis follows from [A1]. [A1, F2, step 3.1] ∎
