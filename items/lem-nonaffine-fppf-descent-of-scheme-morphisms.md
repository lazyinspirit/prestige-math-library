---
id: lem-nonaffine-fppf-descent-of-scheme-morphisms
kind: lemma
title: "Scheme morphisms satisfy fppf descent"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-faithfully-flat-descent-vanishing, thm-flat-finite-presentation-is-open, thm-affine-fibre-product-tensor-ring, thm-morphisms-into-affine-scheme-global-sections]
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
    - title: "Stacks Project, Descent, faithfully flat descent of morphisms"
      url: https://stacks.math.columbia.edu/tag/023Q
    - title: "SGA3, Expose IV, represented sheaves and effective equivalence relations"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp4-13oct24.pdf
---

## Statement

Assume the Axiom of Choice. Let $p:X'\to X$ be faithfully flat, quasi-compact, and locally of finite presentation. For any scheme $Z$, a morphism $f':X'\to Z$ descends to a unique morphism $X\to Z$ exactly when its two pullbacks to $X'\times_XX'$ agree. Consequently represented scheme functors are sheaves for the fppf topology.

## Facts & Assumptions

[F1] Faithfully flat scalar extension detects zero modules; flat finite-presentation morphisms are open. ([[thm-faithfully-flat-descent-vanishing]], [[thm-flat-finite-presentation-is-open]])

[F2] Affine fibre products have tensor-product rings, and morphisms to affine schemes correspond to maps on global sections. ([[thm-affine-fibre-product-tensor-ring]], [[thm-morphisms-into-affine-scheme-global-sections]])

## Proof

**Given:** AC, $p$, $X$, $X'$, $Z$, and $f'$ with the stated compatibility.

1.1 For any faithfully flat ring map $A\to B$, $A\to B\rightrightarrows B\otimes_AB$ is an equalizer. Check exactness after the faithful flat tensor extension by $B$. The extended sequence is $0\to B\to B\otimes_AB\to B\otimes_AB\otimes_AB$, with the first arrow $b\mapsto b\otimes1$. That arrow is split by multiplication. If $x=\sum b_i\otimes c_i$ has equal images in the triple tensor product, applying multiplication to its first two factors gives $x=(\sum b_ic_i)\otimes1$, proving exactness. Flatness preserves kernels and cokernels, and their vanishing descends by [F1]; thus the original sequence is exact. [F1, algebra]

1.2 For an affine open $V\subset Z$, the open $W=(f')^{-1}(V)$ is stable under the two relation projections. Any two points of $X'$ over the same point of $X$ lift to a common point of the fibre product: their residue-field tensor product over the base residue field is nonzero. Hence each fibre lies entirely in $W$ or entirely outside it. The image $U=p(W)$ is open by [F1], and $W=p^{-1}(U)$. Such $U$ cover $X$ as $V$ ranges over an affine target cover. [F1, given, construct]

2.1 On an affine open $T=\operatorname{Spec}A\subset U$, choose a finite affine open cover of $p^{-1}(T)$; quasi-compactness gives finiteness. Its disjoint union is affine, say $\operatorname{Spec}B$, and maps faithfully flat to $T$, since restriction of $p$ to each open remains flat and the union is onto. The restriction of $f'$ to this cover, with affine target $V$, gives a ring map $\mathcal O(V)\to B$ whose two composites into $B\otimes_AB$ agree. By step 1.1 it takes values in $A$, yielding a unique morphism $T\to V$. The same equalizer shows that its pullback agrees with $f'$ on the whole $p^{-1}(T)$, by checking on these affine opens. [F1, F2, step 1.1, step 1.2, construct]

3.1 The descended morphisms agree on overlaps: their pullbacks agree, and the equalizer argument on affine source covers detects equality. Thus they glue uniquely on $X$. Conversely every pulled-back morphism satisfies compatibility. For a family of fppf covers, work over an affine open of $X$, take affine source opens whose open images cover it, and select finitely many by quasi-compactness. Their disjoint union is a faithfully flat affine refinement of the family to which the same argument applies. This proves the sheaf condition and uniqueness for represented functors. AC is inherited from [F1] and the scheme-affine-cover suppliers. [F1, F2, step 1.1, step 1.2, step 2.1, construct] ∎
