---
id: thm-brunn-minkowski-for-compact-convex-sets
kind: theorem
title: Brunn–Minkowski inequality for compact convex sets
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps:
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-euclidean-inner-product
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - prop-measure-monotonicity
  - thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-weighted-am-gm-real
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-linear-change-of-variables-for-lebesgue-measure
  - thm-monotone-convergence-for-the-integral
  - thm-ftc-first-part
  - thm-derivative-of-an-inverse
  - thm-heine-borel-rn
  - def-countable-choice
  - lem-boundary-of-convex-set-is-lebesgue-null
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: Luc Koenen, The Brunn–Minkowski inequality in Euclidean space, §§3.1–3.3, PDF pp. 11–14
      url: https://www.math.ru.nl/~burtscher/supervision/BScThesis_LucKoenen_2022.pdf
    - title: "Jan van Neerven, γ-Radonifying operators: A Survey, §8, Lemma 8.1 (Brunn–Minkowski application), printed p. 29"
      url: https://maths.anu.edu.au/files/CMAproc44-vanNeerven-href.pdf
---

## Statement

Assume countable choice. Let $d\ge1$ and let $A,B\subseteq\mathbb R^d$ be
nonempty compact convex sets. With $A+B=\{a+b:a\in A,b\in B\}$ and
$\lambda_d$ denoting Lebesgue measure,
$$\lambda_d(A+B)^{1/d}\ge \lambda_d(A)^{1/d}+\lambda_d(B)^{1/d}.$$
Zero-volume and lower-dimensional sets are included.

## Facts & Assumptions

**Given:** Countable choice, an integer $d\ge1$, and nonempty compact convex
sets $A,B\subseteq\mathbb R^d$.

[A1] [[def-countable-choice]]: Countable choice is sufficient for the
Lebesgue-measure change-of-variables and Tonelli suppliers used here; full AC
is not assumed.

[F1] [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]]: Lebesgue volume
of a measurable set is its measure $\lambda_d$.

[F2] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: For a
nonnegative measurable function, integration over $\mathbb R^d$ equals
iterated integration over its one-dimensional slices.

[F3] [[thm-weighted-am-gm-real]]: For positive $x,y$ and $0\le\lambda\le1$,
$(1-\lambda)+\lambda x\ge x^\lambda$.

[F4] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]:
For a $C^1$ diffeomorphism of open sets, the nonnegative Lebesgue integral
transforms with the absolute Jacobian.

[F5] [[thm-linear-change-of-variables-for-lebesgue-measure]]: Invertible
linear dilations scale $d$-dimensional volume by the absolute determinant.

