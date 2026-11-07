---
id: def-decomposition-and-inertia-groups-for-global-function-fields
kind: definition
title: "Decomposition and inertia groups for global function fields"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-function-field-coefficient-ring
  - def-global-field
  - def-finite-galois-extension-and-galois-group
  - def-integral-ring-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Roland Auer, Ray Class Fields of Global Function Fields with Many Rational Places, Part I §3"
      url: "https://webdoc.sub.gwdg.de/ebook/dissts/Oldenburg/Auer1999.pdf"
verification: {}
---

## Definition

Let $K$ be a global function field with function-field coefficient ring $A$, let $L/K$ be a finite Galois extension, and let $B$ be the subring of $L$ consisting of elements integral over $A$. For a nonzero prime ideal $\mathfrak q\subset A$ and a maximal ideal $\mathfrak P\subset B$ with $\mathfrak P\cap A=\mathfrak q$, put $\kappa(\mathfrak q)=A/\mathfrak q$ and $\kappa(\mathfrak P)=B/\mathfrak P$; these are fields because $A$ is Dedekind and $\mathfrak P$ is maximal. The **decomposition group** at $\mathfrak P$ is
$$D(\mathfrak P/\mathfrak q)=\{\sigma\in\operatorname{Gal}(L/K):\sigma(\mathfrak P)=\mathfrak P\}.$$
Every $\sigma\in\operatorname{Gal}(L/K)$ preserves $B$, since it fixes $A$ and therefore sends any element satisfying a monic equation over $A$ to another such element. Each $\sigma\in D(\mathfrak P/\mathfrak q)$ consequently induces a $\kappa(\mathfrak q)$-automorphism of $\kappa(\mathfrak P)$ by $b+\mathfrak P\mapsto\sigma(b)+\mathfrak P$; the map is well-defined because $\sigma(\mathfrak P)=\mathfrak P$ and fixes $A$. The **inertia group** is the kernel
$$I(\mathfrak P/\mathfrak q)=\ker\bigl(D(\mathfrak P/\mathfrak q)\longrightarrow\operatorname{Aut}_{\kappa(\mathfrak q)}(\kappa(\mathfrak P))\bigr).$$

## Definition references

[[def-function-field-coefficient-ring]]

[[def-global-field]]

[[def-finite-galois-extension-and-galois-group]]

[[def-integral-ring-extension]]

Roland Auer, *Ray Class Fields of Global Function Fields with Many Rational Places*, Part I §3, printed pp. 19–20 (PDF pp. 18–19): https://webdoc.sub.gwdg.de/ebook/dissts/Oldenburg/Auer1999.pdf
