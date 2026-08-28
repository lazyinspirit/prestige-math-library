---
id: fs-uniform-integrability-implies-domination-by-an-integrable-function
kind: false-statement
title: "FALSE: uniform integrability implies domination by one integrable function"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-uniformly-integrable-family]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  references:
    - title: "Terence Tao, 245A Notes 4: Modes of convergence, Exercise 21.3"
      url: "https://terrytao.wordpress.com/2010/10/02/245a-notes-4-modes-of-convergence/"
---

## Statement refuted

uniform integrability implies domination by one integrable function.
## Facts & Assumptions

**Given:** On $[0,1]$ with Lebesgue measure, the pairwise disjoint intervals $I_k:=\left[a_k,a_k+\frac1{2k^2}\right)$, where $a_k:=\sum_{j=1}^{k-1}\frac1{2j^2}$, and the functions $f_k:=k\,\chi_{I_k}$.

[L1] Uniform integrability means that for every $\varepsilon>0$ there is $M>0$ such that $\int_{\{|f_k|>M\}}|f_k|\,d\mu<\varepsilon$ for every $k$. ([[def-uniformly-integrable-family]])

## Refutation

**Proof technique:** direct.

1.1 The intervals $I_k$ are pairwise disjoint and lie in $[0,1]$ because $\sum_{k=1}^\infty \frac1{2k^2}<1$. Also $$ \int |f_k|\,d\lambda = k\lambda(I_k)=\frac1{2k}. $$ [L1, algebra]

2.1 If $M>0$ and $k \le M$, then $\{|f_k|>M\}=\varnothing$; if $k>M$, then $\{|f_k|>M\}=I_k$ and $$ \int_{\{|f_k|>M\}}|f_k|\,d\lambda=\frac1{2k}\le\frac1{2\lfloor M\rfloor+2}. $$ Therefore the family $(f_k)$ is uniformly integrable by [L1]. [step 1.1, L1, algebra]

2.2 If an integrable function $g$ satisfied $g \ge f_k$ almost everywhere for every $k$, then $|g|\ge g\ge k$ almost everywhere on $I_k$. Since the intervals are pairwise disjoint, $$ \int |g|\,d\lambda \ge \sum_{k=1}^\infty \int_{I_k} |g|\,d\lambda \ge \sum_{k=1}^\infty k\lambda(I_k) =\sum_{k=1}^\infty \frac1{2k}=+\infty, $$ contradicting integrability of $g$. Hence no single integrable majorant exists. [step 1.1, algebra]

3.1 This uniformly integrable family is not dominated by any integrable function, so the claim is false. [step 2.1, step 2.2] ∎
