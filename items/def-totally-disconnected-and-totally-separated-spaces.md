---
id: def-totally-disconnected-and-totally-separated-spaces
kind: definition
title: "Totally disconnected spaces and totally separated spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-topological-space, def-connected-component-and-quasicomponent, def-interior-closure-boundary-top]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Definition

Let $X$ be a topological space ([[def-topological-space]]).

The space $X$ is **totally disconnected** when every connected component of $X$
is a singleton; equivalently, each connected component in the sense of
[[def-connected-component-and-quasicomponent]] consists of just one point.

The space $X$ is **totally separated** when for every distinct $x,y\in X$ there
is a clopen set $U\subseteq X$ with $x\in U$ and $y\notin U$, where clopen
means both open and closed and closedness is taken in the sense of
[[def-interior-closure-boundary-top]].
