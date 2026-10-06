---
id: thm-nonaffine-finite-relation-quotient-with-affine-orbits
kind: theorem
title: "Finite locally free equivalence quotients exist when orbits lie in affine opens"
status: published
origin: pipeline
deps: [def-axiom-of-choice, lem-nonaffine-finite-relation-saturated-affine-neighbourhood, thm-nonaffine-finite-flat-affine-equivalence-quotient, lem-nonaffine-fppf-descent-of-scheme-morphisms]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "historical complete Step5 reader; item thm-nonaffine-finite-relation-quotient-with-affine-orbits; evidence research/frontier-38-owner-30-reader-24.md, research/frontier-38-owner-30-reader-findings-24.json. Original reports retain their scope and source limitations; no recursive audit of all published prerequisites or complete bibliography is claimed. Restored from completed 2026-10-03 evidence; no new audit performed."
    delegated_by: "tools/autopilot frontier-38-owner-30 historical dispatched reader/repair lane"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "SGA3, Expose V, Theorem 4.1 and Section 5.b"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp5-13oct24.pdf
    - title: "Milne, Algebraic Groups (2022), Appendix B.26"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
---

## Statement

Assume the Axiom of Choice. Let $R\rightrightarrows X$ be a finite locally free equivalence-relation groupoid on a separated finite-type $k$-scheme. Suppose every orbit is contained in an affine open of $X$. Its fppf quotient is represented by a separated finite-type scheme $Y$, the quotient map $X\to Y$ is finite locally free and onto, and $R=X\times_YX$.

## Facts & Assumptions

[F1] An affine-contained orbit has a saturated affine open neighbourhood. On a saturated affine open the quotient exists and is finite locally free with the prescribed kernel pair. ([[lem-nonaffine-finite-relation-saturated-affine-neighbourhood]], [[thm-nonaffine-finite-flat-affine-equivalence-quotient]])

[F2] Represented scheme functors satisfy fppf descent. ([[lem-nonaffine-fppf-descent-of-scheme-morphisms]])

## Proof

**Given:** AC, $X,R$, and the affine-orbit condition.

1.1 By [F1], cover $X$ by saturated affine opens $W_i$ and let $Y_i$ be their affine finite locally free quotients. For each intersection $W_i\cap W_j$, its image under $W_i\to Y_i$ is open, since finite locally free maps are open, and its inverse image is exactly the intersection by saturation. That open represents the quotient of the restricted relation, by [F2] and the local lifting/kernel-pair description. The corresponding open in $Y_j$ represents the same sheaf, so is uniquely isomorphic. These isomorphisms satisfy the cocycle identity by uniqueness; glue the $Y_i$ along them to a scheme $Y$. [F1, F2, given, construct]

2.1 The local quotient maps glue. Finite local freeness is local on the target, so $q:X\to Y$ is finite locally free and onto, and the local kernel-pair isomorphisms give $R=X\times_YX$. Since every target point lifts after the covering $q$, and two lifts agree in the quotient precisely when related by that kernel pair, [F2] identifies $Y$ with the fppf quotient. A finite affine subcover of $X$ by the $W_i$ gives a finite affine cover of $Y$ by finite-type $k$-algebras, so $Y$ is finite type. [F1, F2, step 1.1, construct]

3.1 The image of the closed diagonal of $X$ under the finite closed map $q\times q$ is the diagonal of $Y$ as a subset, since $q$ is onto. Thus that diagonal has closed image. A finite-type $k$-scheme is locally separated: around every point of its diagonal, choose an affine open $T$ containing the point, and the restriction of the diagonal to $T\times T$ is closed. Hence its diagonal is an immersion; closed image makes this immersion closed, by checking the affine quotient ideals on those neighbourhoods and the open complement of the image. Therefore $Y$ is separated. AC is inherited from [F1]–[F2]. [F1, F2, step 1.1, step 2.1, algebra] ∎
