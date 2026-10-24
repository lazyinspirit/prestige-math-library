---
id: thm-twisted-poisson-summation
kind: theorem
title: "Twisted Poisson summation"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-primitive-gauss-sum-twist, thm-dirac-comb-is-fourier-invariant]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Nickolas Andersen, Analytic Number Theory, Theorem 16.6"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement

For primitive $\chi$ modulo $q$ and Schwartz $f$,
$$\sum_{n\in\mathbb Z}\chi(n)f(n)=\frac{\tau(\chi)}q\sum_{m\in\mathbb Z}\overline{\chi(m)}\widehat f(m/q).$$

## Facts & Assumptions

**Given:** A primitive character $\chi$ modulo $q$ and a Schwartz function $f$.

[F1] Poisson summation holds for Schwartz functions ([[thm-dirac-comb-is-fourier-invariant]]).

[F2] The primitive additive twist is $\overline{\chi(m)}\tau(\chi)$ ([[lem-primitive-gauss-sum-twist]]).

## Proof

**Proof technique:** direct.

1.1 Decompose the left side by $n\equiv a\pmod q$ and apply [F1] to each translated, $q$-scaled Schwartz function. [F1, given]

2.1 The finite coefficient of $\widehat f(m/q)/q$ is $\sum_{a\bmod q}\chi(a)e(am/q)$, which is [F2]. Substitution gives the formula. [F2, step 1.1, algebra] ∎
