---
id: thm-gauss-rule-exact-through-degree-2m-minus-1-and-positive-weights
kind: theorem
title: Gaussian quadrature is exact through degree 2m−1 and has positive weights
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - def-gauss-quadrature-rule
  - lem-gauss-quadrature-rule-data-well-defined
  - def-gauss-polynomial-moment-inner-product
  - thm-gauss-polynomial-moment-pairing-is-an-inner-product
  - thm-monic-gauss-orthogonal-polynomials-exist-uniquely
  - thm-gauss-orthogonal-polynomial-has-simple-interior-zeros
  - def-cardinal-polynomial-interpolation
  - lem-cardinal-basis-degree-and-values
  - thm-cardinal-polynomial-interpolant-exists-uniquely
  - thm-monic-polynomial-division
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-gauss-moment-data
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
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

Let $(a,b,m,2m-1,\mu)$ be moment data as in
[[def-gauss-moment-data]], and let $Q_m$ and $w_i$ be the rule and weights of
[[def-gauss-quadrature-rule]]. For every real polynomial $f$ of degree at most
$2m-1$,
$$ \int_{[a,b]} f(x)\,d\mu(x)=Q_m(f)=\sum_{i=1}^{m}w_if(x_i). $$
Moreover, $w_i>0$ for every $i$ and $\sum_iw_i=\mu([a,b])$.

## Facts & Assumptions

**Given:** Moment data, its $m$-node Gaussian rule, and a real polynomial $f$ of degree at most $2m-1$.

[F1] [[def-gauss-moment-data]]: all moments through degree $2m-1$ are finite.

[F2] [[thm-monic-gauss-orthogonal-polynomials-exist-uniquely]]: $p_m$ is monic of degree $m$ and is orthogonal to all polynomials of degree less than $m$.

[F3] [[thm-gauss-orthogonal-polynomial-has-simple-interior-zeros]] and [[lem-gauss-quadrature-rule-data-well-defined]]: the nodes are the distinct roots of $p_m$, and the rule's weights and cardinal polynomials are defined.

[F4] [[thm-monic-polynomial-division]]: $f=p_ms+t$ with either $t=0$ or $\deg t<m$.

[F5] [[def-gauss-quadrature-rule]]: $w_i=\int\ell_i\,d\mu$ and $Q_m(f)=\sum_iw_if(x_i)$.

[F6] [[def-cardinal-polynomial-interpolation]], [[lem-cardinal-basis-degree-and-values]], and [[thm-cardinal-polynomial-interpolant-exists-uniquely]]: every polynomial $t$ of degree at most $m-1$ satisfies $t(x)=\sum_i t(x_i)\ell_i(x)$.

[F7] [[thm-gauss-polynomial-moment-pairing-is-an-inner-product]]: a nonzero polynomial of degree at most $m-1$ has strictly positive squared integral.

[F8] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral distributes over the finite polynomial sums used below.

[F9] [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]] and [[def-integral-of-a-nonnegative-simple-function]]: $\int 1_{[a,b]}\,d\mu=\mu([a,b])$.

## Proof

1.1 By [F4], write $f=p_ms+t$, where $t=0$ or $\deg t<m$. If $s\ne0$, the leading term of $p_ms$ has degree $m+\deg s$ and cannot cancel against $t$, so $m+\deg s=\deg f\le2m-1$ and $\deg s<m$. The moments in these polynomials are finite by [F1]. If $s=0$, the integral of $p_ms=0$ is zero; otherwise orthogonality [F2] gives $\int p_ms\,d\mu=0$. Thus $\int f\,d\mu=\int t\,d\mu$ by [F8]. [given, F1, F2, F4, F8, algebra]

1.2 At every node $x_i$, $p_m(x_i)=0$, so $f(x_i)=t(x_i)$ and [F5] gives $Q_m(f)=Q_m(t)$. [F2, F3, F4, F5, algebra]

1.3 The cardinal interpolation identity [F6] gives $t(x)=\sum_i t(x_i)\ell_i(x)$. Integrating this finite sum and using [F5] and [F8] yields $\int t\,d\mu=\sum_i t(x_i)\int\ell_i\,d\mu=\sum_iw_it(x_i)=Q_m(t).$ [F5, F6, F8, algebra]

2.1 Steps 1.1–1.3 give $\int f\,d\mu=\int t\,d\mu=Q_m(t)=Q_m(f)$, proving exactness for every such $f$. [step 1.1, step 1.2, step 1.3]

3.1 For a fixed $i$, $\ell_i^2$ has degree at most $2m-2$, so step 2.1 applied to this polynomial gives $\int\ell_i^2\,d\mu=Q_m(\ell_i^2)=\sum_j w_j\ell_i(x_j)^2=w_i$ by the cardinal values in [F6]. The cardinal polynomial is nonzero because $\ell_i(x_i)=1$; [F7] therefore gives $w_i>0$. [F6, F7, step 2.1, algebra]

4.1 Applying exactness to the constant polynomial $1$ and then [F9] gives $\sum_iw_i=\int1\,d\mu=\mu([a,b])$. [given, F9, step 2.1] ∎
