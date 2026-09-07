---
id: cor-complete-splitting-and-trivial-frobenius
title: "Complete splitting and trivial frobenius"
kind: corollary
status: draft
origin: pipeline
deps: [thm-frobenius-order-is-residue-degree, cor-galois-prime-decomposition-efg]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chapter 8, p.142, paragraph after Proposition 8.14"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
proof_strategy: direct argument
---

## Statement

An unramified nonzero prime p in a finite Galois extension L/K splits completely if and only if its arithmetic Frobenius conjugacy class is the identity class.

## Facts & Assumptions

**Given:** The data and hypotheses of the statement.

[F1] [[thm-frobenius-order-is-residue-degree]]: For finite Galois L/K and nonzero $P\mid p$, the arithmetic Frobenius coset has order $f(P/p)$ in D/I. If P is unramified, $\operatorname{Frob}_P$ has the same order in D.

[F2] [[cor-galois-prime-decomposition-efg]]: For a finite Galois extension L/K and nonzero prime p, every P above p has the same ramification index e and residue degree f. If there are g such primes, then $efg=[L:K]$.

## Proof

1.1 If p splits completely, all residue degrees are one. The Frobenius order is then one, so every Frobenius element is identity. [F1]

2.1 Conversely identity Frobenius has order one, so f=1. Unramifiedness gives e=1, and $efg=[L:K]$ now gives $g=[L:K]$. Thus the factorization has degree-many distinct primes of residue degree one, namely complete splitting. [F1, F2] ∎
