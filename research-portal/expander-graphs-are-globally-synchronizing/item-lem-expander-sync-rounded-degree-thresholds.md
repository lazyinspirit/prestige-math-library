---
title: Rounded degree thresholds and expectation bounds
status: draft
research_item: lem-expander-sync-rounded-degree-thresholds
dependency_level: 9
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 37, proof of Proposition 6.9, rounded thresholds
      statement: The proof defines the rounded thresholds and states the expectation
        bound with the additive exponent term $4\log\log n$. It describes a
        rounding budget and writes a bound on $|L_k-L_{k+\eta}|$ for
        $|\eta|\le1$.
      hypotheses: The parameters satisfy $0<\varepsilon<1$,
        $1+\varepsilon<\gamma<1+\varepsilon^{-2}$, and $p=\gamma\log n/n$; the
        proof works for sufficiently large $n$.
      reading_limits: The supplied article text at Proposition 6.9 and its proof was
        inspected for attribution. This citation is not used to prove the
        estimate; the argument below is a local alternative.
---

PDF p. 37: ` Proof of Proposition 6.9, rounded thresholds `

## Prerequisites

- [def-expander-sync-degree-counts](item-def-expander-sync-degree-counts)
- [def-expander-sync-rate-function](item-def-expander-sync-rate-function)
- [def-expander-sync-shifted-rate-roots](item-def-expander-sync-shifted-rate-roots)
- [lem-expander-sync-degree-expectation-bound](item-lem-expander-sync-degree-expectation-bound)
- [math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)
- [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)
- [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)
- [math:thm-mean-value-inequality](https://alphabetamath.cc/item/thm-mean-value-inequality)
- [math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws)
- [math:thm-integral-logarithm-is-unbounded](https://alphabetamath.cc/item/thm-integral-logarithm-is-unbounded)
- [math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)
- [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing)


## Statement

Fix $0<\varepsilon<1$ and $1+\varepsilon<\gamma<1+\varepsilon^{-2}$. Let $h(x)=(1+x)\log(1+x)-x$ for $x>-1$, and let $c^-<0<c^+$ be the shifted roots satisfying $\gamma h(c^--\varepsilon)=\gamma h(c^++\varepsilon)=1+\varepsilon$, with both logarithm arguments positive. For each sufficiently large integer $n$, put $p=\gamma\log n/n$ and define $k^-=\lfloor(1+c^--\varepsilon)\gamma\log n\rfloor$ and $k^+=\lceil(1+c^++\varepsilon)\gamma\log n\rceil$. The floor is the greatest integer at most its argument and the ceiling is the least integer at least its argument.

In the random simple graph $G(n,p)$, each possible edge occurs independently with probability $p$; let $X_k$ count vertices of degree exactly $k$. Then $1\le k^\pm\le n-1$, $0<p<1$, and

$$\mathbb E X_{k^\pm}\le\exp(-\varepsilon\log n+2pk^\pm+4\log\log n).$$

The threshold for sufficiently large $n$ may depend on $\gamma$ and $\varepsilon$.

## Facts & Assumptions

[F1] The shifted-root definition supplies the stated positive logarithm arguments and equations ([def-expander-sync-shifted-rate-roots](item-def-expander-sync-shifted-rate-roots), [def-expander-sync-rate-function](item-def-expander-sync-rate-function)). The degree-count definition supplies $G(n,p)$ and $X_k$ ([def-expander-sync-degree-counts](item-def-expander-sync-degree-counts)).

[F2] For $1\le k\le n-1$, $0<p<1$, and $\delta=k/\log n$, the degree expectation estimate gives $\mathbb E X_k\le\exp((1-\gamma+\delta-\delta\log\delta+\delta\log\gamma)\log n+2pk)$ ([lem-expander-sync-degree-expectation-bound](item-lem-expander-sync-degree-expectation-bound)).

[F3] Floor and ceiling differ from their real argument by at most one ([math:lem-integer-part](https://alphabetamath.cc/item/lem-integer-part)). The logarithm is differentiable with derivative $1/x$, and the product and chain rules apply ([math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral), [math:lem-derivative-algebra-and-chain-rules](https://alphabetamath.cc/item/lem-derivative-algebra-and-chain-rules)). A differentiable real function with derivative bounded in absolute value by $M$ on an interval varies by at most $M$ times the interval length ([math:thm-mean-value-inequality](https://alphabetamath.cc/item/thm-mean-value-inequality)).

[F4] The logarithm is increasing and obeys the product and quotient laws; the exponential is increasing ([math:thm-natural-logarithm-laws](https://alphabetamath.cc/item/thm-natural-logarithm-laws), [math:thm-exponential-is-strictly-increasing](https://alphabetamath.cc/item/thm-exponential-is-strictly-increasing)). The logarithm is unbounded above and grows more slowly than the first power at infinity ([math:thm-integral-logarithm-is-unbounded](https://alphabetamath.cc/item/thm-integral-logarithm-is-unbounded), [math:thm-logarithm-slower-than-every-positive-power](https://alphabetamath.cc/item/thm-logarithm-slower-than-every-positive-power)).

## Proof

**Given:** The fixed parameters, roots, graph, and rounded thresholds in the Statement.

**Goal:** Prove the degree ranges and both expectation bounds for all sufficiently large $n$.

1.1 Set $a_-=\gamma(1+c^--\varepsilon)$ and $a_+=\gamma(1+c^++\varepsilon)$. Both are fixed and positive by [F1]. By [F3], $|k^\pm-a_\pm\log n|\le1$. Since $\log n$ tends to infinity while $\log n/n$ tends to zero by [F4], eventually $0<p<1$, $1\le k^\pm\le n-1$, and $k^\pm/\log n\in[a_\pm/2,2a_\pm]$. [F1, F3, F4, algebra]

2.1 Define $f(x)=1-\gamma+x-x\log x+x\log\gamma$ for $x>0$. The derivative rules give $f'(x)=\log(\gamma/x)$. Thus $|f'|$ is bounded on each fixed interval $[a_\pm/2,2a_\pm]$, for example by $M_\pm=|\log(\gamma/a_\pm)|+\log2$. The mean value inequality and step 1.1 give $|f(k^\pm/\log n)-f(a_\pm)|\log n\le M_\pm$. [F3, F4, step 1.1, algebra]

3.1 By the logarithm laws and the root equations, $f(a_\pm)=1-\gamma h(c^\pm\pm\varepsilon)=-\varepsilon$, where the upper sign is used with $c^+$ and the lower sign with $c^-$. Apply [F2] at $k=k^\pm$ and use step 2.1 to obtain $\mathbb E X_{k^\pm}\le\exp(-\varepsilon\log n+M_\pm+2pk^\pm)$. [F1, F2, F4, step 1.1, step 2.1, algebra]

4.1 The constants $M_\pm$ are independent of $n$. By monotonicity and unboundedness of the logarithm, $\log\log n$ tends to infinity, so eventually both $M_\pm\le4\log\log n$. The increasing exponential now gives the two stated bounds. [F4, step 3.1, algebra] ∎

## Source notes

The cited article attributes the rounding allowance to a change bounded by $\log\gamma+\log\log n+\log(k+1)+2p$ and writes $|L_k-L_{k+\eta}|\le|\eta|\log\log n+\log(k+1)$, with $L_k=(\log n)^k/k!$ and $|\eta|\le1$. The local proof instead bounds the smooth exponent at the rounded integer; it does not require a factorial at a noninteger or use that displayed comparison.
