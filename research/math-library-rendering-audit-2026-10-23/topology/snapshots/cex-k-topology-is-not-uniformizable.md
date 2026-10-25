---
id: cex-k-topology-is-not-uniformizable
kind: counterexample
title: "The $K$-topology on $\\mathbb{R}$ is not uniformizable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-uniformizable-spaces-are-regular, lem-the-k-topology-is-hausdorff-and-not-regular]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "R. Gardner, Introduction to Topology, notes on Munkres Section 31: The Separation Axioms (East Tennessee State University)", url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-31.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Statement refuted

The $K$-topology on $\mathbb R$ is uniformizable.

## Facts & Assumptions

**Given:** The $K$-topology on $\mathbb R$.

[L1] Every uniformizable space is regular ([[lem-uniformizable-spaces-are-regular]]).

[L2] The $K$-topology is Hausdorff and not regular ([[lem-the-k-topology-is-hausdorff-and-not-regular]]).

## Counterexample

**Proof technique:** contradiction.

1.1 Suppose the $K$-topology were uniformizable. [assume-contra]

2.1 It would be regular by [L1]. [step 1.1, L1]

3.1 This contradicts its nonregularity in [L2]. [step 2.1, L2]

4.1 Therefore the supposition is false, and the $K$-topology is not uniformizable. [step 3.1, discharge-contradiction] ∎
