---
id: cor-topological-poincare-recurrence-on-second-countable-spaces
kind: corollary
title: Topological recurrence on second-countable spaces
deps: ["thm-poincare-recurrence-for-finite-measure-preserving-systems", "def-second-countable-space", "thm-finite-and-countable-subadditivity-of-measures", "thm-well-ordering-principle"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: E–W Exercise 2.2.3 pp.22–23
      url: https://webspace.maths.qmul.ac.uk/f.vivaldi/teaching/ETAD/NotesI.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Let $X$ have a countable open basis contained in $\mathcal A$, and let $T$ preserve a finite measure $\mu$ on $(X,\mathcal A)$. Outside one measurable null set, every neighborhood of $x$ is revisited infinitely often by its positive orbit. If the topology is induced by a metric $d$, there are strictly increasing positive integers $n_j$ with $T^{n_j}x\to x$.

## Facts & Assumptions

[F1] Finite-measure recurrence applies to each measurable basis member. [[thm-poincare-recurrence-for-finite-measure-preserving-systems]].

[F2] A basis refines each open neighborhood at its point. [[def-second-countable-space]].

[F3] The exceptional union over the countable basis is null. [[thm-finite-and-countable-subadditivity-of-measures]].

[F4] Each nonempty set of eligible positive return times has a least member. [[thm-well-ordering-principle]].

## Proof

**Given:** Let $X$ have a countable open basis contained in $\mathcal A$, and let $T$ preserve a finite measure $\mu$ on $(X,\mathcal A)$. Outside one measurable null set, every neighborhood of $x$ is revisited infinitely often by its positive orbit. If the topology is induced by a metric $d$, there are strictly increasing positive integers $n_j$ with $T^{n_j}x\to x$.

1.1 For each basis member $B$ define its exceptional set explicitly as $N_B=B\cap\bigcup_{q\ge0}T^{-q}(B\setminus\bigcup_{n\ge1}T^{-n}B)$. The recurrence proof shows that $N_B$ is measurable and null. Thus $N=\bigcup_{B\in\mathcal B}N_B$ is measurable and null. This is a prescribed family, not a choice of null covers. A finite basis is handled by a finite union, and the empty space has no points to check. [F1, F3]

2.1 If $x\notin N$ and $U$ is a neighborhood of $x$, choose an open set $V$ with $x\in V\subseteq U$ and a basis member $B$ with $x\in B\subseteq V$. Since $x\notin N_B$, infinitely many positive iterates enter $B$, and hence $U$. [step 1.1, F2]

3.1 In the metric case set $n_0=0$ and let $n_j$ be the least integer exceeding $n_{j-1}$ for which $d(T^{n_j}x,x)<1/j$, for $j\ge1$. Infinitely many visits to the ball make this set nonempty. Least-element recursion supplies the sequence without countable choice; $n_j\ge j$ and the displayed bound proves convergence. [step 2.1, F4, algebra] ∎

