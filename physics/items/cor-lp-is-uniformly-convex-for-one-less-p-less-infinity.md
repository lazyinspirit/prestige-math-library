---
id: cor-lp-is-uniformly-convex-for-one-less-p-less-infinity
kind: corollary
title: '$L^p$ is uniformly convex for $1<p<\infty$'
status: published
origin: pipeline
deps: [def-countable-choice, def-norm-and-normed-space, def-uniformly-convex-banach-space, lem-clarkson-inequalities-for-real-and-complex-lp, def-real-power, thm-real-power-laws, thm-real-power-continuity-and-derivatives, thm-monotonicity-from-the-derivative, cor-exponential-reciprocal-and-positivity, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, thm-complex-holder-minkowski-and-the-quotient-norm, thm-riesz-fischer-completeness-of-l-p, thm-complex-lp-completeness-and-almost-everywhere-subsequences]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Ken Kuriyama, Mitsuhiro Miyagi, Mari Okada and Tetsuhiko Miyoshi, Elementary proof of Clarkson's inequalities and their generalization"
      url: "https://petit.lib.yamaguchi-u.ac.jp/15815/files/149739"
      locator: "Theorem 3.4 and its uniform-convexity conclusion, printed p. 124"
---

## Statement

Assume countable choice $\mathrm{AC}_\omega$.  Let $(S,\mathcal A,\mu)$ be a
measure space and let $1<p<\infty$.  Then both $L^p(\mu;\mathbb R)$ and
$L^p(\mu;\mathbb C)$, with their usual norms, are uniformly convex.

More precisely, for $0<\varepsilon\le2$ one may use

$$\delta_p(\varepsilon)=\begin{cases}1-\bigl(1-(\varepsilon/2)^q\bigr)^{1/q},&1<p\le2,\quad q=p/(p-1),\\[3pt]1-\bigl(1-(\varepsilon/2)^p\bigr)^{1/p},&2\le p<\infty.\end{cases}$$

At $p=2$ the two formulas agree.

## Facts & Assumptions

**Given:** Countable choice, a measure space $(S,\mathcal A,\mu)$, a real number $1<p<\infty$, a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$, and $0<\varepsilon\le2$.

[F1] A real or complex Banach space is uniformly convex if every $\varepsilon\in(0,2]$ admits a $\delta>0$ such that unit-ball vectors $x,y$ with $\|x-y\|\ge\varepsilon$ satisfy $\|(x+y)/2\|\le1-\delta$ ([[def-uniformly-convex-banach-space]]).

[F2] The usual quotient formulas give norms on real and complex $L^p$. Under countable choice these spaces are complete for $1\le p\le\infty$ ([[def-countable-choice]], [[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]], [[thm-complex-holder-minkowski-and-the-quotient-norm]], [[thm-riesz-fischer-completeness-of-l-p]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]]).

[F3] If $f,g\in L^p(\mu;\mathbb K)$, the Clarkson inequalities ([[lem-clarkson-inequalities-for-real-and-complex-lp]]) say

$$ \left\|\frac{f+g}{2}\right\|_p^p+ \left\|\frac{f-g}{2}\right\|_p^p \le\frac{\|f\|_p^p+\|g\|_p^p}{2} \quad (p\ge2), $$

and, when $1<p\le2$ and $q=p/(p-1)$,

$$ \left\|\frac{f+g}{2}\right\|_p^q+ \left\|\frac{f-g}{2}\right\|_p^q \le\left(\frac{\|f\|_p^p+\|g\|_p^p}{2}\right)^{q/p}. $$

These assertions hold for both real and complex scalars.

[F4] Norms are nonnegative and absolutely homogeneous ([[def-norm-and-normed-space]]).

[F5] For $a>0$, $x^a$ is positive when $x>0$, has derivative $ax^{a-1}>0$ on $(0,\infty)$, and is therefore strictly increasing there; the convention $0^a=0$ extends this strict increase to $[0,\infty)$ ([[def-real-power]], [[thm-real-power-laws]], [[thm-real-power-continuity-and-derivatives]], [[cor-exponential-reciprocal-and-positivity]], [[thm-monotonicity-from-the-derivative]]).

