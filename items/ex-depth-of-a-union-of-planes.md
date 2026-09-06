---
id: ex-depth-of-a-union-of-planes
title: Depth of a union of planes
kind: example
status: draft
origin: pipeline
deps: [thm-depth-lemma]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Example

Let $S=k[x,y,z,w]_{(x,y,z,w)}$, $I=(x,y)$, $J=(z,w)$, and
$A=S/(I\cap J)$. The union of the two coordinate planes has
$\dim A=2$ but $\operatorname{depth}A=1$, so it is not Cohen--Macaulay.

## Facts & Assumptions

**Given:** $I+J$ is the maximal ideal and $I\cap J=IJ$.

## Verification

**Proof technique:** direct.

1.1 The standard fibre-product sequence is $$0\to A\to S/I\oplus S/J\to S/(I+J)\to0.$$ The middle term has depth $2$, while the last term is $k$ and has depth $0$. [given]

2.1 Since the middle depth is strictly greater than the quotient depth, the unequal-depth consequence of the Depth Lemma gives $\operatorname{depth}A=0+1=1$. Both irreducible components have dimension $2$, so $\dim A=2$. [step 1.1, algebra] ∎
