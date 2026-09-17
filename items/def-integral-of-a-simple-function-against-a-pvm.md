---
id: def-integral-of-a-simple-function-against-a-pvm
kind: definition
title: Integral of a simple function against a pvm
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-projection-valued-measure, def-complex-simple-function, def-measurable-space, def-countable-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.6.2, printed pp.277–279"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem, Proposition 5.3 and Definition 5.1, pp.16–18"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
---

## Definition

Assume Countable Choice. Let $(X,\Sigma)$ be a measurable space, let $H$ be a
complex Hilbert space, let $E$ be a projection valued measure on $(X,\Sigma)$,
and let $s:X\to\mathbb C$ be a complex simple function
([[def-complex-simple-function]], [[def-measurable-space]]). Present $s$ in
**disjoint normal form with a zero-coefficient complement**, that is

$$s=\sum_{j=1}^{m}a_j\mathbf 1_{B_j},$$

where $B_1,\dots,B_m\in\Sigma$ are pairwise disjoint with
$B_1\cup\dots\cup B_m=X$ and $a_1,\dots,a_m\in\mathbb C$; a representation over
a disjoint family whose union misses some measurable set is completed by adding
that set with the coefficient $0$, and any coefficient is allowed to vanish.
Then define

$$\int s\,dE:=\sum_{j=1}^{m}a_jE(B_j)\in\mathcal B(H).$$

Here $\mathbf 1_{B}$ is the indicator of $B$ and $E(B_j)$ is the value of the
projection valued measure on $B_j$ ([[def-projection-valued-measure]]).

**Well-definedness.** Because the $B_j$ are pairwise disjoint and cover $X$,
the operator $\sum_ja_jE(B_j)$ is a finite sum of bounded operators and hence a
bounded operator; the sum is meaningful in $\mathcal B(H)$ with the operator
norm, and $\|\sum_ja_jE(B_j)\|\le\max_j|a_j|$, since the projection values are
contractive and pairwise orthogonal. The value displayed a priori depends on
the chosen disjoint presentation of $s$; that it does not,
$\int s\,dE$ is independent of the disjoint presentation of $s$, is proved as
[[lem-simple-pvm-integral-is-representation-independent]] immediately below,
before the symbol is used. The normal-form convention $s=\sum_ja_j\mathbf 1_{B_j}$
with $B_1\cup\dots\cup B_m=X$ is the one used throughout this page, and the
identity $\int\mathbf 1_B\,dE=E(B)$ holds for every $B\in\Sigma$.
