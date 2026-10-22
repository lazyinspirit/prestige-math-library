---
id: lem-satellite-operator-preserves-concordance
kind: lemma
title: "Satellite operators preserve concordance"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-cdr-satellite-concordance-categories
  - def-satellite-induced-concordance-operator
justified_by:
  []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Tim D. Cochran, Christopher W. Davis, and Arunima Ray, “Injectivity of satellite operators in knot concordance”"
      url: "https://arxiv.org/pdf/1205.5058v3"
      locator: "§2, satellite operations on concordances"
    - title: "Michael H. Freedman and Frank Quinn, Topology of 4-Manifolds"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/freedmanquinn.pdf"
      locator: "Theorem 9.3A, printed pp. 137–141: existence of a codimension-two normal vector bundle, relative to a prescribed closed collar germ; imported externally for the TOP branch."
---

## Statement

Let P⊂S¹×D² be a smooth oriented pattern. If oriented knots K₀ and K₁ are concordant in one of the four categories C_sm, C_top, C_ex or C^{1/n}, then P(K₀) and P(K₁) are concordant in the same category. Thus P induces a well-defined set map on each of these concordance sets.

## Statement references

[CDR, §2](https://arxiv.org/pdf/1205.5058v3)

## Facts & Assumptions

**Given:** A pattern P and a concordance annulus A from K₀ to K₁ in one of the stated ambient categories.

[F1] Satellite insertion uses a zero-framed tubular copy of S¹×D² around each endpoint knot ([[def-satellite-induced-concordance-operator]]).

[F2] Each category specifies the ambient 4-manifold and regularity of its concordance annulus ([[def-cdr-satellite-concordance-categories]]).

[F3] **External TOP input (not reconstructed here).** A locally flat proper surface in a topological four-manifold has an actual rank-two normal VECTOR-bundle neighborhood; where such a neighborhood is prescribed near a closed subset, including the boundary collars, it can be chosen to agree with that germ on a smaller neighborhood. This is Freedman–Quinn Theorem9.3A, printed137–141, used under the run-specific external-source boundary. It supplies the actual tube, not automatic agreement of arbitrary global framings. The cited statement and proof pages137–141 were read; no full-book reading or local reconstruction is claimed.

[F4] Every ambient concordance manifold here is oriented and is an $R$-homology $S^3\times I$, with $R=\mathbb Z$ in the standard, TOP and exotic cases and $R=R_n$ in the localized case. This follows from the defining ambient conditions. [[def-cdr-satellite-concordance-categories]]

## Proof

1.1 In the smooth product category, choose a tubular neighborhood of the smooth annulus A. Its oriented normal 2-plane bundle over A has relative Euler obstruction in H²(A,∂A;Z)≅Z. The boundary trivializations are the zero framings of K₀ and K₁; the relative obstruction is the difference of their self-linking numbers, hence zero. A relative framing therefore identifies a neighborhood of A with A×D² and agrees with the two prescribed endpoint zero-framed neighborhoods. [F1, F2, given]

1.2 In that framed neighborhood insert P in every disk fiber. The result is an embedded annulus from P(K₀) to P(K₁); the product collars and endpoint framings are preserved. This proves concordance preservation for smooth annuli in a standard product. [F1, F2, step 1.1, algebra]

2.1 In the exotic and localized cases the annulus is smooth, so the same smooth tubular construction is available in its given smooth ambient manifold. In the TOP case use the external input [F3] relative to the two actual smooth endpoint collars. In every case this gives an oriented rank-two vector normal bundle over $A$. Its obstruction to a framing extending the two preferred zero framings is its relative Euler number in $H^2(A,\partial A;\mathbb Z)$. Cap $A$ by boundary Seifert chains with opposite boundary orientations and push the caps into the product collars. Their union is a closed two-cycle. Its intersection with a relative small parallel copy of $A$ is the relative Euler number, because the two cap terms are precisely the endpoint zero-linking numbers. The cycle is zero over $R$ by [F4], so that Euler number is zero in $R$. The inclusion $\mathbb Z\hookrightarrow R$ is injective, hence it is zero integrally. Classification of oriented plane bundles with boundary framing now gives a framing of the actual normal bundle agreeing with both preferred endpoint framings. This proves the required relative framing, rather than inferring it from absolute triviality. [F1, F2, F3, F4, given, algebra]

2.2 Insert the product annulus $P\times I$ into this framed neighborhood, as in step1.2. Its endpoint knots are the untwisted satellites because both endpoint framings are the preferred zero framings. In the TOP case the product model makes the new annulus locally flat; in the three smooth categories it is smooth. The ambient manifold is the original $W$, so its homeomorphism or $R$-homology conditions do not change. Thus the satellite assignment preserves concordance in all four categories and descends to the stated set maps. [F1, F2, step 1.2, step 2.1, construct] ∎
