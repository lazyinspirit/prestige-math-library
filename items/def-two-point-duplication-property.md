---
id: def-two-point-duplication-property
kind: definition
title: "The two-point duplication property of a function family relative to a target function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function-space, def-continuous-map-top]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. M. Erdman, A Companion to Real Analysis, Definition 21.2.2"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
    - title: "E. Carlen, Notes on Topology and the Stone-Weierstrass Theorem, Lemma 1.27"
      url: "https://sites.math.rutgers.edu/~carlen/502S13/Topology502.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a topological space, let $F\subseteq C(X,\mathbb R)$ be a family of continuous real-valued functions ([[def-continuous-map-top]], [[def-function-space]]), and let $f\in C(X,\mathbb R)$. The family $F$ has the **two-point duplication property relative to $f$** when for every $x,y\in X$, including $x=y$, there is $h\in F$ such that
$$h(x)=f(x)\qquad\text{and}\qquad h(y)=f(y).$$

The equal-point clause matters on a one-point space. Erdman's distinct-point convention is equivalent to this one when $F$ contains every constant function, because the constant function with value $f(x)$ supplies the witness when $x=y$. Without constants, the distinct-point condition is vacuous on a singleton and does not imply approximation of an arbitrary target there.
