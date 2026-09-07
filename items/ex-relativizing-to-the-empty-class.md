---
id: ex-relativizing-to-the-empty-class
kind: example
title: "Relativization to the empty class"
status: draft
origin: pipeline
deps: ["def-relativization-to-a-definable-class"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 chapter 1 pp.20\u201321."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Example

For $C=\{z:z\ne z\}$, the relativization of $\exists x(x=x)$ is false and that of $\forall x(x=x)$ is true. The empty class is not an admitted structure.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] Fix a pure membership formula $\delta(z,\vec p)$ defining a class $C=\{z:\delta(z,\vec p)\}$. This is eliminable notation for a predicate, not a class object. For a fixed pure membership formula $\phi$, first rename its binders away from the parameter variables $\vec p$. Define $\phi^C$ by keeping atoms, commuting with Boolean constructors, and setting $$(\exists x\psi)^C=\exists x(\delta(x,\vec p)\land\psi^C),\qquad (\forall x\psi)^C=\forall x(\delta(x,\vec p)\to\psi^C).$$ Copies of $\delta(x,\vec p)$ are inserted by capture-avoiding substitution and fresh internal bound variables. In the set case $C=M$ use the predicate $z\in M$, with a fresh parameter variable for $M$. This operation is meaningful even for an empty class. It does not make the empty class an admitted structure: carriers of structures remain nonempty. For proper classes, evaluation of $\phi^C$ means a separate ambient formula for each fixed $\phi$, not a uniform universe satisfaction relation. Conventions and prerequisites: prop-capture-avoiding-substitution. ([[def-relativization-to-a-definable-class]])

## Verification

1.1 The existential relativization is $\exists x(x\ne x\land x=x)$. Its matrix is false at every set, so it has no witness. [F1]

2.1 The universal relativization is $\forall x(x\ne x\to x=x)$. Its antecedent is always false, so it is true. These computations concern guarded formulas; the nonempty-carrier convention remains in force. [F1] ∎

