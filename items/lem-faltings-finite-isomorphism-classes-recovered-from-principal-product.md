---
id: lem-faltings-finite-isomorphism-classes-recovered-from-principal-product
kind: lemma
title: Finitely many principally polarized product classes yield finitely many original
  isomorphism classes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
- def-axiom-of-choice
- def-dependent-choice
- def-abelian-variety-over-a-field
- thm-abelian-variety-dual-and-polarization
- thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism
- lem-number-field-abelian-endomorphisms-form-a-semisimple-order
- lem-idempotents-in-semisimple-rational-orders-have-finitely-many-unit-conjugacy-classes
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Faltings–Wüstholz, *Rational Points*, Chapter V, §3, Reduction 1
    url: https://yhzhumath.github.io/Mordell2024/RP.pdf
    locator: Printed pp. 168–169; reduction to principal polarizations.
  - title: J. S. Milne, Abelian Varieties v2.00 (2008), I Theorem15.3 and Proposition15.4
    url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    locator: Printed64–65; direct factors and integral idempotents. All missing arithmetic
      finiteness is supplied by the new local order/idempotent proofs.
verification:
  precheck: pending
axiom_use: Original AC and DC retained literally, inherited through actual duality,
  End-order and idempotent providers. No additional field, good-reduction, polarization
  or level premise is introduced.
---

## Statement

Assume AC and DC. Fix an abelian variety $C/K$ over a number field. There are only finitely many $K$-isomorphism classes of abelian varieties $A/K$ for which $A^4\times(A^\vee)^4$ is $K$-isomorphic to $C$.

## Statement references

[[lem-number-field-abelian-endomorphisms-form-a-semisimple-order]]

[[lem-idempotents-in-semisimple-rational-orders-have-finitely-many-unit-conjugacy-classes]]

[Milne, *Abelian Varieties*, I15.3–15.4](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Faltings–Wüstholz, *Rational Points*, ChapterV §3.1 Reduction1, printed168–169](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** Exactly AC and DC, the fixed abelian variety $C/K$ over a number field, and an abelian variety $A/K$ with $A^4\times(A^\vee)^4$ $K$-isomorphic to $C$.

[A1] AC and DC remain literal hypotheses ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] Abelian varieties are proper smooth geometrically connected groups, and their duals exist over the same field under AC/DC ([[def-abelian-variety-over-a-field]], [[thm-abelian-variety-dual-and-polarization]]).

[F2] For $\dim C>0$, $R=\operatorname{End}_K(C)$ is a full order in a finite-dimensional semisimple rational algebra ([[lem-number-field-abelian-endomorphisms-form-a-semisimple-order]]).

[F3] Idempotents of such a full order have finitely many conjugacy classes under its units ([[lem-idempotents-in-semisimple-rational-orders-have-finitely-many-unit-conjugacy-classes]]); its actual AC premise is supplied by [A1].

[F4] A pointed morphism from a smooth geometrically integral group to an abelian variety is a homomorphism under AC ([[thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 If $\dim C=0$, then $C=\operatorname{Spec}K$. Any $A$ in the Statement is a factor of $C$, hence also has dimension zero and is $\operatorname{Spec}K$, giving at most one class. Assume $\dim C>0$ and set $R=\operatorname{End}_K(C)$, a full order in a semisimple rational algebra by [F2]. If there are no such $A$, the conclusion is immediate. [A1, F1, F2, given, construct]

1.2 For any $A$ in the family, its product $P_A=A^4\times(A^\vee)^4$ is a smooth proper geometrically connected group by [F1] and stability of these properties under finite products. If its given $K$-isomorphism $\phi:P_A\to C$ is interpreted only as a scheme isomorphism, compose it with translation by $-\phi(0)$, a $K$-rational point. The resulting pointed isomorphism is a group homomorphism by [F4]; its inverse is a group homomorphism by the inverse identities. Let $i_A:A\to C$ be the first-copy inclusion through this group isomorphism, and $p_A:C\to A$ its inverse followed by first-copy projection. Then $p_Ai_A=\operatorname{id}_A$, and $e_A=i_Ap_A\in R$ satisfies $e_A^2=e_A$. Thus each $A$ is an ACTUAL ground-field direct factor, without a cancellation theorem or a polarization on $C$. [F1, F4, given, construct, algebra]

2.1 By [F3], only finitely many unit-conjugacy classes can contain the $e_A$. If $e_B=ue_Au^{-1}$ with $u\in R^\times$, then $u$ and its inverse are $K$-group automorphisms of $C$. Define $f=p_Bui_A:A\to B$ and $g=p_Au^{-1}i_B:B\to A$. Using the inclusion/projection identities from step 1.2 gives $$ gf=p_Au^{-1}e_Bui_A=p_Ae_Ai_A=\operatorname{id}_A,\qquad fg=p_Bue_Au^{-1}i_B=p_Be_Bi_B=\operatorname{id}_B. $$ Thus a single idempotent conjugacy class contributes at most one $K$-isomorphism class of $A$. The finitely many conjugacy classes prove the Statement. [A1, F3, step 1.1, step 1.2, construct, algebra]

3.1 The zero-dimensional and empty-family cases were covered in step 1.1. No assumption that $\dim C$ is a multiple of $8$ is needed: if the original family is empty it is already finite. The proof actually proves finiteness for all $K$-direct factors of $C$, and introduces no bad-reduction set, height bound, principal polarization on $C$, analytic uniformization, Tate-isogeny theorem or Rosati-positivity premise. [step 1.1, step 1.2, step 2.1, algebra] ∎

## Remarks

This is a finite-fibre result: a genuinely finite list of product isomorphism classes yields finitely many original classes. It does not supply that finite list from a bound on stable height. The preserved unrestricted bounded-stable-height Statement remains refuted by quadratic twists, and the false Raynaud boundary and deeper Faltings/Shafarevich holds remain excluded. No consumer proof acceptance follows from this local result.
