---
id: def-sigma-algebra
kind: definition
title: "Sigma-algebras"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebra-of-subsets]
aliases: []
landmark: true
short: "$\\sigma$-algebra"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "R. F. Bass, Real Analysis for Graduate Students, version 5.0, Definition 2.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "T. Tao, An Introduction to Measure Theory, Definition 1.4.12"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a set. A **sigma-algebra on $X$** is an algebra of subsets
$\mathcal A$ ([[def-algebra-of-subsets]]) that is closed under countable unions:
whenever $(A_n)_{n\in\mathbb N}$ is a sequence in $\mathcal A$,

$$\bigcup_{n\in\mathbb N}A_n\in\mathcal A.$$

The pair $(X,\mathcal A)$ then has a fixed ambient set $X$. Complements in the
sigma-algebra axioms always mean complements relative to that $X$.
