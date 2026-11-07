---
id: thm-archimedean-brauer-groups-and-invariant-maps
kind: theorem
title: "Archimedean Brauer groups and normalized invariant maps"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - thm-fundamental-theorem-of-algebra-minimum-modulus-proof
  - lem-finite-density-and-central-simple-base-change
  - lem-central-division-algebra-separable-maximal-subfield
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
  - lem-cyclic-group-cohomology-norm-and-inflation
  - thm-primitive-element-theorem-for-finite-separable-extensions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter IV, §4"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Appendix A.1"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
verification: {}
---

## Statement

For the complex and real fields, the Brauer groups and normalized invariant
maps are
$$\operatorname{Br}(\mathbb C)=0,\qquad \operatorname{Br}(\mathbb R)\cong \tfrac12\mathbb Z/\mathbb Z.$$
The complex invariant is the zero map, and the real invariant is the unique
isomorphism to $\tfrac12\mathbb Z/\mathbb Z$ sending the nonzero class to
$\tfrac12+\mathbb Z$.

## Statement references

[[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[J. S. Milne, *Class Field Theory*, Chapter IV, §4](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[J. S. Milne, *Arithmetic Duality Theorems*, Appendix A.1](https://www.jmilne.org/math/Books/ADTnot.pdf)

## Facts & Assumptions

**Given:** The fields $\mathbb R\subset\mathbb C$ and algebraic Brauer groups of central simple similarity classes.

[F1] Every nonconstant polynomial in $\mathbb C[X]$ has a root, and hence splits after finite successive division. [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]

[F2] Every central simple algebra has a division representative and a finite Galois splitting field. [[lem-finite-density-and-central-simple-base-change]] [[lem-central-division-algebra-separable-maximal-subfield]]

[F3] The algebraic Brauer group and its finite relative comparison are unqualified: $b_E=-o_E$ identifies the kernel of scalar extension to a finite Galois $E/F$ with $H^2(\operatorname{Gal}(E/F),E^\times)$. The separately qualified absolute comparison is not used. [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

[F4] For a finite cyclic group, normalized cochains give $H^2(C_n,M)=M^{C_n}/N_nM$, without a choice axiom. [[lem-cyclic-group-cohomology-norm-and-inflation]]

[F5] A finite separable field extension is simple. [[thm-primitive-element-theorem-for-finite-separable-extensions]]

## Proof

**Proof technique:** finite splitting-field algebra and the quadratic norm quotient.

**Given:** The data above.

1.1 By [F1], every irreducible polynomial over $\mathbb C$ is linear. Thus every finite extension of $\mathbb C$ is trivial: each of its elements is algebraic with a linear minimal polynomial. By [F2], a complex central simple algebra has a finite Galois splitting field, which must therefore be $\mathbb C$ itself. It is already a matrix algebra, proving $\operatorname{Br}(\mathbb C)=0$ directly in the algebraic convention. [F1, F2, given, algebra]

1.2 Every irreducible polynomial over $\mathbb R$ has degree at most two: take a complex root $z$ by [F1]; if it is not real, $(X-z)(X-\bar z)\in\mathbb R[X]$ divides the polynomial, by successive division at the distinct conjugate roots. Otherwise it has a real linear factor. A finite Galois splitting field over $\mathbb R$ is simple by [F5], so its degree is one or two and it embeds into $\mathbb C$ by sending a primitive generator to a complex root of its minimal polynomial. In the quadratic case its image is all of $\mathbb C$, since a nonreal $a+bi$ with $b\ne0$ generates $i=(z-a)/b$ over $\mathbb R$. Consequently [F2] implies that $\mathbb C$ splits every real central simple algebra. [F1, F2, F5, given, choose, algebra]

2.1 The extension $\mathbb C/\mathbb R$ is finite Galois of degree two with conjugation generator. Its relative Brauer group is the whole algebraic group by steps 1.1 and 1.2. The finite comparison [F3] and norm quotient [F4] therefore give $\operatorname{Br}(\mathbb R)\cong H^2(C_2,\mathbb C^\times)=\mathbb R^\times/N(\mathbb C^\times)$. This uses only the finite quadratic comparison and does not assume the arbitrary-field absolute $H^2$ identification. [F3, F4, step 1.1, step 1.2, algebra]

3.1 The conjugation norm is $N(z)=z\bar z$. It is positive for $z\ne0$, and every $r>0$ is $N(\sqrt r)$, so its image is $\mathbb R_{>0}$. Thus the quotient in step 2.1 consists of precisely the positive and negative sign classes and is cyclic of order two. [step 2.1, algebra]

4.1 Send the positive class to zero and the negative class to $\tfrac12+\mathbb Z$. This is the unique isomorphism from the two-element group to $\tfrac12\mathbb Z/\mathbb Z$ with the stated nonzero normalization. The complex group is zero by step 1.1, so its invariant is the zero map. Both formulas and their normalizations are proved at the full unqualified scope of the Statement. [step 1.1, step 3.1, algebra] ∎
