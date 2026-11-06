---
id: def-cmp-heterotic-associated-vector-bundle
kind: definition
title: Associated holomorphic bundle in a heterotic representation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Angel M. Uranga, String Theory: A Graduate Course, Lecture 9: Calabi–Yau compactification and Heterotic String phenomenology"
      url: "https://members.ift.uam-csic.es/auranga/lect13.pdf"
      locator: "PDF pp. 16–19: holomorphic gauge bundles, the tangent-bundle standard embedding, and the representation decomposition. The chart-gluing definition below is supplied locally."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Purely mathematical chart construction of a holomorphic associated vector bundle; no heterotic spectrum or stability theorem is asserted."
---

## Definition

Let $n\ge0$ and let $X$ be a **complex $n$-manifold**, meaning a Hausdorff, second-countable space with an atlas of charts to open subsets of $\mathbb C^n$ whose transition maps are biholomorphic. Let $(U_i)_{i\in I}$ be an open cover of $X$. A **complex Lie group** $H$ is a finite-dimensional complex manifold equipped with a group structure for which multiplication and inversion are holomorphic. Let $g_{ij}:U_i\cap U_j\to H$ be holomorphic maps, for all $i,j\in I$, satisfying $g_{ii}=e$, $g_{ij}g_{jk}=g_{ik}$ on triple intersections, and $g_{ji}=g_{ij}^{-1}$. Let $W$ be a complex vector space of finite dimension $r$, and let $\rho:H\to\mathrm{GL}_{\mathbb C}(W)$ be a holomorphic group homomorphism, where $\mathrm{GL}_{\mathbb C}(W)$ is the group of invertible complex-linear maps $W\to W$; this is a finite-dimensional holomorphic representation. The **associated holomorphic vector bundle in representation $\rho$** is the rank-$r$ bundle obtained by gluing the local products $U_i\times W$ with transition maps from the $j$-coordinates to the $i$-coordinates given by $(x,w_j)\mapsto(x,\rho(g_{ij}(x))w_j)$. Its local sections are holomorphic maps $s_i:U_i\to W$ satisfying $s_i=\rho(g_{ij})s_j$ on overlaps. In a heterotic application, $H$ is the declared structure group of the gauge bundle and $\rho$ is the chosen representation sector; the mathematical definition does not choose an embedding into $E_8\times E_8$ or $\operatorname{Spin}(32)/\mathbb Z_2$.

## Definition references

[[def-cmp-heterotic-cy3-bundle-compactification]]

## Facts & Assumptions

**Given:** The complex manifold $X$, the holomorphic transition cocycle $g_{ij}$, the holomorphic representation $\rho$, and the finite-dimensional representation space $W$.

[A1] The cocycle is part of the supplied bundle atlas; this definition makes no claim that an arbitrary collection of maps satisfying only some cocycle equations defines a global principal bundle.

## Proof

**Given:** The data in the Definition and [A1].

1.1 Each map $\rho(g_{ij})$ is holomorphic and invertible because $g_{ij}$ is holomorphic and $\rho$ is a holomorphic group homomorphism into $\mathrm{GL}(W)$. On a triple overlap, $\rho(g_{ij})\rho(g_{jk})=\rho(g_{ij}g_{jk})=\rho(g_{ik})$, and the diagonal and inverse identities follow from $g_{ii}=e$ and $g_{ji}=g_{ij}^{-1}$. Thus the stated gluing maps satisfy the vector-bundle cocycle identities. [given, A1, algebra]

2.1 The cocycle identities make the local products $U_i\times W$ into a rank-$r$ bundle atlas, and their holomorphic transition maps make its total-space charts holomorphic. The compatibility equation for $s_i$ is exactly the equality of the local representatives under this gluing. Therefore the construction is a well-defined holomorphic vector bundle with the stated local sections. [step 1.1] ∎
