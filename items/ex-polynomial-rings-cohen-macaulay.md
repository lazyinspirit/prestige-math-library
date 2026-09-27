---
id: ex-polynomial-rings-cohen-macaulay
title: Polynomial rings are Cohen--Macaulay
kind: example
status: published
origin: pipeline
deps: [thm-polynomial-extension-of-cohen-macaulay-rings, def-axiom-of-choice]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (ex-polynomial-rings-cohen-macaulay). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Example

Assume the Axiom of Choice. For every field $k$ and every integer $n\ge0$, the polynomial ring
$k[X_1,\ldots,X_n]$ is a
Cohen--Macaulay ring. At the homogeneous maximal ideal
$\mathfrak m=(X_1,\ldots,X_n)$, the variables form a regular system of
parameters of the local ring.

## Facts & Assumptions

**Given:** The Axiom of Choice; a field is a zero-dimensional Cohen--Macaulay ring.

## Verification

**Proof technique:** direct.

1.1 Under the stated Choice premise, iterating [[thm-polynomial-extension-of-cohen-macaulay-rings]] shows that $k[X_1,\ldots,X_n]$ is globally Cohen--Macaulay. [given]

2.1 In the localization at $\mathfrak m$, multiplication by $X_i$ remains injective after quotienting by the preceding variables, and the terminal quotient is $k$. Thus the displayed variables are a regular parameter system of length $n$. [step 1.1, algebra] ∎
