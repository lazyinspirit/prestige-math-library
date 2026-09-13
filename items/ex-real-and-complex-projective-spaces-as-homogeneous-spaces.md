---
id: ex-real-and-complex-projective-spaces-as-homogeneous-spaces
kind: example
title: Real and complex projective spaces as homogeneous spaces
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-countable-choice, cor-transitive-smooth-actions-identify-m-with-g-mod-h]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: John M. Lee, Introduction to Smooth Manifolds, 2nd ed.
      url: https://julianchaidez.net/materials/reu/lee_smooth_manifolds.pdf
      locator: Homogeneous-space examples and Problem 21-10, printed pages 553 and 561
    - title: Pavel Etingof, MIT 18.745 Lie Groups and Lie Algebras I
      url: https://ocw.mit.edu/courses/18-745-lie-groups-and-lie-algebras-i-fall-2020/mit18_745_f20_lec_full.pdf
      locator: Homogeneous-space examples, Section 4, printed pages 29–31
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

Assume $\mathrm{AC}_\omega$. With their standard smooth structures,

$$\mathbb{RP}^n\cong SO(n+1)/S(O(1)\times O(n)),$$

$$\mathbb{CP}^n\cong U(n+1)/(U(1)\times U(n))$$

equivariantly and diffeomorphically for $n\ge1$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, $n\ge1$, and the natural actions on real and
complex lines.

[A1] A transitive smooth action identifies the manifold with the quotient by
a stabilizer. [[def-countable-choice]],
[[cor-transitive-smooth-actions-identify-m-with-g-mod-h]].

## Verification

**Proof technique:** use adapted orthonormal bases and compute block stabilizers.

1.1 The actions on lines are smooth: in an affine projective chart where one coordinate is nonzero, the transformed line coordinates are ratios of linear functions with a nonvanishing denominator. Given two real lines, choose unit generators and extend them to oriented orthonormal bases; the resulting element of $SO(n+1)$ carries one line to the other. Given two complex lines, extend unit generators to unitary bases; the resulting element of $U(n+1)$ does the same. Hence both actions are transitive. [given, algebra]

1.2 The stabilizer in $SO(n+1)$ of the line $\mathbb Re_0$ preserves its orthogonal complement and is therefore $$S(O(1)\times O(n))=\{\operatorname{diag}(\varepsilon,A):\varepsilon=\pm1,\ A\in O(n),\ \varepsilon\det A=1\}.$$ Conversely every such block matrix fixes the line. The stabilizer in $U(n+1)$ of $\mathbb Ce_0$ is exactly the block subgroup $U(1)\times U(n)$: unitarity forces preservation of the orthogonal complement, and every such block matrix fixes the line. [given, algebra]

2.1 Apply [A1] to the base lines. It yields the two displayed equivariant diffeomorphisms. The determinant-one condition in the real stabilizer is essential; replacing it by $O(1)\times O(n)$ would not be a subgroup of $SO(n+1)$. For $n=0$, both projective spaces are a point and the analogous quotient is trivial. Countable choice is used through [A1]. [A1, step 1.1, step 1.2] ∎
