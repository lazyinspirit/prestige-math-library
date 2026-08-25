---
id: lem-grid-reduction-of-a-multivariate-polynomial
kind: lemma
title: "Reducing $f$ modulo $g_i(x_i)=\\prod_{s\\in S_i}(x_i-s)$ lowers each $\\deg_{x_i}$ below $\\lvert S_i\\rvert$, preserves the values on the grid, and preserves any top-degree coefficient whose exponents stay below the grid sizes"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-monomials-multidegree-and-total-degree, thm-monic-polynomial-division, def-polynomial-degree-leading-coefficient-and-monic, def-multivariate-polynomial-ring-by-iteration, def-polynomial-evaluation-and-root, def-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "N. Alon, Combinatorial Nullstellensatz, proof of Theorem 1.2"
      url: "https://www.tau.ac.il/~nogaa/PDFS/null.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field, let $f\in F[x_1,\dots,x_n]$, and let finite nonempty sets
$S_1,\dots,S_n\subseteq F$. Put

$$g_i(x_i):=\prod_{s\in S_i}(x_i-s).$$

Then there is a polynomial $\tilde f\in F[x_1,\dots,x_n]$ such that:

1. either $\tilde f=0$, or $\deg_{x_i}\tilde f<\lvert S_i\rvert$ for every $i$ and $\deg\tilde f\le\deg f$;
2. $\tilde f(a)=f(a)$ for every $a\in S_1\times\cdots\times S_n$;
3. if $\deg f=\sum_i t_i$ and the monomial $x_1^{t_1}\cdots x_n^{t_n}$ has top
   total degree with each $t_i<\lvert S_i\rvert$, then
   $[x_1^{t_1}\cdots x_n^{t_n}]\tilde f=[x_1^{t_1}\cdots x_n^{t_n}]f$.

## Facts & Assumptions

**Given:** a field $F$, finite nonempty subsets $S_1,\dots,S_n\subseteq F$, and a polynomial $f\in F[x_1,\dots,x_n]$.

[F1] The total degree and the separate degrees are taken from the monomial expansion ([[def-monomials-multidegree-and-total-degree]]).

[F2] Division by a monic polynomial in one variable over a commutative ring gives a quotient and remainder with smaller degree in that variable ([[thm-monic-polynomial-division]]).

[F3] For every $s\in S_i$, the factor $s-s$ appears in $\prod_{t\in S_i}(s-t)$, so $g_i(s)=0$.

## Proof

**Proof technique:** direct.

1.1 Set $r^{(0)}:=f$. For each $i=1,\dots,n$, view $r^{(i-1)}$ as a polynomial in $x_i$ with coefficients in $F[x_1,\dots,x_{i-1},x_{i+1},\dots,x_n]$. Since $g_i$ is monic of degree $\lvert S_i\rvert$, [F2] gives $r^{(i-1)}=q_i g_i+r^{(i)}$ with $r^{(i)}=0$ or $\deg_{x_i}r^{(i)}<\lvert S_i\rvert$. Because $g_i$ involves only $x_i$, this subtraction leaves all previously obtained bounds $\deg_{x_j}<\lvert S_j\rvert$ for $j<i$ unchanged; and every nonleading term of $g_i$ has smaller $x_i$-degree than its leading term, so the division step introduces no monomial of larger total degree. Therefore $\tilde f:=r^{(n)}$ satisfies part 1. [F1, F2, construct]

2.1 Let $a=(a_1,\dots,a_n)\in S_1\times\cdots\times S_n$. For each $i$, step 1.1 gives $r^{(i-1)}-r^{(i)}=q_i g_i$, and [F3] gives $g_i(a_i)=0$ because $a_i\in S_i$. Hence $r^{(i-1)}(a)=r^{(i)}(a)$ for every $i$, so chaining these equalities yields $\tilde f(a)=f(a)$. [F3, step 1.1]

3.1 In the situation of part 3, fix a stage $i$. Any monomial of total degree $\deg f$ in $q_i g_i$ must use the leading term $x_i^{\lvert S_i\rvert}$ of $g_i$, because every other term of $g_i$ has smaller total degree. So every top-degree monomial of $q_i g_i$ has $x_i$-exponent at least $\lvert S_i\rvert$. Since the target monomial has exponent $t_i<\lvert S_i\rvert$ for every $i$, no stage changes its coefficient. Therefore $[x_1^{t_1}\cdots x_n^{t_n}]\tilde f=[x_1^{t_1}\cdots x_n^{t_n}]f$. [step 1.1] ∎

## Remarks

- Part 3 is the clause that the Nullstellensatz actually uses. The degree reduction and grid agreement alone do not see the top coefficient.
