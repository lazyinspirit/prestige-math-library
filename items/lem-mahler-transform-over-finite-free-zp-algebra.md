---
id: lem-mahler-transform-over-finite-free-zp-algebra
kind: lemma
title: Mahler transform over a finite free coefficient algebra
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
- def-bounded-measure-over-finite-free-zp-algebra
- thm-mahler-expansion-for-continuous-p-adic-functions
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Rodrigues Jacinto and C. Williams, An Introduction to p-adic L-functions
    url: https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf
    locator: Theorem 3.21 and §3.4, printed pp. 123–126; coefficient field conventions
      in §3.1
  - title: J. Sharifi, Iwasawa Theory lecture notes
    url: https://www.math.ucla.edu/~sharifi/iwasawa.pdf
    locator: §2.3, printed pp. 47–51
verification: {}
---

## Statement

Let $R$ be a commutative algebra that is finite free as a $\mathbb Z_p$-module, with its $p$-adic topology. Every continuous function $f:\mathbb Z_p\to R$ has a unique uniformly convergent expansion
$$f(x)=\sum_{n=0}^{\infty}a_n\binom{x}{n},\qquad a_n\in R,\quad a_n\longrightarrow0.$$
The assignment
$$\mu\longmapsto A_\mu(T):=\int_{\mathbb Z_p}(1+T)^x\,d\mu(x)$$
is a bijection from bounded $R$-valued measures on the additive group $\mathbb Z_p$ to $R\llbracket T\rrbracket$. If $A_\mu(T)=\sum_{n\ge0}c_nT^n$, then $c_n=\int\binom{x}{n}\,d\mu(x)$.

## Statement references

[J. Rodrigues Jacinto and C. Williams, *An Introduction to p-adic L-functions*, Theorem 3.21 and §3.4, pp. 123–126](https://msp.org/ent/2025/4-1/ent-v4-n1-p03-p.pdf)

[J. Sharifi, *Iwasawa Theory*, §2.3, pp. 47–51](https://www.math.ucla.edu/~sharifi/iwasawa.pdf)

## Facts & Assumptions

**Given:** A finite free commutative $\mathbb Z_p$-algebra $R$ and a continuous function $f:\mathbb Z_p\to R$.

[F1] Every continuous $\mathbb Z_p$-valued function on $\mathbb Z_p$ has a unique uniformly convergent Mahler expansion, with coefficients tending to zero. [[thm-mahler-expansion-for-continuous-p-adic-functions]]

[F2] A bounded $R$-valued measure is a continuous $R$-linear functional on continuous functions. [[def-bounded-measure-over-finite-free-zp-algebra]]

## Proof

1.1 The zero algebra has a unique function and functional and a unique formal series, so the assertion is immediate there. Otherwise choose a $\mathbb Z_p$-basis $e_1,\ldots,e_r$ of $R$ and write $f=\sum_{j=1}^r f_j e_j$. Each coordinate function $f_j:\mathbb Z_p\to\mathbb Z_p$ is continuous because the coordinate projections of a finite free $\mathbb Z_p$-module are continuous. By [F1], write $f_j(x)=\sum_{n\ge0}a_{j,n}\binom{x}{n}$ with $a_{j,n}\to0$. Then $a_n=\sum_j a_{j,n}e_j$ tends to zero in $R$ and gives the stated expansion of $f$. Coordinatewise uniqueness in [F1] proves uniqueness of this expansion. [F1, given, algebra]

1.2 Since $|\binom{x}{n}|_p\le1$ on $\mathbb Z_p$, the convergence $a_n\to0$ makes the expansion uniform. For a bounded measure $\mu$, uniform convergence and continuity give
$$\int f\,d\mu=\sum_{n\ge0}a_n\int\binom{x}{n}\,d\mu.$$
In particular the coefficients of its transform are $c_n=\int\binom{x}{n}\,d\mu$. [F2, step 1.1, algebra]

2.1 Conversely, let $C(T)=\sum_{n\ge0}c_nT^n\in R\llbracket T\rrbracket$. In the basis norm of [F2], every coefficient $c_n\in R$ has norm at most $1$. For the unique Mahler expansion in step 1.1, define $\mu_C(f)=\sum_{n\ge0}a_nc_n$. The finite-free algebra has integral structure constants, so its norm is submultiplicative; the series converges because $a_n\to0$ and $(c_n)$ is bounded. The coefficient formula $a_n=\Delta^nf(0)$ from [F1] and the ultrametric inequality give $\|a_n\|_R\le\|f\|_\infty$, hence $\|\mu_C(f)\|_R\le\|f\|_\infty$. Each $a_n$ is $R$-linear in $f$ because $\Delta$ is a finite sum with integer coefficients, so $\mu_C$ is a continuous $R$-linear functional. Its integrals of $\binom{x}{n}$ equal $c_n$, so its transform is $C(T)$. [F1, F2, step 1.1, algebra]

3.1 The construction in step 2.1 is inverse to the transform in step 1.2 because the Mahler coefficients are unique and the transform coefficients are exactly the integrals of the Mahler basis functions. Thus the transform is a bijection. [F1, F2, step 1.2, step 2.1, algebra] ∎
