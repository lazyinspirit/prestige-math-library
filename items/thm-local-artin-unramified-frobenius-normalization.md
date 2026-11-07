---
id: thm-local-artin-unramified-frobenius-normalization
kind: theorem
title: "Local reciprocity sends a uniformizer to arithmetic Frobenius"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-local-artin-reciprocity-and-norm-index
  - def-arithmetic-frobenius-coset
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC is required by local class formation; DC supplies the finite cohomology
  convention used by the local Artin theorem.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter I §1"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
verification: {}
---

## Statement

Assume AC and DC. Let $K$ be a finite-residue nonarchimedean local field, let $K^{\mathrm{ur}}/K$
be its maximal unramified extension, and let $\pi$ be a uniformizer. Under
the local Artin map normalized by arithmetic Frobenius, the image of $\pi$
in $\operatorname{Gal}(K^{\mathrm{ur}}/K)$ is the automorphism inducing
$x\mapsto x^{q_K}$ on every finite residue extension.

## Statement references

[[thm-local-artin-reciprocity-and-norm-index]]

[[def-arithmetic-frobenius-coset]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[J. S. Milne, *Class Field Theory*, Chapter I §1, printed pp. 19–20](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** AC, DC, the local Artin reciprocity theorem, and the arithmetic Frobenius convention.

[A1] AC and DC are required by the local Artin reciprocity construction. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] The local Artin map is normalized to send a uniformizer to arithmetic Frobenius. [[thm-local-artin-reciprocity-and-norm-index]]

[F2] Arithmetic Frobenius acts on the residue field by $x\mapsto x^{q_K}$. [[def-arithmetic-frobenius-coset]]

## Proof

**Proof technique:** specialize the normalization to the unramified quotient.

**Given:** The data above.

1.1 For every finite unramified extension $E/K$, the decomposition group equals its residue-field Galois group and inertia is trivial, so the arithmetic Frobenius coset in [F2] has a unique representative in $\operatorname{Gal}(E/K)$. [A1, F2, given]

2.1 The finite quotient of the reciprocity map in [F1] sends $\pi$ to this representative in every $E/K$. Compatibility under restriction makes these representatives a single element of the inverse limit $\operatorname{Gal}(K^{\mathrm{ur}}/K)$, and its residue action is $x\mapsto x^{q_K}$. [A1, F1, F2, step 1.1] ∎ 