---
id: lem-elliptic-frobenius-tate-weights
kind: lemma
title: Frobenius weights on an elliptic Tate module
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- thm-ag-separating-transcendence-basis-perfect-field
- lem-arith-field-prime-to-characteristic-torsion-and-tate-module
- lem-arith-dual-and-poincare-bundle-finite-field-descent
- thm-full-riemann-roch-divisor
- lem-degree-pullback-divisor-finite-morphism-curves
- lem-arith-dual-isogeny-kernel-and-abelian-biduality
- thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism
- thm-proper-quasi-finite-is-finite
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, The Picard scheme of a curve
    url: https://stacks.math.columbia.edu/tag/0B9R
    locator: Section 44.6 introduction read for Picard background; the Hasse bound is not imported from this source.
dependency_level: 0
proof_strategy: direct
axiom_use: AC is assumed; it implies DC for the named Jacobian and Tate-module suppliers.
---

## Statement

Assume the Axiom of Choice. Let E be an elliptic curve over the finite field F_q of characteristic p, let ℓ≠p, and let π be the q-power Frobenius endomorphism. There is an integer t with |t|≤2√q such that `π²−[t]π+[q]=0` in End(E over an algebraic closure). Consequently every eigenvalue of π acting on the rational Tate module `T_ℓ(E)⊗Q_ℓ` has complex absolute value √q under every embedding of its algebraic splitting field into C.

## Facts & Assumptions

**Given:** AC, E/F_q, q, ℓ and its Tate module as in the Statement.

[F1] A finitely generated extension of a perfect field has a separating transcendence basis. [[thm-ag-separating-transcendence-basis-perfect-field]]

[F2] Under AC/DC the Tate module of an elliptic curve is free of rank two over Z_ℓ. [[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]]

[F3] The algebraically trivial rigidified Picard functor of an abelian variety is represented by its dual abelian variety, with a universal normalized line bundle. [[lem-arith-dual-and-poincare-bundle-finite-field-descent]]

[F4] Riemann–Roch holds for divisors on a smooth proper curve. [[thm-full-riemann-roch-divisor]]

[F5] A nonconstant map of smooth proper integral curves is finite flat, and pullback multiplies divisor degree by its degree. [[lem-degree-pullback-divisor-finite-morphism-curves]]

[F6] Dual isogenies are additive and induced by pullback on the dual Picard functor. [[lem-arith-dual-isogeny-kernel-and-abelian-biduality]]

[F7] A pointed morphism of a smooth geometrically integral group variety to an abelian variety is a homomorphism. [[thm-nonaffine-pointed-group-to-abelian-variety-morphism-homomorphism]]

[F8] Proper quasi-finite maps are finite. [[thm-proper-quasi-finite-is-finite]]

[F9] AC supplies the DC used by the named suppliers. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** elliptic principal polarization and positivity of degrees.

1.1 Work over an algebraic closure of F_q. Let O be the identity and J=E^∨. Every degree-zero line bundle over an algebraically closed extension has the form O(P−O): tensor it with O(O), apply Riemann–Roch [F4] to obtain its unique degree-one divisor P, and subtract O. The family P↦O(P−O) on the connected curve E shows these classes are algebraically trivial. Thus [F3] represents them by points of J. The pointed divisor map `u:E→J`, `x↦[O_E(x−O)]`, is a morphism and a group homomorphism by [F3] and [F7]. Riemann–Roch [F4] in genus one says every degree-one line bundle has a unique effective divisor of degree one: its space of sections has dimension one, because the negative-degree complementary bundle has no nonzero section. Thus u is bijective on geometric points after every algebraically closed extension. Its tangent map at O is the connecting map from `O_E(O)|_O` to `H¹(E,O_E)` in `0→O_E→O_E(O)→O_E(O)|_O→0`; the two spaces of global sections have dimension one, so that connecting map is an isomorphism. Hence u is étale at O and, by translation, everywhere. It is proper and quasi-finite, hence finite by [F8]; a finite étale map with one geometric point per fibre is an isomorphism. [F3, F4, F7, F8, F9, given, construct, algebra]

2.1 Put L=O_E(O) and define `λ:E→E^∨`, `x↦t_x^*L⊗L^(-1)`. Under the identification u, λ is −u, so it is an isomorphism. More generally, for a line bundle M of degree d choose a divisor `D=Σ n_i[P_i]` over the algebraically closed field. Translation sends each P_i to P_i−x, and the group-homomorphism property of u shows `t_x^*M⊗M^(-1)` represents `−d u(x)`. Thus `φ_M=[d]λ` as morphisms; equality on geometric points suffices for morphisms from the reduced variety E. [F3, F4, F7, F9, step 1.1, given, construct, algebra]

3.1 For any endomorphism a of E, let `a†=λ^(-1)a^∨λ`. If a is nonzero then it is nonconstant, hence finite flat by [F5]; if a=0 put deg(a)=0. Naturality of translation and pullback gives `a^∨ λ a=φ_(a^*L)`. By [F5], `deg(a^*L)=deg(a)`. Step 2.1 therefore gives `a†a=[deg(a)]`, also for a=0. Duality is additive by [F6], so `(1+a)†(1+a)=1+a+a†+a†a`. [F5, F6, F9, step 2.1, given, construct, algebra]

4.1 The q-power Frobenius π is proper and radicial with one-point fibres, hence finite by [F8]. To compute its degree, let K be the function field of E over the algebraic closure k. By [F1], K is finite separable over k(t) for one transcendental element t. Frobenius identifies `[K^p:k(t)^p]=[K:k(t)]`, while `[k(t):k(t)^p]=p`; the tower law gives `[K:K^p]=p`. Iterating for q=p^r gives `[K:K^q]=q`. As k is perfect, the image of π on K is K^q, so deg(π)=q. Put `t=deg(1+π)−1−q`, with degree zero if 1+π=0. Applying step 3.1 to 1+π yields `π+π†=[t]`. Multiplying by π and using `π†π=[q]` gives `π²−[t]π+[q]=0`. For any integers a,b, applying step 3.1 to `a−bπ` gives `deg(a−bπ)=a²−tab+qb²`. This degree is nonnegative, including the zero endomorphism. Consequently the quadratic `x²−tx+q` is nonnegative at every rational x; density of Q in R gives `t²≤4q`. [F1, F5, F6, F8, F9, step 3.1, given, construct, algebra]

5.1 The endomorphism identity acts on the free rank-two Tate module [F2]. Hence each eigenvalue is a root of `X²−tX+q`, and is algebraic. The two complex roots have product q and are conjugate, with the repeated-root case allowed, because `t²≤4q`. Each therefore has absolute value √q. The polynomial has integer coefficients, so the conclusion holds under every embedding of the splitting field into C. [F1, F2, F9, step 4.1, given, construct, algebra] ∎

## Source and authoring record

This is a local AC-scoped proof packet for a confirmed missing ingredient of the universal elliptic R¹ purity theorem. Relative lissity and the comparison between étale H¹ and the Tate module are separate obligations. This item is research-only and has not been installed or recorded.
