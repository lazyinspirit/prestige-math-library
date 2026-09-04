---
id: thm-schwartz-zippel-lemma
kind: theorem
title: "The Schwartz-Zippel lemma"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-field, def-polynomial-degree-leading-coefficient-and-monic, def-polynomial-evaluation-and-root, thm-root-bound-for-polynomials-over-a-domain, def-multivariate-polynomial-ring-by-iteration, def-monomials-multidegree-and-total-degree]
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Sanjeev Arora and Boaz Barak, Computational Complexity: A Modern Approach"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "Eric Blais, Models of Computation, 14. Randomized Computation"
      url: "https://cs.uwaterloo.ca/~eblais/cs365/w25/probabilistic"
---

## Statement

Let $F$ be a field, let $f\in F[x_1,\dots,x_n]$ be a nonzero polynomial of
total degree at most $d$, and let $S\subseteq F$ be a nonempty finite set. If
$a=(a_1,\dots,a_n)$ is chosen uniformly from $S^n$, then

$$\mathbb P\bigl(f(a)=0\bigr)\le \frac{d}{|S|}.$$

## Facts & Assumptions

**Given:** a field $F$, a nonzero polynomial $f\in F[x_1,\dots,x_n]$ of total degree at most $d$, and a nonempty finite set $S\subseteq F$.

[L1] Every multivariate polynomial has a finite monomial expansion; in particular one may view it as a univariate polynomial in one chosen variable with coefficients in the remaining variables, and the total degree of a coefficient slice drops by its exponent in that variable ([[def-monomials-multidegree-and-total-degree]], [[def-multivariate-polynomial-ring-by-iteration]]).

[L2] A nonzero univariate polynomial of degree $m$ over a domain has at most $m$ roots ([[thm-root-bound-for-polynomials-over-a-domain]]).

## Proof

**Proof technique:** induction.

1.1 If $n=0$, then $f$ is a nonzero constant polynomial and $S^0$ has the single element $()$, so $f(a)\ne 0$ always. Hence the vanishing probability is $0$. [base]

1.2 If $n=1$, the statement is exactly [L2]: at most $d$ points of $S$ are roots of $f$, so the vanishing probability is at most $d/|S|$. [L2, base]

1.3 Assume the claim for $n-1$ variables with $n\ge 2$. Write $f(x_1,\dots,x_n)=\sum_{j=0}^{m} f_j(x_2,\dots,x_n)x_1^j$, where $m=\deg_{x_1}f$ and $f_m\ne 0$. By [L1], the coefficient polynomial $f_m$ has total degree at most $d-m$. [L1, ih]

2.1 Choose $(a_2,\dots,a_n)\in S^{n-1}$ uniformly. By the induction hypothesis, the probability that $f_m(a_2,\dots,a_n)=0$ is at most $(d-m)/|S|$. On the complementary event, the specialized univariate polynomial $g(y):=f(y,a_2,\dots,a_n)$ is nonzero of degree $m$, so [L2] says that for a uniform $a_1\in S$ the conditional probability $g(a_1)=0$ is at most $m/|S|$. [L2, step 1.3, choose]

3.1 Split according to the two cases in step 2.1. The total vanishing probability is at most $(d-m)/|S|+m/|S|=d/|S|$. This proves the claim for every $n\ge 2$, and together with steps 1.1 and 1.2 completes the induction. [step 1.1, step 1.2, step 2.1, discharge-induction, algebra] ∎
