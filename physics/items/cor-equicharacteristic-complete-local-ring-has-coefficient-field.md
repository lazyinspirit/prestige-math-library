---
id: cor-equicharacteristic-complete-local-ring-has-coefficient-field
kind: corollary
title: "Complete equicharacteristic local rings have coefficient fields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-equicharacteristic-local-ring-and-coefficient-field]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Melvin Hochster, The structure theory of complete local rings"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf"
    - title: "The Stacks Project, Section 10.160: The Cohen structure theorem"
      url: "https://stacks.math.columbia.edu/tag/0323"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice.

Every complete equicharacteristic Noetherian local ring contains a coefficient
field.

## Facts & Assumptions

**Given:** A complete equicharacteristic Noetherian local ring $(A,\mathfrak m)$ and the Axiom of Choice.

[L1] Stacks, Section 10.160, Theorem 10.160.8 gives a coefficient ring in every complete local ring; in the equicharacteristic case that coefficient ring is a field.

[L2] A coefficient field is exactly a subfield mapping isomorphically to the residue field ([[def-equicharacteristic-local-ring-and-coefficient-field]]).

## Proof

**Proof technique:** apply the Cohen structure theorem directly.

1.1 By [L1], the complete local ring $A$ contains a coefficient ring $\Lambda\subseteq A$. Because $A$ is equicharacteristic, the cited source says that $\Lambda$ is a field mapping isomorphically to $A/\mathfrak m$. [L1, given, choose]

2.1 By [L2], any such subfield is a coefficient field in the library's terminology. Therefore $\Lambda$ is a coefficient field of $A$. [L2, step 1.1]

3.1 Therefore every complete equicharacteristic Noetherian local ring has a coefficient field. [step 2.1] ∎
