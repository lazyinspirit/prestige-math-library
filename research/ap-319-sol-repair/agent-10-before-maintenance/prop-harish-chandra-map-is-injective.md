---
id: prop-harish-chandra-map-is-injective
kind: proposition
title: "The Harish-Chandra map on the center is injective"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-harish-chandra-projection, thm-harish-chandra-isomorphism-for-the-center]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
pipeline_run: null
---

## Statement

If a central element $z\in Z(U(\mathfrak g))$ has zero Harish-Chandra projection, then $z=0$. Equivalently, the Harish-Chandra map on the center is injective.

## Facts & Assumptions

**Given:** A central element $z\in Z(U(\mathfrak g))$ with $\operatorname{pr}(z)=0$.

[F1] The shifted Harish-Chandra map is an algebra isomorphism ([[thm-harish-chandra-isomorphism-for-the-center]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], the shifted Harish-Chandra map $$ \operatorname{HC}_\rho(w)(\lambda)=\operatorname{pr}(w)(\lambda-\rho) $$ is an algebra isomorphism from $Z(U(\mathfrak g))$ to $S(\mathfrak h)^W$. Therefore it is injective. [F1, given]

2.1 If $\operatorname{pr}(z)=0$, then $\operatorname{HC}_\rho(z)=0$ as a polynomial function on $\mathfrak h^*$. Injectivity from step 1.1 then forces $z=0$. [step 1.1] ∎
