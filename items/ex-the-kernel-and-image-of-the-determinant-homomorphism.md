---
id: ex-the-kernel-and-image-of-the-determinant-homomorphism
kind: example
title: The kernel and image of the determinant homomorphism
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, prop-first-isomorphism-factorization-for-lie-group-homomorphisms, def-determinant-of-a-square-matrix, thm-determinant-multiplicative]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Examples 7.3(b) and 7.18(c), printed pages 153 and 158; Lie Group Homomorphism Theorem 21.27, printed page 556
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Matrix-group examples, printed pages 23–25, and Corollary 9.5, printed pages 53–54
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$ and $n\ge1$. For real matrices,

$$\det:GL_n(\mathbb R)\to\mathbb R^\times$$

has kernel $SL_n(\mathbb R)$ and image $\mathbb R^\times$. On
$GL_n^+(\mathbb R)=\{A:\det A>0\}$ its image is $\mathbb R_{>0}$. Hence the
first-isomorphism factorization identifies the corresponding intrinsic
quotients with these image Lie groups.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and an integer $n\ge1$.

[F1] The determinant is multiplicative and is given by its finite Leibniz
formula. [[thm-determinant-multiplicative]].
[[def-determinant-of-a-square-matrix]].

[A1] A smooth Lie-group homomorphism factors through its canonical immersed
image as a surjective submersion followed by inclusion.
[[def-countable-choice]],
[[prop-first-isomorphism-factorization-for-lie-group-homomorphisms]].

## Verification

**Proof technique:** compute kernel and image explicitly.

1.1 Multiplicativity in [F1] and polynomiality make determinant a smooth Lie-group homomorphism. By definition, its identity fibre is $\{A:\det A=1\}=SL_n(\mathbb R)$. [F1, algebra]

1.2 For each $r\in\mathbb R^\times$, the diagonal matrix $\operatorname{diag}(r,1,\ldots,1)$ is invertible and has determinant $r$. Thus the image on $GL_n(\mathbb R)$ is all of $\mathbb R^\times$. The same matrix lies in $GL_n^+(\mathbb R)$ exactly when $r>0$, so the restricted image is $\mathbb R_{>0}$. [F1, algebra]

2.1 Apply [A1]. It gives surjective submersions $$GL_n(\mathbb R)\to\mathbb R^\times,\qquad GL_n^+(\mathbb R)\to\mathbb R_{>0}$$ with fibres the left cosets of $SL_n(\mathbb R)$, followed in each case by the evident inclusion of the image. Equivalently, the canonical intrinsic quotient by the kernel is isomorphic to the displayed image Lie group. For $n=1$ these maps are the identity on $\mathbb R^\times$ and its positive subgroup. The disconnected two-component image in the first case is intentional. Countable choice is used only through [A1]. [A1, step 1.1, step 1.2] ∎
