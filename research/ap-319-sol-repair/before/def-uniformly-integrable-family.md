---
id: def-uniformly-integrable-family
kind: definition
title: "A uniformly integrable family"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integrable-real-and-complex-functions-and-their-integrals, def-integral-over-a-measurable-set]
verification:
  audited: 2026-08-28
  precheck: n/a
sources:
  references:
    - title: "Terence Tao, 245A Notes 4: Modes of convergence, Exercise 22"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 7.21"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space. A family
$\mathcal F \subseteq L^1(\mu)$ of integrable real-valued functions is
**uniformly integrable** when
$$\sup_{f \in \mathcal F}\int_{\{|f|>M\}} |f|\,d\mu \to 0 \qquad\text{as } M \to \infty.$$

Equivalently, for every $\varepsilon>0$ there is $M>0$ such that
$$f \in \mathcal F \qquad\Longrightarrow\qquad \int_{\{|f|>M\}} |f|\,d\mu < \varepsilon.$$

This page adopts the tail-integral definition. On finite measure spaces it is
equivalent to $L^1$-boundedness plus uniform absolute continuity, proved later
on this page.
