---
id: thm-global-field-additive-adele-quotient-discrete-cocompact
kind: theorem
title: "The global field is discrete and cocompact in its additive adeles"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-adelic-base-change-for-finite-separable-global-field-extensions
  - thm-additive-adele-quotient-discrete-cocompact-for-q-and-fq-t
  - thm-ag-separating-transcendence-basis-perfect-field
  - def-global-field
  - def-number-field
  - cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - cor-algebraic-extensions-of-perfect-fields-are-separable
  - def-quotient-group
  - def-quotient-topology
  - def-topological-group
  - def-axiom-of-choice
  - def-countable-choice
dependency_level: 7
proof_strategy: reduction
axiom_use: >-
  The result inherits AC and AC_omega from the finite-separable base-change
  theorem and the two base-field cases. The reduction itself uses no further
  choice.
provenance:
  statement: literature-derived
  proof: literature-derived
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "Chapter 18, §18.3, Corollary 18.3.4 and Theorem 18.3.5, printed pp.187–188."
    - title: "Andrew V. Sutherland, MIT 18.785 Number Theory I lecture notes, Fall 2021"
      url: "https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf"
      locator: "Lecture 25, Corollary 25.11 and Theorem 25.12, pp.7–8."

---

## Statement

Assume the Axiom of Choice and the Axiom of Countable Choice. For every number field or one-variable function field $F$ with exact finite constant field, the diagonal additive subgroup $F$ is discrete and closed in $\mathbb A_F^+$ and the quotient topological group $\mathbb A_F^+/F$ is compact. Discrete means that zero has an open neighborhood meeting the diagonal subgroup only at zero.

## Statement references

[[def-global-field|Number-field and function-field branches]]

[[thm-adelic-base-change-for-finite-separable-global-field-extensions|Finite-separable additive base change]]

[[thm-additive-adele-quotient-discrete-cocompact-for-q-and-fq-t|The two base-field cases]]

[Stein, Corollary 18.3.4 and Theorem 18.3.5](https://wstein.org/books/ant/ant.pdf)

[MIT 18.785 Lecture 25, Corollary 25.11 and Theorem 25.12](https://math.mit.edu/classes/18.785/2021fa/LectureNotes.pdf)

## Facts & Assumptions

**Given:** AC and AC_omega; a global field $F$; its additive adele group and diagonal embedding.

[A1] A number field is finite over $\mathbb Q$, and $\mathbb Q$ is perfect because it has characteristic zero; hence the extension is separable. Every one-variable function field over its exact finite field has a separating transcendence basis $t$, so it is finite separable over $\mathbb F_q(t)$. ([[def-global-field]], [[def-number-field]], [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]], [[cor-algebraic-extensions-of-perfect-fields-are-separable]], [[thm-ag-separating-transcendence-basis-perfect-field]])

[F1] For a finite separable extension $L/K$ of global fields, the natural map identifies $\mathbb A_L^+$ with a finite power of $\mathbb A_K^+$ and identifies the diagonal additive copy of $L$ with the corresponding finite power of $K$. ([[thm-adelic-base-change-for-finite-separable-global-field-extensions]])

[F2] The diagonal additive subgroup of $\mathbb Q$ in $\mathbb A_{\mathbb Q}^+$, and that of $\mathbb F_q(t)$ in $\mathbb A_{\mathbb F_q(t)}^+$, are discrete and closed with compact quotients. ([[thm-additive-adele-quotient-discrete-cocompact-for-q-and-fq-t]])

[F3] Quotienting a topological group by a subgroup uses the quotient topology; a topological isomorphism carrying one subgroup onto another induces a topological isomorphism of quotients. ([[def-quotient-group]], [[def-quotient-topology]], [[def-topological-group]])

## Proof


**Given:** The global field and hypotheses in the Statement.

1.1 If $F$ is a number field, set $K=\mathbb Q$; if $F$ is a function field, choose a separating transcendence basis $t$ and set $K=\mathbb F_q(t)$. By [A1], in either case $F/K$ is finite separable. [A1, given, choose]

2.1 Let $n=[F:K]$. By [F1] and [F3], the topological quotient $\mathbb A_F^+/F$ is isomorphic to the finite product $(\mathbb A_K^+/K)^n$: the adele isomorphism carries the diagonal subgroup onto $K^n$, and the quotient of a finite product by the product subgroup is the product of the quotients. [F1, F3, step 1.1, algebra]

3.1 By [F2], each base quotient is compact, so its finite product in step 2.1 is compact. The base diagonal is discrete and closed; a finite product of such subgroups is discrete and closed in the finite product adele group. Transporting these properties across the topological isomorphism in step 2.1 proves the claim for $F$. [F1, F2, F3, step 2.1, algebra] ∎

