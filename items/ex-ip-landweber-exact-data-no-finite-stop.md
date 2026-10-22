---
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
id: ex-ip-landweber-exact-data-no-finite-stop
kind: example
title: Exact data can converge without a finite discrepancy stop
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - alg-ip-nonlinear-landweber-discrepancy
  - thm-ip-nonlinear-landweber-fejer-and-finite-stopping
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Take $X=Y=\mathbb R$, $U=\mathbb R$, $F(x)=x/2$, initial point $x_0=1$, exact solution $x^\dagger=0$, exact datum $y=0$, and exact data $y^\delta=y$ with $\delta=0$. The derivative norm is $1/2$ and the uniform TCC holds with $\eta=0$ on every ball. For any $\tau>2$ and any finite update budget $M$, the ideal exact-data iterates are $x_n=(3/4)^n$ and have strictly positive residual at every finite index. They converge to the exact solution, but the zero discrepancy threshold is never met finitely, so the finite-budget algorithm returns `budget_exhausted`.

## Example references

[[alg-ip-nonlinear-landweber-discrepancy|Exact-data discrepancy test and budget status]]

[[thm-ip-nonlinear-landweber-fejer-and-finite-stopping|Exact-data convergence and the absence of a finite-stop guarantee]]

## Facts & Assumptions

**Given:** $X=Y=\mathbb R$, $U=\mathbb R$, $F(x)=x/2$, $x_0=1$, $x^\dagger=0$, $y=y^\delta=0$, $\delta=0$, $\tau>2$, and an arbitrary finite $M\in\mathbb N_0$.

[F1] [[alg-ip-nonlinear-landweber-discrepancy]]: the procedure returns `stopped` only when the current residual is at most $\tau\delta$; after $M$ updates it returns `budget_exhausted` if that test has not succeeded.

[F2] [[thm-ip-nonlinear-landweber-fejer-and-finite-stopping]]: for exact data under the stated local hypotheses, the ideal Landweber sequence converges to a solution; the theorem does not claim a finite exact-data stop.

## Verification

1.1 The derivative is $F'(x)h=h/2$, so $\|F'(x)\|=1/2\le1$, and the linearization remainder is identically zero. Thus the uniform TCC holds with $\eta=0$. With $r=1$, $x^\dagger=0\in\overline B_r(1)$ and $\overline B_{2r}(1)\subset\mathbb R$, so the local hypotheses hold. [given, algebra]

2.1 The update is $x_{n+1}=x_n+(1/2)(-x_n/2)=(3/4)x_n$; induction gives $x_n=(3/4)^n>0$ and residual $|F(x_n)-y|=(1/2)(3/4)^n>0$ for every finite $n$. Hence the discrepancy test with threshold $\tau\delta=0$ never succeeds at a finite index. By [F2], the exact-data sequence converges to a solution; the only solution of $F(x)=0$ is $0$. Therefore any finite-budget run reaches $M$ with positive residual and returns `budget_exhausted` by [F1]. [given, F1, F2, algebra, induction] ∎
