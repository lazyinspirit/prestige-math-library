---
id: prop-components-of-a-topological-manifold-are-open-and-at-most-countable
kind: proposition
title: "Components of a topological manifold are open and at most countable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-manifold-without-boundary,
       prop-topological-manifolds-are-locally-compact-and-locally-path-connected,
       thm-components-partition-and-are-closed,
       thm-locally-connected-iff-components-of-open-sets-are-open]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Let $M$ be a topological manifold. Then every connected component of $M$ is
open. Moreover the set of connected components of $M$ is at most countable.

## Facts & Assumptions

**Given:** A topological manifold $M$.

[F1] A topological manifold is second countable ([[def-topological-manifold-without-boundary]]).

[F2] A topological manifold is locally path connected ([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]]).

[L1] In a locally connected space, the connected components of every open set are open; applied to the open set $M$ itself, this makes components of $M$ open ([[thm-locally-connected-iff-components-of-open-sets-are-open]]).

[L2] Connected components partition the space and are pairwise disjoint ([[thm-components-partition-and-are-closed]]).

[A1] Every path-connected open neighbourhood is connected, so local path connectedness implies local connectedness.

## Proof

**Proof technique:** direct.

1.1 By [F2] every point of $M$ has a path-connected open neighbourhood; by [A1] such a neighbourhood is connected, so $M$ is locally connected. Therefore [L1] applied to the open set $M$ shows that every connected component of $M$ is open. [F2, L1, A1]

2.1 Because $M$ is second countable by [F1], choose a countable basis [F1, step 1.1, choose] $\mathcal B=(B_n)_{n\in\mathbb N}$. Let $\mathcal C$ be the set of connected components of $M$. By step 1.1 each $C\in\mathcal C$ is a nonempty open set, so there exists at least one index $n$ with $B_n\subseteq C$ and $B_n\neq\varnothing$. Choose the least such index and call it $m(C)$. [F1, step 1.1, choose]

3.1 If $C,D\in\mathcal C$ and $m(C)=m(D)=n$, then $B_n\subseteq C\cap D$. [L2, step 2.1] Since components are disjoint by [L2], this forces $C=D$. Thus $C\mapsto m(C)$ is injective from $\mathcal C$ into $\mathbb N$, so $\mathcal C$ is at most countable. [L2, step 2.1]

4.1 Step 1.1 proves openness of components and step 3.1 proves that there are at most countably many of them. [step 1.1, step 3.1] ∎
