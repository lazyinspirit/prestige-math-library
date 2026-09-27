---
page: homogeneous-resultants-and-projective-intersection-length
title: "Homogeneous Resultants and Projective Intersection Length"
status: draft
requires: [artinian-rings-and-length, rees-modules-artin-rees-and-hilbert-samuel-theory, koszul-complexes-and-regular-sequences, projective-algebraic-sets-projective-morphisms-and-cones, schemes-subschemes-and-morphisms-locally-of-finite-type, dimension-constructible-images-and-dimensions-of-fibres, linear-algebra-methods-in-combinatorics, the-fundamental-theorem-of-algebra]
items: [def-sylvester-resultant-of-binary-forms,
        lem-binary-resultant-scaling-specialization-and-dehomogenization,
        thm-binary-resultant-zero-iff-common-geometric-projective-root,
        lem-finite-variable-polynomial-rings-over-fields-are-ufds,
        lem-coprime-plane-forms-form-a-homogeneous-regular-sequence,
        lem-complete-intersection-hilbert-series-two-plane-forms,
        def-projective-scheme-from-a-homogeneous-quotient,
        lem-projective-standard-chart-prime-and-local-ring-correspondence,
        lem-standard-open-affine-chart-of-a-projective-quotient,
        cor-no-common-component-projective-plane-intersection-is-zero-dimensional,
        lem-zero-dimensional-projective-scheme-has-finite-local-charts,
        def-total-length-of-a-zero-dimensional-projective-scheme,
        lem-localisation-of-a-graded-ring-at-a-homogeneous-element,
        lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union,
        lem-base-change-of-a-zero-dimensional-projective-quotient,
        lem-eventual-hilbert-function-equals-zero-dimensional-projective-length,
        thm-projective-plane-complete-intersection-total-length,
        cor-projective-plane-bezout-length-form]
examples: []
---

The page begins with the elimination-theoretic resultant of two binary forms of
nominated positive degrees, defined as the determinant of the Sylvester
multiplication map $(A,B)\mapsto AF+BG$. The determinant scales in the two
forms, commutes with coefficient specialization, and controls the common zeros
of $F$ and $G$ on the projective line: $\operatorname{Res}_{d,e}(F,G)=0$ exactly
when $F$ and $G$ vanish together at a point of $\mathbf P^1$ over an algebraic
closure, the point at infinity being detected even when it has disappeared from
the affine chart.

The middle of the page passes to plane forms. Two forms of positive degree with
no common nonconstant factor form a regular sequence, so the graded pieces of
$k[x_0,x_1,x_2]/(F,G)$ are governed by the Hilbert series
$(1-t^d)(1-t^e)/(1-t)^3$, whose coefficients are constantly $de$ from degree
$d+e-2$ on. The quotient is a standard graded ring of dimension one and its
$\operatorname{Proj}$ is a zero-dimensional projective scheme; the standard
charts, their primes and their local rings are described explicitly, including
the standard open subschemes $D_+(f)$ and the graded localisation calculus that
makes their degree-zero rings well defined.

The last third turns the eventual Hilbert value into a length. For a
zero-dimensional projective quotient the point set is finite, the local rings
are finite-dimensional local $k$-algebras, and the total length
$\operatorname{len}_k(X)=\sum_x\ell_{\mathcal O_{X,x}}(\mathcal O_{X,x})[\kappa(x):k]$
is well defined and finite; the eventual value of the Hilbert function equals
this total length, the case of a finite base field being reduced to $k(t)$ by a
base-change argument. Applying this to $X=\operatorname{Proj}(k[x_0,x_1,x_2]/(F,G))$
gives $\operatorname{len}_k(X)=de$: at each point the local algebra is the
localisation of the quotient of the chart ring by the two dehomogenised
equations, and the Be\'zout formula is the same statement written as a sum of
local lengths weighted by residue degrees, the weights collapsing to one over an
algebraically closed field.

The Axiom of Choice is inherited in the construction of the affine structure
sheaves used to glue Proj, and is also stated in the zero-dimensional
chartwise finiteness and length results and in the base-change reduction.
