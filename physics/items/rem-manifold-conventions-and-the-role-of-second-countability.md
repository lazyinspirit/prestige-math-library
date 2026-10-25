---
id: rem-manifold-conventions-and-the-role-of-second-countability
kind: remark
title: "Manifold conventions and the role of second countability"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-topological-manifold-without-boundary,
       thm-topological-manifolds-are-metrizable-and-paracompact,
       def-the-long-line]
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
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Remark

This library adopts the standard finite-dimensional convention that a
topological manifold is Hausdorff, second countable, and locally Euclidean
([[def-topological-manifold-without-boundary]]). The third condition gives the
local models; the first two are global control assumptions, and they are used
rather than merely recorded. In particular, under the explicit choice
hypotheses in [[thm-topological-manifolds-are-metrizable-and-paracompact]],
the global consequences proved on this page, such as metrizability and
paracompactness, use the second-countability part of the definition and do not
hold for arbitrary Hausdorff locally Euclidean spaces. The convention supplies
the topological hypotheses; the cited theorem separately records
$\mathrm{AC}_\omega$ for its Lindelof step and the Axiom of Choice for its
metrization step.

The long line ([[def-the-long-line]]) is the standard warning. It is built from
locally interval-like blocks, so it looks locally like a one-dimensional
manifold, but it fails the countability convention and is therefore excluded.

Different texts make different choices here. Some authors call every Hausdorff
locally Euclidean space a manifold and add countability only when they need it;
this library does not. The reason is structural rather than terminological: the
next page uses partitions of unity, and the topological hypotheses needed there
are already built into the present convention.
