---
id: fs-an-arbitrary-disjoint-union-of-second-countable-manifolds-is-second-countable
kind: false-statement
title: "An arbitrary disjoint union of second-countable manifolds need not be second-countable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds,
       def-disjoint-union-topology, def-second-countable-space]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.3"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

**False claim:** an arbitrary disjoint union of second-countable manifolds is
second-countable.

## Facts & Assumptions

**Given:** An uncountable set $I$ and the disjoint union $X=\bigsqcup_{i\in I}\{\ast_i\}$ of one-point manifolds.

[F1] In the disjoint union topology, a subset of $X$ is open exactly when each trace on each summand is open ([[def-disjoint-union-topology]]).

[F2] A space is second countable when it has an at most countable basis ([[def-second-countable-space]]).

[L1] The countable-union theorem on the A page requires the index set to be at most countable ([[prop-countable-disjoint-unions-of-fixed-dimensional-smooth-manifolds-are-smooth-manifolds]]).

## Refutation

**Proof technique:** direct.

1.1 Each singleton $\{\kappa_i(\ast_i)\}$ is open in $X$: its trace on the [F1] $i$-th summand is the whole one-point space, and on every other summand it is empty, so [F1] makes it open. Thus $X$ is an uncountable discrete space. [F1]

2.1 If $\mathcal B$ were a basis of $X$, then for each $i\in I$ the open set [step 1.1, assume-hyp] $\{\kappa_i(\ast_i)\}$ would contain some $B_i\in\mathcal B$ with $\kappa_i(\ast_i)\in B_i\subseteq\{\kappa_i(\ast_i)\}$, forcing $B_i=\{\kappa_i(\ast_i)\}$. Distinct points therefore require distinct basis elements, so every basis is uncountable. [step 1.1, assume-hyp]

3.1 Hence $X$ is not second countable by [F2]. This is exactly why [L1] keeps the countability hypothesis explicit. [F2, L1, step 2.1] ∎
