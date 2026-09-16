---
id: lem-corson-stone-obstruction-is-ordinal-boundable
kind: lemma
title: "Corson's Stone obstruction is ordinal boundable"
status: draft
origin: pipeline
deps: [def-corson-ordered-rational-permutation-model, lem-corson-rational-metric-not-metacompact, def-boundable-sentence-over-an-atom-set, def-metric-space, def-metacompact-space]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Samuel Corson, The Independence of Stone's Theorem from the Boolean Prime Ideal Theorem"
      url: "https://arxiv.org/pdf/2001.06513"
      locator: "§§2-3, pp. 2-4"
---

## Statement

The sentence asserting that there is a metric space with rational-valued metric
whose open cover by the rational balls of the construction has no point-finite
refinement is an atom-blind boundable sentence in the sense of
[[def-boundable-sentence-over-an-atom-set]], with the explicit absolute bound
$\omega + 41$ of the source's Lemma 5.

## Facts & Assumptions

**Given:** Corson's model and the covering failure certified in [[lem-corson-rational-metric-not-metacompact]].

[F1] Boundable sentences over an atom set: a formula is boundable when there is a fixed absolutely defined ordinal $\alpha$ such that ZFA proves the formula equivalent to its relativisation to $V_\alpha(\bigcup \vec x)$, and the sentence is the existential closure of such a formula ([[def-boundable-sentence-over-an-atom-set]]).

[F2] The metric space is the ordered rational Urysohn space of [[def-corson-ordered-rational-permutation-model]], its metric is rational-valued, and its open cover has no point-finite refinement ([[lem-corson-rational-metric-not-metacompact]], [[def-metric-space]], [[def-metacompact-space]]).

[L1] The construction objects: the underlying atom set, the rational metric as a set of triples, the rational parameters of the balls, the open cover, the candidate refinements, and the functions witnessing point-finiteness are all built from finitely many iterates of the power set over the atoms and the fixed rational codebook, so they all occur below the stated iterate height ([[def-boundable-sentence-over-an-atom-set]]).

## Proof

**Proof technique:** direct.

1.1 Expand the sentence of step [F2] into a membership formula: there is a set $X$ carrying a rational-valued metric $d$ satisfying the metric axioms, a family $\mathcal{U}$ of open balls with rational radii covering $X$, and for every family $\mathcal{V}$ of open sets that refines $\mathcal{U}$ and covers $X$ there is a point of $X$ belonging to infinitely many members of $\mathcal{V}$. [given, F2]

2.1 Each conjunct of step 1.1 is a membership statement about objects of the carried sorts: a metric is a function into the rationals with the three metric axioms, a ball is a definable subset, a cover and a refinement are families of subsets, and point-finiteness is a statement about the set of members through a point and the natural numbers. [step 1.1, L1]

3.1 The quantifiers relativise to $V_{\omega+41}(A)$: the space, its metric, the cover and every candidate refinement are constructed from the atom set, the fixed rational codebook and finitely many power-set iterates, so the relativised formula holds exactly when the original does, and the equivalence is provable in ZFA by the same coding lemmas that the source's Lemma 5 provides. [step 2.1, L1, F1]

3.2 The formula is atom-blind: its atomic tests are equality and membership on the carried sorts together with the fixed rational comparisons, and it never examines the internal structure of an atom. [step 2.1, F1]

4.1 By [F1] the relativised formula with its fixed bound $\omega+41$ is boundable, and its existential closure is the sentence of the statement; by [F2] that sentence holds in Corson's model. [step 3.1, step 3.2, F1, F2] ∎
