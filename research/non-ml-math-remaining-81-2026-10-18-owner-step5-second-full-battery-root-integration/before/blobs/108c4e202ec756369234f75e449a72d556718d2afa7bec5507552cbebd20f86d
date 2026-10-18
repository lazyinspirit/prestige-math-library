---
id: ex-it-finite-sanov-bernoulli-tail
kind: example
title: "A finite Bernoulli large-deviation tail"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-it-finite-alphabet-product-law
  - lem-it-finite-product-law-is-iid
  - def-it-empirical-type-and-type-class
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - lem-it-number-of-n-types-polynomial-bound
  - lem-it-type-class-probability-bounds
  - lem-it-finite-relative-entropy-continuity-on-simplex
  - thm-it-finite-alphabet-sanov-theorem
  - thm-hoeffding-independent-bounded-sums
  - def-axiom-of-choice
  - thm-logarithm-derivative-and-integral
  - cor-mean-value-theorem
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Assume AC only for the imported Hoeffding comparison in step 4.1; the type and Sanov calculations are choice-free."
verification:
  precheck: pass
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, second edition, Chapter 11"
      url: "https://sgfin.github.io/files/notes/Cover_and_Thomas_ch11_info_and_stats.pdf"
      locator: "Theorem 11.4.1 and Example 11.5.2 (Coins), printed pp. 362–365 (complete Chapter 11 PDF pp. 15–18)"
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, author-hosted book draft"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
      locator: "Theorem 15.13 and Exercise III.23, finite-alphabet Sanov theorem, printed pp. 307–308 and 334–335"
---

## Example

For $p\in[0,1)$, let $b_p$ be the binary probability vector $b_p(1)=p$, $b_p(0)=1-p$. On $\{0,1\}^n$ use the product law $b_p^{\otimes n}$ from [[def-it-finite-alphabet-product-law]], and let $X_i(x^n)=x_i$ be its coordinate maps; by [[lem-it-finite-product-law-is-iid]] these are independent Bernoulli$(p)$ variables. Let $a\in(p,1]$, define $\widehat p_n=n^{-1}\sum_{i=1}^nX_i$, $q_n=\lceil na\rceil/n$, and
$$d(q\|p):=q\ln\frac qp+(1-q)\ln\frac{1-q}{1-p},$$
with zero-mass summands omitted, $d(0\|0):=0$, and $d(q\|0)=+\infty$ for $q>0$. Then
$$(n+1)^{-1}e^{-nd(q_n\|p)}\le b_p^{\otimes n}(\widehat p_n\ge a)\le(n+1)e^{-nd(a\|p)}.$$
Consequently
$$\lim_{n\to\infty}\frac1n\ln b_p^{\otimes n}(\widehat p_n\ge a)=-d(a\|p),$$
including the value $-\infty$ when $p=0$. For $p=1/2$, $a=3/4$, and $n=4$, the exact tail is $5/16$; under AC, Hoeffding also gives the bound $e^{-1/2}$ for this same event.

## Facts & Assumptions

**Given:** A finite Bernoulli product model with parameter $p\in[0,1)$, threshold $a\in(p,1]$, and integer $n\ge1$. The Hoeffding comparison assumes AC.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. The example invokes this axiom only to apply the Hoeffding supplier in step 4.1.

[F1] [[def-it-empirical-type-and-type-class]]: the empirical type of a binary word is its fraction of ones, and its type class consists of words with that fraction.

[F2] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: finite relative entropy uses natural logarithms, $0\ln0=0$, and equals $+\infty$ if positive mass is placed where the reference law is zero.

[F3] [[lem-it-type-class-probability-bounds]]: for each binary $n$-type $q$, $(n+1)^{-1}e^{-nd(q\|p)}\le\mathbb P(\widehat p_n=q)\le e^{-nd(q\|p)}$.

[F4] [[lem-it-finite-relative-entropy-continuity-on-simplex]]: when $0<p<1$, $q\mapsto d(q\|p)$ is continuous on $[0,1]$.

[F5] [[thm-it-finite-alphabet-sanov-theorem]]: on the support simplex, the Sanov liminf uses the infimum over relative interior and the limsup uses the infimum over relative closure; equality of these infima gives the limit.

