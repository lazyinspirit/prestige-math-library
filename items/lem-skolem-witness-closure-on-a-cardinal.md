---
id: lem-skolem-witness-closure-on-a-cardinal
kind: lemma
title: "Skolem witness closure on a cardinal"
status: published
origin: pipeline
deps: ["thm-hessenberg", "thm-recursion", "def-set-signature-and-finite-syntax-strings", "thm-structural-recursion-on-set-coded-syntax", "def-set-structures-and-variable-assignments", "thm-set-structure-satisfaction-recursion"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct argument
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Kamensky, Theorem 1.4.7 proof, p.7, expanded Skolem witness argument; Example 3.1.2, p.17"
      url: https://mkamensky.github.io/teaching/2012f/set-theory/notes.pdf
---

## Statement

Work in ZFC. Let $\kappa$ be regular uncountable and $M$ a structure with universe $\kappa$ in a finitary first-order language $L$ of size less than $\kappa$. There is a family $\mathcal H$ of fewer than $\kappa$ functions of finite arity on $\kappa$ such that every nonzero $\alpha<\kappa$ closed under $\mathcal H$ is an elementary substructure of $M$ with the restricted interpretations.

Language, syntax, structure, term evaluation, and satisfaction have the meanings
constructed in [[def-set-signature-and-finite-syntax-strings]],
[[def-set-structures-and-variable-assignments]], and
[[thm-set-structure-satisfaction-recursion]]. An elementary substructure is a
substructure for which every formula with parameters from its universe has the
same truth value in the substructure and in the larger structure.

## Facts & Assumptions

[F1] [[thm-hessenberg]]: The square of an infinite well-ordered cardinal has that same cardinality.

[F2] [[thm-structural-recursion-on-set-coded-syntax]]: Recursive definitions and
induction are valid on the locally coded term and formula sets.

[F3] [[thm-set-structure-satisfaction-recursion]]: Satisfaction for a set-sized
structure exists as a set and obeys the usual atomic, Boolean, and existential
clauses.

[F4] [[thm-recursion]]: Finite closure stages can be iterated on the natural numbers.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Include in $\mathcal H$ every language function and constant, and the constant zero. For each formula $\exists x\,\varphi(x,\vec y)$ with a specified finite list containing its other free variables, include $h_\varphi(\vec a)$ equal to the least ordinal witness in $M$ if one exists, and zero otherwise. The local structural recursion and satisfaction theorem make each displayed witness selector a set function. [F2, F3]

2.1 Put $\mu=\max(\omega,|L|)<\kappa$. Finite strings over the alphabet of symbols, countably many variables and punctuation number at most $\mu$: induction from $\mu^2=\mu$ bounds each finite length, and recursion collects all finite lengths; the countable disjoint union has size at most $\omega\times\mu\le\mu^2=\mu$. Thus the formula/list pairs and the functions just included form a family of size at most $\mu$. Ambient AC suffices for these cardinal identifications. [F1, F4, step 1.1]

2.2 Let nonzero alpha be closed under this family. Closure under language functions and constants makes it a substructure. Terms evaluated on parameters below alpha agree in both structures, by induction on terms. Equality and relation atoms therefore agree; induction on formulas preserves agreement under negation and conjunction. If M satisfies $\exists x\,\varphi(x,\vec a)$, its selected witness is below alpha, and the induction hypothesis for $\varphi$ proves truth in the restriction. Conversely a witness below alpha transfers to M by the same induction hypothesis. Thus every formula agrees. [step 1.1]

3.1 The same induction proves the general witness criterion used below: any nonempty substructure in which every existential formula true in M with parameters in the substructure has some witness there is elementary. Conversely an elementary substructure has that witness property by the semantics of existential quantification. [step 2.2] ∎
