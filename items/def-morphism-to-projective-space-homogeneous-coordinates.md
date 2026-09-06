---
id: def-morphism-to-projective-space-homogeneous-coordinates
kind: definition
title: "morphism to projective space homogeneous coordinates"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morphism-classical-varieties, def-projective-variety-classical, def-projective-space-points, def-regular-function-projective-variety]
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
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
point.
