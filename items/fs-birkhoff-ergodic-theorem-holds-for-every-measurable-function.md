---
id: fs-birkhoff-ergodic-theorem-holds-for-every-measurable-function
kind: false-statement
title: Birkhoff's theorem requires integrability
status: draft
origin: pipeline
deps: [thm-birkhoff-ergodic-theorem, thm-doubling-map-is-ergodic-for-lebesgue-measure, thm-ergodicity-and-invariant-functions, thm-integrals-are-invariant-under-measure-preserving-maps, thm-monotone-convergence-for-the-integral, thm-dominated-convergence, def-extended-real-valued-measurable-function, thm-borel-sets-are-lebesgue-measurable, prop-order-and-scalar-rules-for-the-nonnegative-integral, prop-the-nonnegative-integral-agrees-with-the-simple-integral, thm-lebesgue-measure-of-a-box-of-every-kind, thm-p-series-rational, def-integrable-real-and-complex-functions-and-their-integrals, thm-finite-and-countable-subadditivity-of-measures, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§§10.1 and 10.5, printed pp. 89–97; §11.2, printed pp. 99–101"
proof_strategy: constructive
---

## Statement

Assume the Axiom of Countable Choice.  **False claim:** Birkhoff's finite almost-everywhere convergence conclusion
holds for every finite-valued measurable observable, without integrability.

## Facts & Assumptions

**Given:** Countable choice, Lebesgue probability on $[0,1)$, its doubling map $D_2$, and

$$f(0)=0,\qquad f(x)=1/x\quad(0<x<1).$$

[F1] It suffices to test strict superlevel sets for extended-real measurability ([[def-extended-real-valued-measurable-function]]), and Borel sets are Lebesgue measurable under countable choice ([[thm-borel-sets-are-lebesgue-measurable]]).

[F2] Nonnegative integrals are monotone and agree with simple-function integrals ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]); interval measure is interval length ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F3] The harmonic series diverges ([[thm-p-series-rational]]), and monotone convergence applies to increasing nonnegative measurable functions ([[thm-monotone-convergence-for-the-integral]]).

[F4] The doubling map is ergodic ([[thm-doubling-map-is-ergodic-for-lebesgue-measure]]); Birkhoff gives invariant finite limits for integrable truncations ([[thm-birkhoff-ergodic-theorem]]), and ergodicity makes those limits constant ([[thm-ergodicity-and-invariant-functions]]).

[F5] Dominated convergence and invariance of integrals identify the constant limits ([[thm-dominated-convergence]], [[thm-integrals-are-invariant-under-measure-preserving-maps]]).

[F6] A countable union of null sets is null ([[thm-finite-and-countable-subadditivity-of-measures]]).

## Refutation

**Proof technique:** constructive truncation argument.

1.1 For $a<0$, $\{f>a\}=[0,1)$; for $a=0$, it is $(0,1)$; and for $a>0$ it is $(0,\min\{1,1/a\})$, with the right endpoint omitted if it equals $1$. These are Borel.  Hence [F1] makes the everywhere-finite function $f$ Lebesgue measurable. [F1, construct, algebra]

1.2 On $I_k=[1/(k+1),1/k)$ one has $f\geq k$.  For every $N$, the simple function $s_N=\sum_{k=1}^Nk\mathbf1_{I_k}$ therefore satisfies $s_N\leq f$, and $$\int s_N\,d\lambda=\sum_{k=1}^Nk\left(\frac1k-\frac1{k+1}\right) =\sum_{k=1}^N\frac1{k+1}.$$ [F2, algebra]

2.1 By [F2]–[F3], the right side is unbounded, so $\int f\,d\lambda=+\infty$. Thus $f$ is not integrable under the integrability convention of [[def-integrable-real-and-complex-functions-and-their-integrals]]. [F2, F3, step 1.2]

3.1 For each integer $m\geq1$, let $f_m=\min\{f,m\}$.  It is measurable, bounded, and hence integrable on this probability space; moreover $f_m\uparrow f$. Monotone convergence and step 2.1 give $$c_m:=\int f_m\,d\lambda\uparrow+\infty.$$ [F3, step 1.1, step 2.1]

4.1 By [F4], $A_nf_m$ converges almost everywhere to an invariant function and that function equals a constant almost everywhere.  Since $0\leq A_nf_m\leq m$, [F5] identifies this constant as $$\lim_n\int A_nf_m\,d\lambda=\int f_m\,d\lambda=c_m.$$ [F4, F5, step 3.1]

5.1 Remove the countable union of the null exceptional sets in step 4.1; it is null by [F6].  At every remaining $x$, for every $m$ and $n$, $A_nf(x)\geq A_nf_m(x)$, whence $$\liminf_nA_nf(x)\geq c_m.$$ Because $c_m\uparrow+\infty$, this says $A_nf(x)\to+\infty$. [F6, step 3.1, step 4.1]

6.1 Thus a finite-valued measurable observable can have divergent-to-infinity ergodic averages almost everywhere.  This refutes the finite-limit claim and shows exactly why the $L^1$ hypothesis cannot be omitted.  Countable choice is inherited from the Lebesgue and doubling-map suppliers; all truncations are explicit. [step 2.1, step 5.1, discharge-construct] ∎
