---
id: thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps
kind: theorem
title: "Relative hard Lefschetz and perverse splitting for compact projective algebraic maps"
status: draft
origin: session
deps:
  - def-axiom-of-choice
  - lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction
  - thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties
  - lem-hard-lefschetz-splits-a-bounded-t-structure-complex
  - thm-ample-powers-very-ample-proper-base
  - thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes
  - lem-analytic-constructible-sheaves-admit-coherent-six-operations
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "de Cataldo and Migliorini, The Hodge theory of algebraic maps, Theorem 2.1.1 and its complete projective proof in sections 4–6"
      url: https://arxiv.org/pdf/math/0306030
---

## Statement

Assume the inherited Axiom of Choice. Let $f:X\to Y$ be a projective morphism of complex projective varieties, with $X$ smooth of pure complex dimension $n$, and let $\eta$ be the first Chern class of an ample line bundle on $X$. For $K=Rf_*\mathbb Q_X[n]$, the maps $\eta^i:{}^pH^{-i}K\to{}^pH^iK$ are isomorphisms for all $i\ge0$, and $K\cong\bigoplus_i{}^pH^iK[-i]$ is a finite perverse splitting. Every ${}^pH^iK$ is a finite direct sum of intersection complexes of simple rational local systems on smooth dense opens of irreducible supports. The complexifications of those local systems are semisimple. This compact-source theorem will be used on explicit quiver-incidence projective compactifications; it does not assert a general nonprojective-source reduction.

## Facts & Assumptions

**Given:** the map, smooth source, ample class and choice assumption in the Statement.

[F1] The exact simultaneous-induction supplier [[lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction]] proves the following stronger induction step. The projective Hodge/perverse package consists of relative hard Lefschetz, splitting, perverse semisimplicity with semisimple complexifications of its local systems, base hard Lefschetz on canonical graded perverse cohomology groups, purity of those graded groups and their double primitive polarizations. If it holds for all smooth compact projective maps with lexicographically smaller pair $(r(g),\dim g(Z))$, then it holds for $f$. Its complete local construction is now embedded in the existing core-item draft, including the ordered geometric interfaces; its named upstream suppliers and native mathematical review retain their own status.

[F2] For maps to a point this package is ordinary pure Hodge theory, hard Lefschetz, primitive Hodge–Riemann and finite vector-space semisimplicity ([[thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties]]). Abstract hard Lefschetz gives finite derived splitting in the actual bounded t-category ([[lem-hard-lefschetz-splits-a-bounded-t-structure-complex]]).

[F3] Proper direct image, finite component sums, perverse heart classification and closed-support extension are the constructed functors and t-structure of [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]] and [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]].

## Proof

**Given:** the data and the actual induction-step supplier [F1]. We prove its stronger package by lexicographic induction, with defect as the primary integer.

1.1 It suffices to treat a connected component of $X$, since smooth components are open and closed and there are finitely many of them, and [F3] preserves their direct sum. Such a component is irreducible. Replace $Y$ by the projective image with its reduced structure and later extend by the closed-support functor in [F3]. Its defect and image dimension are nonnegative integers; if its image dimension is zero, [F2] proves the entire package directly, including semisimplicity after complexification on the point. The empty source gives the zero complex and is already covered. For a remaining map, fix its pair and assume the package for every lexicographically smaller pair. [F2, F3, given, induction, base, ih]

2.1 For a remaining map use the induction hypothesis fixed in step 1.1. The exact induction step [F1] then gives the package for this map. Lexicographic order on the nonnegative integer pair is well-founded, so together with the zero-image base case this proves it for all maps. The target assertions are the first two clauses of that stronger package. By [[thm-ample-powers-very-ample-proper-base]], every ample line bundle here has a sufficiently high very ample power. They are unchanged on replacing an ample bundle by a sufficiently high very ample power: its class multiplies the hard-Lefschetz maps by nonzero rational integers, and splitting/semisimplicity do not depend on the class. Reassemble the finite components by [F3]. This proves the Statement from the actual induction-step supplier. [F1, F2, F3, step 1.1, induction, discharge-induction] ∎

## Proof contract boundary

The formal induction and extraction here use the actual local core-item proof, whose ordered boundary, hyperplane, Hodge, refined-intersection and moving-family constructions are physically embedded. Every named upstream supplier retains its proof and native-review status; neither this research draft nor its local format checks assert independent mathematical acceptance. The core contract records chronology and exact consumed interfaces. No reading-only citation or unproved fallback replaces a local proof.
