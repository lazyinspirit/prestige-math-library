---
id: thm-polynomial-extension-of-cohen-macaulay-rings
title: Polynomial extensions of Cohen--Macaulay rings
kind: theorem
status: published
origin: pipeline
deps: [cor-polynomial-extension-preserves-cohen-macaulayness, thm-hilbert-basis-theorem, def-axiom-of-choice]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-05-receipts.jsonl (thm-polynomial-extension-of-cohen-macaulay-rings). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice. If $R$ is a Noetherian Cohen--Macaulay ring, then
$R[X_1,\ldots,X_n]$ is Cohen--Macaulay for every $n\ge0$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a Noetherian Cohen--Macaulay ring $R$. Cohen--Macaulayness for a nonlocal ring is tested at all prime localizations.

[L1] Under AC, polynomial extension of a finite globally Cohen--Macaulay module preserves global Cohen--Macaulayness ([[cor-polynomial-extension-preserves-cohen-macaulayness]]).

[L2] A polynomial ring in one variable over a Noetherian ring is Noetherian ([[thm-hilbert-basis-theorem]]).

## Proof

**Proof technique:** direct.

1.1 Under the stated AC, apply [L1] to the finite module $M=R$; this gives the one-variable polynomial ring as Cohen--Macaulay. [given, L1]

2.1 The one-variable output is again Noetherian by [L2], so iterating [L1] one variable at a time proves the assertion for every finite $n$; $n=0$ is the original ring. [L1, L2, step 1.1, induction] ∎
