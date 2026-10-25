---
id: def-lower-limit-topology
kind: definition
title: "The lower-limit topology on $\\mathbb{R}$, with the half-open intervals $[a,b)$ as a basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-interval, thm-basis-criterion, def-topology-basis-subbasis]
aliases: [def-sorgenfrey-line]
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "L. A. Steen and J. A. Seebach, Counterexamples in Topology, Sorgenfrey line"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
    - title: "Lower limit topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lower_limit_topology"
pipeline_run: null
---

## Definition

Let $\mathcal B_\ell=\{[a,b):a,b\in\mathbb R,\ a<b\}$. The **lower-limit topology** $\mathcal T_\ell$ on $\mathbb R$ is the topology having $\mathcal B_\ell$ as a basis. The resulting space is the **lower-limit line**.

This basis is well defined. It covers $\mathbb R$, because $x\in[x,x+1)$ for every $x$. If $x\in[a,b)\cap[c,d)$, then $x\in[\max(a,c),\min(b,d))$, whose right endpoint exceeds $x$ and which lies inside the intersection. Thus the two basis conditions of [[thm-basis-criterion]] hold, so $\mathcal B_\ell$ determines a unique topology.

The lower-limit topology is finer than the usual topology: if $x\in(a,b)$, then $[x,(x+b)/2)$ is a lower-limit basic interval containing $x$ and contained in $(a,b)$. No equality with the usual topology is asserted here. The half-open intervals use the interval convention of [[def-interval]], and opens are exactly unions of basis members by [[def-topology-basis-subbasis]].
