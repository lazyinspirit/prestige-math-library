---
id: ex-a-uniformly-integrable-family-with-no-integrable-majorant
kind: example
title: "A uniformly integrable family need not admit a single integrable majorant"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-uniformly-integrable-family, thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
---

## Example

On $[0,1]$ with Lebesgue measure, define
$$a_k:=\sum_{j=1}^{k-1}\frac1{2j^2},\qquad I_k:=\left[a_k,a_k+\frac1{2k^2}\right),\qquad f_k:=k\,\chi_{I_k}.$$

Then the family $(f_k)_{k \ge 1}$ is uniformly integrable, but no integrable
function dominates all of it almost everywhere.

## Facts & Assumptions

**Given:** Lebesgue measure on $[0,1]$, the intervals $I_k$, and the functions $f_k:=k\,\chi_{I_k}$.

[L1] Uniform integrability means that for every $\varepsilon>0$ there is $M>0$ such that $\int_{\{|f_k|>M\}}|f_k|\,d\mu<\varepsilon$ for every $k$. ([[def-uniformly-integrable-family]])

[L2] On finite measure spaces, uniform integrability is equivalent to $L^1$-boundedness plus uniform absolute continuity. ([[thm-uniform-integrability-equivalent-to-l-one-boundedness-and-uniform-absolute-continuity-on-finite-measure-spaces]])

## Verification

**Proof technique:** direct.

1.1 The series $\sum_{k=1}^\infty \frac1{2k^2}$ converges to a value below $1$, so the intervals $I_k$ are pairwise disjoint subsets of $[0,1]$. Also $$\int |f_k|\,d\lambda = k\lambda(I_k)=\frac1{2k}.$$ [given, algebra]

2.1 If $M>0$ and $k \le M$, then $\{|f_k|>M\}=\varnothing$; if $k>M$, then $\{|f_k|>M\}=I_k$ and $$\int_{\{|f_k|>M\}}|f_k|\,d\lambda=\frac1{2k}\le\frac1{2\lfloor M\rfloor+2}.$$ Hence the family is uniformly integrable by [L1]. [step 1.1, L1, algebra]

2.2 If $g$ were an integrable majorant for all $f_k$, then $|g|\ge g\ge k$ almost everywhere on $I_k$. Since the intervals are pairwise disjoint, $$\int |g|\,d\lambda \ge \sum_{k=1}^\infty \int_{I_k}|g|\,d\lambda \ge \sum_{k=1}^\infty \frac1{2k}=+\infty,$$ contradicting integrability of $g$. [step 1.1, algebra]

3.1 This family is therefore uniformly integrable but has no single integrable majorant. The example is exactly the failure of the false statement paired with [L2]. [step 2.1, step 2.2, L2] ∎
