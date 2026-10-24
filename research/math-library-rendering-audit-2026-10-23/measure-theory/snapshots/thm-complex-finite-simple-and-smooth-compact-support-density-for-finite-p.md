---
id: thm-complex-finite-simple-and-smooth-compact-support-density-for-finite-p
kind: theorem
title: "Complex finite-simple and smooth compact-support density for finite p"
status: published
origin: pipeline
landmark: false
deps: [thm-complex-holder-minkowski-and-the-quotient-norm, thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p, thm-c-c-infinity-rn-is-dense-in-l-p-of-rn, thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "Approximate each real component and prove both directions of the endpoint closure."
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Problem 10.17, p.293; Theorems 10.16 and 10.20, pp.294 and 298; endpoint paragraph after 10.16."
---

## Statement

On every measure space, complex finite simple functions with finite-measure nonzero sets are dense in $L^p(\mu;\mathbb C)$ for $1\le p<\infty$. Assuming countable choice, $C_c^\infty(\mathbb R^n;\mathbb C)$, and consequently $C_c(\mathbb R^n;\mathbb C)$, is dense in Euclidean Lebesgue $L^p$ for $n\ge1$ and the same finite exponents. The $L^\infty$ closure of complex $C_c$ consists exactly of classes with a complex $C_0$ representative. Neither assertion claims density of finite-measure-supported tests or smooth functions in all of $L^\infty$.

## Facts & Assumptions

**Given:** A complex class $f=u+iv$, an error tolerance $\eta>0$, and $1\le p<\infty$ for the finite-p assertions; countable choice for smooth Euclidean density.

[F1] Component projections contract the norm and recombination has norm at most the sum of component norms ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F2] On arbitrary measure spaces real finite simple functions of finite-measure support are dense for finite p ([[thm-simple-functions-with-finite-measure-support-are-dense-in-l-p-for-finite-p]]).

[F3] Under countable choice real smooth compactly supported functions are dense in Euclidean finite-p spaces ([[thm-c-c-infinity-rn-is-dense-in-l-p-of-rn]]).

[F4] The real essential-norm closure of Cc is precisely the classes represented by C0 ([[thm-l-infinity-closure-of-c-c-rn-is-c-zero-rn]]).

[F5] Countable choice is the explicit additional hypothesis for the real smooth-density supplier ([[def-countable-choice]]).

## Proof

**Proof technique:** Approximate each real component and prove both directions of the endpoint closure.

1.1 By F1, $u,v\in L^p(\mu;\mathbb R)$. F2 supplies real simple $a,b$ with $\|u-a\|_p<\eta/2$ and $\|v-b\|_p<\eta/2$, each with finite-measure nonzero set. The finite intersections of their fibers form a finite measurable partition on which $s=a+ib$ is constant, and $\{s\ne0\}\subseteq\{a\ne0\}\cup\{b\ne0\}$ has finite measure. F1 gives $\|f-s\|_p<\eta$. This uses only two approximation choices for the specified tolerance, not a simultaneous choice function. [F1, F2, given]

1.2 In Euclidean Lebesgue space, under the countable-choice hypothesis F5, apply F3 to $u,v$ with errors $\eta/2$ to obtain $a,b\in C_c^\infty(\mathbb R^n;\mathbb R)$. Their sum $a+ib$ is smooth componentwise and is supported in the union of the two compact supports, hence is complex $C_c^\infty$. F1 again bounds its error by $\eta$. The inclusion $C_c^\infty\subseteq C_c$ proves continuous compact-support density as well. [F1, F3, F5]

1.3 If a complex L-infinity class $f$ is in the closure of complex $C_c$, approximating $f$ to any positive tolerance and projecting its approximants gives, by F1, real $C_c$ approximations to both component classes. F4 therefore supplies $U,V\in C_0(\mathbb R^n;\mathbb R)$ representing them. The complex function $U+iV$ represents $f$ and vanishes at infinity: outside the union of two compact sets where the separate component errors are below $\eta/2$, its modulus is below $\eta$. [F1, F4]

2.1 Conversely, if $f$ has a $C_0$ representative $U+iV$, F4 supplies real $C_c$ approximants to $U,V$ with essential-norm errors below $\eta/2$. Their complex sum lies in $C_c$ and has error below $\eta$ by F1. Thus precisely the stated classes form the closure. The constant-one class is excluded: any continuous representative equal to one a.e. must equal one everywhere, since a nonzero continuous discrepancy persists on an open ball of positive Lebesgue measure; that constant does not vanish at infinity. The finite-p assertions therefore have no such infinity extension. [F1, F4, step 1.3] ∎
