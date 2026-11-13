---
title: Uniform constant-two adjacency control above a large logarithmic density
status: published
research_item: lem-author-cc4f5d837ae1-uniform-sharp-adjacency-bound
dependency_level: 5
sources:
  references:
    - title: Florent Benaych-Georges, Charles Bordenave and Antti Knowles, Spectral
        radii of sparse random matrices (19 September 2019)
      url: https://www.unige.ch/~knowles/SP.pdf
      reading_limits: Read the extracted PDF p. 3 Definition 2.1 and equation (2.2),
        and p. 4 Theorem 2.2, checking the ordered-pair matrix definition and
        the exact deterministic inequality against this application. The theorem
        is imported as stated; its proof was not read, reconstructed or
        independently audited. The graph normalization, probability estimates
        and local composition are supplied separately.
      locator: Section 2, PDF p. 3 Definition 2.1 and (2.2); PDF p. 4 Theorem 2.2
      statement: For a finite Hermitian H and its associated nonbacktracking B, with
        r=max_i(sum_j |H_ij|^2)^(1/2)>0 and b=max_ij |H_ij|, ||H||<=r
        f(rho(B)/r)+7b, where f(x)=2 for 0<=x<=1 and f(x)=x+x^(-1) for x>=1.
      hypotheses: Finite Hermitian H, the specified ordered-pair nonbacktracking
        matrix; r>0 for the displayed ratio. The zero matrix case is handled
        locally.
---

## Prerequisites

