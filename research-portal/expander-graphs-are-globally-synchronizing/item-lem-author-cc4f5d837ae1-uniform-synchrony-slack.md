---
title: Uniform degree slack and the vanishing synchrony condition
status: published
research_item: lem-author-cc4f5d837ae1-uniform-synchrony-slack
dependency_level: 2
---

## Prerequisites

- [prop-expander-prereq-degree-chernoff-union](item-prop-expander-prereq-degree-chernoff-union)
- [math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)
- [math:thm-integral-logarithm-is-unbounded](https://alphabetamath.cc/item/thm-integral-logarithm-is-unbounded)
- [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph)
- [math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree)
- [math:cor-integral-logarithm-agrees-with-natural-logarithm](https://alphabetamath.cc/item/cor-integral-logarithm-agrees-with-natural-logarithm)


## Statement

Fix $0<\varepsilon<1$, $g>12/\varepsilon^2$, and $K>0$. Let $n\ge2$ be an integer tending to infinity, $0<p\le1$, and $G\sim G(n,p)$ on $[n]=\{1,\ldots,n\}$. Write $d_{\min}=\min_{v\in[n]}\deg_G(v)$ and $d_{\max}=\max_{v\in[n]}\deg_G(v)$. Set $\mu=np\ge g\log n$ and $\alpha=K/\sqrt\mu$. Uniformly over these $p$, with probability tending to one,
$$(1-\varepsilon+\alpha)\mu\le d_{\min}\le d_{\max}\le(1+\varepsilon-\alpha)\mu.$$
For all sufficiently large $n$, uniformly in this range, $\mu>0$, $0<\alpha\le1/5$, and
$$\frac{32\alpha(1+7\varepsilon)}{(1-\varepsilon)^2}\log\!\left(\frac{1+\varepsilon+\alpha}{2\alpha}\right)<1.$$

## Facts & Assumptions

[F1] The uniform degree bound centered at $np$ is [prop-expander-prereq-degree-chernoff-union](item-prop-expander-prereq-degree-chernoff-union).

[F2] For $x>0$, $\log x=\int_1^xdt/t$ and $\log'(x)=1/x$ ([math:thm-logarithm-derivative-and-integral](https://alphabetamath.cc/item/thm-logarithm-derivative-and-integral)). The integral logarithm $L$ is unbounded above ([math:thm-integral-logarithm-is-unbounded](https://alphabetamath.cc/item/thm-integral-logarithm-is-unbounded)) and satisfies $L(x)=\log x$ for $x>0$ ([math:cor-integral-logarithm-agrees-with-natural-logarithm](https://alphabetamath.cc/item/cor-integral-logarithm-agrees-with-natural-logarithm)).

[F3] The independent-edge random graph law is [math:def-erdos-renyi-random-graph](https://alphabetamath.cc/item/def-erdos-renyi-random-graph). Vertex degree, minimum degree and maximum degree are as in [math:def-graph-adjacency-incidence-neighbourhood-and-degree](https://alphabetamath.cc/item/def-graph-adjacency-incidence-neighbourhood-and-degree).

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove all stated conclusions.

1.1 For the graph and degrees in [F3], use [F1] with deviation $\varepsilon/2$, since $g>3/(\varepsilon/2)^2$. Except on an event tending uniformly to zero, all degrees are between $(1-\varepsilon/2)\mu$ and $(1+\varepsilon/2)\mu$. By [F2], $\log$ is increasing and unbounded above, hence $\log n\to\infty$. Thus $\alpha\le K/\sqrt{g\log n}\to0$ uniformly, so eventually $\alpha\le\varepsilon/2$ and $\alpha\le1/5$. The claimed bounds follow by inclusion of these intervals. Positivity of $\mu$ and $\alpha$ is immediate for these $n$. [F1, F2, F3, given, algebra]

2.1 Put $C_0=(1+\varepsilon+1/5)/2>1/5$. For $\alpha\le1/5$, the logarithm in the Statement is positive and at most $\log(C_0/\alpha)$. For $x\ge1$, [F2] gives $\log x=\int_1^xdt/t\le\int_1^xdt/\sqrt t\le2\sqrt x$. Therefore the left side is at most $64(1+7\varepsilon)(1-\varepsilon)^{-2}\sqrt{C_0\alpha}$, tending uniformly to zero by step 1.1. It is eventually less than one as required. [F2, step 1.1, algebra] ∎
