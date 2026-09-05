---
id: def-regular-element-and-rank-for-a-complex-semisimple-lie-algebra
kind: definition
title: "Regular elements and rank for a complex semisimple Lie algebra"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras I"
      url: "https://math.mit.edu/~etingof/lnlg.pdf"
pipeline_run: null
---

## Definition

Let $\mathfrak g$ be a complex semisimple Lie algebra. For $x\in \mathfrak g$, let

$$C_{\mathfrak g}(x):=\{y\in \mathfrak g : [x,y]=0\}$$

be its centralizer. The minimum possible dimension of $C_{\mathfrak g}(x)$ is called the **rank** of $\mathfrak g$ and is denoted $\operatorname{rank}\mathfrak g$. An element $x\in \mathfrak g$ is **regular** when

$$\dim C_{\mathfrak g}(x)=\operatorname{rank}\mathfrak g.$$
