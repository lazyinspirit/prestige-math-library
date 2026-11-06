---
id: cex-cmp-small-expansion-parameters-do-not-force-mass-separation
kind: counterexample
title: Vanishing dimensionless controls do not force a vanishing mass ratio
status: published
origin: pipeline
domain: mathematics
library: physics
category: string-theory
page: cmp-stabilization-control-frontier-examples
dependency_level: 0
deps: []
dependency_roles: {}
generation:
  role: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement refuted

For every four sequences $g,a,m,M:\mathbb N_+\to\mathbb R_{>0}$ of dimensionless real numbers, the implication $g_n\to0$ and $a_n\to0$ implies $m_n/M_n\to0$ holds, without any further relation between the four sequences.

## Facts & Assumptions

**Given:** Let $\mathbb N_+=\{1,2,\ldots\}$ and work in the standard ordered real field. All sequence entries are dimensionless real numbers; no physical interpretation is imposed.

[A1] The universal implication displayed in **Statement refuted** is the claim being refuted; its only hypotheses are strict positivity and the two stated control-parameter limits.

[F1] For a real sequence $x_n$, $x_n\to L$ means that for every $\varepsilon>0$ there is $N\in\mathbb N_+$ such that $n\ge N$ implies $|x_n-L|<\varepsilon$.

[F2] For every $\varepsilon>0$, there is $N\in\mathbb N_+$ with $N>1/\varepsilon$ (the Archimedean property of $\mathbb R$).

[L1] For each $n\in\mathbb N_+$, set $g_n=a_n=1/n$ and $m_n=M_n=1/n^2$.

## Counterexample

1.1 Since $n\ge1$, both $1/n$ and $1/n^2$ are positive. Thus all four sequences in [L1] are strictly positive, and $M_n=1/n^2\ne0$ makes $m_n/M_n$ well-defined for every $n$. [given, L1, algebra]

1.2 Given $\varepsilon>0$, choose $N$ as in [F2]. For every $n\ge N$, $0<g_n=a_n=1/n\le1/N<\varepsilon$. By [F1], $g_n\to0$ and $a_n\to0$. [given, F1, F2, L1, algebra]

2.1 For every $n\in\mathbb N_+$, $m_n/M_n=(1/n^2)/(1/n^2)=1$. The ratio sequence is therefore identically $1$, so it converges to $1$ and cannot converge to $0$ (take $\varepsilon=1/2$ in [F1]). The witness satisfies the antecedent of [A1] by 1.2 and violates its conclusion, refuting [A1]. [given, A1, F1, L1, step 1.1, step 1.2, algebra] ∎

## Remarks

This is an abstract dimensionless control-ratio calculation motivated only by effective-field-theory bookkeeping. It supplies no compactification, stationary point, metastability result, flux or tadpole solution, or string realization.

The calculation is contextual to [[op-cmp4-controlled-kklt-uplift]] and [[op-cmp4-10d-lvs-nonperturbative-volume-scaling]] on the A page; neither open question is a premise or logical dependency.
