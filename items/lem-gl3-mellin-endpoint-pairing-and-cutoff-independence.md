---
dependency_level: 2
id: lem-gl3-mellin-endpoint-pairing-and-cutoff-independence
kind: lemma
title: "Endpoint Mellin pairing with cutoff independence and vertical growth"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension, lem-gl3-compact-flat-distribution-normal-forms, def-distributional-derivative, def-pullback-of-a-distribution-by-a-diffeomorphism, lem-test-function-cutoffs-and-euclidean-localization, thm-dominated-convergence, def-countable-choice]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Miller and Schmid, Distributions and Analytic Continuation of Dirichlet Series, §3, (3.21)–(3.25), Lemma 4.19 and proof of Lemma 4.25"
      url: "https://arxiv.org/pdf/math/0403030v1"
---

## Statement

Assume Countable Choice. Let $T$ be a distribution on $\mathbb R\cup\{\infty\}$, using scalar distribution pullback in the coordinate $u=1/x$ at infinity. Suppose $T$ vanishes to order $k_0\in\mathbb Z$ at $0$ and to order $k_\infty\in\mathbb Z$ at infinity, and $k_0+k_\infty\ge1$. Put $K_\delta(s,x)=(\operatorname{sgn}x)^\delta|x|^{s-1}$ for $\delta\in\{0,1\}$. Choose an even $\chi\in C_c^\infty(\mathbb R)$ equal to one near zero. For $0<t<1$ set $\psi_t(x)=(1-\chi(x/t))\chi(tx)$. Then
$$M_\delta T(s):=\lim_{t\downarrow0}\langle T,K_\delta(s,\cdot)\psi_t\rangle$$
exists for $-k_0<\operatorname{Re}s<k_\infty$, is independent of $\chi$, and is holomorphic there. It has locally uniform polynomial growth on vertical lines. More precisely, for each closed strip $a\le\operatorname{Re}s\le b$ inside this open strip there are $C,d>0$ such that
$$|M_\delta T(s)|\le C(1+|s|)^d,$$
$$|M_\delta(T\psi_t)(s)-M_\delta T(s)|\le C(1+|s|)^d\bigl(t^{a+k_0}+t^{k_\infty-b}\bigr).$$
The same construction is local at either endpoint and applies if an order is infinite by using any finite order adequate for a specified compact substrip. It agrees with ordinary integration when the latter is absolutely convergent and with distributional pairing whenever the kernel is a smooth test density. In particular, it defines the canonical endpoint interpretation of the signed Mellin integral, without assigning a product of a singular function and an arbitrary distribution.

## Statement references

