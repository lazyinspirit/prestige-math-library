---
id: thm-polynomial-identity-lemma
kind: theorem
title: "If $\\deg_{x_i}P<\\lvert S_i\\rvert$ for each $i$ and $P$ vanishes on $S_1\\times\\cdots\\times S_n$, then $P=0$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-monomials-multidegree-and-total-degree, thm-root-bound-for-polynomials-over-a-domain, def-multivariate-polynomial-ring-by-iteration, def-polynomial-evaluation-and-root, cor-multivariate-polynomial-ring-over-a-domain-is-a-domain, def-field, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "N. Alon, Combinatorial Nullstellensatz, Lemma 2.1"
      url: "https://www.tau.ac.il/~nogaa/PDFS/null.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field, let $P\in F[x_1,\dots,x_n]$, and let finite sets
$S_1,\dots,S_n\subseteq F$ satisfy

$$\deg_{x_i}P<\lvert S_i\rvert\qquad(1\le i\le n).$$

If $P$ vanishes at every point of $S_1\times\cdots\times S_n$, then $P=0$.

## Facts & Assumptions

**Given:** a field $F$, finite subsets $S_1,\dots,S_n\subseteq F$, and a polynomial $P\in F[x_1,\dots,x_n]$ with $\deg_{x_i}P<\lvert S_i\rvert$ for every $i$, vanishing on $S_1\times\cdots\times S_n$.

[F1] A nonzero univariate polynomial over a domain has at most as many distinct roots as its degree ([[thm-root-bound-for-polynomials-over-a-domain]], [[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]).

[F2] Every polynomial has a finite monomial expansion, so in particular one may write $$P=\sum_{j=0}^{d}P_j(x_1,\dots,x_{n-1})x_n^j$$ with $d=\deg_{x_n}P$ ([[def-monomials-multidegree-and-total-degree]]).

## Proof

**Proof technique:** induction.

1.1 [base] If $n=1$, then $P$ is a univariate polynomial of degree below $\lvert S_1\rvert$ vanishing at every point of $S_1$. By [F1] a nonzero polynomial of that degree cannot have so many roots, so $P=0$. [F1]

1.2 [ih] Assume the statement is known for polynomials in $n-1$ variables. [given]

1.3 Write $P=\sum_{j=0}^{d}P_j(x_1,\dots,x_{n-1})x_n^j$ as in [F2], where $d=\deg_{x_n}P<\lvert S_n\rvert$. [F2]

2.1 Fix $(a_1,\dots,a_{n-1})\in S_1\times\cdots\times S_{n-1}$. Then the univariate polynomial $$Q(y):=P(a_1,\dots,a_{n-1},y)$$ has degree at most $d<\lvert S_n\rvert$ and vanishes on all of $S_n$, so [F1] gives $Q=0$. Therefore every coefficient $P_j(a_1,\dots,a_{n-1})$ is $0$. [F1, step 1.3]

3.1 Since the point $(a_1,\dots,a_{n-1})$ was arbitrary, every coefficient polynomial $P_j$ vanishes on $S_1\times\cdots\times S_{n-1}$. Its degree in each variable is still below the corresponding $\lvert S_i\rvert$, so the induction hypothesis gives $P_j=0$ for every $j$. Hence $P=0$. [step 1.2, step 2.1, discharge-induction] ∎

## Remarks

- The inequalities are strict. The companion page's counterexample is exactly the boundary case where equality holds in one variable.
