---
id: lem-separated-torus-exponential-sum-large-sieve
kind: lemma
title: "Large-Sieve Bound for Separated Torus Frequencies"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-exponential-character-e
  - lem-geometric-progression-exponential-sum
  - thm-cauchy-schwarz-finite
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "R. C. Vaughan, The Hardy–Littlewood Method, second edition"
      url: "https://djvu.online/file/y04IjoKF754hT"
      locator: "Chapter 5 §5.2, Lemma 5.3 and proof, printed pp. 64–66"
---

## Statement

Let $d\ge1$, let $N_1,\ldots,N_d$ be positive integers, and let
$0<\delta_j\le\tfrac12$ for $1\le j\le d$. Write
$\mathbb T=\mathbb R/\mathbb Z$ and
$\|t\|_{\mathbb T}:=\min_{m\in\mathbb Z}|t-m|$ for $t\in\mathbb T$.
Suppose $Y$ is a finite subset of $\mathbb T^d$ such that for every distinct
$y,y'\in Y$ there is a coordinate $j$ with
$\|y_j-y'_j\|_{\mathbb T}\ge\delta_j$. For complex coefficients
$a_{\boldsymbol n}$ indexed by
$\boldsymbol n\in\prod_{j=1}^d\{1,\ldots,N_j\}$, define
$$P(y):=\sum_{\boldsymbol n}a_{\boldsymbol n}e(\boldsymbol n\cdot y),$$
where $e(t)=\exp(2\pi i t)$ and the dot product is computed using any real
representatives of the torus coordinates. There is a constant $C_d>0$,
depending only on $d$, such that
$$\sum_{y\in Y}|P(y)|^2\le C_d\left(\prod_{j=1}^d(N_j+\delta_j^{-1})\right) \sum_{\boldsymbol n}|a_{\boldsymbol n}|^2.$$

## Statement references

[Vaughan, Chapter 5 §5.2, Lemma 5.3](https://djvu.online/file/y04IjoKF754hT)

## Facts & Assumptions

**Given:** The dimension $d$, the positive integer frequency bounds $N_j$, the separation radii $\delta_j$, and the finite set $Y$.

[F1] [[def-exponential-character-e]]: $e(t)=\exp(2\pi i t)$ for real $t$, and $\|t\|_{\mathbb T}$ is distance to the nearest integer.

[F2] [[lem-geometric-progression-exponential-sum]]: $e$ is periodic with period $1$, and for $t\notin\mathbb Z$ and integer $M\ge1$,
$$\left|\sum_{\ell=0}^{M-1}e(\ell t)\right|\le\min\left(M,\frac{1}{2\|t\|_{\mathbb T}}\right).$$

[F3] [[thm-cauchy-schwarz-finite]] gives the real finite Cauchy–Schwarz inequality, used on nonnegative absolute-value lists after the triangle inequality.

## Proof

**Proof technique:** direct.

1.1 For each $j$, define the Fejér kernel $$K_j(t):=\frac1{2N_j}\left|\sum_{\ell=0}^{2N_j-1}e(\ell t)\right|^2 =\sum_{|h|<2N_j}\left(1-\frac{|h|}{2N_j}\right)e(ht).$$ The equality follows by expanding the square and counting the $2N_j-|h|$ pairs with difference $h$. By [F2], if $x=N_j\|t\|_{\mathbb T}$ then $$0\le K_j(t)\le N_j\min\left(2,\frac{1}{8x^2}\right) \le\frac{8N_j}{(1+N_j\|t\|_{\mathbb T})^2},$$ where the integer case $x=0$ uses the trivial bound $2N_j$, and the last inequality follows separately for $x\le1$ and $x\ge1$. [given, F2, algebra]

2.1 Let $c_y$ be arbitrary complex numbers on $Y$ and put $T(\boldsymbol h)=\sum_{y\in Y}c_y e(\boldsymbol h\cdot y)$ for integer vectors $\boldsymbol h$. For one coordinate, the nonnegative weights $$w_j(h):=2\left(1-\frac{|h|}{2N_j}\right)\quad (|h|<2N_j),$$ and $w_j(h)=0$ otherwise, satisfy $w_j(h)\ge1$ for $1\le h\le N_j$. Hence $$\sum_{\boldsymbol n\in\prod_j\{1,\ldots,N_j\}}|T(\boldsymbol n)|^2 \le\sum_{\boldsymbol h\in\mathbb Z^d}\left(\prod_jw_j(h_j)\right)|T(\boldsymbol h)|^2 =2^d\sum_{y,y'\in Y}c_y\overline{c_{y'}}\prod_jK_j(y_j-y'_j).$$ The final equality follows by expanding $|T|^2$ and using the Fourier expansion in step 1.1. [given, F1, step 1.1, algebra]

3.1 For fixed $y\in Y$, partition each coordinate distance from $y_j$ into annuli $[m\delta_j,(m+1)\delta_j)$ for integers $m\ge0$. Each one-dimensional annulus is a union of at most two arcs of length at most $\delta_j$, and can be covered by at most four arcs of diameter strictly less than $\delta_j$. Therefore each product annulus is covered by at most $4^d$ product cells whose coordinate diameters are all strictly less than the corresponding $\delta_j$. Each such cell contains at most one point of $Y$, since two points in it would have distance less than $\delta_j$ in every coordinate, contrary to the separation hypothesis. Thus every product annulus contains at most $4^d$ centers. Using the decay from step 1.1 and summing over annuli gives $$\sup_{y\in Y}\sum_{y'\in Y}\prod_jK_j(y_j-y'_j) \le C_d\prod_j\sum_{m\ge0}\frac{N_j}{(1+N_jm\delta_j)^2} \le C_d\prod_j(N_j+\delta_j^{-1}),$$ since for each $j$ the $m=0$ term is $N_j$ and the remaining decreasing sum is at most $\int_0^\infty N_j(1+N_jt\delta_j)^{-2}\,dt=\delta_j^{-1}$. Each $K_j$ is nonnegative and even by its definition in step 1.1. Applying $2|c_yc_{y'}|\le|c_y|^2+|c_{y'}|^2$ to the expansion in step 2.1 therefore yields $$\sum_{\boldsymbol n\in\prod_j\{1,\ldots,N_j\}}|T(\boldsymbol n)|^2 \le C_d\prod_j(N_j+\delta_j^{-1})\sum_{y\in Y}|c_y|^2.$$ [given, step 1.1, step 2.1, algebra]

4.1 For arbitrary coefficients $a_{\boldsymbol n}$, first apply the finite triangle inequality and then [F3] to the real lists $|a_{\boldsymbol n}|$ and $|T(\boldsymbol n)|$. This gives $$\left|\sum_{y\in Y}c_yP(y)\right|^2 \le\left(\sum_{\boldsymbol n}|a_{\boldsymbol n}|^2\right) \left(\sum_{\boldsymbol n}|T(\boldsymbol n)|^2\right).$$ Insert the bound from step 3.1. If the vector $(P(y))_{y\in Y}$ is nonzero, choose $c_y=\overline{P(y)}/(\sum_{y'}|P(y')|^2)^{1/2}$; then $\sum_y|c_y|^2=1$ and $|\sum_yc_yP(y)|^2=\sum_y|P(y)|^2$. If the vector is zero the desired inequality is immediate. This proves the stated bound. [given, F3, step 3.1, algebra] ∎

