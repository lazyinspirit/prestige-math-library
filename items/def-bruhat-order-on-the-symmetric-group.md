---
id: def-bruhat-order-on-the-symmetric-group
kind: definition
title: "The Bruhat order on $S_n$ by rank inequalities"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-symmetric-group-and-permutation-notation]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "Arun Ram, Notes on Schubert Polynomials, Chapter 1: Permutations"
      url: "https://math.soimeme.org/~arunram/Resources/NOSPC1Permutations.html"
pipeline_run: null
---

## Definition

For $\sigma \in S_n$ and $0 \le p,q < n$, define the rank number

$$r_\sigma(p,q) := \big|\{\, i \in n : i \le p \text{ and } \sigma(i)\le q\,\}\big|.$$

For $\sigma,\tau \in S_n$, write

$$\sigma \le_{\mathrm{Bruhat}} \tau \quad:\Longleftrightarrow\quad r_\sigma(p,q)\ge r_\tau(p,q)\ \text{for every }0 \le p,q < n.$$

This is the rank-inequality form of the Bruhat order.
