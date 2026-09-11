---
id: "thm-lc-infinitary-los"
kind: "theorem"
title: "Infinitary Los theorem"
deps: ["def-lc-infinitary-syntax-and-compactness", "thm-lc-los-for-set-ultraproducts", "def-lc-complete-ultrafilters-and-measurable-cardinals", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Theorem 20.1 pp.427–431, extended explicitly to <kappa quantifier
        blocks
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC let kappa be regular uncountable and U a kappa-complete proper ultrafilter on I. For nonempty set structures M_i in a fixed finite-arity signature, their set ultraproduct satisfies Łoś's equivalence for every $L_{\kappa,\kappa}$ formula, with parameter tuples of any length less than kappa. In particular the truth value is independent of representatives.

## Facts & Assumptions

**Given:** ZFC. Extended formula induction by kappa-complete Boolean operations and proved both block-quantifier directions using AC only on sets, including representative invariance for long parameter tuples.

[F1] [[def-lc-infinitary-syntax-and-compactness]]: Infinitary truth is well-founded recursion on set syntax trees, with set tuple quantifiers.

[F2] [[thm-lc-los-for-set-ultraproducts]]: Atomic and finite Boolean Łoś clauses hold in the set quotient.

[F3] [[def-lc-complete-ultrafilters-and-measurable-cardinals]]: Kappa-completeness closes intersections indexed by ordinals below kappa.

[F4] [[def-axiom-of-choice]]: AC selects coordinate witness tuples, default elements and representatives for a witnessing tuple of quotient elements.

## Proof

1.1 Induct on the well-founded syntax tree in F1. The atomic cases are F2, and negation uses the ultrafilter decision between a set and its complement. For fewer than kappa component truth sets A_xi, their intersection belongs to U if all A_xi do, by F3; the converse follows by upward closure. Their union belongs to U if some A_xi does; if none does, F3 puts the intersection of their complements in U, excluding the union. These are precisely the conjunction and disjunction clauses, including empty operations. [F1, F2, F3]

2.1 Consider an existential block of eta<kappa variables. If its coordinate truth set A belongs to U, then for each i in A the witnessing tuples form a nonempty subset of the set $M_i^\eta$. By F4 choose one tuple at each such coordinate, and choose a default element of M_i outside A. Extend with the constant default tuple there. Each of the eta columns is a product representative; their matrix truth set contains A. The induction hypothesis gives a true matrix in the quotient, hence a quotient witness tuple. Conversely a witnessing quotient tuple has eta entries; F4 chooses product representatives for these entries from their nonempty set equivalence classes. The matrix induction hypothesis gives a U-large coordinate matrix truth set, contained in the coordinate existential set. Thus the latter is U-large. Eta=0 reduces exactly to the matrix, with the unique empty tuple. Universal blocks follow by negating an existential block of the negated matrix. [F1, F3, F4, step 1.1]

3.1 Finally replace any tuple of fewer than kappa parameter representatives by equivalent ones. Intersect their coordinate equality sets using F3. On this U-large intersection all parameter values agree, so set satisfaction of the fixed formula has the same truth value for both tuples. Intersecting a U-large truth set with this agreement set and using upward closure proves that either truth set belongs to U exactly when the other does. The induction already proved quotient truth equivalent to coordinate truth-set membership, so this also verifies the asserted representative invariance for infinitary parameters. [F1, F3, step 2.1] ∎
