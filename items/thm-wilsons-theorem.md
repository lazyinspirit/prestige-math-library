---
id: thm-wilsons-theorem
kind: theorem
title: "Wilson's theorem: for every prime $p$, $(p-1)!\\equiv-1\\pmod p$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-wilson-inverse-pairing, thm-z-mod-p-is-a-field, def-factorial-and-falling-factorial, def-monoid-finite-product, thm-generalised-associativity, def-addition-and-multiplication-modulo-n, def-integers-modulo-n, def-congruence-modulo-an-integer, thm-standard-representatives-modulo-n, thm-integers-modulo-n-basic-algebra]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Wilson's Theorem"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/03%3A_Primes_Numbers/3.02%3A_Wilson%27s_Theorem"
pipeline_run: null
---

## Statement

For every prime $p$,

$$(p-1)!\equiv-1\pmod p.$$

## Facts & Assumptions

**Given:** A prime $p$.

[L1] The unit classes modulo $p$ other than $[1]_p$ and $[-1]_p$ occur in disjoint inverse pairs, while those displayed classes are the only self-inverse ones; at $p=2$ they coincide ([[lem-wilson-inverse-pairing]]).

[L2] The nonzero standard representatives modulo $p$ are $1,\ldots,p-1$, and their product is $(p-1)!$ ([[thm-standard-representatives-modulo-n]], [[def-factorial-and-falling-factorial]]).

[L3] A finite product in a commutative monoid may be regrouped and reordered, and each inverse pair has product $1$ ([[def-monoid-finite-product]], [[thm-generalised-associativity]], [[thm-integers-modulo-n-basic-algebra]]).

[L4] Equality of residue classes modulo $p$ is equivalent to congruence modulo $p$ ([[def-integers-modulo-n]]), and congruence means divisibility of the difference ([[def-congruence-modulo-an-integer]]).

[L5] The quotient $\mathbb Z/p$ is a field, so every nonzero class is a unit ([[thm-z-mod-p-is-a-field]]).

[F1] Products of residue classes are computed by multiplying representatives: $[a]_p[b]_p=[ab]_p$ ([[def-addition-and-multiplication-modulo-n]]).

## Proof

**Proof technique:** direct.

1.1 By [L5], the nonzero classes are exactly the unit classes. Multiply them all and regroup by [L1]: every two-element inverse pair contributes $[1]_p$. If the two displayed self-inverse classes are distinct, their contribution is $[1]_p[-1]_p=[-1]_p$; if they coincide, their single common contribution is itself $[-1]_p$. Thus in every case the product of all nonzero classes is $[-1]_p$. [L1, L3, L5]

2.1 By [L2] and [F1], that same class product is $[(p-1)!]_p$. Therefore $[(p-1)!]_p=[-1]_p$, which is exactly $(p-1)!\equiv-1\pmod p$ by [L4]. [step 1.1, L2, L4, F1] ∎
