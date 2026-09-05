---
id: def-regular-root-hyperplane-arrangement-in-a-cartan-subalgebra
kind: definition
title: "The regular root-hyperplane arrangement in a Cartan subalgebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-root-space-decomposition-relative-to-a-cartan-subalgebra]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-05
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

Let $\mathfrak h$ be a Cartan subalgebra of a complex semisimple Lie algebra with root set $\Phi$ from [[thm-root-space-decomposition-relative-to-a-cartan-subalgebra]]. The **regular root-hyperplane arrangement** in $\mathfrak h$ is the complement

$$\mathfrak h_{\mathrm{reg}}:=\{h\in \mathfrak h : \alpha(h)\ne 0 \text{ for every } \alpha\in \Phi\}. $$

Equivalently, $\mathfrak h_{\mathrm{reg}}$ is obtained from $\mathfrak h$ by removing the finitely many root hyperplanes $\ker \alpha$.
