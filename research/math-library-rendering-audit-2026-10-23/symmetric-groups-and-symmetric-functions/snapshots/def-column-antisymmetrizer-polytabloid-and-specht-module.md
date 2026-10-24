---
id: def-column-antisymmetrizer-polytabloid-and-specht-module
kind: definition
title: Column antisymmetrizers, polytabloids, and Specht modules
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-partition-young-diagram-and-conjugate-partition, def-young-tableau-standard-tableau-and-shape, def-row-and-column-stabilizers-of-a-tableau, def-young-subgroup-tabloid-and-permutation-module, def-inversions-inversion-number-and-sign]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Chapter 3, Definition 3.8, printed p. 12"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Sections 1.8 and 2.1, printed pp. 16-22"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
---

## Definition

Let $n\ge 0$, let $\lambda\vdash n$, and let $t$ be a $\lambda$-tableau
([[def-partition-young-diagram-and-conjugate-partition]],
[[def-young-tableau-standard-tableau-and-shape]]). Use the left action of
$S_n$ on tableaux, tabloids, and $M^\lambda$
([[def-young-subgroup-tabloid-and-permutation-module]]). For each
$\gamma\in C_t$, let $\operatorname{sgn}(\gamma)$ be its inversion sign in
$S_n$. The order-preserving relabelling
$\iota_n:\{1,\ldots,n\}\to\{0,\ldots,n-1\}$, $i\mapsto i-1$, carries each
inversion pair $(i,j)$ bijectively to $(i-1,j-1)$; thus this sign is exactly
the published inversion sign on the finite ordinal
([[def-inversions-inversion-number-and-sign]]). For $n=0$, both groups are
trivial and the sign is $1$.

The **column antisymmetrizer**, **polytabloid**, and **Specht space** are
$$\kappa_t:=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma\quad\in\mathbb C[S_n],\qquad e_t:=\kappa_t\cdot\{t\}\quad\in M^\lambda,\qquad S^\lambda:=\operatorname{span}_{\mathbb C}\{e_s:s\text{ is a }\lambda\text{-tableau}\}.$$
The elements of the sum are in the finite subgroup $C_t$, and each acts by the
declared left action on the tabloid basis, so these are well-defined finite
expressions.

For every tableau, $C_t\cap R_t=\{1\}$: a permutation in both stabilizers
preserves the row and column of each entry, and each row-column intersection
contains at most one node. Thus $\gamma\{t\}$ are distinct as $\gamma$ ranges
over $C_t$, and the coefficient of $\{t\}$ in $e_t$ is $1$. In particular,
$e_t\ne0$. When $n=0$, the empty tableau has $C_t=\{1\}$, so
$\kappa_t=1$, $e_t=\{\varnothing\}$, and $S^\varnothing=\mathbb C$.
