---
id: def-closable-linear-operator
kind: definition
title: "A closable densely defined linear operator"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-graph-of-a-linear-operator, def-metric-interior-closure-boundary]
sources: {references: [{title: "Buhler--Salamon, Functional Analysis, Definition 2.25", url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"}]}
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Definition
Let $X$ and $Y$ be normed spaces, and let $A:D(A)\subseteq X\to Y$ be linear with dense linear domain. It is **closable** when the closure of its graph ([[def-graph-of-a-linear-operator]]) in $X\times Y$ ([[def-metric-interior-closure-boundary]]) is itself the graph of a linear operator. That operator is the closure $\overline A$.
