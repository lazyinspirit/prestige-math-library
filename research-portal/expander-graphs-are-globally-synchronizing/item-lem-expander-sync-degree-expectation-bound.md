---
title: Expected degree-count bound and logarithmic factorial estimate
status: draft
research_item: lem-expander-sync-degree-expectation-bound
dependency_level: 8
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 37, proof of Proposition 6.9, first estimates
      statement: The proof bounds the expected number of degree-k vertices using the
        binomial mass, a factorial estimate, and a shifted rate-function
        expression.
      hypotheses: The proof uses p=gamma log n/n and k=delta log n with delta
        positive; its shifted-root application uses the parameters of
        Proposition 6.9.
      reading_limits: The supplied article text at the cited passage was inspected for
        attribution. The article is not used as proof of this item.
---

PDF p. 37: ` Proof of Proposition 6.9, first estimates `

## Prerequisites

- [def-expander-sync-degree-counts](item-def-expander-sync-degree-counts)
- [def-expander-sync-rate-function](item-def-expander-sync-rate-function)
- [def-expander-sync-shifted-rate-roots](item-def-expander-sync-shifted-rate-roots)
- [lem-expander-sync-elementary-degree-estimates](item-lem-expander-sync-elementary-degree-estimates)
- [prop-expander-prereq-binomial-exponential-envelope](item-prop-expander-prereq-binomial-exponential-envelope)
- [prop-expander-prereq-degree-count-first-moment](item-prop-expander-prereq-degree-count-first-moment)
- [math:lem-binomial-count-law](https://alphabetamath.cc/item/lem-binomial-count-law)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:thm-exponential-addition-formula](https://alphabetamath.cc/item/thm-exponential-addition-formula)
- [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing)
- [math:def-real-power](https://alphabetamath.cc/item/def-real-power)


## Statement

Let $n\ge2$ and $1\le k\le n-1$ be integers, let $\gamma>0$, and suppose $p=\gamma\log n/n$ satisfies $0<p<1$. In the random simple graph $G(n,p)$, each possible edge occurs independently with probability $p$; let $X_k$ count vertices incident to exactly $k$ edges. Then

$$\mathbb E X_k=n\binom{n-1}{k}p^k(1-p)^{n-k-1}\le n^{1-\gamma}\frac{(\gamma\log n)^k}{k!}e^{2pk}.$$

Put $L_k=(\log n)^k/k!$ and $\delta=k/\log n>0$. Then

$$\log L_k\le(\delta-\delta\log\delta)\log n$$

and

$$\mathbb E X_k\le\exp\left((1-\gamma+\delta-\delta\log\delta+\delta\log\gamma)\log n+2pk\right).$$

For $c>-1$ let $h(c)=(1+c)\log(1+c)-c$. If $\delta=\gamma(1+c+s)$ with $1+c+s>0$, the exponent is $(1-\gamma h(c+s))\log n+2pk$. In particular, if $0<\varepsilon<1$, $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, and $c^\pm=c^\pm(\gamma,\varepsilon)$ are the shifted roots defined by $\gamma h(c^- -\varepsilon)=\gamma h(c^+ +\varepsilon)=1+\varepsilon$, then the respective choices $\delta=\gamma(1+c^- -\varepsilon)$ and $\delta=\gamma(1+c^+ +\varepsilon)$ give $\mathbb E X_k\le\exp(-\varepsilon\log n+2pk)$ whenever the chosen $\delta\log n$ is an integer in $[1,n-1]$.

## Statement references

[def-expander-sync-degree-counts](item-def-expander-sync-degree-counts)

[def-expander-sync-rate-function](item-def-expander-sync-rate-function)

[def-expander-sync-shifted-rate-roots](item-def-expander-sync-shifted-rate-roots)

[math:def-real-power](https://alphabetamath.cc/item/def-real-power)

## Facts & Assumptions

[F1] The degree-count definition specifies $G(n,p)$, its independent edge indicators, and $X_k$ as the number of vertices of degree $k$ ([def-expander-sync-degree-counts](item-def-expander-sync-degree-counts)).

[F2] For identically distributed integer-valued variables, the expectation of the number equal to $k$ is $n$ times their common mass at $k$ ([prop-expander-prereq-degree-count-first-moment](item-prop-expander-prereq-degree-count-first-moment)). A sum of $N$ independent Bernoulli$(p)$ variables has mass $\binom Nk p^k(1-p)^{N-k}$ at $k$ ([math:lem-binomial-count-law](https://alphabetamath.cc/item/lem-binomial-count-law)).

[F3] For $1\le k\le N$ and $0<p<1$, the binomial envelope is $(Np)^k e^{-p(N-k)}/k!$ ([prop-expander-prereq-binomial-exponential-envelope](item-prop-expander-prereq-binomial-exponential-envelope)). For positive integer $k$, $k!\ge(k/e)^k$ ([lem-expander-sync-elementary-degree-estimates](item-lem-expander-sync-elementary-degree-estimates)).

[F4] The natural logarithm turns positive products and powers into sums and scalar multiples; the exponential is increasing and turns sums into products ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws), [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing), [math:thm-exponential-addition-formula](https://alphabetamath.cc/item/thm-exponential-addition-formula)). For $a>0$ and real $x$, $a^x=\exp(x\log a)$ ([math:def-real-power](https://alphabetamath.cc/item/def-real-power)).

[F5] The rate function is $h(t)=(1+t)\log(1+t)-t$ for $t>-1$ ([def-expander-sync-rate-function](item-def-expander-sync-rate-function)). Under the stated shifted-root parameter hypotheses, the two roots have positive logarithm arguments and satisfy the displayed equations ([def-expander-sync-shifted-rate-roots](item-def-expander-sync-shifted-rate-roots)).

## Proof

**Given:** The integers, parameters, graph and notation in the Statement.

**Goal:** Establish the expectation identity and bounds, including the conditional shifted-rate specialization.

1.1 Each vertex has $n-1$ possible incident edges. By their independence and common probability, its degree has the binomial law with parameters $n-1,p$; the degree laws are identical. Applying [F2] gives the stated exact expectation. Applying [F3] with $N=n-1$ gives $\mathbb E X_k\le n((n-1)p)^k e^{-p(n-1-k)}/k!$. Since $(n-1)p\le np=\gamma\log n$, $pn=\gamma\log n$, and $k+1\le2k$, the real-power identity $n\exp(-\gamma\log n)=n^{1-\gamma}$ from [F4], exponential laws and monotonicity give the first displayed bound. [given, F1, F2, F3, F4, algebra]

1.2 The factorial estimate in [F3] and the logarithm laws give $\log L_k\le k\log\log n-k\log k+k$. Substituting $k=\delta\log n$ and $\log k=\log\delta+\log\log n$ yields $\log L_k\le(\delta-\delta\log\delta)\log n$. All logarithm arguments are positive because $n\ge2$ and $k\ge1$. [given, F3, F4, algebra]

2.1 Write the first bound as $n^{1-\gamma}\gamma^k L_k e^{2pk}$. Using step 1.2, $k=\delta\log n$, and [F4] gives the stated exponential bound. If $\delta=\gamma(1+c+s)$, logarithm laws reduce its coefficient of $\log n$ to $1-\gamma+\gamma(1+c+s)-\gamma(1+c+s)\log(1+c+s)=1-\gamma h(c+s)$. [step 1.1, step 1.2, F4, F5, algebra]

3.1 For the lower shifted root take $s=-\varepsilon$, and for the upper root take $s=\varepsilon$. The respective equations in [F5] make $1-\gamma h(c+s)=-\varepsilon$. Substitution in step 2.1 proves the last bound whenever its stated integer and range conditions hold. [given, F5, step 2.1, algebra] ∎

## Source notes

The cited article, PDF p. 37, attributes these estimates to the proof of Proposition 6.9. The proof above uses the stated mathematical suppliers; the article is attribution only. The final specialization here is for exact integer values of $\delta\log n$ and does not assert the separate rounding estimate.
