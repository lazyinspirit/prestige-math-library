---
id: def-tent-function-and-takagi-series
kind: definition
title: "The tent function $\\phi(t)=\\operatorname{dist}(t,\\mathbb Z)$ and the Takagi series $T(x)=\\sum_{n\\ge0}2^{-n}\\phi(2^n x)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-series-of-real-functions, lem-integer-part]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "The Takagi function: a survey"
      url: "https://arxiv.org/abs/1110.1691"
pipeline_run: null
---

## Definition

For $t\in\mathbb R$, put $r(t):=t-\lfloor t\rfloor$ and

$$\phi(t):=\min\{r(t),\,1-r(t)\}.$$

By the integer-part convention of [[lem-integer-part]], $0\le r(t)<1$; thus this is equivalently the distance from $t$ to the integers. In particular $0\le\phi(t)\le1/2$ and $\phi$ is $1$-periodic.

For $x\in[0,1]$, the **Takagi series** is the series of real functions in the sense of [[def-series-of-real-functions]]

$$T(x):=\sum_{n\ge0}2^{-n}\phi(2^n x).$$
