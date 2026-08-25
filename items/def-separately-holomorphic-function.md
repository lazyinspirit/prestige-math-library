---
id: def-separately-holomorphic-function
kind: definition
title: "Separately holomorphic functions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [rem-complex-euclidean-space-dictionary, def-complex-differentiability-holomorphic-and-entire, def-balls-and-polydiscs-in-complex-euclidean-space, def-metric-ball, def-metric-topology]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Definition

Fix $m\ge1$, let $U\subseteq\mathbb C^m$ be open and let $f:U\to\mathbb C$. For
$a\in U$ and $k<m$ write

$$U_{a,k}:=\{\zeta\in\mathbb C:(a_0,\dots,a_{k-1},\zeta,a_{k+1},\dots,a_{m-1})\in U\}$$

and let $f_{a,k}:U_{a,k}\to\mathbb C$ be the **$k$th slice**
$f_{a,k}(\zeta)=f(a_0,\dots,a_{k-1},\zeta,a_{k+1},\dots,a_{m-1})$.

The function $f$ is **separately holomorphic on $U$** when for every $a\in U$ and
every $k<m$ the slice $f_{a,k}$ is holomorphic on $U_{a,k}$ in the one-variable
sense of [[def-complex-differentiability-holomorphic-and-entire]].

Each $U_{a,k}$ is open: if $\zeta\in U_{a,k}$, the corresponding point of $U$ has
a ball $B(\cdot,\rho)\subseteq U$ by [[def-metric-topology]], and changing only
the $k$th coordinate by less than $\rho$ moves the point by less than $\rho$ in
the norm of [[rem-complex-euclidean-space-dictionary]], so the disc
$\{\xi:|\xi-\zeta|<\rho\}$ lies in $U_{a,k}$ ([[def-metric-ball]]).

## Remarks

**No continuity in the remaining variables is asked.** The condition constrains
each slice separately and says nothing about how the slices fit together: a
separately holomorphic function is not assumed continuous as a function on $U$,
and on this page the two theorems that supply joint regularity — Osgood's lemma
under continuity, and the locally bounded theorem — are what close that gap.

**The slice through a point of a polydisc is a disc.** If
$U=\Delta_r(a')$ is a polydisc ([[def-balls-and-polydiscs-in-complex-euclidean-space]])
and $a\in U$, then $U_{a,k}$ is the disc $\{\zeta:|\zeta-a'_k|<r_k\}$, which is
what lets the one-variable theory be applied one coordinate at a time with the
others held fixed.
