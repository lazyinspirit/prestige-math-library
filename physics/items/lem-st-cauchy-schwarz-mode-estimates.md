---
id: lem-st-cauchy-schwarz-mode-estimates
kind: lemma
title: Cauchy–Schwarz Estimates for String Mode Coefficients
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
deps: []
dependency_roles: {}
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "David Tong, Lectures on String Theory, arXiv:0908.0333v3, University of Cambridge Part III lecture notes"
      url: "https://arxiv.org/pdf/0908.0333v3"
      locator: "§1.4.1, printed p. 26: classical Fourier-mode convolutions of target-space vectors; the local proof establishes the coefficient estimates used for convergence."
    - title: "Barton Zwiebach, A First Course in String Theory, second edition, Cambridge University Press, 2009"
      url: "https://pierre.ag.gerard.web.ulb.be/textbooks/books/A_First_Course_In_String_Theory.pdf"
      locator: "§24.1, printed pp. 569–571: classical canonical string modes and constraint coefficients; the local proof supplies the needed square-summability estimates."
---

## Statement

Let $D\ge1$ be finite, let $\eta=\operatorname{diag}(-1,+1,\ldots,+1)$, and extend its bilinear contraction to $\mathbb C^D$. For $u\in\mathbb C^D$, define $|u|_E^2:=\sum_{\mu=0}^{D-1}|u^\mu|^2$. For a sequence $a=(a_m)_{m\in\mathbb Z}$ in $\mathbb C^D$, define $\|a\|_{\ell^2,E}^2:=\sum_{m\in\mathbb Z}|a_m|_E^2$. If $a,b$ have finite such norms, then for every $n\in\mathbb Z$ the convolution is absolutely convergent and

$$\sum_{m\in\mathbb Z}|a_m\cdot b_{n-m}|\le\|a\|_{\ell^2,E}\,\|b\|_{\ell^2,E}.$$

For a continuous periodic function $Q:\mathbb R\to\mathbb C^D$, define $\|Q\|_{2,E}^2:=(2\pi)^{-1}\int_{-\pi}^{\pi}|Q(s)|_E^2\,ds$; for a continuous scalar periodic function $r$, define $\|r\|_1:=(2\pi)^{-1}\int_{-\pi}^{\pi}|r(s)|\,ds$. Then for continuous periodic $A,B:\mathbb R\to\mathbb C^D$,

$$\|A\cdot B\|_1\le\|A\|_{2,E}\,\|B\|_{2,E}.$$

Here $\cdot$ is always the Minkowski contraction, while the norms used in estimates are positive Euclidean norms.

## Facts & Assumptions

**Given:** A finite target dimension $D$, the mostly-plus diagonal matrix $\eta$, square-summable vector sequences, and continuous $2\pi$-periodic vector functions.

[A1] The sequence norms are nonnegative extended sums that are finite where the statement assumes square summability; integrals in the function norms are normalized Riemann integrals of continuous functions on the compact interval.

## Proof

**Proof technique:** prove the finite Cauchy–Schwarz bound by a nonnegative quadratic, then pass to monotone limits and integrate.

1.1 For nonnegative finite lists $(x_j)$ and $(y_j)$, if $\sum_jy_j^2=0$, then every $y_j=0$ and $\sum_jx_jy_j=0$. Otherwise put $t=(\sum_jx_jy_j)/(\sum_jy_j^2)$. Expanding $0\le\sum_j(x_j-ty_j)^2$ gives $(\sum_jx_jy_j)^2\le(\sum_jx_j^2)(\sum_jy_j^2)$. Applying this to $x_\mu=|u^\mu|$ and $y_\mu=|v^\mu|$, and using $|\eta_{\mu\mu}|=1$, gives $|u\cdot v|\le\sum_\mu|u^\mu||v^\mu|\le|u|_E|v|_E$. [given, algebra]

2.1 For any finite index set $J\subset\mathbb Z$, step 1.1 applied to $x_m=|a_m|_E$, $y_m=|b_{n-m}|_E$ gives
$$\sum_{m\in J}|a_m\cdot b_{n-m}|\le\Bigl(\sum_{m\in J}|a_m|_E^2\Bigr)^{1/2}\Bigl(\sum_{m\in J}|b_{n-m}|_E^2\Bigr)^{1/2}\le\|a\|_{\ell^2,E}\|b\|_{\ell^2,E}.$$
Taking $J=\{-N,\ldots,N\}$ makes the left sides increase to the full nonnegative series; their common finite bound proves absolute convergence and the asserted inequality. [given, step 1.1, algebra]

3.1 Put $a(s)=|A(s)|_E$ and $b(s)=|B(s)|_E$. If $\int b^2=0$, continuity and nonnegativity imply $b=0$ everywhere: a positive value would make $b$ bounded below by a positive constant on a nonempty interval and force a positive integral. Otherwise set $t=((2\pi)^{-1}\int ab)/((2\pi)^{-1}\int b^2)$. Expanding $0\le(2\pi)^{-1}\int_{-\pi}^{\pi}(a-tb)^2\,ds$ gives $((2\pi)^{-1}\int ab)^2\le\|A\|_{2,E}^2\|B\|_{2,E}^2$. By step 1.1 pointwise, $|A(s)\cdot B(s)|\le a(s)b(s)$; integrate and take nonnegative square roots to obtain $\|A\cdot B\|_1\le\|A\|_{2,E}\|B\|_{2,E}$. [A1, step 1.1, algebra] ∎
