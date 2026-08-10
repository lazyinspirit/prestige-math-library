---
id: ex-one-line-composition-and-disjoint-cycle-decomposition
kind: example
title: 'From one-line notation to a disjoint-cycle decomposition, with the right-hand factor acting first'
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-symmetric-group, thm-disjoint-cycle-decomposition]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

In $S_7$, let

$$\alpha=(0\,1\,2)(3\,4),\qquad \beta=(0\,3)(5\,6),\qquad \sigma=\alpha\beta.$$

The right-hand factor acts first. The one-line form of $\sigma$ is
$[4,2,0,1,3,6,5]$, and its disjoint-cycle decomposition is

$$\sigma=(0\,4\,3\,1\,2)(5\,6).$$

## Facts & Assumptions

**Given:** The displayed permutations in $S_7$, with composition from right to left.

[L1] A permutation of a finite set is recovered by following each unused point until its orbit closes, producing its disjoint-cycle decomposition ([[thm-disjoint-cycle-decomposition]]).

## Verification

**Proof technique:** direct.

1.1 Applying $\beta$ and then $\alpha$ gives $\sigma(0)=4$, $\sigma(1)=2$, $\sigma(2)=0$, $\sigma(3)=1$, $\sigma(4)=3$, $\sigma(5)=6$, and $\sigma(6)=5$, so the one-line form is $[4,2,0,1,3,6,5]$. [given, L1]

2.1 Starting at $0$ gives $0\mapsto4\mapsto3\mapsto1\mapsto2\mapsto0$, and the only unused points satisfy $5\mapsto6\mapsto5$. These cycles are disjoint and reproduce every value in step 1.1, so $\sigma=(0\,4\,3\,1\,2)(5\,6)$. [step 1.1, L1] ∎
