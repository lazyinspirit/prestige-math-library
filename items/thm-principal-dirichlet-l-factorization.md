---
id: thm-principal-dirichlet-l-factorization
kind: theorem
title: "The principal Dirichlet L-function factors through zeta"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-principal-dirichlet-character, thm-dirichlet-l-euler-product, def-riemann-zeta-function, thm-euler-product-for-riemann-zeta, thm-riemann-zeta-meromorphic-continuation]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Theorem 3.5"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
    - title: "Andrew V. Sutherland, Number Theory I, Proposition 18.20"
      url: "https://ocw.mit.edu/courses/18-785-number-theory-i-fall-2021/mit18_785f21_full_lec.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Statement

Let $\chi_0$ be the principal Dirichlet character modulo $q$. Then on
$\operatorname{Re}s>1$,

$$L(s,\chi_0)=\zeta(s)\prod_{p\mid q}(1-p^{-s}).$$

Consequently, the meromorphic continuation of $L(s,\chi_0)$ has a simple pole
at $s=1$ with residue

$$\prod_{p\mid q}\left(1-\frac1p\right)=\frac{\varphi(q)}{q}.$$

## Facts & Assumptions

**Given:** The principal character $\chi_0$ modulo $q$.

[L1] $\chi_0(p)=0$ for primes $p\mid q$, and $\chi_0(p)=1$ for primes $p\nmid q$
([[def-principal-dirichlet-character]]).

[L2] Dirichlet $L$-functions and $\zeta$ have Euler products on
$\operatorname{Re}s>1$ ([[thm-dirichlet-l-euler-product]],
[[thm-euler-product-for-riemann-zeta]]).

[L3] The meromorphic continuation of $\zeta$ has a single simple pole at $1$ of
residue $1$ ([[thm-riemann-zeta-meromorphic-continuation]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $L(s,\chi_0)=\prod_p(1-\chi_0(p)p^{-s})^{-1}$. Using [L1], the Euler factors are $1$ at primes dividing $q$ and $(1-p^{-s})^{-1}$ at all other primes, so $L(s,\chi_0)=\prod_{p\nmid q}(1-p^{-s})^{-1}=\left(\prod_p(1-p^{-s})^{-1}\right)\prod_{p\mid q}(1-p^{-s})=\zeta(s)\prod_{p\mid q}(1-p^{-s})$. [L1, L2, given, algebra]

2.1 The finite factor $\prod_{p\mid q}(1-p^{-s})$ is holomorphic at $s=1$ and has value $\prod_{p\mid q}(1-p^{-1})$. Multiplying this with the residue-one pole from [L3] gives a simple pole of $L(s,\chi_0)$ at $1$ with residue $\prod_{p\mid q}(1-p^{-1})$. Finally, $\varphi(q)=q\prod_{p\mid q}(1-p^{-1})$ by the standard totient product, so the residue is $\varphi(q)/q$. [L3, step 1.1, algebra] ∎
