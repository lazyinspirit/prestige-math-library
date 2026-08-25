---
id: def-elementary-set-in-rn
kind: definition
title: "Elementary sets: the finite unions of half-open boxes in $\\mathbb{R}^n$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-half-open-box]
justified_by: []
aliases: []
landmark: true
short: "elementary set"
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "E. A. Carlen, Notes on Lebesgue Measure on $\\mathbb{R}^n$ and $S^{n-1}$ (Rutgers Math 501), Section 1"
      url: "https://sites.math.rutgers.edu/~carlen/501F13/LebesgueMeas.pdf"
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Section 1.1"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Definition

Fix $n \ge 1$. A subset $E \subseteq \mathbb{R}^n$ is an **elementary set** when
there are a natural number $m$ and a list $B_0, \dots, B_{m-1}$ of half-open
boxes ([[def-half-open-box]]), that is a function $j \mapsto B_j$ on
$\{\, j \in \mathbb{N} : j < m \,\}$ whose values are half-open boxes, with

$$E \;=\; \bigcup_{j<m} B_j .$$

Write $\mathcal{E}_n$ for the family of all elementary subsets of $\mathbb{R}^n$.

The list is part of the data of the presentation and not of the set: one
elementary set has many presentations, and nothing below reads a presentation
off a set. At $m = 0$ the union is empty, so $\varnothing \in \mathcal{E}_n$; at
$m = 1$ every half-open box is elementary, $\mathbb{R}^n = (-\infty,+\infty]^n$
included. The boxes of a presentation are not required to be disjoint or
nonempty.

## Remarks

- **Every elementary set does admit a disjoint presentation**, by a common
  coordinate grid built from the parameters of the given list
  ([[lem-elementary-sets-are-finite-disjoint-unions-of-half-open-boxes]]). That
  is a theorem about $\mathcal{E}_n$, not part of the definition, and keeping it
  out of the definition is what lets a presentation be produced by hand
  wherever one is convenient.

- **$\mathcal{E}_n$ is an algebra and not merely a ring of sets**
  ([[prop-elementary-sets-form-an-algebra]]), and that is exactly what the
  infinite parameters of [[def-half-open-box]] buy: with real parameters only,
  every member of $\mathcal{E}_n$ would be bounded and the family would not
  contain $\mathbb{R}^n$.
