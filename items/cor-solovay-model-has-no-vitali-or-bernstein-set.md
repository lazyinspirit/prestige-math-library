---
id: cor-solovay-model-has-no-vitali-or-bernstein-set
kind: corollary
title: The Solovay model has no Vitali or Bernstein set
status: draft
origin: pipeline
deps: [thm-every-solovay-model-set-of-reals-is-lebesgue-measurable, thm-every-uncountable-solovay-model-set-of-reals-has-a-perfect-subset, thm-solovay-inner-model-satisfies-dependent-choice, thm-choice-implies-dependent-implies-countable-choice, thm-countable-union-of-countable, thm-r-uncountable, def-vitali-set-on-the-unit-interval, def-bernstein-set-on-r, def-measure, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-finite-and-countable-subadditivity-of-measures, thm-lebesgue-measure-of-a-box-of-every-kind, thm-rationals-countable]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Solovay, A model of set-theory in which every set of reals is Lebesgue measurable"
      url: https://people.math.ethz.ch/~fdalio/ZKmodel.pdf
      locator: "Introduction and Parts I-III"
---

## Statement

$M$ contains no Vitali selector modulo $\mathbb Q$ and no Bernstein subset of $\mathbb R$.

## Facts & Assumptions

**Given:** The universal LM and PSP theorems above.

[F1] [[thm-every-solovay-model-set-of-reals-is-lebesgue-measurable]]: every alleged selector is measurable in $M$.

[F2] [[def-vitali-set-on-the-unit-interval]] and [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]: rational translates of a selector are disjoint and measurable with one common measure.

[F3] [[def-measure]], [[thm-finite-and-countable-subadditivity-of-measures]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], and [[thm-rationals-countable]]: finite additivity handles disjoint finite families, subadditivity handles the null countable union, and the containing intervals have their stated finite positive measures.

[F4] [[def-bernstein-set-on-r]] and [[thm-every-uncountable-solovay-model-set-of-reals-has-a-perfect-subset]]: a Bernstein set and its complement meet every nonempty perfect set but contain no nonempty perfect set.

[F5] [[thm-solovay-inner-model-satisfies-dependent-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[thm-countable-union-of-countable]], and [[thm-r-uncountable]]: internal DC supplies countable choice, so the union of two countable sets is countable, whereas $\mathbb R$ is uncountable.

## Proof

1.1 Suppose $V$ were a Vitali selector. F1 makes it measurable. If $\lambda(V)=0$, the countably many rational translates covering $[0,1]$ have null union, contradicting $\lambda([0,1])=1$. If $\lambda(V)>0$, finitely many pairwise disjoint translates inside $[-1,2]$ have arbitrarily large total measure, contradicting $\lambda([-1,2])=3$. The selector and translation facts are F2, while F3 supplies subadditivity, finite additivity and the interval values. [F1, F2, F3]

1.2 Suppose $B$ were Bernstein. Both $B$ and $\mathbb R\setminus B$ contain no nonempty perfect subset. They cannot both be countable: F5 would make their two-term union $\mathbb R$ countable, contrary to its uncountability. Therefore one is uncountable, and F4 gives it a nonempty perfect subset, a contradiction. This repairs the tempting but unsupported assertion that the definition alone makes $B$ uncountable. [F4, F5]

2.1 The two contradictions exclude both supplied pathologies without using their ZFC existence constructions. [step 1.1, step 1.2] ∎
