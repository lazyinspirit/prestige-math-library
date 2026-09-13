---
id: cex-nonintegrable-observable-has-divergent-ergodic-averages
kind: counterexample
title: A nonintegrable observable with divergent ergodic averages
status: published
origin: pipeline
deps: [thm-birkhoff-ergodic-theorem, thm-doubling-map-is-ergodic-for-lebesgue-measure, thm-ergodicity-and-invariant-functions, thm-integrals-are-invariant-under-measure-preserving-maps, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, def-extended-real-valued-measurable-function, thm-borel-sets-are-lebesgue-measurable, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, thm-lebesgue-measure-of-a-box-of-every-kind, thm-p-series-rational, def-integrable-real-and-complex-functions-and-their-integrals, thm-finite-and-countable-subadditivity-of-measures, def-countable-choice]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§§10.1 and 10.5, printed pp. 89–97; truncation consequence"
proof_strategy: constructive
---

## Statement refuted

Assume the Axiom of Countable Choice.  A finite-valued measurable observable need not have a finite almost-everywhere
ergodic-average limit when the $L^1$ hypothesis is omitted.

## Facts & Assumptions

**Given:** Countable choice, the doubling map $D_2$ on $([0,1),\lambda)$, and $f(0)=0$, $f(x)=1/x$ for $x>0$.

[F1] Strict superlevel sets characterize extended-real measurability, and Borel sets are Lebesgue measurable ([[def-extended-real-valued-measurable-function]], [[thm-borel-sets-are-lebesgue-measurable]]).

[F2] Nonnegative integrals are monotone and agree with simple integrals; half-open interval measure equals length ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F3] The harmonic series diverges and monotone convergence holds ([[thm-p-series-rational]], [[thm-monotone-convergence-for-the-integral]]).

[F4] Doubling is ergodic; Birkhoff gives invariant limits for integrable truncations, and invariant finite functions are constant in an ergodic probability system ([[thm-doubling-map-is-ergodic-for-lebesgue-measure]], [[thm-birkhoff-ergodic-theorem]], [[thm-ergodicity-and-invariant-functions]]).

[F5] Dominated convergence and integral invariance identify bounded average limits ([[thm-dominated-convergence]], [[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F6] Countable unions of null sets are null ([[thm-finite-and-countable-subadditivity-of-measures]]).

## Counterexample

**Proof technique:** constructive truncation argument.

1.1 The strict superlevel sets of $f$ are $[0,1)$ for negative levels, $(0,1)$ at level zero, and $(0,\min\{1,1/a\})$ at positive level $a$ (with the ambient endpoint omitted).  They are Borel, so [F1] makes the everywhere finite $f$ measurable. [F1, construct, algebra]

1.2 On $I_k=[1/(k+1),1/k)$ one has $f\geq k$.  Thus monotonicity and the simple-integral formula give, for every $N$, $$\int f\,d\lambda\geq\sum_{k=1}^Nk\lambda(I_k) =\sum_{k=1}^N\frac1{k+1}.$$ [F2, algebra]

2.1 The last sums are unbounded by [F3].  Hence $\int f=+\infty$, so $f$ is not integrable in the sense of [[def-integrable-real-and-complex-functions-and-their-integrals]]. [F2, F3, step 1.2]

3.1 Put $f_m=\min\{f,m\}$ for $m\geq1$.  These are bounded integrable functions, $f_m\uparrow f$, and [F3] yields $c_m:=\int f_m\,d\lambda\uparrow+\infty$. [F3, step 1.1, step 2.1]

4.1 For each $m$, [F4] makes $A_nf_m$ converge almost everywhere to a constant.  Since the averages are bounded by $m$, [F5] identifies that constant as $c_m$. [F4, F5, step 3.1]

5.1 Outside the countable union of the exceptional null sets in step 4.1, which is null by [F6], all these limits hold simultaneously.  Since $f\geq f_m$, there $$\liminf_nA_nf\geq\lim_nA_nf_m=c_m$$ for every $m$.  Letting $m\to\infty$ gives $A_nf\to+\infty$. [F6, step 3.1, step 4.1]

6.1 Thus this finite measurable but nonintegrable $f$ is the promised counterexample.  Countable choice is inherited from the Lebesgue/doubling suppliers; the truncations are explicit. [step 2.1, step 5.1, discharge-construct] ∎
