---
id: lem-nonaffine-finite-field-descent-scheme-with-affine-orbits
kind: lemma
title: "Finite field descent is effective for schemes with affine-contained descent orbits"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-nonaffine-finite-relation-quotient-with-affine-orbits, lem-nonaffine-fppf-descent-of-scheme-morphisms]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "SGA3 VIA, 3.2.3; SGA1 VIII, 7.6"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp6A-13oct24.pdf
---

## Statement

Assume the Axiom of Choice. Let $K/k$ be a finite field extension, and let $Y$ be a separated finite-type $K$-scheme with a descent datum over $K\otimes_kK$ satisfying its cocycle condition over $K\otimes_kK\otimes_kK$. Suppose every orbit of the resulting finite locally free equivalence relation on the underlying $k$-scheme $Y$ lies in an affine open. Then the datum descends to a separated finite-type $k$-scheme $Y_0$, with $Y\cong Y_0\times_kK$. Compatible morphisms descend uniquely. This includes inseparable extensions and their nonreduced tensor products.

## Facts & Assumptions

[F1] Finite locally free equivalence relations with affine-contained orbits have separated finite-type scheme quotients and the prescribed kernel pair. ([[thm-nonaffine-finite-relation-quotient-with-affine-orbits]])

[F2] Compatible morphisms descend along fppf covers. ([[lem-nonaffine-fppf-descent-of-scheme-morphisms]])

## Proof

**Given:** The schemes, maps, and hypotheses in the statement, and AC.

1.1 The datum makes $D=Y\times_{\operatorname{Spec}k}\operatorname{Spec}K$ into a relation on the underlying $k$-scheme $Y$: its first map is projection, and its second map uses the given isomorphism between the two $K\otimes_kK$ base changes. Both projections are finite locally free of rank $[K:k]$. The cocycle gives composition, and the diagonal and exchange of the two scalar factors give identity and inverse. The map $D\to Y\times_kY$ is a monomorphism: the source point together with the scalar structure of the target uniquely determines the scalar point in the second factor, and the datum then uniquely determines the target. Thus [F1] gives $p:Y\to Y_0=Y/D$, finite locally free, onto, with kernel pair $D$. [F1, given, construct, algebra]

2.1 The map $(p,\text{structure}):Y\to Y_0\times_kK$ becomes an isomorphism after the faithfully flat cover $Y\to Y_0$: its pullback is $Y\times_{Y_0}Y=D$, which is exactly $Y\times_kK$, with the isomorphism supplied by the datum. Its inverse descends by [F2], so the map itself is an isomorphism. The same morphism descent gives uniqueness and descent of compatible morphisms. This uses the entire cocycle over the tensor algebras; automorphism invariance alone is insufficient for inseparable $K/k$. AC is inherited from [F1]–[F2]. [F1, F2, step 1.1, algebra] ∎

