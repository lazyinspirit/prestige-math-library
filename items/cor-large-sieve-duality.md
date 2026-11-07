---
dependency_level: 2
id: cor-large-sieve-duality
kind: corollary
title: "Dual additive large-sieve inequality"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-abstract-large-sieve-setting
  - thm-additive-large-sieve-inequality
  - thm-cauchy-schwarz-in-an-inner-product-space
  - def-complex-exponential
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
aliases: []
sources:
  scraped: []
  references:
    - title: "Kiran Kedlaya, Notes on Analytic Number Theory, Chapter 15"
      url: "https://kskedlaya.org/ant/chap-largesieve.html"
      locator: "Lemma 15.4 and Theorem 15.5, §15.2–15.3"
    - title: "Emmanuel Kowalski, The Large Sieve and its Applications (Cambridge Tracts 175, 2008)"
      url: "https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf"
      locator: "Lemma 2.8, printed pp. 18–19"
verification:
  precheck: pass
---

## Statement

Let $N\ge1$ be an integer, let $M\in\mathbb Z$, let $0<\delta\le1/2$, and
let $A\subseteq\mathbb T:=\mathbb R/\mathbb Z$ be finite with distinct
elements at distance at least $\delta$, where for real lifts $x,y$,
$d_{\mathbb T}(x,y):=\min_{k\in\mathbb Z}|x-y-k|$. Define
$e(t):=\exp(2\pi i t)$ for $t\in\mathbb R$. For any coefficients
$b_\alpha\in\mathbb C$,
$$\sum_{M<n\le M+N}\left|\sum_{\alpha\in A}b_\alpha e(-n\widetilde\alpha)\right|^2 \le(\delta^{-1}+4\pi N)\sum_{\alpha\in A}|b_\alpha|^2,$$
where each $\widetilde\alpha$ is any real lift of $\alpha$.

## Statement references

[[thm-additive-large-sieve-inequality]]

[[thm-cauchy-schwarz-in-an-inner-product-space]]

[[def-complex-exponential]]

[Kedlaya, Chapter 15, full text](https://kskedlaya.org/ant/chap-largesieve.html)

[Kowalski, Chapter 2, full text](https://ndl.ethernet.edu.et/bitstream/123456789/23450/1/E.%20Kowalski.pdf)

## Facts & Assumptions

**Given:** The same frequency set and interval as in the Statement, and
coefficients $b_\alpha\in\mathbb C$.

[F1] The additive large-sieve inequality gives
$\sum_{\alpha\in A}|\sum_n a_ne(n\widetilde\alpha)|^2
\le(\delta^{-1}+4\pi N)\sum_n|a_n|^2$
for every coefficient vector $(a_n)$
([[thm-additive-large-sieve-inequality]]).

[F2] Cauchy–Schwarz holds in every finite-dimensional complex inner-product
space ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

1.1 Set $y_n:=\sum_{\alpha\in A}b_\alpha e(-n\widetilde\alpha)$. If $\sum_n|y_n|^2=0$, the Statement is immediate. Otherwise, finite Cauchy–Schwarz and the choice $a_n=y_n/(\sum_m|y_m|^2)^{1/2}$ give $\sum_n|y_n|^2=\sup_{\sum_n|a_n|^2=1}\left|\sum_n a_n\overline{y_n}\right|^2.$ [F2, construct]

1.2 For any unit vector $(a_n)$, $\sum_n a_n\overline{y_n} =\sum_{\alpha\in A}\overline{b_\alpha}\sum_n a_ne(n\widetilde\alpha)$. Cauchy–Schwarz over the finite set $A$, followed by [F1], bounds the squared modulus by $(\delta^{-1}+4\pi N)\sum_\alpha|b_\alpha|^2$. [F1, F2, algebra]

2.1 Take the supremum in step 1.1 and use step 1.2. This is the claimed dual inequality. [step 1.1, step 1.2, algebra] ∎