---
id: def-sylow-p-subgroup
kind: definition
title: "Sylow $p$-subgroups of a finite group"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-p-group, def-p-adic-valuation]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a finite group, let $p$ be prime, and write $|G|=p^a m$ with $a\in\mathbb N$ and $p\nmid m$. A subgroup $P\le G$ is a **Sylow $p$-subgroup** when $|P|=p^a$. Equivalently, its order is the largest power of $p$ dividing $|G|$. This is a property of a subgroup and does not presume that such a subgroup exists; existence is proved in [[thm-sylow-first-theorem]].
