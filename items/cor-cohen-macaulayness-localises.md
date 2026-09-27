---
id: cor-cohen-macaulayness-localises
title: Cohen--Macaulayness localizes
kind: corollary
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-maximal-and-global-cohen-macaulay-modules, lem-localisation-of-cohen-macaulay-module-depth-dimension-equality]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-03-maintenance-receipts.jsonl (cor-cohen-macaulayness-localises). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]).

If $M$ is a finite Cohen--Macaulay module over a Noetherian local ring $R$,
then $M_\mathfrak p$ is Cohen--Macaulay over $R_\mathfrak p$ for every
$\mathfrak p\in\operatorname{Supp}_R(M)$.

## Facts & Assumptions

**Given:** the Axiom of Choice; localization at a support prime is nonzero.

## Proof

**Proof technique:** direct.

1.1 Under Choice, the localization lemma gives equality of depth and support dimension for $M_\mathfrak p$. [given]

2.1 That equality is exactly the local definition of Cohen--Macaulayness. [step 1.1, algebra] ∎
