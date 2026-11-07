---
id: thm-montgomery-vaughan-weighted-large-values-mean-square
kind: theorem
title: "Weighted Large-Values Mean-Square Estimate"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-one-separated-dirichlet-polynomial-samples
  - lem-smoothed-dirichlet-polynomial-kernel-bound
  - thm-cauchy-schwarz-and-the-euclidean-norm
justified_by: []
aliases: []
forward_refs: []
dependency_level: 1
proof_strategy: direct
sources:
  references:
    - title: "Montgomery–Vaughan, Multiplicative Number Theory III, §27.1, Theorem 27.3 and proof"
      url: "https://personal.science.psu.edu/rcv4/Vol3/Vol3.pdf"
    - title: "E. Assing, Topics in Analytic Number Theory, Proposition 5 and proof"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/analytic_nt.pdf"
---

## Statement

Let $N\ge1$ be an integer, let $T\ge2$, and let $D(s)=\sum_{n=1}^{N}a_n n^{-s}$ with $a_n\in\mathbb C$. Let $t_1,\ldots,t_R\in[0,T]$ be pairwise distinct and 1-separated, meaning $|t_r-t_q|\ge1$ for $r\ne q$, and put $G:=\sum_{n=1}^{N}|a_n|^2$. Then
$$\sum_{r=1}^{R}|D(it_r)|^2\ll (N+R T^{1/2}\log T)G,$$
with an absolute implied constant.

## Statement references

