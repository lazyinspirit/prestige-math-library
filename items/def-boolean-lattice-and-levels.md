---
id: def-boolean-lattice-and-levels
kind: definition
title: "The Boolean lattice of subsets of a finite set and its rank levels"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-graded-poset-and-rank, def-binomial-coefficient, cor-cardinality-of-the-power-set]
justified_by: []
aliases: []
landmark: true
verification:
  audited: 2026-07-31
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.2"
      url: "https://appliedcombinatorics.org/book/s_posets_subset-lattice.html"
pipeline_run: null
---

## Definition

For a finite set $A$, the **Boolean lattice** $B(A)$ is the finite power set
$\mathcal P(A)$ ([[cor-cardinality-of-the-power-set]]) ordered by inclusion.
Its rank function is

$$\rho(S):=|S|,$$

and its rank-$k$ level is

$$B(A)_k=[A]^k=\{\,S\subseteq A:|S|=k\,\}$$

([[def-binomial-coefficient]]). Indeed, $T$ covers $S$ exactly when
$T=S\cup\{a\}$ for one $a\in A\setminus S$, so a cover increases cardinality
by one. The unique minimal element is $\varnothing$, of rank $0$, and hence
$B(A)$ is graded ([[def-graded-poset-and-rank]]).

If $|A|=n$, then the rank-$k$ level has cardinality
$\binom nk$. The meet and join in this inclusion order are intersection and
union, respectively.
