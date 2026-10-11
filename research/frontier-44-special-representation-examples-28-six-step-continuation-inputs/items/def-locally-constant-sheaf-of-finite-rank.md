---
id: def-locally-constant-sheaf-of-finite-rank
kind: definition
title: "Locally constant sheaves of finite rank"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 0
deps: [def-topological-space, def-sheaf-on-topological-space,
       def-presheaf-of-groups-rings-modules, def-morphism-of-presheaves,
       def-restriction-sheaf-open-subspace,
       lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mark Goresky, Lecture Notes on Sheaves and Perverse Sheaves, version of June 26, 2026"
      url: "https://www.math.ias.edu/~goresky/pdf/all2.pdf"
      locator: "1(d) (locally constant sheaves, local systems), 9.1-9.2 (constructible sheaves)"
---

## Definition

Let $S$ be a topological space ([[def-topological-space]]), let $k$ be a field
and let $\mathcal F$ be a sheaf of $k$-vector spaces on $S$
([[def-sheaf-on-topological-space]],
[[def-presheaf-of-groups-rings-modules]]). Then $\mathcal F$ is **locally
constant of finite rank** if every point $x\in S$ has an open neighbourhood
$U\subseteq S$ for which there are an integer $n\ge0$ and an isomorphism of
sheaves on $U$
$$\mathcal F|_U\;\cong\;k_U^{\,n},$$
where $k_U$ is the constant sheaf on $U$ with value $k$ and $\mathcal F|_U$ is
the restriction of $\mathcal F$ to the open subspace $U$
([[def-restriction-sheaf-open-subspace]], [[def-morphism-of-presheaves]],
[[lem-constant-sheaf-is-the-sheaf-of-locally-constant-functions]]). A sheaf with
this property is also called a **finite-rank local system of $k$-vector spaces**
on $S$. This is a property of the sheaf on the space; no identification of such
sheaves with functors on the fundamental groupoid is part of the definition.

The sheaf $k_U^{\,n}$ is the $n$-fold direct sum of $k_U$ in the category of
sheaves of $k$-vector spaces, with $k_U^{\,0}$ the zero sheaf; its sections over
an open $W\subseteq U$ are the locally constant functions $W\to k^n$. The
integer $n$ is quantified locally, so no global rank is asserted and the rank
may differ from point to point; the definition asserts no existence of a global
trivialization. The final sentence records only that a functorial groupoid
presentation of local systems is a different, uncompared object here.
