---
id: def-regular-map-image-and-fibre-classical
kind: definition
title: "Images and fibres of a regular map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morphism-classical-varieties]
justified_by: []
sources:
  scraped: []
  references:
    - title: "Michael Artin, Notes for a Course in Algebraic Geometry, after Proposition 2.5.8"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
    - title: "J. S. Milne, Algebraic Geometry, Chapter 3h"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Definition

Let $\varphi:X\to Y$ be a morphism of classical affine varieties.

The **image** of $\varphi$ is the subset
$$ \varphi(X):=\{\varphi(x):x\in X\}\subseteq Y. $$

For a point $y\in Y$, the **fibre** of $\varphi$ over $y$ is
$$ \varphi^{-1}(y):=\{x\in X:\varphi(x)=y\}. $$

More generally, for a subset $S\subseteq Y$ one writes
$$ \varphi^{-1}(S):=\{x\in X:\varphi(x)\in S\}. $$

These are set-theoretic notions. On this page no separate claim is made that
images are closed.
