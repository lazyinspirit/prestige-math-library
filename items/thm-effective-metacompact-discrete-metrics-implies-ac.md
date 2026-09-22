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
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
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
$\mathcal{V}$ which covers $X$, and a map $a : \mathcal{V} \to \mathcal{U}$ with
$V \subseteq a(V)$ for every $V \in \mathcal{V}$. Then the Axiom of Choice holds
([[def-axiom-of-choice]], [[def-metacompact-space]],
[[def-cover-refinement-and-local-finiteness]]).

## Facts & Assumptions

**Given:** The effective-metacompactness hypothesis, including that each supplied refining family covers the space; an arbitrary family $\mathcal F$ of nonempty sets.

[F1] Multiple choice and its equivalence with AC: in ZF, MC is equivalent to AC, and MC asserts that every family of nonempty sets admits a function assigning to each member a nonempty finite subset ([[def-multiple-and-dependent-multiple-choice]], [[thm-multiple-choice-equivalent-to-choice-in-zf]]).

[F2] On the discrete metric space $X := (\mathcal F \times \{0\}) \cup (\bigcup \mathcal F \times \{1\})$ with the discrete metric, every subset is open, and the family $\mathcal{U} := \{\, \{(x,1),(F,0)\} : x \in F \in \mathcal F \,\}$ is an open cover of $X$: a point $(F,0)$ with $F \in \mathcal F$ lies in $\{(x,1),(F,0)\}$ for each $x \in F$, and a point $(x,1)$ with $x \in F \in \mathcal F$ lies in $\{(x,1),(F,0)\}$ ([[def-metric-space]], [[def-metric-topology]], [[thm-metric-open-set-algebra]]).

[L1] A point-finite family is one every point of which belongs to only finitely many members; a refinement map is a function on the refining family whose value at each member contains it ([[def-cover-refinement-and-local-finiteness]], [[def-choice-function]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal F$ be an arbitrary family of nonempty sets and let $X := (\mathcal F \times \{0\}) \cup (\bigcup \mathcal F \times \{1\})$ carry the discrete metric; the two tags keep the family and its members apart, so that the zero-tagged family member is uniquely recovered from each cover pair. Explicitly, $d(u,v)=0$ if $u=v$ and $1$ otherwise satisfies separation and symmetry; if $u\ne w$, at least one of $u\ne v$ or $v\ne w$ holds, proving the triangle inequality. Each radius-$1/2$ ball is a singleton, so every subset is open. No disjointness of the members of $\mathcal F$ is used. [given, F2]

2.1 The family $\mathcal{U}$ of [F2] is an open cover of $X$ by [F2], so by the hypothesis applied once to this cover there are a point-finite open refinement $\mathcal{V}$ which covers $X$ and a map $a : \mathcal{V} \to \mathcal{U}$ with $V \subseteq a(V)$ for all $V \in \mathcal{V}$; no global refinement operator is assumed, only this one per-cover existential pair. [step 1.1, F2, L1]

3.1 For each $F \in \mathcal F$ let $C(F) := \{\, V \in \mathcal{V} : (F,0) \in V \,\}$, the set of refinement members through the point $(F,0)$ of the space; $C(F)$ is nonempty because $\mathcal{V}$ covers $X$, and finite because $\mathcal{V}$ is point-finite at $(F,0)$. [step 2.1, L1]

4.1 Define $f(F) := \{\, x \in F : a(V) = \{(x,1),(F,0)\} \text{ for some } V \in C(F) \,\}$; then each $V\in C(F)$ determines a unique $x$ by its image pair (the one-tagged point); thus $f(F)$ is the image of the finite set $C(F)$ under a uniquely defined function. It is a finite subset of $F$, and it is nonempty because for $V \in C(F)$ one has $(F,0) \in V \subseteq a(V)$ and $a(V) \in \mathcal{U}$, so $a(V) = \{(x,1),(F',0)\}$ with $x \in F' \in \mathcal F$; now $(F,0) \in a(V)$ forces $(F,0) = (F',0)$, that is $F' = F$, because the alternative $(F,0) = (x,1)$ would give $0 = 1$. Hence $a(V) = \{(x,1),(F,0)\}$ with $x \in F$, as required. [step 2.1, step 3.1, L1]

5.1 The assignment $F \mapsto f(F)$ is therefore a function on the family $\mathcal F$ of nonempty sets whose values are nonempty finite subsets, which is Multiple Choice for $\mathcal F$, including the empty family via the empty function. For any indexed family $(X_i)_{i\in I}$ apply this construction to its set of values $\mathcal F=\{X_i:i\in I\}$ and compose to get $i\mapsto f(X_i)$; repeated values cause no difficulty. Since the original family was arbitrary, MC holds, and by [F1] the Axiom of Choice holds. [step 4.1, F1] ∎
