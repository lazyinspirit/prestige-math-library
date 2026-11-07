---
id: thm-mazur-rubin-stark-systems-control-dual-selmer
kind: theorem
title: "Stark Systems Determine the Dual Selmer Module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 29
deps:
  - def-core-rank-and-stark-system
  - thm-poitou-tate-exact-sequence-for-finite-modules
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Barry Mazur and Karl Rubin, Kolyvagin Systems"
      url: "https://arxiv.org/pdf/1312.4052"
      locator: "§8 Theorem 8.9, printed pp. 18–19."
verification: {}
---

## Statement

Let $R$ be a discrete valuation ring with maximal ideal $\mathfrak m$, let $(T,\mathcal F,P,r)$ be a Selmer datum of positive core rank satisfying hypotheses H.1–H.6 of Mazur and Rubin, and let $\epsilon\ne0$ be a rank-$r$ Stark system. Let $H^1_{\mathcal F^\vee}(K,T^\vee)_{\rm div}$ denote the maximal divisible submodule of the dual Selmer module. If $\epsilon_1\ne0$, then the dual Selmer module has finite length and
$$\operatorname{length}_R H^1_{\mathcal F^\vee}(K,T^\vee)\le \max\{s\ge0:\epsilon_1\in\mathfrak m^s\bigwedge_R^rH^1_{\mathcal F}(K,T)\}.$$
Equality holds exactly when $\epsilon$ is primitive, meaning its reduction modulo $\mathfrak m$ is nonzero. More generally, the theorem identifies the corank and the elementary divisors of $H^1_{\mathcal F^\vee}(K,T^\vee)/H^1_{\mathcal F^\vee}(K,T^\vee)_{\rm div}$ from the orders of divisibility of the Stark system coordinates.

## Statement references

[Mazur–Rubin, *Kolyvagin Systems*, §8 Theorem 8.9](https://arxiv.org/pdf/1312.4052)

## Authoring status

The local proof still requires the finite-artinian dual-Selmer structure, coordinate-divisibility calculations, and passage to the DVR limit. The current Poitou–Tate carrier supplies a local nine-term-sequence argument through its stated dependencies; the earlier finite-S class-formation, Tor, and topology gap description is obsolete. This does not supply the missing Stark-system argument or resolve the choice-scope difference between the unqualified Statement and Poitou–Tate's AC, Countable Choice and DC assumptions. Local proof completion remains escalated.
