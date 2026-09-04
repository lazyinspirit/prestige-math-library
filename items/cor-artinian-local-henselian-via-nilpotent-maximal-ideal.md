---
id: cor-artinian-local-henselian-via-nilpotent-maximal-ideal
kind: corollary
title: "Artinian local rings are Henselian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-nilpotent-ideal-pair-is-henselian, thm-artinian-local-ring-has-nilpotent-maximal-ideal]
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

Assume the Axiom of Choice.

Every Artinian local ring is Henselian.

## Facts & Assumptions

**Given:** A commutative Artinian local ring $(A,\mathfrak m)$ and the Axiom of
Choice.

[L1] In an Artinian local ring, the maximal ideal is nilpotent
([[thm-artinian-local-ring-has-nilpotent-maximal-ideal]]).

[L2] A nilpotent ideal contained in the Jacobson radical gives a Henselian pair
([[cor-nilpotent-ideal-pair-is-henselian]]).

## Proof

**Proof technique:** use the nilpotent maximal ideal.

1.1 By [L1], there exists $N \ge 1$ with $\mathfrak m^N=0$. Since $\mathfrak m$ is the maximal ideal of a local ring, it lies in the Jacobson radical. [L1, given]

2.1 Therefore [L2] applies to the pair $(A,\mathfrak m)$, so $(A,\mathfrak m)$ is Henselian. Equivalently, the Artinian local ring $A$ is Henselian. [L2, step 1.1] ∎
