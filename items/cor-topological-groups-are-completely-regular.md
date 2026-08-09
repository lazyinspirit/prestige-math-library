---
id: cor-topological-groups-are-completely-regular
kind: corollary
title: "Every topological group is uniformizable, and assuming dependent choice it is completely regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-topological-group-uniformities-induce-the-given-topology, thm-uniformizable-iff-completely-regular, def-dependent-choice]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "M. Megrelishvili, Lecture Notes in Topological Groups", url: "https://u.math.biu.ac.il/~megereli/TGrNotes070217.pdf"}, {title: "M. Kunzinger, General Topology", url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"}]
pipeline_run: null
---

## Statement

Every topological group is uniformizable. Assuming dependent choice, every topological group is completely regular.

## Facts & Assumptions

**Given:** A topological group.

[L1] Its left uniformity induces its given topology ([[thm-topological-group-uniformities-induce-the-given-topology]]).

[L2] Under dependent choice, uniformizable spaces are completely regular ([[thm-uniformizable-iff-completely-regular]], [[def-dependent-choice]]).

## Proof

**Proof technique:** direct.

1.1 The left uniformity of [L1] makes the group uniformizable. [L1]

2.1 Under dependent choice, [L2] applied to step 1.1 makes it completely regular. [step 1.1, L2] ∎
