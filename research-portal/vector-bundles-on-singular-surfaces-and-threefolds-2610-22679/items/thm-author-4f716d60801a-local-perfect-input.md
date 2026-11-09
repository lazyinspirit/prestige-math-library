---
id: thm-author-4f716d60801a-local-perfect-input
kind: theorem
title: External local perfection and summand closure
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: The Stacks Project, Cohomology of Sheaves, Perfect complexes
      url: https://stacks.math.columbia.edu/tag/08CL
      locator: Definition 20.49.1 and Lemmas 20.49.2, 20.49.3, 20.49.7 and 20.49.9
      statement: Perfection is a local derived property; for local stalk rings it is
        characterized by local bounded finite locally free representatives.
        Perfect objects satisfy two-out-of-three in distinguished triangles and
        are closed under direct summands.
      hypotheses: Ringed spaces for local invariance, triangle and summand closure;
        local stalk rings for the finite locally free characterization.
      reading_limits: Inspected the definition and displayed triangle and
        direct-summand statements. The referenced strictification,
        pseudo-coherence and Tor-amplitude arguments are imported and not
        reconstructed.
dependency_level: 0
---

## Statement
Assume the Axiom of Choice. Perfection on a ringed space is invariant under isomorphism in the derived category and is local. When all stalk rings are local, it means local equivalence to a bounded complex of finite locally free modules. Perfect objects satisfy two-out-of-three in distinguished triangles and are closed under direct summands. Scheme stalk rings are local.

## Source contract
**Given:** A ringed space, with local stalk rings for the finite locally free characterization.

**Goal:** Record local invariance and closure under triangles and direct summands.

[F1] The cited Stacks definition and lemmas supply these assertions.

## External input
Import [F1] with its stated reading limits. The local strictification and direct-summand arguments are not claimed as local reconstructions.
