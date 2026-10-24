---
id: def-grothendieck-group-of-an-essentially-small-abelian-category
kind: definition
title: "Grothendieck group of an essentially small abelian category"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-abelian-category
  - def-free-abelian-group
  - def-exact-sequence-and-short-exact-sequence-in-an-abelian-category
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Charles Weibel, The K-book, Chapter II, Definition 6.1.1 and §6.1.3"
      url: "https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf"
    - title: "The Stacks Project, Homological Algebra, Definition 12.11.1"
      url: "https://stacks.math.columbia.edu/tag/02MT"
pipeline_run: frontier-36-complete
---

## Definition

Let $\mathcal C$ be an essentially small abelian category
([[def-abelian-category]]). Its set of isomorphism classes is denoted
$\operatorname{Iso}(\mathcal C)$. The **Grothendieck group** of $\mathcal C$ is

$$ G_0(\mathcal C):=\mathbb Z[\operatorname{Iso}(\mathcal C)]\big/\langle e_Y-e_X-e_Z:\ 0\to X\to Y\to Z\to 0\text{ is short exact in }\mathcal C\rangle. $$

where $\mathbb Z[\operatorname{Iso}(\mathcal C)]$ is the free abelian group on
that set ([[def-free-abelian-group]]) and $[X]$ denotes the image of the
generator for the isomorphism class of $X$. Thus the defining relation is
$[Y]=[X]+[Z]$ for every short exact sequence
([[def-exact-sequence-and-short-exact-sequence-in-an-abelian-category]]).
This is the short-exact-sequence group, distinguished below from split
Grothendieck groups of projectives. No free abelian group on the possibly
class-sized collection of all objects is formed. The sequence
$0\to0\to0\to0$ in particular gives $[0]=0$.
