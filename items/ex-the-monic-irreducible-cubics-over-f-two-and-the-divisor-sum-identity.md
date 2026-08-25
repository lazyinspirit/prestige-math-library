---
id: ex-the-monic-irreducible-cubics-over-f-two-and-the-divisor-sum-identity
kind: example
title: "The divisor-sum identity at $q=2$, $n=3$ finds exactly two monic irreducible cubics"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-divisor-sum-identity-for-monic-irreducibles-over-a-finite-field, thm-quadratic-and-cubic-irreducibility-test, cor-factor-theorem-over-a-commutative-ring, def-polynomial-degree-leading-coefficient-and-monic, def-polynomial-evaluation-and-root, def-divides-in-z]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "K. Conrad, Roots and Irreducibles (expository blurb), Example 6.2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/rootirred.pdf"
    - title: "K. Conrad, Finite Fields (expository blurb), Section 6"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Example

Over $\mathbb F_2$ the divisor-sum identity
([[prop-divisor-sum-identity-for-monic-irreducibles-over-a-finite-field]]) at
$n=3$ reads

$$N_2(1)+3\,N_2(3)=2^{3}=8,$$

and $N_2(1)=2$, so $N_2(3)=2$. The two monic irreducible cubics in
$\mathbb F_2[t]$ are

$$t^{3}+t+1\qquad\text{and}\qquad t^{3}+t^{2}+1 .$$

## Facts & Assumptions

**Given:** The field $\mathbb F_2$ with two elements and the counts $N_2(d)$ of monic irreducible polynomials of degree $d$ in $\mathbb F_2[t]$ ([[def-polynomial-degree-leading-coefficient-and-monic]]).

[L1] $\sum_{d\mid n}d\,N_q(d)=q^{n}$ for every $n\ge1$, the sum over the positive divisors of $n$ ([[prop-divisor-sum-identity-for-monic-irreducibles-over-a-finite-field]], [[def-divides-in-z]]).

[L2] A polynomial of degree $2$ or $3$ over a field is irreducible if and only if it has no root in that field ([[thm-quadratic-and-cubic-irreducibility-test]]).

[L3] For a commutative ring $R$, $a\in R$ and $f\in R[x]$: $f(a)=0$ if and only if $x-a$ divides $f$ ([[cor-factor-theorem-over-a-commutative-ring]], [[def-polynomial-evaluation-and-root]]).

## Verification

**Proof technique:** direct.

1.1 The monic polynomials of degree one in $\mathbb F_2[t]$ are $t$ and $t+1$, and each is irreducible, having degree one; so $N_2(1)=2$. [given, algebra]

1.2 A monic cubic over $\mathbb F_2$ is $f=t^{3}+at^{2}+bt+c$ with $a,b,c\in\mathbb F_2$, so there are eight of them. Such an $f$ has no root in $\mathbb F_2$ exactly when $f(0)=c\ne0$ and $f(1)=1+a+b+c\ne0$, that is exactly when $c=1$ and $a+b=1$. [given, algebra]

2.1 The positive divisors of $3$ are $1$ and $3$, so [L1] at $q=2$ and $n=3$ reads $N_2(1)+3N_2(3)=8$; with step 1.1 this gives $3N_2(3)=6$ and $N_2(3)=2$. [step 1.1, L1, algebra]

3.1 The pairs $(a,b)$ with $a+b=1$ in $\mathbb F_2$ are $(0,1)$ and $(1,0)$, so exactly two monic cubics have no root in $\mathbb F_2$, namely $t^{3}+t+1$ and $t^{3}+t^{2}+1$; by [L2] these two are irreducible and by [L2] and [L3] the other six are not, each having a root and hence a linear factor. This agrees with the count $N_2(3)=2$ of step 2.1. [step 2.1, step 1.2, L2, L3, algebra] ∎

## Remarks

- **The identity is a recursion, not a formula.** It determines $N_2(3)$ only because $N_2(1)$ is already known; at $n=4$ it would read $N_2(1)+2N_2(2)+4N_2(4)=16$ and would need $N_2(2)$ first.
