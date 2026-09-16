---
id: ex-diagonal-action-and-addition-of-angular-momenta
kind: example
title: Diagonal action and addition of angular momenta
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-product-and-opposite-symplectic-moment-maps, ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle, ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups, def-cross-product-in-r3, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.4.6(a), products of Hamiltonian spaces, printed page 91
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.3, printed page 149
proof_strategy: direct
---

## Example

Let $SO(3)$ act diagonally on $T^*\mathbb R^3\times T^*\mathbb R^3$ by the
cotangent lifts of the rotations of each factor, with the product symplectic
form. Then the moment map is the **sum of the individual angular momenta**:

$$\mu(q_1,p_1,q_2,p_2)=q_1\times p_1+q_2\times p_2\in\mathbb R^3,$$

under the identification $\mathfrak{so}(3)^*\simeq\mathbb R^3$. This is the
classical addition of angular momenta for a two-particle system in
$\mathbb R^3$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the diagonal $SO(3)$-action on the product of two cotangent bundles with the product form.

[F1] On each factor the moment map of the rotation action is $\mu_i(q_i,p_i)=q_i\times p_i$ under the identification $\mathfrak{so}(3)^*\simeq\mathbb R^3$, and it is equivariant. [[ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle]], [[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]].

[F2] On a product with the diagonal action and the product form, the moment maps add: $\mu=\mu_1\circ\operatorname{pr}_1+\mu_2\circ\operatorname{pr}_2$, and the sum is equivariant. [[prop-product-and-opposite-symplectic-moment-maps]].



## Verification

**Proof technique:** direct.

1.1 By [F1] each factor contributes the angular momentum $q_i\times p_i$, computed from the tautological moment map with the library's negative fundamental-field convention. [F1, given]

2.1 By [F2] the product moment map is the pointwise sum $\mu=\mu_1+\mu_2$, which under the identification of $\mathfrak{so}(3)^*$ with $\mathbb R^3$ is the vector sum $q_1\times p_1+q_2\times p_2$. [step 1.1, F2]

3.1 Equivariance is inherited from the factors by [F2]: a simultaneous rotation acts on the sum by the same rotation matrix, which is the coadjoint action; the components therefore satisfy the moment equations for the diagonal action. This is the addition law for angular momenta in this model. [step 2.1, F2] ∎
