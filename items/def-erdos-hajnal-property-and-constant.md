---
id: def-erdos-hajnal-property-and-constant
kind: definition
title: "The Erdős–Hajnal property and an Erdős–Hajnal constant for a hereditary graph class"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-homogeneous-set-and-homogeneous-number, def-hereditary-graph-class, def-real-power]
aliases: []
landmark: true
verification:
  precheck: n/a
  verified:
    model: gpt-5.4
    verdict: certify
    date: 2026-08-26
    scope: published-dependency-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "M. Chudnovsky, The Erdos-Hajnal Conjecture: A Survey, sec. 1"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
    - title: "Erdős-Hajnal beyond the five-vertex path"
      url: "https://arxiv.org/html/2606.06258v2"
pipeline_run: null
---

## Definition

Let $\mathcal C$ be a hereditary class of finite graphs ([[def-hereditary-graph-class]]). A real number $\epsilon>0$ is an **Erdős–Hajnal constant** for $\mathcal C$ if every nonempty $G\in\mathcal C$ satisfies
$$\operatorname{hom}(G)\ge |V(G)|^\epsilon,$$
where the homogeneous number is that of [[def-homogeneous-set-and-homogeneous-number]] and the power is that of [[def-real-power]]. The class $\mathcal C$ has the **Erdős–Hajnal property** if it has an Erdős–Hajnal constant.

For a finite graph $H$, we say that **$H$ has the Erdős–Hajnal property** when the hereditary class of $H$-free graphs has it. The same terminology applies to a finite family $\mathcal F$ through its class of $\mathcal F$-free graphs.
