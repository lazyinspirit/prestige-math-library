---
id: lem-khovanov-frobenius-tqft-respects-barnatan-relations
kind: lemma
title: "The Khovanov Frobenius TQFT respects the Bar-Natan relations"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-barnatan-tangle-cobordism-category
  - def-khovanov-frobenius-algebra-and-cube-of-resolutions
dependency_level: 2
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice principle is used; the verification consists of finitely many algebraic identities."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dror Bar-Natan, Khovanov's homology for tangles and cobordisms, Proposition 7.2"
      url: "https://arxiv.org/pdf/math/0410495v2"
      locator: "Printed pp.1470–1471; explicit S, T, and 4Tu checks"
    - title: "Louis H. Kauffman, An Introduction to Khovanov Homology, §5"
      url: "https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf"
      locator: "PDF pp.18–25; cobordism category, four-tube relation, and tube-cutting identity"
---

## Statement

Let \(\mathsf{Cob}_3\) be the additive monoidal category of oriented cobordisms before the S, T, and four-tube relations are imposed, and let \(\mathsf{Cob}_{BN}\) be its quotient by those relations. Suppose \(F:\mathsf{Cob}_3\to\mathsf{GrAb}\) is a symmetric monoidal functor to graded abelian groups and homogeneous maps, with a circle sent to \(\mathcal A=\mathbb Z[X]/(X^2)\), a cup to \(\eta(1)=1\), a cap to \(\epsilon(1)=0,\epsilon(X)=1\), a merge pair of pants to \(m\), and a split pair of pants to \(\Delta(1)=1\otimes X+X\otimes1,\ \Delta(X)=X\otimes X\). Then every sphere component is sent to zero, every disjoint torus component acts by multiplication by \(2\), and the two sides of the four-tube relation induce the same map. Therefore \(F\) factors through an additive monoidal functor on \(\mathsf{Cob}_{BN}\).

## Statement references

[[def-barnatan-tangle-cobordism-category|The surface category and its S, T, and four-tube relations]]

[[def-khovanov-frobenius-algebra-and-cube-of-resolutions|The integral Khovanov Frobenius algebra]]

[Bar-Natan, *Khovanov's homology for tangles and cobordisms*, Proposition 7.2](https://arxiv.org/pdf/math/0410495v2)

[Kauffman, *An Introduction to Khovanov Homology*, §5](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/kaufmann.pdf)

## Facts & Assumptions

**Given:** The additive monoidal category \(\mathsf{Cob}_{BN}\) and the algebra \(\mathcal A\) with the stated structure maps.

[F1] [[def-khovanov-frobenius-algebra-and-cube-of-resolutions]] gives the free basis \(\{1,X\}\), the unit, counit, multiplication, and comultiplication formulas in the statement, and verifies the Frobenius identities on that basis.

[F2] [[def-barnatan-tangle-cobordism-category]] defines \(\mathsf{Cob}_3\) by gluing and disjoint union, and defines \(\mathsf{Cob}_{BN}\) by imposing the sphere, torus, and four-tube relations in every surrounding cobordism.

## Proof

1.1 By the assumed functoriality of \(F\), gluing cobordisms is sent to composition of maps and disjoint union is sent to tensor product. Thus the only additional relations to check before factoring through the quotient are the three local relations in [F2]. [F2, given]

1.2 A sphere is evaluated by \(\epsilon\eta\), and \(\epsilon(\eta(1))=\epsilon(1)=0\). A torus is evaluated by \(\epsilon m\Delta\eta\); on the generator \(1\), \(\Delta(1)=1\otimes X+X\otimes1\), then \(m\Delta(1)=2X\), and \(\epsilon(2X)=2\). These are exactly the S and T relations, including when glued into any surrounding cobordism because the TQFT respects composition and tensor product. [F1, F2, algebra]

2.1 In the four-tube relation, each side consists locally of two ways to attach one tube. Applying the TQFT to the local four-disk input \(1\), either side gives
\[
X\otimes1\otimes1\otimes1+
1\otimes X\otimes1\otimes1+
1\otimes1\otimes X\otimes1+
1\otimes1\otimes1\otimes X.
\]
This follows by applying \(\Delta(1)=1\otimes X+X\otimes1\) at each tube attachment and \(\epsilon(1)=0,\epsilon(X)=1\) at the two cut disks. The equality on the local input implies equality as maps: tensoring with identity maps and composing with the maps for the unchanged part of the surface preserves equality. Thus the four-tube relation is respected. [F1, F2, step 1.1, algebra]

3.1 Every generating local relation of \(\mathsf{Cob}_{BN}\) is respected by steps 1.2 and 2.1, while the Frobenius identities respect the isotopy and gluing presentation by step 1.1. Therefore the TQFT factors through the quotient defining \(\mathsf{Cob}_{BN}\), as asserted. [F1, F2, step 1.1, step 1.2, step 2.1] ∎
