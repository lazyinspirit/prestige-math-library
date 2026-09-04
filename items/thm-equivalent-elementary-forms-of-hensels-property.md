---
id: thm-equivalent-elementary-forms-of-hensels-property
kind: theorem
title: "Equivalent elementary forms of Hensel's property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henselian-pair-and-henselian-local-ring, cor-henselian-local-simple-root-criterion]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 15.11: Henselian pairs"
      url: "https://stacks.math.columbia.edu/tag/09XD"
    - title: "The Stacks Project, Section 10.153: Henselian local rings"
      url: "https://stacks.math.columbia.edu/tag/04GE"
pipeline_run: null
---

## Statement

For a local ring $(A,\mathfrak m)$, the following are equivalent:

1. $A$ is Henselian.
2. Every simple root of every monic polynomial over $A/\mathfrak m$ lifts uniquely to $A$.
3. For every finite $A$-algebra $B$, the map from idempotents of $B$ to idempotents of $B/\mathfrak mB$ is a bijection.

## Facts & Assumptions

**Given:** A local ring $(A,\mathfrak m)$.

[L1] Henselianity is equivalent to unique simple-root lifting ([[cor-henselian-local-simple-root-criterion]]).

[L2] In Stacks, Section 15.11, Lemma 15.11.6, a pair $(A,I)$ is Henselian if and only if for every finite $A$-algebra $B$ the map $B \to B/IB$ induces a bijection on idempotents.
 
[L3] A local ring $A$ is Henselian exactly when its maximal-ideal pair $(A,\mathfrak m)$ is Henselian ([[def-henselian-pair-and-henselian-local-ring]]).

## Proof

**Proof technique:** combine the local criterion with the pair-level finite-algebra characterization from the cited source.

1.1 By [L1], conditions (1) and (2) are equivalent. [L1, given]

1.2 By [L3], condition (1) says exactly that the pair $(A,\mathfrak m)$ is Henselian. Then [L2] identifies this with the finite-algebra idempotent bijection in condition (3). Hence conditions (1) and (3) are equivalent. [L2, L3, given]

2.1 Since (1) is equivalent to both (2) and (3), all three conditions are equivalent. [step 1.1, step 1.2] ∎
