---
id: def-morphism-to-projective-space-homogeneous-coordinates
kind: definition
title: "morphism to projective space homogeneous coordinates"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-classical-algebraic-prevariety-regular-maps-and-varieties, def-projective-variety-classical, def-projective-space-points, def-regular-function-projective-variety, lem-standard-projective-opens-are-affine-spaces]
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: n/a
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-08-receipts.jsonl (def-morphism-to-projective-space-homogeneous-coordinates). No independent judge or whole-closure certification.
    delegated_by: owner
---

## Definition

Let $X\subseteq\mathbf P_k^n$ be a classical projective variety. A map
$\varphi:X\to\mathbf P_k^m$ is a projective morphism if there is an open cover
$X=\bigcup_\alpha U_\alpha$ such that, for every $\alpha$, homogeneous
polynomials $F_{\alpha,0},\ldots,F_{\alpha,m}$ of one common degree have no
common zero on $U_\alpha$ and
$$\varphi(p)=[F_{\alpha,0}(p):\cdots:F_{\alpha,m}(p)]\qquad(p\in U_\alpha).$$
On each $U_\alpha\cap\{F_{\alpha,i}\ne0\}$ the target-chart coordinates are
the regular functions $F_{\alpha,j}/F_{\alpha,i}$. The local tuples define
one map precisely when, for every $p\in U_\alpha\cap U_\beta$,
$$F_{\alpha,i}(p)F_{\beta,j}(p)=F_{\alpha,j}(p)F_{\beta,i}(p)\quad\text{for all }i,j;$$
equivalently, they give the same projective point there. Multiplying every
entry of one tuple by a common locally nonvanishing regular factor changes no
projective point on its domain; the resulting representatives need not
themselves be homogeneous polynomials.

This local description agrees with regular maps of classical varieties.
Each target standard chart is affine space
([[lem-standard-projective-opens-are-affine-spaces]]), and the target-chart
coordinates of a tuple are the regular equal-degree fractions
$F_{\alpha,j}/F_{\alpha,i}$ where $F_{\alpha,i}\ne0$
([[def-regular-function-projective-variety]]). The chart criterion for regular
maps therefore applies ([[def-classical-algebraic-prevariety-regular-maps-and-varieties]]).
Conversely, near a point mapped into the $i$th target chart, each of its
finitely many coordinate functions is a regular degree-zero fraction
$G_j/H_j$ with $H_j$ nonzero at that point. Shrink to the common nonvanishing
domain of the $H_j$, put $H=\prod_{j\ne i}H_j$, and set
$F_i=H$ and $F_j=G_j\prod_{\ell\ne i,j}H_\ell$. These are homogeneous
polynomials of one common degree, $F_i$ is nonzero on the shrunken domain,
and $F_j/F_i=G_j/H_j$. For $m=0$, use the one-entry tuple $(1)$.
Taking all such eligible local domains forms an open cover without choosing
one tuple at every point.
