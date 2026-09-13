---
id: cex-a-compatible-almost-complex-structure-that-is-not-integrable
kind: counterexample
title: A compatible almost-complex structure that is not integrable
status: draft
origin: pipeline
deps: ["rem-compatible-almost-complex-structures-and-kahler-geometry", "def-compatible-complex-structure-on-a-symplectic-vector-space"]
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://web.archive.org/web/20250806200149if_/https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: Nijenhuis tensor and compatible almost-complex structures, pp. 41--43
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Counterexample

On $\mathbb R^4$ with coordinates $(x_1,y_1,x_2,y_2)$ and
$\omega=dx_1\wedge dy_1+dx_2\wedge dy_2$, there is an explicit compatible
almost-complex structure with nonzero Nijenhuis tensor.

## Facts & Assumptions

**Given:** Let $J_0\partial_{x_i}=\partial_{y_i}$ and
$J_0\partial_{y_i}=-\partial_{x_i}$. Put
$A=\operatorname{diag}(e^{x_2},e^{-x_2},1,1)$ in the displayed coordinate
frame and $J=AJ_0A^{-1}$.

[F1] Symplectic conjugation preserves compatibility.
[[def-compatible-complex-structure-on-a-symplectic-vector-space]].

[F2] An integrable almost-complex structure has vanishing Nijenhuis tensor
$N_J(X,Y)=[JX,JY]-J[JX,Y]-J[X,JY]-[X,Y]$; this necessary implication is the
easy direction of the Newlander--Nirenberg criterion recorded in the cited
source. [[rem-compatible-almost-complex-structures-and-kahler-geometry]].

## Verification

**Proof technique:** direct.

1.1 Pointwise $A$ preserves $\omega$ because its reciprocal scalings on $(x_1,y_1)$ preserve $dx_1\wedge dy_1$ and it fixes the other pair. Thus [F1] makes $J$ compatible. Explicitly, with $a=e^{-2x_2}$, $J\partial_{x_1}=a\partial_{y_1}$, $J\partial_{y_1}=-a^{-1}\partial_{x_1}$, and $J$ is standard on the second pair. [F1, given, algebra]

2.1 For $X=\partial_{x_1}$ and $Y=\partial_{x_2}$, all coordinate brackets vanish, while $[a\partial_{y_1},\partial_{x_2}]=-a'\partial_{y_1}$. Hence $N_J(X,Y)=J(a'\partial_{y_1})=-(a'/a)\partial_{x_1}=2\partial_{x_1}\ne0$. By [F2], $J$ is not integrable. [F2, step 1.1, algebra] ∎
