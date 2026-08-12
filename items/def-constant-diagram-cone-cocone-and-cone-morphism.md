---
id: def-constant-diagram-cone-cocone-and-cone-morphism
kind: definition
title: "Constant diagrams, cones, cocones, and their morphisms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-diagram-in-a-category, def-natural-transformation, def-functor-and-contravariant-functor]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Definitions 3.1.1 and 3.1.5"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Definition

Let $\mathcal J$ and $\mathcal C$ be categories and let $c\in\mathcal C$. The
**constant diagram** at $c$ is the functor
$\Delta c:\mathcal J\to\mathcal C$ that sends every object to $c$ and every
morphism to $1_c$ ([[def-functor-and-contravariant-functor]]).

For a diagram $D:\mathcal J\to\mathcal C$ ([[def-diagram-in-a-category]]), a
**cone over $D$ with apex $c$** is a natural transformation
$\lambda:\Delta c\Rightarrow D$ ([[def-natural-transformation]]). Thus it is a
family $\lambda_j:c\to D(j)$ satisfying

$$D(u)\lambda_j=\lambda_k\qquad(u:j\to k).$$

A **morphism of cones** $(c,\lambda)\to(c',\lambda')$ is a morphism
$h:c\to c'$ such that $\lambda'_j h=\lambda_j$ for every $j$. Cones and their
morphisms form the category $\operatorname{Cone}(D)$.

Dually, a **cocone under $D$ with apex $c$** is a natural transformation
$\rho:D\Rightarrow\Delta c$, so
$\rho_kD(u)=\rho_j$. A **morphism of cocones**
$(c,\rho)\to(c',\rho')$ is a morphism $h:c\to c'$ satisfying
$h\rho_j=\rho'_j$ for every $j$. These form $\operatorname{Cocone}(D)$.
