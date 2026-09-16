---
id: thm-effective-metacompact-discrete-metrics-implies-ac
kind: theorem
title: "Effective metacompactness for discrete metric spaces implies AC"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-multiple-choice-equivalent-to-choice-in-zf, def-multiple-and-dependent-multiple-choice, def-metric-space, def-cover-refinement-and-local-finiteness, def-metacompact-space, thm-metric-open-set-algebra, def-metric-topology, def-choice-function]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "C. Good, I. J. Tree, and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://web.mat.bham.ac.uk/C.Good/research/pdfs/stone.pdf"
      locator: "Proposition 5, printed pp. 8-9"
---

## Statement

Over $\mathrm{ZF}$: suppose that for every discrete metrizable space $X$ and
every open cover $\mathcal{U}$ of $X$ there exist a point-finite open refinement
$\mathcal{V}$ and a map $a : \mathcal{V} \to \mathcal{U}$ with $V \subseteq a(V)$
for every $V \in \mathcal{V}$. Then the Axiom of Choice holds
([[def-axiom-of-choice]], [[def-metacompact-space]],
[[def-cover-refinement-and-local-finiteness]]).

## Facts & Assumptions

**Given:** The effective-metacompactness hypothesis; a pairwise disjoint family $F$ of nonempty sets.

[F1] Multiple choice and its equivalence with AC: in ZF, MC is equivalent to AC, and MC asserts that every family of nonempty sets admits a function assigning to each member a nonempty finite subset ([[def-multiple-and-dependent-multiple-choice]], [[thm-multiple-choice-equivalent-to-choice-in-zf]]).

[F2] On the discrete metric space $X = F \cup \bigcup F$ with the discrete metric, every subset is open, and the family $\mathcal{U} = \{\{x,F\} : x \in F \in F\}$ is an open cover of $X$ ([[def-metric-space]], [[def-metric-topology]], [[thm-metric-open-set-algebra]]).

[L1] A point-finite family is one every point of which belongs to only finitely many members; a refinement map is a function on the refining family whose value at each member contains it ([[def-cover-refinement-and-local-finiteness]], [[def-choice-function]]).

## Proof

**Proof technique:** direct.

1.1 Let $F$ be a pairwise disjoint family of nonempty sets and let $X := F \cup \bigcup F$ carry the discrete metric. [given, F2]

2.1 The family $\mathcal{U} := \{\, \{x,F\} : x \in F \in F \,\}$ is an open cover of $X$ by [F2], so by the hypothesis applied once to this cover there are a point-finite open refinement $\mathcal{V}$ and a map $a : \mathcal{V} \to \mathcal{U}$ with $V \subseteq a(V)$ for all $V \in \mathcal{V}$; no global refinement operator is assumed, only this one per-cover existential pair. [step 1.1, F2, L1]

3.1 For each $F \in F$ let $C(F) := \{\, V \in \mathcal{V} : F \in V \,\}$, the set of refinement members through the point $F$ of the space; $C(F)$ is nonempty because $\mathcal{V}$ covers $X$, and finite because $\mathcal{V}$ is point-finite at $F$. [step 2.1, L1]

4.1 Define $f(F) := \{\, x \in F : a(V) = \{x,F\} \text{ for some } V \in C(F) \,\}$; then $f(F)$ is a finite subset of $F$, and it is nonempty because each $V \in C(F)$ satisfies $V \subseteq a(V)$ and contains $F$, so $a(V)$, being a member of $\mathcal{U}$ that contains $F$, is one of the pairs $\{x,F\}$ with $x \in F$. [step 2.1, step 3.1, L1]

5.1 The assignment $F \mapsto f(F)$ is therefore a function on the family $F$ of nonempty sets whose values are nonempty finite subsets, which is Multiple Choice for $F$; since $F$ was arbitrary, MC holds, and by [F1] the Axiom of Choice holds. [step 4.1, F1] ∎
