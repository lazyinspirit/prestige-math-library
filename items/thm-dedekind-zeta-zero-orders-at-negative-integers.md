---
id: thm-dedekind-zeta-zero-orders-at-negative-integers
kind: theorem
title: "Dedekind Zeta Zero Orders at Negative Integers"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - def-dedekind-zeta-function
  - def-completed-dedekind-zeta-function
  - def-order-of-dedekind-zeta-zero-at-negative-integer
  - thm-dedekind-zeta-euler-product
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - thm-gamma-meromorphic-continuation
  - cor-gamma-function-has-no-zeros
  - cor-real-gamma-positive-integer-values
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Armand Borel, Stable real cohomology of arithmetic groups"
      url: "https://numdam.org/item/10.24033/asens.1269.pdf"
      locator: "The zero-order formula summarized in Proposition 12.2 and its proof context."
    - title: "Jürgen Neukirch, Algebraic Number Theory"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Chapter VII §5, the completed Dedekind-zeta functional equation and gamma factors."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field with signature $(r_1,r_2)$. For every integer $m\ge1$, the order of the zero of its Dedekind zeta function at $s=-m$ is finite and equals

$$d_m^0(K)=\operatorname{ord}_{s=-m}\zeta_K(s)=\begin{cases}r_1+r_2,&m\text{ even},\\r_2,&m\text{ odd}.\end{cases}$$

## Statement references

[[def-axiom-of-choice]]

[[def-order-of-dedekind-zeta-zero-at-negative-integer]]

[[def-completed-dedekind-zeta-function]]

[[thm-dedekind-zeta-euler-product]]

[[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[Armand Borel, *Stable real cohomology of arithmetic groups*, Proposition 12.2](https://numdam.org/item/10.24033/asens.1269.pdf)

## Facts & Assumptions

**Given:** AC; a number field $K$ with signature $(r_1,r_2)$; an integer $m\ge1$.

[A1] [[def-axiom-of-choice]]: the completed Dedekind-zeta functional equation used here is on the AC branch.

[F1] [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]: the completed function $\Lambda_K(s)=|D_K|^{s/2}\Gamma_{\mathbb R}(s)^{r_1}\Gamma_{\mathbb C}(s)^{r_2}\zeta_K(s)$ satisfies $\Lambda_K(s)=\Lambda_K(1-s)$, with no poles of $\zeta_K$ except at $1$.

[F2] [[thm-dedekind-zeta-euler-product]]: for real $s>1$, $\zeta_K(s)$ is the convergent positive Euler product and is strictly positive.

[F3] [[def-completed-dedekind-zeta-function]]: $\Gamma_{\mathbb R}(s)=\pi^{-s/2}\Gamma(s/2)$ and $\Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s)$.

[F4] [[thm-gamma-meromorphic-continuation]]: $\Gamma$ has simple poles exactly at the nonpositive integers.

[F5] [[cor-gamma-function-has-no-zeros]]: $\Gamma$ has no zeros.

[F6] [[cor-real-gamma-positive-integer-values]]: $\Gamma(j)=(j-1)!>0$ for every positive integer $j$.

[F7] [[def-order-of-dedekind-zeta-zero-at-negative-integer]]: $d_m^0(K)$ is the Taylor order of $\zeta_K$ at $-m$.

## Proof

1.1 By [F1], $\Lambda_K(-m)=\Lambda_K(m+1)$. Since $m+1>1$, [F2] gives $\zeta_K(m+1)>0$; [F3] and [F6] show that the discriminant and archimedean factors at $m+1$ are finite and positive. Therefore $\Lambda_K$ is holomorphic and nonzero at $-m$. [A1, F1, F2, F3, F6, given, algebra]

2.1 At $s=-m$, the factor $\Gamma_{\mathbb C}(s)$ has a simple pole by [F3,F4]. The factor $\Gamma_{\mathbb R}(s)$ has a simple pole exactly when $m$ is even: its gamma argument $-m/2$ is a nonpositive integer exactly in that parity case. It is finite and nonzero when $m$ is odd, by [F3, F4, F5]. [F3, F4, F5, given, algebra]

2.2 Thus $\Gamma_{\mathbb R}(s)^{r_1}\Gamma_{\mathbb C}(s)^{r_2}$ has pole order $r_1+r_2$ for even $m$ and $r_2$ for odd $m$. The factor $|D_K|^{s/2}$ is holomorphic and nonzero at $-m$, while $\Lambda_K$ is holomorphic and nonzero there by step 1.1. Dividing the completed function by these factors shows that $\zeta_K$ has a zero of exactly that order, which is finite and equals $d_m^0(K)$ by [F7]. [F1, F3, F4, F7, step 1.1, step 2.1, algebra] ∎
