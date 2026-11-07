---
id: thm-number-field-infinitely-many-nonsplit-primes
kind: theorem
title: "A nontrivial solvable number-field extension has infinitely many nonsplit primes"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - thm-number-field-first-norm-index-inequality
  - lem-global-idele-norm-subgroup-is-open
  - thm-weak-approximation-for-inequivalent-absolute-values
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
      locator: "VII §4, Proposition 4.6"
    - title: "M. A. Sharifi, Algebraic Number Theory"
      url: "https://math.ucla.edu/~sharifi/notes/algnum-ch10.html"
      locator: "§10.7, nonsplitting-prime argument after Corollary 10.7.7"
verification: {}
---

## Statement

Assume the Axiom of Choice (AC), Countable Choice (CC), and Dependent Choice (DC). Let $L/K$ be a nontrivial finite Galois extension of number fields whose Galois group is solvable. A finite prime of $K$ is called split completely in $L$ if it is unramified and every completion above it equals the completion of $K$. Then infinitely many finite primes of $K$ do not split completely in $L$.

## Statement references

[[thm-number-field-first-norm-index-inequality]]

[[thm-weak-approximation-for-inequivalent-absolute-values]]

[Milne, *Class Field Theory*, VII §4](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Sharifi, *Algebraic Number Theory*, §10.7](https://math.ucla.edu/~sharifi/notes/algnum-ch10.html)

## Facts & Assumptions

**Given:** the Axiom of Choice (AC), Countable Choice (CC), and Dependent Choice (DC); a nontrivial finite solvable Galois extension $L/K$.

[F1] For a nontrivial cyclic extension $E/K$, the idèle-class norm quotient has index at least $[E:K]>1$. [[thm-number-field-first-norm-index-inequality]]

[F2] Local norm images are open, and the global idelic norm image is open. [[lem-global-idele-norm-subgroup-is-open]]

[F3] Weak approximation holds at every finite set of inequivalent nontrivial absolute values of a number field. [[thm-weak-approximation-for-inequivalent-absolute-values]]

[F4] Every nontrivial finite solvable group has a quotient of prime order: its derived series terminates, so its abelianization is nontrivial, and a nontrivial finite abelian group has a quotient of prime order.

[F5] At an archimedean place, the norm image is either the full multiplicative group or $\mathbb R_{>0}\le\mathbb R^\times$, hence is open; every element of that image has a local norm preimage.


[A1] The global norm-openness input [F2] assumes AC and DC; Countable Choice supplies the simultaneous local norm preimages at the countably many finite places in step 2.1. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]] [[lem-global-idele-norm-subgroup-is-open]]
## Proof

**Given:** The data above.

1.1 Suppose only finitely many primes fail to split completely in $L$. By [F4], choose a cyclic quotient of prime order and let $E/K$ be its corresponding subextension. Every prime that splits completely in $L$ splits completely in $E$, so only finitely many primes fail to split completely in $E$. Let $S$ contain those primes and the archimedean places. [F4, given, choose]

2.1 Fix an idele $a=(a_v)\in\mathbb A_K^\times$. For every $v\in S$, the local norm image $V_v$ is open by [F2] at finite places and by [F5] at archimedean places. Weak approximation [F3] gives $b\in K^\times$ lying in every open coset $a_vV_v$, so $b/a_v$ is a local norm for every $v\in S$. At each finite $v\notin S$, $E/K$ splits completely, so every element of $K_v^\times$ is a local norm. Since $a_v$ is a unit for almost all $v$, choose unit norm preimages at every place outside $S$; at split places one may put the desired local element in one factor and $1$ in the others. The resulting family is a unit at all but finitely many places, hence an idele. Thus $b/a$ is an idele norm, and every class in $C_K$ lies in $N_{E/K}C_E$. [F2, F3, F5, step 1.1, given, construct, A1]

3.1 Step 2.1 gives $C_K=N_{E/K}C_E$, contradicting [F1] because $[E:K]>1$. Therefore the assumed finite set cannot exist. [F1, step 2.1, contradiction] ∎
