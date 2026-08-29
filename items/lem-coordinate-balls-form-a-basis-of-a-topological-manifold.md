---
id: lem-coordinate-balls-form-a-basis-of-a-topological-manifold
kind: lemma
title: "Coordinate balls form a basis of a topological manifold"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-manifold-without-boundary,
       def-manifold-chart-coordinate-domain-and-coordinate-functions,
       cor-euclidean-closed-balls-and-spheres-are-compact]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.1"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Let $M$ be a topological $n$-manifold and let $p\in M$. For every open
neighbourhood $O$ of $p$ there is a chart $(U,\varphi)$ of $M$ at $p$ and an
open Euclidean ball $B(c,r)\subseteq\mathbb R^n$ such that

$$p\in \varphi^{-1}[B(c,r)]\subseteq O,\qquad \overline{B(c,r)}\subseteq \varphi(U).$$

Consequently the sets $\varphi^{-1}[B(c,r)]$ of this form constitute a basis of
the topology of $M$. Their closures in $M$ are compact.

## Facts & Assumptions

**Given:** A topological $n$-manifold $M$, a point $p\in M$, and an open neighbourhood $O$ of $p$.

[F1] Every point of a topological manifold has a chart $(U,\varphi)$ onto an open subset of $\mathbb R^n$ ([[def-topological-manifold-without-boundary]], [[def-manifold-chart-coordinate-domain-and-coordinate-functions]]).

[L1] For $n\ge 1$, Euclidean closed balls are compact ([[cor-euclidean-closed-balls-and-spheres-are-compact]]).

[A1] If $W\subseteq\mathbb R^n$ is open and $x\in W$, then there exists $r>0$ with $\overline{B(x,r)}\subseteq W$; this is the usual metric-ball shrinking property of Euclidean open sets.

[A2] Homeomorphisms preserve openness, closures inside their domains, and compactness of subsets.

## Proof

**Proof technique:** direct.

1.1 By [F1] choose a chart $(U,\varphi)$ of $M$ at $p$. Since $O$ is open and $p\in U\cap O$, replacing $U$ by $U\cap O$ and $\varphi$ by its restriction still gives a chart at $p$ whose image is the open set $\varphi(U\cap O)$ in $\mathbb R^n$. So we may assume from the start that $U\subseteq O$. [given, F1, choose]

2.1 Put $c:=\varphi(p)$. Because $\varphi(U)$ is open, [A1] gives $r>0$ with $\overline{B(c,r)}\subseteq\varphi(U)$. Then $p\in\varphi^{-1}[B(c,r)]\subseteq U\subseteq O$. This gives the required coordinate ball inside $O$. [A1, step 1.1, choose]

3.1 The closure of $\varphi^{-1}[B(c,r)]$ in $M$ is contained in $\varphi^{-1}[\overline{B(c,r)}]$, and [A2] identifies $\varphi^{-1}[\overline{B(c,r)}]$ with the homeomorphic image of the Euclidean closed ball $\overline{B(c,r)}$. For $n\ge1$ this set is compact by [L1], hence its homeomorphic image is compact by [A2] and the smaller closure in $M$ is compact as a closed subset of a compact set. When $n=0$, the chart image is the one-point space $\mathbb R^0$, so the same conclusion is immediate. [L1, A2, step 2.1]

4.1 Since step 2.1 works for every point $p$ and every open neighbourhood $O$ of $p$, the coordinate balls form a basis of the topology of $M$. [step 2.1] ∎
