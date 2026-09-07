---
id: lem-sum-check-perfect-completeness
kind: lemma
title: "Perfect completeness of sum-check"
status: draft
origin: pipeline
deps: [def-sum-check-instance-and-protocol]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct calculation
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Justin Thaler, Proofs, Arguments, and Zero-Knowledge (2023), Proposition 4.1, p.36"
      url: "https://people.cs.georgetown.edu/jthaler/ProofsArgsAndZK.pdf"
---

## Statement

In sum-check over a supplied finite field, with $n\geq1$, trusted individual bounds and trusted evaluation, if $H=\sum_b g(b)$, the honest partial-sum polynomials pass every check for every challenge sequence. Thus the protocol has perfect completeness.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement above.

[F1] The protocol checks coefficient lengths and consistency, samples after each message, and compares the final claim with trusted evaluation; q_i and S_i denote its true partial sums ([[def-sum-check-instance-and-protocol]]).

## Proof

1.1 Use $q_i,S_i,C_i$ from the protocol. Substitution and finite summation cannot raise the degree in the unspecialized variable, so $q_i$ has degree at most $d_i$ and can be sent in the permitted coefficient format, including when $q_i=0$ or $d_i=0$. [F1, algebra]

2.1 Splitting the remaining cube by coordinate $i$ gives $q_i(0)+q_i(1)=S_{i-1}$, while substitution gives $q_i(r_i)=S_i$. Initially $C_0=H=S_0$. If $C_{i-1}=S_{i-1}$ and $h_i=q_i$, the consistency check passes and the update gives $C_i=S_i$. Hence this equality propagates through every round. [F1, step 1.1, given, algebra]

3.1 At the end $S_n=g(r_1,\ldots,r_n)$, since the remaining cube contains the empty tuple. Thus the terminal check passes. For $n=1$ the same argument uses $q_1=g$. It also covers all-zero or constant polynomials, challenges $0$ or $1$, and characteristic two without any division. [step 2.1, algebra] ∎
