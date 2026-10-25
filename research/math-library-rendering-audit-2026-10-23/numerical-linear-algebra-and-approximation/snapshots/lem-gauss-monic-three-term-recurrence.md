---
id: lem-gauss-monic-three-term-recurrence
kind: lemma
title: Monic orthogonal polynomials satisfy a three-term recurrence
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-gauss-moment-data
  - def-gauss-polynomial-moment-inner-product
  - thm-gauss-polynomial-moment-pairing-is-an-inner-product
  - thm-monic-gauss-orthogonal-polynomials-exist-uniquely
  - def-polynomial-ring-over-a-commutative-ring
  - prop-polynomial-degree-laws-over-a-commutative-ring
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-reals-field
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

Let $(a,b,m,r,\mu)$ be moment data from [[def-gauss-moment-data]] with
$r\ge2m-1$, and let $p_0,\ldots,p_m$ be the monic orthogonal polynomials of
[[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]]. For $0\le j<m$ put
$$ h_j:=\int_{[a,b]}p_j(x)^2\,d\mu(x),\qquad \alpha_j:=\frac{\int_{[a,b]}x\,p_j(x)^2\,d\mu(x)}{h_j}. $$
For $1\le j<m$ put $\beta_j:=h_j/h_{j-1}$. These numbers are defined,
$h_j>0$, and $\beta_j>0$. The recurrence is
$$ xp_0=p_1+\alpha_0p_0 $$
and, for $1\le j<m$,
$$ xp_j=p_{j+1}+\alpha_jp_j+\beta_jp_{j-1}. $$
Only moments through degree $2m-1$ are used.

## Facts & Assumptions

**Given:** The stated moment data and monic orthogonal family.

[F1] [[def-gauss-moment-data]]: moments through degree $2m-1$ are finite.

[F2] [[thm-gauss-polynomial-moment-pairing-is-an-inner-product]]: the moment pairing is symmetric, bilinear, and positive definite on each such space.

[F3] [[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]]: each $p_j$ is monic of degree $j$ and orthogonal to every polynomial of smaller degree.

[F4] [[prop-polynomial-degree-laws-over-a-commutative-ring]]: a sum with cancellation of top coefficients has degree bounded by the largest remaining degree; the leading coefficient of a product is the product of leading coefficients.

[F5] [[thm-linearity-of-the-lebesgue-integral-on-l-one]] and [[thm-reals-field]]: the displayed polynomial integrals are linear and real division by a nonzero norm is defined.

## Proof

1.1 For $j<m$, $p_j^2$ and $x p_j^2$ have degrees at most $2j$ and $2j+1$, both at most $2m-1$. Thus the moments in $h_j$ and $\alpha_j$ are finite by [F1]. Since $p_j$ is nonzero, [F2] gives $h_j>0$, so $\alpha_j$ is defined; for $j\ge1$, the same positivity for $p_{j-1}$ gives $\beta_j>0$. [F1, F2, F3, F5, algebra]

1.2 The polynomials $p_0,\ldots,p_j$ form a basis for the polynomials of degree at most $j$: their distinct degrees and unit leading coefficients permit successive subtraction of the top term. Because $xp_j-p_{j+1}$ has degree at most $j$ by cancellation of the leading term, write it in this basis. [F3, F4, construct]

2.1 For $k\le j-2$, symmetry of the real pairing gives $\langle xp_j,p_k\rangle_\mu=\langle p_j,xp_k\rangle_\mu=0$, since $xp_k$ has degree at most $j-1$. As the basis in step 1.2 is orthogonal and each squared norm is positive by [F2], the expansion has no $p_k$ term for $k\le j-2$. Its $p_j$ coefficient is $\langle xp_j,p_j\rangle_\mu/h_j=\alpha_j$. [F2, F3, step 1.2, algebra]

2.2 For $j\ge1$, the $p_{j-1}$ coefficient is $\frac{\langle xp_j,p_{j-1}\rangle_\mu}{h_{j-1}} =\frac{\langle p_j,xp_{j-1}\rangle_\mu}{h_{j-1}} =\frac{h_j}{h_{j-1}}=\beta_j.$ Indeed, $xp_{j-1}-p_j$ has degree at most $j-1$, so it is orthogonal to $p_j$ by [F3]. [F2, F3, step 1.1, algebra]

3.1 The expansion in step 1.2 therefore has only the displayed $p_j$ and, when $j\ge1$, $p_{j-1}$ terms. Rearranging it yields the stated recurrence for every $0\le j<m$. [step 1.2, step 2.1, step 2.2, algebra] ∎
