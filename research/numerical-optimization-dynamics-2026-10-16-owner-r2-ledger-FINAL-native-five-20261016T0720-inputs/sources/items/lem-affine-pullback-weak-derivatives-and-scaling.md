---
id: lem-affine-pullback-weak-derivatives-and-scaling
kind: lemma
title: Affine pullback of weak derivatives and Sobolev seminorms
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-matching-affine-simplicial-meshes, def-sobolev-space-wkp-and-its-norm, def-weak-derivative-of-a-locally-integrable-function, thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions, thm-chain-rule-for-differentials-of-smooth-maps, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf
      locator: "§11.2, printed pp. 120–121: affine Sobolev-seminorm transformation."
    - title: Luca Heltai, Numerical Methods for Partial Differential Equations, Lecture 2
      url: https://luca-heltai.github.io/nmpde/lectures/lecture-02/
      locator: "§§6–7: affine chain rule, Jacobian change of variables, and Sobolev scaling."
verification: {}
---

## Statement

Assume Countable Choice. Let $F(\widehat x)=A\widehat x+b$ be an affine bijection from a bounded open
set $\widehat K\subset\mathbb R^d$ to $K$, where $A$ is invertible, and let
$1\le p\le\infty$. For every integer $r\ge0$ and scalar
$v\in W^{r,p}(K)$, the pullback $\widehat v:=v\circ F$ belongs to
$W^{r,p}(\widehat K)$. For $r\ge1$ its first weak derivatives satisfy
$$D_{\widehat x_j}\widehat v=\sum_{i=1}^d A_{ij}(D_{x_i}v)\circ F,$$
and higher derivatives are obtained by applying this constant-matrix rule
repeatedly. In particular, for each $0\le m\le r$,
$$|\widehat v|_{W^{m,p}(\widehat K)}\le C(d,m)\|A\|^m|\det A|^{-1/p}|v|_{W^{m,p}(K)},$$
where $|\det A|^{-1/p}:=1$ for $p=\infty$. The reverse estimate holds
with $A^{-1}$ and $|\det A|^{1/p}$ in place of $A$ and
$|\det A|^{-1/p}$.

## Facts & Assumptions

**Given:** Countable Choice; the affine bijection $F$; an exponent $1\le p\le\infty$; and $v\in W^{r,p}(K)$.

[F1] A weak derivative is characterized by $\int_K vD^\alpha\phi=(-1)^{|\alpha|}\int_K(D^\alpha v)\phi$ for all compactly supported smooth tests. ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-sobolev-space-wkp-and-its-norm]])

[F2] For a C1 diffeomorphism, nonnegative Lebesgue-measurable integrands obey the change-of-variables formula with $|\det DF|$; Countable Choice is an explicit hypothesis. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]])

[F3] $A$ is constant, so the classical chain rule for a test function is $D_{\widehat x_j}(\phi\circ F)=\sum_iA_{ij}(D_{x_i}\phi)\circ F$. ([[thm-chain-rule-for-differentials-of-smooth-maps]])

[F4] For finite $p$, $\|g\circ F\|_{L^p(\widehat K)}=|\det A|^{-1/p}\|g\|_{L^p(K)}$ by [F2]; for $p=\infty$ the essential-supremum norm is preserved by a C1 bijection and its inverse, which map null sets to null sets. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]])

[F5] The cited change-of-variables theorem assumes Countable Choice. ([[def-countable-choice]])

## Proof

1.1 If $\widehat K=\varnothing$, then $K=\varnothing$ and each Sobolev space on these measure-zero domains has only the zero class; every displayed derivative identity and estimate is therefore zero equals zero. Otherwise, if $r=0$, the only derivative is order zero and [F4] gives $\|v\circ F\|_{L^p(\widehat K)} =|\det A|^{-1/p}\|v\|_{L^p(K)}$, with the stated convention at $p=\infty$. Thus the membership and pullback estimate hold in this case. For $r\ge1$, fix $j$ and $\psi\in C_c^\infty(\widehat K)$. Set $\phi:=\psi\circ F^{-1}\in C_c^\infty(K)$. Changing variables by [F2] and using [F3] gives $$\int_{\widehat K}(v\circ F)D_{\widehat x_j}\psi\,d\widehat x =|\det A|^{-1}\sum_iA_{ij}\int_KvD_{x_i}\phi\,dx =-|\det A|^{-1}\sum_iA_{ij}\int_K(D_{x_i}v)\phi\,dx =-\sum_iA_{ij}\int_{\widehat K}((D_{x_i}v)\circ F)\psi\,d\widehat x.$$ Thus the displayed first-derivative formula holds weakly; its right side is in $L^p$ by [F4]. [F1, F2, F3, F4, F5, given]

2.1 For $r\ge1$, since $A$ is constant, differentiating the first formula weakly again applies the same rule to each $D_{x_i}v$; induction on $m$ gives every derivative of order $m\le r$ as a sum of at most $d^m$ terms, each with a product of $m$ entries of $A$ multiplying a pullback of an order-$m$ derivative of $v$. Taking component $L^p$ norms and using [F4] yields the stated seminorm bound, with a finite combinatorial constant depending on $d,m$. Applying the proved estimate to $F^{-1}(x)=A^{-1}(x-b)$ gives the reverse bound. Together with step 1.1 this includes $r=0$ and proves both directions. [F3, F4, F5, step 1.1, algebra] ∎
