---
id: lem-invariant-ring-of-finite-dimensional-module-is-finitely-generated
kind: lemma
title: Invariants of a finite-dimensional module are finitely generated
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
deps: [lem-positively-graded-noetherian-algebra-is-finitely-generated, lem-reynolds-operator-and-invariant-subring-properties, thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group, def-rational-action-on-affine-variety, thm-coordinate-ring-of-affine-action-is-locally-finite, def-graded-ring-and-graded-module, def-axiom-of-choice, lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michel Brion, Introduction to actions of algebraic groups, Les cours du CIRM 1 (2010), no. 1, 1-22"
      url: "https://ccirm.centre-mersenne.org/item/10.5802/ccirm.1.pdf"
    - title: "V. L. Popov and E. B. Vinberg, Invariant Theory, in Algebraic Geometry IV, Encyclopaedia of Mathematical Sciences 55, Springer 1994"
      url: "https://www.mathnet.ru/php/getFT.phtml?jrnid=intf&paperid=158&what=fullt&option_lang=rus"
---

## Statement

Assume the Axiom of Choice inherited from the named suppliers. Let $V$ be a
finite-dimensional rational module over a complex reductive affine algebraic
group $G$
([[thm-complete-reducibility-and-reynolds-operator-for-complex-reductive-group]]).
Then $\mathbb C[V]^G$ is a finitely generated $\mathbb C$-algebra.

## Facts & Assumptions

**Given:** AC; a complex reductive affine algebraic group $G$; a finite-dimensional rational $G$-module $V$; the polynomial ring $A=\mathbb C[V]$ with the action $(gf)(v)=f(g^{-1}v)$, and the Reynolds operator $R_V:A\to A^G$ of the bridge theorem.

[F1] *A rational algebra with a grading.* The coordinate ring $A=\mathbb C[V]$ is a rational $G$-module on which $G$ acts by algebra automorphisms preserving the unit ([[thm-coordinate-ring-of-affine-action-is-locally-finite]], [[def-rational-action-on-affine-variety]]); as a polynomial ring in the coordinates of $V$ it carries the positive total-degree grading $A=\bigoplus_{n\ge0}A_n$ with $A_0=\mathbb C$ and each $A_n$ finite-dimensional ([[def-graded-ring-and-graded-module]]).

[F2] *Polynomial rings are Noetherian.* For every field $K$ and finite $d$, $K[x_1,\dots,x_d]$ is Noetherian ([[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]]).

[F3] *Invariants of a Noetherian algebra.* With the notation of the Reynolds lemma, for every ideal $I\subseteq A^G$ one has $R_X(IA)=I$, and $A^G$ is Noetherian whenever $A$ is Noetherian ([[lem-reynolds-operator-and-invariant-subring-properties]]).

[F4] *Positively graded Noetherian algebras.* A positively graded commutative ring $S=\bigoplus_{n\ge0}S_n$ with $S_0$ a field and $S$ Noetherian is a finitely generated $S_0$-algebra ([[lem-positively-graded-noetherian-algebra-is-finitely-generated]]).

## Proof

**Proof technique:** direct.

1.1 Since $G$ acts linearly on $V$, substitution by $g^{-1}$ preserves the total degree of homogeneous polynomials, so it preserves the grading of $A=\mathbb C[V]$: each graded piece $A_n$ is $G$-stable and $A_0=\mathbb C$ consists of constants; hence $A^G=\bigoplus_{n\ge0}A_n^G$ is a positively graded $\mathbb C$-subalgebra with degree-zero part $\mathbb C$. [F1]

1.2 The polynomial algebra $A=\mathbb C[V]$ is Noetherian, because $V$ is finite-dimensional with, say, $d$ coordinates and $\mathbb C[x_1,\dots,x_d]$ is Noetherian. [F2]

2.1 By the Reynolds ideal theory, applied with $X=V$, the invariant subalgebra $A^G$ is Noetherian. [F3, step 1.2]

3.1 Finally $A^G$ is a positively graded Noetherian $\mathbb C$-algebra whose degree-zero part is the field $\mathbb C$, so the graded finite-generation lemma makes $A^G$ a finitely generated $\mathbb C$-algebra. This is the statement. [F4, step 1.1, step 2.1] ∎

## Remarks

- This is Brion's proof of Theorem 1.24(i) in the case $X=V$: finite generation is reduced to Noetherianity of the invariants by the Reynolds operator and then to the graded Nakayama argument; it is also Popov–Vinberg's Theorem 3.6.
- No choice is used beyond the named suppliers: the Reynolds lemma inherits AC from the bridge theorem and the coordinate-ring rationality theorem, and the polynomial Noetherianity and graded finite generation are choice-free.
