---
id: lem-finite-probability-maximal-ergodic-inequality
kind: lemma
title: The maximal ergodic inequality on a probability space
deps: ["def-measure-preserving-transformation-and-system", "thm-integrals-are-invariant-under-measure-preserving-maps", "thm-arithmetic-and-lattice-operations-preserve-measurability", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-integral-triangle-inequality", "thm-dominated-convergence", "prop-order-and-scalar-rules-for-the-nonnegative-integral"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: 'Durrett, Probability: Theory and Examples, 5th ed., Lemma 6.2.2, printed p.335; complete proof read'
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Let $T$ preserve a probability measure $P$, and let $f$ be integrable, real-valued and measurable. Put $S_kf=\sum_{j=0}^{k-1}f\circ T^j$, $M_N=\max(0,S_1f,\ldots,S_Nf)$ and $E_N=\{M_N>0\}$ for $N\ge1$. Then $\int_{E_N}f\,dP\ge0$, and also $\int_E f\,dP\ge0$ for $E=\{\sup_{k\ge1}S_kf>0\}$.

## Facts & Assumptions

[F1] [[def-measure-preserving-transformation-and-system]]: Let $(X,\mathcal A,\mu)$ be a measure space. A measurable self-map $T:X\to X$ is **measure preserving** if $\mu(T^{-1}E)=\mu(E)$ for every $E\in\mathcal A$. The quadruple $(X,\mathcal A,\mu,T)$ is a **measure-preserving system**; it is a probability system if $\mu(X)=1$. Here $T^{-1}E=\{x:T(x)\in E\}$ denotes an inverse image, whether or not $T$ is invertible. Neither completeness nor finiteness is implicit. The measure-space and measurable-map conventions are def-measure-space and def-measurable-function-between-measurable-spaces.

[F2] [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: Let $(X,\mathcal{A})$ be a measurable space and let
$f,g : X \to \overline{\mathbb{R}}$ be measurable. Then:

1. $cf$ is measurable for every real scalar $c$;
2. $\max(f,g)$, $\min(f,g)$, $|f|$, $f^+$, and $f^-$ are measurable;
3. if $f+g$ is pointwise defined, then $f+g$ is measurable;
4. with the convention of
   rem-zero-times-infinity-convention-for-pointwise-products, the pointwise
   product $fg$ is measurable.

[F3] [[thm-integrals-are-invariant-under-measure-preserving-maps]]: If $T$ preserves $\mu$ and $f:X\to[0,\infty]$ is measurable, then $\int f\circ T\,d\mu=\int f\,d\mu$, allowing infinity. If $f$ is integrable real or complex valued, $f\circ T$ is integrable and the same equality holds. Conversely, for a measurable self-map, equality for every measurable indicator implies measure preservation.

[F4] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: The class $L^1(\mu)$ is a complex vector space, and the Lebesgue integral is
complex-linear on it:
$$\int (\alpha f+\beta g)\,d\mu=\alpha\int f\,d\mu+\beta\int g\,d\mu \qquad(\alpha,\beta\in\mathbb C,\ f,g\in L^1(\mu)).$$

[F5] [[thm-dominated-convergence]]: Let $f$ and $(f_n)$ be measurable complex-valued functions such that
$f_n\to f$ almost everywhere and $|f_n|\le g$ almost everywhere for a single
nonnegative measurable function $g$ with $\int g\,d\mu<+\infty$. Then
$f\in L^1(\mu)$,
$$\int|f_n-f|\,d\mu\longrightarrow0,$$
and hence
$$\int f_n\,d\mu\longrightarrow\int f\,d\mu.$$

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 The measurable self-map in F1 and F2 make all finite sums and maxima measurable. Also $0\le M_N\le\sum_{j<N}|f|\circ T^j$, whose integral is $N\int|f|\,dP<\infty$ by F3. Thus M_N and its composition with T are integrable. [F1, F2, F3]

1.2 For $1\le k\le N$, $S_kf=f+(S_{k-1}f)\circ T\le f+M_N\circ T$, with $S_0f=0$. On E_N take a maximizing k to get $f\ge M_N-M_N\circ T$. On the complement M_N=0 and $-M_N\circ T\le0$. Hence everywhere $f\mathbf1_{E_N}\ge M_N-M_N\circ T$. [given, algebra]

2.1 Integrate the inequality in step 1.2. Integrability is supplied by step 1.1; F4 and F3 give $\int_{E_N}f\,dP\ge\int M_N\,dP-\int M_N\circ T\,dP=0$. [F3, F4, step 1.2, step 1.1]

3.1 The sets E_N increase to E. Since $|f\mathbf1_{E_N}|\le|f|$ and $f\mathbf1_{E_N}\to f\mathbf1_E$ pointwise, F5 takes step 2.1 to $\int_Ef\,dP\ge0$. [F5, step 2.1] ∎
