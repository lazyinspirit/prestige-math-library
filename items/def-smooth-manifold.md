---
id: def-smooth-manifold
kind: definition
title: "Smooth manifolds and their smooth charts"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-topological-manifold-without-boundary,
       thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Definition

A **smooth $n$-manifold** is a pair $(M,\mathcal S)$ in which $M$ is a
topological $n$-manifold
([[def-topological-manifold-without-boundary]]) and $\mathcal S$ is a **smooth
structure** on $M$: a maximal smooth atlas
([[thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas]]).
Because
[[thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas]] sends
every smooth atlas to the unique maximal atlas containing it, a smooth manifold
is equivalently specified by a topological manifold $M$ together with any one
smooth atlas $\mathcal A$, the structure being the generated $[\mathcal A]$. A
chart $(U,\varphi)\in\mathcal S$ is called a **smooth chart** (or a **chart of
the smooth structure**); its domain is a **coordinate domain** and its
coordinate functions are **smooth coordinates** on $U$. When the structure is
clear from context, the manifold itself is written $M$ in place of
$(M,\mathcal S)$.

## Remarks

- **The maximal atlas is the structure.** Two smooth atlases present the same
  smooth manifold exactly when they generate the same maximal atlas, which by
  [[thm-each-smooth-atlas-is-contained-in-a-unique-maximal-smooth-atlas]] holds
  exactly when their union is again a smooth atlas.

- **A smooth chart is a chart of the structure, nothing more.** Membership in
  $\mathcal S$ is what licenses calling a coordinate map smooth; a chart that is
  merely a homeomorphism onto an open set need not be smooth relative to
  $\mathcal S$.
