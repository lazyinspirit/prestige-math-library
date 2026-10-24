---
id: ex-np-is-contained-in-pspace-and-pspace-in-exp
kind: example
title: "Lexicographic certificate search uses polynomial space and exponential time"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [prop-np-is-contained-in-pspace-and-pspace-in-exp, def-search-version-of-an-np-relation]
proof_strategy: direct
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  scraped: []
  references:
    - title: "Michael Sipser, MIT 18.404J Theory of Computation, Lecture 17: Space Complexity, PSPACE, Savitch's Theorem"
      url: "https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/9b025394d997750b3cd765c7a074881f_MIT18_404f20_lec17.pdf"
---

## Example

Suppose a language $L$ has a polynomial-time verifier whose certificates have length at most
$n^k$. A deterministic search through those certificates illustrates why the
containment $NP\subseteq PSPACE$ can hold even though the resulting algorithm
may still take exponential time.

## Facts & Assumptions

**Given:** A polynomial-time verifier with certificate length bound $n^k$.

[L1] The verifier search problem asks for a certificate witnessing acceptance, by [[def-search-version-of-an-np-relation]].

[L2] Every language in $NP$ lies in $PSPACE$, and every language in $PSPACE$ lies in $EXP$, by [[prop-np-is-contained-in-pspace-and-pspace-in-exp]].

## Verification

**Proof technique:** direct.

1.1 Enumerate all binary certificates of lengths at most $n^k$ in lexicographic order and run the verifier on each until one succeeds. At every stage the algorithm stores only the input, the current certificate, and the verifier workspace. The verifier's polynomial time bound also bounds its visited workspace polynomially, so the total space usage is polynomial. This is the concrete mechanism behind the first inclusion in [L2]. [L1, L2, given, construct]

2.1 There are fewer than $2^{n^k+1}$ candidate certificates, and the same procedure may test exponentially many of them before success or exhaustion. Its running time can therefore be exponential even while its space stays polynomial. That is exactly the gap displayed by the chain in [L2]. [L2, step 1.1] ∎
