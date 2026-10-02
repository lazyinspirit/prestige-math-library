---
id: lem-degree-effective-divisor-nonnegative
kind: lemma
title: "Effective divisors have nonnegative degree"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-algebraic-curve-over-field
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-divisor-support-positive-negative-parts
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
---

## Statement

Let $k$ be a field and let $C$ be a proper geometrically integral curve over
$k$. Let $D=\sum_x n_x[x]$ be an effective divisor on $C$. Then
$$\deg_k(D)=\sum_x n_x[\kappa(x):k]$$
is a nonnegative integer, and $\deg_k(D)=0$ if and only if $D=0$. The residue
field of every closed point is a finite extension of $k$, so each degree
$[\kappa(x):k]$ is at least one.

## Facts & Assumptions
**Given:** A field $k$, a proper geometrically integral curve $C$ over $k$, and an effective divisor $D=\sum_x n_x[x]$ on $C$.

[F1] A curve over $k$ is geometrically integral, separated and of finite type of chain dimension one; a proper curve over $k$ is in particular an integral $k$-scheme whose structure morphism is proper and whose underlying space has chain dimension one, hence of dimension one. ([[def-algebraic-curve-over-field]], [[def-degree-divisor-proper-curve]])

[F2] A divisor on the proper curve $C$ is a finite formal sum $D=\sum_x n_x[x]$ over the closed points $x$ of $C$ with integer coefficients all but finitely many of which vanish; for each closed point the residue field $\kappa(x)$ is a finite extension of $k$, and the degree is $\deg_k D=\sum_x n_x[\kappa(x):k]$, a group homomorphism $\operatorname{Div}(C)\to\mathbb Z$. ([[def-degree-divisor-proper-curve]])

[F3] The support, positive part and negative part of $D$ are defined by $\operatorname{Supp}(D)=\{x:n_x\ne0\}$, $D^+=\sum_x\max(n_x,0)[x]$ and $D^-=\sum_x\max(-n_x,0)[x]$, so that $D=D^+-D^-$; all coefficients of $D^+$ and $D^-$ are nonnegative, their supports are disjoint, and $D$ is effective if and only if $D^-=0$. ([[def-divisor-support-positive-negative-parts]])

[F4] A divisor on a smooth proper geometrically integral curve over $k$ is a finite $\mathbb Z$-linear combination of closed points, its degree is $\deg_k(D)=\sum_x n_x[\kappa(x):k]$ over the finite support, with $[\kappa(x):k]$ finite, and $D$ is effective, written $D\ge0$, when $n_x\ge0$ for every $x$. ([[def-divisor-smooth-proper-curve]])



## Proof

**Proof technique:** direct; unfold effectiveness as nonnegativity of coefficients and bound each term of the finite degree sum below.

1.1 Unwinding hypotheses. By [F2] the divisor $D$ has finite support, so the sum in the definition of $\deg_k D$ is a finite sum over the finite set $\operatorname{Supp}(D)$. By [F3] effectiveness of $D$ means $n_x\ge 0$ for every $x$. [F2, F3]

1.2 Residue degrees are positive. For each closed point $x$ of $C$ the residue field $\kappa(x)$ is a finite extension of $k$ [F2], and the structure map $k\to\kappa(x)$ is injective with image a subfield, so $\dim_k\kappa(x)\ge1$; being finite over $k$, that dimension is an integer at least one. Therefore $[\kappa(x):k]\ge1$ for every $x$. [F2]

2.1 Nonnegativity. Every summand of $\deg_k D=\sum_x n_x[\kappa(x):k]$ is a product of the nonnegative integer $n_x$ from step 1.1 and the positive integer $[\kappa(x):k]$ from step 1.2, hence is nonnegative; the sum is finite by step 1.1, so $\deg_k D\ge0$. [F2, step 1.1, step 1.2]

3.1 Vanishing. If $D=0$ then all coefficients $n_x$ vanish and $\deg_k D$ is the empty sum $0$; conversely if $\deg_k D=0$ while $D$ is effective, then step 2.1 exhibits $\deg_k D$ as a sum of finitely many nonnegative terms, so every summand vanishes, and since each $[\kappa(x):k]\ge1$ by step 1.2 we get $n_x=0$ for all $x\in\operatorname{Supp}(D)$; hence $D=0$. [F2, step 1.2, step 2.1]

4.1 Conclusion. For an effective divisor $D$ on a proper geometrically integral curve $C$ over $k$ the degree $\deg_k(D)=\sum_x n_x[\kappa(x):k]$ is a nonnegative integer by step 2.1, and it vanishes exactly when $D$ is the zero divisor by step 3.1. The claim was stated for the proper curve $C$, whose underlying space has dimension one by [F1], so the residue fields entering the sum are those of the closed points as in [F2] and the alternative smooth-case description of [F4] is not needed here. ∎
