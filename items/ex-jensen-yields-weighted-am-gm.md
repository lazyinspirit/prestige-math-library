---
id: ex-jensen-yields-weighted-am-gm
kind: example
title: "Jensen's inequality yields the weighted AM-GM inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-jensens-integral-inequality]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Theorem (7.44)"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Example

Let $\lambda_1,\dots,\lambda_m\ge0$ with $\sum_j\lambda_j=1$ and let
$a_1,\dots,a_m>0$. Then
$$\prod_{j=1}^m a_j^{\lambda_j}\le\sum_{j=1}^m\lambda_ja_j.$$

## Facts & Assumptions

**Given:** Weights $\lambda_j\ge0$ summing to $1$ and positive numbers $a_j$.

[L1] Jensen's inequality holds on a probability space ([[thm-jensens-integral-inequality]]).

## Verification

**Proof technique:** direct.

1.1 Put a discrete probability measure on $\{1,\dots,m\}$ by[L1, construct]
$\mathbb P(\{j\})=\lambda_j$, let $f(j)=a_j$, and choose the convex function
$\varphi(x)=-\log x$ on $(0,\infty)$. Applying [L1] gives
$$-\log\!\left(\sum_{j=1}^m\lambda_ja_j\right)\le-\sum_{j=1}^m\lambda_j\log a_j.$$


2.1 Multiply by $-1$ and exponentiate to obtain [step 1.1, algebra] ∎
$$\prod_{j=1}^m a_j^{\lambda_j}\le\sum_{j=1}^m\lambda_ja_j,$$
the weighted AM-GM inequality.
