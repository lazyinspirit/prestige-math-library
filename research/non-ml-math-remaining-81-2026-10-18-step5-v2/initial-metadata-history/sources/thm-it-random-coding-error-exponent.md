---
id: thm-it-random-coding-error-exponent
kind: theorem
title: Gallager random-coding exponent lower bound
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [def-it-reliability-function, def-it-gallager-and-expurgated-exponent-functions, def-discrete-memoryless-channel, def-fixed-length-channel-code, def-fixed-length-channel-code-errors, lem-discrete-memoryless-channel-average-to-maximal-expurgation, thm-finite-jensen-inequality, def-convex-concave-and-midpoint-convex-functions, def-it-finite-mutual-information, def-discrete-memoryless-channel-information-capacity, lem-discrete-memoryless-channel-capacity-is-attained, def-real-power, thm-real-power-continuity-and-derivatives, thm-chain-rule, thm-logarithm-derivative-and-integral, thm-algebra-of-derivatives, thm-natural-logarithm-laws, cor-second-derivative-characterises-convexity, thm-real-power-laws, thm-monotonicity-from-the-derivative]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used; the random codebook ensemble is finite at each blocklength.
provenance:
  statement: literature-derived
  proof: ai-generated
proof_obligations:
  - Derive the Gallager moment bound from the ML error event, Jensen, and the DMC product law.
  - Convert the bound to the liminf average-error exponent and then expurgate for maximal error.
  - Establish positivity below capacity by differentiating the finite E0 sum at rho zero.
sources:
  references:
    - title: MIT 6.441 Information Theory, Lecture 11, Spring 2010
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/10b2f1e66d2d5b1240c92cf51d8b7b8a_MIT6_441S10_lec11.pdf
      locator: §§4–11, PDF pp. 4–12; complete random-coding bound calculation for a DMC.
    - title: MIT 6.441 Information Theory, Lecture 12, Spring 2010
      url: https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/107335d1797be9009a90467e27d1fd7a_MIT6_441S10_lec12.pdf
      locator: PDF pp. 1–4; expurgation, the error-exponent definition, and positivity below capacity.
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 22 §22.4*"
      url: https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf
      locator: Chapter 22, §22.4*, printed pp. 431–432; Gallager's random-coding exponent.
---

## Statement

For every finite DMC without an input-cost constraint or feedback and every $R>0$,
$$E^-_{\rm av}(R)\ge E_r(R),\qquad E^-_{\rm max}(R)\ge E_r(R),$$
where $E_r$ is the random-coding function in [[def-it-gallager-and-expurgated-exponent-functions]]. If $0<R<C(W)$, then $E_r(R)>0$. This is an achievability lower bound, not an exact general reliability formula.

## Facts & Assumptions

**Given:** A finite DMC $W$, rate $R>0$, the fixed-size sequence $M_n=\lceil e^{nR}\rceil$, and the error-exponent definitions.

[F1] [[def-discrete-memoryless-channel]] and [[def-fixed-length-channel-code]] and [[def-fixed-length-channel-code-errors]]: a length-$n$ code uses the product channel, a deterministic encoder/decoder, and uniform-message average and maximal errors.

[F2] [[def-it-gallager-and-expurgated-exponent-functions]]: $E_0(\rho,P)=-\ln\sum_y(\sum_xP(x)W(y\mid x)^{1/(1+\rho)})^{1+\rho}$ for $\rho\ge0$, and $E_r(R)=\sup_{0\le\rho\le1}(\max_PE_0(\rho,P)-\rho R)$.

[F3] [[thm-finite-jensen-inequality]] and [[def-convex-concave-and-midpoint-convex-functions]]: a convex function of a finite probability-weighted mean is at most the weighted mean of its values; a function is concave exactly when its negative is convex.

[F4] [[lem-discrete-memoryless-channel-average-to-maximal-expurgation]]: a code of average error $a$ has a subcode with at least half its messages and maximal error at most $2a$.

[F5] [[def-it-finite-mutual-information]] and [[def-discrete-memoryless-channel-information-capacity]]: $I(P,W)$ is the finite joint/product KL sum in nats, and $C(W)=\max_PI(P,W)$.

