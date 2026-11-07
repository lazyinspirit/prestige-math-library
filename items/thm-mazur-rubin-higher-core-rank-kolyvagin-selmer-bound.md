---
id: thm-mazur-rubin-higher-core-rank-kolyvagin-selmer-bound
kind: theorem
title: "Higher-Core-Rank Kolyvagin Systems Bound the Dual Selmer Group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 31
deps:
  - def-core-rank-and-stark-system
  - def-kolyvagin-system-for-a-selmer-triple
  - thm-mazur-rubin-stark-systems-control-dual-selmer
  - thm-mazur-rubin-stark-to-kolyvagin-system-isomorphism
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Barry Mazur and Karl Rubin, Kolyvagin Systems"
      url: "https://arxiv.org/pdf/1312.4052"
      locator: "§13 Theorem 13.4(ix), printed pp. 27–28."
verification: {}
---

## Statement

Let $R$ be a discrete valuation ring with maximal ideal $\mathfrak m$, let $(T,\mathcal F,P,r)$ be a positive-core-rank Selmer datum satisfying hypotheses H.1–H.6, and let $\kappa\ne0$ be a stub rank-$r$ Kolyvagin system. If its initial coordinate $\kappa_1$ is nonzero, then the dual Selmer group $H^1_{\mathcal F^\vee}(K,T^\vee)$ has finite length and
$$\operatorname{length}_R H^1_{\mathcal F^\vee}(K,T^\vee)\le \max\{s\ge0:\kappa_1\in\mathfrak m^s\bigwedge_R^rH^1_{\mathcal F}(K,T)\}.$$
Equality holds if and only if $\kappa$ is primitive, meaning that its reduction modulo $\mathfrak m$ is nonzero.

## Statement references

[Mazur–Rubin, *Kolyvagin Systems*, §13 Theorem 13.4(viii)–(ix)](https://arxiv.org/pdf/1312.4052)

## Authoring status

The local proof still requires the Stark-to-Kolyvagin isomorphism, its compatibility with the initial coordinate and reduction defining primitivity, and the Stark dual-Selmer bound. Those local suppliers remain incomplete. The current Poitou–Tate carrier contains a local argument through its stated dependencies; this does not prove the missing Stark-system and core-vertex results. Local proof completion remains escalated.
