---
id: lem-smooth-complex-pullback-is-exact-for-the-middle-perverse-t-structure
kind: lemma
title: "Smooth complex pullback is exact for the middle perverse t structure"
status: draft
origin: session
deps: ["thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes", "lem-analytic-constructible-sheaves-admit-coherent-six-operations"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "BBD §§1.4 and 2.1; Bernstein–Lunts Part I, finite resolution construction"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
---

## Statement

Assume AC and let $a:X\to Y$ be a smooth algebraic map of pure relative complex dimension $d$, over an arbitrary coefficient field $k$. Then $a^*[d]$ is exact for the ordinary middle-perverse t structures and commutes with their truncation and cohomology functors. Complex orientation gives $a^!=a^*[2d]$. If $a$ is surjective, its normalized pullback is conservative and reflects the perverse support/cosupport inequalities.

## Facts & Assumptions

**Given:** AC and the coefficient, variety, bounds and maps specified in the Statement.

[F1] The actual stated local construction of [[thm-ordinary-middle-perverse-t-structure-glues-and-has-simple-intersection-complexes]] is used with its explicit hypotheses.

[F2] The actual stated local construction of [[lem-analytic-constructible-sheaves-admit-coherent-six-operations]] is used with its explicit hypotheses.

## Proof

1.1 On a smooth target stratum $S$ of complex dimension $e$, the nonempty smooth preimage strata have dimension $e+d$. Exact inverse image gives $H^q(a^*A[d])=a^*H^{q+d}(A)$. For $A$ in the upper middle-perverse aisle, the right side vanishes on these strata when $q+d>-e$, precisely when $q>-(e+d)$. Local smooth product charts preserve the compatible target stratification, so this proves preservation of the upper aisle. [given, F1, F2]

1.2 The ordinary six-operation construction gives $D_X a^*=a^!D_Y$ and the complex orientation $a^!=a^*[2d]$. Consequently $D_X(a^*A[d])=a^*D_YA[d]$. The ordinary middle-perverse core identifies the lower aisle as the dual of the upper aisle, so the first step proves preservation of the lower aisle too. The orientation unit is nonzero over every field, exact finite-dimensional duality is field-general, and $[2d]$ is a cohomological shift. Thus this support/duality argument applies to arbitrary $k$. [given, F1, F2]

2.1 Applying this t-exact functor to a truncation triangle produces the unique target truncation triangle, proving commutation with perverse truncations and cohomology. If $a$ is surjective, inverse image is stalkwise conservative and reflects ordinary cohomological vanishings. Apply the same dimension calculation to support and dual support to reflect both perverse inequalities. This proves the stated conservativity/reflection. [given, F1, F2] ∎

## Source notes

Research draft from the exact named local inputs. Ordinary geometric constructions retain their current draft/open status; this carries no native acceptance or independent audit.
