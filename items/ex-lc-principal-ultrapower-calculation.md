---
id: "ex-lc-principal-ultrapower-calculation"
kind: "example"
title: "A principal ultrapower is the original structure"
deps: ["def-lc-set-ultraproduct"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Marks Definitions 13.1 and 13.4 pp.56–57
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

In ZF, let I contain i_0, let $U=\{A\subseteq I:i_0\in A\}$, and let M be a nonempty set structure. The constant-family quotient is well-defined without AC, and

$$[f]_U\longmapsto f(i_0)$$

is an isomorphism from its ultrapower to M, sending $[c_a]_U$ to a.

## Facts & Assumptions

**Given:** ZF, conditional on the displayed data. Computed equality, every symbol and relation at the principal coordinate, with constant functions proving surjectivity and product nonemptiness without AC.

[F1] [[def-lc-set-ultraproduct]]: Use the stated quotient and coordinate-symbol formulas; their well-definedness and nonemptiness in this constant principal case are proved here in ZF.

## Verification

1.1 In the displayed U, a coordinate equality set belongs to U exactly when f(i_0)=g(i_0). This proves directly that the quotient equivalence is equality at i_0 and evaluation is well-defined and injective. Every a in M has the explicitly defined constant function c_a in the product, so evaluation is surjective and sends [c_a] to a. Nonemptiness of M therefore gives a nonempty product and quotient, without any family of choices. [F1]

2.1 A constant symbol evaluates at i_0 to its original interpretation. For a function symbol F and representatives f_1,...,f_n, evaluation of its interpreted class is exactly $F^M(f_1(i_0),\ldots,f_n(i_0))$. This also shows independence of representatives in that interpreted symbol. A relation holds in the quotient exactly when its coordinate truth set contains i_0, that is, when it holds on the evaluated tuple in M. Thus evaluation preserves functions and preserves and reflects relations, including equality by step 1.1; it is an isomorphism. Zero-arity symbols give the same calculation with the empty tuple. This local verification uses the formulas of F1, not the choice-dependent general Los theorem. [F1, step 1.1] ∎