- [lem-author-cc4f5d837ae1-uniform-centered-normalization](item-lem-author-cc4f5d837ae1-uniform-centered-normalization)
- [lem-author-cc4f5d837ae1-uniform-squared-row-control](item-lem-author-cc4f5d837ae1-uniform-squared-row-control)
- [lem-author-cc4f5d837ae1-uniform-nonbacktracking-tail](item-lem-author-cc4f5d837ae1-uniform-nonbacktracking-tail)
- [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)
- [math:thm-integral-logarithm-is-unbounded](https://alphabetamath.cc/item/thm-integral-logarithm-is-unbounded)
- [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)
- [math:cor-triangle-inequality-for-inner-product-norm](https://alphabetamath.cc/item/cor-triangle-inequality-for-inner-product-norm)
- [math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound)
- [math:cor-integral-logarithm-is-strictly-increasing](https://alphabetamath.cc/item/cor-integral-logarithm-is-strictly-increasing)
- [math:cor-integral-logarithm-agrees-with-natural-logarithm](https://alphabetamath.cc/item/cor-integral-logarithm-agrees-with-natural-logarithm)
- [math:thm-of-archimedean](https://alphabetamath.cc/item/thm-of-archimedean)
- [` Florent Benaych-Georges, Charles Bordenave and Antti Knowles, Spectral radii of sparse random matrices (19 September 2019) · Section 2, PDF p. 3 Definition 2.1 and (2.2); PDF p. 4 Theorem 2.2 `](https://www.unige.ch/~knowles/SP.pdf)


## Statement

For every fixed $e>0$ there is $g_e>1$ such that
$$\sup_{p\in[g_e\log n/n,1]}\mathbb P(\|A-pJ\|>(2+e)\sqrt{np})\longrightarrow0.$$
Here $A$ is the zero-diagonal adjacency matrix of $G(n,p)$; for small $n$ an empty parameter interval imposes no requirement. All matrix norms are Euclidean operator norms.

## Facts & Assumptions

[F1] Normalize by [lem-author-cc4f5d837ae1-uniform-centered-normalization](item-lem-author-cc4f5d837ae1-uniform-centered-normalization). On the uniform degree good event, [lem-author-cc4f5d837ae1-uniform-squared-row-control](item-lem-author-cc4f5d837ae1-uniform-squared-row-control) gives $r\le\sqrt{1+\delta}$.

[F2] The uniform tail at fixed $t>0$ is [lem-author-cc4f5d837ae1-uniform-nonbacktracking-tail](item-lem-author-cc4f5d837ae1-uniform-nonbacktracking-tail). The probability of a union of the two bad events is at most the sum of their probabilities by [math:thm-finite-union-bound](https://alphabetamath.cc/item/thm-finite-union-bound).

[F3] The graph law is [def-expander-sync-erdos-renyi](item-def-expander-sync-erdos-renyi); adjacency and the matrices $J,I$ are defined in [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation). Uniform limits, including the empty-interval convention, are [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers).

[F4] The operator norm is the maximum over unit vectors in [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space). The vector norm is homogeneous and satisfies the triangle inequality by [math:cor-triangle-inequality-for-inner-product-norm](https://alphabetamath.cc/item/cor-triangle-inequality-for-inner-product-norm).

[F5] The integral logarithm $L$ agrees with $\log$ on $(0,\infty)$ by [math:cor-integral-logarithm-agrees-with-natural-logarithm](https://alphabetamath.cc/item/cor-integral-logarithm-agrees-with-natural-logarithm), is strictly increasing by [math:cor-integral-logarithm-is-strictly-increasing](https://alphabetamath.cc/item/cor-integral-logarithm-is-strictly-increasing), and is unbounded above by [math:thm-integral-logarithm-is-unbounded](https://alphabetamath.cc/item/thm-integral-logarithm-is-unbounded). The natural numbers are cofinal in the reals by [math:thm-of-archimedean](https://alphabetamath.cc/item/thm-of-archimedean).

## External input

BBK Theorem 2.2 gives $\|H\|\le r f(\rho(B)/r)+7b$ for a finite Hermitian $H$, where $r=\max_i(\sum_j|H_{ij}|^2)^{1/2}$, $b=\max_{ij}|H_{ij}|$, and $f(x)=2$ on $[0,1]$, $f(x)=x+x^{-1}$ on $[1,\infty)$. Its $B$ is Definition 2.1. The formula is used only for $r>0$; $H=0$ is handled separately. This deterministic theorem is imported, while its graph application and the uniform probability argument are local.

## Proof

**Given:** The objects and hypotheses in the Statement.

**Goal:** Prove all stated conclusions.

1.1 Put $u=\min\{e/8,1/8\}$, $\delta=u$, $t=u$, and choose $g_e>\max\{1,3/u^2\}$. Off a union of two events whose probabilities tend uniformly to zero by [F1] and [F2], $r\le\sqrt{1+u}\le1+u$ and $\rho(B)<1+u$. For $r>0$, the imported deterministic inequality gives $\|H\|\le r f(\rho(B)/r)+7/\sqrt\mu\le2\max\{r,\rho(B)\}+7/\sqrt\mu\le2+2u+7/\sqrt\mu$. Indeed for $\rho\le r$ its first term is $2r$, and for $\rho\ge r$ it is $\rho+r^2/\rho\le2\rho$. When $r=0$, $H=0$ and the same bound holds directly. [F1, F2, given, algebra]

2.1 For any two operators $S,T$ on the same nonzero Euclidean space and any unit vector $v$, [F4] gives $\|(S+T)v\|\le\|Sv\|+\|Tv\|\le\|S\|+\|T\|$. Taking the maximum yields $\|S+T\|\le\|S\|+\|T\|$. Vector homogeneity and the same maximum formula give $\|aT\|=|a|\|T\|$ and $\|I\|=1$. Apply these facts to the centering identity $A-pJ=\sqrt\mu H-pI$ from [F1], using $0<p\le1$ and step 1.1, to obtain $\|A-pJ\|/\sqrt\mu\le\|H\|+p/\sqrt\mu\le2+2u+8/\sqrt\mu$. [F1, F3, F4, step 1.1, algebra]

3.1 For any real $M$, [F5] gives $b>0$ with $L(b)>M$ and a natural $N>b$. For $n\ge N$, $\log n=L(n)\ge L(N)>M$, so $\log n\to\infty$. Thus $\mu\ge g_e\log n\to\infty$ with a lower bound independent of $p$. Since $2u\le e/4$, the bound in step 2.1 is eventually at most $2+e$, with one common cutoff for all $p$. The only exceptional events are those in step 1.1; [F2] bounds their union probability by the sum of two probabilities tending uniformly to zero. The uniform quantifiers in [F3] therefore give the stated supremum limit, including every allowed varying sequence $p=p(n)$. [F2, F3, F5, step 1.1, step 2.1, algebra] ∎
