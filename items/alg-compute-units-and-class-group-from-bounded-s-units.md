---
id: alg-compute-units-and-class-group-from-bounded-s-units
kind: algorithm
title: Compute ordinary unit generators and the ideal class group
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
dependency_level: 6
deps:
  - alg-integer-column-hermite-normal-form
  - thm-integer-column-hnf-terminates-and-is-canonical
  - alg-prime-ideal-decomposition-from-integral-basis
  - thm-prime-ideal-decomposition-algorithm-correct
  - alg-prime-ideals-of-bounded-norm
  - thm-integral-ideal-enumeration-correct
  - thm-small-prime-ideal-class-generators-correct
  - thm-lenstra-integral-s-unit-height-generators
  - thm-s-unit-valuation-exact-sequence
  - alg-integer-smith-normal-form
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - def-integral-basis-and-power-integral-basis
  - def-s-integers-and-s-units-of-a-number-field
  - def-field-norm-and-trace
  - cor-trace-and-norm-of-an-algebraic-integer
  - thm-number-field-discriminant-is-well-defined-and-nonzero
  - def-discriminant-of-a-number-field-basis-and-order
  - cor-integral-elements-form-a-subring
  - def-ideal-class-group-of-a-domain
  - def-absolute-norm-of-an-ideal
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - thm-integer-smith-normal-form-computes-kernel-and-cokernel
  - thm-number-field-integral-ideal-factorisation-in-zf
  - thm-ideal-norm-is-multiplicative
  - thm-minkowski-bound-for-ideal-classes
  - thm-gregory-leibniz-series-for-pi-from-a-finite-remainder
  - def-axiom-of-choice
  - def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field
  - lem-relative-projective-height-coordinate-invariance
  - thm-principal-ideal-norm-is-absolute-field-norm
  - thm-field-norm-and-trace-by-embeddings
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "H. W. Lenstra Jr., Algorithms in Algebraic Number Theory, §§5–6"
      url: "https://arxiv.org/pdf/math/9204234"
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Chapters 2–4 and 6–7"
      url: "https://wstein.org/books/ant/ant.pdf"
verification:
  precheck: n/a
---

## Definition

Assume the Axiom of Choice. Input a number field $K=\mathbb Q(\alpha)$ given by a monic irreducible polynomial $f\in\mathbb Z[X]$ of degree $n$, an integral basis $\omega_j=P_j(\alpha)$ with $P_j\in\mathbb Q[X]$ of degree less than $n$, its exact multiplication table, its field discriminant $\Delta$, and signature $(r_1,r_2)$. Put $B=|\Delta|$.

1. Enumerate all prime ideals $\mathfrak p\subseteq\mathcal O_K$ with $N\mathfrak p\le B$ by bounded-norm prime-ideal enumeration. Call the resulting finite set $T$ and put $m_T=\max(\{1\}\cup\{N\mathfrak p:\mathfrak p\in T\})$.

2. Write $f(X)=X^n+\sum_{k=0}^{n-1}a_kX^k$, put $R=1+\max_k|a_k|$, and write $P_j(X)=\sum_{k=0}^{n-1}c_{jk}X^k$ with missing coefficients zero. Set $W_j=\sum_{k=0}^{n-1}|c_{jk}|R^k$. Form the exact trace Gram matrix $G=(\operatorname{Tr}_{K/\mathbb Q}(\omega_i\omega_j))_{i,j}$ and its rational inverse. For each $i$, set
   $$C_i=\left\lceil\sum_j |(G^{-1})_{ij}|\,\left\lceil nB^2W_j\right\rceil\right\rceil.$$
   Enumerate all nonzero $x=\sum_i z_i\omega_i$ with integer coordinates $-C_i\le z_i\le C_i$.

3. For each such $x$, compute the nonzero integer $|N_{K/\mathbb Q}(x)|$. For every rational prime $p$ dividing it, run the exact integral-basis prime-decomposition algorithm to list all prime ideals above $p$. Reject $x$ if $x$ belongs to any listed prime ideal not in $T$; membership is tested by reducing its integral-basis coordinate vector modulo that ideal's HNF basis. Let $g_1,\ldots,g_m$ be the retained elements in lexicographic coordinate order.

4. For every $\mathfrak p\in T$ and every $g_j$, construct $\mathfrak p^e$ by ideal multiplication and HNF reduction, beginning with $e=1$. The largest $e$ for which $g_j\in\mathfrak p^e$ is $\operatorname{ord}_{\mathfrak p}(g_j)$. Stop after $e=v_p(|N_{K/\mathbb Q}(g_j)|)$, where $p$ is the rational prime below $\mathfrak p$; if this bound is zero the valuation is zero. These integers form the matrix $V\in\mathbb Z^{|T|\times m}$.

