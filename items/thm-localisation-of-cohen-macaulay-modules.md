---
id: thm-localisation-of-cohen-macaulay-modules
title: Localization of Cohen--Macaulay modules
kind: theorem
status: draft
origin: pipeline
deps: [cor-cohen-macaulayness-localises]
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
## Statement

Let $R$ be Noetherian and $M$ finite and globally Cohen--Macaulay. For every
multiplicative set $S$, each nonzero localization of $S^{-1}M$ at a prime of
$S^{-1}R$ is Cohen--Macaulay. In particular, if $R$ is local and $M$ is
Cohen--Macaulay, then $M_\mathfrak p$ is Cohen--Macaulay for every
$\mathfrak p\in\operatorname{Supp}(M)$; primes outside the support give the
zero module and are excluded by the local definition.

## Facts & Assumptions

**Given:** primes of $S^{-1}R$ correspond to primes of $R$ disjoint from $S$, and iterated localization agrees with localization at the corresponding prime.

## Proof

**Proof technique:** direct.

1.1 At a corresponding support prime $\mathfrak p$, global Cohen--Macaulayness says $M_\mathfrak p$ is Cohen--Macaulay. [given]

2.1 The relevant localization of $S^{-1}M$ is canonically $M_\mathfrak p$, so it is Cohen--Macaulay. The local special case is `cor-cohen-macaulayness-localises`; the zero-localization convention is as stated. [step 1.1, algebra] ∎
