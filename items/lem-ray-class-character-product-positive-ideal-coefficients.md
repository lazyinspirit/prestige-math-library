---
dependency_level: 9
id: lem-ray-class-character-product-positive-ideal-coefficients
kind: lemma
title: Nonnegative coefficients in the product of all ray-class Hecke functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- thm-ray-class-group-finite
- lem-character-orthogonality-for-finite-abelian-groups
- thm-finite-order-hecke-l-euler-product
- thm-number-field-integral-ideal-factorisation-in-zf
- thm-ideal-norm-is-multiplicative
- lem-finitely-many-number-field-ideals-of-bounded-norm
- thm-tonelli-theorem-for-sigma-finite-product-spaces
- def-axiom-of-choice
- def-countable-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: Assume AC and Countable Choice. Choice is inherited from the actual number-field, unit, lattice
  and integration suppliers; no cited external theorem is imported.
sources:
  references:
  - title: Jürgen Neukirch, Algebraic Number Theory, Chapter VII
    url: https://web.math.ucsb.edu/~agboola/teaching/2021/fall/225A/neukirch.pdf
    locator: §13 context, printed543–545; full finite-character Euler/positivity proof supplied here;
      full local finite-order specialization below.
---

## Statement

Assume AC and Countable Choice. Let $G=\operatorname{Cl}_{\mathfrak m}(K)$ have order $h$, and put $P(s)=\prod_{\chi\in\widehat G}L(s,\chi)$ for $\operatorname{Re}s>1$. It has an absolutely convergent ideal Dirichlet series
$$P(s)=\sum_{(\mathfrak a,\mathfrak m_0)=1}c(\mathfrak a)(N\mathfrak a)^{-s},\qquad c(\mathfrak a)\in\mathbb Z_{\ge0},\qquad c(\mathfrak b^h)\ge1.$$
Grouping by the positive integer norm gives coefficients $a_N\ge0$ with $P(s)=\sum_Na_NN^{-s}$. For any real $\delta>0$,
$$\sum_Na_NN^{-\delta}\ \ge\ \sum_{(\mathfrak b,\mathfrak m_0)=1}(N\mathfrak b)^{-h\delta},$$
where an infinite right-hand side forces divergence. This is a statement about the ray class group itself and uses no class-field-existence or Artin theorem.

## Facts & Assumptions

**Given:** The modulus, finite ray class group and choice assumptions in the Statement.

[F1] The ray class group is finite; its character group has order $h$ and satisfies finite abelian character orthogonality. [[thm-ray-class-group-finite]] [[lem-character-orthogonality-for-finite-abelian-groups]]

[F2] Each Hecke Euler product converges absolutely for $\operatorname{Re}s>1$, and integral ideals have unique finite prime factorizations and multiplicative norms. [[thm-finite-order-hecke-l-euler-product]] [[thm-number-field-integral-ideal-factorisation-in-zf]] [[thm-ideal-norm-is-multiplicative]]

[F3] Only finitely many ideals have any bounded norm, and nonnegative sums can be interchanged. [[lem-finitely-many-number-field-ideals-of-bounded-norm]] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[A1] AC and CC are inherited from [F1]–[F3]. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 For a prime $\mathfrak p\nmid\mathfrak m_0$, let $d$ be the order of its class in $G$. Write $\omega=e^{2\pi i/d}$ and let $n_j$ count characters with $\chi([\mathfrak p])=\omega^j$. Orthogonality [F1] gives $\sum_j n_j\omega^{jk}=h$ for $k=0$ and $0$ for $1\le k<d$. Multiplying by $\omega^{-\ell k}$, summing $k$ and summing the finite geometric series gives $n_\ell=h/d$. Thus $h/d$ is a positive integer and $$\prod_{\chi\in\widehat G}(1-\chi([\mathfrak p])X)^{-1}=(1-X^d)^{-h/d}.$$ Its power-series coefficients are nonnegative integers, and the coefficient at every $X^{hr}$, $r\ge0$, is at least one: write it as the product of $h/d$ geometric series in $X^d$ and place the whole exponent in the first factor. The case $d=1$ obeys the same formula. [F1, algebra]

2.1 Multiply the finitely many character Euler products using absolute convergence [F2]. The local factors from step 1.1 have nonnegative integral coefficients. For finite prime sets their products define multiplicative coefficients $c(\mathfrak a)$; unique ideal factorization makes each coefficient stable once its finite support is included. For real $s>1$, the increasing finite products are bounded by the finite product of the absolutely convergent character series, and converge to $P(s)$. Tonelli gives the ideal-series identity and absolute convergence there. Its absolute value series at any complex $s$ is the same nonnegative series at $\operatorname{Re}s$, so the identity holds throughout that half-plane. At $\mathfrak b^h$ every local exponent is a multiple of $h$, so $c(\mathfrak b^h)\ge1$. [F2, F3, step 1.1, algebra]

3.1 By [F3] the coefficients can be grouped by norm, with finitely many ideals in each group; the ideals are countable as the union of these finite sets. The map $\mathfrak b\mapsto\mathfrak b^h$ is injective by [F2]. Keeping just its terms in the nonnegative series gives the displayed inequality, first over every finite collection of ideals and then by monotone sums. Grouping by norms does not discard multiplicities of distinct ideals of the same norm. [F2, F3, step 2.1, algebra] ∎ 