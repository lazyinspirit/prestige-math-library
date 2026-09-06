---
id: lem-local-logarithmic-derivative-zeta
kind: lemma
title: "A local formula for the logarithmic derivative of zeta"
status: draft
origin: pipeline
deps: [def-riemann-zeta-zero-counting, thm-hadamard-product-for-riemann-xi, cor-zeta-zero-count-unit-interval, thm-trivial-zeros-and-critical-strip, def-riemann-xi-function, thm-stirling-formula-gamma, thm-von-mangoldt-logarithmic-derivative-zeta]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, Lemma 10.4"
      url: "https://kskedlaya.org/ant/chapter-10.html"
    - title: "Nick Andersen, Analytic Number Theory, Lemma 11.1"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

Uniformly for $-1\le\sigma\le2$ and $s=\sigma+it\ne1$ whose ordinate is not
that of a nontrivial zero,
$$\frac{\zeta'}\zeta(s)=-\frac1{s-1}+\sum_{\rho:\,|t-\Im\rho|<1}\frac1{s-\rho}+O(\log(|t|+2)),$$
where zeros occur with multiplicity. For $|t|\ge2$ the pole term is absorbed
into the error, giving the usual large-height local formula.

## Facts & Assumptions

[L1] For $T\ge0$, the number of nontrivial zeros with ordinates in $[T,T+1]$
is $O(\log(T+2))$, counted with multiplicity
([[cor-zeta-zero-count-unit-interval]]).

[L2] Nontrivial zeros occur in conjugate pairs
([[thm-trivial-zeros-and-critical-strip]]).

## Proof

**Given:** $-1\le\sigma\le2$, $s\ne1$, and $t$ away from the zero ordinates.

1.1 Put $s_0=2+it$. Logarithmic differentiation of the Hadamard product and subtraction at $s_0$ give $$\frac{\xi'}{\xi}(s)-\frac{\xi'}{\xi}(s_0)=\sum_\rho\left(\frac1{s-\rho}-\frac1{s_0-\rho}\right).$$ The constants and genus-one correction terms cancel; the difference series converges absolutely, since its terms are $O_s(|\rho|^{-2})$ for large $|\rho|$. [given, algebra]

2.1 For $|t-\Im\rho|\ge1$, each difference has absolute value at most $3/|t-\Im\rho|^2$. By [L1] and [L2], grouping into the bands $k\le|t-\Im\rho|<k+1$ bounds their total by $$C\sum_{k\ge1}\frac{\log(|t|+k+3)}{k^2}=O(\log(|t|+2)).$$ Here $\log(|t|+k+3)\le\log(|t|+2)+\log(k+3)$, and both resulting weighted series converge. For the remaining zeros, $|s_0-\rho|\ge1$, so the sum of their subtracted terms is also $O(\log(|t|+2))$ by [L1] and [L2]. Thus $$\frac{\xi'}{\xi}(s)=\sum_{|t-\Im\rho|<1}\frac1{s-\rho}+\frac{\xi'}{\xi}(s_0)+O(\log(|t|+2)).$$ [L1, L2, step 1.1, algebra]

3.1 By [[def-riemann-xi-function]] and the Gamma recurrence, $$\xi(s)=(s-1)\pi^{-s/2}\Gamma(1+s/2)\zeta(s).$$ The Gamma factor has argument with real part at least $1/2$. [[thm-stirling-formula-gamma]], differentiated using Cauchy's estimate on disks of radius proportional to the argument's modulus in a slightly larger sector, gives $\Gamma'(z)/\Gamma(z)=\operatorname{Log}z+O(1/|z|)$ there for large $|z|$; compact subsets of this half-plane supply the remaining bound. Also [[thm-von-mangoldt-logarithmic-derivative-zeta]] gives $|\zeta'/\zeta(2+it)|\le\sum_{n\ge2}(\log n)n^{-2}<\infty$. Hence $\xi'/\xi(s_0)=O(\log(|t|+2))$. Substituting the displayed xi identity into step 2.1 leaves the pole term $-1/(s-1)$ and a Gamma logarithmic derivative of size $O(\log(|t|+2))$, proving the stated uniform formula even at bounded ordinates. [step 2.1, algebra] ∎
