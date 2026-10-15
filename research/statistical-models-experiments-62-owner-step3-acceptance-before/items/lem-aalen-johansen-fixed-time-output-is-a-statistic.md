---
id: lem-aalen-johansen-fixed-time-output-is-a-statistic
kind: lemma
title: "Fixed-time Aalen–Johansen outputs are well-defined statistics"
status: draft
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 3
deps:
  - alg-aalen-johansen-cumulative-incidence-estimator
  - def-measurable-function-between-measurable-spaces
  - def-statistic-and-estimator
  - thm-arithmetic-and-lattice-operations-preserve-measurability
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Lu Tian and Richard Olshen, Competing Risk and Alternatives to Cox Model, Stanford University STAT331, slides 2–12"
      url: "https://web.stanford.edu/~lutian/coursepdf/survweek11.pdf"
    - title: "Janne Pitkäniemi and Esa Läärä, Survival analysis with competing risks, Statistical Practice in Epidemiology using R, University of Tartu, slides 13–24"
      url: "https://bendixcarstensen.com/SPE/2015/h3-allslides.pdf"
---

## Statement

Fix $n\ge1$, finite $K$, and $t\ge0$, and let
$$\mathcal X=\big([0,\infty)\times\{0,1,\ldots,K\}\big)^n$$
carry its Borel sigma-algebra as a Euclidean subspace, where status $0$ denotes
censoring and status $k$ denotes an observed cause-$k$ event. Let $\mathsf E$
be any statistical experiment with sample space $(\mathcal X,\mathcal B(\mathcal X))$.
Equip
$\mathbb R^{K+1}$ with its Borel sigma-algebra. The output vector of
[[alg-aalen-johansen-cumulative-incidence-estimator]] at horizon $t$ is a
measurable map $\mathcal X\to\mathbb R^{K+1}$ and hence a statistic in
$\mathsf E$. Every event-time denominator $Y(u)$ is positive.

## Facts & Assumptions

**Given:** The statistical experiment, sample space, and fixed horizon in the Statement, with the procedure of [[alg-aalen-johansen-cumulative-incidence-estimator]].

[F1] [[alg-aalen-johansen-cumulative-incidence-estimator]]: $Y(u)=\sum_i\mathbf 1\{U_i\ge u\}$, and $\Delta N_k(u)=\sum_i\mathbf 1\{U_i=u,\delta_i=1,D_i^{\mathrm{obs}}=k\}$; updates use only event times with $\Delta N(u)>0$.

[F2] [[def-statistic-and-estimator]]: a statistic is a measurable map from the observation space to a measurable target space; an estimator is a statistic with the estimand's target space.

[F3] [[def-measurable-function-between-measurable-spaces]]: measurability means that the preimage of every target measurable set is measurable.

[F4] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: finite sums and products of real measurable functions are measurable wherever defined.

## Proof

1.1 For every $i,j$, the predicates $U_i\le t$, $U_i\le U_j$, $U_i=U_j$, and each finite-valued cause-status predicate define Borel subsets of $\mathcal X$: the coordinate-comparison sets are closed in the Euclidean sample space, and status slices are Borel in the finite status space. Hence $Y(U_i)$ and $\Delta N_k(U_i)$ are finite sums of measurable indicators by [F1] and [F4]. If $i$ is an event at $u=U_i$, then its indicator is included in $Y(u)$ and in $\Delta N(u)$, so $Y(u)\ge\Delta N(u)\ge1$. [F1, F3, F4, given]

2.1 For each event record the ratio $\Delta N_k(U_i)/Y(U_i)$ has finite range, since both counts lie in $\{0,\ldots,n\}$ and the denominator is in $\{1,\ldots,n\}$; each level set is a finite union of Borel count-level sets, so the ratio is measurable. The indicator selecting the first record at each distinct event time and the ordering of the at most $n$ event times are also determined by finitely many Borel equalities and inequalities. The updates in [F1] therefore form finite sums and products of measurable functions; [F4] makes every coordinate of the output vector measurable. By [F2] and [F3], this vector is a statistic, and step 1.1 proves its denominators are positive. [F1, F2, F3, F4, step 1.1, algebra] ∎

