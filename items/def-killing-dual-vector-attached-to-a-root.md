---
id: def-killing-dual-vector-attached-to-a-root
kind: definition
title: "The Killing-dual vector attached to a root"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [prop-killing-form-pairs-only-opposite-root-spaces]
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

Let $\mathfrak g$ be a complex semisimple Lie algebra, let $\mathfrak h$ be a Cartan subalgebra, and let $\alpha\in \mathfrak h^*$ be a root. By [[prop-killing-form-pairs-only-opposite-root-spaces]], the Killing form restricts nondegenerately to $\mathfrak h$. Therefore there is a unique vector $H_\alpha\in \mathfrak h$ such that

$$\alpha(h)=B(H_\alpha,h) \qquad (h\in \mathfrak h).$$

This vector is the **Killing-dual vector attached to the root $\alpha$**.