[Montgomery–Vaughan, Theorem 27.3 and weighted-kernel proof](https://personal.science.psu.edu/rcv4/Vol3/Vol3.pdf)

[Assing, Proposition 5 and its separated-sample proof](https://www.math.uni-bonn.de/people/assing/lectures/analytic_nt.pdf)

## Facts & Assumptions

**Given:** A positive integer $N$, $T\ge2$, coefficients $a_1,\ldots,a_N\in\mathbb C$, and a finite 1-separated set $\{t_1,\ldots,t_R\}\subset[0,T]$.

[F1] [[def-one-separated-dirichlet-polynomial-samples]]: $D(s)=\sum_{n=1}^{N}a_n n^{-s}$ and $G=\sum_{n=1}^{N}|a_n|^2$.

[F2] [[lem-smoothed-dirichlet-polynomial-kernel-bound]]: for $K_N(u)=\sum_{n=1}^{2N}(1-n/(2N))n^{-iu}$, $|K_N(u)|\le C(N/(1+u^2)+\sqrt{1+|u|}\log(2+|u|))$ for all real $u$.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for real Euclidean vectors $x,y\in\mathbb R^m$, $|\langle x,y\rangle|\le\|x\|_2\|y\|_2$.

## Proof

**Given:** A positive integer $N$, $T\ge2$, coefficients $a_1,\ldots,a_N\in\mathbb C$, and a finite 1-separated set $\{t_1,\ldots,t_R\}\subset[0,T]$.

[F1] [[def-one-separated-dirichlet-polynomial-samples]]: $D(s)=\sum_{n=1}^{N}a_n n^{-s}$ and $G=\sum_{n=1}^{N}|a_n|^2$.

[F2] [[lem-smoothed-dirichlet-polynomial-kernel-bound]]: for $K_N(u)=\sum_{n=1}^{2N}(1-n/(2N))n^{-iu}$, $|K_N(u)|\le C(N/(1+u^2)+\sqrt{1+|u|}\log(2+|u|))$ for all real $u$.

[F3] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: for real Euclidean vectors $x,y\in\mathbb R^m$, $|\langle x,y\rangle|\le\|x\|_2\|y\|_2$.



1.1 If $R=0$, the sum in the conclusion is zero; assume $R\ge1$. For each positive integer $m$, use $\langle z,w\rangle:=\sum_{j=1}^{m}z_j\overline{w_j}$ and $\|z\|_2^2:=\sum_{j=1}^{m}|z_j|^2$ on $\mathbb C^m$. For a finite complex matrix $A:\mathbb C^p\to\mathbb C^q$, define its adjoint $A^*$ to be its conjugate transpose and its operator norm by $\|A\|:=\sup_{\|x\|_2=1}\|Ax\|_2$. The realification $\rho_m(z):=(\operatorname{Re}z_1,\operatorname{Im}z_1,\ldots,\operatorname{Re}z_m,\operatorname{Im}z_m)$ preserves norms because $(\operatorname{Re}z_j)^2+(\operatorname{Im}z_j)^2=|z_j|^2$, and satisfies $\rho_m(z)\cdot\rho_m(w)=\operatorname{Re}\langle z,w\rangle$ by expansion. If $\langle z,w\rangle\ne0$, replace $w$ by $(\langle z,w\rangle/|\langle z,w\rangle|)w$; conjugate-linearity in the second entry makes the resulting pairing $|\langle z,w\rangle|$, so [F3] applied to the realifications proves complex Cauchy--Schwarz. For every vector $v$, this inequality gives $\|v\|_2=\sup_{\|y\|_2=1}|\langle v,y\rangle|$; when $v\ne0$ equality is attained at $y=v/\|v\|_2$. Thus $\|A\|=\sup_{\|x\|_2=\|y\|_2=1}|\langle Ax,y\rangle|$. Since $\langle Ax,y\rangle=\langle x,A^*y\rangle$, taking the same two suprema in the opposite order gives $\|A\|=\|A^*\|$. [F3, given, algebra]

1.2 Define $A:\mathbb C^N\to\mathbb C^R$ by $(Aa)_r:=\sum_{n=1}^{N}a_n n^{-it_r}$. Then $\|Aa\|_2^2=\sum_r|D(it_r)|^2$, and $(A^*y)_n=\sum_{r=1}^{R}y_r n^{it_r}$. Since $w_n:=2(1-n/(2N))$ satisfies $w_n\ge1$ for $n\le N$ and $w_n\ge0$ for $n\le2N$, every $y\in\mathbb C^R$ satisfies $\|A^*y\|_2^2\le\sum_{n=1}^{2N}w_n|\sum_{r=1}^{R}y_r n^{it_r}|^2=2\sum_{r,q=1}^{R}y_r\overline{y_q}K_N(t_q-t_r)$. Here the equality follows by expanding the finite square and using the definition of $K_N$ in [F2]. [F1, F2, algebra]

1.3 The kernel satisfies $|K_N(-u)|=|K_N(u)|$. For fixed $r$, the diagonal term obeys $|K_N(0)|\le N$. For $q\ne r$, $1\le|t_q-t_r|\le T$; each distance shell $[j,j+1)$ contains at most two sample points, one on each side of $t_r$. Hence $\sum_{q\ne r}\frac{N}{1+|t_q-t_r|^2}\ll N\sum_{j\ge1}\frac1{1+j^2}\ll N.$ The other part of [F2] is at most $C\sqrt T\log T$ per point since $T\ge2$, so $\max_r\sum_q|K_N(t_q-t_r)|\ll N+R\sqrt T\log T$. [F1, F2, given, algebra]

2.1 Applying $2|y_r||y_q|\le|y_r|^2+|y_q|^2$ to the expanded sum in step 1.2, and using the symmetry $|K_N(t_q-t_r)|=|K_N(t_r-t_q)|$, bounds it by $2\|y\|_2^2\max_r\sum_q|K_N(t_q-t_r)|$. Step 1.3 therefore gives $\|A^*y\|_2^2\ll(N+R\sqrt T\log T)\|y\|_2^2$. By step 1.1 the same operator-norm bound holds for $A$; applying it to the coefficient vector $a$ and using $\|a\|_2^2=G$ from [F1] proves the statement. [F1, step 1.1, step 1.2, step 1.3, algebra] ∎
