---
id: def-smooth-partition-of-unity-on-a-manifold-with-boundary
kind: definition
title: "Smooth partition of unity on a manifold with boundary"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary, def-smooth-function-on-a-relatively-open-subset-of-a-half-space, def-cover-refinement-and-local-finiteness]
verification:
  verified:
    model: Codex
    verdict: locally-reviewed
    date: 2026-09-23
    scope: "Owner-authorized new repair prerequisite; bounded mathematical reading and local checks, no independent judge or whole-closure certification"
    delegated_by: owner
  precheck: n/a
sources:
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
---

## Definition

Let $M$ be a smooth manifold with boundary in the sense of
[[def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary]], and let
$(U_j)_{j\in J}$ be an indexed open cover of $M$. A **smooth partition of unity
subordinate to this cover** is a family $(\phi_j)_{j\in J}$ of functions
$\phi_j:M\to[0,1]$ such that:

1. every $\phi_j$ is smooth in boundary charts, using the local-extension
   convention of
   [[def-smooth-function-on-a-relatively-open-subset-of-a-half-space]];
2. the family $(\operatorname{supp}\phi_j)_{j\in J}$ is locally finite
   ([[def-cover-refinement-and-local-finiteness]]);
3. $\operatorname{supp}\phi_j\subseteq U_j$ for every $j$; and
4. $\sum_{j\in J}\phi_j(p)=1$ for every $p\in M$.

Here $\operatorname{supp}\phi_j$ is the closure in $M$ of
$\{p:\phi_j(p)\ne0\}$. Local finiteness makes the pointwise sum locally finite.
The definition includes $M=\varnothing$, when the zero family indexed by an
empty cover satisfies the conditions.
