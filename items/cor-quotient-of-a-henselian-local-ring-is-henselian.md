---
id: cor-quotient-of-a-henselian-local-ring-is-henselian
kind: corollary
title: "Quotients of Henselian local rings are Henselian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-henselian-quotient-factor-lift]
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
    - title: "The Stacks Project, Section 10.153: Henselian local rings"
      url: "https://stacks.math.columbia.edu/tag/04GE"
pipeline_run: null
---

## Statement

Let $(A,\mathfrak m)$ be a Henselian local ring and let $J \subsetneq A$ be a
proper ideal. Then $A/J$ is a Henselian local ring.

## Facts & Assumptions

**Given:** A Henselian local ring $(A,\mathfrak m)$ and a proper ideal
$J \subsetneq A$.

[L1] Quotient pairs inherit the coprime monic factor-lifting property
([[lem-henselian-quotient-factor-lift]]).

## Proof

**Proof technique:** identify the maximal ideal of the quotient and apply the quotient-pair lemma.

1.1 The quotient $A/J$ is local with maximal ideal $(\mathfrak m+J)/J$. [given, algebra]

1.2 Since $(A,\mathfrak m)$ is Henselian, the pair $(A,\mathfrak m)$ is Henselian. Applying [L1] with $I=\mathfrak m$ shows that the quotient pair $$\left(A/J,(\mathfrak m+J)/J\right)$$ has the Henselian factor-lifting property. [L1, given]

2.1 Together with step 1.1, this is exactly the definition of a Henselian local ring for $A/J$. [step 1.1, step 1.2] ∎
