---
id: ex-special-linear-as-a-closed-lie-subgroup-of-general-linear
kind: example
title: SL(n) as a closed Lie subgroup of GL(n)
status: draft
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, def-lie-group, def-determinant-of-a-square-matrix, def-trace-of-a-square-matrix-over-a-commutative-ring, thm-kernel-of-a-lie-group-homomorphism-is-a-closed-embedded-normal-lie-subgroup, prop-tangent-space-of-a-regular-level-set-is-the-kernel]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Example 7.18(c),(e), printed pages 158–159; Lie Group Homomorphism Theorem 21.27, printed page 556
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Examples 3.2-3.3, printed pages 25-26; Corollary 9.5, printed pages 53-54
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Example

Assume $\mathrm{AC}_\omega$, let $\mathbb F$ be $\mathbb R$ or $\mathbb C$,
and let $n\ge1$. Then

$$\operatorname{SL}_n(\mathbb F)=\ker\left(\det:\operatorname{GL}_n(\mathbb F)\to\mathbb F^\times\right)$$

is a closed embedded normal Lie subgroup, and

$$\operatorname{Lie}(\operatorname{SL}_n(\mathbb F))=\mathfrak{sl}_n(\mathbb F)=\{X\in M_n(\mathbb F):\operatorname{tr}X=0\}.$$

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $\mathbb F\in\{\mathbb R,\mathbb C\}$, and
an integer $n\ge1$.

[F1] A Lie group has smooth multiplication and inversion; determinant and
trace have their finite Leibniz and diagonal-sum formulas. [[def-lie-group]],
[[def-determinant-of-a-square-matrix]],
[[def-trace-of-a-square-matrix-over-a-commutative-ring]].

[A1] The kernel of a smooth Lie-group homomorphism is closed, embedded and
normal, with tangent algebra equal to the kernel of its identity
differential. [[def-countable-choice]],
[[thm-kernel-of-a-lie-group-homomorphism-is-a-closed-embedded-normal-lie-subgroup]].

[F2] A regular level has tangent space equal to the kernel of its
differential. [[prop-tangent-space-of-a-regular-level-set-is-the-kernel]].

## Verification

**Proof technique:** compute the determinant differential at the identity.

1.1 The locus $\det\ne0$ is open in the finite-dimensional real vector space underlying $M_n(\mathbb F)$. Matrix multiplication is polynomial there, and the adjugate formula $A^{-1}=\operatorname{adj}(A)/\det A$ makes inversion smooth, so this locus is the Lie group $\operatorname{GL}_n(\mathbb F)$ in the sense of [F1]. The determinant is polynomial, hence smooth, and multiplicativity makes $\det:\operatorname{GL}_n(\mathbb F)\to\mathbb F^\times$ a Lie-group homomorphism. Its identity fibre is exactly $\operatorname{SL}_n(\mathbb F)$, so [A1] makes this fibre a closed embedded normal Lie subgroup. [F1, A1, algebra]

1.2 In the Leibniz expansion of $\det(I+tX)$, the identity permutation contributes $1+t\sum_iX_{ii}+O(t^2)$, while every nonidentity permutation needs at least two off-diagonal factors and contributes $O(t^2)$. Thus $d(\det)_I(X)=\operatorname{tr}X$. This differential is onto $\mathbb F$: the matrix $\operatorname{diag}(z,0,\ldots,0)$ has trace $z$. Left multiplication transports surjectivity to every point of the identity fibre, so the fibre is regular and [F2] gives the same tangent kernel. [F1, F2, algebra]

2.1 Combining steps 1.1 and 1.2 with [A1] yields $\operatorname{Lie}(\operatorname{SL}_n(\mathbb F))=\ker d(\det)_I=\{X:\operatorname{tr}X=0\}$. For $n=1$ the subgroup and Lie algebra are both trivial; singular matrices $X$ are allowed as tangent vectors. The complex case is read as a real Lie group, and the complex-linear trace map is also onto as a real map. No endpoint or metric choice occurs. $\mathrm{AC}_\omega$ is inherited exactly through [A1]. [A1, F1, F2, step 1.1, step 1.2] ∎
