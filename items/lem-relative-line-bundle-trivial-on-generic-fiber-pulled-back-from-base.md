---
id: lem-relative-line-bundle-trivial-on-generic-fiber-pulled-back-from-base
kind: lemma
title: "A line bundle trivial on the generic fibre comes from the base"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-invertible-sheaf
  - def-smooth-morphism-schemes
  - def-dedekind-domain
  - thm-line-bundle-rational-section-cartier-divisor
  - def-divisor-smooth-proper-curve
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-ag-standard-smooth-geometric-regularity
  - thm-nakayama-lemma
  - thm-dimension-at-most-embedding-dimension
  - thm-nonaffine-regular-local-ring-is-ufd
  - lem-cartier-to-weil-injective-normal
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, version 2.0, Chapter IV §5, proof of Theorem 5.1, printed pp. 147–148"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "The vertical divisor argument identifying a line bundle trivial on the generic fibre with the pullback of a base line bundle."
verification: {}
---

## Statement

Let $U$ be an integral Dedekind scheme with generic point $\eta$, and let $p:X\to U$ be a proper smooth morphism whose total scheme is integral and whose fibres are geometrically integral curves. If an invertible sheaf $\mathcal N$ on $X$ restricts to the trivial sheaf on $X_\eta$, then there is an invertible sheaf $\mathcal M$ on $U$ such that $\mathcal N\cong p^*\mathcal M$.

## Statement references

[[def-invertible-sheaf]]

[[def-smooth-morphism-schemes]]

[Milne, *Abelian Varieties*, proof of Theorem 5.1](https://www.jmilne.org/math/CourseNotes/AV.pdf)

## Facts & Assumptions

**Given:** The original Statement data. The following local reconstruction additionally assumes AC; the unqualified original choice scope remains held.

[A1] AC supplies DC and the regularity, Nakayama, UFD and Cartier-to-Weil comparison interfaces below. ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]])

[F1] A rational section of an invertible sheaf on an integral scheme gives a Cartier divisor and its associated line bundle. ([[thm-line-bundle-rational-section-cartier-divisor]])

[F2] Smooth morphisms are flat and locally of finite presentation; under AC their fibres have regular local rings. Finite-type schemes over a Noetherian ring are locally Noetherian. ([[def-smooth-morphism-schemes]], [[thm-ag-standard-smooth-geometric-regularity]], [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]])

[F3] Under AC, Nakayama generates a finite module by lifts of generators of its residue quotient, local dimension is at most embedding dimension, and regular local rings are UFDs. ([[thm-nakayama-lemma]], [[thm-dimension-at-most-embedding-dimension]], [[thm-nonaffine-regular-local-ring-is-ufd]])

[F4] Under AC, on a normal Noetherian integral scheme the Cartier-to-Weil cycle map is injective. Its coefficient is the order of a local equation at the corresponding height-one DVR. ([[lem-cartier-to-weil-injective-normal]])

## Proof

1.1 Fix the generic trivialization of $\mathcal N$. It is a rational section $s$ on integral $X$, and [F1] gives a Cartier divisor $D$ with $\mathcal N\cong\mathcal O_X(D)$. Its restriction to $X_\eta$ is zero. Work first over any affine open $V$ of the Dedekind base. Properness makes $X_V$ quasi-compact, and [F2] makes it Noetherian. No quasi-compactness of all of $U$ is inferred. [F1, F2, given, construct]

2.1 Every local ring $A=\mathcal O_{X_V,x}$ is regular under [A1]. At a point over the generic base point it is a local ring of a smooth field curve, so [F2] applies. At a point over a closed point $v$, let $\pi$ be a parameter of the base DVR. Flatness makes $\pi$ a nonzerodivisor in $A$, and $A/\pi A$ is a regular local ring of the integral smooth fibre, of dimension $r\in\{0,1\}$. Lift $r$ generators of its maximal ideal and adjoin $\pi$; Nakayama [F3] shows these generate the maximal ideal of $A$. Thus its embedding dimension is at most $r+1$. Since $A$ is a domain and $A/\pi A$ is a domain, a prime chain of length $r$ in the latter lifts to a chain in $A$ starting at the nonzero prime $(\pi)$; adjoining $(0)$ gives dimension at least $r+1$. The dimension bound in [F3] forces equality of dimension and embedding dimension. Hence $A$ is regular. [A1, F2, F3, step 1.1, algebra]

3.1 By [F3] every such local ring is a UFD, hence integrally closed: a monic equation for a reduced fraction $a/b$ forces $b\mid a^n$, so $b$ is a unit. Thus $X_V$ is normal and [F4] applies. Every vertical prime divisor is an entire closed fibre: the integral fibre is locally the prime Cartier divisor $(\pi)$, of height one, and a strictly smaller closed irreducible subset of that fibre cannot still have codimension one. The order of $\pi$ along the fibre is one, since its localization has maximal ideal generated by $\pi$. [A1, F3, F4, step 2.1, algebra]

4.1 The Cartier divisor $D|_{X_V}$ has a finite Weil cycle because $X_V$ is Noetherian and quasi-compact. It has no horizontal component, since its generic-fibre restriction is zero. By step 3.1 its cycle is $\sum_{v\in V}n_v[X_v]$ for finitely many closed points of $V$. Put $D_V=\sum n_v[v]$ on the Dedekind scheme $V$. Each fibre is the pullback of $[v]$, with multiplicity one. Thus $D|_{X_V}$ and $p^*D_V$ have the same Weil cycle and are equal as Cartier divisors by [F4]. [A1, F4, step 1.1, step 3.1, construct, algebra]

5.1 These coefficients agree on overlaps, because they are the orders of the same global divisor $D$ at the generic points of the same fibres. They define a locally finite divisor $D_U$ on $U$: its support meets each affine base open in only finitely many points by step 4.1. On a Dedekind scheme this is Cartier, as is checked on its DVR neighbourhoods; its local equations glue as Cartier data. The equalities $D=p^*D_V$ on the inverse images of all affine opens glue to $D=p^*D_U$. Therefore $\mathcal N\cong p^*\mathcal O_U(D_U)$, proving the full geometric conclusion under [A1]. [A1, F1, step 4.1, construct, algebra] ∎

## Proof status

The full arbitrary-Dedekind-scheme geometric argument is reconstructed under AC (which supplies DC to comparison suppliers). The original Statement has no choice assumption and is preserved byte-for-byte; that original unqualified choice scope is not proved by these AC-dependent interfaces and remains held. No global affine or quasi-compact base restriction is imposed.
