---
id: prop-equispaced-interpolation-basis-growth
kind: proposition
title: "Equispaced interpolation has linearly growing basis amplification"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-cardinal-polynomial-interpolation
  - def-binomial-coefficient
  - def-factorial-and-falling-factorial
  - thm-binomial-closed-formula
  - lem-binomial-coefficients-symmetric-and-unimodal
  - thm-binomial-theorem-over-a-commutative-ring
  - thm-reals-field
  - lem-field-is-a-commutative-ring
  - thm-reals-ordered-field
  - lem-nat-finite-sum-laws-and-the-canonical-embedding
  - def-canonical-natural
  - lem-finite-sum-laws
  - lem-power-laws
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Mark Embree, Lecture Notes on Numerical Analysis, uniformly spaced nodes example"
      url: "https://personal.math.vt.edu/embree/math5466/nanotes.pdf"
    - title: "Jean-Paul Berrut and Lloyd N. Trefethen, Barycentric Lagrange Interpolation"
      url: "https://math.pku.edu.cn/teachers/litj/notes/numer_anal/SIAMRev_46_501_Trefethen_Barycentric.pdf"
pipeline_run: numerical-optimization-dynamics-2026-10-16
---

## Statement

Let $m\in\mathbb N$ with $m\ge6$, and take the $2m+1$ nodes
$$x_k=-1+\frac{k}{m},\qquad 0\le k\le2m.$$
They are equally spaced in $[-1,1]$. Let $\ell_m$ be the cardinal function for the node $x_m=0$, and set
$$x_*=-1+\frac{1}{2m}.$$
Then
$$|\ell_m(x_*)|\ge\frac{9\,m}{1280}.$$
In these real formulas, natural numbers and binomial coefficients denote their canonical real images, as specified by [[def-canonical-natural]], [[def-binomial-coefficient]], and [[lem-nat-finite-sum-laws-and-the-canonical-embedding]].

## Facts & Assumptions

**Given:** $m\ge6$, the specified equispaced nodes, and the corresponding cardinal function.

[F1] [[def-cardinal-polynomial-interpolation]]: $\ell_m(X)=\prod_{k\ne m}(X-x_k)/(x_m-x_k)$, with the omitted-index product ordered as its length-$2m$ list.

[F2] [[def-binomial-coefficient]]: $\binom{n}{k}$ is a natural number for $0\le k\le n$.

[F3] [[def-factorial-and-falling-factorial]]: factorials are products of positive naturals, $n^{\underline{k}}$ is the product of the top $k$ factors when $k\le n$, and $n!_{\mathbb R}:=\prod_{j=1}^{n}j$ is the corresponding real product.

[F4] [[thm-binomial-closed-formula]]: for $k\le n$, the real binomial coefficient is $\binom nk=n!_{\mathbb R}/(k!_{\mathbb R}(n-k)!_{\mathbb R})$, and the natural identity $\binom nk\,k!=n^{\underline{k}}$ holds.

[F5] [[lem-binomial-coefficients-symmetric-and-unimodal]]: for even $r$, the coefficient $\binom r{r/2}$ is at least every coefficient in that binomial row.

[F6] [[thm-binomial-theorem-over-a-commutative-ring]]: $(u+v)^r=\sum_{k=0}^{r}\binom rk u^kv^{r-k}$ in every commutative ring.

[F7] [[thm-reals-field]] and [[lem-field-is-a-commutative-ring]]: $\mathbb R$ is a commutative ring with the field operations.

[F8] [[thm-reals-ordered-field]]: real order is total and compatible with field addition and multiplication by positive numbers.

[F9] [[lem-nat-finite-sum-laws-and-the-canonical-embedding]] and [[def-canonical-natural]]: the canonical real images preserve natural addition, multiplication, and order, and carry finite natural sums and products to the corresponding real sums and products.

[F10] [[lem-finite-sum-laws]]: finite real sums preserve termwise inequalities, and each nonnegative term is at most the sum.

[F11] [[lem-power-laws]]: real powers obey the natural exponent laws used to combine $2^{4m}$ with $16^m$.

## Proof

**Proof technique:** direct.

1.1 Put $M=m>0$. Since $x_{k+1}-x_k=1/M>0$, the nodes increase from $-1$ to $1$, and $x_m=0$. If $x_*=x_k$, then $1=2k$; for $k=0$ the right side is $0$, while for $k\ge1$ it is at least $2$, by [F8, F9]. Thus $x_*$ is not a node. [given, F8, F9, algebra]

1.2 For $k\ne m$, $\left|\frac{x_*-x_k}{x_m-x_k}\right|=\frac{|\tfrac12-k|}{|m-k|}.$ The denominator product is $(m!_{\mathbb R})^2$, where $m!_{\mathbb R}=\prod_{j=1}^{m}j$. In the numerator, the $k=0$ factor is $1/2$ and the remaining factors are $k-1/2$ for $1\le k\le2m$, with $k=m$ omitted. Pairing the odd factors gives $\prod_{\substack{0\le k\le2m\\k\ne m}}|\tfrac12-k|=\frac{(4m)!_{\mathbb R}}{(2m-1)16^m(2m)!_{\mathbb R}}.$ Using [F3, F4] to rewrite the factorial ratios yields the exact identity $|\ell_m(x_*)|=\frac{\binom{4m}{2m}\,\binom{2m}{m}}{(2m-1)16^m}.$ [given, F1, F3, F4, F9, F11, algebra]

1.3 Apply [F6] in the commutative ring $\mathbb R$ [F7] with $u=v=1$. The sum of the $r$th binomial row is $2^r$. For $r=4m$ and $r=2m$, [F5] says the central term is largest; each coefficient is nonnegative by [F2, F9], so [F10] bounds the row sum above by $(r+1)$ times its central term. Consequently $\binom{4m}{2m}\ge\frac{16^m}{4m+1},\qquad \binom{2m}{m}\ge\frac{4^m}{2m+1}.$ [given, F2, F5, F6, F7, F9, F10, F11, algebra]

1.4 By [F6, F7], $4^m=(1+3)^m=\sum_{k=0}^{m}\binom{m}{k}3^k\ge81\,\binom{m}{4}.$ Here every summand is nonnegative by [F2, F8, F9], and the inequality retains the $k=4$ term using [F10]. From [F3, F4], $\binom{m}{4}=m(m-1)(m-2)(m-3)/24$. Since $m\ge6$, each of these four factors is at least $m/2$, so $\binom{m}{4}\ge m^4/384$. Therefore $4^m\ge81m^4/384$. [given, F2, F3, F4, F6, F7, F8, F9, F10, algebra]

2.1 Substituting step 1.3 in step 1.2 gives $|\ell_m(x_*)|\ge\frac{4^m}{(2m-1)(4m+1)(2m+1)}\ge\frac{4^m}{30\,m^3},$ because the three denominator factors are at most $2m$, $5m$ and $3m$, respectively. [step 1.2, step 1.3, F8, F9, algebra]

3.1 Combining step 1.4 with step 2.1 yields $|\ell_m(x_*)|\ge81m/(384\cdot30)=9m/1280$, as claimed. [step 2.1, step 1.4, algebra] ∎
