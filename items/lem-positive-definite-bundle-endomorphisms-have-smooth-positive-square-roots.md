---
id: lem-positive-definite-bundle-endomorphisms-have-smooth-positive-square-roots
kind: lemma
title: Positive-definite bundle endomorphisms have smooth positive square roots
status: published
origin: pipeline
deps: ["thm-non-negative-square-root-exists-and-is-unique", "thm-parametrized-implicit-function-theorem-with-higher-regularity"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Theorem 2.26 and its fibrewise use before Definition 3.31, pp. 14 and 42
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

Let $E\to M$ be a finite-rank real vector bundle with a smooth bundle metric,
and let $T\in\Gamma(\operatorname{End}E)$ be smooth, self-adjoint, and positive
definite in every fibre. There is a unique smooth self-adjoint positive-definite
bundle endomorphism $S$ with $S^2=T$.

## Facts & Assumptions

**Given:** The bundle, metric, and endomorphism in the statement.

[F1] Every non-negative self-adjoint endomorphism of a finite-dimensional inner
product space has a unique non-negative square root.
[[thm-non-negative-square-root-exists-and-is-unique]].

[F2] A solution of a smooth finite-dimensional equation depends smoothly on
parameters when its derivative in the unknown is invertible.
[[thm-parametrized-implicit-function-theorem-with-higher-regularity]].

## Proof

**Proof technique:** direct.

1.1 In each fibre [F1] gives a unique positive-definite self-adjoint square root $S_x=T_x^{1/2}$. These fibre maps automatically define a bundle endomorphism set-theoretically; it remains to prove local smoothness. [F1, given]

1.2 Fix $x_0$ and a smooth orthonormal frame near it, so self-adjoint maps are symmetric matrices. For $\Phi(R)=R^2$, the derivative at the positive matrix $S_{x_0}$ is $D\Phi_{S_{x_0}}(H)=S_{x_0}H+HS_{x_0}$. In an orthonormal eigenbasis of $S_{x_0}$ its $(i,j)$ entry is $(s_i+s_j)H_{ij}$; every $s_i>0$, so this derivative is an isomorphism on symmetric matrices. [F1, algebra]

2.1 Apply [F2] to $R^2-T_x=0$. It produces a unique smooth symmetric solution $R(x)$ near $x_0$ with $R(x_0)=S_{x_0}$. After shrinking, positivity persists; fibrewise uniqueness in [F1] then gives $R(x)=S_x$. Thus $S$ is smooth near every point, and the unique local roots agree on overlaps. In rank zero the unique empty endomorphism supplies the result. [F1, F2, step 1.1, step 1.2] ∎
