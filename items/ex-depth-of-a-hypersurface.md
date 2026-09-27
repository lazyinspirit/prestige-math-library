---
id: ex-depth-of-a-hypersurface
title: Depth of a hypersurface quotient
kind: example
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-depth-quotient-by-regular-element]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-02-maintenance-receipts.jsonl (ex-depth-of-a-hypersurface). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(Q,\mathfrak n)$ be a regular local domain of dimension $d>0$ and let
$0\ne f\in\mathfrak n$. Then
$$\operatorname{depth}(Q/(f))=d-1=\dim(Q/(f)).$$

## Facts & Assumptions

**Given:** The Axiom of Choice; $Q$ is Cohen--Macaulay of depth $d$, and $f$ is a nonzerodivisor.

## Verification

**Proof technique:** direct.

1.1 The depth quotient formula gives $\operatorname{depth}(Q/(f))=\operatorname{depth}(Q)-1=d-1$. [given]

2.1 The principal ideal theorem and regularity of $f$ give $\dim(Q/(f))=d-1$. Thus the hypersurface quotient is Cohen--Macaulay. [step 1.1, algebra] ∎
