---
id: thm-relativization-and-set-satisfaction
kind: theorem
title: "Relativization agrees with induced set satisfaction"
status: published
origin: pipeline
deps: ["def-relativization-to-a-definable-class", "thm-set-structure-satisfaction-recursion"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Weiss, An Introduction to Set Theory (2014) \u2014 chapter 1 pp.20\u201321; chapter 11 opening p.103."
      url: "https://www.math.toronto.edu/~weiss/Set_Theory.pdf"
---

## Statement

For every nonempty set $M$, let $\mathcal M=(M,\in\!\restriction M^2)$ be its membership structure. For every fixed pure membership formula $\phi$ and assignment $s:\omega\to M$, its set satisfaction agrees with the ambient evaluation of $\phi^M$ at those free-variable values and parameter $M$. No transitivity of $M$ is required. For a definable proper class the corresponding relativized expression is only a formula-by-formula schema.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] Fix a pure membership formula $\delta(z,\vec p)$ defining a class $C=\{z:\delta(z,\vec p)\}$. This is eliminable notation for a predicate, not a class object. For a fixed pure membership formula $\phi$, first rename its binders away from the parameter variables $\vec p$. Define $\phi^C$ by keeping atoms, commuting with Boolean constructors, and setting $$(\exists x\psi)^C=\exists x(\delta(x,\vec p)\land\psi^C),\qquad (\forall x\psi)^C=\forall x(\delta(x,\vec p)\to\psi^C).$$ Copies of $\delta(x,\vec p)$ are inserted by capture-avoiding substitution and fresh internal bound variables. In the set case $C=M$ use the predicate $z\in M$, with a fresh parameter variable for $M$. This operation is meaningful even for an empty class. It does not make the empty class an admitted structure: carriers of structures remain nonempty. For proper classes, evaluation of $\phi^C$ means a separate ambient formula for each fixed $\phi$, not a uniform universe satisfaction relation. Conventions and prerequisites: prop-capture-avoiding-substitution. ([[def-relativization-to-a-definable-class]])

[F2] For every set signature $L$ and $L$-structure $\mathcal M$ there is a unique set $\operatorname{Sat}_{\mathcal M}\subseteq\operatorname{Form}_L\times M^\omega$. Writing $\mathcal M,s\models\phi$ for membership, its clauses are $$\mathcal M,s\models u=v\iff\llbracket u\rrbracket_s=\llbracket v\rrbracket_s,$$ $$\mathcal M,s\models R(t_1,\ldots,t_n)\iff(\llbracket t_1\rrbracket_s,\ldots,\llbracket t_n\rrbracket_s)\in R^{\mathcal M},$$ $$\mathcal M,s\models\neg\phi\iff\text{not }\mathcal M,s\models\phi,$$ $$\mathcal M,s\models\phi\land\psi\iff(\mathcal M,s\models\phi\text{ and }\mathcal M,s\models\psi),$$ $$\mathcal M,s\models\exists x\phi\iff\exists b\in M\ (\mathcal M,s[x:=b]\models\phi).$$ The set is uniformly first-order definable from $L$ and the structure data. ([[thm-set-structure-satisfaction-recursion]])

## Proof

1.1 All terms are variables. Equality and membership between two values in $M$ are exactly the ambient equality and membership, because the structure restricts the ambient relation. Atoms are unchanged by relativization, giving the atomic equivalence. [F1, F2]

2.1 Negation and conjunction preserve the inductive equivalences. For $\exists x\psi$, the ambient guard $x\in M$ ranges over exactly the same witnesses $b\in M$ as the satisfaction clause, and the induction hypothesis applies at $s[x:=b]$. This proves both directions for quantifiers and hence all formulas. The parameter for $M$ cannot be captured because the construction uses fresh binders. [F1, F2, step 1.1]

3.1 The argument used only restriction of membership and equality, never transitivity. Replacing the set guard by a fixed defining formula for a class still makes a separate ambient formula at each syntactic step; it does not assemble a truth relation with proper-class assignment domain. [F1, step 2.1] ∎
