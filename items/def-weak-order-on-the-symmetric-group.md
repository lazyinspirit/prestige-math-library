---
id: def-weak-order-on-the-symmetric-group
kind: definition
title: "The weak order on $S_n$ by inversion-set inclusion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inversions-inversion-number-and-sign]
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
    - title: "Manytamaris notes, Permutations"
      url: "https://manytamaris.lisn.upsaclay.fr/doku.php?id=permutations"
pipeline_run: null
---

## Definition

For $\sigma,\tau \in S_n$, write

$$\sigma \le_{\mathrm{weak}} \tau \quad:\Longleftrightarrow\quad \operatorname{Inv}(\sigma)\subseteq \operatorname{Inv}(\tau),$$

where the inversion sets are those of [[def-inversions-inversion-number-and-sign]].

This is the weak order on $S_n$ used later on the combinatorics pathway.
