---
id: ex-sine-sends-a-half-strip-to-the-upper-half-plane
kind: example
title: "Boundary tracking for the sine biholomorphism of the upper half-strip"
status: published
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-sine-biholomorphism-from-upper-half-strip]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Complex Analysis, 3rd ed., Ch. 3 §4.2"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
---

## Example

Let

$$S:=\{\,z\in\mathbb C:-\pi/2<\operatorname{Re}z<\pi/2,\ \operatorname{Im}z>0\,\}.$$

The boundary components of $S$ map under $\sin$ to the real axis:

$$\sin\bigl(\pi/2+iy\bigr)=\cosh y,\qquad \sin\bigl(-\pi/2+iy\bigr)=-\cosh y,\qquad \sin x\in(-1,1)\text{ for }x\in(-\pi/2,\pi/2).$$

Thus the sine biholomorphism of
[[thm-sine-biholomorphism-from-upper-half-strip]] carries the whole boundary of
$S$ onto $\mathbb R$.

## Facts & Assumptions

**Given:** The upper half-strip $S$ above.

[F1] The sine map biholomorphically sends $S$ onto the upper half-plane
([[thm-sine-biholomorphism-from-upper-half-strip]]).

## Verification

1.1 For $y>0$, $\sin\bigl(\pi/2+iy\bigr)=\sin(\pi/2)\cosh y+i\cos(\pi/2)\sinh y=\cosh y>0$, and similarly $\sin\bigl(-\pi/2+iy\bigr)=-\cosh y<0$. [given, algebra]

2.1 For real $x\in(-\pi/2,\pi/2)$ one has $\sin x\in(-1,1)\subset\mathbb R$; together with step 1.1, every boundary component of $S$ maps into $\mathbb R$, and [F1] identifies the interior image as $\mathbb H$. [F1, step 1.1, algebra] ∎
