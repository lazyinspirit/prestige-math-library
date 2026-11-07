---
dependency_level: 9
id: thm-effective-divisor-representatives-computation-correct
kind: theorem
title: "The divisor representative algorithm terminates and is complete"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - alg-effective-divisor-representatives-modulo-units
  - thm-bounded-s-unit-matrix-computation-correct
  - thm-number-field-integral-ideal-factorisation-in-zf
  - def-ideal-class-group-of-a-domain
  - def-axiom-of-choice
proof_strategy: direct
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Chapter2 integer matrix methods and Chapter8 unit groups"
      url: "https://wstein.org/books/ant/ant.pdf"
---

## Statement

Assume the Axiom of Choice. The effective divisor-representative algorithm terminates for every valid field input and every $a\in\mathcal O_K\setminus\{0\}$. Its output consists of algebraic-integer divisors of $a$, exactly one for every equivalence class under multiplication by ordinary units. In particular it is a certified finite procedure, rather than only a proof that finitely many such classes exist.

## Statement references

[[alg-effective-divisor-representatives-modulo-units]]

[Lenstra, Algorithms in Algebraic Number Theory, §5](https://arxiv.org/pdf/math/9204234)

## Facts & Assumptions

**Given:** Choice and the valid exact input of the divisor algorithm.

[A1] Choice is inherited from the certified class-group supplier. ([[def-axiom-of-choice]])

[F1] The bounded S-unit matrix procedure terminates and returns invariant-factor representatives giving an isomorphism with the entire ideal class group. ([[thm-bounded-s-unit-matrix-computation-correct]])

[F2] Nonzero ideals factor uniquely into prime ideals, and equality in the ideal class group means that their quotient is a principal fractional ideal. ([[thm-number-field-integral-ideal-factorisation-in-zf]], [[def-ideal-class-group-of-a-domain]])

[F3] The algorithm lists the ideal divisors, dovetails principal-ideal tests against all class representatives, and keeps generators exactly in the trivial class. ([[alg-effective-divisor-representatives-modulo-units]])

## Proof

1.1 By [F1], the finite products $\prod_i\mathfrak c_i^{e_i}$ with $0\le e_i<\delta_i$ have pairwise distinct classes and include every class; the zero coordinate tuple is the trivial class. For any ideal divisor $I$, there is therefore exactly one label $\mathfrak c$ such that $I\mathfrak c^{-1}$ is principal. There is a nonzero $z\in K$ with $(z)\mathfrak c=I$ by [F2], and its finite rational coordinates appear in the dovetail of [F3]. Thus that search terminates and identifies the correct class. Every test is decidable by rational lattice HNF equality, even if $\mathfrak c$ is fractional. [given, A1, F1, F2, F3, algebra]

1.2 The list of ideal divisors is finite and exact by unique prime ideal factorization. The rational primes that can occur divide $|N(a)|$; the finite prime-decomposition and bounded valuation procedures in [F3] list their exact factors. Each exponent bound is sufficient because $v_p(|N(a)|)=\sum_{\mathfrak p\mid p}f_{\mathfrak p}\operatorname{ord}_{\mathfrak p}(a)\ge\operatorname{ord}_{\mathfrak p}(a)$. Trial division, all HNF operations and every valuation loop terminate. There are consequently only finitely many searches of the type proved terminating in step1.1. [given, F2, F3, algebra]

2.1 If the algorithm retains $z$ for $I$, its class label is zero, hence $(z)=I$. Since $I\subseteq\mathcal O_K$, $z=z\cdot1$ belongs to $\mathcal O_K$. Since $I$ divides $(a)$, the containment $(a)\subseteq I=(z)$ gives $a/z\in\mathcal O_K$. Thus $z$ is an algebraic-integer divisor of $a$. Conversely any divisor $x$ of $a$ has principal integral ideal $(x)$ among the listed ideal divisors; its class is zero, so that ideal is retained with a generator $z$. Equality $(x)=(z)$ implies $x/z$ and $z/x$ are integral, hence $x/z\in\mathcal O_K^\times$. Therefore every unit class occurs. [step 1.1, step 1.2, F2, F3, algebra]

3.1 Two retained elements are associates exactly when their principal ideals agree. Each ideal divisor is enumerated once by its prime exponent tuple, so different retained ideals give different unit classes. This proves uniqueness and completeness, while step1.2 proves termination. If $a$ is a unit, $(a)=\mathcal O_K$ has the single ideal divisor $\mathcal O_K$, whose trivial-class search terminates and supplies the single unit class. Zero input is excluded explicitly. [step 2.1, step 1.2, F2, F3, algebra] ∎