[F6] [[prop-measure-monotonicity]] and
[[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]:
Lebesgue measure is monotone and translation invariant.

[F7] [[thm-ftc-first-part]] and [[thm-derivative-of-an-inverse]]: On each
compact interval inside a projection interval, the fundamental theorem gives
the derivative of the cumulative integral as its continuous integrand. The
inverse theorem then gives $(F_B^{-1})'(u)=1/g(F_B^{-1}(u))$; this derivative is
continuous because $g$ is continuous and positive and $F_B^{-1}$ is
continuous.

[F8] [[thm-monotone-convergence-for-the-integral]]: Increasing nonnegative
integrals converge to the integral of their pointwise limit.

[F9] [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]:
Every bounded measurable subset of $\mathbb R^d$ has finite Lebesgue measure.

[F10] [[lem-boundary-of-convex-set-is-lebesgue-null]]: A convex set with
empty interior has zero $d$-dimensional Lebesgue measure.

[F11] [[thm-heine-borel-rn]]: Compact subsets of finite-dimensional Euclidean
space are closed and bounded, and closed bounded subsets are compact. In
particular, $A\times B$ is closed and bounded in $\mathbb R^{2d}$, hence
compact; continuous images of compact sets are compact, so $A+B$, positive
dilations of $A$ and $B$, and every weighted convex sum used below are compact
and convex (an open cover of the image pulls back to one of the compact domain,
which has a finite subcover). When $d\ge2$, for a compact
$C\subseteq\mathbb R\times\mathbb R^{d-1}$, each coordinate
projection is compact (and is an interval when $C$ is convex) and each slice
$C_z=\{y:(z,y)\in C\}$ is closed and
bounded, hence compact. Thus these bodies and slices are Borel and have
well-defined finite Lebesgue volumes; applying [F2] to $\mathbf1_C$ makes
$z\mapsto\lambda_{d-1}(C_z)$ measurable and gives its integral as
$\lambda_d(C)$.

## Proof

**Proof technique:** induction on dimension using convex slices and a
one-dimensional monotone transport.

1.1 If one of $A,B$ has zero volume, say $\lambda_d(A)=0$, choose $a\in A$. By [F11], $A+B$ is compact and measurable. Then $a+B\subseteq A+B$, so [F6] gives $\lambda_d(A+B)\ge\lambda_d(B)$; the stated inequality follows after taking $d$th roots. If both volumes vanish the right side is zero. Thus assume both volumes are positive. [F1, F6, F9, F11, given, algebra]

2.1 Put $a=\lambda_d(A)^{1/d}$, $b=\lambda_d(B)^{1/d}$, $A'=a^{-1}A$, $B'=b^{-1}B$, and $\lambda=b/(a+b)$. By [F5], $\lambda_d(A')=\lambda_d(B')=1$; [F11] makes these dilates and their convex combinations compact. It suffices to show that every convex combination $(1-\lambda)A'+\lambda B'$ has volume at least one, because $A+B=(a+b)\big((1-\lambda)A'+\lambda B'\big).$ The cases $\lambda=0,1$ are immediate, so take $0<\lambda<1$ and rename $A',B'$ as $A,B$. [A1, F1, F5, F9, F11, step 1.1, given, algebra]

3.1 We prove the normalized claim by induction on $d$. In dimension one, $A$ and $B$ are intervals of length one, so their convex combination is an interval of length $(1-\lambda)+\lambda=1$. Now let $d\ge2$ and assume the normalized claim in dimension $d-1$. The normalization calculation in step 2.1 is dimension-independent, so this induction hypothesis also gives the full weighted inequality in dimension $d-1$ for positive-volume compact convex sets. By [F10], positive volume implies each body has nonempty interior and contains an interior ball. By [F11], their coordinate projections are compact intervals and their slices are compact and measurable; [F2] makes the slice-volume functions measurable. Project each convex body onto the first coordinate; its projection is a nondegenerate compact interval. For an interior coordinate $x$, let $A_x\subseteq\mathbb R^{d-1}$ be its slice and $f(x)=\lambda_{d-1}(A_x)$. Define $B_y$ and $g(y)$ likewise. These slice volumes are positive and finite in the open projection intervals. Write the projections as $[a_-,a_+]$ and $[b_-,b_+]$. An interior ball in $A$ has center with first coordinate $x_0$. If $a_-<x<x_0$, choose $p\in A$ with first coordinate $p_1<x$ and combine $p$ with the ball centered at $x_0$; the convex combination with weight $\lambda=(x-p_1)/(x_0-p_1)\in(0,1)$ on the ball lies in the slice at $x$ and contains a $(d-1)$-ball of radius $\lambda\rho>0$. If $x_0<x<a_+$, choose $p_1>x$ and use weight $(p_1-x)/(p_1-x_0)$ on the interior ball. At $x=x_0$, the original ball supplies a positive-radius slice. The same argument applies to $B$. [A1, F1, F2, F9, F10, F11, step 2.1, given, base, ih, induction]

4.1 Convexity gives $A_{(1-t)x_0+tx_1}\supseteq(1-t)A_{x_0}+tA_{x_1}$ for interior $x_0,x_1$. The compact slices in [F11] let the induction hypothesis apply to these sums. It therefore makes $f^{1/(d-1)}$ concave on the open projection interval; likewise $g^{1/(d-1)}$. To see continuity of $\psi=f^{1/(d-1)}$, fix an interior point $x_0$ and $a<x_0<b$ in the interval. For $x\downarrow x_0$, concavity gives the chord lower bound $\psi(x)\ge\frac{b-x}{b-x_0}\psi(x_0) +\frac{x-x_0}{b-x_0}\psi(b).$ Writing $x_0=\eta a+(1-\eta)x$ with $\eta=(x-x_0)/(x-a)$ gives the upper bound $\psi(x)\le\frac{\psi(x_0)-\eta\psi(a)}{1-\eta}.$ Both bounds tend to $\psi(x_0)$; exchanging left and right proves continuity from the other side. Thus $f,g$ are continuous and strictly positive on their open intervals. By [F2], $\int f=\int g=1$. [F2, F11, step 3.1, step 2.1, induction, algebra]

5.1 Define the cumulative functions $F_A(x)=\int_{a_-}^x f(t)dt$ and $F_B(y)=\int_{b_-}^y g(t)dt$ on their projection intervals. Since $A,B$ lie in bounded boxes, all their slices lie in one fixed bounded box in $\mathbb R^{d-1}$; [F6, F9] therefore bound $f,g$ uniformly. Their cumulative integrals consequently extend continuously to the projection endpoints with values zero and one, using $\int f=\int g=1$ from step 4.1. Positivity of $f,g$ on the open intervals makes $F_A,F_B$ strictly increasing there, so they map those intervals onto $(0,1)$. On every compact interior subinterval [F7] gives derivatives $F_A'=f$ and $F_B'=g$. The inverse theorem then gives that $\varphi=F_B^{-1}\circ F_A$ is $C^1$ on the open interval and $\varphi'(x)=f(x)/g(\varphi(x)).$ Let $z(x)=(1-\lambda)x+\lambda\varphi(x)$; then $z'(x)=(1-\lambda)+\lambda f(x)/g(\varphi(x))>0$. [F6, F7, F9, step 3.1, step 2.1, step 4.1, algebra]

6.1 Let $C=(1-\lambda)A+\lambda B$, which is compact by [F11], and let $c_z$ be the $(d-1)$-dimensional volume of its compact slice at coordinate $z$. The slice-volume function is measurable by [F2] and [F11]. The slice of $C$ at $z(x)$ contains $(1-\lambda)A_x+\lambda B_{\varphi(x)}$. The induction hypothesis yields $c_{z(x)}\ge\big((1-\lambda)f(x)^{1/(d-1)} +\lambda g(\varphi(x))^{1/(d-1)}\big)^{d-1}.$ Set $r=g(\varphi(x))/f(x)>0$. Multiplying this bound by $z'(x)$ and using [F3] twice gives $c_{z(x)}z'(x)\ge f(x) \big((1-\lambda)+\lambda r^{1/(d-1)}\big)^{d-1} \big((1-\lambda)+\lambda/r\big)\ge f(x).$ The last inequality follows by applying [F3] to both positive brackets. [F2, F3, F11, step 5.1, step 4.1, step 2.1, step 3.1, induction, algebra]

7.1 Restrict $x$ to an open interval $J$ strictly inside $(a_-,a_+)$. The map $z$ is $C^1$ with positive derivative by step 5.1, and [F7] makes it a $C^1$ diffeomorphism onto its open image $z(J)$. Thus [F4] and step 6.1 give $\lambda_d(C)=\int c_z dz\ge\int_{z(J)}c_z dz =\int_Jc_{z(x)}z'(x)dx\ge\int_Jf(x)dx.$ Here $c_z$ is measurable and the equality is the one-dimensional change of variables. For all sufficiently large integers $m$, take $J_m=(a_-+1/m,a_+-1/m)$; these intervals increase to $(a_-,a_+)$. By [F8] and $\int f=1$, $\lambda_d(C)\ge1$. This proves the normalized claim in dimension $d$. [F1, F2, F4, F7, F8, F11, step 6.1, step 5.1, step 4.1, step 2.1, step 3.1, given, algebra]

8.1 The induction proves the normalized claim in every finite dimension. Undoing the normalization in step 2.1 gives $\lambda_d(A+B)^{1/d}\ge a+b =\lambda_d(A)^{1/d}+\lambda_d(B)^{1/d},$ including the zero-volume cases from step 1.1. [F1, step 1.1, step 2.1, step 3.1, step 7.1, algebra, discharge-induction] ∎

