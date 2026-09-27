---
id: prop-harish-chandra-map-is-injective
kind: proposition
title: "The Harish-Chandra map on the center is injective"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, def-harish-chandra-projection, thm-harish-chandra-isomorphism-for-the-center]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
    - title: "Yiannis Sakellaridis, Verma Modules and the Category O"
      url: "https://web.archive.org/web/20230424132820if_/https://math.jhu.edu/~sakellar/automorphic-files/vermamodules.pdf"
pipeline_run: null
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-10-maintenance-receipts.jsonl (prop-harish-chandra-map-is-injective). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Statement

Assume the Axiom of Choice. For a finite-dimensional complex semisimple Lie algebra $\mathfrak g$ and any Cartan subalgebra $\mathfrak h$ in the nilpotent self-normalizing sense, if a central element $z\in Z(U(\mathfrak g))$ has zero Harish-Chandra projection relative to a chosen positive root system, then $z=0$. Equivalently, the Harish-Chandra map on the center is injective.

## Facts & Assumptions

**Given:** The Axiom of Choice, a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, any Cartan subalgebra $\mathfrak h$ in the nilpotent self-normalizing sense, chosen positive roots, and a central element $z\in Z(U(\mathfrak g))$ with $\operatorname{pr}(z)=0$.

[A1] The Axiom of Choice is [[def-axiom-of-choice]] and is inherited through [F1].

[F1] Under [A1], the shifted Harish-Chandra map for these data is an algebra isomorphism ([[thm-harish-chandra-isomorphism-for-the-center]]).

## Proof

**Proof technique:** direct.

1.1 By [A1, F1], the shifted Harish-Chandra map $$ \operatorname{HC}_\rho(w)(\lambda)=\operatorname{pr}(w)(\lambda-\rho) $$ is an algebra isomorphism from $Z(U(\mathfrak g))$ to $S(\mathfrak h)^W$. Therefore it is injective. [A1, F1, given]

2.1 If $\operatorname{pr}(z)=0$, then $\operatorname{HC}_\rho(z)=0$ as a polynomial function on $\mathfrak h^*$. Injectivity from step 1.1 then forces $z=0$. [step 1.1] ∎
