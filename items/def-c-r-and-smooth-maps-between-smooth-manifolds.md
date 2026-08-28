---
id: def-c-r-and-smooth-maps-between-smooth-manifolds
kind: definition
title: "$C^r$ and smooth maps between smooth manifolds"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-smooth-manifold, def-coordinate-representation-of-a-map,
       def-ck-and-multi-index-notation-in-several-variables]
justified_by: [lem-chart-independence-of-c-r-smoothness]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.4"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
pipeline_run: null
---

## Definition

Let $M$ and $N$ be smooth manifolds, let $F:M\to N$ be a map, let $p\in M$ and
let $r\in\mathbb N_0\cup\{\infty\}$, where $\mathbb N_0=\{0,1,2,\ldots\}$.
Suppose $F$ is continuous at $p$. Then $F$ is **of class $C^r$ at $p$** when
there are smooth charts $(U,\varphi)$ of $M$ at $p$ and $(V,\psi)$ of $N$ at
$F(p)$ with $F(U)\subseteq V$ such that the coordinate representative

$$\psi\circ F\circ\varphi^{-1}:\varphi(U)\longrightarrow\psi(V)$$

([[def-coordinate-representation-of-a-map]]) is of class $C^r$ on a
neighbourhood of $\varphi(p)$ in the Euclidean sense of
[[def-ck-and-multi-index-notation-in-several-variables]]. By
[[lem-chart-independence-of-c-r-smoothness]], this condition is independent of
the chosen charts: if one such representative is $C^r$, then every one is, so
"some charts" may be read as "any charts". A map is **$C^r$ on an open set**
$W\subseteq M$ when it is continuous on $W$ and $C^r$ at every point of $W$. A
map that is $C^r$ for every finite $r$ — equivalently $C^\infty$ — is called
**smooth**; the term **$C^r$ map between smooth manifolds** is reserved for the
case where $F$ is continuous and the representative condition holds at every
point of $M$.

## Remarks

- **Continuity is part of the hypothesis, not a consequence, at this point.**
  The representative is only a map between open Euclidean sets when $F$ is
  continuous, as
  [[def-coordinate-representation-of-a-map]] records; that
  [[prop-smooth-maps-are-continuous]] later derives continuity from the
  $C^1$ representative condition does not change the definition.

- **The choice of charts is discharged.** The well-definedness obligation — that
  testing one chart pair agrees with testing every chart pair — is discharged by
  [[lem-chart-independence-of-c-r-smoothness]], which is why that lemma is named
  in `justified_by` rather than `deps`.
