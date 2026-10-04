---
id: def-castelnuovo-mumford-regularity
kind: definition
title: "Castelnuovo\u2013Mumford regularity"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Nitin Nitsure, Construction of Hilbert and Quot Schemes, Sections 2–5"
      url: "https://arxiv.org/pdf/math/0504590"
    - title: "Alexander Grothendieck, Les schémas de Hilbert, Bourbaki 221, Sections 2–3"
      url: "https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf"
---

## Definition

For a coherent sheaf $F$ on $\mathbb P^n_k$, and $m\in\mathbb Z$, say that $F$ is **$m$-regular** if $H^i(\mathbb P^n_k,F(m-i))=0$ for every $i>0$. Twists use $\mathcal O_{\mathbb P^n}(1)$. Cohomology is zero above $n$. This definition includes $F=0$ and $n=0$.
