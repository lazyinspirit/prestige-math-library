---
id: lem-real-dirichlet-l-nonzero-at-one
kind: lemma
title: "A real nonprincipal Dirichlet L-function is nonzero at one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-dirichlet-character-values, thm-dirichlet-l-euler-product, thm-principal-dirichlet-l-factorization, thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane, thm-riemann-zeta-meromorphic-continuation, thm-landau-dirichlet-series]
justified_by: []
proof_strategy: contradiction
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Theorem 3.11"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
    - title: "Leonard Tomczak, Analytic Number Theory, Chapter 4"
      url: "https://math.berkeley.edu/~ltomczak/notes/Mich2022/AnaNT_Notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

If $\chi$ is a real nonprincipal Dirichlet character, then $L(1,\chi)\ne0$.

## Facts & Assumptions

**Given:** A real nonprincipal Dirichlet character $\chi$ modulo $q$.

[L1] The principal factor is $L(s,\chi_0)=\zeta(s)\prod_{p\mid q}(1-p^{-s})$; the continuation of $\zeta$ is holomorphic away from its simple pole at $1$ ([[thm-principal-dirichlet-l-factorization]], [[thm-riemann-zeta-meromorphic-continuation]]).

[L2] On unit classes, a real Dirichlet character takes values in $\{\pm1\}$, and on nonunits it is $0$ ([[lem-dirichlet-character-values]]).

[L3] Every Dirichlet $L$-function has its Euler product on $\operatorname{Re}s>1$ ([[thm-dirichlet-l-euler-product]]).

[L4] The nonprincipal factor $L(s,\chi)$ is holomorphic on $\operatorname{Re}s>0$ ([[thm-nonprincipal-dirichlet-l-holomorphic-right-half-plane]]).

[L5] A Dirichlet series with nonnegative coefficients and finite abscissa of convergence is singular at its abscissa of convergence ([[thm-landau-dirichlet-series]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $L(1,\chi)=0$, and set $G(s):=L(s,\chi_0)L(s,\chi)$. For $\operatorname{Re}s>1$, facts [L2] and [L3] give $$ G(s)=\prod_{\chi(p)=1}(1-p^{-s})^{-2}\prod_{\chi(p)=-1}(1-p^{-2s})^{-1}, $$ because primes dividing $q$ contribute the trivial local factor $1$. Expanding the geometric series shows that $$ G(s)=\sum_{n\ge1}a_n n^{-s} $$ with $a_n\ge0$ for every $n$. Moreover, if $(m,q)=1$, then the square coefficient $a_{m^2}$ is positive: each local factor above has a positive coefficient at every even exponent occurring in $m^2$. [L2, L3, given, assume-contra, algebra]

2.1 Step 1.1 implies $$ \sum_{n\ge1}a_n n^{-1/2}\ge\sum_{\substack{m\ge1\\(m,q)=1}}\frac{a_{m^2}}{m}\ge\sum_{\substack{m\ge1\\(m,q)=1}}\frac1m=\infty, $$ so the abscissa of convergence $\sigma_c$ of $\sum a_n n^{-s}$ satisfies $\sigma_c\ge1/2$. On the other hand, [L1] and [L4] show that $G$ is holomorphic on the whole half-plane $\operatorname{Re}s>0$: the only possible singularity there is the simple pole of $L(s,\chi_0)$ at $1$, and the assumption of step 1.1 cancels it. Since $G$ is represented by a Dirichlet series with nonnegative coefficients, [L5] forbids any positive abscissa of convergence. Thus $\sigma_c\le0$, contradicting $\sigma_c\ge1/2$. Therefore $L(1,\chi)\ne0$. [L1, L4, L5, step 1.1, discharge-contradiction] ∎
