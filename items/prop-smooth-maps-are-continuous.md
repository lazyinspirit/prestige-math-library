---
id: prop-smooth-maps-are-continuous
kind: proposition
title: "Smooth maps are continuous"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-c-r-and-smooth-maps-between-smooth-manifolds,
       def-manifold-chart-coordinate-domain-and-coordinate-functions,
       def-ck-and-multi-index-notation-in-several-variables,
       lem-chart-independence-of-c-r-smoothness,
       thm-continuous-partial-derivatives-imply-total-differentiability,
       thm-total-differentiability-gives-a-local-linear-bound-and-continuity,
       lem-continuity-is-local-and-pastes]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.4, Exercise 2.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2, Theorem 2.15"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Statement

Let $M$ and $N$ be smooth manifolds and let $F:M\to N$. If $F$ is of class
$C^r$ at $p$ for some $r\ge1$, then $F$ is continuous at $p$; the same holds
when $F$ is smooth at $p$. Consequently every map that is $C^r$ (or smooth) on
an open set is continuous on that open set. For $r=0$ continuity is part of the
definition and is asserted, not proved.

## Facts & Assumptions

**Given:** Smooth manifolds $M,N$, a map $F:M\to N$, a point $p$, and
$r\ge1$ such that $F$ is $C^r$ at $p$.

[F1] $C^r$ at $p$ means that for smooth charts $(U,\varphi)$ at $p$ and
$(V,\psi)$ at $F(p)$ with $F(U)\subseteq V$, the representative
$\psi\circ F\circ\varphi^{-1}$ is $C^r$ near $\varphi(p)$; for finite $r$ every
iterated coordinate partial derivative of order at most $r$ exists and is
continuous ([[def-c-r-and-smooth-maps-between-smooth-manifolds]],
[[def-ck-and-multi-index-notation-in-several-variables]]).

[F2] Charts are homeomorphisms
([[def-manifold-chart-coordinate-domain-and-coordinate-functions]]).

[L1] A map with continuous first partial derivatives is totally differentiable
and therefore continuous
([[thm-continuous-partial-derivatives-imply-total-differentiability]],
[[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]).

[L2] Continuity is local on the source, and composites of continuous maps are
continuous ([[lem-continuity-is-local-and-pastes]]).

## Proof

**Proof technique:** direct.

1.1 Choose smooth charts $(U,\varphi)$ at $p$ and $(V,\psi)$ at $F(p)$ with
$F(U)\subseteq V$. Since $r\ge1$, [F1] gives the representative
$\psi\circ F\circ\varphi^{-1}$ of class $C^r$, hence $C^1$, near $\varphi(p)$,
so its first partial derivatives exist and are continuous there; [L1] makes it
continuous on a neighbourhood of $\varphi(p)$. [given, F1, L1, choose]

1.2 On $U\cap F^{-1}(V)$ the map $F$ equals
$\psi^{-1}\circ\bigl(\psi\circ F\circ\varphi^{-1}\bigr)\circ\varphi$: the
three factors are continuous, $\varphi$ and $\psi^{-1}$ because [F2] makes
charts homeomorphisms and the middle factor by step 1.1, so [L2] makes the
composite continuous. The set $U\cap F^{-1}(V)$ contains a neighbourhood of
$p$ and the agreement holds there, so by the locality clause of [L2] the map
$F$ is continuous at $p$. [given, F2, L2, step 1.1]

2.1 The smooth case is the case $r=\infty$, which includes $r=1$; the assertion
on an open set follows by applying the pointwise statement at every point. For
$r=0$ the definition already requires continuity. [given, step 1.2] ∎
