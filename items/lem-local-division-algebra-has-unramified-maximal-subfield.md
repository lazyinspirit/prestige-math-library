---
id: lem-local-division-algebra-has-unramified-maximal-subfield
kind: lemma
title: Local central division algebras have unramified splitting subfields
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
- lem-determinant-valuation-and-lattice-of-local-division-algebra
- lem-separable-subfield-centralizer-and-splitting
- lem-hensel-factor-lifting-over-a-complete-valued-field
- thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
- thm-unique-extension-of-a-nonarchimedean-absolute-value
- cor-finite-extensions-of-finite-fields-are-simple
- thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group
justified_by: []
proof_strategy: direct
axiom_use: None; only finite residue lifts, finite bases, and single witnesses are used.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03; locally adapted intermediate
      lemma
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter IV §4, printed pp.139–140; residue lift and centralizer/uniformizer-basis
      proof adapted here.
verification: {}
---

## Statement

Let $K$ be a complete discretely valued field with finite residue field and let $D/K$ be a central division algebra. There is a finite unramified subfield $E\subset D$ with $\operatorname{Cent}_D(E)=E$. Thus $[E:K]^2=\dim_KD$ and $E$ splits $D$.

## Statement references

[[lem-determinant-valuation-and-lattice-of-local-division-algebra]]

[[lem-separable-subfield-centralizer-and-splitting]]

[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

[[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[[cor-finite-extensions-of-finite-fields-are-simple]]

## Facts & Assumptions

**Given:** The objects in the Statement.

[F1] The determinant valuation is complete, its residue is a finite field, and its dimension is value-group index times residue degree. [[lem-determinant-valuation-and-lattice-of-local-division-algebra]]

[F2] A separable subfield has the centralizer dimension and center formulas; a self-centralizing subfield splits the division algebra. [[lem-separable-subfield-centralizer-and-splitting]]

[F3] A simple residue root lifts over a complete valued field. [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F4] Finite local field extensions have degree equal to ramification index times residue degree. [[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]]

[F5] Finite field extensions of a complete valued field are complete with the unique extended value. [[thm-unique-extension-of-a-nonarchimedean-absolute-value]]

[F6] Finite extensions of finite fields are simple and separable. [[cor-finite-extensions-of-finite-fields-are-simple]] [[thm-extensions-of-finite-fields-are-galois-with-cyclic-frobenius-group]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 Let $d$ be the residue field of $D$ and $f=[d:k]$. Choose a primitive residue generator $\bar a$ by [F6], lift it to $a\in\mathcal O_D$, and consider the complete field $K(a)$ using [F5]. Lift the monic irreducible polynomial of $\bar a$ over $k$ coefficientwise to a monic polynomial $P\in\mathcal O_K[T]$ of degree $f$. Finite fields are perfect, so $\bar a$ is a simple residue root. By [F3] in $K(a)$, there is $b$ reducing to $\bar a$ with $P(b)=0$. [F1, F3, F5, F6, given, choose]

2.1 Put $E=K(b)$. Its degree is at most $f$, and its residue field contains $k(\bar a)=d$, so its residue degree is at least $f$. By [F4], both inequalities are equalities and its ramification index is one. The nonzero derivative at $b$ makes its minimal polynomial separable, so $E/K$ is separable unramified, and its residue is all of $d$. [F4, step 1.1, algebra]

3.1 Put $C=\operatorname{Cent}_D(E)$. It is a division algebra finite over its central subfield $E$. Its residue, formed with the restricted valuation, embeds into $d$ and contains the residue of $E$, so equals that residue. Use the restricted absolute value raised to the power $f$; since $E/K$ is unramified of residue degree $f$, this restricts to the residue-cardinality-normalized absolute value of $E$. On each $E(c)$ it is the unique extending field value, hence equals the determinant value from [F1] applied over $E$. Rescaling does not change the residue ring. Apply [F1] over $E$: if its value-group index is $e_C$, then $\dim_E C=e_C$. [F1, F5, step 2.1, algebra]

4.1 Choose a $C$-uniformizer $\varpi_C$. The $e_C$ elements $1,\varpi_C,\ldots,\varpi_C^{e_C-1}$ have pairwise distinct valuations modulo the integer value group of $E$. In a nonzero $E$-linear combination there is a unique least-valued term, so cancellation is impossible. They are independent and therefore a basis by step 3.1. Thus $C=E[\varpi_C]$ is commutative. By [F2], $Z(C)=E$, hence $C=E$. The remaining dimension and splitting assertions follow from [F2]. For $D=K$ choose $E=K$. [F1, F2, step 3.1, choose, algebra] ∎
