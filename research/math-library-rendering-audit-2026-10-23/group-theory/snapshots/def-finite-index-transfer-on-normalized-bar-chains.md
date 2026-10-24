---
id: def-finite-index-transfer-on-normalized-bar-chains
kind: definition
title: "Finite-index transfer on normalized bar chains"
status: published
origin: pipeline
deps: [lem-diagonal-bar-coinvariants-compute-group-homology, def-normalized-bar-resolution]
justified_by: [lem-bar-transfer-is-a-chain-map-and-choice-independent-up-to-chain-homotopy]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Loh, Group Cohomology, Definitions 1.7.12–13 and Theorem 1.7.15 pp.63–64; Theorem 3.2.18 pp.129–132"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
---

## Definition

Use diagonal bar chains $C_*(G;M)$ for a left $G$-module $M$, with the DC and supplied-resolution convention when identifying their homology with derived homology. Let $H\le G$ have finite index. Choose representatives $T$ of the right cosets $Ht$, with $1\in T$. Write $x=r(x)t(x)$ with $r(x)\in H$ and $t(x)\in T$. Transfer is
$$\operatorname{Tr}_T[(g_0,\ldots,g_n)\otimes m]=\sum_{t\in T}[(r(tg_0),\ldots,r(tg_n))\otimes tm].$$
For trivial coefficients, in inhomogeneous coordinates set $t_0=t$, $t_i=t(t_{i-1}g_i)$ and $h_i=t_{i-1}g_it_i^{-1}\in H$. Then
$$\operatorname{Tr}_T[g_1|\cdots|g_n]=\sum_{t\in T}[h_1|\cdots|h_n].$$
A tuple with an identity entry in inhomogeneous coordinates is zero. Well-definedness and the chain-map property are supplied by the following lemma.
