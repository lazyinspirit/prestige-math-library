---
id: thm-no-inner-model-measurable-implies-fleissner-hyp
kind: theorem
title: "No inner measurable implies Fleissner's HYP"
status: published
origin: pipeline
deps: [def-fleissner-hyp-covering-interface, thm-dodd-jensen-covering-supplies-fleissner-hyp-data, def-dodd-jensen-covering-and-square-package]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "William G. Fleissner, If all normal Moore spaces are metrizable, then there is an inner model with a measurable cardinal"
      url: "https://kuscholarworks.ku.edu/server/api/core/bitstreams/88062b98-5ab8-4fdc-9548-9e00a9c7507d/content"
      locator: "HYP and Jensen-Dodd implication, printed pp. 366-368"
verification:
  audited: 2026-09-22
---

## Statement

$\mathrm{ZFC}$ plus "there is no inner model with a measurable cardinal" proves
HYP with the parameters needed by Fleissner
([[def-fleissner-hyp-covering-interface]],
[[thm-dodd-jensen-covering-supplies-fleissner-hyp-data]]).

## Facts & Assumptions

**Given:** The hypothesis that no inner model contains a measurable cardinal.

[F1] That hypothesis supplies the Dodd-Jensen covering and square package and, from it, a singular strong limit $\kappa$ of cofinality $\omega$ with $2^\kappa = \kappa^+$ and a nonreflecting stationary $E \subseteq \{\delta < \kappa^+ : \operatorname{cf}(\delta) = \omega\}$ ([[thm-dodd-jensen-covering-supplies-fleissner-hyp-data]]).

[F2] HYP is the conjunction of clauses (1a), (1b), (2), (3a), (3b) for some $\kappa, (\kappa_n), E$ ([[def-fleissner-hyp-covering-interface]]).

## Proof

**Proof technique:** direct.

1.1 Assume no inner model contains a measurable cardinal. By [F1] there are $\kappa, (\kappa_n)$ and $E$ with $2^\kappa = \kappa^+$, $2^{\kappa_n} < \kappa$ for all $n$, $\sup_n \kappa_n = \kappa$, $E$ stationary in $\kappa^+$ inside $\{\delta < \kappa^+ : \operatorname{cf}(\delta)=\omega\}$, and $E$ nonreflecting. [given, F1]

2.1 These objects satisfy every clause of [F2], so HYP holds with exactly the parameters, namely $\kappa, (\kappa_n)_{n \in \omega}$ and the nonreflecting stationary $E$, that the Fleissner construction consumes. [step 1.1, F2] ∎

## Remarks

- **This is a repackaging item.** It records that the parameters produced by the covering route are the parameters HYP asks for; no new mathematics beyond the identification of the clauses is claimed.
