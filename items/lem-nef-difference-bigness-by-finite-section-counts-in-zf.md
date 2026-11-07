---
id: lem-nef-difference-bigness-by-finite-section-counts-in-zf
kind: lemma
title: Nef-difference bigness by finite section counts without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - thm-numerically-nef-mixed-intersections-and-ample-approximation-in-zf
  - lem-projective-field-ampleness-and-finite-map-criteria-in-zf
  - lem-projective-finite-difference-intersections-and-generated-positivity-in-zf
  - lem-nef-and-generated-mixed-intersection-positivity-in-zf
  - lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF over a supplied infinite field; only finite section choices, finite coherent presentations and rational polynomial bounds occur.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Finite-section reconstruction of the algebraic weak Morse estimate
      locator: Exact divisor sequences and finite Euler differences; no external inequality is imported.
---

## Statement

Work in ZF over an infinite field $k$. Let $T/k$ be an integral projective scheme of dimension $d\ge1$, and let $A,B$ be line bundles nonnegative on every integral projective curve of $T$. Write $J$ for the proved top mixed Euler intersection. If
$$J_{O_T}(A^{[d]})-dJ_{O_T}(A^{[d-1]},B)>0,$$
then there are a positive integer $q$ and a positive rational $c$ such that
$$\dim_k H^0(T,(A\otimes B^{-1})^{qm})\ge c m^d$$
for every sufficiently large integer $m$. In particular a positive power of $A\otimes B^{-1}$ has a nonzero global section. Brackets denote repeated intersection entries. No smoothness, normality, reduced-fibre or Cohen–Macaulay assumption is required.

## Facts & Assumptions

**Given:** Exactly the infinite field, integral projective scheme, integer dimension and two curve-nef line bundles with the strict mixed-intersection inequality in the Statement.

[F1] For curve-nef $L$ and a very ample $H$, every $L^a\otimes H^b$ with positive integers $a,b$ is ample. Mixed Euler intersections are nonnegative for curve-nef entries. [[thm-numerically-nef-mixed-intersections-and-ample-approximation-in-zf]]

[F2] An ample bundle has a positive very ample power; every coherent sheaf twisted by all sufficiently large powers of an ample bundle has zero higher cohomology. [[lem-projective-field-ampleness-and-finite-map-criteria-in-zf]]

[F3] Finite mixed Euler differences vanish above the coherent support dimension. At that dimension they are tensor multilinear, coherent-twist invariant and short-exact-sequence additive. [[lem-projective-finite-difference-intersections-and-generated-positivity-in-zf]]

[F4] A generated bundle has a section acting injectively on any specified coherent sheaf, with lower-dimensional cokernel, over the original infinite field. [[lem-nef-and-generated-mixed-intersection-positivity-in-zf]]

[F5] Intrinsic projective Cech cohomology is finite-dimensional and has the long exact sequences of coherent short exact sequences. [[lem-finite-graded-resolutions-and-projective-cech-cohomology-in-zf]]

## Proof

1.1 First suppose $A,B$ are very ample. Choose a nonzero regular section of $B$ on $O_T$ by [F4], and let $E$ be its effective Cartier zero scheme. Choose a second section of $B$ acting injectively on $O_E$, again by [F4]. If $E$ is empty, use its zero structure sheaf and all following bounds still hold. Powers of this second section give injections $O_E\otimes A^m\otimes B^{-j}\to O_E\otimes A^m$ for every $j\ge0$. Hence their zeroth cohomology dimensions are at most $h^0(E,A^m|_E)$. The first section gives, for $0\le j<m$, exact sequences
$$0\to A^m\otimes B^{-j-1}\to A^m\otimes B^{-j}\to O_E\otimes A^m\otimes B^{-j}\to0.$$
By [F5], the drop in $h^0$ at each step is at most $h^0(E,A^m|_E)$. Finite summation yields
$$h^0(T,(A\otimes B^{-1})^m)\ge h^0(T,A^m)-m h^0(E,A^m|_E).$$
All sections and sequences are actual finite data; surjectivity on global sections is not presumed. [F4, F5, given, construct, algebra]

1.2 For any coherent $G$ of support dimension at most $e$, [F3] shows that $n\mapsto\chi(G\otimes A^n)$ is a polynomial of degree at most $e$: its $(e+1)$st forward difference is zero for every integer $n$, and finite Newton interpolation gives this assertion without a Hilbert-polynomial theorem. Its coefficient of $n^e$ is $J_G(A^{[e]})/e!$. By [F2], for $G=O_T$ and $G=O_E$ these Euler polynomials equal the respective $h^0$ for all sufficiently large $n$. The regular divisor sequence, tensored by $B$, is $0\to O_T\to B\to O_E\otimes B\to0$. Additivity and top coherent-twist invariance in [F3] give
$$J_{O_E}(A^{[d-1]})=J_{O_T}(A^{[d-1]},B).$$
Consequently the right side of step 1.1 is a polynomial whose coefficient of $m^d$ is
$$\frac{J_{O_T}(A^{[d]})-dJ_{O_T}(A^{[d-1]},B)}{d!}.$$
If this coefficient is positive, the polynomial is bounded below by a positive rational multiple of $m^d$ for all sufficiently large integers $m$: bound the finitely many lower coefficients by their absolute-value sum. This includes $d=1$, for which the divisor polynomial is a constant length. [F2, F3, step 1.1, algebra]

2.1 If $A,B$ are ample rather than very ample, [F2] gives a common positive exponent $u$ for which both $A^u$ and $B^u$ are very ample. Their strict expression in step 1.2 is $u^d$ times that for $A,B$ by [F3], and their difference is $(A\otimes B^{-1})^u$. Apply steps 1.1–1.2 to obtain the asserted lower bound along this single positive exponent. No asymptotic estimate for higher cohomology of a nef bundle has been used. [F2, F3, step 1.1, step 1.2, algebra]

3.1 Now let $A,B$ be merely curve-nef and choose a specified very ample $H$ on $T$. Expand the finite polynomial
$$P(t)=J_{O_T}((A+tH)^{[d]})-dJ_{O_T}((A+tH)^{[d-1]},B+tH)$$
using [F3], with rational classes interpreted by clearing finite denominators. Its constant term is strictly positive by hypothesis. A positive rational $t=p/q$ sufficiently small has $P(t)>0$, as follows by bounding the finitely many other coefficients for $0<t\le1$. By [F1] the actual bundles $A'=A^q\otimes H^p$ and $B'=B^q\otimes H^p$ are ample. Their strict expression is $q^dP(t)>0$, while $A'\otimes(B')^{-1}=(A\otimes B^{-1})^q$. Step 2.1 applied to this pair proves the required lower bound, after absorbing its one further positive exponent into $q$. The same ample perturbation occurs in both entries and cancels exactly in their difference. Only one sufficiently small rational and finitely many sections are chosen. [F1, F3, step 2.1, algebra] ∎
