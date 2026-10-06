---
id: rem-bezout-needs-projective-algebraic-closure-multiplicity
kind: remark
title: Why Bezout needs projectivity, algebraic closure and multiplicity
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 6
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-projective-plane-curves-meet, def-axiom-of-choice, def-plane-projective-curve, lem-bezout-no-common-component-finite-intersection, thm-bezout-plane-curves]
forward_refs: [cex-affine-bezout-misses-points-at-infinity, cex-real-bezout-needs-algebraic-closure, cex-distinct-point-count-needs-multiplicity]
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

## Remarks

Assume the Axiom of Choice for the cited intersection results. For plane projective curves $C,D$ of degrees $d,e$ with no common component, the equality $\sum_pI_p(C,D)=de$ depends on projectivity, algebraic closure and multiplicity [[def-axiom-of-choice]].

**(a) Projectivity.** If the curves are considered only in an affine chart, any intersection points on the line at infinity are missing, so the sum over affine points is at most $de$ and is strictly smaller precisely when there is an intersection at infinity; equivalently one must add the contributions at infinity. The companion counterexample exhibits two affine lines with no common affine point whose projective closures meet at $[0:0:1]$; the missing point at infinity accounts for the deficit, so the affine count $0$ is strictly less than $de=1$ [[cex-affine-bezout-misses-points-at-infinity]].

**(b) Algebraic closure.** If the ground field is not algebraically closed, the intersection scheme may have points whose residue field is a nontrivial finite extension and which are invisible to the $k$-points, so no multiplicity-weighted count of $k$-rational points can equal $de$ in general; the published Bezout theorem is stated over an algebraically closed field for exactly this reason [[thm-bezout-plane-curves]], [[def-plane-projective-curve]]. The companion counterexample is the imaginary conic $V(x_0^2+x_1^2+x_2^2)$ with no real point on the line $V(x_1)$, while over the algebraic closure the two conjugate points contribute the full degree total [[cex-real-bezout-needs-algebraic-closure]].

**(c) Multiplicity.** If points are counted without multiplicity, a tangency between a line and a conic gives one point rather than two, and a shared tangent or a singular contact reduces the count below $de$; the local multiplicity is what repairs the count. The companion counterexample is the tangent line to a conic meeting it in a single point with $I_p=2$ [[cex-distinct-point-count-needs-multiplicity]].

Projectivity supplies completeness, algebraic closure makes all intersection points rational over the base field, and multiplicities encode the tangency and singularity defects; the general intersection is nonempty and finite precisely under the no-common-component hypothesis [[cor-projective-plane-curves-meet]], [[lem-bezout-no-common-component-finite-intersection]].
