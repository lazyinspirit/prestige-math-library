---
id: rem-qec-distinguishability-architecture-background
kind: remark
domain: physics
title: Fault-tolerant overhead and monolithic inner codes
status: published
origin: session
deps:
  - def-qec-distinguishability-monolithic-encoding
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-inner-outer-resource-interface
  - math:def-countable-choice
dependency_roles:
  def-qec-distinguishability-monolithic-encoding: formulation-prerequisite
  def-qec-prereq-restricted-logical-channel: mathematical-premise
  def-qec-prereq-inner-outer-resource-interface: formulation-prerequisite
  math:def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Monolithic Quantum Error Correction in the Presence of Distinguishability
      url: https://arxiv.org/abs/2609.26946
      locator: PDF page 1, Introduction, first paragraph
      statement: The article says fault-tolerant overhead grows rapidly with physical
        error rate and describes monolithic encoding as a route to lower
        effective error rates, with dominant noise corrected and subdominant
        errors setting the residual floor; encoded qubits can then serve as
        physical qubits in a larger architecture.
      hypotheses: Qualitative architectural motivation in the first paragraph, without
        a specified overhead formula or universal noise model.
      reading_limits: The supplied extracted text of PDF page 1 was read. This
        citation attributes the article's motivation; its cited references and
        their evidence were not independently examined here.
physical_scope: Qualitative architectural motivation and conditional channel
  interface; no measured error rate, implemented device, universal overhead law,
  or guaranteed reduction in error is asserted.
formulation_deps:
  - def-qec-distinguishability-monolithic-encoding
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-inner-outer-resource-interface
argument_deps:
  - def-qec-distinguishability-monolithic-encoding
  - def-qec-prereq-restricted-logical-channel
  - def-qec-prereq-inner-outer-resource-interface
  - math:def-countable-choice
dependency_level: 2
---

## Remark

The article motivates monolithic quantum error correction by stating that fault-tolerant overhead grows rapidly with the physical error rate. Here a fault-tolerant architecture is a scheme designed to perform a logical task despite specified physical faults. Its overhead is a resource count, or a ratio to a stated reference count, for a stated task and target error tolerance; a physical error rate is a specified measure of noise at the physical level. The article does not state a quantitative overhead law in this passage.

In the proposed route, a monolithic code stores a logical qubit in the multilevel structure of a single physical system. The intended code corrects dominant noise processes, while remaining subdominant processes set a residual error floor: the remaining error after the modeled correction. The encoded qubit can then be used as a physical factor of a larger outer code, with the aim of a lower effective error rate. These are the article's qualitative architectural claims, not an assertion that every monolithic code achieves a reduction.

## Remark references

[[def-qec-distinguishability-monolithic-encoding]]

[[def-qec-prereq-restricted-logical-channel]]

[[def-qec-prereq-inner-outer-resource-interface]]

## Facts & Assumptions

[F1] In the finite-dimensional interface, a monolithic encoding is an isometry from a logical space into the space of one physical system; its image is the code. [[def-qec-distinguishability-monolithic-encoding]]

[F2] For encoding $V$, noise channel $\mathcal N$ and decoder $\mathcal R$, the decoded logical channel is $\mathcal E=\mathcal R\circ\mathcal N\circ\operatorname{Ad}_V$, where $\operatorname{Ad}_V(X)=VXV^*$. Exact correction means that a decoder can make $\mathcal E$ the identity channel. [[def-qec-prereq-restricted-logical-channel]]

[F3] An inner block can implement a physical factor of an outer code; comparisons require a specified error criterion, resource convention and model of correlations between blocks and cycles. A one-cycle decoded channel alone does not specify those correlations or a quantitative overhead law. [[def-qec-prereq-inner-outer-resource-interface]]

[A1] Adopt Countable Choice for the example in the monolithic-encoding interface where that hypothesis is used. [[math:def-countable-choice]]

## Interpretation

**Given:** The stated definitions, hypotheses and cited interfaces.

**Goal:** Justify the stated construction and its scope.

1.1 The interface in [F2] makes the effective channel precise once the encoding, noise and decoder are fixed.  [given, F1, F2, F3]

2.1 A lower effective error rate is a comparison under a specified error measure and baseline; it does not follow from encoding alone. The resource data in [F3] must also be fixed before translating such a comparison into an overhead claim. No independent experimental observation or numerical overhead estimate is asserted here. [F1, F2, F3, step 1.1] ∎
