---
id: ex-isoparametric-unit-disk-mesh
kind: example
title: "A ten-cell isoparametric mesh exactly covers the unit disk"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-isoparametric-curved-cell-map
  - lem-isoparametric-pullback-and-surface-metric
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2023, Part III, Chapter 8"
      url: https://people.tamu.edu/~guermond/M661_FALL_2023/chap08.pdf
    - title: "Gerald Dziuk and Charles M. Elliott, Finite element methods for surface PDEs, Acta Numerica 22 (2013)"
      url: https://wrap.warwick.ac.uk/id/eprint/53966/1/WRAP_Elliott_DziEll13a.pdf
verification:
  precheck: pass
---

## Example

Assume Countable Choice. Let $a=1/2$ and $g(t)=a\tan(\pi t/4)$. Map the reference square $[-1,1]^2$ to the central square $[-a,a]^2$ by $H(t,q)=(g(t),g(q))$ and split it into two triangles. For the top annular sector use $\theta(t)=\pi/2-\pi t/4$, $r(s,t)=(1-s)a/\sin\theta(t)+s$, and $F(t,s)=r(s,t)(\cos\theta(t),\sin\theta(t))$; split this rectangle into two triangles and rotate it for the other three sides. These ten mapped triangles have positive Jacobians, matching traces, and union equal to the closed unit disk.

## Geometry sketch

The central square and four annular sectors are shown with their shared radial rays. Dashed lines indicate the chosen splits of the mapped sector rectangles; their exact curved images are given by $F$ above and the rotations, so the sketch is topological and is not used in the coverage proof.

```tikz
\begin{tikzpicture}[scale=2]
  \coordinate (O) at (0,0);
  \draw[thick] (O) circle (1);
  \draw[thick] (-0.5,-0.5) rectangle (0.5,0.5);
  \draw[blue,thick] (-0.5,-0.5)--(0.5,0.5);
  \foreach \a in {45,135,225,315} {\draw (O)--({cos(\a)},{sin(\a)});}
  \draw[dashed,red] (-0.5,0.5)--({cos(45)},{sin(45)});
  \draw[dashed,red] (0.5,0.5)--({cos(135)},{sin(135)});
  \draw[dashed,red] (0.5,-0.5)--({cos(225)},{sin(225)});
  \draw[dashed,red] (-0.5,-0.5)--({cos(315)},{sin(315)});
  \node at (0,0.68) {$2$ central cells};
  \node at (0,0.88) {$8$ sector cells};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** Countable Choice; $a=1/2$, the central map $H$, the sector map $F$, and four rotations by multiples of $\pi/2$.

[F1] [[def-isoparametric-curved-cell-map]]: each cell map must have a positive Jacobian and neighboring mapped traces must agree.

[F2] [[lem-isoparametric-pullback-and-surface-metric]]: the metric and surface factors are determined by the Gram matrices of the map derivatives.

[F3] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: under Countable Choice, a $C^1$ diffeomorphism changes variables with its positive Jacobian.

[A1] Countable Choice is assumed exactly for [F3] ([[def-countable-choice]]).

## Verification

1.1 $g'(t)=a(\pi/4)\sec^2(\pi t/4)>0$, so $H$ maps $[-1,1]$ bijectively onto $[-a,a]^2$, since $g(-1)=-a$ and $g(1)=a$. Its Gram determinant gives the same volume factor by [F2]. On the top sector, $\theta'=-\pi/4$ and $r_s=1-a/\sin\theta\ge1-a\sqrt2>0$ because $\sin\theta\ge\sqrt2/2$. Polar-coordinate differentiation gives $\det DF=r r_s(-\theta')>0$; the Gram determinant satisfies $\sqrt{\det(DF^TDF)}=\det DF$. Rotations preserve these determinants. [F1, F2, given, algebra]

2.1 At $s=0$, $F(t,0)=(a\cot\theta(t),a)=(g(t),a)$, which is exactly the trace of $H$ on its top edge; at $s=1$, $r=1$, so the outer trace is the unit-circle arc from angle $3\pi/4$ to $\pi/4$. The two radial side traces match those of adjacent rotated sectors. Hence all ten pieces meet only along identical mapped edges. [F1, step 1.1, algebra]

3.1 For each angle $\theta\in[\pi/4,3\pi/4]$, the square boundary on that ray has radius $a/\sin\theta$ and the unit-circle boundary has radius $1$. The sector map covers exactly the radii between them. Four rotated angular ranges cover the annulus outside the central square, with shared corner rays only; $H$ covers the central square. Therefore the ten mapped triangles cover the unit disk without interior overlap. [given, step 2.1, algebra]

4.1 The central area is $4a^2=1$. By [F3], the sector area is the polar integral $\frac12\int_{\pi/4}^{3\pi/4}(1-a^2\csc^2\theta)d\theta$. Since $[-\cot\theta]_{\pi/4}^{3\pi/4}=2$, this equals $\pi/4-a^2=(\pi-1)/4$. Four rotated sectors have total area $\pi-1$, so the union area is $\pi$, consistent with the unit disk. [F3, A1, step 3.1, algebra] ∎
