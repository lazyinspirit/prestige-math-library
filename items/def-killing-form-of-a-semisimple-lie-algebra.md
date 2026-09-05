---
id: def-killing-form-of-a-semisimple-lie-algebra
kind: definition
title: "The Killing form of a semisimple Lie algebra"
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

Let $\mathfrak g$ be a complex semisimple Lie algebra. For $x,y\in \mathfrak g$, let $\operatorname{ad}_x,\operatorname{ad}_y\in \operatorname{End}(\mathfrak g)$ be the adjoint operators. The **Killing form** of $\mathfrak g$ is the symmetric bilinear form

$$B(x,y):=\operatorname{tr}(\operatorname{ad}_x\operatorname{ad}_y).$$

The trace is taken on the finite-dimensional vector space $\mathfrak g$. This is the invariant form used to define dual bases, the root-theoretic vectors $H_\alpha$, and the quadratic Casimir element on this page.
