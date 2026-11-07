---
id: def-minus-pontryagin-dual-class-group
kind: definition
title: "Minus Pontryagin dual of a smoothed class group"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-t-smoothed-ray-class-group-of-cm-extension
  - def-pontryagin-dual-and-compact-open-topology
  - def-group-ring
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - thm-group-ring-is-commutative-iff-the-group-is-abelian
  - thm-ray-class-exact-sequence
  - thm-finiteness-of-the-number-field-class-group
  - def-axiom-of-choice
  - def-countable-choice
proof_strategy: direct
axiom_use: >-
  AC and Countable Choice enter through the ray-class exact sequence and
  ordinary class-group finiteness, which make the T-ray class group finite.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Samit Dasgupta and Mahesh Kakde, On the Brumer–Stark Conjecture"
      url: "https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf"
      locator: "§1.1, printed p. 6: contragredient G-action, inversion #, and the minus part after inverting 2."
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "Chapter VI §1: finite character duals and Artin reciprocity conventions."
---

## Definition

Assume AC and Countable Choice. Let $H/F$ be a finite abelian extension of number fields such that $F$ is totally real and $H$ is a totally imaginary quadratic extension of $F$, let $G=\operatorname{Gal}(H/F)$, and let $j\in G$ be complex conjugation. For the finite abelian group $M=\operatorname{Cl}_T(H)$, its Pontryagin dual is the finite group

$$M^\vee:=\operatorname{Hom}_{\mathbb Z}(M,\mathbb Q/\mathbb Z),$$

with contragredient action $(g\cdot f)(m)=f(g^{-1}m)$. Put $R=\mathbb Z[1/2]$, $\Lambda=R[G]$, and $e^-=(1-j)/2\in\Lambda$. The minus part of the dual is

$$\operatorname{Cl}_T(H)^{\vee,-}:=e^-\bigl(M^\vee\otimes_{\mathbb Z}R\bigr).$$

Equivalently, it is the quotient of $M^\vee\otimes R$ by the image of $1+j$. The minus group ring is $\mathbb Z[G]^-:=e^-R[G]$, equivalently $R[G]/(1+j)$.

## Definition references

[[def-t-smoothed-ray-class-group-of-cm-extension]]

[[def-pontryagin-dual-and-compact-open-topology]]

[[def-group-ring]]

[[thm-group-ring-is-a-unital-algebra-with-basis-g]]

[[thm-group-ring-is-commutative-iff-the-group-is-abelian]]

[Dasgupta and Kakde — §1.1, printed p. 6](https://math.iisc.ac.in/~maheshkakde/brumerstark.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, the finite abelian group $M=\operatorname{Cl}_T(H)$, its contragredient Galois action, and complex conjugation $j$.

[F1] The Pontryagin dual of a finite discrete abelian group is its group of continuous characters into the circle; identifying the circle with $\mathbb Q/\mathbb Z$ gives the displayed finite dual. [[def-pontryagin-dual-and-compact-open-topology]]

[F2] Since $j^2=1$ and $2$ is invertible in $R$, $e^-=(1-j)/2$ is a central idempotent and its image is the $(-1)$-eigensummand. [[def-group-ring]] [[thm-group-ring-is-a-unital-algebra-with-basis-g]]

[F3] The T-ray class group is finite: its residue kernel in the ray-class exact sequence is finite, and the ordinary ideal class group is finite. [[thm-ray-class-exact-sequence]] [[thm-finiteness-of-the-number-field-class-group]]

## Proof

**Given:** The finite abelian group $M$ with its $G$-action and complex conjugation $j$.

1.1 By [F3], $M$ is finite. For each $m\in M$, its order $n_m$ is finite, and a character must send $m$ into the finite subgroup $(n_m^{-1}\mathbb Z)/\mathbb Z$ of $\mathbb Q/\mathbb Z$. Since $M$ is finite, only finitely many functions can satisfy these restrictions, so the character group is finite. Its elements are continuous because $M$ is discrete. The formula $(g\cdot f)(m)=f(g^{-1}m)$ satisfies the left-action law and is the contragredient action. [F1, F3, given, algebra]

2.1 In $R[G]$, $e^-=(1-j)/2$ satisfies $(e^-)^2=e^-$, and $1-e^-=(1+j)/2$. The central idempotent decomposition splits the module into its $e^-$ and $(1-e^-)$ summands, so the image of $e^-$ equals the quotient by the image of $1+j$. [F2, step 1.1, algebra] ∎
