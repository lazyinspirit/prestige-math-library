---
id: lem-daha-a1-macdonald-operator-preserves-orbit-sums
kind: lemma
title: "The A1 Macdonald operator is triangular on Weyl orbit sums"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-daha-a1-symmetric-macdonald-operator, def-daha-a1-root-datum-and-parameter-conventions]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alexander A. Kirillov Jr., Lectures on the affine Hecke algebras and Macdonald conjectures"
      url: "https://arxiv.org/pdf/math/9501219"
      locator: "Lecture 4, type-A1 Macdonald operator calculation, PDF p. 23; Lecture 6, §6.1, PDF pp. 29–30."
    - title: "I. G. Macdonald, Affine Hecke algebras and orthogonal polynomials"
      url: "https://numdam.org/item/SB_1994-1995__37__189_0.pdf"
      locator: "§§1 and 6, PDF pp. 2–3 and 12–14: triangular normalization and eigenfunction characterization."
---

## Statement

Let $m_0=1$ and $m_n=z^n+z^{-n}$ for $n\ge1$ be the A1 Weyl orbit sums. The degree of a nonzero Laurent polynomial $\sum_k a_kz^k$ is $\max\{|k|:a_k\ne0\}$. For every $n\ge0$, the operator $\mathcal D$ of [[def-daha-a1-symmetric-macdonald-operator]] sends $m_n$ to

$$
\mathcal Dm_n=\lambda_nm_n+\sum_{0\le j<n}d_{n,j}m_j,\qquad \lambda_n=tq^n+t^{-1}q^{-n},
$$

with coefficients $d_{n,j}\in K$. In particular, $\mathcal D$ preserves the symmetric Laurent-polynomial space.

## Facts & Assumptions

**Given:** The operator $\mathcal D$ on $V$ and the rank-one Laurent variable $z$.

[F1] [[def-daha-a1-symmetric-macdonald-operator]]: $\mathcal Df=A(z)f(qz)+B(z)f(q^{-1}z)$, with $A(z)=(tz^2-t^{-1})/(z^2-1)$ and $B(z)=(t^{-1}z^2-t)/(z^2-1)$.

## Proof

1.1 The coefficient identity $A+B=t+t^{-1}$ rewrites the formula as $(\mathcal D f)(z)=(t+t^{-1})f(q^{-1}z)+A(z)\bigl(f(qz)-f(q^{-1}z)\bigr)$. For $f(z)=f(z^{-1})$, the Laurent polynomial $h(z)=f(qz)-f(q^{-1}z)$ vanishes at $z=1$ and $z=-1$, since $f(q)=f(q^{-1})$ and $f(-q)=f(-q^{-1})$. Multiplying $h$ by a power of $z$ gives an ordinary polynomial still vanishing at both distinct roots $1,-1$, so $z^2-1$ divides $h$; hence $A(z)h(z)$ is Laurent. Thus $\mathcal Df$ is a Laurent polynomial. [F1, given, algebra]

2.1 One has $A(z^{-1})=B(z)$ and $B(z^{-1})=A(z)$. For symmetric $f$, $f(qz^{-1})=f(q^{-1}z)$ and $f(q^{-1}z^{-1})=f(qz)$. Substituting $z^{-1}$ in [F1] therefore gives $(\mathcal Df)(z^{-1})=(\mathcal Df)(z)$, so the result is Weyl-invariant. [F1, step 1.1, algebra]

3.1 The coefficients $A,B$ have finite limits $t,t^{-1}$ at $z=\infty$, so $\mathcal Dm_n$ has no exponent above $n$. Its coefficient of $z^n$ is $tq^n+t^{-1}q^{-n}$, obtained from the leading terms of $m_n(qz)$ and $m_n(q^{-1}z)$. Weyl invariance from step 2.1 gives the same coefficient at $z^{-n}$. Subtracting $\lambda_nm_n$ leaves a symmetric Laurent polynomial $g$ with no exponent of absolute value $n$ or greater. Write $g=\sum_{k=-r}^{r}b_kz^k$; symmetry gives $b_k=b_{-k}$, so $g=b_0m_0+\sum_{k=1}^{r}b_km_k$. Thus $g$ is a linear combination of $m_0,\ldots,m_{n-1}$. When $n=0$, $A+B=t+t^{-1}$ gives the formula directly. [F1, step 2.1, algebra] ∎
