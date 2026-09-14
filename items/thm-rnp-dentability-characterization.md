---
id: thm-rnp-dentability-characterization
kind: theorem
title: "RNP--dentability characterization"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-radon-nikodym-property, lem-dentable-average-ranges-give-vector-measure-densities, lem-nondentability-produces-a-vector-measure-without-density]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, Theorems 2.3 and 2.5, printed pp. 36--40"
pipeline_run: phase-2-next-18
---

## Statement

Assume the Axiom of Choice. A Banach space $X$ has the Radon--Nikodym property
if and only if every nonempty bounded closed convex subset of $X$ is dentable.

## Facts & Assumptions

[A1] The Axiom of Choice holds ([[def-axiom-of-choice]]).

[L1] RNP is the density property for absolutely continuous bounded-variation
vector measures ([[def-radon-nikodym-property]]).

[L2] Under AC, dentability of every nonempty bounded closed convex set supplies
all required vector-measure densities
([[lem-dentable-average-ranges-give-vector-measure-densities]]).

[L3] Under AC, any nondentable such set supplies an absolutely continuous
bounded-variation Lebesgue vector measure without a Bochner density
([[lem-nondentability-produces-a-vector-measure-without-density]]).

## Proof

**Proof technique:** direct.

**Given:** A Banach space $X$ and AC.

1.1 Prove the dentability-to-RNP implication. If every nonempty bounded closed convex subset of $X$ is dentable, [L2] applies and gives RNP. [given, A1, L2]

1.2 Prove the RNP-to-dentability implication. Assume $X$ has RNP. If a nonempty bounded closed convex set were nondentable, [L3] would give a finite-measure, absolutely continuous bounded-variation vector measure without a Bochner density, contradicting [L1]. Thus every such set is dentable. [given, A1, L1, L3]

2.1 Combine the implications and close the degenerate case. [A1, step 1.1, step 1.2] Steps 1.1 and 1.2 prove the equivalence. For the zero Banach space the only nonempty bounded closed convex sets are singletons, which are dentable by the zero-functional slice, and its only vector measure has the zero density. All AC use is inherited exactly from [L2] and [L3]. [A1, step 1.1, step 1.2] ∎