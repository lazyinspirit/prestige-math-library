---
id: cor-galois-prime-decomposition-efg
title: "Galois prime decomposition efg"
kind: corollary
status: published
origin: pipeline
deps: [thm-galois-action-on-primes-above-a-prime-is-transitive, thm-fundamental-identity-for-primes-in-number-fields]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "\u00a79.2, Theorem 9.2.2"
      url: https://wstein.org/books/ant/ant.pdf
proof_strategy: direct argument
---

## Statement

Let $L/K$ be a finite Galois extension of number fields and let $p$ be a nonzero prime of $\mathcal O_K$. Every prime $P$ of $\mathcal O_L$ above $p$ has the same ramification index $e$ and residue degree $f$. If there are $g$ such primes, then $efg=[L:K]$.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-galois-action-on-primes-above-a-prime-is-transitive]]: Let L/K be a finite Galois extension of number fields and p a nonzero prime of $\mathcal O_K$. Then $G=\operatorname{Gal}(L/K)$ acts transitively on the primes P above p.

[F2] [[thm-fundamental-identity-for-primes-in-number-fields]]: For finite $L/K$ and nonzero $\mathfrak p\subseteq\mathcal O_K$, $\sum_{\mathfrak P\mid\mathfrak p}e(\mathfrak P/\mathfrak p)f(\mathfrak P/\mathfrak p)=[L:K].$

## Proof

1.1 If $\sigma P=P'$, applying $\sigma$ to the unique factorization of $p\mathcal O_L$ preserves the exponent of P. The induced map $\mathcal O_L/P\to\mathcal O_L/P'$ fixes $\mathcal O_K/p$ and preserves the residue degree. Transitivity therefore makes both e and f constant. [F1]

2.1 The fundamental identity becomes $\sum_{P\mid p}ef=gef=[L:K]$. All three integers are positive; degree one gives e=f=g=1. [F2, step 1.1] ∎
