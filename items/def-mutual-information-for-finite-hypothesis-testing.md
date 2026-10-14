---
id: def-mutual-information-for-finite-hypothesis-testing
kind: definition
title: "Mutual information for a finite uniform hypothesis experiment"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-finite-cardinality
  - def-kullback-leibler-divergence
  - def-natural-logarithm
  - def-probability-measure
  - def-measure
  - def-radon-nikodym-derivative
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - thm-likelihood-ratio-change-of-measure
  - thm-natural-logarithm-laws
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 8, §8.4.4, equation (8.4.4)"
      url: "https://stanford.edu/class/stats311/lecture-notes.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
---

## Definition

Let $M\ge2$ be an integer, let $P_1,\ldots,P_M$ be probability measures on
one measurable sample space, and let $J$ be uniform on $[M]=\{1,\ldots,M\}$.
Conditional on $J=j$, let the observation $X$ have law $P_j$. Define the
mixture law
$$\bar P:=\frac1M\sum_{j=1}^M P_j$$
and the **mutual information** of this finite experiment by
$$I(J;X):=\frac1M\sum_{j=1}^M D(P_j\|\bar P).$$
The set function $\bar P$ is a probability measure: for disjoint measurable
sets $(A_m)$, countable additivity of the $P_j$ gives
$$\bar P\!\left(\bigcup_m A_m\right)=\frac1M\sum_{j=1}^M\sum_mP_j(A_m).$$
The finite sum commutes with the increasing partial-sum limits of these
nonnegative series, so
$$\frac1M\sum_{j=1}^M\sum_mP_j(A_m)=\sum_m\frac1M\sum_{j=1}^MP_j(A_m)=\sum_m\bar P(A_m),$$
so $\bar P$ is countably additive; also $\bar P(\varnothing)=0$ and
$\bar P(X)=1$. Here $D$ is the directional KL
divergence of [[def-kullback-leibler-divergence]], and logarithms are natural.
For every measurable $A$, $P_j(A)\le M\bar P(A)$, so $P_j\ll\bar P$. Let
$r_j=dP_j/d\bar P$ be a finite-valued nonnegative density representative
provided by [[def-kullback-leibler-divergence]]. If
$\bar P(\{r_j>M\})>0$, then for some integer $q\ge1$ the set
$E_q:=\{r_j\ge M+1/q\}$ has positive $\bar P$-measure. The change-of-measure
identity [[thm-likelihood-ratio-change-of-measure]] would give
$$P_j(E_q)=\int_{E_q}r_j\,d\bar P\ge(M+1/q)\bar P(E_q)>M\bar P(E_q),$$
contradicting $P_j(E_q)\le M\bar P(E_q)$. Hence $r_j\le M$ almost everywhere.
The densities also satisfy $M^{-1}\sum_{j=1}^M r_j=1$ $\bar P$-almost
everywhere: for each measurable $A$,
$$\bar P(A)=\frac1M\sum_{j=1}^MP_j(A)=\int_A\frac1M\sum_{j=1}^Mr_j\,d\bar P,$$
so $M^{-1}\sum_jr_j$ and the constant function $1$ are both densities of
$\bar P$ with respect to itself. They agree almost everywhere by
[[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]].
For $0\le t\le M$, the positive part of $t\log t$ is at most $M\log M$,
while its negative part is bounded by $1/e$ in
[[def-kullback-leibler-divergence]]. Thus every term in the finite sum is
well-defined and finite.

The uniform prior is part of this definition. A nonuniform prior requires its
own weights in the mixture and in the KL average.
