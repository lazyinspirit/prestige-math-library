---
id: ex-poisson-smoothing-gauss-circle-error
kind: example
title: "The X^(-1/6) smoothing scale in the Miller–Schmid circle proof"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps: [thm-gauss-circle-error-bound-one-third-epsilon, def-countable-choice, thm-two-square-representation-count, thm-divisor-function-subpolynomial-bound, lem-voronoi-j1-square-root-decay]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Summation Formulas, from Poisson and Voronoi to the Present"
      url: "https://arxiv.org/pdf/math/0304187v1"
      locator: "§6, formulas (6.3), (6.9)–(6.13)"
verification:
  precheck: pending
---

## Example

Assume Countable Choice. Let $X>1$, set $\delta:=X^{-1/6}$, and for each positive integer $n$ let $r_2(n)$ count the ordered integer pairs whose squares sum to $n$. Define the shell and low-frequency contributions
$$B_1(X):=\sum_{\substack{n\in\mathbb Z\\(\sqrt X-\delta)^2\le n\le(\sqrt X+\delta)^2}}r_2(n),\qquad B_2(X):=X^{1/4}\sum_{\substack{n\in\mathbb Z\\1\le n\le\delta^{-2}}}r_2(n)n^{-3/4}.$$
For every $0<\eta<1/8$, there are constants $C_{\eta,1},C_{\eta,2}>0$ such that
$$B_1(X)\le C_{\eta,1}X^{1/3+\eta},\qquad B_2(X)\le C_{\eta,2}X^{1/3+\eta/3}.$$
The squared-radius shell has width $4\sqrt X\,\delta=4X^{1/3}$, and the low-frequency cutoff is $\delta^{-2}=X^{1/3}$. The $n^{-3/4}$ weight in $B_2$ is the product of the disk-transform factor $n^{-1/2}$ and the $n^{-1/4}$ decay from $J_1$.

## Example references

[Miller and Schmid, §6, formulas (6.3), (6.9)–(6.13)](https://arxiv.org/pdf/math/0304187v1)

## Facts & Assumptions

**Given:** Countable Choice, a real $X>1$, and $\delta=X^{-1/6}$.

[F1] [[thm-two-square-representation-count]]: $0\le r_2(n)\le4d(n)$ for every positive integer $n$.

[F2] [[thm-divisor-function-subpolynomial-bound]]: for every $\eta>0$, $d(n)\le C_\eta n^\eta$.

[F3] [[lem-voronoi-j1-square-root-decay]]: $|J_1(t)|\le C t^{-1/2}$ for $t\ge1$; this gives the displayed $n^{-3/4}$ low-frequency summand after the disk transform.

[F4] [[thm-gauss-circle-error-bound-one-third-epsilon]]: the complete circle proof uses this smoothing shell and the cutoff $\delta^{-2}$ when splitting its Poisson remainder.

## Verification

1.1 The shell's squared-radius width is $(\sqrt X+\delta)^2-(\sqrt X-\delta)^2=4\sqrt X\,\delta=4X^{1/3}$. Its integer points number at most $4X^{1/3}+1$, and its upper endpoint is at most $4X$ because $\delta<\sqrt X$. By [F1]–[F2], each $r_2(n)$ in the shell is at most $C_\eta X^\eta$, so $B_1(X)\le C_\eta X^{1/3+\eta}$. [F1, F2, given, algebra]

2.1 The identity $\delta^{-2}=X^{1/3}$ gives the low-frequency cutoff. By [F1]–[F2],
$$B_2(X)\le C_\eta X^{1/4}\sum_{n\le X^{1/3}}n^{-3/4+\eta}.$$
The summand is decreasing because $\eta<1/8$, so comparison with its integral gives $\sum_{n\le M}n^{-3/4+\eta}\le1+\int_1^M x^{-3/4+\eta}dx\le C_\eta M^{1/4+\eta}$. Therefore $B_2(X)\le C_\eta X^{1/4}(X^{1/3})^{1/4+\eta}=C_\eta X^{1/3+\eta/3}$. [F1, F2, given, step 1.1, algebra] ∎
