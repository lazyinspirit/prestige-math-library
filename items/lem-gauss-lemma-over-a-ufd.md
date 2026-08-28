---
id: lem-gauss-lemma-over-a-ufd
kind: lemma
title: "Gauss lemma over a UFD"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unique-factorisation-domain, def-field-of-fractions, def-polynomial-ring-over-a-commutative-ring, def-divisibility-and-associates-in-a-domain, def-irreducible-and-prime-elements-in-a-domain]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Eisenstein Criterion and Gauss' Lemma, Theorem 1.3"
      url: "https://virtualmath1.stanford.edu/~conrad/121Page/handouts/gausslemma.pdf"
    - title: "Keith Conrad, Eisenstein Criterion and Gauss' Lemma, Theorem 2.1"
      url: "https://virtualmath1.stanford.edu/~conrad/121Page/handouts/gausslemma.pdf"
pipeline_run: frontier-22
---

## Statement

Let $R$ be a unique factorisation domain and let $K=\operatorname{Frac}(R)$.

1. If $f,g\in R[x]$ are primitive, then $fg$ is primitive.
2. If $p\in R[x]$ is primitive and has positive degree, then $p$ is irreducible
   in $R[x]$ if and only if it is irreducible in $K[x]$.

Here a polynomial is **primitive** when its coefficients have no common nonunit
divisor.

## Facts & Assumptions

**Given:** A UFD $R$, its field of fractions $K$, and polynomials in $R[x]$.

[L1] A UFD is a domain in which every nonzero nonunit factors uniquely into irreducibles, up to order and associates ([[def-unique-factorisation-domain]]).

[L2] The field of fractions of a domain consists of its formal fractions ([[def-field-of-fractions]]).

[L3] Polynomial rings, divisibility, and irreducibility are those of [[def-polynomial-ring-over-a-commutative-ring]], [[def-divisibility-and-associates-in-a-domain]], and [[def-irreducible-and-prime-elements-in-a-domain]].

## Proof

**Proof technique:** direct.

1.1 Let $\pi\in R$ be irreducible. By [L1], any factorization of $ab$ into irreducibles is obtained by concatenating factorizations of $a$ and $b$, so if $\pi\mid ab$ then $\pi$ is associate to one factor from $a$ or one factor from $b$. Therefore every irreducible element of $R$ is prime. [L1, L3, algebra]

2.1 Let $f=\sum_i a_i x^i$ and $g=\sum_j b_j x^j$ be primitive. Suppose some irreducible $\pi\in R$ divides every coefficient of $fg$. Choose the least indices $i$ and $j$ with $\pi\nmid a_i$ and $\pi\nmid b_j$. Then the coefficient of $x^{i+j}$ in $fg$ is $$a_i b_j+\sum_{u+v=i+j,\ (u,v)\ne(i,j)} a_u b_v.$$ Every summand in the sum is divisible by $\pi$, while $a_i b_j$ is not by step 1.1. This contradicts the choice of $\pi$. So no irreducible divides all coefficients of $fg$, and hence $fg$ is primitive. [step 1.1, L3, algebra]

3.1 If $p$ is reducible in $R[x]$, then it is reducible in $K[x]$ because $R[x]\subseteq K[x]$. Conversely, suppose $p=qr$ in $K[x]$ with both factors of positive degree. Choose nonzero $a,b\in R$ with $aq,br\in R[x]$, and factor out the greatest common divisor of the coefficients to write $$aq=cq_0,\qquad br=dr_0,$$ where $q_0,r_0\in R[x]$ are primitive. Then $$ab\,p=cd\,q_0r_0.$$ By step 2.1 the product $q_0r_0$ is primitive, so the right-hand side has content associate to $cd$, while the left-hand side has content associate to $ab$ because $p$ is primitive. Thus $ab$ and $cd$ are associates. Absorbing the unit into one factor yields $$p=q_1r_1$$ with $q_1,r_1\in R[x]$ of positive degree, contradicting irreducibility in $R[x]$. [step 2.1, L1, L2, L3, algebra]

4.1 Therefore a primitive positive-degree polynomial is irreducible in $R[x]$ exactly when it is irreducible in $K[x]$. [step 3.1] ∎
