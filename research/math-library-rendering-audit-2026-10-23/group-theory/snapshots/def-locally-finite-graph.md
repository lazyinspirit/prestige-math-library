---
id: def-locally-finite-graph
kind: definition
title: "Locally finite graphs and vertex degree without a finiteness hypothesis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-simple-graph-without-a-finiteness-hypothesis, def-finite-cardinality]
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 3.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
---

## Definition

Let $G$ be a simple graph and let $v \in V(G)$. Its **neighbourhood** is

$$N_G(v) := \{\, w \in V(G) : \{v,w\} \in E(G) \,\}.$$

If $N_G(v)$ is finite, its cardinality is the **degree** of $v$ and is written
$$\deg_G(v) := |N_G(v)|.$$

The graph $G$ is **locally finite** if $N_G(v)$ is finite for every vertex $v$.
Equivalently, every vertex has finite degree.
