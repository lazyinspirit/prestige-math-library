---
id: lem-proper-closed-convex-function-affine-minorant
kind: lemma
title: "A proper closed convex function has an affine minorant"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-proper-closed-convex-function-on-rn
  - def-euclidean-inner-product
  - thm-nearest-point-in-a-nonempty-closed-convex-set
  - lem-projection-onto-a-closed-convex-set-has-the-variational-inequality
  - cor-bolzano-weierstrass-in-rn
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §1.1"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
    - title: "Amir Beck, First-Order Methods in Optimization, SIAM, 2017, Chapter 6"
      url: "https://epubs.siam.org/doi/book/10.1137/1.9781611974997"
---

## Statement

Let $n\in\mathbb N$ and let $g:\mathbb R^n\to(-\infty,+\infty]$ be proper, closed and convex in the epigraph convention of [[def-proper-closed-convex-function-on-rn]]. Then there are $a\in\mathbb R^n$ and $b\in\mathbb R$ such that
$$g(x)\ge\langle a,x\rangle+b\qquad(x\in\mathbb R^n).$$

## Facts & Assumptions

**Given:** The function $g$ in the Statement, with effective domain $D=\{x:g(x)<+\infty\}$ and epigraph $E_g=\{(x,s):g(x)\le s\}$.

[A1] [[def-proper-closed-convex-function-on-rn]]: $D$ is nonempty and convex, and $E_g$ is a nonempty closed convex subset of $\mathbb R^{n+1}$.

[F1] [[thm-nearest-point-in-a-nonempty-closed-convex-set]]: every point of a nonempty closed convex Euclidean set has a unique nearest point.

[F2] [[lem-projection-onto-a-closed-convex-set-has-the-variational-inequality]]: if $p$ is the nearest point of a closed convex set to $q$, then $\langle q-p,z-p\rangle\le0$ for every point $z$ in that set.

[F3] [[cor-bolzano-weierstrass-in-rn]]: every bounded sequence in a positive-dimensional Euclidean space has a convergent subsequence; this corollary records a choice-free proof.

## Proof

**Proof technique:** direct.

1.1 Let $d$ be the dimension of the direction space of $\operatorname{aff}D$. If $d=0$, then $D$ is a singleton $\{x_0\}$ and the constant affine function $g(x_0)$ is a minorant. If $d>0$, choose affinely independent points $a_0,\ldots,a_d\in D$ spanning $\operatorname{aff}D$ and let $x_0$ be their barycenter. Iterating the two-point convexity condition shows their simplex lies in $D$. In affine barycentric coordinates, this simplex is defined by $\lambda_i\ge0$ and $\sum_{i=0}^d\lambda_i=1$; at $x_0$ every $\lambda_i=1/(d+1)$. These affine coordinate functions on the finite-dimensional space $\operatorname{aff}D$ are continuous, so they remain positive on a relative neighborhood of $x_0$, which therefore lies in the simplex and in $D$. Thus $x_0$ is a relative-interior point of $D$. [A1, construct]

1.2 Put $p=(x_0,g(x_0))\in E_g$ and $q_j=(x_0,g(x_0)-1/j)$ for integers $j\ge1$. Each $q_j$ lies outside $E_g$ and tends to $p$. Let $p_j$ be its unique nearest point in $E_g$, supplied by [F1]. Since $p\in E_g$, $\|q_j-p_j\|_2\le1/j$. For each coordinate $\ell<n+1$, $|(q_j-p_j)_\ell|\le\|q_j-p_j\|_2\le1/j$, because each squared coordinate is a term of the sum defining the squared Euclidean norm. As $q_j\to p$ coordinatewise, this gives $p_j\to p$ coordinatewise and hence in Euclidean norm, since there are finitely many coordinates. [A1, F1, given, algebra]

2.1 Normalize $u_j=(q_j-p_j)/\|q_j-p_j\|_2$, which is defined because $q_j\notin E_g$ and $E_g$ is closed. The vectors $u_j$ have norm one, so their range lies in the Euclidean ball $B(0,2)$. By [F3], choose a subsequence $(u_{j_\ell})$ converging in $\mathbb R^{n+1}$ to $u=(a,c)$. Since each coordinate difference is bounded by the Euclidean norm, this convergence gives coordinate convergence; the finite-sum formula for the squared norm then gives $\|u\|_2^2=\lim_{\ell\to\infty}\|u_{j_\ell}\|_2^2=1$. Both $q_j$ and $p_j$ have horizontal coordinate in $\operatorname{aff}D$, so each horizontal component of $u_j$ lies in the direction space $V$ of $\operatorname{aff}D$. This finite-dimensional subspace is closed: after extending a basis of $V$ to one of $\mathbb R^n$, it is the common zero set of the remaining continuous coordinate functionals. Hence $a\in V$. For each fixed $z\in E_g$, [F2] gives $\langle u_j,z-p_j\rangle\le0$. Along the chosen subsequence, coordinate convergence and the finite-sum formula for the inner product show $\langle u_{j_\ell},z-p_{j_\ell}\rangle\to\langle u,z-p\rangle$, so $\langle u,z-p\rangle\le0$. [F1, F2, F3, step 1.2, algebra]

3.1 The upward vertical ray $p+(0,s)$ lies in $E_g$ for all $s\ge0$, so step 2.1 forces $c\le0$. If $c=0$, the relative neighborhood from step 1.1 lets each direction $h\in V$ be tested at $x_0+\varepsilon h$ and $x_0-\varepsilon h$ for sufficiently small $\varepsilon>0$. Applying step 2.1 to the corresponding epigraph points gives both $\varepsilon\langle a,h\rangle\le0$ and $-\varepsilon\langle a,h\rangle\le0$, so $\langle a,h\rangle=0$ for every $h\in V$. Taking $h=a\in V$ gives $\|a\|_2^2=0$, hence $a=0$, contradicting $\|u\|_2=1$. Thus $c<0$. [A1, step 1.1, step 2.1, algebra]

4.1 For any $x\in D$, apply step 2.1 to $(x,g(x))\in E_g$ to get $\langle a,x-x_0\rangle+c(g(x)-g(x_0))\le0$. Dividing by $c<0$ reverses the inequality and yields $g(x)\ge g(x_0)+\langle -a/c,x-x_0\rangle$. Set $a_0=-a/c$ and $b_0=g(x_0)-\langle a_0,x_0\rangle$. This is the desired affine bound on $D$, and outside $D$ the value is $+\infty$, so the bound holds on all of $\mathbb R^n$. [step 2.1, step 3.1, algebra] ∎

## Remarks

The proof constructs a support normal using nearest points to a sequence below the epigraph. It uses the choice-free finite-dimensional Bolzano–Weierstrass supplier [F3], not the separate boundary-support theorem whose published statement assumes Countable Choice and the Axiom of Choice.
