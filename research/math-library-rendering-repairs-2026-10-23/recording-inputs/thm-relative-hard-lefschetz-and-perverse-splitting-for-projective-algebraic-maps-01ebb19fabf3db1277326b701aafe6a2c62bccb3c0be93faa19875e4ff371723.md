---
id: thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps
kind: theorem
title: "Relative hard Lefschetz and perverse splitting for compact projective algebraic maps"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 24
deps: [def-axiom-of-choice, lem-analytic-constructible-sheaves-admit-coherent-six-operations, lem-hard-lefschetz-splits-a-bounded-t-structure-complex, lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction, thm-ample-powers-very-ample-proper-base, thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes, thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "M. A. A. de Cataldo and L. Migliorini, «The Hodge theory of algebraic maps», arXiv:math/0306030v2 (complete arXiv PDF)"
      url: "https://arxiv.org/pdf/math/0306030"
      locator: "Theorem 2.1.1 and its proof structure 2.6, printed pp. 7–8 and 17–18; the completed projective proof in §§5–6, printed pp. 43–59; BBD 5.4.10 supplies the proper-case relative hard Lefschetz theorem"
---

## Statement

Assume the inherited Axiom of Choice. Let $f:X\to Y$ be a projective morphism of complex projective varieties, with $X$ smooth of pure complex dimension $n$, and let $\eta$ be the first Chern class of an ample line bundle on $X$. For $K=Rf_*\mathbb Q_X[n]$, the maps $\eta^i:{}^pH^{-i}K\to{}^pH^iK$ are isomorphisms for all $i\ge0$, and $K\cong\bigoplus_i{}^pH^iK[-i]$ is a finite perverse splitting. Every ${}^pH^iK$ is a finite direct sum of intersection complexes of simple rational local systems on smooth dense opens of irreducible supports. The complexifications of those local systems are semisimple. This compact-source theorem will be used on explicit quiver-incidence projective compactifications; it does not assert a general nonprojective-source reduction.

## Facts & Assumptions

**Given:** The projective morphism $f:X\to Y$ of complex projective varieties with $X$ smooth of pure dimension $n$, the ample line bundle on $X$ with first Chern class $\eta$, the Axiom of Choice inherited from the suppliers, and the perverse direct image $K=Rf_*\mathbb Q_X[n]$.

[F1] The exact simultaneous-induction supplier [[lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction]] proves the following stronger induction step. The projective Hodge/perverse package consists of relative hard Lefschetz $\eta^i:P_{-i}\simeq P_i$, a finite normalized splitting $K\simeq\bigoplus_bP_b[-b]$, perverse semisimplicity with semisimple complexifications of the constituent IC local systems, base hard Lefschetz on the canonical graded perverse cohomology groups, purity of those graded groups and their double primitive polarizations. If the package holds for all smooth connected projective-source maps of lexicographically smaller pair $(r(g),\dim g(Z))$, with $r$ primary, then it holds for the given map.

[F2] For maps to a point the package is ordinary pure Hodge theory, hard Lefschetz, primitive Hodge–Riemann and finite-dimensional vector-space semisimplicity ([[thm-polarized-hodge-riemann-and-hard-lefschetz-for-smooth-projective-varieties]]); abstract hard Lefschetz gives the finite derived splitting in the bounded $t$-category ([[lem-hard-lefschetz-splits-a-bounded-t-structure-complex]]), and on a point the perverse heart is the category of finite-dimensional vector spaces in ordinary degree zero.

[F3] Proper direct image, finite component sums, the perverse heart and its simple objects as intersection complexes, and closed-support extension are the constructed functors and $t$-structure of [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]] and [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]]. In particular the direct sum decomposition of $X$ into finitely many smooth connected components is preserved by the direct image, and $i_*$ for the closed immersion of the projective image with reduced structure is perverse exact.

## Proof

**Proof technique:** lexicographic well-founded induction on the pair consisting of the defect and the dimension of the image, with defect the primary integer, using the simultaneous induction step of [F1].

1.1 It suffices to treat a connected component of $X$: the connected components of the smooth variety $X$ are open and closed and there are finitely many of them, and the direct image of their direct sum is the direct sum of the direct images by [F3]. Such a component is irreducible. Replace $Y$ by the projective image of the component with reduced structure; a closed immersion is perverse exact by [F3], so extending by closed support later preserves the splitting and the IC description. For the reduced image the pair $(r,m)=(r(f),\dim f(X))$ consists of nonnegative integers, as in the induction-step supplier [F1]. If $m=0$, the map factors through a point, and [F2] proves the entire asserted package directly, including the semisimplicity of the complexified local systems (which are finite-dimensional vector spaces on a point). The empty source gives the zero complex and is covered by the same statement. For a remaining map fix its pair and assume the package of [F1] for every lexicographically smaller pair. [F1, F2, F3, given, base, ih]

2.1 The exact induction step [F1] now gives the package for the fixed map. The hypothesis of [F1] is the induction hypothesis recorded in step 1.1, and lexicographic order on pairs of nonnegative integers is well-founded, so with the image-dimension-zero base case the package holds for every smooth connected projective-source map. The clauses asserted in the Statement are the relative hard Lefschetz isomorphisms, the finite splitting and the IC description with semisimplicity of the complexified local systems, all of which are clauses of that package. It remains to replace the very ample class used by [F1] by the given ample class $\eta$: by [[thm-ample-powers-very-ample-proper-base]] a sufficiently high power of the given ample bundle is very ample, and if its class is $\eta_0=m\eta$ then the relative hard Lefschetz isomorphisms for $\eta_0$ scale to those for $\eta$ because $\eta^i=m^{-i}\eta_0^i$; the splitting, the IC description and semisimplicity are independent of the chosen ample class. Finally reassemble the finitely many connected components using the direct sums of [F3]. This proves the Statement; no statement about nonprojective sources is made. [F1, F2, F3, step 1.1, discharge-induction] ∎

## Remarks

The proof extracts the asserted compact-source clauses from the simultaneous projective induction step; the induction step itself, including its ordered hyperplane, Hodge, refined-intersection and moving-family constructions, is proved in [[lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction]]. No general nonprojective-source reduction is asserted, and no finite-ADE, affine-paving or arithmetic-purity hypothesis is used.
