---
id: thm-fundamental-group-of-a-product
kind: theorem
title: '$\pi_1(X\times Y,(x_0,y_0))\cong\pi_1(X,x_0)\times\pi_1(Y,y_0)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-based-loops-and-fundamental-group, thm-fundamental-group-laws,
       def-homotopy-relative-and-path-homotopy,
       def-induced-homomorphism-on-fundamental-groups,
       thm-induced-fundamental-group-map-functoriality,
       def-product-topology, thm-product-universal-property,
       def-external-direct-product-of-groups,
       thm-external-direct-product-is-a-group,
       def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 2, Section 8"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Statement

For pointed topological spaces $(X,x_0)$ and $(Y,y_0)$, the coordinate projections induce a natural group isomorphism

$$\Theta:\pi_1(X\times Y,(x_0,y_0))\longrightarrow\pi_1(X,x_0)\times\pi_1(Y,y_0),\qquad [\gamma]\longmapsto([\pi_X\gamma],[\pi_Y\gamma]).$$

Its inverse sends $([\alpha],[\beta])$ to the class of the paired loop $s\mapsto(\alpha(s),\beta(s))$.

## Facts & Assumptions

**Given:** Pointed spaces $(X,x_0)$ and $(Y,y_0)$, their product, and the two coordinate projections.

[F1] A map into a product is continuous exactly when every coordinate map is continuous, and the map with prescribed coordinates is unique ([[thm-product-universal-property]]).

[F2] Loop concatenation is well defined on path-homotopy classes and gives the fundamental-group operation ([[thm-fundamental-group-laws]]).

[F3] Componentwise multiplication makes the external direct product of two groups a group ([[thm-external-direct-product-is-a-group]]).

[F4] A path homotopy relative to endpoints is a homotopy whose two endpoint tracks are constant ([[def-homotopy-relative-and-path-homotopy]]).

[F5] A pointed continuous map sends $[\alpha]$ to $[f\circ\alpha]$ by a well-defined group homomorphism, and induced maps respect identities and composition ([[thm-induced-fundamental-group-map-functoriality]]).

## Proof

**Proof technique:** direct.

1.1 Projection sends a loop in $X\times Y$ to one loop in each factor. If two product loops are path-homotopic relative to endpoints, composing the homotopy with either projection gives a path homotopy of the coordinate loops by [F4]. Thus the displayed rule $\Theta$ is well defined. [F1, F4]

1.2 Conversely, [F1] makes $s\mapsto(\alpha(s),\beta(s))$ a continuous based loop. Pairing two endpoint-fixed homotopies gives a product homotopy by the same characteristic property, so the resulting class depends only on $[\alpha]$ and $[\beta]$. This defines a function $\Xi$ from the direct product to $\pi_1(X\times Y,(x_0,y_0))$. [F1, F4, construct]

2.1 Projections commute with concatenation, so [F2] and [F3] show that $\Theta$ is a group homomorphism. [step 1.1, F2, F3]

3.1 Coordinatewise concatenation shows that $\Xi$ is a homomorphism. By construction $\Theta\Xi([\alpha],[\beta])=([\alpha],[\beta])$, and uniqueness of a map with given coordinates in [F1] gives $\Xi\Theta[\gamma]=[\gamma]$. Hence $\Theta$ and $\Xi$ are inverse group isomorphisms. [step 1.1, step 2.1, step 1.2, F1, F2, F3]

4.1 Let $f:(X,x_0)\to(X',x'_0)$ and $g:(Y,y_0)\to(Y',y'_0)$ be pointed continuous maps. By [F1], their product $f\times g$ is pointed and continuous. Composition with any pointed continuous map preserves endpoint-fixed homotopies and commutes with loop concatenation, so [F2], [F4], and [F5] make all three induced maps in the naturality square well-defined homomorphisms. For every product-loop class $[\gamma]$, both $(f_*\times g_*)\Theta_{X,Y}[\gamma]$ and $\Theta_{X',Y'}(f\times g)_*[\gamma]$ equal $$\bigl([f\circ\pi_X\circ\gamma],[g\circ\pi_Y\circ\gamma]\bigr).$$ Thus the naturality square commutes for every pair $(f,g)$, so the displayed group isomorphism is natural. [step 1.1, F1, F2, F4, F5] ∎
