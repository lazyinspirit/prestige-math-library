---
id: thm-author-fc2380accb47-normal-geometric-input
kind: theorem
title: External normality and perfect-field smooth-locus inputs
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
    - title: The Stacks Project, normal components and Serre normality criterion
      url: https://stacks.math.columbia.edu/tag/0357
      locator: Lemma28.7.5 (0357), complete statement/proof; also Section28.12,
        Lemma28.12.5, https://stacks.math.columbia.edu/tag/033P
      statement: A normal scheme whose quasi-compact opens have finitely many
        irreducible components is a disjoint union of integral normal schemes. A
        locally Noetherian normal scheme has Serre condition(R1).
      hypotheses: The component decomposition needs the stated local finiteness of
        components, satisfied by a Noetherian scheme; the Serre criterion is
        locally Noetherian. No characteristic restriction.
      reading_limits: Read the actual full Lemma28.7.5 and proof and the actual
        Section28.12 definition of(R1), codimension convention, and Lemma28.12.5
        with its one-line proof reference. The commutative-algebra proof cited
        by that criterion was not newly reconstructed.
    - title: The Stacks Project, regular and smooth loci over perfect fields
      url: https://stacks.math.columbia.edu/tag/04QM
      locator: Lemma33.25.8 and its complete proof; Lemmas33.25.3–33.25.4 for
        smoothness/regularity context.
      statement: For a reduced locally algebraic scheme over a perfect field, its
        smooth and regular loci coincide and form a dense open subscheme.
      hypotheses: Perfect field and reduced locally algebraic scheme. Algebraically
        closed k is perfect; normal schemes here are reduced and finite type.
        This assertion is not extended to imperfect fields.
      reading_limits: Read the full indicated statement and printed proof, including
        its exact perfect-field hypothesis. Also read the section warning about
        nonperfect fields and positive-characteristic differential criteria. No
        claim to reconstruct all cited geometric-regularity foundations.
dependency_level: 0
---

## Statement
Import the two source results recorded above: Noetherian normal schemes decompose into their finitely many clopen integral normal components and satisfy $(R_1)$; reduced finite-type schemes over a perfect field have identical regular and smooth loci, and that locus is open. Here codimension of an irreducible closed subset with generic point $x$ is $\dim\mathcal O_{X,x}$, as in the cited Serre-condition convention.

## Source contract
**Given:** A Noetherian normal scheme; for the smooth-locus assertion a reduced locally algebraic scheme over a perfect field.

**Goal:** Import the exact geometric consequences of normality used before constructing parameters.

[F1] Stacks Lemma28.7.5 and Lemma28.12.5 give decomposition and $(R_1)$.

[F2] Stacks Lemma33.25.8 gives the stated equality and openness over a perfect field.

## External input
Import [F1]–[F2] with their exact hypotheses and reading limits. The five local lemmas apply these foundations and carry their perfectness/Noetherian conditions; they do not purport to prove the whole normality criterion or geometric-regularity theory.
