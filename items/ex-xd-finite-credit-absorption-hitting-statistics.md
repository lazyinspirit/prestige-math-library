---
id: ex-xd-finite-credit-absorption-hitting-statistics
kind: example
title: "Finite credit reserve: certified absorption statistics"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - thm-finite-transient-hitting-and-mean-exit-residual-bound
  - thm-finite-chain-closed-class-cesaro-weight-decomposition
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Charles M. Grinstead and J. Laurie Snell, Introduction to Probability, Chapter 11"
      url: "https://math.dartmouth.edu/~prob/prob/OLD/prob.pdf"
      locator: "§11.2, Example 11.13 and Theorems 11.3–11.6, printed pp. 415–420; gambler's ruin, absorption, fundamental matrix, and hitting/mean-time systems."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Example

A credit reserve has levels $0,1,2,3,4$. From an interior level it moves one level up or down with equal probability; levels 0 and 4 are absorbing failure and success states. For transient levels $U=\{1,2,3\}$, the transient block is

$$T=\begin{pmatrix}0&1/2&0\\1/2&0&1/2\\0&1/2&0\end{pmatrix},\qquad b_4=(0,0,1/2)^{\mathsf T}.$$

The chance of eventual success from level i is $i/4$ and the mean number of steps to absorption is $i(4-i)$. Starting from level 2, the two absorbing class weights are both $1/2$. A deliberately perturbed numerical solve illustrates the residual certificate.

## Verification

**Given:** The five-state transition rule above, transient set U, and success state 4.

[F1] [[thm-finite-transient-hitting-and-mean-exit-residual-bound]]: if the finite transient block has the escape path property, then $h=(I-T)^{-1}b_4$, $t=(I-T)^{-1}\mathbf1$, and both statistics have residual error bounded by $\| (I-T)^{-1}\|_\infty$ times the equation residual.

[F2] [[thm-finite-chain-closed-class-cesaro-weight-decomposition]]: eventual class weights depend on the initial law and are computed by the transient-block exit system.

**Proof technique:** direct exact calculation.

1.1 From level 1, the path down exits within one step with probability $1/2$; from level 2, the two paths down-down and up-up exit within two steps with total probability $1/2$; from level 3, the path up exits within one step with probability $1/2$. Thus every transient state escapes within $L=2$ with probability at least $\varepsilon=1/2$, and [F1] gives $\|(I-T)^{-1}\|_\infty\le4$. [given, F1, construct]

1.2 Let $\widehat h=(13/50,1/2,37/50)^{\mathsf T}$. Direct multiplication gives $b_4-(I-T)\widehat h=(-1/100,0,1/100)^{\mathsf T}$, with infinity norm $1/100$. [F1, given, algebra]

2.1 The success equations are $h_1=h_2/2$, $h_2=(h_1+h_3)/2$, and $h_3=1/2+h_2/2$. Substitution gives $h=(1/4,1/2,3/4)^{\mathsf T}$, which satisfies $(I-T)h=b_4$ by direct multiplication. The mean-exit equations are $t_1=1+t_2/2$, $t_2=1+(t_1+t_3)/2$, and $t_3=1+t_2/2$; direct substitution verifies $t=(3,4,3)^{\mathsf T}$. [F1, step 1.1, algebra]

3.1 By [F1] and step 1.1, $\|h-\widehat h\|_\infty\le4/100=1/25$. The exact error is $1/100$, so the finite-step escape certificate is valid and conservative. From level 2, step 2.1 gives success weight $1/2$; because the two closed classes exhaust probability one, the failure weight is also $1/2$, as in [F2]. [F1, F2, step 1.1, step 2.1, step 1.2, algebra] ∎
