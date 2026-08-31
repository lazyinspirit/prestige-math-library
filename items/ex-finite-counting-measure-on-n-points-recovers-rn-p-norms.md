---
id: ex-finite-counting-measure-on-n-points-recovers-rn-p-norms
kind: example
title: "Finite counting measure on $n$ points recovers $\\mathbb{R}^n$ $p$-norms"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [rem-ell-p-is-l-p-of-counting-measure, def-p-norms-on-rn, def-counting-measure, prop-counting-measure-is-a-measure, def-nonnegative-lebesgue-integral, cor-beppo-levi-theorem]
proof_strategy: "Unwind the counting-measure integral on a finite set and compare it term by term with the published p-norms on R^n."
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
    - title: "Richard L. Wheeden and Antoni Zygmund, Measure and Integral, Chapter 8"
      url: "https://djvu.online/file/u1gYJemR8hzMe"
---

## Example

Let $n\ge1$, let $X=\{0,\dots,n-1\}$ with counting measure, and let $f:X\to\mathbb R$ be
given by $f(k)=x_k$. Then

$$\|f\|_p=\left(\sum_{k=0}^{n-1}|x_k|^p\right)^{1/p}\qquad(0<p<\infty),$$

and

$$\|f\|_\infty=\max_{0\le k<n}|x_k|.$$

For every rational $p\ge1$, these are exactly the published $p$-norms on
$\mathbb R^n$ from [[def-p-norms-on-rn]]; the displayed finite-sum formula
itself remains valid for every real $p>0$.

## Facts & Assumptions

**Given:** An integer $n\ge1$, the finite set $X=\{0,\dots,n-1\}$, and a function $f(k)=x_k$.

[L1] $\ell^p$ is the counting-measure version of $L^p$
([[rem-ell-p-is-l-p-of-counting-measure]]).

[L2] For rational $p\ge1$, [[def-p-norms-on-rn]] defines the finite-dimensional
$p$-norms by the same finite-sum formula, and for $n\ge1$ it defines the same
maximum norm.

## Verification

**Proof technique:** Unwind the counting-measure integral on a finite set and
compare it term by term with the published $p$-norms on $\mathbb R^n$.

1.1 Extending $(x_0,\dots,x_{n-1})$ by zeros outside $\{0,\dots,n-1\}$ turns it [L1, given]
into a sequence in the setting of [L1]. The resulting $\ell^p$ and
$L^\infty$ formulas are exactly the two displayed expressions.

2.1 In the ranges stated in [L2], those expressions are exactly the published [step 1.1, L2]
norms on $\mathbb R^n$. For other real $p>0$, step 1.1 still gives the displayed
$L^p$ functional, without claiming that the earlier finite-dimensional page
called it a norm.
∎
