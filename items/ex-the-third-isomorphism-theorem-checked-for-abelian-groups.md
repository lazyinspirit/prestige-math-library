---
id: ex-the-third-isomorphism-theorem-checked-for-abelian-groups
kind: example
title: "The third isomorphism theorem in abelian groups matches the categorical statement"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-third-isomorphism-theorem-in-an-abelian-category, thm-third-isomorphism-theorem-modules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, VIII.3"
      url: "https://link.springer.com/book/10.1007/978-1-4757-4721-8"
pipeline_run: frontier-21
---

## Example

For nested subgroups $C\le B\le A$ of an abelian group, the quotient
$(A/C)/(B/C)$ is canonically isomorphic to $A/B$. This is exactly the
categorical third isomorphism theorem specialized to $\mathbf{Ab}$.

## Facts & Assumptions

**Given:** Subgroups $C\le B\le A$ of an abelian group.

[L1] The categorical third isomorphism theorem holds in every abelian category
([[thm-third-isomorphism-theorem-in-an-abelian-category]]).

[L2] The ordinary third isomorphism theorem holds for modules, hence for
abelian groups
([[thm-third-isomorphism-theorem-modules]]).

## Verification

**Proof technique:** direct.

1.1 Since abelian groups form an abelian category, [L1] applies to the inclusions $C\le B\le A$. [L1]

2.1 The resulting isomorphism is the familiar quotient-group map described by [L2], so the categorical statement reproduces the ordinary one without change. [L1, L2, step 1.1] ∎