5. Run the integer Smith-normal-form algorithm to obtain $U V Q=D$, with $U$ and $Q$ integer matrices having integer inverses and $D$ diagonal. For every zero-diagonal column $q_j$ of $D$, return the ordinary unit $u_j=\prod_{\ell=1}^m g_\ell^{Q_{\ell j}}$. For every nonzero diagonal entry $\delta_i>1$, return the ideal-class generator represented by $\prod_{\mathfrak p_j\in T}\mathfrak p_j^{(U^{-1}e_i)_j}$ and invariant factor $\delta_i$; omit entries equal to $1$.

The algorithm returns generators of $\mathcal O_K^\times$ and invariant-factor data for $\operatorname{Cl}(\mathcal O_K)$. It uses a finite coordinate box containing all Lenstra-bounded generators and does not numerically test a real height. It does not output a fundamental system of units, a regulator, a relation matrix, or a complexity bound.

## Definition references

[[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field|planned relative height normalization]]

[Lenstra, Theorem 6.2 and §5 valuation sequence](https://arxiv.org/pdf/math/9204234)

[Stein, Chapters 2–4 and 6–7](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice and the monogenic field presentation, integral basis, multiplication table, discriminant, and signature in the Definition.

[A1] The Axiom of Choice is used in the Minkowski and Lenstra generation arguments ([[def-axiom-of-choice]], [[thm-minkowski-bound-for-ideal-classes]], [[thm-lenstra-integral-s-unit-height-generators]]).

[F1] A field discriminant is a nonzero integer, and the trace Gram matrix of a rational basis has nonzero determinant ([[thm-number-field-discriminant-is-well-defined-and-nonzero]], [[def-discriminant-of-a-number-field-basis-and-order]]).

[F2] The trace of an algebraic integer is an integer, and the trace form is the matrix trace of multiplication ([[cor-trace-and-norm-of-an-algebraic-integer]], [[def-field-norm-and-trace]]).

[F3] The finite set of primes with norm at most $B$ generates the ideal class group; the class group is finite ([[thm-small-prime-ideal-class-generators-correct]]).

[F4] Integral-basis prime decomposition returns exactly the primes above a rational prime, including when it divides a power-order index ([[thm-prime-ideal-decomposition-algorithm-correct]], [[alg-prime-ideal-decomposition-from-integral-basis]]).

[F5] The unrooted relative height has finite-place denominator factor $N\operatorname{den}(x)$, real weights one, and complex weights two ([[def-absolute-multiplicative-weil-height-on-projective-space-over-a-number-field]], [[thm-lenstra-integral-s-unit-height-generators]]).

[F6] The bounded-height theorem says integral $T$-units of height at most $d^2m_T$ generate $U_T$, where $d=(2/\pi)^{r_2}\sqrt{|\Delta|}$ ([[thm-lenstra-integral-s-unit-height-generators]]).

[F7] The valuation sequence identifies $\ker\nu$ with $\mathcal O_K^\times$ and $\operatorname{im}\nu$ with $\ker\kappa$ when the classes of $T$ generate ([[thm-s-unit-valuation-exact-sequence]]).

[F8] The Smith algorithm returns transformations and exact integer kernel and cokernel data ([[alg-integer-smith-normal-form]], [[thm-integer-smith-normal-form-computes-kernel-and-cokernel]]).

[F9] Principal ideal norms equal absolute field norms, ideal norms multiply, and the field norm is the product over embeddings ([[thm-principal-ideal-norm-is-absolute-field-norm]], [[thm-ideal-norm-is-multiplicative]], [[thm-field-norm-and-trace-by-embeddings]]).

[F10] The relative projective height formula is invariant under common nonzero scaling of the coordinate tuple ([[lem-relative-projective-height-coordinate-invariance]]).

## Verification



1.1 The discriminant is nonzero, so the trace Gram matrix is invertible and every $C_i$ is a finite integer. Each coordinate interval contains finitely many integers; hence the candidate-element scan is finite, and its trace and multiplication data are computed by exact rational or integer operations. [F1, F2, given, algebra]

2.1 Every norm factorization uses a nonzero integer, the prime-decomposition routine terminates on each rational prime, and each valuation search stops at the finite exponent bound specified by the norm. The final Smith routine terminates for rectangular and zero matrices by [F8]. Thus all nested loops in the procedure are finite. [F4, F8, F9, given, algebra] ∎

