---
id: thm-bmw-markov-trace-gives-dubrovnik-invariant
kind: theorem
title: The BMW Markov trace gives the Dubrovnik link invariant
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-bmw-algebra-with-fixed-kauffman-skein-convention
  - def-kauffman-regular-isotopy-and-dubrovnik-conventions
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-exponent-sum-of-a-braid
  - lem-bmw-markov-trace-stabilization
  - lem-bmw-presentation-tangle-evaluation-is-well-defined
  - lem-kauffman-dubrovnik-writhe-component-conversion
  - thm-markovs-closed-braid-equivalence-theorem
  - thm-alexanders-closed-braid-theorem
  - thm-oriented-reidemeister-equivalence-theorem
  - def-markov-conjugation-and-stabilization-moves
  - def-closure-of-a-geometric-braid
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "Assumes AC for Alexander and Markov and to obtain the ACω hypothesis of oriented Reidemeister equivalence; the scalar trace and local formula calculations are choice-free."
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

Here $\tau_n(\beta)$ denotes $\tau_n(b_\beta)$, where $b_\beta$ is obtained by replacing each letter $\sigma_i^{\pm1}$ by $g_i^{\pm1}$ in the same order.

## Statement references

[[lem-bmw-markov-trace-stabilization|BMW closure trace and stabilization scalars]]

[[lem-bmw-presentation-tangle-evaluation-is-well-defined|BMW generator images in the tangle algebra]]

[[def-kauffman-regular-isotopy-and-dubrovnik-conventions|Dubrovnik and Kauffman conventions]]

[[lem-kauffman-dubrovnik-writhe-component-conversion|Writhe-component conversion and Reidemeister invariance]]

[[thm-markovs-closed-braid-equivalence-theorem|Markov equivalence of braid closures]]

[[thm-alexanders-closed-braid-theorem|Existence of closed-braid representatives]]

[[thm-oriented-reidemeister-equivalence-theorem|Oriented Reidemeister equivalence]]

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

[F4] The closure has one component for each cycle of its strand permutation; the Markov-move convention identifies each Artin generator with the positive geometric half twist, which contributes determinant sign $+1$, and its inverse contributes $-1$. The word exponent sum is the signed sum of these generator exponents ([[def-closure-of-a-geometric-braid]], [[def-markov-conjugation-and-stabilization-moves]], [[def-oriented-crossing-sign-writhe-and-blackboard-framing]], [[def-exponent-sum-of-a-braid]]).

[F5] The Markov moves are conjugation and the two signed stabilizations, with inverses allowed ([[def-markov-conjugation-and-stabilization-moves]]).

[F6] The scalar Dubrovnik value on a nonempty diagram is $D=P/d$, and
$D_K(a,z)=-i^{-w(K)}(-1)^{c(K)}L_K(ia,-iz)$ while
$F_K(A,Z)=A^{-w(K)}L_K(A,Z)$ ([[def-kauffman-regular-isotopy-and-dubrovnik-conventions]], [[lem-kauffman-dubrovnik-writhe-component-conversion]]).

[F7] The BMW-to-tangle homomorphism sends each $g_i^{\pm1}$ to the corresponding positive or negative Artin crossing ([[lem-bmw-presentation-tangle-evaluation-is-well-defined]]).

[F8] AC implies AC$_\omega$ by restriction to countable indexed families, and under AC$_\omega$ equivalent oriented link diagrams are connected by finitely many planar isotopies and oriented Reidemeister moves ([[def-axiom-of-choice]], [[thm-oriented-reidemeister-equivalence-theorem]]).

## Proof


1.1 Fix an oriented link $K$. By [F1], choose a finite signed braid word $\beta_0$ whose oriented closure represents $K$. This use of existence is valid under [A1], as required by [F1]. Define $Q(\beta)$ by the formula in the statement for every braid word with closure equivalent to $K$. [A1, F1, given, choose]

2.1 A conjugation $\beta\mapsto\gamma\beta\gamma^{-1}$ leaves the closure component count unchanged because the strand permutation is conjugated, and leaves writhe unchanged because the exponent sum of $\gamma$ cancels with that of $\gamma^{-1}$. Cyclicity in [F3] gives $\tau_n(\gamma\beta\gamma^{-1})=\tau_n(\beta)$. Thus $Q$ is unchanged by conjugation. [F3, F4, F5, step 1.1, algebra]

2.2 For positive stabilization $\beta'=\iota_n(\beta)\sigma_n$, the new transposition involving strand $n+1$ joins that new strand to the cycle containing strand $n$, so $c(\beta')=c(\beta)$. The exponent sum increases by one, hence $w(\beta')=w(\beta)+1$. By [F3], $\tau_{n+1}(\beta')=a d^{-1}\tau_n(\beta)$. Therefore $$Q(\beta')=-(-1)^c a^{-(w+1)}d^n\,a d^{-1}\tau_n(\beta)=Q(\beta).$$ For negative stabilization the cycle count is again unchanged, the writhe becomes $w-1$, and $\tau_{n+1}(\beta\sigma_n^{-1})=a^{-1}d^{-1}\tau_n(\beta)$; substituting gives $$-(-1)^c a^{-(w-1)}d^n a^{-1}d^{-1}\tau_n(\beta)=Q(\beta).$$ Thus both stabilizations and their inverse moves preserve $Q$. [F3, F4, F5, step 1.1, algebra]

3.1 By [F2], any two braid words whose oriented closures represent $K$ are Markov equivalent. Each move in a finite Markov sequence preserves $Q$ by steps 2.1 and 2.2, so $Q$ is independent of the braid representative. For a representative $\beta$, [F7] identifies $\widehat{\Phi_n(b_\beta)}$ with its oriented closure diagram. By [F3], $\tau_n(\beta)=d^{-n}P(\widehat{\Phi_n(b_\beta)})$. Hence
$$d^{n-1}\tau_n(\beta)=d^{-1}P(\widehat{\Phi_n(b_\beta)})=D_{\widehat{\beta}}(a,z)$$
by [F6]. Applying the conversion in [F6] gives
$$F_{\widehat{\beta}}(ia,-iz)=(ia)^{-w}L_{\widehat{\beta}}(ia,-iz)=-(-1)^c a^{-w}D_{\widehat{\beta}}(a,z)=Q(\beta).$$
The scalar conversion lemma proves that $F$ is unchanged by each oriented Reidemeister move; [F8] therefore identifies this fixed-diagram value with the declared ambient-isotopy value of $K$. AC is used in [F1], [F2], and [F8]; the trace and local formula calculations are choice-free. [A1, F1, F2, F3, F6, F7, F8, step 2.1, step 2.2] ∎
