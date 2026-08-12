---
id: def-universal-arrow-to-and-from-a-functor
kind: definition
title: "Universal arrows from an object to a functor and from a functor to an object"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-functor-and-contravariant-functor,
       def-comma-slice-and-coslice-categories, def-universal-element,
       thm-hom-assignments-are-functors]
justified_by: [thm-universal-arrows-are-initial-or-terminal-in-comma-categories]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, Sections 4.2 and 4.7"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Definition

Let $U:\mathcal D\to\mathcal C$ be a functor as in
[[def-functor-and-contravariant-functor]] and let $X$ be an object of
$\mathcal C$.

A **universal arrow from $X$ to $U$** is a pair $(R,\eta)$ with
$R\in\mathcal D$ and $\eta:X\to U(R)$ such that, for every $D\in\mathcal D$
and $f:X\to U(D)$, there is a unique $h:R\to D$ satisfying

$$f=U(h)\circ\eta.$$

When $\mathcal C$ is locally small, the relevant hom-assignment is a functor by
[[thm-hom-assignments-are-functors]], and equivalently $(R,\eta)$ is a
universal element of the covariant functor
$\mathcal C(X,U(-)):\mathcal D\to\mathbf{Set}$ in the sense of
[[def-universal-element]].

A **universal arrow from $U$ to $X$** is a pair $(R,\varepsilon)$ with
$\varepsilon:U(R)\to X$ such that, for every $D\in\mathcal D$ and
$f:U(D)\to X$, there is a unique $h:D\to R$ satisfying

$$f=\varepsilon\circ U(h).$$

When $\mathcal C$ is locally small, equivalently $(R,\varepsilon)$ is a
universal element of the presheaf
$\mathcal C(U(-),X):\mathcal D^{\mathrm{op}}\to\mathbf{Set}$. The associated
comma categories $(X\downarrow U)$ and $(U\downarrow X)$ are those of
[[def-comma-slice-and-coslice-categories]].
