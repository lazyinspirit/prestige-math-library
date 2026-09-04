---
id: lem-euclidean-balls-have-positive-finite-lebesgue-measure
kind: lemma
title: "Euclidean balls have positive finite Lebesgue measure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-metric-ball, thm-lebesgue-measure-of-a-box-of-every-kind]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Lemma 3.16"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $x\in\mathbb{R}^n$ and let $r>0$. Then the Euclidean ball $B(x,r)$ is
Lebesgue measurable and satisfies
$$0<\lambda(B(x,r))<\infty.$$

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, a point $x\in\mathbb{R}^n$, and a real radius $r>0$.

[L1] The Euclidean ball is $B(x,r)=\{y\in\mathbb{R}^n:\|y-x\|_2<r\}$. ([[def-metric-ball]])

[L2] Every box between its open and closed forms is Lebesgue measurable with its usual volume. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Proof

**Proof technique:** direct.

1.1 If $\|y-x\|_\infty<r/\sqrt{n}$, then [L1, algebra] $$\|y-x\|_2\le\sqrt{n}\,\|y-x\|_\infty<r,$$ so the open cube $x+(-r/\sqrt{n},r/\sqrt{n})^n$ is contained in $B(x,r)$. On the other hand, $\|y-x\|_2<r$ implies $|y_i-x_i|<r$ for every coordinate, so $B(x,r)\subseteq x+(-r,r)^n$. [L1, algebra]

2.1 The two cubes from step 1.1 are measurable by [L2], with measures [step 1.1, L2, algebra] $$(2r/\sqrt{n})^n>0\qquad\text{and}\qquad(2r)^n<\infty.$$ Since $B(x,r)$ lies between them, monotonicity gives $$0<(2r/\sqrt{n})^n\le\lambda(B(x,r))\le(2r)^n<\infty.$$ [step 1.1, L2, algebra]

3.1 Therefore $B(x,r)$ is Lebesgue measurable of positive finite measure. [step 2.1] [step 2.1] ∎
