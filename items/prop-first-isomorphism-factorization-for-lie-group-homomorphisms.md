---
id: prop-first-isomorphism-factorization-for-lie-group-homomorphisms
kind: proposition
title: First-isomorphism factorization for Lie group homomorphisms
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, thm-kernel-of-a-lie-group-homomorphism-is-a-closed-embedded-normal-lie-subgroup, thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Theorem 21.27 and complete proof, printed page 556
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Proposition 4.7 and Corollary 9.5, printed pages 29 and 53–54
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Every smooth Lie-group homomorphism
$F:G\to H$ factors as

$$G\xrightarrow{\ \bar F\ }\operatorname{im}F\xrightarrow{\ j\ }H,$$

where $\bar F$ is a surjective submersion onto the canonical immersed image
and $j$ is its injective immersed-subgroup inclusion. Algebraically, the
fibres are exactly the left cosets of $\ker F$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and a smooth Lie-group homomorphism $F:G\to H$.

[F1] The kernel is a closed embedded normal Lie subgroup. [[def-countable-choice]], [[thm-kernel-of-a-lie-group-homomorphism-is-a-closed-embedded-normal-lie-subgroup]].

[F2] The image has a unique immersed structure for which the corestriction is a surjective submersion. [[thm-image-of-a-lie-group-homomorphism-is-an-immersed-lie-subgroup]].

## Proof

**Proof technique:** direct.

1.1 Let $\bar F:G\to\operatorname{im}F$ be the corestriction and let $j:\operatorname{im}F\hookrightarrow H$ be inclusion. Then $F=j\circ\bar F$ set-theoretically and as homomorphisms. By [F2], $\bar F$ is a surjective submersion and $j$ is an injective immersion with the canonical immersed-subgroup structure. [F2]

1.2 For $g,g'\in G$, $$F(g)=F(g')\iff F(g^{-1}g')=e_H\iff g^{-1}g'\in\ker F\iff g'\in g\ker F.$$ Thus the fibres of both $F$ and $\bar F$ are precisely the left kernel cosets; [F1] also makes right cosets equal because the kernel is normal. [F1, algebra]

2.1 Steps 1.1 and 1.2 prove the asserted differential-geometric and algebraic factorization. The zero map, trivial kernel, nonclosed image, and disconnected groups are included. No embeddedness of the image is inferred. Countable choice is inherited through [F1]–[F2]. [F1, F2, step 1.1, step 1.2] ∎
