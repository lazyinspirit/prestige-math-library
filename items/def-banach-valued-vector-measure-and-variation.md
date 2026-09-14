---
id: def-banach-valued-vector-measure-and-variation
kind: definition
title: "Banach-valued vector measure and variation"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-banach-space, def-measure]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gilles Pisier, Martingales in Banach Spaces"
      url: "https://webusers.imj-prg.fr/~gilles.pisier/ihp-pisier.pdf"
      locator: "Chapter 2, Section 2.1, definitions preceding Proposition 2.1, printed p. 33"
pipeline_run: phase-2-next-18
---

## Definition

Let $(\Omega,\mathcal A)$ be a measurable space and $X$ a real or complex
Banach space. An **$X$-valued vector measure** is a map
$\nu:\mathcal A\to X$ such that $\nu(\varnothing)=0$ and, for every pairwise
disjoint sequence $(E_n)$ in $\mathcal A$,

$$\nu\left(\bigcup_{n=1}^{\infty}E_n\right)=\sum_{n=1}^{\infty}\nu(E_n),$$

where the series converges in the norm of $X$.

Its **variation** is the extended nonnegative set function

$$|\nu|(E):=\sup\left\{\sum_{j=1}^{m}\|\nu(E_j)\|:(E_j)_{j=1}^{m}\text{ is a finite measurable partition of }E\right\}.$$

We set $|\nu|(\varnothing)=0$. The vector measure has **bounded variation** if
$|\nu|(\Omega)<\infty$.

Given a positive measure $\mu$ on $\mathcal A$, write $\nu\ll\mu$ when
$\mu(E)=0$ implies $\nu(E)=0$ for every $E\in\mathcal A$.

## Remarks

Norm countable additivity, finiteness of variation, and absolute continuity
with respect to a named scalar measure are three separate conditions. The
one-cell partition gives $\|\nu(E)\|\leq|\nu|(E)$, while the empty partition
convention gives zero variation on the empty set.
