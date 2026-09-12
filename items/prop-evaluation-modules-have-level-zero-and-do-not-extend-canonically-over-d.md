---
id: prop-evaluation-modules-have-level-zero-and-do-not-extend-canonically-over-d
kind: proposition
title: Evaluation modules have level zero and do not extend canonically over d
deps: ["def-evaluation-module-at-nonzero-loop-parameter", "def-degree-derivation-and-full-untwisted-affine-algebra", "def-null-root-central-coroot-and-affine-level"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Sections 7.1-7.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Definition 12.2.3
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Every evaluation module has $c$ acting zero. If its finite $\mathfrak g$-action is nonzero, it has no compatible action of $d$. If the finite action is zero, every $D\in\operatorname{End}(V)$ defines an extension by letting $d$ act as $D$. In that case $D=0$ is a natural choice, but the relations do not determine $D$ when $V\ne0$; for $V=0$ there is exactly one endomorphism. Thus evaluation gives a module for the derived affine algebra and does not in general extend to the full affine algebra.

## Facts & Assumptions

**Given:** An evaluation module at $a\ne0$.

[F1] Modes act as $a^m\rho(x)$ and $c$ acts zero by [[def-evaluation-module-at-nonzero-loop-parameter]].

[F2] A full extension must satisfy $[d,x_m]=mx_m$ by [[def-degree-derivation-and-full-untwisted-affine-algebra]].

[F3] The scalar central-action meaning of level, including the zero-module qualification, is [[def-null-root-central-coroot-and-affine-level]].

## Proof

1.1 F1 gives the zero central action, hence level zero in F3's scalar-action sense. A proposed operator $D$ for $d$ must satisfy $[D,\rho(x)]=0$ by F2 at mode $m=0$. At mode $m=1$ it must satisfy $[D,a\rho(x)]=a\rho(x)$. The left side is $a[D,\rho(x)]=0$, so $a\ne0$ forces $\rho(x)=0$ for every $x$. Thus a nonzero finite action cannot extend. [F1, F2, F3, algebra]

2.1 Conversely, if $\rho=0$, all loop and central actions are zero. For every $D$ and every $m$, both sides of $[D,a^m\rho(x)]=ma^m\rho(x)$ vanish; also $[D,0]=0$ for $c$ and $[D,D]=0$ for $d$. The original loop relations already hold by F1, so this verifies every full-algebra relation. When $V\ne0$, the operators $0$ and $\operatorname{id}_V$ are distinct compatible actions, proving nonuniqueness. When $V=0$ its only endomorphism is zero. These computations prove both directions of the exact extension criterion and use no AC. [F1, F2, step 1.1, algebra] ∎
