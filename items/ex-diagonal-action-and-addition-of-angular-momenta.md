---
id: ex-diagonal-action-and-addition-of-angular-momenta
kind: example
title: Diagonal action and addition of angular momenta
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-product-and-opposite-symplectic-moment-maps, ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle, def-countable-choice, lem-tautological-cotangent-moment-map-is-equivariant]
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

Assume $\mathrm{AC}_\omega$. Let $SO(3)$ act diagonally on $T^*\mathbb R^3\times T^*\mathbb R^3$ by the
cotangent lifts of the rotations of each factor, with the product symplectic
form. Then the moment map is the **sum of the individual angular momenta**:

$$\mu(q_1,p_1,q_2,p_2)=q_1\times p_1+q_2\times p_2\in\mathbb R^3,$$

under the identification $\mathfrak{so}(3)^*\simeq\mathbb R^3$. This is the
classical addition of angular momenta for a two-particle system in
$\mathbb R^3$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the diagonal $SO(3)$-action on the product of two cotangent bundles with the product form.

[A1] Countable choice is [[def-countable-choice]], inherited through both supplied Hamiltonian constructions; the finite addition uses no further choice.

[F1] On each factor the tautological moment map of the rotation action is $\mu_i(q_i,p_i)=q_i\times p_i$ under the identification $\mathfrak{so}(3)^*\simeq\mathbb R^3$. [[ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle]].

[F2] On a product with the diagonal action and the product form, the moment maps add: $\mu=\mu_1\circ\operatorname{pr}_1+\mu_2\circ\operatorname{pr}_2$, and the sum is equivariant. [[prop-product-and-opposite-symplectic-moment-maps]].

[F3] The tautological cotangent moment map is coadjoint equivariant ([[lem-tautological-cotangent-moment-map-is-equivariant]]).

## Verification

**Proof technique:** direct.

1.1 By [F1] each factor contributes the angular momentum $q_i\times p_i$, computed from the tautological moment map with the library's negative fundamental-field convention. [F1, given]

1.2 These are specifically the tautological cotangent maps by [F1], so [F3] gives $\mu_i(R\cdot(q_i,p_i))=\operatorname{Ad}_R^*\mu_i(q_i,p_i)$ for every $R\in SO(3)$. Thus each factor meets the equivariance hypothesis of [F2], independently of any covering-group example. [F1, F3, algebra]

2.1 By [F2] the product moment map is the pointwise sum $\mu=\mu_1+\mu_2$, which under the identification of $\mathfrak{so}(3)^*$ with $\mathbb R^3$ is the vector sum $q_1\times p_1+q_2\times p_2$. Its equivariance follows from step 1.2 and [F2]. This is the addition law for angular momenta in this model. It includes vanishing individual terms and cancellation of the two terms, since no division or general-position condition occurs. The inherited assumption is [A1]. [step 1.1, step 1.2, F2, A1] ∎
