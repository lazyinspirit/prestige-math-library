---
id: lem-smc-multinomial-variance-unrolls
kind: lemma
title: "Multinomial SMC variance unrolls into local contributions"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-smc-clt-function-classes-and-variance-recursions
proof_strategy: direct
axiom_use: "AC is inherited through the SMC flow in the cited definition; the covariance expansion itself is choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Nicolas Chopin, Central Limit Theorem for Sequential Monte Carlo Methods and its Application to Bayesian Inference, §2.3, equation (9)"
      url: "https://arxiv.org/pdf/math/0508594"
    - title: "Hans R. Künsch, Recursive Monte Carlo Filters: Algorithms and Theoretical Analysis, §4.3.1"
      url: "https://arxiv.org/pdf/math/0602211"
---

## Statement

Use the operators and multinomial variance recursion of [[def-smc-clt-function-classes-and-variance-recursions]] at every selection time. For $\phi\in\Psi_t^{(d)}$, put $\bar\phi=\phi-\pi_t(\phi)$. Then
$$V_t(\phi)=\sum_{k=0}^{t}\widetilde\pi_k\!\left[\upsilon_k^2\,E_{k+1:t}(\bar\phi)E_{k+1:t}(\bar\phi)^\top\right],$$
where the $k=t$ term uses $E_{t+1:t}\bar\phi=\bar\phi$. Each summand is a finite positive-semidefinite matrix under the stated class conditions.

## Facts & Assumptions

**Given:** The finite-horizon target/proposal flow, Radon–Nikodym weights, forward operators, and multinomial covariance recursion in the cited definition.

[A1] [[def-axiom-of-choice]]: AC is inherited through the finite-horizon path and Radon–Nikodym construction.

[F1] [[def-smc-clt-function-classes-and-variance-recursions]]: $\upsilon_s=d\pi_s/d\widetilde\pi_s$, $E_s h=k_s(\upsilon_sh)$, $\pi_{s-1}E_sh=\pi_s h$, and $\widehat V_{s-1}^{\mathrm{multi}}=V_{s-1}+\operatorname{Cov}_{\pi_{s-1}}$; $\Psi_t$ recursively supplies the target moments of the centered backward images.

## Proof

**Given:** The hypotheses in the Statement.

1.1 For every integrable $h$ on $\Theta_s$, the Radon–Nikodym identity [F1] gives $\pi_{s-1}(E_sh)=\pi_{s-1}(k_s(\upsilon_sh))=\widetilde\pi_s(\upsilon_sh)=\pi_s(h)$. Hence if $\pi_s(h)=0$, then $E_sh$ has mean zero under $\pi_{s-1}$. [A1, F1, given]

2.1 For a square-integrable vector function $u$ on $\Theta_s$, expand $u-\widetilde\pi_s(u)=\bigl(u-k_su\bigr)+\bigl(k_su-\widetilde\pi_s(u)\bigr).$ The cross-covariance terms vanish after integrating the first factor conditionally against $k_s$, because $k_s(u-k_su)=0$. Therefore $\operatorname{Cov}_{\widetilde\pi_s}(u)=\int\operatorname{Cov}_{k_s}(u)(x)\,\pi_{s-1}(dx)+\operatorname{Cov}_{\pi_{s-1}}(k_su).$ For $u=\upsilon_s h$ with $\pi_s(h)=0$, its $\widetilde\pi_s$ mean is zero by step 1.1. Substituting the multinomial recursion from [F1] thus yields $V_s(h)=V_{s-1}(E_sh)+\widetilde\pi_s\!\left[\upsilon_s^2hh^\top\right].$ [F1, step 1.1, algebra]

3.1 Starting with $h=\bar\phi$ at time $t$, apply step 1.1 to see that each backward iterate $E_{k+1:t}\bar\phi$ has $\pi_k$-mean zero. The recursive $\Psi$ condition also gives its finite target second moment at each such time. Repeated substitution of the one-step identity in step 2.1 gives one new term $\widetilde\pi_k[\upsilon_k^2(E_{k+1:t}\bar\phi)(E_{k+1:t}\bar\phi)^\top]$ at each $k=t,t-1,\ldots,1$, and the remaining initial term is $V_0(E_{1:t}\bar\phi)=\operatorname{Cov}_{\widetilde\pi_0}(\upsilon_0E_{1:t}\bar\phi)$. Its mean is zero by step 1.1, so it equals the $k=0$ summand. The same base calculation gives the formula when $t=0$. Each summand is finite: for $k\ge1$, the recursive $\Phi$ condition gives a $2+\delta$ proposal moment of $\upsilon_kE_{k+1:t}\bar\phi$; for $k=0$, the initial $\Psi_0$ moment gives square integrability of $\upsilon_0E_{1:t}\bar\phi$. [A1, F1, step 1.1, step 2.1, induction, algebra] ∎
