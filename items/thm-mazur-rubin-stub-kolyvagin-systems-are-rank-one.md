---
id: thm-mazur-rubin-stub-kolyvagin-systems-are-rank-one
kind: theorem
title: "Stub Kolyvagin Systems Form a Free Rank-One Module"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 29
deps:
  - def-kolyvagin-system-for-a-selmer-triple
  - thm-poitou-tate-exact-sequence-for-finite-modules
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Barry Mazur and Karl Rubin, Kolyvagin Systems"
      url: "https://arxiv.org/pdf/1312.4052"
      locator: "§§11–12, Theorems 11.6 and 11.7, printed pp. 23–24."
verification: {}
---

## Statement

Let $R$ be a principal local ring and let $(T,\mathcal F,P,r)$ be a Selmer datum of positive core rank satisfying hypotheses H.1–H.6 of Mazur and Rubin. The module $\operatorname{KS}'_r(T)$ of stub rank-$r$ Kolyvagin systems is free of rank one over $R$. For every core vertex $n$, meaning an auxiliary vertex whose stub stalk is the full stalk, specialization $\kappa\mapsto\kappa_n$ is an isomorphism from $\operatorname{KS}'_r(T)$ onto the stub stalk $S'(n)$. There is a generator whose $n$th coordinate generates $S'(n)$ for every auxiliary vertex $n$.

## Statement references

[Mazur–Rubin, *Kolyvagin Systems*, §11 Theorem 11.7](https://arxiv.org/pdf/1312.4052)

## Authoring status

The local proof still requires the core-vertex graph and local cyclicity argument of Theorem 11.6, including auxiliary-prime selection. The current Poitou–Tate carrier contains a local argument through its stated dependencies; its former missing-proof status is not the remaining core-vertex proof. The unqualified Statement also does not explicitly carry that supplier's AC, Countable Choice and DC assumptions. Local proof completion and this choice-scope difference remain escalated.
