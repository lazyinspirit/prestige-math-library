---
id: def-noetherian-topological-space
kind: definition
title: "Noetherian topological spaces via ACC on opens or DCC on closed subsets"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-topological-space]
justified_by: []
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, v4.03, §14"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
    - title: "The Stacks Project, Section 5.9: Noetherian topological spaces"
      url: "https://stacks.math.columbia.edu/tag/0050"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $(X,\mathcal T)$ be a topological space ([[def-topological-space]]).

The space $X$ is **Noetherian** when every ascending chain $$ U_0\subseteq U_1\subseteq U_2\subseteq\cdots $$ of open subsets stabilizes.

Equivalently, $X$ is Noetherian when every descending chain $$ F_0\supseteq F_1\supseteq F_2\supseteq\cdots $$ of closed subsets stabilizes.

