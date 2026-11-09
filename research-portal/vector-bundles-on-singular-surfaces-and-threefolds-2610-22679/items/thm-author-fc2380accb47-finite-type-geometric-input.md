---
id: thm-author-fc2380accb47-finite-type-geometric-input
kind: theorem
title: External finite-type dimension, rational-point and etale-fiber inputs
status: published
domain: mathematics
deps: []
dependency_roles: {}
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: The Stacks Project, finite-type dimensions and image closures
      url: https://stacks.math.columbia.edu/tag/06LF
      locator: Lemmas33.20.3(2),(4),(6),(10), 33.20.4(2) and33.20.5, full indicated
        proofs; also Lemma33.20.2 for zero-dimensional context.
      statement: Finite-type dimension/codimension is computed by transcendence
        degrees; image closure has dimension at most the source; product
        dimensions add. These give dimensions of locally trivial affine bundles
        and bounds for projected incidence schemes.
      hypotheses: Locally algebraic schemes over a field; source irreducible
        in33.20.4(2), applied componentwise when necessary; finite-type schemes
        in this application have finitely many components and finite dimension.
      reading_limits: Read actual full Lemmas33.20.2–33.20.5 statements and displayed
        proofs, including the transcendence-degree proof of33.20.4(2). No
        reading of all underlying commutative-algebra dimension references is
        claimed.
    - title: The Stacks Project, closed points on finite-type field schemes
      url: https://stacks.math.columbia.edu/tag/0478
      locator: Lemma33.14.1, full statement/proof.
      statement: Schemes locally of finite type over a field are Jacobson and
        closed-point residue fields are algebraic over that field. Thus nonempty
        finite-type opens over algebraically closed k have k-rational closed
        points.
      hypotheses: Locally finite type over a field; algebraic closure is used only to
        identify closed-point residue fields with k.
      reading_limits: Read the complete actual lemma and its proof reduction to the
        Hilbert Nullstellensatz. The complete earlier Nullstellensatz proof was
        not reconstructed.
    - title: The Stacks Project, etale finite-type algebras over fields
      url: https://stacks.math.columbia.edu/tag/00U0
      locator: Definition10.143.1; Lemma10.143.3(7), proof paragraph(7);
        Lemma10.143.4, full statement/proof. Stable individual tags00U2 and00U3.
      statement: For a finite-type algebra B over any field L, vanishing Omega_(B/L)
        implies B is etale over L. Such an algebra is a finite product of finite
        separable field extensions. This fixes actual smooth scheme structure,
        including geometric reducedness, from the differential calculation.
      hypotheses: Finite-type algebra over a field, all characteristics. This is not a
        claim that Omega=0 implies etale for arbitrary base rings. The empty
        algebra corresponds to the empty scheme.
      reading_limits: Read the complete definitions, statement of10.143.3, proof
        paragraph(7), and complete proof of10.143.4. Also inspected the complete
        proof of regular-local Lemma10.106.3 (00NQ) and the etale morphism
        definitions/fiber statement in Section29.37 (02GH), but those extra
        passages are not needed as additional imports. General smooth-algebra
        foundations referenced in paragraph(7) remain imported.
dependency_level: 0
---

## Statement
Import the exact finite-type geometric facts in the source record: dimension/codimension and image-closure inequalities for finite-type field schemes; product dimensions; the Jacobson and closed-point residue-field facts; and the implication $\Omega_{B/L}=0\Rightarrow B$ finite étale for $B$ finite type over a field $L$. Consequently over algebraically closed $L$, $\operatorname{Spec}B$ is a finite disjoint union of reduced rational points. No characteristic-zero generic-smoothness theorem is part of this input.

## Source contract
**Given:** Finite-type schemes over a field, with the irreducible hypotheses of the dimension statements applied componentwise; a finite-type field algebra for the last implication.

**Goal:** Import the ordinary geometric foundations used in the locally authored parameter argument.

[F1] Stacks33.20.3–33.20.5 provide the exact dimension facts;33.14.1 provides the closed-point facts.

[F2] Stacks10.143.3(7) and10.143.4 provide the field-algebra differential and finite étale conclusions.

## External input
Import [F1]–[F2] with the source record's hypotheses and honest proof-reading limits. These foundations do not import the proposition being authored: finite first-jet generation, the determinant-incidence dimension and simultaneous avoidance are proved in the five local items. In particular a smooth total incidence scheme is not being used to assume separability of its projection.
