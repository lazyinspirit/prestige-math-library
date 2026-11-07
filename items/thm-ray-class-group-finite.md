---
id: thm-ray-class-group-finite
kind: theorem
title: "The ray class group of a number field is finite"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-ray-class-exact-sequence
  - def-ray-class-group
  - def-global-field-modulus
  - thm-finiteness-of-the-number-field-class-group
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 7
proof_strategy: direct
axiom_use: >-
  AC and AC_omega are inherited from the exact-sequence proof; AC is also a
  hypothesis of ordinary ideal-class finiteness. The finite-group argument
  itself uses no additional choice.
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter V §1, finiteness of ray class groups from the exact sequence, printed pp.150–151."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "Chapter 18, §18.1, ideal class finiteness and Chapter 18, §18.3, ray class sequence."

---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice. For every number field $K$ and every modulus $\mathfrak m$ for $K$, the ray class group $\operatorname{Cl}_{\mathfrak m}(K)$ is finite.

## Statement references

[[def-ray-class-group|Ray class group]]

[[thm-ray-class-exact-sequence|Residue and sign exact sequence]]

[[thm-finiteness-of-the-number-field-class-group|Ordinary ideal class group finiteness]]

[[lem-nonzero-number-field-ideal-has-finite-quotient|Finite residue quotients]]

[Milne, Class Field Theory, Chapter V §1](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Stein, Chapters 18.1 and 18.3](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** AC and AC_omega; a number field $K$; and a modulus $\mathfrak m=(\mathfrak m_0,S_\infty)$.

[A1] The exact sequence gives a surjection $\operatorname{Cl}_{\mathfrak m}(K)\to\operatorname{Cl}(\mathcal O_K)$ whose kernel is the image of the finite residue and sign group $R_{\mathfrak m}$. ([[thm-ray-class-exact-sequence]])

[F1] For every nonzero ideal $\mathfrak a$ of $\mathcal O_K$, the quotient ring $\mathcal O_K/\mathfrak a$ is finite. ([[lem-nonzero-number-field-ideal-has-finite-quotient]])

[F2] The ordinary ideal class group $\operatorname{Cl}(\mathcal O_K)$ is finite. ([[thm-finiteness-of-the-number-field-class-group]])

[F3] The product in $R_{\mathfrak m}$ is over finitely many primes, and $S_\infty$ is finite by the definition of a modulus. ([[def-global-field-modulus]])

## Proof


**Given:** The data and hypotheses in the Statement.

1.1 Each ring $\mathcal O_K/\mathfrak p^{n_{\mathfrak p}}$ is finite by [F1], so its unit group is finite. The sign group $\{\pm1\}^{S_\infty}$ is finite by [F3], and there are only finitely many finite-prime factors by [F3]. Therefore the finite product $R_{\mathfrak m}$ is finite, including the empty-product case. [F1, F3, given]

2.1 The image of $R_{\mathfrak m}$ in the ray class group is finite, as it is the image of a finite set. By [A1] this image is the kernel of the surjection to the ordinary class group. Each fiber of that surjection is either empty or a coset of the kernel, hence finite; there are finitely many fibers because the ordinary class group is finite by [F2]. Thus $\operatorname{Cl}_{\mathfrak m}(K)$ is a finite union of finite fibers and is finite. [A1, F2, step 1.1] ∎

