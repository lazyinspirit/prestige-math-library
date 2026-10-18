---
id: fs-centralizer-of-the-fitting-subgroup-is-always-contained-in-the-fitting-subgroup
kind: false-statement
title: "FALSE: the Fitting subgroup always contains its centralizer"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-fitting-centralizer-without-solvability, thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "D. A. Craven, Finite Group Theory, Theorem 2.13"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

**False claim.** For every finite group $G$, one has $C_G(F(G))\le F(G)$.

## Facts & Assumptions

**Given:** The Fitting subgroup and its centralizer in a finite group.

[L1] For $A_5$, one has $F(A_5)=1$ and $C_{A_5}(F(A_5))=A_5$ ([[cex-fitting-centralizer-without-solvability]]).

[L2] If $G$ is finite and solvable, then $C_G(F(G))\le F(G)$ ([[thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group]]).

## Refutation

**Proof technique:** direct.

1.1 For $A_5$, [L1] gives $F(A_5)=1$ and $C_{A_5}(F(A_5))=A_5$. [L1]

2.1 Thus the claimed inclusion fails for $A_5$. The valid theorem [L2] has finite solvability as a hypothesis, and $A_5$ lies outside that hypothesis. [step 1.1, L2]

3.1 The strict failure in step 1.1 refutes the hypothesis-free claim. [step 1.1, step 2.1] ∎