[F6] [[lem-discrete-memoryless-channel-capacity-is-attained]]: some input law $P^*$ satisfies $I(P^*,W)=C(W)$.

[F7] [[thm-logarithm-derivative-and-integral]] and [[thm-algebra-of-derivatives]]: logarithmic differentiation and the product rule apply on positive arguments.

[F8] [[def-real-power]], [[thm-real-power-continuity-and-derivatives]], and [[thm-chain-rule]]: for fixed $w>0$, $w^a=\exp(a\ln w)$ and the chain rule differentiates powers with a variable real exponent; the convention $0^a=0$ for $a>0$ makes a zero-transition term identically zero near $\rho=0$.

[F9] [[thm-natural-logarithm-laws]]: the natural logarithm is continuous on $(0,\infty)$.

[F10] [[cor-second-derivative-characterises-convexity]]: a twice-differentiable function on an open interval is convex when its second derivative is nonnegative.

[F11] [[thm-real-power-laws]] and [[thm-monotonicity-from-the-derivative]]: positive-base powers satisfy $(t^a)^b=t^{ab}$, and a positive derivative makes a continuous function increasing on an interval.

## Proof

1.1 Fix $0<\rho\le1$, an input law $P$, and an $M$-word codebook drawn independently from $P^n$. Use maximum-likelihood decoding with the lowest-index tie rule. If message $m$ is sent and $y^n$ is received with $W^n(y^n\mid x_m^n)>0$, an error implies some competitor has likelihood at least the true likelihood. Hence its error indicator is at most $\left(\sum_{j\ne m}\left[\frac{W^n(y^n\mid x_j^n)}{W^n(y^n\mid x_m^n)}\right]^{1/(1+\rho)}\right)^\rho,$ which is at least one on every error event; outputs of zero true likelihood carry no channel mass. [F1, given, algebra]

1.2 For fixed $P$, write $A_y(\rho)=\sum_xP(x)W(y\mid x)^{1/(1+\rho)}$ and $S(\rho)=\sum_yA_y(\rho)^{1+\rho}$. If $W(y\mid x)>0$, [F7]–[F8] and the chain rule give $\left.\frac{d}{d\rho}W(y\mid x)^{1/(1+\rho)}\right|_{\rho=0}=-W(y\mid x)\ln W(y\mid x)$; if $W(y\mid x)=0$, that term is identically zero. Thus, for $q_y=A_y(0)=(PW)(y)>0$, $$A_y'(0)=-\sum_{x:W(y\mid x)>0}P(x)W(y\mid x)\ln W(y\mid x).$$ On a neighborhood of $0$ where $A_y(\rho)>0$, write $A_y(\rho)^{1+\rho}=\exp((1+\rho)\ln A_y(\rho))$. By [F7]–[F8] and the product and chain rules, its derivative at zero is $q_y\ln q_y+A_y'(0)$. If $q_y=0$, every $P(x)W(y\mid x)=0$, so $A_y(\rho)=0$ for all $\rho\ge0$ and its outer term vanishes identically. Summing the finite terms gives $$S'(0)=\sum_{y:q_y>0}q_y\ln q_y-\sum_{x,y:P(x)W(y\mid x)>0}P(x)W(y\mid x)\ln W(y\mid x)=-I(P,W),$$ because [F5] expands $I(P,W)=\sum_{x,y:PW>0}P(x)W(y\mid x)\ln\frac{W(y\mid x)}{q_y}$. Since $S(0)=1$ and $E_0(\rho,P)=-\ln S(\rho)$, the right derivative is $\partial_\rho E_0(0,P)=I(P,W)$. [F2, F5, F7, F8, given]

