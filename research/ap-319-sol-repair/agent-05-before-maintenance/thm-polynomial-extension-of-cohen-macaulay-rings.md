---
id: thm-polynomial-extension-of-cohen-macaulay-rings
title: Polynomial extensions of Cohen--Macaulay rings
kind: theorem
status: published
origin: pipeline
deps: [cor-polynomial-extension-preserves-cohen-macaulayness]
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
## Statement

If $R$ is a Noetherian Cohen--Macaulay ring, then
$R[X_1,\ldots,X_n]$ is Cohen--Macaulay for every $n\ge0$.

## Facts & Assumptions

**Given:** Cohen--Macaulayness for a nonlocal Noetherian ring is tested at all prime localizations.

## Proof

**Proof technique:** direct.

1.1 Apply `cor-polynomial-extension-preserves-cohen-macaulayness` to the module $M=R$. [given]

2.1 Iterating one variable at a time proves the assertion for all finite $n$; $n=0$ is the original ring. [step 1.1, algebra] ∎
