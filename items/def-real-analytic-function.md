---
id: def-real-analytic-function
kind: definition
title: "A real-analytic function on an open subset of $\\mathbb{R}$ is locally represented by a convergent real power series"
status: published
origin: session
deps: [def-real-power-series-and-radius-of-convergence, def-open-and-closed-in-r, def-neighbourhood-r]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "Analytic function, Encyclopedia of Mathematics", url: "https://encyclopediaofmath.org/wiki/Analytic_function"}]}
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R$ be open ([[def-open-and-closed-in-r]]). A function $f:U\to\mathbb R$ is **real analytic on $U$** if, for every $c\in U$, there are a real $r>0$ and real coefficients $(a_n)_{n\in\mathbb N}$ such that $N_r(c)\subseteq U$ and

$$f(x)=\sum_{n=0}^{\infty}a_n(x-c)^n\qquad(x\in N_r(c)).$$

The representing series must converge throughout this neighbourhood ([[def-real-power-series-and-radius-of-convergence]], [[def-neighbourhood-r]]). The radius and coefficients may initially depend on $c$.
