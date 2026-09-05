---
id: thm-the-derivative-of-an-increasing-function-is-measurable-integrable-and-bounded-by-its-total-increase
kind: theorem
title: "For a nondecreasing function, the derivative is measurable and integrable and its integral is bounded by the total increase"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-countable-choice, def-derivative, def-integrable-real-and-complex-functions-and-their-integrals, def-integral-over-a-measurable-set, def-monotone-function, thm-arithmetic-and-lattice-operations-preserve-measurability, thm-fatou-lemma, thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun, thm-monotone-real-functions-are-borel-measurable, thm-the-lebesgue-integral-respects-almost-everywhere-equality]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Proposition 14.7"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, Exercise 1.6.30"
      url: "https://terrytao.files.wordpress.com/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]).

Let $F : [a,b] \to \mathbb{R}$ be nondecreasing. Then the derivative $F'$
exists almost everywhere, is measurable, is Lebesgue integrable on $[a,b]$,
and satisfies

$$
\int_a^b F'(x)\,d\lambda(x) \le F(b)-F(a).
$$

## Facts & Assumptions

**Given:** Countable choice and a nondecreasing function $F : [a,b] \to \mathbb{R}$.

[A1] The symbols are those of the statement.

## Proof

**Proof technique:** direct.

1.1 By [[thm-monotone-functions-are-differentiable-almost-everywhere-via-rising-sun]], $F'$ exists almost everywhere on $(a,b)$. Extend $F$ to $[a,b+1]$ by setting $\widetilde F(x)=F(x)$ for $x \le b$ and $\widetilde F(x)=F(b)$ for $x \ge b$. For each $n \ge 1$ define $h_n(x) := n\bigl(\widetilde F(x+1/n)-\widetilde F(x)\bigr)$ for $x \in [a,b]$. Because monotone functions are Borel measurable ([[thm-monotone-real-functions-are-borel-measurable]]) and arithmetic preserves measurability ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]), each $h_n$ is measurable and nonnegative. At every point where $F'$ exists, $h_n(x) \to F'(x)$. [given, construct]

2.1 For every $n$, $\int_a^b h_n(x)\,d\lambda(x) = n\int_a^b \widetilde F(x+1/n)\,d\lambda(x) - n\int_a^b \widetilde F(x)\,d\lambda(x)$. After the change of variable $t=x+1/n$ in the first integral, this becomes $\int_a^b h_n = n\int_b^{b+1/n}\widetilde F(t)\,dt - n\int_a^{a+1/n}F(t)\,dt \le F(b)-F(a)$, because $\widetilde F(t) \le F(b)$ on $[b,b+1/n]$ and $F(t) \ge F(a)$ on $[a,a+1/n]$. [step 1.1, algebra]

3.1 Fatou's lemma [[thm-fatou-lemma]] gives $\int_a^b F'(x)\,d\lambda(x) \le \int_a^b \liminf_{n \to \infty} h_n(x)\,d\lambda(x) \le \liminf_{n \to \infty} \int_a^b h_n(x)\,d\lambda(x) \le F(b)-F(a)$. Thus $F'$ is integrable and obeys the claimed bound. Since it is almost everywhere the pointwise limit of the measurable functions $h_n$, it is measurable as well, after changing it on the null exceptional set if needed and using [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]. [step 1.1, step 2.1]

4.1 Steps 1.1 through 3.1 prove the theorem. [step 1.1, step 2.1, step 3.1] ∎
