---
id: thm-tarski-vaught-set-structure-test
kind: theorem
title: "Tarski–Vaught witness test"
status: published
origin: pipeline
deps: [def-elementary-set-structure-embedding, thm-set-structure-satisfaction-recursion, thm-structural-recursion-on-set-coded-syntax, def-term-denotation-in-a-set-structure, lem-satisfaction-coincidence]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
sources:
  references:
    - title: "Weiss–D’Mello, Fundamentals of Model Theory, Lemma 5 and complete proof, printed p.19."
      url: https://www.math.toronto.edu/weiss/model_theory.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

Let $\mathcal A\subseteq\mathcal M$ be a nonempty $L$-substructure. Then $\mathcal A\prec\mathcal M$ iff the following witness condition holds: whenever $\bar a$ is a tuple from $A$ assigning all free variables of $\exists x\psi$, and $\mathcal M\models\exists x\psi[\bar a]$, there exists $b\in A$ with $\mathcal M\models\psi[\bar a,x:=b]$.

## Facts & Assumptions

**Given:** Work in ZF with the substructure in the statement. Tuples may be empty or have repeated entries.

[F1] Elementarity means preservation and reflection of every formula; a substructure restricts relations and functions and contains constants. ([[def-elementary-set-structure-embedding]])

[F2] Satisfaction uses literal equality, interpreted relations, Boolean truth operations, and an existential witness in the carrier with the assignment updated at the bound variable. ([[thm-set-structure-satisfaction-recursion]])

[F3] Constructor induction applies to terms and formulas. ([[thm-structural-recursion-on-set-coded-syntax]])

[F4] Term values are obtained from variable values, constant interpretations and interpreted functions. ([[def-term-denotation-in-a-set-structure]])

[F5] Only free variables affect truth or term value, so finite tuples can be extended by one fixed carrier element. ([[lem-satisfaction-coincidence]])

## Proof

1.1 Suppose $\mathcal A\prec\mathcal M$ and $\mathcal M\models\exists x\psi[\bar a]$. By elementarity $\mathcal A\models\exists x\psi[\bar a]$, so some $b\in A$ satisfies $\mathcal A\models\psi[\bar a,x:=b]$. Applying elementarity to the matrix and this enlarged tuple gives $\mathcal M\models\psi[\bar a,x:=b]$. This proves necessity, including existential sentences with no parameters. [F1, F2, F5]

1.2 Now assume the witness condition. For a term evaluated at a tuple from $A$, variable values and constant values coincide in the two structures. If its argument terms coincide, their values belong to $A$, and the restricted function gives the same output in both structures. Constructor induction therefore gives equality of all term values, with positive arity as required by the signature convention. Literal equality and relation restriction then give identical truth values for atomic formulas, with the positive arities in the signature. [F1, F2, F3, F4, F5]

1.3 Induct simultaneously over all parameter tuples for each formula. If $\theta$ has identical truth in both structures, $\neg\theta$ does too, since its truth is the negation of that same value. If $\theta,\eta$ each have identical truth, $\theta\land\eta$ does too, since it is true exactly when both are true. Restrict a given tuple to the required free variables when applying the induction hypothesis. [F2, F3, F5]

1.4 For $\exists x\psi$, if it holds in $\mathcal A$, choose its witness $b\in A$. The induction hypothesis for $\psi$ transfers its truth to $\mathcal M$, where $b$ is also a witness. Conversely, if it holds in $\mathcal M$, the assumed condition supplies $b\in A$ for which the matrix is true in $\mathcal M$. The induction hypothesis transfers the matrix to $\mathcal A$, giving the existential statement there. Updates at $x$ overwrite any earlier value, so the argument also covers a vacuous quantifier. [F2, F3, F5]

2.1 Steps 1.2–1.4 cover the primitive constructors equality, relations, negation, conjunction and existential quantification. All other connectives are their abbreviations. Thus every formula agrees on every tuple from $A$, which is exactly $\mathcal A\prec\mathcal M$. Together with step 1.1 this proves the equivalence. [F1, F3, step 1.1, step 1.2, step 1.3, step 1.4] ∎
