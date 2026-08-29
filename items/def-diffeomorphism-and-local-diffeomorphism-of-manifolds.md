---
id: def-diffeomorphism-and-local-diffeomorphism-of-manifolds
kind: definition
title: "Diffeomorphisms and local diffeomorphisms of manifolds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-c-r-and-smooth-maps-between-smooth-manifolds,
       prop-smooth-maps-are-continuous,
       prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-29
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.4"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Definition

Let $M$ and $N$ be smooth manifolds. A **diffeomorphism** from $M$ to $N$ is a
bijective smooth map $F:M\to N$ whose inverse $F^{-1}:N\to M$ is smooth. Since
a bijective smooth map and its smooth inverse are both continuous
([[prop-smooth-maps-are-continuous]]), every diffeomorphism is a homeomorphism,
but the converse fails. The manifolds $M$ and $N$ are **diffeomorphic**, written
$M\cong N$, when a diffeomorphism $M\to N$ exists.

Let $F:M\to N$ be a smooth map. Then $F$ is a **local diffeomorphism** when
every $p\in M$ has an open neighbourhood $U\subseteq M$ such that $F(U)$ is
open in $N$ and the corestriction $F|_{U}^{F(U)}:U\to F(U)$ is a
diffeomorphism onto the open submanifold $F(U)$
([[prop-an-open-subset-of-a-smooth-manifold-has-a-canonical-restricted-smooth-structure]]).

## Remarks

- **Smoothness of the inverse is not automatic.** A bijective smooth map need
  not be a diffeomorphism, and this is exactly why the definition demands
  smoothness of $F^{-1}$ outright: the map $F(x)=x^3$ on $\mathbb R$ is smooth
  and bijective, but $F^{-1}(y)=y^{1/3}$ is not differentiable at $0$.

- **A diffeomorphism is a local diffeomorphism.** Taking $U=M$ at every point
  exhibits a diffeomorphism as a local diffeomorphism; no local inverse other
  than the global inverse is needed.
