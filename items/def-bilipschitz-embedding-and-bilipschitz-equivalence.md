---
id: def-bilipschitz-embedding-and-bilipschitz-equivalence
kind: definition
title: "Bilipschitz embeddings and bilipschitz equivalences of metric spaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-metric-space, def-injection-surjection-bijection]
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), Section 5.1"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory, Section 8.1"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---

## Definition

Let $(X,d_X)$ and $(Y,d_Y)$ be metric spaces and let $f:X \to Y$.

The map $f$ is a **bilipschitz embedding** if there is a real $L \ge 1$ such
that

$$L^{-1} d_X(x,x') \le d_Y(f(x),f(x')) \le L\,d_X(x,x') \qquad \text{for all } x,x' \in X.$$

It is a **bilipschitz equivalence** if it is in addition bijective
([[def-injection-surjection-bijection]]).

Two metric spaces are **bilipschitz equivalent** if some bilipschitz
equivalence between them exists.
