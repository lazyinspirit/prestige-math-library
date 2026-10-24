---
id: "thm-constructible-universe-satisfies-choice"
kind: "theorem"
title: "The constructible universe satisfies AC"
deps: ["thm-canonical-definable-global-well-order-of-l", "thm-constructible-universe-basic-axioms", "thm-replacement-in-the-constructible-universe", "thm-separation-in-the-constructible-universe", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Theorem 5.9 pp17–18; Marks Theorem 20.9 p88
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

ZF proves the Axiom of Choice relativized to $L$. Ambient Choice is not assumed: the dependency on [[def-axiom-of-choice]] specifies the conclusion, not an additional axiom of this proof.

## Facts & Assumptions

**Given:** ZF only. The canonical order is internally definable; its unique minima produce a choice graph by already proved internal Replacement. AC is a conclusion dependency only.

[F1] [[thm-canonical-definable-global-well-order-of-l]]: L has an internally definable canonical well-order.

[F2] [[thm-replacement-in-the-constructible-universe]]: Replacement is available inside L for the least-element function.

[F3] [[thm-separation-in-the-constructible-universe]]: Separation inside L can restrict the internally definable order to a set.

[F4] [[thm-constructible-universe-basic-axioms]]: Pairing holds inside L.

[F5] [[def-axiom-of-choice]]: The required conclusion is that each set family of nonempty sets has a choice function.

## Proof

1.1 Let $a\in L$ be internally a family of nonempty sets. Transitivity makes every $b\in a$ an actual nonempty subset of L. Inside L, separate the restriction of its canonical order to b; this is a well-order by F1, so b has a unique least element $m(b)\in b$. The rule specifying m is one fixed internal formula, with no chosen ordering parameter. [F1, F3, given]

2.1 Internal Replacement applied to $b\mapsto\langle b,m(b)\rangle$ produces a graph $g\in L$ with domain a, since internal Pairing in F4 constructs the ordered pairs. The uniqueness in step 1.1 makes g a function and $g(b)\in b$ for each $b\in a$. If a is empty this graph is empty. Thus g is the choice function required by F5. AC was proved internally; it was not invoked to choose the least elements. [F2, F4, F5, step 1.1] ∎
