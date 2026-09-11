---
id: "lem-lc-ultraproduct-quotient-well-defined"
kind: "lemma"
title: "The ultraproduct is a well-defined nonempty structure"
deps: ["def-lc-set-ultraproduct", "thm-ultrafilter-characterisation", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Marks Definition 13.1, well-definedness paragraph p.56
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC the set ultraproduct has a nonempty set carrier; its equivalence relation, function and relation symbols are well-defined, independent of representatives. In a constant family the diagonal map is well-defined and injective.

## Facts & Assumptions

**Given:** ZFC. Proved equivalence, set quotient and nonemptiness, then used a finite U-large equality intersection to verify each interpreted symbol and both directions of relation independence.

[F1] [[def-lc-set-ultraproduct]]: The carrier, equivalence relation and symbol interpretations are prescribed coordinatewise.

[F2] [[thm-ultrafilter-characterisation]]: U is proper, closed under finite intersections and upward inclusion, and decides complementary sets.

[F3] [[def-axiom-of-choice]]: AC supplies a product function from the nonempty carriers.

## Proof

1.1 Equality sets show reflexivity because I is in U, symmetry directly, and transitivity because the intersection of the f=g and g=h sets is contained in the f=h set. The product is a set and is nonempty by F3; its equivalence classes and their quotient form sets by Separation and Replacement. [F1, F2, F3]

2.1 If each f_j is replaced by an equivalent g_j, intersect their finitely many equality sets to get E in U. On E, all function values and relation truth values agree. The function outputs are therefore equivalent by upward closure. For any two truth sets A,B agreeing on E, A in U implies $A\cap E\subseteq B$ and hence B in U; the converse is symmetric. Thus relations are independent as well. Empty arity gives E=I. Constant-symbol functions are uniquely specified. For the diagonal map, equality of [c_a] and [c_b] is equivalent to I in U when a=b and empty in U when a differs from b, proving injectivity. [F1, F2, step 1.1] ∎
