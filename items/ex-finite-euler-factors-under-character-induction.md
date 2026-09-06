---
id: ex-finite-euler-factors-under-character-induction
kind: example
title: "Finite Euler factor from modulus 4 to 12"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-induced-dirichlet-l-finite-euler-factors]
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Andersen, equation (16.2)"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Example

If $\chi$ modulo $12$ is induced from $\chi_4$, then for $\operatorname{Re}s>1$,
$$L(s,\chi)=L(s,\chi_4)(1+3^{-s}),$$
because $\chi_4(3)=-1$.

## Facts & Assumptions

**Given:** The finite-factor formula ([[thm-induced-dirichlet-l-finite-euler-factors]]).

## Verification

**Proof technique:** direct.

1.1 The primes dividing $12$ but not $4$ consist only of $3$. [given]

2.1 Substitute $p=3$ and $\chi_4(3)=-1$ in the given formula. [step 1.1, given, algebra] ∎
