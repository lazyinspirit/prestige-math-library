---
id: cor-complete-local-rings-are-henselian
kind: corollary
title: "Complete local rings are Henselian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-complete-separated-adic-pair-henselian]
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
    - title: "The Stacks Project, Section 10.153: Henselian local rings"
      url: "https://stacks.math.columbia.edu/tag/04GE"
pipeline_run: null
---

## Statement

If $(A,\mathfrak m)$ is a local ring that is complete and separated for its
maximal-ideal topology, then $A$ is Henselian.

## Facts & Assumptions

**Given:** A local ring $(A,\mathfrak m)$ complete and separated for the
$\mathfrak m$-adic topology.

[L1] Every complete separated adic pair is Henselian
([[cor-complete-separated-adic-pair-henselian]]).

## Proof

**Proof technique:** apply the pair statement to the maximal ideal.

1.1 By [L1], the pair $(A,\mathfrak m)$ is Henselian because $A$ is complete and separated for the $\mathfrak m$-adic topology. [L1, given]

2.1 By definition, a local ring is Henselian exactly when its maximal-ideal pair is Henselian. Therefore $A$ is Henselian. [step 1.1, given] ∎
