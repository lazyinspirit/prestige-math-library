---
id: ex-an-evaluation-module-for-affine-sl2
kind: example
title: An evaluation module for affine sl2
deps: ["def-evaluation-module-at-nonzero-loop-parameter", "prop-evaluation-modules-have-level-zero-and-do-not-extend-canonically-over-d"]
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

## Example

On $V=\mathbb C^2$, let $e=\left(\begin{smallmatrix}0&1\\0&0\end{smallmatrix}\right)$, $f=\left(\begin{smallmatrix}0&0\\1&0\end{smallmatrix}\right)$ and $h=\operatorname{diag}(1,-1)$. For $a\ne0$ set $x_m v=a^m xv$ and $cv=0$. This is a level-zero representation of the derived affine algebra and has no compatible action of $d$.

## Facts & Assumptions

**Given:** The displayed matrices, $a\in\mathbb C^\times$ and $V=\mathbb C^2$.

[F1] Evaluation representations are [[def-evaluation-module-at-nonzero-loop-parameter]].

[F2] The exact obstruction to adjoining $d$ is [[prop-evaluation-modules-have-level-zero-and-do-not-extend-canonically-over-d]].

## Verification

1.1 Direct multiplication gives $[e,f]=h$, $[h,e]=2e$, $[h,f]=-2f$. Thus these matrices represent $\mathfrak{sl}_2$, and $[a^mx,a^ny]=a^{m+n}[x,y]$. This is the image of the affine mode bracket because the added central term acts zero. F1 consequently gives the claimed representation for all positive, zero and negative modes. The central operator is zero, so its level is zero. [F1, given, algebra]

2.1 The matrix $e$ is nonzero, so F2 excludes an extension. Explicitly, mode zero would give $[D,e]=0$, while mode one would give $[D,ae]=ae$. Bilinearity makes the latter left side zero, but $ae\ne0$, a contradiction. This holds also at $a=1$, and negative powers are defined precisely because $a\ne0$. All vectors and operators are explicit; no AC is used. [F2, step 1.1, algebra] ∎
