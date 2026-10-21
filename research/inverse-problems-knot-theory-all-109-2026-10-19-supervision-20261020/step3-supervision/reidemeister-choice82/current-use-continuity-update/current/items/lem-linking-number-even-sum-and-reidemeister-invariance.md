---
id: lem-linking-number-even-sum-and-reidemeister-invariance
kind: lemma
title: "The mixed crossing sum is even and defines linking number"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps: [def-oriented-crossing-sign-writhe-and-blackboard-framing,
       def-oriented-link-in-s-three-and-ambient-isotopy,
       def-regular-oriented-link-diagram,
       def-oriented-reidemeister-moves,
       thm-oriented-reidemeister-equivalence-theorem,
       def-countable-choice,
       def-mod-two-intersection-number,
       thm-mod-two-intersection-number-is-homotopy-invariant]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §3.3, pp. 26–29"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§3.3, Proposition 3.12 and its Reidemeister-move discussion; pp. 26–27"
    - title: "Mohamed Elhamdadi, Mustafa Hajij, and Kyle Istvan, Framed Knots, arXiv:1910.10257v6 (2020), §3, pp. 3–9"
      url: "https://arxiv.org/pdf/1910.10257v6"
      locator: "§3, Definition 3.1 and the proof following Figures 5–6; pp. 3–4"
---

## Statement

Assume the Axiom of Countable Choice. Let $D$ be a regular oriented diagram
of a two-component oriented link in $S^3$, with components $K_1,K_2$. Write
$$S(D):=\sum_{c\text{ between }K_1\text{ and }K_2}\operatorname{sgn}(c).$$
Then $S(D)$ is even, and
$$\operatorname{lk}_D(K_1,K_2):=\frac{S(D)}2\in\mathbb Z$$
is unchanged by planar isotopy and by each oriented Reidemeister move of types
I, II, and III. Thus it has the same value on any two regular diagrams of
ambient-isotopic oriented links. It is symmetric in $K_1,K_2$; reversing exactly
one component changes its sign, and reversing both components leaves it
unchanged.

## Statement references

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Crossing sign convention]]

[[def-oriented-reidemeister-moves|Oriented Reidemeister moves]]

[[def-countable-choice|Countable-choice hypothesis]]

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and a regular oriented diagram $D$ of
a two-component oriented link.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$ ([[def-countable-choice]]).

[F1] A regular diagram is the image of an oriented link under a projection whose only multiple points are finitely many transverse double points, with no triple points; its strands carry their orientations and over/under data ([[def-regular-oriented-link-diagram]]).

[F2] At a crossing $c$, $\operatorname{sgn}(c)$ is the sign of the determinant of the oriented overpassing and underpassing projected tangent vectors in the oriented projection plane ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

[F3] For compact boundaryless sources, the mod $2$ intersection number of two transverse maps is the cardinality of their fiber product with coefficients in $\mathbb Z/2\mathbb Z$; it is invariant under homotopy of either map when $\mathrm{AC}_\omega$ holds ([[def-mod-two-intersection-number]], [[thm-mod-two-intersection-number-is-homotopy-invariant]]).

[F4] Under $\mathrm{AC}_\omega$, two regular oriented diagrams represent the same oriented link if and only if a finite sequence of planar isotopies and oriented Reidemeister moves of types I, II, and III connects them ([[thm-oriented-reidemeister-equivalence-theorem]]).

[F5] A type-I move creates or deletes one self-crossing; a type-II move creates or deletes two crossings of opposite sign; a type-III move preserves the signs and over/under data of its three crossings ([[def-oriented-reidemeister-moves]]).

## Proof

1.1 Let $\gamma_1,\gamma_2:S^1\to\mathbb R^2$ be the projected component maps. They are transverse at every mixed crossing by [F1]. The map $F:S^1\times S^1\to\mathbb R^2\times\mathbb R^2$, $F(s,t)=(\gamma_1(s),\gamma_2(t))$, is transverse to the diagonal $\Delta=\{(x,x):x\in\mathbb R^2\}$, and its inverse image of $\Delta$ has one point for each mixed crossing because there are no triple points. Therefore $I_2(F,\Delta)$ is the number of mixed crossings modulo $2$. Homotope $\gamma_1$ linearly to a point $p$ with $\lVert p\rVert$ greater than $\max_t\lVert\gamma_2(t)\rVert$; the endpoint map misses $\Delta$. By [F3], the intersection number is $0$, so the number of mixed crossings is even. [A1, F1, F3, given, choose]

1.2 A type-I move contributes no mixed crossing because its new crossing is a self-crossing. Under type II, either both crossings are self-crossings or they are both mixed and have opposite signs by [F5], so $S(D)$ is unchanged. Under type III the three crossing signs and over/under data are preserved, so the mixed subset and its signed sum are unchanged. Planar isotopy creates no crossings and preserves the oriented crossing charts. Hence each move preserves $S(D)/2$. [F2, F5, algebra]

2.1 Each crossing sign is $+1$ or $-1$, both congruent to $1$ modulo $2$. Thus $S(D)$ has the same parity as the number of mixed crossings shown even in step 1.1; consequently $S(D)/2$ is an integer. Swapping component labels leaves each mixed crossing unchanged, while reversing one strand orientation negates its tangent vector and hence the determinant in [F2]; reversing both vectors preserves the determinant. This proves symmetry and the orientation rules. [F2, step 1.1, algebra]

3.1 If two regular diagrams represent the same oriented link, [F4] gives a finite sequence of the moves and planar isotopies checked in step 1.2. By step 2.1 their half-sums are integers; step 1.2 preserves these values at every move, so the endpoint linking numbers agree. Countable Choice is used through [F3] for homotopy-invariant mod $2$ intersection and through [F4] for the finite-move reduction; the determinant calculations and the move-by-move checks are choice-free. [A1, F3, F4, step 1.2, step 2.1] ∎


