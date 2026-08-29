---
id: thm-topological-manifolds-are-metrizable-and-paracompact
kind: theorem
title: "Topological manifolds are metrizable and paracompact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-topological-manifold-without-boundary,
       prop-topological-manifolds-are-locally-compact-and-locally-path-connected,
       thm-topological-manifolds-are-sigma-compact,
       thm-locally-compact-hausdorff-basics,
       thm-second-countable-implies-lindelof,
       lem-regular-lindelof-spaces-are-paracompact,
       cor-urysohn-metrization]
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
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §1, Theorem 1.4"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Assume the choice principles carried by the cited topology results:
$\mathrm{AC}_\omega$ for the Lindelof step and the Axiom of Choice for the
metrization corollary. Then every topological manifold is regular, metrizable,
and paracompact.

## Facts & Assumptions

**Given:** A topological manifold $M$, together with the choice hypotheses named in the Statement.

[F1] A topological manifold is Hausdorff and second countable ([[def-topological-manifold-without-boundary]]).

[F2] A topological manifold is locally compact ([[prop-topological-manifolds-are-locally-compact-and-locally-path-connected]]).

[F3] In a locally compact Hausdorff space, every point has an open neighbourhood with compact closure inside any given open neighbourhood; in particular such a space is regular ([[thm-locally-compact-hausdorff-basics]]).

[L1] Assuming $\mathrm{AC}_\omega$, every second-countable space is Lindelof ([[thm-second-countable-implies-lindelof]]).

[L2] Assuming $\mathrm{AC}_\omega$, every regular Lindelof space is paracompact ([[lem-regular-lindelof-spaces-are-paracompact]]).

[L3] Assuming the Axiom of Choice, every regular $T_1$ second-countable space is metrizable ([[cor-urysohn-metrization]]).

[A1] Every Hausdorff space is $T_1$.

## Proof

**Proof technique:** direct.

1.1 By [F1] the manifold $M$ is Hausdorff and second countable, and by [F2] it is locally compact. Therefore [F3] applies and shows that $M$ is regular. [F1, F2, F3]

2.1 The second-countability hypothesis from [F1] and the declared $\mathrm{AC}_\omega$ assumption let us apply [L1], so $M$ is Lindelof. Then [L2] applies to the regular space of step 1.1 and yields paracompactness. [F1, L1, L2, step 1.1]

2.2 By [A1], the Hausdorff property in [F1] implies $T_1$. Hence [L3] applies to the regular, $T_1$, second-countable space $M$ and yields metrizability. [F1, L3, A1, step 1.1]

3.1 Step 1.1 proves regularity, step 2.1 proves paracompactness, and step 2.2 proves metrizability. The theorem [[thm-topological-manifolds-are-sigma-compact]] is recorded in the dependency closure because it is another global consequence of the same convention, though it is not needed in the chosen proof route here. [step 1.1, step 2.1, step 2.2] ∎
