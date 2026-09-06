---
id: thm-c-zero-is-not-complemented-in-ell-infinity
kind: theorem
title: c_0 is not complemented in ell-infinity
status: published
origin: pipeline
deps: [def-c-zero-and-ell-infinity, lem-c-zero-is-a-closed-subspace-of-ell-infinity, lem-quotient-by-c-zero-has-no-countable-separating-family, def-complemented-subspace, thm-complemented-subspace-iff-range-of-a-bounded-projection, def-quotient-seminorm]
proof_strategy: contradiction
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: Piotr Hajlasz, Functional Analysis, Theorem 10.19
      url: https://sites.pitt.edu/~hajlasz/Notatki/Functional%20Analysis2.pdf
---

## Statement

Assuming $\mathrm{AC}_\omega$, the closed subspace $c_0$ is not complemented
in $\ell^\infty$.

## Facts & Assumptions

**Given:** The quotient map $\pi:\ell^\infty\to\ell^\infty/c_0$.

[F1] Under $\mathrm{AC}_\omega$, $(\ell^\infty/c_0)^*$ has no countable separating family ([[lem-quotient-by-c-zero-has-no-countable-separating-family]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose a bounded projection $P:\ell^\infty\to c_0$ exists. For each coordinate $n$, define $\varphi_n(\pi x)=x_n-(Px)_n$. This is well defined because $Pz=z$ for $z\in c_0$, and it is a bounded functional on the quotient. [assume-contra, given, construct]

2.1 If $\varphi_n(\pi x)=0$ for every $n$, then $(I-P)x=0$ coordinatewise, so $x=Px\in c_0$ and $\pi x=0$. Thus $(\varphi_n)$ is a countable separating family. [step 1.1, given]

3.1 This contradicts [F1]. Hence no such projection exists, and $c_0$ is not complemented. [step 2.1, F1, discharge-contradiction] ∎
