---
id: thm-bpi-equivalent-to-propositional-compactness
kind: theorem
title: BPI is equivalent to arbitrary-set propositional compactness
status: draft
origin: pipeline
deps: [thm-bpi-equivalent-to-boolean-filter-extension, lem-finite-boolean-algebras-are-powersets-of-atoms]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, §3.3, p. 15; local finite-coordinate compactness proof"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Statement

Over ZF, BPI is equivalent to the following propositional compactness principle: for every set $P$ of propositional letters and every set $T$ of finite propositional formulas over $P$, if every finite subset of $T$ is satisfied by a valuation $P\to2$, then some valuation satisfies all of $T$. Formulas use the usual finite Boolean connectives and truth constants; $P$ may be empty.

## Facts & Assumptions

[F1] [[thm-bpi-equivalent-to-boolean-filter-extension]] gives the equivalence with proper Boolean filter extension.

[F2] [[lem-finite-boolean-algebras-are-powersets-of-atoms]] provides characters on a finite nontrivial Boolean algebra by choosing an atom.

## Proof

**Given:** ZF and the propositional syntax in the statement.

1.1 Assume BPI and finite satisfiability of $T$. The set $2^P$ is nonempty, with the constant-zero valuation as an explicit member. The subsets whose membership depends on finitely many coordinates form a Boolean algebra $A$: a union or intersection of two such sets depends on the union of their finite supports, and complement has the same support. The truth set $\llbracket\phi\rrbracket$ of any finite formula is in $A$, by recursion on its connectives. Finite satisfiability says every finite intersection of the truth sets of members of $T$ is nonempty. Their finite intersections and upward closure therefore form a proper Boolean filter in $A$, including $2^P$ from the empty intersection. [given, algebra]

1.2 Separately, assume propositional compactness and take a nontrivial Boolean algebra $B$. Use letters $p_b$ for $b\in B$ and the theory consisting of $p_1$, $\neg p_0$, and all equations $p_{\neg b}\leftrightarrow\neg p_b$, $p_{b\wedge c}\leftrightarrow(p_b\wedge p_c)$ and $p_{b\vee c}\leftrightarrow(p_b\vee p_c)$. Any finite fragment names finitely many Boolean elements. As in finite distributive expansion, the joins of all cells obtained by choosing each named element or its complement form a finite subalgebra containing them. It is nontrivial because it contains distinct $0,1$. By F2 an atom gives a character on that subalgebra, satisfying every equation in the fragment. Extend the letter valuation by zero outside that subalgebra. Thus the theory is finitely satisfiable. [F2, given, algebra]

2.1 Under BPI, F1 extends the filter of step 1.1 to an ultrafilter $U$. For $p\in P$, set $v(p)=1$ precisely when $\{w:w(p)=1\}\in U$. An ultrafilter decides complements: adjoining a missing element makes a filter improper, so an old element is disjoint from it, forcing its complement into the old filter. Together with finite meet closure, this gives $a\wedge b\in U$ exactly when both $a,b\in U$, and $a\vee b\in U$ exactly when at least one belongs to $U$. Recursion on formulas now proves $v(\phi)=1$ exactly when $\llbracket\phi\rrbracket\in U$, checking negation, conjunction and disjunction by these identities and both truth constants by properness. All truth sets from $T$ lie in $U$, so $v$ satisfies $T$. [F1, step 1.1, algebra]

3.1 A model of this propositional theory yields $h:B\to2$, $h(b)=v(p_b)$, preserving all Boolean operations and both bounds by the equations. Its zero fibre is a proper ideal; if $h(b\wedge c)=0$, the two values in $2$ cannot both be $1$, so one of $b,c$ lies in that ideal. Hence it is prime, proving BPI. Empty $P$ in the forward direction causes no difficulty: $2^P$ is a singleton, and finite satisfiability excludes the false truth set. Empty $T$ is satisfied by the constant-zero valuation. No infinite choice was used in the finite fragment argument. QED. [step 1.2, step 2.1, algebra]
