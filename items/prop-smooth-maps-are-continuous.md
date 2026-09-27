---
id: prop-smooth-maps-are-continuous
kind: proposition
title: "Smooth maps are continuous"
status: published
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
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

**Given:** Smooth manifolds $M,N$, a map $F:M\to N$, a point $p$, and $r\ge1$ such that $F$ is $C^r$ at $p$.

[F1] The published definition requires $F$ to be continuous at $p$ before calling it $C^r$ at $p$. It also requires smooth charts $(U,\varphi)$ at $p$ and $(V,\psi)$ at $F(p)$ with $F(U)\subseteq V$ for which the representative $\psi\circ F\circ\varphi^{-1}$ is $C^r$ near $\varphi(p)$ ([[def-c-r-and-smooth-maps-between-smooth-manifolds]], [[def-ck-and-multi-index-notation-in-several-variables]]).

[F2] Charts are homeomorphisms ([[def-manifold-chart-coordinate-domain-and-coordinate-functions]]).

[L1] A map with continuous first partial derivatives is totally differentiable and therefore continuous ([[thm-continuous-partial-derivatives-imply-total-differentiability]], [[thm-total-differentiability-gives-a-local-linear-bound-and-continuity]]).

[L2] Continuity is local on the source, and composites of continuous maps are continuous ([[lem-continuity-is-local-and-pastes]]).

## Proof

**Proof technique:** direct.

1.1 Continuity at $p$ follows immediately from the definition in [F1]. The same definition requires continuity on an open set when a map is called $C^r$ there. Thus the first and open-set conclusions hold directly, including the $r=0$ case. [F1]

1.2 The coordinate condition gives the same conclusion directly when $r\ge1$: on a neighbourhood of $\varphi(p)$, the representative has continuous first partial derivatives and is continuous by [L1]. There $F=\psi^{-1}\circ(\psi\circ F\circ\varphi^{-1})\circ\varphi$. Charts and their inverses are continuous by [F2], so this composite is continuous near $p$. The required chart neighbourhood with $F(U)\subseteq V$ is already part of [F1]. [F1, F2, L1, L2]

2.1 A smooth map is $C^1$, and continuity on an open set also follows pointwise. The chart calculation in step 1.2 is compatible with, but not needed for, the continuity premise built into the published definition. [F1, step 1.1, step 1.2] ∎
