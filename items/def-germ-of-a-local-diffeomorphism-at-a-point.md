---
id: def-germ-of-a-local-diffeomorphism-at-a-point
kind: definition
title: "Germs of local diffeomorphisms at a point"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
deps:
  - def-germ-of-a-smooth-function-at-a-point
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-smooth-manifold
justified_by:
  - lem-germs-of-local-diffeomorphisms-form-a-group
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Leiden NCG seminar, Noncommutative Geometry of Foliations (2023 seminar notes)"
      url: "https://ncg-leiden.github.io/foliation2023/foliation_notes.pdf"
    - title: "Eckhard Meinrenken, Lie Groupoids and Lie Algebroids, lecture notes (University of Toronto MAT1341, Fall 2017)"
      url: "https://www.math.toronto.edu/mein/teaching/MAT1341_LieGroupoids/Groupoids.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $M$ and $N$ be smooth manifolds ([[def-smooth-manifold]]) and let $x\in M$
and $y\in N$. A **germ of local diffeomorphisms from $(M,x)$ to $(N,y)$** is an
equivalence class of local diffeomorphisms
$f:U\to V$ ([[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]]) with
$U$ open in $M$, $x\in U$, $V$ open in $N$, $y\in V$ and $f(x)=y$, two such
maps $f:U\to V$ and $f':U'\to V'$ being **equivalent** when they agree on some
open neighbourhood $W\subseteq U\cap U'$ of $x$. This is the germ-of-maps
relation of [[def-germ-of-a-smooth-function-at-a-point]], read for local
diffeomorphisms instead of functions; the class of $f$ is written
$\operatorname{germ}_x(f)$, or simply $\operatorname{germ}(f)$ when $x$ is
understood.

When $M=N$ and $x=y$, write $\operatorname{Diff}_x(M)$ for the set of germs of
local diffeomorphisms $(M,x)\to(M,x)$. For two germs
$[f],[g]\in\operatorname{Diff}_x(M)$ represented by local diffeomorphisms
$f:U\to V$ and $g:U'\to V'$ with $f(x)=g(x)=x$, the composite $f\circ g$ is
defined on $g^{-1}(U)\cap U'$, an open neighbourhood of $x$, and is again a
local diffeomorphism fixing $x$; the germ of this composite is declared to be
the **product** $[f]\cdot[g]$. The germ of $\mathrm{id}_M$ is declared to be
the identity, and the germ of a local inverse of a representative is declared
to be its inverse. That these declarations are well defined and satisfy the
group axioms is the content of
[[lem-germs-of-local-diffeomorphisms-form-a-group]]; in particular
$\operatorname{Diff}_x(M)$ is a group under this operation, and it is the
group of germs used for transverse diffeomorphisms on this page.
