---
id: thm-borel-normalized-negative-zeta-leading-term-rational-multiple
kind: theorem
title: "Normalized Negative Dedekind-Zeta Leading Term Is a Rational Multiple"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-archimedean-embeddings-and-number-field-signature
  - def-dedekind-zeta-function
  - thm-dedekind-zeta-euler-product
  - def-discriminant-of-a-number-field-basis-and-order
  - def-completed-dedekind-zeta-function
  - def-order-of-dedekind-zeta-zero-at-negative-integer
  - thm-dedekind-zeta-zero-orders-at-negative-integers
  - thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
  - thm-gamma-meromorphic-continuation
  - cor-gamma-function-has-no-zeros
  - cor-gamma-one-half-value
  - cor-real-gamma-positive-integer-values
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Armand Borel, Cohomologie de SL_n et valeurs de fonctions zêta aux points entiers"
      url: "https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0.pdf"
      locator: "§6.4, printed p. 633, normalized leading coefficient and functional-equation comparison."
    - title: "Jürgen Neukirch, Algebraic Number Theory"
      url: "https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf"
      locator: "Chapter VII §5, completed Dedekind-zeta functional equation and archimedean gamma factors."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $K$ be a number field with signature $(r_1,r_2)$, absolute discriminant $D_K$, degree $n_K=[K:\mathbb Q]$, and let $m\ge1$. Put $d_m^0(K)=\operatorname{ord}_{s=-m}\zeta_K(s)$ and define the positive leading coefficient and normalized comparison scalar by

$$c_m(K):=\left|\lim_{s\to-m}\zeta_K(s)(s+m)^{-d_m^0(K)}\right|, \qquad c'_m(K):=c_m(K)\pi^{-d_m^0(K)},$$

$$R'_{m,K}:=|D_K|^{1/2}\zeta_K(m+1)\pi^{-n_K(m+1)}.$$

Then $c'_m(K)/R'_{m,K}\in\mathbb Q^\times$.

## Statement references

[[def-axiom-of-choice]]

[[def-order-of-dedekind-zeta-zero-at-negative-integer]]

[[thm-dedekind-zeta-zero-orders-at-negative-integers]]

[[def-completed-dedekind-zeta-function]]

[Armand Borel, *Cohomologie de SL_n et valeurs de fonctions zêta aux points entiers*, §6.4](https://www.numdam.org/item/ASNSP_1977_4_4_4_613_0.pdf)

## Facts & Assumptions

**Given:** AC; a number field $K$ with signature $(r_1,r_2)$ and degree $n_K=r_1+2r_2$; an integer $m\ge1$.

[A1] [[def-axiom-of-choice]]: the completed Dedekind-zeta functional equation supplier below is stated under AC.

[F1] [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]: with $G_K(s)=|D_K|^{s/2}\Gamma_{\mathbb R}(s)^{r_1}\Gamma_{\mathbb C}(s)^{r_2}$, $G_K(s)\zeta_K(s)=G_K(1-s)\zeta_K(1-s)$.

[F2] [[thm-dedekind-zeta-zero-orders-at-negative-integers]]: $\zeta_K(-m+h)=\lambda_m h^{d_m^0(K)}+O(h^{d_m^0(K)+1})$ with $\lambda_m\ne0$.

[F3] [[def-completed-dedekind-zeta-function]]: $\Gamma_{\mathbb R}(s)=\pi^{-s/2}\Gamma(s/2)$ and $\Gamma_{\mathbb C}(s)=2(2\pi)^{-s}\Gamma(s)$.

[F4] [[thm-gamma-meromorphic-continuation]]: gamma has simple poles at nonpositive integers and obeys $\Gamma(z+1)=z\Gamma(z)$.

[F5] [[cor-gamma-function-has-no-zeros]]: gamma is nonzero wherever it is finite.

[F6] [[cor-gamma-one-half-value]]: $\Gamma(1/2)=\sqrt\pi$.

[F7] [[cor-real-gamma-positive-integer-values]]: $\Gamma(j)=(j-1)!$ for positive integers $j$.

[F8] [[thm-dedekind-zeta-euler-product]]: $\zeta_K(m+1)>0$.

[F9] [[def-discriminant-of-a-number-field-basis-and-order]]: $|D_K|$ is a positive integer.

## Proof

1.1 Write $d=d_m^0(K)$ and let $\gamma_-$ be the leading Laurent coefficient of $\Gamma_{\mathbb R}(s)^{r_1}\Gamma_{\mathbb C}(s)^{r_2}$ at $s=-m$, so the product is $\gamma_-(s+m)^{-d}+O((s+m)^{1-d})$. Set $\gamma_+=\Gamma_{\mathbb R}(m+1)^{r_1}\Gamma_{\mathbb C}(m+1)^{r_2}$. Substituting the expansion from [F2] in [F1] and taking $s\to-m$ gives $\lambda_m=|D_K|^{m+1/2}(\gamma_+/\gamma_-)\zeta_K(m+1)$. All factors in this identity are nonzero by [F4, F5, F6, F7] and the positive Euler product [F8]. [A1, F1, F2, F3, F4, F5, F6, F7, F8, given, algebra]

1.2 From [F3,F4], the pole coefficient of $\Gamma_{\mathbb C}(-m+h)$ is $2(2\pi)^m(-1)^m/m!$. If $m=2k$ is even, that of $\Gamma_{\mathbb R}(-m+h)$ is $2\pi^{m/2}(-1)^k/k!$; if $m$ is odd, its value at $-m$ is $\pi^{m/2}\Gamma(-m/2)$. Thus all remaining gamma constants in $\gamma_-/\gamma_+$ are rational multiples of integer factorials, except for the half-integer gamma factors. [F3, F4, given, algebra]

2.1 For even $m$, $\Gamma((m+1)/2)$ is a rational multiple of $\sqrt\pi$ by [F4,F6]; its $r_1$ copies cancel the residual factor $\pi^{-r_1/2}$ in $\pi^{n_K(m+1)-d}\gamma_+/\gamma_-$. For odd $m$, $\Gamma(-m/2)$ is a nonzero rational multiple of $\sqrt\pi$ by repeated use of [F4,F6]; its $r_1$ copies cancel the residual factor $\pi^{r_1/2}$. In both cases, [F7] makes all positive-integer gamma values rational factorials. Consequently $\pi^{n_K(m+1)-d}|\gamma_+/\gamma_-|$ is a positive rational number. [F3, F4, F6, F7, step 1.2, given, algebra]

3.1 By step 1.1, $c_m=|\lambda_m|$. Divide its expression there by $R'_{m,K}$ and multiply by $\pi^{-d}$ as in the definition of $c'_m$; this gives $c'_m(K)/R'_{m,K}=|D_K|^m\pi^{n_K(m+1)-d}|\gamma_+/\gamma_-|$. By [F9], $|D_K|^m$ is a positive rational number; the remaining factor is rational by step 2.1. This proves the claim. [F9, step 1.1, step 2.1, given, algebra] ∎
