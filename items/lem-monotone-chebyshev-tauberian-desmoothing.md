---
id: lem-monotone-chebyshev-tauberian-desmoothing
title: "Monotone chebyshev tauberian desmoothing"
kind: lemma
status: draft
origin: pipeline
deps: [thm-cauchy-criterion-for-improper-integrals]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a71.3, monotonicity argument preceding \u00a71.4"
      url: https://kskedlaya.org/ant/chap-pnt.html
proof_strategy: direct argument
---

## Statement

Let $A:[1,\infty)\to[0,\infty)$ be nondecreasing and locally integrable, with $A(x)=O(x)$, and let $a\ge0$. If $\int_1^\infty(A(x)-ax)x^{-2}\,dx$ converges, then $A(x)/x\to a$.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-cauchy-criterion-for-improper-integrals]]: The integral $\int_a^\infty f$ converges if and only if, for every $\varepsilon>0$, there is $A>a$ such that $A\le u<v\quad\Longrightarrow\quad\left|\int_u^v f\right|<\varepsilon.$ At a finite right singular endpoint $b$, replace the condition by $b-\delta<u<v<b$; at a finite left endpoint use $a<u<v<a+\delta$; at $-\infty$ use $u<v\le-A$. In each case all displayed proper integrals must exist.

## Proof

1.1 Fix $\lambda>1$. The Cauchy criterion makes both tail integrals over $[x,\lambda x]$ and $[x/\lambda,x]$ tend to zero. Monotonicity gives $$o(1)\ge\frac{A(x)}x(1-\lambda^{-1})-a\log\lambda,\qquad o(1)\le\frac{A(x)}x(\lambda-1)-a\log\lambda.$$ These inequalities hold for sufficiently large x that $x/\lambda\ge1$. [F1, given]

2.1 Therefore $\limsup A(x)/x\le a\lambda\log\lambda/(\lambda-1)$ and $\liminf A(x)/x\ge a\log\lambda/(\lambda-1)$. Let $\lambda\downarrow1$; both constants tend to a. This also works when a=0 (and nonnegativity supplies a zero lower bound). No differentiation of A or continuity at its jumps was used. [step 1.1, algebra] ∎
