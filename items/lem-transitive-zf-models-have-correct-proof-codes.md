---
id: lem-transitive-zf-models-have-correct-proof-codes
kind: lemma
title: "Transitive ZF models have standard arithmetic and proof codes"
status: draft
origin: pipeline
deps: [def-countable-transitive-model-and-fragment-transfer, lem-zf-arithmetic-interpretation-and-effective-axioms, lem-primitive-recursive-syntax-and-proof-checking]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — §5.1 pp12–13 (standard versus internal codes); local restricted arithmetic proof, not later general rank absoluteness"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Statement

A transitive set model M of ZF has the real omega and natural arithmetic, and all finite natural-number syntax and proof codes. Every fixed arithmetic predicate on these codes agrees with ambient arithmetic. If M models ZFC, it satisfies the standard Con(ZFC).

## Facts & Assumptions

[F1] [[lem-zf-arithmetic-interpretation-and-effective-axioms]]: ZF and ZFC have effective axiom presentations and an interpretation of PA on the actual internally defined $\omega$, using von Neumann zero/successor and recursively defined addition/multiplication. For their standard presentations the arithmetic proof constructors and translations needed for D1–D3 are verifiable in that interpretation. AC is unnecessary for the PA interpretation; ZFC adds one encoded Choice sentence.

[F2] [[lem-primitive-recursive-syntax-and-proof-checking]]: For the fixed effective signature and sentinel encoding, term/formula recognition, free-variable and free-for tests, capture-free substitution, numeral formation, negation, and certified derivation checking are primitive recursive. Invalid inputs return zero or false.

## Proof

**Given:** A nonempty transitive M satisfying ZF with actual restricted membership, and additionally ZFC for the last clause.

1.1 Let w be the internal omega. The internal empty set is actual zero by transitivity; pairing and union on existing sets have their actual values since all their members are in M. External induction therefore fixes each finite ordinal and puts it in w. Internally w is a nonzero ordinal with no greatest element and every member is zero or a successor. Those assertions transfer externally: all their tests are bounded through w and its elements, and transitivity preserves the quantifier ranges. In ambient Foundation the ordinal order is an actual well-order. If w properly extended omega as an ordinal, it would contain omega as an element, contrary to the zero-or-successor property. Since it contains all finite ordinals, w equals omega. [given, algebra]

2.1 The arithmetic recursion of F1 then agrees on each natural input by external induction: both additions start at a and both successors add one; both multiplications start at zero and add the same a at each successor. Every finite list of natural numbers is present via its natural code, and F2 decodes it using this same arithmetic. Induction on a fixed arithmetic formula transfers atoms and Boolean operations, and transfers quantifiers because both range over the identical omega. Thus every fixed effective proof predicate, and also its Con sentence, is absolute. [F1, F2, step 1.1]

3.1 If $M\models\mathrm{ZFC}$, an actual ZFC-refutation would, by induction on its finitely many lines, be true in M: each axiom line holds by the model assumption, and each logical axiom and rule preserves truth in a nonempty structure. Its last contradictory sentence cannot hold. Therefore no actual refutation exists. The standard proof predicate is correct on those natural codes by step 2.1, so its universal absence assertion Con(ZFC) holds both externally and in M. [step 1.1, step 2.1] ∎

