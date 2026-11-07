---
dependency_level: 3
id: lem-maynard-symmetric-power-sum-simplex-moments
kind: lemma
title: "Exact rational quadratic forms for symmetric simplex polynomial tests"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-maynard-simplex-monomial-integrals
  - def-maynard-variational-quantity-mk
  - thm-binomial-theorem-over-a-commutative-ring
  - thm-binomial-closed-formula
  - thm-multidimensional-riemann-criterion
  - thm-riemann-fubini-on-product-rectangles
  - thm-substitution-with-riemann-integrable-inner-derivative
justified_by: []
proof_strategy: direct
axiom_use: "The proof uses finite polynomial expansions and Riemann integrals; no choice principle is added."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Maynard, Small gaps between primes (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
      locator: "Section 8, Lemmas 8.1–8.2, printed pp. 409–411; the formulas below retain zero exponents explicitly."
verification:
  precheck: pending
---

## Statement

For integers $d\ge1$ and $c\ge0$ define
$$G_0(d)=1,\qquad G_c(d)=c!\sum_{r=1}^{\min(c,d)}\binom dr\sum_{\substack{v_1+\cdots+v_r=c\\v_j\ge1}}\prod_{j=1}^r\frac{(2v_j)!}{v_j!}\quad(c\ge1).$$
Writing $s=1-\sum_{j=1}^dt_j$ and $q=\sum_{j=1}^dt_j^2$ on $R_d$, one has, for $a,c\ge0$,
$$\int_{R_d}s^a q^c\,dt=\frac{a!G_c(d)}{(d+a+2c)!}=:T_d(a,c).$$
Let $k\ge2$ and $P(s,q)=\sum_{\ell=1}^L u_\ell s^{b_\ell}q^{c_\ell}$, where $u_\ell$ are real and $b_\ell,c_\ell$ are nonnegative integers. Define $F=P(1-\sum t_i,\sum t_i^2)$ on $R_k$ and zero outside. Then $F\in\mathcal R_k$ and
$$I_k(F)=\sum_{\ell,j}u_\ell u_j T_k(b_\ell+b_j,c_\ell+c_j).$$
All coordinate marginals are the same polynomial in the other coordinates' slack $r$ and square sum $q'$:
$$G_{F,i}=\sum_\ell u_\ell\sum_{v=0}^{c_\ell}A_{\ell,v}\,r^{B_{\ell,v}}(q')^v\quad\hbox{on }R_{k-1},$$
and are zero outside, where
$$A_{\ell,v}=\binom{c_\ell}v\frac{b_\ell!\,(2c_\ell-2v)!}{(b_\ell+2c_\ell-2v+1)!},\qquad B_{\ell,v}=b_\ell+2c_\ell-2v+1.$$
Consequently
$$J_{k,i}(F)=\sum_{\ell,j}u_\ell u_j\sum_{v=0}^{c_\ell}\sum_{w=0}^{c_j}A_{\ell,v}A_{j,w}T_{k-1}(B_{\ell,v}+B_{j,w},v+w).$$
For rational $u_\ell$, every displayed value is rational. Positivity or a strict variational inequality must still be checked for the selected coefficients; no eigenvalue or numerical lower bound is asserted here.

## Statement references

[Maynard, Lemmas 8.1–8.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf)

## Facts & Assumptions

**Given:** The integers, coefficient list and polynomials in the Statement, allowing an empty list $L=0$.

[F1] [[lem-maynard-simplex-monomial-integrals]]: $\int_{R_d}s^a\prod t_j^{a_j}=a!\prod a_j!/(d+a+\sum a_j)!$, including $d=1$ and zero exponents.

[F2] [[thm-binomial-theorem-over-a-commutative-ring]]: the binomial expansion holds for commuting quantities. Iterating it gives the multinomial coefficients $c!/\prod v_j!$, with factorials and subset counts as in [[thm-binomial-closed-formula]].

[F3] [[thm-multidimensional-riemann-criterion]]: arbitrarily small grid Darboux gaps prove integrability. [[thm-riemann-fubini-on-product-rectangles]] permits iterated integration when all sections are integrable.

[F4] [[def-maynard-variational-quantity-mk]]: $\mathcal R_k$ requires the zero extension, coordinate sections and squared marginals to be Riemann integrable; $I_k$ and $J_{k,i}$ have the stated integral meanings.

[F5] [[thm-substitution-with-riemann-integrable-inner-derivative]]: linear substitution preserves the Riemann integral.

## Proof

1.1 For $c=0$, [F1] gives $T_d(a,0)=a!/(d+a)!$. For $c\ge1$, expand $(\sum_{j=1}^dt_j^2)^c$ by [F2]. A term with exponents $v_1,\ldots,v_d\ge0$, summing to $c$, has coefficient $c!/\prod v_j!$. By [F1] its integral after multiplication by $s^a$ is [F1, F2, given, algebra]
$$\frac{a!c!}{(d+a+2c)!}\prod_{j=1}^d\frac{(2v_j)!}{v_j!}.$$
Group terms by the number $r$ of positive exponents. There are $\binom dr$ choices of their coordinate positions; in increasing coordinate order their positive exponents run through all ordered compositions of $c$ into $r$ parts. This gives exactly $G_c(d)$ and the first formula. [F1, F2, given, algebra]

1.2 Fix a coordinate $t_i=u$ and let $r=1-\sum_{j\ne i}t_j$. For other coordinates in $R_{k-1}$, expand $(q'+u^2)^c$ and integrate from $0$ to $r$. For $r>0$, [F1] in dimension one after the linear substitution $u=rz$ from [F5] gives [F1, F2, F5, given, construct]
$$\int_0^r(r-u)^bu^{2c-2v}\,du=r^{b+2c-2v+1}\frac{b!(2c-2v)!}{(b+2c-2v+1)!}.$$
For $r=0$ both the integral and this expression vanish; every exponent of $r$ is at least one. The section integral is zero when the other coordinates lie outside $R_{k-1}$. Summing the finite binomial expansion gives the displayed marginal. [F1, F2, F5, given, construct]

2.1 The zero extension of $F$ is bounded and polynomial away from the face $\sum t_i=1$. A grid of mesh $h$ covers that face in $O_k(h^{1-k})$ cells of total volume $O_k(h)$: fixing the first $k-1$ intervals restricts the last coordinate to at most $k+1$ intervals. For each monomial on the unit cube, telescoping products and $|x^a-y^a|\le a|x-y|$ give oscillation at most a fixed constant times the grid mesh; finite sums give the same bound for the polynomial. Together with the boundary cover this gives arbitrarily small Darboux gaps. Every coordinate section is piecewise polynomial. The marginal from step 1.2 is polynomial on $R_{k-1}$, zero outside, and vanishes on its oblique boundary because $B_{\ell,v}\ge1$. Its square has the same integrability by the identical grid argument. Thus [F3] and [F4] give $F\in\mathcal R_k$. [F3, F4, step 1.2, algebra]

3.1 Expand $F^2$ as a finite polynomial sum and apply step 1.1 in dimension $k$ to obtain $I_k$. Square the marginal in step 1.2 and apply step 1.1 in dimension $k-1$ to obtain $J_{k,i}$. Permuting coordinates preserves the same formulas, so each $J$ is equal. Factorials, binomial coefficients and rational arithmetic make these values rational for rational $u_\ell$. An empty list gives the zero function and zero sums; no positivity is inferred for a nonempty list either without the indicated check. [F1, F2, F3, F4, step 1.1, step 1.2, step 2.1, algebra] ∎
