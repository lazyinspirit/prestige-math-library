---
id: lem-gauss-quadrature-rule-data-well-defined
kind: lemma
title: The Gaussian nodes, cardinal polynomials and weights are well-defined
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - def-gauss-quadrature-rule
  - def-gauss-moment-data
  - thm-monic-gauss-orthogonal-polynomials-exist-uniquely
  - thm-gauss-orthogonal-polynomial-has-simple-interior-zeros
  - def-cardinal-polynomial-interpolation
  - lem-cardinal-basis-degree-and-values
  - thm-cardinal-polynomial-interpolant-exists-uniquely
  - def-integrable-real-and-complex-functions-and-their-integrals
  - thm-linearity-of-the-lebesgue-integral-on-l-one
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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

For moment data with order $2m-1$, the nodes and rule defined in
[[def-gauss-quadrature-rule]] exist as stated: the roots can be ordered in
$(a,b)$, every cardinal polynomial is defined, every weight integral is finite,
and $Q_m(f)$ is a finite real number whenever $f$ is real-valued at the nodes.

## Facts & Assumptions

**Given:** Moment data $(a,b,m,2m-1,\mu)$ and the rule of
[[def-gauss-quadrature-rule]].

[F1] [[def-gauss-moment-data]]: moments through degree $2m-1$ are finite.

[F2] [[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]] and [[thm-gauss-orthogonal-polynomial-has-simple-interior-zeros]]: $p_m$ is monic and has exactly $m$ distinct roots in $(a,b)$.

[F3] [[def-cardinal-polynomial-interpolation]]: for distinct nodes, $\ell_i(X)=\prod_{j\ne i}(X-x_j)/(x_i-x_j)$; every denominator is a nonzero node difference.

[F4] [[lem-cardinal-basis-degree-and-values]]: each $\ell_i$ is a polynomial of degree at most $m-1$ and has the cardinal values at the nodes.

[F5] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: a finite linear combination of integrable monomials is integrable and its integral is the corresponding finite linear combination of moments.

## Proof

1.1 By [F2], the roots of $p_m$ form a finite set of exactly $m$ distinct points in $(a,b)$, so sorting them defines $x_1<\cdots<x_m$ without ambiguity. Their pairwise differences are nonzero, so [F3] defines every $\ell_i$. By [F4], each cardinal polynomial has degree at most $m-1$. [F2, F3, F4, construct]

1.2 Each $\ell_i$ is a finite linear combination of monomials of degrees at most $m-1$. These moments are finite by [F1], so [F5] makes every $w_i=\int\ell_i\,d\mu$ finite. [F1, F4, F5]

2.1 For any real values $f(x_1),\ldots,f(x_m)$, the expression $\sum_iw_if(x_i)$ has finitely many finite real summands, hence is a defined real number. This establishes the stated well-definedness of $Q_m(f)$. [F1, step 1.2, algebra] ∎
