---
id: def-it-finite-multiterminal-lossy-code
kind: definition
title: "Finite-alphabet multiterminal lossy source code"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-it-finite-iid-multisource
  - def-it-information-units-and-logarithm-base
  - def-it-single-letter-distortion-and-block-distortion
justified_by: []
aliases: []
axiom_use: "No choice axiom is used; encoders and decoder are functions on finite sets."
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, author lecture notes"
      url: "https://arxiv.org/pdf/1001.3404v3"
      locator: "Lecture 13, distributed lossy source coding model and Berger-Tung inner bound, pp. 1–4."
    - title: "João Barros, Reachback Communication in Wireless Sensor Networks, doctoral dissertation"
      url: "https://mediatum.ub.tum.de/doc/601579/601579.pdf"
      locator: "Chapter 4, §4.2.1, printed pp. 66–68, finite multiterminal source model and code."
---

## Definition

Fix $k\ge2$ and a finite IID source vector $(X_{1,t},\ldots,X_{k,t})_{t\ge1}$ with law $P_{X_1\cdots X_k}$, as in [[def-it-finite-iid-multisource]]. For each $i$, let $\widehat{\mathcal X}_i$ be a finite nonempty reproduction alphabet and let $d_i:\mathcal X_i\times\widehat{\mathcal X}_i\to[0,d_{i,\max}]$ be finite and bounded.

A length-$n$ fixed-length multiterminal lossy code consists of separate deterministic encoders
$$f_{i,n}:\mathcal X_i^n\to[M_i]\quad (1\le i\le k)$$
and one deterministic common decoder
$$g_n:\prod_{i=1}^k[M_i]\to\prod_{i=1}^k\widehat{\mathcal X}_i^n.$$
Write $\widehat X_i^n$ for the $i$th reconstruction and define its expected per-letter distortion by $\Delta_{i,n}:=\mathbb E[n^{-1}\sum_{t=1}^n d_i(X_{i,t},\widehat X_{i,t})]$. Encoder $i$ has rate $n^{-1}\ln M_i$ nats per source symbol. A vector $(R_1,\ldots,R_k)$ is achievable at distortions $(D_1,\ldots,D_k)$ when there is an increasing sequence of blocklengths with each rate limsup at most $R_i$ and each distortion limsup at most $D_i$. The operational rate-distortion region is the closure of these achievable vectors.

## Remarks

No encoder observes another encoder's source block. The common decoder receives all message indices and outputs one reconstruction sequence for each source.
