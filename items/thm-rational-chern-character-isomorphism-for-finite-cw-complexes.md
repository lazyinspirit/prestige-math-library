---
id: thm-rational-chern-character-isomorphism-for-finite-cw-complexes
kind: theorem
title: Rational Chern character isomorphism for finite CW complexes
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [lem-chern-character-induces-the-rational-isomorphism-on-ahss-e-two, lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations, thm-spectral-sequence-comparison-theorem, prop-ahss-collapse-determines-only-the-associated-graded-object, cor-complex-k-theory-ahss, thm-cohomological-atiyah-hirzebruch-spectral-sequence, thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory, thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero, def-graded-chern-character-by-suspension-and-bott-periodicity, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from complex K-theory and the AHSS comparison."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Vector Bundles & K-Theory, section 4.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Rational Chern character isomorphism, printed pp.109-114"
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 section 4"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chern character isomorphism theorem, printed pp.211-212"
---

## Statement

Assume AC. For every finite CW complex $X$ and every integer $j$, the Chern
character tensored with $\mathbb Q$,
$$\operatorname{ch}\otimes\mathbb Q:K^j(X)\otimes\mathbb Q \longrightarrow\bigoplus_kH^{j+2k}(X;\mathbb Q),$$
is a natural filtered isomorphism of $\mathbb Q$-vector spaces, where the left
side carries the K-theoretic skeletal filtration and the right side the
cohomological filtration. Taken over the two parity classes $j$ even and $j$
odd, these maps form an isomorphism of $\mathbb Z/2$-graded rings.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, inherited from complex K-theory ([[def-axiom-of-choice]]).

[F1] The character on pairs is natural, filtered, additive and multiplicative, and it induces a morphism of the $K$-theory AHSS to the two-periodic rational cohomology AHSS ([[lem-graded-chern-character-respects-relative-maps-and-skeletal-filtrations]], [[def-graded-chern-character-by-suspension-and-bott-periodicity]], [[thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero]]).

[F2] On the second page the induced map is a coefficientwise isomorphism: $K^q(*)\otimes\mathbb Q\cong\mathbb Q$ for even $q$ and $0\to0$ for odd $q$ ([[lem-chern-character-induces-the-rational-isomorphism-on-ahss-e-two]]).

[F3] A morphism of spectral sequences that is an isomorphism on one page and whose two sequences strongly converge to filtered families with compatible filtered target maps induces isomorphisms of the associated graded objects and, when the filtrations are finite, isomorphisms of the filtered targets ([[thm-spectral-sequence-comparison-theorem]]).

[F4] The skeletal filtrations of the $K$-theory and of two-periodic rational cohomology are finite and exhaustive for a finite CW complex, and the associated graded of the stable page is the corresponding filtration quotient ([[cor-complex-k-theory-ahss]], [[thm-cohomological-atiyah-hirzebruch-spectral-sequence]], [[thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory]]).

[F5] A collapse of the spectral sequence alone determines only the associated graded object, not the filtered abatement ([[prop-ahss-collapse-determines-only-the-associated-graded-object]]).

## Proof

**Proof technique:** direct.

**Given:** AC and a finite CW complex $X$.

1.1 By [F1] the character induces a morphism of the two Atiyah-Hirzebruch spectral sequences, compatible with the filtrations; by [F2] this morphism is an isomorphism on the second page, coefficientwise, in both parities. [F1, F2]

1.2 By [F4] the two spectral sequences strongly converge to the filtered abutments and the filtrations are finite and exhaustive, because a finite CW complex has a bounded skeletal filtration; the target maps are the filtered maps induced by the character, compatible with the abutment identifications by [F1]. [F1, F4]

2.1 Applying the comparison theorem [F3] to the morphism of step 1.1, the associated graded maps are isomorphisms, and because both degree-$j$ filtrations are finite the filtered maps themselves are isomorphisms; hence $\operatorname{ch}\otimes\mathbb Q:K^j(X)\otimes\mathbb Q\to\bigoplus_kH^{j+2k}(X;\mathbb Q)$ is an isomorphism of filtered $\mathbb Q$-vector spaces. [F3, step 1.1, step 1.2]

3.1 The argument uses the isomorphism on $E_2$ and the compatible filtered target maps; it does not infer the filtered groups from a collapse, in accordance with [F5], which shows that an abstract collapsed page determines only the associated graded. [F5, step 2.1]

3.2 Multiplicativity. By [F1] the graded character is multiplicative on both parities, so the bijections of step 2.1 for $j$ even and $j$ odd are ring isomorphisms for the $\mathbb Z/2$-graded products; naturality in $X$ is the naturality of the character. [F1, step 2.1]

4.1 Boundary cases. For $X$ a point the isomorphism reads $K^{2k}(*)\otimes\mathbb Q\cong\mathbb Q$ and $0$ in odd degrees, which is [F2]. For $j$ outside $[0,2\dim X]$ both sides are zero or reduced to finitely many terms, and the filtration endpoints are finite. The coefficient field $\mathbb Q$ is nonzero, so no zero-ring case arises; the empty complex has trivial $K$-theory and trivial cohomology. AC enters only through [A1]. [A1, F2, F4, step 2.1] ∎

## Source notes

Hatcher's section 4.1 and May's Chapter 24 section 4 state that the Chern character induces a rational isomorphism for finite CW complexes; the proof above is the spectral-sequence comparison: an isomorphism on $E_2$, finite filtrations, and the comparison theorem for filtered abutments, with the collapse caveat recorded rather than used.
