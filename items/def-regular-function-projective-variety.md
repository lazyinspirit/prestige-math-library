---
id: def-regular-function-projective-variety
kind: definition
title: "regular function projective variety"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-projective-variety-classical, def-homogeneous-coordinate-ring, lem-projective-irreducibility-homogeneous-prime, def-field-of-fractions, thm-field-of-fractions-is-a-field-and-the-domain-embeds]
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

For a classical projective variety $X$, the homogeneous coordinate ring
$S(X)$ is a graded domain by the choice-free irreducibility clause of [[lem-projective-irreducibility-homogeneous-prime]]. Its fraction field exists by [[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]. Define its field of rational functions to be the degree-zero subfield
$$k(X)=\left\{\frac GH\in\operatorname{Frac}(S(X)):G,H\text{ are homogeneous of the same degree and }H\ne0\right\}.$$
This is a subfield: multiplying fractions adds numerator and denominator degrees equally, adding them uses a common homogeneous denominator, and a nonzero fraction is inverted by interchanging its numerator and denominator. Zero is represented by $0/1$.

A rational function $f\in k(X)$ is regular at $p\in X$ if
$f=G/H$ for such homogeneous $G,H$ with $H(p)\ne0$. It is regular on
$U\subseteq X$ if it is regular at every point of $U$. Evaluation is independent of a homogeneous representative because the numerator and denominator scale by the same power; two expressions for the same fraction have equal cross products and hence equal values wherever both denominators are nonzero.

For an open subset $U\subseteq X$, write $\mathcal O_X(U)$ for the ring of actual functions $s:U\to k$ that are locally evaluations of such equal-degree fractions with nonvanishing denominator. For $U=\varnothing$ this is the one-element zero ring. For nonempty $U$, these functions identify with the rational functions regular everywhere on $U$: any two local representatives agree as fractions, since their cross difference is homogeneous and vanishes on a nonempty open of the irreducible space $X$, hence on $X$. Nonempty opens intersect, and a homogeneous zero locus is closed, which justifies this assertion. Thus any one local representative gives the common rational function. This construction uses no Axiom of Choice.
