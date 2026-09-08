---
id: lem-standard-projective-opens-are-affine-spaces
kind: lemma
title: "standard projective opens are affine spaces"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-projective-space-points, thm-projective-zariski-topology]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Algebraic Geometry, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/AG.pdf"
    - title: "Michael Artin, Algebraic Geometry, Chapter 3"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
verification:
  precheck: pass
  verified:
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local prerequisite and chart proof repair; not independent judging or whole-closure certification."
    delegated_by: "Owner-requested UC-73 audit"
---

## Statement

For every $i$, normalization of the $i$th coordinate identifies $D_+(x_i)$ with $\mathbf A_k^n$. In particular $[a_0:\cdots:a_n]\mapsto(a_1/a_0,\ldots,a_n/a_0)$ identifies $D_+(x_0)$ with $\mathbf A_k^n$.

Here $\mathbf A_k^n=k^n$, with closed subsets the common zero sets of families of polynomials. On any open subset its regular functions are functions locally equal to a polynomial quotient with nonvanishing denominator. Transporting these functions through the displayed charts gives compatible regular-function structures on projective space. The identifications are homeomorphisms and isomorphisms for these structures.

## Proof

**Given:** $[a]\in D_+(x_i)$.

1.1 Multiplication by $a_i^{-1}$ gives the unique representative with $i$th coordinate $1$. [given, algebra]

2.1 Retaining the remaining coordinates and reinserting $1$ give mutually inverse maps. [step 1.1, construct]

3.1 A homogeneous polynomial restricted to the representative with $i$th coordinate 1 becomes an ordinary polynomial in the other coordinates. Conversely, for any polynomial $h$ in those coordinates, multiply $h(x_j/x_i)_{j\ne i}$ by $x_i^{\deg h}$ to obtain a homogeneous polynomial with the same zero set on the chart. Thus relative projective closed sets correspond exactly to affine polynomial zero sets, proving that the bijection is a homeomorphism. The affine closed-set axioms also follow directly: intersections combine equations and finite unions use pairwise products of equations. [step 2.1, algebra]

4.1 On the overlap with chart $j$, write $u_l=a_l/a_i$ and $u_i=1$. The new coordinates are $v_l=u_l/u_j$, with $u_j\ne0$; the inverse has the same form with $i,j$ exchanged. Substituting these ratios into a local polynomial quotient and clearing powers of $u_j$ again gives a polynomial quotient with nonvanishing denominator. Hence transition maps preserve regular functions in both directions. The local quotient condition is preserved under restriction and gluing of functions, so the transported structures agree on overlaps and define the claimed chart isomorphisms, including the one-point case $n=0$. [step 2.1, step 3.1, algebra] ∎
