---
id: ex-square-roots-modulo-an-odd-prime-power
kind: example
title: "Lifting both square roots of $2$ from modulo $7$ to modulo $7^4$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-nonsingular-square-root-lift-modulo-odd-prime-powers,
       thm-unit-square-criterion-modulo-odd-prime-powers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The two roots of $2$ lift along the powers of $7$ as follows:

| modulus | first branch | second branch |
|---:|---:|---:|
| $7$ | $3$ | $4$ |
| $49$ | $10$ | $39$ |
| $343$ | $108$ | $235$ |
| $2401$ | $2166$ | $235$ |

Thus the square roots of $2$ modulo $7^4=2401$ are the classes of $235$ and $2166$.

## Facts & Assumptions

**Given:** The target $a=2$, the odd prime $p=7$, and the two roots $3,4$ modulo $7$.

[L1] A nonsingular root modulo $p^k$ has a unique lift of the form $x_k+tp^k$ modulo $p^{k+1}$, with $t$ uniquely determined modulo $p$ ([[lem-nonsingular-square-root-lift-modulo-odd-prime-powers]]).

[L2] A soluble unit square congruence modulo an odd prime power has exactly two solution classes ([[thm-unit-square-criterion-modulo-odd-prime-powers]]).

## Verification

**Proof technique:** direct.

1.1 Direct squaring gives the roots $3,4$ modulo $7$. Solving the correction congruence of [L1] on each branch gives corrections $(1,5)$ modulo $7$ for the lift to $49$, then $(2,4)$ for the lift to $343$, and finally $(6,0)$ for the lift to $2401$; these yield the two displayed chains $3\mapsto10\mapsto108\mapsto2166$ and $4\mapsto39\mapsto235\mapsto235$. [L1, given, algebra]

2.1 One has $235^2=23\cdot2401+2$ and $2166^2=1954\cdot2401+2$, so both final classes are roots. They are distinct, and [L2] says a soluble unit congruence has exactly two roots, so the list is complete. [step 1.1, L2, algebra] ∎
