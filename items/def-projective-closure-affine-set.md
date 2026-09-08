---
id: def-projective-closure-affine-set
kind: definition
title: "projective closure affine set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-algebraic-set]
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
    model: "gpt-6-astra"
    verdict: pass
    date: 2026-09-08
    scope: "Local prerequisite and definition repair; not independent review"
    delegated_by: "owner UC-73 audit request"
---

## Definition

Fix an algebraically closed field $k$ and $n\ge0$, and write $\mathbf A_k^n=k^n$. The map $\iota(a)=[1:a_1:\cdots:a_n]$ identifies this set with the chart $D_+(x_0)=\{[b]:b_0\ne0\}$; its inverse is $[b]\mapsto(b_1/b_0,\ldots,b_n/b_0)$.

For any subset $A\subseteq k^n$, its **projective closure** is
$$\overline A^{\rm proj}=\bigcap\{Z\subseteq\mathbf P_k^n: Z\text{ is a projective algebraic set and }\iota(A)\subseteq Z\}.$$
Here projective algebraic sets are the homogeneous zero loci of [[def-projective-algebraic-set]]. Arbitrary intersections are zero loci of unions of the defining homogeneous equations. Finite unions are closed too: if $Z=V_+(S)$ and $W=V_+(T)$, then $Z\cup W=V_+(\{FG:F\in S,\ G\in T\})$, since a point outside both sets has a nonzero factor from each. The empty set and whole space are such zero loci. Thus these sets form the closed sets of the projective Zariski topology, and the displayed intersection is its closure operation. In particular $\overline\varnothing^{\rm proj}=\varnothing$.

The complement of this affine chart is $V_+(x_0)$, the hyperplane at infinity (empty when $n=0$). The construction applies in particular when $A$ is an affine algebraic set, meaning a common zero locus of polynomials in $k[x_1,\ldots,x_n]$. No choice principle is used in this definition or the closed-set verification.
