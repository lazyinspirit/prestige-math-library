---
id: ex-hilbert-spaces-are-uniformly-convex
kind: example
title: Hilbert spaces are uniformly convex
status: published
origin: pipeline
deps: [def-banach-space, def-uniformly-convex-banach-space, def-inner-product-space, def-inner-product-norm, cor-triangle-inequality-for-inner-product-norm, thm-of-square-roots, lem-of-square-monotone]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references: []
---

## Statement

Here a **Hilbert space** means a real or complex inner product space that is
complete for its induced norm.  Every Hilbert space is uniformly convex.  More
precisely, for $0<\varepsilon\le2$ the parallelogram identity gives the
modulus

$$\delta(\varepsilon)=1-\sqrt{1-\varepsilon^2/4}.$$

## Facts & Assumptions

**Given:** A real or complex inner product space $H$, complete for its induced norm, and a real number $0<\varepsilon\le2$.

[F1] The inner product is linear in the first variable, conjugate-linear in the second, conjugate symmetric, and positive definite ([[def-inner-product-space]]).  Its induced norm is $\|x\|=\sqrt{\langle x,x\rangle}$ ([[def-inner-product-norm]]).

[F2] The induced function is nonnegative, definite, absolutely homogeneous, and satisfies the triangle inequality ([[cor-triangle-inequality-for-inner-product-norm]]).

[F3] A normed space complete for its norm metric is Banach ([[def-banach-space]]).  Such a space is uniformly convex exactly when for every $\varepsilon\in(0,2]$ a positive $\delta$ gives the required midpoint drop for every pair in its closed unit ball ([[def-uniformly-convex-banach-space]]).

[F4] Every nonnegative real has a unique nonnegative square root, and squaring is strictly increasing on the nonnegative reals ([[thm-of-square-roots]], [[lem-of-square-monotone]]).

## Proof

**Proof technique:** Expand the two squared inner-product norms, then read an explicit positive modulus from the parallelogram identity.

1.1 By [F2], the induced function is a norm.  The assumed completeness and [F3] therefore make $H$ a real or complex Banach space.  This also covers the zero Hilbert space. [F2, F3, given]

1.2 For arbitrary $x,y\in H$, expand with [F1]: $$\|x+y\|^2=\|x\|^2+\langle x,y\rangle+\langle y,x\rangle+\|y\|^2,$$ while $$\|x-y\|^2=\|x\|^2-\langle x,y\rangle-\langle y,x\rangle+\|y\|^2.$$ Adding cancels the two cross terms, over both scalar fields, and gives $$\|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2.$$ [F1]

2.1 Now let $x,y$ lie in the closed unit ball and suppose $\|x-y\|\ge\varepsilon$.  By [F2] and step 1.2, $$\left\|\frac{x+y}{2}\right\|^2=\frac{\|x\|^2+\|y\|^2}{2}-\frac{\|x-y\|^2}{4}\le1-\frac{\varepsilon^2}{4}.$$ The radicand $r=1-\varepsilon^2/4$ belongs to $[0,1)$ because $0<\varepsilon\le2$.  Let $s=\sqrt r\ge0$ as in [F4].  If $s\ge1$, then either $s=1$ or strict monotonicity of squaring gives $s^2>1$, whereas $s^2=r<1$; hence $s<1$.  Since both $\|(x+y)/2\|$ and $s$ are nonnegative, their squared inequality and strict monotonicity of squaring give $$\left\|\frac{x+y}{2}\right\|\le s=1-\delta(\varepsilon).$$ Thus $\delta(\varepsilon)=1-s>0$.  At $\varepsilon=2$, $r=s=0$ and $\delta(2)=1$. [step 1.2, F2, F4, given]

3.1 Step 2.1 applies to every closed-unit-ball pair satisfying the separation hypothesis and supplies a positive number depending only on $\varepsilon$.  Therefore [F3] proves that $H$ is uniformly convex.  No choice principle is used: the square root in the displayed formula is unique by [F4]. [step 1.1, step 2.1, F3, F4] ∎

## Remarks

The definition of Hilbert space needed by this example is given explicitly in the statement.  The proof uses only the earlier inner-product page and does not cite the later Hilbert-space geometry and Riesz-representation page.
