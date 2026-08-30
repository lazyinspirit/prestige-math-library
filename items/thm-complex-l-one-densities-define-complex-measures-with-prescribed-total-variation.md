---
id: thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation
kind: theorem
title: "A complex L^1 density defines a complex measure whose total variation is |h| dmu"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-complex-measure, def-integration-against-a-signed-or-complex-measure, thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, thm-l-one-functions-admit-dominated-complex-simple-approximations, def-integral-over-a-measurable-set, thm-monotone-convergence-for-the-integral, prop-closure-properties-of-measurable-functions-used-by-the-integral, def-integrable-real-and-complex-functions-and-their-integrals, thm-integral-triangle-inequality, thm-indefinite-integral-of-a-nonnegative-function-is-a-measure, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Exercise 13.4"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
    - title: "John K. Hunter, Measure Theory, §6.9"
      url: "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf"
---

## Statement

Let $(X,\mathcal A,\mu)$ be a measure space and let $h\in L^1(\mu)$. Define
$$\nu(E):=\int_E h\,d\mu\qquad(E\in\mathcal A).$$
Then $\nu$ is a complex measure on $(X,\mathcal A)$, and for every measurable
$E$,
$$|\nu|(E)=\int_E |h|\,d\mu.$$

## Facts & Assumptions

**Given:** A measure space $(X,\mathcal A,\mu)$ and a function $h\in L^1(\mu)$.

[L1] For an integrable function, the measurable-set integral $\int_E h\,d\mu$ is defined. ([[def-integrable-real-and-complex-functions-and-their-integrals]], [[def-integral-over-a-measurable-set]])

[L2] If $g\in L^1(\mu)$, then $|\int g\,d\mu|\le \int |g|\,d\mu$. ([[thm-integral-triangle-inequality]])

[L3] Total variation is the supremum of the simple integrals against unit-bounded simple test functions. ([[thm-total-variation-is-the-supremum-of-unit-bounded-simple-integrals]])

[L4] Every $L^1$ function admits dominated complex simple approximations. ([[thm-l-one-functions-admit-dominated-complex-simple-approximations]])

[L5] Arithmetic operations preserve measurability. ([[prop-closure-properties-of-measurable-functions-used-by-the-integral]])

[L6] For a nonnegative measurable function $f$, the set function $A\mapsto\int_A f\,d\mu$ is a measure. ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]])

[L7] The Lebesgue integral is complex-linear on $L^1(\mu)$. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]])

## Proof

**Proof technique:** direct.

1.1 The set function $\nu$ is finite-valued because $$|\nu(E)|=\left|\int_E h\,d\mu\right|\le \int_E |h|\,d\mu\le \int |h|\,d\mu<+\infty$$ by [L1] and [L2]. If $(E_n)$ is a pairwise disjoint measurable sequence, then $\sum_{n=0}^N \mathbf 1_{E_n}\uparrow \mathbf 1_{\cup_n E_n}$, so monotone convergence applied to the positive and negative parts of the real and imaginary parts of $h$ gives $$\nu\left(\bigcup_n E_n\right)=\sum_n \nu(E_n).$$ Thus $\nu$ is a complex measure. [L1, L2]

1.2 Define $$u(x):=\begin{cases}\overline{h(x)}/|h(x)|,&h(x)\neq0,\\0,&h(x)=0.\end{cases}$$ Then $|u|\le1$ and $u h=|h|$. By [L5], the function $u$ is measurable. Apply [L6] to $\rho(F):=\int_F |h|\,d\mu$ and obtain a finite measure $\rho$ on $(X,\mathcal A)$. Applying [L4] to $u$ on $(E,\mathcal A\!\restriction_E,\rho)$ gives complex simple functions $s_n$ with $|s_n|\le2$ and $$\int_E |u-s_n|\,d\rho\to0.$$ For each $n$, define the clipped simple function $$t_n:=\frac{s_n}{\max\{1,|s_n|\}}.$$ Then $|t_n|\le1$, and because $|u|\le1$ one has $$|t_n-u|\le |t_n-s_n|+|s_n-u|\le 2|s_n-u|.$$ Hence $\int_E |u-t_n|\,d\rho\to0$. [L4, L5, L6]

2.1 For any measurable $E$ and any countable measurable partition $E=\bigsqcup_n E_n$, the inequality in step 1.1 applied on each piece gives $$\sum_n |\nu(E_n)|\le \sum_n \int_{E_n}|h|\,d\mu=\int_E |h|\,d\mu.$$ Taking the supremum over partitions shows $|\nu|(E)\le \int_E |h|\,d\mu$. [L1, step 1.1]

2.2 Write the canonical representation of $t_n$ on $E$ as $$t_n=\sum_{j=1}^{m_n} c_{n,j}\mathbf 1_{A_{n,j}}.$$ Because $|t_n h|\le |h|$, each $t_n h$ lies in $L^1(\mu)$. By the definition of $\nu$ and the linearity of the Lebesgue integral, $$\int_E t_n\,d\nu=\sum_{j=1}^{m_n} c_{n,j}\nu(A_{n,j})=\sum_{j=1}^{m_n} c_{n,j}\int_{A_{n,j}} h\,d\mu=\int_E t_n h\,d\mu.$$ Therefore $$\left|\int_E t_n\,d\nu-\int_E |h|\,d\mu\right| =\left|\int_E (t_n-u)h\,d\mu\right| \le \int_E |t_n-u|\,|h|\,d\mu =\int_E |t_n-u|\,d\rho\to0.$$ So $\int_E t_n\,d\nu\to\int_E |h|\,d\mu$. [L2, L7, step 1.2]

3.1 Since each $t_n$ is a unit-bounded complex simple function on $E$, [L3] gives $$|\nu|(E)\ge \left|\int_E t_n\,d\nu\right|$$ for every $n$. Letting $n\to\infty$ and using step 2.2 shows $|\nu|(E)\ge\int_E |h|\,d\mu$. Together with step 2.1, this proves $|\nu|(E)=\int_E |h|\,d\mu$. [L3, step 2.1, step 2.2]

4.1 Steps 1.1, 2.1, and 3.1 prove that $\nu$ is a complex measure and that its total variation is $\int_E |h|\,d\mu$ on every measurable set $E$. [step 1.1, step 2.1, step 3.1] ∎
