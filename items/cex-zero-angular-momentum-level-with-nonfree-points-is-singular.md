---
id: cex-zero-angular-momentum-level-with-nonfree-points-is-singular
kind: counterexample
title: The zero angular-momentum level has nonfree points and no regular reduction
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle, thm-marsden-weinstein-meyer-symplectic-reduction, prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness, lem-characteristic-kernel-on-a-regular-moment-level, ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.5 Orbifolds, printed pages 150--151
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Remarks around Theorem 8.3, printed page 101
proof_strategy: direct
verification:
  audited: 2026-09-22
---

## Statement refuted

On $T^*\mathbb R^3$ with the rotation action of $SO(3)$, the zero level of the
angular-momentum moment map is a free $SO(3)$-space, $0$ is a regular value,
and the quotient is the smooth symplectic manifold produced by regular
reduction. **This is false:** the level contains the fixed origin and points
with circle stabilizers, and $0$ is a critical value, so those hypotheses fail.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $M=T^*\mathbb R^3$ with the cotangent-lift rotation action of $SO(3)$, moment map $\mu(q,p)=q\times p$, and the value $0$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and reduction suppliers.

[F1] The moment map of the rotation action is $\mu(q,p)=q\times p$ under the identification $\mathfrak{so}(3)^*\simeq\mathbb R^3$, and it is an equivariant moment map. [[ex-angular-momentum-as-the-moment-map-for-rotations-of-a-cotangent-bundle]], [[ex-su-two-and-so-three-have-isomorphic-real-lie-algebras-locally-but-different-global-groups]].

[F2] A value of a moment map is regular exactly when the infinitesimal stabilizers of the points of its level vanish; the reduction theorem requires a regular value and a free proper stabilizer action on the level. [[prop-regularity-of-a-moment-map-is-equivalent-to-local-freeness]], [[thm-marsden-weinstein-meyer-symplectic-reduction]].

[F3] On a regular level the characteristic kernel is exactly the tangent space of the stabilizer orbit. [[lem-characteristic-kernel-on-a-regular-moment-level]].


## Counterexample

**Proof technique:** direct.

1.1 The origin $(q,p)=(0,0)$ lies on the zero level because $0\times0=0$, and it is fixed by every rotation; in particular its stabilizer is all of $SO(3)$ and the infinitesimal stabilizer is the full Lie algebra $\mathfrak{so}(3)\ne0$. [F1, given]

2.1 The point $(q,p)=(e_1,e_1)$ also lies on the zero level, because $e_1\times e_1=0$. Its stabilizer is the circle of rotations about the $e_1$-axis: indeed $g\cdot(e_1,e_1)=(ge_1,ge_1)=(e_1,e_1)$ exactly when $ge_1=e_1$. The orbit of this point therefore has dimension $2$, while the orbit of the origin has dimension $0$. [step 1.1, F1]

2.2 By [F2] the value $0$ is **not** regular, since its level contains a point, the origin, with nonzero infinitesimal stabilizer; and the action on the level is not free because the origin is fixed. Hence the hypotheses of the reduction theorem both fail at this value. [step 1.1, F2]

3.1 Consequently no smooth reduced symplectic manifold is obtained for the value $0$ by the theorem: the level is a stratified space whose strata carry orbits of dimensions $0$ and $2$, and the characteristic-kernel description of regular levels does not apply. [step 2.2, F2, F3]

4.1 The zero angular-momentum level therefore has nonfree points and cannot be reduced by the free proper regular theorem; the false statement is refuted. [step 2.1, step 3.1, A1] ∎