1.3 Fix $0<\rho\le1$. By [F8], the function $h(t)=-t^\rho$ on $(0,\infty)$ has $h''(t)=\rho(1-\rho)t^{\rho-2}\ge0$, so [F10] makes it convex there (for $\rho=1$ it is affine). The positive derivative $\rho t^{\rho-1}$ and [F11] make $t^\rho$ increasing. Given $\eta>0$, put $\delta=\eta^{1/\rho}$; if $0<t<\delta$, then $0<t^\rho<\delta^\rho=\eta$ by [F11]. Thus $t^\rho$ extends continuously to zero with value zero. For nonnegative $x,y$ and a weight $\lambda\in[0,1]$, apply the convexity inequality for $h$ to $x+u,y+u>0$ and let $u\downarrow0$; continuity extends it to $[0,\infty)$. Applying finite convex Jensen [F3] to this $h$ and the values of any finite nonnegative random variable $Z$ gives $-(\mathbb EZ)^\rho\le-\mathbb E Z^\rho$, or $\mathbb E Z^\rho\le(\mathbb EZ)^\rho$. This includes $\mathbb EZ=0$ and $\rho=1$ without a zero-to-zero power convention. [F3, F8, F10, F11, given, algebra]

2.1 Conditional on $x_m^n,y^n$, the power Jensen inequality from step 1.3 bounds the expected $\rho$-power by the $\rho$-power of its mean. Independence of each competitor gives that mean as $(M-1)\frac{A_n(y^n)}{W^n(y^n\mid x_m^n)^{1/(1+\rho)}},\qquad A_n(y^n):=\sum_{x^n}P^n(x^n)W^n(y^n\mid x^n)^{1/(1+\rho)}.$ Multiplication by the true likelihood changes its power to $1-\rho/(1+\rho)=1/(1+\rho)$. Averaging over the transmitted word and summing over outputs therefore bounds ensemble average error by $(M-1)^\rho\sum_{y^n}A_n(y^n)^{1+\rho}.$ [F1, F3, step 1.1, step 1.3, algebra]

3.1 The product law in [F1] makes $A_n(y^n)=\prod_{i=1}^n\sum_xP(x)W(y_i\mid x)^{1/(1+\rho)}$. Thus the sum in step 2.1 factors into the $n$th power of the single-letter sum defining $E_0(\rho,P)$ in [F2]. Some deterministic codebook has average error at most its ensemble mean, so for each $n$ a code exists with $\epsilon_{\rm av}\le\exp\{-n[E_0(\rho,P)-\rho n^{-1}\ln(M-1)]\}.$ [F1, F2, step 2.1, algebra]

4.1 With $M_n=\lceil e^{nR}\rceil$, one has $n^{-1}\ln(M_n-1)\to R$. Taking the liminf exponent in step 3.1 and optimizing over $P$ and $0<\rho\le1$ gives the corresponding positive-parameter supremum. For a capacity-achieving $P^*$ from [F6], each $A_y(\rho)$ tends to $q_y=(P^*W)(y)$ as $\rho\downarrow0$. If $q_y>0$, then $A_y(\rho)^{1+\rho}=\exp((1+\rho)\ln A_y(\rho))\to q_y$; if $q_y=0$, all $P^*(x)W(y\mid x)=0$ and that term is identically zero. Hence $S(\rho)\to\sum_yq_y=1$ and $E_0(\rho,P^*)=-\ln S(\rho)\to0$ by [F9]. Since $E_0(\rho)\ge E_0(\rho,P^*)$, the positive-parameter supremum is at least $\lim_{\rho\downarrow0}(E_0(\rho,P^*)-\rho R)=0$. The added endpoint $\rho=0$ has value zero, so it does not change the supremum, which is $E_r(R)$. [F2, F6, F8, F9, step 3.1]

5.1 Apply the same bound at size $2M_n$ and then [F4]. The retained code has at least $M_n$ messages, so selecting exactly $M_n$ messages leaves maximal error at most twice the old average error. The factor two and the rate difference $n^{-1}\ln(2M_n)-R\to0$ do not change the liminf exponent. Hence $E^-_{\rm max}(R)\ge E_r(R)$. [F1, F4, step 4.1, algebra]

6.1 If $R<C(W)$, choose a maximizing $P^*$ by [F6]. Step 1.2 gives $E_0(\rho,P^*)-\rho R=\rho(C(W)-R)+o(\rho)>0$ for sufficiently small $\rho>0$. The supremum defining $E_r(R)$ is therefore positive. [F2, F5, step 1.2] ∎
