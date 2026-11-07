---
id: lem-global-idele-class-module-invariants-at-finite-level
kind: lemma
title: Invariants of the direct-limit idele-class module at a finite field equal the finite-level
  idele classes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
- def-global-idele-class-module-for-galois-group
- def-absolute-galois-group-of-a-global-field
- lem-global-function-field-idele-class-galois-descent
- lem-function-field-discrete-idele-cohomology-and-local-invariants
- def-axiom-of-choice
- def-countable-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
axiom_use: The original Statement choice assumptions are retained. AC implies DC and Countable
  Choice when an invoked supplier states them; ordinary/complete-resolution data are used exactly
  in the untensored Tate–Nakayama application.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, Appendix A.7
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
  - title: 'Romyar Yoon, Global Function Field Class Field Theory: A Neukirch Approach, §3.2'
    url: https://arxiv.org/pdf/1610.07486
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC.

Let $F$ be a global function field, fix a separable closure $F_s$, let
$L/F$ be finite Galois, and put $U=\operatorname{Gal}(F_s/L)$. Let
$C_F^{\mathrm{disc}}=\varinjlim_{E/F\subset F_s}C_E$ be the direct-limit
idele-class module formed using extension-of-ideles maps. The natural map
$C_L\to C_F^{\mathrm{disc}}$ identifies $C_L$ with the invariant subgroup
$(C_F^{\mathrm{disc}})^U$.

## Statement references

[[def-global-idele-class-module-for-galois-group]]

[[def-absolute-galois-group-of-a-global-field]]

[[lem-global-function-field-idele-class-galois-descent]]

[Milne, *Arithmetic Duality Theorems*, Appendix A.7](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Yoon, *Global Function Field Class Field Theory: A Neukirch Approach*, §3.2](https://arxiv.org/pdf/1610.07486)

## Facts & Assumptions

**Given:** Exactly the closure, finite Galois field, direct-limit module and choices in the Statement.

[F1] The actual module has injective class stage maps and $C^{G_E}=C_E$ for every finite intermediate $E$, with its extension-of-idèles map. The proof uses onto absolute restriction to the finite quotient, not an inclusion of that quotient in the absolute group.
[[lem-function-field-discrete-idele-cohomology-and-local-invariants]]

[A1] AC, Countable Choice and DC are literal assumptions.
[[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** the already established fixed-module identification.

**Given:** The stated data.

1.1 The hypotheses [A1] supply the same direct-limit system and finite field $L$ occurring in [F1]. Put $E=L$ there. [A1, given, construct]

2.1 Apply [F1] at that intermediate field. It gives $C^{G_L}=C_L$, with injective natural map from $C_L$ and the same transition system as in the Statement. Since $U=G_L$, this is exactly the asserted identification. In particular no finite quotient is incorrectly declared to lie in $U$. [F1, step 1.1, algebra] ∎
