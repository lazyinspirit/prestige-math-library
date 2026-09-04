---
id: def-germ-of-section
kind: definition
title: "Germs of sections"
status: draft
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-stalk-of-presheaf, def-section-restriction-and-global-section]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Section 11"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
---

## Definition

Let $\mathcal F$ be a presheaf on $X$, let $x\in X$, and let $s\in\mathcal F(U)$
for some open set $U$ containing $x$.

The class of the pair $(U,s)$ in the stalk $\mathcal F_x$ is called the
**germ of $s$ at $x$**, and it is denoted by
$$s_x\in\mathcal F_x.$$

For every open set $U$ containing $x$, this gives a canonical map
$$\mathcal F(U)\longrightarrow\mathcal F_x,\qquad s\longmapsto s_x.$$

If $V\subseteq U$ is open and also contains $x$, then $(s|_V)_x=s_x$, because
the two pairs $(U,s)$ and $(V,s|_V)$ agree on the smaller open neighbourhood
$V$.
