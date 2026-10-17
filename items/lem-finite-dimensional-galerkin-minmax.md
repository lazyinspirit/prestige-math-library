---
id: lem-finite-dimensional-galerkin-minmax
kind: lemma
title: Finite-dimensional conforming Ritz values satisfy min–max
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps:
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-bounded-linear-operator
  - def-compact-linear-operator
  - def-countable-choice
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - cor-finite-dimensional-normed-spaces-are-banach
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - thm-rank-nullity
  - thm-spectral-theorem-for-compact-self-adjoint-operators
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 47
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf
      locator: "§§47.2.1–47.2.2, the generalized stiffness–mass eigenproblem and the finite-dimensional min–max principle."
    - title: Bertrand Mercier, Topics in Finite Element Solution of Elliptic Problems, Chapter 8
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf
      locator: "§§8.4–8.6, printed pp. 131–135: the conforming discrete eigenproblem and its spectral subspaces."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $V_h$ be an
$N$-dimensional subspace of a real or complex Hilbert space $V$, with
$N\ge1$. Let $a$ be a bounded Hermitian coercive form on $V$ and let
$b(u,v):=(Ju,Jv)_H$ for a bounded injective linear map $J:V\to H$ into a
Hilbert space. The generalized Ritz problem on $V_h$ is
$$a(u_h,v_h)=\lambda_h b(u_h,v_h)\qquad(v_h\in V_h).$$
Its eigenvalues, listed with multiplicity in increasing order, are positive
numbers $\lambda_{h,1}\le\cdots\le\lambda_{h,N}$. For every
$1\le m\le N$,
$$\lambda_{h,m}=\min_{\substack{W_h\subseteq V_h\\\dim W_h=m}} \max_{v_h\in W_h\setminus\{0\}} \frac{a(v_h,v_h)}{b(v_h,v_h)}.$$

## Facts & Assumptions

**Given:** Countable Choice, the finite-dimensional conforming subspace $V_h$, the bounded Hermitian coercive form $a$, the injective map $J$, and the inner product $b(u,v)=(Ju,Jv)_H$.

[F1] Hermitian symmetry and coercivity make $a$ a positive inner product on $V_h$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]).

[F2] Boundedness and injectivity of $J$ make $b$ a bounded positive inner product on $V_h$ ([[def-bounded-linear-operator]], [[def-real-and-complex-inner-product-space]]).

[F3] Every finite-dimensional real or complex inner-product space has a finite orthonormal basis ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]).

[F4] A compact self-adjoint operator has an orthonormal eigenfamily spanning the orthogonal complement of its kernel ([[thm-spectral-theorem-for-compact-self-adjoint-operators]]).

[F5] A map from an $m$-dimensional space to an $(m-1)$-dimensional space has a nonzero kernel ([[thm-rank-nullity]]).

[F6] Continuous functions attain their extrema on compact finite-dimensional unit spheres ([[thm-heine-borel-rn]], [[thm-extreme-value-metric]]).

[F7] A linear operator is compact when the closure of the image of its closed unit ball is compact; in finite-dimensional real coordinates, closed bounded sets are compact ([[def-compact-linear-operator]], [[thm-heine-borel-rn]]).

[F8] Every finite-dimensional normed space is complete ([[cor-finite-dimensional-normed-spaces-are-banach]]).

## Proof
**Proof technique:** direct.

**Given:** The data of the statement and an integer $1\le m\le N$.

1.1 Choose an $a$-orthonormal basis $\psi_1,\ldots,\psi_N$ of $V_h$ by [F3]. For $u_h\in V_h$, define $$K_hu_h:=\sum_{i=1}^N b(u_h,\psi_i)\psi_i.$$ If $v_h=\sum_{i=1}^N c_i\psi_i$, then $a(K_hu_h,v_h)=\sum_i b(u_h,\psi_i)\overline{c_i}=b(u_h,v_h)$, since $b$ is conjugate-linear in its second argument and the basis is orthonormal. This finite coordinate formula also makes $K_h$ linear in $u_h$. [F1, F2, F3, given, construct]

2.1 For $u_h,v_h\in V_h$, $a(K_hu_h,v_h)=b(u_h,v_h)=\overline{b(v_h,u_h)} =\overline{a(K_hv_h,u_h)}=a(u_h,K_hv_h),$ so $K_h$ is self-adjoint in the energy inner product. Also $a(K_hu_h,u_h)=b(u_h,u_h)>0$ when $u_h\ne0$, so $K_h$ is positive and injective. To verify compactness from the compact-closure definition, use the $a$-orthonormal basis $\psi_1,\ldots,\psi_N$ from step 1.1. The matrix entries $m_{ij}:=a(K_h\psi_j,\psi_i)$ give, for $x=\sum_j c_j\psi_j$, $\|K_hx\|_a^2=\sum_i|\sum_jm_{ij}c_j|^2\le(\sum_{i,j}|m_{ij}|^2)\sum_j|c_j|^2$, so $K_h$ is bounded. The coordinate map identifies $V_h$ isometrically with $\mathbb R^N$ in the real case and $\mathbb R^{2N}$ in the complex case. The closure of the image of its closed unit ball is therefore closed and bounded in finite-dimensional Euclidean coordinates, hence compact by Heine--Borel [F7]; the unit-ball criterion in [F7] makes $K_h$ compact. [F1, F2, F7, step 1.1, algebra]

3.1 The inner product norm on $V_h$ is complete by [F8], so the compact self-adjoint spectral theorem [F4] applies to $K_h$. It gives an $a$-orthonormal eigenbasis $\phi_{h,1},\ldots,\phi_{h,N}$ with positive eigenvalues ordered $\mu_{h,1}\ge\cdots\ge\mu_{h,N}>0$. The equation $K_h\phi_{h,j}=\mu_{h,j}\phi_{h,j}$ is equivalent to the Ritz equation with $\lambda_{h,j}=\mu_{h,j}^{-1}$, so these are the positive Ritz eigenvalues in increasing order. For $v_h=\sum_{j=1}^N c_j\phi_{h,j}$, $a(v_h,v_h)=\sum_j|c_j|^2,\qquad b(v_h,v_h)=a(K_hv_h,v_h)=\sum_j\mu_{h,j}|c_j|^2.$ [F4, F8, step 2.1, given, algebra]

4.1 On $W_h:=\operatorname{span}\{\phi_{h,1},\ldots,\phi_{h,m}\}$, $\sum_j\mu_{h,j}|c_j|^2\ge\mu_{h,m}\sum_j|c_j|^2$, with equality for $v_h=\phi_{h,m}$. Thus $\max_{v_h\in W_h\setminus\{0\}}a(v_h,v_h)/b(v_h,v_h)=\mu_{h,m}^{-1}$, so the minimum in the statement is at most $\lambda_{h,m}$. [step 3.1, given, algebra]

5.1 Let $W_h$ be any $m$-dimensional subspace of $V_h$. The linear map $v_h\mapsto(a(v_h,\phi_{h,1}),\ldots,a(v_h,\phi_{h,m-1}))$ has a nonzero kernel by [F5]; when $m=1$ its target is the zero-dimensional space and the kernel is all of $W_h$. A nonzero vector in that kernel has only coefficients $c_j$ with $j\ge m$ in step 3.1. Since $\mu_{h,j}\le\mu_{h,m}$ for those indices, its quotient is at least $\mu_{h,m}^{-1}$. Hence the maximum on every $W_h$ is at least $\lambda_{h,m}$. That maximum is attained by [F6], and the span in step 4.1 attains the outer minimum. [F5, F6, step 3.1, step 4.1, given, algebra] ∎
