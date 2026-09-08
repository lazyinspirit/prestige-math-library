---
id: ex-relative-norming-in-a-finite-dimensional-space
kind: example
title: An explicit norming functional for the finite-dimensional maximum norm
status: draft
origin: pipeline
deps: [def-dual-space-of-a-normed-space, rem-real-and-complex-normed-space-convention, lem-finite-set-has-max, thm-well-ordering-principle]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations, §§1.1–1.2 and §1.3 evaluation paragraph
      url: https://www.math.utoronto.ca/almut/Brezis.pdf
    - title: Gerald Teschl, Topics in Real and Functional Analysis, Theorems 4.13–4.20 and §5.1 (2018 university-hosted copy)
      url: https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf
pipeline_run: phase-2-wave-1
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
---

## Example

Let $\mathbb K\in\{\mathbb R,\mathbb C\}$ and $n\ge1$. Equip $\mathbb K^n$ with $\|y\|_\infty=\max_{1\le k\le n}|y_k|$. For $x\ne0$ let $j$ be the least index attaining $\|x\|_\infty$, and put
$$f_x(y)=\frac{\overline{x_j}}{|x_j|}y_j.$$
Conjugation is trivial over $\mathbb R$. Then $f_x(x)=\|x\|_\infty$ and $\|f_x\|=1$. At $x=0$ the zero functional attains the unit-dual-ball norm formula. For $n=0$, use the unique zero norm on the zero vector space, which has no norm-one functional.

For a displayed nonuniqueness instance, at $x=(1,1)\in\mathbb K^2$ the distinct functionals $f_1(y)=y_1$ and $f_2(y)=y_2$ both have norm one and value $1=\|x\|_\infty$. This entire finite-coordinate construction works in ZF without assuming HB.

## Facts & Assumptions

[F1] A finite nonempty list of real numbers has a maximum and minimum ([[lem-finite-set-has-max]]).

[F2] Every nonempty subset of the natural numbers has a least element ([[thm-well-ordering-principle]]).

[F3] The dual is the bounded scalar-linear functionals, with norm the supremum of absolute values on the closed unit ball ([[def-dual-space-of-a-normed-space]]).

[F4] The norm axioms use absolute homogeneity with the modulus over either field ([[rem-real-and-complex-normed-space-convention]]).

## Verification

**Given:** $\mathbb K=\mathbb R$ or $\mathbb C$, $n\ge1$, and the displayed coordinate formulas, with the zero-dimensional case treated separately.

1.1 For $n\ge1$, the finite list $|y_1|,\ldots,|y_n|$ has a maximum. It is nonnegative and is zero exactly when each coordinate is zero. For any scalar $a$, $\max_k|ay_k|=|a|\max_k|y_k|$, including $a=0$. Also each $|y_k+z_k|\le |y_k|+|z_k|\le\|y\|_\infty+\|z\|_\infty$, and taking the maximum gives the triangle inequality. These verify that $\|\cdot\|_\infty$ is a norm over either field. [given, F1, F4, algebra]

2.1 For $x\ne0$, the set of maximizing indices in $\{1,\ldots,n\}$ is nonempty. Its least element $j$ exists by natural-number well-ordering. Then $|x_j|=\|x\|_\infty>0$, so $c=\overline{x_j}/|x_j|$ is defined and $|c|=1$. The formula $f_x(y)=cy_j$ satisfies $f_x(ay+bz)=ac y_j+bc z_j=af_x(y)+bf_x(z)$, and $|f_x(y)|=|y_j|\le\|y\|_\infty$. Thus $f_x$ is scalar-linear and bounded, with $\|f_x\|\le1$. [step 1.1, F2, F3, algebra]

3.1 Let $e_j$ have coordinate one in position $j$ and zero elsewhere, and put $y=(x_j/|x_j|)e_j$. Then $\|y\|_\infty=1$ and $f_x(y)=\overline{x_j}x_j/|x_j|^2=1$. Thus $\|f_x\|\ge1$, proving $\|f_x\|=1$. Also $f_x(x)=\overline{x_j}x_j/|x_j|=|x_j|=\|x\|_\infty$. [step 2.1, F3, algebra]

4.1 For any bounded linear $f$ of norm at most one and nonzero $x$, $|f(x)|=\|x\|_\infty|f(x/\|x\|_\infty)|\le\|x\|_\infty$; step 3.1 attains equality. At $x=0$, every linear $f$ gives value zero and the zero functional attains the same maximum. For $n=0$ the vector space has just zero and every linear functional sends it to zero, so the dual has only the zero functional of norm zero; its unit ball is nonempty but it has no norm-one element. [step 3.1, F3, algebra]

5.1 At $x=(1,1)$, $\|x\|_\infty=1$. Each coordinate functional satisfies $|f_k(y)|=|y_k|\le\|y\|_\infty$ and $f_k(e_k)=1$, so $\|f_k\|=1$ for $k=1,2$. Both give $f_k(x)=1$, while $f_1(1,0)=1$ and $f_2(1,0)=0$, so they are distinct. In dimension one the same displayed construction is $f_x(y)=\overline{x}y/|x|$, with its norm and value computed in steps 2.1 and 3.1. No extension or infinite selection was used. [step 2.1, step 3.1, F3, algebra] ∎

## Source notes

Brezis Corollary 1.3 and Remark 2, pp.3–4 (finite explicit specialization); Teschl Theorem 4.20 proof, p.116 (norming criterion).
