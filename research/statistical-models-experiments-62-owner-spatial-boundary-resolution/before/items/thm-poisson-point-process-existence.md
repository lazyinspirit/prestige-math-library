---
id: thm-poisson-point-process-existence
kind: theorem
title: "Existence of a locally finite Poisson point process"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 4
deps:
  - def-random-measure-and-locally-finite-point-process
  - lem-locally-compact-second-countable-spaces-have-compact-exhaustions
  - def-poisson-and-cox-point-process
  - thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law
  - def-scalar-poisson-count-law
  - lem-poisson-count-law-normalization-and-moments
  - thm-countable-product-of-probability-spaces
  - def-countable-choice
  - def-dependent-choice
  - thm-nonnegative-weighted-sums-of-measures
  - thm-monotone-convergence-for-the-integral
  - def-measure
  - def-compact-space
  - def-hausdorff-space
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - def-finite-sigma-finite-and-semifinite-measures
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gunter Last and Mathew Penrose, Lectures on the Poisson Process, author-hosted 2017 version"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
      locator: "Chapter 3, Theorem 3.6 and proof, printed pp. 21-22 (PDF pp. 33-34): finite-mass construction and independent superposition; the sigma-finite construction is supplied locally."
    - title: "Adrian Baddeley, Spatial Point Processes and their Applications, complete lecture notes"
      url: "https://leman.stat.vt.edu/VTCourses/BaddeleyPointProcesses.pdf"
      locator: "Lecture 1, Definitions 1.2-1.3 and the bounded-window construction, PDF pp. 10-13; the locally finite sigma-finite extension is supplied locally."
verification:
  precheck: pending
---

## Statement

Assume countable choice and dependent choice. Let $S$ be locally compact,
second countable, and Hausdorff, and let $\nu$ be a locally finite,
sigma-finite Borel measure on $S$. Then a locally finite Poisson point
process with intensity $\nu$ exists. This existence assertion uses countable
choice and dependent choice only through the countable product of probability
spaces; it does not assume full choice.

## Facts & Assumptions

**Given:** A locally compact, second-countable Hausdorff space $S$ and a
locally finite, sigma-finite Borel measure $\nu$ on $S$; sigma-finite means
that $S$ is a countable union of Borel sets of finite $\nu$-measure
([[def-finite-sigma-finite-and-semifinite-measures]]).

[F1] There is an increasing compact exhaustion $(K_n)$ covering $S$, with
every compact subset contained in some $K_n$.
([[lem-locally-compact-second-countable-spaces-have-compact-exhaustions]])

[F2] For each finite Borel measure $\rho$, the explicit mixed-binomial
construction on $\coprod_{n\ge0}S^n$ gives a Poisson point process of
intensity $\rho$, and finite disjoint counts have the independent Poisson
laws. ([[thm-finite-intensity-poisson-process-existence-and-mixed-binomial-law]])

[F3] The countable product of the coordinate probability spaces exists under
countable choice and dependent choice. ([[thm-countable-product-of-probability-spaces]])

[F4] A countable sum of measures is a measure; increasing limits pass through
nonnegative integrals. ([[thm-nonnegative-weighted-sums-of-measures]],
[[thm-monotone-convergence-for-the-integral]], [[def-measure]])

[F5] The scalar Poisson law has mass $e^{-a}a^k/k!$, probability generating
function $e^{a(s-1)}$, and is normalized for $a\ge0$.
([[def-scalar-poisson-count-law]],
[[lem-poisson-count-law-normalization-and-moments]])

[F6] Compact subsets of a Hausdorff space are closed.
([[def-compact-space]], [[def-hausdorff-space]],
[[thm-compact-subset-of-a-hausdorff-space-is-closed]])

[A1] Countable choice is assumed only to invoke [F3].
([[def-countable-choice]])

[A2] Dependent choice is assumed only to invoke [F3].
([[def-dependent-choice]])

## Proof
**Proof technique:** direct.

1.1 Put $K_0=\varnothing$, $A_1=K_1$, and $A_i=K_i\setminus K_{i-1}$ for $i\ge2$. By [F6], each $K_i$ is closed, so the disjoint sets $A_i$ are Borel and cover $S$. Since $A_i\subseteq K_i$, countable additivity of the measure gives $\nu(A_i)\le\nu(K_i)<\infty$, hence $\nu_i(B):=\nu(B\cap A_i)$ is finite. If $i>m$, then $A_i\cap K_m=\varnothing$. [given, F1, F4, F6, construct]

