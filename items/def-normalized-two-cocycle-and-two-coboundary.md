---
id: def-normalized-two-cocycle-and-two-coboundary
kind: definition
title: "Normalized two-cocycle and two-coboundary"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Clara Loh, Group Cohomology, SS 2019"
      url: "https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf"
    - title: "Caroline Lassueur, Cohomology of Groups, SS 2021"
      url: "https://classueur.github.io/maths/teaching/skripte/COHOM_SS21.pdf"
---

## Definition

Let $G$ be a group and let $M$ be an abelian $G$-module, written additively.
A function $f:G\times G\to M$ is a **normalized two-cocycle** when

$$g\cdot f(h,k)-f(gh,k)+f(g,hk)-f(g,h)=0$$

for all $g,h,k\in G$, and

$$f(1,g)=f(g,1)=0$$

for all $g\in G$.

If $u:G\to M$ is a normalized one-cochain with $u(1)=0$, its
**two-coboundary** is

$$
(\delta u)(g,h)=g\cdot u(h)-u(gh)+u(g).
$$

The sets of normalized two-cocycles and two-coboundaries are denoted
$Z^2(G,M)$ and $B^2(G,M)$.
