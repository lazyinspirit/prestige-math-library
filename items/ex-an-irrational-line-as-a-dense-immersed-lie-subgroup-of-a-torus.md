---
id: ex-an-irrational-line-as-a-dense-immersed-lie-subgroup-of-a-torus
kind: example
title: An irrational line as a dense immersed Lie subgroup of a torus
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-immersed-embedded-and-closed-lie-subgroup, lem-irrational-torus-flow-is-free-with-dense-orbits, thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Example 21.3, printed page 542; Lie Group Homomorphism Theorem 21.27 and following discussion, printed pages 556-557
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Examples 3.14(2) and 4.6(1), printed pages 26 and 29
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$ and fix $\alpha\in\mathbb R\setminus\mathbb Q$.
Then

$$i:\mathbb R\longrightarrow\mathbb T^2,\qquad i(t)=\left(e^{2\pi it},e^{2\pi i\alpha t}\right)$$

identifies $\mathbb R$ with a one-dimensional immersed Lie subgroup whose
image is dense, proper, nonclosed, and nonembedded in $\mathbb T^2$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, an irrational real number $\alpha$, and the
displayed winding homomorphism $i$.

[A1] The winding map is an injective immersion and homomorphism, and its image
is dense. [[lem-irrational-torus-flow-is-free-with-dense-orbits]].

[A2] The homomorphism-image theorem equips its image with the unique intrinsic
immersed-subgroup structure for which the corestriction is a submersion.
[[def-countable-choice]],
[[thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup]].

[F1] Embeddedness means that this intrinsic topology agrees with the ambient
subspace topology. [[def-immersed-embedded-and-closed-lie-subgroup]].

## Verification

**Proof technique:** calculate the image and compare its intrinsic and ambient
topologies.

1.1 By [A1], $i$ is an injective immersed homomorphism with dense image. Since its kernel is trivial, the canonical image structure in [A2] is transported from the one-dimensional source $\mathbb R$. [A1, A2]

1.2 The image is proper. The point $(1,e^{\pi i\alpha})$ is not in it: equality of the first coordinate would force $t=n\in\mathbb Z$, while equality of the second would make $\alpha(n-\tfrac12)$ an integer, impossible because a nonzero rational multiple of irrational $\alpha$ is irrational. A proper dense subset is not closed. [A1, algebra]

2.1 For each $j\ge1$, let $q_j$ be the least positive integer satisfying $\lVert q_j\alpha\rVert<1/j$, whose existence is the finite-pigeonhole calculation in [A1]. Irrationality makes every fixed $\lVert q\alpha\rVert$ positive, so $q_j\to\infty$. Nevertheless $i(q_j)=(1,e^{2\pi i\alpha q_j})\to(1,1)=i(0)$ in the ambient subspace. Hence the inverse of $i$ on its image is not continuous, so [F1] shows that the subgroup is not embedded. Leastness makes the sequence choice-free; $\mathrm{AC}_\omega$ is inherited only through the general image supplier [A2]. The source dimension is exactly one, its tangent $(1,\alpha)$ is nonzero, and no endpoint is present. [A1, A2, F1, step 1.1, algebra] ∎
