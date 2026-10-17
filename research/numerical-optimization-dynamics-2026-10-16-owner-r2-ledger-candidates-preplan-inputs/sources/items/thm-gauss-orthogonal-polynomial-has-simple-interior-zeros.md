---
id: thm-gauss-orthogonal-polynomial-has-simple-interior-zeros
kind: theorem
title: The Gauss orthogonal polynomial has simple roots inside the interval
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-gauss-moment-data
  - thm-monic-gauss-orthogonal-polynomials-exist-uniquely
  - thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - def-integral-of-a-nonnegative-simple-function
  - lem-product-of-linear-factors-is-monic-polynomial
  - cor-continuous-image-of-an-interval-is-an-interval
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - thm-algebra-of-continuous-functions
  - thm-reals-ordered-field
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "John A. Gubner, Gaussian Quadrature and the Eigenvalue Problem, §§2–5, 2020"
      url: "https://gubner.ece.wisc.edu/gaussquad.pdf"
    - title: "MATH 373 Lecture Notes, Lecture 14: Gaussian Quadrature, §§10.2–10.5"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture14.pdf"
    - title: "Walter Gautschi, The Interplay Between Classical Analysis and (Numerical) Linear Algebra, §2.1"
      url: "https://web.stanford.edu/class/cme335/Golub.pdf"
---

## Statement

Let $(a,b,m,r,\mu)$ be moment data from
[[def-gauss-moment-data]], with $r\ge2m-1$, and let $p_m$ be the monic
orthogonal polynomial from
[[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]]. Then $p_m$ has
exactly $m$ distinct roots $a<x_1<\cdots<x_m<b$, each simple, and
$$ p_m(X)=\prod_{i=1}^{m}(X-x_i). $$

## Facts & Assumptions

**Given:** The stated moment data and its degree-$m$ monic orthogonal polynomial $p_m$.

[F1] [[def-gauss-moment-data]]: the relative support of $\mu$ contains at least $m+1$ distinct points and all moments through degree $2m-1$ are finite.

[F2] [[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]]: $p_m$ is monic of degree $m$ and $\int p_mq\,d\mu=0$ for every polynomial $q$ of degree less than $m$.

[F3] [[thm-nonzero-real-polynomial-has-at-most-degree-many-distinct-roots]]: a nonzero degree-$d$ polynomial has at most $d$ distinct real roots.

[F4] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]], and [[def-integral-of-a-nonnegative-simple-function]]: if a nonnegative integrable function is bounded below by $c>0$ on a Borel set $U$, its integral is at least $c\mu(U)$.

[F5] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral is linear on integrable real functions.

[F6] [[lem-product-of-linear-factors-is-monic-polynomial]] and [[def-real-polynomial-degree-leading-coefficient-and-monic]]: the product of the linear factors at $m$ distinct real numbers is monic of degree $m$.

[F7] [[cor-continuous-image-of-an-interval-is-an-interval]]: the image of an interval under a continuous real function is an interval.

[F8] [[thm-reals-ordered-field]]: the real order is total, so an interval in $\mathbb R$ that avoids $0$ lies wholly on one side of $0$.

[F9] [[def-real-polynomial-degree-leading-coefficient-and-monic]]: formal polynomials are their coefficient lists, so cancellation of equal top coefficients leaves degree at most one less.

[F10] [[thm-algebra-of-continuous-functions]]: polynomial functions and their finite sums and products are continuous.

## Proof

1.1 Call an interior root sign-changing if $p_m$ has opposite nonzero signs on the two adjacent intervals containing no root. Let $R$ be the set of such roots; it is finite by [F3]. Suppose, for contradiction, that $R$ has $k<m$ elements, and put $q(X)=\prod_{s\in R}(X-s)$, with the empty product equal to $1$. Between consecutive roots of $p_m$, the product $h=p_mq$ is continuous and nonzero, so its image is an interval avoiding $0$ and its sign is constant by [F7]–[F8]. Crossing a root in $R$ flips both factors; crossing any other root of $p_m$ flips neither product sign. Thus $h$ has one weak sign on $[a,b]$. [F2, F3, F6, F7, F8, F10, assume-contra, algebra, construct]

2.1 Since $\deg q=k<m$, orthogonality [F2] gives $\int h\,d\mu=0$. [F2, step 1.1]

2.2 The polynomial $p_m$ has at most $m$ distinct roots by [F3]. The support condition [F1] therefore supplies a support point $y$ with $p_m(y)\ne0$; as every root of $q$ is a root of $p_m$, also $h(y)\ne0$. Continuity of $h$ gives a relative open neighborhood $U$ of $y$ on which $|h|\ge c$ for some $c>0$ and the sign of $h$ is unchanged. This neighborhood is Borel and $\mu(U)>0$ by the definition of support. [F1, F3, F6, F10, step 1.1, choose]

3.1 If $h\ge0$ on $[a,b]$, [F4] gives $\int h\,d\mu\ge c\mu(U)>0$. If $h\le0$, apply [F4] to $-h$ and use [F5] to obtain $\int h\,d\mu<0$. Both contradict step 2.1, so $k\ge m$. [F4, F5, step 2.1, step 2.2, algebra]

4.1 By [F3], $p_m$ has at most $m$ distinct roots, and step 3.1 gives at least $m$, so $k=m$. Write them as $x_1,\ldots,x_m\in(a,b)$ and let $s(X)=\prod_{i=1}^m(X-x_i)$. Both $s$ and $p_m$ are monic of degree $m$ by [F2, F6]. Their degree-$m$ coefficients cancel, so their difference is zero or has degree at most $m-1$ by [F9]. It vanishes at all $m$ distinct $x_i$; if nonzero, [F3] is contradicted. Thus $p_m=s$, so each root occurs as exactly one linear factor and is simple. [F2, F3, F6, F9, step 3.1, discharge-contradiction, algebra] ∎
