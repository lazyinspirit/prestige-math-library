---
id: def-trace-sigma-algebra
kind: definition
title: "The trace of a sigma-algebra on a subset"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-sigma-algebra]
justified_by: [thm-trace-is-a-sigma-algebra]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory, Exercise 1.4.12"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal A$ be a sigma-algebra on $X$ ([[def-sigma-algebra]]) and let
$Y\subseteq X$. The **trace of $\mathcal A$ on $Y$** is the family

$$\mathcal A|_Y:=\{A\cap Y:A\in\mathcal A\}\subseteq\mathcal P(Y).$$

This definition forms a family of subsets of $Y$. That it satisfies the
sigma-algebra axioms on $Y$ is proved in [[thm-trace-is-a-sigma-algebra]].
