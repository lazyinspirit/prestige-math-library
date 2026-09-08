---
id: def-complete-metric-baire-principle-over-zf
kind: definition
title: "The complete-metric Baire principle over ZF"
status: draft
origin: pipeline
deps: [def-complete-metric-space, def-metric-interior-closure-boundary, def-indexed-family, def-indexed-union-and-intersection]
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Miller, Lecture notes on set theory without choice; Definitions 4.2\u20134.4, p.8; Proposition 5.4, p.10"
      url: https://people.math.wisc.edu/~awmille1/old/m873-08/ac.pdf
    - title: "Karagila, Zornian Functional Analysis, Definition 4 and Chapter 2, pp. 4–5, 8–11"
      url: https://karagila.org/wp-content/uploads/2016/10/axiom-of-choice-in-analysis.pdf
---

## Definition

Work in ZF. Let $(X,d)$ be a metric space. Closure, interior and density are
as in [[def-metric-interior-closure-boundary]], with all complements relative
to $X$. Families indexed by $\omega$ are functions, as in [[def-indexed-family]],
and their unions and intersections are those of [[def-indexed-union-and-intersection]].

A set $N\subseteq X$ is **nowhere dense** if
$\operatorname{int}_X(\overline N)=\varnothing$.
A set $M\subseteq X$ is **meagre** if there exists a sequence $(N_n)_{n\in\omega}$
of nowhere dense subsets of $X$ such that $M\subseteq\bigcup_{n\in\omega}N_n$.
A set $C\subseteq X$ is **comeagre** if $X\setminus C$ is meagre.

The space is **Baire** if, for every sequence $(U_n)_{n\in\omega}$ of open
dense subsets of $X$, the intersection $\bigcap_{n\in\omega}U_n$ is dense in $X$.
The **complete-metric Baire principle (CM-Baire)** asserts that every complete
metric space, in the sense of [[def-complete-metric-space]], is Baire.

This includes the empty space: its only subset is open and dense, its
$\omega$-indexed intersection is empty and dense in that space, and there
are no Cauchy sequences into it. The empty set is meagre in every space,
witnessed by $N_n=\varnothing$ for every $n$.

## Remarks

A witness is an actual sequence of nowhere dense sets. These definitions do
not assert that a countable union of sets merely known to be meagre is meagre:
choosing one decomposition for each such set would require a separate argument.
Miller, Definitions 4.2–4.4, p.8, motivates the convention; Karagila's warning
after Theorem 16, p.10, identifies the decomposition-selection issue. We use
containment in a union, so meagre subsets need not themselves be closed-set unions.
