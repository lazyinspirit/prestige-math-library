---
id: lem-na-mixed-radix-cooley-tukey-factorization
kind: lemma
title: "Mixed-radix Cooley–Tukey factorization with fixed index maps"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
page: computed-fast-transforms-and-convolution
dependency_level: 0
deps: [def-unitary-discrete-fourier-transform-on-z-mod-n, def-integers-modulo-n, thm-integers-modulo-n-basic-algebra, thm-standard-representatives-modulo-n, def-finite-sum-in-a-commutative-monoid, lem-finite-sum-reindexing-and-fubini, thm-complex-exponential-addition-and-real-extension, thm-kernel-and-fibres-of-complex-exponential, thm-complex-numbers-form-a-field, def-rational-power, lem-rational-power-laws]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "C. Sidney Burrus, Fast Fourier Transforms, Chapter 11 §11.2, equations (11.1)–(11.2)"
      url: https://repository.rice.edu/server/api/core/bitstreams/01e9e0a5-fa6f-453d-a1b5-8209fa0a565c/content
---

## Statement

Let $r,s\ge2$, $N=rs$, and $x=(x_j)_{j=0}^{N-1}\in\mathbb C^N$. For $0\le u<r$ define $x^{(u)}_v=x_{u+rv}$ for $0\le v<s$. For $0\le k_2<s$ set $y^{(k_2)}_u=e^{-2\pi iuk_2/N}(\mathcal F_sx^{(u)})(k_2)$ for $0\le u<r$. Then for $0\le k_1<r$ and $0\le k_2<s$,

$$
(\mathcal F_Nx)(k_2+sk_1)=(\mathcal F_ry^{(k_2)})(k_1).
$$

Here every $\mathcal F_q$ is the negative-sign unitary DFT with normalization $q^{-1/2}$ from [[def-unitary-discrete-fourier-transform-on-z-mod-n]]. Thus the inner transforms are the $r$ length-$s$ transforms of strided input subsequences; the twiddle multiplication is explicit; and the outer transforms are the $s$ length-$r$ transforms. No coprimality of $r$ and $s$ is assumed.

## Facts & Assumptions

**Given:** Integers $r,s\ge2$, $N=rs$, a vector $x\in\mathbb C^N$, and indices $k_1\in\{0,\ldots,r-1\}$ and $k_2\in\{0,\ldots,s-1\}$.

[F1] The unitary DFT is $(\mathcal F_qz)(k)=q^{-1/2}\sum_{v=0}^{q-1}z_v e^{-2\pi ivk/q}$ for $q\ge1$ ([[def-unitary-discrete-fourier-transform-on-z-mod-n]]).

[F2] Every integer $j$ with $0\le j<rs$ is uniquely $j=u+rv$ with $0\le u<r$ and $0\le v<s$; every $k$ with $0\le k<rs$ is uniquely $k=k_2+sk_1$ in the stated ranges ([[thm-integers-modulo-n-basic-algebra]], [[thm-standard-representatives-modulo-n]]).

[F3] Finite sums over these index sets can be reindexed by the bijections in [F2], split into finite sums, and reordered ([[def-finite-sum-in-a-commutative-monoid]], [[lem-finite-sum-reindexing-and-fubini]]).

[F4] For complex exponentials, $e^{z+w}=e^ze^w$ and $e^z=1$ exactly when $z\in2\pi i\mathbb Z$, so $e^{2\pi i n}=1$ for every integer $n$; positive rational powers obey their exponent laws ([[thm-complex-exponential-addition-and-real-extension]], [[thm-kernel-and-fibres-of-complex-exponential]], [[thm-complex-numbers-form-a-field]], [[def-rational-power]], [[lem-rational-power-laws]]).

## Proof

1.1 By [F2], the pair $(u,v)$ with $j=u+rv$ runs exactly once through the $N$ input indices, and $(k_1,k_2)$ with $k=k_2+sk_1$ runs exactly once through the $N$ output indices. Therefore the definition [F1] gives $(\mathcal F_Nx)(k_2+sk_1)=(rs)^{-1/2}\sum_{u=0}^{r-1}\sum_{v=0}^{s-1}x_{u+rv}e^{-2\pi i(u+rv)(k_2+sk_1)/(rs)}$. [given, F1, F2, F3]

2.1 Expanding the exponent gives $(u+rv)(k_2+sk_1)/(rs)=uk_2/(rs)+uk_1/r+vk_2/s+vk_1$. Since $vk_1$ is an integer, its exponential factor is $1$ by [F4]. Also $(rs)^{-1/2}=r^{-1/2}s^{-1/2}$ by [F4]. Regrouping the finite sums in [F3] now yields $(rs)^{-1/2}\sum_{u=0}^{r-1}e^{-2\pi iuk_2/N}e^{-2\pi iuk_1/r}\sum_{v=0}^{s-1}x_{u+rv}e^{-2\pi ivk_2/s}$. [step 1.1, F3, F4, algebra]

3.1 The inner sum in step 2.1 is $s^{1/2}(\mathcal F_sx^{(u)})(k_2)$ by [F1]. The remaining coefficient and sum are exactly $r^{-1/2}\sum_{u=0}^{r-1}y^{(k_2)}_u e^{-2\pi iuk_1/r}=(\mathcal F_ry^{(k_2)})(k_1)$, again by [F1] and the definition of $y^{(k_2)}$. This is the claimed identity. [step 2.1, F1, given] ∎


## Remarks

The flow below separates the two transform stages from the index permutations. All arrays have $N=rs$ complex entries: $0\le u,k_1<r$ and $0\le v,k_2<s$. Write $A_{u,k_2}=(\mathcal F_sx^{(u)})(k_2)$ and $z_{k_1,k_2}=(\mathcal F_ry^{(k_2)})(k_1)$. Each transform uses the negative-sign unitary convention of [F1].

```tikz
\begin{tikzpicture}
\node[draw,rounded corners,minimum width=7cm,minimum height=.7cm] (x) at (0,0) {$x=(x_0,\ldots,x_{N-1})$};
\node[draw,rounded corners,minimum width=7cm,minimum height=.7cm] (split) at (0,-1.7) {$x^{(u)}_v=x_{u+rv}$};
\node[draw,rounded corners,minimum width=7cm,minimum height=.7cm] (a) at (0,-3.4) {$A_{u,k_2}=(\mathcal F_sx^{(u)})(k_2)$};
\node[draw,rounded corners,minimum width=7cm,minimum height=.7cm] (y) at (0,-5.1) {$y^{(k_2)}_u=e^{-2\pi iuk_2/N}A_{u,k_2}$};
\node[draw,rounded corners,minimum width=7cm,minimum height=.7cm] (z) at (0,-6.8) {$z_{k_1,k_2}=(\mathcal F_Nx)(k_2+sk_1)$};
\draw[->] (x) -- node[right] {$j=u+rv$} (split);
\draw[->] (split) -- node[right] {$r$ transforms $\mathcal F_s$} (a);
\draw[->] (a) -- node[right] {twiddle multiplication} (y);
\draw[->] (y) -- node[right] {$s$ transforms $\mathcal F_r$} (z);
\end{tikzpicture}
```

The first arrow is the input reindexing in [F2]; the last stage includes the output reindexing $k=k_2+sk_1$. Steps 2.1–3.1 justify the twiddle and the two transform stages, including the normalization $s^{-1/2}r^{-1/2}=N^{-1/2}$. The proof above is independent of this illustration.
