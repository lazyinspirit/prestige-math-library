---
id: ex-a-family-of-vc-dimension-two-attaining-the-sauer-shelah-bound
kind: example
title: "All subsets of $[4]$ of size at most $2$: VC dimension $2$ and exactly $\\sum_{i\\le2}\\binom{4}{i}=11$ members"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sauer-shelah, def-shattering-and-vc-dimension, def-down-shift-of-a-set-family, lem-the-down-shift-preserves-the-number-of-sets, def-binomial-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.4"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Example

Let $\mathcal{F}$ be the family of all subsets of $[4]$ of size at most $2$:

$$\varnothing,\ \{0\},\{1\},\{2\},\{3\},\ \{0,1\},\{0,2\},\{0,3\},\{1,2\},\{1,3\},\{2,3\}.$$

## Facts & Assumptions

**Given:** the family $\mathcal{F}$ above.

[L1] Sauer-Shelah bounds a VC-dimension-$2$ family by $1+4+6=11$ ([[thm-sauer-shelah]], [[def-binomial-coefficient]]).

## Verification

**Proof technique:** direct.

1.1 The set $\{0,1\}$ is shattered: every one of its subsets appears as a trace of the displayed family. [given]

2.1 No three-element subset is shattered, because the three-element set itself is missing from the family and therefore cannot appear as a trace on that triple. Hence $\operatorname{VC}(\mathcal{F})=2$. [step 1.1]

3.1 The family has exactly $11$ members, matching the bound of [L1]. [L1, step 2.1] ∎
