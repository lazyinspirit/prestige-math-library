---
id: lem-ip-vandermonde-determinant
kind: lemma
title: The Vandermonde determinant for real moment-curve vectors
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-determinant-of-a-square-matrix
  - thm-leibniz-determinant-is-alternating-multilinear-and-normalized
  - thm-real-square-matrix-invertible-iff-determinant-nonzero
  - thm-invertible-matrix-theorem
  - def-linear-independence
  - def-multivariate-polynomial-ring-by-iteration
  - def-polynomial-ring-over-a-commutative-ring
  - cor-factor-theorem-over-a-commutative-ring
  - cor-polynomial-ring-over-a-domain-is-a-domain
  - thm-universal-property-of-a-polynomial-ring
  - thm-reals-field
  - def-natural-numbers
  - thm-induction-principle
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.013A, Chapter B §1, The Vandermonde Determinant"
      url: "https://ocw.mit.edu/ans7870/18/18.013a/textbook/HTML/chapter_b/contents.html"
---

## Statement

Let $d\ge1$ be an integer, let $t_1,\ldots,t_d$ be commuting indeterminates over $\mathbb R$, and let $V_d$ be the $d\times d$ matrix with $(i,j)$ entry $t_j^{i-1}$. Then
$$\det V_d=\prod_{1\le p<q\le d}(t_q-t_p).$$
Consequently, for any distinct real numbers $s_1,\ldots,s_d$, the $d$ vectors
$$(1,s_j,s_j^2,\ldots,s_j^{d-1})^{\mathsf T},\qquad 1\le j\le d,$$
are linearly independent.

## Statement references

[[def-determinant-of-a-square-matrix|Leibniz determinant]]

[[thm-leibniz-determinant-is-alternating-multilinear-and-normalized|Alternating determinant property]]

[[thm-real-square-matrix-invertible-iff-determinant-nonzero|Nonzero determinant criterion]]

[[thm-invertible-matrix-theorem|Invertibility and trivial nullspace]]

