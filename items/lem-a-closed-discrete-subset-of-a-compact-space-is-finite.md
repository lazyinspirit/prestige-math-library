---
id: lem-a-closed-discrete-subset-of-a-compact-space-is-finite
kind: lemma
title: "A closed discrete subset of a compact space is finite"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-compact-space, def-subspace-topology-top, def-topological-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Victor Guillemin and Alan Pollack, Differential Topology (Prentice-Hall 1974; complete 236-page PDF)"
      url: "https://www.math.auckland.ac.nz/~hekmati/Books/GP.pdf"
      locator: "Ch. 3 §4, printed pp. 126-127 (compactness produces finitely many fixed points in the splitting argument)"
    - title: "Peter Wong, Lectures on Fixed Point Theory, Mini-Course XV Encontro Brasileiro de Topologia, Rio Claro 2006 (complete notes)"
      url: "https://www.dm.ufscar.br/profs/ebt/history/2006/files/fixed_point.pdf"
      locator: "Lecture II §6, printed pp. 13-14 (fixed point sets are compact/finite in the index axioms)"
dependency_level: 0
---

## Statement

Let $X$ be a compact topological space ([[def-compact-space]]) and let
$S\subseteq X$ be closed and discrete, meaning that for every $s\in S$ there is
an open $U_s\subseteq X$ with $U_s\cap S=\{s\}$
([[def-subspace-topology-top]], [[def-topological-space]]). Then $S$ is finite.

## Facts & Assumptions

**Given:** A compact topological space $X$ and a closed subset $S\subseteq X$
such that for every $s\in S$ there is an open set $U\subseteq X$ with
$U\cap S=\{s\}$.

[F1] Every open cover of a compact space has a finite subcover, possibly
empty when $X=\varnothing$; a nonempty finite subcover can be listed as
$U_0,\dots,U_n$ with $X=U_0\cup\dots\cup U_n$ ([[def-compact-space]]).

[F2] A subset $S\subseteq X$ is closed exactly when $X\setminus S$ is open
([[def-topological-space]]).

## Proof

1.1 By [F2] the complement $X\setminus S$ is open; form the family $\mathcal U:=\{X\setminus S\}\cup\{\,U\subseteq X \text{ open}:\ U\cap S \text{ is a singleton}\,\}$, a set of open subsets of $X$ defined by comprehension, so forming it selects nothing. It is an open cover of $X$: a point $x\notin S$ lies in $X\setminus S$, and a point $s\in S$ lies in some open $U$ with $U\cap S=\{s\}$ by the hypothesis, and this $U$ is a member of $\mathcal U$. [given, F2]

2.1 By [F1] the cover $\mathcal U$ has a finite subcover. If it is empty, then $X=\varnothing$ and $S=\varnothing$ is finite. Otherwise list it as $U_0,\dots,U_n$. Each $U_i$ is $X\setminus S$ or open with $U_i\cap S=\{s_i\}$ a singleton, and $X\setminus S$ meets $S$ in nothing. Intersecting the covering relation $X=U_0\cup\dots\cup U_n$ with $S$ gives $S\subseteq\{s_i : U_i\cap S \text{ is a singleton}\}$, a finite set, so by the listing form of finiteness ([[def-compact-space]]) the set $S$ is finite; if no $U_i$ has a singleton trace then $S\subseteq\varnothing$, so $S=\varnothing$ and $S$ is finite as well. [step 1.1, F1] ∎
