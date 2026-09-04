---
id: cor-henselian-local-simple-root-criterion
kind: corollary
title: "A local ring is Henselian exactly when simple residue roots lift uniquely"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henselian-pair-and-henselian-local-ring, cor-factor-hensel-implies-simple-root-hensel, lem-simple-root-form-recovers-factor-lifting]
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
    - title: "The Stacks Project, Section 10.153: Henselian local rings"
      url: "https://stacks.math.columbia.edu/tag/04GE"
pipeline_run: null
---

## Statement

Let $(A,\mathfrak m)$ be a local ring. Then $A$ is Henselian if and only if
every simple root of every monic polynomial over the residue field
$A/\mathfrak m$ lifts uniquely to a root over $A$.

## Facts & Assumptions

**Given:** A local ring $(A,\mathfrak m)$.

[L1] Henselian factor lifting implies unique simple-root lifting
([[cor-factor-hensel-implies-simple-root-hensel]]).

[L2] Unique simple-root lifting recovers the coprime factor-lifting property
([[lem-simple-root-form-recovers-factor-lifting]]).

[L3] A Henselian local ring is precisely a local ring whose maximal-ideal pair
is Henselian ([[def-henselian-pair-and-henselian-local-ring]]).

## Proof

**Proof technique:** prove the two implications separately.

1.1 If $A$ is Henselian, then [L3] identifies $(A,\mathfrak m)$ as a Henselian pair, and [L1] gives unique lifting of every simple residue root. [L1, L3, given]

1.2 Conversely, assume every simple residue root lifts uniquely. Then [L2] gives the coprime monic factor-lifting property for $(A,\mathfrak m)$. Since $\mathfrak m$ is the unique maximal ideal of the local ring, one has $\mathfrak m \subseteq J(A)$, so [L3] shows that $A$ is Henselian. [L2, L3, given]

2.1 Therefore a local ring is Henselian exactly when every simple residue root lifts uniquely. [step 1.1, step 1.2] ∎
