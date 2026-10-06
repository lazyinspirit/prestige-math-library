---
id: def-simplicial-set-homotopy-and-trivial-kan-fibration
kind: definition
title: "Simplicial sets, homotopies and trivial Kan fibrations"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
justified_by: []
aliases: []
deps:
  - def-simplicial-object-and-simplicial-commutative-ring
  - def-functor-and-contravariant-functor
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Chapter 14 (Simplicial Methods)"
      url: "https://stacks.math.columbia.edu/download/simplicial.pdf"
      locator: "Sections 14.11, 14.21, 14.26 and Definition 14.30.1 (tag 08NL), printed 55"
---

## Definition

A **simplicial set** is a contravariant functor from the simplex category
$\Delta$ to the category of sets
([[def-simplicial-object-and-simplicial-commutative-ring]],
[[def-functor-and-contravariant-functor]]); thus a simplicial set $X$ assigns
a set $X_k$ to each $[k]$ and a map $X_k\to X_l$ to each order-preserving
$[l]\to[k]$, contravariantly.

For $n\ge0$ put $\Delta[n]_k=\operatorname{Hom}_\Delta([k],[n])$, the
**standard $n$-simplex**. Its **boundary** $\partial\Delta[n]$ is the
subfunctor consisting of the non-surjective maps $[k]\to[n]$; this is a
simplicial set, and $\partial\Delta[0]$ is empty, since the only map
$[0]\to[0]$ is surjective. A non-surjective order-preserving map factors
through a proper face $[n-1]\to[n]$, and a surjective map contains the
distinguished nondegenerate $n$-simplex and therefore lies outside the
boundary. Thus, for $n\ge1$, the boundary is exactly the union of the
images of the proper face inclusions $\Delta[n-1]\to\Delta[n]$. Products and pullbacks of simplicial sets are computed degreewise,
because the functor category $\operatorname{Fun}(\Delta^{\mathrm{op}},
\mathrm{Set})$ has limits and colimits formed objectwise.

A **simplicial homotopy** from $f$ to $g$, for maps $f,g\colon X\to Y$ of
simplicial sets, is a map $H\colon X\times\Delta[1]\to Y$ whose restrictions
to $X\times\{0\}$ and $X\times\{1\}$ are $f$ and $g$; here
$\Delta[1]=\operatorname{Hom}_\Delta(-,[1])$ and $\{0\},\{1\}$ are the two
vertices of $\Delta[1]$. A simplicial set is **contractible** here when it is
homotopy equivalent in this sense to the one-point constant simplicial set
$\Delta[0]$, i.e. when there are maps in both directions whose composites are
simplicially homotopic to the identities.

A map $p\colon X\to Y$ of simplicial sets is a **trivial Kan fibration** when
every commutative square
$$\begin{array}{ccc} \partial\Delta[n] & \longrightarrow & X\\ \downarrow & & \downarrow\\ \Delta[n] & \longrightarrow & Y \end{array}$$
with $n\ge0$ admits a diagonal lift $\Delta[n]\to X$ making both triangles
commute. In degree zero the left vertical map is the inclusion
$\varnothing\to\Delta[0]$, so the lifting condition says exactly that
$p_0\colon X_0\to Y_0$ is surjective. The term thus specifies lifting of
boundaries, not merely a quasi-isomorphism of the associated complexes, and no
choice principle is needed to state it.
