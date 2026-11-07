---
id: lem-osculating-subspaces-satisfy-brascamp-lieb-transversality
kind: lemma
title: Moment-Curve Osculating Subspaces Satisfy the Brascamp–Lieb Dimension Condition
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
- def-moment-curve
- def-moment-curve-plates-and-osculating-subspaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
  - title: Jean Bourgain, Ciprian Demeter, and Larry Guth, Proof of the main conjecture
      in Vinogradov’s mean value theorem for degrees higher than three
    url: https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf
    locator: '§6, Lemma 6.3, pp. 641–642: the osculating subspaces satisfy the dimension
      condition for the geometric Brascamp–Lieb inequality.'
---

## Statement

Let $n\ge2$, $1\le k\le n-1$, $M_n=n!$, and let $t_1,\ldots,t_{M_n}\in[0,1]$ be pairwise distinct. For $1\le j\le M_n$, let $V_k(t_j)=\operatorname{span}\{\Gamma_n'(t_j),\ldots,\Gamma_n^{(k)}(t_j)\}$ and let $\pi_j$ be orthogonal projection onto $V_k(t_j)$. Then every linear subspace $W\subseteq\mathbb R^n$ satisfies
$$\dim W\le\frac{n}{kM_n}\sum_{j=1}^{M_n}\dim(\pi_j(W)).$$

## Statement references

[Osculating subspaces]([[def-moment-curve-plates-and-osculating-subspaces]])

[BDG, Lemma 6.3](https://annals.math.princeton.edu/wp-content/uploads/annals-v184-n2-p07-p.pdf)

## Facts & Assumptions

**Given:** The data in the Statement and $\Gamma_n(t)=(t,t^2,\ldots,t^n)$.

[F1] $V_k(t)$ is the span of the first $k$ derivatives of $\Gamma_n$ ([[def-moment-curve-plates-and-osculating-subspaces]]).

[F2] The coordinates of $\Gamma_n$ are polynomials of degrees $1,\ldots,n$ with zero constant term ([[def-moment-curve]]).

## Proof

**Proof technique:** Bound the number of parameters where a projected derivative wedge can vanish, then count the dimensions of the projected subspaces.

1.1 The span of $\Gamma_n([0,1])$ is all of $\mathbb R^n$: a linear functional vanishing on the curve gives a polynomial $\sum_{r=1}^n c_rt^r$ vanishing on $[0,1]$, so every coefficient is zero. Hence for any subspace $W$ of dimension $d$, its orthogonal projection $\gamma(t)=\pi_W\Gamma_n(t)$ has coordinate polynomials spanning a $d$-dimensional space, and each has zero constant term. [F2, given, algebra]

2.1 For each integer $q$ from $1$ through $n-1$, consider $\gamma'(t)\wedge\cdots\wedge\gamma^{(q)}(t)\in\bigwedge^qW$. Each coordinate is a determinant of $q$ derivatives of $q$ coordinate polynomials. If those polynomials are linearly dependent, that determinant is zero; otherwise row reduction gives independent polynomials of distinct degrees at most $n$, so the determinant has degree at most $q(n-q)$, which is at most $(n-1)!$ (check $n=2,3$ directly and use $q(n-q)\le n^2/4\le(n-1)!$ for $n\ge4$). At least one such determinant is nonzero as a polynomial whenever $d\ge q$: choose $q$ independent coordinate polynomials, differentiate them, and use the polynomial Wronskian leading coefficient $\prod_{i<j}(m_j-m_i)\ne0$ after their distinct degrees $m_i$ are ordered. The root bound for a nonzero polynomial, obtained by repeatedly factoring out a linear factor at each distinct root, now shows that the wedge vanishes at no more than $(n-1)!$ of the distinct parameters $t_j$. [step 1.1, F2, given, algebra]

3.1 Suppose $1\le d=\dim W\le k$. If $\dim\pi_j(W)<d$, the map $\pi_j|_W$ has a nonzero kernel vector $v\in W\cap V_k(t_j)^\perp$ by [F1]. Therefore $v\cdot\gamma^{(r)}(t_j)=0$ for $1\le r\le d$, so the wedge in step 2.1 with $q=d$ vanishes at $t_j$. By that step this occurs for at most $(n-1)!$ indices. At every other index $\dim\pi_j(W)=d$, while all exceptional dimensions are nonnegative. Thus $\frac{n}{kM_n}\sum_j\dim\pi_j(W)\ge\frac{n}{kM_n}(M_n-(n-1)!)d=\frac{n-1}{k}d\ge d$. [F1, step 2.1, given, algebra]

3.2 Suppose $k\le d=\dim W\le n-1$. The rank of $\pi_j|_W$ equals the rank of its adjoint $\pi_W|_{V_k(t_j)}$, whose image is spanned by $\gamma'(t_j),\ldots,\gamma^{(k)}(t_j)$ by [F1]. Thus $\dim\pi_j(W)<k$ only when the wedge in step 2.1 with $q=k$ vanishes, which occurs for at most $(n-1)!$ indices. All other projected dimensions equal $k$, so $\frac{n}{kM_n}\sum_j\dim\pi_j(W)\ge\frac{n}{kM_n}(M_n-(n-1)!)k=n-1\ge d$. [F1, step 2.1, given, algebra]

4.1 If $d=0$ the inequality is immediate. If $d=n$, then $\pi_j(W)=V_k(t_j)$ for every $j$, so the right side is $n(kM_n)^{-1}(kM_n)=n=d$. Steps 3.1 and 3.2 cover all other dimensions and prove the Statement. [step 3.1, step 3.2, given, algebra] ∎