2.1 For each $i$, let $\Omega_i$ be the explicit finite-intensity mixed-binomial space from [F2] for $\nu_i$ (a one-point space when $\nu_i=0$), with law $P_i$ and coordinate counting measure $\eta_i$. The countable product theorem [F3], under [A1]-[A2], supplies a probability space on which all these coordinates are independent. Each $\eta_i$ is supported on $A_i$ almost surely: its count on $S\setminus A_i$ is Poisson with mean zero by [F2], hence zero almost surely. [given, step 1.1, F2, F3, A1, A2, construct]

3.1 Define $\eta(B)=\sum_{i\ge1}\eta_i(B)$ for Borel $B$. The countable sum is a measure by [F4], and its evaluations are measurable as increasing limits of finite sums. It is a counting measure because the coordinate construction lists finitely many point locations per cell and the countable union of those lists is countable. If $C$ is compact, [F1] gives $C\subseteq K_m$ for some $m$; then $\eta(C)=\sum_{i=1}^m\eta_i(C)<\infty$, because later cells avoid $K_m$ and each of the first $m$ coordinates contains finitely many points. Thus $\eta$ is a point process with locally finite realizations. [given, F1, F2, F4, step 1.1, step 2.1, construct]

3.2 Fix pairwise-disjoint Borel sets $B_1,\ldots,B_r$ and write $N_{ij}=\eta_i(B_j)$ and $a_{ij}=\nu_i(B_j)$. By [F2], within each row $i$ the $N_{ij}$ are independent Poisson variables of means $a_{ij}$; rows are independent by [F3] and [A1]-[A2], so all finitely many variables in the first $n$ rows are independent. For independent $X\sim\operatorname{Pois}(a)$ and $Y\sim\operatorname{Pois}(b)$, direct convolution gives $\mathbb P(X+Y=k)=e^{-(a+b)}\sum_{l=0}^k a^lb^{k-l}/(l!(k-l)!)=e^{-(a+b)}(a+b)^k/k!$ by the binomial theorem. Iterating this identity shows that $N_j^{(n)}=\sum_{i=1}^nN_{ij}$ are independent across $j$ with laws $\operatorname{Pois}(a_j^{(n)})$, where $a_j^{(n)}=\sum_{i=1}^na_{ij}$. [given, F2, F3, F5, A1, A2, step 2.1, algebra]

4.1 The counts $N_j^{(n)}$ increase to $N_j=\eta(B_j)$ and $a_j^{(n)}\uparrow a_j:=\nu(B_j)$. For finite $a_j$, the events $\{N_j^{(n)}\le k_j\text{ for every }j\}$ decrease to $\{N_j\le k_j\text{ for every }j\}$; continuity from above follows by applying [F4] to their complementary increasing indicators. Their probabilities, computed from step 3.2, converge to $\prod_j\sum_{k=0}^{k_j}e^{-a_j}a_j^k/k!$. Inclusion-exclusion over the finitely many lower rectangles then gives the product of Poisson point masses for every count vector, proving independence and the desired laws when all $a_j<\infty$. [step 3.2, F4, F5, algebra]

5.1 If $a_j=\infty$, then for each integer $M\ge0$, continuity from above gives $\mathbb P(N_j\le M)=\lim_n e^{-a_j^{(n)}}\sum_{k=0}^M(a_j^{(n)})^k/k!=0$. The limit is zero because $e^{-t}t^k\to0$ for each fixed $k$, as follows from $e^t\ge t^{k+1}/(k+1)!$. Hence $N_j=\infty$ almost surely. Applying the finite-coordinate argument of step 4.1 to the coordinates with finite $a_j$, while the infinite-mean coordinates are almost surely constant at $+\infty$, gives the required extended independent-count convention for the whole family. [step 3.2, step 4.1, F5, algebra]

6.1 Steps 3.1, 3.2, 4.1, and 5.1 prove local finiteness and the independent Poisson count laws. The only choice principles used are [A1]-[A2] for the countable product in step 2.1. [step 2.1, step 3.1, step 3.2, step 4.1, step 5.1, A1, A2] ∎
