---
id: def-tail-filter-of-a-net
kind: definition
title: "The tail filter of a net"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-directed-set-and-net, def-filter, def-filter-base, lem-filter-base-generates]
aliases: []
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
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
    - title: "Filter (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Filter_(set_theory)"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
pipeline_run: null
---

## Definition

For a net $x:D\to X$, put $T_d=\{x_e:d\le e\}$ and $\mathcal B_x=\{T_d:d\in D\}$. This is a filter base: it is nonempty, each $T_d$ contains $x_d$, and if $f\ge d,e$ then $T_f\subseteq T_d\cap T_e$. Its generated filter [[lem-filter-base-generates]] is the **tail filter** of $x$:

$$\mathcal F_x=\{A\subseteq X:\text{some }d\in D\text{ has }T_d\subseteq A\}.$$

Thus $A\in\mathcal F_x$ exactly when the net is eventually in $A$. The preceding filter-base verification makes this a well-defined filter in the sense of [[def-filter]].
