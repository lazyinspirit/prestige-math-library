---
id: ex-two-plane-cubics-nine-points
kind: example
title: Two transverse cubics meet in nine points
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 7
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-projective-plane-curves-meet, cor-transverse-smooth-curves-intersection-one, def-axiom-of-choice, def-local-intersection-multiplicity-plane-curves, def-plane-projective-curve, def-polynomial-evaluation-and-root, lem-bezout-no-common-component-finite-intersection, prop-algebraically-closed-splitting-and-finite-extension-criteria, thm-bezout-plane-curves]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "William Fulton, Algebraic Curves: An Introduction to Algebraic Geometry (2008 electronic edition; Internet Archive copy of the author's PDF)"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Notes for a Course in Algebraic Geometry (January 26, 2022 version), Chapter 1"
      url: "https://math.mit.edu/classes/18.721/notes/ag-jan26-2022.pdf"
---

## Example

Assume the Axiom of Choice, inherited from the cited local-length, smoothness or Bezout suppliers.

Let $k$ be algebraically closed of characteristic not three and let $C=V(x_0^3+x_1^3+x_2^3)$ and $D=V(x_0x_1x_2)$. Then $C\cap D$ consists exactly of the nine points with one coordinate zero and the other two coordinates $a,b$ satisfying $a^3+b^3=0$; at each of them $C$ and $D$ are smooth with distinct tangent lines, so every local multiplicity is one and $\sum_pI_p=9=3\cdot3$, as Bezout requires. The cusp and node computations on this page illustrate higher local multiplicities at singular contacts; this configuration has nine distinct contacts of multiplicity one.

## Facts & Assumptions

**Given:** AC [[def-axiom-of-choice]], an algebraically closed field $k$ of characteristic not three, the Fermat cubic $C=V(x_0^3+x_1^3+x_2^3)$ and the triangle $D=V(x_0x_1x_2)$.

[F1] A repeated irreducible factor of the Fermat form would divide all three derivatives $3x_0^2,3x_1^2,3x_2^2$, which have no common nonconstant factor because $3\ne0$. Thus it is square-free; the triangle is a product of three distinct prime linear factors. None of those factors divides the Fermat form (setting each coordinate to zero leaves a nonzero binary cubic), so the two degree-three forms have no common factor, so $C,D$ are plane projective curves of degree three with no common component [[def-plane-projective-curve]]. In particular their intersection is nonempty and finite [[cor-projective-plane-curves-meet]], [[lem-bezout-no-common-component-finite-intersection]], and Bezout gives $\sum_pI_p=9$ [[thm-bezout-plane-curves]].

[F2] A point lies on $D$ exactly when one of its coordinates vanishes. If, say, $x_0=0$, then the cubic equation reads $x_1^3+x_2^3=0$ with $x_1x_2\ne0$, so $[0:a:b]$ with $a^3+b^3=0$; over the algebraically closed field and in characteristic not three the ratio $b/a$ solves $1+t^3=0$, which splits over $k$ [[prop-algebraically-closed-splitting-and-finite-extension-criteria]]. No root is repeated: a repeated root would annul the derivative $3t^2$, whereas every root is nonzero and $3\ne0$. Thus the ratio takes three distinct values, so this coordinate line contributes three points, and the same holds for the other two coordinate lines; their intersection subsets with $C$ are disjoint, because the pairwise intersections of the coordinate lines are the coordinate vertices and no such vertex satisfies the cubic equation, giving exactly nine points [[def-polynomial-evaluation-and-root]].

[F3] At each intersection point $C$ is smooth: not all of $3x_0^2,3x_1^2,3x_2^2$ vanish for a nonzero point, and the characteristic is not three. At a point with exactly one vanishing coordinate $D$ is also smooth, with tangent line the corresponding coordinate line, and the tangent line of $C$ there is not that coordinate line. Hence the two curves meet transversally at each of the nine points and every local multiplicity equals one [[cor-transverse-smooth-curves-intersection-one]], [[def-local-intersection-multiplicity-plane-curves]].

## Verification

1.1 The intersection set: as computed in [F2], each of the three coordinate lines contains exactly three points of $C$, and there are no other points of $D$; hence $C\cap D$ has exactly nine points. [F1, F2, given]

1.2 At each of these nine points both curves are smooth with distinct tangent lines by [F3], so the local multiplicity is one at every intersection point. [F3, given]

2.1 Summing the nine unit multiplicities gives $\sum_pI_p=9=3\cdot3$, in agreement with the Bezout count of [F1]; since the total equals the number of distinct points, all multiplicities are one, as asserted. [step 1.1, step 1.2, F1, F3] ∎ 