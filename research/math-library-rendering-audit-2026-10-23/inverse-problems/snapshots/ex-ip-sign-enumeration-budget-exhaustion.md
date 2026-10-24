---
id: ex-ip-sign-enumeration-budget-exhaustion
kind: example
title: A one-pattern sign budget misses the best amplitude fit
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - alg-ip-finite-sign-enumeration-phase-retrieval
  - thm-ip-finite-sign-enumeration-correctness
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  scraped: []
  references: []
---

## Example

Let $d=1$, $m=2$, $A=(1,-1)^{\mathsf T}$, and $b=(1,4)$, so $r=(1,2)$. In noisy sign enumeration, fix the first sign to $+1$, order the remaining signs with $+1$ before $-1$, and use $P=L=1$. The algorithm processes only $(+1,+1)$, returns $x=-1/2$ with $J(x)=\sum_{i=1}^2(|(Ax)_i|-r_i)^2=5/2$, and reports budget-exhausted. The unprocessed pattern $(+1,-1)$ has least-squares candidate $x=3/2$ with $J(x)=1/2$.

## Example references

[[alg-ip-finite-sign-enumeration-phase-retrieval|Pattern order, budgets, and noisy objective]]

[[thm-ip-finite-sign-enumeration-correctness|Finite enumeration's complete-search guarantee]]

## Facts & Assumptions

**Given:** The matrix $A=(1,-1)^{\mathsf T}$, data $b=(1,4)$, noisy mode, and budgets $P=L=1$.

[F1] [[alg-ip-finite-sign-enumeration-phase-retrieval]]: for $m=2$, the canonical signs are ordered $(+,+)$ then $(+,-)$; a pattern cap or solve budget that stops before both are processed returns budget-exhausted and the noisy objective is $J(x)=\sum_i(|(Ax)_i|-r_i)^2$.

[F2] [[thm-ip-finite-sign-enumeration-correctness]]: each processed signed candidate minimizes its signed least-squares residual, while a global-minimum guarantee is made only after every canonical pattern is processed.

## Verification

1.1 Since $m=2$, the canonical sign set is exactly $(+,+),(+,-)$ in the stated order. Both budgets permit one solve, so only $(+,+)$ is processed and the algorithm reports budget-exhausted. [given, F1]

1.2 For the processed target $y_{++}=(1,2)$, the squared signed residual is $(x-1)^2+(-x-2)^2=2(x+1/2)^2+9/2$, minimized uniquely at $x=-1/2$ by [F2]. Its amplitudes are $(1/2,1/2)$, so $J(-1/2)=(1/2-1)^2+(1/2-2)^2=5/2$. [given, F1, F2, algebra]

2.1 For the unprocessed target $y_{+-}=(1,-2)$, the squared signed residual is $(x-1)^2+(-x+2)^2=2(x-3/2)^2+1/2$, minimized uniquely at $x=3/2$ by [F2]. Its amplitudes are $(3/2,3/2)$, so $J(3/2)=(3/2-1)^2+(3/2-2)^2=1/2<5/2$. Thus the budget-limited incumbent is not the best candidate over all patterns. [F2, step 1.2, algebra] ∎
