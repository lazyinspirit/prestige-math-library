---
id: ex-a-two-step-function-shows-the-l-p-norm-converging-to-the-essential-supremum
kind: example
title: "A two-step function shows the $L^p$ norm converging to the essential supremum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions]
proof_strategy: "Compute the p-norms explicitly for a two-step simple function with two distinct values and let p tend to infinity."
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem 8.1"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Example

On $[0,1]$ with Lebesgue measure, let

$$f:=2\chi_{[0,1/2]}+\chi_{(1/2,1]}.$$

Then

$$\|f\|_p=\left(2^{p-1}+\frac12\right)^{1/p},$$

and therefore $\|f\|_p\to2=\|f\|_\infty$ as $p\to\infty$.

## Facts & Assumptions

**Given:** The two-step function $f$ above.

[L1] The $L^p$ norms of essentially bounded $L^r$ functions converge to the
essential supremum ([[thm-l-p-norms-converge-to-the-essential-supremum-for-essentially-bounded-l-r-functions]]).

## Verification

**Proof technique:** Compute the $p$-norms explicitly for a two-step simple
function with two distinct values and let $p$ tend to infinity.

1.1 Direct computation gives [given, algebra]
$$\|f\|_p^p=\int_0^1 |f|^p\,d\lambda=\frac{2^p}{2}+\frac{1^p}{2}=2^{p-1}+\frac12.$$

2.1 Hence [L1, step 1.1, algebra]
$$\|f\|_p=\left(2^{p-1}+\frac12\right)^{1/p}=2\left(\frac12+2^{-p-1}\right)^{1/p}.$$
For $p\ge1$, its bracket lies between $1/2$ and $1$, so its $1/p$ power lies
between $2^{-1/p}$ and $1$ and therefore tends to $1$. Thus $\|f\|_p\to2$.
This agrees with [L1] because the essential supremum of $f$ is $2$. ∎
