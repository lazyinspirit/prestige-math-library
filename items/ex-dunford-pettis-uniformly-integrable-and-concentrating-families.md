---
id: ex-dunford-pettis-uniformly-integrable-and-concentrating-families
kind: example
title: "Dunford--Pettis: dominated and concentrating families"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-lebesgue-measure-and-the-lebesgue-sigma-algebra, thm-lebesgue-measure-is-a-complete-measure, thm-lebesgue-measure-of-a-box-of-every-kind, def-restriction-of-a-measure, prop-restriction-is-a-measure, def-l-p-space-as-a-quotient-by-null-functions, thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space, def-integral-of-a-nonnegative-simple-function, thm-absolute-continuity-of-the-integral, thm-dunford-pettis-for-l-one-on-a-finite-measure-space]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations"
      url: "https://www.math.utoronto.ca/almut/Brezis.pdf"
      locator: "Theorem 4.30 and Problem 23, printed pp. 115 and 466--468; partial solutions, printed pp. 544--547"
pipeline_run: phase-2-next-18
---

## Example

Assume the Axiom of Choice, and let $I=[0,1]$ carry restricted Lebesgue
measure. Two contrasting families in real $L^1(I)$ are as follows.

1. If $g\in L^1(I)$ is nonnegative and
   $K_g\subseteq\{f\in L^1(I):|f|\leq g\text{ almost everywhere}\}$, then
   $K_g$ is uniformly integrable and relatively weakly compact.
2. The concentrating sequence
   $f_n=n\mathbf1_{(0,1/n)}$, $n\geq1$, is bounded in $L^1(I)$ but is neither
   uniformly integrable nor relatively weakly compact.

## Facts & Assumptions

[A1] AC holds and supplies Countable Choice
([[def-axiom-of-choice]],
[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[L1] Under Countable Choice, Lebesgue measure is complete and intervals have
their lengths; restriction to a measurable set is again a measure
([[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]],
[[thm-lebesgue-measure-is-a-complete-measure]],
[[thm-lebesgue-measure-of-a-box-of-every-kind]],
[[def-restriction-of-a-measure]], [[prop-restriction-is-a-measure]]).

[L2] Real $L^1$ consists of almost-everywhere classes with the integral norm,
and the integral of a nonnegative simple function is its finite weighted sum
([[def-l-p-space-as-a-quotient-by-null-functions]],
[[thm-the-l-p-norm-descends-to-the-quotient-and-makes-l-p-a-normed-space]],
[[def-integral-of-a-nonnegative-simple-function]]).

[L3] Every individual $L^1$ function has absolutely continuous integral
([[thm-absolute-continuity-of-the-integral]]).

[L4] Under AC, a family in real $L^1$ on a finite measure space is relatively
weakly compact exactly when it is uniformly integrable, equivalently norm
bounded with uniformly absolutely continuous integrals
([[thm-dunford-pettis-for-l-one-on-a-finite-measure-space]]).

## Verification

**Proof technique:** counterexample.

**Given:** AC, the restricted Lebesgue interval, a nonnegative $g\in L^1$, a
dominated family $K_g$, and the displayed spike sequence.

1.1 Fix the finite quotient-space model. [given, A1, L1, L2]
Let $\lambda_I(E)=\lambda(E\cap I)$ on the ambient Lebesgue sigma-algebra.
By [L1] this is a finite measure with $\lambda_I(I)=1$. We use the quotient
$L^1(\lambda_I)$ from [L2], so changes outside $I$ or on null endpoints do not
change a class.

2.1 Prove uniform integrability of the dominated family. [L2, L3, L4, step 1.1]
For $f\in K_g$, domination gives
$\lVert f\rVert_1\leq\int_Ig$, uniformly in $f$. Given $\varepsilon>0$, [L3]
supplies $\delta>0$ such that $\lambda_I(E)<\delta$ implies
$\int_Eg<\varepsilon$. Then
$\int_E|f|\leq\int_Eg<\varepsilon$ for every $f\in K_g$. Thus the two
conditions in [L4] hold, so $K_g$ is uniformly integrable and relatively
weakly compact.

2.2 Calculate the concentrating sequence. [L1, L2, step 1.1, construct]
For every $n\geq1$, the nonnegative simple-integral formula and interval
length give

$$\lVert f_n\rVert_1=n\lambda_I((0,1/n))=n\cdot\frac1n=1.$$

Hence $(f_n)$ is $L^1$ bounded. But for $E_n=(0,1/n)$ one has
$\lambda_I(E_n)=1/n\to0$ while
$\int_{E_n}|f_n|=1$.

3.1 Fail uniform integrability and weak compactness. [A1, L4, step 2.2]
Taking, for example, $\varepsilon=1/2$, step 2.2 shows that no single
$\delta>0$ works for the uniform absolute-continuity condition: choose
$n>1/\delta$. Therefore the family $\{f_n:n\geq1\}$ is not uniformly
integrable. The reverse implication in [L4] then shows that it is not
relatively weakly compact.

4.1 Audit the endpoints and degenerate families. [A1, L1, L2, L3, L4, step 1.1, step 2.1, step 2.2, step 3.1]
If $K_g=\varnothing$, both conclusions in part 1 are vacuous. If $g=0$, every
dominated $L^1$ class is zero, so the conclusion is the compact singleton
case. Open, closed, or half-open spike intervals define the same class because
their endpoint differences are null. The spikes are real and nonnegative;
their obstruction is concentration on shrinking positive-measure sets, not
unbounded $L^1$ norm. AC is used exactly through [L4] and to supply the
Countable Choice in the Lebesgue model [L1]. [given, A1, L1, L2, L3, L4,
step 1.1, step 2.1, step 2.2, step 3.1] ∎
