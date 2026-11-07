---
dependency_level: 0
id: lem-blowing-up-an-intersection-separates-strict-transforms
kind: lemma
title: Blowing up the intersection separates two strict transforms
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-strict-transform-closed-subscheme
  - thm-affine-blowup-standard-charts
  - lem-affine-blowup-algebra-properties
  - lem-blowup-isomorphism-off-center
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, More on Flatness, Nagata compactification
      url: https://stacks.math.columbia.edu/download/flat.pdf
      locator: Separation of disjoint locally closed subsets by admissible blowing up; finite-ideal affine calculation
axiom_use: Assume AC inherited from the existing blowup and relative Proj suppliers. The argument on each finite affine chart cover uses only finitely many generators.
---

## Statement

Assume the Axiom of Choice. Let $X$ be a Noetherian scheme, let $\mathcal I_1,\mathcal I_2$ be coherent ideal sheaves, and let $Z_i=V(\mathcal I_i)$. Form the blowup $\beta:X'\to X$ in the ideal $\mathcal I_1+\mathcal I_2$, whose center is the scheme-theoretic intersection $Z_1\cap Z_2$. The strict transforms of $Z_1$ and $Z_2$ in $X'$ are disjoint. If $U\subseteq X$ is open and $U\cap Z_1\cap Z_2=\varnothing$, then $\beta^{-1}(U)\to U$ is an isomorphism. Empty schemes, zero ideals and the unit ideal are included.

## Statement references

[[def-strict-transform-closed-subscheme]]

[[thm-affine-blowup-standard-charts]]

[[lem-affine-blowup-algebra-properties]]

[[lem-blowup-isomorphism-off-center]]

[[def-axiom-of-choice]]

[Stacks Project, More on Flatness, Nagata compactification](https://stacks.math.columbia.edu/download/flat.pdf)

## Facts & Assumptions

**Given:** AC, the Noetherian scheme, ideals, closed subschemes, blowup and optional open subset in the statement.

[F1] The strict transform is the scheme-theoretic closure in the inverse-image closed subscheme of its restriction off the exceptional subscheme; this description restricts to open charts. [[def-strict-transform-closed-subscheme]]

[F2] For a finite generating family of an ideal $I$ on an affine $\operatorname{Spec}A$, the affine blowup charts are $\operatorname{Spec}A[I/a]$, one for each chosen generator $a$, and cover the blowup, including empty charts. [[thm-affine-blowup-standard-charts]]

[F3] On the chart $B=A[I/a]$, the pullback ideal $IB$ is $aB$ and its complement is $\operatorname{Spec}B_a$. [[lem-affine-blowup-algebra-properties]]

[F4] A blowup is an isomorphism away from its center. [[lem-blowup-isomorphism-off-center]]

[A1] AC is the explicit inherited hypothesis of the blowup and Proj construction. [[def-axiom-of-choice]]

## Proof

1.1 Work over any affine open $W=\operatorname{Spec}A$ of $X$. Coherence supplies finite generators of the two restricted ideals $I_1,I_2$, and their concatenation generates $I=I_1+I_2$. Use precisely this concatenated family for the covering in [F2]. If a chart is indexed by a generator $a\in I_1$, then the inverse image of $Z_1$ on that chart has coordinate ring $B/I_1B$ with $B=A[I/a]$. By [F3], the complement of the exceptional subscheme is obtained by inverting $a$. But $a=0$ in $B/I_1B$, so this complement inside the inverse image of $Z_1$ is empty. Its scheme-theoretic closure is empty, so [F1] makes the strict transform of $Z_1$ empty on this chart. On every chart indexed by a generator from $I_2$, the identical calculation makes the strict transform of $Z_2$ empty. [given, A1, F1, F2, F3, algebra]

2.1 These charts cover $\beta^{-1}(W)$, and on each of them at least one of the two strict transforms is empty. Their intersection is therefore empty over $W$, and varying $W$ proves that the two strict transforms are disjoint on $X'$. The center has underlying support $Z_1\cap Z_2$, so the optional $U$ is disjoint from it; [F4] proves the claimed isomorphism there. If $I$ is the unit ideal, the center is empty and the same argument says the already disjoint closed subschemes remain disjoint. If $I=0$, the positive part of its Rees algebra is zero and the blowup is empty; the strict transforms are empty as well. A zero generator contributes an empty chart, which changes no covering or conclusion. The empty scheme satisfies the same statements. This proves all assertions. [given, F1, F2, F4, step 1.1, algebra] ∎

## Remarks

This is one elementary separation step in an admissible-blowup compactification argument. It does not prove extension of coherent ideals from an open subscheme, flatification by blowing up, or Nagata compactification itself.
