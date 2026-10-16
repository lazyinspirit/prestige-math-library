---
id: ex-qa-27-fixed-vs-variable-time-cost
kind: example
title: "Fixed-time and variable-time solver cost comparison"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 24
deps:
  - thm-qa-27-qsvt-inverse-state-cost
  - thm-qa-27-vtaa-amplification
  - def-qa-27-variable-time-model
justified_by: []
proof_strategy: direct
axiom_use: "None; this is finite arithmetic on an explicit three-stage distribution."
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Andris Ambainis, Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations"
      url: "https://arxiv.org/pdf/1010.4458"
      locator: "Theorem 1 and §3.3, PDF pp.4–8."
    - title: "András Gilyén, Yuan Su, Guang Hao Low, and Nathan Wiebe, Quantum singular value transformation and beyond"
      url: "https://arxiv.org/pdf/1806.01838"
      locator: "Theorem 41, PDF pp.37–38."
---

## Example

Assume the fixed-time profile is a successful QSVT inverse attempt with its exact phase-product check passed and its total error below the supported-target threshold in [[thm-qa-27-qsvt-inverse-state-cost]]. Compare its degree $m=3$ and good weight $1/4$ to three orthogonal stopping branches at times $t_1=1,t_2=2,t_3=4$ with stopping masses $p_1=1/2,p_2=1/3,p_3=1/6$. Within the first stopping subspace, let half its mass be good, so $p_{\rm succ}=1/4$; the other two subspaces are bad. One compatible branch vector is $ (|1,g\rangle+|1,b\rangle)/2+|2,b\rangle/\sqrt3+|3,b\rangle/\sqrt6 $; it has norm one, the $t_1$ branch is split equally between good and bad, and later stages leave already stopped labels fixed. The variable-time value below is only the production expression from the supplied-certificate regime of [[thm-qa-27-vtaa-amplification]]; this example supplies no certificate-construction cost $C_{\rm build}$.

## Facts & Assumptions

**Given:** The fixed-time profile $m=3$, its good weight $1/4$, and the three stopping times, branch masses, and good-output mass in the variable-time Example.

[F1] [[def-qa-27-variable-time-model]]: $T_{\rm av}=(\sum_i p_it_i^2)^{1/2}$ and $T_{\max}=\max_i t_i$.

[F2] [[thm-qa-27-vtaa-amplification]]: under its supplied finite probability/schedule certificates, the production term is $O(T_{\max}\sqrt{\ln L_T}+(T_{\rm av}/\sqrt{p_{\rm succ}})(\ln L_T)^{3/2})$, in addition to $C_{\rm build}$, where $L_T=\max(2,T_{\max})$. This example evaluates only that expression.

[F3] [[thm-qa-27-qsvt-inverse-state-cost]]: for a successful exact phase-product and total-error certificate, a QSVT attempt of degree $m$ and positive good probability $p_{\rm impl}$ has expected amplified signal-query cost $O(m/\sqrt{p_{\rm impl}})$.

## Verification

1.1 The masses sum to $1/2+1/3+1/6=1$, the maximum time is $T_{\max}=4$, and $T_{\rm av}^2=\frac12\cdot1^2+\frac13\cdot2^2+\frac16\cdot4^2=\frac92$, so $T_{\rm av}=3/\sqrt2$. The ordinary mean stopping time is $\sum_i p_it_i=11/6$, a different value. [given, F1, algebra]

2.1 The good mass is $p_{\rm succ}=1/4$, so $1/\sqrt{p_{\rm succ}}=2$. For the fixed-time QSVT profile, [F3] gives $O(m/\sqrt{p_{\rm succ}})=O(3\cdot2)=O(6)$. For the variable-time formula, $L_T=4$; substituting [F1] into [F2] gives $O(4\sqrt{\ln4}+3\sqrt2(\ln4)^{3/2})$. This evaluates the two stated expressions for the specified distribution. [given, F1, F2, F3, step 1.1, algebra]

3.1 Both expressions are asymptotic upper bounds with unspecified constants. The arithmetic above does not decide which implementation is faster at this finite instance or establish a universal speedup; the variable-time proof and OP6 resource fit remain separate. [F2, F3, step 2.1] ∎

## Remarks

The qualified production bound and distinct uniform-floor implementation in [[thm-qa-27-vtaa-amplification]] provide context for this expression, rather than a proof premise of this finite arithmetic example. The example establishes the displayed substitutions and does not prove that general theorem.
