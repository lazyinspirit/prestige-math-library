---
id: cor-nilpotent-ideal-pair-is-henselian
kind: corollary
title: "Nilpotent Jacobson pairs are Henselian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-complete-separated-adic-pair-henselian]
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

Let $A$ be a commutative ring and let $I \subseteq J(A)$ be a nilpotent ideal.
Then $(A,I)$ is a Henselian pair.

## Facts & Assumptions

**Given:** A commutative ring $A$ and a nilpotent ideal $I \subseteq J(A)$.

[L1] Every complete separated adic pair is Henselian
([[cor-complete-separated-adic-pair-henselian]]).

## Proof

**Proof technique:** nilpotence makes the adic tower stationary.

1.1 Choose $N \ge 1$ with $I^N=0$. Then for every $r \ge N$, the quotients $A/I^r$ stabilize at $A$, so $A$ is automatically complete and separated for the $I$-adic topology. [given, choose, algebra]

2.1 Applying [L1] to the ideal $I$ shows that $(A,I)$ is Henselian. [L1, step 1.1] ∎
