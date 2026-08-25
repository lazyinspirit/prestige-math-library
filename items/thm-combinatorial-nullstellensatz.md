---
id: thm-combinatorial-nullstellensatz
kind: theorem
title: "Alon's Combinatorial Nullstellensatz: if $\\deg f=\\sum_it_i$, the coefficient of $x_1^{t_1}\\cdots x_n^{t_n}$ in $f$ is nonzero, and $\\lvert S_i\\rvert>t_i$, then $f(s_1,\\dots,s_n)\\ne0$ for some $s_i\\in S_i$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polynomial-identity-lemma, lem-grid-reduction-of-a-multivariate-polynomial, def-monomials-multidegree-and-total-degree, def-polynomial-evaluation-and-root, def-field, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "N. Alon, Combinatorial Nullstellensatz, Theorem 1.2"
      url: "https://www.tau.ac.il/~nogaa/PDFS/null.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field, let $f\in F[x_1,\dots,x_n]$, and let finite sets
$S_1,\dots,S_n\subseteq F$. Suppose

1. $\deg f=\sum_i t_i$;
2. the coefficient of $x_1^{t_1}\cdots x_n^{t_n}$ in $f$ is nonzero; and
3. $\lvert S_i\rvert>t_i$ for every $i$.

Then there is a point $(s_1,\dots,s_n)\in S_1\times\cdots\times S_n$ with
$f(s_1,\dots,s_n)\ne0$.

## Facts & Assumptions

**Given:** a field $F$, a polynomial $f\in F[x_1,\dots,x_n]$, finite subsets $S_1,\dots,S_n\subseteq F$, and exponents $t_1,\dots,t_n$ satisfying the three hypotheses above.

[L1] The reduction lemma gives a polynomial $\tilde f$ with $\deg_{x_i}\tilde f<\lvert S_i\rvert$, agreeing with $f$ on the whole grid and preserving the top coefficient of $x_1^{t_1}\cdots x_n^{t_n}$ ([[lem-grid-reduction-of-a-multivariate-polynomial]]).

[L2] A polynomial with separate degrees below the grid sizes that vanishes on the whole grid is the zero polynomial ([[thm-polynomial-identity-lemma]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $f$ vanishes at every point of $S_1\times\cdots\times S_n$. Apply [L1] to obtain the reduced polynomial $\tilde f$. [assume-contra, L1]

2.1 By [L1], the polynomial $\tilde f$ still vanishes on the whole grid and satisfies $\deg_{x_i}\tilde f<\lvert S_i\rvert$ for every $i$, so [L2] gives $\tilde f=0$. [L1, L2, step 1.1]

3.1 But [L1] also says that the coefficient of $x_1^{t_1}\cdots x_n^{t_n}$ is the same in $\tilde f$ as in $f$, hence nonzero. That contradicts $\tilde f=0$. Therefore some grid point satisfies $f(s_1,\dots,s_n)\ne0$. [L1, step 2.1, discharge-contradiction] ∎

## Remarks

- The top-coefficient hypothesis is load-bearing. The companion page carries the false statement obtained by deleting it.
