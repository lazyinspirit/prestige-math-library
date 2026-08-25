---
id: def-vector-potential-of-a-c1-vector-field
kind: definition
title: "Vector potentials of a continuous field on an open subset of $\\mathbb R^3$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-divergence-and-curl-of-a-c1-vector-field, def-ck-euclidean-maps-and-diffeomorphisms, def-closed-and-exact-c1-vector-fields, lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules, thm-the-curl-of-a-gradient-vanishes]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), section 4.1"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R^3$ be open and let $B:U\to\mathbb R^3$ be continuous. Given a map $A:U\to\mathbb R^3$, we say $A$ is a **vector potential** for $B$ when $A$ is $C^1$ on $U$ and $\operatorname{curl}A=B$ at every point of $U$, with the curl of [[def-divergence-and-curl-of-a-c1-vector-field]] and the class $C^1$ of [[def-ck-euclidean-maps-and-diffeomorphisms]]. A field admitting a vector potential is said to **have a vector potential** on $U$.

## Remarks

- **This is the curl analogue of exactness, not the same notion.** A field is exact when it is the gradient of a $C^2$ scalar ([[def-closed-and-exact-c1-vector-fields]]); it has a vector potential when it is the curl of a $C^1$ field. The two conditions constrain a field in different ways: on an open subset of $\mathbb R^3$ a gradient of a $C^2$ function has vanishing curl and a curl of a $C^2$ field has vanishing divergence.

- **Nonuniqueness on a nonempty domain.** If $U$ is nonempty and $A$ is a vector potential for $B$, take the $C^2$ coordinate function $\phi(x)=x_0$. Then $A+\nabla\phi=A+e_0$ is distinct from $A$, is $C^1$, and has the same curl by the linearity of curl ([[lem-divergence-and-curl-are-linear-and-obey-the-scalar-product-rules]]) and $\operatorname{curl}\nabla\phi=0$ ([[thm-the-curl-of-a-gradient-vanishes]]). On the empty open set there is only one map to $\mathbb R^3$, so the nonempty hypothesis is essential to this remark.