## Proof

**Proof technique:** Insert the lower bound on the half-difference into the appropriate Clarkson inequality and retain the resulting quantitative modulus.

1.1 By [F2], $L^p(\mu;\mathbb K)$ with its usual norm is complete for either choice of $\mathbb K$.  Its normed-space structure and completeness make it a real or complex Banach space, as required in [F1].  This includes the empty and zero measure spaces, whose $L^p$ spaces are the zero Banach space. [F1, F2]

1.2 Let $f,g$ lie in its closed unit ball and suppose $\|f-g\|_p\ge\varepsilon$.  Put $$m=\frac{f+g}{2},\qquad d=\frac{f-g}{2}.$$ Absolute homogeneity gives $\|d\|_p=\|f-g\|_p/2\ge\varepsilon/2$. [F4, given]

2.1 Suppose $p\ge2$.  The first inequality in [F3] and $\|f\|_p,\|g\|_p\le1$ give $$\|m\|_p^p+\|d\|_p^p\le1.$$ By step 1.2 and strict increase of the positive $p$th power, $$\|m\|_p^p\le1-\|d\|_p^p\le1-(\varepsilon/2)^p.$$ Both sides are nonnegative.  If $1-(\varepsilon/2)^p=0$, then $\|m\|_p^p=0$ and hence $\|m\|_p=0$.  Otherwise the iterated-power law gives $\bigl((1-(\varepsilon/2)^p)^{1/p}\bigr)^p=1-(\varepsilon/2)^p$, and strict increase of the positive $p$th power yields $$\|m\|_p\le\bigl(1-(\varepsilon/2)^p\bigr)^{1/p}=1-\delta_p(\varepsilon).$$ Here $0<\varepsilon/2\le1$.  Thus $0<(\varepsilon/2)^p\le1$, so $0\le1-(\varepsilon/2)^p<1$; applying strict increase of the positive $1/p$ power, including its zero-base convention, shows $\bigl(1-(\varepsilon/2)^p\bigr)^{1/p}<1$.  Hence $\delta_p(\varepsilon)>0$.  At $\varepsilon=2$ the root is $0$ and $\delta_p(2)=1$. [step 1.2, F3, F4, F5]

3.1 Suppose $1<p\le2$ and put $q=p/(p-1)$.  Then $q\ge2$.  The second inequality in [F3] has right side at most $1$, because $(\|f\|_p^p+\|g\|_p^p)/2\le1$ and the positive $q/p$ power is increasing.  Consequently $$\|m\|_p^q+\|d\|_p^q\le1.$$ Repeating step 2.1 with $q$ in place of $p$ gives $$\|m\|_p\le\bigl(1-(\varepsilon/2)^q\bigr)^{1/q}=1-\delta_p(\varepsilon),$$ and the same strict-power argument proves $\delta_p(\varepsilon)>0$, with $\delta_p(2)=1$.  When $p=2$, one has $q=2$, so this is the same modulus as in step 2.1. [step 1.2, step 2.1, F3, F4, F5]

4.1 For the fixed $\varepsilon$, choose the displayed number $\delta_p(\varepsilon)$ by the applicable exponent range.  It is an explicitly defined positive real, so this is no use of a choice principle.  Steps 2.1 and 3.1 prove the implication required by [F1] for arbitrary unit-ball $f,g$. Therefore $L^p(\mu;\mathbb K)$ is uniformly convex.  The only use of $\mathrm{AC}_\omega$ is through the real and complex completeness results in [F2]; Clarkson's inequalities and the modulus calculation are choice-free. [step 1.1, step 2.1, step 3.1, F1, F2] ∎

## Source notes

Kuriyama--Miyagi--Okada--Miyoshi prove the real and complex Clarkson inequalities and state the resulting uniform convexity on printed p. 124.  The explicit modulus and endpoint check above are derived from their inequalities. The countable-choice hypothesis is added because this library's definition of uniform convexity is a property of Banach spaces and its published real and complex $L^p$ completeness interfaces both carry that hypothesis.