[MIT OpenCourseWare 18.013A, Chapter B §1, “The Vandermonde Determinant”](https://ocw.mit.edu/ans7870/18/18.013a/textbook/HTML/chapter_b/contents.html)

## Facts & Assumptions

**Given:** $d\ge1$, the polynomial ring $P=\mathbb R[t_1,\ldots,t_d]$, and the matrix $V_d$ in the statement.

[F1] $\mathbb R$ is a field, recursively adjoining one polynomial indeterminate to an integral domain again gives an integral domain, and the new indeterminate is the coefficient sequence supported in degree $1$ ([[thm-reals-field]], [[def-multivariate-polynomial-ring-by-iteration]], [[def-polynomial-ring-over-a-commutative-ring]], [[cor-polynomial-ring-over-a-domain-is-a-domain]]). Iterating the domain fact gives that every coefficient ring $\mathbb R[t_1,\ldots,t_n]$ is an integral domain.

[F2] The determinant is the Leibniz signed sum over permutations, is alternating in its columns, and has the identity term with coefficient $1$ ([[def-determinant-of-a-square-matrix]], [[thm-leibniz-determinant-is-alternating-multilinear-and-normalized]]).

[F3] For a commutative coefficient ring $C$, a polynomial $f(T)\in C[T]$ vanishes at $a\in C$ exactly when $T-a$ divides $f$ ([[cor-factor-theorem-over-a-commutative-ring]]); recursively applying the polynomial-ring universal property gives the ring homomorphism that evaluates all variables at real nodes ([[thm-universal-property-of-a-polynomial-ring]], [[def-multivariate-polynomial-ring-by-iteration]]).

[F4] For every $d\times d$ real matrix, determinant nonzero is equivalent to invertibility, and invertibility is equivalent to trivial kernel of its matrix map ([[thm-real-square-matrix-invertible-iff-determinant-nonzero]], [[thm-invertible-matrix-theorem]]).

[F5] A list of columns is linearly independent exactly when its coefficient-to-column map has trivial kernel ([[def-linear-independence]]).

[F6] Induction applies to natural-number-indexed constructions, including the recursive polynomial-ring construction and the finite sequence of root factors ([[def-natural-numbers]], [[thm-induction-principle]]).

## Proof



**Given:** The assumptions and notation above.

1.1 By induction on $n$, every iterated ring $\mathbb R[t_1,\ldots,t_n]$ is an integral domain: the base $\mathbb R$ is a field, hence a domain, and the successor step is exactly [F1]. In each iteration the new indeterminate has coefficient $1$ in degree $1$, whereas every preceding indeterminate is embedded as a constant polynomial; since $1\ne0$ in $\mathbb R$, all the $t_j$ are pairwise distinct. [F1, F6, algebra]

1.2 For $d=1$, $V_d=[1]$ and the empty product is $1$, so the formula holds. For the inductive step let $d\ge2$ and suppose the formula holds in size $d-1$. Put $C=\mathbb R[t_1,\ldots,t_{d-1}]$ and $T=t_d$, so the recursive construction identifies $\mathbb R[t_1,\ldots,t_d]=C[T]$. Regard $D_d:=\det V_d$ as a polynomial $f(T)\in C[T]$. [F1, F6, algebra]

2.1 The Leibniz expansion in [F2] shows that only powers $T^0,\ldots,T^{d-1}$ occur in $f$, and that the coefficient of $T^{d-1}$ is $D_{d-1}:=\det V_{d-1}$: precisely the terms with exponent $d-1$ in the last column are those permutations fixing the last row, and their remaining signed sum is the Leibniz determinant of $V_{d-1}$. For each $j<d$, substituting $T=t_j$ makes the last column equal column $j$, so alternation in [F2] gives $f(t_j)=0$. [F2, F3, algebra]

2.2 The elements $t_1,\ldots,t_{d-1}$ are distinct in the domain $C$ by step 1.1. Starting with $f$, apply [F3] successively at $t_1,\ldots,t_{d-1}$. At stage $k$, if $f=\bigl(\prod_{j<k}(T-t_j)\bigr)g_k$, evaluation at $t_k$ gives
$$0=f(t_k)=\bigl(\prod_{j<k}(t_k-t_j)\bigr)g_k(t_k).$$
Every factor $t_k-t_j$ is nonzero, so their product is nonzero in the domain $C$; hence $g_k(t_k)=0$, and [F3] gives $T-t_k\mid g_k$. Induction over these finitely many stages yields
$$f(T)=g(T)\prod_{j<d}(T-t_j)$$
for some $g(T)\in C[T]$. [F1, F3, F6, step 1.1]

3.1 By the induction hypothesis, $D_{d-1}=\prod_{1\le p<q<d}(t_q-t_p)$, which is nonzero because each difference is nonzero in the domain $C$. Thus the coefficient of $T^{d-1}$ in $f$ is nonzero. The product $\prod_{j<d}(T-t_j)$ is monic of degree $d-1$. If $g$ had any nonzero coefficient at a positive power, its highest such power times this monic product would give a nonzero coefficient of $f$ above degree $d-1$, contradicting step 2.1. Therefore $g$ is constant, and comparison of the $T^{d-1}$ coefficients gives $g=D_{d-1}$. This proves
$$D_d=D_{d-1}\prod_{j<d}(t_d-t_j)=\prod_{1\le p<q\le d}(t_q-t_p).$$
By induction the determinant formula holds for every $d\ge1$. [F1, F6, step 1.1, step 1.2, step 2.1, step 2.2, algebra]

4.1 For distinct real nodes $s_1,\ldots,s_d$, the evaluation homomorphism in [F3] substitutes them into the formula and gives $\det V_d(s_1,\ldots,s_d)=\prod_{p<q}(s_q-s_p)\ne0$. By [F4], the square matrix with these moment-curve vectors as columns is invertible, hence has trivial coefficient kernel and linearly independent columns by [F5]. [F3, F4, F5, step 3.1, algebra] ∎
