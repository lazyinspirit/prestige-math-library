---
id: ex-generalized-dihedral-group-of-the-klein-four-group
kind: example
title: ' $\operatorname{Dih}(C_2\times C_2)$ is the direct product $(C_2\times C_2)\times C_2$'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-generalized-dihedral-group, prop-semidirect-product-is-direct-iff-action-is-trivial]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The generalized dihedral group of the Klein four group is

$$\operatorname{Dih}(C_2\times C_2)\cong(C_2\times C_2)\times C_2.$$

## Facts & Assumptions

**Given:** The group $A=C_2\times C_2$.

[L1] $\operatorname{Dih}(A)$ is the semidirect product of $A$ by $C_2$ under inversion ([[def-generalized-dihedral-group]]).

[L2] A semidirect product is the direct product exactly when its defining action is trivial ([[prop-semidirect-product-is-direct-iff-action-is-trivial]]).

## Verification

**Proof technique:** direct.

1.1 Every $a\in C_2\times C_2$ satisfies $a^2=1$, hence $a^{-1}=a$. The inversion automorphism is therefore the identity. [algebra]

2.1 The action in [L1] is trivial by step 1.1, so [L2] gives the displayed direct product. [step 1.1, L1, L2] ∎
