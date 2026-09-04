---
id: lem-henselian-quotient-factor-lift
kind: lemma
title: "Henselian factor lifting descends to quotients"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-henselian-pair-and-henselian-local-ring]
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
    - title: "The Stacks Project, Section 15.11: Henselian pairs"
      url: "https://stacks.math.columbia.edu/tag/09XD"
pipeline_run: null
---

## Statement

Let $(A,I)$ be a Henselian pair and let $J \subseteq A$ be an ideal. Then the
quotient pair $(A/J,(I+J)/J)$ has the coprime monic factor-lifting property.

## Facts & Assumptions

**Given:** A Henselian pair $(A,I)$ and an ideal $J \subseteq A$.

[L1] A Henselian pair uniquely lifts coprime monic factorizations modulo its defining ideal ([[def-henselian-pair-and-henselian-local-ring]]).

## Proof

**Proof technique:** use the integral quotient map and then unpack the definition.

1.1 The quotient map $A \to A/J$ is integral because every element of $A/J$ satisfies a monic linear equation over the image of $A$. The integral-base-change lemma for Henselian pairs in Stacks tag 09XD therefore applies to the Henselian pair $(A,I)$ and shows that the quotient pair $$\left(A/J,(I+J)/J\right)$$ is again Henselian. [given, algebra]

2.1 By [L1], every Henselian pair has the coprime monic factor-lifting property. Applying that definition to the pair from step 1.1 gives the claimed lifting property for $(A/J,(I+J)/J)$. [L1, step 1.1]

3.1 Hence Henselian factor lifting descends to quotients. [step 2.1] ∎
