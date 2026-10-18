---
id: ex-bernoulli-aep-and-typical-set-count
title: "Bernoulli information density and exact typical-set counts"
kind: example
status: draft
dependency_level: 6
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-finite-alphabet-iid-source
  - def-finite-law-self-information-and-entropy
  - def-finite-source-information-density-and-typical-set
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - cor-aep-typical-set-probability-and-size-bounds
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 3, §§3.1–3.3"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
    - title: "MIT OpenCourseWare 6.441 Information Theory, Spring 2010, Lecture 3: AEP and typical sets"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/d58c259c32b5d6ccd38548141239d52e_MIT6_441S10_lec03.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Let $X_i$ be IID Bernoulli$(p)$ on $\{0,1\}$, with natural logarithms and
entropy
$$h(p)=-p\ln p-(1-p)\ln(1-p),$$
where $0\ln0=0$. For $x^n\in\{0,1\}^n$, let
$k(x^n)=\sum_{i=1}^nx_i$ be its number of ones. If $0<p<1$ and $p\ne1/2$, put
$\eta=\varepsilon/|\ln((1-p)/p)|$. Then
$$T_n(\varepsilon)=\{x^n:|k(x^n)/n-p|\le\eta\},\qquad |T_n(\varepsilon)|=\sum_{k=\max(0,\lceil n(p-\eta)\rceil)}^{\min(n,\lfloor n(p+\eta)\rfloor)}\binom nk.$$
Its probability and size also satisfy
the bounds of [[cor-aep-typical-set-probability-and-size-bounds]] with
$H=h(p)$ and $V=p(1-p)(\ln((1-p)/p))^2$ for $0<p<1$, and $V=0$ at
$p=0$ or $p=1$. At $p=1/2$, every binary word is
typical for every $\varepsilon>0$ and $|T_n|=2^n$. At $p=0$ or $p=1$, the
typical set is the single supported word and $|T_n|=1$.

For example, at $p=1/4$, $n=4$, and $\varepsilon=(\ln3)/4$, we have
$\eta=1/4$, so the typical words have zero, one, or two ones. Thus
$|T_4|=1+4+6=11$ and $\mathbb P(X^4\in T_4)=243/256$.

## Facts & Assumptions

**Given:** The Bernoulli source and typical-set convention in the Example.

[F1] [[def-finite-law-self-information-and-entropy]]: The surprisal variance is $V(p)=\sum_{a\in A_+}p(a)(\imath_p(a)-H(p))^2$.

[F2] [[def-finite-law-self-information-and-entropy]]: On positive support, self-information is $\imath_p(a)=-\ln p(a)$.

[F3] [[def-finite-source-information-density-and-typical-set]]: $T_n(\varepsilon)$ is the positive-probability set where $|I_n-H(p)|\le\varepsilon$.

[F4] [[def-finite-alphabet-iid-source]]: The Bernoulli coordinates are IID with product block law $p^n$.

[F5] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(p)=-\sum_{a:p(a)>0}p(a)\ln p(a)$ with zero terms set to zero, in natural units.

[F6] [[cor-aep-typical-set-probability-and-size-bounds]]: The typical-set tail probability is at most $V(p)/(n\varepsilon^2)$, and its cardinality is bounded above and below by the stated entropy exponents.

## Verification

**Given:** $p\in[0,1]$, $n\ge1$, and $\varepsilon>0$.

1.1 Suppose $0<p<1$ and a word has $k$ ones, with $q=k/n$. Its block probability is $p^k(1-p)^{n-k}$, so $I_n= -q\ln p-(1-q)\ln(1-p)$. Subtracting $h(p)$ gives $I_n-h(p)=(q-p)\ln((1-p)/p)$. [given, F2, F4, F5, algebra]

1.2 If $p=1/2$, each supported word has probability $2^{-n}$, so $I_n=h(p)=\ln2$ and all $2^n$ words are typical. If $p=0$ or $p=1$, the support consists of one symbol, its surprisal and entropy are zero, and the only supported length-$n$ word is typical. [F2, F3, F5, algebra]

2.1 If additionally $p\ne1/2$, the typicality condition in [F3] is exactly $|q-p|\le\eta$. There are $\binom nk$ words of weight $k$, yielding the displayed sum with endpoints clipped to $0\le k\le n$. For the stated $p=1/4,n=4$ check, the allowed weights are $k=0,1,2$, so the count is $1+4+6=11$ and the probability is $\frac{81+108+54}{256}=\frac{243}{256}$. [F3, step 1.1, algebra]

3.1 For $0<p<1$, the one-letter surprisal takes two values whose difference is $\ln((1-p)/p)$. Its variance is $p(1-p)(\ln((1-p)/p))^2$: writing the values as $a,b$, their mean is $pa+(1-p)b$, and the centered-square sum is $p(1-p)^2(a-b)^2+(1-p)p^2(a-b)^2=p(1-p)(a-b)^2$. At $p=0$ or $p=1$, the surprisal is zero on its singleton support, so [F1] gives $V=0$. Substituting these variances and $h(p)$ into [F6] gives the claimed quantitative probability and cardinality bounds. [F1, F2, F5, F6, step 1.1, step 1.2, algebra] ∎
