---
id: lem-invariants-of-finitely-generated-graded-rational-algebra-are-finitely-generated
kind: lemma
title: Graded invariants of a finitely generated rational G-algebra are finitely generated
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
justified_by: []
aliases: []
deps: [lem-invariant-ring-of-finite-dimensional-module-is-finitely-generated, lem-reynolds-operator-and-invariant-subring-properties, def-rational-action-on-affine-variety, def-graded-ring-and-graded-module, def-finite-type-and-module-finite-algebras, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Victoria Hoskins, Moduli Problems and Geometric Invariant Theory, FU Berlin lecture notes (2015/16)"
      url: "https://userpage.fu-berlin.de/hoskins/M15_Lecture_notes.pdf"
      locator: "Sections 4.3-5.4 (Nagata's theorem and its graded use)"
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
      locator: "The proof of Theorem 1.24 (finite generation of invariant rings)"
---

## Statement

Assume AC inherited from the invariant-theory suppliers. Let $G$ be a complex reductive affine algebraic group and let $A=\bigoplus_{n\ge0}A_n$ be a finitely generated graded commutative $\mathbb C$-algebra with $A_0=\mathbb C$, equipped with a rational action of $G$ by graded algebra automorphisms ([[def-rational-action-on-affine-variety]]). Then the graded invariant subalgebra
$$A^G=\bigoplus_{n\ge0}A_n^G$$
is a finitely generated $\mathbb C$-algebra.

## Facts & Assumptions

**Given:** A complex reductive affine algebraic group $G$, a finitely generated graded $\mathbb C$-algebra $A$ with $A_0=\mathbb C$ and a rational action of $G$ on $A$ by graded algebra automorphisms.

[F1] *Local finiteness.* Every element of a rational $G$-module lies in a finite-dimensional $G$-stable subspace on which $G$ acts by a morphism; sums of finitely many such subspaces are again finite-dimensional and $G$-stable. ([[def-rational-action-on-affine-variety]])

[F2] *Finite homogeneous generation.* There are finitely many homogeneous elements $a_1,\dots,a_r$ generating $A$ as a $\mathbb C$-algebra, with $a_i\in A_{d_i}$, $d_i\ge1$ because $A_0=\mathbb C$; the invariant subalgebra is graded, $A^G=\bigoplus_n A_n^G$. ([[def-finite-type-and-module-finite-algebras]], [[def-graded-ring-and-graded-module]])

[F3] *Surjectivity of invariants.* If $\varphi:B\to A$ is a surjective $G$-equivariant homomorphism of rational $G$-algebras, then $\varphi(B^G)=A^G$; the conclusion holds also for the graded subalgebra of invariants. ([[lem-reynolds-operator-and-invariant-subring-properties]] (c), (d))

[F4] *Invariants of a finite-dimensional module.* For a finite-dimensional rational $G$-module $W$ the invariant algebra $\mathbb C[W^*]^G$ is a finitely generated $\mathbb C$-algebra, and $\mathbb C[W^*]=\operatorname{Sym}(W)$ as a graded algebra. ([[lem-invariant-ring-of-finite-dimensional-module-is-finitely-generated]])

## Proof

**Proof technique:** direct.

1.1 *A finite-dimensional generating module.* By [F2] choose homogeneous generators $a_1,\dots,a_r$ of $A$. By [F1] each $a_i$ lies in a finite-dimensional $G$-stable subspace $W_i$; since $A=\bigoplus_nA_n$ and the action is graded, the homogeneous components of the elements of $W_i$ span a finite-dimensional graded $G$-stable space containing $a_i$, so we may take each $W_i$ graded. Then $W=W_1+\dots+W_r$ is a finite-dimensional graded $G$-stable subspace of $A$ whose elements contain the generators $a_i$, hence generate $A$ as a $\mathbb C$-algebra. [F1, F2, algebra]

2.1 *The symmetric algebra surjection.* The universal property of the symmetric algebra of the finite-dimensional graded vector space $W$ gives a graded $\mathbb C$-algebra surjection $\varphi:\operatorname{Sym}(W)\to A$ sending $W$ identically onto its image in $A$; it is $G$-equivariant because $W$ is $G$-stable and the identification $\operatorname{Sym}(W)=\mathbb C[W^*]$ carries the induced action to the action on polynomial functions. [F4, step 1.1, construct]

3.1 By [F3] the induced map on invariants $\operatorname{Sym}(W)^G\to A^G$ is surjective, and $\operatorname{Sym}(W)^G=\mathbb C[W^*]^G$ is a finitely generated $\mathbb C$-algebra by [F4]. [F3, F4, step 2.1]

4.1 A quotient of a finitely generated $\mathbb C$-algebra is finitely generated, so $A^G$ is finitely generated, as claimed; the argument is the graded form of Nagata's theorem used by Brion and Hoskins. [step 3.1, algebra] ∎

## Remarks

- **Noetherianity of $A$.** The hypothesis that $A$ is finitely generated over $\mathbb C$ is what makes $A$ Noetherian and the quotient argument in step 3.1 available; no Hilbert-basis input beyond finite generation is used.
- **Gradings.** The proof keeps the $\mathbb Z_{\ge0}$-grading throughout: the generators are homogeneous, the module $W$ is chosen graded, and the surjection of step 2.1 is a graded map, so the finite generating set produced for $A^G$ consists of homogeneous invariants.
