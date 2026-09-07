---
id: def-normal-filter-on-a-regular-cardinal
kind: definition
title: "Normal filters on a regular cardinal"
status: published
origin: pipeline
deps: ["def-diagonal-club-intersection", "def-club-filter-and-nonstationary-ideal"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Williams, §4 Definitions 33–34, Exercise 38 and positive-set terminology, pp.11–12"
      url: https://juliakw.net/teaching/2019/math655/part1.1.pdf
---

## Definition

Let $\kappa$ be regular uncountable. A **proper tail-containing filter** $F\subseteq\mathcal P(\kappa)$ contains $\kappa$, excludes $\varnothing$, is upward closed, is closed under finite intersections, and contains every $[\beta,\kappa)$, $\beta<\kappa$. It is **normal** if the diagonal intersection of every $\kappa$-sequence of its members belongs to $F$.

A set $S$ is **$F$-positive** if $\kappa\setminus S\notin F$, equivalently if it meets every member of $F$: disjointness from $A\in F$ puts $A\subseteq\kappa\setminus S$ in the filter by upward closure, and the converse uses that complement itself. The **dual ideal** consists of sets whose complements belong to $F$; complementation proves its downward and finite-union closure. Positive need not mean membership in the filter. **$\kappa$-complete** means closed under intersections of fewer than $\kappa$ members.
