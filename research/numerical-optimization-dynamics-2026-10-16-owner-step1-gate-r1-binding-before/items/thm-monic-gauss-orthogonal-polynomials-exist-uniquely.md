---
id: thm-monic-gauss-orthogonal-polynomials-exist-uniquely
kind: theorem
title: Monic orthogonal polynomials exist uniquely through the quadrature order
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-gauss-moment-data
  - def-gauss-polynomial-moment-inner-product
  - thm-gauss-polynomial-moment-pairing-is-an-inner-product
  - thm-gram-schmidt-orthonormalisation
  - thm-rank-nullity
  - lem-finite-coefficient-vector-has-polynomial-representative
  - def-real-polynomial-degree-leading-coefficient-and-monic
  - thm-reals-field
  - lem-standard-basis-of-f-n
  - prop-standard-coordinate-inner-products
  - thm-linearity-of-the-lebesgue-integral-on-l-one
proof_strategy: direct
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

Let $(a,b,m,r,\mu)$ be moment data as in
[[def-gauss-moment-data]], with $m\ge1$ and $r\ge2m-1$. For each
$j=0,\ldots,m$ there is a unique monic real polynomial $p_j$ of degree $j$
such that
$$ \int_{[a,b]}p_j(x)q(x)\,d\mu(x)=0 $$
for every real polynomial $q$ of degree less than $j$. For $j=0$, this means
$p_0=1$ and the orthogonality condition is vacuous. The $j=m$ polynomial uses
moments only through degree $2m-1$; its squared norm is asserted only when the
moment datum has order $2m$.

## Facts & Assumptions

**Given:** Moment data $(a,b,m,r,\mu)$ with $r\ge2m-1$.

[F1] [[def-gauss-moment-data]]: $\mu$ is finite and positive, its relative support has at least $m+1$ points, and every absolute moment through order $2m-1$ is finite.

[F2] [[thm-gauss-polynomial-moment-pairing-is-an-inner-product]]: for $k=m-1$, the coefficient-vector pairing $\langle c,d\rangle_\mu=\int P_cP_d\,d\mu$ is a real inner product.

[F3] [[thm-gram-schmidt-orthonormalisation]]: Gram–Schmidt applied to a finite independent list in an inner product space gives an orthonormal list with the same successive spans.

[F4] [[lem-standard-basis-of-f-n]] and [[prop-standard-coordinate-inner-products]]: the standard vectors $e_0,\ldots,e_{m-1}$ form a basis of $\mathbb R^m$.

[F5] [[thm-rank-nullity]]: for a linear map from a finite-dimensional vector space to itself, trivial kernel implies full-dimensional image and hence surjectivity.

[F6] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: finite polynomial expansions may be integrated term by term whenever the displayed moments are finite.

[F7] [[def-real-polynomial-degree-leading-coefficient-and-monic]] and [[lem-finite-coefficient-vector-has-polynomial-representative]]: a coefficient vector represents a formal polynomial; a nonzero highest coefficient determines its degree and leading coefficient.

[F8] [[thm-reals-field]]: every nonzero real coefficient has a multiplicative inverse.

## Proof

1.1 By [F2], the pairing on the coefficient space $\mathbb R^m$ for degrees at most $m-1$ is an inner product. The list $e_0,\ldots,e_{m-1}$ is independent by [F4], so [F3] gives orthonormal coefficient vectors $u_0,\ldots,u_{m-1}$ whose first $j+1$ vectors span the same space as $e_0,\ldots,e_j$. The polynomial $P_{u_j}$ therefore has degree exactly $j$: it lies in the span of $1,x,\ldots,x^j$ but not in the span through degree $j-1$. Dividing by its nonzero leading coefficient, which is invertible by [F8], gives a monic $p_j$, orthogonal to every polynomial of degree less than $j$. [F2, F3, F4, F7, F8, construct]

1.2 Put $G_{ik}=\int x^{i+k}\,d\mu$ for $0\le i,k<m$, and $b_i=\int x^{i+m}\,d\mu$. All entries are finite by [F1]. The matrix $G$ represents the inner product of [F2] in the standard basis. If $Gc=0$, then $c^{\mathsf T}Gc=\langle c,c\rangle_\mu=0$, so [F2] gives $c=0$. Thus the linear map $G:\mathbb R^m\to\mathbb R^m$ has trivial kernel; [F5] makes it surjective. There is therefore a unique coefficient vector $c$ solving $Gc=-b$. [F1, F2, F4, F5, algebra]

2.1 Define $p_m(X)=X^m+\sum_{k=0}^{m-1}c_kX^k$. Its leading coefficient is $1$, and the $i$th equation of $Gc=-b$ gives $\int p_m(x)x^i\,d\mu(x)=0$ for each $i<m$. Linearity [F6] extends this equality to every polynomial of degree less than $m$. If another monic polynomial had the same orthogonality, its difference from $p_m$ would have degree at most $m-1$ and pair to zero with itself; positive definiteness [F2] makes that difference zero. [F1, F2, F6, F7, step 1.2, algebra, construct]

3.1 Step 1.1 gives the unique monic polynomials below degree $m$, and steps 1.2–2.2 give the unique degree-$m$ polynomial using only moments through $2m-1$. This proves the assertion for every $j=0,\ldots,m$. [step 1.1, step 1.2, step 2.1] ∎
