---
id: lem-skolem-witness-closure-on-a-cardinal
kind: lemma
title: "Skolem witness closure on a cardinal"
status: draft
origin: pipeline
deps: ["thm-hessenberg", "thm-recursion"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct argument
verification:
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

Here a language has relation and function symbols of assigned finite arities (constants are arity zero). Terms are finite expressions made from variables and function symbols; formulas are finite expressions built from equality and relation atoms using negation, conjunction and existential quantification. Other connectives and universal quantifiers are abbreviations. A structure interprets each symbol on its universe. Terms are evaluated recursively; atoms test the resulting equality or relation, negation and conjunction have their usual truth conditions, and $\exists x\,\varphi$ is true iff some universe element makes $\varphi$ true. An elementary substructure is a substructure for which all formulas with parameters from its universe agree with the larger structure.

## Facts & Assumptions

[F1] [[thm-hessenberg]]: The square of an infinite well-ordered cardinal has that same cardinality.

[F2] [[thm-recursion]]: Finite recursive evaluation can be iterated on the natural numbers.

## Proof

**Given:** The objects and hypotheses in the statement.

1.1 Include in $\mathcal H$ every language function and constant, and the constant zero. For each formula $\exists x\,\varphi(x,\vec y)$ with a specified finite list containing its other free variables, include $h_\varphi(\vec a)$ equal to the least ordinal witness in M if one exists, and zero otherwise. Term evaluation and satisfaction are defined by induction on finite expression depth; at each depth the previous evaluations determine the next, and recursion on the finite-depth levels yields the indicated set functions. [F2]

2.1 Put $\mu=\max(\omega,|L|)<\kappa$. Finite strings over the alphabet of symbols, countably many variables and punctuation number at most $\mu$: induction from $\mu^2=\mu$ bounds each finite length, and the countable disjoint union has size at most $\omega\times\mu\le\mu^2=\mu$. Thus the formula/list pairs and the functions just included form a family of size at most mu. Ambient AC suffices for these cardinal identifications. [F1, step 1.1]

2.2 Let nonzero alpha be closed under this family. Closure under language functions and constants makes it a substructure. Terms evaluated on parameters below alpha agree in both structures, by induction on terms. Equality and relation atoms therefore agree; induction on formulas preserves agreement under negation and conjunction. If M satisfies $\exists x\,\varphi(x,\vec a)$, its selected witness is below alpha, and the induction hypothesis for $\varphi$ proves truth in the restriction. Conversely a witness below alpha transfers to M by the same induction hypothesis. Thus every formula agrees. [step 1.1]

3.1 The same induction proves the general witness criterion used below: any nonempty substructure in which every existential formula true in M with parameters in the substructure has some witness there is elementary. Conversely an elementary substructure has that witness property by the semantics of existential quantification. [step 2.2] ∎