[F6] [[thm-hoeffding-independent-bounded-sums]]: under AC, for independent integrable $X_i\in[a_i,b_i]$ and $t>0$, the one-sided bound is $\mathbb P(\sum_i(X_i-\mathbb EX_i)\ge t)\le\exp(-2t^2/\sum_i(b_i-a_i)^2)$ when the denominator is positive.

[F7] [[thm-logarithm-derivative-and-integral]]: for $x>0$, $\ln'(x)=1/x$.

[F8] [[cor-mean-value-theorem]]: if a real function is continuous on a closed interval and differentiable on its interior, its increment equals its derivative at some interior point times the interval length.

[F9] [[lem-it-number-of-n-types-polynomial-bound]]: on a binary alphabet there are at most $n+1$ attainable $n$-types.

[F10] [[lem-it-finite-product-law-is-iid]]: the sample law on $\{0,1\}^n$ is a probability law and its coordinate variables are independent with Bernoulli$(p)$ marginal law.

## Verification

**Given:** The stated Bernoulli model and thresholds.

1.1 If $p=0$, every coordinate equals $0$ almost surely by [F10], so the tail is zero and $d(q_n\|p)=d(a\|p)=+\infty$; both finite bounds have right-hand sides zero. If $0<p<1$, the tail is the union of binary type classes with $q\ge a$, and the attainable type $q_n=\lceil na\rceil/n$ belongs to the event, so [F3] gives the lower bound. [F1, F2, F3, F10, given, algebra]

1.2 Suppose $0<p<1$ and $0<a<1$. For every $x\in(p,1)$, [F7] gives $\frac{d}{dx}d(x\|p)=\ln\frac{x(1-p)}{p(1-x)}>0$. For any $a\le u<v<1$, the finite logarithmic formula is continuous on $[u,v]$ and differentiable on $(u,v)$, so [F8] gives $d(v\|p)>d(u\|p)$. Thus $d(\cdot\|p)$ is increasing on $[a,1)$, and continuity [F4] extends $d(q\|p)\ge d(a\|p)$ to $q=1$. [F4, F7, F8, given, algebra]

2.1 For $0<p<1$ and $0<a<1$, there are at most $n+1$ binary types by [F9]. Each tail type has probability at most $e^{-nd(q\|p)}$ by [F3], and step 1.2 gives $d(q\|p)\ge d(a\|p)$, so summing the types proves the finite upper bound. [F3, F9, step 1.2, algebra]

2.2 If $0<p<a<1$, then for $\Gamma=[a,1]$ the relative interior in $[0,1]$ is $(a,1]$ and the closure is $[a,1]$. By step 1.2 and continuity [F4], both divergence infima equal $d(a\|p)$, so [F5] gives the stated limit. If $a=1$ and $0<p<1$, the event is exactly all ones and has probability $p^n=e^{-nd(1\|p)}$, giving the limit directly. The case $p=0$ is in step 1.1. [F4, F5, step 1.1, step 1.2, algebra]

3.1 For $0<p<1$ and $0<a<1$, summing the type upper bounds from step 2.1 yields the displayed finite upper bound; when $a=1$ and $0<p<1$, step 2.2 gives the exact value $p^n\le(n+1)p^n$, while $p=0$ is covered in step 1.1. [step 1.1, step 2.1, step 2.2, algebra]

4.1 For $p=1/2$, $a=3/4$, and $n=4$, the event contains four words with three ones and one with four, so its probability is $5/16$. By [F10], the four coordinates are independent and take values in $[0,1]$, hence are integrable. Thus [F6] applies with $\sum_i(X_i-\mathbb EX_i)\ge1$ on the event and $\sum_i(b_i-a_i)^2=4$ for bounds $a_i=0,b_i=1$. Its exponent is $-2(1)^2/4=-1/2$, giving $b_{1/2}^{\otimes4}(\widehat p_4\ge3/4)\le e^{-1/2}$. This comparison uses [A1]; the finite type and Sanov calculations in steps 1.1–3.1 are choice-free. [A1, F1, F6, F10, given, algebra] ∎

