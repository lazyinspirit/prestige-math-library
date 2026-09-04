---
id: ex-steinhaus-follows-from-the-density-theorem
kind: example
title: "Steinhaus follows in two lines from the density theorem"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-countable-choice, thm-lebesgue-density-theorem, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-lebesgue-measure-under-dilations-and-reflections]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.6.25"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Example

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

If $E\subseteq\mathbb{R}^n$ is Lebesgue measurable and $\lambda(E)>0$, then the
difference set
$$E-E:=\{x-y:x,y\in E\}$$
contains an open neighbourhood of $0$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a measurable set $E\subseteq\mathbb{R}^n$ with $\lambda(E)>0$.

[L1] Almost every point of $E$ is a density-one point of $E$. ([[thm-lebesgue-density-theorem]])

[L2] Lebesgue measure is translation invariant. ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

[L3] Ball measures vary continuously with the radius. ([[thm-lebesgue-measure-under-dilations-and-reflections]])

## Verification

**Proof technique:** direct.

1.1 By [L1], choose a density-one point $x\in E$. Then there is $r>0$ such that [L1, L3, given, choose] $$\lambda(E\cap B(x,r))>\frac34\lambda(B(x,r)).$$ Because [L3] makes the ball measure continuous in the radius, choose $0<\delta<r$ with $$\lambda(B(x,r+\delta)\setminus B(x,r-\delta))<\frac14\lambda(B(x,r)).$$ If $\|h\|_2<\delta$, then $$B(x,r-\delta)\subseteq B(x+h,r)\subseteq B(x,r+\delta),$$ so $$B(x+h,r)\triangle B(x,r)\subseteq B(x,r+\delta)\setminus B(x,r-\delta).$$ Therefore $$\lambda(B(x+h,r)\triangle B(x,r))<\frac14\lambda(B(x,r)).$$ [L1, L3, given, choose, algebra]

2.1 Fix $\|h\|_2<\delta$. Translation invariance [L2] gives [L2, step 1.1, algebra] $$\lambda((E-h)\cap B(x,r)) =\lambda(E\cap B(x+h,r)) \ge \lambda(E\cap B(x,r)) -\lambda(B(x+h,r)\triangle B(x,r)) >\frac12\lambda(B(x,r)).$$ Together with step 1.1, both $E\cap B(x,r)$ and $(E-h)\cap B(x,r)$ have measure greater than half of $\lambda(B(x,r))$, so they intersect. Choose $z\in E\cap(E-h)$. Then $z\in E$ and $z+h\in E$, so $h=(z+h)-z\in E-E$. [L2, step 1.1, algebra]

3.1 Every $h$ with $\|h\|_2<\delta$ lies in $E-E$, so $E-E$ contains the open [step 2.1] ball $B(0,\delta)$. [step 2.1] ∎
