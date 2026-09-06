---
id: ex-depth-of-a-hypersurface
title: Depth of a hypersurface quotient
kind: example
status: published
origin: pipeline
deps: [lem-depth-quotient-by-regular-element]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Example

Let $(Q,\mathfrak n)$ be a regular local domain of dimension $d>0$ and let
$0\ne f\in\mathfrak n$. Then
$$\operatorname{depth}(Q/(f))=d-1=\dim(Q/(f)).$$

## Facts & Assumptions

**Given:** $Q$ is Cohen--Macaulay of depth $d$, and $f$ is a nonzerodivisor.

## Verification

**Proof technique:** direct.

1.1 The depth quotient formula gives $\operatorname{depth}(Q/(f))=\operatorname{depth}(Q)-1=d-1$. [given]

2.1 The principal ideal theorem and regularity of $f$ give $\dim(Q/(f))=d-1$. Thus the hypersurface quotient is Cohen--Macaulay. [step 1.1, algebra] ∎
