---
id: cor-holomorphic-function-ring-integral-domain
kind: corollary
title: "The ring of holomorphic functions on a complex domain is an integral domain"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-identity-theorem-holomorphic-functions, thm-algebra-of-complex-derivatives, def-ring-of-functions, def-subring, def-zero-divisor-and-integral-domain, thm-complex-numbers-form-a-field, def-complex-domain]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Exercise 2.4.13(a)"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

The holomorphic functions on a complex domain form an integral domain under pointwise addition and multiplication.

More explicitly, for a complex domain $\Omega$, the set $H(\Omega)$ of holomorphic functions $\Omega\to\mathbb C$ is a commutative subring of the function ring $\mathbb C^\Omega$ ([[def-ring-of-functions]], [[def-subring]]), its constant zero and one functions are distinct, and $fg=0$ implies $f=0$ or $g=0$ ([[def-zero-divisor-and-integral-domain]]).

## Facts & Assumptions

**Given:** A complex domain $\Omega$ ([[def-complex-domain]]); the field $\mathbb C$ ([[thm-complex-numbers-form-a-field]]); and the facts from [[thm-algebra-of-complex-derivatives]] that constants, sums, differences, and products of holomorphic functions are holomorphic, and that a holomorphic function nonzero at a point remains nonzero on some neighbourhood of that point.

[L1] If two holomorphic functions on a complex domain agree on a set with an accumulation point in the domain, then they agree everywhere on the domain ([[thm-identity-theorem-holomorphic-functions]]).

[L2] In a function ring the operations are pointwise, and its distinguished zero and one are the corresponding constant functions ([[def-ring-of-functions]]).

[L3] An integral domain is a commutative ring with distinct zero and one and with no zero divisors ([[def-zero-divisor-and-integral-domain]]).

## Proof

**Proof technique:** direct.

1.1 By the holomorphic algebra laws in the given facts, $H(\Omega)$ contains the constant functions and is closed under pointwise addition, subtraction, and multiplication; [L2] and the field laws therefore make it a commutative subring of $\mathbb C^\Omega$. [L2, given]

1.2 Since $\Omega$ is nonempty and $0\ne1$ in $\mathbb C$, the constant zero and one functions take different values at any point of $\Omega$ and are distinct. [given, algebra]

1.3 Suppose $fg$ is the zero function and $f$ is not the zero function. Choose $a\in\Omega$ with $f(a)\ne0$. The given holomorphic algebra fact makes $f$ nonzero on a neighbourhood of $a$, so $g$ vanishes there; [L1] then makes $g$ the zero function on $\Omega$. Thus a zero product has a zero factor. [L1, given, choose]

2.1 Steps 1.1, 1.2, and 1.3 verify all clauses of [L3], so $H(\Omega)$ is an integral domain. [step 1.1, step 1.2, step 1.3, L3] ∎
