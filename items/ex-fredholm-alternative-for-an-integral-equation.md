---
id: ex-fredholm-alternative-for-an-integral-equation
kind: example
title: Fredholm alternative for an integral equation
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval, thm-fredholm-alternative-for-identity-minus-compact, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-axiom-of-choice, def-dependent-choice, thm-c-k-complete-in-the-sup-metric, thm-uniform-limit-continuous-real-functions, def-norm-and-normed-space, rem-real-and-complex-normed-space-convention, cor-finite-dimensional-normed-spaces-are-banach, def-metric-space, def-complete-metric-space, def-banach-space, def-bounded-linear-operator, def-transpose-of-a-bounded-operator, lem-transpose-reverses-composition, def-continuity-real, def-continuous-map-top, thm-heine-borel-rn, lem-complex-conjugation-and-modulus-laws, def-complex-conjugate-real-imaginary-part-and-modulus, def-linear-subspace, def-linear-map]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.5 p.189, Theorem 6.30 and its integral-equation discussion"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §4.4 p.198, Remark 4.42"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
verification:
  audited: 2026-09-22
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $a<b$ be reals, let
$\mathbb K$ be $\mathbb R$ or $\mathbb C$, let
$k:[a,b]\times[a,b]\to\mathbb K$ be continuous
([[def-continuity-real]], [[def-continuous-map-top]]) and let
$g\in C([a,b],\mathbb K)$. Write

$$(\mathcal Kf)(x):=\int_a^bk(x,y)f(y)\,dy ,$$

a compact operator on the Banach space $C([a,b],\mathbb K)$ with the supremum
norm ([[ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval]],
[[def-banach-space]]), and let $\mathcal K^*$ be its transpose on the dual
$C([a,b],\mathbb K)^*$ ([[def-transpose-of-a-bounded-operator]]). Then:

1. the equation $f-\mathcal Kf=g$ has a solution $f\in C([a,b],\mathbb K)$ if
   and only if $\varphi(g)=0$ for every $\varphi\in\ker(I-\mathcal K^*)$;
2. the equation has exactly one solution for every $g$ if and only if the
   homogeneous equation $f=\mathcal Kf$ has only the solution $f=0$.

## Facts & Assumptions

[A1] $[a,b]$ is a nonempty compact metric space ([[thm-heine-borel-rn]]); $C([a,b],\mathbb R)$ with the supremum metric is complete ([[thm-c-k-complete-in-the-sup-metric]]), and a uniform limit of continuous real functions is continuous ([[thm-uniform-limit-continuous-real-functions]]).

[A2] On $C([a,b],\mathbb K)$ the supremum norm $\|f\|_\infty=\sup_x|f(x)|$ makes it a normed space, using the real definition when $\mathbb K=\mathbb R$ and the complex scalar convention when $\mathbb K=\mathbb C$ ([[def-norm-and-normed-space]], [[rem-real-and-complex-normed-space-convention]]); for complex-valued functions $|f|\le|\operatorname{Re}f|+|\operatorname{Im}f|$ and both parts are bounded by $|f|$ ([[lem-complex-conjugation-and-modulus-laws]], [[def-complex-conjugate-real-imaginary-part-and-modulus]]); a metric space is complete when every Cauchy sequence converges ([[def-complete-metric-space]], [[def-metric-space]]).

[A3] $\mathcal K$ is a compact operator on $C([a,b],\mathbb K)$ ([[ex-continuous-kernel-integral-operator-is-compact-on-c-of-an-interval]]), and $\mathbb K$ is a Banach space by finite-dimensional completeness ([[cor-finite-dimensional-normed-spaces-are-banach]], [[def-banach-space]]); $A^*=I-\mathcal K^*$ for $A=I-\mathcal K$ ([[lem-transpose-reverses-composition]], [[def-transpose-of-a-bounded-operator]]).

[A4] Assume AC. For a compact operator $C$ on a Banach space $X$, the operator $I-C$ is injective if and only if it is surjective, and then boundedly invertible; and for $y\in X$ the equation $(I-C)x=y$ is solvable exactly when $\varphi(y)=0$ for every $\varphi$ in the kernel of the transpose ([[thm-fredholm-alternative-for-identity-minus-compact]]); the implications are the statement of the alternative, and $\mathrm{AC}$ supplies $\mathrm{AC}_\omega$ and $\mathrm{DC}$ ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-dependent-choice]]).

## Verification

**Proof technique:** direct.

**Given:** $\mathrm{AC}$, reals $a<b$, $\mathbb K\in\{\mathbb R,\mathbb C\}$, a continuous kernel $k$ on $[a,b]^2$, the integral operator $\mathcal K$ on $C([a,b],\mathbb K)$ with the supremum norm, its transpose $\mathcal K^*$, and $g\in C([a,b],\mathbb K)$.

1.1 $C([a,b],\mathbb R)$ with the supremum norm is a Banach space, being complete by [A1] and normed by [A2]. [A1, A2]

1.2 $C([a,b],\mathbb C)$ with the supremum norm is a Banach space: a sequence $(f_j)$ is Cauchy for the supremum norm exactly when the real sequences $(\operatorname{Re}f_j)$ and $(\operatorname{Im}f_j)$ are Cauchy, by the two inequalities of [A2]; those have continuous limits $u,v$ by [A1], and then $\|f_j-(u+iv)\|_\infty\le\|\operatorname{Re}f_j-u\|_\infty+\|\operatorname{Im}f_j-v\|_\infty\to0$; the norm axioms hold by [A2]. [A2, algebra]

1.3 The transpose of $I-\mathcal K$ is $I-\mathcal K^*$, by [A3]. [A3]

2.1 In either scalar field, $\mathcal K$ is a compact operator on the Banach space $C([a,b],\mathbb K)$, by [step 1.1], [step 1.2] and [A3]. [step 1.1, step 1.2, A3]

3.1 Claim 1: by [A4] applied to the compact operator $\mathcal K$ on the Banach space $C([a,b],\mathbb K)$, the equation $f-\mathcal Kf=g$ is solvable exactly when $\varphi(g)=0$ for every $\varphi$ in the kernel of $(I-\mathcal K)^*$, which is $\ker(I-\mathcal K^*)$ by [step 1.3]. [step 2.1, step 1.3, A4]

3.2 Claim 2: the equation $f-\mathcal Kf=g$ has exactly one solution for every $g$ exactly when $I-\mathcal K$ is a bijection, which by [A4] is equivalent to injectivity of $I-\mathcal K$, that is, to the homogeneous equation $f=\mathcal Kf$ having only the zero solution. [step 2.1, A4]

4.1 The two displayed claims are [step 3.1] and [step 3.2]. [step 3.1, step 3.2] ∎
