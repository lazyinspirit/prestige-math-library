---
id: def-accessible-pointed-membership-graphs
kind: definition
title: "Accessible pointed membership graphs"
status: published
origin: pipeline
deps: ["def-well-founded-setlike-relations"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Kozen and Ruozzi, Applications of Metric Coinduction (2009) \u2014 section 6 opening p.10, APG definition."
      url: "https://lmcs.episciences.org/1168/pdf"
---

## Definition

An accessible pointed graph consists of a set $X$ of nodes, a root $r\in X$, and a relation $R\subseteq X^2$. Draw an arrow $x\to y$ precisely when $yRx$. Accessibility means that for every $x\in X$ there are $n\in\omega$ and a function $p:n+1\to X$ with $p(0)=r$, $p(n)=x$, and $p(i+1)Rp(i)$ for $i<n$. The path of length zero reaches the root.

A decoration is a set function $d$ on $X$ such that $d(x)=\{d(y):yRx\}$ for each node. A well-founded graph means that $R$ has the minimal-element property, not an unqualified no-infinite-path characterization. Extensionality is not part of the graph definition. No axiom of anti-foundation is assumed.

Conventions and prerequisites: [[def-well-founded-setlike-relations]].
