---
id: lem-finite-number-field-extensions-bounded-degree-unramified-outside-s
kind: lemma
title: Finitely many bounded-degree extensions unramified outside a fixed set
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 8
deps:
- def-number-field
- def-axiom-of-choice
- def-countable-choice
- thm-faltings-finite-extensions-unramified-outside-bounded-set
- thm-choice-implies-dependent-implies-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: AC and Countable Choice are retained literally; the complete global bounded-extension
  supplier has exactly this branch.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: G. Faltings, G. Wüstholz et al., Rational Points, 2nd ed. (1986), Chapter
      V §2.3, Theorem 2.6, printed pp. 160–161
    url: https://yhzhumath.github.io/Mordell2024/RP.pdf
    locator: 'Theorem 2.6: finiteness of bounded-degree extensions unramified outside
      a fixed finite set; the text reduces it to bounded local discriminant exponents.'
verification: {}
---

## Statement

Assume the Axiom of Choice and Countable Choice. Let $K$ be a number field, let $S$ be a finite set of nonzero prime ideals of its ring of integers, and let $D\ge1$ be an integer. Call a finite extension $E/K$ unramified outside $S$ when, for each finite prime $v\notin S$ and each prime $w$ of $E$ above $v$, the local extension $E_w/K_v$ has ramification index one and separable residue-field extension. There are only finitely many $K$-isomorphism classes of finite extensions $E/K$ with $[E:K]\le D$ that are unramified outside $S$.

## Statement references

[[def-number-field]]

[[thm-finite-unramified-local-extensions-classified-by-residue-extensions]]

[[def-relative-discriminant-ideal-of-a-number-field-extension]]

[Faltings–Wüstholz et al., Theorem 2.6](https://yhzhumath.github.io/Mordell2024/RP.pdf)

## Facts & Assumptions

**Given:** The number field $K$, finite set $S$ and integer $D\ge1$ of the unchanged Statement, with AC and Countable Choice.

[A1] AC and Countable Choice have their usual meanings; AC implies Countable Choice. Only the implication is needed when the Statement assumes AC alone. [[def-axiom-of-choice]] [[def-countable-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] A number field is finite over $\mathbb Q$. [[def-number-field]]

[F2] Under AC and Countable Choice, the complete bounded-extension theorem gives finitely many $K$-isomorphism classes of extensions of degree at most $D$ unramified outside $S$. Its actual proof uses the finite characteristic-zero local discriminant estimate, the proved integral-completion/Gram-index bridge, the discriminant tower identity and the published local Hermite proof. It does not require the separate local-field classification or compactness argument. [[thm-faltings-finite-extensions-unramified-outside-bounded-set]]

## Proof

**Proof technique:** direct.

1.1 The stated axioms give AC and Countable Choice: both are Given when stated, and under AC alone the implication in [A1] supplies the latter. The target's condition at $v\notin S$ is exactly unramifiedness of every completion, namely ramification index one with separable residue extension, as used in [F2]. Thus the base field, finite set and degree bound have exactly the supplier's hypotheses. [A1, F1, given]

2.1 Apply [F2] to $K,S,D$. Its $K$-isomorphism classes are the classes in this Statement, so its finiteness conclusion proves the claim. The degree-one case contributes only $K$ and $S=\varnothing$ is allowed; no other axiom, local classification, or deep Faltings claim is inferred. [F2, step 1.1, given] ∎
