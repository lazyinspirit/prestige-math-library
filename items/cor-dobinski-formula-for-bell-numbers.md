---
id: cor-dobinski-formula-for-bell-numbers
kind: corollary
title: "Dobinski's formula expresses the Bell numbers as $B_n=e^{-1}\\sum_{\\ell\\ge0}\\ell^n/\\ell!$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-real-exponential-function-and-e, cor-exponential-reciprocal-and-positivity, def-stirling-second-kind-and-bell-number, def-factorial-and-falling-factorial, thm-powers-expand-in-the-falling-factorial-basis]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Wolfram MathWorld, Dobiński's Formula"
      url: "https://mathworld.wolfram.com/DobinskisFormula.html"
    - title: "Philippe Flajolet and Robert Sedgewick, Analytic Combinatorics — Symbolic Combinatorics"
      url: "https://algo.inria.fr/flajolet/Publications/FlSe02.pdf"
pipeline_run: null
---

## Statement

For every $n\in\mathbb{N}$,

$$B_n=e^{-1}\sum_{\ell\geq0}\frac{\ell^n}{\ell!}.$$

## Facts & Assumptions

**Given:** A natural number $n$.

[F1] Ordinary powers expand as
$$\ell^n=\sum_{k=0}^{n}S(n,k)\ell^{\underline{k}}.$$
([[thm-powers-expand-in-the-falling-factorial-basis]]).

[F2] The falling factorial satisfies $\ell^{\underline{k}}=0$ for $\ell<k$
and $\ell^{\underline{k}}/\ell!=1/(\ell-k)!$ for $\ell\ge k$
([[def-factorial-and-falling-factorial]]).

[F3] The real exponential is defined by
$e=\sum_{m\ge0}1/m!$, and $e^{-1}e=1$
([[def-real-exponential-function-and-e]],
[[cor-exponential-reciprocal-and-positivity]]).

[F4] The Bell number is $B_n=\sum_{k=0}^{n}S(n,k)$
([[def-stirling-second-kind-and-bell-number]]).

## Proof

**Proof technique:** direct.

1.1 For a fixed $k\le n$, [F2] and the change of index $m=\ell-k$ give. [F2, F3, algebra]
$$\sum_{\ell\ge0}\frac{\ell^{\underline{k}}}{\ell!}=\sum_{\ell\ge k}\frac1{(\ell-k)!}=\sum_{m\ge0}\frac1{m!}=e.$$
In particular each of these nonnegative series converges. [F2, F3, algebra]

2.1 Substitute [F1] into the series in the Statement. Since the sum over $k$. [F1, F4, step 1.1, algebra]
is finite, it may be interchanged with the convergent nonnegative series, and
step 1.1 yields
$$\sum_{\ell\ge0}\frac{\ell^n}{\ell!}=\sum_{k=0}^{n}S(n,k)\sum_{\ell\ge0}\frac{\ell^{\underline{k}}}{\ell!}=e\sum_{k=0}^{n}S(n,k)=eB_n.$$
[F1, F4, step 1.1, algebra]

3.1 Multiplying step 2.1 by $e^{-1}$ and using [F3] gives. [F3, step 2.1, algebra]
$$B_n=e^{-1}\sum_{\ell\ge0}\frac{\ell^n}{\ell!}.$$
This also covers $n=0$, where $0^0=1$ is the natural-power base convention
already used in [F1]. [F3, step 2.1, algebra] ∎
