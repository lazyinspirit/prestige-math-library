---
id: thm-hec-ke-euler-product-for-standard-gl2-l-function
kind: theorem
title: "Euler Product for the Standard GL2 Hecke L-Function"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-standard-l-function-of-a-gl2-eigenform
  - def-hecke-operator-on-congruence-forms
  - thm-hecke-preserves-cuspidality-on-congruence-subgroups
  - lem-full-level-holomorphic-cusp-form-coefficient-growth
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Chapter 5, Corollary 5.20 and Proposition 5.21, printed pp. 75–76."
    - title: "Avi Zeff, The Rankin–Selberg Method, Columbia graduate notes"
      url: "https://www.math.columbia.edu/~avizeff/quals/Rankin-Selberg.pdf"
      locator: "Theorem 4 and Lemma 5, PDF pp. 6–8: local Hecke factors and the tensor-product coefficient identity."
forward_refs: []
---

## Statement

Let $f$ be a normalized full-level holomorphic Hecke eigenform as defined
above. For $\operatorname{Re}s>3/2$ the standard GL2 L-function has the
absolutely convergent Euler product

$$
L(s,f)=\prod_{p\ {\rm prime}}
\left(1-\lambda_f(p)p^{-s}+p^{-2s}\right)^{-1}.
$$

Equivalently, if $\alpha_{f,p},\beta_{f,p}$ are the roots of
$X^2-\lambda_f(p)X+1$, the local factor is
$(1-\alpha_{f,p}p^{-s})^{-1}(1-\beta_{f,p}p^{-s})^{-1}$.

## Statement references

[[def-standard-l-function-of-a-gl2-eigenform|the normalized standard L-function]]

[[def-hecke-operator-on-congruence-forms|the Hecke recurrences]]

[[thm-hecke-preserves-cuspidality-on-congruence-subgroups|the Fourier coefficient formula]]

## Facts & Assumptions

**Given:** A normalized full-level holomorphic Hecke eigenform $f$ and
$\operatorname{Re}s>3/2$.

[F1] [[def-standard-l-function-of-a-gl2-eigenform]]: $\lambda_f(n)=a_f(n)n^{-(k-1)/2}$ and $L(s,f)=\sum_{n\ge1}\lambda_f(n)n^{-s}$.

[F2] [[def-hecke-operator-on-congruence-forms]]: $T_1=I$, the prime-power operators satisfy $T_{p^r}=T_pT_{p^{r-1}}-p^{k-1}T_{p^{r-2}}$ at level one, and $T_n$ is their ordered product over primes.

[F3] [[thm-hecke-preserves-cuspidality-on-congruence-subgroups]]: at level one, the coefficient of $q^m$ in $T_nf$ is $\sum_{d\mid\gcd(m,n)}d^{k-1}a_f(mn/d^2)$.

[F4] [[lem-full-level-holomorphic-cusp-form-coefficient-growth]]: $|\lambda_f(n)|\le C_fn^{1/2}$, so the standard Dirichlet series converges absolutely for $\operatorname{Re}s>3/2$.

## Proof

**Given:** The form $f$, its normalized coefficients and the operators above.

1.1 Write $T_nf=\mu_f(n)f$. Comparing the coefficient of $q^1$ and using $a_f(1)=1$, [F3] gives $\mu_f(n)=a_f(n)$. For any $m,n\ge1$, compare the coefficient of $q^m$ in this eigenvector equation and use [F3] to obtain $a_f(n)a_f(m)=\sum_{d\mid\gcd(m,n)}d^{k-1}a_f(mn/d^2)$. Dividing by $(mn)^{(k-1)/2}$ gives $\lambda_f(m)\lambda_f(n)=\sum_{d\mid\gcd(m,n)}\lambda_f(mn/d^2)$. [F1, F3, given, algebra]

2.1 If $\gcd(m,n)=1$, step 1.1 gives $\lambda_f(mn)=\lambda_f(m)\lambda_f(n)$. Taking $m=p$ and $n=p^r$ for $r\ge1$ gives $\lambda_f(p)\lambda_f(p^r)=\lambda_f(p^{r+1})+\lambda_f(p^{r-1})$. With $\lambda_f(1)=1$, this recurrence yields the formal power-series identity $\sum_{r\ge0}\lambda_f(p^r)X^r=(1-\lambda_f(p)X+X^2)^{-1}$. For $X=p^{-s}$ the series converges absolutely by [F4], since $|\lambda_f(p^r)X^r|\le C_f p^{r(1/2-\operatorname{Re}s)}$. [F1, F2, F4, step 1.1, induction, algebra]

3.1 For a finite set of primes, multiplying the local series from step 2.1 and using coprime multiplicativity yields the sum of $\lambda_f(n)n^{-s}$ over integers whose prime divisors lie in that set. The full Dirichlet series is absolutely convergent by [F4], so these finite sums tend to $L(s,f)$ as the prime sets exhaust all primes. The product converges absolutely: for $\sigma=\operatorname{Re}s>3/2$, $\sum_p\sum_{r\ge1}|\lambda_f(p^r)|p^{-r\sigma}\le C_f\sum_p\sum_{r\ge1}p^{r(1/2-\sigma)}<\infty$. The recurrence denominator factors over $\mathbb C$ as $1-\lambda_f(p)X+X^2=(1-\alpha_{f,p}X)(1-\beta_{f,p}X)$, with $\alpha_{f,p}+\beta_{f,p}=\lambda_f(p)$ and $\alpha_{f,p}\beta_{f,p}=1$. This proves both displayed product formulas. [F1, F4, step 2.1, algebra] ∎
