---
id: fs-a-compact-hausdorff-group-is-profinite-without-total-disconnectedness
kind: false-statement
title: "FALSE: every compact Hausdorff topological group is profinite"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-topological-characterisation-of-profinite-groups, thm-compact-hausdorff-total-disconnectedness-and-total-separatedness-agree]
proof_strategy: "direct"
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

Every compact Hausdorff topological group is profinite.

## Facts & Assumptions

**Given:** The circle group $S^1=\{z\in\mathbb C:|z|=1\}$ under complex
multiplication.

[L1] A topological group is profinite only if it is compact, Hausdorff, and
totally disconnected ([[thm-topological-characterisation-of-profinite-groups]]).

## Refutation

**Proof technique:** direct.

1.1 The circle group $S^1$ is compact and Hausdorff in its Euclidean subspace topology, and it is a topological group under multiplication. [given]

2.1 The circle group is connected, so it is not totally disconnected. Therefore [L1] shows that it is not profinite. [L1, step 1.1]

3.1 This gives a compact Hausdorff group that is not profinite, so the statement is false. [step 1.1, step 2.1] ∎
