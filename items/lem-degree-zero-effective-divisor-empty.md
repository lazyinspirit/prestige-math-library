---
id: lem-degree-zero-effective-divisor-empty
kind: lemma
title: An effective divisor of degree zero is empty
status: published
origin: pipeline
deps:
  - def-algebraic-curve-over-field
  - def-degree-divisor-proper-curve
  - def-divisor-smooth-proper-curve
  - def-divisor-support-positive-negative-parts
  - lem-degree-effective-divisor-nonnegative
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $C$ be a proper geometrically integral curve over a field $k$ and let $D$
be an effective divisor on $C$. Then $\deg_k(D)\ge0$, and $\deg_k(D)=0$ if and
only if $D=0$. In particular if $D\le D'$ are effective divisors with
$\deg_k(D)=\deg_k(D')$ then $D=D'$.

## Facts & Assumptions

**Given:** a field $k$, a proper geometrically integral curve $C$ over $k$, and an effective divisor $D$ on $C$.

[F1] A curve over $k$ is geometrically integral, separated and of finite type of chain dimension one; a proper curve is a curve whose structure morphism is proper. In particular $C$ is an integral $k$-scheme of dimension one and the empty scheme is not a curve ([[def-algebraic-curve-over-field]]).

[F2] A divisor on $C$ is a finite formal sum $D=\sum_x n_x[x]$ over the closed points $x$ of $C$ with integer coefficients; each residue field $\kappa(x)$ is a finite extension of $k$ with $[\kappa(x):k]=\dim_k\kappa(x)\ge1$; the degree is $\deg_k D=\sum_x n_x[\kappa(x):k]$, and $\deg_k$ is a group homomorphism $\operatorname{Div}(C)\to\mathbb Z$ ([[def-degree-divisor-proper-curve]]).

[F3] For a divisor $D$ the support is finite, the positive and negative parts satisfy $D=D^+-D^-$ with disjoint supports, both parts have nonnegative coefficients, and $D$ is effective exactly when all its coefficients are nonnegative, equivalently exactly when $D^-=0$; for two divisors one writes $D\ge D'$ when $D-D'$ is effective, so $D\le D'$ means that $D'-D$ has nonnegative coefficients ([[def-divisor-support-positive-negative-parts]], [[def-divisor-smooth-proper-curve]]).

[F4] For an effective divisor on a proper geometrically integral curve, the degree is nonnegative and vanishes exactly for the zero divisor; the argument is the finite sum $\deg_k(D)=\sum_x n_x[\kappa(x):k]$ of nonnegative terms with every $[\kappa(x):k]\ge1$ ([[lem-degree-effective-divisor-nonnegative]]).

## Proof

**Proof technique:** direct; the nonnegativity and vanishing statement is the cited effective-divisor lemma, and the comparison clause reduces the difference to that lemma.

1.1 Unwinding. By [F1] the curve $C$ is an integral $k$-scheme of dimension one, so the divisor formalism of [F2] applies. By [F2] the divisor $D$ has finite support and is written as a finite sum $D=\sum_x n_x[x]$ with integer coefficients; by [F3] effectiveness of $D$ says that all coefficients $n_x$ are nonnegative. The degree is the finite sum $\deg_k(D)=\sum_x n_x[\kappa(x):k]$ of [F2]. [F1, F2, F3]

1.2 The residue degrees are positive. For each closed point $x$ of $C$ the residue field $\kappa(x)$ is a finite extension of $k$, so $[\kappa(x):k]=\dim_k\kappa(x)$ is a positive integer, at least one. [F2]

2.1 Nonnegativity and vanishing. Apply [F4] to the proper geometrically integral curve $C$ and the effective divisor $D$: the degree $\deg_k(D)$ is a nonnegative integer, and $\deg_k(D)=0$ if and only if $D=0$. In unfolded terms, each summand $n_x[\kappa(x):k]$ is a product of the nonnegative coefficient of step 1.1 and the positive integer of step 1.2, so the sum is nonnegative and can vanish only when every coefficient vanishes. [F2, F4, step 1.1, step 1.2]

3.1 The comparison clause. Let $D\le D'$ be effective divisors with $\deg_k(D)=\deg_k(D')$, and put $E:=D'-D$. By [F3] the relation $D\le D'$ says that $E$ has nonnegative coefficients, i.e. $E$ is effective; by the additivity in [F2], $\deg_k(E)=\deg_k(D')-\deg_k(D)=0$. Applying step 2.1 to the effective divisor $E$ gives $E=0$, hence $D=D'$. [F2, F3, step 2.1]

4.1 Conclusion. For every effective divisor $D$ on the proper geometrically integral curve $C$ one has $\deg_k(D)\ge0$ with equality exactly for $D=0$ by step 2.1, and two effective divisors with $D\le D'$ and equal degree coincide by step 3.1. No choice principle is used: only coefficients of a finite sum, integer degrees of finite field extensions and the cited degree-additivity are involved. [F2, step 2.1, step 3.1] ∎
