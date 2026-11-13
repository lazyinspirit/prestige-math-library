---
title: Non-trapping obstacle
status: published
research_item: def-se-nontrapping
dependency_level: 2
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 2: ` footnote 1 `; PDF p. 3: ` Remark 1 `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract)


## Definition

Let $n\ge2$, and let $\Theta\subset\mathbb R^n$ be a nonempty compact obstacle with smooth boundary and connected exterior $\Omega=\mathbb R^n\setminus\Theta$. A complete generalized ray is the spatial projection $x:\mathbb R\to\overline\Omega$, parametrized by physical time at unit speed, of a complete admissible generalized bicharacteristic in the exterior, including reflected and glancing boundary behavior.

The obstacle is **non-trapping** if every such complete ray leaves every compact subset of $\mathbb R^n$ in finite forward time: for each ray $x(t)$ and each compact set $K\subset\mathbb R^n$, there is a finite $t\ge0$ with $x(t)\notin K$. The time may depend on both the ray and $K$. This is the non-trapping part of the article's standing hypothesis (H).

## Definition references

[def-se-geometry](item-def-se-geometry)

[prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract)

## Justification

The geometry and the meanings of compactness, smooth boundary and connected exterior are fixed by [def-se-geometry](item-def-se-geometry). The generalized-ray convention is fixed independently by [prop-se-generalized-ray-contract](item-prop-se-generalized-ray-contract): it includes complete compressed reflected and glancing curves and identifies their spatial projections. The quantified curves have time domain $\mathbb R$; the escape test uses their forward restrictions. A curve defined only on a finite interval or on $[0,\infty)$ is not automatically a complete ray in this predicate: applying the predicate to that curve requires a complete extension. The condition above is therefore a definite predicate on the obstacle and those admissible rays. It asks for a finite escape time separately for each ray and compact set; this definition does not assert a common escape time, uniqueness at infinite-order contact, or a geometric control theorem.

## Source notes

The article's footnote on page 2 describes reflected geometric-optics rays leaving compact sets in finite time, and Remark 1 uses generalized bicharacteristics. The article is cited for attribution; the ray convention used here is supplied by the independent prerequisite.
