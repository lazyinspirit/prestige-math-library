---
id: lem-abelian-variety-spreads-to-abelian-scheme-away-finitely-many-primes
kind: lemma
title: "An abelian variety spreads to an abelian scheme away from finitely many primes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-abelian-scheme
  - lem-filtered-colimit-fp-scheme-stage
  - lem-filtered-colimit-proper-fp-stage
  - thm-smooth-locus-open
  - thm-global-functions-proper-integral-variety
  - thm-cohomology-and-base-change
proof_strategy: direct
sources:
  references:
    - title: "G. Faltings and G. Wüstholz et al., Rational Points"
      url: "https://yhzhumath.github.io/Mordell2024/RP.pdf"
      locator: "Chapter IV §1: the good-outside-finitely-many-places context; the finite-presentation argument is given below."
---

## Statement

Assume AC and DC. Let $K$ be a number field and $A/K$ an abelian variety. There is a nonempty open subscheme $U\subseteq\operatorname{Spec}\mathcal O_K$ and an abelian scheme $\mathcal A/U$ whose generic fibre is $A$. Consequently $A$ has good reduction outside a finite set of finite places.

## Facts & Assumptions

**Given:** AC, DC, $K$ and $A$ as stated.

[A1] AC and DC are assumed. [[def-axiom-of-choice]], [[def-dependent-choice]]

[F1] A finite-presentation scheme, its morphisms and equalities of those morphisms descend through filtered colimits of rings. [[lem-filtered-colimit-fp-scheme-stage]]

[F2] Properness of a finite-presentation morphism descends through filtered colimits of finitely generated $\mathbb Z$-algebras. [[lem-filtered-colimit-proper-fp-stage]]

[F3] The smooth locus of a locally finite-presentation morphism is open. [[thm-smooth-locus-open]]

[F4] A proper geometrically integral variety over a field has only the base field as global functions. [[thm-global-functions-proper-integral-variety]]

[F5] At a point where the degree-zero cohomology base-change map is surjective, the direct image is locally free nearby and commutes with arbitrary base change there. [[thm-cohomology-and-base-change]]

[F6] A smooth proper locally finitely presented group scheme with connected geometric fibres of constant dimension is an abelian scheme. [[def-abelian-scheme]]

## Proof

**Proof technique:** spread the finite-presentation group structure, then shrink using properness, smoothness and degree-zero cohomology.

1.1 The field $K$ is the filtered colimit of the localizations $R_a=\mathcal O_K[1/a]$ for nonzero $a\in\mathcal O_K$. By F1, $A$ descends to a finite-presentation scheme over one $R_a$; multiplication, inverse and identity descend after a further localization. Their finitely many group, commutativity and unit identities hold over $K$, so F1 makes them hold after one more localization. This gives a finite-presentation commutative group scheme $X$ with generic fibre $A$. [A1, F1, given, construct]

2.1 Every $R_a$ is a finitely generated $\mathbb Z$-algebra. Since $A$ is proper, F2 makes $X$ proper after a further localization. Its generic fibre is smooth, so F3 makes the nonsmooth locus closed and disjoint from the generic fibre. Properness sends that locus to a closed subset of the base not containing the generic point; removing its finite set of closed points makes $X$ smooth. Thus, on a nonempty open $U_0$, the group scheme is smooth and proper. [F2, F3, step 1.1, given]

3.1 Over the generic point, F4 gives $H^0(A,\mathcal O_A)=K$. The degree-zero base-change map at that point is an isomorphism: a finite affine cover of $X$ computes global sections as the kernel of the two restriction maps on a finite sum of affine-coordinate rings, and localization commutes with finite kernels. F5 applied to the flat coherent sheaf $\mathcal O_X$ therefore gives, after shrinking around the generic point, a rank-one locally free $f_*\mathcal O_X$ whose formation commutes with every base change. Its unit section is an isomorphism at the generic point, so after one more shrinking it is an isomorphism $\mathcal O_U\cong f_*\mathcal O_X$. Hence every geometric fibre has global function algebra equal to its algebraically closed base field. [F4, F5, step 2.1, given, algebra]

4.1 Every geometric fibre is nonempty because the group scheme has an identity section. If one were disconnected, its nontrivial open-and-closed decomposition would give a nontrivial idempotent in its global function algebra, contradicting step 3.1. Thus all geometric fibres are connected. The relative dimension of a smooth group scheme is the rank of its relative tangent bundle at the identity, locally constant and hence constant on the connected open $U$. F6 now makes $X_U$ an abelian scheme with generic fibre $A$. The complement of the nonempty open $U$ in the spectrum of a number ring is finite, proving the final assertion. [F6, step 2.1, step 3.1, algebra] ∎
