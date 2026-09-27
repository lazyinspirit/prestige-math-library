---
id: thm-localisation-of-cohen-macaulay-modules
title: Localization of Cohen--Macaulay modules
kind: theorem
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-maximal-and-global-cohen-macaulay-modules, cor-cohen-macaulayness-localises]
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
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-03-maintenance-receipts.jsonl (thm-localisation-of-cohen-macaulay-modules). No independent judge or whole-closure certification.
    delegated_by: owner
---
## Statement

Let $R$ be Noetherian and $M$ finite and globally Cohen--Macaulay. For every
multiplicative set $S$, each nonzero localization of $S^{-1}M$ at a prime of
$S^{-1}R$ is Cohen--Macaulay. In particular, assuming the Axiom of Choice
([[def-axiom-of-choice]]), if $R$ is local and $M$ is Cohen--Macaulay, then
$M_\mathfrak p$ is Cohen--Macaulay for every
$\mathfrak p\in\operatorname{Supp}(M)$; primes outside the support give the
zero module and are excluded by the local definition.

## Facts & Assumptions

**Given:** primes of $S^{-1}R$ correspond to primes of $R$ disjoint from $S$, and iterated localization agrees with localization at the corresponding prime. The Axiom of Choice is assumed for the local special case only.

## Proof

**Proof technique:** direct.

1.1 At a corresponding support prime $\mathfrak p$, the definition of global Cohen--Macaulayness says $M_\mathfrak p$ is Cohen--Macaulay ([[def-maximal-and-global-cohen-macaulay-modules]]). [given]

2.1 The relevant localization of $S^{-1}M$ is canonically $M_\mathfrak p$, so it is Cohen--Macaulay. Under Choice, the local special case follows from [[cor-cohen-macaulayness-localises]]; primes outside the support give the zero module. [step 1.1, given] ∎
