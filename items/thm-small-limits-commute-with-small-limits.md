---
id: thm-small-limits-commute-with-small-limits
kind: theorem
title: "Iterated small limits commute: either order is canonically isomorphic to the limit over the product category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-limit-and-colimit-of-a-diagram, thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism, def-product-category, def-cardinality-of-a-small-category-and-kappa-small-diagram]
justified_by: []
aliases: []
landmark: true
proof_strategy: universal-property
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Theorem 3.8.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement

Let $\mathcal J$ and $\mathcal K$ be small and let
$D:\mathcal J\times\mathcal K\to\mathcal C$. Whenever the displayed limits
exist, there are canonical compatible isomorphisms

$$\lim_j\lim_kD(j,k)\cong \lim_{(j,k)}D(j,k)\cong \lim_k\lim_jD(j,k).$$

## Facts & Assumptions

**Given:** Small $\mathcal J,\mathcal K$, the diagram $D$, and the limits in
the statement.

[F1] A limit represents cones by unique arrows
([[def-limit-and-colimit-of-a-diagram]]).

[L1] Two limits of one diagram have a unique compatible isomorphism
([[thm-limits-and-colimits-are-unique-up-to-unique-compatible-isomorphism]]).

[F2] The product category has objects $(j,k)$ and componentwise morphisms
([[def-product-category]]).

[F3] The cardinality of a small category is the cardinality of its morphism
set, and a small diagram is one with a small indexing category
([[def-cardinality-of-a-small-category-and-kappa-small-diagram]]).

## Proof

**Proof technique:** universal property.

1.1 By [F2], a cone from $X$ to $D$ is exactly a family of arrows $X\to D(j,k)$ compatible separately with every $\mathcal J$-arrow and every $\mathcal K$-arrow. [F2]

2.1 For each $j$, the $\mathcal K$-limit turns such a compatible $k$-family into one unique arrow $X\to\lim_kD(j,k)$. Compatibility in $j$ turns these into a cone over the resulting $\mathcal J$-diagram, and its limit turns the family into one unique arrow $X\to\lim_j\lim_kD(j,k)$. Both constructions reverse by the two universal properties. [F1, step 1.1]

3.1 Hence the first iterated limit has the universal property of the $\mathcal J\times\mathcal K$-limit. By [L1] it is uniquely compatibly isomorphic to that limit. Interchanging $j$ and $k$ proves the second isomorphism. [F1, L1, step 2.1]

4.1 If either index category is empty, step 1.1 describes an empty family, so each existing expression is a terminal object and [L1] gives the same canonical isomorphisms. The morphisms of $\mathcal J\times\mathcal K$ form a subset of the Cartesian product of the two morphism sets, so [F3] makes the product category small and no large diagram has been introduced. [L1, F3, step 1.1] ∎
