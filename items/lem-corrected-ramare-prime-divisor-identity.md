---
id: lem-corrected-ramare-prime-divisor-identity
kind: lemma
title: "Corrected Ramaré identity and prime-square error"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
provenance:
  statement: ai-altered
  proof: ai-generated
deps: []
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; only finite sums, finite selection and explicit real-variable estimates occur.
sources:
  references:
    - title: "Local adapted proof from Matom\u00e4ki\u2013Radziwi\u0142\u0142\u2013Tao"
      url: https://arxiv.org/pdf/1503.05121v3
      locator: "Equation (3.2) and correction footnote, PDF p. 12"
---

## Statement

Let $\mathcal P$ be a finite set of primes, let $\omega_{\mathcal P}(n)=\#\{p\in\mathcal P:p\mid n\}$, and let $a(n)$ be complex with $|a(n)|\le1$. For every positive integer $n$,
$$1_{\omega_{\mathcal P}(n)>0}=\sum_{\substack{p\in\mathcal P,\ m\ge1\\pm=n}}\frac1{\omega_{\mathcal P}(m)+1_{p\nmid m}}.$$
Only displayed pairs are evaluated, so denominators are positive. Replacing $1_{p\nmid m}$ by $1$ in the corresponding sum weighted by $a(pm)$ over $pm\le Y$ changes its value in modulus by at most $Y\sum_{p\in\mathcal P}p^{-2}$, for $Y\ge1$.

## Facts & Assumptions

**Given:** All hypotheses and conventions in the Statement.

## Proof

1.1 If no prime from $\mathcal P$ divides $n$, both sides are zero. Otherwise put $w=\omega_{\mathcal P}(n)\ge1$. For each $p\mid n$ in $\mathcal P$, writing $m=n/p$ gives $\omega_{\mathcal P}(m)=w-1$ when $p\nmid m$, and $w$ when $p\mid m$. Thus every summand is $1/w$ and there are exactly $w$ summands. [given, algebra, cases]

2.1 The replacement affects only $p\mid m$, hence only multiples $pm$ of $p^2$. In such a pair $\omega_{\mathcal P}(m)\ge1$, and the difference between the two reciprocals is at most one. There are at most $Y/p^2$ pairs for that prime. Sum this bound and use $|a|\le1$. No independence or asymptotic sieve estimate is used. [step 1.1, given, algebra] ∎
