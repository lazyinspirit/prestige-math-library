---
id: thm-solovay-model-has-no-hamel-basis-or-discontinuous-additive-function
kind: theorem
title: The Solovay model has no Hamel basis and no discontinuous additive real function
status: draft
origin: pipeline
deps: [thm-every-solovay-model-set-of-reals-is-lebesgue-measurable, thm-solovay-inner-model-satisfies-dependent-choice, thm-choice-implies-dependent-implies-countable-choice, def-linear-basis, def-linear-combination-and-span, cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn, prop-measure-monotonicity, thm-finite-and-countable-subadditivity-of-measures, thm-lebesgue-measure-of-a-box-of-every-kind, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, thm-rationals-countable, thm-steinhaus-difference-set-contains-a-ball, thm-cauchy-functional-equation-regularity]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: contradiction-and-regularity
sources:
  references:
    - title: "Solovay, A model of set-theory in which every set of reals is Lebesgue measurable"
      url: https://people.math.ethz.ch/~fdalio/ZKmodel.pdf
      locator: "Introduction and Parts I-III"
---

## Statement

In $M$, $\mathbb R$ has no Hamel basis over $\mathbb Q$, and every additive $f:\mathbb R\to\mathbb R$ is continuous and $\mathbb R$-linear.

## Facts & Assumptions

**Given:** Universal real measurability in $M$.

[F1] [[thm-every-solovay-model-set-of-reals-is-lebesgue-measurable]]: every subset of the real line occurring below is measurable in $M$.

[F2] [[def-linear-basis]] and [[def-linear-combination-and-span]]: Hamel expansions are finite and unique.

[F3] [[cor-a-measurable-subgroup-of-rn-of-positive-measure-is-rn]]: assuming Countable Choice, a measurable positive-measure subgroup of $\mathbb R$ is all of $\mathbb R$.

[F4] [[thm-rationals-countable]], [[prop-measure-monotonicity]], [[thm-finite-and-countable-subadditivity-of-measures]], [[thm-lebesgue-measure-of-a-box-of-every-kind]], and [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]: assuming Countable Choice, a countable union of measurable null sets is null, subsets of null sets are null, translates preserve measurability and measure, and $\lambda([0,1])=1$.

[F5] [[thm-steinhaus-difference-set-contains-a-ball]] and [[thm-cauchy-functional-equation-regularity]]: assuming Countable Choice, a positive-measure bounded-value set makes an additive map bounded near zero and therefore linear.

[F6] [[thm-solovay-inner-model-satisfies-dependent-choice]] and [[thm-choice-implies-dependent-implies-countable-choice]]: $M$ satisfies Dependent Choice, and ZF proves that Dependent Choice implies Countable Choice.

## Proof

1.1 Suppose $H$ is a Hamel basis. It is nonempty because it spans $1$; choose one $b\in H$ (one existential choice, not AC). Define $c_b(x)$ as the unique rational coefficient of $b$ in the finite expansion of $x$. Then $c_b$ is additive, and F1 makes $W=\ker c_b$ a measurable proper subgroup. Moreover, $\mathbb R=\bigcup_{q\in\mathbb Q}(qb+W)$. By F6, Countable Choice holds in $M$. If $\lambda(W)>0$, F3 gives $W=\mathbb R$; if $\lambda(W)=0$, translation invariance in F4 makes every $qb+W$ measurable and null, and countable subadditivity makes their explicitly rational-indexed union null. Monotonicity then gives $\lambda([0,1])=0$, contradicting the value $1$ from F4. [F1, F2, F3, F4, F6]

1.2 Let $f$ be additive and put $E_n=\{x\in[-1,1]:|f(x)|\le n\}$. F1 makes these sets measurable, and they cover $[-1,1]$. By F6, Countable Choice holds in $M$. If each were null, F4 would make their explicitly indexed union null, contrary to $\lambda([-1,1])=2$; hence some $E_n$ has positive measure. Steinhaus gives an interval about zero in $E_n-E_n$, where additivity bounds $|f|$ by $2n$. F5 then yields continuity and $f(x)=xf(1)$ for every real $x$. The zero map and $n=0$ cause no exception. [F1, F4, F5, F6]

2.1 Step 1.1 excludes a basis, and step 1.2 excludes every discontinuous additive solution, without invoking an AC basis-existence theorem. [step 1.1, step 1.2] ∎