[Miller and Schmid, (3.21)–(3.25), Lemma4.19, and (4.34)–(4.36)](https://arxiv.org/pdf/math/0403030v1)

## Facts & Assumptions

**Given:** The stated distribution, integer orders and [[def-countable-choice|Countable Choice]]. Pairings use scalar distributions acting linearly on densities, with no complex conjugation.

[F1] [[def-gl3-distribution-vanishing-to-infinite-order-and-canonical-extension]] defines order $k\ge0$ by local bounded-coefficient normal forms and order $-q<0$ by the order-zero condition for $x^qT$.

[F2] [[lem-gl3-compact-flat-distribution-normal-forms]] gives, for compact support and $k\ge0$, $T=\sum_{j=0}^mD^j(x^{k+j}h_j)$ with bounded compactly supported $h_j$. Its localization and smooth-multiplication conclusions allow a cutoff equal to one near the endpoint.

[F3] [[lem-test-function-cutoffs-and-euclidean-localization]] gives endpoint cutoffs. [[def-distributional-derivative]] gives $\langle D^jR,\phi\rangle=(-1)^j\langle R,D^j\phi\rangle$.

[F4] [[def-pullback-of-a-distribution-by-a-diffeomorphism]] gives the reciprocal change of scalar coordinate. Its density Jacobian is $|u|^{-2}$.

[F5] [[thm-dominated-convergence]] permits the limits and differentiation of the absolutely integrable bounded-coefficient formulas below.

## Proof

**Given:** The stated data.

1.1 First localize to a compactly supported distribution $R$ of order $k\ge0$ at zero. Write it in the form of [F2]. On the punctured line, [F2, F3, F5, algebra]
$$D^jK_\delta(s,x)=(s-1)\cdots(s-j)(\operatorname{sgn}x)^{\delta+j}|x|^{s-j-1}.$$
Here the empty product is one. Thus formal integration by parts without a cutoff gives the absolutely convergent candidate
$$H_R(s)=\sum_{j=0}^m(-1)^j(s-1)\cdots(s-j)\int_{\mathbb R}h_j(x)(\operatorname{sgn}x)^{\delta+k}|x|^{s+k-1}\,dx,$$
for $\operatorname{Re}s>-k$. Each integral is bounded independently of $\operatorname{Im}s$ on every compact real interval inside that half-plane. Its complex difference quotients are dominated by a fixed multiple of $|x|^{a+k-1}(1+|\log|x||)$ near zero and a bounded function on the remaining compact support; these are integrable when $a>-k$. Therefore [F5] proves holomorphy, with derivative obtained under the integral. This also proves a polynomial vertical bound of degree at most $m$. [F2, F3, F5, algebra]

2.1 Perform the integration by parts with $1-\chi(x/t)$ present, which is an actual smooth test kernel on the support of $R$. The difference from step 1.1 is a sum of terms in which $j-l$ derivatives hit $K_\delta$ and $l$ derivatives hit $\chi(x/t)$, for $0\le l\le j$. They are bounded by a polynomial in $|s|$ times [F2, F3, step 1.1, algebra]
$$\int_{|x|\le At}|h_j(x)|\,t^{-l}|x|^{\operatorname{Re}s+k+l-1}\,dx\le C(1+|s|)^j t^{\operatorname{Re}s+k},$$
where for $l>0$ the cutoff derivative is supported in a fixed annulus $ct\le|x|\le At$, while for $l=0$ integrability follows from $\operatorname{Re}s+k>0$. Constants are uniform on closed real substrips. Consequently the regularized pairing converges to $H_R(s)$ with the displayed polynomially weighted error. Since the original cutoff pairing uses $R$ itself, this proves independence of its chosen normal form, and comparing two cutoffs proves cutoff independence. [F2, F3, step 1.1, algebra]

3.1 For order $k=-q<0$, put $S=x^qR$, of order zero by [F1]. On every test supported off zero, $R=x^{-q}S$. Therefore its regularized pairing equals the order-zero pairing of $S$ with $K_{\delta+q}(s-q,x)$ and the same cutoff. Steps 1.1–2.1 apply for $\operatorname{Re}s>q=-k$, with error $C(1+|s|)^d t^{\operatorname{Re}s-q}$. This argument also covers any component supported exactly at zero: it vanishes in every regularized off-zero pairing. Whenever the ordinary smooth density pairing is admissible it has the same value, because the kernel vanishes to enough order to annihilate such supported components, and the bounded-coefficient integration-by-parts formula agrees with that pairing. More explicitly, a distribution supported at zero has finite order, hence is a finite sum of delta derivatives, as follows. Fix a compact interval $K$ containing zero in its interior and a cutoff $\eta$ supported in its interior and equal to one near zero. Continuity on the tests supported in $K$, whose topology is defined by the increasing derivative seminorms, yields $C$ and a finite integer $M$ with $|\langle U,\varphi\rangle|\le C\max_{j\le M}\|\varphi^{(j)}\|_\infty$ for those tests: a continuity neighborhood contains a ball for finitely many seminorms, and scaling proves the bound. Any test has the same $U$-value as its product with $\eta$, by support at zero, so this is the needed local finite-order bound. If a test has zero Taylor coefficients through degree $M$, multiply the test by a cutoff at scale $t$. Taylor's formula bounds all its derivatives through order $M$ on that support by $O(t)$ after the product rule. The distributional finite-order bound therefore makes its value tend to zero, while support at zero leaves its value unchanged. Thus it depends only on the finite Taylor jet, which explicitly gives $\langle U,\varphi\rangle=\sum_{j=0}^M c_j\varphi^{(j)}(0)$ by subtracting $\eta(x)\sum_{j=0}^M\varphi^{(j)}(0)x^j/j!$, where $c_j=\langle U,\eta x^j/j!\rangle$. Thus $U=\sum_{j=0}^M(-1)^jc_j\delta_0^{(j)}$. If multiplication by $x^q$ makes this component order zero, only delta derivatives of order less than $q$ can remain; a nonzero delta derivative is not order zero, since its values on $\phi(x/t)$ scale as a nonpositive power of $t$, whereas every order-zero form in [F1] is $O(t)$ on these tests. A smooth kernel of the given Mellin order has all those jets zero. [F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 Use a fixed smooth partition to split $T$ into a piece supported near zero and a piece supported away from zero, whose support is compact in the infinity coordinate. Under $u=1/x$ the second Mellin density becomes [F3, F4, step 1.1, step 2.1, step 3.1, algebra]
$$(\operatorname{sgn}u)^\delta|u|^{-s-1}T(1/u)\,du.$$
This is the same local problem with Mellin parameter $-s$ and order $k_\infty$. Steps 1.1–3.1 therefore give the domain $\operatorname{Re}s<k_\infty$ and the error $C(1+|s|)^d t^{k_\infty-\operatorname{Re}s}$. The cutoff $\chi(tx)$ becomes $\chi(t/u)$; it is an admissible deletion of the infinity endpoint, since $1-\chi(1/v)$ extends smoothly at $v=0$ to a compactly supported function equal to one there. The overlap of the two pieces is a smooth kernel on a fixed compact annulus, paired with a finite-order distribution, and is entire with polynomial vertical growth by the derivative formula of step 1.1. Adding proves existence, the two-endpoint error and the vertical bound, without dependence on the fixed partition. [F3, F4, step 1.1, step 2.1, step 3.1, algebra]

5.1 Each local expression is holomorphic by step 1.1 or its negative-order shift and reciprocal version. Thus their sum is holomorphic on the asserted strip. Different choices of endpoint cutoffs have the same local limits by step 2.1, proving the global independence. For an infinite order choose a larger finite order than needed for the given compact real strip; on overlaps all choices give the same limit of actual cutoff pairings. Absolute integrability permits removing cutoffs by [F5]. For smooth test densities the preceding integration-by-parts calculation agrees with the defining distribution pairing, including the supported components treated in step 3.1. This proves every compatibility and completes the construction. [F1, F3, F5, step 1.1, step 2.1, step 3.1, step 4.1] ∎
