---
id: lem-prenex-normalization-preserves-level
kind: lemma
title: "Prenex normalization preserves the arithmetical level"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-arithmetic-formula, def-sigma-n-pi-n-and-delta-n-sets, lem-bounded-quantifiers-preserve-primitive-recursiveness]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, §5.1"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

Negating a $\Sigma_n^0$ formula produces a $\Pi_n^0$ formula, and finite
conjunctions and disjunctions of formulas in one of these classes can be put
in prenex form in that same class (after harmless repeated-quantifier
padding). Thus negation interchanges the two classes, while positive Boolean
combinations preserve either class.

## Facts & Assumptions

**Given:** finitely many $\Sigma_n^0$ formulas, or finitely many $\Pi_n^0$
formulas.

## Proof

**Proof technique:** direct.

1.1 Push negations through the displayed prefix. Each $\exists$ changes to $\forall$ and conversely; the negated primitive-recursive matrix is again primitive recursive. [given, algebra]

2.1 Rename bound variables and merge equal-polarity blocks. Conjunction and disjunction distribute through adjacent like quantifiers, and shorter prefixes are padded by vacuous like-polarity quantifiers. Thus the leading polarity and at most $n$ alternations are retained. [step 1.1, algebra] ∎
