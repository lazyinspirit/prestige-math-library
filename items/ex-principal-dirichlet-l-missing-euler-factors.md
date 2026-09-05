---
id: ex-principal-dirichlet-l-missing-euler-factors
kind: example
title: "Missing Euler factors for a principal Dirichlet L-function"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-principal-dirichlet-l-factorization]
justified_by: []
proof_strategy: direct
sources:
  references:
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Theorem 3.5"
      url: "https://kskedlaya.org/ant/chap-lfunc.html"
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
---

## Example

For small moduli, the principal Dirichlet $L$-function is obtained from zeta by
removing exactly the Euler factors at the primes dividing the modulus.

## Facts & Assumptions

**Given:** The principal factorization theorem
([[thm-principal-dirichlet-l-factorization]]).

## Verification

**Proof technique:** direct.

1.1 For $q=4$, the theorem gives $L(s,\chi_0)=\zeta(s)(1-2^{-s})$. For $q=6$, it gives $L(s,\chi_0)=\zeta(s)(1-2^{-s})(1-3^{-s})$. In each case the omitted Euler factors are exactly those at the bad primes dividing the modulus. [given, algebra]

2.1 Evaluating the finite factor at $s=1$ gives the residues $1-1/2=1/2=\varphi(4)/4$ and $(1-1/2)(1-1/3)=1/3=\varphi(6)/6$, matching the general residue formula. [step 1.1, given, algebra] ∎
