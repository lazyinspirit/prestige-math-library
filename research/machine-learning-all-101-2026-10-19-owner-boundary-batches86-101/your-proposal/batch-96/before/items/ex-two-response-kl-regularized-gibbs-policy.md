---
id: ex-two-response-kl-regularized-gibbs-policy
kind: example
title: A two-response Gibbs policy with exact probabilities
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-kl-regularized-policy-improvement
  - thm-finite-action-gibbs-policy-optimum
  - def-natural-logarithm
justified_by: []
proof_strategy: direct
verification: {}
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Take $Y=\{a,b\}$, reference probabilities $q_a=q_b=1/2$, any $\beta>0$, and rewards $r(a)=0$ and $r(b)=\beta\log3$. The partition sum is $Z=2$, the unique maximizing policy is $p^*(a)=1/4$, $p^*(b)=3/4$, and the maximum objective value is $F_{q,r,\beta}(p^*)=\beta\log2$.

## Example references

[[def-kl-regularized-policy-improvement|Finite KL-regularized policy improvement]]: defines the objective and partition inputs.

[[thm-finite-action-gibbs-policy-optimum|Finite-action Gibbs policy theorem]]: gives the maximizing policy and objective-gap identity.

[[def-natural-logarithm|Natural logarithm]]: ensures $e^{\log3}=3$.

## Facts & Assumptions

**Given:** $Y=\{a,b\}$, $q=(1/2,1/2)$, $\beta>0$, and $r(a)=0$, $r(b)=\beta\log3$.

[F1] [[def-kl-regularized-policy-improvement]]: $F_{q,r,\beta}(p)=\sum_y p_y r(y)-\beta D(p\|q)$ on the finite probability simplex.

[F2] [[thm-finite-action-gibbs-policy-optimum]]: $Z=\sum_y q_y e^{r(y)/\beta}$, $p_y^*=q_y e^{r(y)/\beta}/Z$, and $F(p^*)-F(p)=\beta D(p\|p^*)$, with equality only at $p=p^*$.

[F3] [[def-natural-logarithm]]: $e^{\log t}=t$ for every $t>0$.

## Verification

1.1 By [F3], $e^{r(a)/\beta}=1$ and $e^{r(b)/\beta}=e^{\log3}=3$. Hence $Z=(1/2)1+(1/2)3=2$, and [F2] gives $p^*(a)=1/4$ and $p^*(b)=3/4$. [F2, F3, given, algebra]

2.1 By [F1], the objective being maximized is $F_{q,r,\beta}$. Its gap identity in [F2] gives $F(p^*)-F(p)=\beta D(p\|p^*)\ge0$ for every probability vector $p$, with equality only at $p=p^*$. Substituting $Z=2$ into $F(p^*)=\beta\log Z$ gives the maximum value $\beta\log2$. [F1, F2, given, step 1.1, algebra] ∎
