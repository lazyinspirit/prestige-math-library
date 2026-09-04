---
id: fs-there-is-a-measurable-set-with-density-one-half-in-every-interval
kind: false-statement
title: "FALSE: some measurable set has density one half in every interval"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, thm-lebesgue-density-theorem, thm-lebesgue-measure-of-a-box-of-every-kind]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.6.26(ii)"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

There is a Lebesgue measurable set $E\subseteq\mathbb{R}$ such that
$$\frac{\lambda(E\cap I)}{\lambda(I)}=\frac12$$
for every nondegenerate bounded interval $I$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, and assume there is a measurable set $E\subseteq\mathbb{R}$ with half-density in every nondegenerate bounded interval.

[L1] Almost every point of a measurable set is a density-one point of that set. ([[thm-lebesgue-density-theorem]])

[L2] The interval $[0,1]$ has measure $1$. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Refutation

**Proof technique:** direct.

1.1 Applying the hypothesis to $I=[0,1]$ and [L2], one gets [L2, given, algebra] $$\lambda(E\cap[0,1])=\frac12.$$ So $E$ has positive measure. [L2, given, algebra]

2.1 By [L1], almost every point of $E$ is a density-one point of $E$. Choose [L1, step 1.1, given, choose, contradiction: density at x, discharge-contradiction] such a point $x\in E$. But the hypothesis applied to every interval $(x-r,x+r)$ gives $$\frac{\lambda(E\cap(x-r,x+r))}{2r}=\frac12\qquad(r>0),$$ so the density of $E$ at $x$ is $1/2$, not $1$. This contradiction refutes the claim. [L1, step 1.1, given, choose, contradiction: density at x, discharge-contradiction] ∎
