---
id: thm-mazur-rubin-stark-to-kolyvagin-system-isomorphism
kind: theorem
title: "Stark Systems and Stub Kolyvagin Systems Are Isomorphic"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 30
deps:
  - def-core-rank-and-stark-system
  - def-kolyvagin-system-for-a-selmer-triple
  - thm-mazur-rubin-stark-systems-are-rank-one
  - thm-mazur-rubin-stub-kolyvagin-systems-are-rank-one
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Barry Mazur and Karl Rubin, Kolyvagin Systems"
      url: "https://arxiv.org/pdf/1312.4052"
      locator: "§12 Theorem 12.4, printed pp. 25–26."
verification: {}
---

## Statement

Let $R$ be the coefficient ring and let $(T,\mathcal F,P,r)$ be the Selmer datum in the Mazur–Rubin construction, satisfying hypotheses H.1–H.7. The canonical map $\Pi:\operatorname{SS}_r(T)\to\operatorname{KS}'_r(T)$, obtained by applying the finite-to-singular localization maps to the Stark-system exterior-power coordinates, is an isomorphism of $R$-modules.

## Statement references

[Mazur–Rubin, *Kolyvagin Systems*, §12 Theorem 12.4](https://arxiv.org/pdf/1312.4052)

## Authoring status

The local proof still requires the finite-to-singular map construction, compatibility with Stark transitions, and surjectivity onto the stub stalks. The Stark rank-one supplier currently gives only a conditional deduction with explicit arithmetic and choice-scope gaps, and the stub rank-one supplier has no local proof. The current Poitou–Tate carrier's local argument does not settle these separate obligations. Local proof completion remains escalated.
