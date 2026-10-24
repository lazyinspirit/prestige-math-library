---
id: lem-qftx-gaga-analytic-bounded-degree-relations
kind: lemma
title: "Local relations among Weierstrass polynomials reduce to bounded degree"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-qftx-analytic-coherent-module
  - def-regular-holomorphic-germ
  - def-weierstrass-polynomial
  - thm-weierstrass-preparation-theorem
  - thm-weierstrass-division-theorem
  - thm-power-series-expansion-in-several-complex-variables
  - cor-uniqueness-of-multivariable-power-series-coefficients
dependency_roles:
  def-qftx-analytic-coherent-module: mathematical-premise
  def-regular-holomorphic-germ: mathematical-premise
  def-weierstrass-polynomial: mathematical-premise
  thm-weierstrass-preparation-theorem: mathematical-premise
  thm-weierstrass-division-theorem: mathematical-premise
  thm-power-series-expansion-in-several-complex-variables: mathematical-premise
  cor-uniqueness-of-multivariable-power-series-coefficients: mathematical-premise
justified_by: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter II §3.3, Lemma 3.20"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
    - title: "Joachim Wehler, Stein Manifolds, §4.2, Theorem 4.28 proof, Weierstrass reduction"
      url: "https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf"
verification:
  precheck: pending
---

## Statement

Let $n,q,d\ge1$ be integers, let $U'\subseteq\mathbb C^{n-1}$ and $D\subseteq\mathbb C$ be polydiscs, let $w$ denote the last coordinate, and let $P_1,\ldots,P_q\in\mathcal O(U')[w]$ be monic Weierstrass polynomials with $1\le\deg_w P_j\le d$. For every $x=(x',w_0)\in U'\times D$, each germ in the relation sheaf of $(P_1,\ldots,P_q)$ at $x$ is an $\mathcal O_{U'\times D,x}$-linear combination of relation germs whose components are polynomials in $w-w_0$ of degree at most $d$ with coefficients in $\mathcal O_{U',x'}$.

## Statement references

[Demailly, Chapter II §3.3, Lemma 3.20, printed/PDF pp. 89–90](https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf)

[Wehler, §4.2, Theorem 4.28 proof, bounded-degree reduction, printed pp. 140–144/PDF pp. 144–148](https://www.math.lmu.de/~wehler/20190530_Stein_Manifolds_script.pdf)

## Facts & Assumptions

**Given:** The product polydisc, the monic Weierstrass polynomials $P_j$, and a point $x=(x',w_0)$.

[F1] [[def-qftx-analytic-coherent-module]]: a relation germ of $(P_1,\ldots,P_q)$ is a tuple $g=(g_1,\ldots,g_q)$ of holomorphic germs satisfying $\sum_{j=1}^q g_jP_j=0$.

[F2] [[def-weierstrass-polynomial]]: each $P_j$ is monic in $w$, has a positive finite degree, and has holomorphic coefficients on $U'$.

[F3] [[thm-weierstrass-preparation-theorem]]: a germ regular in $w$ of order $r$ is a unit times a monic Weierstrass polynomial of degree $r$.

[F4] [[thm-weierstrass-division-theorem]]: division by a monic Weierstrass polynomial has a unique holomorphic quotient and a unique polynomial remainder of smaller degree.

[F5] [[thm-power-series-expansion-in-several-complex-variables]] and [[cor-uniqueness-of-multivariable-power-series-coefficients]]: a holomorphic germ has a convergent power series with uniquely determined coefficients; the product of two nonzero germs is nonzero because the product of their first nonzero homogeneous terms is a nonzero polynomial.

[F6] [[def-regular-holomorphic-germ]]: regularity in $w-w_0$ of order $r$ means the restriction to the $w$-line has a zero of exact finite order $r$.

## Proof

1.1 If $q=1$, a relation germ $g$ satisfies $gP_1=0$ by [F1]. The polynomial $P_1$ is nonzero by [F2], and [F5] makes the ring of holomorphic germs an integral domain, so $g=0$, which is already a polynomial relation of bounded degree. [F1, F2, F5, given, algebra]

1.2 Suppose $q\ge2$. If $P_q(x)\ne0$, then $P_q$ is a unit germ. For every relation $g=(g_1,\ldots,g_q)$, [F1] gives $g_q=-\sum_{j<q}g_jP_j/P_q$, hence $g=\sum_{j<q}(g_j/P_q)(P_qe_j-P_je_q)$. Each vector $P_qe_j-P_je_q$ is a relation whose component degrees are at most $d$. [F1, F2, given, construct, algebra]

1.3 Suppose $P_q(x)=0$, and set $e=\deg_wP_q\le d$. Let $r\ge1$ be its order of vanishing in $w-w_0$; this is finite and at most $e\le d$ by [F2, F6]. By [F3], after shrinking near $x$ write $P_q=u p$, where $u$ is a holomorphic unit and $p$ is a monic Weierstrass polynomial of degree $r$ in $w-w_0$. Ordinary polynomial division of $P_q$ by the monic polynomial $p$ gives a polynomial quotient and a remainder of degree below $r$. The division pair $(u,0)$ also represents $P_q$ as a holomorphic germ divided by $p$; uniqueness in [F4] makes the polynomial remainder zero and identifies the polynomial quotient with $u$. Since $P_q$ and $p$ are monic of degrees $e$ and $r$, respectively, this polynomial $u$ has degree $e-r\le d-r$ and remains a unit near $x$. [F2, F3, F4, F6, given, construct]

2.1 Let $g=(g_1,\ldots,g_q)$ be a relation germ at $x$. For $j<q$, divide by $p$ using [F4] to write $g_j=t_jp+r_j$, where $t_j$ is holomorphic and $r_j$ is a polynomial in $w-w_0$ of degree below $r$. Set $\alpha_j=t_j/u$ and $v_j=P_qe_j-P_je_q$. Then $\delta=g-\sum_{j<q}\alpha_jv_j$ is a relation whose first $q-1$ components are $r_j$. Its last component satisfies $p(u\delta_q)=-\sum_{j<q}r_jP_j$, whose right-hand side is a polynomial of degree at most $d+r-1$. Dividing this polynomial by $p$ and using uniqueness [F4] shows that $u\delta_q$ is a polynomial of degree at most $d-1$. Each $ur_j$ also has degree at most $d-1$, since $\deg u=e-r\le d-r$ and $\deg r_j<r$. Thus $u\delta$ is a polynomial relation with all component degrees at most $d$, and $g=\sum_{j<q}\alpha_jv_j+u^{-1}(u\delta)$ is generated by polynomial relation germs of the required bound. [F1, F2, F4, step 1.3, algebra] ∎

## Proof sources

[[def-qftx-analytic-coherent-module]]

[[def-regular-holomorphic-germ]]

[[def-weierstrass-polynomial]]

[[thm-weierstrass-preparation-theorem]]

[[thm-weierstrass-division-theorem]]

[[thm-power-series-expansion-in-several-complex-variables]]

[[cor-uniqueness-of-multivariable-power-series-coefficients]]

## Remarks

The unit $u$ is retained throughout the relation reduction. Dividing by $p$ produces $g_j=t_jp+r_j$, while the elementary relation uses $P_q=up$; therefore its coefficient is $t_j/u$. This explicit normalization is needed for the remaining components to be polynomial.
