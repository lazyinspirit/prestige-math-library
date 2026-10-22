---
id: thm-bmw-markov-trace-gives-dubrovnik-invariant
kind: theorem
title: The BMW Markov trace gives the Dubrovnik link invariant
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - def-bmw-algebra-with-fixed-kauffman-skein-convention
  - lem-bmw-markov-trace-stabilization
  - alg-kauffman-polynomial-from-bmw-braid-closure
  - thm-markovs-closed-braid-equivalence-theorem
  - thm-alexanders-closed-braid-theorem
  - def-markov-conjugation-and-stabilization-moves
  - def-closure-of-a-geometric-braid
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "Assumes AC only to invoke Alexander and Markov for all oriented links and braid representatives; the scalar trace and stabilization calculations are choice-free."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, §§2.3 and 5.1–5.5"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 6–8 and 33–50: closure trace, tangle basis, and BMW-to-tangle isomorphism"
    - title: "Joan S. Birman and Tara E. Brendle, Braids: A Survey, Handbook of Knot Theory chapter, Theorems 2 and 4"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
      locator: "Printed pp. 13–19: Alexander and Markov theorems for oriented links"
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§VI–VII"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
      locator: "PDF pp. 38–54/printed pp. 453–469: Dubrovnik/Kauffman conversion and link polynomial"
---

## Statement

Assume the Axiom of Choice. For every nonempty oriented link $K\subset S^3$ and every finite signed Artin braid word $\beta$ whose oriented closure represents $K$, the corrected BMW trace value
$$Q(\beta)=-(-1)^{c(\beta)}a^{-w(\beta)}d^{n-1}\tau_n(\beta),$$
where $n$ is the strand count, $c(\beta)$ is the number of closure components, and $w(\beta)$ is the determinant writhe, is independent of the braid representative. It equals the declared writhe-normalized Kauffman ambient-isotopy invariant of $K$ at $A=ia$, $Z=-iz$.

## Statement references

[[lem-bmw-markov-trace-stabilization|BMW closure trace and stabilization scalars]]

[[alg-kauffman-polynomial-from-bmw-braid-closure|Braid-closure computation]]

[[thm-markovs-closed-braid-equivalence-theorem|Markov equivalence of braid closures]]

[[thm-alexanders-closed-braid-theorem|Existence of closed-braid representatives]]

[[def-axiom-of-choice|Axiom of Choice]]

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

[Birman and Brendle, *Braids: A Survey*](https://www.math.columbia.edu/~jb/Handbook-21.pdf)

[Kauffman, *An Invariant of Regular Isotopy*](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

## Facts & Assumptions

**Given:** AC, a nonempty oriented link in $S^3$, and a finite signed Artin braid word whose closure represents it.

[A1] Assume the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] Every oriented link is equivalent to the closure of a finite geometric braid; AC is the stated hypothesis ([[thm-alexanders-closed-braid-theorem]]).

[F2] Two braids have equivalent oriented closures if and only if they are related by finitely many conjugations and positive or negative stabilizations/destabilizations; AC is the stated hypothesis ([[thm-markovs-closed-braid-equivalence-theorem]]).

[F3] The trace is cyclic, tower-compatible, and has stabilization factors $a d^{-1},a^{-1}d^{-1}$ for $g_n,g_n^{-1}$ ([[lem-bmw-markov-trace-stabilization]]).

[F4] The braid closure has one component for each cycle of its strand permutation; its determinant writhe is the signed exponent sum of its braid word ([[def-closure-of-a-geometric-braid]], [[alg-kauffman-polynomial-from-bmw-braid-closure]]).

[F5] The Markov moves are conjugation and the two signed stabilizations, with inverses allowed ([[def-markov-conjugation-and-stabilization-moves]]).

[F6] The algorithm's corrected trace expression is exactly the declared Kauffman value at $A=ia$, $Z=-iz$ ([[alg-kauffman-polynomial-from-bmw-braid-closure]]).

## Proof


1.1 Fix an oriented link $K$. By [F1], choose a finite signed braid word $\beta_0$ whose oriented closure represents $K$. This use of existence is valid under [A1], as required by [F1]. Define $Q(\beta)$ by the formula in the statement for every braid word with closure equivalent to $K$. [A1, F1, given, choose]

2.1 A conjugation $\beta\mapsto\gamma\beta\gamma^{-1}$ leaves the closure component count unchanged because the strand permutation is conjugated, and leaves writhe unchanged because the exponent sum of $\gamma$ cancels with that of $\gamma^{-1}$. Cyclicity in [F3] gives $\tau_n(\gamma\beta\gamma^{-1})=\tau_n(\beta)$. Thus $Q$ is unchanged by conjugation. [F3, F4, F5, step 1.1, algebra]

2.2 For positive stabilization $\beta'=\iota_n(\beta)\sigma_n$, the new transposition involving strand $n+1$ joins that new strand to the cycle containing strand $n$, so $c(\beta')=c(\beta)$. The exponent sum increases by one, hence $w(\beta')=w(\beta)+1$. By [F3], $\tau_{n+1}(\beta')=a d^{-1}\tau_n(\beta)$. Therefore $$Q(\beta')=-(-1)^c a^{-(w+1)}d^n\,a d^{-1}\tau_n(\beta)=Q(\beta).$$ For negative stabilization the cycle count is again unchanged, the writhe becomes $w-1$, and $\tau_{n+1}(\beta\sigma_n^{-1})=a^{-1}d^{-1}\tau_n(\beta)$; substituting gives $$-(-1)^c a^{-(w-1)}d^n a^{-1}d^{-1}\tau_n(\beta)=Q(\beta).$$ Thus both stabilizations and their inverse moves preserve $Q$. [F3, F4, F5, step 1.1, algebra]

3.1 By [F2], any two braid words whose oriented closures represent $K$ are Markov equivalent. Each move in a finite Markov sequence preserves $Q$ by steps 2.1 and 2.2, so $Q$ is independent of the braid representative. By [F6], this common value is the declared Kauffman value of $K$ at the stated substitution. AC is used only in [F1] and [F2]; the trace and move calculations use no choice principle. [A1, F1, F2, F3, F6, step 2.1, step 2.2] ∎
