---
id: lem-global-function-field-idele-class-galois-descent
kind: lemma
title: Galois invariants of an idele class group descend to the base field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
- def-idele-group-of-a-global-field
- def-idele-class-group-of-a-global-field
- thm-global-field-completion-tensor-product-decomposition
- thm-hilbert-90-for-finite-galois-extension
- lem-function-field-discrete-idele-cohomology-and-local-invariants
- def-axiom-of-choice
- def-countable-choice
- thm-choice-implies-dependent-implies-countable-choice
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
  - title: 'Romyar Yoon, Global Function Field Class Field Theory: A Neukirch Approach, §3.2'
    url: https://arxiv.org/pdf/1610.07486
  - title: J. S. Milne, Arithmetic Duality Theorems, Appendix A.7
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
verification: {}
---

## Statement

Assume AC and Countable Choice.

Let $L/F$ be a finite Galois extension of global function fields, with group
$G$. The natural map from the idele class group $C_F$ to the invariant
subgroup $C_L^G$ is an isomorphism.

## Statement references

[[def-idele-group-of-a-global-field]]

[[def-idele-class-group-of-a-global-field]]

[[thm-global-field-completion-tensor-product-decomposition]]

[[thm-hilbert-90-for-finite-galois-extension]]

[Yoon, *Global Function Field Class Field Theory: A Neukirch Approach*, §3.2](https://arxiv.org/pdf/1610.07486)

## Facts & Assumptions

**Given:** The original finite Galois $L/F$, group $G$, AC and Countable Choice.

[F1] Actual finite idelic descent, with the natural extension map, gives $C_E=C_T^{\operatorname{Gal}(T/E)}$ for finite Galois function-field extensions in a separable closure. Its proof establishes the fixed idèle algebra by tensor completion, stage injectivity and the explicit Hilbert90 cocycle.
[[lem-function-field-discrete-idele-cohomology-and-local-invariants]]

[A1] AC implies DC, and supplies a separable closure embedding of this finite extension. The original Countable Choice remains assumed.
[[def-axiom-of-choice]] [[def-countable-choice]]
[[thm-choice-implies-dependent-implies-countable-choice]]

## Proof

**Proof technique:** apply the actual finite descent calculation, with precisely the natural map.

**Given:** The data above.

1.1 AC supplies a separable closure of $F$ containing $L$; it also supplies the DC used in [F1]. A global function field has finite exact constants, as required there. [A1, given, construct]

2.1 Apply [F1] with $E=F$ and $T=L$. Its finite descent assertion gives the natural isomorphism $C_F\to C_L^G$. This proves the full original Statement. No topology or norm reciprocity is substituted for that finite calculation. [F1, step 1.1, algebra] ∎
