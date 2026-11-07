---
dependency_level: 0
id: lem-affine-etale-algebras-split-over-an-absolutely-integrally-closed-domain
kind: lemma
title: Affine étale algebras split over an absolutely integrally closed domain
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-integral-closure-commutes-etale-base-change
  - lem-etale-radicial-morphism-open-immersion
  - thm-etale-over-algebraically-closed-field-discrete-smooth-points
  - thm-etale-equivalent-flat-unramified-fp
  - lem-etale-stable-base-change-composition
  - thm-flatness-criteria-by-injections-and-ideals
  - cor-affine-scheme-quasi-compact
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Étale Cohomology, Strictly henselian local rings and affine proper base change
      url: https://stacks.math.columbia.edu/download/etale-cohomology.pdf
      locator: Absolute integral closure splitting argument used in integral-cover acyclicity
axiom_use: Assume AC inherited from the published integral closure, étale geometry, flatness and affine quasi-compactness suppliers.
---

## Statement

Assume the Axiom of Choice. Let $R$ be an integrally closed domain whose fraction field $K$ is algebraically closed, and let $B$ be a finitely presented étale $R$-algebra. Then $\operatorname{Spec}B$ is a finite disjoint union of open subschemes of $\operatorname{Spec}R$. In particular, if $B$ is finite over $R$ and $\operatorname{Spec}B\to\operatorname{Spec}R$ is surjective, that morphism has a section. No Noetherian hypothesis on $R$ or $B$ is made. The zero algebra is allowed and gives an empty disjoint union.

## Statement references

[[lem-integral-closure-commutes-etale-base-change]]

[[lem-etale-radicial-morphism-open-immersion]]

[[thm-etale-over-algebraically-closed-field-discrete-smooth-points]]

[Stacks Project, Étale Cohomology](https://stacks.math.columbia.edu/download/etale-cohomology.pdf)

## Facts & Assumptions

**Given:** AC and the domain, fraction field and étale algebra in the statement.

[F1] Integral closure commutes with étale base change for arbitrary rings, without Noetherian hypotheses, under AC. [[lem-integral-closure-commutes-etale-base-change]]

[F2] An étale universally injective morphism is an open immersion under AC. [[lem-etale-radicial-morphism-open-immersion]]

[F3] An étale finite-type scheme over an algebraically closed field is discrete, with each point a copy of the field as a smooth zero-dimensional scheme. [[thm-etale-over-algebraically-closed-field-discrete-smooth-points]]

[F4] Étale maps are flat and remain étale under base change and restriction to open and closed components; tensoring an injection with a flat module is injective. [[thm-etale-equivalent-flat-unramified-fp]] [[lem-etale-stable-base-change-composition]] [[thm-flatness-criteria-by-injections-and-ideals]]

[F5] An affine scheme is quasi-compact. [[cor-affine-scheme-quasi-compact]]

[A1] AC carries the exact hypotheses of the preceding published suppliers. [[def-axiom-of-choice]]

## Proof

1.1 Set $B_K=B\otimes_RK$. By [F4], its spectrum is étale over $K$, so [F3] identifies it with a disjoint union of copies of $\operatorname{Spec}K$. This discrete space is finite because it is affine and quasi-compact by [F5]. Thus $B_K=K^d$ for some finite $d\geq0$. Flatness in [F4] makes the localization map $B\to B_K$ injective by tensoring the injection $R\to K$. Since $R$ is its own integral closure in $K$, [F1] says that $B$ is integrally closed in $B_K$. Every coordinate idempotent of $K^d$ satisfies the monic polynomial $T^2-T$ over $B$, so belongs to $B$. Therefore $B=\prod_{i=1}^dB_i$, where $B_i$ embeds in the corresponding $K$ factor and $B_i\otimes_RK=K$. If $d=0$, the injection into the zero algebra gives $B=0$. [given, A1, F1, F3, F4, F5, algebra]

2.1 Each $B_i$ is étale and flat over $R$ by [F4]. Tensoring its injection $B_i\to K$ with the flat module $B_i$ gives an injection $B_i\otimes_RB_i\to K\otimes_RB_i=K$. This injection is multiplication followed by the embedding $B_i\to K$. Multiplication $B_i\otimes_RB_i\to B_i$ is surjective since $b$ is the image of $b\otimes1$, and it is injective by the preceding injection. Thus it is an isomorphism, so the diagonal of $\operatorname{Spec}B_i\to\operatorname{Spec}R$ is an isomorphism. The morphism is a monomorphism, and remains a monomorphism after every base change. In particular each geometric fibre has at most one geometric point, so it is universally injective; equivalently two distinct points in a fibre could be lifted to points over a common algebraically closed field and contradict the monomorphism property. Apply [F2] to make each component an open immersion. This proves the finite disjoint open decomposition. [A1, F2, F4, step 1.1, algebra]

3.1 Suppose additionally that $B$ is finite over $R$ and its spectrum is surjective. For each component the open image is also closed, as can be checked directly: $B_i$ is a finite $R$-module, and the image is its support $V(\operatorname{Ann}_R B_i)$. Indeed its fibre over a prime is nonzero precisely when its localization there is nonzero, by the finite-module Nakayama argument: if a finitely generated module over a local ring satisfies $M=\mathfrak m M$, express a finite generating column as $v=Hv$ with entries of $H$ in $\mathfrak m$; the unit $\det(1-H)$ annihilates it, so $M=0$. Thus a nonzero localization has a nonzero finite residue-field algebra, which has a prime and gives a point over that prime of $R$. This is precisely membership in that support. The spectrum of the domain $R$ is irreducible, so every nonempty open-and-closed subset is the entire spectrum. Surjectivity ensures at least one such nonempty component. Its open immersion is therefore an isomorphism onto $\operatorname{Spec}R$, and its inverse followed by component inclusion gives a section of the original morphism. All component selections are finite and allowed under [A1]; the empty algebra cannot occur in this surjective case because a domain has a nonempty spectrum. This proves every claim. [given, A1, step 2.1, algebra] ∎

## Remarks

This splitting result is a geometric algebra input to an absolute-integral-closure proof of torsion proper base change. It does not assert higher étale acyclicity, cohomological continuity, finite-cover effacement, or the proper-base-change theorem itself.
