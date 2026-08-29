---
id: cex-an-uncountable-disjoint-union-of-points-is-not-second-countable
kind: counterexample
title: "An uncountable disjoint union of points is not second-countable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable,
       def-disjoint-union-topology, def-second-countable-space]
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
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement refuted

An arbitrary disjoint union of second-countable manifolds is second-countable.

## Facts & Assumptions

**Given:** An uncountable disjoint union $X=\bigsqcup_{i\in I}\{\ast_i\}$ of
one-point spaces.

[L1] The A-page false statement already proves that such a space is discrete and
admits no countable basis
([[fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable]]).

[F1] The topology is the disjoint-union topology of [[def-disjoint-union-topology]],
and second countability means existence of an at most countable basis
([[def-second-countable-space]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], every singleton of $X$ is open and any basis of $X$ must contain [L1]
uncountably many distinct singleton sets. [L1]

2.1 Therefore $X$ is not second countable in the sense of [F1]. [F1, step 1.1]

3.1 So $X$ is the desired counterexample. [step 2.1] ∎
