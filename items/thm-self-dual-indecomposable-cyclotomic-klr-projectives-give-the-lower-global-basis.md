---
id: thm-self-dual-indecomposable-cyclotomic-klr-projectives-give-the-lower-global-basis
kind: theorem
title: "Self-dual indecomposable cyclotomic projectives give the lower global basis"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 33
deps: [def-axiom-of-choice,
       def-cyclotomic-klr-diagram-duality-and-graded-module-duals,
       def-lower-global-basis-of-a-quantum-highest-weight-module,
       lem-cyclotomic-extension-of-scalars-respects-the-based-quotient,
       lem-cyclotomic-projective-covers-and-dualities-descend-through-the-quotient,
       thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module,
       thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module,
       thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis,
       thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Seok-Jin Kang and Masaki Kashiwara, Categorification of Highest Weight Modules via Khovanov-Lauda-Rouquier Algebras, arXiv:1102.4677v4"
      url: "https://arxiv.org/pdf/1102.4677v4"
      locator: "Section 6 and the final global-basis discussion: the identification of the normalized self-dual indecomposable projectives with the lower global basis."
    - title: "Owner direction, in-repo: research/frontier-44-special-representation-examples-28-owner-authoring-direction.md"
      locator: "Section 'Conditional on that realization, graded Yoneda directly gives perverse-summand projectives ...; Self-dual normalization gives norm1; ... the local positive FIRST-block recursion fixes the signs.'"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]), inherited through the based-quotient, generic global-basis, projection and canonical crystal suppliers.

For a symmetric Cartan datum normalized by $d_i=1$, over any
characteristic-zero field, and the SAME finite loopless quiver with arbitrary
edge multiplicities and $Q_{ij}=(-1)^{h_{ij}}(u-v)^{h_{ij}+h_{ji}}$ as the
generic global theorem, use the STANDARD homogeneous first-strand quotient and
RIGHT append. The vacuum-normalized isomorphism
$\phi:K_0(\mathrm{Proj}\,R^\Lambda)\to V_A(\Lambda)$ maps the classes of
normalized $\#$-self-dual indecomposable cyclotomic projectives bijectively
onto the lower global basis. The normalization is by projective HOM duality and
normalized simple heads, not by finite vector duality or a half-trace shift.
The projective with RIGHT crystal label $c\in B(\Lambda)$ maps to
$G^-_\Lambda(c)$. Every such projective is the surviving extension of a
generic normalized cover, with the raw map $\pi_\Lambda\circ*$ and the
FIRST/RIGHT label cancellation proved in the based-quotient lemma. The
uniqueness is at the level of normalized indecomposable projective isomorphism
classes; this is not an assertion that its generic lift is unique. No
arbitrary-parameter based extension is asserted.

## Facts & Assumptions

**Given:** Assume the Axiom of Choice. The symmetric normalized $d_i=1$, characteristic-zero,
loopless-multiedge geometric-parameter scope, the standard first-strand
quotient with right append, and the vacuum-normalized integral isomorphism
$\phi$.

[F1] The based-quotient lemma
([[lem-cyclotomic-extension-of-scalars-respects-the-based-quotient]]): raw
extension sends each surviving normalized generic cover to a single normalized
cyclotomic cover with the map $\pi_\Lambda\circ*$, distinct survivors do not
merge, and every normalized cyclotomic cover is obtained.

[F2] The generic global theorem
([[thm-self-dual-indecomposable-klr-projectives-give-the-negative-half-lower-global-basis]])
and the quantum global projection
([[thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module]]):
normalized self-dual generic projectives give the negative-half lower global
basis, and every lower global vector of $V_A(\Lambda)$ has a generic lift.

[F3] The integral identification and the crystal labels
([[thm-cyclotomic-klr-projective-k-zero-is-the-integral-highest-weight-module]],
[[thm-simple-and-indecomposable-projective-crystals-agree-with-b-lambda]],
[[def-lower-global-basis-of-a-quantum-highest-weight-module]],
[[def-cyclotomic-klr-diagram-duality-and-graded-module-duals]]).

## Proof

**Proof technique:** map each normalized cyclotomic cover to its based-quotient
class, show injectivity by the free normalized basis, and show surjectivity by
lifting lower global vectors through the generic theorem.

1.1 Cover classes land on lower global vectors. By [F1] all normalized cyclotomic covers are precisely the nonzero extensions of normalized generic covers, with distinct surviving simple heads; the based-quotient lemma sends each such class to a single positive lower global vector of $V_A(\Lambda)$, with no grading ambiguity because Hom base change preserves the $\#$-normalization and the degree-zero head pairing. [F1]

2.1 Surjectivity. Conversely the quantum global projection theorem [F2] supplies a generic global vector lifting every lower global vector of $V_A(\Lambda)$, and the generic theorem supplies its normalized generic cover; mirroring if necessary to use the raw first/right convention, its extension has that nonzero class and is a normalized indecomposable cover. Hence the assignment is surjective onto the lower basis. [step 1.1, F2]

3.1 Bijectivity and labels. The integral $K_0$ isomorphism and its free normalized projective basis make the assignment injective; the RIGHT crystal label identification of [F3] shows that the projective with RIGHT label $c\in B(\Lambda)$ maps to $G^-_\Lambda(c)$, with the FIRST/RIGHT label cancellation proved in the based-quotient lemma. The uniqueness is at the level of normalized indecomposable projective isomorphism classes, not of generic lifts, and no arbitrary-parameter based extension is asserted. The Axiom of Choice is inherited through the generic global-basis and projection contracts of [F2], and the based-quotient and canonical crystal identifications of [F1] and [F3]. [step 2.1, F1, F2, F3] ∎
