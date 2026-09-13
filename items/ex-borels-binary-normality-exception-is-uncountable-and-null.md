---
id: ex-borels-binary-normality-exception-is-uncountable-and-null
kind: example
title: Borel's exceptional set can be uncountable and null
status: draft
origin: pipeline
deps: [thm-borels-normal-number-theorem, def-canonical-base-b-expansion-and-normality, lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints, thm-continuity-from-above-for-measures, thm-lebesgue-measure-of-a-box-of-every-kind, thm-cantor-powerset, lem-countable-iff-surjection-from-n, def-countable-choice]
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§11.2, printed pp. 99–101"
proof_strategy: constructive
---

## Example

Assume the Axiom of Countable Choice.  Let $C$ be the set of points in
$[0,1)$ whose canonical binary expansions have digit zero at every even
position.  Then $C$ is uncountable and Lebesgue null, and no member of $C$ is
normal in base two.

## Facts & Assumptions

**Given:** Countable choice and the set $C$ just defined.

[F1] Canonical digit strings are not eventually one, and length-$q$ digit cylinders are half-open dyadic intervals ([[def-canonical-base-b-expansion-and-normality]], [[lem-base-b-expansion-cylinders-match-orbits-away-from-terminating-endpoints]]).

[F2] A decreasing sequence of finite-measure sets has intersection measure equal to the infimum of its measures ([[thm-continuity-from-above-for-measures]]), and half-open intervals have their stated lengths ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F3] There is no surjection from $\mathbb N$ onto its power set ([[thm-cantor-powerset]]); a nonempty set is countable exactly when it is a surjective image of $\mathbb N$ ([[lem-countable-iff-surjection-from-n]]).

[F4] Almost every point is normal, but this theorem asserts nullity rather than countability of the exceptional set ([[thm-borels-normal-number-theorem]]).

## Verification

**Proof technique:** constructive.

1.1 Let $C_n$ require only digits $2,4,\ldots,2n$ to be zero.  Prescribing the first $2n$ digits leaves $n$ odd-position digits free, so [F1] writes $C_n$ as a disjoint union of $2^n$ half-open cylinders, each of length $2^{-2n}$. Consequently $\lambda(C_n)=2^{-n}$. [F1, F2, algebra]

1.2 For $A\subseteq\mathbb N_{>0}$, form the binary string whose digit at position $2r-1$ is $1$ exactly when $r\in A$, and whose even-position digits are all $0$.  Its series $x_A=\sum_{r\in A}2^{-(2r-1)}$ lies in $[0,1)$. After any place its tail has a forced zero, so the tail value is strictly less than $1$; the greedy recurrence therefore recovers exactly this string.  Thus $A\mapsto x_A$ maps $\mathcal P(\mathbb N_{>0})$ into $C$. [F1, construct]

1.3 Every string in $C$ has every even digit zero, so two adjacent digits can never both equal one.  The word $11$ has frequency $0$, not the required $1/4$; hence no member of $C$ is normal in base two. [F1, algebra]

2.1 The sets $C_n$ decrease and $C=\bigcap_{n\geq1}C_n$.  Since $\lambda(C_1)<\infty$, continuity from above gives $\lambda(C)=\inf_n2^{-n}=0$. [F2, step 1.1]

2.2 Different subsets have different first differing odd digit, so canonical uniqueness makes the map injective.  Conversely, the set of odd positions at which a point of $C$ has digit one recovers it, so the map is a bijection onto $C$. [F1, step 1.2]

3.1 If $C$ were countable, [F3] would give a surjection $\mathbb N\to C$. Composing it with the inverse bijection in step 2.2 and the explicit shift bijection between $\mathbb N$ and $\mathbb N_{>0}$ would give a surjection $\mathbb N_{>0}\to\mathcal P(\mathbb N_{>0})$, contradicting Cantor's theorem. Hence $C$ is uncountable. [F3, step 2.2]

4.1 Steps 1.3, 2.1, and 3.1 give an uncountable null subset of the exceptional set in [F4].  Countable choice is inherited from the Lebesgue/cylinder suppliers; the family and the coding map are explicit. [F4, step 2.1, step 3.1, step 1.3, discharge-construct] ∎
