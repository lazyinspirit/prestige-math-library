---
id: def-simplicial-horn-and-kan-fibration
kind: definition
title: "Simplicial horns and Kan fibrations"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 2
justified_by: []
aliases: []
deps:
  - def-simplicial-set-homotopy-and-trivial-kan-fibration
  - def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Goerss-Schemmerhorn, Model Categories and Simplicial Methods"
      url: "https://arxiv.org/pdf/math/0609537"
      locator: "Simplicial horn and corner definitions 4.9-4.12; exact source statements used as route, unprinted prerequisite arguments expanded locally"
    - title: "The Stacks Project, Chapter 14 (Simplicial Methods)"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
      locator: "Sections 14.5-14.8, 14.24.1-14.24.3 and Section 14.31.1 (horn inclusions and Kan fibrations)"
---

## Definition

Work with the standard simplices $\Delta[n]$
([[def-simplicial-set-homotopy-and-trivial-kan-fibration]]). For $n\ge1$ and
$0\le k\le n$ the **$k$-th horn** $\Lambda^k[n]$ is the union of the
codimension-one faces $\partial_i\Delta[n]\cong\Delta[n-1]$, $i\ne k$, inside
$\Delta[n]$; equivalently, $\Lambda^k[n]_m$ consists of those order-preserving
$[m]\to[n]$ that factor through a face $[n-1]\to[n]$ omitting an index
$i\ne k$. The inclusion $\Lambda^k[n]\hookrightarrow\Delta[n]$ is the
**horn inclusion**; for $n=1$ the two horns are the two vertices and the
inclusions are the vertex inclusions, and for $n=0$ there is no horn.

A **Kan fibration** is a map $p\colon X\to Y$ of simplicial sets with the right
lifting property against every horn inclusion: every commutative square
$$\begin{array}{ccc} \Lambda^k[n] & \longrightarrow & X\\ \downarrow & & \downarrow\\ \Delta[n] & \longrightarrow & Y \end{array}$$
with $n\ge1$, $0\le k\le n$ admits a diagonal lift. A simplicial set $X$ is
**Kan** when its unique map $X\to\Delta[0]$ to a point is a Kan fibration,
i.e. every horn in $X$ extends to a simplex. A **trivial Kan fibration** in the
sense of [[def-simplicial-set-homotopy-and-trivial-kan-fibration]] is a map
with the same lifting property for all boundary inclusions
$\partial\Delta[n]\hookrightarrow\Delta[n]$, $n\ge0$; a trivial Kan fibration is in particular a Kan fibration. For a horn
lifting problem in dimension $n$, the prescribed faces specify the entire
boundary of its missing $(n-1)$-face: intersect that face with the other
faces. First use boundary lifting in dimension $n-1$ to supply the missing
face over the corresponding face of the target simplex (for $n=1$ this is
the degree-zero lift of a vertex). The now-complete boundary lifts in
dimension $n$, producing the required horn filler.

For inclusions $i\colon K\to L$ and $j\colon K'\to L'$ of simplicial sets,
their **pushout product** is
$$i\,\square\,j\colon (K\times L')\ \cup_{K\times K'}\ (L\times K')\longrightarrow L\times L',$$
the map from the pushout of the two inclusions $K\times L'\to L\times L'$
and $L\times K'\to L\times L'$. A map is **anodyne** here when it is a
composite of maps obtained by cobase change (pushout) from coproducts
$\coprod_\alpha(\Lambda^{k_\alpha}[n_\alpha]\hookrightarrow\Delta[n_\alpha])$
of horn inclusions. A map with the horn lifting property lifts against every
anodyne map by successive lifting along the defining composites and coproduct
factors; when the defining family is set-indexed, the simultaneous choice of
lifts uses the Axiom of Choice ([[def-axiom-of-choice]]), while finitely
presented composites require no choice. These are lifting and construction
definitions; they do not assert that a model structure on simplicial sets has
been constructed.
