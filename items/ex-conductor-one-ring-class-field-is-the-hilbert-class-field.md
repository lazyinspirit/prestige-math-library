---
id: ex-conductor-one-ring-class-field-is-the-hilbert-class-field
kind: example
title: "Conductor-one ring class field"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 20
deps:
  - thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues
  - thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues-choice-free
  - def-proper-invertible-ideal-class-group-of-a-quadratic-order
  - def-ray-class-group
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: AC, Countable Choice, and DC are inherited from the ray class field supplier.
sources:
  references:
    - title: "J. S. Milne, Class Field Theory"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Version 4.03, Chapter V §1, Example 1.8(a), printed p. 152: modulus 1 and the Hilbert class field"
verification: {}
---

## Example

Assume AC, Countable Choice, and DC as in the ray class field supplier. For an imaginary quadratic field $K$, conductor $f=1$ gives
$\mathcal O_f=\mathcal O_K$, trivial scalar-residue subgroup, and ring class
field equal to the Hilbert class field of $K$; its Galois group over $K$ is
$\operatorname{Pic}(\mathcal O_K)$.

## Example references

[[thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues|The ring class field is the scalar-residue quotient of the ray class field.]]

[Milne, *Class Field Theory*, Chapter V §1](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC, an imaginary quadratic field $K$ with maximal order $\mathcal O_K$, and conductor $f=1$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; the global class-field supplier assumes AC.

[A2] [[def-countable-choice]]: every sequence of nonempty sets has a choice function; the global class-field supplier assumes Countable Choice.

[A3] [[def-dependent-choice]]: every total relation on a nonempty set admits an infinite related sequence from any specified start; the global class-field supplier assumes DC.

[F1] [[thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues-choice-free]]: $\operatorname{Pic}(\mathcal O_f)$ is the ray class group divided by the image of scalar residues.

[F2] [[thm-ring-class-group-is-ray-class-group-quotient-by-scalar-residues]]: the field fixed by that scalar subgroup has Galois group $\operatorname{Pic}(\mathcal O_f)$; for $f=1$ it is identified with the Hilbert class field.

## Proof

1.1 The unit residue group $(\mathbb Z/1\mathbb Z)^\times$ is trivial, so its image in the ray class group is trivial. Modulus $1$ imposes no congruence condition; thus the ray class group is the ordinary ideal class group. [F1, given, algebra]

2.1 By [A1]–[A3] and [F2], the field associated to this quotient is the maximal unramified abelian extension of $K$, which is the Hilbert class field, and its Artin group is $\operatorname{Pic}(\mathcal O_K)$. [A1, A2, A3, F1, F2, step 1.1, algebra] ∎
