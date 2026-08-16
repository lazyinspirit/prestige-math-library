---
id: cor-frattini-subgroup-is-contained-in-the-fitting-subgroup
kind: corollary
title: "The Frattini subgroup is contained in the Fitting subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-frattini-subgroup-is-nilpotent, thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

For every finite group $G$, $\Phi(G)\le F(G)$. See [[thm-frattini-subgroup-is-nilpotent]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] The Frattini subgroup of every finite group is nilpotent. ([[thm-frattini-subgroup-is-nilpotent]]).

[L2] For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. ([[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 The Frattini subgroup is characteristic, hence normal, and is nilpotent; maximality of the Fitting subgroup gives the inclusion. [L1, L2, given, algebra]

2.1 No finiteness beyond that of the Statement is used, and the degenerate case is consistent: for $G=\{1\}$ the family of maximal proper subgroups is empty, so $\Phi(G)=\{1\}=F(G)$ and the inclusion holds with equality. This proves the stated claim. [step 1.1, given, algebra] ∎
