---
id: thm-infinite-sigma-algebra-has-continuum-many-members
kind: theorem
title: "Assuming countable choice, every infinite sigma-algebra contains a copy of the power set of the natural numbers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-listed-infinite-sigma-algebra-has-a-disjoint-sequence, def-countable-choice, thm-countable-union-of-countable, thm-cantor-powerset, def-equinumerous, def-sigma-algebra, def-countable]
aliases: []
landmark: true
short: "$\\mathcal P(\\mathbb N)\\hookrightarrow\\mathcal A$"
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Exercise 2.6"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
pipeline_run: null
---

## Statement

Assume $\mathrm{AC}_\omega$. If $\mathcal A$ is an infinite sigma-algebra on
$X$, then there is an injection $\mathcal P(\mathbb N)\to\mathcal A$.
Consequently $\mathcal A$ is uncountable ([[def-countable]]).

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and an infinite sigma-algebra $\mathcal A$ on $X$.

[L1] Countable choice selects one member from every sequence of nonempty sets ([[def-countable-choice]]).

[L2] A sigma-algebra with an injective sequence of members contains a sequence of pairwise disjoint nonempty members ([[lem-listed-infinite-sigma-algebra-has-a-disjoint-sequence]]).

[L3] A sigma-algebra is closed under countable unions ([[def-sigma-algebra]]).

[L4] The power set of a set is strictly larger than the set itself ([[thm-cantor-powerset]]), with domination expressed by injections ([[def-equinumerous]]).

[L5] An at most countable set is finite or equinumerous with $\mathbb N$, and in either case it injects into $\mathbb N$ ([[def-countable]]).

[L6] Under $\mathrm{AC}_\omega$, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]]).

## Proof

**Proof technique:** constructive.

1.1 For each $m\ge1$, let $I_m$ be the nonempty set of injections $m\to\mathcal A$. By [L1] choose $f_m\in I_m$. By [L6], the union of the finite ranges $f_m[m]$ is at most countable. It is infinite because it has subsets of every finite size, so [L5] makes it countably infinite; a bijective listing is therefore an injective sequence in $\mathcal A$. [L1, L5, L6, construct]

2.1 By [L2], fix pairwise disjoint nonempty $D_n\in\mathcal A$. For $S\subseteq\mathbb N$, define $\Phi(S):=\bigcup_{n\in S}D_n$, which lies in $\mathcal A$ by [L3]. [step 1.1, L2, L3, construct]

3.1 If $S\ne T$, the least index in $S\mathbin\triangle T$ belongs to exactly one of them, and its nonempty $D_n$ is contained in exactly one of $\Phi(S),\Phi(T)$ by disjointness. Thus $\Phi$ is injective. If $\mathcal A$ were at most countable, [L5] would give an injection $j:\mathcal A\to\mathbb N$; the map that sends $j(\Phi(S))$ to $S$ and every natural number outside $j[\Phi[\mathcal P(\mathbb N)]]$ to $\varnothing$ would then be a surjection $\mathbb N\to\mathcal P(\mathbb N)$, contrary to [L4]. Hence $\mathcal A$ is uncountable. [step 2.1, L4, L5, discharge-construct] ∎
