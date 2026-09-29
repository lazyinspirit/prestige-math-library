---
id: lem-ample-stable-positive-power
kind: lemma
title: "Ampleness is invariant under positive powers"
status: draft
origin: pipeline
deps:
  - def-ample-invertible-sheaf
  - def-invertible-sheaf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Properties of Schemes, Section 28.27 (Tag 01PS)"
      url: https://stacks.math.columbia.edu/tag/01PS
    - title: "Ravi Vakil, The Rising Sea, August 2022 draft, Section 17.6"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Let $X$ be a scheme, let $L$ be an invertible $\mathcal O_X$-module, and let
$m\ge1$ be an integer. Then $L$ is ample ([[def-ample-invertible-sheaf]]) if
and only if the $m$-th tensor power $L^m=L^{\otimes m}$ is ample. Both sides
include the quasi-compactness of $X$, and the empty scheme is allowed on both
sides.

## Facts & Assumptions

**Given:** A scheme $X$, an invertible $\mathcal O_X$-module $L$, an integer $m\ge1$.

[F1] An invertible $\mathcal O_X$-module is a locally free sheaf of rank exactly one; tensor powers of invertible sheaves are invertible, with $(L^{a})^{b}=L^{ab}$ and $L^{a+b}=L^{a}\otimes L^{b}$. ([[def-invertible-sheaf]])

[F2] An invertible sheaf $L$ on $X$ is ample when $X$ is quasi-compact and for every $x\in X$ there are $n\ge1$ and $s\in\Gamma(X,L^n)$ with $x\in X_s$ and $X_s$ affine, where $X_s$ is the nonvanishing locus of $s$; the empty quasi-compact scheme is allowed. ([[def-ample-invertible-sheaf]])

[F3] *(algebra)* Let $W$ be a one-dimensional vector space over a field $\kappa$ and let $w\in W$. Then the image of $w^{\otimes m}$ in $W^{\otimes m}$ is nonzero if and only if $w\neq0$, because $w^{\otimes m}$ is the image of $w$ under the injective multiplication map $\kappa\to\kappa$ after choosing a basis.

## Proof

**Proof technique:** direct: the $m$-th tensor power of a nonvanishing section is a nonvanishing section with the same open locus, in both directions.

1.1 Tensor powers and sections. By [F1] the sheaf $L^m$ is invertible, and the quasi-compactness clause in [F2] concerns only $X$, so it holds for $L$ and for $L^m$ simultaneously. For every $n\ge1$ there is a canonical identification $(L^m)^n=L^{mn}=L^{nm}=(L^n)^m$, and accordingly a section $s\in\Gamma(X,L^n)$ of a power of $L$ has an $m$-th tensor power $s^m\in\Gamma(X,L^{nm})=\Gamma(X,(L^m)^n)$. [F1, F2, given]

2.1 The nonvanishing locus is unchanged. For $x\in X$ let $\bar s$ denote the image of $s$ in the one-dimensional $\kappa(x)$-vector space $L^n\otimes_{\mathcal O_X}\kappa(x)$; the image of $s^m$ in $(L^n)^{\otimes m}\otimes\kappa(x)=(L^n\otimes\kappa(x))^{\otimes m}$ is $\bar s^{\otimes m}$, so by [F3] the point $x$ lies in $X_{s^m}$ if and only if it lies in $X_s$. Hence $X_{s^m}=X_s$ for every $s$ and every $m\ge1$. [F2, F3, step 1.1]

3.1 Ample implies power ample. Assume $L$ ample and let $x\in X$. By [F2] there are $n\ge1$ and $s\in\Gamma(X,L^n)$ with $x\in X_s$ and $X_s$ affine. By step 1.1 the section $s^m$ lies in $\Gamma(X,(L^m)^n)$, and by step 2.1 its nonvanishing locus $X_{s^m}$ equals the affine open $X_s$ containing $x$. Hence $L^m$ is ample by [F2]. [F2, step 1.1, step 2.1]

3.2 Power ample implies ample. Assume $L^m$ ample and let $x\in X$. By [F2] applied to the invertible sheaf $L^m$ there are $n\ge1$ and $t\in\Gamma(X,(L^m)^n)$ with $x\in X_t$ and $X_t$ affine. Interpreting $t$ as a section of $L^{mn}=(L^m)^n$ by the identification of step 1.1, the nonvanishing locus computed in the line bundle $L^{mn}$ is the same set $X_t$, affine and containing $x$; since $mn\ge1$, this witnesses ampleness of $L$ by [F2]. [F2, step 1.1, step 2.1]

4.1 Boundaries and conclusion. If $X=\varnothing$ both conditions hold vacuously by [F2]. If $m=1$ the two conditions coincide, and steps 3.1 and 3.2 prove the two implications for arbitrary $m\ge1$. [F2, step 3.1, step 3.2]
\qed
